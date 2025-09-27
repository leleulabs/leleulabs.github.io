/*
 # -----------------------------------------------------------------------------
 # ~/assets/theme/j1/adapter/js/customModule.js
 # J1 Adapter for custom module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023-2025 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2025-09-27 03:33:52 +0200
 # -----------------------------------------------------------------------------
*/
"use strict";j1.adapter.customModule=(e=>{"development"===e.env||e.env;var t,n,i,a,o,d,s={};return{init:a=>{$.extend({module_name:'j1.adapter.customModule',generated:'2025-09-27 03:33:52 +0200'},a);n=e.adapter.dropdowns,i=log4javascript.getLogger('j1.adapter.customModule'),t=null!=a?$.extend({},a):{},s=$.extend({}),void 0!==t&&(s=$.extend({},s,t));setInterval(()=>{'finished'===e.getState()&&(o=Date.now(),n.setState('started'),i.debug('set module state to: '+n.getState()),i.info('custom functions are being initialized'),n.setState('finished'),i.debug('state: '+n.getState()),i.info('initializing custom functions: finished'),d=Date.now(),i.info('initializing time: '+(d-o)+'ms'))},10)},custom_module_1:()=>{var e=log4javascript.getLogger('j1.adapter.customModule.custom_module_1');return a='entered custom function: custom_module_1',e.info(a),!0},messageHandler:(e,t)=>{var n=JSON.stringify(t,undefined,2);return a='received message from '+e+': '+n,i.debug(a),'command'===t.type&&'module_initialized'===t.action&&i.info(t.text),!0},setState:e=>{n.state=e},getState:()=>n.state}})(j1,window);