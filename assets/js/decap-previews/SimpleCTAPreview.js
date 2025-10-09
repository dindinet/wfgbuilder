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
    h,
    // New props from config.yml
    offertextsize,
    offertextcolor,
    offertextoutlinecolor,
    taglinetextsize,
    taglinetextcolor
  } = props;

  const ctaStyle = {
    backgroundColor: bgcolor,
    paddingBlock: bgimage ? '' : '4cqw',
    container: 'cta / inline-size'
  };

  const bgImageUrl = bgimage ? getAsset(bgimage).toString() : null;

  // Styles for the offer text (h2)
  const offertextStyle = {
    fontSize: offertextsize ? `${offertextsize}cqw` : null,
    color: offertextcolor,
    WebkitTextStroke: offertextsize && offertextoutlinecolor ? `calc(${offertextsize}cqw / 48) ${offertextoutlinecolor}` : null
  };

  // Styles for the secondary texts (h3)
  const secondaryTextStyle = {
    fontSize: taglinetextsize ? `${taglinetextsize}cqw` : null,
    color: taglinetextcolor
  };

  return h('section', { class: 'section' },
    h('div', { class: `container container--${width}` },
      h('div', { class: 'wfg-bg-cta', style: ctaStyle },
        bgImageUrl && h('img', { src: bgImageUrl, class: 'bg-image' }),
        h('div', { class: 'content' },
          h('h3', { style: secondaryTextStyle }, tagline),
          h('h2', { style: offertextStyle }, offertext),
          h('h3', { style: secondaryTextStyle }, description),
          h('div', { class: 'actions' },
            actions.map(action =>
              h('a', { href: action.target },
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
    )
  );
};
