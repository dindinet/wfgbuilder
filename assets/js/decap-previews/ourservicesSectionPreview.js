const ourservicesSectionPreview = (props) => {
  const { section_title, service_cards, service_details, getAsset, h } = props;
  return h('section', { className: 'section-our-services' },
    h('div', { className: 'our-services-inner' },
      h('h2', { className: 'our-services-title' }, section_title),
      h('div', { className: 'our-services-cards' },
        (service_cards || []).map((card, index) => {
          const imageSrc = card.image ? getAsset(card.image).toString() : '';
          return h('article', { key: index, className: 'service-card' },
            h('div', { className: 'service-card__image-wrap', style: { '--card-bg': card.card_background_color || '#F9D949' } },
              imageSrc ? h('img', { src: imageSrc, alt: card.image_alt || '', className: 'service-card__img' }) : null
            ),
            h('h3', { className: 'service-card__title' }, card.title || ''),
            h('p', { className: 'service-card__desc' }, card.description || '')
          );
        })
      ),
      (service_details || []).map((detail, index) => {
        const imageSrc = detail.image ? getAsset(detail.image).toString() : '';
        const isImageLeft = detail.layout === 'image-left';
        const hasBg = detail.has_background;
        let className = 'service-detail';
        if (isImageLeft) className += ' service-detail--image-left';
        else className += ' service-detail--text-left';
        if (hasBg) className += ' service-detail--has-bg';
        const style = hasBg ? { '--detail-bg': detail.background_color || '#F9D949' } : {};
        const contentBlock = h('div', { className: 'service-detail__content' },
          h('h2', { className: 'service-detail__title' }, detail.title || ''),
          h('div', { className: 'service-detail__body' }, detail.body || '')
        );
        const mediaBlock = h('div', { className: 'service-detail__media' },
          imageSrc ? h('img', { src: imageSrc, alt: detail.image_alt || '', className: 'service-detail__img' }) : null
        );
        return h('div', { key: index, className: className, style: style },
          isImageLeft ? mediaBlock : contentBlock,
          isImageLeft ? contentBlock : mediaBlock
        );
      })
    )
  );
};