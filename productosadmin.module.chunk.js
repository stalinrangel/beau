webpackJsonp(["productosadmin.module"],{

/***/ "../../../../../src/app/views/productosadmin/productosadmin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosAdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productosadmin_component__ = __webpack_require__("../../../../../src/app/views/productosadmin/productosadmin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__productosadmin_component__["a" /* ProductosAdminComponent */],
        data: {
            title: 'Productos'
        }
    }
];
var ProductosAdminRoutingModule = /** @class */ (function () {
    function ProductosAdminRoutingModule() {
    }
    ProductosAdminRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ProductosAdminRoutingModule);
    return ProductosAdminRoutingModule;
}());

//# sourceMappingURL=productosadmin-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/productosadmin/productosadmin.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <alert type=\"success\" dismissible=\"true\">\r\n  <strong>Well done!</strong> You successfully read this important alert message.\r\n</alert>\r\n -->\r\n\r\n<div class=\"alertaC\" *ngIf=\"alerta\">\r\n  <alert  [type]=\"alerta_tipo\" dismissible=\"true\" close=\"cerrarAlerta()\">\r\n    <strong>{{alerta_msg}}</strong> \r\n  </alert>\r\n</div>\r\n\r\n<div class=\"alertaC\" *ngIf=\"alerta_boton\">\r\n  <alert [type]=\"alerta_tipo\" >\r\n    <strong>{{alerta_msg}}</strong>\r\n    <button type=\"button\" class=\"btn btn4 btn-secondary\" (click)=\"ok_alerta()\">ok</button> \r\n  </alert>\r\n</div>\r\n\r\n<!-- Modal para eliminar producto/color/atributo -->\r\n<div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Eliminar {{eliminar_entidad}} </h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>¿ Realmente desea eliminar el {{eliminar_entidad}} {{eliminar_nombre}} ?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn4 btn-secondary\" (click)=\"myModal.hide()\">Cancelar</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"myModal.hide(); eliminarEvaluar()\"><i class=\"fa fa-trash\"></i>&nbsp; Eliminar</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<!-- Modal para agregar/editar color -->\r\n<div bsModal #myModalColor=\"bs-modal\" [config]=\"{ ignoreBackdropClick: true, keyboard: false }\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 *ngIf=\"varAccion == 1\" class=\"modal-title\">Agregar color </h4>\r\n        <h4 *ngIf=\"varAccion == 2\" class=\"modal-title\">Editar color </h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"myModalColor.hide();resetColor()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"myFormColor\" novalidate class=\"form-horizontal\">\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 form-control-label\" for=\"nombre_color\">Nombre</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"nombre_color\" name=\"nombre_color\" class=\"form-control\" placeholder=\"Nombre\" formControlName=\"nombre_color\">\r\n                <div *ngIf=\"myFormColor.get('nombre_color').errors && myFormColor.get('nombre_color').dirty\">\r\n                  <span class=\"danger\" color=\"danger\" *ngIf=\"myFormColor.get('nombre_color').hasError('required')\">Nombre es requerido</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 form-control-label\" for=\"codigo_color\">Código</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"codigo_color\" name=\"codigo_color\" class=\"form-control\" placeholder=\"Código\" formControlName=\"codigo_color\">\r\n                <div *ngIf=\"myFormColor.get('codigo_color').errors && myFormColor.get('codigo_color').dirty\">\r\n                  <span class=\"danger\" color=\"danger\" *ngIf=\"myFormColor.get('codigo_color').hasError('required')\">Código es requerido</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <br>\r\n              <label class=\"col-md-3 form-control-label\" for=\"imagen\">Imagen(es)</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"file\" name=\"imagen\" id=\"imagen\" (change)=\"onFileChange($event)\" #fileInput accept=\"image/*\">\r\n\r\n                <br>\r\n                <br>\r\n                <p style=\"color: #c71717\"><b>Sugerencia:</b> La dimensión de la imagen no debe ser mayor a 870x370 px.</p>\r\n\r\n                <br>\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"removerImg()\"> Remover archivo</button>\r\n          \r\n                <br>\r\n                <br>\r\n                <!-- <div *ngFor = \"let imagen of imagenes_color\">\r\n                  <img src = \"{{imagen.src}}\" class=\"img-table\" height=\"70px\" width=\"100px\" (click)=\"clearFile(imagen)\">\r\n                </div> -->\r\n\r\n                <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn4 btn-secondary\" (click)=\"myModalColor.hide(); resetColor()\">Cancelar</button>\r\n        <button *ngIf=\"varAccion == 1\" [disabled]=\"myFormColor.invalid || galleryImages.length == 0\" type=\"button\" class=\"btn btn-danger\" (click)=\"myModalColor.hide(); agregarColor()\"><i class=\"fa fa-dot-circle-o\"></i>&nbsp; Crear</button>\r\n        <button *ngIf=\"varAccion == 2\" [disabled]=\"myFormColor.invalid || galleryImages.length == 0\" type=\"button\" class=\"btn btn-danger\" (click)=\"myModalColor.hide(); editarColor()\"><i class=\"fa fa-dot-circle-o\"></i>&nbsp; Guardar</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<!-- Modal para agregar atributo -->\r\n<div bsModal #myModalAtributo=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Agregar medida </h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"myModalAtributo.hide();cancelAtributo()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"myFormAgregarAtri\" novalidate>\r\n          <div class=\"form-group\">\r\n            <label for=\"cantidad\">Cantidad</label>\r\n            <input type=\"number\" id=\"cantidad\" name=\"cantidad\" class=\"form-control\" placeholder=\"Cantidad\" formControlName=\"cantidad\">\r\n            <div *ngIf=\"myFormAgregarAtri.get('cantidad').errors && myFormAgregarAtri.get('cantidad').dirty\">\r\n              <span class=\"help-block danger\" color=\"danger\" *ngIf=\"myFormAgregarAtri.get('cantidad').hasError('required')\">Cantidad es requerido</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"atributo\">Opción de compra o Medidas</label>\r\n            <input type=\"text\" id=\"atributo\" name=\"atributo\" class=\"form-control\" placeholder=\"S,M,39,40\" formControlName=\"atributo\">\r\n            <div *ngIf=\"myFormAgregarAtri.get('atributo').errors && myFormAgregarAtri.get('atributo').dirty\">\r\n              <span class=\"help-block danger\" color=\"danger\" *ngIf=\"myFormAgregarAtri.get('atributo').hasError('required')\">Medida es requerido</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"precio\">Precio ($)</label>\r\n            <input type=\"number\" id=\"precio\" name=\"precio\" class=\"form-control\" placeholder=\"Precio ($)\" formControlName=\"precio\">\r\n            <div *ngIf=\"myFormAgregarAtri.get('precio').errors && myFormAgregarAtri.get('precio').dirty\">\r\n              <span class=\"help-block danger\" color=\"danger\" *ngIf=\"myFormAgregarAtri.get('precio').hasError('required')\">Precio es requerido</span>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn4 btn-secondary\" (click)=\"myModalAtributo.hide(); cancelAtributo()\">Cancelar</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"myModalAtributo.hide(); agregarAtributo()\" [disabled]=\"myFormAgregarAtri.invalid\"><i class=\"fa fa-dot-circle-o\"></i>&nbsp; Crear</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div class=\"animated fadeIn\" *ngIf=\"!editando && !agregando && mostrar\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card-header\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\" style=\"margin-top: 7px;\">\r\n                   <strong>Lista de Productos</strong>\r\n                </div>\r\n                <div class=\"col-md-6\" style=\"text-align: right;\">\r\n                  <button type=\"button\" class=\"btn btn3 btn-primary\" (click)=\"agregar()\"><i class=\"fa fa-plus-square-o\"></i>&nbsp; Agregar Producto</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body \">\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"form-group\">\r\n                   <strong>Buscar: </strong>\r\n                   <input type=\"text\"  id=\"inputName\" [(ngModel)]=\"inputName\" (ngModelChange)=\"FilterByName()\"/>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <table class=\"table\">\r\n                <thead>\r\n                   <!-- <th></th> -->\r\n                   <!-- <th style=\"text-align: center;\">ID</th> -->\r\n                   <!-- <th style=\"text-align: center;\">Imagen</th> -->\r\n                   <th style=\"text-align: center;\">Nombre</th>\r\n                   <th style=\"text-align: center;\">Categoría</th>\r\n                   <th style=\"text-align: center;\">Estado</th>\r\n                   <th style=\"text-align: center;\">Acciones</th>\r\n                </thead>\r\n                <tbody>\r\n                   <tr *ngFor=\"let item of items\" >\r\n                      <!-- <td></td> -->\r\n                      <!-- <td style=\"text-align: center; vertical-align:middle;\">{{item.id}}</td> -->\r\n                      <!-- <td style=\"text-align: center; vertical-align:middle;\"><img src = \"{{item.imagen}}\" class=\"img-table\" height=\"50px\" width=\"80px\"></td> -->\r\n                      <td style=\"text-align: center; vertical-align:middle;\">{{item.nombre}}</td>\r\n                      <td style=\"text-align: center; vertical-align:middle;\">{{item.categoria.nombre}}</td>\r\n                      <td style=\"text-align: center; vertical-align:middle;\">\r\n                        <div *ngIf=\"mostrarSwiches\">\r\n                        <label class=\"switch switch-text switch-pill switch-primary\">\r\n                          <input [disabled]=\"item.categoria.estado === 'OFF'\" [checked]=\"item.estado === 'ON'\" type=\"checkbox\" class=\"switch-input\" (change)=\"cambiarEstado(item)\" >\r\n                          <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n                          <span class=\"switch-handle\"></span>\r\n                        </label>\r\n                        </div>\r\n                      </td> \r\n                      <td style=\"text-align: center; vertical-align:middle;\">\r\n                        <button type=\"button\" title=\"Editar\" class=\"btn btn2 btn-primary\" (click)=\"aEditar(item)\"><i class=\"fa fa-edit\"></i></button>\r\n                        <button type=\"button\" title=\"Eliminar\" class=\"btn btn-danger\" data-toggle=\"modal\" (click)=\"myModal.show(); aEliminar(item, 1)\"><i class=\"fa fa-trash\"></i></button>\r\n                      </td>\r\n                   </tr>\r\n                </tbody>\r\n              </table>\r\n                <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\r\n                  <div class=\"btn-group\">\r\n                     <label style=\"margin-top:10px\">Página {{currentIndex}}/{{pageNumber}} </label>\r\n                  </div>\r\n                  <div class=\"btn-group pull-right\">\r\n                     <ul class=\"pagination\" >\r\n                        <li [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a  (click)=\"prevPage()\" >Atrás</a></li>\r\n                           <li *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\r\n                              <a (click)=\"setPage(page)\"  >{{page}} </a>\r\n                           </li>\r\n                        <li [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a   (click)=\"nextPage()\" >Siguiente</a></li>\r\n                     </ul>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"animated fadeIn\" *ngIf=\"editando\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10\" style=\"display:block; margin:auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\" style=\"margin-top: 7px;\">\r\n              <strong>Editar producto: </strong> {{objAEditar.nombre}}\r\n            </div>\r\n            <div class=\"col-md-6\" style=\"text-align: right;\">\r\n              <button type=\"button\" class=\"btn btn3 btn-primary\" (click)=\"myModalColor.show(); accionColor(1, 0)\"><i class=\"fa fa-plus-square-o\"></i>&nbsp; Agregar Color</button>\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form [formGroup]=\"myFormEditar\" novalidate class=\"form-horizontal\">\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 form-control-label\" for=\"nombre\">Nombre</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"nombre\" name=\"nombre\" class=\"form-control\" placeholder=\"Nombre\" formControlName=\"nombre\">\r\n                <div *ngIf=\"myFormEditar.get('nombre').errors && myFormEditar.get('nombre').dirty\">\r\n                  <span class=\"danger\" color=\"danger\" *ngIf=\"myFormEditar.get('nombre').hasError('required')\">Nombre es requerido</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"categorias\" class=\"form-group row\">\r\n              <label class=\"col-md-3 form-control-label\" for=\"categoria\">Categoría</label>\r\n              <div class=\"col-md-9\">\r\n                <select id=\"select\" name=\"select\" class=\"form-control\" formControlName=\"categoria_id\" >\r\n                  <option *ngFor=\"let categoria of categorias\" [value]=\"categoria.id\">{{categoria.nombre}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 form-control-label\" for=\"descripcion\">Descripción</label>\r\n              <div class=\"col-md-9\">\r\n              \t<textarea id=\"descripcion\" name=\"descripcion\" rows=\"6\" class=\"form-control\" placeholder=\"Descripción..\" formControlName=\"descripcion\"></textarea>\r\n                <div *ngIf=\"myFormEditar.get('descripcion').errors && myFormEditar.get('descripcion').dirty\">\r\n                  <span class=\"danger\" color=\"danger\" *ngIf=\"myFormEditar.get('descripcion').hasError('required')\">Descripción es requerido</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button  class=\"btn btn4 btn-sm btn-secondary\" (click)=\"atras()\"><i class=\"fa fa-arrow-left\"></i> Atrás</button>\r\n          <button type=\"submit\" class=\"btn btn-sm btn-success\" (click)=\"editar()\" [disabled]=\"myFormEditar.invalid\"><i class=\"fa fa-dot-circle-o\"></i> Guardar</button>\r\n          <!-- <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button> -->\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngFor = \"let color of colores\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-10\" style=\"display:block; margin:auto\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\"style=\"margin-top: 7px;\">\r\n                <strong>Color: </strong> {{color.nombre_color}}\r\n              </div>\r\n              <div class=\"col-md-6\" style=\"margin-top: 7px; text-align: right;\">\r\n                <button type=\"button\" title=\"Editar\" class=\"btn btn2 btn-primary\" (click)=\"myModalColor.show(); accionColor(2, color)\"><i class=\"fa fa-edit\"></i></button>\r\n                <button type=\"button\" title=\"Eliminar\" class=\"btn btn-danger\" (click)=\"myModal.show(); aEliminar(color, 2)\"><i class=\"fa fa-trash\"></i></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6 col-md-4\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                      Imagen Principal\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-12\" style=\"display:block; margin:auto\">\r\n                          <img src = \"{{color.imagen[0].src}}\" height=\"100px\" width=\"130px\" (click)=\"clearFile(imagen)\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div><!--/.col-->\r\n\r\n\r\n                  <div *ngFor = \"let atributo of color.atributos\" class=\"col-sm-6 col-md-4\">\r\n                    <div class=\"card\">\r\n                      <!-- <div class=\"card-header\">\r\n                        \r\n                      </div> -->\r\n                      <div class=\"card-body\">\r\n                        <form >\r\n                          <div class=\"form-group\">\r\n                            <label for=\"cantidad\">Cantidad</label>\r\n                            <input type=\"number\" id=\"cantidad\" name=\"cantidad\" class=\"form-control\" placeholder=\"Cantidad\" [(ngModel)]=\"atributo.cantidad\">\r\n                            <!-- <span class=\"help-block\">Please enter your email</span> -->\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"atributo\">Opción de compra o Medidas</label>\r\n                            <input type=\"text\" id=\"atributo\" name=\"atributo\" class=\"form-control\" placeholder=\"S,M,39,40\" [(ngModel)]=\"atributo.atributo\">\r\n                            <!-- <span class=\"help-block\">Please enter your password</span> -->\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"precio\">Precio ($)</label>\r\n                            <input type=\"number\" id=\"precio\" name=\"precio\" class=\"form-control\" placeholder=\"Precio ($)\" [(ngModel)]=\"atributo.precio\">\r\n                            <!-- <span class=\"help-block\">Please enter your email</span> -->\r\n                          </div>\r\n                        </form>\r\n                        \r\n                      </div>\r\n                      <div class=\"card-footer\">\r\n                        <div class=\"row\">\r\n                          <!-- <div class=\"col-md-6\"style=\"margin-top: 7px;\">\r\n                            <strong>Color: </strong> {{color.nombre_color}}\r\n                          </div> -->\r\n                          <div class=\"col-md-12\" style=\"margin-top: 7px; text-align: right;\">\r\n                            <button type=\"button\" title=\"Guardar\" class=\"btn btn2 btn-primary\" (click)=\"editarAtributo(atributo)\"><i class=\"fa fa-save\"></i></button>\r\n                            <button type=\"button\" title=\"Eliminar\" class=\"btn btn-danger\" (click)=\"myModal.show(); aEliminar(atributo, 3)\"><i class=\"fa fa-trash\"></i></button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div><!--/.col-->\r\n\r\n\r\n                <div class=\"col-sm-6 col-md-4\">\r\n                  <div (click)=\"myModalAtributo.show(); addAtributo(color)\" class=\"card text-white bg-info text-center\">\r\n                    <div class=\"card-body\">\r\n                      <blockquote class=\"card-bodyquote\">\r\n                        <p>Agregar nueva talla, medida o especificación</p>\r\n                        <footer>\r\n                          (Opción que permite adicionar una nueva medida o especificación del producto, cantidad y precio)\r\n                        </footer>\r\n                      </blockquote>\r\n                    </div>\r\n                  </div>\r\n                </div><!--/.col-->\r\n                \r\n              </div><!--/.row-->\r\n\r\n          </div>\r\n          <!-- <div class=\"card-footer\">\r\n            \r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>  \r\n  </div>\r\n</div>\r\n\r\n<div class=\"animated fadeIn\" *ngIf=\"agregando\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10\" style=\"display:block; margin:auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Agregar producto:</strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form [formGroup]=\"myFormAgregar\" novalidate class=\"form-horizontal\">\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 form-control-label\" for=\"nombre\">Nombre</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"nombre\" name=\"nombre\" class=\"form-control\" placeholder=\"Nombre\" formControlName=\"nombre\">\r\n                <div *ngIf=\"myFormAgregar.get('nombre').errors && myFormAgregar.get('nombre').dirty\">\r\n                  <span class=\"danger\" color=\"danger\" *ngIf=\"myFormAgregar.get('nombre').hasError('required')\">Nombre es requerido</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 form-control-label\" for=\"categoria\">Categoría</label>\r\n              <div class=\"col-md-9\">\r\n                <select id=\"select\" name=\"select\" class=\"form-control\" formControlName=\"categoria_id\" >\r\n                  <option *ngFor=\"let categoria of categorias\" [value]=\"categoria.id\">{{categoria.nombre}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 form-control-label\" for=\"descripcion\">Descripción</label>\r\n              <div class=\"col-md-9\">\r\n              \t<textarea id=\"descripcion\" name=\"descripcion\" rows=\"6\" class=\"form-control\" placeholder=\"Descripción..\" formControlName=\"descripcion\"></textarea>\r\n                <div *ngIf=\"myFormAgregar.get('descripcion').errors && myFormAgregar.get('descripcion').dirty\">\r\n                  <span class=\"danger\" color=\"danger\" *ngIf=\"myFormAgregar.get('descripcion').hasError('required')\">Descripción es requerido</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </form>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button class=\"btn btn4 btn-sm btn-secondary\" (click)=\"atras()\"><i class=\"fa fa-arrow-left\"></i> Atrás</button>\r\n          <button type=\"submit\" class=\"btn btn-sm btn-success\" (click)=\"crear()\" [disabled]=\"myFormAgregar.invalid\"><i class=\"fa fa-dot-circle-o\"></i> Crear</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/views/productosadmin/productosadmin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ruta_service_ruta_service__ = __webpack_require__("../../../../../src/app/services/ruta-service/ruta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_gallery__);
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

