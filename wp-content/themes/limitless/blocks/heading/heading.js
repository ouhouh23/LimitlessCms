import { SelectControl, PanelBody, PanelRow, ColorPalette } from "@wordpress/components"
import { RichText, InspectorControls, getColorObjectByColorValue } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"

registerBlockType("limitless/heading", {
  title: "Heading",
  attributes: {
    text: { type: "string" },
    size: { type: "string" },
    colorClass: { type: "string", default: "" }
  },
  edit: EditComponent,
  save: SaveComponent
})

function EditComponent(props) {

  if (!props.attributes.size) {
    props.setAttributes({size: 'display_small'})
  }

  const colors = [
    { name: "", color: "#121212" },
    { name: "heading_bright", color: "#fff" },
  ]

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
        <PanelBody title="Size" initialOpen={true}>
          <PanelRow>
            <SelectControl
                value={props.attributes.size}
                onChange={(test) => { 
                  props.setAttributes({size: test})
                }}
                options={ [
                  { value: "display_small", label: 'Large' },
                  { value: "heading_xxl", label: 'Meduim' },
                  { value: "heading_xl", label: 'Small' },
                ]}
              />
          </PanelRow>
        </PanelBody>

        <PanelBody title="Color" initialOpen={true}>
          <PanelRow>
            <ColorPalette disableCustomColors={true} clearable={false} colors={colors} value={currentColor} onChange={handleColor} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <RichText 
        allowedFormats={[]} 
        tagName="h1" 
        className={`heading_heavy ${props.attributes.size} ${props.attributes.colorClass}`} 
        value={props.attributes.text} 
        onChange={(text) => props.setAttributes({text})} 
      />
    </div>
  )
}

function SaveComponent(props) {
  return
}
