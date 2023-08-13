import "../styles/style.scss"

import { Input } from './components/Input.js'
import { Toggles } from './components/Toggles.js'
import { Carousel } from './components/Carousel.js'
import { Post } from './components/Post.js'

const input = new Input('.input_compact', '.input__body', '.input__label')
const toggle = new Toggles('.toggle', '.toggle__input', 'toggle_off')
const mobileNavigation = new Toggles('.navigation', '.navigation__mobile-button', 'navigation_mobile')
const post = new Post('[data-post-form]')

document.addEventListener('DOMContentLoaded', () => {
  input.paintLabel('#EC6041', 'var(--label-color)')
  mobileNavigation.initToggle()
  post.initPost()

  const blocks = document.querySelectorAll('.carousel')
  if (blocks) {
    blocks.forEach(element => {
      (new Carousel(element)).initCarousel('--image-counter', '--carousel-inversion', '--carousel-image-width')
    })
  }
})
