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

        const PostPreview = (props) => {
            const { entry, getAsset, widgetFor } = props;
            const title = entry.getIn(['data', 'title']);
            const image = getAsset(entry.getIn(['data', 'image']));
            const image_alt = getAsset(entry.getIn(['data', 'image_alt']));
            const author = entry.getIn(['data', 'author']);
            const categories = entry.getIn(['data', 'categories']);
            const date = entry.getIn(['data', 'date']);
            const body = widgetFor('body');

            return h('div', { className: 'post-preview kitandpup' },
                h('h1', null, title),
                h('div', { className: 'post-meta' },
                    h('span', { className: 'date' }, date && new Date(date).toLocaleDateString()),
                    h('span', { className: 'author' }, author),
                    h('span', { className: 'categories' }, categories?.join(', '))
                ),
                image && h('img', { src: image.toString(), alt: image_alt }),
                h('div', { className: 'post-body' }, body)
            );
        };
        CMS.registerPreviewTemplate("posts", PostPreview);
        CMS.registerPreviewStyle("{{ absURL "" }}css/wfg.min.css");
    };

    check();
};
window.addEventListener('DOMContentLoaded', run);
