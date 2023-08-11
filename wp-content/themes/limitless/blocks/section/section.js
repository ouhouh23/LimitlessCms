import {RichText, InnerBlocks, InspectorControls} from "@wordpress/block-editor"
import { SelectControl, PanelBody, PanelRow } from "@wordpress/components"
import { registerBlockType } from "@wordpress/blocks"

registerBlockType("limitless/section", {
  title: "Section",
  attributes: {
    type: { type: "string" },
    id: { type: "string" }
  },
  edit: EditComponent,
  save: SaveComponent
})

function EditComponent(props) {
  if (!props.attributes.type) {
    props.setAttributes({type: 'section section_default'})
  }

  return (
    <div className= {'wrapper'}>
      <InspectorControls>
        <PanelBody title="Section type" initialOpen={true}>
          <PanelRow>
            <SelectControl
                value={props.attributes.type}
                onChange={(type) => { 
                  props.setAttributes({type: type})
                }}
                options={ [
                  { value: "section section_default", label: 'Default' },
                  { value: "section section_tight", label: 'Tight' },
                  { value: "section", label: 'Wide' }
                ]}
              />
          </PanelRow>
        </PanelBody>

        <PanelBody title="Section id" initialOpen={true}>
          <PanelRow>
            <RichText 
              allowedFormats={[]} 
              tagName="a" 
              value={props.attributes.id} 
              onChange={(id) => props.setAttributes({id})} 
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <section id={props.attributes.id} className={props.attributes.type}>
        <InnerBlocks allowedBlocks={["limitless/section-image", "limitless/section-text"]} />
      </section>
  </div>
  )
}

function SaveComponent() {
  return <InnerBlocks.Content />
}

