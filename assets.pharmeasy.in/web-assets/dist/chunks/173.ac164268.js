(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[173],{LHMV:function(o,t,l){"use strict";t.__esModule=!0;var e=d(l("c0Fl")),n=d(l("raBC")),i=d(l("+i7v")),r=d(l("ZfQF")),s=d(l("q5+k")),a=d(l("QLaP")),c=l("OysZ");function d(o){return o&&o.__esModule?o:{default:o}}var u=function(){function o(t){var l=this,e=t.addTransitionHook,a=t.stateStorage,d=t.getCurrentLocation,u=t.shouldUpdateScroll;if(function(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this._restoreScrollRestoration=function(){if(l._oldScrollRestoration)try{window.history.scrollRestoration=l._oldScrollRestoration}catch(o){}},this._onWindowScroll=function(){if(l._saveWindowPositionHandle||(l._saveWindowPositionHandle=(0,s.default)(l._saveWindowPosition)),l._windowScrollTarget){var o=l._windowScrollTarget,t=o[0],e=o[1],n=(0,i.default)(window),a=(0,r.default)(window);n===t&&a===e&&(l._windowScrollTarget=null,l._cancelCheckWindowScroll())}},this._saveWindowPosition=function(){l._saveWindowPositionHandle=null,l._savePosition(null,window)},this._checkWindowScrollPosition=function(){l._checkWindowScrollHandle=null,l._windowScrollTarget&&(l.scrollToTarget(window,l._windowScrollTarget),++l._numWindowScrollAttempts,l._numWindowScrollAttempts>=2?l._windowScrollTarget=null:l._checkWindowScrollHandle=(0,s.default)(l._checkWindowScrollPosition))},this._stateStorage=a,this._getCurrentLocation=d,this._shouldUpdateScroll=u,"scrollRestoration"in window.history&&!(0,c.isMobileSafari)()){this._oldScrollRestoration=window.history.scrollRestoration;try{window.history.scrollRestoration="manual",(0,n.default)(window,"beforeunload",this._restoreScrollRestoration)}catch(o){this._oldScrollRestoration=null}}else this._oldScrollRestoration=null;this._saveWindowPositionHandle=null,this._checkWindowScrollHandle=null,this._windowScrollTarget=null,this._numWindowScrollAttempts=0,this._scrollElements={},(0,n.default)(window,"scroll",this._onWindowScroll),this._removeTransitionHook=e((function(){s.default.cancel(l._saveWindowPositionHandle),l._saveWindowPositionHandle=null,Object.keys(l._scrollElements).forEach((function(o){var t=l._scrollElements[o];s.default.cancel(t.savePositionHandle),t.savePositionHandle=null,l._saveElementPosition(o)}))}))}return o.prototype.registerElement=function(o,t,l,e){var i=this;this._scrollElements[o]&&(0,a.default)(!1);var r=function(){i._saveElementPosition(o)},c={element:t,shouldUpdateScroll:l,savePositionHandle:null,onScroll:function(){c.savePositionHandle||(c.savePositionHandle=(0,s.default)(r))}};this._scrollElements[o]=c,(0,n.default)(t,"scroll",c.onScroll),this._updateElementScroll(o,null,e)},o.prototype.unregisterElement=function(o){this._scrollElements[o]||(0,a.default)(!1);var t=this._scrollElements[o],l=t.element,n=t.onScroll,i=t.savePositionHandle;(0,e.default)(l,"scroll",n),s.default.cancel(i),delete this._scrollElements[o]},o.prototype.updateScroll=function(o,t){var l=this;this._updateWindowScroll(o,t),Object.keys(this._scrollElements).forEach((function(e){l._updateElementScroll(e,o,t)}))},o.prototype.stop=function(){this._restoreScrollRestoration(),(0,e.default)(window,"scroll",this._onWindowScroll),this._cancelCheckWindowScroll(),this._removeTransitionHook()},o.prototype._cancelCheckWindowScroll=function(){s.default.cancel(this._checkWindowScrollHandle),this._checkWindowScrollHandle=null},o.prototype._saveElementPosition=function(o){var t=this._scrollElements[o];t.savePositionHandle=null,this._savePosition(o,t.element)},o.prototype._savePosition=function(o,t){this._stateStorage.save(this._getCurrentLocation(),o,[(0,i.default)(t),(0,r.default)(t)])},o.prototype._updateWindowScroll=function(o,t){this._cancelCheckWindowScroll(),this._windowScrollTarget=this._getScrollTarget(null,this._shouldUpdateScroll,o,t),this._numWindowScrollAttempts=0,this._checkWindowScrollPosition()},o.prototype._updateElementScroll=function(o,t,l){var e=this._scrollElements[o],n=e.element,i=e.shouldUpdateScroll,r=this._getScrollTarget(o,i,t,l);r&&this.scrollToTarget(n,r)},o.prototype._getDefaultScrollTarget=function(o){var t=o.hash;return t&&"#"!==t?"#"===t.charAt(0)?t.slice(1):t:[0,0]},o.prototype._getScrollTarget=function(o,t,l,e){var n=!t||t.call(this,l,e);if(!n||Array.isArray(n)||"string"==typeof n)return n;var i=this._getCurrentLocation();return this._getSavedScrollTarget(o,i)||this._getDefaultScrollTarget(i)},o.prototype._getSavedScrollTarget=function(o,t){return"PUSH"===t.action?null:this._stateStorage.read(t,o)},o.prototype.scrollToTarget=function(o,t){if("string"==typeof t){var l=document.getElementById(t)||document.getElementsByName(t)[0];if(l)return void l.scrollIntoView();t=[0,0]}var e=t,n=e[0],s=e[1];(0,i.default)(o,n),(0,r.default)(o,s)},o}();t.default=u,o.exports=t.default},OysZ:function(o,t,l){"use strict";t.__esModule=!0,t.isMobileSafari=function(){return/iPad|iPhone|iPod/.test(window.navigator.platform)&&/^((?!CriOS).)*Safari/.test(window.navigator.userAgent)}}}]);