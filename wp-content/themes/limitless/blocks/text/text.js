import { SelectControl, PanelBody, PanelRow } from "@wordpress/components"
import { RichText, InspectorControls } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"

registerBlockType("limitless/text", {
  title: "Text",
  attributes: {
    text: { type: "string" },
    size: { type: "string" },
    weight: { type: "string" }
  },
  edit: EditComponent,
  save: SaveComponent
})

function EditComponent(props) {

  if (!props.attributes.size) {
    props.setAttributes({size: 'paragraph_base'})
  }

  if (!props.attributes.weight) {
    props.setAttributes({weight: 'paragraph_regular'})
  }

  return (
    <div className= {'wrapper'}>
      <InspectorControls>
        <PanelBody title="Size" initialOpen={true}>
          <PanelRow>
            <SelectControl
                value={props.attributes.size}
                onChange={(size) => { 
                  props.setAttributes({size: size})
                }}
                options={ [
                  { value: "paragraph_large", label: 'Large' },
                  { value: "paragraph_base", label: 'Base' }
                ]}
              />
          </PanelRow>
        </PanelBody>

        <PanelBody title="Weight" initialOpen={true}>
          <PanelRow>
            <SelectControl
                value={props.attributes.weight}
                onChange={(weight) => { 
                  props.setAttributes({weight: weight})
                }}
                options={ [
                  { value: "paragraph_heavy", label: 'Bold' },
                  { value: "paragraph_regular", label: 'Regular' },
                  { value: "paragraph_light", label: 'Light' },
                ]}
              />
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <RichText 
        allowedFormats={[]} 
        tagName="p" 
        className={`${props.attributes.size} ${props.attributes.weight}`} 
        value={props.attributes.text} 
        onChange={(text) => props.setAttributes({text})} 
      />
    </div>
  )
}

function SaveComponent(props) {
  return
}
