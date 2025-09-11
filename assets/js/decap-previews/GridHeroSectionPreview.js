const GridHeroSectionPreview = (props) => {
    const {
        bgimage,
        announcement,
        announcementbtntxt,
        title,
        subtitle,
        actions,
        getAsset,
        h
    } = props;

    const bgimageUrl = bgimage ? getAsset(bgimage).toString() : '';

    return h('div', { className: 'section--hero-centered' },
        bgimageUrl && h('img', { id: 'bgimage', src: bgimageUrl, alt: '', className: 'bgimage' }),
        h('div', { id: 'herotext' },
            announcement && h('div', { style: { marginBottom: '1rem' } },
                h('div', { className: 'funding-announcement' },
                    announcement,
                    h('a', { href: '#', style: { position: 'relative' } },
                        h('span', { 'aria-hidden': 'true', className: 'absolute-inset-0' }),
                        announcementbtntxt,
                        h('span', { 'aria-hidden': 'true' }, ' →')
                    )
                )
            ),
            title && h('h1', { className: 'section-title' }, title),
            subtitle && h('p', { className: 'section-subtitle' }, subtitle),
            actions && h('div', { className: 'banner-actions btn-group' },
                actions?.map(action =>
                    h('a', { href: action.url, className: `menu-link text-xs btn btn-outline ${action.style}` }, action.label)
                )
            )
        )
    );
};

//export default GridHeroSectionPreview;
