(this["webpackJsonplun-page"]=this["webpackJsonplun-page"]||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(0),i=n.n(c),o=n(13),r=n.n(o),s=n(81),l=n(15),d=n(149),u="#001514",j="#f6f8ff",m="#252422",h="#e6757d",b=n(9),f=n(117),O=n(160),p=n(163),x=n(155),g=n(158),v=n(162),y=n(80),S=n.n(y),w=n(79),N=n.n(w),k=n(12),T=n.n(k),B=function(e){return localStorage.hasOwnProperty("onetime_events")&&JSON.parse(localStorage.getItem("onetime_events"))[e]||[]},Y=function(){if(!localStorage.hasOwnProperty("onetime_events"))return[0,0,0,0,0,0,0];for(var e=T()(),t=[],n=JSON.parse(localStorage.getItem("onetime_events")),a=0;a<7;a++){var c=n[e.format("YYYY-MM-DD")];t.push(c?c.length:0),e.add(1,"days")}return t},M=n(83),I=n(151),z=n(161),C=n(154),D=n(164),P=n(157),R=n(77),_=n.n(R),W=n(82),H=n(19),J=n(159),E=Object(M.a)({palette:{secondary:{main:j},primary:{main:m}}}),L=Object(d.a)({modal:{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},paper:{marginTop:"-17vh",width:"36%",maxHeight:"80vh",padding:24,background:u,border:"1px solid ".concat(j)},timePicker:{width:"100%","& input":{color:j,padding:12,fontSize:20,paddingLeft:0}},title:{fontSize:30,color:j,marginBottom:16},inputTitle:{fontSize:20,color:j,marginBottom:8},inputBase:{color:j,fontSize:16,padidng:12,width:"100%",borderBottom:"1px solid ".concat(j)},block:{marginBottom:24},buttons:{marginTop:36,display:"flex",justifyContent:"flex-end"},iconButton:{"&:hover":{background:m}},snackbar:{borderRadius:5,"& div":{background:h,padding:"8px 20px",fontSize:20}}});var A=function(e){var t=L(),n=e.modalOpen,i=e.setModalOpen,o=e.onAdd,r=Object(c.useState)(T()()),s=Object(b.a)(r,2),l=s[0],d=s[1],u=Object(c.useState)(""),m=Object(b.a)(u,2),O=m[0],p=m[1],x=Object(c.useState)(""),y=Object(b.a)(x,2),S=y[0],w=y[1],N=Object(c.useState)(),k=Object(b.a)(N,2),B=k[0],Y=k[1],M=Object(c.useState)(!1),R=Object(b.a)(M,2),A=R[0],F=R[1],X=Object(c.useState)(""),G=Object(b.a)(X,2),q=G[0],K=G[1];Object(c.useEffect)((function(){n&&(d(T()()),Y(T()()))}),[n]);var U=function(){d(T()()),p(""),w(""),i(!1)};return Object(a.jsxs)(I.a,{theme:E,children:[Object(a.jsx)(z.a,{className:t.modal,open:n,onClose:function(){return i(!1)},children:Object(a.jsxs)(C.a,{className:t.paper,style:{width:window.innerWidth<450?"100%":window.innerWidth<1050?450:void 0},children:[Object(a.jsx)(f.a,{className:t.title,children:"\u6dfb\u52a0\u4e00\u6b21\u6027\u4e8b\u52a1"}),Object(a.jsxs)("div",{className:t.block,children:[Object(a.jsx)(f.a,{className:t.inputTitle,children:"\u6807\u9898"}),Object(a.jsx)(D.a,{value:O,placeholder:"\u5fc5\u586b\uff0c\u4e0d\u8d85\u8fc730\u5b57",onChange:function(e){e.target.value.length<=30&&p(e.target.value)},className:t.inputBase})]}),Object(a.jsxs)("div",{className:t.block,children:[Object(a.jsx)(f.a,{className:t.inputTitle,children:"\u5907\u6ce8"}),Object(a.jsx)(D.a,{value:S,placeholder:"\u5fc5\u586b\uff0c\u4e0d\u8d85\u8fc7200\u5b57",onChange:function(e){e.target.value.length<=200&&w(e.target.value)},className:t.inputBase,multiline:!0,rows:4})]}),Object(a.jsxs)("div",{className:t.block,children:[Object(a.jsx)(f.a,{className:t.inputTitle,children:"\u65f6\u95f4"}),Object(a.jsx)(H.a,{utils:W.a,children:Object(a.jsx)(J.a,{className:t.timePicker,value:l,ampm:!1,onChange:d,minDate:B,format:"yyyy \u5e74 MM \u6708 dd \u65e5  HH \u65f6 mm \u5206",allowKeyboardControl:!1,InputProps:{endAdornment:Object(a.jsx)(P.a,{position:"end",style:{marginLeft:0},children:Object(a.jsx)(g.a,{className:t.iconButton,style:{padding:0,width:32,height:32},children:Object(a.jsx)(_.a,{style:{width:24,height:24,color:j}})})}),disableUnderline:!0}})})]}),Object(a.jsxs)("div",{className:t.buttons,children:[""!==O.trim()&&""!==S.trim()&&Object(a.jsx)(g.a,{onClick:function(){var e={};localStorage.hasOwnProperty("onetime_events")&&(e=JSON.parse(localStorage.getItem("onetime_events")));var t=T()(l).format("YYYY-MM-DD"),n={time:T()(l).format("YYYY-MM-DD HH:mm"),description:S,title:O};e[t]?e[t].push(n):e[t]=[n],localStorage.setItem("onetime_events",JSON.stringify(e)),K("\u4e8b\u52a1\u201c".concat(O,"\u201d\u521b\u5efa\u6210\u529f\uff0c")+"\u7ea6".concat(T()(l).utc().diff(T()().utc(),"hours")>=24?Math.floor(T()(l).diff(T()(),"hours")/24)+"\u5929":"")+"".concat(T()(l).utc().diff(T()().utc(),"hours")%24,"\u5c0f\u65f6")+"".concat(T()(l).utc().diff(T()().utc(),"minutes")%60,"\u5206\u949f\u540e\u5f00\u59cb")),F(!0),setTimeout((function(){F(!1)}),6e3),o&&o(),U()},className:t.iconButton,style:{borderRadius:3,padding:"3px 12px",marginRight:12},children:Object(a.jsx)(f.a,{style:{fontSize:24,color:h},children:"\u786e\u5b9a"})}),Object(a.jsx)(g.a,{onClick:U,className:t.iconButton,style:{borderRadius:3,padding:"3px 12px"},children:Object(a.jsx)(f.a,{style:{fontSize:24,color:j},children:"\u53d6\u6d88"})})]})]})}),Object(a.jsx)(v.a,{className:t.snackbar,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:A,message:q})]})},F=Object(d.a)({timeSection:{paddingTop:"2.5vh",height:"97.5vh",display:"flex",flexDirection:"column",alignItems:"center",maxWidth:"100%"},timeText:{fontSize:80,letterSpacing:10,color:j,height:93},timeBlock:{display:"flex",alignItems:"flex-end"},timeSubText:{fontSize:42,color:j,marginRight:8},monthText:{fontSize:36,latterSpacing:5,color:j},calender:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"flex-end"},tabIndicator:{background:j},tab:{minWidth:60,padding:6,"&:hover":{background:m}},popper:{"& div":{background:m,padding:8}},toolTipText:{fontSize:13.75,color:j},eventsSection:{marginTop:30,width:"100%",flexGrow:1,overflow:"scroll","&::-webkit-scrollbar":{width:0}},badge:{width:10,height:10,borderRadius:5,flexShrink:0,marginLeft:-3,marginTop:-6},eventListItem:{display:"flex",alignItems:"center",cursor:"pointer",padding:12,borderBottom:"1px solid ".concat(m),"&:hover":{background:m}},addEventButton:{width:"100%",height:"20%",display:"flex",justifyContent:"center",alignItems:"flex-start"},deleteIconButton:{"&:hover":{background:h}},snackbar:{borderRadius:5,"& div":{background:h,padding:"8px 20px",fontSize:20}},tabScrollButton:{color:j,"& svg":{fontSize:32}}}),X=function(e){return 1===(e+"").length?"0"+e:e+""},G=function(e){if(!e)return[];for(var t=e.day(),n=[],a=function(e){switch(e%7){case 0:return"\u65e5";case 1:return"\u4e00";case 2:return"\u4e8c";case 3:return"\u4e09";case 4:return"\u56db";case 5:return"\u4e94";case 6:return"\u516d";default:return""}},c=0;c<7;c++)n[c]={name:a(c+t),date:T()().add(c,"days").date(),fullDate:T()().add(c,"days").format("YYYY\u5e74MM\u6708DD\u65e5")};return n};var q=function(e){var t=F(),n=Object(c.useState)(T()()),i=Object(b.a)(n,2),o=i[0],r=i[1],s=Object(c.useState)(0),l=Object(b.a)(s,2),d=l[0],u=l[1],m=Object(c.useState)([]),y=Object(b.a)(m,2),w=y[0],k=y[1],M=Object(c.useState)([0,0,0,0,0,0,0]),I=Object(b.a)(M,2),z=I[0],C=I[1],D=Object(c.useState)(!1),P=Object(b.a)(D,2),R=P[0],_=P[1],W=Object(c.useState)(!1),H=Object(b.a)(W,2),J=H[0],E=H[1],L=Object(c.useState)(""),q=Object(b.a)(L,2),K=q[0],U=q[1];Object(c.useEffect)((function(){C(Y()),k(B(T()().add(0,"days").format("YYYY-MM-DD"))),setInterval((function(){var e=T()();r(e)}),[500])}),[]);var Q,V=function(){k(B(T()().add(d,"days").format("YYYY-MM-DD"))),C(Y())},Z=function(e){!function(e){if(localStorage.hasOwnProperty("onetime_events")&&e){var t=JSON.parse(localStorage.getItem("onetime_events")),n=e.time.split(" ")[0];t[n]&&(t[n]=t[n].filter((function(t){return t.time!==e.time||t.title!==e.title||e.description!==t.description})),localStorage.setItem("onetime_events",JSON.stringify(t)))}}(e),V(),U("\u4e8b\u52a1\u201c".concat(e.title,"\u201d\u5df2\u5220\u9664")),E(!0),setTimeout((function(){E(!1)}),6e3)};return Object(a.jsxs)("div",{className:t.timeSection,children:[Object(a.jsxs)("div",{className:t.timeBlock,children:[Object(a.jsx)(f.a,{className:t.timeText,children:X(o.hour())}),Object(a.jsx)(f.a,{className:t.timeSubText,children:":"}),Object(a.jsx)(f.a,{className:t.timeText,children:X(o.minute())})]}),Object(a.jsxs)("div",{className:t.timeBlock,style:{marginTop:30},children:[Object(a.jsx)(f.a,{className:t.monthText,style:{marginRight:20},children:o.year()+" \u5e74"}),Object(a.jsx)(f.a,{className:t.monthText,children:o.month()+1+" \u6708"})]}),Object(a.jsx)("div",{className:t.calender,style:{marginTop:20},children:Object(a.jsx)(O.a,{style:{width:"100%",maxWidth:"100%"},classes:{indicator:t.tabIndicator,scrollButtons:t.tabScrollButton},value:d,scrollButtons:"on",variant:window.innerWidth<500?"scrollable":"fullWidth",onChange:function(e,t){return function(e){u(e),k(B(T()().add(e,"days").format("YYYY-MM-DD")))}(t)},children:G(o).map((function(e,n){return Object(a.jsx)(p.a,{title:Object(a.jsxs)("div",{children:[Object(a.jsx)(f.a,{className:t.toolTipText,children:"".concat(e.fullDate)}),0!==z[n]&&Object(a.jsx)(f.a,{className:t.toolTipText,style:{color:h},children:"".concat(z[n],"\u4e2a\u4e00\u6b21\u6027\u4e8b\u52a1")})]}),placement:"top",PopperProps:{className:t.popper},children:Object(a.jsx)(x.a,{className:t.tab,icon:Object(a.jsxs)("div",{style:{display:"flex",width:"100%",overflow:"visible"},children:[Object(a.jsx)(f.a,{style:{color:j,width:"100%",flexShrink:0},children:e.name+""}),0!==z[n]&&Object(a.jsx)("div",{className:t.badge,style:{background:h}})]}),label:Object(a.jsx)(f.a,{style:{color:j,fontSize:24},children:e.date})},e.name+"-"+e.date)},e.name+"-"+e.date+"-tooltip")}))})}),Object(a.jsxs)("div",{className:t.eventsSection,children:[0===w.length?Object(a.jsx)(f.a,{style:{color:j,fontSize:20,width:"100%",textAlign:"center"},children:"\u4eca\u5929\u6ca1\u4e8b\u5e72\uff0c\u597d\u597d\u653e\u677e\u9e2d"}):Object(a.jsx)(f.a,{style:{color:h,fontSize:20,marginBottom:16,width:"100%",textAlign:"center"},children:"\u4eca\u5929\u6709".concat(w.length,"\u4ef6\u4e8b\u8981\u505a\uff0c\u51b2\u9e2d\uff01")}),w&&(Q=w,Q.sort((function(e,t){return T()(e.time).diff(T()(t.time))<0?-1:1}))).map((function(e){return Object(a.jsx)(p.a,{title:e.description,placement:"right",PopperProps:{className:t.popper},children:Object(a.jsxs)("div",{className:t.eventListItem,children:[Object(a.jsx)(f.a,{style:{color:j,fontSize:16,marginRight:12},children:T()(e.time).format("HH:mm")}),Object(a.jsx)(f.a,{style:{color:j,fontSize:16,flexGrow:1},children:e.title}),Object(a.jsx)(g.a,{className:t.deleteIconButton,onClick:function(){return Z(e)},children:Object(a.jsx)(N.a,{style:{width:20,height:20,color:j}})})]})},e.title+"-"+e.time+"-tooltip")}))]}),Object(a.jsx)("div",{className:t.addEventButton,children:Object(a.jsx)(g.a,{onClick:function(){return _(!0)},children:Object(a.jsx)(S.a,{style:{width:60,height:60,color:h}})})}),Object(a.jsx)(A,{onAdd:V,modalOpen:R,setModalOpen:_}),Object(a.jsx)(v.a,{className:t.snackbar,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:J,message:K})]})},K=n(30),U=Object(d.a)({root:{flexGrow:1}}),Q=function(e){return{position:"absolute",left:e.x-10,top:e.y,width:20,textAlign:"center",color:j}},V=window.innerHeight;var Z=function(){var e=U(),t=Object(c.useRef)(),n=Object(c.useRef)(),i=Object(c.useState)(),o=Object(b.a)(i,2),r=o[0],s=o[1],l=Object(c.useState)(-1),d=Object(b.a)(l,2),u=d[0],j=d[1];return Object(c.useEffect)((function(){t.current=[],setInterval((function(){var e=n.current.getBoundingClientRect().left,a=n.current.getBoundingClientRect().right;!function(e,t){for(var n=e.num,a=void 0===n?1:n,c=e.minX,i=e.maxX,o=0;o<a;o++){var r={velocity:1,x:Math.floor(c+(i-c)*Math.random()),y:0,acc:.05,text:Math.random()<.5?"0":"1"};t.push(r)}}({num:Math.floor(2*Math.random()),minX:e,maxX:a},t.current)}),250),setInterval((function(){!function(e){if(0===e.length)return!0;for(var t=0;t<e.length;t++){var n=e[t];n.y+=n.velocity,n.velocity+=n.acc,n.y>V&&e.splice(t,1)}s(Object(K.a)(e))}(t.current)}),10)}),[]),Object(c.useEffect)((function(){u<0||u>=1||setTimeout((function(){return j(u+.01)}),10)}),[u]),Object(a.jsx)("div",{className:e.root,ref:n,children:r&&r.map((function(e,t){return Object(a.jsx)("div",{style:Q(e),children:e.text},"squre-".concat(t))}))})},$=Object(d.a)({root:{background:u,height:"100vh",display:"flex",justifyContent:"space-around"}});var ee=function(){var e=$();return Object(a.jsxs)("div",{className:e.root,children:[window.innerWidth>700&&Object(a.jsx)(Z,{}),Object(a.jsx)(q,{}),window.innerWidth>700&&Object(a.jsx)(Z,{})]})};var te=function(){return Object(a.jsx)(s.a,{children:Object(a.jsx)(l.c,{children:Object(a.jsx)(l.a,{path:"/",children:Object(a.jsx)(ee,{})})})})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,166)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(te,{})}),document.getElementById("root")),ne()}},[[116,1,2]]]);
//# sourceMappingURL=main.e44142e4.chunk.js.map