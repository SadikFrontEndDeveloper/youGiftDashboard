(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[48],{2037:function(e,a,t){e.exports=t.p+"static/media/login.fd58a052.png"},2038:function(e,a,t){e.exports=t.p+"static/media/google.73cbaa09.svg"},2161:function(e,a,t){"use strict";t.r(a);var n=t(13),l=t(14),s=t(16),r=t(15),o=t(0),i=t.n(o),c=t(1263),m=t(1264),u=t(1265),p=t(1266),d=t(1267),f=t(813),b=t(796),h=t(797),g=t(803),v=t(804),E=t(4),N=t.n(E),y=t(2037),j=t.n(y),O=(t(887),t(1268)),k=t(189),w=t(68),x=function(e){var a=Object(w.b)(),t=a.isAuthenticated,n=a.loginWithRedirect;return i.a.createElement(i.a.Fragment,null,i.a.createElement(O.a,{className:"pt-1 pb-3"},i.a.createElement(k.a.Ripple,{color:"primary",className:"mt-1",onClick:function(e){e.preventDefault(),t?console.log("Already Logged In"):n()}},"Login With Auth0")))},C=t(828),R=t(818),T=t(814),z=t(824),M=t(36),P=t(812),W=t(201),S=t(359),F=t(271),L=t(318),A=t(455),I=t(336),J=t(21),q=t(2038),B=t.n(q),D=t(26),G=t(137),V=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).state={email:"demo@demo.com",password:"demodemo",remember:!1},e.handleLogin=function(a){a.preventDefault(),e.props.submitLoginWithFireBase(e.state.email,e.state.password,e.state.remember)},e.handleRemember=function(a){e.setState({remember:a.target.checked})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(O.a,{className:"pt-1"},i.a.createElement(C.a,{action:"/",onSubmit:this.handleLogin},i.a.createElement(R.a,{className:"form-label-group position-relative has-icon-left"},i.a.createElement(T.a,{type:"email",placeholder:"Email",value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})},required:!0}),i.a.createElement("div",{className:"form-control-position"},i.a.createElement(W.a,{size:15})),i.a.createElement(z.a,null,"Email")),i.a.createElement(R.a,{className:"form-label-group position-relative has-icon-left"},i.a.createElement(T.a,{type:"password",placeholder:"Password",value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})},required:!0}),i.a.createElement("div",{className:"form-control-position"},i.a.createElement(S.a,{size:15})),i.a.createElement(z.a,null,"Password")),i.a.createElement(R.a,{className:"d-flex justify-content-between align-items-center"},i.a.createElement(P.a,{color:"primary",icon:i.a.createElement(F.a,{className:"vx-icon",size:16}),label:"Remember me",defaultChecked:!1,onChange:this.handleRemember}),i.a.createElement("div",{className:"float-right"},i.a.createElement(M.a,{to:"/pages/forgot-password"},"Forgot Password?"))),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement(k.a.Ripple,{color:"primary",outline:!0,onClick:function(){J.a.push("/pages/register")}},"Register"),i.a.createElement(k.a.Ripple,{color:"primary",type:"submit"},"Login")))),i.a.createElement("div",{className:"auth-footer"},i.a.createElement("div",{className:"divider"},i.a.createElement("div",{className:"divider-text"},"OR")),i.a.createElement("div",{className:"footer-btn"},i.a.createElement(k.a.Ripple,{className:"btn-facebook",color:"",onClick:function(){e.props.loginWithFB()}},i.a.createElement(L.a,{size:14})),i.a.createElement(k.a.Ripple,{className:"btn-twitter",color:"",onClick:this.props.loginWithTwitter},i.a.createElement(A.a,{size:14,stroke:"white"})),i.a.createElement(k.a.Ripple,{className:"btn-google",color:"",onClick:this.props.loginWithGoogle},i.a.createElement("img",{src:B.a,alt:"google",height:"15",width:"15"})),i.a.createElement(k.a.Ripple,{className:"btn-github",color:"",onClick:this.props.loginWithGithub},i.a.createElement(I.a,{size:14,stroke:"white"})))))}}]),t}(i.a.Component),H=Object(D.b)((function(e){return{values:e.auth.login}}),{submitLoginWithFireBase:G.i,loginWithFB:G.b,loginWithTwitter:G.f,loginWithGoogle:G.d,loginWithGithub:G.c})(V),K=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).state={email:"demo@demo.com",password:"demodemo",remember:!1},e.handleLogin=function(a){a.preventDefault(),e.props.loginWithJWT(e.state)},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(O.a,{className:"pt-1"},i.a.createElement(C.a,{action:"/",onSubmit:this.handleLogin},i.a.createElement(R.a,{className:"form-label-group position-relative has-icon-left"},i.a.createElement(T.a,{type:"email",placeholder:"Email",value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})},required:!0}),i.a.createElement("div",{className:"form-control-position"},i.a.createElement(W.a,{size:15})),i.a.createElement(z.a,null,"Email")),i.a.createElement(R.a,{className:"form-label-group position-relative has-icon-left"},i.a.createElement(T.a,{type:"password",placeholder:"Password",value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})},required:!0}),i.a.createElement("div",{className:"form-control-position"},i.a.createElement(S.a,{size:15})),i.a.createElement(z.a,null,"Password")),i.a.createElement(R.a,{className:"d-flex justify-content-between align-items-center"},i.a.createElement(P.a,{color:"primary",icon:i.a.createElement(F.a,{className:"vx-icon",size:16}),label:"Remember me",defaultChecked:!1,onChange:this.handleRemember}),i.a.createElement("div",{className:"float-right"},i.a.createElement(M.a,{to:"/pages/forgot-password"},"Forgot Password?"))),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement(k.a.Ripple,{color:"primary",outline:!0,onClick:function(){J.a.push("/pages/register")}},"Register"),i.a.createElement(k.a.Ripple,{color:"primary",type:"submit"},"Login")))))}}]),t}(i.a.Component),Q=Object(D.b)((function(e){return{values:e.auth.login}}),{loginWithJWT:G.e})(K),U=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).state={activeTab:"1"},e.toggle=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(c.a,{className:"m-0 justify-content-center"},i.a.createElement(m.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},i.a.createElement(u.a,{className:"bg-authentication login-card rounded-0 mb-0 w-100"},i.a.createElement(c.a,{className:"m-0"},i.a.createElement(m.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center px-1 py-0"},i.a.createElement("img",{src:j.a,alt:"loginImg"})),i.a.createElement(m.a,{lg:"6",md:"12",className:"p-0"},i.a.createElement(u.a,{className:"rounded-0 mb-0 px-2 login-tabs-container"},i.a.createElement(p.a,{className:"pb-1"},i.a.createElement(d.a,null,i.a.createElement("h4",{className:"mb-0"},"Login"))),i.a.createElement("p",{className:"px-2 auth-title"},"Welcome back, please login to your account."),i.a.createElement(f.a,{tabs:!0,className:"px-2"},i.a.createElement(b.a,null,i.a.createElement(h.a,{className:N()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},"JWT")),i.a.createElement(b.a,null,i.a.createElement(h.a,{className:N()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},"Firebase")),i.a.createElement(b.a,null,i.a.createElement(h.a,{className:N()({active:"3"===this.state.activeTab}),onClick:function(){e.toggle("3")}},"Auth0"))),i.a.createElement(g.a,{activeTab:this.state.activeTab},i.a.createElement(v.a,{tabId:"1"},i.a.createElement(Q,null)),i.a.createElement(v.a,{tabId:"2"},i.a.createElement(H,null)),i.a.createElement(v.a,{tabId:"3"},i.a.createElement(x,null)))))))))}}]),t}(i.a.Component);a.default=U},812:function(e,a,t){"use strict";var n=t(13),l=t(14),s=t(16),r=t(15),o=t(0),i=t.n(o),c=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},i.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),i.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},i.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),i.a.createElement("span",null,this.props.label))}}]),t}(i.a.Component);a.a=c},813:function(e,a,t){"use strict";var n=t(5),l=t(7),s=t(0),r=t.n(s),o=t(1),i=t.n(o),c=t(4),m=t.n(c),u=t(3),p=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],d={tabs:i.a.bool,pills:i.a.bool,vertical:i.a.oneOfType([i.a.bool,i.a.string]),horizontal:i.a.string,justified:i.a.bool,fill:i.a.bool,navbar:i.a.bool,card:i.a.bool,tag:u.tagPropType,className:i.a.string,cssModule:i.a.object},f=function(e){var a=e.className,t=e.cssModule,s=e.tabs,o=e.pills,i=e.vertical,c=e.horizontal,d=e.justified,f=e.fill,b=e.navbar,h=e.card,g=e.tag,v=Object(l.a)(e,p),E=Object(u.mapToCssModules)(m()(a,b?"navbar-nav":"nav",!!c&&"justify-content-"+c,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(i),{"nav-tabs":s,"card-header-tabs":h&&s,"nav-pills":o,"card-header-pills":h&&o,"nav-justified":d,"nav-fill":f}),t);return r.a.createElement(g,Object(n.a)({},v,{className:E}))};f.propTypes=d,f.defaultProps={tag:"ul",vertical:!1},a.a=f},814:function(e,a,t){"use strict";var n=t(5),l=t(7),s=t(10),r=t(12),o=t(0),i=t.n(o),c=t(1),m=t.n(c),u=t(4),p=t.n(u),d=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:d.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,r=e.bsSize,o=e.valid,c=e.invalid,m=e.tag,u=e.addon,b=e.plaintext,h=e.innerRef,g=Object(l.a)(e,f),v=["radio","checkbox"].indexOf(s)>-1,E=new RegExp("\\D","g"),N=m||("select"===s||"textarea"===s?s:"input"),y="form-control";b?(y+="-plaintext",N=m||"input"):"file"===s?y+="-file":"range"===s?y+="-range":v&&(y=u?null:"form-check-input"),g.size&&E.test(g.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var j=Object(d.mapToCssModules)(p()(a,c&&"is-invalid",o&&"is-valid",!!r&&"form-control-"+r,y),t);return("input"===N||m&&"function"===typeof m)&&(g.type=s),g.children&&!b&&"select"!==s&&"string"===typeof N&&"select"!==N&&(Object(d.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(N,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":c}))},a}(i.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h},818:function(e,a,t){"use strict";var n=t(5),l=t(7),s=t(0),r=t.n(s),o=t(1),i=t.n(o),c=t(4),m=t.n(c),u=t(3),p=["className","cssModule","row","disabled","check","inline","tag"],d={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:u.tagPropType,className:i.a.string,cssModule:i.a.object},f=function(e){var a=e.className,t=e.cssModule,s=e.row,o=e.disabled,i=e.check,c=e.inline,d=e.tag,f=Object(l.a)(e,p),b=Object(u.mapToCssModules)(m()(a,!!s&&"row",i?"form-check":"form-group",!(!i||!c)&&"form-check-inline",!(!i||!o)&&"disabled"),t);return"fieldset"===d&&(f.disabled=o),r.a.createElement(d,Object(n.a)({},f,{className:b}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},824:function(e,a,t){"use strict";var n=t(5),l=t(7),s=t(0),r=t.n(s),o=t(1),i=t.n(o),c=t(4),m=t.n(c),u=t(3),p=["className","cssModule","hidden","widths","tag","check","size","for"],d=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:d,order:d,offset:d})]),b={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:u.tagPropType,className:i.a.string,cssModule:i.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:i.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,s=e.hidden,o=e.widths,i=e.tag,c=e.check,d=e.size,f=e.for,b=Object(l.a)(e,p),h=[];o.forEach((function(a,n){var l=e[a];if(delete b[a],l||""===l){var s,r=!n;if(Object(u.isObject)(l)){var o,i=r?"-":"-"+a+"-";s=g(r,a,l.size),h.push(Object(u.mapToCssModules)(m()(((o={})[s]=l.size||""===l.size,o["order"+i+l.order]=l.order||0===l.order,o["offset"+i+l.offset]=l.offset||0===l.offset,o))),t)}else s=g(r,a,l),h.push(s)}}));var v=Object(u.mapToCssModules)(m()(a,!!s&&"sr-only",!!c&&"form-check-label",!!d&&"col-form-label-"+d,h,!!h.length&&"col-form-label"),t);return r.a.createElement(i,Object(n.a)({htmlFor:f},b,{className:v}))};v.propTypes=b,v.defaultProps=h,a.a=v},828:function(e,a,t){"use strict";var n=t(5),l=t(7),s=t(10),r=t(12),o=t(0),i=t.n(o),c=t(1),m=t.n(c),u=t(4),p=t.n(u),d=t(3),f=["className","cssModule","inline","tag","innerRef"],b={children:m.a.node,inline:m.a.bool,tag:d.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,r=e.tag,o=e.innerRef,c=Object(l.a)(e,f),m=Object(d.mapToCssModules)(p()(a,!!s&&"form-inline"),t);return i.a.createElement(r,Object(n.a)({},c,{ref:o,className:m}))},a}(o.Component);h.propTypes=b,h.defaultProps={tag:"form"},a.a=h},887:function(e,a,t){}}]);
//# sourceMappingURL=48.28b632ea.chunk.js.map