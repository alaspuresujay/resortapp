(this["webpackJsonpresort-app"]=this["webpackJsonpresort-app"]||[]).push([[0],{131:function(e,t,c){},132:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(54),a=c.n(s),i=c(9),o=c(10),l=c(12),j=c(11),m=c(4),d=c(0);function u(e){var t=e.children,c=e.title,n=e.subTitle;return Object(d.jsxs)("div",{className:"banner",children:[Object(d.jsx)("h1",{children:c}),Object(d.jsx)("div",{}),Object(d.jsxs)("p",{children:[n," "]}),t]})}var b=c(18),h=c(24),O=c(19),x=c.n(O),p=c(15),f=c(55),v=c(56),g=Object(v.createClient)({space:Object({NODE_ENV:"production",PUBLIC_URL:"/resortapp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_SPACE,accessToken:Object({NODE_ENV:"production",PUBLIC_URL:"/resortapp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ACCESS_TOKEN}),y=r.a.createContext(),N=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={rooms:[],sortedRooms:[],featuredRooms:[],loading:!0,type:"all",capacity:1,price:0,minPrice:0,maxPrize:0,minSize:0,maxSize:0,breakfast:!1,pets:!1},e.getData=Object(f.a)(x.a.mark((function t(){var c,n,r,s,a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.getEntries({content_type:"resortData",order:"sys.createdAt"});case 3:c=t.sent,console.log(c.items),n=e.formatData(c.items),r=n.filter((function(e){return!0===e.featured})),s=Math.max.apply(Math,Object(p.a)(n.map((function(e){return e.price})))),a=Math.max.apply(Math,Object(p.a)(n.map((function(e){return e.size})))),e.setState({rooms:n,featuredRooms:r,sortedRooms:n,loading:!1,price:s,maxPrize:s,maxSize:a}),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(0);case 14:case"end":return t.stop()}}),t,null,[[0,12]])}))),e.getRoom=function(t){return Object(p.a)(e.state.rooms).find((function(e){return e.slug===t}))},e.handleChange=function(t){var c=t.target,n="checkbox"===c.type?c.checked:c.value,r=t.target.name;e.setState(Object(h.a)({},r,n),e.filterRooms)},e.filterRooms=function(){var t=e.state,c=t.rooms,n=t.type,r=t.capacity,s=t.price,a=t.minSize,i=t.maxSize,o=t.breakfast,l=t.pets,j=Object(p.a)(c);r=parseInt(r),s=parseInt(s),"all"!==n&&(j=j.filter((function(e){return e.type===n}))),1!==r&&(j=j.filter((function(e){return e.capacity>=r}))),j=(j=j.filter((function(e){return e.price<=s}))).filter((function(e){return e.size>=a&&e.size<=i})),o&&(j=j.filter((function(e){return!0===e.breakfast}))),l&&(j=j.filter((function(e){return!0===e.pets}))),e.setState({sortedRooms:j})},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){this.getData()}},{key:"formatData",value:function(e){return e.map((function(e){var t=e.sys.id,c=e.fields.images.map((function(e){return e.fields.file.url}));return Object(b.a)(Object(b.a)({},e.fields),{},{images:c,id:t})}))}},{key:"render",value:function(){return Object(d.jsx)(y.Provider,{value:Object(b.a)(Object(b.a)({},this.state),{},{getRoom:this.getRoom,handleChange:this.handleChange}),children:this.props.children})}}]),c}(n.Component),S=y.Consumer;var k=c.p+"static/media/loading-arrow.dd29210f.gif";function C(){return Object(d.jsxs)("div",{className:"loading",children:[Object(d.jsx)("h4",{children:"Loading your Rooms..."}),Object(d.jsx)("img",{src:k,alt:"Loading"})]})}var R=c.p+"static/media/room-1.05b90599.jpeg";function T(e){var t=e.room,c=t.name,n=t.slug,r=t.images,s=t.price;return Object(d.jsxs)("article",{className:"room",children:[Object(d.jsxs)("div",{className:"img-container",children:[Object(d.jsx)("img",{src:r[0]||R,alt:""}),Object(d.jsxs)("div",{className:"price-top",children:[Object(d.jsxs)("h6",{children:["$",s]}),Object(d.jsx)("p",{children:"Per Night"})]}),Object(d.jsx)(m.b,{to:"/rooms/".concat(n),className:"btn-primary room-link",children:"Featured"})]}),Object(d.jsx)("p",{className:"room-info",children:c})]})}function P(e){var t=e.title;return Object(d.jsxs)("div",{className:"section-title",children:[Object(d.jsx)("h4",{children:t}),Object(d.jsx)("div",{})]})}var _=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.context,t=e.loading,c=e.featuredRooms;return c=c.map((function(e){return Object(d.jsx)(T,{room:e},e.id)})),Object(d.jsxs)("section",{className:"featured-rooms",children:[Object(d.jsx)(P,{title:"Featured Rooms"}),Object(d.jsx)("div",{className:"featured-rooms-center",children:t?Object(d.jsx)(C,{}):c})]})}}]),c}(n.Component);function z(e){var t=e.children,c=e.hero;return Object(d.jsx)("header",{className:c,children:t})}_.contextType=y,z.defaultProps={hero:"defaultHero"};var E=c(17),F=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={services:[{icon:Object(d.jsx)(E.c,{}),title:"Free Cocktails",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "},{icon:Object(d.jsx)(E.d,{}),title:"Endless Hiking",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "},{icon:Object(d.jsx)(E.e,{}),title:"Free Shuttle van",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "},{icon:Object(d.jsx)(E.b,{}),title:"Go Drunk Bevde ho",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "}]},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"services",children:[Object(d.jsx)(P,{title:"Services"}),Object(d.jsx)("div",{className:"services-center",children:this.state.services.map((function(e,t){return Object(d.jsxs)("article",{className:"service",children:[Object(d.jsx)("span",{children:e.icon}),Object(d.jsx)("h6",{children:e.title}),Object(d.jsx)("p",{children:e.info})]},t)}))})]})}}]),c}(n.Component);function A(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(z,{children:Object(d.jsx)(u,{title:"Luxurious Rooms",subTitle:"rooms starting at $299",children:Object(d.jsx)(m.b,{to:"/rooms",className:"btn-primary",children:"Our Rooms"})})}),Object(d.jsx)(F,{}),Object(d.jsx)(_,{})]})}var D=function(e,t){return Object(p.a)(new Set(e.map((function(e){return e[t]}))))};function w(e){var t=e.rooms,c=Object(n.useContext)(y),r=c.handleChange,s=c.type,a=c.capacity,i=c.price,o=c.minPrice,l=c.maxPrize,j=c.minSize,m=c.maxSize,u=c.breakfast,b=c.pets,h=D(t,"type");h=(h=["all"].concat(Object(p.a)(h))).map((function(e,t){return Object(d.jsx)("option",{value:e,children:e},t)}));var O=D(t,"capacity");return O=O.map((function(e,t){return Object(d.jsxs)("option",{value:e,children:[" ",e]},t)})),Object(d.jsxs)("section",{className:"filter-container",children:[Object(d.jsx)(P,{title:"Search Rooms"}),Object(d.jsxs)("form",{action:"",className:"filter-form",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"type",children:"Room Type"}),Object(d.jsx)("select",{name:"type",id:"type",value:s,className:"form-control",onChange:r,children:h})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"capacity",children:"Guests"}),Object(d.jsx)("select",{name:"capacity",id:"capacity",value:a,className:"form-control",onChange:r,children:O})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsxs)("label",{htmlFor:"price",children:["Room Price $",i]}),Object(d.jsx)("input",{type:"range",name:"price",min:o,max:l,id:"price",value:i,onChange:r,className:"form-control"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"size",children:"Room Size"}),Object(d.jsxs)("div",{className:"size-inputs",children:[Object(d.jsx)("input",{type:"number",name:"minSize",id:"size",value:j,onChange:r,className:"size-input"}),Object(d.jsx)("input",{type:"number",name:"maxSize",id:"size",value:m,onChange:r,className:"size-input"})]})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsxs)("div",{className:"single-extra",children:[Object(d.jsx)("input",{type:"checkbox",name:"breakfast",id:"breakfast",checked:u,onChange:r}),Object(d.jsx)("label",{htmlFor:"breakfast",children:"breakfast"})]}),Object(d.jsxs)("div",{className:"single-extra",children:[Object(d.jsx)("input",{type:"checkbox",name:"pets",id:"pets",checked:b,onChange:r}),Object(d.jsx)("label",{htmlFor:"pets",children:"Pets"})]})]})]})]})}function H(e){var t=e.rooms;return 0===t.length?Object(d.jsx)("div",{className:"empty-search",children:Object(d.jsx)("h3",{children:"unfortunately No rooms matched to your search parameters"})}):Object(d.jsx)("section",{className:"roomslist",children:Object(d.jsx)("div",{className:"roomslist-center",children:t.map((function(e){return Object(d.jsx)(T,{room:e},e.id)}))})})}var L,q=(L=function(e){var t=e.context,c=t.loading,n=t.sortedRooms,r=t.rooms;return c?Object(d.jsx)(C,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(w,{rooms:r}),Object(d.jsx)(H,{rooms:n})]})},function(e){return Object(d.jsx)(S,{children:function(t){return Object(d.jsx)(L,Object(b.a)(Object(b.a)({},e),{},{context:t}))}})}),I=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(z,{hero:"roomsHero",children:Object(d.jsx)(u,{title:"Our Rooms",subTitle:"",children:Object(d.jsx)(m.b,{to:"/",className:"btn-primary",children:"Return Home"})})}),Object(d.jsx)(q,{})]})};function U(){return Object(d.jsx)(z,{children:Object(d.jsx)(u,{title:"404",subTitle:"Page Not Found",children:Object(d.jsx)(m.b,{to:"/",className:"btn-primary",children:"Home"})})})}var K,B=c(63),M=c(58),W=c(59),$=c.p+"static/media/room-10.681615dc.jpeg",G=W.a.header(K||(K=Object(M.a)(["\n\tmin-height: 60vh;\n\tbackground: url(",") center/cover no-repeat;\n\tdisplay: flex;\n\talign-items: center;\n    justify-content: center;\n"])),(function(e){return e.image?e.image:$})),J=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).state={slug:n.props.match.params.slug,defaultImg:R},n}return Object(o.a)(c,[{key:"render",value:function(){var e=(0,this.context.getRoom)(this.state.slug);if(console.log(e),!e)return Object(d.jsxs)("div",{className:"error",children:[Object(d.jsx)("h3",{children:"No such room could be found"}),Object(d.jsx)("div",{}),Object(d.jsx)(m.b,{to:"/rooms",className:"btn-primary",children:"Back to Rooms"})]});var t=e.name,c=e.description,n=e.capacity,r=e.size,s=e.price,a=e.extras,i=e.breakfast,o=e.pets,l=e.images,j=Object(B.a)(l),b=j[0],h=j.slice(1);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(G,{image:b,children:Object(d.jsx)(u,{title:"".concat(t," Room"),subTitle:"",children:Object(d.jsx)(m.b,{to:"/rooms",className:"btn-primary",children:" Back to Rooms"})})}),Object(d.jsxs)("section",{className:"single-room",children:[Object(d.jsx)("div",{className:"single-room-images",children:h.map((function(e,c){return Object(d.jsx)("img",{src:e,alt:t},c)}))}),Object(d.jsxs)("div",{className:"single-room-info",children:[Object(d.jsxs)("article",{className:"desc",children:[Object(d.jsx)("h3",{children:"Details"}),Object(d.jsx)("p",{children:c})]}),Object(d.jsxs)("article",{className:"info",children:[Object(d.jsx)("h3",{children:"Info"}),Object(d.jsxs)("h6",{children:["Price : $",s]}),Object(d.jsxs)("h6",{children:["Size : ",r,"SQFT"]}),Object(d.jsxs)("h6",{children:["Max Capacity: "," "," ","".concat(n,n>1?" People  ":" Person")]}),Object(d.jsx)("h6",{children:o?"Pets Allowed":"Pets Not Allowed"}),Object(d.jsx)("h6",{children:i&&"Free breakfast included"})]})]})]}),Object(d.jsxs)("section",{className:"room-extras",children:[Object(d.jsx)("h6",{children:"Extras"}),Object(d.jsx)("ul",{className:"extras",children:a.map((function(e,t){return Object(d.jsxs)("li",{children:["- ",e]},t)}))})]})]})}}]),c}(n.Component);J.contextType=y;var V=c(2),Q=c.p+"static/media/logo.87947b58.svg",X=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isOpen:!1},e.handleToggle=function(){e.setState({isOpen:!e.state.isOpen}),console.log("Clicked"),console.log(e.state.isOpen)},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(d.jsx)("nav",{className:"navbar",children:Object(d.jsxs)("div",{className:"nav-center",children:[Object(d.jsxs)("div",{className:"nav-header",children:[Object(d.jsx)(m.b,{to:"/",children:Object(d.jsx)("img",{src:Q,alt:"beach resort"})}),Object(d.jsx)("button",{type:"button",className:"nav-btn",onClick:this.handleToggle,children:Object(d.jsx)(E.a,{className:"nav-icon"})})]}),Object(d.jsxs)("ul",{className:this.state.isOpen?"nav-links show-nav":"nav-links",children:[Object(d.jsx)("li",{children:Object(d.jsx)(m.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(m.b,{to:"/rooms",children:"Rooms "})})]})]})})}}]),c}(n.Component),Y=(c(131),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(X,{}),Object(d.jsxs)(V.c,{children:[Object(d.jsx)(V.a,{path:"/",exact:!0,component:A}),Object(d.jsx)(V.a,{exact:!0,path:"/rooms",component:I}),Object(d.jsx)(V.a,{exact:!0,path:"/rooms/:slug",component:J}),Object(d.jsx)(V.a,{component:U})]})]})}}]),c}(n.Component));a.a.render(Object(d.jsx)(N,{children:Object(d.jsx)(m.a,{children:Object(d.jsx)(Y,{})})}),document.getElementById("root"))},34:function(e,t){},97:function(e,t){}},[[132,1,2]]]);
//# sourceMappingURL=main.0a88aabc.chunk.js.map