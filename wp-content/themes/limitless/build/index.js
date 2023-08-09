/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/components/Post.js":
/*!****************************************!*\
  !*** ./src/scripts/components/Post.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Post: () => (/* binding */ Post)
/* harmony export */ });
class Post {
  constructor(form) {
    this.form = form;
  }
  initPost() {
    const forms = document.querySelectorAll(this.form);
    if (forms.length === 0) {
      return;
    }
    forms.forEach(this.initEvents.bind(this));
  }
  initEvents(target) {
    target.addEventListener('submit', this.submitHandler.bind(this));
    if (!target.post_image) {
      return;
    }
    target.post_image.addEventListener('input', this.diplayImage.bind(this));
  }
  submitHandler(e) {
    e.preventDefault();
    if (e.target.hasAttribute('data-post-form-create')) this.create(e);
    if (e.target.hasAttribute('data-post-form-update')) this.update(e);
    if (e.target.hasAttribute('data-post-form-delete')) this.delete(e);
    this.disableSubmit(e);
  }
  async sendRequest(slug, requestMethod, requestBody) {
    try {
      await fetch(externalData.root_url + "/wp-json/wp/v2/posts/" + slug, {
        headers: {
          'X-WP-Nonce': externalData.nonce
        },
        method: requestMethod,
        body: requestBody
      });
    } catch (e) {
      console.error(e);
    }
    location.reload();
    location.href = externalData.root_url + '/blog';
  }
  create(e) {
    this.sendRequest('', 'POST', new FormData(e.target));
  }
  update(e) {
    this.sendRequest(e.target.postId.value, 'POST', new FormData(e.target));
  }
  delete(e) {
    this.sendRequest(e.target.postId.value, 'DELETE', '');
  }
  diplayImage(e) {
    const file = event.target.files[0];
    const image = e.target.nextElementSibling;
    const reader = new FileReader();
    if (!image.classList.contains('file__image')) {
      image.classList.add('file__image');
      image.alt = 'Uploaded image.';
    }
    reader.onload = function (event) {
      image.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
  disableSubmit(e) {
    const button = e.target.querySelector('button');
    button.disabled = 'disabled';
  }
}

/***/ }),

/***/ "./src/scripts/components/carousels.js":
/*!*********************************************!*\
  !*** ./src/scripts/components/carousels.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Carousels: () => (/* binding */ Carousels)
/* harmony export */ });
class Carousels {
  constructor(block, buttonLeft, buttonRight, blockBody, blockItem) {
    this._block = block;
    this._buttonLeft = buttonLeft;
    this._buttonRight = buttonRight;
    this._blockBody = blockBody;
    this._blockItem = blockItem;
  }
  initCarousel(start, inversion, imageWidth) {
    const blocks = document.querySelectorAll(this._block);
    if (blocks === null) {
      return;
    }
    blocks.forEach(element => {
      const toLeft = element.querySelector(this._buttonLeft);
      const toRight = element.querySelector(this._buttonRight);
      const blockGallery = element.querySelector(this._blockBody);
      const items = blockGallery.querySelectorAll(this._blockItem);
      const itemsAmount = items.length;
      let itemCounter = ~~window.getComputedStyle(blockGallery).getPropertyValue(start);
      let blockInversion = ~~window.getComputedStyle(blockGallery).getPropertyValue(inversion);
      toRight.addEventListener('click', () => {
        if (itemCounter < itemsAmount) {
          const itemWidth = ~~window.getComputedStyle(blockGallery).getPropertyValue(imageWidth);
          blockInversion = blockInversion - itemWidth;
          blockGallery.style.transform = `translateX(${blockInversion}%)`;
          itemCounter += 1;
        }
      });
      toLeft.addEventListener('click', () => {
        if (itemCounter > 1) {
          const itemWidth = ~~window.getComputedStyle(blockGallery).getPropertyValue(imageWidth);
          blockInversion = blockInversion + itemWidth;
          blockGallery.style.transform = `translateX(${blockInversion}%)`;
          itemCounter -= 1;
        }
      });
    });
  }
}

/***/ }),

/***/ "./src/scripts/components/close.js":
/*!*****************************************!*\
  !*** ./src/scripts/components/close.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Close: () => (/* binding */ Close)
/* harmony export */ });
class Close {
  constructor(block, closeButton) {
    this._block = block;
    this._closeButton = closeButton;
  }
  initClose() {
    const blocks = document.querySelectorAll(this._block);
    if (blocks === null) {
      return;
    }
    blocks.forEach(element => {
      const closeItem = element.querySelector(this._closeButton);
      closeItem.addEventListener('click', () => {
        element.style.display = 'none';
      });
    });
  }
}

