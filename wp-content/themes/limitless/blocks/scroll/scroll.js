import { registerBlockType } from "@wordpress/blocks"

registerBlockType("limitless/scroll", {
  title: "Scroll",
  edit: EditComponent,
  save: SaveComponent
})

function EditComponent(props) {
  return (
    <div className= {'wrapper'}>
        <a href="#" class="scroll-button hero__scroll">
        
        <img src="/wp-content/themes/limitless/assets/images/icons/scroll-button.svg" alt="scroll button" class="scroll-button__icon" />

        <span class="scroll-button__text">
          Scroll
        </span>
      </a>
    </div>
  )
}

function SaveComponent(props) {
  return
}





