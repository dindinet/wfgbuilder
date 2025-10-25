const FullWidthCenteredColumnSectionPreview = createClass({
  render: function () {
    const { content, width } = this.props;
    const MarkdownPreview = window.CMS.getWidget('markdown').preview;

    return h(
      "section",
      {},
      h("div", { className: `content content--${width}` },
        h(MarkdownPreview, { value: content || "" })
      )
    );
  },
});

