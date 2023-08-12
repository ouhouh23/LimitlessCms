import { SelectControl, PanelBody, PanelRow, ColorPalette } from "@wordpress/components"
import { RichText, InspectorControls, getColorObjectByColorValue } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"

registerBlockType("limitless/heading", {
  title: "Heading",
  attributes: {
    text: { type: "string" },
    size: { type: "string" },
    tag: {type: 'string'},
    colorClass: { type: "string", default: "" }
  },
  edit: EditComponent,
  save: SaveComponent
})

function EditComponent(props) {

  if (!props.attributes.size) {
    props.setAttributes({size: 'heading display_small'})
  }

  if (!props.attributes.tag) {
    props.setAttributes({tag: 'h1'})
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
                onChange={(size) => { 
                  props.setAttributes({size: size})
                }}
                options={ [
                  { value: "heading display_small", label: 'Large' },
                  { value: "heading heading_xxl", label: 'Meduim' },
                  { value: "heading heading_xl", label: 'Small' },
                ]}
              />
          </PanelRow>
        </PanelBody>

        <PanelBody title="Heading Tag" initialOpen={true}>
          <PanelRow>
            <SelectControl
                value={props.attributes.tag}
                onChange={(tag) => { 
                  props.setAttributes({tag: tag})
                }}
                options={ [
                  { value: "h1", label: 'h1' },
                  { value: "h2", label: 'h2' },
                  { value: "h3", label: 'h3' },
                  { value: "h4", label: 'h4' },
                  { value: "h5", label: 'h5' },
                  { value: "h6", label: 'h6' },

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
        className={`${props.attributes.size} ${props.attributes.colorClass} heading_heavy`} 
        value={props.attributes.text} 
        onChange={(text) => props.setAttributes({text})} 
      />
    </div>
  )
}

function SaveComponent(props) {
  return
}
