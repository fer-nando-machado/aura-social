(this["webpackJsonpaura-social"]=this["webpackJsonpaura-social"]||[]).push([[0],{20:function(e,a,t){e.exports=t(38)},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(16),o=t.n(c),s=(t(25),t(18)),i=t(1),u=t(6);t(26),t(27);var l=function(e){var a="Header "+(e.inner?"HeaderInner":"");return n.a.createElement("div",{className:a},n.a.createElement("img",{src:"".concat("/aura-social/images/","lotus.svg"),alt:"Aura Social"}),n.a.createElement("div",{className:"HeaderTitle"},"Aura SociaL"))};t(28);var m=function(){return n.a.createElement("div",{className:"Footer"},n.a.createElement("a",{className:"Link",href:"https://github.com/fernandomachado90/aura-social"},n.a.createElement("span",null,"Made with \u2661 by Fernando Machado"))," | ",n.a.createElement("a",{className:"Link",href:"https://www.flaticon.com/authors/good-ware"},n.a.createElement("span",null,"Icons by Good Ware")))};t(29);var h=function(){return n.a.createElement("a",{className:"InstagramAccess Link",href:"https://api.instagram.com/oauth/authorize?client_id=784647572278376&redirect_uri=https://fernandomachado90.github.io/aura-social/&scope=user_profile,user_media&response_type=code"},n.a.createElement("img",{src:"".concat("/aura-social/images/","instagram.svg"),alt:"Continue with Instagram"}),n.a.createElement("span",null,"Continue with Instagram"))};t(30);var f=function(e){var a=e.message,t=e.retry;return n.a.createElement("div",{className:"InstagramStep"},a,t&&n.a.createElement("p",null,n.a.createElement("a",{className:"Link",href:"/aura-social/"},n.a.createElement("span",null,"Try Again"))))},d=(t(31),new(t(17).a));var p=function(e){var a=e.urls,t=a.length,c=Object(r.useState)(0),o=Object(u.a)(c,2),s=o[0],i=o[1],l=Object(r.useState)("rgb(255,255,255)"),m=Object(u.a)(l,2),h=m[0],f=m[1];return n.a.createElement("div",{className:"InstagramMedia"},s<t&&n.a.createElement("img",{src:a[s],onLoad:function(e){return function(e){var a=d.getColor(e.target,7);f("rgb(".concat(a[0],", ").concat(a[1],", ").concat(a[2],")")),s+1<t&&i(s+1)}(e)},style:{border:"3px dashed ".concat(h)},alt:"",crossOrigin:"anonymous"}),n.a.createElement("span",null,Math.floor(100*(s+1)/t),"%"))},g=t(9),b=t.n(g),E=t(11),v={authorize:function(){var e=Object(E.a)(b.a.mark((function e(a){var t,r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://aura-social.herokuapp.com/authorize",t={client_id:"784647572278376",redirect_uri:"https://fernandomachado90.github.io/aura-social/",code:a},e.next=5,fetch("https://aura-social.herokuapp.com/authorize",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 5:return r=e.sent,e.next=8,r.json();case 8:if(!(n=e.sent).user_id){e.next=11;break}return e.abrupt("return",n.access_token);case 11:throw new Error(n.error_message);case 14:throw e.prev=14,e.t0=e.catch(0),e.t0.message;case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(a){return e.apply(this,arguments)}}(),fetchMedia:function(){var e=Object(E.a)(b.a.mark((function e(a){var t,r,n,c,o,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t="https://graph.instagram.com/me/media?fields=username,media_type,media_url,thumbnail_url&access_token="+a,r=[],n="";case 4:if(!t){e.next=18;break}return e.next=7,fetch(t);case 7:return c=e.sent,e.next=10,c.json();case 10:if(!(o=e.sent).error){e.next=13;break}throw new Error(o.error);case 13:for(s=0;s<o.data.length;s++)i=o.data[s],r.push("VIDEO"===i.media_type?i.thumbnail_url:i.media_url);n=o.data[0].username,t=o.paging.next,e.next=4;break;case 18:return e.abrupt("return",{username:n,images:r});case 21:throw e.prev=21,e.t0=e.catch(0),e.t0.message;case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(a){return e.apply(this,arguments)}}()};var w=function(e){var a=e.query,t=Object(r.useState)(0),c=Object(u.a)(t,2),o=c[0],s=c[1],i=Object(r.useState)(),d=Object(u.a)(i,2),g=d[0],b=d[1],E=Object(r.useState)(),w=Object(u.a)(E,2),O=w[0],j=w[1],y=Object(r.useState)(),k=Object(u.a)(y,2),_=k[0],S=k[1],x=Object(r.useState)(),N=Object(u.a)(x,2),I=N[0],L=N[1],M=Object(r.useState)(),z=Object(u.a)(M,2),A=z[0],C=z[1];return Object(r.useEffect)((function(){a&&(a.code?j(a.code):a.error&&b(a.error))}),[a]),Object(r.useEffect)((function(){O&&v.authorize(O).then((function(e){return S(e)})).catch((function(e){return b(e)}))}),[O]),Object(r.useEffect)((function(){_&&v.fetchMedia(_).then((function(e){C(e.images),L(e.username)})).catch((function(e){return b(e)}))}),[_]),Object(r.useEffect)((function(){g?s(9):I?s(3):_?s(2):O&&s(1)}),[g,O,_,I]),n.a.createElement("div",{className:"Home"},n.a.createElement(l,{inner:o>0}),{0:n.a.createElement(h,null),1:n.a.createElement(f,{message:"Authorizing..."}),2:n.a.createElement(f,{message:"Fetching media..."}),3:n.a.createElement(p,{urls:A}),9:n.a.createElement(f,{message:g,retry:!0})}[o],n.a.createElement(m,null))};var O=function(e){return function(){var a=new URLSearchParams(Object(i.e)().search),t={error:a.get("error_description"),code:a.get("code")};return n.a.createElement(e,{query:t})}};var j=function(){var e=O(w);return n.a.createElement(s.a,null,n.a.createElement(i.a,{path:"/"},n.a.createElement(e,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.7bdca3be.chunk.js.map