import { SelectControl, PanelBody, PanelRow} from "@wordpress/components"
import { RichText, InspectorControls } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"

registerBlockType("limitless/scroll", {
  title: "Scroll",
  attributes: {
    text: { type: "string" },
    link: { type: "string" },
    direction: { type: "string" },
  },
  edit: EditComponent,
  save: SaveComponent
})

function EditComponent(props) {
  if(!props.attributes.direction) {
    props.setAttributes({direction: 'section__scroll'})
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title="text" initialOpen={true}>
          <PanelRow>
            <RichText 
              allowedFormats={[]} 
              tagName="a" 
              value={props.attributes.text} 
              onChange={(text) => props.setAttributes({text})} 
            />
          </PanelRow>
        </PanelBody>

        <PanelBody title="Direction" initialOpen={true}>
          <PanelRow>
            <SelectControl
                value={props.attributes.direction}
                onChange={(direction) => { 
                  props.setAttributes({direction: direction})
                }}
                options={ [
                  { value: "section__scroll", label: 'Bottom' },
                  { value: "section__scroll section__scroll_top", label: 'Top' },
                ]}
              />
          </PanelRow>
        </PanelBody>

        <PanelBody title="Link" initialOpen={true}>
          <PanelRow>
            <RichText 
              allowedFormats={[]} 
              tagName="a" 
              value={props.attributes.link} 
              onChange={(link) => props.setAttributes({link})} 
            />
          </PanelRow>
        </PanelBody>

      </InspectorControls>

      <a href={props.attributes.link} className={`scroll-button ${props.attributes.direction}`}>
        <img src="/wp-content/themes/limitless/assets/images/icons/scroll-button.svg" alt="scroll button" className="scroll-button__icon" />

        <span className="scroll-button__text">
          {props.attributes.text}
        </span>
      </a>
    </>
  )
}

function SaveComponent(props) {
  return
}





