const FullWidthHeadingSectionPreview = (props) => {
    const {
        title,
        titlecolour,
        subtitle,
        subtitleposition,
        subtitlecolour,
        h
    } = props;

    const subtitleElement = subtitle ? h('h2', {
        className: 'text-highlight',
        style: { color: subtitlecolour || '' }
    }, subtitle) : null;

    const titleElement = title ? h('h1', {
        style: { color: titlecolour || '' }
    }, title) : null;

    const elements = subtitleposition === 'above'
        ? [subtitleElement, titleElement]
        : [titleElement, subtitleElement];

    return h('section', { id: 'headings' },
        h('div', { className: 'full-width' },
            ...elements.filter(Boolean) // Filter out null elements
        )
    );
};
