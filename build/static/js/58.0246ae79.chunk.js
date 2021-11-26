(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[58],{487:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a(2),n=a(385),s=a(1),i=a(0),l=["children","value","index"],r=function(e){var t=e.children,a=e.value,r=e.index,o=Object(n.a)(e,l);return Object(i.jsx)("div",Object(c.a)(Object(c.a)({role:"tabpanel",hidden:a!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r),style:{marginTop:"5px"}},o),{},{children:a===r&&Object(i.jsx)(s.Fragment,{children:t})}))}},869:function(e,t,a){"use strict";a.r(t);var c=a(14),n=a(2),s=a(1),i=a.n(s),l=a(38),r=a(549),o=a(873),u=a(898),b=a(355),j=a(369),d=a(290),O=a(299),m=a(120),h=a(30),x=a(49),p=a(700),f=a(377),v=a(378),g=a(382),y=a(415),S=a(547),k=a(487),C=a(0),w={setModalErrorSnackMessage:h.h},E=Object(l.b)(null,w);t.default=Object(O.a)((function(e){return Object(d.a)(Object(n.a)(Object(n.a)(Object(n.a)({strongText:{fontWeight:700},keyName:{marginLeft:5},buttonContainer:{textAlign:"right",marginTop:".9rem"},tabsHeader:{marginBottom:"1rem"}},m.h),m.w),m.m))}))(E((function(e){var t=e.classes,a=e.closeModalAndRefresh,n=e.selectedUser,l=e.open,d=e.setModalErrorSnackMessage,O=Object(s.useState)(!1),m=Object(c.a)(O,2),h=m[0],w=m[1],E=Object(s.useState)(""),K=Object(c.a)(E,2),N=K[0],M=K[1],P=Object(s.useState)(""),R=Object(c.a)(P,2),T=R[0],U=R[1],G=Object(s.useState)(!1),F=Object(c.a)(G,2),A=F[0],D=F[1],H=Object(s.useState)([]),I=Object(c.a)(H,2),J=I[0],L=I[1],B=Object(s.useState)([]),V=Object(c.a)(B,2),W=V[0],_=V[1],q=Object(s.useState)([]),z=Object(c.a)(q,2),Q=z[0],X=z[1],Y=Object(s.useState)(0),Z=Object(c.a)(Y,2),$=Z[0],ee=Z[1],te=Object(s.useCallback)((function(){if(!n)return null;x.a.invoke("GET","/api/v1/user?name=".concat(encodeURI(n.accessKey))).then((function(e){w(!1),M(e.accessKey),L(e.memberOf||[]),X(e.memberOf||[]),D("enabled"===e.status)})).catch((function(e){w(!1),d(e)}))}),[n,d]);Object(s.useEffect)((function(){null===n?(M(""),U(""),L([])):te()}),[n,te]);var ae=""!==N.trim()&&(""!==T.trim()&&null===n||null!==n);return Object(C.jsxs)(f.a,{onClose:function(){a()},modalOpen:l,title:null!==n?"Edit User":"Create User",children:[null!==n&&Object(C.jsx)("div",{className:t.floatingEnabled,children:Object(C.jsx)(g.a,{indicatorLabels:["Enabled","Disabled"],checked:A,value:"user_enabled",id:"user-status",name:"user-status",onChange:function(e){D(e.target.checked)},switchOnly:!0})}),Object(C.jsx)(i.a.Fragment,{children:Object(C.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){!function(e){if(e.preventDefault(),T.length<8)return d({errorMessage:"Passwords must be at least 8 characters long",detailedError:""}),void w(!1);h||(w(!0),null!==n?x.a.invoke("PUT","/api/v1/user?name=".concat(encodeURI(n.accessKey)),{status:A?"enabled":"disabled",groups:J,policies:W}).then((function(e){w(!1),a()})).catch((function(e){w(!1),d(e)})):x.a.invoke("POST","/reporter/minioServer/api/v1/users",{accessKey:N,secretKey:T,groups:J,policies:W}).then((function(e){w(!1),a()})).catch((function(e){w(!1),d(e)})))}(e)},children:Object(C.jsxs)(r.a,{container:!0,children:[Object(C.jsxs)(r.a,{item:!0,xs:12,children:[Object(C.jsx)("div",{className:t.formFieldRow,children:Object(C.jsx)(v.a,{id:"accesskey-input",name:"accesskey-input",label:"Access Key",value:N,onChange:function(e){M(e.target.value)},disabled:null!==n})}),null!==n?Object(C.jsx)(y.a,{label:"Current Groups",content:Q.join(", ")}):Object(C.jsx)("div",{className:t.formFieldRow,children:Object(C.jsx)(v.a,{id:"standard-multiline-static",name:"standard-multiline-static",label:"Secret Key",type:"password",value:T,onChange:function(e){U(e.target.value)},autoComplete:"current-password"})}),Object(C.jsx)(r.a,{item:!0,xs:12,className:t.tabsHeader,children:Object(C.jsxs)(o.a,{value:$,onChange:function(e,t){ee(t)},children:[Object(C.jsx)(u.a,{label:"Policies"}),Object(C.jsx)(u.a,{label:"Groups"})]})}),Object(C.jsx)(k.a,{value:$,index:0,children:Object(C.jsx)(r.a,{item:!0,xs:12,children:Object(C.jsx)(S.a,{selectedPolicy:W,setSelectedPolicy:_})})}),Object(C.jsx)(k.a,{value:$,index:1,children:Object(C.jsx)(r.a,{item:!0,xs:12,children:Object(C.jsx)(p.a,{selectedGroups:J,setSelectedGroups:function(e){L(e)}})})}),h&&Object(C.jsx)(r.a,{item:!0,xs:12,children:Object(C.jsx)(b.a,{})})]}),Object(C.jsxs)(r.a,{item:!0,xs:12,className:t.buttonContainer,children:[Object(C.jsx)(j.a,{type:"button",variant:"outlined",color:"primary",className:t.spacerRight,onClick:function(){null===n?(M(""),U(""),L([])):L([])},children:"Clear"}),Object(C.jsx)(j.a,{type:"submit",variant:"contained",color:"primary",disabled:h||!ae,children:"Save"})]})]})})})]})})))}}]);
//# sourceMappingURL=58.0246ae79.chunk.js.map