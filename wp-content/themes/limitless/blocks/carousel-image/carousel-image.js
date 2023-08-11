import apiFetch from "@wordpress/api-fetch"
import { Button, PanelBody, PanelRow } from "@wordpress/components"
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"
import { useEffect } from "@wordpress/element"

registerBlockType("limitless/carousel-image", {
  title: "Carousel-image",
  attributes: {
    imgID: { type: "number" },
    imgURL: { type: "string", default: '/wp-content/themes/limitless/assets/images/carousel/carousel-1.png' }
  },
  edit: EditComponent,
  save: SaveComponent
})

function EditComponent(props) {
  useEffect(
    function () {
      if (props.attributes.imgID) {
        async function getImage() {
          const response = await apiFetch({
            path: `/wp/v2/media/${props.attributes.imgID}`,
            method: "GET"
          })
          props.setAttributes({ imgURL: response.media_details.sizes.full.source_url })
        }
        getImage()
      }
    },
    [props.attributes.imgID]
  )

  function onFileSelect(file) {
    props.setAttributes({ imgID: file.id })
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title="Carousel image" initialOpen={true}>
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onFileSelect}
                value={props.attributes.imgID}
                render={({ open }) => {
                  return <Button onClick={open}>Choose Image</Button>
                }}
              />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <img 
        src={props.attributes.imgURL}
        alt=""
        className="carousel__image"
        width="699"
        height="525"
      />
    </>
  )
}

function SaveComponent() {
  return
}

