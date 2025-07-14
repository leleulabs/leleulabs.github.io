/*
 # -----------------------------------------------------------------------------
 # ~/assets/theme/j1/adapter/js/chat.js
 # J1 Adapter for the Chat module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023-2025 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2025-07-14 03:21:09 +0200
 # -----------------------------------------------------------------------------
*/
"use strict";j1.adapter.chatbot=((e,t)=>{"development"===e.env||e.env;var a,n,i,o,r;new URL(t.location.href).hostname,document.createElement('script'),e.getCookieNames(),(new Date).toISOString();return{init:()=>{var t=setInterval(()=>{var a='block'===$('#content').css("display");'finished'===e.getState()&&a&&(o=Date.now(),(n=log4javascript.getLogger('j1.adapter.chatbot')).info('chatbot: disabled'),r=Date.now(),n.info('module initializing time: '+(r-o)+'ms'),clearInterval(t))},10)},messageHandler:(e,t)=>{var a=JSON.stringify(t,undefined,2);return i='received message from '+e+': '+a,n.debug(i),'command'===t.type&&'module_initialized'===t.action&&n.info(t.text),!0},setState:e=>{a.state=e},getState:()=>a.state}})(j1,window);