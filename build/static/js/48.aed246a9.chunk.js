(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[48],{402:function(e,t,n){"use strict";var r=n(3),a=n(4),i=n(1),o=(n(11),n(7)),c=n(98),s=n(343),u=n(353),b=n(56),l=n(0),d=["className","component"];var j=n(199),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,n=Object(c.a)("div")(s.a),j=i.forwardRef((function(e,i){var c=Object(b.a)(t),s=Object(u.a)(e),j=s.className,p=s.component,m=void 0===p?"div":p,O=Object(a.a)(s,d);return Object(l.jsx)(n,Object(r.a)({as:m,ref:i,className:Object(o.a)(j,"MuiBox-root"),theme:c},O))}));return j}({defaultTheme:Object(j.a)()});t.a=p},553:function(e,t,n){"use strict";n(1);var r=n(354),a=n(402),i=n(94),o=n(358),c=n(710),s=n(709),u=n(0);function b(){return Object(u.jsxs)(i.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(u.jsx)(s.a,{color:"inherit",href:"https://min.io/",children:"MinIO"})," ",(new Date).getFullYear(),"."]})}var l=Object(o.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"}}}));t.a=function(){var e=l();return Object(u.jsxs)(c.a,{component:"main",children:[Object(u.jsx)(r.a,{}),Object(u.jsx)("div",{className:e.paper,children:Object(u.jsx)(i.a,{variant:"h1",component:"h1",children:"404 Not Found"})}),Object(u.jsx)(a.a,{mt:5,children:Object(u.jsx)(b,{})})]})}},709:function(e,t,n){"use strict";var r=n(14),a=n(5),i=n(4),o=n(3),c=n(1),s=(n(11),n(7)),u=n(92),b=n(6),l=n(116),d=n(9),j=n(8),p=n(12),m=n(51),O=n(18),h=n(94),x=n(67),f=n(93);function v(e){return Object(x.a)("MuiLink",e)}var g=Object(f.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),k=n(0),y=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],S={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},W=Object(j.a)(h.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat(Object(d.a)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,r=Object(b.b)(t,"palette.".concat(function(e){return S[e]||e}(n.color)))||n.color;return Object(o.a)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?Object(l.a)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&Object(a.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(g.focusVisible),{outline:"auto"}))})),w=c.forwardRef((function(e,t){var n=Object(p.a)({props:e,name:"MuiLink"}),a=n.className,b=n.color,l=void 0===b?"primary":b,j=n.component,h=void 0===j?"a":j,x=n.onBlur,f=n.onFocus,g=n.TypographyClasses,S=n.underline,w=void 0===S?"always":S,N=n.variant,L=void 0===N?"inherit":N,M=Object(i.a)(n,y),C=Object(m.a)(),R=C.isFocusVisibleRef,G=C.onBlur,D=C.onFocus,z=C.ref,F=c.useState(!1),T=Object(r.a)(F,2),V=T[0],B=T[1],P=Object(O.a)(t,z),A=Object(o.a)({},n,{color:l,component:h,focusVisible:V,underline:w,variant:L}),H=function(e){var t=e.classes,n=e.component,r=e.focusVisible,a=e.underline,i={root:["root","underline".concat(Object(d.a)(a)),"button"===n&&"button",r&&"focusVisible"]};return Object(u.a)(i,v,t)}(A);return Object(k.jsx)(W,Object(o.a)({className:Object(s.a)(H.root,a),classes:g,color:l,component:h,onBlur:function(e){G(e),!1===R.current&&B(!1),x&&x(e)},onFocus:function(e){D(e),!0===R.current&&B(!0),f&&f(e)},ref:P,ownerState:A,variant:L},M))}));t.a=w},710:function(e,t,n){"use strict";var r=n(5),a=n(4),i=n(3),o=n(1),c=(n(11),n(7)),s=n(92),u=n(12),b=n(8),l=n(67),d=n(93);function j(e){return Object(l.a)("MuiContainer",e)}Object(d.a)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var p=n(9),m=n(0),O=["className","component","disableGutters","fixed","maxWidth"],h=Object(b.a)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat(Object(p.a)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.theme,n=e.ownerState;return Object(i.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&Object(r.a)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var r=t.breakpoints.values[n];return 0!==r&&(e[t.breakpoints.up(n)]={maxWidth:"".concat(r).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return Object(i.a)({},"xs"===n.maxWidth&&Object(r.a)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&Object(r.a)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),x=o.forwardRef((function(e,t){var n=Object(u.a)({props:e,name:"MuiContainer"}),r=n.className,o=n.component,b=void 0===o?"div":o,l=n.disableGutters,d=void 0!==l&&l,x=n.fixed,f=void 0!==x&&x,v=n.maxWidth,g=void 0===v?"lg":v,k=Object(a.a)(n,O),y=Object(i.a)({},n,{component:b,disableGutters:d,fixed:f,maxWidth:g}),S=function(e){var t=e.classes,n=e.fixed,r=e.disableGutters,a=e.maxWidth,i={root:["root",a&&"maxWidth".concat(Object(p.a)(String(a))),n&&"fixed",r&&"disableGutters"]};return Object(s.a)(i,j,t)}(y);return Object(m.jsx)(h,Object(i.a)({as:b,ownerState:y,className:Object(c.a)(S.root,r),ref:t},k))}));t.a=x},867:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(1),i=n.n(a),o=n(50),c=n(20),s=n(38),u=n(30),b=n(553),l=n(0),d=i.a.lazy((function(){return Promise.all([n.e(0),n.e(8),n.e(51),n.e(29)]).then(n.bind(null,837))})),j=i.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(15)]).then(n.bind(null,834))})),p=i.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(16)]).then(n.bind(null,835))})),m=i.a.lazy((function(){return Promise.all([n.e(0),n.e(7),n.e(43)]).then(n.bind(null,838))})),O=Object(s.b)((function(e){return{open:e.system.sidebarOpen}}),{setMenuOpen:u.g});t.default=Object(c.i)(O((function(){return Object(l.jsx)(c.c,{history:o.a,children:Object(l.jsxs)(c.d,{children:[Object(l.jsx)(c.b,{path:"/add-bucket",children:function(e){return Object(l.jsx)(a.Suspense,{fallback:Object(l.jsx)("div",{children:"Loading..."}),children:Object(l.jsx)(m,{})})}}),Object(l.jsx)(c.b,{path:"/reporter/minio/buckets/:bucketName/admin/*",children:function(e){return Object(l.jsx)(a.Suspense,{fallback:Object(l.jsx)("div",{children:"Loading..."}),children:Object(l.jsx)(j,Object(r.a)({},e))})}}),Object(l.jsx)(c.b,{path:"/reporter/minio/buckets/:bucketName/admin",children:function(e){return Object(l.jsx)(a.Suspense,{fallback:Object(l.jsx)("div",{children:"Loading..."}),children:Object(l.jsx)(j,Object(r.a)({},e))})}}),Object(l.jsx)(c.b,{path:"/reporter/minio/buckets/:bucketName/browse/:subpaths+",children:function(e){return Object(l.jsx)(a.Suspense,{fallback:Object(l.jsx)("div",{children:"Loading..."}),children:Object(l.jsx)(p,Object(r.a)({},e))})}}),Object(l.jsx)(c.b,{path:"/reporter/minio/buckets/:bucketName/browse",children:function(e){return Object(l.jsx)(a.Suspense,{fallback:Object(l.jsx)("div",{children:"Loading..."}),children:Object(l.jsx)(p,Object(r.a)({},e))})}}),Object(l.jsx)(c.b,{path:"/reporter/minio/buckets/:bucketName",component:function(){return Object(l.jsx)(c.a,{to:"/reporter/minio/buckets"})}}),Object(l.jsx)(c.b,{path:"/",children:function(e){return Object(l.jsx)(a.Suspense,{fallback:Object(l.jsx)("div",{children:"Loading..."}),children:Object(l.jsx)(d,Object(r.a)({},e))})}}),Object(l.jsx)(c.b,{children:function(e){return Object(l.jsx)(a.Suspense,{fallback:Object(l.jsx)("div",{children:"Loading..."}),children:Object(l.jsx)(b.a,{})})}})]})})})))}}]);
//# sourceMappingURL=48.aed246a9.chunk.js.map