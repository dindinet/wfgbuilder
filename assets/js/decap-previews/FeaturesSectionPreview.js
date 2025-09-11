const FeaturesSectionPreview = (props) => {
    const { title, features, getAsset, h } = props;

    return h('section', { className: 'section-container--xl', style: { backgroundColor: '#f9fafb' } },
        title && h('div', { className: 'container container--wide text-center' },
            h('h2', { className: 'section-title' }, title)
        ),
        h('div', { className: 'container container--wide' },
            features?.map(feature => {
                const gridClasses = ['grid', 'grid-cols-auto-fit-sm', 'grid-gap-xl'];
                if (feature.align === 'center') gridClasses.push('text-center');
                if (feature.align === 'right') gridClasses.push('text-right');

                const imageUrl = feature.image ? getAsset(feature.image) : null;

                const imageDivClasses = ['my-lg'];
                if (feature.image_position === 'right') imageDivClasses.push('media-right');

                return h('div', { className: gridClasses.join(' ') },
                    imageUrl && h('div', { className: imageDivClasses.join(' ') },
                        h('img', {
                            src: imageUrl.toString(),
                            alt: feature.image_alt,
                            className: 'responsive-img'
                        })
                    ),
                    h('div', { className: 'section__body cell' },
                        feature.title && (
                            title ?
                            h('h3', { className: 'section-title' }, feature.title) :
                            h('h2', { className: 'section-title' }, feature.title)
                        ),
                        feature.content && h('div', { className: 'section__copy' },
                            feature.content
                        ),
                        feature.actions && h('div', { className: 'section__actions btn-group' },
                            feature.actions.map(action =>
                                h('a', { href: action.url, className: 'button' }, action.label)
                            )
                        )
                    )
                );
            })
        )
    );
};