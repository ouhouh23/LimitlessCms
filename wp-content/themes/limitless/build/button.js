(()=>{"use strict";const e=window.wp.element,t=window.wp.components,l=window.wp.blockEditor;(0,window.wp.blocks.registerBlockType)("limitless/button",{title:"Button",attributes:{text:{type:"string"},size:{type:"string"},color:{type:"string"},type:{type:"string"},link:{type:"string"}},edit:function(n){n.attributes.size||n.setAttributes({size:"button_medium"}),n.attributes.color||n.setAttributes({color:"button_primary"}),n.attributes.type||n.setAttributes({type:""});const a=[{name:"button_primary",color:"#ec6041"},{name:"button_secondary",color:"#b2421a"},{name:"button_neutral",color:"#848484"}],o=a.filter((e=>e.name==n.attributes.color))[0].color;return(0,e.createElement)("div",{className:"wrapper"},(0,e.createElement)(l.InspectorControls,null,(0,e.createElement)(t.PanelBody,{title:"Size",initialOpen:!0},(0,e.createElement)(t.PanelRow,null,(0,e.createElement)(t.SelectControl,{value:n.attributes.size,onChange:e=>{n.setAttributes({size:e})},options:[{value:"button_large",label:"Large"},{value:"button_medium",label:"Meduim"},{value:"button_small",label:"Small"}]}))),(0,e.createElement)(t.PanelBody,{title:"Type",initialOpen:!0},(0,e.createElement)(t.PanelRow,null,(0,e.createElement)(t.SelectControl,{value:n.attributes.type,onChange:e=>{n.setAttributes({type:e})},options:[{value:"",label:"Default"},{value:"button_ghost",label:"Ghost"},{value:"button_borderless",label:"Borderless"},{value:"button_rounded",label:"Rounded"}]}))),(0,e.createElement)(t.PanelBody,{title:"Color",initialOpen:!0},(0,e.createElement)(t.PanelRow,null,(0,e.createElement)(t.ColorPalette,{disableCustomColors:!0,clearable:!1,colors:a,value:o,onChange:function(e){const{name:t}=(0,l.getColorObjectByColorValue)(a,e);n.setAttributes({color:t})}}))),(0,e.createElement)(t.PanelBody,{title:"Link",initialOpen:!0},(0,e.createElement)(t.PanelRow,null,(0,e.createElement)(l.RichText,{allowedFormats:[],tagName:"a",value:n.attributes.link,onChange:e=>n.setAttributes({link:e})})))),(0,e.createElement)(l.RichText,{allowedFormats:[],tagName:"span",className:`button ${n.attributes.size} ${n.attributes.color} ${n.attributes.type}`,value:n.attributes.text,onChange:e=>n.setAttributes({text:e})}))},save:function(e){}})})();