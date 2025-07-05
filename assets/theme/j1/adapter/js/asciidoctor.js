/*
 # -----------------------------------------------------------------------------
 # ~/assets/theme/j1/adapter/js/asciidoctor.js
 # J1 Adapter for Asciidoctor
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
"use strict";j1.adapter.asciidoctor=(e=>{"development"===e.env||e.env;var t,i,a,n,d;return{init:a=>{$.extend({module_name:'j1.adapter.rtable',generated:'2025-07-05 06:15:45 +0200'},a);t=e.adapter.asciidoctor,i=log4javascript.getLogger('j1.adapter.asciidoctor');var r=setInterval(()=>{'finished'===e.getState()&&(n=Date.now(),t.setState('started'),i.debug('state: '+t.getState()),i.info('module is being initialized'),e.api.asciidoctor.init(),t.setState('finished'),i.debug('state: '+t.getState()),i.info('initializing module: finished'),d=Date.now(),i.info('module initializing time: '+(d-n)+'ms'),clearInterval(r))},10)},messageHandler:(e,t)=>{var n=JSON.stringify(t,undefined,2);return a='received message from '+e+': '+n,i.debug(a),'command'===t.type&&'module_initialized'===t.action&&i.info(t.text),!0},setState:e=>{t.state=e},getState:()=>t.state}})(j1,window);