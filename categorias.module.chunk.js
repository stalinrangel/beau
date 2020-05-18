webpackJsonp(["categorias.module"],{

/***/ "../../../../../src/app/views/categorias/categorias-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriasRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categorias_component__ = __webpack_require__("../../../../../src/app/views/categorias/categorias.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__categorias_component__["a" /* CategoriasComponent */],
        data: {
            title: 'Categorías'
        }
    }
];
var CategoriasRoutingModule = /** @class */ (function () {
    function CategoriasRoutingModule() {
    }
    CategoriasRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], CategoriasRoutingModule);
    return CategoriasRoutingModule;
}());

//# sourceMappingURL=categorias-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/categorias/categorias.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Modal automatica:\r\n <button type=\"button\" class=\"btn btn-primary\" (click)=\"showModal()\">Render auto-shown modal</button>-->\r\n<div *ngIf=\"isModalShown\" [config]=\"{ show: true, ignoreBackdropClick: true, keyboard: false }\" (onHidden)=\"onHidden()\" bsModal #autoShownModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Productos de la categoría {{habCategoria.nombre}}</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal(); apagarSwiche()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        \r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n              \r\n                  <!-- <div class=\"card-header\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-12\">\r\n                        \r\n                      </div>\r\n                    </div>\r\n                  </div> -->\r\n                  <div class=\"card-body \">\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                         <strong>Buscar: </strong>\r\n                         <input  type=\"text\"  id=\"inputName2\" [(ngModel)]=\"inputName2\" (ngModelChange)=\"FilterByName2()\"/>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <table class=\"table table-striped\">\r\n                      <thead>\r\n                         <!-- <th style=\"text-align: center;\">ID</th> -->\r\n                         <!-- <th style=\"text-align: center;\">Imagen</th> -->\r\n                         <th style=\"text-align: center;\">Nombre</th>\r\n                         <th style=\"text-align: center;\">Estado</th>\r\n                         \r\n                      </thead>\r\n                      <tbody>\r\n                         <tr *ngFor=\"let item of items2\" >\r\n                            <!-- <td style=\"text-align: center; vertical-align:middle;\">{{item.id}}</td> -->\r\n                            <!-- <td style=\"text-align: center; vertical-align:middle;\"><img src = \"{{item.imagen}}\" alt=\"\" height=\"auto\" width=\"60px\"></td> --> \r\n                            <td style=\"text-align: center; vertical-align:middle;\">{{item.nombre}}</td>                        \r\n                            <td style=\"text-align: center; vertical-align:middle;\">\r\n                              <label class=\"switch switch-text switch-pill switch-primary\">\r\n                                <input  [checked]=\"item.estado === 'ON'\" type=\"checkbox\" class=\"switch-input\" (change)=\"cambioSwicheProd(item)\" >\r\n                                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n                                <span class=\"switch-handle\"></span>\r\n                              </label>\r\n                            </td>\r\n                            \r\n                         </tr>\r\n                      </tbody>\r\n                    </table>\r\n                      <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\r\n                        <div class=\"btn-group\">\r\n                           <label style=\"margin-top:10px\">Página {{currentIndex2}}/{{pageNumber2}} </label>\r\n                        </div>\r\n                        <div class=\"btn-group pull-right\">\r\n                           <ul class=\"pagination\" >\r\n                              <li [ngClass]=\"{'disabled': (currentIndex2 == 1 || pageNumber2 == 0)}\" ><a  (click)=\"prevPage2()\" >Atrás</a></li>\r\n                                 <li *ngFor=\"let page of pagesIndex2\"  [ngClass]=\"{'active': (currentIndex2 == page)}\">\r\n                                    <a (click)=\"setPage(page)\"  >{{page}} </a>\r\n                                 </li>\r\n                              <li [ngClass]=\"{'disabled': (currentIndex2 == pageNumber2 || pageNumber2 == 0)}\" ><a   (click)=\"nextPage2()\" >Siguiente</a></li>\r\n                           </ul>\r\n                        </div>\r\n                      </div>\r\n                  </div>\r\n               \r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn4 btn-secondary\" (click)=\"hideModal(); apagarSwiche()\">Cancelar</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"hideModal(); habilitarCat()\"><i class=\"fa fa-check\"></i>&nbsp; Habilitar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> \r\n\r\n<!-- <alert type=\"success\" dismissible=\"true\">\r\n  <strong>Well done!</strong> You successfully read this important alert message.\r\n</alert>\r\n -->\r\n\r\n<div class=\"alertaC\" *ngIf=\"alerta\">\r\n  <alert  [type]=\"alerta_tipo\" dismissible=\"true\" close=\"cerrarAlerta()\">\r\n    <strong>{{alerta_msg}}</strong> \r\n  </alert>\r\n</div>\r\n\r\n<div class=\"alertaC\" *ngIf=\"alerta_boton\">\r\n  <alert [type]=\"alerta_tipo\" >\r\n    <strong>{{alerta_msg}}</strong>\r\n    <button type=\"button\" class=\"btn btn4 btn-secondary\" (click)=\"ok_alerta()\">ok</button> \r\n  </alert>\r\n</div>\r\n\r\n<div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Eliminar categoría </h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>¿Realmente desea eliminar la categoría {{eliminar_nombre}}?</p>\r\n        <p><i class=\"fa fa-warning\"></i> Se eliminará la categoría y sus productos.</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn4 btn-secondary\" (click)=\"myModal.hide()\">Cancelar</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"myModal.hide(); eliminar()\"><i class=\"fa fa-trash\"></i>&nbsp; Eliminar</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div class=\"animated fadeIn\" *ngIf=\"!editando && !agregando && mostrar\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card-header\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\" style=\"margin-top: 7px;\">\r\n                   <strong>Lista de Categorías</strong>\r\n                </div>\r\n                <div class=\"col-md-6\" style=\"text-align: right;\">\r\n                  <button type=\"button\" class=\"btn btn3 btn-primary\" (click)=\"agregar()\"><i class=\"fa fa-plus-square-o\"></i>&nbsp; Agregar Categoría</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body \">\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"form-group\">\r\n                   <strong>Buscar: </strong>\r\n                   <input type=\"text\"  id=\"inputName\" [(ngModel)]=\"inputName\" (ngModelChange)=\"FilterByName()\"/>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <table class=\"table\">\r\n                <thead>\r\n                   <!-- <th></th> -->\r\n                   <!-- <th style=\"text-align: center;\">ID</th> -->\r\n                   <th style=\"text-align: center;\">Imagen</th>\r\n                   <th style=\"text-align: center;\">Nombre</th>\r\n                   <th style=\"text-align: center;\">Estado</th>\r\n                   <th style=\"text-align: center;\">Acciones</th>\r\n                </thead>\r\n                <tbody>\r\n                   <tr *ngFor=\"let item of items\" >\r\n                      <!-- <td></td> -->\r\n                      <!-- <td style=\"text-align: center; vertical-align:middle;\">{{item.id}}</td> -->\r\n                      <td style=\"text-align: center; vertical-align:middle;\"><img src = \"{{item.imagen}}\" class=\"img-table\" height=\"50px\" width=\"80px\"></td>\r\n                      <td style=\"text-align: center; vertical-align:middle;\">{{item.nombre}}</td>\r\n                      <td style=\"text-align: center; vertical-align:middle;\">\r\n                        <div *ngIf=\"mostrarSwiches\">\r\n                        <label class=\"switch switch-text switch-pill switch-primary\">\r\n                          <input [disabled]=\"false\" [checked]=\"item.estado === 'ON'\" type=\"checkbox\" class=\"switch-input\" (change)=\"cambioSwicheCat(item)\" >\r\n                          <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n                          <span class=\"switch-handle\"></span>\r\n                        </label>\r\n                        </div>\r\n                      </td> \r\n                      <td style=\"text-align: center; vertical-align:middle;\">\r\n                        <button type=\"button\" title=\"Editar\" class=\"btn btn2 btn-primary\" (click)=\"aEditar(item)\"><i class=\"fa fa-edit\"></i></button>\r\n                        <button type=\"button\" title=\"Eliminar\" class=\"btn btn-danger\" data-toggle=\"modal\" (click)=\"myModal.show(); aEliminar(item)\"><i class=\"fa fa-trash\"></i></button>\r\n                      </td>\r\n                   </tr>\r\n                </tbody>\r\n              </table>\r\n                <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\r\n                  <div class=\"btn-group\">\r\n                     <label style=\"margin-top:10px\">Página {{currentIndex}}/{{pageNumber}} </label>\r\n                  </div>\r\n                  <div class=\"btn-group pull-right\">\r\n                     <ul class=\"pagination\" >\r\n                        <li [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a  (click)=\"prevPage()\" >Atrás</a></li>\r\n                           <li *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\r\n                              <a (click)=\"setPage(page)\"  >{{page}} </a>\r\n                           </li>\r\n                        <li [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a   (click)=\"nextPage()\" >Siguiente</a></li>\r\n                     </ul>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"animated fadeIn\" *ngIf=\"editando\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10\" style=\"display:block; margin:auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Editar categoría: </strong> {{objAEditar.nombre}}\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form [formGroup]=\"myFormEditar\" novalidate class=\"form-horizontal\">\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 form-control-label\" for=\"nombre\">Nombre</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"nombre\" name=\"nombre\" class=\"form-control\" placeholder=\"Nombre\" formControlName=\"nombre\">\r\n                <div *ngIf=\"myFormEditar.get('nombre').errors && myFormEditar.get('nombre').dirty\">\r\n                  <span class=\"danger\" color=\"danger\" *ngIf=\"myFormEditar.get('nombre').hasError('required')\">Nombre es requerido</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 form-control-label\" for=\"descripcion\">Descripcion</label>\r\n              <div class=\"col-md-9\">\r\n                <textarea id=\"descripcion\" name=\"descripcion\" rows=\"6\" class=\"form-control\" placeholder=\"Descripción..\" formControlName=\"descripcion\"></textarea>\r\n                <div *ngIf=\"myFormEditar.get('descripcion').errors && myFormEditar.get('descripcion').dirty\">\r\n                  <span class=\"danger\" color=\"danger\" *ngIf=\"myFormEditar.get('descripcion').hasError('required')\">Descripcion es requerido</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div [hidden]=\"clear\" class=\"form-group row\">\r\n              <br>\r\n              <label class=\"col-md-3 form-control-label\" for=\"imagen\">Imagen</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"file\" name=\"imagen\" id=\"imagen\" (change)=\"onFileChange($event)\" #fileInput accept=\"image/*\">\r\n\r\n                <br>\r\n                <br>\r\n                \r\n                <p [hidden]=\"clear\" style=\"color: #c71717\"><b>Sugerencia:</b> La dimensión de la imagen no debe ser mayor a 870x370 px.</p>\r\n                \r\n                <img src = \"{{objAEditar.imagen}}\" alt=\"\" height=\"160px\">\r\n              </div>\r\n            </div>\r\n\r\n             <div *ngIf=\"clear\" class=\"form-group row\">\r\n               <label class=\"col-md-3 form-control-label\" for=\"imagen\">Imagen</label>\r\n               <div class=\"col-md-9\">\r\n                 <br>\r\n                 <output id=\"list\"></output>\r\n                 <br>\r\n                 <br>\r\n                 <button type=\"button\" class=\"btn btn-danger btn-tn\" (click)=\"clearFile()\">clear file</button>\r\n               </div>\r\n             </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button  class=\"btn btn4 btn-sm btn-secondary\" (click)=\"atras()\"><i class=\"fa fa-arrow-left\"></i> Atrás</button>\r\n          <button type=\"submit\" class=\"btn btn-sm btn-success\" (click)=\"editar()\" [disabled]=\"myFormEditar.invalid\"><i class=\"fa fa-dot-circle-o\"></i> Guardar</button>\r\n          <!-- <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button> -->\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"animated fadeIn\" *ngIf=\"agregando\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10\" style=\"display:block; margin:auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Agregar categoría:</strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form [formGroup]=\"myFormAgregar\" novalidate class=\"form-horizontal\">\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 form-control-label\" for=\"nombre\">Nombre</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"nombre\" name=\"nombre\" class=\"form-control\" placeholder=\"Nombre\" formControlName=\"nombre\">\r\n                <div *ngIf=\"myFormAgregar.get('nombre').errors && myFormAgregar.get('nombre').dirty\">\r\n                  <span class=\"danger\" color=\"danger\" *ngIf=\"myFormAgregar.get('nombre').hasError('required')\">Nombre es requerido</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 form-control-label\" for=\"nombre\">Descripcion</label>\r\n              <div class=\"col-md-9\">\r\n                <textarea id=\"descripcion\" name=\"descripcion\" rows=\"6\" class=\"form-control\" placeholder=\"Descripción..\" formControlName=\"descripcion\"></textarea>\r\n                <div *ngIf=\"myFormAgregar.get('descripcion').errors && myFormAgregar.get('descripcion').dirty\">\r\n                  <span class=\"danger\" color=\"danger\" *ngIf=\"myFormAgregar.get('descripcion').hasError('required')\">Descripcion es requerido</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <br>\r\n              <label class=\"col-md-3 form-control-label\" for=\"imagen\">Imagen</label>\r\n              <div class=\"col-md-9\">\r\n                <input [hidden]=\"clear\" type=\"file\" name=\"imagen\" id=\"imagen\" (change)=\"onFileChange($event)\" #fileInput accept=\"image/*\">\r\n                <div *ngIf=\"clear\">\r\n                  <br>\r\n                  <output id=\"list\"></output>\r\n                  <br>\r\n                  <br>\r\n                  <button type=\"button\" class=\"btn btn-danger btn-tn\" (click)=\"clearFile()\">clear file</button>\r\n                </div>\r\n\r\n                <br>\r\n                <br>\r\n\r\n                <p [hidden]=\"clear\" style=\"color: #c71717\"><b>Sugerencia:</b> La dimensión de la imagen no debe ser mayor a 870x370 px.</p>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button class=\"btn btn4 btn-sm btn-secondary\" (click)=\"atras()\"><i class=\"fa fa-arrow-left\"></i> Atrás</button>\r\n          <button type=\"submit\" class=\"btn btn-sm btn-success\" (click)=\"crear()\" [disabled]=\"myFormAgregar.invalid\"><i class=\"fa fa-dot-circle-o\"></i> Crear</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\r\n</div>\r\n\r\n "

