(this["webpackJsonpnetflix-reactclone"]=this["webpackJsonpnetflix-reactclone"]||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(21),i=n.n(o),r=(n(28),"f1f50d42b515c8ba85e1478b56a4d418"),s={fetchTrending:"/trending/all/week?language=en-US&api_key=".concat(r),fetchNetflixOriginals:"/discover/tv?with_networks=213&api_key=".concat("f1f50d42b515c8ba85e1478b56a4d418"),fetchTopRated:"/movie/top_rated?api_key=".concat("f1f50d42b515c8ba85e1478b56a4d418","&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat("f1f50d42b515c8ba85e1478b56a4d418","&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat("f1f50d42b515c8ba85e1478b56a4d418","&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(r,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(r,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(r,"&with_genres=99")},l=n(5),d=n.n(l),u=n(6),b=n(4),v=(n(30),n(7)),f=n.n(v),h=n(8),j=n(9),p=n.n(j),g=n(0);function m(e){e.title;var t=e.fetchUrl,n=Object(c.useState)([]),a=Object(b.a)(n,2),o=a[0],i=a[1],r=Object(c.useState)(""),l=Object(b.a)(r,2),v=l[0],j=l[1];Object(c.useEffect)((function(){(function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://api.themoviedb.org/3"+s.fetchTopRated);case 2:return t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);var m,O;return Object(g.jsxs)("header",{children:[!v&&Object(g.jsxs)("div",{className:"banner banner--top",style:{backgroundImage:'url("'.concat("https://image.tmdb.org/t/p/original").concat(null===o||void 0===o?void 0:o.backdrop_path,'")'),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:[Object(g.jsxs)("div",{className:"banner_contents",children:[Object(g.jsx)("h1",{className:"banner_title",children:(null===o||void 0===o?void 0:o.title)||(null===o||void 0===o?void 0:o.name)||(null===o||void 0===o?void 0:o.original_name)}),Object(g.jsxs)("div",{className:"banner_buttons",children:[Object(g.jsxs)("button",{className:"banner_button",onClick:function(){return function(e){v?j(""):p()((null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.title)).then((function(e){var t=new URLSearchParams(new URL(e).search);j(t.get("v"))})).catch((function(e){return console.log(e)}))}(o)},children:["Play"," "]}),Object(g.jsx)("button",{className:"banner_button",children:"My List "})]}),Object(g.jsx)("h1",{className:"banner_description",children:(m=null===o||void 0===o?void 0:o.overview,O=150,(null===m||void 0===m?void 0:m.length)>O?m.substr(0,O-7)+"...":m)})]}),Object(g.jsx)("div",{className:"banner--fadeBottom"})]}),Object(g.jsx)("div",{className:"banner_buttons",children:v&&Object(g.jsxs)("div",{children:[Object(g.jsx)(h.a,{videoId:v,opts:{height:"448",width:"100%",playerVars:{autoplay:1}}}),Object(g.jsx)("button",{className:"banner_buttonn",onClick:function(){return j("")},children:"Stop"})]})})]})}n(70);var O="https://api.themoviedb.org/3";function x(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,o=Object(c.useState)([]),i=Object(b.a)(o,2),r=i[0],s=i[1],l=Object(c.useState)(""),v=Object(b.a)(l,2),j=v[0],m=v[1];Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(O+n);case 2:return t=e.sent,s(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);return Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:t}),Object(g.jsx)("div",{className:"row_posters",children:r.map((function(e){return Object(g.jsx)("img",{onClick:function(){return function(e){j?m(""):p()((null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.title)).then((function(e){var t=new URLSearchParams(new URL(e).search);m(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row_poster ".concat(a&&"row_posterLarger"),src:"".concat("https://image.tmdb.org/t/p/original").concat(a?e.poster_path:e.backdrop_path),title:e.title||e.name,alt:e.title||e.name,vote:e.vote_average},e.id)}))}),j&&Object(g.jsx)(h.a,{videoId:j,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})}n(71);var _=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(g.jsxs)("div",{className:"nav ".concat(n&&"nav_black"),children:[Object(g.jsx)("img",{className:"nav_logo",src:"/netflix_reactclone/logo/logo.png",alt:"Netflix Logo"}),Object(g.jsx)("img",{className:"nav_avatar",src:"/netflix_reactclone/logo/Netflix-avatar.png",alt:"Netflix Avatar"})]})};n(72);var w=function(){return Object(g.jsxs)("div",{className:"app",children:[Object(g.jsx)(_,{}),Object(g.jsx)(m,{}),Object(g.jsx)(x,{title:"NETFLIX ORIGINAL",fetchUrl:s.fetchNetflixOriginals,isLargeRow:!0}),Object(g.jsx)(x,{title:"Trending Now",fetchUrl:s.fetchTrending}),Object(g.jsx)(x,{title:"TopRated",fetchUrl:s.fetchTopRated}),Object(g.jsx)(x,{title:"Comedy Movies",fetchUrl:s.fetchComedyMovies}),Object(g.jsx)(x,{title:"Romance Movies",fetchUrl:s.fetchRomanceMovies}),Object(g.jsx)(x,{title:"Documentaries",fetchUrl:s.fetchDocumentaries}),Object(g.jsx)(x,{title:"Horror Movies",fetchUrl:s.fetchHorrorMovies}),Object(g.jsx)(x,{title:"Action Movies",fetchUrl:s.fetchActionMovies})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};i.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(w,{})}),document.getElementById("root")),k()}},[[73,1,2]]]);
//# sourceMappingURL=main.ba017422.chunk.js.map