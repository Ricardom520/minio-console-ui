(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[59],{549:function(t,e,n){"use strict";var r=n(5),a=n(4),i=n(3),o=n(1),c=(n(11),n(7)),s=n(23),l=n(353),d=n(92),g=n(8),p=n(12);var m=o.createContext(),u=n(15),x=n(67),b=n(93);function f(t){return Object(x.a)("MuiGrid",t)}var h=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],j=Object(b.a)("MuiGrid",["root","container","item","zeroMinWidth"].concat(Object(u.a)([0,1,2,3,4,5,6,7,8,9,10].map((function(t){return"spacing-xs-".concat(t)}))),Object(u.a)(["column-reverse","column","row-reverse","row"].map((function(t){return"direction-xs-".concat(t)}))),Object(u.a)(["nowrap","wrap-reverse","wrap"].map((function(t){return"wrap-xs-".concat(t)}))),Object(u.a)(h.map((function(t){return"grid-xs-".concat(t)}))),Object(u.a)(h.map((function(t){return"grid-sm-".concat(t)}))),Object(u.a)(h.map((function(t){return"grid-md-".concat(t)}))),Object(u.a)(h.map((function(t){return"grid-lg-".concat(t)}))),Object(u.a)(h.map((function(t){return"grid-xl-".concat(t)}))))),v=n(0),w=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function S(t){var e=parseFloat(t);return"".concat(e).concat(String(t).replace(String(e),"")||"px")}var O=Object(g.a)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState,r=n.container,a=n.direction,i=n.item,o=n.lg,c=n.md,s=n.sm,l=n.spacing,d=n.wrap,g=n.xl,p=n.xs,m=n.zeroMinWidth;return[e.root,r&&e.container,i&&e.item,m&&e.zeroMinWidth,r&&0!==l&&e["spacing-xs-".concat(String(l))],"row"!==a&&e["direction-xs-".concat(String(a))],"wrap"!==d&&e["wrap-xs-".concat(String(d))],!1!==p&&e["grid-xs-".concat(String(p))],!1!==s&&e["grid-sm-".concat(String(s))],!1!==c&&e["grid-md-".concat(String(c))],!1!==o&&e["grid-lg-".concat(String(o))],!1!==g&&e["grid-xl-".concat(String(g))]]}})((function(t){var e=t.ownerState;return Object(i.a)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"nowrap"===e.wrap&&{flexWrap:"nowrap"},"reverse"===e.wrap&&{flexWrap:"wrap-reverse"})}),(function(t){var e=t.theme,n=t.ownerState;return Object(s.b)({theme:e},n.direction,(function(t){var e={flexDirection:t};return 0===t.indexOf("column")&&(e["& > .".concat(j.item)]={maxWidth:"none"}),e}))}),(function(t){var e=t.theme,n=t.ownerState,a=n.container,i=n.rowSpacing,o={};return a&&0!==i&&(o=Object(s.b)({theme:e},i,(function(t){var n=e.spacing(t);return"0px"!==n?Object(r.a)({marginTop:"-".concat(S(n))},"& > .".concat(j.item),{paddingTop:S(n)}):{}}))),o}),(function(t){var e=t.theme,n=t.ownerState,a=n.container,i=n.columnSpacing,o={};return a&&0!==i&&(o=Object(s.b)({theme:e},i,(function(t){var n=e.spacing(t);return"0px"!==n?Object(r.a)({width:"calc(100% + ".concat(S(n),")"),marginLeft:"-".concat(S(n))},"& > .".concat(j.item),{paddingLeft:S(n)}):{}}))),o}),(function(t){var e=t.theme,n=t.ownerState;return e.breakpoints.keys.reduce((function(t,r){return function(t,e,n,r){var a=r[n];if(a){var o={};if(!0===a)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===a)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=Object(s.d)({values:r.columns,base:e.breakpoints.values}),l="".concat(Math.round(a/c[n]*1e8)/1e6,"%"),d={};if(r.container&&r.item&&0!==r.columnSpacing){var g=e.spacing(r.columnSpacing);if("0px"!==g){var p="calc(".concat(l," + ").concat(S(g),")");d={flexBasis:p,maxWidth:p}}}o=Object(i.a)({flexBasis:l,flexGrow:0,maxWidth:l},d)}0===e.breakpoints.values[n]?Object.assign(t,o):t[e.breakpoints.up(n)]=o}}(t,e,r,n),t}),{})})),W=o.forwardRef((function(t,e){var n,r=Object(p.a)({props:t,name:"MuiGrid"}),s=Object(l.a)(r),g=s.className,u=s.columns,x=void 0===u?12:u,b=s.columnSpacing,h=s.component,j=void 0===h?"div":h,S=s.container,W=void 0!==S&&S,C=s.direction,k=void 0===C?"row":C,y=s.item,M=void 0!==y&&y,z=s.lg,I=void 0!==z&&z,L=s.md,N=void 0!==L&&L,B=s.rowSpacing,T=s.sm,R=void 0!==T&&T,G=s.spacing,D=void 0===G?0:G,P=s.wrap,A=void 0===P?"wrap":P,E=s.xl,F=void 0!==E&&E,J=s.xs,U=void 0!==J&&J,_=s.zeroMinWidth,q=void 0!==_&&_,H=Object(a.a)(s,w),K=B||D,Q=b||D,V=o.useContext(m)||x,X=Object(i.a)({},s,{columns:V,container:W,direction:k,item:M,lg:I,md:N,sm:R,rowSpacing:K,columnSpacing:Q,wrap:A,xl:F,xs:U,zeroMinWidth:q}),Y=function(t){var e=t.classes,n=t.container,r=t.direction,a=t.item,i=t.lg,o=t.md,c=t.sm,s=t.spacing,l=t.wrap,g=t.xl,p=t.xs,m={root:["root",n&&"container",a&&"item",t.zeroMinWidth&&"zeroMinWidth",n&&0!==s&&"spacing-xs-".concat(String(s)),"row"!==r&&"direction-xs-".concat(String(r)),"wrap"!==l&&"wrap-xs-".concat(String(l)),!1!==p&&"grid-xs-".concat(String(p)),!1!==c&&"grid-sm-".concat(String(c)),!1!==o&&"grid-md-".concat(String(o)),!1!==i&&"grid-lg-".concat(String(i)),!1!==g&&"grid-xl-".concat(String(g))]};return Object(d.a)(m,f,e)}(X);return n=Object(v.jsx)(O,Object(i.a)({ownerState:X,className:Object(c.a)(Y.root,g),as:j,ref:e},H)),12!==V?Object(v.jsx)(m.Provider,{value:V,children:n}):n}));e.a=W},855:function(t,e,n){"use strict";n.r(e);var r=n(14),a=n(1),i=n.n(a),o=n(49),c=n(299),s=n(290),l=n(50),d=n(366),g=n(549),p=n(94),m=n(369),u=n(129),x=n.n(u),b=n(0);e.default=Object(c.a)((function(t){return Object(s.a)({"@global":{body:{backgroundColor:"#FAFAFA"}},paper:{borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",width:800,height:424,margin:"auto",position:"absolute",top:"50%",left:"50%",marginLeft:-400,marginTop:-212,"&.MuiPaper-root":{borderRadius:8}},avatar:{margin:t.spacing(1),backgroundColor:t.palette.secondary.main},form:{width:"100%"},submit:{margin:"30px 0px 16px",height:40,boxShadow:"none",padding:"16px 30px"},errorBlock:{backgroundColor:"#C72C48",width:800,height:64,display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:"50%",top:"50%",marginLeft:-400,marginTop:-290,color:"#fff",fontWeight:700,fontSize:14,borderRadius:8,padding:10,boxSizing:"border-box"},mainContainer:{position:"relative",height:424},theOcean:{borderTopLeftRadius:8,borderBottomLeftRadius:8,background:"transparent linear-gradient(to bottom, #073052 0%,#05122b 100%); 0% 0% no-repeat padding-box;"},oceanBg:{backgroundImage:"url(/images/BG_Illustration.svg)",backgroundRepeat:"no-repeat",backgroundPosition:"bottom left",height:"100%",width:324},theLogin:{padding:"40px 45px 20px 45px"},loadingLoginStrategy:{textAlign:"center"},headerTitle:{marginBottom:10},submitContainer:{textAlign:"right"},disclaimer:{fontSize:12,marginTop:30},jwtInput:{marginTop:45},linearPredef:{height:10},errorIconStyle:{marginRight:3},loaderAlignment:{display:"flex",width:"100%",height:"100%",justifyContent:"center",alignItems:"center",flexDirection:"column"},retryButton:{alignSelf:"flex-end"},extraDetailsContainer:{fontStyle:"italic",color:"#9C9C9C",transition:"all .2s ease-in-out",padding:"0 5px",marginTop:5,overflow:"auto"},errorLabel:{color:"#000",fontSize:18,fontWeight:500,marginLeft:5},simpleError:{marginTop:5,padding:"2px 5px",fontSize:16,color:"#000"},messageIcon:{color:"#C72C48",display:"flex","& svg":{width:32,height:32}},errorTitle:{display:"flex",alignItems:"center"}})}))((function(t){var e=t.classes,n=Object(a.useState)(""),c=Object(r.a)(n,2),s=c[0],u=c[1],f=Object(a.useState)(""),h=Object(r.a)(f,2),j=h[0],v=h[1],w=Object(a.useState)(!0),S=Object(r.a)(w,2),O=S[0],W=S[1];return Object(a.useEffect)((function(){if(O){var t=window.location.search,e=new URLSearchParams(t),n=e.get("code"),r=e.get("state"),a=e.get("error"),i=e.get("errorDescription");a||i?(u(a||""),v(i||""),W(!1)):o.a.invoke("POST","/reporter/minioServer/api/v1/login/oauth2/auth",{code:n,state:r}).then((function(){var t="/";localStorage.getItem("redirect-path")&&""!==localStorage.getItem("redirect-path")&&(t="".concat(localStorage.getItem("redirect-path")),localStorage.setItem("redirect-path","")),W(!1),l.a.push(t)})).catch((function(t){u(t.errorMessage),v(t.detailedError),W(!1)}))}}),[O]),""!==s||""!==j?Object(b.jsx)(i.a.Fragment,{children:Object(b.jsx)(d.a,{className:e.paper,children:Object(b.jsxs)(g.a,{container:!0,className:e.mainContainer,children:[Object(b.jsx)(g.a,{item:!0,xs:7,className:e.theOcean,children:Object(b.jsx)("div",{className:e.oceanBg})}),Object(b.jsxs)(g.a,{item:!0,xs:5,className:e.theLogin,children:[Object(b.jsxs)("div",{className:e.errorTitle,children:[Object(b.jsx)("span",{className:e.messageIcon,children:Object(b.jsx)(x.a,{})}),Object(b.jsx)("span",{className:e.errorLabel,children:"Error from IDP"})]}),Object(b.jsx)("div",{className:e.simpleError,children:s}),Object(b.jsx)(p.a,{variant:"body1",gutterBottom:!0,component:"div",className:e.extraDetailsContainer,children:j}),Object(b.jsx)(m.a,{component:"a",href:"/reporter/minio/login",type:"submit",variant:"contained",color:"primary",className:e.submit,children:"Back to Login"})]})]})})}):null}))}}]);
//# sourceMappingURL=59.aabaf196.chunk.js.map