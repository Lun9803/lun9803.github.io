(this["webpackJsonplun-page"]=this["webpackJsonplun-page"]||[]).push([[0],{43:function(t,e,n){"use strict";n.r(e);var c=n(4),r=n(1),i=n.n(r),o=n(23),a=n.n(o),l=n(27),s=n(2),u=n(12),h=n(18),d=n(56),f=n(59),j="#171111",v="#fff5f5",b=Object(d.a)({root:{display:"flex",height:"100vh",overflow:"hidden"},left:{width:"50%",background:j,textAlign:"end",color:v},right:{width:"50%",background:v,color:j},text:{fontSize:50,letterSpacing:3,margin:"5vh 2.5vw"}}),g=function(t){return{position:"absolute",left:t.x,top:t.y,color:"left"===t.position?v:j}};var x=function(){var t=b(),e=Object(r.useRef)(),n=Object(r.useState)(),i=Object(h.a)(n,2),o=i[0],a=i[1];return Object(r.useEffect)((function(){e.current=[];var t,n,c=0;t=setInterval((function(){!function(t,e){for(var n=t.num,c=void 0===n?1:n,r=window.innerWidth,i=0;i<c;i++){var o={velocity:1,x:Math.floor(r*Math.random()),y:0,acc:.05,text:Math.random()<.5?"0":"1"};o.x>r/2?o.position="right":o.position="left",e.push(o)}}({},e.current),(c+=1)>50&&clearInterval(t)}),250),n=setInterval((function(){(function(t){if(0===t.length)return!0;for(var e=0,n=0;n<t.length;n++){var c=t[n];Math.abs(c.velocity)<.05&&c.y>=.9*window.innerHeight||(e+=1,c.y+=c.velocity,c.velocity+=c.acc,c.y>.9*window.innerHeight&&c.velocity>0&&(c.velocity*=-.5))}return console.log("hi"),a(Object(u.a)(t)),0!==e})(e.current)||clearInterval(n)}),10)}),[]),Object(c.jsxs)("div",{className:t.root,children:[Object(c.jsx)("div",{className:t.left,children:Object(c.jsx)(f.a,{className:t.text,children:"Lun's"})}),Object(c.jsx)("div",{className:t.right,children:Object(c.jsx)(f.a,{className:t.text,children:"Gallery"})}),o&&o.map((function(t,e){return Object(c.jsx)("div",{style:g(t),children:t.text},"squre-".concat(e))}))]})};var O=function(){return Object(c.jsx)(l.a,{children:Object(c.jsx)(s.c,{children:Object(c.jsx)(s.a,{path:"/",children:Object(c.jsx)(x,{})})})})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),i(t),o(t)}))};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),p()}},[[43,1,2]]]);
//# sourceMappingURL=main.e5895c82.chunk.js.map