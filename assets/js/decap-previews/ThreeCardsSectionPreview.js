const ThreeCardsSectionPreview = (props) => {
  const { cards, getAsset, h } = props;
  return h('section', { className: 'section-three-cards' },
    h('div', { className: 'three-cards__grid' },
      (cards || []).map((card, index) => {
        const imageSrc = card.image ? getAsset(card.image).toString() : '';
        return h('article', { key: index, className: 'three-cards__card' },
          h('div', { className: 'three-cards__image-wrapper' },
            imageSrc
              ? h('img', { src: imageSrc, alt: card.image_alt || '', className: 'three-cards__image' })
              : null
          ),
          h('div', { className: 'three-cards__body' },
            h('h3', { className: 'three-cards__title' }, card.title || ''),
            h('p', { className: 'three-cards__meta' }, card.meta || '')
          )
        );
      })
    )
  );
};