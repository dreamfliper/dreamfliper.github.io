webpackJsonp([4],{540:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),f=n.n(l),u=n(222),s=n.n(u),p=n(217),y=n(219),d=n(218),h=n.n(d),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b=c(["\n\tfont-size:40px;\n\twidth: 80vw;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n\ttext-decoration: none;\n"],["\n\tfont-size:40px;\n\twidth: 80vw;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n\ttext-decoration: none;\n"]),v=c(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n"],["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n"]),w=y.a.section(b),x=y.a.div(v),j=function(e){function t(){var e,n,r,a;o(this,t);for(var c=arguments.length,l=Array(c),f=0;f<c;f++)l[f]=arguments[f];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.state={filelist:[],spin:!0},a=n,i(r,a)}return a(t,e),m(t,[{key:"componentDidMount",value:function(){var e=this;new s.a({accessToken:"UVoVCEKzMf4AAAAAAAAQQpNz6Ya0Bu0cAEqT_pHWX0iCyqgkmrsSiQeP1Dho6gQT"}).filesListFolder({path:"/notes"}).then(function(t){var n=!0,o=!1,i=void 0;try{for(var a,c=t.entries[Symbol.iterator]();!(n=(a=c.next()).done);n=!0){var l=a.value;e.setState({filelist:[].concat(r(e.state.filelist),[l.name.split(".")[0]]),spin:!1})}}catch(e){o=!0,i=e}finally{try{!n&&c.return&&c.return()}finally{if(o)throw i}}}).catch(function(e){console.error(e)})}},{key:"render",value:function(){return f.a.createElement(x,null,this.state.spin&&f.a.createElement(h.a,{fadeIn:"none",name:"line-scale",color:"steelblue"}),f.a.createElement("ul",null,this.state.filelist.map(function(e,t){return f.a.createElement(w,{key:t},f.a.createElement(p.a,{style:{width:"80vw",textDecoration:"none"},to:"/note/"+e},e))})))}}]),t}(l.Component);t.default=j}});
//# sourceMappingURL=4.aef7bfde.chunk.js.map