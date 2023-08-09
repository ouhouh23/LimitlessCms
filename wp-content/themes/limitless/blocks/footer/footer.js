wp.blocks.registerBlockType("limitless/footer", {
  title: "Footer",
  edit: function () {
    return wp.element.createElement("div", { className: "wrapper placeholder" }, "Footer Placeholder")
  },
  save: function () {
    return
  }
})
