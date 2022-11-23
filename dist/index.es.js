import{useRef as t,useState as n,useCallback as e,useEffect as r,useLayoutEffect as a}from"react";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,a=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f=function(a){var o=t(!1),u=i(n(!1),2),f=u[0],c=u[1],s=i(n(!1),2),l=s[0],d=s[1],v=t(!1),p=e(function(t){t.target===a&&(v.current=!1,o.current||c(!1))},[a]);r(function(){return a&&a.addEventListener("transitionend",p,!1),function(){a&&a.removeEventListener("transitionend",p)}},[a,p]),r(function(){f&&setTimeout(function(){d(!0)},10)},[f]);var g=e(function(t){t!==o.current&&(v.current&&(c(o.current),d(o.current),v.current=!1),setTimeout(function(){o.current=t,v.current=!0,t?c(!0):d(!1)},10))},[]);return[f,l,g]},c={},s=null,l=null,d=!0,v=0,p=function(t,r,a,o,f){var p=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},g=i(n(0),2),y=g[0],m=g[1],h=e(t,r),L=e(a,o),b=p.leading,T=p.trailing,w=p.maxWait,S=e(function(){if(h&&(f||!c[t])){c[t]=!0;var n=h.apply(void 0,arguments);n&&n.then?(m(function(t){return t+1}),n.then(function(t){return t},function(t){return t}).then(function(n){n&&L(n),c[t]=!1,m(function(t){return t-1})})):c[t]=!1}},[f,c,h,L]);return[y>0,e(function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];if(f){var a=(new Date).getTime();s&&clearTimeout(s),b&&d&&(d=!1,S.apply(void 0,n)),w>0&&a-v>w&&(0!==v&&S.apply(void 0,n),v=a),s=setTimeout(function(){v=0,S.apply(void 0,n),s=null,d=!0},f),T&&(l&&(clearTimeout(l),l=null),l=setTimeout(function(){S.apply(void 0,u(r)),l=null},f))}else S.apply(void 0,n)},[S,v,s,d])]},g=!1,y=function(t,r,a,o){var u=i(n(!1),2),f=u[0],c=u[1],s=e(t,r),l=e(a,o);return[f,e(function(){if(!g&&s){g=!0;var t=s.apply(void 0,arguments);t&&t.then?(c(!0),t.then(function(t){return t},function(t){return t}).then(function(t){t&&l(t),g=!1,c(!1)})):g=!1}},[g,s,c])]},m=function(){var t=i(n(0),2),e=t[0],a=t[1];return r(function(){if(0===e)return function(){};var t=setInterval(function(){a(function(t){return t>0?t-1:0})},1e3);return function(){clearInterval(t)}},[e]),[e,a]},h=function(t,r){var a=i(n(t),2),o=a[0],u=a[1],f=i(n(!1),2),c=f[0],s=f[1],l=e(function(){r instanceof RegExp?s(!r.test(o)):r instanceof Function&&s(r(o))},[r,o]);return[o,u,c,l]},L=function(t,a){var o=i(n(function(){return a&&"function"==typeof a?a:function(){}}),2),u=o[0],f=o[1],c=i(n(!1),2),s=c[0],l=c[1];return r(function(){var n=function(n){if(u&&"function"==typeof u){if(t===n.key)return void u(n.key,n);if(t===n.code)return void u(n.code,n);t===n.keyCode&&u(n.keyCode,n)}};return s&&window.addEventListener("keydown",n,!1),function(){s&&window.removeEventListener("keydown",n)}},[t,s,u]),[e(function(){l(!0)},[]),e(function(){l(!1)},[]),e(function(t){t&&"function"==typeof t&&f(function(){return t})},[])]},b=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=a.namespace,f=a.dragStyle,c=a.dragData,s=a.droppingStyle,l=a.dropHandler,d=i(n(),2),v=d[0],p=d[1],g=i(n(function(){return c}),2),y=g[0],m=g[1],h=i(n(function(){return l||function(){}}),2),L=h[0],b=h[1],T=e(function(t){p(t)},[]),w=e(function(t){b(function(){return t})},[]),S=e(function(t){m(function(){return t})},[]),E=e(function(t){for(var n=t.target,e=0,r=0;n&&n!==v;)n.offsetParent?(e+=n.offsetLeft,r+=n.offsetTop,n=n.offsetParent):n=n.parentElement;var a=e+t.offsetX,o=r+t.offsetY;return[a<v.clientWidth/2,o<v.clientHeight/2]},[v]),j=e(function(t,n,e){if(v){var r=!n,a=!e,o=t.basic,i=t.left,u=t.right,f=t.top,c=t.bottom,s=t.leftTop,l=t.leftBottom,d=t.rightTop,p=t.rightBottom;o&&v.classList.add(o),i&&(n?v.classList.add(i):v.classList.remove(i)),u&&(r?v.classList.add(u):v.classList.remove(u)),f&&(e?v.classList.add(f):v.classList.remove(f)),c&&(a?v.classList.add(c):v.classList.remove(c)),s&&(n&&e?v.classList.add(s):v.classList.remove(s)),l&&(n&&a?v.classList.add(l):v.classList.remove(l)),d&&(r&&e?v.classList.add(d):v.classList.remove(d)),p&&(r&&a?v.classList.add(p):v.classList.remove(p))}},[v]);return r(function(){if(!v)return function(){};var n=function(t){return function(n){if("dragover"!==t&&"drop"!==t||n.preventDefault(),"dragstart"===t)if(n.target.dataset.dragging=!0,f&&"string"==typeof f?n.target.classList.add(f):"function"==typeof f&&f(n.target),"function"==typeof y){var e=y(n.target,n);if(e){var r=JSON.stringify({namespace:u,data:e});n.dataTransfer.setData("text/plain",r)}}else{var a=JSON.stringify({namespace:u,data:y});n.dataTransfer.setData("text/plain",a)}if("dragend"===t&&(delete n.target.dataset.dragging,f&&"string"==typeof f?n.target.classList.remove(f):"function"==typeof f&&f(n.target),n.dataTransfer.setData("text/plain",null)),"dragover"===t){if(v.dataset.dragging)return;var c=i(E(n),2),l=c[0],d=c[1];s&&"string"==typeof s?v.classList.add(s):"object"===o(s)?j(s,l,d):"function"==typeof s&&s(v,"over")}if("dragleave"===t){if(v.dataset.dragging)return;s&&"string"==typeof s?v.classList.remove(s):"object"===o(s)?Object.values(s).map(function(t){return v.classList.remove(t)}):"function"==typeof s&&s(v,"leave")}if("drop"===t){if(v.dataset.dragging)return;s&&"string"==typeof s?v.classList.remove(s):"object"===o(s)?Object.values(s).map(function(t){return v.classList.remove(t)}):"function"==typeof s&&s(v,"leave");var p=n.dataTransfer.getData("text");try{p=JSON.parse(p)}catch(t){return}if(!p||p.namespace!==u)return;var g=i(E(n),2),m=g[0],h=g[1],b=p.data;L&&"function"==typeof L&&L(b,{isLeft:m,isTop:h},v)}}},e=["dragstart","dragend"],r=["dragleave","dragover","drop"],a=[];switch(t){case"drag":a.push.apply(a,e),v.draggable=!0;break;case"drop":a.push.apply(a,r);break;case"drag-n-drop":a.push.apply(a,e.concat(r)),v.draggable=!0}var c=a.map(function(t){return{eventName:t,handler:n(t)}});return c.forEach(function(t){var n=t.eventName,e=t.handler;v.addEventListener(n,e,!1)}),function(){c.forEach(function(t){var n=t.eventName,e=t.handler;v.removeEventListener(n,e)})}},[v,y,L]),[T,w,S]};function T(){var n=t(!0);return n.current?(n.current=!1,!0):n.current}var w=function(t,n){var e=T();r(function(){if(!e)return t()},n)},S=function(t,n){var e=T();a(function(){if(!e)return t()},n)};export{f as useAnimation,p as useAsyncDebounce,y as useAsync,m as useCountdown,h as useInput,L as useKeyDown,b as useDragNDrop,w as useUpdateEffect,S as useUpdateLayoutEffect,T as useFirstMountState};
