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
          {{ .Content | safeJS }}
        {{- end }}
        // --- Main Page Preview Component ---
        const PagePreview = ({ entry, getAsset, getCollection, widgetFor }) => {
            const sections = entry.getIn(["data", "sections"]);
            if (!sections) {
                return widgetFor("body");
            }
            return h("div", { class: "page-preview" },
                sections.map((section, index) => {
                    const type = section.get("type");
                    const props = { ...section.toJS(), getAsset, h, key: type };
                    switch (type) {
                      {{- range $previewFiles }}
                        case "{{ replace .Name "/js/decap-previews/" "" | strings.TrimSuffix "Preview.js"  }}":
                            return h({{ replace .Name "/js/decap-previews/" "" | strings.TrimSuffix "Preview.js" }}Preview, props);
                      {{- end }}
                        default:
                            return h("div", null, `Unknown section type: ${type}`);
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