/***/ }),

/***/ "../../../../../src/app/views/categorias/categorias.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriasComponent; });
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
var CategoriasComponent = /** @class */ (function () {
    function CategoriasComponent(http, router, rutaService, fb) {
        /*if (localStorage.getItem('constructora_user_tipo') != '0') {
            this.router.navigate(['dashboard']);
        }*/
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.fb = fb;
        this.isModalShown = false;
        this.objAAgregar = {
            nombre: '',
            imagen: '',
            descripcion: ''
        };
        this.loading = false;
        this.editando = false;
        this.agregando = false;
        this.mostrar = true;
        this.alerta = false;
        this.alerta_boton = false;
        this.mostrarSwiches = true;
        this.admin = false;
        this.clear = false; //puedo borrar?
        this.fileIMG = null;
        this.imgUpload = null;
        this.loadinImg = false;
        this.pages = 4;
        this.pageSize = 5;
        this.pageNumber = 0;
        this.currentIndex = 1;
        this.pageStart = 1;
        this.inputName = '';
        this.pages2 = 4;
        this.pageSize2 = 5;
        this.pageNumber2 = 0;
        this.currentIndex2 = 1;
        this.pageStart2 = 1;
        this.inputName2 = '';
        this.myFormAgregar = this.fb.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            imagen: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            descripcion: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]]
        });
        this.myFormEditar = this.fb.group({
            id: [''],
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            imagen: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            descripcion: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]]
        });
    }
    CategoriasComponent.prototype.showModal = function () {
        this.isModalShown = true;
    };
    CategoriasComponent.prototype.hideModal = function () {
        this.autoShownModal.hide();
    };
    CategoriasComponent.prototype.onHidden = function () {
        this.isModalShown = false;
    };
    CategoriasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkLogin();
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'categorias?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.productList = _this.data.categorias;
            _this.filteredItems = _this.productList;
            //console.log(this.productList);
            _this.init();
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
    CategoriasComponent.prototype.checkLogin = function () {
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
    CategoriasComponent.prototype.ok_alerta = function () {
        this.router.navigate(['luvas']);
    };
    CategoriasComponent.prototype.cerrarAlerta = function () {
        this.alerta = false;
    };
    CategoriasComponent.prototype.aEditar = function (obj) {
        this.editando = true;
        this.objAEditar = Object.assign({}, obj);
        console.log(this.objAEditar);
        this.myFormEditar.patchValue({ id: this.objAEditar.id });
        this.myFormEditar.patchValue({ nombre: this.objAEditar.nombre });
        this.myFormEditar.patchValue({ imagen: this.objAEditar.imagen });
        this.myFormEditar.patchValue({ descripcion: this.objAEditar.descripcion });
    };
    CategoriasComponent.prototype.atras = function () {
        this.mostrar = true;
        this.editando = false;
        this.agregando = false;
        this.objAEditar = null;
        this.objAAgregar.nombre = '';
        this.objAAgregar.imagen = '';
        this.objAAgregar.descripcion = '';
        //this.uploadFile = null;
        this.myFormAgregar.reset();
        this.myFormEditar.reset();
        this.clear = false;
    };
    CategoriasComponent.prototype.aEliminar = function (obj) {
        this.objAEliminar = obj;
        //console.log(this.objAEliminar);
        this.eliminar_id = this.objAEliminar.id;
        this.eliminar_nombre = this.objAEliminar.nombre;
        //this.myModal.show();
    };
    CategoriasComponent.prototype.eliminar = function () {
        var _this = this;
        console.log(this.objAEliminar);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('luvas_token')
        };
        this.http.delete(this.rutaService.getRutaApi() + 'categorias/' + this.eliminar_id + '?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            var aux = _this.productList;
            _this.productList = [];
            for (var i = 0; i < aux.length; ++i) {
                if (aux[i].id != _this.eliminar_id) {
                    _this.productList.push(aux[i]);
                }
            }
            _this.filteredItems = _this.productList;
            _this.init();
            //console.log(this.productList);
            //alert(this.data.message);
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
            else if (msg.status == 404 || msg.status == 409) {
                //alert(msg.error.error);
                _this.alerta_tipo = 'danger';
                _this.alerta_msg = msg.error.error;
                _this.alerta = true;
                setTimeout(function () { _this.alerta = false; }, 4000);
            }
        });
    };
    CategoriasComponent.prototype.agregar = function () {
        this.agregando = true;
    };
    CategoriasComponent.prototype.crear = function () {
        var _this = this;
        console.log(this.myFormAgregar.value);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('luvas_token'),
            nombre: this.myFormAgregar.value.nombre,
            imagen: this.myFormAgregar.value.imagen,
            descripcion: this.myFormAgregar.value.descripcion
        };
        this.http.post(this.rutaService.getRutaApi() + 'categorias', datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            if (!_this.productList) {
                _this.productList = [];
            }
            _this.productList.push(_this.data.categoria);
            _this.filteredItems = _this.productList;
            _this.init();
            //console.log(this.productList);
            //alert(this.data.message);
            _this.loading = false;
            _this.alerta_tipo = 'success';
            _this.alerta_msg = _this.data.message;
            _this.alerta = true;
            setTimeout(function () { _this.alerta = false; }, 4000);
            _this.myFormAgregar.reset();
            _this.clearFile();
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
    CategoriasComponent.prototype.editar = function () {
        var _this = this;
        this.loading = true;
        var imgAux;
        if (this.imgUpload) {
            imgAux = this.imgUpload;
        }
        else {
            imgAux = this.myFormEditar.value.imagen;
        }
        var datos = {
            token: localStorage.getItem('luvas_token'),
            nombre: this.myFormEditar.value.nombre,
            imagen: imgAux,
            descripcion: this.myFormEditar.value.descripcion,
        };
        this.http.put(this.rutaService.getRutaApi() + 'categorias/' + this.myFormEditar.value.id, datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            for (var i = 0; i < _this.productList.length; ++i) {
                if (_this.productList[i].id == _this.myFormEditar.value.id) {
                    _this.productList[i].nombre = _this.myFormEditar.value.nombre;
                    _this.productList[i].imagen = imgAux;
                    _this.productList[i].descripcion = _this.myFormEditar.value.descripcion;
                }
            }
            _this.filteredItems = _this.productList;
            _this.init();
            //console.log(this.productList);
            //alert(this.data.message);
            _this.loading = false;
            _this.objAEditar.imagen = imgAux;
            _this.clearFile();
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
    CategoriasComponent.prototype.apagarSwiche = function () {
        //this.catSelecAux.estado = 'OFF';
        /*for (var i = 0; i < this.items.length; ++i) {
          if (this.items[i].id == this.catSelecAux.id) {
            this.items[i].estado = 'OFF';
          }
        }*/
        this.mostrarSwiches = true;
    };
    CategoriasComponent.prototype.cambioSwicheCat = function (obj) {
        //console.log(obj.estado);
        /*setTimeout(()=>{obj.estado = 'ON';
          console.log(obj.estado);
        },2000);
  
        setTimeout(()=>{obj.estado = 'OFF';
          console.log(obj.estado);
        },4000);*/
        this.catSelecAux = obj;
        if (obj.estado == 'ON') {
            //Apagando categoria
            this.cambiarEstado(obj);
        }
        else {
            //Encendiendo categoria
            this.cargarProductos(obj);
        }
    };
    CategoriasComponent.prototype.cargarProductos = function (obj) {
        var _this = this;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'categorias/' + obj.id + '/productos?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.productList2 = _this.data.categoria.productos;
            _this.filteredItems2 = _this.productList2;
            //console.log(this.productList2);
            _this.init2();
            _this.loading = false;
            if (_this.productList2.length == 0) {
                //alert('La categoria no tiene productos');
                //Se cambia solo el estado de la categoria
                _this.cambiarEstado(obj);
            }
            else {
                //alert('La categoria tiene '+this.productList2.length+' productos');
                //Se muestra la modal para elgir los productos q se quieren habilitar junto con la categoria
                _this.habCategoria = obj;
                _this.showModal();
                _this.mostrarSwiches = false;
            }
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
    //Para la categoria
    CategoriasComponent.prototype.cambiarEstado = function (obj) {
        var _this = this;
        var v_estado;
        if (obj.estado == 'ON') {
            //obj.estado = 'OFF';
            v_estado = 'OFF';
        }
        else {
            //obj.estado = 'ON';
            v_estado = 'ON';
        }
        var datos = {
            token: localStorage.getItem('luvas_token'),
            estado: v_estado
        };
        this.http.put(this.rutaService.getRutaApi() + 'categorias/' + obj.id, datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            //this.data = data;
            obj.estado = v_estado;
        }, function (msg) {
            msg.error = JSON.parse(msg.error);
            console.log(msg);
            console.log(msg.error.error);
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.alerta_tipo = 'warning';
                _this.alerta_msg = msg.error.error;
                _this.alerta_boton = true;
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
    CategoriasComponent.prototype.cambioSwicheProd = function (objProd) {
        if (objProd.estado == 'ON') {
            objProd.estado = 'OFF';
        }
        else {
            objProd.estado = 'ON';
        }
    };
    CategoriasComponent.prototype.habilitarCat = function () {
        //console.log(this.productList2);
        var _this = this;
        //this.cambiarEstado(this.habCategoria);
        //alert(JSON.stringify(this.productList2));
        //Esto no va---
        /*var auxProductos = [];
  
        for (var i = 0; i < this.productList2.length; ++i) {
          auxProductos.push(this.productList2[i]);
        }
  
  
        alert(JSON.stringify(auxProductos));*/
        //-----
        this.mostrarSwiches = true;
        this.loading = true;
        setTimeout(function () {
            var datos = {
                token: localStorage.getItem('luvas_token'),
                estado: 'ON',
                productos: JSON.stringify(_this.productList2)
                //productos: JSON.stringify(auxProductos)
                //productos: this.productos
                //productos: JSON.stringify(this.productos)
                //productos: '[{"id":1,"cantidad":3,"estado":"ON"},{"id":3,"cantidad":3,"estado":"OFF"}]'
            };
            _this.http.put(_this.rutaService.getRutaApi() + 'categorias/' + _this.habCategoria.id, datos)
                .toPromise()
                .then(function (data) {
                console.log(data);
                _this.data = data;
                _this.habCategoria.estado = 'ON';
                //auxProductos = [];
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
        }, 300);
    };
    CategoriasComponent.prototype.init = function () {
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
    CategoriasComponent.prototype.FilterByName = function () {
        this.filteredItems = [];
        if (this.inputName != "") {
            for (var i = 0; i < this.productList.length; ++i) {
                if (this.productList[i].nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
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
    CategoriasComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    CategoriasComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    CategoriasComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    CategoriasComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    CategoriasComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    CategoriasComponent.prototype.init2 = function () {
        this.currentIndex2 = 1;
        this.pageStart2 = 1;
        this.pages2 = 4;
        this.pageNumber2 = parseInt("" + (this.filteredItems2.length / this.pageSize2));
        if (this.filteredItems2.length % this.pageSize2 != 0) {
            this.pageNumber2++;
        }
        if (this.pageNumber2 < this.pages2) {
            this.pages2 = this.pageNumber2;
        }
        this.refreshItems2();
        console.log("this.pageNumber2 :  " + this.pageNumber2);
    };
    CategoriasComponent.prototype.FilterByName2 = function () {
        this.filteredItems2 = [];
        if (this.inputName2 != "") {
            for (var i = 0; i < this.productList2.length; ++i) {
                if (this.productList2[i].nombre.toUpperCase().indexOf(this.inputName2.toUpperCase()) >= 0) {
                    this.filteredItems2.push(this.productList2[i]);
                } /*else if (this.productList2[i].costo.toString().indexOf(this.inputName2)>=0) {
                   this.filteredItems2.push(this.productList2[i]);
                }else if (this.productList2[i].cantidad.toString().indexOf(this.inputName2)>=0) {
                   this.filteredItems2.push(this.productList2[i]);
                }else if (this.productList2[i].unidad.toUpperCase().indexOf(this.inputName2.toUpperCase())>=0) {
                   this.filteredItems2.push(this.productList2[i]);
                }*/
            }
            // this.productList.forEach(element => {
            //     if(element.nombre.toUpperCase().indexOf(this.inputName.toUpperCase())>=0){
            //       this.filteredItems.push(element);
            //    }
            // });
        }
        else {
            this.filteredItems2 = this.productList2;
        }
        console.log(this.filteredItems2);
        this.init2();
    };
    CategoriasComponent.prototype.fillArray2 = function () {
        var obj = new Array();
        for (var index = this.pageStart2; index < this.pageStart2 + this.pages2; index++) {
            obj.push(index);
        }
        return obj;
    };
    CategoriasComponent.prototype.refreshItems2 = function () {
        this.items2 = this.filteredItems2.slice((this.currentIndex2 - 1) * this.pageSize2, (this.currentIndex2) * this.pageSize2);
        this.pagesIndex2 = this.fillArray2();
    };
    CategoriasComponent.prototype.prevPage2 = function () {
        if (this.currentIndex2 > 1) {
            this.currentIndex2--;
        }
        if (this.currentIndex2 < this.pageStart2) {
            this.pageStart2 = this.currentIndex2;
        }
        this.refreshItems2();
    };
    CategoriasComponent.prototype.nextPage2 = function () {
        if (this.currentIndex2 < this.pageNumber2) {
            this.currentIndex2++;
        }
        if (this.currentIndex2 >= (this.pageStart2 + this.pages2)) {
            this.pageStart2 = this.currentIndex2 - this.pages2 + 1;
        }
        this.refreshItems2();
    };
    CategoriasComponent.prototype.setPage2 = function (index) {
        this.currentIndex2 = index;
        this.refreshItems2();
    };
    //Tabla2 Productos de la categoria X---->
    //Carga de img---<
    CategoriasComponent.prototype.subirImagen = function () {
        var _this = this;
        this.loading = true;
        var formModel = this.prepareSave();
        this.http.post(this.rutaService.getRutaApi() + 'imagenes?token=' + localStorage.getItem('mouvers_token'), formModel)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.imgUpload = _this.data.imagen;
            _this.myFormAgregar.patchValue({ imagen: _this.imgUpload });
            //Solo admitimos imágenes.
            if (!_this.fileIMG.type.match('image.*')) {
                return;
            }
            var reader = new FileReader();
            reader.onload = (function (theFile) {
                return function (e) {
                    // Creamos la imagen.
                    document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="160px"/>'].join('');
                };
            })(_this.fileIMG);
            reader.readAsDataURL(_this.fileIMG);
            _this.clear = true;
            _this.loading = false;
            //alert(this.data.message);
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
    CategoriasComponent.prototype.prepareSave = function () {
        var input = new FormData();
        input.append('imagen', this.fileIMG);
        input.append('carpeta', 'categorias');
        input.append('url_imagen', this.rutaService.getRutaImages());
        return input;
    };
    CategoriasComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            this.fileIMG = event.target.files[0];
            this.subirImagen();
        }
    };
    CategoriasComponent.prototype.clearFile = function () {
        this.imgUpload = null;
        this.fileInput.nativeElement.value = '';
        this.clear = false;
        this.myFormAgregar.patchValue({ imagen: null });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('autoShownModal'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
    ], CategoriasComponent.prototype, "autoShownModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myModal'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _b || Object)
    ], CategoriasComponent.prototype, "myModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
    ], CategoriasComponent.prototype, "fileInput", void 0);
    CategoriasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-categorias',
            template: __webpack_require__("../../../../../src/app/views/categorias/categorias.component.html"),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].Default,
            styles: [__webpack_require__("../../../../../src/app/views/categorias/categorias.css")]
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_ruta_service_ruta_service__["a" /* RutaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_ruta_service_ruta_service__["a" /* RutaService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]) === "function" && _g || Object])
    ], CategoriasComponent);
    return CategoriasComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=categorias.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/categorias/categorias.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-table{\r\n\tborder-radius: 4px;\r\n\t-o-object-fit: cover;\r\n\t   object-fit: cover;\r\n}\r\n\r\n.btn { \r\n\tbackground-color: #c71717 !important;\r\n\tborder: 1px solid  #c71717 !important;\r\n} \r\n\r\n.btn2 { \r\n\tbackground-color: #424242 !important;\r\n\tborder: 1px solid  #424242 !important;\r\n} \r\n\r\n/*switche*/\r\n.switch-primary > .switch-input:checked ~ .switch-label{\r\n\tbackground: #28a745 !important;\r\n    border-color: #28a745;\r\n}\r\n\r\n.btn3{\r\n\tbackground-color: #181e21  !important;\r\n\tborder: 1px solid  #181e21 !important;\r\n\tmargin-top: 4px;\r\n}\r\n\r\n.btn4{\r\n\tbackground-color: #000000  !important;\r\n\tborder: 1px solid  #000000 !important;\r\n\tcolor: #ffffff;\r\n}\r\n\r\n.alertaC{\r\n\tposition: fixed !important;\r\n    z-index: 999 !important;\r\n    top: 70px !important;\r\n    right: 10px !important;\r\n}\r\n\r\n.danger{\r\n\tcolor: #c71717 !important;\r\n\tfont-weight: bold;\r\n\tmargin-top: 5px;\r\n}\r\n\r\n/*Loading*/\r\n.backdrop[_ngcontent-c1]{\r\n\tposition: fixed !important;\r\n}\r\n\r\n/*Paginacion de la tabla*/\r\n.pagination li.active a {\r\n\tbackground-color: #29363d;\r\n    border-color: #29363d;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/categorias/categorias.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasModule", function() { return CategoriasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categorias_component__ = __webpack_require__("../../../../../src/app/views/categorias/categorias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categorias_routing_module__ = __webpack_require__("../../../../../src/app/views/categorias/categorias-routing.module.ts");
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
var CategoriasModule = /** @class */ (function () {
    function CategoriasModule() {
    }
    CategoriasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                //NgxPermissionsModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot(),
                //Ng2UploaderModule,
                __WEBPACK_IMPORTED_MODULE_4__categorias_routing_module__["a" /* CategoriasRoutingModule */],
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
            declarations: [__WEBPACK_IMPORTED_MODULE_3__categorias_component__["a" /* CategoriasComponent */]]
        })
    ], CategoriasModule);
    return CategoriasModule;
}());

//# sourceMappingURL=categorias.module.js.map

/***/ })

});
//# sourceMappingURL=categorias.module.chunk.js.map