/***/ }),

/***/ "./src/scripts/components/counters.js":
/*!********************************************!*\
  !*** ./src/scripts/components/counters.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Counters: () => (/* binding */ Counters)
/* harmony export */ });
class Counters {
  constructor(block, buttonIncrease, buttonReduce, blockValue) {
    this._block = block;
    this._buttonIncrease = buttonIncrease;
    this._buttonReduce = buttonReduce;
    this._blockValue = blockValue;
  }
  initCount() {
    const blocks = document.querySelectorAll(this._block);
    if (blocks === null) {
      return;
    }
    blocks.forEach(element => {
      const increaseButton = element.querySelector(this._buttonIncrease);
      const reduceButton = element.querySelector(this._buttonReduce);
      const valueElement = element.querySelector(this._blockValue);
      let currentValue = ~~valueElement.innerHTML;
      const count = increment => {
        currentValue = ~~valueElement.innerHTML;
        currentValue += increment;
        valueElement.innerHTML = currentValue;
      };
      increaseButton.addEventListener('click', () => {
        count(1);
      });
      reduceButton.addEventListener('click', () => {
        if (currentValue > 0) {
          count(-1);
        }
      });
    });
  }
}

/***/ }),

/***/ "./src/scripts/components/input.js":
/*!*****************************************!*\
  !*** ./src/scripts/components/input.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Input: () => (/* binding */ Input)
/* harmony export */ });
class Input {
  constructor(block, input, label) {
    this._block = block;
    this._input = input;
    this._label = label;
  }
  paintLabel(focusColor, blurColor) {
    const blocks = document.querySelectorAll(this._block);
    if (blocks === null) {
      return;
    }
    blocks.forEach(element => {
      const blockInput = element.querySelector(this._input);
      const blockLabel = element.querySelector(this._label);
      blockInput.onfocus = () => {
        blockLabel.style.color = focusColor;
      };
      blockInput.onblur = () => {
        blockLabel.style.color = blurColor;
      };
    });
  }
}

/***/ }),

/***/ "./src/scripts/components/inputCheck.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/inputCheck.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputCheck: () => (/* binding */ InputCheck)
/* harmony export */ });
class InputCheck {
  constructor(block, input, activeClass, indeterminateClass) {
    this._block = block;
    this._input = input;
    this._activeClass = activeClass;
    this._indeterminateClass = indeterminateClass;
  }
  initCheck() {
    const blocks = document.querySelectorAll(this._block);
    if (blocks === null) {
      return;
    }
    blocks.forEach(element => {
      const blockInput = element.querySelector(this._input);
      blockInput.addEventListener('change', () => {
        if (element.classList.contains(this._indeterminateClass)) {
          element.classList.remove(this._indeterminateClass);
        } else {
          element.classList.toggle(this._activeClass);
        }
      });
    });
  }
}

/***/ }),

/***/ "./src/scripts/components/inputDropdown.js":
/*!*************************************************!*\
  !*** ./src/scripts/components/inputDropdown.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputDropdown: () => (/* binding */ InputDropdown)
/* harmony export */ });
class InputDropdown {
  constructor(block, input, closeButton) {
    this._block = block;
    this._input = input;
    this._closeButton = closeButton;
  }
  initDropdown() {
    const blocks = document.querySelectorAll(this._block);
    if (blocks === null) {
      return;
    }
    blocks.forEach(element => {
      const blockInput = element.querySelector(this._input);
      const closeItem = element.querySelector(this._closeButton);
      closeItem.addEventListener('click', () => {
        if (blockInput.style.display === 'block') {
          blockInput.style.display = 'none';
        } else {
          blockInput.style.display = 'block';
        }
      });
    });
  }
}

/***/ }),

/***/ "./src/scripts/components/inputSearch.js":
/*!***********************************************!*\
  !*** ./src/scripts/components/inputSearch.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputSearch: () => (/* binding */ InputSearch)
/* harmony export */ });
class InputSearch {
  constructor(block, input, closeButton) {
    this._block = block;
    this._input = input;
    this._closeButton = closeButton;
  }
  initReset() {
    const blocks = document.querySelectorAll(this._block);
    if (blocks === null) {
      return;
    }
    blocks.forEach(element => {
      const closeItem = element.querySelector(this._closeButton);
      const blockInput = element.querySelector(this._input);
      closeItem.addEventListener('click', () => {
        blockInput.value = '';
      });
    });
  }
}

