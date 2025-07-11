/*
 # -----------------------------------------------------------------------------
 # ~/assets/theme/j1/modules/videojs/js/plugins/players/wt/wistia.js
 # Provides Wistia Playback Technology (Tech) for Video.js V8 and newer
 # See: https://github.com/edly-io/videojs-wistia
 #
 #  Product/Info:
 #  http://jekyll.one
 #
 # Copyright (C) 2020-2021 Zia Fazal
 # Copyright (C) 2021 Edly by Arbisoft
 # Copyright (C) 2023-2025 Juergen Adams
 #
 #  videojs-wistia is licensed under MIT License.
 #  See: https://github.com/edly-io/videojs-wistia/blob/master/LICENSE
 #  J1 Theme is licensed under MIT License.
 #  See: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE
 # -----------------------------------------------------------------------------
*/

/* global define, Wistia */
(function (root, factory) {
    if(typeof exports==='object' && typeof module!=='undefined') {
      var videojs = require('video.js');
      module.exports = factory(videojs.default || videojs);
    } else if(typeof define === 'function' && define.amd) {
      define(['videojs'], function(videojs){
        return (root.Wistia = factory(videojs));
      });
    } else {
      root.Wistia = factory(root.videojs);
    }
  }(this, function(videojs) {
    'use strict';

    const isDev = (j1.env === "development" || j1.env === "dev") ? true : false;

    var logger        = log4javascript.getLogger('videoJS.plugin.wistia');
    var _isOnMobile   = videojs.browser.IS_IOS || videojs.browser.IS_NATIVE_ANDROID;
    var Tech          = videojs.getTech('Tech');
    var vjsControlbar = true;
    var wtPlayerState;

    var startTimeModule;
    var endTimeModule;

    class Wistia extends Tech {

      constructor(options, ready) {
        super(options, ready);

        this.setPoster(options.poster);
        this.setSrc(this.options_.source, true);

        // jadams: VJS controlbar
        var divElement = document.getElementById(options.playerId);
        divElement.classList.remove("vjs-controls-disabled");
        divElement.classList.add("vjs-controls-enabled");
        divElement.classList.remove("vjs-user-inactive");
        divElement.classList.add("vjs-user-active");

        this.setTimeout(function() {
          if (this.el_) {
            this.el_.parentNode.className += ' vjs-wistia';

            if (_isOnMobile) {
              this.el_.parentNode.className += ' vjs-wistia-mobile';
            }

            if (Wistia.isApiReady) {
              this.initWistiaPlayer();
            } else {
              Wistia.apiReadyQueue.push(this);
            }
          }
        }.bind(this));
      } // END constructor

      dispose() {
        if (this.wistiaPlayer) {
          // dispose of the Wistia Player
          if (this.wistiaPlayer) {
            this.wistiaPlayer.pause();
            this.wistiaPlayer.remove();
          }
        } else {
          // Wistia API hasn't finished loading or the player is already disposed
          var index = Wistia.apiReadyQueue.indexOf(this);
          if (index !== -1) {
            Wistia.apiReadyQueue.splice(index, 1);
          }
        }
        this.wistiaPlayer = null;

        this.el_.parentNode.className = this.el_.parentNode.className
          .replace(' vjs-wistia', '')
          .replace(' vjs-wistia-mobile', '');
        this.el_.parentNode.removeChild(this.el_);
      } // END dispose

      createEl() {
        var div = document.createElement('div');
        div.setAttribute('id', this.options_.techId);
        div.setAttribute('style', 'position:absolute;width:100%;height:100%;top:0;left:0');
        div.setAttribute('class', 'vjs-tech ' + this.options_.playback_css_class);

        var divWrapper = document.createElement('div');
        divWrapper.appendChild(div);

        return divWrapper;
      } // END createEl

      initWistiaPlayer() {
        var playerConfig = {
          controlsVisibleOnLoad:  false,
          chromeless:             true,
          playbar:                false,
          playButton:             false,
          settingsControl:        false,
          smallPlayButton:        false,
          volumeControl:          false,
          videoFoam:              false,
          fullscreenButton:       false,
          preload:                true,
          doNotTrack:             true,
          autoPlay:               false
        };

        if (typeof this.options_.videoFoam !== 'undefined') {
          playerConfig.videoFoam = this.options_.videoFoam;
        }

        if (typeof this.options_.source !== 'undefined') {
          this.videoId = this.options_.source.src;
        }

        if (typeof this.options_.autoplay !== 'undefined') {
          playerConfig.autoPlay = this.options_.autoplay;
          playerConfig.muted = this.options_.autoplay;
        }

        var this_ = this;
        // add video handle to the wistia queue
        window._wq = window._wq || [];
        _wq.push({
          id: this.videoId,
          options: playerConfig,
          onReady: (video) => {
            this_.wistiaPlayer = video;
            this_.onPlayerReady(this_.options_);
            this_.wistiaPlayer.bind('end', this_.onPlaybackEnded.bind(this_));
          }
        });

        isDev && logger.debug('\n' + 'created ' + this.name_ + ' player on ID: ' + this.el_.firstChild.id);
      } // END initWistiaPlayer

      onPlayerReady(options) {
        var poster    = options.poster;
        var techID    = options.techId;
        var wt_player = document.getElementById(techID);
        var wt_embed  = document.getElementsByClassName("w-vulcan-v2");
        var vjsPoster = document.getElementsByClassName('vjs-poster');

        // workaround: remove all pointer cursors from poster images
        for (var i = 0; i < vjsPoster.length; i++) {
          vjsPoster[i].style.cursor = 'default';
        } // END for vjsPoster

        if (poster !== '') {
          // workaround toggle play|pause for Wistia Tech (click on video itself)
          wt_player.addEventListener('click', (event) => {
            wtPlayerState = this.wistiaPlayer.state();

            isDev && logger.debug('\n' + 'wt player state: ' + wtPlayerState);
          }); // END EventListener 'click'
        } else {
          // workaround toggle play|pause for Wistia Tech (click on video itself)
          //
          wt_player.addEventListener('click', (event) => {
            wtPlayerState = this.wistiaPlayer.state();

            isDev && logger.debug('\n' + 'wt player state: ' + wtPlayerState);

            // trigger play on state beforeplay (initiate FIRST play)
            if (wtPlayerState === 'beforeplay') {
              this.wistiaPlayer.play();
              this.trigger('play');
              isDev && logger.debug('\n' + 'triggered play on state: ' + wtPlayerState);
            }
          }); // END EventListener 'click'

        } // END if poster

        // default actions
        // ---------------------------------------------------------------------
        if (this.options_.muted) {
          this.wistiaPlayer.mute();
        }

        this.playerReady_ = true;
        this.triggerReady();

        if (this.playOnReady) {
          this.play();
        }
      } // END onPlayerReady

      onPlaybackEnded() {
        this.trigger('ended');
      } // END onPlaybackEnded

      src(src) {
        this.setSrc({ src: src });
        return this.source;
      } // END src

      setSrc(source) {
        if (!source || !source.src) { return; }

        delete this.errorName;
        this.source = source;

        if (this.options_.autoplay && !_isOnMobile) {
          if (this.isReady_) {
            this.play();
          } else {
            this.playOnReady = true;
          }
        }
      } // END setSrc

      setPoster(poster) {
        this.poster_ = poster;
      } // END setPoster

      autoplay() {
        return this.options_.autoplay;
      } // END autoplay

      setAutoplay(val) {
        this.options_.autoplay = val;
      } // END setAutoplay

      loop() {
        return this.options_.loop;
      } // END loop

      setLoop(val) {
        this.options_.loop = val;
      } // END setLoop

      play() {
        if (!this.videoId) { return; }

        if (this.isReady_) {
          this.wistiaPlayer.play();
          this.trigger('play');
        } else {
          this.trigger('waiting');
          this.playOnReady = true;
        }
      } // END play

      pause() {
        this.wistiaPlayer.pause();
        this.trigger('pause');
      } // END pause

      paused() {
        return this.wistiaPlayer.state() === 'paused' || this.wistiaPlayer.state() === 'ended';
      } // END paused

      currentTime() {
        return this.wistiaPlayer.time();
      } // END currentTime

      setCurrentTime(seconds) {
        this.wistiaPlayer.time(seconds);
      } // END setCurrentTime

      duration() {
        return this.wistiaPlayer.duration();
      } // END duration

      currentSrc() {
        return this.source && this.source.src;
      } // END currentSrc

      ended() {
        return this.wistiaPlayer.state() === 'ended';
      } // END ended

      volume() {
        return this.wistiaPlayer.volume();
      } // END volume

      setVolume(percentAsDecimal) {
        this.wistiaPlayer.volume(percentAsDecimal);
        this.trigger('volumechange');
      } // END setVolume

      muted() {
        return this.wistiaPlayer.isMuted();
      } // END muted

      setMuted(mute) {
        if (mute === true) {
          this.wistiaPlayer.mute();
        } else {
          this.wistiaPlayer.unmute();
        }

        this.trigger('volumechange');
      } // END setMuted

      supportsFullScreen() {
        return true;
      } // END supportsFullScreen

    } // END class Wistia

    Wistia.isSupported = () => {
      return true;
    };

    Wistia.canPlaySource = (event) => {
      return Wistia.canPlayType(event.type);
    };

    Wistia.canPlayType = (event) => {
      return (event === 'video/wistia');
    };

    function apiLoaded() {
      Wistia.isApiReady = true;
      isDev && logger.debug('\n' + 'API loaded successfully');

      // NOTE: skip first element in ready queue as it is used internally
      for (var i = 0; i < Wistia.apiReadyQueue.length; ++i) {
        Wistia.apiReadyQueue[i].initWistiaPlayer();
      }
      isDev && logger.debug('\n' + 'added players to ready queue: #' + i);

      endTimeModule = Date.now();
      isDev && logger.debug('\n' + 'initializing plugin: finished');
      isDev && logger.debug('\n' + 'plugin initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
    } // END apiLoaded

    function loadScript(src, callback) {
      var loaded = false;
      var tag = document.createElement('script');
      var firstScriptTag = document.getElementsByTagName('script')[0];
      if (!firstScriptTag) { return; }

      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      tag.onload = () => {
        if (!loaded) {
          loaded = true;
          callback();
        }
      };

      tag.onreadystatechange = () => {
        if (!loaded && (this.readyState === 'complete' || this.readyState === 'loaded')) {
          loaded = true;
          callback();
        }
      };

      tag.src = src;
    } // END loadScript

    function injectCss() {
      const css = `
        .vjs-wistia-mobile .vjs-big-play-button { display: none; }
      `;

      var head = document.head || document.getElementsByTagName('head')[0];

      var style = document.createElement('style');
      style.type = 'text/css';

      if (style.styleSheet){
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      isDev && logger.debug('\n' + 'added additional CSS styles');
      head.appendChild(style);
    } // END injectCss

    Wistia.apiReadyQueue = [];

    // initialize plugin when page ready
    // -------------------------------------------------------------------------
    var dependencies_met_page_ready = setInterval (() => {
      var pageState      = $('#content').css("display");
      var pageVisible    = (pageState === 'block') ? true : false;
      var j1CoreFinished = (j1.getState() === 'finished') ? true : false;

      if (j1CoreFinished && pageVisible) {
        startTimeModule = Date.now();

        isDev && logger.debug('\n' + 'initializing plugin: started');
        isDev && logger.debug('\n' + 'version of videoJS detected: ' + videojs.VERSION);

        loadScript('//fast.wistia.com/assets/external/E-v1.js', apiLoaded);
        injectCss();

        clearInterval(dependencies_met_page_ready);
      } // END pageVisible
    }, 10); // END dependencies_met_page_ready

    // check VJS version to register Wistia TECH
    if (typeof videojs.registerTech !== 'undefined') {
      videojs.registerTech('Wistia', Wistia);
    } else {
      console.error('\n' + 'invalid version of videoJS detected: ' + videojs.VERSION);
    } // END check VJS version

  }));
