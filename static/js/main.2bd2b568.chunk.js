(this["webpackJsonpeasy-email-react-2020"]=this["webpackJsonpeasy-email-react-2020"]||[]).push([[0],{125:function(e,t,n){e.exports=n(304)},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},262:function(e,t,n){},263:function(e,t,n){},282:function(e,t,n){},284:function(e,t,n){},286:function(e,t,n){},298:function(e,t,n){},299:function(e,t,n){},302:function(e,t,n){},303:function(e,t,n){},304:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(33),i=n.n(r),l=(n(130),n(131),n(132),n(8)),c=n(3),s=n(4),m=n(5),u=n(6),p=(n(133),n(134),n(1)),d=function(e){return{type:"UPDATE",payload:e}},g=function(e){return{type:"TOGGLE_VISIBILITY",payload:e}},h=function(e){return{type:"IS_LOADING",payload:e}},f=function(e){return{type:"HAS_WARNING",payload:e}},b=n(28),y=n(14),v=n.n(y),C=n(71),x=n.n(C),E=n(21),k=n(118),w=n.n(k),I=n(119),B=n.n(I),O=function(e){e.width;var t=e.rgb,n=e.hex,a=e.hsv,r=e.hsl,i=e.onChange,l=e.onSwatchHover,c=e.disableAlpha,s=e.presetColors,m=e.renderers,u=e.styles,p=void 0===u?{}:u,d=e.className,g=void 0===d?"":d,h=v()(x()({default:Object(b.a)({picker:{width:"100%",padding:"10px 10px 0",boxSizing:"initial",background:"#fff",borderRadius:"0.25rem"},saturation:{width:"100%",paddingBottom:"75%",position:"relative",overflow:"hidden"},Saturation:{radius:"3px",shadow:"inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"},controls:{display:"flex"},sliders:{padding:"4px 0",flex:"1"},color:{width:"24px",height:"24px",position:"relative",marginTop:"4px",marginLeft:"4px",borderRadius:"3px"},activeColor:{absolute:"0px 0px 0px 0px",borderRadius:"2px",background:"rgba(".concat(t.r,",").concat(t.g,",").concat(t.b,",").concat(t.a,")"),boxShadow:"inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"},hue:{position:"relative",height:"10px",overflow:"hidden"},Hue:{radius:"2px",shadow:"inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"},alpha:{position:"relative",height:"10px",marginTop:"4px",overflow:"hidden"},Alpha:{radius:"2px",shadow:"inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"}},p),disableAlpha:{color:{height:"10px"},hue:{height:"10px"},alpha:{display:"none"}}},p),{disableAlpha:c});return o.a.createElement("div",{style:h.picker,className:"sketch-picker ".concat(g)},o.a.createElement("div",{style:h.saturation},o.a.createElement(E.Saturation,{style:h.Saturation,hsl:r,hsv:a,onChange:i})),o.a.createElement("div",{style:h.controls,className:"flexbox-fix"},o.a.createElement("div",{style:h.sliders},o.a.createElement("div",{style:h.hue},o.a.createElement(E.Hue,{style:h.Hue,hsl:r,onChange:i})),o.a.createElement("div",{style:h.alpha},o.a.createElement(E.Alpha,{style:h.Alpha,rgb:t,hsl:r,renderers:m,onChange:i}))),o.a.createElement("div",{style:h.color},o.a.createElement(E.Checkboard,null),o.a.createElement("div",{style:h.activeColor}))),o.a.createElement(w.a,{rgb:t,hsl:r,hex:n,onChange:i,disableAlpha:c}),o.a.createElement(B.a,{colors:s,onClick:i,onSwatchHover:l}))};O.defaultProps={disableAlpha:!1,width:200,styles:{},presetColors:["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"]};var j=Object(E.ColorWrap)(O),F=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).handleClick=function(){e.setState({displayColorPicker:!e.state.displayColorPicker})},e.handleChange=function(t){e.setState({background:t.hex}),e.props.update(Object(l.a)({},e.props.store,t.hex))},e.handleClose=function(){e.setState({displayColorPicker:!1})},e.state={displayColorPicker:!1,background:"#fff"},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:this.handleClick,style:{cursor:"pointer"}},"Pick Color"),this.state.displayColorPicker?o.a.createElement("div",{style:{flexBasis:"100%",display:"flex",justifyContent:"flex-end",marginBottom:"1rem"}},o.a.createElement(j,{onChange:this.handleChange,color:this.state.background})):null)}}]),n}(o.a.Component),T=Object(p.b)(null,(function(e){return{update:function(t){return e(d(t))}}}))(F),N=(n(262),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).getFile=function(t){var n=t.target.files[0];if(n){e.props.isLoading(e.props.store);var a=new FormData;a.append("myFile",n),fetch("https://limitless-citadel-48645.herokuapp.com/saveImage",{method:"POST",body:a}).then((function(e){return e.json()})).then((function(t){e.props.update(Object(l.a)({},e.props.store,"https://limitless-citadel-48645.herokuapp.com".concat(t.path))),e.props.isLoading(!1)}))}},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"upload-btn-wrapper"},o.a.createElement("button",{className:"upload-btn"},"Upload file"),o.a.createElement("input",{type:"file",name:"myfile",className:"logo-file-uploader",onChange:this.getFile}))}}]),n}(o.a.Component)),A=Object(p.b)(null,(function(e){return{update:function(t){return e(d(t))},isLoading:function(t){return e(h(t))}}}))(N),L=(n(263),n(120)),R=n.n(L),S=(n(282),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).closeModal=function(t){e.props.clearWarning()},e}return Object(s.a)(n,[{key:"componentWillUnmount",value:function(){this.props.clearWarning()}},{key:"render",value:function(){return o.a.createElement("div",{className:"warning-block"},o.a.createElement("p",null,this.props.warning))}}]),n}(o.a.Component)),W=Object(p.b)((function(e){return{warning:e.warning.warning}}),(function(e){return{clearWarning:function(){return e({type:"CLEAR_WARNING",payload:!1})}}}))(S),G=(n(283),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).toggleModal=function(t){e.setState({active:!e.state.active})},e.update=function(t,n){n.length>e.props.constraints.maxLength?e.props.hasWarning({store:e.props.store,warning:"Warning: Your content exceeds the maximum suggested length for this section."}):e.props.clearWarning(),e.props.update(Object(l.a)({},t,n))},e.state={active:!1},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"text-field-btn",onClick:function(){return e.toggleModal()}},"Edit"),o.a.createElement("div",{className:this.state.active?"modal-wrapper":"hidden"},o.a.createElement("div",{className:"modal",style:{position:"relative"}},o.a.createElement(R.a,{theme:"snow",value:this.props.content,onChange:function(t){return e.update(e.props.store,t)}}),this.props.warning===this.props.store&&o.a.createElement(W,null))))}}]),n}(o.a.Component)),D=Object(p.b)((function(e,t){return{content:e.form[t.store],warning:e.warning.store}}),(function(e){return{update:function(t){return e(d(t))},hasWarning:function(t){return e(f(t))},clearWarning:function(){return e({type:"CLEAR_WARNING",payload:!1})}}}))(G),M=(n(284),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).toggleModal=function(t){e.setState({active:!e.state.active})},e.update=function(t,n){n.length>e.props.constraints.maxLength?e.props.hasWarning({store:e.props.store,warning:"Warning: Your content exceeds the maximum suggested length for this section."}):e.props.clearWarning(),e.props.update(Object(l.a)({},t,n))},e.state={active:!1},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"text-field-btn",onClick:function(){return e.toggleModal()}},"Edit"),o.a.createElement("div",{className:this.state.active?"modal-wrapper":"hidden"},o.a.createElement("div",{className:"modal"},o.a.createElement("input",{type:"text",style:{padding:"0.25rem 0 0.25rem 0.25rem",width:"calc(100% - 0.25rem)"},value:this.props.content,onChange:function(t){return e.update(e.props.store,t.target.value)}}),this.props.warning===this.props.store&&o.a.createElement(W,null))))}}]),n}(o.a.Component)),P=Object(p.b)((function(e,t){return{content:e.form[t.store],warning:e.warning.store}}),(function(e){return{update:function(t){return e(d(t))},hasWarning:function(t){return e(f(t))},clearWarning:function(){return e({type:"CLEAR_WARNING",payload:!1})}}}))(M),H=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).getFormComponent=function(e){switch(e.component){case"ButtonCopyField":return o.a.createElement(P,{store:e.store,constraints:e.constraints});case"Colorpicker":return o.a.createElement(T,{store:e.store,constraints:e.constraints});case"TextField":return o.a.createElement(D,{store:e.store,constraints:e.constraints});case"FileUploader":return o.a.createElement(A,{store:e.store,constraints:e.constraints});default:return null}},e.toggleChecked=function(t){e.props.toggleVisibility(Object(l.a)({},t,!e.props.active[t]))},e.getFormItems=function(){return e.props.formItems.map((function(t){return o.a.createElement("div",{className:"form-item",key:t.title},o.a.createElement("div",{className:"form-title-wrapper"},t.checkbox&&o.a.createElement("input",{type:"checkbox",onClick:function(){return e.toggleChecked(t.title)},defaultChecked:e.props.active,style:{cursor:"pointer"}}),t.checkbox&&o.a.createElement("p",{style:{fontSize:"0.85rem",marginLeft:"0.25rem"}},t.title),!t.checkbox&&o.a.createElement("p",{style:{fontSize:"0.85rem",marginLeft:"1.4rem"}},t.title)),e.getFormComponent(t))}))},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:this.props.dropdown?"dropdown":"hidden dropdown"},this.getFormItems())}}]),n}(o.a.Component),_=Object(p.b)((function(e,t){return{active:e.visibility}}),(function(e){return{toggleVisibility:function(t,n){return e(g(t))}}}))(H),z=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).toggleChecked=function(t){e.props.toggleVisibility(Object(l.a)({},e.props.title,!e.props.active))},e.toggleDropdown=function(t){e.setState({dropdown:!e.state.dropdown})},e.state={dropdown:!1},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"dropdown-wrapper"},o.a.createElement("div",{className:"dropdown-container"},o.a.createElement("div",{className:"title-wrapper"},o.a.createElement("input",{type:"checkbox",className:"visibility-toggle",onClick:function(){return e.toggleChecked()},defaultChecked:this.props.active}),o.a.createElement("h4",{style:{fontWeight:"500",fontSize:"1.1rem",padding:"0",margin:"0"}},this.props.title)),o.a.createElement("p",{className:"dropdown-toggle",onClick:function(){return e.toggleDropdown()}},"+")),o.a.createElement(_,{dropdown:this.state.dropdown,formItems:this.props.formItems}))}}]),n}(o.a.Component),U=Object(p.b)((function(e,t){return{active:e.visibility[t.title]}}),(function(e){return{toggleVisibility:function(t,n){return e(g(t))}}}))(z),V=n(19),Y=n.n(V),q=n(29),J=function(){var e=function(){var e=Object(q.a)(Y.a.mark((function e(){var t,n;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector(".preview").outerHTML,n="".concat('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml">\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>\n<meta name="format-detection" content="telephone=no">\n<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;">\n<meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE" />\n\n    <title>Page title</title>\n\n    <style>\n       @import url(http://fonts.googleapis.com/css?family=Roboto:300); /*Calling our web font*/\n\n      /* Some resets and issue fixes */\n      #outlook a { padding:0; }\n      body{ width:100% !important; -webkit-text; size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0;}\n      .ReadMsgBody { width: 100%; }\n      .ExternalClass {width:100%;}\n      .backgroundTable {margin:0 auto; padding:0; width:100%;!important;}\n      table td {border-collapse: collapse;}\n      .ExternalClass * {line-height: 115%;}\n      /* End reset */\n\n\n      /* These are our tablet/medium screen media queries */\n      @media screen and (max-width: 630px){\n\n\n          /* Display block allows us to stack elements */\n          *[class="mobile-column"] {display: block;}\n\n          /* Some more stacking elements */\n          *[class="mob-column"] {float: none !important;width: 100% !important;}\n\n          /* Hide stuff */\n          *[class="hide"] {display:none !important;}\n\n          /* This sets elements to 100% width and fixes the height issues too, a god send */\n          *[class="100p"] {width:100% !important; height:auto !important;}\n\n          /* For the 2x2 stack */\n          *[class="condensed"] {padding-bottom:40px !important; display: block;}\n\n          /* Centers content on mobile */\n          *[class="center"] {text-align:center !important; width:100% !important; height:auto !important;}\n\n          /* 100percent width section with 20px padding */\n          *[class="100pad"] {width:100% !important; padding:20px;}\n\n          /* 100percent width section with 20px padding left & right */\n          *[class="100padleftright"] {width:100% !important; padding:0 20px 0 20px;}\n\n          /* 100percent width section with 20px padding top & bottom */\n          *[class="100padtopbottom"] {width:100% !important; padding:20px 0px 20px 0px;}\n\n\n      }\n        </style>\n\n\n</head>').concat('<body style="padding:0; margin:0"><table border="0" cellpadding="0" cellspacing="0" style="margin: 0; padding: 0" width="100%">\n    <tr>\n        <td align="center" valign="top" style="background-color: #e4e4e4">').concat(t).concat("</td>\n    </tr>\n</table></body>\n</html>"),e.next=4,navigator.clipboard.writeText(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement("button",{onClick:function(){return e()}},"Export")},X=function(e){var t=e.menus.map((function(e){return o.a.createElement(U,{key:e.title,formItems:e.formItems,title:e.title})}));return o.a.createElement("section",{className:"builder"},o.a.createElement("div",{className:"menu-containers-wrapper"},t),o.a.createElement("div",{className:"buttons-wrapper"},o.a.createElement(J,null)))},Z=(n(286),function(){return o.a.createElement("div",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.15)"}},o.a.createElement("i",{className:"fas fa-spinner fa-pulse",title:"spinner"}))}),$=Object(p.b)((function(e){return{companyImage:e.form.companyImage,companyName:e.form.companyName,companyFontColor:e.form.companyFontColor,bgColor:e.form.headerBGColor,active:e.visibility.Header,loading:e.loading,logoActive:e.visibility["Company Logo"],nameActive:e.visibility["Company Name"],link:e.form.headerLink}}))((function(e){var t=e.bgColor,n=e.companyImage,a=e.companyName,r=e.companyFontColor,i=e.active,l=e.loading,c=e.logoActive,s=e.nameActive,m=e.link;return i?o.a.createElement("table",{border:"0",cellSpacing:"0",cellPadding:"0",width:"600px",height:"105px",style:{color:r,backgroundColor:t}},o.a.createElement("tbody",null,o.a.createElement("tr",null,c&&o.a.createElement("td",{width:"75px"},o.a.createElement("div",{className:"company-logo-container",style:{position:"relative",width:"min-content"}},"companyImage"===l&&o.a.createElement(Z,null),o.a.createElement("a",{href:m},o.a.createElement("img",{src:n,alt:"Company logo",border:"0",style:{display:"block",width:"75px",marginLeft:"1rem"}})))),s&&o.a.createElement("td",{style:{fontSize:"25px",paddingLeft:"1rem"}},a)))):null})),K=Object(p.b)((function(e){return{mainImage:e.form.mainImage,mainImageTagline:e.form.mainImageTagline,mainImageButtonCopy:e.form.mainImageButtonCopy,mainImageButtonColor:e.form.mainImageButtonColor,mainImageButtonFontColor:e.form.mainImageButtonFontColor,active:e.visibility["Main Image"],loading:e.loading}}))((function(e){var t=e.mainImage,n=(e.mainImageTagline,e.mainImageButtonCopy,e.mainImageButtonColor,e.mainImageButtonFontColor,e.active),a=e.loading;return n?o.a.createElement("div",{className:"placeholder-image-container",style:{position:"relative"}},"mainImage"===a&&o.a.createElement(Z,null),o.a.createElement("img",{src:t,alt:"Main content",style:{width:"600px",display:"block"}})):null})),Q=n(18),ee=n.n(Q),te=Object(p.b)((function(e){return{mainImageTaglineBG:e.form.mainImageTaglineBG,mainImageTagline:e.form.mainImageTagline,mainImageButtonCopy:e.form.mainImageButtonCopy,mainImageButtonColor:e.form.mainImageButtonColor,mainImageFontColor:e.form.mainImageFontColor,mainImageButtonFontColor:e.form.mainImageButtonFontColor,active:e.visibility["Image Banner"],bannerTextActive:e.visibility["Banner Text"],buttonTextActive:e.visibility["Banner Button Text"],link:e.form.mainImageButtonLink}}))((function(e){var t=e.mainImageTaglineBG,n=e.mainImageTagline,a=e.mainImageButtonCopy,r=e.mainImageButtonColor,i=e.mainImageFontColor,l=e.mainImageButtonFontColor,c=e.active,s=e.bannerTextActive,m=e.buttonTextActive,u=e.link,p={backgroundColor:r,border:"solid 0.5px rgba(0,0,0,0.25)",padding:"0.5rem 1rem",borderRadius:"0.25rem",cursor:"pointer",height:"min-content",fontWeight:"600",color:l,verticalAlign:"middle",float:"right",fontSize:"20px"};return c?o.a.createElement("table",{border:"0",cellSpacing:"0",cellPadding:"0",style:{display:"block",color:i,backgroundColor:t,tableLayout:"fixed",width:"600px",paddingTop:"1rem"}},o.a.createElement("tbody",null,o.a.createElement("tr",null,s&&o.a.createElement("td",{width:"400"},ee()(n,{replace:function(e){if(e.name)return o.a.createElement(e.name,{style:{paddingLeft:"1rem",fontSize:"26px"}},Object(Q.domToReact)(e.children,e.options))}})),m&&o.a.createElement("td",{style:{padding:" 1rem"}},o.a.createElement("a",{href:u},o.a.createElement("button",{style:p},a)))))):null})),ne=Object(p.b)((function(e){return{content:e.form.content,active:e.visibility["Main Content"],contentActive:e.visibility["Content Block Text"]}}))((function(e){var t=e.content,n=e.active,a=e.contentActive;return n?o.a.createElement("table",{border:"0",cellSpacing:"0",cellPadding:"0",width:"600px",style:{backgroundColor:"#ffffff"}},o.a.createElement("tbody",null,o.a.createElement("tr",null,a&&o.a.createElement("td",{style:{padding:"0.5rem 1rem",fontSize:"20px"}},ee()(t))))):null})),ae=Object(p.b)((function(e){return{address:e.form.footerAddress,bgColor:e.form.footerBGColor,fontColor:e.form.footerFontColor,active:e.visibility.Footer}}))((function(e){var t=e.address,n=e.fontColor,a=e.bgColor;return e.active?o.a.createElement("table",{border:"0",cellSpacing:"0",cellPadding:"0",width:"600px",style:{color:n,backgroundColor:a}},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{style:{padding:"0 16px"},align:"center"},ee()(t))))):null})),oe=Object(p.b)((function(e){return{cta:e.form.cta,buttonColor:e.form.ctaButtonColor,buttonFontColor:e.form.ctaButtonFontColor,active:e.visibility["Main Content"],buttonActive:e.visibility["CTA Button Text"],link:e.form.ctaButtonLink}}))((function(e){var t=e.cta,n=e.buttonColor,a=e.buttonFontColor,r=e.active,i=e.buttonActive,l=e.link,c={margin:"1rem 0",padding:"0.75rem 1.25rem",border:"solid 0.5px rgba(0,0,0,0.25)",borderRadius:"0.25rem",color:a,backgroundColor:n,cursor:"pointer",fontWeight:"600",fontSize:"20px"};return r?o.a.createElement("table",{border:"0",cellSpacing:"0",cellPadding:"0",width:"600px",style:{backgroundColor:"#ffffff"}},o.a.createElement("tbody",null,o.a.createElement("tr",null,i&&o.a.createElement("td",{style:{padding:"1rem"},align:"center"},o.a.createElement("a",{href:l},o.a.createElement("button",{style:c},ee()(t))))))):null})),re=(n(298),function(){return o.a.createElement("div",{className:"preview",style:{margin:"25px"}},o.a.createElement($,null),o.a.createElement(K,null),o.a.createElement(te,null),o.a.createElement(ne,null),o.a.createElement(oe,null),o.a.createElement(ae,null))}),ie=function(){return o.a.createElement("section",{className:"preview-container"},o.a.createElement(re,null))},le=[{title:"Header",formItems:[{title:"Company Logo",component:"FileUploader",store:"companyImage",checkbox:!0},{title:"Company Name",component:"ButtonCopyField",constraints:{maxLength:40},store:"companyName",checkbox:!0},{title:"Header Link",component:"ButtonCopyField",constraints:{maxLength:1/0},store:"headerLink",checkbox:!1},{title:"Font Color",component:"Colorpicker",store:"companyFontColor",checkbox:!1},{title:"Background Color",component:"Colorpicker",store:"headerBGColor",checkbox:!1}]},{title:"Main Image",formItems:[{title:"Image",component:"FileUploader",store:"mainImage",checkbox:!1}]},{title:"Image Banner",formItems:[{title:"Banner Text",component:"TextField",constraints:{maxLength:65},store:"mainImageTagline",checkbox:!0},{title:"Background Color",component:"Colorpicker",store:"mainImageTaglineBG",checkbox:!1},{title:"Font Color",component:"Colorpicker",store:"mainImageFontColor",checkbox:!1},{title:null},{title:"Banner Button Text",component:"ButtonCopyField",constraints:{maxLength:25},store:"mainImageButtonCopy",checkbox:!0},{title:"Banner Button Link",component:"ButtonCopyField",constraints:{maxLength:1/0},store:"mainImageButtonLink",checkbox:!1},{title:"Button Color",component:"Colorpicker",store:"mainImageButtonColor",checkbox:!1},{title:"Button Font Color",component:"Colorpicker",store:"mainImageButtonFontColor",checkbox:!1}]},{title:"Main Content",formItems:[{title:"Content Block Text",component:"TextField",constraints:{maxLength:1e3},store:"content",checkbox:!0},{title:"CTA Button Text",component:"ButtonCopyField",constraints:{maxLength:50},store:"cta",checkbox:!0},{title:"CTA Button Link",component:"ButtonCopyField",store:"ctaButtonLink",constraints:{maxLength:1/0},checkbox:!1},{title:"Button Color",component:"Colorpicker",store:"ctaButtonColor",checkbox:!1},{title:"Button Font Color",component:"Colorpicker",store:"ctaButtonFontColor",checkbox:!1}]},{title:"Footer",formItems:[{title:"Company Address",component:"TextField",constraints:{maxLength:250},store:"footerAddress"},{title:"Font Color",component:"Colorpicker",store:"footerFontColor"},{title:"Background Color",component:"Colorpicker",store:"footerBGColor"}]}],ce=(n(299),n(26)),se=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentWillUnmount",value:function(){this.props.clearError()}},{key:"render",value:function(){return o.a.createElement("section",{className:"error-wrapper"},o.a.createElement("div",{className:"error-block"},o.a.createElement("p",null,this.props.error),o.a.createElement(ce.b,{to:"/"},o.a.createElement("button",null,"Back to dashboard >"))))}}]),n}(o.a.Component),me=Object(p.b)((function(e){return{error:e.error}}),(function(e){return{clearError:function(){return e({type:"CLEAR_ERROR",payload:!1})}}}))(se),ue=n(22),pe=n(122),de=n.n(pe),ge=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"bar";return new de.a(e,{type:n,data:{labels:t.map((function(e){return e.tone_name})),datasets:[{label:"Sentiment Strength",data:t.map((function(e){return(100*e.score).toFixed()})),backgroundColor:["rgba(255, 99, 132, 0.75)","rgba(54, 162, 235, 0.75)","rgba(255, 206, 86, 0.75)","rgba(75, 192, 192, 0.75)","rgba(153, 102, 255, 0.75)","rgba(255, 159, 64, 0.75)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:0}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})},he=function(){var e=Object(q.a)(Y.a.mark((function e(t){var n,a,o,r,i;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(e){return e.document_tone.tones},a={toneInput:{text:t}},e.next=4,fetch("https://easy-email.mybluemix.net/api/tone",{body:JSON.stringify(a),headers:{"Content-Type":"application/json"},method:"POST"});case 4:if(!(o=e.sent).ok){e.next=13;break}return e.next=8,o.json();case 8:return r=e.sent,i=n(r),e.abrupt("return",i);case 13:throw new Error("".concat(o.status," ").concat(o.statusText,". Oops! We couldn't reach the server."));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=(n(302),n(303),function(){return o.a.createElement("div",{className:"loading-wrapper"},o.a.createElement("i",{className:"fas fa-spinner fa-pulse",title:"spinner"}))}),be=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).contentRef=o.a.createRef(),e.ctaRef=o.a.createRef(),e.taglineRef=o.a.createRef(),e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(q.a)(Y.a.mark((function e(){var t,n,a,o,r,i,l,c;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.isLoading(!0),e.prev=1,e.next=4,he(this.props.content);case 4:return t=e.sent,e.next=7,he(this.props.tagline);case 7:return n=e.sent,e.next=10,he(this.props.tagLineButton);case 10:return a=e.sent,o=n.concat(a),e.next=14,he(this.props.cta);case 14:r=e.sent,i=this.contentRef.current.getContext("2d"),l=this.taglineRef.current.getContext("2d"),c=this.ctaRef.current.getContext("2d"),ge(i,t,"doughnut"),ge(l,o),ge(c,r),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(1),this.props.hasError(e.t0);case 26:this.props.isLoading(!1);case 27:case"end":return e.stop()}}),e,this,[[1,23]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",{className:"tone-analysis-view"},o.a.createElement(ce.b,{to:"/"},o.a.createElement("button",{className:"back"},"< Back")),this.props.loading&&o.a.createElement(fe,null),o.a.createElement("h2",null,"Content Sentiment"),o.a.createElement("div",{className:"email-content-wrapper"},o.a.createElement(ne,null)),o.a.createElement("canvas",{ref:this.contentRef,style:{maxWidth:"50rem",maxHeight:"30rem"}}),o.a.createElement("h2",null,"Tagline Sentiment"),o.a.createElement("div",{className:"email-tagline-wrapper"},o.a.createElement(te,null)),o.a.createElement("canvas",{ref:this.taglineRef,style:{maxWidth:"50rem",maxHeight:"30rem"}}),o.a.createElement("h2",null,"Call-to-action Sentiment"),o.a.createElement("div",{className:"email-cta-wrapper"},o.a.createElement(oe,null)),o.a.createElement("canvas",{ref:this.ctaRef,style:{maxWidth:"50rem",maxHeight:"30rem"}}))}}]),n}(o.a.Component),ye=Object(p.b)((function(e){return{content:e.form.content,tagline:e.form.mainImageTagline,tagLineButton:e.form.mainImageButtonCopy,cta:e.form.cta,loading:e.loading}}),(function(e){return{isLoading:function(t){return e(h(t))},hasError:function(t){return e(function(e){return{type:"ERROR",payload:e}}(t))}}}))(be),ve=Object(p.b)((function(e){return{error:e.error}}))((function(e){return o.a.createElement("div",{className:"App"},e.error&&o.a.createElement(ue.a,{to:"/error"}),o.a.createElement(ue.b,{exact:!0,path:"/"},o.a.createElement(X,{menus:le}),o.a.createElement(ie,null)),o.a.createElement(ue.b,{path:"/tone-analysis"},o.a.createElement(ye,null)),o.a.createElement(ue.b,{path:"/error"},o.a.createElement(me,null)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ce=n(20),xe=n(123),Ee=n(124),ke={companyImage:"/easy-email-2020/placeholder-image.png",companyName:"Company Name",mainImage:"/easy-email-2020/placeholder-image.png",mainImageTagline:"Your amazing call-to-action here!",mainImageButtonCopy:"Free Download",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",cta:"Call Now",footerAddress:"Company Address",headerBGColor:"#ffffff",footerBGColor:"#ffffff",mainImageTaglineBG:"#ffffff",mainImageButtonLink:"",ctaButtonLink:"",headerLink:""},we={Header:!0,"Main Image":!0,"Image Banner":!0,"Main Content":!0,Footer:!0,Image:!0,"Company Logo":!0,"Company Name":!0,"Banner Text":!0,"Banner Button Text":!0,"CTA Button Text":!0,"Content Block Text":!0},Ie=Object(Ce.combineReducers)({form:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE":return Object(b.a)({},e,{},t.payload);default:return e}},visibility:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_VISIBILITY":return Object(b.a)({},e,{},t.payload);default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_LOADING":return t.payload;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ERROR":return t.payload.message;case"CLEAR_ERROR":return t.payload;default:return e}},warning:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HAS_WARNING":case"CLEAR_WARNING":return t.payload;default:return e}}}),Be=Object(Ce.createStore)(Ie,Object(xe.composeWithDevTools)(Object(Ce.applyMiddleware)(Ee.a)));i.a.render(o.a.createElement(ce.a,{basename:"/easy-email-2020"},o.a.createElement(p.a,{store:Be},o.a.createElement(o.a.StrictMode,null,o.a.createElement(ve,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[125,1,2]]]);
//# sourceMappingURL=main.2bd2b568.chunk.js.map