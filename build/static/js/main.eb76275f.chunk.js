(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var s=t(0),c=t(1),a=t(14),o=t.n(a),r=t(3),i=function(e){var n=e.name,t=e.number,c=e.deletePerson;return Object(s.jsxs)("p",{children:[n," ",t,Object(s.jsx)("button",{onClick:c,children:"delete"})]})},u=t(4),l=t.n(u),b="/api/persons",d=function(){return l.a.get(b).then((function(e){return e.data}))},j=function(e){return l.a.post(b,e).then((function(e){return e.data}))},m=function(e){return l.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},h=function(e,n){return l.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},f=function(e){var n=e.persons,t=e.setPersons,a=e.setNotificationMessage,o=Object(c.useState)(""),u=Object(r.a)(o,2),l=u[0],b=u[1],d=Object(c.useState)(),j=Object(r.a)(d,2),h=j[0],f=(j[1],h?n:n.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())||e.number.includes(l)})));return Object(s.jsxs)("div",{children:["filter shown with: ",Object(s.jsx)("input",{type:"text",placeholder:"Search",value:l,onChange:function(e){b(e.target.value)}}),f.map((function(e){return Object(s.jsx)(i,{deletePerson:function(){return s=e.id,c=e.name,window.confirm("Delete ".concat(c," ?")),void m(s).then((function(e){a("Removed '".concat(c,"'")),setTimeout((function(){a(null)}),3e3),t(n)}));var s,c},name:e.name,number:e.number},e.name)}))]})},O=function(e){return Object(s.jsxs)("form",{onSubmit:function(n,t){n.preventDefault();var s={name:e.newName,number:e.newNumber,id:e.persons.length+1};e.persons.find((function(n){return n.name===e.newName}))?(window.confirm("".concat(e.newName," is already added to phonebook. Would you like to change the number?")),h(t).then((function(n){e.setNotificationMessage("Changed '".concat(e.name," number'")),setTimeout((function(){e.setNotificationMessage(null)}),3e3),e.setPersons(e.persons)})),e.setNewName(""),e.setNewNumber("")):j(s).then((function(n){e.setPersons(e.persons.concat(s)),e.setNewName(""),e.setNewNumber(""),e.setNotificationMessage("Added '".concat(s.name,"'")),setTimeout((function(){e.setNotificationMessage(null)}),3e3)}))},children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{value:e.newName,onChange:e.handlePersonChange})]}),Object(s.jsxs)("div",{children:["number: ",Object(s.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})},N=function(e){var n=e.message;return null===n?null:Object(s.jsx)("div",{className:"notification",children:n})},p=function(){var e=Object(c.useState)([]),n=Object(r.a)(e,2),t=n[0],a=n[1],o=Object(c.useState)(""),i=Object(r.a)(o,2),u=i[0],l=i[1],b=Object(c.useState)(""),j=Object(r.a)(b,2),m=j[0],h=j[1],p=Object(c.useState)(null),g=Object(r.a)(p,2),w=g[0],v=g[1];Object(c.useEffect)((function(){d().then((function(e){a(e)}))}));return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(N,{message:w}),Object(s.jsx)("h3",{children:"Add a new person"}),Object(s.jsx)(O,{persons:t,newName:u,newNumber:m,setPersons:a,setNewName:l,setNewNumber:h,handleNumberChange:function(e){h(e.target.value)},handlePersonChange:function(e){l(e.target.value)},notificationMessage:w,setNotificationMessage:v}),Object(s.jsx)("h3",{children:"Numbers"}),Object(s.jsx)(f,{persons:t,setPersons:a,setNotificationMessage:v})]})};t(38);o.a.render(Object(s.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.eb76275f.chunk.js.map