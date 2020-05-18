webpackJsonp(["pedidos.module"],{

/***/ "../../../../../src/app/views/pedidos/pedidos-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedidos_component__ = __webpack_require__("../../../../../src/app/views/pedidos/pedidos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__pedidos_component__["a" /* PedidosComponent */],
        data: {
            title: 'Pedidos'
        }
    }
];
var PedidosRoutingModule = /** @class */ (function () {
    function PedidosRoutingModule() {
    }
    PedidosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], PedidosRoutingModule);
    return PedidosRoutingModule;
}());

//# sourceMappingURL=pedidos-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/pedidos/pedidos.component.html":
/***/ (function(module, exports) {

module.exports = "<div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Eliminar pedido </h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>¿ Realmente desea eliminar el pedido {{eliminar_id}} ?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn4 btn-secondary\" (click)=\"myModal.hide()\">Cancelar</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"myModal.hide(); eliminar()\"><i class=\"fa fa-trash\"></i>&nbsp; Eliminar</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div bsModal #myModalStatus=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Cambiar status </h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"myModalStatus.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>¿ Realmente desea {{statusModal}} el pedido {{pedido_id}} ?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn4 btn-secondary\" (click)=\"myModalStatus.hide()\">Cancelar</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"myModalStatus.hide(); actualizarStatus()\"><i class=\"fa fa-dot-circle-o\"></i>&nbsp; Aceptar</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div class=\"alertaC\" *ngIf=\"alerta\">\r\n  <alert  [type]=\"alerta_tipo\" dismissible=\"true\" close=\"cerrarAlerta()\">\r\n    <strong>{{alerta_msg}}</strong> \r\n  </alert>\r\n</div>\r\n\r\n<div class=\"alertaC\" *ngIf=\"alerta_boton\">\r\n  <alert [type]=\"alerta_tipo\" >\r\n    <strong>{{alerta_msg}}</strong>\r\n    <button type=\"button\" class=\"btn btn4 btn-secondary\" (click)=\"ok_alerta()\">ok</button> \r\n  </alert>\r\n</div>\r\n\r\n<div class=\"animated fadeIn\" *ngIf=\"!viendo && mostrar\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card-header\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\" style=\"margin-top: 7px;\">\r\n                   <strong>Lista de Pedidos</strong>\r\n                </div>\r\n                <!-- <div class=\"col-md-6\" style=\"text-align: right;\">\r\n                  <button type=\"button\" class=\"btn btn3 btn-primary\" (click)=\"agregar()\"><i class=\"fa fa-plus-square-o\"></i>&nbsp; Agregar Categoría</button>\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body \">\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"form-group\">\r\n                   <strong>Buscar: </strong>\r\n                   <input type=\"text\"  id=\"inputName\" [(ngModel)]=\"inputName\" (ngModelChange)=\"FilterByName()\"/>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\t          <table class=\"table table-striped\">\r\n\t              <thead>\r\n\t                 <!-- <th></th> -->\r\n\t                 <th style=\"text-align: center;\">ID</th>\r\n\t                 <th style=\"text-align: center;\">Status</th>\r\n\t                 <th style=\"text-align: center;\">Usuario</th>\r\n\t                 <th style=\"text-align: center;\">Email</th>\r\n\t                 <th style=\"text-align: center;\">Fecha</th>\r\n\t                 <th style=\"text-align: center;\">Hora</th>\r\n\t                 <th style=\"text-align: center;\">Acciones</th>\r\n\t              </thead>\r\n\t              <tbody>\r\n\t                 <tr *ngFor=\"let item of items\" >\r\n\t                    <!-- <td></td> -->\r\n\t                    <td style=\"text-align: center; vertical-align:middle;\">{{item.id}}</td>\r\n\t                    <td style=\"text-align: center; vertical-align:middle;\">{{item.estado}}</td>\r\n\t                    <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.nombre}}</td>\r\n\t                    <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.email}}</td>\r\n\t                    <td style=\"text-align: center; vertical-align:middle;\"><!-- {{item.created_at | date:'dd/MM/yyyy'}} -->{{item.fecha}}</td>\r\n\t                    <td style=\"text-align: center; vertical-align:middle;\"><!-- {{item.created_at | date:'hh:mm:ss'}} -->{{item.hora}}</td>\r\n\t                    <td style=\"text-align: center; vertical-align:middle;\">\r\n\t                      <button type=\"button\" title=\"Ver detalle\" class=\"btn btn2 btn-primary\" (click)=\"ver(item)\"><i class=\"fa fa-eye\"></i></button>\r\n\t                      \r\n\t                    </td>\r\n\t                 </tr>\r\n\t              </tbody>\r\n\t            </table>\r\n              <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\r\n                <div class=\"btn-group\">\r\n                   <label style=\"margin-top:10px\">Página {{currentIndex}}/{{pageNumber}} </label>\r\n                </div>\r\n                <div class=\"btn-group pull-right\">\r\n                   <ul class=\"pagination\" >\r\n                      <li [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a  (click)=\"prevPage()\" >Atrás</a></li>\r\n                         <li *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\r\n                            <a (click)=\"setPage(page)\"  >{{page}} </a>\r\n                         </li>\r\n                      <li [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a   (click)=\"nextPage()\" >Siguiente</a></li>\r\n                   </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"viendo\" class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\" style=\"display:block; margin:auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Detalles del Pedido {{selectedObj.id}}:</strong>\r\n          <div class=\"pull-right\" style=\"margin-right: 50px\">\r\n            <strong>Fecha: {{selectedObj.created_at | date:'dd/MM/yyyy'}}</strong>\r\n            <strong>- Hora: {{selectedObj.created_at | date:'HH:mm:ss'}}</strong>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n\r\n\t            <div class=\"col-md-12\">\r\n\t              <div class=\"card card-accent-primary\">\r\n\t                <div class=\"card-header\">\r\n\t                  <strong><i class=\"icon-user\"></i> Usuario</strong>\r\n\t                </div>\r\n\t                <div class=\"card-body\">\r\n\t                  <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\r\n\t                    <div class=\"form-group row grupos\" >\r\n\r\n\t                      <label class=\"col-md-3 form-control-label etiquetas\">Nombre</label>\r\n\t                      <div class=\"col-md-9\">\r\n\t                        <p class=\"form-control-static\">{{selectedObj.usuario.nombre}}</p>\r\n\t                      </div>\r\n\r\n\t                      <label class=\"col-md-3 form-control-label etiquetas\">Email</label>\r\n\t                      <div class=\"col-md-9\">\r\n\t                        <p class=\"form-control-static\">{{selectedObj.usuario.email}}</p>\r\n\t                      </div>\r\n\r\n\t                      <label class=\"col-md-3 form-control-label etiquetas\">Teléfono</label>\r\n\t                      <div class=\"col-md-9\">\r\n\t                        <p class=\"form-control-static\">{{selectedObj.usuario.telefono}}</p>\r\n\t                      </div>\r\n\r\n\t                      <!-- <label *ngIf=\"selectedObj.usuario.direccion\" class=\"col-md-3 form-control-label etiquetas\">Dirección</label>\r\n\t                      <div *ngIf=\"selectedObj.usuario.direccion\" class=\"col-md-9\">\r\n\t                        <p class=\"form-control-static\">{{selectedObj.usuario.direccion}}</p>\r\n\t                      </div> -->\r\n\r\n\t                    </div>\r\n\t                  </form>\r\n\t                </div>\r\n\t              </div>\r\n\t            </div><!--/.col-->\r\n\t            \r\n\t            <div class=\"col-md-12\">\r\n\t              <div class=\"card card-accent-success\">\r\n\t                <div class=\"card-header\">\r\n\t                  <strong><i class=\"icon-direction\"></i>  Referencias</strong>\r\n\t                </div>\r\n\t                <div class=\"card-body\">\r\n\t                  <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\r\n\t                    <div class=\"form-group row grupos\">\r\n\t                      <label class=\"col-md-3 form-control-label etiquetas\">País</label>\r\n\t                      <div class=\"col-md-9\">\r\n\t                        <p class=\"form-control-static\">{{selectedObj.country}}</p>\r\n\t                      </div>\r\n\r\n\t                      <label class=\"col-md-3 form-control-label etiquetas\">Estado/Ciudad</label>\r\n\t                      <div class=\"col-md-9\">\r\n\t                        <p class=\"form-control-static\">{{selectedObj.state}}</p>\r\n\t                      </div>\r\n\r\n\t                      <label class=\"col-md-3 form-control-label etiquetas\">Código postal</label>\r\n\t                      <div class=\"col-md-9\">\r\n\t                        <p class=\"form-control-static\">{{selectedObj.postcode}}</p>\r\n\t                      </div>\r\n\r\n\t                      <label class=\"col-md-3 form-control-label etiquetas\">Dirección</label>\r\n\t                      <div class=\"col-md-9\">\r\n\t                        <p class=\"form-control-static\">{{selectedObj.address}}</p>\r\n\t                      </div>\r\n\r\n\t                    </div>\r\n\r\n\t                  </form>\r\n\t                </div>\r\n\t              </div>\r\n\t            </div><!--/.col-->\r\n\r\n\t            <div class=\"col-md-12\">\r\n\t              <div class=\"card card-accent-info\">\r\n\t                <div class=\"card-header\">\r\n\t                  <strong><i class=\"icon-wallet\"></i>  Pago</strong>\r\n\t                </div>\r\n\t                <div class=\"card-body\">\r\n\t                  <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\r\n\t                    <div class=\"form-group row grupos\">\r\n\t                      <label class=\"col-md-3 form-control-label etiquetas\">Status</label>\r\n\t                      <div class=\"col-md-9\">\r\n\t                        <p class=\"form-control-static\">{{selectedObj.estado}}</p>\r\n\t                      </div>\r\n\r\n\t                      <label class=\"col-md-3 form-control-label etiquetas\">Metodo</label>\r\n\t                      <div class=\"col-md-9\">\r\n\t                        <p class=\"form-control-static\">{{selectedObj.metodo_pago}}</p>\r\n\t                      </div>\r\n\r\n\t                      <label class=\"col-md-3 form-control-label etiquetas\">Referencia</label>\r\n\t                      <div class=\"col-md-9\">\r\n\t                        <p class=\"form-control-static\">{{selectedObj.ref_pago}}</p>\r\n\t                      </div>\r\n\r\n\t                      <label class=\"col-md-3 form-control-label etiquetas\">Cambiar Status</label>\r\n\t                      <div class=\"col-md-9\">\r\n\t\t\t              \t<div class=\"radio\">\r\n\t\t\t                  <label for=\"radio1\">\r\n\t\t\t                    <input (click)=\"cambiarStatus($event.target.value); myModalStatus.show()\" [checked]=\"selectedObj.estado == 'Delivery' \" type=\"radio\" id=\"radio1\" name=\"radios\" value=\"Delivery\"> Delivery\r\n\t\t\t                  </label>\r\n\t\t\t                </div>\r\n\t\t\t                <div class=\"radio\">\r\n\t\t\t                  <label for=\"radio2\">\r\n\t\t\t                    <input (click)=\"cambiarStatus($event.target.value); myModalStatus.show()\" [checked]=\"selectedObj.estado == 'Cancel' \" type=\"radio\" id=\"radio2\" name=\"radios\" value=\"Cancel\"> Cancel\r\n\t\t\t                  </label>\r\n\t\t\t                </div>\r\n\t\t\t              </div>\r\n\r\n\r\n\t                    </div>\r\n\r\n\t                  </form>\r\n\t                </div>\r\n\t              </div>\r\n\t            </div><!--/.col-->\r\n\t            \r\n\t            <div class=\"col-md-12\">\r\n\t              <div class=\"card card-accent-danger\">\r\n\t                <div class=\"card-header\">\r\n\t                  <strong><i class=\"icon-basket-loaded\"></i>  Productos Solicitados</strong>\r\n\t                </div>\r\n\t                <div class=\"card-body\">\r\n\t                  <!-- <div class=\"table-responsive\"></div> -->\r\n\t                  <table class=\"table table-sm\">\r\n\t                    <thead >\r\n\t                      <tr>\r\n\t                        <th class=\"text-center\">Imagen</th>\r\n\t                        <th class=\"text-center\">Producto</th>\r\n\t                        <th class=\"text-center\">Color</th>\r\n\t                        <th class=\"text-center\">Talla</th>\r\n\t                        <th class=\"text-center\">Solicitados</th>\r\n\t                        <th class=\"text-center\">Precio</th>\r\n\t                        <th class=\"text-center\">Sub-total</th>\r\n\t                      </tr>\r\n\t                    </thead>\r\n\t                    <tbody>\r\n\t                      <tr *ngFor=\"let item of selectedObj.productos\">\r\n\t                        <td class=\"text-center\">\r\n\t                          <img src = \"{{item.color.imagen[0].src}}\" alt=\"\" class=\"img-table\" height=\"50px\" width=\"80px\"></td>\r\n\t                        <td class=\"text-center\">\r\n\t                          {{item.nombre}}\r\n\t                        </td>\r\n\t                        <td class=\"text-center\">\r\n\t                          {{item.color.nombre_color}}\r\n\t                        </td>\r\n\t                        <td class=\"text-center\">\r\n\t                          {{item.atributo.atributo}}\r\n\t                        </td>\r\n\t                        <td class=\"text-center\">\r\n\t                          {{item.pivot.cantidad}}\r\n\t                        </td>\r\n\t                        <td class=\"text-center\">\r\n\t                          {{item.pivot.precio_unitario}}\r\n\t                        </td>\r\n\t                        <td class=\"text-center\">\r\n\t                          {{item.pivot.subtotal}}\r\n\t                        </td>\r\n\t                      </tr>\r\n\t                    </tbody>\r\n\t                  </table>\r\n\t                </div>\r\n\t                <div class=\"card-footer\">\r\n\t                  <div class=\"pull-right\" style=\"margin-right: 50px\"><strong>Total: $ {{selectedObj.subtotal}}</strong></div>\r\n\t                </div>\r\n\t              </div>\r\n\t            </div><!--/.col-->\r\n          </div><!--/.row-->\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button  class=\"btn btn4 btn-sm btn-secondary\" (click)=\"atras()\"><i class=\"fa fa-arrow-left\"></i> Atrás</button>\r\n          <button  class=\"btn btn-danger btn-sm btn-secondary pull-right\" (click)=\"myModal.show(); aEliminar()\"><i class=\"fa fa-trash\"></i>&nbsp; Eliminar</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/pedidos/pedidos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ruta_service_ruta_service__ = __webpack_require__("../../../../../src/app/services/ruta-service/ruta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { ModalDirective } from 'ngx-bootstrap/modal/modal.component'; //modales



//import {NgxPermissionsService, NgxRolesService} from 'ngx-permissions';
var PedidosComponent = /** @class */ (function () {
    function PedidosComponent(http, router, rutaService, fb) {
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.fb = fb;
        this.isModalShown = false;
        this.objAAgregar = {
            nombre: '',
            imagen: ''
        };
        this.loading = false;
        this.editando = false;
        this.agregando = false;
        this.mostrar = true;
        this.alerta = false;
        this.alerta_boton = false;
        this.viendo = false;
        this.status = null;
        this.statusModal = null;
        this.pedido_id = null;
        this.pages = 4;
        this.pageSize = 5;
        this.pageNumber = 0;
        this.currentIndex = 1;
        this.pageStart = 1;
        this.inputName = '';
    }
    PedidosComponent.prototype.showModal = function () {
        this.isModalShown = true;
    };
    PedidosComponent.prototype.hideModal = function () {
        this.autoShownModal.hide();
    };
    PedidosComponent.prototype.onHidden = function () {
        this.isModalShown = false;
    };
    PedidosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkLogin();
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'pedidos?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            var dia;
            var mes;
            var anio;
            var fecha;
            var hora;
            var minutos;
            var segundos;
            for (var i = 0; i < _this.data.pedidos.length; i++) {
                fecha = new Date(_this.data.pedidos[i].created_at);
                //this.data.pedidosHoy[i].created_at = new Date(this.data.pedidosHoy[i].created_at);
                dia = fecha.getDate();
                mes = fecha.getMonth() + 1;
                anio = fecha.getFullYear();
                hora = fecha.getHours();
                minutos = fecha.getMinutes();
                segundos = fecha.getSeconds();
                _this.data.pedidos[i].fecha = dia + '/' + mes + '/' + anio;
                _this.data.pedidos[i].hora = hora + ':' + minutos + ':' + segundos;
                if (_this.data.pedidos[i].estado == 1) {
                    _this.data.pedidos[i].estado = 'Pending';
                }
                else if (_this.data.pedidos[i].estado == 2) {
                    _this.data.pedidos[i].estado = 'Payment';
                }
                else if (_this.data.pedidos[i].estado == 3) {
                    _this.data.pedidos[i].estado = 'Delivery';
                }
                else if (_this.data.pedidos[i].estado == 4) {
                    _this.data.pedidos[i].estado = 'Cancel';
                }
            }
            setTimeout(function () {
                _this.productList = _this.data.pedidos;
                _this.filteredItems = _this.productList;
                _this.init();
                _this.loading = false;
            }, 1000);
        }, function (msg) {
            msg.error = JSON.parse(msg.error);
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.alerta_tipo = 'warning';
                _this.alerta_msg = msg.error.error;
                _this.alerta_boton = true;
                _this.mostrar = false;
            }
            else {
                //alert(msg.error.error);
                _this.alerta_tipo = 'danger';
                _this.alerta_msg = msg.error.error;
                _this.alerta = true;
                setTimeout(function () { _this.alerta = false; }, 4000);
            }
        });
    };
    PedidosComponent.prototype.checkLogin = function () {
        /*Verifiacar si hay un usario logeado y su tipo*/
        var user = localStorage.getItem('luvas_user');
        var user_login = JSON.parse(user);
        if (user_login) {
            if (user_login.tipo_usuario != 1) {
                this.router.navigate(['luvas/home']);
            }
        }
        else {
            this.router.navigate(['luvas/home']);
        }
    };
    //Alerta cuando se vence el token
    PedidosComponent.prototype.ok_alerta = function () {
        this.router.navigate(['pages']);
    };
    PedidosComponent.prototype.cerrarAlerta = function () {
        this.alerta = false;
    };
    PedidosComponent.prototype.ver = function (obj) {
        var _this = this;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'pedidos/' + obj.id + '?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.selectedObj = _this.data.pedido;
            if (_this.data.pedido.estado == 1) {
                _this.data.pedido.estado = 'Pending';
            }
            else if (_this.data.pedido.estado == 2) {
                _this.data.pedido.estado = 'Payment';
            }
            else if (_this.data.pedido.estado == 3) {
                _this.data.pedido.estado = 'Delivery';
            }
            else if (_this.data.pedido.estado == 4) {
                _this.data.pedido.estado = 'Cancel';
            }
            if (_this.data.pedido.metodo_pago == 1) {
                _this.data.pedido.metodo_pago = 'Transferencia';
            }
            else if (_this.data.pedido.metodo_pago == 2) {
                _this.data.pedido.metodo_pago = 'PayPal';
            }
            _this.viendo = true;
            _this.loading = false;
        }, function (msg) {
            msg.error = JSON.parse(msg.error);
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.alerta_tipo = 'warning';
                _this.alerta_msg = msg.error.error;
                _this.alerta_boton = true;
                _this.mostrar = false;
            }
            else {
                //alert(msg.error.error);
                _this.alerta_tipo = 'danger';
                _this.alerta_msg = msg.error.error;
                _this.alerta = true;
                setTimeout(function () { _this.alerta = false; }, 4000);
            }
        });
    };
    PedidosComponent.prototype.atras = function () {
        this.viendo = false;
        this.selectedObj = null;
        this.objAEliminar = null;
        this.status = null;
        this.statusModal = null;
        this.pedido_id = null;
    };
    PedidosComponent.prototype.aEliminar = function () {
        this.objAEliminar = this.selectedObj;
        //console.log(this.objAEliminar);
        this.eliminar_id = this.objAEliminar.id;
        //this.eliminar_nombre = this.objAEliminar.usuario.nombre;
        //this.myModal.show();
    };
    PedidosComponent.prototype.eliminar = function () {
        var _this = this;
        console.log(this.objAEliminar);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('luvas_token')
        };
        this.http.delete(this.rutaService.getRutaApi() + 'pedidos/' + this.eliminar_id + '?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            //----<
            if (_this.productList) {
                var aux = _this.productList;
                _this.productList = [];
                for (var i = 0; i < aux.length; ++i) {
                    if (aux[i].id != _this.eliminar_id) {
                        _this.productList.push(aux[i]);
                    }
                }
                _this.filteredItems = _this.productList;
                _this.init();
            }
            //---->
            _this.loading = false;
            _this.atras();
            _this.alerta_tipo = 'success';
            _this.alerta_msg = _this.data.message;
            _this.alerta = true;
            setTimeout(function () { _this.alerta = false; }, 4000);
        }, function (msg) {
            msg.error = JSON.parse(msg.error);
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.alerta_tipo = 'warning';
                _this.alerta_msg = msg.error.error;
                _this.alerta_boton = true;
                _this.mostrar = false;
            }
            else {
                //alert(msg.error.error);
                _this.alerta_tipo = 'danger';
                _this.alerta_msg = msg.error.error;
                _this.alerta = true;
                setTimeout(function () { _this.alerta = false; }, 4000);
            }
        });
    };
    /*Tratar el status seleccionado*/
    PedidosComponent.prototype.cambiarStatus = function (status) {
        this.status = status;
        this.pedido_id = this.selectedObj.id;
        if (status == 'Delivery') {
            this.statusModal = 'enviar';
        }
        else if (status == 'Cancel') {
            this.statusModal = 'cancelar';
        }
        //console.log(this.status);
    };
    /*Actualiar el status*/
    PedidosComponent.prototype.actualizarStatus = function () {
        var _this = this;
        var estado;
        if (this.status == 'Delivery') {
            estado = 3;
        }
        else if (this.status == 'Cancel') {
            estado = 4;
        }
        this.loading = true;
        var datos = {
            token: localStorage.getItem('luvas_token'),
            estado: estado
        };
        this.http.put(this.rutaService.getRutaApi() + 'pedidos/' + this.pedido_id + '?token=' + localStorage.getItem('luvas_token'), datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            //----<
            for (var i = 0; i < _this.productList.length; ++i) {
                if (_this.productList[i].id == _this.pedido_id) {
                    _this.productList[i].estado = _this.status;
                }
            }
            _this.filteredItems = _this.productList;
            _this.init();
            //---->
            _this.selectedObj.estado = _this.status;
            _this.loading = false;
            _this.alerta_tipo = 'success';
            _this.alerta_msg = _this.data.message;
            _this.alerta = true;
            setTimeout(function () { _this.alerta = false; }, 4000);
        }, function (msg) {
            msg.error = JSON.parse(msg.error);
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.alerta_tipo = 'warning';
                _this.alerta_msg = msg.error.error;
                _this.alerta_boton = true;
                _this.mostrar = false;
            }
            else {
                //alert(msg.error.error);
                _this.alerta_tipo = 'danger';
                _this.alerta_msg = msg.error.error;
                _this.alerta = true;
                setTimeout(function () { _this.alerta = false; }, 4000);
            }
        });
    };
    PedidosComponent.prototype.init = function () {
        this.currentIndex = 1;
        this.pageStart = 1;
        this.pages = 4;
        this.pageNumber = parseInt("" + (this.filteredItems.length / this.pageSize));
        if (this.filteredItems.length % this.pageSize != 0) {
            this.pageNumber++;
        }
        if (this.pageNumber < this.pages) {
            this.pages = this.pageNumber;
        }
        this.refreshItems();
        console.log("this.pageNumber :  " + this.pageNumber);
    };
    PedidosComponent.prototype.FilterByName = function () {
        this.filteredItems = [];
        if (this.inputName != "") {
            for (var i = 0; i < this.productList.length; ++i) {
                if (this.productList[i].usuario.nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].fecha.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].hora.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].estado.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].usuario.email.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                /*else if (this.productList[i].id.indexOf(this.inputName.toUpperCase())>=0) {
                   this.filteredItems.push(this.productList[i]);
                }*/
            }
            // this.productList.forEach(element => {
            //     if(element.nombre.toUpperCase().indexOf(this.inputName.toUpperCase())>=0){
            //       this.filteredItems.push(element);
            //    }
            // });
        }
        else {
            this.filteredItems = this.productList;
        }
        console.log(this.filteredItems);
        this.init();
    };
    PedidosComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    PedidosComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    PedidosComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    PedidosComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    PedidosComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('autoShownModal'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
    ], PedidosComponent.prototype, "autoShownModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myModal'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _b || Object)
    ], PedidosComponent.prototype, "myModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myModalStatus'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _c || Object)
    ], PedidosComponent.prototype, "myModalStatus", void 0);
    PedidosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pedidos',
            template: __webpack_require__("../../../../../src/app/views/pedidos/pedidos.component.html"),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].Default,
            styles: [__webpack_require__("../../../../../src/app/views/pedidos/pedidos.css")]
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_ruta_service_ruta_service__["a" /* RutaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_ruta_service_ruta_service__["a" /* RutaService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]) === "function" && _g || Object])
    ], PedidosComponent);
    return PedidosComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=pedidos.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/pedidos/pedidos.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-table{\r\n\tborder-radius: 4px;\r\n\t-o-object-fit: cover;\r\n\t   object-fit: cover;\r\n}\r\n\r\n.btn { \r\n\tbackground-color: #c71717 !important;\r\n\tborder: 1px solid  #c71717 !important;\r\n} \r\n\r\n.btn2 { \r\n\tbackground-color: #424242 !important;\r\n\tborder: 1px solid  #424242 !important;\r\n} \r\n\r\n/*switche*/\r\n.switch-primary > .switch-input:checked ~ .switch-label{\r\n\tbackground: #28a745 !important;\r\n    border-color: #28a745;\r\n}\r\n\r\n.btn3{\r\n\tbackground-color: #181e21  !important;\r\n\tborder: 1px solid  #181e21 !important;\r\n\tmargin-top: 4px;\r\n}\r\n\r\n.btn4{\r\n\tbackground-color: #000000  !important;\r\n\tborder: 1px solid  #000000 !important;\r\n\tcolor: #ffffff;\r\n}\r\n\r\n.alertaC{\r\n\tposition: fixed !important;\r\n    z-index: 999 !important;\r\n    top: 70px !important;\r\n    right: 10px !important;\r\n}\r\n\r\n.danger{\r\n\tcolor: #c71717 !important;\r\n\tfont-weight: bold;\r\n\tmargin-top: 5px;\r\n}\r\n\r\n/*Loading*/\r\n.backdrop[_ngcontent-c1]{\r\n\tposition: fixed !important;\r\n}\r\n\r\n/*Paginacion de la tabla*/\r\n.pagination li.active a {\r\n\tbackground-color: #29363d;\r\n    border-color: #29363d;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/pedidos/pedidos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosModule", function() { return PedidosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pedidos_component__ = __webpack_require__("../../../../../src/app/views/pedidos/pedidos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pedidos_routing_module__ = __webpack_require__("../../../../../src/app/views/pedidos/pedidos-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_alert__ = __webpack_require__("../../../../ngx-bootstrap/alert/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Modal Component


//import { Ng2UploaderModule } from 'ng2-uploader';


//import { NgxPermissionsModule } from 'ngx-permissions';
var PedidosModule = /** @class */ (function () {
    function PedidosModule() {
    }
    PedidosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                //NgxPermissionsModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot(),
                //Ng2UploaderModule,
                __WEBPACK_IMPORTED_MODULE_4__pedidos_routing_module__["a" /* PedidosRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ngx_loading__["b" /* LoadingModule */].forRoot({
                    animationType: __WEBPACK_IMPORTED_MODULE_7_ngx_loading__["a" /* ANIMATION_TYPES */].chasingDots,
                    backdropBackgroundColour: 'rgba(0,0,0,0.5)',
                    backdropBorderRadius: '4px',
                    primaryColour: '#ffffff',
                    secondaryColour: '#ffffff',
                    tertiaryColour: '#ffffff',
                    fullScreenBackdrop: true
                })
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__pedidos_component__["a" /* PedidosComponent */]]
        })
    ], PedidosModule);
    return PedidosModule;
}());

//# sourceMappingURL=pedidos.module.js.map

/***/ })

});
//# sourceMappingURL=pedidos.module.chunk.js.map