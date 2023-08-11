export class Carousel {
  constructor (block) {
    this.block = block
  }

  initCarousel (start, inversion, imageWidth, quantity = null) {
    this.leftButton = this.block.querySelector('.carousel__button_left')
    this.rightButton = this.block.querySelector('.carousel__button_right')
    this.blockGallery = this.block.querySelector('.carousel__gallery')


    if (quantity != null) {  
      this.stepMax = quantity
    }

    else {
      this.stepMax = this.blockGallery.querySelectorAll('.carousel__image').length
    }

    this.stepMin = 1

    this.imageWidth = imageWidth
    this.step = ~~window.getComputedStyle(this.blockGallery).getPropertyValue(start)
    this.blockInversion = ~~window.getComputedStyle(this.blockGallery).getPropertyValue(inversion)

    this.initEvents()
  }

  initEvents() {

    this.leftButton.addEventListener('click', this.toLeft.bind(this))
    this.rightButton.addEventListener('click', this.toRight.bind(this))
  }

  toRight() {
    if (this.step >= this.stepMax) {
      return
    }

    this.itemWidth = ~~window.getComputedStyle(this.blockGallery).getPropertyValue(this.imageWidth)

    this.blockInversion = this.blockInversion - this.itemWidth
    this.blockGallery.style.transform = `translateX(${this.blockInversion}%)`
    this.step += 1
  }

  toLeft() {
    if (this.step <= this.stepMin) {
      return
    }

    this.itemWidth = ~~window.getComputedStyle(this.blockGallery).getPropertyValue(this.imageWidth)

    this.blockInversion = this.blockInversion + this.itemWidth
    this.blockGallery.style.transform = `translateX(${this.blockInversion}%)`
    this.step -= 1
  }
}
