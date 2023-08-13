/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/components/Carousel.js":
/*!********************************************!*\
  !*** ./src/scripts/components/Carousel.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Carousel: () => (/* binding */ Carousel)
/* harmony export */ });
class Carousel {
  constructor(block) {
    this.block = block;
  }
  initCarousel(start, inversion, imageWidth, quantity = null) {
    this.leftButton = this.block.querySelector('.carousel__button_left');
    this.rightButton = this.block.querySelector('.carousel__button_right');
    this.blockGallery = this.block.querySelector('.carousel__gallery');
    if (quantity != null) {
      this.stepMax = quantity;
    } else {
      this.stepMax = this.blockGallery.querySelectorAll('.carousel__image').length;
    }
    this.stepMin = 1;
    this.imageWidth = imageWidth;
    this.step = ~~window.getComputedStyle(this.blockGallery).getPropertyValue(start);
    this.blockInversion = ~~window.getComputedStyle(this.blockGallery).getPropertyValue(inversion);
    this.initEvents();
  }
  initEvents() {
    this.leftButton.addEventListener('click', this.toLeft.bind(this));
    this.rightButton.addEventListener('click', this.toRight.bind(this));
  }
  toRight() {
    if (this.step >= this.stepMax) {
      return;
    }
    this.itemWidth = ~~window.getComputedStyle(this.blockGallery).getPropertyValue(this.imageWidth);
    this.blockInversion = this.blockInversion - this.itemWidth;
    this.blockGallery.style.transform = `translateX(${this.blockInversion}%)`;
    this.step += 1;
  }
  toLeft() {
    if (this.step <= this.stepMin) {
      return;
    }
    this.itemWidth = ~~window.getComputedStyle(this.blockGallery).getPropertyValue(this.imageWidth);
    this.blockInversion = this.blockInversion + this.itemWidth;
    this.blockGallery.style.transform = `translateX(${this.blockInversion}%)`;
    this.step -= 1;
  }
}

/***/ }),

/***/ "./src/scripts/components/Input.js":
/*!*****************************************!*\
  !*** ./src/scripts/components/Input.js ***!
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

/***/ "./src/scripts/components/Toggles.js":
/*!*******************************************!*\
  !*** ./src/scripts/components/Toggles.js ***!
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

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _components_Input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Input.js */ "./src/scripts/components/Input.js");
/* harmony import */ var _components_Toggles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Toggles.js */ "./src/scripts/components/Toggles.js");
/* harmony import */ var _components_Carousel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Carousel.js */ "./src/scripts/components/Carousel.js");
/* harmony import */ var _components_Post_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Post.js */ "./src/scripts/components/Post.js");





const input = new _components_Input_js__WEBPACK_IMPORTED_MODULE_1__.Input('.input_compact', '.input__body', '.input__label');
const toggle = new _components_Toggles_js__WEBPACK_IMPORTED_MODULE_2__.Toggles('.toggle', '.toggle__input', 'toggle_off');
const mobileNavigation = new _components_Toggles_js__WEBPACK_IMPORTED_MODULE_2__.Toggles('.navigation', '.navigation__mobile-button', 'navigation_mobile');
const post = new _components_Post_js__WEBPACK_IMPORTED_MODULE_4__.Post('[data-post-form]');
document.addEventListener('DOMContentLoaded', () => {
  input.paintLabel('#EC6041', 'var(--label-color)');
  mobileNavigation.initToggle();
  post.initPost();
  const blocks = document.querySelectorAll('.carousel');
  if (blocks) {
    blocks.forEach(element => {
      new _components_Carousel_js__WEBPACK_IMPORTED_MODULE_3__.Carousel(element).initCarousel('--image-counter', '--carousel-inversion', '--carousel-image-width');
    });
  }
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