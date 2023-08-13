wp.blocks.registerBlockType("limitless/single", {
  title: "Single",
  edit: function () {
    return wp.element.createElement("div", { className: "wrapper placeholder" }, "Single Placeholder")
  },
  save: function () {
    return
  }
})
