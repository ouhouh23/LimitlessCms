wp.blocks.registerBlockType("limitless/header", {
  title: "Header",
  edit: function () {
    return wp.element.createElement("div", { className: "wrapper placeholder" }, "Header Placeholder")
  },
  save: function () {
    return
  }
})
