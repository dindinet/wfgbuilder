const coeteSectionPreview = (props) => {
  const { heading, primary_button_label, primary_button_url, ghost_button_label, ghost_button_url, spacecraft_image, spacecraft_image_alt, getAsset, h } = props;
  const imageSrc = spacecraft_image ? getAsset(spacecraft_image).toString() : '';
  return h('section', { className: 'section-coete' },
    h('div', { className: 'section-coete__inner' },
      h('div', { className: 'section-coete__content' },
        h('h1', { className: 'section-coete__heading' }, heading || ''),
        h('div', { className: 'section-coete__actions' },
          h('a', { href: primary_button_url || '#', className: 'section-coete__btn section-coete__btn--primary' }, primary_button_label || ''),
          h('a', { href: ghost_button_url || '#', className: 'section-coete__btn section-coete__btn--ghost' }, ghost_button_label || '')
        )
      ),
      h('div', { className: 'section-coete__visual' },
        imageSrc ? h('img', { src: imageSrc, alt: spacecraft_image_alt || '', className: 'section-coete__spacecraft' }) : null,
        h('div', { className: 'section-coete__pixel-flame' },
          h('span', { className: 'section-coete__pixel section-coete__pixel--1' }),
          h('span', { className: 'section-coete__pixel section-coete__pixel--2' }),
          h('span', { className: 'section-coete__pixel section-coete__pixel--3' }),
          h('span', { className: 'section-coete__pixel section-coete__pixel--4' }),
          h('span', { className: 'section-coete__pixel section-coete__pixel--5' }),
          h('span', { className: 'section-coete__pixel section-coete__pixel--6' }),
          h('span', { className: 'section-coete__pixel section-coete__pixel--7' }),
          h('span', { className: 'section-coete__pixel section-coete__pixel--8' }),
          h('span', { className: 'section-coete__pixel section-coete__pixel--9' })
        )
      )
    )
  );
};