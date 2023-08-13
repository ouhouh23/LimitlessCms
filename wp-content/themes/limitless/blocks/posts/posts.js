wp.blocks.registerBlockType("limitless/posts", {
  title: "Posts",
  edit: function () {
    return wp.element.createElement("div", { className: "wrapper placeholder" }, "Posts Placeholder")
  },
  save: function () {
    return
  }
})