/***/ }),

/***/ "./src/scripts/components/shop.js":
/*!****************************************!*\
  !*** ./src/scripts/components/shop.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Shop: () => (/* binding */ Shop)
/* harmony export */ });
class Shop {
  constructor(block, sizesBlock, parameter, parameterActive, colorBlock, colorFirst, colorSecond, imageBlock, imageItem, imageItemActive, shopItem) {
    this._block = block;
    this._parameter = parameter;
    this._parameterActive = parameterActive;
    this._sizesBlock = sizesBlock;
    this._colorBlock = colorBlock;
    this._colorFirst = colorFirst;
    this._colorSecond = colorSecond;
    this._imageBlock = imageBlock;
    this._imageItem = imageItem;
    this._imageItemActive = imageItemActive;
    this._shopItem = shopItem;
  }
  initShop() {
    const blocks = document.querySelectorAll(this._block);
    if (blocks === null) {
      return;
    }
    const setActiveClass = (target, activeClassName, parentBlock) => {
      if (target.classList.contains(activeClassName)) {
        return;
      }
      const oldActiveClass = parentBlock.querySelector(`.${activeClassName}`);
      oldActiveClass.classList.remove(activeClassName);
      target.classList.add(activeClassName);
    };
    const selectItemSize = parentBlock => {
      const shopSizesBlock = parentBlock.querySelector(this._sizesBlock);
      const shopSizeArray = shopSizesBlock.querySelectorAll(this._parameter);
      shopSizeArray.forEach(element => {
        element.addEventListener('click', () => {
          setActiveClass(element, this._parameterActive, shopSizesBlock);
        });
      });
    };
    const selectItem = parentBlock => {
      const shopColorsBlock = parentBlock.querySelector(this._colorBlock);
      const shopColorFirst = shopColorsBlock.querySelector(`.${this._colorFirst}`);
      const shopColorSecond = shopColorsBlock.querySelector(`.${this._colorSecond}`);
      const shopItemsBlock = parentBlock.querySelector(this._imageBlock);
      const shopItemsArray = shopItemsBlock.querySelectorAll(this._imageItem);
      const itemChosen = parentBlock.querySelector(this._shopItem);
      const selectItemImage = () => {
        const colorCheck = item => {
          if (item === shopItemsArray[0]) {
            return 1;
          } else {
            return 2;
          }
        };
        shopItemsArray.forEach(element => {
          element.addEventListener('click', () => {
            if (element.classList.contains(this._imageItemActive)) {
              return;
            }
            const itemSrc = element.src;
            itemChosen.src = itemSrc;
            if (colorCheck(element) === 1) {
              shopColorFirst.classList.add(this._parameterActive);
              shopColorSecond.classList.remove(this._parameterActive);
            } else {
              shopColorFirst.classList.remove(this._parameterActive);
              shopColorSecond.classList.add(this._parameterActive);
            }
            setActiveClass(element, this._imageItemActive, shopItemsBlock);
          });
        });
      };
      selectItemImage();
      const selectItemColor = () => {
        const shopColorsArray = shopColorsBlock.querySelectorAll(this._parameter);
        shopColorsArray.forEach(element => {
          element.addEventListener('click', () => {
            if (element.classList.contains(this._parameterActive)) {
              return;
            }
            if (element.classList.contains(this._colorFirst)) {
              const whiteItemSrc = shopItemsArray[0].src;
              itemChosen.src = whiteItemSrc;
              const oldShopItem = shopItemsBlock.querySelector(`.${this._imageItemActive}`);
              oldShopItem.classList.remove(this._imageItemActive);
              shopItemsArray[0].classList.add(this._imageItemActive);
            } else {
              const OrangeItemSrc = shopItemsArray[1].src;
              itemChosen.src = OrangeItemSrc;
              const oldShopItem = shopItemsBlock.querySelector(`.${this._imageItemActive}`);
              oldShopItem.classList.remove(this._imageItemActive);
              shopItemsArray[1].classList.add(this._imageItemActive);
            }
            setActiveClass(element, this._parameterActive, shopColorsBlock);
          });
        });
      };
      selectItemColor();
    };
    blocks.forEach(element => {
      selectItemSize(element);
      selectItem(element);
    });
  }
}

/***/ }),

