(this["webpackJsonpveterinary-pet-admin"]=this["webpackJsonpveterinary-pet-admin"]||[]).push([[0],{14:function(e,a,t){e.exports=t(23)},19:function(e,a,t){},20:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),l=t(12),r=t.n(l),s=(t(19),t(20),t(8)),o=t(2),m=t(3),i=t(6),d=t(4),u=t(7),h=function(e){var a=e.titulo;return n.a.createElement("header",null,n.a.createElement("h1",{className:"text-center text-white"},a))},p=t(5),v=t(1),E=t(13),N=t.n(E),f={cita:{mascota:"",propietario:"",fecha:"",hora:"",sintomas:""},error:!1},b=function(e){function a(){var e,t;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),l=0;l<c;l++)n[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(n)))).state=Object(v.a)({},f),t.handleChange=function(e){t.setState({cita:Object(v.a)({},t.state.cita,Object(p.a)({},e.target.name,e.target.value))})},t.handleSubmit=function(e){e.preventDefault();var a=t.state.cita,c=a.mascota,n=a.propietario,l=a.fecha,r=a.hora,s=a.sintomas;if(""!==c&&""!==n&&""!==l&&""!==r&&""!==s){var o=Object(v.a)({},t.state.cita);o.id=N()(),t.props.createNewDate(o),t.setState(Object(v.a)({},f))}else t.setState({error:!0})},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.state.error;return n.a.createElement("div",{className:"card mt-2 py-3"},n.a.createElement("div",{className:"card-body"},function(){if(e)return n.a.createElement("div",{className:"alert alert-danger text-center"},"Todos Los Campos son Obligatorios");setTimeout((function(){return n.a.createElement("div",{className:"alert alert-danger text-center"}," ")}),3e3)}(),n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-sm-4 col-lg-2 col-form-label"},"Nombre Mascota"),n.a.createElement("div",{className:"col-sm-8 col-lg-10"},n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre Mascota",name:"mascota",onChange:this.handleChange,value:this.state.cita.mascota})))," ",n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-sm-4 col-lg-2 col-form-label"},"Nombre Due\xf1o"),n.a.createElement("div",{className:"col-sm-8 col-lg-10"},n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre Due\xf1o Mascota",name:"propietario",onChange:this.handleChange,value:this.state.cita.propietario})))," ",n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-sm-4 col-lg-2 col-form-label"},"Fecha"),n.a.createElement("div",{className:"col-sm-8 col-lg-4"},n.a.createElement("input",{type:"date",className:"form-control",name:"fecha",onChange:this.handleChange,value:this.state.cita.fecha})),n.a.createElement("label",{className:"col-sm-4 col-lg-2 col-form-label"},"Hora"),n.a.createElement("div",{className:"col-sm-8 col-lg-4"},n.a.createElement("input",{type:"time",className:"form-control",name:"hora",onChange:this.handleChange,value:this.state.cita.hora})))," ",n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-sm-4 col-lg-2 col-form-label"},"Sintomas"),n.a.createElement("div",{className:"col-sm-8 col-lg-10"},n.a.createElement("textarea",{className:"form-control",name:"sintomas",placeholder:"Describe los sintomas",onChange:this.handleChange,value:this.state.cita.sintomas})))," ",n.a.createElement("input",{type:"submit",className:"py-2 btn btn-block btn-success",value:"Agregar nueva cita"}))))}}]),a}(c.Component),g=function(e){var a=e.cita,t=e.deleteDate;return n.a.createElement("div",{className:"media mt3"},n.a.createElement("div",{className:"media-body"},n.a.createElement("h3",{className:"mt-0"},a.mascota),n.a.createElement("p",{className:"card-text"},n.a.createElement("span",null,"Nombre Due\xf1o: "),a.propietario),n.a.createElement("p",{className:"card-text"},n.a.createElement("span",null,"Fecha: "),a.fecha),n.a.createElement("p",{className:"card-text"},n.a.createElement("span",null,"Hora: "),a.hora),n.a.createElement("p",{className:"card-text"},n.a.createElement("span",null,"Sintomas: ")),n.a.createElement("p",{className:"card-text"},a.sintomas),n.a.createElement("button",{className:"btn btn-danger",onClick:function(){return t(a.id)}},"Eliminar \xd7")))},y=function(e){var a=e.cita,t=e.deleteDate;return n.a.createElement("div",{className:"card mt-2 py-5"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h2",{className:"card-title text-center"},"Date Management"),n.a.createElement("div",{className:"lista-citas"},a.map((function(e){return n.a.createElement(g,{key:e.id,cita:e,deleteDate:t})})))))},w=function(e){function a(){var e,t;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),l=0;l<c;l++)n[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(n)))).state={dates:[]},t.createNewDate=function(e){var a=[].concat(Object(s.a)(t.state.dates),[e]);t.setState({dates:a})},t.deleteDate=function(e){var a=Object(s.a)(t.state.dates).filter((function(a){return a.id!==e}));t.setState({dates:a})},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("dates");e&&this.setState({dates:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("dates",JSON.stringify(this.state.dates))}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement(h,{titulo:"Pet Management"}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 col-mx-auto"},n.a.createElement(b,{createNewDate:this.createNewDate})),n.a.createElement("div",{className:"mt-3 col-md-12 mx-auto"},n.a.createElement(y,{cita:this.state.dates,deleteDate:this.deleteDate}))))}}]),a}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.b41bcf0d.chunk.js.map