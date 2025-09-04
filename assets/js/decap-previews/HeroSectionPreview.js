const HeroSectionPreview = (props) => {
    const { title, subtitle, image, image_alt, align, actions, background, getAsset, h } = props;
    const imageUrl = getAsset(image);
    const backgroundImageUrl = getAsset(background?.background_image);

    return h('div', { className: 'hero-section' },
        h('div', {
            className: 'background-container',
            style: {
                backgroundColor: background?.background_color,
                backgroundImage: `url(${backgroundImageUrl})`,
                opacity: background?.background_image_opacity / 100,
            },
        }),
        h('div', { className: 'container' },
            h('div', { className: `hero-section-content align-${align}` },
                h('h1', null, title),
                h('p', null, subtitle),
                h('div', { className: 'actions' },
                    actions?.map(action =>
                        h('a', { href: action.url, className: `button ${action.style}` }, action.label)
                    )
                )
            ),
            imageUrl && h('div', { className: 'hero-section-image' },
                h('img', { src: imageUrl.toString(), alt: image_alt })
            )
        )
    );
};

export default HeroSectionPreview;