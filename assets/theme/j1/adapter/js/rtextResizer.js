/*
 # -----------------------------------------------------------------------------
 # ~/assets/theme/j1/adapter/js/rtextResizer.js
 # Liquid template to adapt rtextResizer functions
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023-2025 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE
 # -----------------------------------------------------------------------------
 # Adapter generated: 2025-07-14 03:21:09 +0200
 # -----------------------------------------------------------------------------
*/
"use strict";j1.adapter.rtextResizer=(e=>{"development"===e.env||e.env;var t,i,a,n,r;return{init:s=>{$.extend({module_name:'j1.adapter.rtextResizer',generated:'2025-07-14 03:21:09 +0200'},s);t=e.adapter.rtextResizer,i=log4javascript.getLogger('j1.adapter.rtextResizer'),e.loadHTML({xhr_container_id:'rtext_resizer_container',xhr_data_path:'/assets/data/rtext_resizer/index.html',xhr_data_element:'rtext_resizer_modal'},'j1.adapter.rtextResizer','null');var o=setInterval(()=>{$('#content').css("display"),e.getState();if('success'==e.xhrDOMState['#rtext_resizer_container']){if(n=Date.now(),t.setState('started'),c.debug('state: '+t.getState()),c.info('module is being initialized'),c.info('initialize resizer ui'),$('#rtext_resizer_modal').length){var i,s='production',c=log4javascript.getLogger('j1.template.rtext-resizer'),d=$("main[class*='r-text']"),x=$("main[class*='r-text']").attr('class').replace(/r-text-[0-9]*/g,''),p=' r-text-300',l=' r-text-400',h=' r-text-500';$('input:checkbox[name="textsize-300"]').on('click',function(e){e.stopPropagation(),$('input:checkbox[name="textsize-400"]').prop('checked',!1),$('input:checkbox[name="textsize-500"]').prop('checked',!1),1==$(this).is(':checked')&&(i=p),d.attr('class',x+i),'development'===s&&(a='Changed textsize to: '+i,c.info(a))}),$('input:checkbox[name="textsize-400"]').on('click',function(e){e.stopPropagation(),$('input:checkbox[name="textsize-300"]').prop('checked',!1),$('input:checkbox[name="textsize-500"]').prop('checked',!1),1==$(this).is(':checked')&&(i=l),d.attr('class',x+i),'development'===s&&(a='Changed textsize to: '+i,c.info(a))}),$('input:checkbox[name="textsize-500"]').on('click',function(e){e.stopPropagation(),$('input:checkbox[name="textsize-300"]').prop('checked',!1),$('input:checkbox[name="textsize-400"]').prop('checked',!1),1==$(this).is(':checked')&&(i=h),d.attr('class',x+i),'development'===s&&(a='Changed textsize to: '+i,c.info(a))})}t.setState('finished'),c.debug('state: '+t.getState()),c.info('initializing module finished'),r=Date.now(),c.info('module initializing time: '+(r-n)+'ms'),clearInterval(o)}},10)},messageHandler:(e,t)=>{var n=JSON.stringify(t,undefined,2);return a='received message from '+e+': '+n,i.debug(a),'command'===t.type&&'module_initialized'===t.action&&i.info(t.text),!0},setState:e=>{t.state=e},getState:()=>t.state}})(j1,window);