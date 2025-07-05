/*
 # -----------------------------------------------------------------------------
 # ~/assets/theme/j1/adapter/js/videojs.js
 # J1 Adapter for the video module
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
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
"use strict";
j1.adapter.videojs = ((j1, window) => {
  const isDev = (j1.env === "development" || j1.env === "dev") ? true : false;
  var vjsDefaults;
  var vjsSettings;
  var vjsOptions;
  var _this;
  var logger;
  var logText;
  // date|time
  var startTime;
  var endTime;
  var startTimeModule;
  var endTimeModule;
  var timeSeconds;
  // ---------------------------------------------------------------------------
  // main
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // adapter initializer
    // -------------------------------------------------------------------------
    init: (options) => {
      // -----------------------------------------------------------------------
      // default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.videojs',
        generated:   '2025-07-05 06:15:45 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // global variable settings
      // -----------------------------------------------------------------------
      // create settings object from module options
      vjsDefaults = $.extend({}, {"enabled" : false, "playbackRates" : {"enabled" : false, "values" : [0.25, 0.5, 1, 1.5, 2]}, "players" : {"youtube" : {"autoplay" : 0, "cc_load_policy" : 0, "controls" : 0, "disablekb" : 1, "enablejsapi" : 1, "fs" : 0, "iv_load_policy" : 3, "loop" : 0, "modestbranding" : 1, "rel" : 0, "showinfo" : 0, "default_poster" : "/assets/image/icon/videojs/videojs-poster.png", "poster" : "maxresdefault.jpg", "end" : true, "start" : true}}, "plugins" : {"autoCaption" : {"enabled" : false}, "hotKeys" : {"enabled" : false, "seekStep" : 15, "volumeStep" : 0.1, "alwaysCaptureHotkeys" : true, "captureDocumentHotkeys" : false, "hotkeysFocusElementFilter" : "function () { return false }", "enableFullscreen" : true, "enableHoverScroll" : true, "enableInactiveFocus" : true, "enableJogStyle" : false, "enableMute" : true, "enableModifiersForNumbers" : true, "enableNumbers" : false, "enableVolumeScroll" : true, "skipInitialFocus" : false}, "skipButtons" : {"enabled" : false, "surroundPlayButton" : false, "backwardIndex" : 1, "forwardIndex" : 1, "forward" : 10, "backward" : 10}, "zoomButtons" : {"enabled" : false, "moveX" : 0, "moveY" : 0, "rotate" : 0, "zoom" : 1}}});
      vjsSettings = $.extend({}, {"enabled" : true, "playbackRates" : {"enabled" : true}, "plugins" : {"hotKeys" : {"enabled" : true, "enableInactiveFocus" : false}, "skipButtons" : {"enabled" : true, "surroundPlayButton" : true}, "zoomButtons" : {"enabled" : true}}});
      vjsOptions  = $.extend(true, {}, vjsDefaults, vjsSettings);
      _this       = j1.adapter.videojs;
      logger      = log4javascript.getLogger('j1.adapter.videojs');
      // -----------------------------------------------------------------------
      // module initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (() => {
        var pageState       = $('#content').css("display");
        var pageVisible     = (pageState === 'block') ? true : false;
        var j1CoreFinished  = (j1.getState() === 'finished') ? true : false;
        if (j1CoreFinished && pageVisible) {
          startTimeModule = Date.now();
          _this.setState('started');
          logger.debug('state: ' + _this.getState());
          logger.info('module is being initialized');
          // save vjsOptions|data for later access
          j1.modules.videojs              = {};
          j1.modules.videojs.options      = vjsOptions || {};
          j1.modules.videojs.data         = {};
          j1.modules.videojs.data.players = {};   // set initial value         
          _this.setState('finished');
          logger.debug('state: ' + _this.getState());
          logger.info('initializing module finished');
          endTimeModule = Date.now();
          logger.info('module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
          clearInterval(dependencies_met_page_ready);
        } // END pageVisible
      }, 10); // END dependencies_met_page_ready
    }, // END init
    // -------------------------------------------------------------------------
    // messageHandler()
    // manage messages send from other J1 modules
    // -------------------------------------------------------------------------
    messageHandler: (sender, message) => {
      var json_message = JSON.stringify(message, undefined, 2);
      logText = 'received message from ' + sender + ': ' + json_message;
      logger.debug(logText);
      // -----------------------------------------------------------------------
      //  process commands|actions
      // -----------------------------------------------------------------------
      if (message.type === 'command' && message.action === 'module_initialized') {
        //
        // place handling of command|action here
        //
        logger.info(message.text);
      }
      //
      // place handling of other command|action here
      //
      return true;
    }, // END messageHandler
    // -------------------------------------------------------------------------
    // setState()
    // sets the current (processing) state of the module
    // -------------------------------------------------------------------------
    setState: (stat) => {
      _this.state = stat;
    }, // END setState
    // -------------------------------------------------------------------------
    // getState()
    // Returns the current (processing) state of the module
    // -------------------------------------------------------------------------
    getState: () => {
      return _this.state;
    } // END getState
  }; // END main (return)
})(j1, window);