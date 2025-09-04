const FeaturesSectionPreview = (props) => {
    const { title, features, getAsset, h } = props;
    return h('div', { className: 'features-section' },
        h('div', { className: 'container' },
            h('h2', null, title),
            h('div', { className: 'features' },
                features?.map(feature => {
                    const imageUrl = getAsset(feature.image);
                    return h('div', { className: 'feature' },
                        imageUrl && h('div', { className: 'feature-image' },
                            h('img', { src: imageUrl.toString(), alt: feature.image_alt })
                        ),
                        h('div', { className: 'feature-content' },
                            h('h3', null, feature.title),
                            h('p', null, feature.content),
                            h('div', { className: 'actions' },
                                feature.actions?.map(action =>
                                    h('a', { href: action.url, className: `button ${action.style}` }, action.label)
                                )
                            )
                        )
                    );
                })
            )
        )
    );
};