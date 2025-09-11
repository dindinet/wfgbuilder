const CtaSectionPreview = (props) => {
    const { title, subtitle, actions, has_background, background_color, h } = props;
    return h('div', {
        className: 'cta-section',
        style: {
            backgroundColor: has_background ? background_color : 'transparent',
        },
    },
        h('div', { className: 'container' },
            h('h2', null, title),
            h('p', null, subtitle),
            h('div', { className: 'actions' },
                actions?.map(action =>
                    h('a', { href: action.url, className: `button ${action.style}` }, action.label)
                )
            )
        )
    );
};

//export default CtaSectionPreview;