/***/ "./src/scripts/components/sliders.js":
/*!*******************************************!*\
  !*** ./src/scripts/components/sliders.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sliders: () => (/* binding */ Sliders)
/* harmony export */ });
class Sliders {
  constructor(block, blockScale, blockValue) {
    this._block = block;
    this._blockScale = blockScale;
    this._blockValue = blockValue;
  }
  initSlider() {
    const blocks = document.querySelectorAll(this._block);
    if (blocks === null) {
      return;
    }
    blocks.forEach(element => {
      const sliderScale = element.querySelector(this._blockScale);
      const sliderValue = element.querySelector(this._blockValue);
      let sliderCount = sliderScale.value;
      sliderValue.style.width = `calc(${sliderCount}% + 0.4rem`;
      sliderScale.style.background = `linear-gradient(to right, #EC6041 ${sliderCount}%, #e0e0e0 ${sliderCount}% 100%)`;
      sliderScale.oninput = () => {
        sliderCount = sliderScale.value;
        sliderValue.innerHTML = sliderCount;
        if (sliderScale.value < 40) {
          sliderValue.style.width = `calc(${sliderCount}% + 0.8rem`;
        } else if (sliderScale.value < 60) {
          sliderValue.style.width = `calc(${sliderCount}% + 0.5rem`;
        } else if (sliderScale.value < 80) {
          sliderValue.style.width = `calc(${sliderCount}% + 0.2rem`;
        } else {
          sliderValue.style.width = `calc(${sliderCount}% - 0.2rem`;
        }
        sliderScale.style.background = `linear-gradient(to right, #EC6041 ${sliderCount}%, #e0e0e0 ${sliderCount}% 100%)`;
      };
    });
  }
}

/***/ }),

/***/ "./src/scripts/components/tabs.js":
/*!****************************************!*\
  !*** ./src/scripts/components/tabs.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tabs: () => (/* binding */ Tabs)
/* harmony export */ });
class Tabs {
  constructor(block, activeClass) {
    this._block = block;
    this._activeClass = activeClass;
  }
  initTab() {
    const blocks = document.querySelectorAll(this._block);
    if (blocks === null) {
      return;
    }
    blocks.forEach(element => {
      if (!element.classList.contains(this._activeClass)) {
        element.addEventListener('click', () => {
          element.classList.add(this._activeClass);
        });
      }
    });
  }
}

/***/ }),

/***/ "./src/scripts/components/toggles.js":
/*!*******************************************!*\
  !*** ./src/scripts/components/toggles.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Toggles: () => (/* binding */ Toggles)
/* harmony export */ });
class Toggles {
  constructor(block, item, toggleClass) {
    this._block = block;
    this._item = item;
    this._toggleClass = toggleClass;
  }
  initToggle() {
    const blocks = document.querySelectorAll(this._block);
    if (blocks === null) {
      return;
    }
    blocks.forEach(element => {
      const blockTarget = element.querySelector(this._item);
      blockTarget.addEventListener('click', () => {
        element.classList.toggle(this._toggleClass);
      });
    });
  }
}

/***/ }),

/***/ "./src/scripts/components/tooltips.js":
/*!********************************************!*\
  !*** ./src/scripts/components/tooltips.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tooltips: () => (/* binding */ Tooltips)
/* harmony export */ });
class Tooltips {
  constructor(block, object, body, closeButton) {
    this._block = block;
    this._object = object;
    this._body = body;
    this._closeButton = closeButton;
  }
  initTooltip() {
    const blocks = document.querySelectorAll(this._block);
    if (blocks === null) {
      return;
    }
    blocks.forEach(element => {
      const blockObject = element.querySelector(this._object);
      const blockBody = element.querySelector(this._body);
      const closeItem = element.querySelector(this._closeButton);
      blockObject.addEventListener('click', () => {
        blockBody.style.display = 'flex';
      });
      closeItem.addEventListener('click', () => {
        blockBody.style.display = 'none';
      });
    });
  }
}

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _components_close_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/close.js */ "./src/scripts/components/close.js");
/* harmony import */ var _components_input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/input.js */ "./src/scripts/components/input.js");
/* harmony import */ var _components_inputCheck_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/inputCheck.js */ "./src/scripts/components/inputCheck.js");
/* harmony import */ var _components_inputSearch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/inputSearch.js */ "./src/scripts/components/inputSearch.js");
/* harmony import */ var _components_inputDropdown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/inputDropdown.js */ "./src/scripts/components/inputDropdown.js");
/* harmony import */ var _components_tabs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tabs.js */ "./src/scripts/components/tabs.js");
/* harmony import */ var _components_toggles_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/toggles.js */ "./src/scripts/components/toggles.js");
/* harmony import */ var _components_tooltips_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tooltips.js */ "./src/scripts/components/tooltips.js");
/* harmony import */ var _components_carousels_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/carousels.js */ "./src/scripts/components/carousels.js");
/* harmony import */ var _components_counters_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/counters.js */ "./src/scripts/components/counters.js");
/* harmony import */ var _components_shop_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/shop.js */ "./src/scripts/components/shop.js");
/* harmony import */ var _components_sliders_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sliders.js */ "./src/scripts/components/sliders.js");
/* harmony import */ var _components_Post_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Post.js */ "./src/scripts/components/Post.js");














