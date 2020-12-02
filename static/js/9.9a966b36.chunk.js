(this["webpackJsonpcefetmg-simulador-fisica"]=this["webpackJsonpcefetmg-simulador-fisica"]||[]).push([[9],{92:function(e,a,t){"use strict";t.r(a);var s=t(95),i=t(83),r=t(84),l=t(85),c=t(86),o=t(7),n=t(0),d=t.n(n),m=t(2),f=t(3),b=t(5),u=t.n(b),v=(t(51),t(4)),j=t.n(v),h={type:j.a.string,tooltip:j.a.bool,as:j.a.elementType},p=d.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"div":t,i=e.className,r=e.type,l=void 0===r?"valid":r,c=e.tooltip,o=void 0!==c&&c,n=Object(f.a)(e,["as","className","type","tooltip"]);return d.a.createElement(s,Object(m.a)({},n,{ref:a,className:u()(i,l+"-"+(o?"tooltip":"feedback"))}))}));p.displayName="Feedback",p.propTypes=h;var x=p,O=d.a.createContext({controlId:void 0}),y=t(6),N=d.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsCustomPrefix,r=e.className,l=e.type,c=void 0===l?"checkbox":l,o=e.isValid,b=void 0!==o&&o,v=e.isInvalid,j=void 0!==v&&v,h=e.isStatic,p=e.as,x=void 0===p?"input":p,N=Object(f.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),P=Object(n.useContext)(O),C=P.controlId,g=P.custom?[i,"custom-control-input"]:[s,"form-check-input"],w=g[0],I=g[1];return s=Object(y.a)(w,I),d.a.createElement(x,Object(m.a)({},N,{ref:a,type:c,id:t||C,className:u()(r,s,b&&"is-valid",j&&"is-invalid",h&&"position-static")}))}));N.displayName="FormCheckInput";var P=N,C=d.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,i=e.className,r=e.htmlFor,l=Object(f.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),c=Object(n.useContext)(O),o=c.controlId,b=c.custom?[s,"custom-control-label"]:[t,"form-check-label"],v=b[0],j=b[1];return t=Object(y.a)(v,j),d.a.createElement("label",Object(m.a)({},l,{ref:a,htmlFor:r||o,className:u()(i,t)}))}));C.displayName="FormCheckLabel";var g=C,w=d.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsCustomPrefix,r=e.inline,l=void 0!==r&&r,c=e.disabled,o=void 0!==c&&c,b=e.isValid,v=void 0!==b&&b,j=e.isInvalid,h=void 0!==j&&j,p=e.feedbackTooltip,N=void 0!==p&&p,C=e.feedback,w=e.className,I=e.style,F=e.title,E=void 0===F?"":F,k=e.type,_=void 0===k?"checkbox":k,V=e.label,R=e.children,L=e.custom,A=e.as,z=void 0===A?"input":A,S=Object(f.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),T="switch"===_||L,G=T?[i,"custom-control"]:[s,"form-check"],M=G[0],K=G[1];s=Object(y.a)(M,K);var J=Object(n.useContext)(O).controlId,D=Object(n.useMemo)((function(){return{controlId:t||J,custom:T}}),[J,T,t]),q=T||null!=V&&!1!==V&&!R,B=d.a.createElement(P,Object(m.a)({},S,{type:"switch"===_?"checkbox":_,ref:a,isValid:v,isInvalid:h,isStatic:!q,disabled:o,as:z}));return d.a.createElement(O.Provider,{value:D},d.a.createElement("div",{style:I,className:u()(w,s,T&&"custom-"+_,l&&s+"-inline")},R||d.a.createElement(d.a.Fragment,null,B,q&&d.a.createElement(g,{title:E},V),(v||h)&&d.a.createElement(x,{type:v?"valid":"invalid",tooltip:N},C))))}));w.displayName="FormCheck",w.Input=P,w.Label=g;var I=w,F=d.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsCustomPrefix,r=e.className,l=e.isValid,c=e.isInvalid,o=e.lang,b=e.as,v=void 0===b?"input":b,j=Object(f.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),h=Object(n.useContext)(O),p=h.controlId,x=h.custom?[i,"custom-file-input"]:[s,"form-control-file"],N=x[0],P=x[1];return s=Object(y.a)(N,P),d.a.createElement(v,Object(m.a)({},j,{ref:a,id:t||p,type:"file",lang:o,className:u()(r,s,l&&"is-valid",c&&"is-invalid")}))}));F.displayName="FormFileInput";var E=F,k=d.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,i=e.className,r=e.htmlFor,l=Object(f.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),c=Object(n.useContext)(O),o=c.controlId,b=c.custom?[s,"custom-file-label"]:[t,"form-file-label"],v=b[0],j=b[1];return t=Object(y.a)(v,j),d.a.createElement("label",Object(m.a)({},l,{ref:a,htmlFor:r||o,className:u()(i,t),"data-browse":l["data-browse"]}))}));k.displayName="FormFileLabel";var _=k,V=d.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsCustomPrefix,r=e.disabled,l=void 0!==r&&r,c=e.isValid,o=void 0!==c&&c,b=e.isInvalid,v=void 0!==b&&b,j=e.feedbackTooltip,h=void 0!==j&&j,p=e.feedback,N=e.className,P=e.style,C=e.label,g=e.children,w=e.custom,I=e.lang,F=e["data-browse"],k=e.as,V=void 0===k?"div":k,R=e.inputAs,L=void 0===R?"input":R,A=Object(f.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),z=w?[i,"custom"]:[s,"form-file"],S=z[0],T=z[1];s=Object(y.a)(S,T);var G=Object(n.useContext)(O).controlId,M=Object(n.useMemo)((function(){return{controlId:t||G,custom:w}}),[G,w,t]),K=null!=C&&!1!==C&&!g,J=d.a.createElement(E,Object(m.a)({},A,{ref:a,isValid:o,isInvalid:v,disabled:l,as:L,lang:I}));return d.a.createElement(O.Provider,{value:M},d.a.createElement(V,{style:P,className:u()(N,s,w&&"custom-file")},g||d.a.createElement(d.a.Fragment,null,w?d.a.createElement(d.a.Fragment,null,J,K&&d.a.createElement(_,{"data-browse":F},C)):d.a.createElement(d.a.Fragment,null,K&&d.a.createElement(_,null,C),J),(o||v)&&d.a.createElement(x,{type:o?"valid":"invalid",tooltip:h},p))))}));V.displayName="FormFile",V.Input=E,V.Label=_;var R=V,L=(t(23),d.a.forwardRef((function(e,a){var t,s,i=e.bsPrefix,r=e.bsCustomPrefix,l=e.type,c=e.size,o=e.htmlSize,b=e.id,v=e.className,j=e.isValid,h=void 0!==j&&j,p=e.isInvalid,x=void 0!==p&&p,N=e.plaintext,P=e.readOnly,C=e.custom,g=e.as,w=void 0===g?"input":g,I=Object(f.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),F=Object(n.useContext)(O).controlId,E=C?[r,"custom"]:[i,"form-control"],k=E[0],_=E[1];if(i=Object(y.a)(k,_),N)(s={})[i+"-plaintext"]=!0,t=s;else if("file"===l){var V;(V={})[i+"-file"]=!0,t=V}else if("range"===l){var R;(R={})[i+"-range"]=!0,t=R}else if("select"===w&&C){var L;(L={})[i+"-select"]=!0,L[i+"-select-"+c]=c,t=L}else{var A;(A={})[i]=!0,A[i+"-"+c]=c,t=A}return d.a.createElement(w,Object(m.a)({},I,{type:l,size:o,ref:a,readOnly:P,id:b||F,className:u()(v,t,h&&"is-valid",x&&"is-invalid")}))})));L.displayName="FormControl";var A=Object.assign(L,{Feedback:x}),z=d.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.children,r=e.controlId,l=e.as,c=void 0===l?"div":l,o=Object(f.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(y.a)(t,"form-group");var b=Object(n.useMemo)((function(){return{controlId:r}}),[r]);return d.a.createElement(O.Provider,{value:b},d.a.createElement(c,Object(m.a)({},o,{ref:a,className:u()(s,t)}),i))}));z.displayName="FormGroup";var S=z,T=t(90),G=d.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,i=e.bsPrefix,r=e.column,l=e.srOnly,c=e.className,o=e.htmlFor,b=Object(f.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),v=Object(n.useContext)(O).controlId;i=Object(y.a)(i,"form-label");var j="col-form-label";"string"===typeof r&&(j=j+" "+j+"-"+r);var h=u()(c,i,l&&"sr-only",r&&j);return o=o||v,r?d.a.createElement(T.a,Object(m.a)({as:"label",className:h,htmlFor:o},b)):d.a.createElement(s,Object(m.a)({ref:a,className:h,htmlFor:o},b))}));G.displayName="FormLabel",G.defaultProps={column:!1,srOnly:!1};var M=G,K=d.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.as,r=void 0===i?"small":i,l=e.muted,c=Object(f.a)(e,["bsPrefix","className","as","muted"]);return t=Object(y.a)(t,"form-text"),d.a.createElement(r,Object(m.a)({},c,{ref:a,className:u()(s,t,l&&"text-muted")}))}));K.displayName="FormText";var J=K,D=d.a.forwardRef((function(e,a){return d.a.createElement(I,Object(m.a)({},e,{ref:a,type:"switch"}))}));D.displayName="Switch",D.Input=I.Input,D.Label=I.Label;var q=D,B=t(16),H=Object(B.a)("form-row"),Q=d.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.inline,i=e.className,r=e.validated,l=e.as,c=void 0===l?"form":l,o=Object(f.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(y.a)(t,"form"),d.a.createElement(c,Object(m.a)({},o,{ref:a,className:u()(i,r&&"was-validated",s&&t+"-inline")}))}));Q.displayName="Form",Q.defaultProps={inline:!1},Q.Row=H,Q.Group=S,Q.Control=A,Q.Check=I,Q.File=R,Q.Switch=q,Q.Label=M,Q.Text=J;var U=Q,W=t(93);var X=function(e,a){for(var t=new W.g,s=e.position.clone(),i=0;i<e.geometry.vertices.length;i++){var r=e.geometry.vertices[i].clone(),l=e.geometry.vertices[i].clone().applyMatrix4(e.matrix).sub(e.position).length();t.set(s,r.normalize());var c=t.intersectObjects([a]);if(c.length>0&&c[0].distance<=l)return!0}return!1},Y=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={distancia:10,esfera1_massa:10,esfera1_velocidade:2,esfera2_massa:10,esfera2_velocidade:-1},e.colidiram=!1,e.esfera1_velocidadeAtual=null,e.esfera2_velocidadeAtual=null,e}return Object(r.a)(t,[{key:"inicializar",value:function(e,a){this.colidiram=!1,this.esfera1_velocidadeAtual=this.state.esfera1_velocidade,this.esfera2_velocidadeAtual=this.state.esfera2_velocidade;var t=this.state.distancia/2+.5,s=new W.i(1,64,64),i=new W.e({color:3821539});this.esfera1=new W.d(s,i),this.esfera1.position.x=-t,e.add(this.esfera1);var r=new W.i(1,64,64),l=new W.e({color:13385021});this.esfera2=new W.d(r,l),this.esfera2.position.x=t,e.add(this.esfera2);var c=new W.c(16777215,1);c.position.set(0,20,0),c.target.position.set(-10,0,0),e.add(c),e.add(c.target),a.position.set(0,0,20)}},{key:"iterar",value:function(e,a,t){this.colidiram||(this.colidiram=X(this.esfera1,this.esfera2)),this.colidiram?(this.esfera1_velocidadeAtual=0,this.esfera2_velocidadeAtual=0):(this.esfera1.position.x+=this.esfera1_velocidadeAtual*t,this.esfera2.position.x+=this.esfera2_velocidadeAtual*t)}},{key:"render",value:function(){var e=this,a=function(a){var t=a.target,i=t.name,r="checkbox"===t.type?t.checked:t.value;e.setState(Object(s.a)({},i,r))};return Object(o.jsxs)(U.Row,{children:[Object(o.jsx)(T.a,{sm:12,children:Object(o.jsxs)(U.Group,{controlId:"distancia",children:[Object(o.jsx)(U.Label,{children:"Dist\xe2ncia inicial entre as esferas (m):"}),Object(o.jsx)(U.Control,{name:"distancia",type:"number",placeholder:"Valor em metros",value:this.state.distancia,onChange:a})]})}),Object(o.jsxs)(T.a,{sm:12,children:[Object(o.jsx)("hr",{}),Object(o.jsx)("h6",{children:Object(o.jsx)("strong",{children:"Esfera azul"})})]}),Object(o.jsx)(T.a,{sm:12,md:6,children:Object(o.jsxs)(U.Group,{controlId:"esfera1_massa",children:[Object(o.jsx)(U.Label,{children:"Massa (Kg):"}),Object(o.jsx)(U.Control,{name:"esfera1_massa",type:"number",placeholder:"Valor em Kg",value:this.state.esfera1_massa,onChange:a})]})}),Object(o.jsx)(T.a,{sm:12,md:6,children:Object(o.jsxs)(U.Group,{controlId:"esfera1_velocidade",children:[Object(o.jsx)(U.Label,{children:"Velocidade inicial (m/s):"}),Object(o.jsx)(U.Control,{name:"esfera1_velocidade",type:"number",placeholder:"Valor em m/s",value:this.state.esfera1_velocidade,onChange:a})]})}),Object(o.jsxs)(T.a,{sm:12,children:[Object(o.jsx)("hr",{}),Object(o.jsx)("h6",{children:Object(o.jsx)("strong",{children:"Esfera vermelha"})})]}),Object(o.jsx)(T.a,{sm:12,md:6,children:Object(o.jsxs)(U.Group,{controlId:"esfera2_massa",children:[Object(o.jsx)(U.Label,{children:"Massa (Kg):"}),Object(o.jsx)(U.Control,{name:"esfera2_massa",type:"number",placeholder:"Valor em Kg",value:this.state.esfera2_massa,onChange:a})]})}),Object(o.jsx)(T.a,{sm:12,md:6,children:Object(o.jsxs)(U.Group,{controlId:"esfera2_velocidade",children:[Object(o.jsx)(U.Label,{children:"Velocidade inicial (m/s):"}),Object(o.jsx)(U.Control,{name:"esfera2_velocidade",type:"number",placeholder:"Valor em m/s",value:this.state.esfera2_velocidade,onChange:a})]})})]})}}]),t}(n.Component);a.default=Y}}]);
//# sourceMappingURL=9.9a966b36.chunk.js.map