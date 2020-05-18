webpackJsonp(["clientes.module"],{

/***/ "../../../../../src/app/views/clientes/clientes-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clientes_component__ = __webpack_require__("../../../../../src/app/views/clientes/clientes.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__clientes_component__["a" /* ClientesComponent */],
        data: {
            title: 'Clientes'
        }
    }
];
var ClientesRoutingModule = /** @class */ (function () {
    function ClientesRoutingModule() {
    }
    ClientesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ClientesRoutingModule);
    return ClientesRoutingModule;
}());

//# sourceMappingURL=clientes-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/clientes/clientes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alertaC\" *ngIf=\"alerta\">\r\n  <alert  [type]=\"alerta_tipo\" dismissible=\"true\" close=\"cerrarAlerta()\">\r\n    <strong>{{alerta_msg}}</strong> \r\n  </alert>\r\n</div>\r\n\r\n<div class=\"alertaC\" *ngIf=\"alerta_boton\">\r\n  <alert [type]=\"alerta_tipo\" >\r\n    <strong>{{alerta_msg}}</strong>\r\n    <button type=\"button\" class=\"btn btn4 btn-secondary\" (click)=\"ok_alerta()\">ok</button> \r\n  </alert>\r\n</div>\r\n\r\n<div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Eliminar cliente </h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>¿ Realmente desea eliminar el cliente {{eliminar_user}} ?</p>\r\n        <p><i class=\"fa fa-warning\"></i> Se eliminará el cliente y sus pedidos.</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn4 btn-secondary\" (click)=\"myModal.hide()\">Cancelar</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"myModal.hide(); eliminar()\"><i class=\"fa fa-trash\"></i>&nbsp; Eliminar</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div class=\"animated fadeIn\" *ngIf=\"!editando && mostrar\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card-header\">\r\n\t            <div class=\"row\">\r\n\t              <div class=\"col-md-6\" style=\"margin-top: 7px;\">\r\n                   <strong>Lista de Clientes</strong>\r\n                </div>\r\n            \t</div>\r\n          \t</div>  \r\n            <div class=\"card-body \">\r\n\r\n            \t<div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                     <strong>Buscar: </strong>\r\n                     <input  type=\"text\"  id=\"inputName\" [(ngModel)]=\"inputName\" (ngModelChange)=\"FilterByName()\"/>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              <table class=\"table table-striped\">\r\n                <thead>\r\n                   <th></th>\r\n                   <!-- <th style=\"text-align: center;\">ID</th> -->\r\n                   <th style=\"text-align: center;\">Nombre</th>\r\n                   <th style=\"text-align: center;\">Email</th>\r\n                   <th style=\"text-align: center;\">Teléfono</th>\r\n                   <th style=\"text-align: center;\">Alta</th>\r\n                   <th style=\"text-align: center;\">Acciones</th>\r\n                </thead>\r\n                <tbody>\r\n                   <tr *ngFor=\"let item of items\" >\r\n                      <td></td>\r\n                      <!-- <td style=\"text-align: center;\">{{item.id}}</td> -->\r\n                      <td style=\"text-align: center;\">{{item.nombre}}</td>\r\n                      <td style=\"text-align: center;\">{{item.email}}</td>\r\n                      <td style=\"text-align: center;\">{{item.telefono}}</td>\r\n                      <td style=\"text-align: center;\">{{item.fecha}}</td>\r\n                      <td style=\"text-align: center;\">\r\n                        <button type=\"button\" class=\"btn btn2 btn-primary\" (click)=\"ver(item)\"><i class=\"fa fa-eye\"></i>&nbsp; Ver</button>\r\n                        <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" (click)=\"myModal.show(); aEliminar(item)\"><i class=\"fa fa-trash\"></i>&nbsp; Eliminar</button>\r\n                      </td>\r\n                   </tr>\r\n                </tbody>\r\n              </table>\r\n                <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\r\n                  <div class=\"btn-group\">\r\n                     <label style=\"margin-top:10px\">Página {{currentIndex}}/{{pageNumber}} </label>\r\n                  </div>\r\n                  <div class=\"btn-group pull-right\">\r\n                     <ul class=\"pagination\" >\r\n                        <li [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a  (click)=\"prevPage()\" >Atrás</a></li>\r\n                           <li *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\r\n                              <a (click)=\"setPage(page)\"  >{{page}} </a>\r\n                           </li>\r\n                        <li [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a   (click)=\"nextPage()\" >Siguiente</a></li>\r\n                     </ul>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"animated fadeIn\" *ngIf=\"editando\">\r\n  <div class=\"row\">\r\n    <!-- <div class=\"col-md-10\" style=\"display:block; margin:auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Detelle de:</strong> {{selectedCliente.user}}\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-user-o\"></i></span>\r\n                  <input type=\"text\" id=\"input1-group1\" name=\"input1-group1\" class=\"form-control\" placeholder=\"Usuario\" [(ngModel)]=\"selectedCliente.user\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\r\n                  <input type=\"text\" id=\"input2-group1\" name=\"input2-group1\" class=\"form-control\" placeholder=\"Nombre\" [(ngModel)]=\"selectedCliente.nombre\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-envelope-o\"></i></span>\r\n                  <input type=\"email\" id=\"input3-group1\" name=\"input3-group1\" class=\"form-control\" placeholder=\"Correo\" [(ngModel)]=\"selectedCliente.correo\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-phone\"></i></span>\r\n                  <input type=\"text\" id=\"input4-group1\" name=\"input4-group1\" class=\"form-control\" placeholder=\"Teléfono\" [(ngModel)]=\"selectedCliente.telefono\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button class=\"btn btn4 btn-sm btn-secondary\" (click)=\"atras()\"><i class=\"fa fa-arrow-left\"></i> Atrás</button>\r\n          \r\n        </div>\r\n      </div>\r\n    </div> -->\r\n\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card card-accent-primary\">\r\n        <div class=\"card-header\">\r\n          <strong><i class=\"icon-user\"></i> Cliente</strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\r\n            <div class=\"form-group row grupos\">\r\n\r\n              <label class=\"col-md-3 form-control-label etiquetas\">Nombre</label>\r\n              <div class=\"col-md-9\">\r\n                <p class=\"form-control-static\">{{selectedCliente.nombre}}</p>\r\n              </div>\r\n\r\n              <label class=\"col-md-3 form-control-label etiquetas\">Email</label>\r\n              <div class=\"col-md-9\">\r\n                <p class=\"form-control-static\">{{selectedCliente.email}}</p>\r\n              </div>\r\n\r\n              <label class=\"col-md-3 form-control-label etiquetas\">Teléfono</label>\r\n              <div class=\"col-md-9\">\r\n                <p class=\"form-control-static\">{{selectedCliente.telefono}}</p>\r\n              </div>\r\n\r\n              <label class=\"col-md-3 form-control-label etiquetas\">Dirección</label>\r\n              <div class=\"col-md-9\">\r\n                <p class=\"form-control-static\">{{selectedCliente.direccion}}</p>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button class=\"btn btn4 btn-sm btn-secondary\" (click)=\"atras()\"><i class=\"fa fa-arrow-left\"></i> Atrás</button>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\r\n</div>\r\n\r\n "

