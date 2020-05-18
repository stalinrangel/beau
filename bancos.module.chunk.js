webpackJsonp(["bancos.module"],{

/***/ "../../../../../src/app/views/bancos/bancos-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BancosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bancos_component__ = __webpack_require__("../../../../../src/app/views/bancos/bancos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__bancos_component__["a" /* BancosComponent */],
        data: {
            title: 'Bancos'
        }
    }
];
var BancosRoutingModule = /** @class */ (function () {
    function BancosRoutingModule() {
    }
    BancosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], BancosRoutingModule);
    return BancosRoutingModule;
}());

//# sourceMappingURL=bancos-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/bancos/bancos.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <alert type=\"success\" dismissible=\"true\">\r\n  <strong>Well done!</strong> You successfully read this important alert message.\r\n</alert>\r\n -->\r\n\r\n<div class=\"alertaC\" *ngIf=\"alerta\">\r\n  <alert  [type]=\"alerta_tipo\" dismissible=\"true\" close=\"cerrarAlerta()\">\r\n    <strong>{{alerta_msg}}</strong> \r\n  </alert>\r\n</div>\r\n\r\n<div class=\"alertaC\" *ngIf=\"alerta_boton\">\r\n  <alert [type]=\"alerta_tipo\" >\r\n    <strong>{{alerta_msg}}</strong>\r\n    <button type=\"button\" class=\"btn btn4 btn-secondary\" (click)=\"ok_alerta()\">ok</button> \r\n  </alert>\r\n</div>\r\n\r\n<!-- Modal para eliminar cuenta bancaria -->\r\n<div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Eliminar cuenta bancaria </h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-9\" style=\"display:block; margin:auto\">\r\n            <p><strong>Cuenta:</strong> {{objAEliminar.cuenta}}</p>\r\n            <p><strong>Titular:</strong> {{objAEliminar.titular}}</p>\r\n            <p><strong>Email:</strong> {{objAEliminar.email}}</p>\r\n            <p><strong>Num. documento:</strong> {{objAEliminar.num_documento}}</p>\r\n            <p><strong>Tipo de cuenta:</strong> {{objAEliminar.tipo_cuenta}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn4 btn-secondary\" (click)=\"myModal.hide()\">Cancelar</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"myModal.hide(); eliminar()\"><i class=\"fa fa-trash\"></i>&nbsp; Eliminar</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<!-- Modal para agregar cuenta bancaria -->\r\n<div bsModal #myModalBanco=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Agregar cuenta bancaria </h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"myModalBanco.hide();ressetBanco()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"myFormAgregarBanco\" novalidate>\r\n          <div class=\"form-group\">\r\n            <label for=\"cuenta\">Cuenta</label>\r\n            <input type=\"text\" id=\"cuenta\" name=\"cuenta\" class=\"form-control\" placeholder=\"Cuenta\" formControlName=\"cuenta\">\r\n            <div *ngIf=\"myFormAgregarBanco.get('cuenta').errors && myFormAgregarBanco.get('cuenta').dirty\">\r\n              <span class=\"help-block danger\" color=\"danger\" *ngIf=\"myFormAgregarBanco.get('cuenta').hasError('required')\">Cuenta es requerido</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"titular\">Titular</label>\r\n            <input type=\"text\" id=\"titular\" name=\"titular\" class=\"form-control\" placeholder=\"Titular\" formControlName=\"titular\">\r\n            <div *ngIf=\"myFormAgregarBanco.get('titular').errors && myFormAgregarBanco.get('titular').dirty\">\r\n              <span class=\"help-block danger\" color=\"danger\" *ngIf=\"myFormAgregarBanco.get('titular').hasError('required')\">Titular es requerido</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\r\n            <div *ngIf=\"myFormAgregarBanco.get('email').errors && myFormAgregarBanco.get('email').dirty\">\r\n              <span class=\"help-block danger\" color=\"danger\" *ngIf=\"myFormAgregarBanco.get('email').hasError('required')\">Email es requerido</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"num_documento\">Num. documento</label>\r\n            <input type=\"text\" id=\"num_documento\" name=\"num_documento\" class=\"form-control\" placeholder=\"Num. documento\" formControlName=\"num_documento\">\r\n            <div *ngIf=\"myFormAgregarBanco.get('num_documento').errors && myFormAgregarBanco.get('num_documento').dirty\">\r\n              <span class=\"help-block danger\" color=\"danger\" *ngIf=\"myFormAgregarBanco.get('num_documento').hasError('required')\">Num. documento es requerido</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"tipo_cuenta\">Tipo de cuenta</label>\r\n            <input type=\"text\" id=\"tipo_cuenta\" name=\"tipo_cuenta\" class=\"form-control\" placeholder=\"Tipo de cuenta\" formControlName=\"tipo_cuenta\">\r\n            <div *ngIf=\"myFormAgregarBanco.get('tipo_cuenta').errors && myFormAgregarBanco.get('tipo_cuenta').dirty\">\r\n              <span class=\"help-block danger\" color=\"danger\" *ngIf=\"myFormAgregarBanco.get('tipo_cuenta').hasError('required')\">Tipo de cuenta es requerido</span>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn4 btn-secondary\" (click)=\"myModalBanco.hide(); ressetBanco()\">Cancelar</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"myModalBanco.hide(); agregarBanco()\" [disabled]=\"myFormAgregarBanco.invalid\"><i class=\"fa fa-dot-circle-o\"></i>&nbsp; Crear</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n\r\n\r\n<div class=\"animated fadeIn\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-10\" style=\"display:block; margin:auto\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\"style=\"margin-top: 7px;\">\r\n                <strong>Cuentas Bancarias: </strong>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n\r\n              <div class=\"row\">\r\n\r\n                  <div *ngFor = \"let banco of bancos\" class=\"col-sm-6 col-md-4\">\r\n                    <div class=\"card\">\r\n                      <!-- <div class=\"card-header\">\r\n                        \r\n                      </div> -->\r\n                      <div class=\"card-body\">\r\n                        <form >\r\n                          <div class=\"form-group\">\r\n                            <label for=\"cuenta\">Cuenta</label>\r\n                            <input type=\"text\" id=\"cuenta\" name=\"cuenta\" class=\"form-control\" placeholder=\"Cuenta\" [(ngModel)]=\"banco.cuenta\">\r\n                            <!-- <span class=\"help-block\">Please enter your email</span> -->\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"titular\">Titular</label>\r\n                            <input type=\"text\" id=\"titular\" name=\"titular\" class=\"form-control\" placeholder=\"Titular\" [(ngModel)]=\"banco.titular\">\r\n                            <!-- <span class=\"help-block\">Please enter your password</span> -->\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"email\">Email</label>\r\n                            <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"banco.email\">\r\n                            <!-- <span class=\"help-block\">Please enter your email</span> -->\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\" num_documento\">Num. documento</label>\r\n                            <input type=\"text\" id=\"num_documento\" name=\"num_documento\" class=\"form-control\" placeholder=\"Num. documento\" [(ngModel)]=\"banco.num_documento\">\r\n                            <!-- <span class=\"help-block\">Please enter your password</span> -->\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"tipo_cuenta\">Tipo de cuenta</label>\r\n                            <input type=\"text\" id=\"tipo_cuenta\" name=\"tipo_cuenta\" class=\"form-control\" placeholder=\"Tipo de cuenta\" [(ngModel)]=\"banco.tipo_cuenta\">\r\n                            <!-- <span class=\"help-block\">Please enter your password</span> -->\r\n                          </div>\r\n                        </form>\r\n                        \r\n                      </div>\r\n                      <div class=\"card-footer\">\r\n                        <div class=\"row\">\r\n                          <!-- <div class=\"col-md-6\"style=\"margin-top: 7px;\">\r\n                            <strong>Color: </strong> {{color.nombre_color}}\r\n                          </div> -->\r\n                          <div class=\"col-md-12\" style=\"margin-top: 7px; text-align: right;\">\r\n                            <button type=\"button\" title=\"Guardar\" class=\"btn btn2 btn-primary\" (click)=\"editarBanco(banco)\"><i class=\"fa fa-save\"></i></button>\r\n                            <button type=\"button\" title=\"Eliminar\" class=\"btn btn-danger\" (click)=\"aEliminar(banco); myModal.show()\"><i class=\"fa fa-trash\"></i></button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div><!--/.col-->\r\n\r\n\r\n                <div class=\"col-sm-6 col-md-4\">\r\n                  <div (click)=\"myModalBanco.show(); ressetBanco()\" class=\"card text-white bg-info text-center\">\r\n                    <div class=\"card-body\">\r\n                      <blockquote class=\"card-bodyquote\">\r\n                        <p>Agregar nueva cuenta bancaria</p>\r\n                        <footer>\r\n                          (Opción que permite adicionar una nueva cuenta bancaria).\r\n                        </footer>\r\n                      </blockquote>\r\n                    </div>\r\n                  </div>\r\n                </div><!--/.col-->\r\n                \r\n              </div><!--/.row-->\r\n\r\n          </div>\r\n          <!-- <div class=\"card-footer\">\r\n            \r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>  \r\n  \r\n</div>\r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/views/bancos/bancos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BancosComponent; });
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
var BancosComponent = /** @class */ (function () {
    function BancosComponent(http, router, rutaService, fb) {
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.fb = fb;
        this.isModalShown = false;
        this.loading = false;
        this.alerta = false;
        this.alerta_boton = false;
        this.bancos = [];
        this.objAEliminar = {};
        this.myFormAgregarBanco = this.fb.group({
            cuenta: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            titular: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            num_documento: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            tipo_cuenta: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]]
        });
    }
    BancosComponent.prototype.showModal = function () {
        this.isModalShown = true;
    };
    BancosComponent.prototype.hideModal = function () {
        this.autoShownModal.hide();
    };
    BancosComponent.prototype.onHidden = function () {
        this.isModalShown = false;
    };
    BancosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkLogin();
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'bancos?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.bancos = _this.data.bancos;
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
            }
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.alerta_tipo = 'info';
                _this.alerta_msg = msg.error.error;
                _this.alerta = true;
                setTimeout(function () { _this.alerta = false; }, 4000);
            }
        });
    };
    BancosComponent.prototype.checkLogin = function () {
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
    BancosComponent.prototype.ok_alerta = function () {
        this.router.navigate(['pages']);
    };
    BancosComponent.prototype.cerrarAlerta = function () {
        this.alerta = false;
    };
    BancosComponent.prototype.ressetBanco = function () {
        /*this.myFormAgregarBanco.patchValue({cuenta : ''});
        this.myFormAgregarBanco.patchValue({titular : ''});
        this.myFormAgregarBanco.patchValue({email : ''});
        this.myFormAgregarBanco.patchValue({num_documento : ''});
        this.myFormAgregarBanco.patchValue({tipo_cuenta : ''});*/
        this.myFormAgregarBanco.reset();
    };
    BancosComponent.prototype.agregarBanco = function () {
        var _this = this;
        this.loading = true;
        var datos = {
            token: localStorage.getItem('luvas_token'),
            cuenta: this.myFormAgregarBanco.value.cuenta,
            titular: this.myFormAgregarBanco.value.titular,
            email: this.myFormAgregarBanco.value.email,
            num_documento: this.myFormAgregarBanco.value.num_documento,
            tipo_cuenta: this.myFormAgregarBanco.value.tipo_cuenta
        };
        this.http.post(this.rutaService.getRutaApi() + 'bancos', datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.banco = _this.data.banco;
            _this.bancos.push(_this.banco);
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
    BancosComponent.prototype.editarBanco = function (banco) {
        var _this = this;
        console.log(banco);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('luvas_token'),
            cuenta: banco.cuenta,
            titular: banco.titular,
            email: banco.email,
            num_documento: banco.num_documento,
            tipo_cuenta: banco.tipo_cuenta
        };
        this.http.put(this.rutaService.getRutaApi() + 'bancos/' + banco.id, datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
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
    BancosComponent.prototype.aEliminar = function (banco) {
        this.objAEliminar = banco;
        this.eliminar_id = banco.id;
        console.log(banco);
    };
    BancosComponent.prototype.eliminar = function () {
        var _this = this;
        console.log(this.objAEliminar);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('luvas_token')
        };
        this.http.delete(this.rutaService.getRutaApi() + 'bancos/' + this.eliminar_id + '?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            var aux = _this.bancos;
            _this.bancos = [];
            for (var i = 0; i < aux.length; ++i) {
                if (aux[i].id != _this.eliminar_id) {
                    _this.bancos.push(aux[i]);
                }
            }
            _this.eliminar_id = null;
            _this.objAEliminar = {};
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('autoShownModal'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
    ], BancosComponent.prototype, "autoShownModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myModal'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _b || Object)
    ], BancosComponent.prototype, "myModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myModalBanco'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _c || Object)
    ], BancosComponent.prototype, "myModalBanco", void 0);
    BancosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bancos',
            template: __webpack_require__("../../../../../src/app/views/bancos/bancos.component.html"),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].Default,
            styles: [__webpack_require__("../../../../../src/app/views/bancos/bancos.css")]
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_ruta_service_ruta_service__["a" /* RutaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_ruta_service_ruta_service__["a" /* RutaService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]) === "function" && _g || Object])
    ], BancosComponent);
    return BancosComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=bancos.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/bancos/bancos.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn { \r\n\tbackground-color: #c71717 !important;\r\n\tborder: 1px solid  #c71717 !important;\r\n} \r\n\r\n.btn2 { \r\n\tbackground-color: #424242 !important;\r\n\tborder: 1px solid  #424242 !important;\r\n} \r\n\r\n/*switche*/\r\n.switch-primary > .switch-input:checked ~ .switch-label{\r\n\tbackground: #28a745 !important;\r\n    border-color: #28a745;\r\n}\r\n\r\n.btn3{\r\n\tbackground-color: #181e21  !important;\r\n\tborder: 1px solid  #181e21 !important;\r\n\tmargin-top: 4px;\r\n}\r\n\r\n.btn4{\r\n\tbackground-color: #000000  !important;\r\n\tborder: 1px solid  #000000 !important;\r\n\tcolor: #ffffff;\r\n}\r\n\r\n.alertaC{\r\n\tposition: fixed !important;\r\n    z-index: 999 !important;\r\n    top: 70px !important;\r\n    right: 10px !important;\r\n}\r\n\r\n.danger{\r\n\tcolor: #c71717 !important;\r\n\tfont-weight: bold;\r\n\tmargin-top: 5px;\r\n}\r\n\r\n/*Loading*/\r\n.backdrop[_ngcontent-c1]{\r\n\tposition: fixed !important;\r\n}\r\n\r\n/*Paginacion de la tabla*/\r\n.pagination li.active a {\r\n\tbackground-color: #29363d;\r\n    border-color: #29363d;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/bancos/bancos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BancosModule", function() { return BancosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bancos_component__ = __webpack_require__("../../../../../src/app/views/bancos/bancos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bancos_routing_module__ = __webpack_require__("../../../../../src/app/views/bancos/bancos-routing.module.ts");
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
var BancosModule = /** @class */ (function () {
    function BancosModule() {
    }
    BancosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                //NgxPermissionsModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot(),
                //Ng2UploaderModule,
                __WEBPACK_IMPORTED_MODULE_4__bancos_routing_module__["a" /* BancosRoutingModule */],
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
            declarations: [__WEBPACK_IMPORTED_MODULE_3__bancos_component__["a" /* BancosComponent */]]
        })
    ], BancosModule);
    return BancosModule;
}());

//# sourceMappingURL=bancos.module.js.map

/***/ })

});
//# sourceMappingURL=bancos.module.chunk.js.map