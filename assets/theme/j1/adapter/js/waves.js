/*
 # -----------------------------------------------------------------------------
 # ~/assets/theme/j1/adapter/js/waves.js
 # J1 Adapter for the waves module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023-2025 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE
 # -----------------------------------------------------------------------------
 # NOTE: Wave styles defind in /assets/data/panel.html, key 'wave'
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2025-07-05 06:15:45 +0200
 # -----------------------------------------------------------------------------
*/
"use strict";j1.adapter.waves=((e,t)=>{"development"===e.env||e.env;var i,a,n,d,s,o,l,m,r,g,v,h,u=e.getCookieNames(),f=e.readCookie(u.user_state);$(t).width();return{init:t=>{$.extend({module_name:'j1.adapter.waves',generated:'2025-07-05 06:15:45 +0200'},t);d=null!=t?$.extend({},t):{},i=$.extend({},{enabled:!1,themes:["UnoLight"]}),a=$.extend({},{enabled:!1,themes:["UnoLight"]}),n=$.extend(!0,{},i,a,d),m=e.adapter.waves,l=f.theme_name,r=log4javascript.getLogger('j1.adapter.wave');var g=setInterval(()=>{var t='block'===$('#content').css("display");'finished'===e.getState()&&t&&(v=Date.now(),s=n.themes.toString(),o=n.themes.indexOf(l)>-1,m.setState('started'),r.debug('state: '+m.getState()),r.info('module is being initialized'),r.debug('themes allowd: '+s),r.debug('theme detected: '+l),'all'===s?(r.info("activate waves for theme: all"),setTimeout(()=>{$('.wave').show(),r.info('initializing module finished')},1e3)):o?(r.info('activate waves for theme: '+l),setTimeout(()=>{$('.wave').show(),r.info('initializing module finished')},1e3)):(r.warn('no valid theme/s found'),r.warn('deactivate (hide) waves'),setTimeout(()=>{$('.wave').hide(),r.info('initializing module finished')},1e3)),m.setState('finished'),r.debug('state: '+m.getState()),r.info('initializing module finished'),h=Date.now(),r.info('module initializing time: '+(h-v)+'ms'),clearInterval(g))},10)},messageHandler:(e,t)=>{var i=JSON.stringify(t,undefined,2);return g='received message from '+e+': '+i,r.debug(g),'command'===t.type&&'module_initialized'===t.action&&r.info(t.text),!0},setState:e=>{m.state=e},getState:()=>m.state}})(j1,window);