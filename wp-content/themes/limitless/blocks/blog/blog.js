wp.blocks.registerBlockType("limitless/blog", {
  title: "Blog",
  edit: function () {
    return wp.element.createElement("div", { className: "wrapper placeholder" }, "Blog Placeholder")
  },
  save: function () {
    return
  }
})
