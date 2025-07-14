/*
 # -----------------------------------------------------------------------------
 # ~/assets/theme/j1/adapter/js/rtable.js
 # J1 Adapter for rtable
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
"use strict";j1.adapter.rtable=((e,t)=>{"development"===e.env||e.env;var a,i,s,n,d,r,l,o;return{init:r=>{$.extend({module_name:'j1.adapter.rtable',generated:'2025-07-14 03:21:09 +0200'},r);var b,g={xs:575,sm:576,md:768,lg:992,xl:1200};n=e.adapter.rtable,d=log4javascript.getLogger('j1.adapter.rtable'),a=$.extend({},{enabled:!1,rtable:{breakpoint:"lg",type:"default",hover:!1,mode:"stack",sort:!1,minimap:!1},"table-responsive":{breakpoint:"lg",type:"default",hover:!1}}),i=$.extend({},{enabled:!0}),s=$.extend(!0,{},a,i),n.setState('started'),d.debug('state: '+n.getState()),d.info('module is being initialized');var m=setInterval(()=>{var a='block'===$('#content').css("display");'finished'===e.getState()&&a&&(l=Date.now(),n.setState('started'),d.debug('set module state to: '+n.getState()),d.info('initializing module: started'),$('table').each(function(){var e,a=$(this);if($(a).hasClass('rtable')&&($(a).addClass('table'),$(a).addClass('tablesaw'),$(a).attr('data-tablesaw-mode',s.rtable.mode),Tablesaw.init(a,{breakpoint:s.rtable.breakpoint}),(b=g[s.rtable.breakpoint])||(b=g.lg),$(t).width()<b?(e='hide colgroups: '+a.attr('id'),a.find('colgroup').hide(),d.debug(e)):(e='show colgroup: '+a.attr('id'),a.find('colgroup').show(),d.debug(e))),$(a).hasClass(/table-responsive/)){const t=/table-responsive[-]*\w*/,s='b-table-'+Math.floor(1e4*Math.random())+1;var i,n=$(a).attr("class").match(t);n?i=n[0]:(e='no matching responsive class found',d.warn(e)),$(a).removeClass(/table-responsive[-]*\w+/),$(a).addClass('table'),$('<div>',{id:s,"class":i}).insertBefore($(a)),$('#'+s).append($(a))}}),n.setState('finished'),d.debug('state: '+n.getState()),d.info('initializing module: finished'),o=Date.now(),d.info('module initializing time: '+(o-l)+'ms'),clearInterval(m))},10)},messageHandler:(e,t)=>{var a=JSON.stringify(t,undefined,2);return r='received message from '+e+': '+a,d.debug(r),'command'===t.type&&'module_initialized'===t.action&&d.info(t.text),!0},setState:e=>{n.state=e},getState:()=>n.state}})(j1,window);