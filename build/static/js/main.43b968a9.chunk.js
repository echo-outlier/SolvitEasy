(this.webpackJsonpthecheat=this.webpackJsonpthecheat||[]).push([[0],{54:function(e,n,t){},74:function(e,n,t){"use strict";t.r(n);var c=t(2),o=t.n(c),i=t(29),a=t.n(i),r=(t(54),t(35));t(55),t(75),t(57);r.a.initializeApp({apiKey:"AIzaSyDgxH6AZ3ZC3qSeXdB7EILA96koRBtTBMU",authDomain:"thecheat-007.firebaseapp.com",databaseURL:"https://thecheat-007-default-rtdb.firebaseio.com",projectId:"thecheat-007",storageBucket:"thecheat-007.appspot.com",messagingSenderId:"30742964610",appId:"1:30742964610:web:aabb71a13177b8a39e479b",measurementId:"G-FKTEPQCQZQ"});var s,u,d,l,p,b,j,h,f,x,O,g,v,m,w,k,y,q,C=r.a,S=t(10),I=t(6),A=t(16),Q=t(8),z=t(9),F="#002B6B",L=z.a.div(s||(s=Object(Q.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  div {\n    svg {\n      font-size: 30px;\n      /* fill: grey; */\n      padding: 10px;\n      &:hover {\n        cursor: pointer;\n        background-color: #c6c6c6;\n        border-radius: 50%;\n      }\n    }\n  }\n"]))),B=z.a.div(u||(u=Object(Q.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  margin: 20px auto;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-bottom: 100px;\n  background-color: white;\n"]))),E=z.a.div(d||(d=Object(Q.a)(["\n  padding-top: 20px;\n  padding-bottom: 20px;\n  font-size: 20px;\n  width: 100%;\n"]))),D=z.a.div(l||(l=Object(Q.a)(["\n  margin-top: 10px;\n  font-size: 17px;\n  padding: 10px 5px;\n  /* color: ","; */\n  /* border: 2px solid black; */\n  background-color: ",";\n  border-radius: 5px;\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(e){return e.saved?"white":"black"}),(function(e){return 1==e.saved?"#1cd39c":1==e.checked?"#a6feb2":"#eee"})),T=z.a.div(p||(p=Object(Q.a)(["\n  position: fixed;\n  bottom: 40px;\n  right: 40px;\n  height: 40px;\n  width: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  color: white;\n  font-size: 20px;\n  border-radius: 50%;\n  &:hover {\n    background-color: #294580;\n    cursor: pointer;\n  }\n"])),F),M=z.a.div(b||(b=Object(Q.a)(["\n  margin-top: 20px;\n  padding: 10px;\n  background-color: ",";\n  color: white;\n  width: 40px;\n  border-radius: 5px;\n  &:hover {\n    background-color: #294580;\n    cursor: pointer;\n  }\n"])),F),N=Object(z.a)(M)(j||(j=Object(Q.a)([""]))),P=z.a.div(h||(h=Object(Q.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  #input {\n    margin-top: 20px;\n    div {\n      background-color: #97b3ee;\n      padding: 10px;\n      margin-right: 10px;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n  div {\n    /* margin-left: 10px; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n    input {\n      font-size: 16px;\n      height: 30px;\n      width: 30px;\n    }\n  }\n"]))),U=t(7),H=t(22),R=z.a.div(f||(f=Object(Q.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 56px;\n  width: 100%;\n  background-color: ",";\n"])),"#002B6B"),Y=z.a.div(x||(x=Object(Q.a)(["\n  margin: 5px;\n  color: white;\n  font-size: 20px;\n  background-color: ",";\n  padding: 3px;\n  border-radius: 5px;\n  &:hover {\n    background-color: ",";\n    cursor: pointer;\n  }\n"])),"#203E6B","#294580"),Z=t(25),G=t.n(Z),J=t(31),K=t(24),V=Object(K.b)({name:"auth",initialState:{idtoken:null,userId:null,profile:{name:null,email:null,photo:null}},reducers:{Login:function(e,n){console.log("action",n.payload),console.log(n.payload.profile[0].displayName),e.profile.name=n.payload.profile[0].displayName,e.profile.email=n.payload.profile[0].email,e.profile.photo=n.payload.profile[0].photoURL,e.idtoken=n.payload.token,e.userId=n.payload.userid},Logout:function(e){localStorage.removeItem("persist:root"),console.log("dispatched"),e.profile.name=null,e.profile.email=null,e.profile.photo=null,e.idtoken=null,e.userId=null,window.location.replace("/")}}}),_=function(e){return function(){var n=Object(J.a)(G.a.mark((function n(t){return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=5;break}return n.next=3,C.auth().signInWithPopup(new C.auth.GoogleAuthProvider).then((function(e){e.user&&(console.log(e),t(X({profile:e.user.providerData,token:e.credential.idToken,userid:e.user.uid})))})).catch((function(e){return console.log(e)}));case 3:n.next=6;break;case 5:C.auth().signOut().then((function(e){t($())})).catch((function(e){return console.log(e)}));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},W=V.actions,X=W.Login,$=W.Logout,ee=V.reducer,ne=t(3),te=function(){var e=Object(S.e)(),n=Object(U.b)(),t=Object(U.c)((function(e){return[e.auth.idtoken,e.auth.profile.name,e.auth.profile.email,e.auth.profile.photo]})),c=Object(A.a)(t,4);c[0],c[1],c[2],c[3];return Object(ne.jsx)("div",{children:Object(ne.jsxs)(R,{children:[Object(ne.jsx)(Y,{onClick:function(){e.push("/home")},children:"Home"}),Object(ne.jsx)(Y,{onClick:function(){e.push("/answers")},children:"Answers"}),Object(ne.jsx)(Y,{onClick:function(){e.push("/addques")},children:"Add Ques"}),Object(ne.jsx)(Y,{onClick:function(){return n(_(!1))},children:"Logout"})]})})},ce=t(26),oe=Object(K.b)({name:"questions",initialState:{questions:[],input:{question:"",options:{a:"",b:"",c:"",d:""}}},reducers:{ChangeInput:function(e,n){"question"===n.payload.type?e.input.question=n.payload.value:e.input.options["".concat(n.payload.type)]=n.payload.value},ChangeSearchInputAllQuestion:function(e,n){e.input.search_ques=n.payload},ChangeSearchInputAllAnswer:function(e,n){console.log("something"),e.input.search_ans=n.payload},CleanInput:function(e){e.input.question="",e.input.options={a:"",b:"",c:"",d:""}},Fetchquestions:function(e,n){var t=[];n.payload?(Object.keys(n.payload).map((function(e,c){t.push(n.payload[e]),t[c].id=e})),console.log("TEMP",t),e.questions=t):e.questions=[]},AnswerSaved:function(e){console.log("Answer Saved")},AnswerNotSaved:function(e){console.log("Answer not Saved")}}}),ie=function(e){return function(n,t){var c=C.database().ref("Questions").child(e.id).child("answers").child(e.userId).child("checked"),o=null;c.once("value",(function(n){o=n.val(),console.log("VA",o),Object.keys(o).map((function(n){n===e.type?o[n]=!0:o[n]=!1})),console.log("VA",o),c.update(Object(I.a)({},o))}))}},ae=oe.actions,re=ae.Fetchquestions,se=ae.ChangeInput,ue=(ae.ChangeSearchInputAllQuestion,ae.ChangeSearchInputAllAnswer,ae.CleanInput),de=oe.reducer,le=z.a.input(O||(O=Object(Q.a)(["\n  width: 80%;\n  display: flex;\n  margin: auto;\n  margin-top: 20px;\n  height: 50px;\n  outline: none;\n  border: none;\n  font-size: 20px;\n  border-radius: 5px;\n  font-weight: bold;\n  text-align: center;\n"]))),pe=function(e){Object(U.b)();return Object(ne.jsx)(le,{type:"text",placeholder:"Search Your Question",value:e.input,onChange:function(n){return e.setinput(n.target.value)}})},be=t(46),je=t.n(be),he=t(49),fe=function(){var e=Object(U.b)(),n=Object(U.c)((function(e){return[e.auth.idtoken,e.ques.questions,e.auth.userId]})),t=Object(A.a)(n,3),i=t[0],a=t[1],r=t[2],s=Object(c.useState)(""),u=Object(A.a)(s,2),d=u[0],l=u[1],p=Object(c.useState)(""),b=Object(A.a)(p,2),j=b[0],h=b[1],f=Object(S.e)();Object(c.useEffect)((function(){i||f.push("/")}),[i]),Object(c.useEffect)((function(){e((function(e){C.database().ref("Questions").on("value",(function(n){var t=n.val();e(re(t))}))}))}),[]);Object(c.useEffect)((function(){if(a){var n=a;console.log("temp",n),n.map((function(n){var t=n.answers;r in t?console.log("Answer is created"):(e(function(e,n){return function(t){console.log(e);var c=C.database().ref("Questions").child(e).child("answers");c.once("value",(function(e){var t=e.val();c.update(Object(I.a)(Object(I.a)({},t),{},Object(ce.a)({},n,{checked:{a:!1,b:!1,c:!1,d:!1},saved:{a:!1,b:!1,c:!1,d:!1}})))}))}}(n.id,r)),console.log("Answer is not created"))}))}}),[a]);var x=Object(c.useState)([]),O=Object(A.a)(x,2),g=O[0],v=O[1];Object(c.useEffect)((function(){var e=[],n=d.toLowerCase();a.map((function(e){var n=Object(I.a)({},e);return Object(I.a)(Object(I.a)({},n),{},{question:n.question.toLowerCase()})})).filter((function(t){t.question.includes(n)&&(e.push(t),console.log("Found"))})),console.log("ques",e),v(e)}),[d,a]);var m=function(n,t){console.log(n.target.name),console.log("dispatching"),e(function(e,n){return function(t,c){var o=null,i=C.database().ref("Questions").child(e).child("answers").child(n).child("checked"),a=C.database().ref("Questions").child(e).child("answers").child(n).child("saved");i.once("value",(function(e){var n=e.val();Object.keys(n).map((function(e){n[e]&&(o=e)}));var t={a:"a"===o,b:"b"===o,c:"c"===o,d:"d"===o};a.update(Object(I.a)({},t)),i.update({a:!1,b:!1,c:!1,d:!1})}))}}(t,r))},w=function(n){e(function(e,n){return function(t){var c=C.database().ref("Questions").child(e).child("answers").child(n).child("saved"),o=null;c.once("value",(function(e){o=e.val(),console.log(o),c.update(Object(I.a)({},{a:!1,b:!1,c:!1,d:!1}))}))}}(n,r))};return Object(ne.jsxs)(o.a.Fragment,{children:[Object(ne.jsx)(te,{}),Object(ne.jsx)(pe,{input:d,setinput:l}),Object(ne.jsx)(B,{children:g.map((function(n){var t,c,i,a,s,u,d,l;return Object(ne.jsxs)(o.a.Fragment,{children:[Object(ne.jsxs)(L,{children:[Object(ne.jsxs)(E,{children:[Object(ne.jsxs)("b",{children:["Ques ",null===n||void 0===n?void 0:n.count,":"]})," ",n.question]}),Object(ne.jsx)("div",{children:Object(ne.jsx)(he.a,{onClick:function(){return e=n.question,console.log("copy",e),void je()(e);var e}})})]}),Object(ne.jsxs)(D,{checked:null===(t=n.answers[r])||void 0===t?void 0:t.checked.a,saved:null===(c=n.answers[r])||void 0===c?void 0:c.saved.a,onClick:function(){return e(ie({type:"a",id:n.id,userId:r}))},children:[Object(ne.jsx)("b",{children:"A:"})," ",n.option.a.value]}),Object(ne.jsxs)(D,{checked:null===(i=n.answers[r])||void 0===i?void 0:i.checked.b,saved:null===(a=n.answers[r])||void 0===a?void 0:a.saved.b,onClick:function(){return e(ie({type:"b",id:n.id,userId:r}))},children:[Object(ne.jsx)("b",{children:"B:"})," ",n.option.b.value]}),Object(ne.jsxs)(D,{checked:null===(s=n.answers[r])||void 0===s?void 0:s.checked.c,saved:null===(u=n.answers[r])||void 0===u?void 0:u.saved.c,onClick:function(){return e(ie({type:"c",id:n.id,userId:r}))},children:[Object(ne.jsx)("b",{children:"C:"})," ",n.option.c.value]}),Object(ne.jsxs)(D,{checked:null===(d=n.answers[r])||void 0===d?void 0:d.checked.d,saved:null===(l=n.answers[r])||void 0===l?void 0:l.saved.d,onClick:function(){return e(ie({type:"d",id:n.id,userId:r}))},children:[Object(ne.jsx)("b",{children:"D:"})," ",n.option.d.value]}),Object(ne.jsxs)(P,{children:[Object(ne.jsxs)("div",{children:[Object(ne.jsx)(M,{onClick:function(e){return m(e,n.id)},children:"Save"}),Object(ne.jsx)(N,{onClick:function(){return w(n.id)},children:"Clear"})]}),Object(ne.jsxs)("div",{id:"input",children:[Object(ne.jsx)("input",{type:"text",value:j,onChange:function(e){return h(e.target.value)},placeholder:"NO.."}),Object(ne.jsx)("div",{children:"Save"})]})]})]},n.id)}))}),Object(ne.jsx)(H.b,{to:"/addques",children:Object(ne.jsx)(T,{children:"+"})})]})},xe=z.a.div(g||(g=Object(Q.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  /* align-items: center; */\n  flex-direction: column;\n  gap: 5px;\n  width: 70%;\n"]))),Oe=z.a.div(v||(v=Object(Q.a)(["\n  padding: 10px;\n  background-color: #fff;\n"]))),ge=z.a.div(m||(m=Object(Q.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  padding: 10px 15px;\n  color: white;\n  font-size: 20px;\n  width: 80px;\n  margin-bottom: 50px;\n  &:hover {\n    cursor: ",";\n  }\n  background-color: ",";\n"])),(function(e){return console.log(e.disable),e.disable?"pointer":"disable"}),(function(e){return console.log(e.disable),e.disable?"#294580":"grey"})),ve=z.a.div(w||(w=Object(Q.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 20px;\n  textarea {\n    outline: none;\n    border: none;\n  }\n  #question {\n    margin-top: 20px;\n    width: 70%;\n    height: 250px;\n    font-size: 25px;\n    font-weight: bold;\n    /* background-color: ","; */\n    /* color: white; */\n    /* text-align: center; */\n    word-wrap: break-word;\n  }\n  #option {\n    width: 70%;\n    height: 70px;\n    font-size: 20px;\n    font-weight: 300;\n    word-wrap: break-word;\n  }\n  #btn {\n  }\n"])),"#002B6B"),me=function(){var e=Object(U.b)(),n=Object(U.c)((function(e){return[e.ques.questions,e.ques.input.question,e.ques.input.options]})),t=Object(A.a)(n,3),i=t[0],a=t[1],r=t[2],s=Object(c.useState)(!1),u=Object(A.a)(s,2),d=u[0],l=u[1],p=Object(c.useState)([]),b=Object(A.a)(p,2),j=b[0],h=b[1];Object(c.useEffect)((function(){var e=[],n=a.toLowerCase();i.map((function(e){var n=Object(I.a)({},e);return Object(I.a)(Object(I.a)({},n),{},{question:n.question.toLowerCase()})})).filter((function(t){t.question.includes(n)&&(e.push(t),console.log("Found"))})),0===e.length?l((function(e){return!0})):l((function(e){return!1})),h(e)}),[a,i]);var f=function(n){e(se({type:n.target.name,value:n.target.value}))},x=function(n){e(function(){var e=Object(J.a)(G.a.mark((function e(n,t){var c,o;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{c=t().ques.input,o={id:Math.random(),count:Object.keys(t().ques.questions).length+1,question:c.question,option:{a:{value:c.options.a},b:{value:c.options.b},c:{value:c.options.c},d:{value:c.options.d}},percentage:{a:0,b:0,c:0,d:0},answers:Object(ce.a)({},t().auth.userId,{checked:{a:!1,b:!1,c:!1,d:!1},saved:{a:!1,b:!1,c:!1,d:!1}})},C.database().ref("Questions").push(o),n(ue())}catch(i){console.log(i)}case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}())};return Object(ne.jsxs)(o.a.Fragment,{children:[Object(ne.jsx)(te,{}),Object(ne.jsxs)(ve,{children:[Object(ne.jsx)("textarea",{name:"question",placeholder:"Type Your Question Here",id:"question",value:a,onChange:function(e){return f(e)}}),Object(ne.jsx)(xe,{children:j.map((function(e){return Object(ne.jsx)(o.a.Fragment,{children:Object(ne.jsxs)(Oe,{children:[Object(ne.jsxs)("b",{children:["Ques ",null===e||void 0===e?void 0:e.count,":"]})," ",e.question]})},e.id)}))}),Object.keys(r).map((function(e){return Object(ne.jsx)("textarea",{name:e,placeholder:"Option"+e.toUpperCase(),id:"option",value:r[e],onChange:function(e){return f(e)}},e)})),d?Object(ne.jsx)(ge,{disable:d,id:"btn",onClick:function(e){return x()},children:"Save"}):Object(ne.jsx)(ge,{disable:d,id:"btn",children:"Save"})]})]})},we=function(){var e=Object(U.b)(),n=Object(U.c)((function(e){return e.auth.idtoken})),t=Object(S.e)();return Object(c.useEffect)((function(){n&&t.push("/home")})),Object(ne.jsx)(o.a.Fragment,{children:Object(ne.jsx)(R,{children:Object(ne.jsx)(Y,{onClick:function(){return e(_(!0))},children:"Login"})})})},ke=t(40),ye=z.a.input(k||(k=Object(Q.a)(["\n  width: 80%;\n  display: flex;\n  margin: auto;\n  margin-top: 20px;\n  height: 50px;\n  outline: none;\n  border: none;\n  font-size: 20px;\n  border-radius: 5px;\n  font-weight: bold;\n  text-align: center;\n"]))),qe=function(e){Object(U.b)();return Object(ne.jsx)(ye,{type:"text",placeholder:"Search Your Answer",value:e.input,onChange:function(n){return e.setInput(n.target.value)}})},Ce=z.a.div(y||(y=Object(Q.a)(["\n  margin-top: 10px;\n  position: relative;\n  font-size: 17px;\n  padding: 0px 5px;\n  /* border: 2px solid black; */\n  background-color: #eee;\n  border-radius: 5px;\n"]))),Se=z.a.div(q||(q=Object(Q.a)(["\n  font-size: 12px;\n  margin-bottom: 5px;\n  height: 20px;\n  width: 100%;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 0;\n  top: 0;\n  background-color: lightgreen;\n"]))),Ie=function(e,n){return parseFloat((e/n).toFixed(4))},Ae=function(){Object(c.useEffect)((function(){for(var e=document.querySelectorAll(".item"),n=0;n<e.length;n++)e[n].classList.toggle("active")}),[]);var e=Object(c.useState)(""),n=Object(A.a)(e,2),t=n[0],i=n[1],a=Object(c.useState)([]),r=Object(A.a)(a,2),s=r[0],u=r[1],d=Object(U.c)((function(e){return e.ques.questions}));return Object(c.useEffect)((function(){u((function(e){var n=Object(ke.a)(d).map((function(e){var n=Object(I.a)({},e),t=0,c=0,o=0,i=0,a=Object(I.a)({},e.answers);Object.keys(a).map((function(e){!0===a[e].saved.a&&(t+=1),!0===a[e].saved.b&&(c+=1),!0===a[e].saved.c&&(o+=1),!0===a[e].saved.d&&(i+=1)}));var r=t+c+o+i;if(0===r){var s=Object(I.a)(Object(I.a)({},n.percentage),{},{a:0,b:0,c:0,d:0});n.percentage=s}else{var u=Object(I.a)(Object(I.a)({},n.percentage),{},{a:100*Ie(t,r),b:100*Ie(c,r),c:100*Ie(o,r),d:100*Ie(i,r)});n.percentage=u}return n})),c=t.toLowerCase(),o=n.map((function(e){var n=Object(I.a)({},e);return Object(I.a)(Object(I.a)({},n),{},{question:n.question.toLowerCase()})})).filter((function(e){if(e.question.includes(c))return e}));return Object(ke.a)(o)}))}),[t,d]),Object(ne.jsxs)(o.a.Fragment,{children:[Object(ne.jsx)(te,{}),Object(ne.jsx)(qe,{input:t,setInput:i}),Object(ne.jsx)(B,{children:s.map((function(e){return Object(ne.jsxs)(o.a.Fragment,{children:[Object(ne.jsxs)(E,{children:[Object(ne.jsx)("b",{children:"Ques:"})," ",e.question]}),Object(ne.jsxs)(Ce,{children:[Object(ne.jsxs)(Se,{children:[e.percentage.a,"%"]}),Object(ne.jsx)("b",{children:"A:"})," ",e.option.a.value]}),Object(ne.jsxs)(Ce,{children:[Object(ne.jsxs)(Se,{children:[e.percentage.b,"%"]}),Object(ne.jsx)("b",{children:"B:"})," ",e.option.b.value]}),Object(ne.jsxs)(Ce,{children:[Object(ne.jsxs)(Se,{children:[e.percentage.c,"%"]}),Object(ne.jsx)("b",{children:"C:"})," ",e.option.c.value]}),Object(ne.jsxs)(Ce,{children:[Object(ne.jsxs)(Se,{children:[e.percentage.d,"%"]}),Object(ne.jsx)("b",{children:"D:"})," ",e.option.d.value]})]},e.id)}))})]})},Qe=function(){Object(U.c)((function(e){return e.auth.idtoken})),Object(U.b)();return Object(ne.jsxs)(o.a.Fragment,{children:[Object(ne.jsx)(S.a,{exact:!0,path:"/",component:we}),Object(ne.jsx)(S.a,{exact:!0,path:"/home",component:fe}),Object(ne.jsx)(S.a,{exact:!0,path:"/addques",component:me}),Object(ne.jsx)(S.a,{exact:!0,path:"/answers",component:Ae})]})};var ze=function(){return Object(c.useEffect)((function(){C.auth().onAuthStateChanged((function(e){if(e){var n=e.uid;console.log(e.providerData),console.log(n),console.log("user")}else console.log("no user")}))}),[]),Object(ne.jsx)(o.a.Fragment,{children:Object(ne.jsx)(Qe,{})})},Fe=t(14),Le=t(39),Be=t(47),Ee={key:"root",storage:t.n(Be).a},De=Object(Fe.b)({auth:ee,ques:de}),Te=Object(Le.a)(Ee,De),Me=Object(K.a)({reducer:Te,middleware:function(e){return e({serializableCheck:!1})}}),Ne=Object(Le.b)(Me),Pe=t(48);a.a.render(Object(ne.jsx)(o.a.StrictMode,{children:Object(ne.jsx)(H.a,{children:Object(ne.jsx)(U.a,{store:Me,children:Object(ne.jsx)(Pe.a,{loading:null,persistor:Ne,children:Object(ne.jsx)(ze,{})})})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.43b968a9.chunk.js.map