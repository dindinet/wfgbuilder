const FullWidthSplitScreenSectionPreview = (props) => {
  const { image, image_alt, imageposition, content, getAsset, h, width } = props;
  const MarkdownPreview = window.CMS.getWidget('markdown').preview;

  const imageUrl = image ? getAsset(image) : null;

  const imageEl = imageUrl ? h('img', { src: imageUrl.toString(), alt: image_alt }) : null;
  const contentEl = h('div', {}, h(MarkdownPreview, { value: content || "" }));

  return h('section', { className: `full-width-split-screen container container--${width}` },
    imageposition === 'left' && imageEl,
    contentEl,
    imageposition === 'right' && imageEl
  );
};
