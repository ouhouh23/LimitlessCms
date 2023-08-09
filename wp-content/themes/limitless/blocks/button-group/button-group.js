import { InnerBlocks } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"

registerBlockType("limitless/button-group", {
  title: "Button-group",
  edit: EditComponent,
  save: SaveComponent
})

function EditComponent() {
  return (
    <div className="hero__buttons">
      <InnerBlocks allowedBlocks={["limitless/button"]} />
    </div>
  )
}

function SaveComponent() {
  return <InnerBlocks.Content />
}
