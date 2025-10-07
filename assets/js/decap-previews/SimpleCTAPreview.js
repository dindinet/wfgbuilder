const SimpleCTAPreview = (props) => {
  const {
    width = 'flush',
    tagline,
    offertext,
    description,
    bgcolor,
    bgimage,
    actions = [],
    getAsset,
    h
  } = props;

  const ctaStyle = {
    backgroundColor: bgcolor,
    paddingBlock: bgimage ? '' : '4cqw'
  };

  const bgImageUrl = bgimage ? getAsset(bgimage).toString() : null;

  return h('section', { class: 'section' },
    h('div', { class: `container container--${width}` },
      h('div', { class: 'wfg-bg-cta', style: ctaStyle },
        bgImageUrl && h('img', { src: bgImageUrl, class: 'bg-image' }),
        h('div', { class: 'content' },
          h('h3', {}, tagline),
          h('h2', {}, offertext),
          h('h3', {}, description),
          h('div', { class: 'actions' },
            actions.map(action =>
              h('button', {
                style: {
                  color: action.textcolor,
                  backgroundColor: action.bgcolor
                }
              }, action.text)
            )
          )
        )
      )
    )
  );
};