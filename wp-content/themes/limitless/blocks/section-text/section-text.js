import { InnerBlocks} from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"

registerBlockType("limitless/section-text", {
  title: "Section-text",
  edit: EditComponent,
  save: SaveComponent
})

function EditComponent(props) {
  return (
    <div className="section__text">
      <InnerBlocks allowedBlocks={["limitless/heading", "limitless/text" ,"limitless/caption", "limitless/button", "limitless/button-group", "limitless/scroll"]} />
    </div>
  )
}

function SaveComponent() {
  return <InnerBlocks.Content />
}

