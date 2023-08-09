wp.blocks.registerBlockType("limitless/team", {
  title: "Team",
  edit: function () {
    return wp.element.createElement("div", { className: "wrapper placeholder" }, "Team Placeholder")
  },
  save: function () {
    return
  }
})
