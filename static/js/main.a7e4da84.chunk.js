(this.webpackJsonpthecheat=this.webpackJsonpthecheat||[]).push([[0],{78:function(e,n,t){},98:function(e,n,t){"use strict";t.r(n);var a=t(3),c=t.n(a),i=t(26),o=t.n(i),r=(t(78),t(48));t(79),t(99),t(81);r.a.initializeApp({apiKey:"AIzaSyDgxH6AZ3ZC3qSeXdB7EILA96koRBtTBMU",authDomain:"thecheat-007.firebaseapp.com",databaseURL:"https://thecheat-007-default-rtdb.firebaseio.com",projectId:"thecheat-007",storageBucket:"thecheat-007.appspot.com",messagingSenderId:"30742964610",appId:"1:30742964610:web:aabb71a13177b8a39e479b",measurementId:"G-FKTEPQCQZQ"});var s,u,d,l,b,p,j,h,f,O,x,g,v,m,k,w,y,q,C,S,I,E,L,z=r.a,Q=t(11),A=t(12),B=t(7),F=t(24),N=t(14),D=t(9),T=t(10),U=T.a.div(s||(s=Object(D.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: 56px;\n  width: 100%;\n  background-color: ",";\n"])),"#002B6B"),W=T.a.div(u||(u=Object(D.a)(["\n  margin: 5px;\n  color: white;\n  font-size: 20px;\n  background-color: ",";\n  padding: 5px;\n  margin-right: 10px;\n  border-radius: 5px;\n  &:hover {\n    background-color: ",";\n    cursor: pointer;\n  }\n"])),"#203E6B","#294580"),G=t(50),M=t.n(G),P=t(62),R=t(37),Y=Object(R.b)({name:"auth",initialState:{idtoken:null,userId:null,profile:{name:null,email:null,photo:null},loading:!1},reducers:{Login:function(e,n){window.location.replace("/SolvitEasy/home"),e.profile.name=n.payload.profile[0].displayName,e.profile.email=n.payload.profile[0].email,e.profile.photo=n.payload.profile[0].photoURL,e.idtoken=n.payload.token,e.userId=n.payload.userid},Logout:function(e){localStorage.removeItem("persist:root"),e.profile.name=null,e.profile.email=null,e.profile.photo=null,e.idtoken=null,e.userId=null,window.location.replace("/SolvitEasy")},SetLoading:function(e,n){e.loading=n.payload}}}),Z=function(e){return function(){var n=Object(P.a)(M.a.mark((function n(t){return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=5;break}return n.next=3,z.auth().signInWithPopup(new z.auth.GoogleAuthProvider).then((function(e){e.user&&t(H({profile:e.user.providerData,token:e.credential.idToken,userid:e.user.uid}))})).catch((function(e){}));case 3:n.next=6;break;case 5:z.auth().signOut().then((function(e){t(J())})).catch((function(e){return console.log(e)}));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},_=Y.actions,H=_.Login,J=_.Logout,K=(_.SetLoading,Y.reducer),X=t(4),V=function(){Object(A.e)();var e=Object(Q.b)(),n=Object(Q.c)((function(e){return[e.auth.idtoken,e.auth.profile.name,e.auth.profile.email,e.auth.profile.photo]})),t=Object(N.a)(n,4);t[0],t[1],t[2],t[3];return Object(X.jsx)(U,{children:Object(X.jsx)(W,{onClick:function(){return e(Z(!1))},children:"Logout"})})},$=t(121),ee=t(118),ne=t(120),te=t(31),ae=function(e,n){return parseFloat((e/n).toFixed(2))},ce=function(e){return Object(te.a)(e).map((function(e){var n=Object(B.a)({},e),t=0,a=0,c=0,i=0,o=Object(B.a)({},e.answers);Object.keys(o).map((function(e){!0===o[e].saved.a&&(t+=1),!0===o[e].saved.b&&(a+=1),!0===o[e].saved.c&&(c+=1),!0===o[e].saved.d&&(i+=1)}));var r=t+a+c+i;if(0===r){var s=Object(B.a)(Object(B.a)({},n.percentage),{},{a:0,b:0,c:0,d:0});n.percentage=s}else{var u=Object(B.a)(Object(B.a)({},n.percentage),{},{a:100*ae(t,r),b:100*ae(a,r),c:100*ae(c,r),d:100*ae(i,r)});n.percentage=u}return n}))},ie=Object(R.b)({name:"questions",initialState:{questions:[],input:{question:"",options:{a:"",b:"",c:"",d:""}}},reducers:{ChangeInput:function(e,n){"question"===n.payload.type?e.input.question=n.payload.value:e.input.options["".concat(n.payload.type)]=n.payload.value},CleanInput:function(e){e.input.question="",e.input.options={a:"",b:"",c:"",d:""}},OptionError:function(e){alert("Fill All Options")},Fetchquestions:function(e,n){var t=[];n.payload?(Object.keys(n.payload).map((function(e,a){t.push(n.payload[e]),t[a].id=e})),e.questions=t):e.questions=[]}}}),oe=function(e){return function(n,t){var a=z.database().ref("Questions").child(e.id).child("answers").child(e.userId).child("checked"),c=null;a.once("value",(function(n){c=n.val(),Object.keys(c).map((function(n){n===e.type?c[n]=!0:c[n]=!1})),a.update(Object(B.a)({},c))}))}},re=ie.actions,se=re.Fetchquestions,ue=re.ChangeInput,de=re.CleanInput,le=re.OptionError,be=ie.reducer,pe="#002B6B",je=T.a.div(d||(d=Object(D.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  div {\n    .copy-btn {\n      font-size: 50px;\n      padding: 10px;\n      &:hover {\n        cursor: pointer;\n        background-color: #c6c6c6;\n        border-radius: 50%;\n      }\n    }\n  }\n"]))),he=T.a.div(l||(l=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  margin: 20px auto;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-bottom: 100px;\n  background-color: white;\n"]))),fe=T.a.div(b||(b=Object(D.a)(["\n  padding-top: 20px;\n  padding-bottom: 20px;\n  font-size: 20px;\n  width: 100%;\n  span {\n    position: relative;\n    width: 50px;\n    height: 50px;\n    /* display: inline-block; */\n    .tick {\n      font-size: 25px;\n      /* margin-left: 10px; */\n      fill: green;\n    }\n    .cross {\n      /* margin-left: 10px; */\n      font-size: 15px;\n      fill: red;\n    }\n  }\n"]))),Oe=T.a.div(p||(p=Object(D.a)(["\n  margin-top: 10px;\n  font-size: 17px;\n  padding: 10px 5px;\n  background-color: ",";\n  border-radius: 5px;\n  word-wrap: break-word;\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(e){return 1==e.saved?"#1cd39c":1==e.checked?"#d0eef4;":"#eee"})),xe=(T.a.div(j||(j=Object(D.a)(["\n  position: fixed;\n  bottom: 40px;\n  right: 40px;\n  height: 40px;\n  width: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  color: white;\n  font-size: 20px;\n  border-radius: 50%;\n  &:hover {\n    background-color: #294580;\n    cursor: pointer;\n  }\n"])),pe),T.a.div(h||(h=Object(D.a)(["\n  margin-top: 20px;\n  padding: 10px;\n  padding-left: 11px;\n  background-color: ",";\n  color: white;\n  border-radius: 5px;\n  &:hover {\n    background-color: #485a82;\n    cursor: pointer;\n  }\n"])),pe)),ge=Object(T.a)(xe)(f||(f=Object(D.a)([""]))),ve=T.a.div(O||(O=Object(D.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  #input {\n    margin-top: 20px;\n    div {\n      background-color: #97b3ee;\n      padding: 10px;\n      margin-right: 10px;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n  div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n    input {\n      font-size: 15px;\n      height: 30px;\n      width: 30px;\n      border: none;\n      outline: none;\n      padding: 2px;\n      border: 1px solid grey;\n    }\n  }\n"]))),me=T.a.input(x||(x=Object(D.a)(["\n  width: 80%;\n  display: flex;\n  margin: auto;\n  margin-top: 20px;\n  height: 50px;\n  outline: none;\n  border: none;\n  font-size: 20px;\n  border-radius: 5px;\n  font-weight: bold;\n  text-align: center;\n"]))),ke=function(e){Object(Q.b)();return Object(X.jsx)("div",{children:Object(X.jsx)(me,{type:"text",placeholder:"Search Your Question",value:e.input,onChange:function(n){return e.setinput(n.target.value)}})})},we=t(64),ye=t.n(we),qe=t(67),Ce=t(100),Se=T.a.div(g||(g=Object(D.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 80%;\n  margin: auto;\n  margin-top: 40px;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n"]))),Ie=T.a.div(v||(v=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),Ee=T.a.div(m||(m=Object(D.a)(["\n  font-size: 14px;\n  font-weight: bold;\n  span {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    margin-right: 5px;\n    width: 13px;\n    height: 13px;\n    background-color: #1cd39c;\n  }\n  #selected {\n    background-color: #d0eef4;\n  }\n"]))),Le=T.a.div(k||(k=Object(D.a)(["\n  display: flex;\n  gap: 10px;\n  a {\n    text-decoration: none;\n  }\n  div {\n    background-color: #3f5e8c;\n    color: white;\n    font-weight: bold;\n    padding: 10px;\n    border-radius: 5px;\n    &:hover {\n      background-color: ",";\n      cursor: pointer;\n    }\n  }\n  .active {\n    background-color: ",";\n  }\n"])),"#294580","#002B6B"),ze=t(30),Qe=function(){return Object(X.jsxs)(Se,{children:[Object(X.jsxs)(Le,{children:[Object(X.jsx)(ze.b,{to:"/home",children:Object(X.jsx)("div",{"data-name":"home",className:"item active",children:"All Question"})}),Object(X.jsx)(ze.b,{to:"/answers",children:Object(X.jsx)("div",{"data-name":"answers",className:"item",children:"All Answers"})}),Object(X.jsx)(ze.b,{to:"/addques",children:Object(X.jsx)("div",{"data-name":"addques",className:"item",children:"Add Question"})})]}),Object(X.jsxs)(Ie,{children:[Object(X.jsxs)(Ee,{children:[Object(X.jsx)("span",{id:"selected"})," Selected Option"]}),Object(X.jsxs)(Ee,{children:[Object(X.jsx)("span",{})," Ticked Option"]})]})]})},Ae=t(65),Be=t(66),Fe=Object(Ce.a)((function(e){return{backdrop:{color:"#fff"},savebutton:{fontWeight:"bold",backgroundColor:"#97b3ee","&:hover":{backgroundColor:"#bacbf0"}}}})),Ne=function(){var e=Object(a.useState)(""),n=Object(N.a)(e,2),t=n[0],i=n[1],o=Object(a.useState)([]),r=Object(N.a)(o,2),s=r[0],u=r[1],d=Object(a.useState)(null),l=Object(N.a)(d,2),b=l[0],p=l[1],j=Fe(),h=Object(Q.b)(),f=Object(A.e)(),O=Object(Q.c)((function(e){return[e.auth.idtoken,e.ques.questions,e.auth.userId,e.auth.loading]})),x=Object(N.a)(O,4),g=x[0],v=x[1],m=x[2],k=x[3],w=Object(a.useState)(Object.keys(v).map((function(e){return Object(F.a)({},e.id,"")}))),y=Object(N.a)(w,2),q=y[0],C=y[1];Object(a.useEffect)((function(){for(var e=f.location,n=document.querySelectorAll(".item"),t=0;t<n.length;t++){e.pathname.slice(1,e.pathname.length)===n[t].dataset.name?n[t].classList.add("active"):n[t].classList.remove("active")}}),[]),Object(a.useEffect)((function(){g||f.push("/")}),[g]),Object(a.useEffect)((function(){h((function(e){z.database().ref("Questions").on("value",(function(n){var t=n.val();e(se(t))}))}))}),[]),Object(a.useEffect)((function(){v&&v.map((function(e){var n=e.answers;m in n||h(function(e,n){return function(t){var a=z.database().ref("Questions").child(e).child("answers");a.once("value",(function(e){var t=e.val();a.update(Object(B.a)(Object(B.a)({},t),{},Object(F.a)({},n,{checked:{a:!1,b:!1,c:!1,d:!1},saved:{a:!1,b:!1,c:!1,d:!1}})))}))}}(e.id,m))}))}),[v]),Object(a.useEffect)((function(){var e=[],n=t.toLowerCase();v.map((function(e){var n=Object(B.a)({},e);return Object(B.a)(Object(B.a)({},n),{},{question:n.question.toLowerCase()})})).filter((function(t){t.question.includes(n)&&e.push(t)})),u(e)}),[t,v]),Object(a.useEffect)((function(){var e=v.map((function(e){var n=Object(B.a)({},e.percentage);return 0!=n.a||0!=n.b||0!=n.c||0!=n.d}));p(e)}),[v]);return k?Object(X.jsx)(c.a.Fragment,{children:Object(X.jsx)($.a,{className:j.backdrop,open:!0,children:Object(X.jsx)(ee.a,{color:"inherit"})})}):Object(X.jsxs)(c.a.Fragment,{children:[Object(X.jsx)(V,{}),Object(X.jsx)(Qe,{}),Object(X.jsx)(ke,{input:t,setinput:i}),Object(X.jsx)(he,{children:s.map((function(e){var n,t,a,i,o,r,s,u;return Object(X.jsxs)(c.a.Fragment,{children:[Object(X.jsxs)(je,{children:[Object(X.jsxs)(fe,{children:[Object(X.jsxs)("b",{children:["Ques ",null===e||void 0===e?void 0:e.count,":"]})," ",e.question," ",Object(X.jsx)("span",{children:b[e.count-1]?Object(X.jsx)(Ae.a,{className:"tick"}):Object(X.jsx)(Be.a,{className:"cross"})})]}),Object(X.jsx)("div",{children:Object(X.jsx)(qe.a,{className:"copy-btn",onClick:function(){return n=e.question,void ye()(n);var n}})})]}),Object(X.jsxs)(Oe,{checked:null===(n=e.answers[m])||void 0===n?void 0:n.checked.a,saved:null===(t=e.answers[m])||void 0===t?void 0:t.saved.a,onClick:function(){return h(oe({type:"a",id:e.id,userId:m}))},children:[Object(X.jsx)("b",{children:"A:"})," ",e.option.a.value]}),Object(X.jsxs)(Oe,{checked:null===(a=e.answers[m])||void 0===a?void 0:a.checked.b,saved:null===(i=e.answers[m])||void 0===i?void 0:i.saved.b,onClick:function(){return h(oe({type:"b",id:e.id,userId:m}))},children:[Object(X.jsx)("b",{children:"B:"})," ",e.option.b.value]}),Object(X.jsxs)(Oe,{checked:null===(o=e.answers[m])||void 0===o?void 0:o.checked.c,saved:null===(r=e.answers[m])||void 0===r?void 0:r.saved.c,onClick:function(){return h(oe({type:"c",id:e.id,userId:m}))},children:[Object(X.jsx)("b",{children:"C:"})," ",e.option.c.value]}),Object(X.jsxs)(Oe,{checked:null===(s=e.answers[m])||void 0===s?void 0:s.checked.d,saved:null===(u=e.answers[m])||void 0===u?void 0:u.saved.d,onClick:function(){return h(oe({type:"d",id:e.id,userId:m}))},children:[Object(X.jsx)("b",{children:"D:"})," ",e.option.d.value]}),Object(X.jsxs)(ve,{children:[Object(X.jsxs)("div",{children:[Object(X.jsx)(xe,{onClick:function(n){return h(function(e,n,t){return function(e,a){var c=null,i=z.database().ref("Questions").child(n).child("answers").child(t).child("checked"),o=z.database().ref("Questions").child(n).child("answers").child(t).child("saved");i.once("value",(function(e){var n=e.val();Object.keys(n).map((function(e){n[e]&&(c=e)}));var t={a:"a"===c,b:"b"===c,c:"c"===c,d:"d"===c};o.update(Object(B.a)({},t)),i.update(Object(B.a)(Object(B.a)({},t),{},{a:!1,b:!1,c:!1,d:!1}))}));var r=ce(a().ques.questions).filter((function(e){if(e.id===n)return e})),s=Object(B.a)({},r[0].percentage);z.database().ref("Questions").child(n).child("percentage").update(Object(B.a)({},s))}}(0,e.id,m))},children:"Save"}),Object(X.jsx)(ge,{onClick:function(){return h(function(e,n,t){return function(e,a){var c=z.database().ref("Questions").child(n).child("answers").child(t).child("saved"),i=z.database().ref("Questions").child(n).child("answers").child(t);i.once("value",(function(e){e.val();var n={a:!1,b:!1,c:!1,d:!1};c.update(Object(B.a)({},n)),i.update(Object(B.a)({},n))}));var o=ce(a().ques.questions).filter((function(e){if(e.id===n)return e})),r=Object(B.a)({},o[0].percentage);z.database().ref("Questions").child(n).child("percentage").update(Object(B.a)({},r))}}(0,e.id,m))},children:"Clear"})]}),Object(X.jsxs)("div",{id:"input",children:[Object(X.jsx)("input",{type:"text",name:e.count,value:q[e.id],onChange:function(n){return function(e,n){C(Object(F.a)({},n.id,e.target.value))}(n,e)},placeholder:"NO.."}),Object(X.jsx)(ne.a,{className:j.savebutton,color:"primary",onClick:function(){return h(function(e,n,t){return function(a){z.database().ref("Questions").child(e).child("answers").child(n).child("ques_num").update({number:t})}}(e.id,m,q[e.id]))},children:"Save"})]})]})]},e.id)}))})]})},De=T.a.div(w||(w=Object(D.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  flex-direction: column;\n  gap: 5px;\n  width: 80%;\n"]))),Te=T.a.div(y||(y=Object(D.a)(["\n  padding: 10px;\n  background-color: #fff;\n"]))),Ue=T.a.div(q||(q=Object(D.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  padding: 10px 15px;\n  color: white;\n  font-size: 20px;\n  width: 80px;\n  margin-bottom: 50px;\n  &:hover {\n    cursor: ",";\n  }\n  background-color: ",";\n"])),(function(e){return e.disable?"pointer":"disable"}),(function(e){return e.disable?"#294580":"grey"})),We=T.a.div(C||(C=Object(D.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 20px;\n  textarea {\n    outline: none;\n    border: none;\n  }\n  #question {\n    margin-top: 20px;\n    width: 80%;\n    height: 250px;\n    font-size: 25px;\n    font-weight: bold;\n  }\n  #option {\n    width: 80%;\n    height: 70px;\n    font-size: 20px;\n    font-weight: 300;\n    word-wrap: break-word;\n  }\n"]))),Ge=function(){var e=Object(Q.b)(),n=Object(A.e)(),t=Object(Q.c)((function(e){return[e.ques.questions,e.ques.input.question,e.ques.input.options,e.auth.idtoken]})),i=Object(N.a)(t,4),o=i[0],r=i[1],s=i[2],u=i[3],d=Object(a.useState)(!1),l=Object(N.a)(d,2),b=l[0],p=l[1],j=Object(a.useState)([]),h=Object(N.a)(j,2),f=h[0],O=h[1];Object(a.useEffect)((function(){u||n.push("/")}),[u]),Object(a.useEffect)((function(){for(var e=n.location,t=document.querySelectorAll(".item"),a=0;a<t.length;a++){e.pathname.slice(1,e.pathname.length)===t[a].dataset.name?t[a].classList.add("active"):t[a].classList.remove("active")}}),[]),Object(a.useEffect)((function(){var e=[],n=r.toLowerCase();o.map((function(e){var n=Object(B.a)({},e);return Object(B.a)(Object(B.a)({},n),{},{question:n.question.toLowerCase()})})).filter((function(t){t.question.includes(n)&&e.push(t)})),0===e.length?p((function(e){return!0})):p((function(e){return!1})),O(e)}),[r,o]);var x=function(n){e(ue({type:n.target.name,value:n.target.value}))};return Object(X.jsxs)(c.a.Fragment,{children:[Object(X.jsx)(V,{}),Object(X.jsx)(Qe,{}),Object(X.jsxs)(We,{children:[Object(X.jsx)("textarea",{name:"question",placeholder:"Type Your Question Here",id:"question",value:r,onChange:function(e){return x(e)}}),Object(X.jsx)(De,{children:f.map((function(e){return Object(X.jsx)(c.a.Fragment,{children:Object(X.jsxs)(Te,{children:[Object(X.jsxs)("b",{children:["Ques ",null===e||void 0===e?void 0:e.count,":"]})," ",e.question]})},e.id)}))}),Object.keys(s).map((function(e){return Object(X.jsx)("textarea",{name:e,placeholder:"Option"+e.toUpperCase(),id:"option",value:s[e],onChange:function(e){return x(e)}},e)})),b?Object(X.jsx)(Ue,{disable:b,id:"btn",onClick:function(){return e((function(e,n){var t=n().ques.input,a={id:Math.random(),count:Object.keys(n().ques.questions).length+1,question:t.question,option:{a:{value:t.options.a},b:{value:t.options.b},c:{value:t.options.c},d:{value:t.options.d}},percentage:{a:0,b:0,c:0,d:0},answers:Object(F.a)({},n().auth.userId,{checked:{a:!1,b:!1,c:!1,d:!1},saved:{a:!1,b:!1,c:!1,d:!1}})};""!=t.options.a&&""!=t.options.b&&""!=t.options.c&&""!=t.options.d?(z.database().ref("Questions").push(a),e(de())):e(le())}))},children:"Save"}):Object(X.jsx)(Ue,{disable:b,id:"btn",children:"Save"})]})]})},Me=t(123),Pe=t(119),Re=t(68),Ye=Object(Pe.a)((function(e){return{root:{width:300,height:300,display:"flex",justifyContent:"center",alignItems:"center"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},button:{margin:e.spacing(1),fontWeight:"bolder",color:"white",backgroundColor:"#002B6B","&:hover":{backgroundColor:"#294580"}},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff",opacity:.5}}})),Ze=T.a.div(S||(S=Object(D.a)(["\n  display: flex;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -60%);\n"]))),_e=function(){var e=Object(Q.b)(),n=Ye(),t=Object(Q.c)((function(e){return[e.auth.idtoken,e.auth.loading]})),i=Object(N.a)(t,2),o=i[0],r=(i[1],Object(A.e)());return Object(a.useEffect)((function(){o&&r.push("/home")}),[]),Object(X.jsx)(c.a.Fragment,{children:Object(X.jsx)(Ze,{children:Object(X.jsx)(Me.a,{className:n.root,children:Object(X.jsx)(ne.a,{variant:"contained",className:n.button,endIcon:Object(X.jsx)(Re.a,{children:"send"}),onClick:function(){return e(Z(!0))},children:"Login With Google"})})})})},He=T.a.input(I||(I=Object(D.a)(["\n  width: 80%;\n  display: flex;\n  margin: auto;\n  margin-top: 20px;\n  height: 50px;\n  outline: none;\n  border: none;\n  font-size: 20px;\n  border-radius: 5px;\n  font-weight: bold;\n  text-align: center;\n"]))),Je=function(e){Object(Q.b)();return Object(X.jsx)(He,{type:"text",placeholder:"Search Your Answer",value:e.input,onChange:function(n){return e.setInput(n.target.value)}})},Ke=T.a.div(E||(E=Object(D.a)(["\n  margin-top: 10px;\n  position: relative;\n  font-size: 17px;\n  background-color: #eee;\n  border-radius: 5px;\n"]))),Xe=T.a.div(L||(L=Object(D.a)(["\n  font-size: 12px;\n  margin-bottom: 5px;\n  height: 20px;\n  width: ",";\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: lightgreen;\n"])),(function(e){return"".concat(e.val,"%")})),Ve=function(){var e=Object(a.useState)(""),n=Object(N.a)(e,2),t=n[0],i=n[1],o=Object(a.useState)([]),r=Object(N.a)(o,2),s=r[0],u=r[1],d=Object(A.e)(),l=Object(Q.c)((function(e){return[e.ques.questions,e.auth.userId]})),b=Object(N.a)(l,2),p=b[0],j=b[1];return Object(a.useEffect)((function(){j||d.push("/")}),[j]),Object(a.useEffect)((function(){for(var e=d.location,n=document.querySelectorAll(".item"),t=0;t<n.length;t++){e.pathname.slice(1,e.pathname.length)===n[t].dataset.name?n[t].classList.add("active"):n[t].classList.remove("active")}}),[]),Object(a.useEffect)((function(){u((function(e){Object(te.a)(p);var n=ce(p),a=t.toLowerCase(),c=n.map((function(e){var n=Object(B.a)({},e);return Object(B.a)(Object(B.a)({},n),{},{question:n.question.toLowerCase()})})).filter((function(e){if(e.question.includes(a))return e}));return Object(te.a)(c)}))}),[t,p]),Object(X.jsxs)(c.a.Fragment,{children:[Object(X.jsx)(V,{}),Object(X.jsx)(Qe,{}),Object(X.jsx)(Je,{input:t,setInput:i}),Object(X.jsx)(he,{children:s.map((function(e){return Object(X.jsxs)(c.a.Fragment,{children:[Object(X.jsxs)(fe,{children:[Object(X.jsxs)("b",{children:["Ques"," ",e.answers[j].ques_num?e.answers[j].ques_num.number:null,":"]})," ",e.question]}),Object(X.jsxs)(Ke,{children:[Object(X.jsxs)(Xe,{val:e.percentage.a,children:[0!=e.percentage.a?e.percentage.a:null,0!=e.percentage.a?"%":null]}),Object(X.jsx)("b",{children:"A:"})," ",e.option.a.value]}),Object(X.jsxs)(Ke,{children:[Object(X.jsxs)(Xe,{val:e.percentage.b,children:[0!=e.percentage.b?e.percentage.b:null,0!=e.percentage.b?"%":null]}),Object(X.jsx)("b",{children:"B:"})," ",e.option.b.value]}),Object(X.jsxs)(Ke,{children:[Object(X.jsxs)(Xe,{val:e.percentage.c,children:[0!=e.percentage.c?e.percentage.c:null,0!=e.percentage.c?"%":null]}),Object(X.jsx)("b",{children:"C:"})," ",e.option.c.value]}),Object(X.jsxs)(Ke,{children:[Object(X.jsxs)(Xe,{val:e.percentage.d,children:[0!=e.percentage.d?e.percentage.d:null,0!=e.percentage.d?"%":null]}),Object(X.jsx)("b",{children:"D:"})," ",e.option.d.value]})]},e.id)}))})]})},$e=function(){Object(Q.c)((function(e){return e.auth.idtoken})),Object(Q.b)();return Object(X.jsxs)(c.a.Fragment,{children:[Object(X.jsx)(A.a,{exact:!0,path:"/",component:_e}),Object(X.jsx)(A.a,{exact:!0,path:"/home",component:Ne}),Object(X.jsx)(A.a,{exact:!0,path:"/addques",component:Ge}),Object(X.jsx)(A.a,{exact:!0,path:"/answers",component:Ve})]})};var en=function(){return Object(Q.b)(),Object(a.useEffect)((function(){z.auth().onAuthStateChanged((function(e){if(e)e.uid,null===e||void 0===e||e.providerData[0].email}))}),[]),Object(X.jsx)(c.a.Fragment,{children:Object(X.jsx)($e,{})})},nn=t(22),tn=t(53),an=t(69),cn={key:"root",storage:t.n(an).a},on=Object(nn.b)({auth:K,ques:be}),rn=Object(tn.a)(cn,on),sn=Object(R.a)({reducer:rn,middleware:function(e){return e({serializableCheck:!1})}}),un=Object(tn.b)(sn),dn=t(70);o.a.render(Object(X.jsx)(c.a.StrictMode,{children:Object(X.jsx)(ze.a,{basename:"SolvitEasy",children:Object(X.jsx)(Q.a,{store:sn,children:Object(X.jsx)(dn.a,{loading:null,persistor:un,children:Object(X.jsx)(en,{})})})})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.a7e4da84.chunk.js.map