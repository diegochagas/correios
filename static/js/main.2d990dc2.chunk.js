(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,a,t){e.exports=t(90)},52:function(e,a,t){},57:function(e,a,t){},72:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),i=t(12),o=t.n(i),c=(t(52),t(13)),s=t(14),l=t(18),u=t(15),d=t(19),m=t(17),E=t(21),p=(t(57),t(44)),S=t(45),C=t(23),f=t(5),v=t.n(f),O=t(16),h=t(31),A=t.n(h),b="AIzaSyAHcixvHTRnP4vJCL1mkav-oY8wPJf4Fgc";A.a.setApiKey(b);t(72);var D=function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.coordinates,a=e.latitude,t=e.longitude;return r.a.createElement("div",{className:"map-container"},r.a.createElement(C.Map,{google:this.props.google,zoom:15,center:{lat:a,lng:t}},r.a.createElement(C.Marker,{onClick:this.onMarkerClick,name:"Current location"}),r.a.createElement(C.InfoWindow,{onClose:this.onInfoWindowClose},r.a.createElement("div",null,r.a.createElement("h1",null,"Show Map")))))}}]),a}(r.a.Component),g=Object(C.GoogleApiWrapper)({apiKey:b})(D),_=Object(m.b)(function(e){return{coordinates:e.coordinates}})(g),R={ADDRESS_LOAD:"ADDRESS_LOAD",ADDRESS_LOAD_SUCCESS:"ADDRESS_LOAD_SUCCESS",ADDRESS_LOAD_FAIL:"ADDRESS_LOAD_FAIL",FETCH_COORDINATES:"FETCH_COORDINATES",FETCH_COORDINATES_SUCCESS:"FETCH_COORDINATES_SUCCESS",FETCH_COORDINATES_FAIL:"FETC_COORDINATES_FAIL"},L=function(e){return{type:R.ADDRESS_LOAD_SUCCESS,address:e}},N=function(e){return{type:R.ADDRESS_LOAD_FAIL,error:e}},T=function(e){return{type:R.FETCH_COORDINATES_SUCCESS,coordinates:e}},j=function(e){return{type:R.FETCH_COORDINATES_FAIL,error:e}},P=[{initials:"AC",name:"Acre"},{initials:"AL",name:"Alagoas"},{initials:"AP",name:"Amap\xe1"},{initials:"AM",name:"Amazonas"},{initials:"BA",name:"Bahia"},{initials:"CE",name:"Cear\xe1"},{initials:"DF",name:"Distrito Federal"},{initials:"ES",name:"Esp\xedrito Santo"},{initials:"GO",name:"Goi\xe1s"},{initials:"MA",name:"Maranh\xe3o"},{initials:"MT",name:"Mato Grosso"},{initials:"MS",name:"Mato Grosso do Sul"},{initials:"MG",name:"Minas Gerais"},{initials:"PA",name:"Par\xe1"},{initials:"PB",name:"Para\xedba"},{initials:"PR",name:"Paran\xe1"},{initials:"PE",name:"Pernambuco"},{initials:"PI",name:"Piau\xed"},{initials:"RJ",name:"Rio de Janeiro"},{initials:"RN",name:"Rio Grande do Norte"},{initials:"RS",name:"Rio Grande do Sul"},{initials:"RO",name:"Rond\xf4nia"},{initials:"RR",name:"Roraima"},{initials:"SC",name:"Santa Catarina"},{initials:"SP",name:"S\xe3o Paulo"},{initials:"SE",name:"Sergipe"},{initials:"TO",name:"Tocantins"}],F=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(l.a)(this,Object(u.a)(a).call(this,e))).CEP=r.a.createRef(),t.onChangeCEP=t.onChangeCEP.bind(Object(E.a)(t)),t.onSearchCEP=t.onSearchCEP.bind(Object(E.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.isLoading,t=e.address,n=e.error,i=t.logradouro,o=t.complemento,c=t.bairro,s=t.localidade,l=t.uf,u=t.cep;return r.a.createElement("div",{className:"search-zip-code","data-test":"search-zip-code"},r.a.createElement("header",{className:"search-header"},r.a.createElement("form",{className:"",onSubmit:this.onSearchCEP},r.a.createElement("label",{className:"search-label"},"Busca endere\xe7o"),r.a.createElement("input",{className:"search-field",type:"text",onChange:this.onChangeCEP,ref:this.CEP,placeholder:"00000-000","data-test":"search-field"}),r.a.createElement("button",{className:"btn search-button"},r.a.createElement(p.a,{icon:S.a})))),(n||t.erro)&&r.a.createElement("div",{className:"error"},this.errorMessageHandler(n,t.erro)),a&&r.a.createElement("div",{className:"spinner"},r.a.createElement("div",null,"Procurando..."),r.a.createElement("progress",null)),!(!t.cep||null!==n||t.erro)&&r.a.createElement("div",{className:"address-form"},r.a.createElement("div",{className:"address-fields"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"CEP"),r.a.createElement("input",{value:u,disabled:!0,name:"cep"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Logradouro"),r.a.createElement("input",{value:i,disabled:!0,name:"logradouro"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"N\xfamero"),r.a.createElement("input",{name:"numero"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Complemento"),r.a.createElement("input",{value:o,disabled:!0,name:"complemento"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Bairro"),r.a.createElement("input",{value:c,disabled:!0,name:"bairro"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Cidade"),r.a.createElement("input",{value:s,disabled:!0,name:"localidade"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Estado"),this.renderBrazilianStates(l))),r.a.createElement("div",{className:"map"},r.a.createElement(_,null))))}},{key:"selectUFFromStatesList",value:function(e){var a=P.find(function(a){return a.initials===e});return a?a.initials:""}},{key:"renderBrazilianStates",value:function(e){var a=this.selectUFFromStatesList(e);return r.a.createElement("select",{id:"uf",disabled:!0,value:a,"data-test":"select-uf"},P.map(function(e){return r.a.createElement("option",{key:e.initials,value:e.initials},e.name)}))}},{key:"onChangeCEP",value:function(e){this.CEP.current=e.target.value}},{key:"onSearchCEP",value:function(e){e.preventDefault();var a=this.CEP.current;this.props.loadAddress(a),this.loadMap(a)}},{key:"errorMessageHandler",value:function(e,a){return a&&null===e?k.notFoundMessage:e===k.networkErrorMessage?k.invalidZipCodeMessage:e}},{key:"loadMap",value:function(e){this.props.fetchCoordinates(e)}}]),a}(r.a.Component),k={notFoundMessage:"O CEP consultado n\xe3o foi encontrado na base de dados.",networkErrorMessage:"Error: Network Error",invalidZipCodeMessage:"CEP de formato inv\xe1lido, digite novamente."},w=Object(m.b)(function(e){return{isLoading:e.isLoading,address:e.address,loadAddress:e.loadAddress,error:e.error}},function(e){return{loadAddress:function(a){return e(function(e){return{type:R.ADDRESS_LOAD,CEP:e}}(a))},fetchCoordinates:function(a){return e(function(e){return{type:R.FETCH_COORDINATES,CEP:e}}(a))}}})(F),y=t(10),I=t(46),M=t(8),x=t(25),H=t.n(x),U=function(){var e=Object(O.a)(v.a.mark(function e(a){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.get("https://viacep.com.br/ws/".concat(a,"/json/"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),G=function(){var e=Object(O.a)(v.a.mark(function e(a){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.get("".concat("http://dev.virtualearth.net/REST/v1/Locations","?key=").concat("AhaUarMLk9Ld4hM3CieQT8PH3aUlGJUtkT353eG_BLWj3zvqZKkkIAkoX2JwyMIJ","&query=").concat(a));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),B=v.a.mark(Z),J=v.a.mark(q),z=v.a.mark(Q),W=v.a.mark(X),K=v.a.mark(Y);function Z(e){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(M.b)(U,e.CEP);case 3:return a=t.sent,t.next=6,Object(M.c)(L(a.data));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(M.c)(N(t.t0.toString()));case 12:case"end":return t.stop()}},B,null,[[0,8]])}function q(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.d)(R.ADDRESS_LOAD,Z);case 2:case"end":return e.stop()}},J)}function Q(e){var a,t;return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(M.b)(G,e.CEP);case 3:return a=n.sent,t=a.data.resourceSets[0].resources[0].geocodePoints[0].coordinates,n.next=7,Object(M.c)(T({latitude:t[0],longitude:t[1]}));case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(M.c)(j(n.t0.toString()));case 13:case"end":return n.stop()}},z,null,[[0,9]])}function X(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.d)(R.FETCH_COORDINATES,Q);case 2:case"end":return e.stop()}},W)}function Y(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.a)([q(),X()]);case 2:case"end":return e.stop()}},K)}var V={logradouro:"",complemento:"",bairro:"",localidade:"",uf:"",cep:""},$={latitude:"-24.0350399017334",longitude:"-46.530548095703125"},ee=Object(y.c)({isLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case R.ADDRESS_LOAD:return!0;case R.ADDRESS_LOAD_SUCCESS:case R.ADDRESS_LOAD_FAIL:return!1;default:return e}},address:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case R.ADDRESS_LOAD_SUCCESS:return a.address;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case R.ADDRESS_LOAD_FAIL:return a.error;case R.ADDRESS_LOAD:case R.ADDRESS_LOAD_SUCCESS:return null;default:return e}},isLoadingCoordinates:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case R.FETCH_COORDINATES:return!0;case R.FETCH_COORDINATES_SUCCESS:case R.FETCH_COORDINATES_FAIL:return!1;default:return e}},coordinates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case R.FETCH_COORDINATES_SUCCESS:return a.coordinates;default:return e}},errorCoordinates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case R.FETCH_COORDINATES_FAIL:return a.error;case R.FETCH_COORDINATES:case R.FETCH_COORDINATES_SUCCESS:return null;default:return e}}}),ae=function(){var e=Object(I.a)(),a=Object(y.e)(ee,Object(y.a)(e));return e.run(Y),a},te=(t(89),ae()),ne=function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,{store:te},r.a.createElement("div",{className:"App","data-test":"app"},r.a.createElement(w,null)))}}]),a}(n.Component);o.a.render(r.a.createElement(ne,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.2d990dc2.chunk.js.map