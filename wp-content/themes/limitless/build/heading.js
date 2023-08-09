(()=>{"use strict";const e=window.wp.element,t=window.wp.components,l=window.wp.blockEditor;(0,window.wp.blocks.registerBlockType)("limitless/heading",{title:"Heading",attributes:{text:{type:"string"},size:{type:"string"},colorClass:{type:"string",default:""}},edit:function(a){a.attributes.size||a.setAttributes({size:"display_small"});const n=[{name:"",color:"#121212"},{name:"heading_bright",color:"#fff"}],o=n.filter((e=>e.name==a.attributes.colorClass))[0].color;return(0,e.createElement)("div",{className:"wrapper"},(0,e.createElement)(l.InspectorControls,null,(0,e.createElement)(t.PanelBody,{title:"Size",initialOpen:!0},(0,e.createElement)(t.PanelRow,null,(0,e.createElement)(t.SelectControl,{value:a.attributes.size,onChange:e=>{a.setAttributes({size:e})},options:[{value:"display_small",label:"Large"},{value:"heading_xxl",label:"Meduim"},{value:"heading_xl",label:"Small"}]}))),(0,e.createElement)(t.PanelBody,{title:"Color",initialOpen:!0},(0,e.createElement)(t.PanelRow,null,(0,e.createElement)(t.ColorPalette,{disableCustomColors:!0,clearable:!1,colors:n,value:o,onChange:function(e){const{name:t}=(0,l.getColorObjectByColorValue)(n,e);a.setAttributes({colorClass:t})}})))),(0,e.createElement)(l.RichText,{allowedFormats:[],tagName:"h1",className:`heading_heavy ${a.attributes.size} ${a.attributes.colorClass}`,value:a.attributes.text,onChange:e=>a.setAttributes({text:e})}))},save:function(e){}})})();