const allert = new _components_close_js__WEBPACK_IMPORTED_MODULE_1__.Close('.allert', '.allert__icon_closed');
const modal = new _components_close_js__WEBPACK_IMPORTED_MODULE_1__.Close('.modal', '.allert__icon_closed');
const announcement = new _components_close_js__WEBPACK_IMPORTED_MODULE_1__.Close('.announcement', '.announcement__icon');
const checkbox = new _components_inputCheck_js__WEBPACK_IMPORTED_MODULE_3__.InputCheck('.checkbox', '.checkbox__input', 'checkbox_selected', 'checkbox_indeterminate');
const radio = new _components_inputCheck_js__WEBPACK_IMPORTED_MODULE_3__.InputCheck('.radio', '.radio__input', 'radio_selected');
const input = new _components_input_js__WEBPACK_IMPORTED_MODULE_2__.Input('.input_compact', '.input__body', '.input__label');
const search = new _components_inputSearch_js__WEBPACK_IMPORTED_MODULE_4__.InputSearch('.search', '.search__body', '.search__icon_closed');
const dropdown = new _components_inputDropdown_js__WEBPACK_IMPORTED_MODULE_5__.InputDropdown('.dropdown', '.dropdown__menu', '.dropdown__button');
const tab = new _components_tabs_js__WEBPACK_IMPORTED_MODULE_6__.Tabs('.tab', 'tab_active');
const toggle = new _components_toggles_js__WEBPACK_IMPORTED_MODULE_7__.Toggles('.toggle', '.toggle__input', 'toggle_off');
const mobileNavigation = new _components_toggles_js__WEBPACK_IMPORTED_MODULE_7__.Toggles('.navigation', '.navigation__mobile-button', 'navigation_mobile');
const tooltip = new _components_tooltips_js__WEBPACK_IMPORTED_MODULE_8__.Tooltips('.tooltip', '.tooltip__object', '.tooltip__body', '.tooltip__icon');
const carousel = new _components_carousels_js__WEBPACK_IMPORTED_MODULE_9__.Carousels('.carousel', '.carousel__button_left', '.carousel__button_right', '.carousel__gallery', '.carousel__image');
const counter = new _components_counters_js__WEBPACK_IMPORTED_MODULE_10__.Counters('.counter', '.counter__button_increase', '.counter__button_reduce', '.counter__value');
const shop = new _components_shop_js__WEBPACK_IMPORTED_MODULE_11__.Shop('.shop', '.shop__filter_sized', '.shop__parameter', 'shop__parameter_active', '.shop__filter_colored', 'shop__parameter_white', 'shop__parameter_orange', '.shop__gallery', '.shop__image', 'shop__image_active', '.shop__item');
const slider = new _components_sliders_js__WEBPACK_IMPORTED_MODULE_12__.Sliders('.slider', '.slider__scale', '.slider__value_current');
const post = new _components_Post_js__WEBPACK_IMPORTED_MODULE_13__.Post('[data-post-form]');
document.addEventListener('DOMContentLoaded', () => {
  allert.initClose();
  modal.initClose();
  announcement.initClose();
  checkbox.initCheck();
  radio.initCheck();
  input.paintLabel('#EC6041', 'var(--label-color)');
  search.initReset();
  dropdown.initDropdown();
  tab.initTab();
  toggle.initToggle();
  mobileNavigation.initToggle();
  tooltip.initTooltip();
  carousel.initCarousel('--image-counter', '--carousel-inversion', '--carousel-image-width');
  counter.initCount();
  shop.initShop();
  slider.initSlider();
  post.initPost();
});

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklimitless"] = self["webpackChunklimitless"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/scripts/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map