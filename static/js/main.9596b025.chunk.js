(this.webpackJsonpannouncements__list=this.webpackJsonpannouncements__list||[]).push([[0],{21:function(e,t,n){e.exports=n(49)},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(18),o=n.n(l),r=(n(9),n(2)),i=n(3),s=n.n(i),u=n(6),m=n.n(u),f=n(20),p=(n(44),n(7)),d=(n(45),function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),l=n[0],o=n[1],i=Object(a.useState)(!1),u=Object(r.a)(i,2),f=u[0],d=u[1],_=Object(a.useState)(""),E=Object(r.a)(_,2),v=E[0],h=E[1],b=function(){o(!h),h("")};return c.a.createElement(a.Fragment,null,c.a.createElement("button",{className:"button create-new__button",onClick:function(){return o(!l)}},"Create new announcements"),l&&c.a.createElement("div",{className:"add__list__popup"},c.a.createElement("button",{onClick:function(){return b()},className:"add-list__popup-close-btn"},c.a.createElement("i",{className:"fa fa-close icon"})),c.a.createElement("input",{value:v,onChange:function(e){return h(e.target.value)},type:"text",placeholder:"Enter new announcements name:",className:"create__holder holder"}),c.a.createElement("button",{className:"button add-new__btn",onClick:function(){v?(d(!0),function(e){return s.a.post("https://secure-wave-34428.herokuapp.com/",{name:e,time:m()().format("MMMM Do YYYY, h:mm:ss a")})}(v).then((function(t){var n=t.data,a=Object(p.a)(Object(p.a)({},n),{},{names:[]});e(a)})).catch((function(){alert("ohhh man, we have update-list ^-^")})).finally((function(){d(!1),b()}))):alert("Enter name for new annoucements")}},f?"Updating...":"Submit")))}),_=n(19),E=n.n(_),v=(n(46),function(e){var t=e.isRemovable,n=e.onRemoveList,l=e.items,o=e.onClickItem,r=e.activeItem,i=function(e){window.confirm("You really want to remove this announcements?")&&function(e){return s.a.delete("https://secure-wave-34428.herokuapp.com/".concat(e))}(e).then((function(){n(e)}))};return c.a.createElement(a.Fragment,null,l.map((function(e,n){return c.a.createElement("li",{key:n,className:E()(e.className,{active:r&&r.id===e.id}),onClick:o?function(){return o(e)}:null},c.a.createElement("span",null,e.name),t&&c.a.createElement("button",{onClick:function(){return i(e._id)},className:"list__remove-btn"},c.a.createElement("i",{className:"fa fa-close icon"})))})))}),h=function(e){var t=e.lists,n=e.setLists,a=e.onClickItem,l=e.activeItem;return c.a.createElement("div",null,c.a.createElement("ul",{className:"sidebar__list"},c.a.createElement("li",null,c.a.createElement("label",{htmlFor:"search__holder"},c.a.createElement("i",{className:"fa fa-search icon"})),c.a.createElement("input",{placeholder:"Search",id:"search__holder",className:"holder"})),t?c.a.createElement(v,{onRemoveList:function(e){var a=t.filter((function(t){return t.id!==e}));n(a)},items:t,onClickItem:a,activeItem:l,isRemovable:!0}):"...Loading"),c.a.createElement(d,{onAdd:function(e){var a=[].concat(Object(f.a)(t),[e]);n(a)}}))},b=(n(47),function(e){var t=e.list,n=e.onEditTitle,a=t._id;return c.a.createElement("div",{className:"app__title"},c.a.createElement("h2",{className:"announcements__title"},t.name,c.a.createElement("span",{onClick:function(){var e,c,l=window.prompt("New title of announcement:",t.name);l&&(n(a,l),(e=a,c=l,s.a.put("https://secure-wave-34428.herokuapp.com/".concat(e),{name:c,time:m()().format("MMMM Do YYYY, h:mm:ss a")})).catch((function(){return alert("We can't change this title")})))},className:"edit_btn"},c.a.createElement("i",{className:"fa fa-edit icon"}))))}),N=(n(48),function(e){var t=e.list,n=Object(a.useState)(!0),l=Object(r.a)(n,2),o=l[0],i=l[1],u=t._id,f=Object(a.useRef)(),p=function(){var e,t;i(!o),(e=u,t=f,void s.a.put("https://secure-wave-34428.herokuapp.com/".concat(e,"/change__post"),{text:t,time:m()().format("MMM Do YY")})).catch((function(){return alert("We can't change this text")}))};return c.a.createElement("div",null,o?c.a.createElement("div",{className:"announcements__text"},c.a.createElement("input",{defaultValue:t.post,ref:f}),c.a.createElement("button",{className:"update__text",onClick:function(){return p()}},c.a.createElement("i",{className:"fa fa-save icon"})),c.a.createElement("button",{className:"close__texteditor",onClick:function(){return i(!o)}},c.a.createElement("i",{className:"fa fa-close icon"}))):c.a.createElement("div",{onDoubleClick:function(){return i(!o)},className:"announcements__text"},t.post),t&&c.a.createElement("p",{className:"announcements__time"},t.time))});var k=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],l=t[1];Object(a.useEffect)((function(){s.a.get("https://secure-wave-34428.herokuapp.com/").then((function(e){var t=e.data;l(t)}))}),[n]);var o=Object(a.useState)(null),i=Object(r.a)(o,2),u=i[0],m=i[1];return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app__sidebar"},c.a.createElement(h,{lists:n,setLists:l,onClickItem:function(e){m(e)},activeItem:u})),n&&u&&c.a.createElement("div",{className:"app__content"},c.a.createElement(b,{list:u,onEditTitle:function(e,t){var a=n.map((function(n){return n.id===e&&(n.name=t),n}));l(a)}}),c.a.createElement(N,{list:u})))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root"))},9:function(e,t,n){}},[[21,1,2]]]);
//# sourceMappingURL=main.9596b025.chunk.js.map