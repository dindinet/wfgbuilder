const ContentSectionPreview = createClass({
  render: function () {
    const { title, subtitle, content, width } = this.props;
    const MarkdownPreview = window.CMS.getWidget("markdown").preview;

    return h(
      "section",
      { className: "section" },
      h(
        "div",
        { className: `container container--${width}` },
        title && h("h2", { className: "" }, title),
        subtitle && h("p", { className: "" }, subtitle),
        content &&
          h(
            "div",
            { className: "" },
            h(MarkdownPreview, { value: content })
          )
      )
    );
  },
});
