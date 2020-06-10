(this["webpackJsonpsharing-control-props"]=this["webpackJsonpsharing-control-props"]||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);a(73);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),i=a(6),o=a(9),s=a(11),u=a(15),m={isSignedIn:!1,currUser:null,favorites:[],clientId:"867791205142-9dl1r1afbc6n20f3hr1efsn63v3e2t9c.apps.googleusercontent.com"},d=Object(n.createContext)(m),E=d.Provider;function f(e,t){var a=e.clientId,n=e.favorites,r=e.currUser,c=t.url;switch(t.type){case"signIn":return{isSignedIn:!0,currUser:t.user,favorites:n,clientId:a};case"like":return n.push(c),{isSignedIn:!0,currUser:r,favorites:n.slice(0),clientId:a};case"unlike":return n.splice(function(e){for(var t=e.length,a=0;a<t;a+=1)if(e[a]===c)return a;return-1}(n),1),{isSignedIn:!0,currUser:r,favorites:n.slice(0),clientId:a};default:return m}}var g=function(e){var t=e.children,a=Object(n.useReducer)(f,m),c=Object(s.a)(a,2),l=c[0],i=c[1];return r.a.createElement(E,{value:{state:l,dispatch:i}},t)},h=function(){var e=window.innerWidth;return e>=1200?1110:e>=992?930:e>=768?690:e>=576?510:e-30},A=function(){var e=Object(n.useState)(h()),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(h())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a};a(25);var v=function(){var e=Object(i.g)(),t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],l=a[1],o=Object(n.useContext)(d),m=o.state,E=o.dispatch,f=m.isSignedIn,g=m.clientId,h=r.a.createElement(i.a,{to:"./search"}),A=r.a.createElement("div",{className:"nice"},r.a.createElement("header",{className:"center"},r.a.createElement("h1",{id:"title"},"Giphy Search"),r.a.createElement(u.GoogleLogin,{clientId:g,render:function(e){return r.a.createElement("button",{type:"button",onClick:e.onClick,disabled:e.disabled,className:"login"})},onSuccess:function(t){E({type:"signIn",user:t}),e.push("./search")},onFailure:function(e){l(e.error)},cookiePolicy:"single_host_origin"}),c.length>0?(console.log("failed"),r.a.createElement("h4",null,"Try again.")):null));return f?h:A},p=a(126),b=a(129),y=a(127),I=a(130),N=a(21),O=a(14),j=a(28),x=a.n(j),k=a(22),C=a.n(k);function w(e){var t=Object(n.useContext)(d),a=Object(i.g)(),c=t.state,l=t.dispatch,o=c.currUser,m=c.isSignedIn,E=c.clientId,f=e.searchRes,g=e.setSearch,h=o?o.profileObj:null,A=Object(n.useState)(0),v=Object(s.a)(A,2),y=v[0],I=v[1];if(!m||!h)return r.a.createElement(i.a,{to:"../"});var N,O=h.givenName,j=O.indexOf(",");N=-1===j?O:O.slice(0,j);var x=0===f.length?r.a.createElement("h1",null,"Trending"):r.a.createElement("h1",null,"Search");return r.a.createElement(p.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},x),r.a.createElement("div",{className:"col text-right"},r.a.createElement("p",null,"Welcome,",r.a.createElement("span",{className:"bold"}," ".concat(N," ").concat(h.familyName))),r.a.createElement(u.GoogleLogout,{clientId:E,render:function(e){return r.a.createElement("button",{type:"button",style:{backgroundColor:"white",border:"1px solid #ced4da"},onClick:function(){l({type:"signOut"}),e.onClick()}},r.a.createElement("img",{className:"g-icon",src:C.a,alt:"g-icon"}),"Logout")},onLogoutSuccess:function(){a.push("/")}}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(b.a.Group,{className:"w-50"},r.a.createElement(b.a.Control,{type:"text",onChange:function(e){return function(e){y&&clearTimeout(y);var t=setTimeout((function(){return g(e)}),600);I(t)}(e.target.value)},defaultValue:f,placeholder:"Search for gifs",className:"ml-xl-0"}))))))}function S(e){var t=A(),a=Object(i.g)(),c=e.searchRes,l=Object(n.useRef)(new O.GiphyFetch("xnRLsVCSkmNxrfX34lVxjbuN4faLWKbq")).current,o=0===c.length?function(e){return l.trending({offset:e,limit:10})}:function(e){return l.search(c,{offset:e,limit:10})};return r.a.createElement(N.Grid,{key:c,width:t,columns:3,fetchGifs:o,onGifClick:function(e,t){t.stopPropagation(),t.preventDefault();var n,r=e.url,l=r.lastIndexOf("-"),i=r.lastIndexOf("/");n=l>-1?r.slice(l+1):i>-1?r.slice(i+1):r,a.push("/details",{url:n,res:c})}})}function R(){return r.a.createElement("div",{className:"fixed-bottom"},r.a.createElement(y.a,null,r.a.createElement(I.a,{justify:!0,variant:"tabs",className:"custom"},r.a.createElement(I.a.Item,{href:"/search"},r.a.createElement(I.a.Link,{disabled:"true"},"Search")),r.a.createElement(I.a.Item,{href:"/favorites"},r.a.createElement(I.a.Link,{as:o.b,to:"/favorites"},"Favorites")))))}var L=function(){var e=Object(i.h)().state,t=e?e.res:"",a=Object(n.useState)(t),c=Object(s.a)(a,2),l=c[0],o=c[1];return r.a.createElement(y.a,null,r.a.createElement(w,{searchRes:l,setSearch:o}),r.a.createElement("header",null,r.a.createElement("img",{src:x.a,width:"400",alt:"Powered by GIPHY"})),r.a.createElement(S,{searchRes:l}),r.a.createElement(R,null))},B=a(41),G=a.n(B),W=a(66),P=a(131),D=a(128),F=a(42),Z=a(67),U=a(47);function Y(){var e=Object(n.useContext)(d),t=Object(i.g)(),a=e.state,c=e.dispatch,l=a.currUser,o=a.isSignedIn,s=a.clientId,m=l?l.profileObj:null;if(!o)return r.a.createElement(i.a,{to:"../"});var E,f=m.givenName,g=f.indexOf(",");return E=-1===g?f:f.slice(0,g),r.a.createElement(p.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h1",null,"Details")),r.a.createElement("div",{className:"col text-right"},r.a.createElement("p",null,"Welcome,",r.a.createElement("span",{className:"bold"}," ".concat(E," ").concat(m.familyName))),r.a.createElement(u.GoogleLogout,{clientId:s,render:function(e){return r.a.createElement("button",{type:"button",style:{backgroundColor:"white",border:"1px solid #ced4da"},onClick:function(){c({type:"signOut"}),e.onClick()}},r.a.createElement("img",{className:"g-icon",src:C.a,alt:"g-icon"}),"Logout")},onLogoutSuccess:function(){t.push("../")}})))))}function M(e){var t=Object(n.useContext)(d),a=t.state,c=t.dispatch,l=a.favorites,i=e.url;var o=Object(n.useState)(function(e){for(var t=e.length,a=0;a<t;a+=1)if(e[a]===i)return!0;return!1}(l)),u=Object(s.a)(o,2),m=u[0],E=u[1],f=m?"Remove from favorites":"Add to favorites";return r.a.createElement(P.a,{placement:"right",overlay:r.a.createElement(D.a,{id:"tooltip-right"},f)},r.a.createElement("button",{type:"button",className:"action",onClick:function(e){return function(e,t){e.preventDefault(),E(t),c(t?{type:"like",url:i}:{type:"unlike",url:i})}(e,!m)}},r.a.createElement(F.a,{icon:m?U.a:Z.a,style:{color:"red"},size:"2x"})))}function T(e){var t=e.url;return r.a.createElement(P.a,{placement:"right",overlay:r.a.createElement(D.a,{id:"tooltip-right"},"Copy link to clipboard")},r.a.createElement("button",{type:"button",className:"action",onClick:function(e){e.preventDefault();var a="https://giphy.com/gifs/".concat(t);navigator.clipboard.writeText(a)}},r.a.createElement(F.a,{icon:U.b,style:{color:"black"},size:"2x"})))}function J(e){var t,a,c,l=e.res,o=e.url,u=Object(i.g)(),m=Object(n.useState)(null),d=Object(s.a)(m,2),E=d[0],f=d[1],g=Math.min(400,A());if(Object(n.useEffect)((function(){(function(){var e=Object(W.a)(G.a.mark((function e(){var t,a,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new O.GiphyFetch("xnRLsVCSkmNxrfX34lVxjbuN4faLWKbq"),e.next=3,t.gif(o);case 3:a=e.sent,n=a.data,f(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),E){var h=E.title,v=E.user,p=E.import_datetime,b=h.lastIndexOf("GIF");t=h.slice(0,b-1),a=v?v.display_name:"<Unknown User>";var y=p.lastIndexOf(" ");c=p.slice(0,y)}return E?r.a.createElement("div",{className:"container space"},r.a.createElement("header",null," ",r.a.createElement("h2",null,t)),r.a.createElement("div",{style:{textAlign:"center",pointerEvents:"none"}},r.a.createElement(N.Gif,{gif:E,onGifClick:function(e){e.stopPropagation(),e.preventDefault()},width:g})),r.a.createElement("h3",null,a),r.a.createElement("h4",null,c),r.a.createElement("div",{className:"row no-gutters",style:{marginBottom:"2px",width:"30%"}},r.a.createElement("div",{className:"col-4 col-sm-2"},r.a.createElement(M,{url:o})),r.a.createElement("div",{className:"col-4 col-sm-2"},r.a.createElement(T,{url:o}))),r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("button",{type:"button",className:"link",onClick:function(){return u.push("./search",{res:l})}},"More search results"))):r.a.createElement("p",null,"Loading the picture...")}function Q(){return r.a.createElement("div",{className:"fixed-bottom"},r.a.createElement(y.a,null,r.a.createElement(I.a,{justify:!0,variant:"tabs"},r.a.createElement(I.a.Item,{href:"/search"},r.a.createElement(I.a.Link,{as:o.b,to:"/search"},"Search")),r.a.createElement(I.a.Item,{href:"/favorites"},r.a.createElement(I.a.Link,{as:o.b,to:"/favorites"},"Favorites")))))}var H=function(){var e=Object(i.h)().state,t=Object(i.g)(),a=e?r.a.createElement(J,{url:e.url,res:e.res}):r.a.createElement("div",{className:"header"},r.a.createElement("header",null,r.a.createElement("p",null,"Oops, you have not selected an image to view yet!"),r.a.createElement("button",{type:"button",onClick:function(){return t.push("/search")}},"Back to Search")));return r.a.createElement(y.a,null,r.a.createElement(Y,null),a,r.a.createElement(Q,null))};function X(){var e=Object(n.useContext)(d),t=Object(i.g)(),a=e.state,c=e.dispatch,l=a.currUser,o=a.isSignedIn,s=a.clientId,m=l?l.profileObj:null;if(!o)return r.a.createElement(i.a,{to:"../"});var E,f=m.givenName,g=f.indexOf(",");return E=-1===g?f:f.slice(0,g),r.a.createElement(p.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h1",null,"Favorites")),r.a.createElement("div",{className:"col text-right"},r.a.createElement("p",null,"Welcome,",r.a.createElement("span",{className:"bold"}," ".concat(E," ").concat(m.familyName))),r.a.createElement(u.GoogleLogout,{clientId:s,render:function(e){return r.a.createElement("button",{type:"button",style:{backgroundColor:"white",border:"1px solid #ced4da"},onClick:function(){c({type:"signOut"}),e.onClick()}},r.a.createElement("img",{className:"g-icon",src:C.a,alt:"g-icon"}),"Logout")},onLogoutSuccess:function(){t.push("../")}})))))}function z(){var e=Object(n.useContext)(d).state.favorites.slice(0).reverse(),t=new O.GiphyFetch("xnRLsVCSkmNxrfX34lVxjbuN4faLWKbq"),a=A(),c=Object(i.g)();if(0===e.length)return r.a.createElement("div",{className:"header"},r.a.createElement("header",null,r.a.createElement("p",null,"Oops, you don't have any favorites yet!"),r.a.createElement("button",{type:"button",onClick:function(){return c.push("./search")}},"Back to Search")));var l=e.join();return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("img",{src:x.a,width:"400",alt:"Powered by GIPHY"})),r.a.createElement(N.Grid,{key:l,width:a,columns:3,fetchGifs:function(a){return t.gifs(e)},onGifClick:function(e,t){t.stopPropagation(),t.preventDefault();var a,n=e.url,r=n.lastIndexOf("-"),l=n.lastIndexOf("/");a=r>-1?n.slice(r+1):l>-1?n.slice(l+1):n,c.push("./details",{url:a,res:""})}}))}function K(){return r.a.createElement("div",{className:"fixed-bottom"},r.a.createElement(y.a,null,r.a.createElement(I.a,{justify:!0,variant:"tabs"},r.a.createElement(I.a.Item,{href:"/search"},r.a.createElement(I.a.Link,{as:o.b,to:"/search"},"Search")),r.a.createElement(I.a.Item,{href:"/favorites"},r.a.createElement(I.a.Link,{disabled:"true"},"Favorites")))))}var V=function(){return r.a.createElement(y.a,null,r.a.createElement(X,null),r.a.createElement(z,null),r.a.createElement(K,null))};var q=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Not found"),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/"},"Try logging in again. ")))};function _(){return r.a.createElement("main",null,r.a.createElement(g,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",component:v,exact:!0}),r.a.createElement(i.b,{path:"/search",component:L}),r.a.createElement(i.b,{path:"/details",component:H}),r.a.createElement(i.b,{path:"/favorites",component:V}),r.a.createElement(i.b,{component:q}))))}l.a.render(r.a.createElement(o.a,{basename:"/giphy-search"},r.a.createElement(_,null)),document.getElementById("root"))},22:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAcCAYAAACZOmSXAAAAAXNSR0IArs4c6QAAAFBlWElmTU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAH6ADAAQAAAABAAAAHAAAAAAl+oE4AAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAADQklEQVRIDe2WX0hTURzHv7t310236WL+TR2atMQUS8X+kGGmEETQQw/5FmQSBBFRaASi9FIS9JDQgw8R1EMPSlQPJlEP+iBkD2ZJyswUGZvMXdfc2nbv7jp3c7Yr3ru7CHyoA7v3nN/9/b6f8/udc+6dJkoadqhRO8SNYf9duDbdsnOzMwi+Gga/YEfEsYwoFwZtyQNTcwC65jZkNBxWLalRu+EiLid8/X3gpj4qimura5Hd1Qu6qFjRT3yoCs7NTMPbcxPRNU9KQdGBqWuEuX8gpW9KeMS9ArajHdF1n0SMLrFCW2FDVBDAz89BIEsgNu3eSuQQMGXKlvhvN0i55r7+XgmYysuH8WoXdEeaJHqhsfcIjryEqbtPFVgMVsw8yo4j8PgcAm9KgAgFypIL84NB0LtTr6dkZjIDxcwF51Poaj2gC3/CP1wOw8UrcbD4UiTlBsidokkKGhl5ZbNi5vxEHeD/HFMQeAuY1mVoaALjOGCG2FfdeOSsgl9vEksIOsojotEizOg3qcdsNJoqt89xe2siNLiU6JGS74uDExZxEmSjaadYEDSyeR/cOguWsqyYMtkSXjDq8IfwTYktHYYBCgrJmWKwZ30eQToTRgJ36fKhFSIS5zAvGUoGypnrS0nZv8QCgoEFZBJhWlxjseWYgdZTmHCy4KgMUnYB64wRP6gsIBB3Ea9mg/x+UIQLpgZQBD7HZ+OWpwqdi2M4Xd4cV87IAMhZv91tjY83ri8mOTwcDW/arBb5b5f8ExIuFLTjdbAUl9aa4BAMGPj0DMvrrk3hrR1vIIqhD2QzbjQx58aKjUoljEl3Rbg+twVvDRdAPh2xEHeQxeV3PRhzTCZJxLuz7AKuPf8OB/v7v8nJaho5WfJlVzxqouxKYBXnR67Dx/klQKuxCLZd5aA1FBZ9Dnxlv0Ej6KF3dYIJ1MNAdvlgRyYKcuTzSwkXidPuOdwYvwdPyCuZgNygIHQWd46342CZfMnFWPlpJSnX5NrwpO0u6vP3J1m375aZinH/zNGUYDFaVebJmBmPHUP2Udi9S2TzORGKhGHRm1FtsaGl5BBOkB9FlkJNSxuuRlStj7opqlVL0+8/PM2C/R33HS37L06iGeZMsRidAAAAAElFTkSuQmCC"},25:function(e,t,a){},28:function(e,t,a){e.exports=a.p+"static/media/giphy.7043b95a.gif"},72:function(e,t,a){e.exports=a(121)},99:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=99}},[[72,1,2]]]);
//# sourceMappingURL=main.2019a4dc.chunk.js.map