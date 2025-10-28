
const SliderSectionPreview = (props) => {
  const {
    h,
    getAsset,
    title,
    subtitle,
    scrollername,
    scrollerwidth,
    visibleslides,
    scrollby,
    arrowcolor,
    arrowposition,
    arrowinout,
    displaypager,
    scrollerimages
  } = props;

  const imagesToDisplay = (scrollerimages || []).slice(0, visibleslides || 1);

  const sliderImages = imagesToDisplay.map(image =>
    h('img', {
      src: getAsset(image.scrollerimage).toString(),
      alt: image.scrollerimagealt,
      style: { width: '100%', display: 'block', objectFit: 'cover', height: '100%' }
    })
  );

  const slider = h('div', {
    className: 'scroller',
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${visibleslides || 1}, 1fr)`,
      gap: '1rem',
      overflow: 'hidden',
      flexGrow: 1,
      flexShrink: 1,
      minWidth: 0
    }
  }, sliderImages);

  const prevArrow = h('svg', { style: {width: '48px', height: '48px', flexShrink: 0}, fill: arrowcolor || '#000000', viewBox: '0 0 32 32' },
    h('path', { d: 'M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM23.010 14.989h-11.264l3.617-3.617c0.39-0.39 0.39-1.024 0-1.414s-1.024-0.39-1.414 0l-5.907 6.062 5.907 6.063c0.195 0.195 0.451 0.293 0.707 0.293s0.511-0.098 0.707-0.293c0.39-0.39 0.39-1.023 0-1.414l-3.68-3.68h11.327c0.552 0 1-0.448 1-1s-0.448-1-1-1z' })
  );

  const nextArrow = h('svg', { style: {width: '48px', height: '48px', flexShrink: 0}, fill: arrowcolor || '#000000', viewBox: '0 0 32 32' },
    h('path', { d: 'M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM16.637 9.957c-0.39 0.39-0.39 1.024 0 1.414l3.617 3.617h-11.264c-0.553 0-1 0.448-1 1s0.447 1 1 1h11.327l-3.68 3.68c-0.39 0.39-0.39 1.023 0 1.414 0.195 0.195 0.451 0.293 0.707 0.293s0.512-0.098 0.707-0.293l5.907-6.063-5.907-6.063c-0.391-0.39-1.023-0.39-1.415 0z' })
  );

  const pageCount = scrollerimages ? Math.ceil(scrollerimages.length / (scrollby || 1)) : 0;
  const pager = displaypager && pageCount > 0 ? h('div', { className: 'navbtns', style: { textAlign: 'center', marginTop: '1rem', color: '#ccc', fontSize: '2rem' } }, '●'.repeat(pageCount).split('').join(' ')) : null;

  const titleElement = title ? h('h2', {style: {textAlign: 'center'}}, title) : null;
  const subtitleElement = subtitle ? h('p', {style: {textAlign: 'center'}}, subtitle) : null;

  let content;
  if (arrowposition === 'sides') {
    if (arrowinout === 'out') {
      const containerClassName = `cq-slider-${Math.random().toString(36).substr(2, 9)}`;
      // Estimate a breakpoint: (slide width * visible slides) + arrows + gaps
      const breakpoint = (visibleslides || 1) * 250 + 132;

      const styleString = `
        .${containerClassName} {
          container-type: inline-size;
        }

        /* Default state: 'out' (flexbox) */
        .${containerClassName} .hzd-dynamic-wrapper {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .${containerClassName} .hzd-dynamic-arrow {
          cursor: pointer;
        }

        /* Narrow state: 'in' (absolute) */
        @container (max-width: ${breakpoint}px) {
          .${containerClassName} .hzd-dynamic-wrapper {
            position: relative; /* Become the positioning context */
            display: block; /* Undo flex */
          }

          .${containerClassName} .hzd-dynamic-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
            pointer-events: all;
          }

          .${containerClassName} .hzd-dynamic-arrow.prev {
              left: 1rem;
          }

          .${containerClassName} .hzd-dynamic-arrow.next {
              right: 1rem;
          }
        }
      `;

      content = h('div', { className: containerClassName },
        h('style', {}, styleString),
        h('div', { className: 'hzd-dynamic-wrapper' },
            h('div', { className: 'hzd-dynamic-arrow prev' }, prevArrow),
            slider,
            h('div', { className: 'hzd-dynamic-arrow next' }, nextArrow)
        )
      );
    } else {
      // 'in' or undefined: Use simple absolute positioning
      content = h('div', { className: 'hzd-wrapper', style: { position: 'relative' } },
        slider,
        h('div', { className: 'hzd-arrow-wrapper', style: { position: 'absolute', width: '100%', top: '50%', left: '0', transform: 'translateY(-50%)', display: 'flex', justifyContent: 'space-between', padding: '0 1rem', boxSizing: 'border-box', pointerEvents: 'none' } },
          h('div', { style: { pointerEvents: 'all', cursor: 'pointer' } }, prevArrow),
          h('div', { style: { pointerEvents: 'all', cursor: 'pointer' } }, nextArrow)
        )
      );
    }
  } else { // 'below' or undefined
    content = h('div', {},
      slider,
      h('div', { className: 'scrollerarrows', style: { display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' } }, prevArrow, nextArrow)
    );
  }

  return h('div', { className: `container container--${scrollerwidth || 'full'}`, style: {padding: '2rem 0'} },
    titleElement,
    subtitleElement,
    content,
    pager
  );
};
