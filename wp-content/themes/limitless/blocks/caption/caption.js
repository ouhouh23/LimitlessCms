import { SelectControl, PanelBody, PanelRow, ColorPalette } from "@wordpress/components"
import { RichText, InspectorControls, getColorObjectByColorValue } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"

registerBlockType("limitless/caption", {
  title: "Caption",
  attributes: {
    text: { type: "string" },
    colorClass: { type: "string"}
  },
  edit: EditComponent,
  save: SaveComponent
})

function EditComponent(props) {
  const colors = [
    { name: "caps_primary", color: "#ec6041" },
    { name: "caps_secondary", color: "#b2421a" },
    { name: "caps_bright", color: "#fff" }
  ]

  if (!props.attributes.colorClass) {
    props.setAttributes({colorClass: 'caps_primary'})
  }

  const currentColor = colors.filter(color => {
    return color.name == props.attributes.colorClass
  })[0].color

  function handleColor(colorCode) {
    const { name } = getColorObjectByColorValue(colors, colorCode)
    props.setAttributes({ colorClass: name })
  }

  return (
    <div className= {'wrapper'}>
      <InspectorControls>
        <PanelBody title="Color" initialOpen={true}>
          <PanelRow>
            <ColorPalette disableCustomColors={true} clearable={false} colors={colors} value={currentColor} onChange={handleColor} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <RichText 
        allowedFormats={[]} 
        tagName="span" 
        className={`caps caps_heavy ${props.attributes.colorClass}`} 
        value={props.attributes.text} 
        onChange={(text) => props.setAttributes({text})} 
      />
    </div>
  )
}

function SaveComponent(props) {
  return
}
