(()=>{"use strict";const e=window.wp.element,t=window.wp.components,o=window.wp.blockEditor;(0,window.wp.blocks.registerBlockType)("limitless/caption",{title:"Caption",attributes:{text:{type:"string"},colorClass:{type:"string",default:""}},edit:function(l){const a=[{name:"",color:"#ec6041"},{name:"caps_bright",color:"#fff"}],n=a.filter((e=>e.name==l.attributes.colorClass))[0].color;return(0,e.createElement)("div",{className:"wrapper"},(0,e.createElement)(o.InspectorControls,null,(0,e.createElement)(t.PanelBody,{title:"Color",initialOpen:!0},(0,e.createElement)(t.PanelRow,null,(0,e.createElement)(t.ColorPalette,{disableCustomColors:!0,clearable:!1,colors:a,value:n,onChange:function(e){const{name:t}=(0,o.getColorObjectByColorValue)(a,e);l.setAttributes({colorClass:t})}})))),(0,e.createElement)(o.RichText,{allowedFormats:[],tagName:"span",className:`caps caps_heavy hero__caption ${l.attributes.colorClass}`,value:l.attributes.text,onChange:e=>l.setAttributes({text:e})}))},save:function(e){}})})();