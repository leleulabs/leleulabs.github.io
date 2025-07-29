/*
 # -----------------------------------------------------------------------------
 # ~/assets/theme/j1/adapter/js/clipboard.js
 # JS Adapter for Clipboard
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023-2025 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 # NOTE:
 # -----------------------------------------------------------------------------
 # Adapter generated: 2025-07-29 04:17:59 +0200
 # -----------------------------------------------------------------------------
*/
"use strict";j1.adapter.clipboard=(t=>{const e="development"===t.env||"dev"===t.env;var i,a,o,n,l,r,d,s,p,c,g,b;return{init:u=>{$.extend({module_name:'j1.adapter.clipboard',generated:'2025-07-29 04:17:59 +0200'},u);s=t.adapter.clipboard,p=log4javascript.getLogger('j1.adapter.clipboard'),n='en',i=$.extend({}),a=$.extend({}),$.extend(!0,{},i,a),s.state='started',c='initialization: started',p.info(c),'en'==n?(l='to clipboard',r='Copy',d='copied!'):'de'==n?(l='zur Zwischenablage',r='Kopieren',d='kopiert!'):(l='to clipboard',r='Copy',d='copied!');var f=setInterval(()=>{'finished'===t.getState()&&(g=Date.now(),s.setState('started'),e&&p.debug('set module state to: '+s.getState()),p.info('initializing module: started'),o=new ClipboardJS('.btn-clipboard',{target:function(t){return t.parentNode.nextElementSibling}}),s.initClipButtons(),s.initEventHandler(o),e&&p.debug('met dependencies for: j1'),s.setState('finished'),e&&p.debug('state: '+s.getState()),p.info('module initialized successfully'),b=Date.now(),p.info('module initializing time: '+(b-g)+'ms'),clearInterval(f))},10)},initClipButtons:()=>{var t,e,i='<div class="j1-clipboard"><span class="btn-clipboard" data-bs-toggle="tooltip" data-bs-placement="left" title="'+l+'">'+r+'</span></div>';$('.highlight').each(function(){t=$(this).closest('.noclip').length,e=$(this).closest('.hl-ipython3').length,t||e||($(this).before(i),$('.btn-clipboard').tooltip())})},initEventHandler:t=>{t.on('success',t=>{$(t.trigger).attr('title',d).tooltip('_fixTitle').tooltip('show').attr('title',l).tooltip('_fixTitle');var i=log4javascript.getLogger('j1.initClipboard'),a='initialization copy-to-clipboard sucessfull';e&&i.debug(a);var o,n=t.text.split('\n');for(o=0;o<n.length;o++)n[o].replace(/^\s+\d+/,'');t.clearSelection()}),t.on('error',t=>{var i=/Mac/i.test(navigator.userAgent)?'press \u2318 to copy':'press ctrl-c to copy';p=log4javascript.getLogger('j1.initClipboard'),c='initialization copy-to-clipboard failed, fallback used.',e&&p.warn(c),$(t.trigger).attr('title',i).tooltip('_fixTitle').tooltip('show').attr('title','copy to clipboard').tooltip('_fixTitle')})},messageHandler:(t,i)=>{var a=JSON.stringify(i,undefined,2);return c='received message from '+t+': '+a,e&&p.debug(c),'command'===i.type&&'module_initialized'===i.action&&p.info(i.text),!0},setState:t=>{s.state=t},getState:()=>s.state}})(j1,window);