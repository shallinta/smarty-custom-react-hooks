"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var react=require("react");function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_nonIterableRest()}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _iterableToArrayLimit(t,e){var r=[],n=!0,a=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(t){a=!0,i=t}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}return r}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var useAnimation=function(t){var e=react.useRef(!1),r=_slicedToArray(react.useState(!1),2),n=r[0],a=r[1],i=_slicedToArray(react.useState(!1),2),o=i[0],s=i[1],u=react.useRef(!1),c=react.useCallback(function(r){r.target===t&&(u.current=!1,e.current||a(!1))},[t]);react.useEffect(function(){return t&&t.addEventListener("transitionend",c,!1),function(){t&&t.removeEventListener("transitionend",c)}},[t,c]),react.useEffect(function(){n&&setTimeout(function(){s(!0)},10)},[n]);var f=react.useCallback(function(t){t!==e.current&&(u.current&&(a(e.current),s(e.current),u.current=!1),setTimeout(function(){e.current=t,u.current=!0,t?a(!0):s(!1)},10))},[]);return[n,o,f]},waitingObj={},timer=null,trailingTimer=null,isFirst=!0,lastTime=0,useAsyncDebounce=function(t,e,r,n,a){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=_slicedToArray(react.useState(0),2),s=o[0],u=o[1],c=react.useCallback(t,e),f=react.useCallback(r,n),l=i.leading,d=i.trailing,p=i.maxWait,y=react.useCallback(function(){if(c&&(a||!waitingObj[t])){waitingObj[t]=!0;var e=c.apply(void 0,arguments);e&&e.then?(u(function(t){return t+1}),e.then(function(t){return t},function(t){return t}).then(function(e){e&&f(e),waitingObj[t]=!1,u(function(t){return t-1})})):waitingObj[t]=!1}},[a,waitingObj,c,f]);return[s>0,react.useCallback(function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];if(a){var i=(new Date).getTime();timer&&clearTimeout(timer),l&&isFirst&&(isFirst=!1,y.apply(void 0,r)),p>0&&i-lastTime>p&&(0!==lastTime&&y.apply(void 0,r),lastTime=i),timer=setTimeout(function(){lastTime=0,y.apply(void 0,r),timer=null,isFirst=!0},a),d&&(trailingTimer&&(clearTimeout(trailingTimer),trailingTimer=null),trailingTimer=setTimeout(function(){y.apply(void 0,_toConsumableArray(e)),trailingTimer=null},a))}else y.apply(void 0,r)},[y,lastTime,timer,isFirst])]},waiting=!1,useAsync=function(t,e,r,n){var a=_slicedToArray(react.useState(!1),2),i=a[0],o=a[1],s=react.useCallback(t,e),u=react.useCallback(r,n);return[i,react.useCallback(function(){if(!waiting&&s){waiting=!0;var t=s.apply(void 0,arguments);t&&t.then?(o(!0),t.then(function(t){return t},function(t){return t}).then(function(t){t&&u(t),waiting=!1,o(!1)})):waiting=!1}},[waiting,s,o])]},useCountdown=function(){var t=_slicedToArray(react.useState(0),2),e=t[0],r=t[1];return react.useEffect(function(){if(0===e)return function(){};var t=setInterval(function(){r(function(t){return t>0?t-1:0})},1e3);return function(){clearInterval(t)}},[e]),[e,r]},useInput=function(t,e){var r=_slicedToArray(react.useState(t),2),n=r[0],a=r[1],i=_slicedToArray(react.useState(!1),2),o=i[0],s=i[1],u=react.useCallback(function(){e instanceof RegExp?s(!e.test(n)):e instanceof Function&&s(e(n))},[e,n]);return[n,a,o,u]},useKeyDown=function(t,e){var r=_slicedToArray(react.useState(function(){return e&&"function"==typeof e?e:function(){}}),2),n=r[0],a=r[1],i=_slicedToArray(react.useState(!1),2),o=i[0],s=i[1];return react.useEffect(function(){var e=function(e){if(n&&"function"==typeof n){if(t===e.key)return void n(e.key,e);if(t===e.code)return void n(e.code,e);t===e.keyCode&&n(e.keyCode,e)}};return o&&window.addEventListener("keydown",e,!1),function(){o&&window.removeEventListener("keydown",e)}},[t,o,n]),[react.useCallback(function(){s(!0)},[]),react.useCallback(function(){s(!1)},[]),react.useCallback(function(t){t&&"function"==typeof t&&a(function(){return t})},[])]},useDragNDrop=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.namespace,n=e.dragStyle,a=e.dragData,i=e.droppingStyle,o=e.dropHandler,s=_slicedToArray(react.useState(),2),u=s[0],c=s[1],f=_slicedToArray(react.useState(function(){return a}),2),l=f[0],d=f[1],p=_slicedToArray(react.useState(function(){return o||function(){}}),2),y=p[0],v=p[1],g=react.useCallback(function(t){c(t)},[]),m=react.useCallback(function(t){v(function(){return t})},[]),b=react.useCallback(function(t){d(function(){return t})},[]),T=react.useCallback(function(t){for(var e=t.target,r=0,n=0;e&&e!==u;)e.offsetParent?(r+=e.offsetLeft,n+=e.offsetTop,e=e.offsetParent):e=e.parentElement;var a=r+t.offsetX,i=n+t.offsetY;return[a<u.clientWidth/2,i<u.clientHeight/2]},[u]),A=react.useCallback(function(t,e,r){if(u){var n=!e,a=!r,i=t.basic,o=t.left,s=t.right,c=t.top,f=t.bottom,l=t.leftTop,d=t.leftBottom,p=t.rightTop,y=t.rightBottom;i&&u.classList.add(i),o&&(e?u.classList.add(o):u.classList.remove(o)),s&&(n?u.classList.add(s):u.classList.remove(s)),c&&(r?u.classList.add(c):u.classList.remove(c)),f&&(a?u.classList.add(f):u.classList.remove(f)),l&&(e&&r?u.classList.add(l):u.classList.remove(l)),d&&(e&&a?u.classList.add(d):u.classList.remove(d)),p&&(n&&r?u.classList.add(p):u.classList.remove(p)),y&&(n&&a?u.classList.add(y):u.classList.remove(y))}},[u]);return react.useEffect(function(){if(!u)return function(){};var e=function(t){return function(e){if("dragover"!==t&&"drop"!==t||e.preventDefault(),"dragstart"===t)if(e.target.dataset.dragging=!0,n&&"string"==typeof n?e.target.classList.add(n):"function"==typeof n&&n(e.target),"function"==typeof l){var a=l(e.target,e);if(a){var o=JSON.stringify({namespace:r,data:a});e.dataTransfer.setData("text/plain",o)}}else{var s=JSON.stringify({namespace:r,data:l});e.dataTransfer.setData("text/plain",s)}if("dragend"===t&&(delete e.target.dataset.dragging,n&&"string"==typeof n?e.target.classList.remove(n):"function"==typeof n&&n(e.target),e.dataTransfer.setData("text/plain",null)),"dragover"===t){if(u.dataset.dragging)return;var c=_slicedToArray(T(e),2),f=c[0],d=c[1];i&&"string"==typeof i?u.classList.add(i):"object"===_typeof(i)?A(i,f,d):"function"==typeof i&&i(u,"over")}if("dragleave"===t){if(u.dataset.dragging)return;i&&"string"==typeof i?u.classList.remove(i):"object"===_typeof(i)?Object.values(i).map(function(t){return u.classList.remove(t)}):"function"==typeof i&&i(u,"leave")}if("drop"===t){if(u.dataset.dragging)return;i&&"string"==typeof i?u.classList.remove(i):"object"===_typeof(i)?Object.values(i).map(function(t){return u.classList.remove(t)}):"function"==typeof i&&i(u,"leave");var p=e.dataTransfer.getData("text");try{p=JSON.parse(p)}catch(t){return}if(!p||p.namespace!==r)return;var v=_slicedToArray(T(e),2),g=v[0],m=v[1],b=p.data;y&&"function"==typeof y&&y(b,{isLeft:g,isTop:m},u)}}},a=["dragstart","dragend"],o=["dragleave","dragover","drop"],s=[];switch(t){case"drag":s.push.apply(s,a),u.draggable=!0;break;case"drop":s.push.apply(s,o);break;case"drag-n-drop":s.push.apply(s,a.concat(o)),u.draggable=!0}var c=s.map(function(t){return{eventName:t,handler:e(t)}});return c.forEach(function(t){var e=t.eventName,r=t.handler;u.addEventListener(e,r,!1)}),function(){c.forEach(function(t){var e=t.eventName,r=t.handler;u.removeEventListener(e,r)})}},[u,l,y]),[g,m,b]};function useFirstMountState(){var t=react.useRef(!0);return t.current?(t.current=!1,!0):t.current}var useUpdateEffect=function(t,e){var r=useFirstMountState();react.useEffect(function(){if(!r)return t()},e)},useUpdateLayoutEffect=function(t,e){var r=useFirstMountState();react.useLayoutEffect(function(){if(!r)return t()},e)};exports.useAnimation=useAnimation,exports.useAsyncDebounce=useAsyncDebounce,exports.useAsync=useAsync,exports.useCountdown=useCountdown,exports.useInput=useInput,exports.useKeyDown=useKeyDown,exports.useDragNDrop=useDragNDrop,exports.useUpdateEffect=useUpdateEffect,exports.useUpdateLayoutEffect=useUpdateLayoutEffect,exports.useFirstMountState=useFirstMountState;
