(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var s=t(0),o=t(1),c=t(14),a=t.n(c),i=t(3),r=function(e){var n=e.name,t=e.number,o=e.deletePerson;return Object(s.jsxs)("p",{children:[n," ",t,Object(s.jsx)("button",{onClick:o,children:"delete"})]})},u=t(4),l=t.n(u),b="/api/persons",d=function(){return l.a.get(b).then((function(e){return e.data}))},j=function(e){return l.a.post(b,e).then((function(e){return e.data}))},f=function(e){return l.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},m=function(e,n){return l.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},h=function(e){var n=e.persons,t=e.setPersons,c=e.setNotificationMessage,a=Object(o.useState)(""),u=Object(i.a)(a,2),l=u[0],b=u[1],d=Object(o.useState)(),j=Object(i.a)(d,2),m=j[0],h=(j[1],m?n:n.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())||e.number.includes(l)})));return Object(s.jsxs)("div",{children:["filter shown with: ",Object(s.jsx)("input",{type:"text",placeholder:"Search",value:l,onChange:function(e){b(e.target.value)}}),h.map((function(e){return Object(s.jsx)(r,{deletePerson:function(){return s=e.id,o=e.name,window.confirm("Delete ".concat(o," ?")),void f(s).then((function(e){c("Removed '".concat(o,"'")),setTimeout((function(){c(null)}),3e3),t(n)}));var s,o},name:e.name,number:e.number},e.name)}))]})},O=function(e){return Object(s.jsxs)("form",{onSubmit:function(n,t){n.preventDefault();var s={name:e.newName,number:e.newNumber,id:e.persons.length+1};e.persons.find((function(n){return n.name===e.newName}))?(window.confirm("".concat(e.newName," is already added to phonebook. Would you like to change the number?")),m(t).then((function(n){e.setNotificationMessage("Changed '".concat(e.name," number'")),setTimeout((function(){e.setNotificationMessage(null)}),3e3),e.setPersons(e.persons)})),e.setNewName(""),e.setNewNumber("")):j(s).then((function(n){e.setPersons(e.persons.concat(s)),e.setNewName(""),e.setNewNumber(""),e.setNotificationMessage("Added '".concat(s.name,"'")),setTimeout((function(){e.setNotificationMessage(null)}),3e3)})).catch((function(n){e.setNotificationMessage("'".concat(n.response.data.error,"'")),setTimeout((function(){e.setNotificationMessage(null)}),3e3),console.log(n.response.data)}))},children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{value:e.newName,onChange:e.handlePersonChange})]}),Object(s.jsxs)("div",{children:["number: ",Object(s.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})},N=function(e){var n=e.message;return null===n?null:Object(s.jsx)("div",{className:"notification",children:n})},p=function(){var e=Object(o.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],a=Object(o.useState)(""),r=Object(i.a)(a,2),u=r[0],l=r[1],b=Object(o.useState)(""),j=Object(i.a)(b,2),f=j[0],m=j[1],p=Object(o.useState)(null),g=Object(i.a)(p,2),w=g[0],v=g[1];Object(o.useEffect)((function(){d().then((function(e){c(e)}))}));return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(N,{message:w}),Object(s.jsx)("h3",{children:"Add a new person"}),Object(s.jsx)(O,{persons:t,newName:u,newNumber:f,setPersons:c,setNewName:l,setNewNumber:m,handleNumberChange:function(e){m(e.target.value)},handlePersonChange:function(e){l(e.target.value)},notificationMessage:w,setNotificationMessage:v}),Object(s.jsx)("h3",{children:"Numbers"}),Object(s.jsx)(h,{persons:t,setPersons:c,setNotificationMessage:v})]})};t(38);a.a.render(Object(s.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b4e598e4.chunk.js.map