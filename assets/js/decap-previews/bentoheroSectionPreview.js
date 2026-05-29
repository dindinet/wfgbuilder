const bentoheroSectionPreview = (props) => {
  const { bento_cards, h } = props;
  const cards = Array.isArray(bento_cards) ? bento_cards : [];
  const sizeClasses = ['bento-card--large', 'bento-card--medium', 'bento-card--small', 'bento-card--small'];
  return h('section', { className: 'section-bentohero' },
    h('div', { className: 'bentohero-grid' },
      cards.map((card, index) => {
        const sizeClass = sizeClasses[index] || 'bento-card--small';
        return h('div', { key: index, className: 'bento-card ' + sizeClass },
          h('div', { className: 'bento-card__header' },
            h('span', { className: 'bento-card__label' }, card.label || '')
          ),
          h('h2', { className: 'bento-card__title' }, card.title || '')
        );
      })
    )
  );
};