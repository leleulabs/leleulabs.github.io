/*
 # -----------------------------------------------------------------------------
 # ~/assets/theme/j1/adapter/js/customFunctions.js
 # J1 Adapter for custom functions
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023-2025 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2025-07-05 06:15:45 +0200
 # -----------------------------------------------------------------------------
*/
"use strict";j1.adapter.customFunctions=(t=>{"development"===t.env||t.env;var e,n,i,a,s,o,d={};return{init:a=>{$.extend({module_name:'j1.adapter.custom_functions',generated:'2025-07-05 06:15:45 +0200'},a);n=t.adapter.custom_functions,i=log4javascript.getLogger('j1.adapter.custom_functions'),n.setState('started'),i.debug('state: '+n.getState()),i.info('module is being initialized'),e=null!=a?$.extend({},a):{},d=$.extend({}),void 0!==e&&(d=$.extend({},d,e));var u=setInterval(()=>{'finished'===t.getState()&&(s=Date.now(),n.setState('started'),i.debug('set module state to: '+n.getState()),i.info('custom functions are being initialized'),n.setState('finished'),i.debug('state: '+n.getState()),i.info('initializing custom functions: finished'),o=Date.now(),i.info('initializing time: '+(o-s)+'ms'),clearInterval(u))},10)},custom_1:()=>{var t=log4javascript.getLogger('j1.adapter.custom_functions.custom_1');return a='entered custom function: custom_1',t.info(a),!0},messageHandler:(t,e)=>{var n=JSON.stringify(e,undefined,2);return a='received message from '+t+': '+n,i.debug(a),'command'===e.type&&'module_initialized'===e.action&&i.info(e.text),!0},setState:t=>{n.state=t},getState:()=>n.state}})(j1,window);