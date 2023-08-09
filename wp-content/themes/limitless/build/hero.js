(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var l in n)e.o(n,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:n[l]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.element,n=window.wp.apiFetch;var l=e.n(n);const r=window.wp.components,i=window.wp.blockEditor;(0,window.wp.blocks.registerBlockType)("limitless/hero",{title:"Hero",attributes:{imgID:{type:"number"},imgURL:{type:"string",default:"/wp-content/themes/limitless/assets/images/hero/hero-illustrated.png"}},edit:function(e){return(0,t.useEffect)((function(){if(e.attributes.imgID){async function t(){const t=await l()({path:`/wp/v2/media/${e.attributes.imgID}`,method:"GET"});e.setAttributes({imgURL:t.media_details.sizes.full.source_url})}t()}}),[e.attributes.imgID]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(i.InspectorControls,null,(0,t.createElement)(r.PanelBody,{title:"Background",initialOpen:!0},(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(i.MediaUploadCheck,null,(0,t.createElement)(i.MediaUpload,{onSelect:function(t){e.setAttributes({imgID:t.id})},value:e.attributes.imgID,render:({open:e})=>(0,t.createElement)(r.Button,{onClick:e},"Choose Image")}))))),(0,t.createElement)("section",{className:"hero hero_illustrated wrapper",style:{backgroundImage:`url('${e.attributes.imgURL}')`}},(0,t.createElement)(i.InnerBlocks,{allowedBlocks:["limitless/header","limitless/hero-text","limitless/scroll"]})))},save:function(){return(0,t.createElement)(i.InnerBlocks.Content,null)}})})();