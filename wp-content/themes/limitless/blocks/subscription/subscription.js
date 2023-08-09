wp.blocks.registerBlockType("limitless/subscription", {
  title: "subscription",
  edit: function () {
    return wp.element.createElement("div", { className: "wrapper placeholder" }, "Subscription Placeholder")
  },
  save: function () {
    return
  }
})
