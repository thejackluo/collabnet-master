(this["webpackJsonpcollab-connect"]=this["webpackJsonpcollab-connect"]||[]).push([[0],{12:function(e,a,t){e.exports=t(19)},17:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(9),r=t.n(l),o=(t(5),t(6),t(17),t(11)),s=t(1),i=t(2),m=t(7),u=t(4),d=t(3),p=(t(18),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",{className:"ProjectPopup"},c.a.createElement("button",{type:"button",className:"btn btn-primary",dataToggle:"modal",dataTarget:"#myModal"},"Click on this"),c.a.createElement("div",{className:"modal fade",id:"myModal"},c.a.createElement("div",{className:"modal-dialog modal-lg"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h4",{className:"modal-title"},"Idea Name"),c.a.createElement("button",{type:"button",className:"close",dataDismiss:"modal"},"\xd7")),c.a.createElement("div",{className:"modal-body"},"Modal body.."),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-secondary btn-danger",dataDismiss:"modal"},"Close"),c.a.createElement("button",{type:"button",className:"btn btn-secondary btn-Primary",dataDismiss:"modal"},"Join the slack Now"))))))}}]),t}(n.Component)),v=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={name:n.props.projectCardData.name,description:n.props.projectCardData.description,projectPopupData:{data:"Hello World"}},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"handlePopup",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",{className:"ProjectCard"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},this.state.name),c.a.createElement("p",{className:"card-text"},this.state.description),c.a.createElement(p,{projectData:this.state.projectPopupData}),c.a.createElement("button",{className:"btn btn-primary"},"Delete"))))}}]),t}(n.Component),b=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={projectData:n.props.projectData},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props.projectData.map((function(e,a){return c.a.createElement("div",{className:"col-sm mx-2",key:a},c.a.createElement(v,{projectCardData:e}))}));return c.a.createElement("div",{className:"RowProjectCard"},c.a.createElement("div",{className:"row"},e))}}]),t}(n.Component),h=t(10),E=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).initialState={name:"",description:""},n.handleChange=function(e){var a=e.target,t=a.name,c=a.value;n.setState(Object(h.a)({},t,c))},n.submitForm=function(){n.props.handleSubmit(n.state),n.setState(n.initialState)},n.state=n.initialState,n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",{className:"CreatePodForm"},c.a.createElement("h3",null,"Name: ",this.state.name),c.a.createElement("h3",null,"Description: ",this.state.description),c.a.createElement("form",{className:"form my-4"},c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:"name"},"Project Name:"),c.a.createElement("input",{type:"text",class:"form-control",placeholder:"Enter Project Name",name:"name",value:this.state.name,onChange:this.handleChange,required:!0}),c.a.createElement("div",{class:"valid-feedback"},"Valid."),c.a.createElement("div",{class:"invalid-feedback"},"Please fill out this field.")),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:"description"},"Project Description:"),c.a.createElement("input",{type:"text",class:"form-control",placeholder:"Enter Project Description",name:"description",value:this.state.description,onChange:this.handleChange,required:!0}),c.a.createElement("div",{class:"valid-feedback"},"Valid."),c.a.createElement("div",{class:"invalid-feedback"},"Please fill out this field.")),c.a.createElement("input",{type:"button",value:"submit",class:"btn btn-primary",onClick:this.submitForm})))}}]),t}(n.Component),f=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",{className:"Filter"})}}]),t}(n.Component),y=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement("a",{class:"navbar-brand",href:"#"},"Idea-Connect"),c.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{class:"navbar-toggler-icon"})),c.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{class:"navbar-nav mr-auto"},c.a.createElement("li",{class:"nav-item active"},c.a.createElement("a",{class:"nav-link",href:"#"},"Home ",c.a.createElement("span",{class:"sr-only"},"(current)"))),c.a.createElement("li",{class:"nav-item"},c.a.createElement("a",{class:"nav-link",href:"#"},"Idea")),c.a.createElement("li",{class:"nav-item"},c.a.createElement("a",{class:"nav-link",href:"#"},"DashBoard")),c.a.createElement("li",{class:"nav-item"},c.a.createElement("a",{class:"nav-link",href:"#"},"Contact Us"))),c.a.createElement("form",{class:"form-inline my-2 my-lg-0"},c.a.createElement("input",{class:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),c.a.createElement("button",{class:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search Idea"))))}}]),t}(n.Component),j=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",{className:"UserProfile"},c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement("a",{class:"navbar-brand",href:"#"},"Idea-Connect"),c.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{class:"navbar-toggler-icon"})),c.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{class:"navbar-nav mr-auto"},c.a.createElement("li",{class:"nav-item active"},c.a.createElement("a",{class:"nav-link",href:"#"},"Home ",c.a.createElement("span",{class:"sr-only"},"(current)"))),c.a.createElement("li",{class:"nav-item"},c.a.createElement("a",{class:"nav-link",href:"#"},"Idea")),c.a.createElement("li",{class:"nav-item"},c.a.createElement("a",{class:"nav-link",href:"#"},"DashBoard")),c.a.createElement("li",{class:"nav-item"},c.a.createElement("a",{class:"nav-link",href:"#"},"Contact Us"))),c.a.createElement("form",{class:"form-inline my-2 my-lg-0"},c.a.createElement("input",{class:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),c.a.createElement("button",{class:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search Idea")))),c.a.createElement("div",{class:"card"},c.a.createElement("img",{class:"card-img-top",src:"...",alt:"Card image cap"}),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},"Card title"),c.a.createElement("p",{class:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),c.a.createElement("a",{href:"#",class:"btn btn-primary"},"Go somewhere"))))}}]),t}(n.Component),g=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleSubmit=function(e){n.setState({projects:[].concat(Object(o.a)(n.state.projects),[e])})},n.state={projects:[{name:"Project 1",description:"Project 1 test des"},{name:"Project 2",description:"Project 2 test des"}]},n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state.projects;return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement(y,null),c.a.createElement(E,{handleSubmit:this.handleSubmit}),c.a.createElement(b,{projectData:e}),c.a.createElement(f,null),c.a.createElement(j,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,a,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.b012f635.chunk.js.map