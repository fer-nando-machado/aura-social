(this["webpackJsonpaura-social"]=this["webpackJsonpaura-social"]||[]).push([[0],{20:function(e,t,n){e.exports=n(38)},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),o=n.n(r),s=(n(25),n(18)),i=n(1),u=n(7);n(26),n(27);var m=function(e){var t="Header "+(e.inner?"HeaderInner":"");return c.a.createElement("div",{className:t},c.a.createElement("img",{src:"".concat("/aura-social/images/","lotus.svg"),alt:"Aura Social"}),c.a.createElement("div",{className:"HeaderTitle"},"Aura SociaL"))};n(28);var _=function(){return c.a.createElement("div",{className:"Footer"},c.a.createElement("a",{className:"Link",href:"https://github.com/fernandomachado90/aura-social"},c.a.createElement("span",null,"Made with \u2661 by Fernando Machado"))," | ",c.a.createElement("a",{className:"Link",href:"https://www.flaticon.com/authors/good-ware"},c.a.createElement("span",null,"Icons by Good Ware")))};n(29);var d=function(){return c.a.createElement("a",{className:"InstagramAccess Link",href:"https://api.instagram.com/oauth/authorize?client_id=784647572278376&redirect_uri=https://fernandomachado90.github.io/aura-social/&scope=user_profile,user_media&response_type=code"},c.a.createElement("img",{src:"".concat("/aura-social/images/","instagram.svg"),alt:"Continue with Instagram"}),c.a.createElement("span",null,"Continue with Instagram"))};n(30);var h=function(e){var t=e.message,n=e.retry;return c.a.createElement("div",{className:"InstagramStep Content"},t,n&&c.a.createElement("p",null,c.a.createElement("a",{className:"Link",href:"/aura-social/"},c.a.createElement("span",null,"Try Again"))))},l=n(6),f=n.n(l),g=n(8),p=new(n(17).a),b={getDominantColor:function(){var e=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.getColor(t,1));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};n(32);var v=function(e){var t=e.media,n=Object(a.useState)(0),r=Object(u.a)(n,2),o=r[0],s=r[1],i=t.images,m=i.length,_=o<m,d=Math.floor(100*o/m);function h(){return(h=Object(g.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getDominantColor(t);case 2:n=e.sent,console.log(n),s(o+1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return c.a.createElement("div",{className:"InstagramMedia Content"},_&&c.a.createElement("img",{crossOrigin:"anonymous",alt:"",src:i[o],onLoad:function(e){return function(e){return h.apply(this,arguments)}(e.target)}}),c.a.createElement("img",{src:"".concat("/aura-social/images/","instagram.svg"),alt:"",className:_?"hidden":""}),c.a.createElement("span",null,d,"%"))},E={authorize:function(){var e=Object(g.a)(f.a.mark((function e(t){var n,a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://aura-social.herokuapp.com/authorize",n={client_id:"784647572278376",redirect_uri:"https://fernandomachado90.github.io/aura-social/",code:t},e.next=5,fetch("https://aura-social.herokuapp.com/authorize",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:return a=e.sent,e.next=8,a.json();case 8:if(!(c=e.sent).user_id){e.next=11;break}return e.abrupt("return",c.access_token);case 11:throw new Error(c.error_message);case 14:throw e.prev=14,e.t0=e.catch(0),e.t0.message;case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),fetchMedia:function(){var e=Object(g.a)(f.a.mark((function e(t){var n,a,c,r,o,s,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n="https://graph.instagram.com/me/media?fields=username,media_type,media_url,thumbnail_url&access_token="+t,a=[],c="";case 4:if(!n){e.next=18;break}return e.next=7,fetch(n);case 7:return r=e.sent,e.next=10,r.json();case 10:if(!(o=e.sent).error){e.next=13;break}throw new Error(o.error);case 13:for(s=0;s<o.data.length;s++)i=o.data[s],a.push("VIDEO"===i.media_type?i.thumbnail_url:i.media_url);c=o.data[0].username,n=o.paging.next,e.next=4;break;case 18:return e.abrupt("return",{username:c,images:a});case 21:throw e.prev=21,e.t0=e.catch(0),e.t0.message;case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(t){return e.apply(this,arguments)}}()};var j={username:"fernandomach7do",images:["https://scontent.cdninstagram.com/v/t51.29350-15/117176521_328948601576332_3580294707538157938_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=MrefkDnMkCwAX9q9ctk&_nc_ht=scontent.cdninstagram.com&oh=6a68c0a41d35c55d49dfba363b374090&oe=5F5EA1B8","https://scontent.cdninstagram.com/v/t51.29350-15/116152103_3278136882252701_7056569430226544631_n.jpg?_nc_cat=111&_nc_sid=8ae9d6&_nc_ohc=JNEgFwB3VC4AX97cSVx&_nc_ht=scontent.cdninstagram.com&oh=e14b9679f494be0c7b81f672d2f37bce&oe=5F62225F","https://scontent.cdninstagram.com/v/t51.29350-15/116029059_181243413436806_7740132137588175238_n.jpg?_nc_cat=108&_nc_sid=8ae9d6&_nc_ohc=WYwhX7P6QHoAX_hVBXc&_nc_ht=scontent.cdninstagram.com&oh=f14c4d420e5ba0d3375bb4b28699f2e7&oe=5F5FE652","https://scontent.cdninstagram.com/v/t51.29350-15/109713109_148663446831905_8162988032588923998_n.jpg?_nc_cat=102&_nc_sid=8ae9d6&_nc_ohc=NiGNTvzLiVcAX_Rpjv-&_nc_ht=scontent.cdninstagram.com&oh=4fdb1e4701c3d65e3de63b99fe34763b&oe=5F5EF3E8","https://scontent.cdninstagram.com/v/t51.29350-15/109330312_2728078110769959_2121900022953024726_n.jpg?_nc_cat=102&_nc_sid=8ae9d6&_nc_ohc=Cy0-VX1jDIAAX-7KZFv&_nc_ht=scontent.cdninstagram.com&oh=56448025b24a62c0a625d73034f81fe6&oe=5F601C0A","https://scontent.cdninstagram.com/v/t51.29350-15/106495309_272734894070833_3238430162469291771_n.jpg?_nc_cat=101&_nc_sid=8ae9d6&_nc_ohc=d6_099FGWXwAX9jda9_&_nc_ht=scontent.cdninstagram.com&oh=71acc19822bc7f3907792f4b5c341006&oe=5F5E6346","https://scontent.cdninstagram.com/v/t51.2885-15/105991651_2541224309541227_7424953594867359384_n.jpg?_nc_cat=110&_nc_sid=8ae9d6&_nc_ohc=cAKp9eRFBmkAX_Wi9zA&_nc_ht=scontent.cdninstagram.com&oh=9702c1ecfec2eb6becc05423d09d6a35&oe=5F5E8343","https://scontent.cdninstagram.com/v/t51.2885-15/101783451_555154281862559_5628238671235761802_n.jpg?_nc_cat=100&_nc_sid=8ae9d6&_nc_ohc=0b7Uu_HkFDwAX-Dg2KB&_nc_ht=scontent.cdninstagram.com&oh=08c6fcb3bc303099c5a0854895828088&oe=5F5EEDBC","https://scontent.cdninstagram.com/v/t51.2885-15/100971995_2747750818793457_6405836337224637861_n.jpg?_nc_cat=109&_nc_sid=8ae9d6&_nc_ohc=h9LFsx2Zb74AX-Ae7fm&_nc_ht=scontent.cdninstagram.com&oh=4988b85c07a0b5c3b309bcdac499566f&oe=5F5E6FEF","https://scontent.cdninstagram.com/v/t51.2885-15/94422693_657440651492515_2880693995765655165_n.jpg?_nc_cat=104&_nc_sid=8ae9d6&_nc_ohc=xNBUS8mdu_YAX8gZbhE&_nc_ht=scontent.cdninstagram.com&oh=e7f50f97554b7fee778ddb477f0344fb&oe=5F622910"]},w=function(e){var t=e.query,n=Object(a.useState)(0),r=Object(u.a)(n,2),o=r[0],s=r[1],i=Object(a.useState)(),l=Object(u.a)(i,2),f=l[0],g=l[1],p=Object(a.useState)(),b=Object(u.a)(p,2),w=b[0],k=b[1],O=Object(a.useState)(),F=Object(u.a)(O,2),y=F[0],A=F[1],x=Object(a.useState)(),N=Object(u.a)(x,2),S=N[0],X=N[1];return Object(a.useEffect)((function(){t&&(t.code?k(t.code):t.error?g(t.error):t.debug&&X(j))}),[t]),Object(a.useEffect)((function(){w&&E.authorize(w).then((function(e){return A(e)})).catch((function(e){return g(e)}))}),[w]),Object(a.useEffect)((function(){y&&E.fetchMedia(y).then((function(e){return X(e)})).catch((function(e){return g(e)}))}),[y]),Object(a.useEffect)((function(){f?s(9):S?s(3):y?s(2):w&&s(1)}),[f,w,y,S]),c.a.createElement("div",{className:"Home"},c.a.createElement(m,{inner:o>0}),{0:c.a.createElement(d,null),1:c.a.createElement(h,{message:"Authorizing..."}),2:c.a.createElement(h,{message:"Fetching media..."}),3:c.a.createElement(v,{media:S}),9:c.a.createElement(h,{message:f,retry:!0})}[o],c.a.createElement(_,null))};var k=function(e){return function(){var t=new URLSearchParams(Object(i.e)().search),n={error:t.get("error_description"),code:t.get("code"),debug:t.get("debug")};return c.a.createElement(e,{query:n})}};var O=function(){var e=k(w);return c.a.createElement(s.a,null,c.a.createElement(i.a,{path:"/"},c.a.createElement(e,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.f9332f34.chunk.js.map