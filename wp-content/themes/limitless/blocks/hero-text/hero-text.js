import { InnerBlocks} from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"

registerBlockType("limitless/hero-text", {
  title: "Hero-text",
  edit: EditComponent,
  save: SaveComponent
})

function EditComponent(props) {
  return (
    <div className="hero__text">
      <InnerBlocks allowedBlocks={["limitless/heading", "limitless/caption", "limitless/button-group"]} />
    </div>
  )
}

function SaveComponent() {
  return <InnerBlocks.Content />
}

