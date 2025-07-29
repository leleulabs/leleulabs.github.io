/*
 # -----------------------------------------------------------------------------
 # ~/assets/theme/j1/adapter/js/iconPicker.js
 # J1 Adapter for the iconPicker module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023-2025 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE
 # -----------------------------------------------------------------------------
 # NOTE:
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2025-07-29 04:17:59 +0200
 # -----------------------------------------------------------------------------
*/
"use strict";j1.adapter.iconPicker=(e=>{"development"===e.env||e.env;var i,n,t,s,o,a,c,r,d,l;return{init:r=>{$.extend({module_name:'j1.adapter.iconPicker',generated:'2025-07-29 04:17:59 +0200'},r);i=$.extend({},{enabled:!1,api_options:{allowEmpty:!1}}),n=$.extend({},{enabled:!0,picker_button_wrapper_classes:"mt-3 mb-4 d-grid gap-2",picker_button_id:"icon_picker",picker_button_label:"Show icon set selected",picker_button_classes:"btn btn-info btn-flex btn-lg",picker_button_icon:"emoticon",api_options:{iconLibraries:["mdi-icons-base.min.json","mdi-icons-light.min.json","font-awesome.min.json"],iconLibrariesCss:["//cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.2.96/css/materialdesignicons.min.css","//cdn.jsdelivr.net/npm/@mdi/light-font@0.2.63/css/materialdesignicons-light.min.css","//cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"]},pickers:[{picker:null,enabled:!1,id:"base",picker_button_id:"icon_picker_base",iconLibraries:["mdi-icons-light.min.json"],iconLibrariesCss:["/assets/theme/j1/core/css/icon-fonts/mdil.min.css"]},{picker:null,enabled:!1,id:"mdi",picker_button_id:"icon_picker_base",iconLibraries:["mdi-icons-base.min.json"],iconLibrariesCss:["/assets/theme/j1/core/css/icon-fonts/mdib.min.css"]}]}),t=$.extend(!0,{},i,n),a=e.adapter.iconPicker,c=log4javascript.getLogger('j1.adapter.iconPicker');var m=setInterval(()=>{var i='block'===$('#content').css("display");if('finished'===e.getState()&&i){d=Date.now(),o='#'+t.picker_button_id,a.setState('started'),c.debug('state: '+a.getState()),c.info('module is being initialized on id: '+o);var n=setInterval(()=>{$(o).length>0&&(s=new UniversalIconPicker(o,{allowEmpty:t.api_options.allowEmpty,iconLibraries:t.api_options.iconLibraries,iconLibrariesCss:t.api_options.iconLibrariesCss,onSelect:e=>{var i=document.createElement('textarea');i.value=e.iconClass,document.body.appendChild(i),i.select(),document.execCommand('copy'),setTimeout(()=>{document.body.removeChild(i)},500)}}),a.icon_picker=s,a.moduleOptions=t,a.setState('finished'),c.debug('state: '+a.getState()),c.info('initializing module finished'),l=Date.now(),c.info('module initializing time: '+(l-d)+'ms'),clearInterval(n))},10);clearInterval(m)}},10)},messageHandler:(e,i)=>{var n=JSON.stringify(i,undefined,2);return r='received message from '+e+': '+n,c.debug(r),'command'===i.type&&'module_initialized'===i.action&&c.info(i.text),!0},setState:e=>{a.state=e},getState:()=>a.state}})(j1,window);