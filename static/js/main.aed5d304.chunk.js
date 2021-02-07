(this["webpackJsonpresort-app"]=this["webpackJsonpresort-app"]||[]).push([[0],{31:function(e,t){},86:function(e,t,c){},87:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c.n(r),a=c(45),i=c.n(a),o=c(11),l=c(12),j=c(14),m=c(13),d=c(5);function u(e){var t=e.children,c=e.title,r=e.subTitle;return Object(n.jsxs)("div",{className:"banner",children:[Object(n.jsx)("h1",{children:c}),Object(n.jsx)("div",{}),Object(n.jsxs)("p",{children:[r," "]}),t]})}var b=c(19),h=c(24),O=c(3),p=c.n(O),x=c(16),f=c(46),v=c(55),g=Object(v.a)({space:Object({NODE_ENV:"production",PUBLIC_URL:"/resort-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_SPACE,accessToken:Object({NODE_ENV:"production",PUBLIC_URL:"/resort-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ACCESS_TOKEN}),y=s.a.createContext(),N=function(e){Object(j.a)(c,e);var t=Object(m.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={rooms:[],sortedRooms:[],featuredRooms:[],loading:!0,type:"all",capacity:1,price:0,minPrice:0,maxPrize:0,minSize:0,maxSize:0,breakfast:!1,pets:!1},e.getData=Object(f.a)(p.a.mark((function t(){var c,n,r,s,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.getEntries({content_type:"resortData",order:"sys.createdAt"});case 3:c=t.sent,console.log(c.items),n=e.formatData(c.items),r=n.filter((function(e){return!0===e.featured})),s=Math.max.apply(Math,Object(x.a)(n.map((function(e){return e.price})))),a=Math.max.apply(Math,Object(x.a)(n.map((function(e){return e.size})))),e.setState({rooms:n,featuredRooms:r,sortedRooms:n,loading:!1,price:s,maxPrize:s,maxSize:a}),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(0);case 14:case"end":return t.stop()}}),t,null,[[0,12]])}))),e.getRoom=function(t){return Object(x.a)(e.state.rooms).find((function(e){return e.slug===t}))},e.handleChange=function(t){var c=t.target,n="checkbox"===c.type?c.checked:c.value,r=t.target.name;e.setState(Object(h.a)({},r,n),e.filterRooms)},e.filterRooms=function(){var t=e.state,c=t.rooms,n=t.type,r=t.capacity,s=t.price,a=t.minSize,i=t.maxSize,o=t.breakfast,l=t.pets,j=Object(x.a)(c);r=parseInt(r),s=parseInt(s),"all"!==n&&(j=j.filter((function(e){return e.type===n}))),1!==r&&(j=j.filter((function(e){return e.capacity>=r}))),j=(j=j.filter((function(e){return e.price<=s}))).filter((function(e){return e.size>=a&&e.size<=i})),o&&(j=j.filter((function(e){return!0===e.breakfast}))),l&&(j=j.filter((function(e){return!0===e.pets}))),e.setState({sortedRooms:j})},e}return Object(l.a)(c,[{key:"componentDidMount",value:function(){this.getData()}},{key:"formatData",value:function(e){return e.map((function(e){var t=e.sys.id,c=e.fields.images.map((function(e){return e.fields.file.url}));return Object(b.a)(Object(b.a)({},e.fields),{},{images:c,id:t})}))}},{key:"render",value:function(){return Object(n.jsx)(y.Provider,{value:Object(b.a)(Object(b.a)({},this.state),{},{getRoom:this.getRoom,handleChange:this.handleChange}),children:this.props.children})}}]),c}(r.Component),S=y.Consumer;var k=c.p+"static/media/loading-arrow.dd29210f.gif";function C(){return Object(n.jsxs)("div",{className:"loading",children:[Object(n.jsx)("h4",{children:"Loading your Rooms..."}),Object(n.jsx)("img",{src:k,alt:"Loading"})]})}var R=c.p+"static/media/room-1.05b90599.jpeg";function T(e){var t=e.room,c=t.name,r=t.slug,s=t.images,a=t.price;return Object(n.jsxs)("article",{className:"room",children:[Object(n.jsxs)("div",{className:"img-container",children:[Object(n.jsx)("img",{src:s[0]||R,alt:""}),Object(n.jsxs)("div",{className:"price-top",children:[Object(n.jsxs)("h6",{children:["$",a]}),Object(n.jsx)("p",{children:"Per Night"})]}),Object(n.jsx)(d.b,{to:"/rooms/".concat(r),className:"btn-primary room-link",children:"Featured"})]}),Object(n.jsx)("p",{className:"room-info",children:c})]})}function P(e){var t=e.title;return Object(n.jsxs)("div",{className:"section-title",children:[Object(n.jsx)("h4",{children:t}),Object(n.jsx)("div",{})]})}var _=function(e){Object(j.a)(c,e);var t=Object(m.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.context,t=e.loading,c=e.featuredRooms;return c=c.map((function(e){return Object(n.jsx)(T,{room:e},e.id)})),Object(n.jsxs)("section",{className:"featured-rooms",children:[Object(n.jsx)(P,{title:"Featured Rooms"}),Object(n.jsx)("div",{className:"featured-rooms-center",children:t?Object(n.jsx)(C,{}):c})]})}}]),c}(r.Component);function z(e){var t=e.children,c=e.hero;return Object(n.jsx)("header",{className:c,children:t})}_.contextType=y,z.defaultProps={hero:"defaultHero"};var E=c(18),F=function(e){Object(j.a)(c,e);var t=Object(m.a)(c);function c(){var e;Object(o.a)(this,c);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={services:[{icon:Object(n.jsx)(E.c,{}),title:"Free Cocktails",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "},{icon:Object(n.jsx)(E.d,{}),title:"Endless Hiking",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "},{icon:Object(n.jsx)(E.e,{}),title:"Free Shuttle van",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "},{icon:Object(n.jsx)(E.b,{}),title:"Go Drunk Bevde ho",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "}]},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"services",children:[Object(n.jsx)(P,{title:"Services"}),Object(n.jsx)("div",{className:"services-center",children:this.state.services.map((function(e,t){return Object(n.jsxs)("article",{className:"service",children:[Object(n.jsx)("span",{children:e.icon}),Object(n.jsx)("h6",{children:e.title}),Object(n.jsx)("p",{children:e.info})]},t)}))})]})}}]),c}(r.Component);function A(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(z,{children:Object(n.jsx)(u,{title:"Luxurious Rooms",subTitle:"rooms starting at $299",children:Object(n.jsx)(d.b,{to:"/rooms",className:"btn-primary",children:"Our Rooms"})})}),Object(n.jsx)(F,{}),Object(n.jsx)(_,{})]})}var D=function(e,t){return Object(x.a)(new Set(e.map((function(e){return e[t]}))))};function w(e){var t=e.rooms,c=Object(r.useContext)(y),s=c.handleChange,a=c.type,i=c.capacity,o=c.price,l=c.minPrice,j=c.maxPrize,m=c.minSize,d=c.maxSize,u=c.breakfast,b=c.pets,h=D(t,"type");h=(h=["all"].concat(Object(x.a)(h))).map((function(e,t){return Object(n.jsx)("option",{value:e,children:e},t)}));var O=D(t,"capacity");return O=O.map((function(e,t){return Object(n.jsxs)("option",{value:e,children:[" ",e]},t)})),Object(n.jsxs)("section",{className:"filter-container",children:[Object(n.jsx)(P,{title:"Search Rooms"}),Object(n.jsxs)("form",{action:"",className:"filter-form",children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"type",children:"Room Type"}),Object(n.jsx)("select",{name:"type",id:"type",value:a,className:"form-control",onChange:s,children:h})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"capacity",children:"Guests"}),Object(n.jsx)("select",{name:"capacity",id:"capacity",value:i,className:"form-control",onChange:s,children:O})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsxs)("label",{htmlFor:"price",children:["Room Price $",o]}),Object(n.jsx)("input",{type:"range",name:"price",min:l,max:j,id:"price",value:o,onChange:s,className:"form-control"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"size",children:"Room Size"}),Object(n.jsxs)("div",{className:"size-inputs",children:[Object(n.jsx)("input",{type:"number",name:"minSize",id:"size",value:m,onChange:s,className:"size-input"}),Object(n.jsx)("input",{type:"number",name:"maxSize",id:"size",value:d,onChange:s,className:"size-input"})]})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsxs)("div",{className:"single-extra",children:[Object(n.jsx)("input",{type:"checkbox",name:"breakfast",id:"breakfast",checked:u,onChange:s}),Object(n.jsx)("label",{htmlFor:"breakfast",children:"breakfast"})]}),Object(n.jsxs)("div",{className:"single-extra",children:[Object(n.jsx)("input",{type:"checkbox",name:"pets",id:"pets",checked:b,onChange:s}),Object(n.jsx)("label",{htmlFor:"pets",children:"Pets"})]})]})]})]})}function H(e){var t=e.rooms;return 0===t.length?Object(n.jsx)("div",{className:"empty-search",children:Object(n.jsx)("h3",{children:"unfortunately No rooms matched to your search parameters"})}):Object(n.jsx)("section",{className:"roomslist",children:Object(n.jsx)("div",{className:"roomslist-center",children:t.map((function(e){return Object(n.jsx)(T,{room:e},e.id)}))})})}var L,q=(L=function(e){var t=e.context,c=t.loading,r=t.sortedRooms,s=t.rooms;return c?Object(n.jsx)(C,{}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(w,{rooms:s}),Object(n.jsx)(H,{rooms:r})]})},function(e){return Object(n.jsx)(S,{children:function(t){return Object(n.jsx)(L,Object(b.a)(Object(b.a)({},e),{},{context:t}))}})}),I=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(z,{hero:"roomsHero",children:Object(n.jsx)(u,{title:"Our Rooms",subTitle:"",children:Object(n.jsx)(d.b,{to:"/",className:"btn-primary",children:"Return Home"})})}),Object(n.jsx)(q,{})]})};function U(){return Object(n.jsx)(z,{children:Object(n.jsx)(u,{title:"404",subTitle:"Page Not Found",children:Object(n.jsx)(d.b,{to:"/",className:"btn-primary",children:"Home"})})})}var K=c(56),B=c(50),M=c(51),W=c.p+"static/media/room-10.681615dc.jpeg";function $(){var e=Object(B.a)(["\n\tmin-height: 60vh;\n\tbackground: url(",") center/cover no-repeat;\n\tdisplay: flex;\n\talign-items: center;\n    justify-content: center;\n"]);return $=function(){return e},e}var G=M.a.header($(),(function(e){return e.image?e.image:W})),J=function(e){Object(j.a)(c,e);var t=Object(m.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).state={slug:n.props.match.params.slug,defaultImg:R},n}return Object(l.a)(c,[{key:"render",value:function(){var e=(0,this.context.getRoom)(this.state.slug);if(console.log(e),!e)return Object(n.jsxs)("div",{className:"error",children:[Object(n.jsx)("h3",{children:"No such room could be found"}),Object(n.jsx)("div",{}),Object(n.jsx)(d.b,{to:"/rooms",className:"btn-primary",children:"Back to Rooms"})]});var t=e.name,c=e.description,r=e.capacity,s=e.size,a=e.price,i=e.extras,o=e.breakfast,l=e.pets,j=e.images,m=Object(K.a)(j),b=m[0],h=m.slice(1);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(G,{image:b,children:Object(n.jsx)(u,{title:"".concat(t," Room"),subTitle:"",children:Object(n.jsx)(d.b,{to:"/rooms",className:"btn-primary",children:" Back to Rooms"})})}),Object(n.jsxs)("section",{className:"single-room",children:[Object(n.jsx)("div",{className:"single-room-images",children:h.map((function(e,c){return Object(n.jsx)("img",{src:e,alt:t},c)}))}),Object(n.jsxs)("div",{className:"single-room-info",children:[Object(n.jsxs)("article",{className:"desc",children:[Object(n.jsx)("h3",{children:"Details"}),Object(n.jsx)("p",{children:c})]}),Object(n.jsxs)("article",{className:"info",children:[Object(n.jsx)("h3",{children:"Info"}),Object(n.jsxs)("h6",{children:["Price : $",a]}),Object(n.jsxs)("h6",{children:["Size : ",s,"SQFT"]}),Object(n.jsxs)("h6",{children:["Max Capacity: "," "," ","".concat(r,r>1?" People  ":" Person")]}),Object(n.jsx)("h6",{children:l?"Pets Allowed":"Pets Not Allowed"}),Object(n.jsx)("h6",{children:o&&"Free breakfast included"})]})]})]}),Object(n.jsxs)("section",{className:"room-extras",children:[Object(n.jsx)("h6",{children:"Extras"}),Object(n.jsx)("ul",{className:"extras",children:i.map((function(e,t){return Object(n.jsxs)("li",{children:["- ",e]},t)}))})]})]})}}]),c}(r.Component);J.contextType=y;var V=c(4),Q=c.p+"static/media/logo.87947b58.svg",X=function(e){Object(j.a)(c,e);var t=Object(m.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isOpen:!1},e.handleToggle=function(){e.setState({isOpen:!e.state.isOpen}),console.log("Clicked"),console.log(e.state.isOpen)},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsx)("nav",{className:"navbar",children:Object(n.jsxs)("div",{className:"nav-center",children:[Object(n.jsxs)("div",{className:"nav-header",children:[Object(n.jsx)(d.b,{to:"/",children:Object(n.jsx)("img",{src:Q,alt:"beach resort"})}),Object(n.jsx)("button",{type:"button",className:"nav-btn",onClick:this.handleToggle,children:Object(n.jsx)(E.a,{className:"nav-icon"})})]}),Object(n.jsxs)("ul",{className:this.state.isOpen?"nav-links show-nav":"nav-links",children:[Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/rooms",children:"Rooms "})})]})]})})}}]),c}(r.Component),Y=(c(86),function(e){Object(j.a)(c,e);var t=Object(m.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(X,{}),Object(n.jsxs)(V.c,{children:[Object(n.jsx)(V.a,{path:"/",exact:!0,component:A}),Object(n.jsx)(V.a,{exact:!0,path:"/rooms",component:I}),Object(n.jsx)(V.a,{exact:!0,path:"/rooms/:slug",component:J}),Object(n.jsx)(V.a,{component:U})]})]})}}]),c}(r.Component));i.a.render(Object(n.jsx)(N,{children:Object(n.jsx)(d.a,{basename:"/resort-app",children:Object(n.jsx)(d.a,{children:Object(n.jsx)(Y,{})})})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.aed5d304.chunk.js.map