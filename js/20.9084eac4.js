(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{207:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a))e.push(r.apply(null,a));else if("object"===o)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}void 0!==e&&e.exports?e.exports=r:void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},208:function(e,t,n){"use strict";n(114),n(231)},209:function(e,t,n){"use strict";t.__esModule=!0;var a,r=n(113),o=(a=r)&&a.__esModule?a:{default:a};t.default=function(e,t,n){return t in e?(0,o.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},210:function(e,t,n){e.exports={default:n(220),__esModule:!0}},211:function(e,t,n){e.exports={default:n(217),__esModule:!0}},212:function(e,t,n){"use strict";var a=n(33),r=n.n(a),o=n(32),s=n.n(o),i=n(31),l=n.n(i),c=n(30),u=n.n(c),f=n(29),p=n.n(f),d=n(0),m=n.n(d),h=(n(227),function(e){function t(){return s()(this,t),u()(this,(t.__proto__||r()(t)).apply(this,arguments))}return p()(t,e),l()(t,[{key:"render",value:function(){return m.a.createElement("footer",null,m.a.createElement("div",{className:"copyright"},m.a.createElement("div",{className:"copyright-cn"},"众安·体验设计中心"),m.a.createElement("div",{className:"copyright-en"},"Zhongan UX Densign")))}}]),t}(d.Component));t.a=h},213:function(e,t,n){"use strict";var a=n(209),r=n.n(a),o=n(33),s=n.n(o),i=n(32),l=n.n(i),c=n(31),u=n.n(c),f=n(30),p=n.n(f),d=n(29),m=n.n(d),h=n(0),v=n.n(h),E=n(207),y=n.n(E),g=(n(228),function(e){function t(){return l()(this,t),p()(this,(t.__proto__||s()(t)).apply(this,arguments))}return m()(t,e),u()(t,[{key:"componentDidMount",value:function(){if("index-page"===this.props.className){var e=window.sessionStorage[this.props.className];e&&(this.container.scrollTop=e)}}},{key:"componentWillUnmount",value:function(){if("index-page"===this.props.className){var e=this.container.scrollTop;window.sessionStorage[this.props.className]=e}}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=t.children,o=y()(r()({"app-container":!0},n,!!n));return v.a.createElement("div",{ref:function(t){e.container=t},className:o},v.a.createElement("a",{className:"github",href:"https://github.com/ZhonganTechENG/zarm"},v.a.createElement("svg",{"aria-hidden":"true",version:"1.1",viewBox:"0 0 16 16"},v.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))),a)}}]),t}(h.Component));t.a=g},214:function(e,t,n){"use strict";var a=n(33),r=n.n(a),o=n(32),s=n.n(o),i=n(31),l=n.n(i),c=n(30),u=n.n(c),f=n(29),p=n.n(f),d=n(0),m=n.n(d),h=n(207),v=n.n(h),E=function(e){function t(){return s()(this,t),u()(this,(t.__proto__||r()(t)).apply(this,arguments))}return p()(t,e),l()(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,a=e.children,r=v()(""+t,n);return m.a.createElement("div",{className:r},a)}}]),t}(d.PureComponent),y=E;E.defaultProps={prefixCls:"za-panel"};var g=function(e){function t(){return s()(this,t),u()(this,(t.__proto__||r()(t)).apply(this,arguments))}return p()(t,e),l()(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,a=e.title,r=e.more,o=v()(t+"-header",n);return m.a.createElement("div",{className:o},a&&m.a.createElement("div",{className:t+"-title"},a),r&&m.a.createElement("div",{className:t+"-more"},r))}}]),t}(d.PureComponent),N=g;g.defaultProps={prefixCls:"za-panel"};var _=n(210),w=n.n(_),S=n(211),x=n.n(S),k=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof x.a){var r=0;for(a=x()(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},b=function(e){function t(){return s()(this,t),u()(this,(t.__proto__||r()(t)).apply(this,arguments))}return p()(t,e),l()(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,a=e.children,r=k(e,["prefixCls","className","children"]),o=v()(t+"-body",n);return m.a.createElement("div",w()({},r,{className:o}),a)}}]),t}(d.PureComponent),C=b;b.defaultProps={prefixCls:"za-panel"};var D=function(e){function t(){return s()(this,t),u()(this,(t.__proto__||r()(t)).apply(this,arguments))}return p()(t,e),l()(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,a=e.title,r=e.more,o=v()(t+"-footer",n);return m.a.createElement("div",{className:o},a&&m.a.createElement("div",{className:t+"-title"},a),r&&m.a.createElement("div",{className:t+"-more"},r))}}]),t}(d.PureComponent),T=D;D.defaultProps={prefixCls:"za-panel"},y.Header=N,y.Body=C,y.Footer=T;t.a=y},215:function(e,t,n){"use strict";n(208),n(230)},216:function(e,t,n){"use strict";var a=n(33),r=n.n(a),o=n(32),s=n.n(o),i=n(31),l=n.n(i),c=n(30),u=n.n(c),f=n(29),p=n.n(f),d=n(0),m=n.n(d),h=(n(229),function(e){function t(){return s()(this,t),u()(this,(t.__proto__||r()(t)).apply(this,arguments))}return p()(t,e),l()(t,[{key:"render",value:function(){var e=this.props.title;return m.a.createElement("header",{className:"header"},e)}}]),t}(d.Component));t.a=h},217:function(e,t,n){n(115),e.exports=n(8).Object.getOwnPropertySymbols},218:function(e,t,n){"use strict";var a=n(44),r=n(74),o=n(45),s=n(73),i=n(116),l=Object.assign;e.exports=!l||n(26)(function(){var e={},t={},n=Symbol(),a="abcdefghijklmnopqrst";return e[n]=7,a.split("").forEach(function(e){t[e]=e}),7!=l({},e)[n]||Object.keys(l({},t)).join("")!=a})?function(e,t){for(var n=s(e),l=arguments.length,c=1,u=r.f,f=o.f;l>c;)for(var p,d=i(arguments[c++]),m=u?a(d).concat(u(d)):a(d),h=m.length,v=0;h>v;)f.call(d,p=m[v++])&&(n[p]=d[p]);return n}:l},219:function(e,t,n){var a=n(16);a(a.S+a.F,"Object",{assign:n(218)})},220:function(e,t,n){n(219),e.exports=n(8).Object.assign},221:function(e,t,n){"use strict";var a=n(210),r=n.n(a),o=n(209),s=n.n(o),i=n(33),l=n.n(i),c=n(32),u=n.n(c),f=n(31),p=n.n(f),d=n(30),m=n.n(d),h=n(29),v=n.n(h),E=n(211),y=n.n(E),g=n(0),N=n.n(g),_=n(207),w=n.n(_),S=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof y.a){var r=0;for(a=y()(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},x=function(e){function t(){return u()(this,t),m()(this,(t.__proto__||l()(t)).apply(this,arguments))}return v()(t,e),p()(t,[{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,a=t.className,o=t.theme,i=t.hasArrow,l=t.icon,c=t.title,u=t.description,f=t.help,p=t.disabled,d=t.onClick,m=t.children,h=S(t,["prefixCls","className","theme","hasArrow","icon","title","description","help","disabled","onClick","children"]),v=w()(n,a,(e={},s()(e,"theme-"+o,!!o),s()(e,"disabled",p),s()(e,"is-link",!p&&!!d),s()(e,"has-icon",!!l),s()(e,"has-arrow",i),e)),E=l&&N.a.createElement("div",{className:n+"-icon"},l),y=c&&N.a.createElement("div",{className:n+"-title"},c),g=m&&N.a.createElement("div",{className:n+"-content"},m),_=i&&N.a.createElement("div",{className:n+"-arrow"}),x=f&&N.a.createElement("div",{className:n+"-help"},f);return N.a.createElement("div",r()({className:v,onClick:d,onTouchStart:function(){}},h),N.a.createElement("div",{className:n+"-inner"},N.a.createElement("div",{className:n+"-header"},E),N.a.createElement("div",{className:n+"-body"},y,g),N.a.createElement("div",{className:n+"-footer"},u),_),x)}}]),t}(g.PureComponent);t.a=x,x.defaultProps={prefixCls:"za-cell",hasArrow:!1,disabled:!1}},222:function(e,t,n){"use strict";n(208),n(235)},223:function(e,t,n){"use strict";var a=n(210),r=n.n(a),o=n(209),s=n.n(o),i=n(33),l=n.n(i),c=n(32),u=n.n(c),f=n(31),p=n.n(f),d=n(30),m=n.n(d),h=n(29),v=n.n(h),E=n(211),y=n.n(E),g=n(0),N=n.n(g),_=n(207),w=n.n(_),S=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof y.a){var r=0;for(a=y()(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},x=function(e){function t(){return u()(this,t),m()(this,(t.__proto__||l()(t)).apply(this,arguments))}return v()(t,e),p()(t,[{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,a=t.type,o=t.theme,i=t.className,l=S(t,["prefixCls","type","theme","className"]),c=w()(n,i,(e={},s()(e,n+"-"+a,!!a),s()(e,"theme-"+o,!!o),e));return N.a.createElement("i",r()({},l,{className:c}))}}]),t}(g.PureComponent);t.a=x,x.defaultProps={prefixCls:"za-icon"}},224:function(e,t,n){"use strict";n(208),n(239)},225:function(e,t,n){"use strict";var a=n(209),r=n.n(a),o=n(33),s=n.n(o),i=n(32),l=n.n(i),c=n(31),u=n.n(c),f=n(30),p=n.n(f),d=n(29),m=n.n(d),h=n(0),v=n.n(h),E=n(207),y=n.n(E),g=function(e){function t(){return l()(this,t),p()(this,(t.__proto__||s()(t)).apply(this,arguments))}return m()(t,e),u()(t,[{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,a=t.className,o=t.theme,s=t.size,i=t.percent,l=t.strokeWidth,c=y()(""+n,a,(e={},r()(e,"theme-"+o,!!o),r()(e,"size-"+s,!!s),e)),u=31-l/2,f=2*Math.PI*u,p={strokeDasharray:f*i/100+" "+f,strokeWidth:l};return v.a.createElement("svg",{className:""+c,viewBox:"0 0 62 62"},v.a.createElement("circle",{className:n+"-path",cx:31,cy:31,r:u,fill:"none",style:{strokeWidth:l}}),v.a.createElement("circle",{className:n+"-line",cx:31,cy:31,r:u,fill:"none",style:p}))}}]),t}(h.PureComponent);t.a=g,g.defaultProps={prefixCls:"za-spinner",theme:"primary",strokeWidth:5,percent:15}},226:function(e,t,n){"use strict";n(208),n(238)},234:function(e,t,n){"use strict";t.a={on:function(e,t,n){e.addEventListener?e.addEventListener(t,n,{passive:!1}):e.attachEvent("on "+t,function(){n.call(e)})},off:function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,{passive:!1}):e.detachEvent("off "+t,n)},once:function(e,t,n){for(var a=t.split(" "),r=function e(t){return t.target.removeEventListener(t.type,e,{passive:!1}),n(t)},o=a.length-1;o>=0;o-=1)this.on(e,a[o],r)}}},245:function(e,t,n){"use strict";var a=n(210),r=n.n(a),o=n(33),s=n.n(o),i=n(32),l=n.n(i),c=n(31),u=n.n(c),f=n(30),p=n.n(f),d=n(29),m=n.n(d),h=n(0),v=function(e){function t(){l()(this,t);var e=p()(this,(t.__proto__||s()(t)).apply(this,arguments));return e.dragState={},e.onTouchStart=function(t){var n=e.dragState,a=t.touches[0];n.startX=a.pageX,n.startY=a.pageY,n.startTime=new Date;var r=e.props.onDragStart;"function"==typeof r&&r(t,n)},e.onTouchMove=function(t){var n=e.dragState,a=t.touches[0],o=a.pageX,s=a.pageY,i=o-n.startX,l=s-n.startY,c=r()({},n,{offsetX:i,offsetY:l,currentX:o,currentY:s}),u=e.props.onDragMove;("function"!=typeof u||u(t,c))&&(e.dragState=c)},e.onTouchEnd=function(t){var n=e.dragState,a=e.props.onDragEnd;"function"==typeof a&&a(t,n),e.dragState={}},e}return m()(t,e),u()(t,[{key:"render",value:function(){var e=this.props.children;return Object(h.cloneElement)(e,{onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd})}}]),t}(h.PureComponent);t.a=v},332:function(e,t,n){},334:function(e,t,n){},412:function(e,t,n){"use strict";n.r(t);n(208),n(226),n(224),n(334);var a,r,o=n(209),s=n.n(o),i=n(210),l=n.n(i),c=n(33),u=n.n(c),f=n(32),p=n.n(f),d=n(31),m=n.n(d),h=n(30),v=n.n(h),E=n(29),y=n.n(E),g=n(0),N=n.n(g);!function(e){e[e.normal=0]="normal",e[e.pull=1]="pull",e[e.drop=2]="drop",e[e.loading=3]="loading",e[e.success=4]="success",e[e.failure=5]="failure"}(a||(a={})),function(e){e[e.normal=0]="normal",e[e.abort=1]="abort",e[e.loading=2]="loading",e[e.success=3]="success",e[e.failure=4]="failure",e[e.complete=5]="complete"}(r||(r={}));var _=n(207),w=n.n(_),S=n(234),x=arguments,k=function(e,t){var n=void 0,a=Date.now();return function(){var r=Date.now(),o=t-(r-a),s=x;clearTimeout(n),o<=0?(e.apply(void 0,s),a=Date.now()):n=setTimeout(e,o)}},b=n(245),C=n(225),D=n(223),T=function(e){function t(e){p()(this,t);var n=v()(this,(t.__proto__||u()(t)).call(this,e));return n.getScrollContainer=function(){return function(e){for(;e&&e.parentNode&&e.parentNode!==document.body;){var t=window.getComputedStyle(e);if(["scroll","auto"].indexOf(t.overflowY||"")>-1)return e;e=e.parentNode}}(n.pull)||document.documentElement},n.onScroll=function(){var e=n.state,o=e.refreshState,s=e.loadState,i=n.wrap,c=i.scrollHeight,u=i.scrollTop,f=i.clientHeight,p=l()({},t.defaultProps.load,n.props.load),d=p.handler,m=p.distance;"function"!=typeof d||o!==a.normal||s!==r.normal||c<=f||c-(u+document.body.scrollTop)-m>f||d()},n.onDragMove=function(e,r){var o=r.offsetY;if(!n.props.refresh.handler||o<=0||o>0&&n.wrap.scrollTop+document.body.scrollTop>0||n.state.refreshState>=a.loading)return!1;e.preventDefault();var s=l()({},t.defaultProps.refresh,n.props.refresh),i=o/2,c=i-s.startDistance<s.distance?a.pull:a.drop;return n.doRefreshAction(c,i),!0},n.onDragEnd=function(e,t){var r=t.offsetY;if(e.preventDefault(),r)if(n.state.refreshState!==a.pull){var o=n.props.refresh.handler;"function"==typeof o&&o()}else n.doRefreshAction(a.normal)},n.doTransition=function(e){var t=e.offsetY,a=e.animationDuration;n.setState({offsetY:t,animationDuration:a})},n.doRefreshAction=function(e,t){var o=n.props,s=o.animationDuration,i=o.stayTime;switch(n.setState({refreshState:e}),e){case a.pull:case a.drop:n.doTransition({offsetY:t,animationDuration:0});break;case a.loading:n.doTransition({offsetY:"auto",animationDuration:s});break;case a.success:case a.failure:n.doTransition({offsetY:"auto",animationDuration:s}),setTimeout(function(){n.doRefreshAction(a.normal),n.doLoadAction(r.normal)},i);break;default:n.doTransition({offsetY:0,animationDuration:s})}},n.doLoadAction=function(e){var t=n.props.stayTime;switch(n.setState({loadState:e}),e){case r.success:n.doLoadAction(r.normal);break;case r.failure:setTimeout(function(){n.doLoadAction(r.abort)},t)}},n.renderRefresh=function(){var e=l()({},t.defaultProps.refresh,n.props.refresh),r=e.startDistance,o=e.distance,s=e.render,i=n.state,c=i.refreshState,u=i.offsetY,f=0;if(u>=r&&(f=100*(u-r<o?u-r:o)/o),"function"==typeof s)return s(c,f);var p=n.props.prefixCls+"-control";switch(c){case a.pull:return N.a.createElement("div",{className:p},N.a.createElement(C.a,{percent:f}),N.a.createElement("span",null,"下拉刷新"));case a.drop:return N.a.createElement("div",{className:p},N.a.createElement(C.a,{percent:100}),N.a.createElement("span",null,"释放立即刷新"));case a.loading:return N.a.createElement("div",{className:p},N.a.createElement(C.a,{className:"rotate360"}),N.a.createElement("span",null,"加载中"));case a.success:return N.a.createElement("div",{className:p},N.a.createElement(D.a,{type:"right-round",theme:"success"}),N.a.createElement("span",null,"加载成功"));case a.failure:return N.a.createElement("div",{className:p},N.a.createElement(D.a,{type:"wrong-round",theme:"error"}),N.a.createElement("span",null,"加载失败"))}},n.renderLoad=function(){var e=l()({},t.defaultProps.load,n.props.load).render,a=n.state.loadState;if("function"==typeof e)return e(a);var o=n.props.prefixCls+"-control";switch(a){case r.loading:return N.a.createElement("div",{className:o},N.a.createElement(C.a,{className:"rotate360"}),N.a.createElement("span",null,"加载中"));case r.failure:return N.a.createElement("div",{className:o},N.a.createElement(D.a,{type:"wrong-round",theme:"error"}),N.a.createElement("span",null,"加载失败"));case r.complete:return N.a.createElement("div",{className:o},N.a.createElement("span",null,"我是有底线的"))}},n.state={offsetY:0,animationDuration:0,refreshState:e.refresh.state,loadState:e.load.state},n}return y()(t,e),m()(t,[{key:"componentDidMount",value:function(){this.wrap=this.getScrollContainer();var e=this.wrap===document.documentElement?window:this.wrap;S.a.on(e,"scroll",k(this.onScroll,250))}},{key:"componentWillReceiveProps",value:function(e){"refresh"in e&&e.refresh.state!==this.props.refresh.state&&this.doRefreshAction(e.refresh.state),"load"in e&&e.load.state!==this.props.load.state&&this.doLoadAction(e.load.state)}},{key:"componentWillUnmount",value:function(){var e=this.wrap===document.documentElement?window:this.wrap;S.a.off(e,"scroll",this.onScroll)}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,o=t.className,i=t.children,l=this.state,c=l.offsetY,u=l.animationDuration,f=l.refreshState,p=l.loadState,d=w()(n,o),m=w()(n+"-load",s()({},n+"-load-show",p>=r.loading)),h={WebkitTransition:"all "+u+"ms",transition:"all "+u+"ms"};return f<=a.drop&&(h.WebkitTransform="translate3d(0, "+c+"px, 0)",h.transform="translate3d(0, "+c+"px, 0)"),N.a.createElement(b.a,{onDragMove:this.onDragMove,onDragEnd:this.onDragEnd},N.a.createElement("div",{className:d},N.a.createElement("div",{className:n+"-content",style:h,ref:function(t){e.pull=t}},N.a.createElement("div",{className:n+"-refresh"},this.renderRefresh()),N.a.createElement("div",{className:n+"-body"},i),N.a.createElement("div",{className:m},this.renderLoad()))))}}]),t}(g.PureComponent),P=T;T.defaultProps={prefixCls:"za-pull",refresh:{state:a.normal,startDistance:30,distance:50},load:{state:r.normal,distance:0},animationDuration:400,stayTime:1e3};n(215);var O=n(214),M=(n(222),n(221)),Y=n(213),A=n(216),L=n(212),j=(n(332),{normal:0,pull:1,drop:2,loading:3,success:4,failure:5}),R={normal:0,abort:1,loading:2,success:3,failure:4,complete:5};var z=function(e){function t(e){p()(this,t);var n=v()(this,(t.__proto__||u()(t)).call(this,e));return n.fetchData=function(e){n.setState(s()({},""+e,j.loading)),setTimeout(function(){if(n.mounted){for(var t=[],a=t.length,r=a;r<a+20;r++)t.push(N.a.createElement(M.a,{key:+r},"第 ",r+1," 行"));n.setState(s()({dataSource:t},""+e,j.success))}},2e3)},n.loadData=function(){n.setState({customLoading:R.loading}),setTimeout(function(){if(n.mounted){var e,t,a,r=(t=5-(e=0),a=Math.random(),e+Math.round(a*t)),o=n.state.dataSource,s=R.success;if(console.log("状态: "+(0===r?"失败":1===r?"完成":"成功")),0===r)s=R.failure;else if(1===r)s=R.complete;else for(var i=o.length,l=i;l<i+5;l++)o.push(N.a.createElement(M.a,{key:+l},"第 ",l+1," 行"));n.setState({dataSource:o,customLoading:s})}},2e3)},n.mounted=!0,n.state={customRefreshing:j.normal,customLoading:R.normal,dataSource:[]},n}return y()(t,e),m()(t,[{key:"componentDidMount",value:function(){this.fetchData("customRefreshing")}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){for(var e=this,t=this.state,n=t.customRefreshing,a=t.customLoading,r=t.dataSource,o=[],s=0;s<3;s++)o.push(N.a.createElement(M.a,{key:+s},"第 ",s+1," 行"));return N.a.createElement(Y.a,{className:"pull-page"},N.a.createElement(A.a,{title:"上拉加载下拉刷新 Pull"}),N.a.createElement("main",null,N.a.createElement(O.a,null,N.a.createElement(O.a.Header,{title:"基本"}),N.a.createElement(O.a.Body,null,N.a.createElement(P,{refresh:{state:n,handler:function(){return e.fetchData("customRefreshing")}},load:{state:a,handler:this.loadData}},r)))),N.a.createElement(L.a,null))}}]),t}(g.Component);t.default=z}}]);