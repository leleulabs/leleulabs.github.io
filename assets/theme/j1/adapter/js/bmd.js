/*
 # -----------------------------------------------------------------------------
 # ~/assets/theme/j1/adapter/js/bmd.js
 # J1 Adapter for BMD
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023-2025 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2025-09-27 02:24:16 +0200
 # -----------------------------------------------------------------------------
*/
"use strict";j1.adapter.bmd=(e=>{"development"===e.env||e.env;var t,a,i,n,d;return{init:i=>{$.extend({module_name:'j1.adapter.bmd',generated:'2025-09-27 02:24:16 +0200'},i);t=e.adapter.bmd,a=log4javascript.getLogger('j1.adapter.bmd');var s=setInterval(()=>{var i='block'===$('#content').css("display");'finished'===e.getState()&&i&&(n=Date.now(),t.setState('started'),a.debug('state: '+t.getState()),a.info('module is being initialized'),a.info('setup bmd resources'),$('body').bmd(),t.setState('finished'),a.debug('state: '+t.getState()),a.info('initializing module finished'),d=Date.now(),a.info('module initializing time: '+(d-n)+'ms'),clearInterval(s))},10)},messageHandler:(e,t)=>{var n=JSON.stringify(t,undefined,2);return i='received message from '+e+': '+n,a.debug(i),'command'===t.type&&'module_initialized'===t.action&&a.info(t.text),!0},setState:e=>{t.state=e},getState:()=>t.state}})(j1,window);