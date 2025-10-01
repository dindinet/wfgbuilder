const FullWidthCenteredColumnSectionPreview = createClass({
  render: function () {
    const { content } = this.props;
    const MarkdownPreview = window.CMS.getWidget('markdown').preview;

    return h(
      "section",
      {},
      h("div", { className: "wrapper" },
        h(MarkdownPreview, { value: content || "" })
      )
    );
  },
});

