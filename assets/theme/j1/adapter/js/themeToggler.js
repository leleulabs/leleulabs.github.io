/*
 # -----------------------------------------------------------------------------
 # ~/assets/theme/j1/adapter/js/themeToggler.js
 # J1 Adapter for the Theme Toggler module
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
 #  Adapter generated: 2025-09-27 02:24:16 +0200
 # -----------------------------------------------------------------------------
*/
"use strict";j1.adapter.themeToggler=((e,t)=>{"development"===e.env||e.env;var i,n,s,a,o,l,m,r,d,g,h,c,u,k=e.getCookieNames(),b=e.readCookie(k.user_state),_=($(t).width(),!!new liteURL(t.location.href).protocol.includes('https'));k=e.getCookieNames(),b={};return{init:t=>{$.extend({module_name:'j1.adapter.themeToggler',generated:'2025-09-27 02:24:16 +0200'},t);r=null!=t?$.extend({},t):{},g=log4javascript.getLogger('j1.adapter.themeToggler'),d=e.adapter.themeToggler,o=$.extend({},{enabled:!1,themes:{light:{name:"UnoLight",css_file:"/assets/theme/j1/core/css/themes/unolight/bootstrap.css"},dark:{name:"UnoDark",css_file:"/assets/theme/j1/core/css/themes/unodark/bootstrap.css"}}}),l=$.extend({},{enabled:!0}),m=$.extend(!0,{},o,l,r),s=m.themes.light.name,i=m.themes.light.css_file,a=m.themes.dark.name,n=m.themes.dark.css_file;var h=setInterval(()=>{var t='block'===$('#content').css("display"),i='finished'===e.getState(),n=null!==document.getElementById('quickLinksThemeTogglerButton');i&&t&&n&&(c=Date.now(),b=e.readCookie(k.user_state),d.setState('started'),g.debug('set module state to: '+d.getState()),g.info('initializing module: started'),d.initThemeTogglerEvent(),d.setState('finished'),g.debug('state: '+d.getState()),g.info('initializing module: finished'),u=Date.now(),g.info('module initializing time: '+(u-c)+'ms'),clearInterval(h))},10)},initThemeTogglerEvent:()=>{$('#quickLinksThemeTogglerButton').length&&b.theme_name===a&&$('#quickLinksThemeTogglerButton a i').toggleClass('mdib-lightbulb mdib-lightbulb-outline'),document.getElementById('quickLinksThemeTogglerButton').addEventListener('click',function(){b.theme_name===s?(b.theme_name=a,b.theme_css=n,b.theme_icon='mdib-lightbulb'):(b.theme_name=s,b.theme_css=i,b.theme_icon='mdib-lightbulb-outline'),g.info('switch theme to: '+b.theme_name),b.writer='themeToggler',e.writeCookie({name:k.user_state,data:b,secure:_,expires:365})?location.reload(!0):g.error('failed write to cookie: '+k.user_consent)})},messageHandler:(e,t)=>{var i=JSON.stringify(t,undefined,2);return h='received message from '+e+': '+i,g.debug(h),'command'===t.type&&'module_initialized'===t.action&&g.info(t.text),!0},setState:e=>{d.state=e},getState:()=>d.state}})(j1,window);