var ProductosAdminComponent = /** @class */ (function () {
    function ProductosAdminComponent(http, router, rutaService, fb) {
        /*if (localStorage.getItem('constructora_user_tipo') != '0') {
            this.router.navigate(['dashboard']);
        }*/
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.fb = fb;
        this.isModalShown = false;
        this.colores = [];
        this.cantidad_atri = 0;
        this.atributo_atri = '';
        this.precio_atri = 0;
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
        this.subiendoImg = false; //borrar
        this.mostrarSwiches = true;
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
            categoria_id: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            descripcion: ['']
        });
        this.myFormEditar = this.fb.group({
            id: [''],
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            categoria_id: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            descripcion: ['']
        });
        this.myFormAgregarAtri = this.fb.group({
            atributo: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            precio: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            cantidad: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            color_id: [''],
            producto_id: ['']
        });
        this.myFormColor = this.fb.group({
            id: [0],
            nombre_color: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            codigo_color: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]]
        });
        this.galleryOptions = [
            {
                width: '400px',
                height: '200px',
                thumbnailsColumns: 4,
                imageAnimation: __WEBPACK_IMPORTED_MODULE_7_ngx_gallery__["NgxGalleryAnimation"].Slide
            },
            // max-width 800
            {
                breakpoint: 600,
                width: '100%',
                height: '400px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 200
            {
                breakpoint: 200,
                preview: false
            }
        ];
        this.galleryImages = [];
    }
    ProductosAdminComponent.prototype.showModal = function () {
        this.isModalShown = true;
    };
    ProductosAdminComponent.prototype.hideModal = function () {
        this.autoShownModal.hide();
    };
    ProductosAdminComponent.prototype.onHidden = function () {
        this.isModalShown = false;
    };
    ProductosAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkLogin();
        this.getCategorias();
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'productos?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.productList = _this.data.productos;
            _this.filteredItems = _this.productList;
            //console.log(this.productList);
            _this.init();
            _this.loading = false;
        }, function (msg) {
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
    ProductosAdminComponent.prototype.checkLogin = function () {
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
    ProductosAdminComponent.prototype.getCategorias = function () {
        var _this = this;
        this.http.get(this.rutaService.getRutaApi() + 'categorias/habilitadas?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data2 = data;
            _this.categorias = _this.data2.categorias;
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
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
    //Alerta cuando se vence el token
    ProductosAdminComponent.prototype.ok_alerta = function () {
        this.router.navigate(['pages']);
    };
    ProductosAdminComponent.prototype.cerrarAlerta = function () {
        this.alerta = false;
    };
    ProductosAdminComponent.prototype.aEditar = function (obj) {
        this.editando = true;
        this.objAEditar = Object.assign({}, obj);
        console.log(this.objAEditar);
        this.myFormEditar.patchValue({ id: this.objAEditar.id });
        this.myFormEditar.patchValue({ nombre: this.objAEditar.nombre });
        this.myFormEditar.patchValue({ categoria_id: this.objAEditar.categoria_id });
        this.myFormEditar.patchValue({ descripcion: this.objAEditar.descripcion });
        this.getColoresProducto();
    };
    ProductosAdminComponent.prototype.getColoresProducto = function () {
        var _this = this;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'colores/producto/' + this.objAEditar.id + '?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data2 = data;
            _this.colores = _this.data2.colores;
            for (var i = 0; i < _this.colores.length; ++i) {
                _this.colores[i].imagen = JSON.parse(_this.colores[i].imagen);
            }
            _this.loading = false;
        }, function (msg) {
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
                _this.colores = [];
            }
        });
    };
    ProductosAdminComponent.prototype.atras = function () {
        this.mostrar = true;
        this.editando = false;
        this.agregando = false;
        this.objAEditar = null;
        //console.log(this.objAEditar);
        this.objAAgregar.nombre = '';
        this.objAAgregar.imagen = '';
        //this.uploadFile = null;
        this.myFormAgregar.reset();
        this.myFormEditar.reset();
        this.myFormColor.reset();
        this.colores = [];
    };
    ProductosAdminComponent.prototype.aEliminar = function (obj, option) {
        this.objAEliminar = obj;
        console.log(this.objAEliminar);
        this.eliminar_id = this.objAEliminar.id;
        //this.eliminar_nombre = this.objAEliminar.nombre;
        this.eliminar_option = option;
        if (option == 1) {
            this.eliminar_entidad = 'producto';
            this.eliminar_nombre = this.objAEliminar.nombre;
        }
        else if (option == 2) {
            this.eliminar_entidad = 'color';
            this.eliminar_nombre = this.objAEliminar.nombre_color;
        }
        else if (option == 3) {
            this.eliminar_entidad = 'atributo';
            this.eliminar_nombre = this.objAEliminar.atributo;
        }
    };
    ProductosAdminComponent.prototype.eliminarEvaluar = function () {
        if (this.eliminar_option == 1) {
            this.eliminarProducto();
        }
        else if (this.eliminar_option == 2) {
            this.eliminarColor();
        }
        else if (this.eliminar_option == 3) {
            this.eliminarAtributo();
        }
    };
    ProductosAdminComponent.prototype.eliminarProducto = function () {
        var _this = this;
        console.log(this.objAEliminar);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('luvas_token')
        };
        this.http.delete(this.rutaService.getRutaApi() + 'productos/' + this.eliminar_id + '?token=' + localStorage.getItem('luvas_token'))
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
    ProductosAdminComponent.prototype.eliminarColor = function () {
        var _this = this;
        console.log(this.objAEliminar);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('luvas_token')
        };
        this.http.delete(this.rutaService.getRutaApi() + 'colores/' + this.eliminar_id + '?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            var aux = _this.colores;
            _this.colores = [];
            for (var i = 0; i < aux.length; ++i) {
                if (aux[i].id != _this.eliminar_id) {
                    _this.colores.push(aux[i]);
                }
            }
            //console.log(this.productList);
            //alert(this.data.message);
            _this.loading = false;
            _this.alerta_tipo = 'success';
            _this.alerta_msg = _this.data.message;
            _this.alerta = true;
            setTimeout(function () { _this.alerta = false; }, 4000);
        }, function (msg) {
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
    ProductosAdminComponent.prototype.eliminarAtributo = function () {
        var _this = this;
        console.log(this.objAEliminar);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('luvas_token')
        };
        this.http.delete(this.rutaService.getRutaApi() + 'atributos/' + this.eliminar_id + '?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            for (var i = 0; i < _this.colores.length; i++) {
                if (_this.colores[i].id == _this.objAEliminar.color_id) {
                    var aux = _this.colores[i].atributos;
                    _this.colores[i].atributos = [];
                    for (var j = 0; j < aux.length; ++j) {
                        if (aux[j].id != _this.eliminar_id) {
                            _this.colores[i].atributos.push(aux[i]);
                        }
                    }
                }
            }
            //console.log(this.productList);
            //alert(this.data.message);
            _this.loading = false;
            _this.alerta_tipo = 'success';
            _this.alerta_msg = _this.data.message;
            _this.alerta = true;
            setTimeout(function () { _this.alerta = false; }, 4000);
        }, function (msg) {
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
    ProductosAdminComponent.prototype.agregar = function () {
        var _this = this;
        if (!this.categorias) {
            this.alerta_tipo = 'warning';
            this.alerta_msg = 'No hay categorías disponibles.';
            this.alerta = true;
            setTimeout(function () { _this.alerta = false; }, 4000);
        }
        else {
            this.agregando = true;
        }
    };
    ProductosAdminComponent.prototype.crear = function () {
        var _this = this;
        console.log(this.myFormAgregar.value);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('luvas_token'),
            nombre: this.myFormAgregar.value.nombre,
            categoria_id: this.myFormAgregar.value.categoria_id,
            descripcion: this.myFormAgregar.value.descripcion
        };
        this.http.post(this.rutaService.getRutaApi() + 'productos', datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            if (!_this.productList) {
                _this.productList = [];
            }
            _this.productList.push(_this.data.producto);
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
        }, function (msg) {
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
    ProductosAdminComponent.prototype.editar = function () {
        var _this = this;
        this.loading = true;
        var datos = {
            token: localStorage.getItem('luvas_token'),
            nombre: this.myFormEditar.value.nombre,
            categoria_id: this.myFormEditar.value.categoria_id,
            descripcion: this.myFormEditar.value.descripcion
        };
        this.http.put(this.rutaService.getRutaApi() + 'productos/' + this.myFormEditar.value.id, datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            for (var i = 0; i < _this.productList.length; ++i) {
                if (_this.productList[i].id == _this.myFormEditar.value.id) {
                    _this.productList[i].nombre = _this.myFormEditar.value.nombre;
                    _this.productList[i].descripcion = _this.myFormEditar.value.descripcion;
                    _this.productList[i].categoria_id = _this.myFormEditar.value.categoria_id;
                    if (_this.categorias) {
                        for (var j = 0; j < _this.categorias.length; ++j) {
                            if (_this.myFormEditar.value.categoria_id == _this.categorias[j].id) {
                                _this.productList[i].categoria.id = _this.categorias[j].id;
                                _this.productList[i].categoria.nombre = _this.categorias[j].nombre;
                                _this.productList[i].categoria.estado = _this.categorias[j].estado;
                            }
                        }
                    }
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
    ProductosAdminComponent.prototype.cambiarEstado = function (obj) {
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
        this.http.put(this.rutaService.getRutaApi() + 'productos/' + obj.id, datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            obj.estado = v_estado;
        }, function (msg) {
            console.log(msg);
            //console.log(msg.error.error);
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
    ProductosAdminComponent.prototype.agregarColor = function () {
        var _this = this;
        this.loading = true;
        var imagenes_color = [];
        for (var i = 0; i < this.galleryImages.length; i++) {
            imagenes_color.push({ src: this.galleryImages[i].small });
        }
        var datos = {
            token: localStorage.getItem('luvas_token'),
            nombre_color: this.myFormColor.value.nombre_color,
            codigo_color: this.myFormColor.value.codigo_color,
            producto_id: this.objAEditar.id,
            imagen: JSON.stringify(imagenes_color)
        };
        setTimeout(function () {
            _this.resetColor();
            _this.http.post(_this.rutaService.getRutaApi() + 'colores', datos)
                .toPromise()
                .then(function (data) {
                console.log(data);
                _this.data = data;
                _this.color = _this.data.color;
                _this.color.imagen = JSON.parse(_this.color.imagen);
                _this.color.atributos = [];
                _this.colores.push(_this.color);
                _this.loading = false;
                _this.alerta_tipo = 'success';
                _this.alerta_msg = _this.data.message;
                _this.alerta = true;
                setTimeout(function () { _this.alerta = false; }, 4000);
            }, function (msg) {
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
    ProductosAdminComponent.prototype.resetColor = function () {
        this.myFormColor.reset();
        this.galleryImages = [];
    };
    ProductosAdminComponent.prototype.accionColor = function (accion, color) {
        console.log(color);
        this.galleryImages = [];
        this.varAccion = accion;
        if (color == 0) {
            this.myFormColor.reset();
        }
        else {
            this.myFormColor.patchValue({ id: color.id });
            this.myFormColor.patchValue({ nombre_color: color.nombre_color });
            this.myFormColor.patchValue({ codigo_color: color.codigo_color });
            for (var i = 0; i < color.imagen.length; i++) {
                this.galleryImages.push({
                    small: color.imagen[i].src,
                    medium: color.imagen[i].src,
                    big: color.imagen[i].src
                });
            }
        }
    };
    ProductosAdminComponent.prototype.editarColor = function () {
        var _this = this;
        this.loading = true;
        var imagenes_color = [];
        for (var i = 0; i < this.galleryImages.length; i++) {
            imagenes_color.push({ src: this.galleryImages[i].small });
        }
        var datos = {
            token: localStorage.getItem('luvas_token'),
            nombre_color: this.myFormColor.value.nombre_color,
            codigo_color: this.myFormColor.value.codigo_color,
            imagen: JSON.stringify(imagenes_color)
        };
        this.http.put(this.rutaService.getRutaApi() + 'colores/' + this.myFormColor.value.id, datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            for (var i = 0; i < _this.colores.length; ++i) {
                if (_this.colores[i].id == _this.myFormColor.value.id) {
                    _this.colores[i].nombre_color = _this.myFormColor.value.nombre_color;
                    _this.colores[i].codigo_color = _this.myFormColor.value.codigo_color;
                    _this.colores[i].imagen = imagenes_color;
                }
            }
            setTimeout(function () {
                _this.resetColor();
            }, 100);
            _this.loading = false;
            _this.alerta_tipo = 'success';
            _this.alerta_msg = _this.data.message;
            _this.alerta = true;
            setTimeout(function () { _this.alerta = false; }, 4000);
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            _this.resetColor();
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
    ProductosAdminComponent.prototype.removerImg = function () {
        if (this.galleryImages.length > 0) {
            this.galleryImages.splice(this.galleryImages.length - 1, 1);
        }
    };
    ProductosAdminComponent.prototype.cancelAtributo = function () {
        this.myFormAgregarAtri.patchValue({ atributo: '' });
        this.myFormAgregarAtri.patchValue({ precio: 0 });
        this.myFormAgregarAtri.patchValue({ cantidad: 0 });
        this.myFormAgregarAtri.patchValue({ color_id: '' });
        this.myFormAgregarAtri.patchValue({ producto_id: '' });
    };
    ProductosAdminComponent.prototype.addAtributo = function (color) {
        //console.log(color);
        this.myFormAgregarAtri.patchValue({ atributo: '' });
        this.myFormAgregarAtri.patchValue({ precio: 0 });
        this.myFormAgregarAtri.patchValue({ cantidad: 0 });
        this.myFormAgregarAtri.patchValue({ color_id: color.id });
        this.myFormAgregarAtri.patchValue({ producto_id: color.producto_id });
    };
    ProductosAdminComponent.prototype.agregarAtributo = function () {
        var _this = this;
        this.loading = true;
        var datos = {
            token: localStorage.getItem('luvas_token'),
            atributo: this.myFormAgregarAtri.value.atributo,
            precio: this.myFormAgregarAtri.value.precio,
            cantidad: this.myFormAgregarAtri.value.cantidad,
            color_id: this.myFormAgregarAtri.value.color_id,
            producto_id: this.myFormAgregarAtri.value.producto_id
        };
        this.http.post(this.rutaService.getRutaApi() + 'atributos', datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.atributo = _this.data.atributo;
            for (var i = 0; i < _this.colores.length; i++) {
                if (_this.colores[i].id == _this.myFormAgregarAtri.value.color_id) {
                    _this.colores[i].atributos.push(_this.atributo);
                }
            }
            _this.loading = false;
            _this.alerta_tipo = 'success';
            _this.alerta_msg = _this.data.message;
            _this.alerta = true;
            setTimeout(function () { _this.alerta = false; }, 4000);
        }, function (msg) {
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
    ProductosAdminComponent.prototype.editarAtributo = function (atributo) {
        var _this = this;
        console.log(atributo);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('luvas_token'),
            atributo: atributo.atributo,
            precio: atributo.precio,
            cantidad: atributo.cantidad
        };
        this.http.put(this.rutaService.getRutaApi() + 'atributos/' + atributo.id, datos)
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
    ProductosAdminComponent.prototype.init = function () {
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
    ProductosAdminComponent.prototype.FilterByName = function () {
        this.filteredItems = [];
        if (this.inputName != "") {
            for (var i = 0; i < this.productList.length; ++i) {
                if (this.productList[i].nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].categoria.nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
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
    ProductosAdminComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    ProductosAdminComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    ProductosAdminComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    ProductosAdminComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    ProductosAdminComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    ProductosAdminComponent.prototype.init2 = function () {
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
    ProductosAdminComponent.prototype.FilterByName2 = function () {
        this.filteredItems2 = [];
        if (this.inputName2 != "") {
            for (var i = 0; i < this.productList2.length; ++i) {
                if (this.productList2[i].nombre.toUpperCase().indexOf(this.inputName2.toUpperCase()) >= 0) {
                    this.filteredItems2.push(this.productList2[i]);
                }
                else if (this.productList2[i].costo.toString().indexOf(this.inputName2) >= 0) {
                    this.filteredItems2.push(this.productList2[i]);
                }
                else if (this.productList2[i].cantidad.toString().indexOf(this.inputName2) >= 0) {
                    this.filteredItems2.push(this.productList2[i]);
                }
                else if (this.productList2[i].unidad.toUpperCase().indexOf(this.inputName2.toUpperCase()) >= 0) {
                    this.filteredItems2.push(this.productList2[i]);
                }
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
    ProductosAdminComponent.prototype.fillArray2 = function () {
        var obj = new Array();
        for (var index = this.pageStart2; index < this.pageStart2 + this.pages2; index++) {
            obj.push(index);
        }
        return obj;
    };
    ProductosAdminComponent.prototype.refreshItems2 = function () {
        this.items2 = this.filteredItems2.slice((this.currentIndex2 - 1) * this.pageSize2, (this.currentIndex2) * this.pageSize2);
        this.pagesIndex2 = this.fillArray2();
    };
    ProductosAdminComponent.prototype.prevPage2 = function () {
        if (this.currentIndex2 > 1) {
            this.currentIndex2--;
        }
        if (this.currentIndex2 < this.pageStart2) {
            this.pageStart2 = this.currentIndex2;
        }
        this.refreshItems2();
    };
    ProductosAdminComponent.prototype.nextPage2 = function () {
        if (this.currentIndex2 < this.pageNumber2) {
            this.currentIndex2++;
        }
        if (this.currentIndex2 >= (this.pageStart2 + this.pages2)) {
            this.pageStart2 = this.currentIndex2 - this.pages2 + 1;
        }
        this.refreshItems2();
    };
    ProductosAdminComponent.prototype.setPage2 = function (index) {
        this.currentIndex2 = index;
        this.refreshItems2();
    };
    //Tabla2 Productos de la categoria X---->
    //Carga de img color---<
    ProductosAdminComponent.prototype.subirImagen = function () {
        var _this = this;
        this.loading = true;
        var formModel = this.prepareSave();
        this.http.post(this.rutaService.getRutaApi() + 'imagenes?token=' + localStorage.getItem('luvas_token'), formModel)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.imgUpload = _this.data.imagen;
            //this.imagenes_color.push({src:this.imgUpload});
            _this.galleryImages.push({
                small: _this.imgUpload,
                medium: _this.imgUpload,
                big: _this.imgUpload
            });
            _this.clearFile();
            _this.loading = false;
            //alert(this.data.message);
            _this.alerta_tipo = 'success';
            _this.alerta_msg = _this.data.message;
            _this.alerta = true;
            setTimeout(function () { _this.alerta = false; }, 4000);
        }, function (msg) {
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
    ProductosAdminComponent.prototype.prepareSave = function () {
        var input = new FormData();
        input.append('imagen', this.fileIMG);
        input.append('carpeta', 'colores');
        input.append('url_imagen', this.rutaService.getRutaImages());
        return input;
    };
    ProductosAdminComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            this.fileIMG = event.target.files[0];
            this.subirImagen();
        }
    };
    ProductosAdminComponent.prototype.clearFile = function () {
        this.imgUpload = null;
        this.fileInput.nativeElement.value = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('autoShownModal'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
    ], ProductosAdminComponent.prototype, "autoShownModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myModal'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _b || Object)
    ], ProductosAdminComponent.prototype, "myModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myModalColor'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _c || Object)
    ], ProductosAdminComponent.prototype, "myModalColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myModalAtributo'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _d || Object)
    ], ProductosAdminComponent.prototype, "myModalAtributo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object)
    ], ProductosAdminComponent.prototype, "fileInput", void 0);
    ProductosAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-productosadmin',
            template: __webpack_require__("../../../../../src/app/views/productosadmin/productosadmin.component.html"),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].Default,
            styles: [__webpack_require__("../../../../../src/app/views/productosadmin/productosadmin.css")]
        }),
        __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__services_ruta_service_ruta_service__["a" /* RutaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_ruta_service_ruta_service__["a" /* RutaService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]) === "function" && _j || Object])
    ], ProductosAdminComponent);
    return ProductosAdminComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=productosadmin.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/productosadmin/productosadmin.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-table{\r\n\tborder-radius: 4px;\r\n\t-o-object-fit: cover;\r\n\t   object-fit: cover;\r\n}\r\n\r\n.btn { \r\n\tbackground-color: #c71717 !important;\r\n\tborder: 1px solid  #c71717 !important;\r\n} \r\n\r\n.btn2 { \r\n\tbackground-color: #424242 !important;\r\n\tborder: 1px solid  #424242 !important;\r\n} \r\n\r\n/*switche*/\r\n.switch-primary > .switch-input:checked ~ .switch-label{\r\n\tbackground: #28a745 !important;\r\n    border-color: #28a745;\r\n}\r\n\r\n.btn3{\r\n\tbackground-color: #181e21  !important;\r\n\tborder: 1px solid  #181e21 !important;\r\n\tmargin-top: 4px;\r\n}\r\n\r\n.btn4{\r\n\tbackground-color: #000000  !important;\r\n\tborder: 1px solid  #000000 !important;\r\n\tcolor: #ffffff;\r\n}\r\n\r\n.alertaC{\r\n\tposition: fixed !important;\r\n    z-index: 999 !important;\r\n    top: 70px !important;\r\n    right: 10px !important;\r\n}\r\n\r\n.danger{\r\n\tcolor: #c71717 !important;\r\n\tfont-weight: bold;\r\n\tmargin-top: 5px;\r\n}\r\n\r\n/*Loading*/\r\n.backdrop[_ngcontent-c1]{\r\n\tposition: fixed !important;\r\n}\r\n\r\n/*Paginacion de la tabla*/\r\n.pagination li.active a {\r\n\tbackground-color: #29363d;\r\n    border-color: #29363d;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/productosadmin/productosadmin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosAdminModule", function() { return ProductosAdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__productosadmin_component__ = __webpack_require__("../../../../../src/app/views/productosadmin/productosadmin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productosadmin_routing_module__ = __webpack_require__("../../../../../src/app/views/productosadmin/productosadmin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_alert__ = __webpack_require__("../../../../ngx-bootstrap/alert/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_gallery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Modal Component


//import { Ng2UploaderModule } from 'ng2-uploader';


//import { NgxPermissionsModule } from 'ngx-permissions';

var ProductosAdminModule = /** @class */ (function () {
    function ProductosAdminModule() {
    }
    ProductosAdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_9_ngx_gallery__["NgxGalleryModule"],
                //NgxPermissionsModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot(),
                //Ng2UploaderModule,
                __WEBPACK_IMPORTED_MODULE_4__productosadmin_routing_module__["a" /* ProductosAdminRoutingModule */],
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
            declarations: [__WEBPACK_IMPORTED_MODULE_3__productosadmin_component__["a" /* ProductosAdminComponent */]]
        })
    ], ProductosAdminModule);
    return ProductosAdminModule;
}());

//# sourceMappingURL=productosadmin.module.js.map

/***/ })

});
//# sourceMappingURL=productosadmin.module.chunk.js.map