webpackJsonp([0],{Tv6c:function(t){t.exports={profile:"profile__1f25-"}},n73f:function(t,e,n){"use strict";function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"default",function(){return l});var i=n("KM04"),u=(n.n(i),n("Tv6c")),c=n.n(u),l=function(t){function e(){for(var e,n,r,i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return e=n=o(this,t.call.apply(t,[this].concat(u))),n.state={time:Date.now(),count:10},n.updateTime=function(){n.setState({time:Date.now()})},n.increment=function(){n.setState({count:n.state.count+1})},r=e,o(n,r)}return r(e,t),e.prototype.componentDidMount=function(){this.timer=setInterval(this.updateTime,1e3)},e.prototype.componentWillUnmount=function(){clearInterval(this.timer)},e.prototype.render=function(t,e){var o=t.user,r=e.time,u=e.count;return n.i(i.h)("div",{class:c.a.profile},n.i(i.h)("h1",null,"Profile: ",o),n.i(i.h)("p",null,"This is the user profile for a user named ",o,"."),n.i(i.h)("div",null,"Current time: ",new Date(r).toLocaleString()),n.i(i.h)("p",null,n.i(i.h)("button",{onClick:this.increment},"Click Me")," ","Clicked ",u," times."))},e}(i.Component)}});
//# sourceMappingURL=0.chunk.08dc3.js.map