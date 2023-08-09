wp.blocks.registerBlockType("limitless/programs", {
  title: "Programs",
  edit: function () {
    return wp.element.createElement("div", { className: "wrapper placeholder" }, "Programs Placeholder")
  },
  save: function () {
    return
  }
})
