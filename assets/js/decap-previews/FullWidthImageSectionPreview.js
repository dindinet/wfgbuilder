const FullWidthImageSectionPreview = createClass({
  render: function () {
    const { getAsset, image, image_alt, caption } = this.props;

    const imagePath = getAsset(image);

    return h(
      "div",
      { className: "full-width" },
      h(
        "figure",
        {},
        h("img", {
          src: imagePath ? imagePath.toString() : "",
          alt: image_alt,
          className: "responsive-img",
        }),
        h("figcaption", {}, caption)
      )
    );
  },
});

