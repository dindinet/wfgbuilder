const HeropanelSectionPreview = (props) => {
  const { heading, description, primary_button_label, primary_button_url, secondary_button_label, secondary_button_url, color_palette, h } = props;
  return h('section', { className: 'section-heropanel' },
    h('div', { className: 'heropanel-content' },
      h('div', { className: 'heropanel-text' },
        h('h1', { className: 'heropanel-heading' }, heading || ''),
        h('p', { className: 'heropanel-description' }, description || ''),
        h('div', { className: 'heropanel-actions' },
          h('a', { href: primary_button_url || '#', className: 'heropanel-btn heropanel-btn--primary' }, primary_button_label || ''),
          h('a', { href: secondary_button_url || '#', className: 'heropanel-btn heropanel-btn--secondary' }, secondary_button_label || '')
        )
      ),
      h('div', { className: 'heropanel-palette' },
        (color_palette || []).map((card, index) => {
          const labelClass = card.light_label_text ? 'heropanel-color-label heropanel-color-label--light' : 'heropanel-color-label';
          return h('div', { key: index, className: 'heropanel-color-card heropanel-color-card--' + (card.color_modifier || '') },
            h('span', { className: labelClass }, card.color_label || '')
          );
        })
      )
    )
  );
};