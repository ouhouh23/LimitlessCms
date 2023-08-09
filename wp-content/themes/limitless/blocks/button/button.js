import { SelectControl, PanelBody, PanelRow, ColorPalette } from "@wordpress/components"
import { RichText, InspectorControls, getColorObjectByColorValue } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"

registerBlockType("limitless/button", {
  title: "Button",
  attributes: {
    text: { type: "string" },
    size: { type: "string" },
    color: { type: "string" },
    type: { type: "string" },
    link: { type: "string" }
  },
  edit: EditComponent,
  save: SaveComponent
})

function EditComponent(props) {

  if (!props.attributes.size) {
    props.setAttributes({size: 'button_medium'})
  }

  if (!props.attributes.color) {
    props.setAttributes({color: 'button_primary'})
  }

  if (!props.attributes.type) {
    props.setAttributes({type: ''})
  }

  const colors = [
    { name: "button_primary", color: "#ec6041" },
    { name: "button_secondary", color: "#b2421a" },
    { name: "button_neutral", color: "#848484" },
  ]

  const currentColor = colors.filter(item => {
    return item.name == props.attributes.color
  })[0].color

  function handleColor(colorCode) {
    const { name } = getColorObjectByColorValue(colors, colorCode)
    props.setAttributes({ color: name })
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
                  { value: "button_large", label: 'Large' },
                  { value: "button_medium", label: 'Meduim' },
                  { value: "button_small", label: 'Small' },
                ]}
              />
          </PanelRow>
        </PanelBody>

        <PanelBody title="Type" initialOpen={true}>
          <PanelRow>
            <SelectControl
                value={props.attributes.type}
                onChange={(type) => { 
                  props.setAttributes({type: type})
                }}
                options={ [
                  { value: "", label: 'Default' },
                  { value: "button_ghost", label: 'Ghost' },
                  { value: "button_borderless", label: 'Borderless' },
                  { value: "button_rounded", label: 'Rounded' }
                ]}
              />
          </PanelRow>
        </PanelBody>

        <PanelBody title="Color" initialOpen={true}>
          <PanelRow>
            <ColorPalette disableCustomColors={true} clearable={false} colors={colors} value={currentColor} onChange={handleColor} />
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

      <RichText 
        allowedFormats={[]} 
        tagName="span" 
        className={`button ${props.attributes.size} ${props.attributes.color} ${props.attributes.type}`} 
        value={props.attributes.text} 
        onChange={(text) => props.setAttributes({text})} 
      />
    </div>
  )
}

function SaveComponent(props) {
  return
}
