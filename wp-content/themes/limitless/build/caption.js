(()=>{"use strict";const e=window.wp.element,t=window.wp.components,o=window.wp.blockEditor;(0,window.wp.blocks.registerBlockType)("limitless/caption",{title:"Caption",attributes:{text:{type:"string"},colorClass:{type:"string"}},edit:function(a){const l=[{name:"caps_primary",color:"#ec6041"},{name:"caps_secondary",color:"#b2421a"},{name:"caps_bright",color:"#fff"}];a.attributes.colorClass||a.setAttributes({colorClass:"caps_primary"});const s=l.filter((e=>e.name==a.attributes.colorClass))[0].color;return(0,e.createElement)("div",{className:"wrapper"},(0,e.createElement)(o.InspectorControls,null,(0,e.createElement)(t.PanelBody,{title:"Color",initialOpen:!0},(0,e.createElement)(t.PanelRow,null,(0,e.createElement)(t.ColorPalette,{disableCustomColors:!0,clearable:!1,colors:l,value:s,onChange:function(e){const{name:t}=(0,o.getColorObjectByColorValue)(l,e);a.setAttributes({colorClass:t})}})))),(0,e.createElement)(o.RichText,{allowedFormats:[],tagName:"span",className:`caps caps_heavy ${a.attributes.colorClass}`,value:a.attributes.text,onChange:e=>a.setAttributes({text:e})}))},save:function(e){}})})();