/***/ }),

/***/ "../../../../../src/app/views/clientes/clientes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ruta_service_ruta_service__ = __webpack_require__("../../../../../src/app/services/ruta-service/ruta.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import {NgxPermissionsService, NgxRolesService} from 'ngx-permissions';
var ClientesComponent = /** @class */ (function () {
    function ClientesComponent(http, router, rutaService) {
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.loading = false;
        this.editando = false;
        this.mostrar = true;
        this.prueba = 'prueba binding';
        this.alerta = false;
        this.alerta_boton = false;
        this.pages = 4;
        this.pageSize = 5;
        this.pageNumber = 0;
        this.currentIndex = 1;
        this.pageStart = 1;
        this.inputName = '';
    }
    ClientesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkLogin();
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'usuarios/clientes?token=' + localStorage.getItem('luvas_token'))
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
            for (var i = 0; i < _this.data.clientes.length; i++) {
                fecha = new Date(_this.data.clientes[i].created_at);
                //this.data.clientes[i].created_at = new Date(this.data.clientes[i].created_at);
                dia = fecha.getDate();
                mes = fecha.getMonth() + 1;
                anio = fecha.getFullYear();
                hora = fecha.getHours();
                minutos = fecha.getMinutes();
                segundos = fecha.getSeconds();
                _this.data.clientes[i].fecha = dia + '/' + mes + '/' + anio;
                _this.data.clientes[i].hora = hora + ':' + minutos + ':' + segundos;
                /*console.log('created_at '+this.data.clientes[i].created_at);
                console.log('fecha '+fecha);
                console.log('dia '+dia);
                console.log('mes '+mes);
                console.log('anio '+anio);*/
            }
            setTimeout(function () {
                _this.productList = _this.data.clientes;
                _this.filteredItems = _this.productList;
                //console.log(this.productList);
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
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.alerta_tipo = 'info';
                _this.alerta_msg = msg.error.error;
                _this.alerta = true;
                setTimeout(function () { _this.alerta = false; }, 4000);
            }
        });
    };
    ClientesComponent.prototype.checkLogin = function () {
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
    ClientesComponent.prototype.ok_alerta = function () {
        this.router.navigate(['luvas']);
    };
    ClientesComponent.prototype.cerrarAlerta = function () {
        this.alerta = false;
    };
    ClientesComponent.prototype.ver = function (cliente) {
        this.editando = true;
        this.selectedCliente = cliente;
        console.log(this.selectedCliente);
    };
    ClientesComponent.prototype.aEliminar = function (cliente) {
        this.clienteAEliminar = cliente;
        //console.log(this.clienteAEliminar);
        //console.log(this.clienteAEliminar.user);
        this.eliminar_id = this.clienteAEliminar.id;
        this.eliminar_user = this.clienteAEliminar.nombre;
        //this.myModal.show();
    };
    ClientesComponent.prototype.eliminar = function () {
        var _this = this;
        //this.selectedCliente = cliente;
        console.log(this.clienteAEliminar);
        //this.myModal.show();
        this.loading = true;
        var datos = {
            token: localStorage.getItem('luvas_token')
        };
        this.http.delete(this.rutaService.getRutaApi() + 'usuarios/' + this.eliminar_id + '?token=' + localStorage.getItem('luvas_token'))
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
    ClientesComponent.prototype.eliminarModal = function () {
        this.loading = true;
        //this.myModal.hide();
    };
    ClientesComponent.prototype.atras = function () {
        this.editando = false;
        this.selectedCliente = null;
        console.log(this.selectedCliente);
    };
    ClientesComponent.prototype.init = function () {
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
    ClientesComponent.prototype.FilterByName = function () {
        this.filteredItems = [];
        if (this.inputName != "") {
            for (var i = 0; i < this.productList.length; ++i) {
                if (this.productList[i].nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].email.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].telefono.indexOf(this.inputName) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].fecha.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
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
    ClientesComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    ClientesComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    ClientesComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    ClientesComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    ClientesComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    ClientesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-clientes',
            template: __webpack_require__("../../../../../src/app/views/clientes/clientes.component.html"),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].Default,
            styles: [__webpack_require__("../../../../../src/app/views/clientes/clientes.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_ruta_service_ruta_service__["a" /* RutaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_ruta_service_ruta_service__["a" /* RutaService */]) === "function" && _c || Object])
    ], ClientesComponent);
    return ClientesComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=clientes.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/clientes/clientes.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn { \r\n\tbackground-color: #c71717 !important;\r\n\tborder: 1px solid  #c71717 !important;\r\n} \r\n\r\n.btn2 { \r\n\tbackground-color: #424242 !important;\r\n\tborder: 1px solid  #424242 !important;\r\n} \r\n\r\n/*switche*/\r\n.switch-primary > .switch-input:checked ~ .switch-label{\r\n\tbackground: #28a745 !important;\r\n    border-color: #28a745;\r\n}\r\n\r\n.btn3{\r\n\tbackground-color: #181e21  !important;\r\n\tborder: 1px solid  #181e21 !important;\r\n\tmargin-top: 4px;\r\n}\r\n\r\n.btn4{\r\n\tbackground-color: #000000  !important;\r\n\tborder: 1px solid  #000000 !important;\r\n\tcolor: #ffffff;\r\n}\r\n\r\n.alertaC{\r\n\tposition: fixed !important;\r\n    z-index: 999 !important;\r\n    top: 70px !important;\r\n    right: 10px !important;\r\n}\r\n\r\n.danger{\r\n\tcolor: #c71717 !important;\r\n\tfont-weight: bold;\r\n\tmargin-top: 5px;\r\n}\r\n\r\n/*Loading*/\r\n.backdrop[_ngcontent-c1]{\r\n\tposition: fixed !important;\r\n}\r\n\r\n/*Paginacion de la tabla*/\r\n.pagination li.active a {\r\n\tbackground-color: #29363d;\r\n    border-color: #29363d;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/clientes/clientes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesModule", function() { return ClientesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clientes_component__ = __webpack_require__("../../../../../src/app/views/clientes/clientes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clientes_routing_module__ = __webpack_require__("../../../../../src/app/views/clientes/clientes-routing.module.ts");
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
var ClientesModule = /** @class */ (function () {
    function ClientesModule() {
    }
    ClientesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                //NgxPermissionsModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot(),
                //Ng2UploaderModule,
                __WEBPACK_IMPORTED_MODULE_4__clientes_routing_module__["a" /* ClientesRoutingModule */],
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
            declarations: [__WEBPACK_IMPORTED_MODULE_3__clientes_component__["a" /* ClientesComponent */]]
        })
    ], ClientesModule);
    return ClientesModule;
}());

//# sourceMappingURL=clientes.module.js.map

/***/ })

});
//# sourceMappingURL=clientes.module.chunk.js.map