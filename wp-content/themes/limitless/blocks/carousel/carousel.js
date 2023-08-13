import { InnerBlocks, } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"
import {useEffect, useRef, useState} from "react";
import { Carousel } from "/src/scripts/components/Carousel.js"
import { useSelect } from '@wordpress/data';

registerBlockType("limitless/carousel", {
  title: "Carousel",
  edit: EditComponent,
  save: SaveComponent
})

function EditComponent(props) {
  const [activeClass, setClass] = useState('')

  let carouselRef = useRef()

  const { clientId } = props;
  const innerBlockCount = useSelect( ( select ) => select( 'core/block-editor' ).getBlock( clientId ).innerBlocks );

  useEffect(() => {
    if(innerBlockCount.length > 0) {
      if(activeClass !== '') {
        setClass(oldClass => {
            oldClass.stepMax = innerBlockCount.length
            return oldClass
        })
      }
      else {
        setClass(oldClass => {
            const carousel = new Carousel(carouselRef.current)
            carousel.initCarousel('--image-counter', '--carousel-inversion', '--carousel-image-width', innerBlockCount.length)
            return carousel
        })
      }
    }
  }, [innerBlockCount.length]);


  return (
    <section className="carousel" ref={carouselRef}>
      <div className="carousel__gallery">
        <InnerBlocks allowedBlocks={["limitless/carousel-image"]} />
      </div>

      <div className="carousel-group">
        <button
          type="button" 
          className="button button_square button_small button_primary button_rounded carousel__button carousel__button_left"
        >
          <i className=" fa-solid fa-arrow-left"></i>
        </button>

        <button
          type="button" 
          className="button button_square button_small button_primary button_rounded carousel__button carousel__button_right"
        >
          <i className=" fa-solid fa-arrow-right"></i>
        </button>
    </div>
    </section>
  )
}

function SaveComponent() {
  return <InnerBlocks.Content />
}

