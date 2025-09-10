{{- $previewFiles := resources.Match "js/decap-previews/*.js" -}}
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
        
        // --- Main Page Preview Component ---
        const PagePreview = ({ entry, getAsset, getCollection, widgetFor }) => {
            const [posts, setPosts] = React.useState([]);
            const [loadingPosts, setLoadingPosts] = React.useState(true);

            React.useEffect(() => {
                const blogFeedSection = entry.getIn(["data", "sections"])?.find(
                    section => section.get("type") === "blog-feed"
                );

                const needsPosts = !!blogFeedSection;
                const recentCount = blogFeedSection?.get("recent_count") || 6;

                if (needsPosts && getCollection) {
                    const postsCollection = getCollection('posts');
                    if (postsCollection && postsCollection.length > 0) {
                        const processedPosts = postsCollection
                            .filter(post => post.data && !post.data.draft)
                            .sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
                            .slice(0, recentCount)
                            .map(post => ({
                                title: post.data.title,
                                date: new Date(post.data.date).toLocaleDateString(),
                                summary: post.data.summary || post.data.excerpt || '',
                                slug: post.slug,
                            }));
                        setPosts(processedPosts);
                    }
                }
                setLoadingPosts(false);
            }, [entry, getCollection]);

            const sections = entry.getIn(["data", "sections"]);
            if (!sections) {
                return widgetFor("body");
            }
            
            return h("div", { className: "page-preview" },
                sections.map((section, index) => {
                    const type = section.get("type");
                    const props = { 
                        ...section.toJS(), 
                        getAsset, 
                        h, 
                        posts,
                        loadingPosts,
                        key: index 
                    };
                    
                    switch (type) {
                    {{- range $previewFiles }}
                        {{- $componentName := replace .Name "js/decap-previews/" "" | strings.TrimSuffix "Preview.js" }}
                        {{- $kebabCase := $componentName | replaceRE "([A-Z])" "-$1" | lower | strings.TrimPrefix "-" }}
                        case "{{ $kebabCase }}":
                            return h({{ $componentName }}Preview, props);
                    {{- end }}
                        default:
                            return h("div", { key: index }, `Unknown section type: ${type}`);
                    }
                })
            );
        };
        
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
    };

    check();
};

window.addEventListener('DOMContentLoaded', run);