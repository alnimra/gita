(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Juyh:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return W}));var o=n("q1tI"),a=n.n(o),r=n("Ji2X"),i=n("ofer"),c=n("hlFM"),l=n("Ff2n"),s=n("wx14"),u=(n("17x9"),n("iuhU")),d=n("H2TA"),p=n("ye/S"),b=n("i8i4"),f=n("bfFb"),h="undefined"!==typeof window?o.useLayoutEffect:o.useEffect;function m(e){var t=o.useRef(e);return h((function(){t.current=e})),o.useCallback((function(){return t.current.apply(void 0,arguments)}),[])}var v=n("G7As"),y=n("KQm4"),g=n("zLVn"),x=n("JX7q"),O=n("dI71"),S=a.a.createContext(null);function k(e,t){var n=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&Object(o.isValidElement)(e)?t(e):e}(e)})),n}function j(e,t,n){return null!=n[t]?n[t]:e.props[t]}function w(e,t,n){var a=k(e.children),r=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var o,a=Object.create(null),r=[];for(var i in e)i in t?r.length&&(a[i]=r,r=[]):r.push(i);var c={};for(var l in t){if(a[l])for(o=0;o<a[l].length;o++){var s=a[l][o];c[a[l][o]]=n(s)}c[l]=n(l)}for(o=0;o<r.length;o++)c[r[o]]=n(r[o]);return c}(t,a);return Object.keys(r).forEach((function(i){var c=r[i];if(Object(o.isValidElement)(c)){var l=i in t,s=i in a,u=t[i],d=Object(o.isValidElement)(u)&&!u.props.in;!s||l&&!d?s||!l||d?s&&l&&Object(o.isValidElement)(u)&&(r[i]=Object(o.cloneElement)(c,{onExited:n.bind(null,c),in:u.props.in,exit:j(c,"exit",e),enter:j(c,"enter",e)})):r[i]=Object(o.cloneElement)(c,{in:!1}):r[i]=Object(o.cloneElement)(c,{onExited:n.bind(null,c),in:!0,exit:j(c,"exit",e),enter:j(c,"enter",e)})}})),r}var E=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},C=function(e){function t(t,n){var o,a=(o=e.call(this,t,n)||this).handleExited.bind(Object(x.a)(o));return o.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},o}Object(O.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,a,r=t.children,i=t.handleExited;return{children:t.firstRender?(n=e,a=i,k(n.children,(function(e){return Object(o.cloneElement)(e,{onExited:a.bind(null,e),in:!0,appear:j(e,"appear",n),enter:j(e,"enter",n),exit:j(e,"exit",n)})}))):w(e,r,i),firstRender:!1}},n.handleExited=function(e,t){var n=k(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=Object(s.a)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,o=Object(g.a)(e,["component","childFactory"]),r=this.state.contextValue,i=E(this.state.children).map(n);return delete o.appear,delete o.enter,delete o.exit,null===t?a.a.createElement(S.Provider,{value:r},i):a.a.createElement(S.Provider,{value:r},a.a.createElement(t,o,i))},t}(a.a.Component);C.propTypes={},C.defaultProps={component:"div",childFactory:function(e){return e}};var R=C,z="undefined"===typeof window?o.useEffect:o.useLayoutEffect;var T=function(e){var t=e.classes,n=e.pulsate,a=void 0!==n&&n,r=e.rippleX,i=e.rippleY,c=e.rippleSize,l=e.in,s=e.onExited,d=void 0===s?function(){}:s,p=e.timeout,b=o.useState(!1),f=b[0],h=b[1],v=Object(u.a)(t.ripple,t.rippleVisible,a&&t.ripplePulsate),y={width:c,height:c,top:-c/2+i,left:-c/2+r},g=Object(u.a)(t.child,f&&t.childLeaving,a&&t.childPulsate),x=m(d);return z((function(){if(!l){h(!0);var e=setTimeout(x,p);return function(){clearTimeout(e)}}}),[x,l,p]),o.createElement("span",{className:v,style:y},o.createElement("span",{className:g}))},M=o.forwardRef((function(e,t){var n=e.center,a=void 0!==n&&n,r=e.classes,i=e.className,c=Object(l.a)(e,["center","classes","className"]),d=o.useState([]),p=d[0],b=d[1],f=o.useRef(0),h=o.useRef(null);o.useEffect((function(){h.current&&(h.current(),h.current=null)}),[p]);var m=o.useRef(!1),v=o.useRef(null),g=o.useRef(null),x=o.useRef(null);o.useEffect((function(){return function(){clearTimeout(v.current)}}),[]);var O=o.useCallback((function(e){var t=e.pulsate,n=e.rippleX,a=e.rippleY,i=e.rippleSize,c=e.cb;b((function(e){return[].concat(Object(y.a)(e),[o.createElement(T,{key:f.current,classes:r,timeout:550,pulsate:t,rippleX:n,rippleY:a,rippleSize:i})])})),f.current+=1,h.current=c}),[r]),S=o.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=t.pulsate,r=void 0!==o&&o,i=t.center,c=void 0===i?a||t.pulsate:i,l=t.fakeElement,s=void 0!==l&&l;if("mousedown"===e.type&&m.current)m.current=!1;else{"touchstart"===e.type&&(m.current=!0);var u,d,p,b=s?null:x.current,f=b?b.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(c||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(f.width/2),d=Math.round(f.height/2);else{var h=e.touches?e.touches[0]:e,y=h.clientX,S=h.clientY;u=Math.round(y-f.left),d=Math.round(S-f.top)}if(c)(p=Math.sqrt((2*Math.pow(f.width,2)+Math.pow(f.height,2))/3))%2===0&&(p+=1);else{var k=2*Math.max(Math.abs((b?b.clientWidth:0)-u),u)+2,j=2*Math.max(Math.abs((b?b.clientHeight:0)-d),d)+2;p=Math.sqrt(Math.pow(k,2)+Math.pow(j,2))}e.touches?null===g.current&&(g.current=function(){O({pulsate:r,rippleX:u,rippleY:d,rippleSize:p,cb:n})},v.current=setTimeout((function(){g.current&&(g.current(),g.current=null)}),80)):O({pulsate:r,rippleX:u,rippleY:d,rippleSize:p,cb:n})}}),[a,O]),k=o.useCallback((function(){S({},{pulsate:!0})}),[S]),j=o.useCallback((function(e,t){if(clearTimeout(v.current),"touchend"===e.type&&g.current)return e.persist(),g.current(),g.current=null,void(v.current=setTimeout((function(){j(e,t)})));g.current=null,b((function(e){return e.length>0?e.slice(1):e})),h.current=t}),[]);return o.useImperativeHandle(t,(function(){return{pulsate:k,start:S,stop:j}}),[k,S,j]),o.createElement("span",Object(s.a)({className:Object(u.a)(r.root,i),ref:x},c),o.createElement(R,{component:null,exit:!0},p))})),V=Object(d.a)((function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}}),{flip:!1,name:"MuiTouchRipple"})(o.memo(M)),N=o.forwardRef((function(e,t){var n=e.action,a=e.buttonRef,r=e.centerRipple,i=void 0!==r&&r,c=e.children,d=e.classes,p=e.className,h=e.component,y=void 0===h?"button":h,g=e.disabled,x=void 0!==g&&g,O=e.disableRipple,S=void 0!==O&&O,k=e.disableTouchRipple,j=void 0!==k&&k,w=e.focusRipple,E=void 0!==w&&w,C=e.focusVisibleClassName,R=e.onBlur,z=e.onClick,T=e.onFocus,M=e.onFocusVisible,N=e.onKeyDown,I=e.onKeyUp,D=e.onMouseDown,L=e.onMouseLeave,P=e.onMouseUp,F=e.onTouchEnd,$=e.onTouchMove,B=e.onTouchStart,X=e.onDragLeave,W=e.tabIndex,U=void 0===W?0:W,A=e.TouchRippleProps,K=e.type,Y=void 0===K?"button":K,J=Object(l.a)(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),_=o.useRef(null);var q=o.useRef(null),H=o.useState(!1),G=H[0],Q=H[1];x&&G&&Q(!1);var Z=Object(v.a)(),ee=Z.isFocusVisible,te=Z.onBlurVisible,ne=Z.ref;function oe(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:j;return m((function(o){return t&&t(o),!n&&q.current&&q.current[e](o),!0}))}o.useImperativeHandle(n,(function(){return{focusVisible:function(){Q(!0),_.current.focus()}}}),[]),o.useEffect((function(){G&&E&&!S&&q.current.pulsate()}),[S,E,G]);var ae=oe("start",D),re=oe("stop",X),ie=oe("stop",P),ce=oe("stop",(function(e){G&&e.preventDefault(),L&&L(e)})),le=oe("start",B),se=oe("stop",F),ue=oe("stop",$),de=oe("stop",(function(e){G&&(te(e),Q(!1)),R&&R(e)}),!1),pe=m((function(e){_.current||(_.current=e.currentTarget),ee(e)&&(Q(!0),M&&M(e)),T&&T(e)})),be=function(){var e=b.findDOMNode(_.current);return y&&"button"!==y&&!("A"===e.tagName&&e.href)},fe=o.useRef(!1),he=m((function(e){E&&!fe.current&&G&&q.current&&" "===e.key&&(fe.current=!0,e.persist(),q.current.stop(e,(function(){q.current.start(e)}))),e.target===e.currentTarget&&be()&&" "===e.key&&e.preventDefault(),N&&N(e),e.target===e.currentTarget&&be()&&"Enter"===e.key&&!x&&(e.preventDefault(),z&&z(e))})),me=m((function(e){E&&" "===e.key&&q.current&&G&&!e.defaultPrevented&&(fe.current=!1,e.persist(),q.current.stop(e,(function(){q.current.pulsate(e)}))),I&&I(e),z&&e.target===e.currentTarget&&be()&&" "===e.key&&!e.defaultPrevented&&z(e)})),ve=y;"button"===ve&&J.href&&(ve="a");var ye={};"button"===ve?(ye.type=Y,ye.disabled=x):("a"===ve&&J.href||(ye.role="button"),ye["aria-disabled"]=x);var ge=Object(f.a)(a,t),xe=Object(f.a)(ne,_),Oe=Object(f.a)(ge,xe),Se=o.useState(!1),ke=Se[0],je=Se[1];o.useEffect((function(){je(!0)}),[]);var we=ke&&!S&&!x;return o.createElement(ve,Object(s.a)({className:Object(u.a)(d.root,p,G&&[d.focusVisible,C],x&&d.disabled),onBlur:de,onClick:z,onFocus:pe,onKeyDown:he,onKeyUp:me,onMouseDown:ae,onMouseLeave:ce,onMouseUp:ie,onDragLeave:re,onTouchEnd:se,onTouchMove:ue,onTouchStart:le,ref:Oe,tabIndex:x?-1:U},ye,J),c,we?o.createElement(V,Object(s.a)({ref:q,center:i},A)):null)})),I=Object(d.a)({root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}},disabled:{},focusVisible:{}},{name:"MuiButtonBase"})(N),D=n("NqtD"),L=o.forwardRef((function(e,t){var n=e.children,a=e.classes,r=e.className,i=e.color,c=void 0===i?"default":i,d=e.component,p=void 0===d?"button":d,b=e.disabled,f=void 0!==b&&b,h=e.disableElevation,m=void 0!==h&&h,v=e.disableFocusRipple,y=void 0!==v&&v,g=e.endIcon,x=e.focusVisibleClassName,O=e.fullWidth,S=void 0!==O&&O,k=e.size,j=void 0===k?"medium":k,w=e.startIcon,E=e.type,C=void 0===E?"button":E,R=e.variant,z=void 0===R?"text":R,T=Object(l.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),M=w&&o.createElement("span",{className:Object(u.a)(a.startIcon,a["iconSize".concat(Object(D.a)(j))])},w),V=g&&o.createElement("span",{className:Object(u.a)(a.endIcon,a["iconSize".concat(Object(D.a)(j))])},g);return o.createElement(I,Object(s.a)({className:Object(u.a)(a.root,a[z],r,"inherit"===c?a.colorInherit:"default"!==c&&a["".concat(z).concat(Object(D.a)(c))],"medium"!==j&&[a["".concat(z,"Size").concat(Object(D.a)(j))],a["size".concat(Object(D.a)(j))]],m&&a.disableElevation,f&&a.disabled,S&&a.fullWidth),component:p,disabled:f,focusRipple:!y,focusVisibleClassName:Object(u.a)(a.focusVisible,x),ref:t,type:C},T),o.createElement("span",{className:a.label},M,n,V))})),P=Object(d.a)((function(e){return{root:Object(s.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(p.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(p.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(p.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(p.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(p.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(p.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(p.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(L),F=n("1+i7"),$=n("OrM8"),B=n("iuMA"),X=a.a.createElement;function W(){return X(r.a,{maxWidth:"sm"},X(c.a,{my:4},X(i.a,{variant:"h4",component:"h1",gutterBottom:!0},"Next.js example"),X(P,{variant:"contained",color:"primary",component:$.a,naked:!0,href:"/"},"Go to the main page"),X(F.a,null),X(B.a,null)))}},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])}},[["rB5V",0,2,1,3,4]]]);