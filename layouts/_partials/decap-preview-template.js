{{- $previewFiles := resources.Match "js/decap-previews/*.js" -}}
//import CMS from 'decap-cms-app';
//const h = CMS.h;
const run = () => {
    const check = () => {
        if (window.CMS && window.h) {
            initPreviews();
        } else {
            setTimeout(check, 100);
        }
    };

    const initPreviews = () => {
        const CMS = window.CMS;
        const h = window.h;
        // --- Child Preview Components ---
        {{- range $previewFiles }}
          {{ .Content | safeHTML }}
        {{- end }}

        const previewComponents = {
        {{- range $previewFiles }}
          "{{ replace .Name "/js/decap-previews/" "" | strings.TrimSuffix "Preview.js"  }}": {{ replace .Name "/js/decap-previews/" "" | strings.TrimSuffix "Preview.js" }}Preview,
        {{- end }}
        };

        // --- Main Page Preview Component ---
        const PagePreview = createClass({
            getInitialState: function() {
                return { collections: {}, isLoading: true };
            },

            componentDidMount: function() {
                this.fetchCollections();
            },

            componentDidUpdate: function(prevProps) {
                if (prevProps.entry !== this.props.entry) {
                    this.fetchCollections();
                }
            },

            fetchCollections: function() {
                const { entry } = this.props;
                const sections = entry.getIn(['data', 'sections']);
                if (!sections) {
                    this.setState({ isLoading: false });
                    return;
                }

                const sectionTypes = sections.map(s => s.get('type'));
                const collectionsToFetch = new Set();

                sectionTypes.forEach(type => {
                    const component = previewComponents[type];
                    if (component && component.needs) {
                        component.needs.forEach(coll => collectionsToFetch.add(coll));
                    }
                });

                if (collectionsToFetch.size === 0) {
                    this.setState({ isLoading: false });
                    return;
                }

                const fetchPromises = Array.from(collectionsToFetch).map(coll =>
                    this.props.getCollection(coll).then(data => ({ name: coll, data: data.map(d => d.toJS()) }))
                );

                Promise.all(fetchPromises).then(fetchedCollections => {
                    const collections = fetchedCollections.reduce((acc, curr) => {
                        acc[curr.name] = curr.data;
                        return acc;
                    }, {});
                    this.setState({ collections, isLoading: false });
                }).catch(error => {
                    console.error("Error fetching collections:", error);
                    this.setState({ isLoading: false });
                });
            },

            render: function() {
                const { entry, getAsset, widgetFor } = this.props;
                const { collections, isLoading } = this.state;

                const sections = entry.getIn(["data", "sections"]);
                if (!sections) {
                    return widgetFor("body");
                }

                return h("div", { class: "page-preview" },
                    sections.map((section) => {
                        const type = section.get("type");
                        const component = previewComponents[type];

                        if (!component) {
                            return h("div", null, `Unknown section type: ${type}`);
                        }
                        
                        const props = {
                            ...section.toJS(),
                            getAsset,
                            h,
                            key: type,
                            collections,
                            isLoading
                        };

                        return h(component, props);
                    })
                );
            }
        });
        CMS.registerPreviewTemplate("advanced", PagePreview);

        const PostPreview = createClass({
            getInitialState: function() {
                return { author: null, isLoading: true };
            },

            componentDidMount: function() {
                this.fetchAuthor();
            },

            componentDidUpdate: function(prevProps) {
                if (prevProps.entry !== this.props.entry) {
                    this.fetchAuthor();
                }
            },

            fetchAuthor: function() {
                const { entry, getCollection } = this.props;
                const authorSlug = entry.getIn(['data', 'author']);
                if (!authorSlug) {
                    this.setState({ isLoading: false, author: null });
                    return;
                }

                getCollection('team').then(collection => {
                    const authorEntry = collection.find(item => item.get('slug') === authorSlug);
                    const authorData = authorEntry ? authorEntry.get('data').toJS() : null;
                    this.setState({ author: authorData, isLoading: false });
                }).catch(error => {
                    console.error("Error fetching team collection:", error);
                    this.setState({ isLoading: false });
                });
            },

            render: function() {
                const { entry, getAsset, widgetFor } = this.props;
                const { author, isLoading } = this.state;

                const title = entry.getIn(['data', 'title']);
                const subtitle = entry.getIn(['data', 'subtitle']);
                const image = getAsset(entry.getIn(['data', 'image']));
                const image_alt = entry.getIn(['data', 'image_alt']);
                const categories = entry.getIn(['data', 'categories']);
                const date = entry.getIn(['data', 'date']);
                const tags = entry.getIn(['data', 'tags']);
                const body = widgetFor('body');

                const formattedDate = date ? new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '';
                const dateTime = date ? new Date(date).toISOString().slice(0, 16).replace('T', ' ') : '';

                let authorDisplay = null;
                if (isLoading) {
                    authorDisplay = h('span', { className: 'post-author' }, ' by loading...');
                } else if (author) {
                    const authorName = `${author.first_name} ${author.last_name}`;
                    if (author.link) {
                        authorDisplay = h('span', { className: 'post-author' }, ' by ', h('a', { href: author.link }, authorName));
                    } else {
                        authorDisplay = h('span', { className: 'post-author' }, ' by ', authorName);
                    }
                } else if (entry.getIn(['data', 'author'])) {
                    // Fallback to slug if author not found
                    authorDisplay = h('span', { className: 'post-author' }, ' by ', entry.getIn(['data', 'author']));
                }

                return h('article', { className: 'post' },
                    h('div', { className: 'container container--wide' },
                        image && h('div', { className: 'post-featured-image' },
                            h('img', { src: image.toString(), alt: image_alt, className: 'responsive-img' })
                        )
                    ),
                    h('div', { className: 'container container--narrow' },
                        h('header', { className: 'post-header' },
                            categories && h('div', { className: 'post-meta' },
                                categories.toJS().join(', ')
                            ),
                            h('h1', { className: 'post-title mb-0' }, title),
                            h('h2', { className: 'post-subtitle mt-0' }, subtitle),
                            h('div', { className: 'post-meta' },
                                h('span', null, 'On ', h('time', { dateTime: dateTime }, formattedDate)),
                                authorDisplay
                            )
                        ),
                        h('div', { className: 'post-layout' }, body),
                        tags && h('footer', { className: 'post-tags' },
                            tags.toJS().join(', ')
                        )
                    )
                );
            }
        });
        CMS.registerPreviewTemplate("posts", PostPreview);
        CMS.registerPreviewStyle("{{ absURL "" }}css/wfg.min.css");
    };

    check();
};
window.addEventListener('DOMContentLoaded', run);
