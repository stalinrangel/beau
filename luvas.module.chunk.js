webpackJsonp(["luvas.module"],{

/***/ "../../../../../src/app/components-luvas/footer-luvas/footer-luvas.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\r\n  <footer class=\"bg6 p-t-45 p-b-43 p-l-45 p-r-45\">\r\n    <div class=\"flex-w p-b-90\">\r\n      <div class=\"w-size6 p-t-30 p-l-15 p-r-15 respon3\">\r\n        <h4 class=\"s-text12 p-b-30\">\r\n          !Compra rápido!\r\n        </h4>\r\n\r\n        <div>\r\n          <p class=\"s-text7 w-size27\">\r\n            ¿Alguna pregunta? Puedes saber de nosotros en el CC Rodeo Plaza Mérida, Venezuela ó nos llamas al (+58) 412 6485409\r\n          </p>\r\n\r\n          <div class=\"flex-m p-t-30\">\r\n            <a href=\"https://www.facebook.com/pg/Beau-419231378917645/posts/\" class=\"fs-18 color1 p-r-20 fa fa-facebook\"></a>\r\n            <a href=\"https://www.instagram.com/beauve_/\" class=\"fs-18 color1 p-r-20 fa fa-instagram\"></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"w-size7 p-t-30 p-l-15 p-r-15 respon4\">\r\n        <h4 class=\"s-text12 p-b-30\">\r\n          Categorias\r\n        </h4>\r\n\r\n        <ul *ngFor=\"let categoria of categorias\">\r\n          <li class=\"p-b-9\">\r\n            <a routerLinkActive=\"active\" [routerLink]=\"\" (click)=\"selectCategoria(categoria)\" class=\"s-text7\">\r\n              {{categoria.nombre}}\r\n            </a>\r\n          </li>\r\n\r\n          <!-- <li class=\"p-b-9\">\r\n            <a href=\"#\" class=\"s-text7\">\r\n              Women\r\n            </a>\r\n          </li>\r\n          \r\n          <li class=\"p-b-9\">\r\n            <a href=\"#\" class=\"s-text7\">\r\n              Dresses\r\n            </a>\r\n          </li>\r\n          \r\n          <li class=\"p-b-9\">\r\n            <a href=\"#\" class=\"s-text7\">\r\n              Sunglasses\r\n            </a>\r\n          </li> -->\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"w-size7 p-t-30 p-l-15 p-r-15 respon4\">\r\n        <h4 class=\"s-text12 p-b-30\">\r\n          Links\r\n        </h4>\r\n\r\n        <ul>\r\n          <li class=\"p-b-9\">\r\n            <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/home']\" class=\"s-text7\">\r\n              Principal\r\n            </a>\r\n          </li>\r\n\r\n          <li class=\"p-b-9\">\r\n            <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/productos']\" class=\"s-text7\">\r\n              Compras\r\n            </a>\r\n          </li>\r\n\r\n          <li class=\"p-b-9\">\r\n            <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/carrito']\" class=\"s-text7\">\r\n              Carrito\r\n            </a>\r\n          </li>\r\n\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"w-size7 p-t-30 p-l-15 p-r-15 respon4\">\r\n        <h4 class=\"s-text12 p-b-30\">\r\n          Links\r\n        </h4>\r\n\r\n        <ul>\r\n          <li class=\"p-b-9\">\r\n            <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/pedidos/cliente']\" class=\"s-text7\">\r\n              Ordenes de compra\r\n            </a>\r\n          </li>\r\n\r\n          <li class=\"p-b-9\">\r\n            <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/blog']\" class=\"s-text7\">\r\n              Blogs\r\n            </a>\r\n          </li>\r\n\r\n          <li class=\"p-b-9\">\r\n            <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/contacto']\" class=\"s-text7\">\r\n              Contacto\r\n            </a>\r\n          </li>\r\n\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"w-size8 p-t-30 p-l-15 p-r-15 respon3\">\r\n        <h4 class=\"s-text12 p-b-30\">\r\n          ¿Eres nuevo? Registrate\r\n        </h4>\r\n\r\n        <!-- <form>\r\n          <div class=\"effect1 w-size9\">\r\n            <input class=\"s-text7 bg6 w-full p-b-5\" type=\"text\" name=\"email\" placeholder=\"email@example.com\">\r\n            <span class=\"effect1-line\"></span>\r\n          </div>\r\n        \r\n          <div class=\"w-size2 p-t-20\">\r\n            Button\r\n            <button routerLinkActive=\"active\" [routerLink]=\"['/luvas/registro']\" class=\"flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4\">\r\n              Subscribe\r\n            </button>\r\n          </div>\r\n        \r\n        </form> -->\r\n\r\n        <div class=\"w-size2 p-t-20\">\r\n          <!-- Button -->\r\n          <button routerLinkActive=\"active\" [routerLink]=\"['/luvas/registro']\" class=\"flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4\">\r\n            Registrate!\r\n          </button>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"t-center p-l-15 p-r-15\">\r\n      <a href=\"#\">\r\n        <img class=\"h-size2\" src=\"assets/images/icons/paypal.png\" alt=\"IMG-PAYPAL\">\r\n      </a>\r\n\r\n      <a href=\"#\">\r\n        <img class=\"h-size2\" src=\"assets/images/icons/visa.png\" alt=\"IMG-VISA\">\r\n      </a>\r\n\r\n      <a href=\"#\">\r\n        <img class=\"h-size2\" src=\"assets/images/icons/mastercard.png\" alt=\"IMG-MASTERCARD\">\r\n      </a>\r\n\r\n      <a href=\"#\">\r\n        <img class=\"h-size2\" src=\"assets/images/icons/express.png\" alt=\"IMG-EXPRESS\">\r\n      </a>\r\n\r\n      <a href=\"#\">\r\n        <img class=\"h-size2\" src=\"assets/images/icons/discover.png\" alt=\"IMG-DISCOVER\">\r\n      </a>\r\n\r\n      <div class=\"t-center s-text8 p-t-20\">\r\n        Copyright © 2018 All rights reserved. | This page is made with <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> by <a href=\"https://rattios.com\" target=\"_blank\"> Rattios Technology.</a>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n\r\n\r\n\r\n  <!-- Back to top -->\r\n  <div class=\"btn-back-to-top bg0-hov\" id=\"myBtn\">\r\n    <span (click)=\"scrollUp()\" class=\"symbol-btn-back-to-top\">\r\n      <i class=\"fa fa-angle-double-up\" aria-hidden=\"true\"></i>\r\n    </span>\r\n  </div>\r\n\r\n  <!-- Container Selection1 -->\r\n  <div id=\"dropDownSelect1\"></div>"

/***/ }),

/***/ "../../../../../src/app/components-luvas/footer-luvas/footer-luvas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterLuvas; });
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





var FooterLuvas = /** @class */ (function () {
    function FooterLuvas(el, http, router, rutaService) {
        this.el = el;
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.loading = false;
        this.alerta = false;
        this.alerta_boton = false;
        this.slides = [
            { img: "http://placehold.it/350x150/000000" },
            { img: "http://placehold.it/350x150/111111" },
            { img: "http://placehold.it/350x150/333333" },
            { img: "http://placehold.it/350x150/666666" }
        ];
        this.slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };
    }
    //wait for the component to render completely
    FooterLuvas.prototype.ngOnInit = function () {
        this.getCategorias();
        //Esto es de la plantilla original
        /*var nativeElement: HTMLElement = this.el.nativeElement,
        parentElement: HTMLElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
          parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);*/
    };
    FooterLuvas.prototype.addSlide = function () {
        this.slides.push({ img: "http://placehold.it/350x150/777777" });
    };
    FooterLuvas.prototype.removeSlide = function () {
        this.slides.length = this.slides.length - 1;
    };
    FooterLuvas.prototype.afterChange = function (e) {
        console.log('afterChange');
    };
    FooterLuvas.prototype.scrollUp = function () {
        window.scrollTo(0, 0);
    };
    //Alerta cuando se vence el token
    FooterLuvas.prototype.ok_alerta = function () {
        this.router.navigate(['luvas']);
    };
    FooterLuvas.prototype.cerrarAlerta = function () {
        this.alerta = false;
    };
    /*Trae las categorias en estado ON*/
    FooterLuvas.prototype.getCategorias = function () {
        var _this = this;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'categorias/footer/cliente?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.categorias = _this.data.categorias;
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
                /*this.alerta_tipo = 'warning';
                this.alerta_msg = msg.error.error;
                this.alerta_boton = true;*/
            }
            else {
                //alert(msg.error.error);
                /*this.alerta_tipo = 'info';
                this.alerta_msg = msg.error.error;
                this.alerta = true;
                setTimeout(()=>{this.alerta = false;},4000);*/
            }
        });
    };
    FooterLuvas.prototype.selectCategoria = function (categoria) {
        var cat = JSON.stringify(categoria);
        localStorage.setItem('luvas_catFilter', cat);
        this.router.navigateByUrl('/luvas/productos');
    };
    FooterLuvas = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer-luvas',
            template: __webpack_require__("../../../../../src/app/components-luvas/footer-luvas/footer-luvas.component.html"),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_ruta_service_ruta_service__["a" /* RutaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_ruta_service_ruta_service__["a" /* RutaService */]) === "function" && _d || Object])
    ], FooterLuvas);
    return FooterLuvas;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=footer-luvas.component.js.map

/***/ }),

/***/ "../../../../../src/app/components-luvas/footer-luvas/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_luvas_component__ = __webpack_require__("../../../../../src/app/components-luvas/footer-luvas/footer-luvas.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__footer_luvas_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components-luvas/header-luvas/header-luvas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alertaC {\r\n  position: fixed !important;\r\n  z-index: 1000 !important;\r\n  top: 130px !important;\r\n  right: 10px !important;\r\n}\r\n#notifications1 {\r\n\tdisplay: block;\r\n\twidth: 150px;\r\n\tposition: absolute;\r\n\ttop: 50px;\r\n\tright: -91%;\r\n\tbackground: #FFF;\r\n\tborder: solid 1px rgba(100, 100, 100, 0.2);\r\n\t-webkit-box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);\r\n\tz-index: 0;\r\n\tborder-radius: 3px;\r\n}\r\n #notifications1:before {         \r\n    content: '';\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    color: transparent;\r\n    border: 12px solid #CCC;\r\n    border-color: transparent transparent #eceff5;\r\n    margin-top: -25px;\r\n    margin-left: 67%;\r\n  }     \r\n  h3 {\r\n    display:block;\r\n    color:#333; \r\n    font-size: 14px;\r\n    padding: 13px 15px;\r\n    margin:0;\r\n    cursor: pointer;\r\n    border-bottom:solid 1px rgba(100, 100, 100, .30);\r\n  }\r\n  .icon{\r\n\tmargin-right: 10px;\r\n\tcolor: #bcbcbc;\r\n  }\r\n  #notifications2 {\r\n    display: block;\r\n    width: 350px;\r\n    position: absolute;\r\n    top: 55px;\r\n    right: -150%;\r\n    background: #FFF;\r\n    border: solid 1px rgba(100, 100, 100, 0.2);\r\n    -webkit-box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);\r\n    z-index: 0;\r\n    border-radius: 3px;\r\n    padding: 15px;\r\n  }\r\n  .item-cart{\r\n    display: -webkit-box !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n    border-bottom: none !important;\r\n  }\r\n  .header-cart-item-img1{\r\n    width: 80px;\r\n    height: 80px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    position: relative;\r\n    margin-right: 20px;\r\n    text-align: center;\r\n  }\r\n  .header-cart-item-txt {\r\n    width: calc(100% - 100px);\r\n  }\r\n  .header-cart-wrapitem {\r\n    max-height: 300px;\r\n    overflow: auto;\r\n  }\r\n  .header-cart-wrapbtn {\r\n    width: 100%;\r\n  }\r\n\r\n/*[ Logo ]\r\n-----------------------------------------------------------*/\r\n.logo_f {\r\n  display: block;\r\n  position: absolute;\r\n  left: 52px;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n}\r\n\r\n/* .logo_f img {\r\n  max-height: 27px;\r\n} */\r\n\r\n/*[ Logo mobile ]\r\n-----------------------------------------------------------*/\r\n.logo-mobile_f {\r\n  display: block;\r\n}\r\n\r\n/* .logo-mobile_f img {\r\n  max-height: 27px;\r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components-luvas/header-luvas/header-luvas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alertaC\"  *ngIf=\"alerta\">\r\n  <alert  [type]=\"alerta_tipo\" dismissible=\"true\" close=\"cerrarAlerta()\">\r\n    <strong>{{alerta_msg}}</strong> \r\n  </alert>\r\n</div> \r\n\r\n<div class=\"alertaC\" *ngIf=\"alerta_boton\">\r\n  <alert [type]=\"alerta_tipo\" >\r\n    <strong>{{alerta_msg}}</strong>\r\n    <button type=\"button\" class=\"btn btn4 btn-secondary\" (click)=\"ok_alerta()\">ok</button> \r\n  </alert>\r\n</div>\r\n\r\n<!-- Header -->\r\n  <header *ngIf=\"!isModalShown\" class=\"header1\">\r\n    <!-- Header desktop -->\r\n    <div class=\"container-menu-header\">\r\n      <div class=\"topbar\">\r\n        <div class=\"topbar-social\">\r\n          <a href=\"https://www.facebook.com/pg/Beau-419231378917645/posts/\" class=\"topbar-social-item fa fa-facebook\"></a>\r\n          <a href=\"https://www.instagram.com/beauve_/\" class=\"topbar-social-item fa fa-instagram\"></a>\r\n          <!--a href=\"#\" class=\"topbar-social-item fa fa-pinterest-p\"></a>\r\n          <a href=\"#\" class=\"topbar-social-item fa fa-snapchat-ghost\"></a>\r\n          <a href=\"#\" class=\"topbar-social-item fa fa-youtube-play\"></a-->\r\n        </div>\r\n\r\n        <span class=\"topbar-child1\">\r\n          BEAU\r\n        </span>\r\n\r\n        <div class=\"topbar-child2\">\r\n          <span class=\"topbar-email\">\r\n            beaushop@gmail.com\r\n          </span>\r\n\r\n          <!--div class=\"topbar-language rs1-select2\">\r\n            <select class=\"selection-1\" name=\"time\">\r\n              <option>USD</option>\r\n              <option>EUR</option>\r\n            </select>\r\n          </div-->\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"wrap_header\">\r\n        <!-- Logo -->\r\n        <a routerLinkActive=\"active\" [routerLink]=\"\" class=\"logo_f\">\r\n          <img src=\"assets/images/icons/LUVA_LOGO_NEGRO.png\" alt=\"IMG-LOGO\" style=\"width: 96px; height: auto;\">\r\n        </a>\r\n\r\n        <!-- Menu -->\r\n        <div class=\"wrap_menu\">\r\n          <nav class=\"menu\">\r\n            <ul class=\"main_menu\">\r\n              <li class=\"sale-noti\">\r\n                <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/home']\">Principal</a>\r\n                <!-- <ul class=\"sub_menu\">\r\n                  <li><a href=\"index.html\">Homepage V1</a></li>\r\n                  <li><a href=\"home-02.html\">Homepage V2</a></li>\r\n                  <li><a href=\"home-03.html\">Homepage V3</a></li>\r\n                </ul> -->\r\n              </li>\r\n\r\n              <li>\r\n                <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/productos']\">Tienda</a>\r\n              </li>\r\n\r\n              <!-- <li>\r\n                <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/detalle']\">Sale</a>\r\n              </li> -->\r\n\r\n              <li>\r\n                <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/carrito']\">Carrito</a>\r\n              </li>\r\n\r\n              <li>\r\n                <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/pedidos/cliente']\">Ordenes de compra</a>\r\n              </li>\r\n\r\n              <li>\r\n                <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/blog']\">Blogs</a>\r\n              </li>\r\n\r\n              <!-- <li>\r\n                <a href=\"about.html\">About</a>\r\n              </li> -->\r\n\r\n              <li>\r\n                <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/contacto']\">Contacto</a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n        </div>\r\n\r\n        <!-- Header Icon -->\r\n        <div class=\"header-icons\">\r\n\r\n          <!--a *ngIf=\"admin\" routerLinkActive=\"active\" [routerLink]=\"\" class=\"header-wrapicon1 dis-block\" (click)=\"showPanel()\">\r\n            Show Panel\r\n          </a>\r\n\r\n          <span *ngIf=\"admin\" class=\"linedivide1\"></span-->\r\n\r\n          <a *ngIf=\"email\" routerLinkActive=\"active\" [routerLink]=\"\" class=\"header-wrapicon1 dis-block\">\r\n            {{email}}\r\n          </a>\r\n\r\n          <span *ngIf=\"email\" class=\"linedivide1\"></span>\r\n\r\n          <a class=\"header-wrapicon1 dis-block\" (click)=\"changeShowMessage()\">\r\n            <img src=\"{{imagen}}\" class=\"header-icon1\">\r\n            <div id=\"notifications1\" [hidden]=\"showHideMessage\">\r\n              <h3 (click)=\"showModal(); changeShowMessage()\"><i class=\"icon fa fa-user\"></i> Iniciar sesion</h3>\r\n              <h3 (click)=\"logout(); changeShowMessage()\"><i class=\"icon fa fa-lock\"></i> Cerrar sesion</h3>\r\n              <h3 (click)=\"showPanel(); changeShowMessage()\" *ngIf=\"admin\"><i class=\"icon fa fa-cubes\"></i> Dashboard</h3>\r\n            </div>\r\n          </a>\r\n\r\n          <span class=\"linedivide1\"></span>\r\n\r\n          <div class=\"header-wrapicon2\">\r\n            <img src=\"assets/images/icons/icon-header-02.png\" class=\"header-icon1 js-show-header-dropdown\" alt=\"ICON\" (click)=\"changeShowCart()\">\r\n            <span class=\"header-icons-noti\">{{itemsInCart}}</span>\r\n            <div id=\"notifications2\" [hidden]=\"showHideCart\">\r\n              <div class=\"header-cart-wrapitem\">\r\n                <h3 class=\"item-cart\" *ngFor=\"let item of items\">\r\n                  <div class=\"header-cart-item-img1\">\r\n                    <img src=\"{{item.colores[0].imagen[0].src}}\" alt=\"IMG\">\r\n                  </div>\r\n                  <div class=\"header-cart-item-txt\">\r\n                    <a href=\"#\" class=\"header-cart-item-name\">\r\n                      {{item.nombre}} ({{item.colores[0].atributos[0].atributo}})\r\n                    </a>\r\n                    <span class=\"header-cart-item-info\">\r\n                      {{item.cantidad}} x ${{item.colores[0].atributos[0].precio}}\r\n                    </span>\r\n                  </div>\r\n                </h3>\r\n              </div>\r\n              <div class=\"header-cart-total\">\r\n                Total: ${{total}}\r\n              </div>\r\n              <div class=\"header-cart-buttons\">\r\n                <div class=\"header-cart-wrapbtn\">\r\n                  <a routerLinkActive=\"active\" [routerLink]=\"\" class=\"flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4\" (click)=\"irAlCart()\">\r\n                    Ver el carrito\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Header cart noti -->\r\n            <div class=\"header-cart header-dropdown\">\r\n              <ul class=\"header-cart-wrapitem\">\r\n                <li class=\"header-cart-item\">\r\n                  <div class=\"header-cart-item-img\">\r\n                    <img src=\"assets/images/item-cart-01.jpg\" alt=\"IMG\">\r\n                  </div>\r\n\r\n                  <div class=\"header-cart-item-txt\">\r\n                    <a href=\"#\" class=\"header-cart-item-name\">\r\n                      White Shirt With Pleat Detail Back\r\n                    </a>\r\n\r\n                    <span class=\"header-cart-item-info\">\r\n                      1 x $19.00\r\n                    </span>\r\n                  </div>\r\n                </li>\r\n\r\n                <li class=\"header-cart-item\">\r\n                  <div class=\"header-cart-item-img\">\r\n                    <img src=\"assets/images/item-cart-02.jpg\" alt=\"IMG\">\r\n                  </div>\r\n\r\n                  <div class=\"header-cart-item-txt\">\r\n                    <a href=\"#\" class=\"header-cart-item-name\">\r\n                      Converse All Star Hi Black Canvas\r\n                    </a>\r\n\r\n                    <span class=\"header-cart-item-info\">\r\n                      1 x $39.00\r\n                    </span>\r\n                  </div>\r\n                </li>\r\n\r\n                <li class=\"header-cart-item\">\r\n                  <div class=\"header-cart-item-img\">\r\n                    <img src=\"assets/images/item-cart-03.jpg\" alt=\"IMG\">\r\n                  </div>\r\n\r\n                  <div class=\"header-cart-item-txt\">\r\n                    <a href=\"#\" class=\"header-cart-item-name\">\r\n                      Nixon Porter Leather Watch In Tan\r\n                    </a>\r\n\r\n                    <span class=\"header-cart-item-info\">\r\n                      1 x $17.00\r\n                    </span>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n\r\n              <div class=\"header-cart-total\">\r\n                Total: $75.00\r\n              </div>\r\n\r\n              <div class=\"header-cart-buttons\">\r\n                <div class=\"header-cart-wrapbtn\">\r\n                  <!-- Button -->\r\n                  <a href=\"cart.html\" class=\"flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4\">\r\n                    View Cart\r\n                  </a>\r\n                </div>\r\n\r\n                <div class=\"header-cart-wrapbtn\">\r\n                  <!-- Button -->\r\n                  <a href=\"#\" class=\"flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4\">\r\n                    Check Out\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Header Mobile -->\r\n    <div class=\"wrap_header_mobile\">\r\n      <!-- Logo moblie -->\r\n      <a href=\"index.html\" class=\"logo-mobile_f\">\r\n        <img src=\"assets/images/icons/LUVA_LOGO_NEGRO.png\" alt=\"IMG-LOGO\" style=\"width: 96px; height: auto;\">\r\n      </a>\r\n\r\n      <!-- Button show menu -->\r\n      <div class=\"btn-show-menu\">\r\n        <!-- Header Icon mobile -->\r\n        <div class=\"header-icons-mobile\">\r\n          <a href=\"#\" class=\"header-wrapicon1 dis-block\">\r\n            <img src=\"assets/images/icons/icon-header-01.png\" class=\"header-icon1\" alt=\"ICON\">\r\n          </a>\r\n\r\n          <span class=\"linedivide2\"></span>\r\n\r\n          <div class=\"header-wrapicon2\">\r\n            <img src=\"assets/images/icons/icon-header-02.png\" class=\"header-icon1 js-show-header-dropdown\" alt=\"ICON\">\r\n            <span class=\"header-icons-noti\">0</span>\r\n\r\n            <!-- Header cart noti -->\r\n            <div class=\"header-cart header-dropdown\">\r\n              <ul class=\"header-cart-wrapitem\">\r\n                <li class=\"header-cart-item\">\r\n                  <div class=\"header-cart-item-img\">\r\n                    <img src=\"assets/images/item-cart-01.jpg\" alt=\"IMG\">\r\n                  </div>\r\n\r\n                  <div class=\"header-cart-item-txt\">\r\n                    <a href=\"#\" class=\"header-cart-item-name\">\r\n                      White Shirt With Pleat Detail Back\r\n                    </a>\r\n\r\n                    <span class=\"header-cart-item-info\">\r\n                      1 x $19.00\r\n                    </span>\r\n                  </div>\r\n                </li>\r\n\r\n                <li class=\"header-cart-item\">\r\n                  <div class=\"header-cart-item-img\">\r\n                    <img src=\"assets/images/item-cart-02.jpg\" alt=\"IMG\">\r\n                  </div>\r\n\r\n                  <div class=\"header-cart-item-txt\">\r\n                    <a href=\"#\" class=\"header-cart-item-name\">\r\n                      Converse All Star Hi Black Canvas\r\n                    </a>\r\n\r\n                    <span class=\"header-cart-item-info\">\r\n                      1 x $39.00\r\n                    </span>\r\n                  </div>\r\n                </li>\r\n\r\n                <li class=\"header-cart-item\">\r\n                  <div class=\"header-cart-item-img\">\r\n                    <img src=\"assets/images/item-cart-03.jpg\" alt=\"IMG\">\r\n                  </div>\r\n\r\n                  <div class=\"header-cart-item-txt\">\r\n                    <a href=\"#\" class=\"header-cart-item-name\">\r\n                      Nixon Porter Leather Watch In Tan\r\n                    </a>\r\n\r\n                    <span class=\"header-cart-item-info\">\r\n                      1 x $17.00\r\n                    </span>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n\r\n              <div class=\"header-cart-total\">\r\n                Total: $75.00\r\n              </div>\r\n\r\n              <div class=\"header-cart-buttons\">\r\n                <div class=\"header-cart-wrapbtn\">\r\n                  <!-- Button -->\r\n                  <a href=\"cart.html\" class=\"flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4\">\r\n                    Ver el carrito\r\n                  </a>\r\n                </div>\r\n\r\n                <div class=\"header-cart-wrapbtn\">\r\n                  <!-- Button -->\r\n                  <a href=\"#\" class=\"flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4\">\r\n                    Concretar compra\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"btn-show-menu-mobile hamburger hamburger--squeeze\">\r\n          <span class=\"hamburger-box\">\r\n            <span class=\"hamburger-inner\"></span>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Menu Mobile -->\r\n    <div class=\"wrap-side-menu\" >\r\n      <nav class=\"side-menu\">\r\n        <ul class=\"main-menu\">\r\n          <li class=\"item-topbar-mobile p-l-20 p-t-8 p-b-8\">\r\n            <span class=\"topbar-child1\">\r\n              Free shipping for standard order over $100\r\n            </span>\r\n          </li>\r\n\r\n          <li class=\"item-topbar-mobile p-l-20 p-t-8 p-b-8\">\r\n            <div class=\"topbar-child2-mobile\">\r\n              <span class=\"topbar-email\">\r\n                fashe@example.com\r\n              </span>\r\n\r\n              <div class=\"topbar-language rs1-select2\">\r\n                <select class=\"selection-1\" name=\"time\">\r\n                  <option>USD</option>\r\n                  <option>EUR</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </li>\r\n\r\n          <li class=\"item-topbar-mobile p-l-10\">\r\n            <div class=\"topbar-social-mobile\">\r\n              <a href=\"#\" class=\"topbar-social-item fa fa-facebook\"></a>\r\n              <a href=\"#\" class=\"topbar-social-item fa fa-instagram\"></a>\r\n              <a href=\"#\" class=\"topbar-social-item fa fa-pinterest-p\"></a>\r\n              <a href=\"#\" class=\"topbar-social-item fa fa-snapchat-ghost\"></a>\r\n              <a href=\"#\" class=\"topbar-social-item fa fa-youtube-play\"></a>\r\n            </div>\r\n          </li>\r\n\r\n          <li class=\"item-menu-mobile\">\r\n            <a href=\"index.html\">Home</a>\r\n            <ul class=\"sub-menu\">\r\n              <li><a href=\"index.html\">Homepage V1</a></li>\r\n              <li><a href=\"home-02.html\">Homepage V2</a></li>\r\n              <li><a href=\"home-03.html\">Homepage V3</a></li>\r\n            </ul>\r\n            <i class=\"arrow-main-menu fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n          </li>\r\n\r\n          <li class=\"item-menu-mobile\">\r\n            <a href=\"product.html\">Shop</a>\r\n          </li>\r\n\r\n          <li class=\"item-menu-mobile\">\r\n            <a href=\"product.html\">Sale</a>\r\n          </li>\r\n\r\n          <li class=\"item-menu-mobile\">\r\n            <a href=\"cart.html\">Features</a>\r\n          </li>\r\n\r\n          <li class=\"item-menu-mobile\">\r\n            <a href=\"blog.html\">Blog</a>\r\n          </li>\r\n\r\n          <li class=\"item-menu-mobile\">\r\n            <a href=\"about.html\">About</a>\r\n          </li>\r\n\r\n          <li class=\"item-menu-mobile\">\r\n            <a href=\"contact.html\">Contact</a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n  </header>\r\n\r\n<!--Modal automatica:\r\n <button type=\"button\" class=\"btn btn-primary\" (click)=\"showModal()\">Render auto-shown modal</button>-->\r\n<div *ngIf=\"isModalShown\" [config]=\"{ show: true, ignoreBackdropClick: true, keyboard: false }\" (onHidden)=\"onHidden()\" bsModal #autoShownModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Login</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        \r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n  <!-- content page -->\r\n  <section class=\"bgwhite p-t-66 p-b-60\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n\r\n                <div style=\"display:block; margin:auto\" class=\"col-md-6 p-b-30\">\r\n          <form [formGroup]=\"myFormLogin\" novalidate class=\"leave-comment\">\r\n            <h4 class=\"m-text26 p-b-36 p-t-15\">\r\n              Enter your data\r\n            </h4>\r\n\r\n            <div *ngIf=\"myFormLogin.get('email').errors && myFormLogin.get('email').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormLogin.get('email').hasError('required')\">Email is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"text\" name=\"email\" placeholder=\"Email Address\" formControlName=\"email\">\r\n            </div>\r\n\r\n            <div *ngIf=\"myFormLogin.get('password').errors && myFormLogin.get('password').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormLogin.get('password').hasError('required')\">Password is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"password\" name=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n            </div>\r\n\r\n            \r\n          </form>\r\n\r\n          <div class=\"w-size25\">\r\n            <!-- Button -->\r\n            <button class=\"flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" [disabled]=\"myFormLogin.invalid\" (click)=\"login(); hideModal()\">\r\n              Login\r\n            </button>\r\n          </div>\r\n\r\n          <button class=\"btn btn-facebook\" type=\"button\" style=\"margin-top: 16px\" (click)=\"signInWithFB()\"><span>facebook</span></button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>            \r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <div class=\"w-size25\">\r\n          <!-- Button -->\r\n          <button class=\"flex-c-m size1 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" (click)=\"hideModal(); irARegistro()\">\r\n            Subscribe\r\n          </button>\r\n        </div>\r\n        <div class=\"w-size25\">\r\n          <!-- Button -->\r\n          <button class=\"flex-c-m size1 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" (click)=\"hideModal()\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> \r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components-luvas/header-luvas/header-luvas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderLuvas; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ruta_service_ruta_service__ = __webpack_require__("../../../../../src/app/services/ruta-service/ruta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__events_login_event_login_event_service__ = __webpack_require__("../../../../../src/app/events/login-event/login-event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__events_cart_event_cart_event_service__ = __webpack_require__("../../../../../src/app/events/cart-event/cart-event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_cart_service_cart_service__ = __webpack_require__("../../../../../src/app/services/cart-service/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular4_social_login__);
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





var HeaderLuvas = /** @class */ (function () {
    function HeaderLuvas(el, http, router, rutaService, fb, loginEventService, cartEventService, cartService, authService) {
        var _this = this;
        this.el = el;
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.fb = fb;
        this.loginEventService = loginEventService;
        this.cartEventService = cartEventService;
        this.cartService = cartService;
        this.authService = authService;
        this.isModalShown = false;
        this.loading = false;
        this.alerta = false;
        this.alerta_boton = false;
        this.admin = false;
        this.imagen = 'assets/images/icons/icon-header-01.png';
        //public itemsInCart : any;
        this.showHideMessage = true;
        this.showHideCart = true;
        this.slides = [
            { img: "http://placehold.it/350x150/000000" },
            { img: "http://placehold.it/350x150/111111" },
            { img: "http://placehold.it/350x150/333333" },
            { img: "http://placehold.it/350x150/666666" }
        ];
        this.slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };
        //Detectar un evento login
        this.loginEventService.loginEventData.subscribe(function (data) {
            //console.log(data); 
            _this.checkLogin();
        });
        //Detectar un evento cart
        this.cartEventService.cartEventData.subscribe(function (data) {
            //console.log(data); 
            _this.itemsInCart = data;
            _this.items = _this.cartService.getCartContents();
            //this.itemsInCart = this.cartService.getCartCount();
            _this.total = _this.cartService.getCartSubTotal();
        });
        this.myFormLogin = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]]
        });
    }
    HeaderLuvas.prototype.showModal = function () {
        this.isModalShown = true;
    };
    HeaderLuvas.prototype.hideModal = function () {
        this.autoShownModal.hide();
    };
    HeaderLuvas.prototype.onHidden = function () {
        this.isModalShown = false;
    };
    //wait for the component to render completely
    HeaderLuvas.prototype.ngOnInit = function () {
        var _this = this;
        //Esto es de la plantilla original
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
        this.checkLogin();
        /*this.cartService.getProducts().subscribe(
          success => {
            this.itemsInCart = this.cartService.getCartCount();
            console.log('itemsInCart header: '+ this.itemsInCart);
            
          },
          error => {
            this.itemsInCart = this.cartService.getCartCount();
            console.log('itemsInCart header: '+ this.itemsInCart);
            
          }
        );*/
        //this.loading = true;
        this.cartService.getProducts().subscribe(function (success) {
            //this.loading = false;
            _this.items = _this.cartService.getCartContents();
            _this.itemsInCart = _this.cartService.getCartCount();
            _this.total = _this.cartService.getCartSubTotal();
            console.log(_this.items);
            //console.log('itemsInCart cart: '+ this.itemsInCart);
            //this.cartEventService.cartEventData.emit(this.itemsInCart);
        }, function (error) {
            //this.loading = false;
            _this.items = _this.cartService.getCartContents();
            _this.itemsInCart = _this.cartService.getCartCount();
            _this.total = _this.cartService.getCartSubTotal();
            console.log(_this.items);
            //console.log('itemsInCart cart: '+ this.itemsInCart);
            //this.cartEventService.cartEventData.emit(this.itemsInCart);
        });
    };
    HeaderLuvas.prototype.signInWithFB = function () {
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_10_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID);
    };
    HeaderLuvas.prototype.signOut = function () {
        this.authService.signOut();
    };
    HeaderLuvas.prototype.addSlide = function () {
        this.slides.push({ img: "http://placehold.it/350x150/777777" });
    };
    HeaderLuvas.prototype.removeSlide = function () {
        this.slides.length = this.slides.length - 1;
    };
    HeaderLuvas.prototype.afterChange = function (e) {
        console.log('afterChange');
    };
    //Alerta cuando se vence el token
    HeaderLuvas.prototype.ok_alerta = function () {
        this.router.navigate(['luvas']);
    };
    HeaderLuvas.prototype.cerrarAlerta = function () {
        this.alerta = false;
    };
    HeaderLuvas.prototype.prueba = function () {
        alert('Prueba');
    };
    HeaderLuvas.prototype.irARegistro = function () {
        this.router.navigate(['luvas/registro']);
    };
    HeaderLuvas.prototype.login = function () {
        var _this = this;
        this.showHideMessage = true;
        this.loading = true;
        var datos = {
            email: this.myFormLogin.value.email,
            password: this.myFormLogin.value.password
        };
        this.http.post(this.rutaService.getRutaApi() + 'login/app', datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.loading = false;
            _this.alerta_tipo = 'success';
            _this.alerta_msg = 'Login Ok';
            _this.alerta = true;
            setTimeout(function () { _this.alerta = false; }, 4000);
            /*Guardar datos del usuario en memoria*/
            var user = JSON.stringify(_this.data.user);
            localStorage.setItem('luvas_user', user);
            var token = JSON.stringify(_this.data.token);
            localStorage.setItem('luvas_token', token);
            if (_this.data.user.tipo_usuario == 1) {
                _this.admin = true;
                _this.email = _this.data.user.email;
                _this.imagen = _this.data.user.imagen;
            }
            else {
                _this.admin = false;
                _this.email = _this.data.user.email;
                _this.imagen = _this.data.user.imagen;
            }
            if ('/luvas/pedidos/cliente' == _this.router.url) {
                //console.log('recarga');
                window.location.reload();
            }
        }, function (msg) {
            msg.error = JSON.parse(msg.error);
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            _this.alerta_tipo = 'danger';
            _this.alerta_msg = msg.error.error;
            _this.alerta = true;
            setTimeout(function () { _this.alerta = false; }, 4000);
        });
    };
    HeaderLuvas.prototype.showPanel = function () {
        this.showHideMessage = true;
        this.router.navigate(['dashboard']);
    };
    HeaderLuvas.prototype.logout = function () {
        this.showHideMessage = true;
        localStorage.setItem('luvas_user', null);
        localStorage.setItem('luvas_token', null);
        this.admin = false;
        this.email = null;
        this.imagen = 'assets/images/icons/icon-header-01.png';
    };
    HeaderLuvas.prototype.checkLogin = function () {
        /*Verifiacar si hay un usario logeado y su tipo*/
        var user = localStorage.getItem('luvas_user');
        var user_login = JSON.parse(user);
        if (user_login) {
            if (user_login.tipo_usuario == 1) {
                this.admin = true;
                this.email = user_login.email;
                this.imagen = user_login.imagen;
            }
            else {
                this.admin = false;
                this.email = user_login.email;
                this.imagen = user_login.imagen;
            }
        }
    };
    HeaderLuvas.prototype.irAlCart = function () {
        this.showHideCart = true;
        this.router.navigateByUrl('/luvas/carrito');
    };
    HeaderLuvas.prototype.changeShowMessage = function () {
        this.showHideMessage = !this.showHideMessage;
        this.showHideCart = true;
    };
    HeaderLuvas.prototype.changeShowCart = function () {
        this.showHideCart = !this.showHideCart;
        this.showHideMessage = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('autoShownModal'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
    ], HeaderLuvas.prototype, "autoShownModal", void 0);
    HeaderLuvas = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-luvas',
            template: __webpack_require__("../../../../../src/app/components-luvas/header-luvas/header-luvas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components-luvas/header-luvas/header-luvas.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_ruta_service_ruta_service__["a" /* RutaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_ruta_service_ruta_service__["a" /* RutaService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__events_login_event_login_event_service__["a" /* LoginEventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__events_login_event_login_event_service__["a" /* LoginEventService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__events_cart_event_cart_event_service__["a" /* CartEventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__events_cart_event_cart_event_service__["a" /* CartEventService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9__services_cart_service_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_cart_service_cart_service__["a" /* CartService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_10_angular4_social_login__["AuthService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_angular4_social_login__["AuthService"]) === "function" && _k || Object])
    ], HeaderLuvas);
    return HeaderLuvas;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=header-luvas.component.js.map

/***/ }),

/***/ "../../../../../src/app/components-luvas/header-luvas/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_luvas_component__ = __webpack_require__("../../../../../src/app/components-luvas/header-luvas/header-luvas.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__header_luvas_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components-luvas/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_luvas__ = __webpack_require__("../../../../../src/app/components-luvas/header-luvas/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__header_luvas__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_luvas__ = __webpack_require__("../../../../../src/app/components-luvas/footer-luvas/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__footer_luvas__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/containers-luvas/full-layout-luvas/full-layout-luvas.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- SERVIDOR -->\r\n\r\n<link rel=\"icon\" type=\"image/png\"      href=\"http://massagegraf.com/beau/images/icons/favicon.png\"/>\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"http://massagegraf.com/beau/vendor/bootstrap/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"http://massagegraf.com/beau/fonts/font-awesome-4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"http://massagegraf.com/beau/fonts/themify/themify-icons.css\">\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"http://massagegraf.com/beau/fonts/Linearicons-Free-v1.0.0/icon-font.min.css\">\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"http://massagegraf.com/beau/fonts/elegant-font/html-css/style.css\">\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"http://massagegraf.com/beau/vendor/animate/animate.css\">\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"http://massagegraf.com/beau/vendor/css-hamburgers/hamburgers.min.css\">\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"http://massagegraf.com/beau/vendor/animsition/css/animsition.min.css\">\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"http://massagegraf.com/beau/vendor/select2/select2.min.css\">\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"http://massagegraf.com/beau/vendor/daterangepicker/daterangepicker.css\">\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"http://massagegraf.com/beau/vendor/slick/slick.css\">\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"http://massagegraf.com/beau/vendor/lightbox2/css/lightbox.min.css\">\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"http://massagegraf.com/beau/css/util.css\">\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"http://massagegraf.com/beau/css/main.css\"> \r\n \r\n \r\n<!-- LOCAL -->\r\n\r\n<!-- \r\n<link rel=\"icon\" type=\"image/png\"      href=\"http://localhost/luvasxshop/front/images/icons/favicon.png\"/>\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"http://localhost/luvasxshop/front/vendor/bootstrap/css/bootstrap.min.css\">\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"http://localhost/luvasxshop/front/fonts/font-awesome-4.7.0/css/font-awesome.min.css\">\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"http://localhost/luvasxshop/front/fonts/themify/themify-icons.css\">\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"http://localhost/luvasxshop/front/fonts/Linearicons-Free-v1.0.0/icon-font.min.css\">\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"http://localhost/luvasxshop/front/fonts/elegant-font/html-css/style.css\">\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"http://localhost/luvasxshop/front/vendor/animate/animate.css\">\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"http://localhost/luvasxshop/front/vendor/css-hamburgers/hamburgers.min.css\">\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"http://localhost/luvasxshop/front/vendor/animsition/css/animsition.min.css\">\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"http://localhost/luvasxshop/front/vendor/select2/select2.min.css\">\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"http://localhost/luvasxshop/front/vendor/daterangepicker/daterangepicker.css\">\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"http://localhost/luvasxshop/front/vendor/slick/slick.css\">\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"http://localhost/luvasxshop/front/vendor/lightbox2/css/lightbox.min.css\">\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"http://localhost/luvasxshop/front/css/util.css\">\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"http://localhost/luvasxshop/front/css/main.css\">\r\n-->\r\n \r\n  \r\n<header-luvas></header-luvas>\r\n\r\n\t<router-outlet></router-outlet>\r\n\r\n<footer-luvas></footer-luvas>"

/***/ }),

/***/ "../../../../../src/app/containers-luvas/full-layout-luvas/full-layout-luvas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullLayoutLuvas; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FullLayoutLuvas = /** @class */ (function () {
    function FullLayoutLuvas() {
    }
    // public disabled = false;
    // public status: {isopen: boolean} = {isopen: false};
    //
    // public toggled(open: boolean): void {
    //   console.log('Dropdown is now: ', open);
    // }
    //
    // public toggleDropdown($event: MouseEvent): void {
    //   $event.preventDefault();
    //   $event.stopPropagation();
    //   this.status.isopen = !this.status.isopen;
    // }
    FullLayoutLuvas.prototype.ngOnInit = function () { };
    FullLayoutLuvas = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-luvas',
            template: __webpack_require__("../../../../../src/app/containers-luvas/full-layout-luvas/full-layout-luvas.component.html")
        })
    ], FullLayoutLuvas);
    return FullLayoutLuvas;
}());

//# sourceMappingURL=full-layout-luvas.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers-luvas/full-layout-luvas/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__full_layout_luvas_component__ = __webpack_require__("../../../../../src/app/containers-luvas/full-layout-luvas/full-layout-luvas.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__full_layout_luvas_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/containers-luvas/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__full_layout_luvas__ = __webpack_require__("../../../../../src/app/containers-luvas/full-layout-luvas/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__full_layout_luvas__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/views/luvas/blog-detalle/blog-detalle.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- breadcrumb -->\r\n  <div class=\"bread-crumb bgwhite flex-w p-l-52 p-r-15 p-t-30 p-l-15-sm\">\r\n    <a href=\"index.html\" class=\"s-text16\">\r\n      Home\r\n      <i class=\"fa fa-angle-right m-l-8 m-r-9\" aria-hidden=\"true\"></i>\r\n    </a>\r\n\r\n    <a href=\"blog.html\" class=\"s-text16\">\r\n      Blog\r\n      <i class=\"fa fa-angle-right m-l-8 m-r-9\" aria-hidden=\"true\"></i>\r\n    </a>\r\n\r\n    <span class=\"s-text17\">\r\n      Black Friday Guide: Best Sales & Discount Codes\r\n    </span>\r\n  </div>\r\n\r\n  <!-- content page -->\r\n  <section class=\"bgwhite p-t-60 p-b-25\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 col-lg-9 p-b-80\">\r\n          <div class=\"p-r-50 p-r-0-lg\">\r\n            <div class=\"p-b-40\">\r\n              <div class=\"blog-detail-img wrap-pic-w\">\r\n                <img src=\"assets/images/item-03.jpg\" style=\"width: 600px; height:600px\" alt=\"IMG-BLOG\">\r\n              </div>\r\n\r\n              <div class=\"blog-detail-txt p-t-33\">\r\n                <h4 class=\"p-b-11 m-text24\">\r\n                  Black Friday Guide: Best Sales & Discount Codes\r\n                </h4>\r\n\r\n                <div class=\"s-text8 flex-w flex-m p-b-21\">\r\n                  <span>\r\n                    By Admin\r\n                    <span class=\"m-l-3 m-r-6\">|</span>\r\n                  </span>\r\n\r\n                  <span>\r\n                    28 Dec, 2018\r\n                    <span class=\"m-l-3 m-r-6\">|</span>\r\n                  </span>\r\n\r\n                  <span>\r\n                    Cooking, Food\r\n                    <span class=\"m-l-3 m-r-6\">|</span>\r\n                  </span>\r\n\r\n                  <span>\r\n                    8 Comments\r\n                  </span>\r\n                </div>\r\n\r\n                <p class=\"p-b-25\">\r\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit amet tempor magna. Donec eros sem, porta eget leo et, varius eleifend mauris. Donec eu leo congue, faucibus quam eu, viverra mauris. Nulla consectetur lorem mi, at scelerisque metus hendrerit vitae. Proin vel magna vel neque porta ultricies non eget mauris. Suspendisse potenti.\r\n                </p>\r\n\r\n                <p class=\"p-b-25\">\r\n                  Aliquam faucibus scelerisque placerat. Vestibulum vel libero eu nulla varius pretium eget eu magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean dictum faucibus felis, ac vestibulum risus mollis in. Phasellus neque dolor, euismod vitae auctor eget, dignissim a felis. Etiam malesuada elit a nibh aliquam, placerat ultricies nibh dictum. Nam ut egestas velit. Pellentesque viverra tincidunt tellus. Etiam cursus, ligula id vehicula cursus, turpis mauris facilisis massa, eget tincidunt est purus et odio. Nam quis luctus libero, non posuere velit. Ut eu varius diam, eu euismod elit. Donec efficitur, neque eu consectetur consectetur, dui sem consectetur felis, vitae rutrum risus urna vel arcu. Aliquam semper ullamcorper laoreet. Sed arcu lectus, fermentum imperdiet purus eu, ornare ornare libero.\r\n                </p>\r\n              </div>\r\n\r\n              <div class=\"flex-m flex-w p-t-20\">\r\n                <span class=\"s-text20 p-r-20\">\r\n                  Tags\r\n                </span>\r\n\r\n                <div class=\"wrap-tags flex-w\">\r\n                  <a href=\"#\" class=\"tag-item\">\r\n                    Streetstyle\r\n                  </a>\r\n\r\n                  <a href=\"#\" class=\"tag-item\">\r\n                    Crafts\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Leave a comment -->\r\n            <form class=\"leave-comment\">\r\n              <h4 class=\"m-text25 p-b-14\">\r\n                Leave a Comment\r\n              </h4>\r\n\r\n              <p class=\"s-text8 p-b-40\">\r\n                Your email address will not be published. Required fields are marked *\r\n              </p>\r\n\r\n              <textarea class=\"dis-block s-text7 size18 bo12 p-l-18 p-r-18 p-t-13 m-b-20\" name=\"comment\" placeholder=\"Comment...\"></textarea>\r\n\r\n              <div class=\"bo12 of-hidden size19 m-b-20\">\r\n                <input class=\"sizefull s-text7 p-l-18 p-r-18\" type=\"text\" name=\"name\" placeholder=\"Name *\">\r\n              </div>\r\n\r\n              <div class=\"bo12 of-hidden size19 m-b-20\">\r\n                <input class=\"sizefull s-text7 p-l-18 p-r-18\" type=\"text\" name=\"email\" placeholder=\"Email *\">\r\n              </div>\r\n\r\n              <div class=\"bo12 of-hidden size19 m-b-30\">\r\n                <input class=\"sizefull s-text7 p-l-18 p-r-18\" type=\"text\" name=\"website\" placeholder=\"Website\">\r\n              </div>\r\n\r\n              \r\n            </form>\r\n\r\n            <div class=\"w-size24\">\r\n              <!-- Button -->\r\n              <button class=\"flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4\">\r\n                Post Comment\r\n              </button>\r\n            </div>\r\n              \r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 col-lg-3 p-b-80\">\r\n          <div class=\"rightbar\">\r\n            <!-- Search -->\r\n            <div class=\"pos-relative bo11 of-hidden\">\r\n              <input class=\"s-text7 size16 p-l-23 p-r-50\" type=\"text\" name=\"search-product\" placeholder=\"Search\">\r\n\r\n              <button class=\"flex-c-m size5 ab-r-m color1 color0-hov trans-0-4\">\r\n                <i class=\"fs-13 fa fa-search\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n\r\n            <!-- Categories -->\r\n            <h4 class=\"m-text23 p-t-56 p-b-34\">\r\n              Categories\r\n            </h4>\r\n\r\n            <ul>\r\n              <li class=\"p-t-6 p-b-8 bo6\">\r\n                <a href=\"#\" class=\"s-text13 p-t-5 p-b-5\">\r\n                  Fashion\r\n                </a>\r\n              </li>\r\n\r\n              <li class=\"p-t-6 p-b-8 bo7\">\r\n                <a href=\"#\" class=\"s-text13 p-t-5 p-b-5\">\r\n                  Beauty\r\n                </a>\r\n              </li>\r\n\r\n              <li class=\"p-t-6 p-b-8 bo7\">\r\n                <a href=\"#\" class=\"s-text13 p-t-5 p-b-5\">\r\n                  Street Style\r\n                </a>\r\n              </li>\r\n\r\n              <li class=\"p-t-6 p-b-8 bo7\">\r\n                <a href=\"#\" class=\"s-text13 p-t-5 p-b-5\">\r\n                  Life Style\r\n                </a>\r\n              </li>\r\n\r\n              <li class=\"p-t-6 p-b-8 bo7\">\r\n                <a href=\"#\" class=\"s-text13 p-t-5 p-b-5\">\r\n                  DIY & Crafts\r\n                </a>\r\n              </li>\r\n            </ul>\r\n\r\n            <!-- Featured Products -->\r\n            <h4 class=\"m-text23 p-t-65 p-b-34\">\r\n              Featured Products\r\n            </h4>\r\n\r\n            <ul class=\"bgwhite\">\r\n              <li class=\"flex-w p-b-20\">\r\n                <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/detalle']\" class=\"dis-block wrap-pic-w w-size22 m-r-20 trans-0-4 hov4\">\r\n                  <img src=\"assets/images/item-02.jpg\" alt=\"IMG-PRODUCT\">\r\n                </a>\r\n\r\n                <div class=\"w-size23 p-t-5\">\r\n                  <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/detalle']\" class=\"s-text20\">\r\n                    White Shirt With Pleat Detail Back\r\n                  </a>\r\n\r\n                  <span class=\"dis-block s-text17 p-t-6\">\r\n                    $19.00\r\n                  </span>\r\n                </div>\r\n              </li>\r\n\r\n              <li class=\"flex-w p-b-20\">\r\n                <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/detalle']\" class=\"dis-block wrap-pic-w w-size22 m-r-20 trans-0-4 hov4\">\r\n                  <img src=\"assets/images/item-02.jpg\" alt=\"IMG-PRODUCT\">\r\n                </a>\r\n\r\n                <div class=\"w-size23 p-t-5\">\r\n                  <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/detalle']\" class=\"s-text20\">\r\n                    Converse All Star Hi Black Canvas\r\n                  </a>\r\n\r\n                  <span class=\"dis-block s-text17 p-t-6\">\r\n                    $39.00\r\n                  </span>\r\n                </div>\r\n              </li>\r\n\r\n              <li class=\"flex-w p-b-20\">\r\n                <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/detalle']\" class=\"dis-block wrap-pic-w w-size22 m-r-20 trans-0-4 hov4\">\r\n                  <img src=\"assets/images/item-02.jpg\" alt=\"IMG-PRODUCT\">\r\n                </a>\r\n\r\n                <div class=\"w-size23 p-t-5\">\r\n                  <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/detalle']\" class=\"s-text20\">\r\n                    Nixon Porter Leather Watch In Tan\r\n                  </a>\r\n\r\n                  <span class=\"dis-block s-text17 p-t-6\">\r\n                    $17.00\r\n                  </span>\r\n                </div>\r\n              </li>\r\n\r\n              <li class=\"flex-w p-b-20\">\r\n                <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/detalle']\" class=\"dis-block wrap-pic-w w-size22 m-r-20 trans-0-4 hov4\">\r\n                  <img src=\"assets/images/item-02.jpg\" alt=\"IMG-PRODUCT\">\r\n                </a>\r\n\r\n                <div class=\"w-size23 p-t-5\">\r\n                  <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/detalle']\" class=\"s-text20\">\r\n                    Denim jacket blue\r\n                  </a>\r\n\r\n                  <span class=\"dis-block s-text17 p-t-6\">\r\n                    $39.00\r\n                  </span>\r\n                </div>\r\n              </li>\r\n\r\n              <li class=\"flex-w p-b-20\">\r\n                <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/detalle']\" class=\"dis-block wrap-pic-w w-size22 m-r-20 trans-0-4 hov4\">\r\n                  <img src=\"assets/images/item-02.jpg\" alt=\"IMG-PRODUCT\">\r\n                </a>\r\n\r\n                <div class=\"w-size23 p-t-5\">\r\n                  <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/detalle']\" class=\"s-text20\">\r\n                    Nixon Porter Leather Watch In Tan\r\n                  </a>\r\n\r\n                  <span class=\"dis-block s-text17 p-t-6\">\r\n                    $17.00\r\n                  </span>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n\r\n            <!-- Archive -->\r\n            <h4 class=\"m-text23 p-t-50 p-b-16\">\r\n              Archive\r\n            </h4>\r\n\r\n            <ul>\r\n              <li class=\"flex-sb-m\">\r\n                <a href=\"#\" class=\"s-text13 p-t-5 p-b-5\">\r\n                  July 2018\r\n                </a>\r\n\r\n                <span class=\"s-text13\">\r\n                  (9)\r\n                </span>\r\n              </li>\r\n\r\n              <li class=\"flex-sb-m\">\r\n                <a href=\"#\" class=\"s-text13 p-t-5 p-b-5\">\r\n                  June 2018\r\n                </a>\r\n\r\n                <span class=\"s-text13\">\r\n                  (39)\r\n                </span>\r\n              </li>\r\n\r\n              <li class=\"flex-sb-m\">\r\n                <a href=\"#\" class=\"s-text13 p-t-5 p-b-5\">\r\n                  May 2018\r\n                </a>\r\n\r\n                <span class=\"s-text13\">\r\n                  (29)\r\n                </span>\r\n              </li>\r\n\r\n              <li class=\"flex-sb-m\">\r\n                <a href=\"#\" class=\"s-text13 p-t-5 p-b-5\">\r\n                  April  2018\r\n                </a>\r\n\r\n                <span class=\"s-text13\">\r\n                  (35)\r\n                </span>\r\n              </li>\r\n\r\n              <li class=\"flex-sb-m\">\r\n                <a href=\"#\" class=\"s-text13 p-t-5 p-b-5\">\r\n                  March 2018\r\n                </a>\r\n\r\n                <span class=\"s-text13\">\r\n                  (22)\r\n                </span>\r\n              </li>\r\n\r\n              <li class=\"flex-sb-m\">\r\n                <a href=\"#\" class=\"s-text13 p-t-5 p-b-5\">\r\n                  February 2018\r\n                </a>\r\n\r\n                <span class=\"s-text13\">\r\n                  (32)\r\n                </span>\r\n              </li>\r\n\r\n              <li class=\"flex-sb-m\">\r\n                <a href=\"#\" class=\"s-text13 p-t-5 p-b-5\">\r\n                  January 2018\r\n                </a>\r\n\r\n                <span class=\"s-text13\">\r\n                  (21)\r\n                </span>\r\n              </li>\r\n\r\n              <li class=\"flex-sb-m\">\r\n                <a href=\"#\" class=\"s-text13 p-t-5 p-b-5\">\r\n                  December 2017\r\n                </a>\r\n\r\n                <span class=\"s-text13\">\r\n                  (26)\r\n                </span>\r\n              </li>\r\n            </ul>\r\n\r\n            <!-- Tags -->\r\n            <h4 class=\"m-text23 p-t-50 p-b-25\">\r\n              Tags\r\n            </h4>\r\n\r\n            <div class=\"wrap-tags flex-w\">\r\n              <a href=\"#\" class=\"tag-item\">\r\n                Fashion\r\n              </a>\r\n\r\n              <a href=\"#\" class=\"tag-item\">\r\n                Lifestyle\r\n              </a>\r\n\r\n              <a href=\"#\" class=\"tag-item\">\r\n                Denim\r\n              </a>\r\n\r\n              <a href=\"#\" class=\"tag-item\">\r\n                Streetstyle\r\n              </a>\r\n\r\n              <a href=\"#\" class=\"tag-item\">\r\n                Crafts\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>"

/***/ }),

/***/ "../../../../../src/app/views/luvas/blog-detalle/blog-detalle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogDetalleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ruta_service_ruta_service__ = __webpack_require__("../../../../../src/app/services/ruta-service/ruta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BlogDetalleComponent = /** @class */ (function () {
    function BlogDetalleComponent(http, router, rutaService, fb) {
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.fb = fb;
        this.slides = [
            { img: "http://placehold.it/350x150/000000" },
            { img: "http://placehold.it/350x150/111111" },
            { img: "http://placehold.it/350x150/333333" },
            { img: "http://placehold.it/350x150/666666" }
        ];
        this.slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };
    }
    BlogDetalleComponent.prototype.ngOnInit = function () {
        if (this.router.navigated) {
            window.scrollTo(0, 0);
        }
    };
    BlogDetalleComponent.prototype.addSlide = function () {
        this.slides.push({ img: "http://placehold.it/350x150/777777" });
    };
    BlogDetalleComponent.prototype.removeSlide = function () {
        this.slides.length = this.slides.length - 1;
    };
    BlogDetalleComponent.prototype.afterChange = function (e) {
        console.log('afterChange');
    };
    BlogDetalleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/luvas/blog-detalle/blog-detalle.component.html"),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_ruta_service_ruta_service__["a" /* RutaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_ruta_service_ruta_service__["a" /* RutaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object])
    ], BlogDetalleComponent);
    return BlogDetalleComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=blog-detalle.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/luvas/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alertaC\" *ngIf=\"alerta\">\r\n  <alert  [type]=\"alerta_tipo\" dismissible=\"true\" close=\"cerrarAlerta()\">\r\n    <strong>{{alerta_msg}}</strong> \r\n  </alert>\r\n</div>\r\n\r\n<div class=\"alertaC\" *ngIf=\"alerta_boton\">\r\n  <alert [type]=\"alerta_tipo\" >\r\n    <strong>{{alerta_msg}}</strong>\r\n    <button type=\"button\" class=\"btn btn4 btn-secondary\" (click)=\"ok_alerta()\">ok</button> \r\n  </alert>\r\n</div>\r\n\r\n  <!-- Title Page -->\r\n  <section *ngIf=\"!viendo\" class=\"bg-title-page p-t-40 p-b-50 flex-col-c-m\" style=\"background-image: url(http://beau-moda.com/images/banner.png);\">\r\n    <h2 class=\"l-text2 t-center\">\r\n      Blogs\r\n    </h2>\r\n  </section>\r\n\r\n  <!-- content page -->\r\n  <section *ngIf=\"!viendo\" class=\"bgwhite p-t-60\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 col-lg-9 p-b-75\">\r\n          <div class=\"p-r-50 p-r-0-lg\">\r\n            <!-- item blog -->\r\n            <div *ngFor=\"let blog of items\" class=\"item-blog p-b-80\">\r\n              <a routerLinkActive=\"active\" [routerLink]=\"\" (click)=\"ver(blog)\" class=\"item-blog-img pos-relative dis-block hov-img-zoom\">\r\n                <img src=\"{{blog.imagen}}\" style=\"width: 600px; height:600px\" alt=\"IMG-BLOG\">\r\n\r\n                <span class=\"item-blog-date dis-block flex-c-m pos1 size17 bg4 s-text1\">\r\n                  {{blog.created_at | date}}\r\n                </span>\r\n              </a>\r\n\r\n              <div class=\"item-blog-txt p-t-33\">\r\n                <h4 class=\"p-b-11\">\r\n                  <a routerLinkActive=\"active\" [routerLink]=\"\" (click)=\"ver(blog)\" class=\"m-text24\">\r\n                    {{blog.titulo}}\r\n                  </a>\r\n                </h4>\r\n\r\n                <div class=\"s-text8 flex-w flex-m p-b-21\">\r\n                  <span>\r\n                    By {{blog.creador}}\r\n                    <span class=\"m-l-3 m-r-6\">|</span>\r\n                  </span>\r\n\r\n                  <!-- <span>\r\n                    Cooking, Food\r\n                    <span class=\"m-l-3 m-r-6\">|</span>\r\n                  </span> -->\r\n\r\n                  <span>\r\n                    {{blog.count_comments}} Comments\r\n                  </span>\r\n                </div>\r\n\r\n                <p class=\"p-b-12\">\r\n                  {{blog.contenido}}\r\n                </p>\r\n\r\n                <a routerLinkActive=\"active\" [routerLink]=\"\" (click)=\"ver(blog)\" class=\"s-text20\">\r\n                  Continue Reading\r\n                  <i class=\"fa fa-long-arrow-right m-l-8\" aria-hidden=\"true\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <!-- Pagination -->\r\n          <div class=\"pagination flex-m flex-w p-r-50\">\r\n            <!-- <a href=\"#\" class=\"item-pagination flex-c-m trans-0-4 active-pagination\">1</a>\r\n            <a href=\"#\" class=\"item-pagination flex-c-m trans-0-4\">2</a> -->\r\n\r\n            <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\r\n              <div class=\"btn-group\">\r\n                 <label style=\"margin-top:14px\">Pag {{currentIndex}}/{{pageNumber}} </label>\r\n              </div>\r\n              <div style=\"margin-left:16px\" class=\"btn-group pull-right\">\r\n                 <ul class=\"pagination\" >\r\n                    <li [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a class=\"item-pagination flex-c-m trans-0-4\"  (click)=\"prevPage()\" > - </a></li>\r\n                       <li *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\r\n                          <a class=\"item-pagination flex-c-m trans-0-4\" (click)=\"setPage(page)\"  >{{page}} </a>\r\n                       </li>\r\n                    <li [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a class=\"item-pagination flex-c-m trans-0-4\"   (click)=\"nextPage()\" > + </a></li>\r\n                 </ul>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 col-lg-3 p-b-75\">\r\n          <div class=\"rightbar\">\r\n            <!-- Search -->\r\n            <div class=\"pos-relative bo11 of-hidden\">\r\n              <input class=\"s-text7 size16 p-l-23 p-r-50\" type=\"text\" name=\"search-product\" placeholder=\"Search\" id=\"inputName\" [(ngModel)]=\"inputName\" (ngModelChange)=\"FilterByName()\">\r\n\r\n              <button class=\"flex-c-m size5 ab-r-m color1 color0-hov trans-0-4\">\r\n                <i class=\"fs-13 fa fa-search\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n\r\n            <!-- Featured Products -->\r\n            <h4 class=\"m-text23 p-t-65 p-b-34\">\r\n              Featured Products\r\n            </h4>\r\n\r\n            <ul class=\"bgwhite\">\r\n              <li *ngFor=\"let producto of masVendidos\" class=\"flex-w p-b-20\">\r\n                <a routerLinkActive=\"active\" [routerLink]=\"\" (click)=\"selectProducto(producto)\" class=\"dis-block wrap-pic-w w-size22 m-r-20 trans-0-4 hov4\">\r\n                  <img src=\"{{producto.color.imagen[0].src}}\" alt=\"IMG-PRODUCT\">\r\n                </a>\r\n\r\n                <div class=\"w-size23 p-t-5\">\r\n                  <a routerLinkActive=\"active\" [routerLink]=\"\" (click)=\"selectProducto(producto)\" class=\"s-text20\">\r\n                    {{producto.nombre}}\r\n                  </a>\r\n\r\n                  <span class=\"dis-block s-text17 p-t-6\">\r\n                    ${{producto.color.atributos[0].precio}}\r\n                  </span>\r\n                </div>\r\n              </li>\r\n\r\n              \r\n            </ul>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- breadcrumb -->\r\n  <div *ngIf=\"viendo\" class=\"bread-crumb bgwhite flex-w p-l-52 p-r-15 p-t-30 p-l-15-sm\">\r\n\r\n\r\n    <a routerLinkActive=\"active\" [routerLink]=\"\" (click)=\"atras()\" class=\"s-text16\">\r\n      Blog\r\n      <i class=\"fa fa-angle-right m-l-8 m-r-9\" aria-hidden=\"true\"></i>\r\n    </a>\r\n\r\n    <span class=\"s-text17\">\r\n      {{blogDetalle.titulo}}\r\n    </span>\r\n  </div>\r\n\r\n  <!-- content page -->\r\n  <section *ngIf=\"viendo\" class=\"bgwhite p-t-60 p-b-25\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 col-lg-9 p-b-80\">\r\n          <div class=\"p-r-50 p-r-0-lg\">\r\n            <div class=\"p-b-40\">\r\n              <div class=\"blog-detail-img wrap-pic-w\">\r\n                <img src=\"{{blogDetalle.imagen}}\" style=\"width: 600px; height:600px\" alt=\"IMG-BLOG\">\r\n              </div>\r\n\r\n              <div class=\"blog-detail-txt p-t-33\">\r\n                <h4 class=\"p-b-11 m-text24\">\r\n                  {{blogDetalle.titulo}}\r\n                </h4>\r\n\r\n                <div class=\"s-text8 flex-w flex-m p-b-21\">\r\n                  <span>\r\n                    By {{blogDetalle.creador}}\r\n                    <span class=\"m-l-3 m-r-6\">|</span>\r\n                  </span>\r\n\r\n                  <span>\r\n                    {{blogDetalle.created_at | date}}\r\n                    <span class=\"m-l-3 m-r-6\">|</span>\r\n                  </span>\r\n\r\n                  <!-- <span>\r\n                    Cooking, Food\r\n                    <span class=\"m-l-3 m-r-6\">|</span>\r\n                  </span> -->\r\n\r\n                  <span>\r\n                    {{blogDetalle.count_comments}} Comments\r\n                  </span>\r\n                </div>\r\n\r\n                <p class=\"p-b-25\">\r\n                  {{blogDetalle.contenido}}\r\n                </p>\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <!-- Leave a comment -->\r\n            <form [formGroup]=\"myFormComment\" novalidate class=\"leave-comment\">\r\n              <h4 class=\"m-text25 p-b-14\">\r\n                Leave a Comment\r\n              </h4>\r\n\r\n              <p class=\"s-text8 p-b-40\">\r\n                Your email address will not be published. Required fields are marked *\r\n              </p>\r\n\r\n              <textarea class=\"dis-block s-text7 size18 bo12 p-l-18 p-r-18 p-t-13 m-b-20\" name=\"comment\" placeholder=\"Comment...\" formControlName=\"comment\"></textarea>\r\n\r\n              <div class=\"bo12 of-hidden size19 m-b-20\">\r\n                <input class=\"sizefull s-text7 p-l-18 p-r-18\" type=\"text\" name=\"name\" placeholder=\"Name *\" formControlName=\"name\">\r\n              </div>\r\n\r\n              <div class=\"bo12 of-hidden size19 m-b-20\">\r\n                <input class=\"sizefull s-text7 p-l-18 p-r-18\" type=\"email\" name=\"email\" placeholder=\"Email *\" formControlName=\"email\">\r\n              </div>\r\n\r\n              <div class=\"bo12 of-hidden size19 m-b-30\">\r\n                <input class=\"sizefull s-text7 p-l-18 p-r-18\" type=\"text\" name=\"website\" placeholder=\"Website\" formControlName=\"website\">\r\n              </div>\r\n\r\n              \r\n            </form>\r\n\r\n            <div class=\"w-size24\">\r\n              <!-- Button -->\r\n              <button [disabled]=\"myFormComment.invalid\" (click)=\"crearComment()\" class=\"flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4\">\r\n                Post Comment\r\n              </button>\r\n            </div>\r\n\r\n            <div class=\"p-b-40\">\r\n\r\n              <div class=\"blog-detail-txt p-t-33\">\r\n                <h4 class=\"p-b-11 m-text20\">\r\n                  Comments\r\n                </h4>\r\n              \r\n                <div *ngFor=\"let comment of blogDetalle.comments\">\r\n                  <div class=\"s-text8 flex-w flex-m p-b-21\">\r\n                    <span>\r\n                      By {{comment.name}}\r\n                      <span class=\"m-l-3 m-r-6\">|</span>\r\n                    </span>\r\n\r\n                    <span>\r\n                      {{comment.created_at | date}}\r\n                    </span>\r\n\r\n                  </div>\r\n\r\n                  <p class=\"p-b-25\">\r\n                    {{comment.comment}}\r\n                  </p>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n              \r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 col-lg-3 p-b-80\">\r\n          <div class=\"rightbar\">\r\n            <!-- Search -->\r\n            <!-- <div class=\"pos-relative bo11 of-hidden\">\r\n              <input class=\"s-text7 size16 p-l-23 p-r-50\" type=\"text\" name=\"search-product\" placeholder=\"Search\">\r\n            \r\n              <button class=\"flex-c-m size5 ab-r-m color1 color0-hov trans-0-4\">\r\n                <i class=\"fs-13 fa fa-search\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div> -->\r\n\r\n            <!-- Featured Products -->\r\n            <h4 class=\"m-text23 p-t-65 p-b-34\">\r\n              Featured Products\r\n            </h4>\r\n\r\n            <ul class=\"bgwhite\">\r\n              <li *ngFor=\"let producto of masVendidos\" class=\"flex-w p-b-20\">\r\n                <a routerLinkActive=\"active\" [routerLink]=\"\" (click)=\"selectProducto(producto)\" class=\"dis-block wrap-pic-w w-size22 m-r-20 trans-0-4 hov4\">\r\n                  <img src=\"{{producto.color.imagen[0].src}}\" alt=\"IMG-PRODUCT\">\r\n                </a>\r\n\r\n                <div class=\"w-size23 p-t-5\">\r\n                  <a routerLinkActive=\"active\" [routerLink]=\"\" (click)=\"selectProducto(producto)\" class=\"s-text20\">\r\n                    {{producto.nombre}}\r\n                  </a>\r\n\r\n                  <span class=\"dis-block s-text17 p-t-6\">\r\n                    ${{producto.color.atributos[0].precio}}\r\n                  </span>\r\n                </div>\r\n              </li>\r\n\r\n            </ul>\r\n            \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n<div class=\"my-container\">\r\n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/luvas/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ruta_service_ruta_service__ = __webpack_require__("../../../../../src/app/services/ruta-service/ruta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BlogComponent = /** @class */ (function () {
    function BlogComponent(http, router, rutaService, fb) {
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.fb = fb;
        this.loading = false;
        this.editando = false;
        this.agregando = false;
        this.mostrar = true;
        this.alerta = false;
        this.alerta_boton = false;
        this.viendo = false;
        this.slides = [
            { img: "http://placehold.it/350x150/000000" },
            { img: "http://placehold.it/350x150/111111" },
            { img: "http://placehold.it/350x150/333333" },
            { img: "http://placehold.it/350x150/666666" }
        ];
        this.slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };
        this.pages = 4;
        this.pageSize = 5;
        this.pageNumber = 0;
        this.currentIndex = 1;
        this.pageStart = 1;
        this.inputName = '';
        this.myFormComment = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required]],
            website: [''],
            comment: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required]]
        });
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.navigated) {
            window.scrollTo(0, 0);
        }
        this.getProdsMasVendidos();
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'blogs?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.blogs = _this.data.blogs;
            _this.itemsCopy = _this.blogs;
            //this.productList = this.data.blogs;
            //this.filteredItems = this.productList;
            _this.filteredItems = _this.blogs;
            _this.init();
            /*Filtrar blog*/
            var blogFilter = localStorage.getItem('luvas_blogFilter');
            var blogAux = JSON.parse(blogFilter);
            if (blogAux) {
                _this.ver(blogAux);
            }
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
    BlogComponent.prototype.ngOnDestroy = function () {
        // acciones de destrucción
        localStorage.setItem('luvas_blogFilter', null);
    };
    BlogComponent.prototype.addSlide = function () {
        this.slides.push({ img: "http://placehold.it/350x150/777777" });
    };
    BlogComponent.prototype.removeSlide = function () {
        this.slides.length = this.slides.length - 1;
    };
    BlogComponent.prototype.afterChange = function (e) {
        console.log('afterChange');
    };
    //Alerta cuando se vence el token
    BlogComponent.prototype.ok_alerta = function () {
        this.router.navigate(['luvas']);
    };
    BlogComponent.prototype.cerrarAlerta = function () {
        this.alerta = false;
    };
    BlogComponent.prototype.ver = function (blog) {
        var _this = this;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'blogs/detalle/' + blog.id + '?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.blogDetalle = _this.data.blog;
            _this.viendo = true;
            _this.loading = false;
            window.scrollTo(0, 0);
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
    BlogComponent.prototype.atras = function () {
        this.viendo = false;
        this.myFormComment.reset();
    };
    BlogComponent.prototype.crearComment = function () {
        var _this = this;
        console.log(this.myFormComment.value);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('luvas_token'),
            name: this.myFormComment.value.name,
            email: this.myFormComment.value.email,
            website: this.myFormComment.value.website,
            comment: this.myFormComment.value.comment,
            blog_id: this.blogDetalle.id
        };
        this.http.post(this.rutaService.getRutaApi() + 'comments/blogs', datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.blogDetalle.count_comments = _this.blogDetalle.count_comments + 1;
            _this.blogDetalle.comments.unshift(_this.data.comment);
            _this.myFormComment.reset();
            for (var i = 0; i < _this.blogs.length; i++) {
                if (_this.blogs[i].id == _this.blogDetalle.id) {
                    _this.blogs[i].count_comments = _this.blogs[i].count_comments + 1;
                }
            }
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
    /*Trae los  6productos mas vendidos*/
    BlogComponent.prototype.getProdsMasVendidos = function () {
        var _this = this;
        //this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'productos/mas/vendidos?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.masVendidos = _this.data.masVendidos;
            //this.loading = false;    
        }, function (msg) {
            msg.error = JSON.parse(msg.error);
            console.log(msg);
            console.log(msg.error.error);
            //this.loading = false;
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
                _this.alerta_tipo = 'info';
                _this.alerta_msg = msg.error.error;
                _this.alerta = true;
                setTimeout(function () { _this.alerta = false; }, 4000);
            }
        });
    };
    BlogComponent.prototype.selectProducto = function (producto) {
        var prod = JSON.stringify(producto);
        localStorage.setItem('luvas_prodFilter', prod);
        this.router.navigateByUrl('/luvas/productos');
    };
    /*Filtrar por titulo*/
    BlogComponent.prototype.search = function () {
        var term = this.searchTerm.toLowerCase();
        this.blogs = this.itemsCopy.filter(function (tag) {
            return tag.titulo.toLowerCase().indexOf(term) >= 0;
        });
    };
    BlogComponent.prototype.autoScroll = function () {
        window.scrollTo(0, 0);
    };
    BlogComponent.prototype.init = function () {
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
    BlogComponent.prototype.FilterByName = function () {
        this.filteredItems = [];
        if (this.inputName != "") {
            for (var i = 0; i < this.blogs.length; ++i) {
                if (this.blogs[i].titulo.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.blogs[i]);
                } /*else if (this.blogs[i].email.toUpperCase().indexOf(this.inputName.toUpperCase())>=0) {
                   this.filteredItems.push(this.blogs[i]);
                }*/
            }
        }
        else {
            this.filteredItems = this.blogs;
        }
        console.log(this.filteredItems);
        this.init();
    };
    BlogComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    BlogComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    BlogComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
        this.autoScroll();
    };
    BlogComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
        this.autoScroll();
    };
    BlogComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
        this.autoScroll();
    };
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/luvas/blog/blog.component.html"),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_ruta_service_ruta_service__["a" /* RutaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_ruta_service_ruta_service__["a" /* RutaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object])
    ], BlogComponent);
    return BlogComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/luvas/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alertaC {\r\n  position: fixed !important;\r\n  z-index: 1000 !important;\r\n  /* top: 70px !important; */\r\n  right: 10px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/luvas/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alertaC\"  *ngIf=\"alerta\">\r\n  <alert  [type]=\"alerta_tipo\" dismissible=\"true\" close=\"cerrarAlerta()\">\r\n    <strong>{{alerta_msg}}</strong> \r\n  </alert>\r\n</div> \r\n\r\n<div class=\"alertaC\" *ngIf=\"alerta_boton\">\r\n  <alert [type]=\"alerta_tipo\" >\r\n    <strong>{{alerta_msg}}</strong>\r\n    <button type=\"button\" class=\"btn btn4 btn-secondary\" (click)=\"ok_alerta()\">ok</button> \r\n  </alert>\r\n</div>\r\n\r\n<!--Modal automatica para el login:\r\n <button type=\"button\" class=\"btn btn-primary\" (click)=\"showModal()\">Render auto-shown modal</button>-->\r\n<div *ngIf=\"isModalShown\" [config]=\"{ show: true, ignoreBackdropClick: true, keyboard: false }\" (onHidden)=\"onHidden()\" bsModal #autoShownModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Login</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        \r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n  <!-- content page -->\r\n  <section class=\"bgwhite p-t-66 p-b-60\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n\r\n        <div style=\"display:block; margin:auto\" class=\"col-md-6 p-b-30\">\r\n          <form [formGroup]=\"myFormLogin\" novalidate class=\"leave-comment\">\r\n            <h4 class=\"m-text26 p-b-36 p-t-15\">\r\n              Enter your data\r\n            </h4>\r\n\r\n            <div *ngIf=\"myFormLogin.get('email').errors && myFormLogin.get('email').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormLogin.get('email').hasError('required')\">Email is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"text\" name=\"email\" placeholder=\"Email Address\" formControlName=\"email\">\r\n            </div>\r\n\r\n            <div *ngIf=\"myFormLogin.get('password').errors && myFormLogin.get('password').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormLogin.get('password').hasError('required')\">Password is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"password\" name=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n            </div>\r\n\r\n            \r\n          </form>\r\n\r\n          <div class=\"w-size25\">\r\n            <!-- Button -->\r\n            <button class=\"flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" [disabled]=\"myFormLogin.invalid\" (click)=\"login(); hideModal()\">\r\n              Login\r\n            </button>\r\n          </div>\r\n\r\n          <button class=\"btn btn-facebook\" type=\"button\" style=\"margin-top: 16px\" (click)=\"hideModal()\"><span>facebook</span></button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>            \r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <div class=\"w-size25\">\r\n          <!-- Button -->\r\n          <button class=\"flex-c-m size1 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" (click)=\"hideModal(); irARegistro()\">\r\n            Subscribe\r\n          </button>\r\n        </div>\r\n        <div class=\"w-size25\">\r\n          <!-- Button -->\r\n          <button class=\"flex-c-m size1 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" (click)=\"hideModal()\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--Modal automatica para seleccionar el metodo de pago:\r\n <button type=\"button\" class=\"btn btn-primary\" (click)=\"showModal()\">Render auto-shown modal</button>-->\r\n<div *ngIf=\"isModalShown2\" [config]=\"{ show: true, ignoreBackdropClick: true, keyboard: false }\" (onHidden)=\"onHidden2()\" bsModal #autoShownModal2=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Payment method</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal2()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        \r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n  <!-- content page -->\r\n  <section class=\"bgwhite p-t-66 p-b-60\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n\r\n        <div style=\"display:block; margin:auto\" class=\"col-md-9 p-b-30\">\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-md-3 form-control-label\">Methods</label>\r\n\r\n            <div class=\"col-md-9\">\r\n              <div class=\"radio\">\r\n                <label for=\"radio1\">\r\n                  <input type=\"radio\" id=\"radio1\" name=\"radios\" value=\"option1\" (click)=\"hideModal2(); getBancos(); setTransferencia()\"> Transfer\r\n                </label>\r\n              </div>\r\n              <div class=\"radio\">\r\n                <label for=\"radio2\">\r\n                  <input type=\"radio\" id=\"radio2\" name=\"radios\" value=\"option2\" (click)=\"hideModal2(); myModal3.show(); setPayPal()\"> PayPal\r\n                </label>\r\n              </div>\r\n              \r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>          \r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <div class=\"w-size25\">\r\n          <!-- Button -->\r\n          <button class=\"flex-c-m size1 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" (click)=\"hideModal2(); irAMisPedidos()\">\r\n             Pay later\r\n          </button>\r\n        </div>\r\n        <div class=\"w-size25\">\r\n          <!-- Button -->\r\n          <button class=\"flex-c-m size1 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" (click)=\"hideModal2()\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--Modal para presentar los datos de la transferencia-->\r\n<div bsModal #myModal2=\"bs-modal\" [config]=\"{ ignoreBackdropClick: true, keyboard: false }\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Transfer </h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"myModal2.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        \r\n  <!-- content page -->\r\n  <section class=\"bgwhite p-t-66 p-b-60\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n\r\n        <div style=\"display:block; margin:auto\" class=\"col-md-6 p-b-30\">\r\n          \r\n          <form [formGroup]=\"myFormPago\" novalidate class=\"leave-comment\">\r\n            <h4 class=\"m-text26 p-b-36 p-t-15\">\r\n              Data for the transfer\r\n            </h4>\r\n\r\n            <div *ngFor = \"let banco of bancos\">\r\n              <span class=\"danger\" color=\"danger\"><strong>Account number:</strong> {{banco.cuenta}}</span>\r\n              <br>\r\n\r\n              <span class=\"danger\" color=\"danger\"><strong>Headline:</strong> {{banco.titular}}</span>\r\n              <br>\r\n\r\n              <span class=\"danger\" color=\"danger\"><strong>Email:</strong> {{banco.email}}</span>\r\n              <br>\r\n\r\n              <span class=\"danger\" color=\"danger\"><strong>Num document:</strong> {{banco.num_documento}}</span>\r\n              <br>\r\n\r\n              <span class=\"danger\" color=\"danger\"><strong>Account type:</strong> {{banco.tipo_cuenta}}</span>\r\n              <br>\r\n              <br>\r\n              <br>\r\n            </div>\r\n\r\n            <div *ngIf=\"myFormPago.get('ref_pago').errors && myFormPago.get('ref_pago').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormPago.get('ref_pago').hasError('required')\">Reference is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"text\" name=\"ref_pago\" placeholder=\"Reference\" formControlName=\"ref_pago\">\r\n            </div>\r\n            \r\n          </form>\r\n\r\n          <div class=\"w-size25\">\r\n            <!-- Button -->\r\n            <button class=\"flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" [disabled]=\"myFormPago.invalid\" (click)=\"pagar(); myModal2.hide()\">\r\n              pay\r\n            </button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> \r\n\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <div class=\"w-size25\">\r\n          <!-- Button -->\r\n          <button class=\"flex-c-m size1 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" (click)=\"myModal2.hide(); irAMisPedidos()\">\r\n            Pay later\r\n          </button>\r\n        </div>\r\n        <div class=\"w-size25\">\r\n          <!-- Button -->\r\n          <button class=\"flex-c-m size1 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" (click)=\"myModal2.hide()\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<!--Modal para el pago con paypal-->\r\n<div bsModal #myModal3=\"bs-modal\" [config]=\"{ ignoreBackdropClick: true, keyboard: false }\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Transfer </h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"myModal3.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        \r\n  <!-- content page -->\r\n  <section class=\"bgwhite p-t-66 p-b-60\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n\r\n        <div style=\"display:block; margin:auto\" class=\"col-md-6 p-b-30\">\r\n          \r\n          <form [formGroup]=\"myFormPago\" novalidate class=\"leave-comment\">\r\n            <h4 class=\"m-text26 p-b-36 p-t-15\">\r\n              Data PayPal\r\n            </h4>\r\n\r\n            \r\n           \r\n            <br>\r\n            <br>\r\n\r\n\r\n            <div *ngIf=\"myFormPago.get('ref_pago').errors && myFormPago.get('ref_pago').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormPago.get('ref_pago').hasError('required')\">Reference is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"text\" name=\"ref_pago\" placeholder=\"Reference\" formControlName=\"ref_pago\">\r\n            </div>\r\n            \r\n          </form>\r\n\r\n          <div class=\"w-size25\">\r\n            <!-- Button -->\r\n            <button class=\"flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" [disabled]=\"myFormPago.invalid\" (click)=\"pagar(); myModal3.hide()\">\r\n              pay\r\n            </button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> \r\n\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <div class=\"w-size25\">\r\n          <!-- Button -->\r\n          <button class=\"flex-c-m size1 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" (click)=\"myModal3.hide(); irAMisPedidos()\">\r\n            Pay later\r\n          </button>\r\n        </div>\r\n        <div class=\"w-size25\">\r\n          <!-- Button -->\r\n          <button class=\"flex-c-m size1 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" (click)=\"myModal3.hide()\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n  <!-- Title Page -->\r\n  <section class=\"bg-title-page p-t-40 p-b-50 flex-col-c-m\" style=\"background-image: url(http://beau-moda.com/images/banner.png);\">\r\n    <h2 class=\"l-text2 t-center\">\r\n      Cart\r\n    </h2>\r\n  </section>\r\n\r\n  <!-- Cart -->\r\n  <section class=\"cart bgwhite p-t-70 p-b-100\">\r\n    <div class=\"container\">\r\n      <!-- Cart item -->\r\n      <div class=\"container-table-cart pos-relative\">\r\n        <div class=\"wrap-table-shopping-cart bgwhite\">\r\n          <table class=\"table-shopping-cart\">\r\n            <tr class=\"table-head\">\r\n              <th class=\"column-1\"></th>\r\n              <th class=\"column-2\">Product</th>\r\n              <!-- <th class=\"column-3\">Size</th> -->\r\n              <th class=\"column-3\">Price</th>\r\n              <th class=\"column-4 p-l-70\">Quantity</th>\r\n              <th class=\"column-5\">Total</th>\r\n            </tr>\r\n\r\n            <tr *ngFor=\"let item of items\" class=\"table-row\">\r\n              <td class=\"column-1\">\r\n                <div (click)=\"removeItem(item)\" class=\"cart-img-product b-rad-4 o-f-hidden\">\r\n                  <img src=\"{{item.colores[0].imagen[0].src}}\" alt=\"IMG-PRODUCT\">\r\n                </div>\r\n              </td>\r\n              <td class=\"column-2\">{{item.nombre}} ({{item.colores[0].atributos[0].atributo}})</td>\r\n              <!-- <td class=\"column-3\">{{item.colores[0].atributos[0].atributo}}</td> -->\r\n              <td class=\"column-3\">${{item.colores[0].atributos[0].precio}}</td>\r\n              <td class=\"column-4\">\r\n                <div class=\"flex-w bo5 of-hidden w-size17\">\r\n                  <button [disabled]=\"myFormPago.value.pedido_id != 0 ||item.cantidad == 1\" (click)=\"restarCantidad(item)\" class=\"btn-num-product-down color1 flex-c-m size7 bg8 eff2\">\r\n                    <i class=\"fs-12 fa fa-minus\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n\r\n                  <input [disabled]=\"myFormPago.value.pedido_id != 0\" [(ngModel)]=\"item.cantidad\" class=\"size8 m-text18 t-center num-product\" type=\"number\" name=\"num-product1\" (change)=\"setCantidad(item)\">\r\n\r\n                  <button [disabled]=\"myFormPago.value.pedido_id != 0 || item.cantidad == item.colores[0].atributos[0].cantidad\" (click)=\"sumarCantidad(item)\" class=\"btn-num-product-up color1 flex-c-m size7 bg8 eff2\">\r\n                    <i class=\"fs-12 fa fa-plus\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </td>\r\n              <td class=\"column-5\">${{item.colores[0].atributos[0].precio * item.cantidad}}</td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <div class=\"flex-w flex-sb-m p-t-25 p-b-25 bo8 p-l-35 p-r-60 p-lr-15-sm\">\r\n        <div class=\"flex-w flex-m w-full-sm\">\r\n          <div class=\"size11 bo4 m-r-10\">\r\n            <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"text\" name=\"coupon-code\" placeholder=\"Coupon Code\">\r\n          </div>\r\n        \r\n          <div class=\"size12 trans-0-4 m-t-10 m-b-10 m-r-10\">\r\n            Button\r\n            <button class=\"flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n              Apply coupon\r\n            </button>\r\n          </div>\r\n        </div>\r\n      \r\n        <div class=\"size10 trans-0-4 m-t-10 m-b-10\">\r\n          Button\r\n          <button class=\"flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n            Update Cart\r\n          </button>\r\n        </div>\r\n      </div> -->\r\n\r\n      <!-- Total -->\r\n      <div class=\"bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm\">\r\n        <h5 class=\"m-text20 p-b-24\">\r\n          Cart Totals\r\n        </h5>\r\n\r\n        <!--  -->\r\n        <div class=\"flex-w flex-sb-m p-b-12\">\r\n          <span class=\"s-text18 w-size19 w-full-sm\">\r\n            Subtotal:\r\n          </span>\r\n\r\n          <span class=\"m-text21 w-size20 w-full-sm\">\r\n            ${{total}}\r\n          </span>\r\n        </div>\r\n\r\n        <!--  -->\r\n        <div class=\"flex-w flex-sb bo10 p-t-15 p-b-20\">\r\n          <span class=\"s-text18 w-size19 w-full-sm\">\r\n            Shipping:\r\n          </span>\r\n          \r\n          <div class=\"w-size20 w-full-sm\">\r\n            <form [formGroup]=\"myFormEnvio\" novalidate>\r\n            <!-- <p class=\"s-text8 p-b-23\">\r\n              There are no shipping methods available. Please double check your address, or contact us if you need any help.\r\n            </p>\r\n            \r\n            <span class=\"s-text19\">\r\n              Shipping\r\n            </span> -->\r\n\r\n            <!-- <div class=\"rs2-select2 rs3-select2 rs4-select2 bo4 of-hidden w-size21 m-t-8 m-b-12\">\r\n              <select class=\"selection-2\" name=\"country\">\r\n                <option>Select a country...</option>\r\n                <option>US</option>\r\n                <option>UK</option>\r\n                <option>Japan</option>\r\n              </select>\r\n            </div> -->\r\n\r\n            <div class=\"size13 bo4 m-b-12\">\r\n            <input class=\"sizefull s-text7 p-l-15 p-r-15\" type=\"text\" name=\"country\" placeholder=\"Country\" formControlName=\"country\">\r\n            </div>\r\n\r\n            <div class=\"size13 bo4 m-b-12\">\r\n            <input class=\"sizefull s-text7 p-l-15 p-r-15\" type=\"text\" name=\"state\" placeholder=\"State /  City\" formControlName=\"state\">\r\n            </div>\r\n\r\n            <div class=\"size13 bo4 m-b-22\">\r\n              <input class=\"sizefull s-text7 p-l-15 p-r-15\" type=\"text\" name=\"postcode\" placeholder=\"Postcode / Zip\" formControlName=\"postcode\">\r\n            </div>\r\n\r\n            <div class=\"size13 bo4 m-b-22\">\r\n              <input class=\"sizefull s-text7 p-l-15 p-r-15\" type=\"text\" name=\"address\" placeholder=\"Address\" formControlName=\"address\">\r\n            </div>\r\n\r\n            <!-- <div class=\"size14 trans-0-4 m-b-10\">\r\n              Button\r\n              <button class=\"flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n                Update Totals\r\n              </button>\r\n            </div> -->\r\n            </form>\r\n          </div>\r\n        </div>\r\n\r\n        <!--  -->\r\n        <div class=\"flex-w flex-sb-m p-t-26 p-b-30\">\r\n          <span class=\"m-text22 w-size19 w-full-sm\">\r\n            Total:\r\n          </span>\r\n\r\n          <span class=\"m-text21 w-size20 w-full-sm\">\r\n            ${{total}}\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"size15 trans-0-4\">\r\n          <!-- Button -->\r\n          <button [disabled]=\"myFormEnvio.invalid || !itemsInCart || itemsInCart === 0\" (click)=\"checkout()\" class=\"flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n            Proceed to Checkout\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/luvas/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ruta_service_ruta_service__ = __webpack_require__("../../../../../src/app/services/ruta-service/ruta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_cart_service_cart_service__ = __webpack_require__("../../../../../src/app/services/cart-service/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__events_login_event_login_event_service__ = __webpack_require__("../../../../../src/app/events/login-event/login-event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__events_cart_event_cart_event_service__ = __webpack_require__("../../../../../src/app/events/cart-event/cart-event.service.ts");
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






var CartComponent = /** @class */ (function () {
    function CartComponent(http, router, rutaService, fb, cartService, loginEventService, cartEventService) {
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.fb = fb;
        this.cartService = cartService;
        this.loginEventService = loginEventService;
        this.cartEventService = cartEventService;
        this.isModalShown = false;
        this.isModalShown2 = false;
        this.loading = false;
        this.alerta = false;
        this.alerta_boton = false;
        this.bancos = [];
        this.slides = [
            { img: "http://placehold.it/350x150/000000" },
            { img: "http://placehold.it/350x150/111111" },
            { img: "http://placehold.it/350x150/333333" },
            { img: "http://placehold.it/350x150/666666" }
        ];
        this.slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };
        this.items = this.cartService.getCartContents();
        //console.log(this.items);
        this.myFormLogin = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]]
        });
        this.myFormPago = this.fb.group({
            ref_pago: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            metodo_pago: [0],
            pedido_id: [0]
        });
        this.myFormEnvio = this.fb.group({
            country: [''],
            state: [''],
            postcode: [''],
            address: ['']
        });
    }
    CartComponent.prototype.showModal = function () {
        this.isModalShown = true;
    };
    CartComponent.prototype.hideModal = function () {
        this.autoShownModal.hide();
    };
    CartComponent.prototype.onHidden = function () {
        this.isModalShown = false;
    };
    CartComponent.prototype.showModal2 = function () {
        this.isModalShown2 = true;
    };
    CartComponent.prototype.hideModal2 = function () {
        this.autoShownModal2.hide();
    };
    CartComponent.prototype.onHidden2 = function () {
        this.isModalShown2 = false;
    };
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.navigated) {
            window.scrollTo(0, 0);
        }
        /*Si hay un usuario logeado, tomar su direccion*/
        var user_aux = localStorage.getItem('luvas_user');
        var user_login = JSON.parse(user_aux);
        if (user_login && user_login != 'null') {
            this.myFormEnvio.patchValue({ address: user_login.direccion });
        }
        this.loading = true;
        this.cartService.getProducts().subscribe(function (success) {
            _this.loading = false;
            _this.items = _this.cartService.getCartContents();
            _this.itemsInCart = _this.cartService.getCartCount();
            _this.total = _this.cartService.getCartSubTotal();
            //console.log(this.items);
            console.log('itemsInCart cart: ' + _this.itemsInCart);
            _this.cartEventService.cartEventData.emit(_this.itemsInCart);
        }, function (error) {
            _this.loading = false;
            _this.items = _this.cartService.getCartContents();
            _this.itemsInCart = _this.cartService.getCartCount();
            _this.total = _this.cartService.getCartSubTotal();
            //console.log(this.items);
            console.log('itemsInCart cart: ' + _this.itemsInCart);
            _this.cartEventService.cartEventData.emit(_this.itemsInCart);
        });
    };
    CartComponent.prototype.ngOnDestroy = function () {
        if (this.myFormPago.value.pedido_id != 0) {
            this.cartService.deleteCar();
            this.cartEventService.cartEventData.emit(0);
        }
    };
    CartComponent.prototype.addSlide = function () {
        this.slides.push({ img: "http://placehold.it/350x150/777777" });
    };
    CartComponent.prototype.removeSlide = function () {
        this.slides.length = this.slides.length - 1;
    };
    CartComponent.prototype.afterChange = function (e) {
        console.log('afterChange');
    };
    //Alerta cuando se vence el token
    CartComponent.prototype.ok_alerta = function () {
        this.router.navigate(['luvas']);
    };
    CartComponent.prototype.cerrarAlerta = function () {
        this.alerta = false;
    };
    CartComponent.prototype.removeItem = function (item) {
        var _this = this;
        /*Si no se ha generado el pedido lo puedo eliminar*/
        if (this.myFormPago.value.pedido_id == 0) {
            this.cartService.removeProduct(item).subscribe(function (success) {
                if (success) {
                    _this.items = _this.cartService.getCartContents();
                    _this.itemsInCart = _this.cartService.getCartCount();
                    _this.total = _this.cartService.getCartSubTotal();
                    _this.cartEventService.cartEventData.emit(_this.itemsInCart);
                }
                else {
                    //this.presentToast('Ha ocurrido un error intenta de nuevo');
                    alert('Ha ocurrido un error intenta de nuevo');
                }
            }, function (error) {
                //this.presentToast(error);
                alert(error);
            });
        }
    };
    CartComponent.prototype.updateCant = function (item) {
        var _this = this;
        this.cartService.updateProduct(item, item.cantidad).subscribe(function (success) {
            if (success) {
                _this.items = _this.cartService.getCartContents();
                _this.itemsInCart = _this.cartService.getCartCount();
                _this.total = _this.cartService.getCartSubTotal();
                _this.cartEventService.cartEventData.emit(_this.itemsInCart);
            }
            else {
                //this.presentToast('Ha ocurrido un error intenta de nuevo');
                alert('Ha ocurrido un error intenta de nuevo');
            }
        }, function (error) {
            //this.presentToast(error);
            alert(error);
        });
    };
    CartComponent.prototype.restarCantidad = function (producto) {
        //console.log(producto);
        producto.cantidad = producto.cantidad - 1;
        this.updateCant(producto);
    };
    CartComponent.prototype.sumarCantidad = function (producto) {
        //console.log(producto);
        producto.cantidad = producto.cantidad + 1;
        this.updateCant(producto);
    };
    CartComponent.prototype.setCantidad = function (producto) {
        var _this = this;
        if (producto.cantidad < 1) {
            if (producto.colores[0].atributos[0].cantidad > 0) {
                producto.cantidad = 1;
            }
            else {
                producto.cantidad = 0;
            }
        }
        if (producto.cantidad > producto.colores[0].atributos[0].cantidad) {
            producto.cantidad = producto.colores[0].atributos[0].cantidad;
        }
        setTimeout(function () { _this.updateCant(producto); }, 60);
    };
    CartComponent.prototype.checkout = function () {
        var _this = this;
        /*Verificar si hay un usuario logeado*/
        var token = localStorage.getItem('luvas_token');
        if (!this.cartService.getCartId() || !token || token == 'null') {
            this.showModal();
        }
        else if (this.myFormPago.value.pedido_id == 0) {
            setTimeout(function () { _this.crearPedido(); }, 60);
        }
        else if (this.myFormPago.value.pedido_id != 0) {
            setTimeout(function () { _this.actualizarEnvioPedido(); }, 60);
        }
    };
    CartComponent.prototype.actualizarEnvioPedido = function () {
        var _this = this;
        this.loading = true;
        var datos = {
            token: localStorage.getItem('luvas_token'),
            /*subtotal: this.total,
            total: this.total,*/
            country: this.myFormEnvio.value.country,
            state: this.myFormEnvio.value.state,
            postcode: this.myFormEnvio.value.postcode,
            address: this.myFormEnvio.value.address,
        };
        this.http.put(this.rutaService.getRutaApi() + 'pedidos/' + this.myFormPago.value.pedido_id, datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.loading = false;
            //Mostrar modal de metodo de pago
            _this.showModal2();
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
    CartComponent.prototype.crearPedido = function () {
        var _this = this;
        this.loading = true;
        var datos = {
            token: localStorage.getItem('luvas_token'),
            subtotal: this.total,
            total: this.total,
            country: this.myFormEnvio.value.country,
            state: this.myFormEnvio.value.state,
            postcode: this.myFormEnvio.value.postcode,
            address: this.myFormEnvio.value.address,
            usuario_id: this.cartService.getCartId(),
            productos: JSON.stringify(this.items)
        };
        this.http.post(this.rutaService.getRutaApi() + 'pedidos', datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.myFormPago.patchValue({ pedido_id: _this.data.pedido.id });
            _this.loading = false;
            //Mostrar modal de metodo de pago
            _this.showModal2();
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
    CartComponent.prototype.irARegistro = function () {
        this.router.navigate(['luvas/registro']);
    };
    CartComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        var datos = {
            email: this.myFormLogin.value.email,
            password: this.myFormLogin.value.password
        };
        this.http.post(this.rutaService.getRutaApi() + 'login/app', datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.loading = false;
            _this.alerta_tipo = 'success';
            _this.alerta_msg = 'Login Ok';
            _this.alerta = true;
            setTimeout(function () { _this.alerta = false; }, 4000);
            _this.myFormEnvio.patchValue({ address: _this.data.user.direccion });
            /*Guardar datos del usuario en memoria*/
            var user = JSON.stringify(_this.data.user);
            localStorage.setItem('luvas_user', user);
            var token = JSON.stringify(_this.data.token);
            localStorage.setItem('luvas_token', token);
            _this.checkout();
            _this.loginEventService.loginEventData.emit(1);
        }, function (msg) {
            msg.error = JSON.parse(msg.error);
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            _this.alerta_tipo = 'danger';
            _this.alerta_msg = msg.error.error;
            _this.alerta = true;
            setTimeout(function () { _this.alerta = false; }, 4000);
        });
    };
    CartComponent.prototype.setTransferencia = function () {
        this.myFormPago.patchValue({ metodo_pago: 1 });
    };
    CartComponent.prototype.setPayPal = function () {
        this.myFormPago.patchValue({ metodo_pago: 2 });
    };
    CartComponent.prototype.pagar = function () {
        var _this = this;
        this.loading = true;
        var datos = {
            token: localStorage.getItem('luvas_token'),
            estado: 2,
            metodo_pago: this.myFormPago.value.metodo_pago,
            ref_pago: this.myFormPago.value.ref_pago,
            country: this.myFormEnvio.value.country,
            state: this.myFormEnvio.value.state,
            postcode: this.myFormEnvio.value.postcode,
            address: this.myFormEnvio.value.address,
        };
        this.http.put(this.rutaService.getRutaApi() + 'pedidos/' + this.myFormPago.value.pedido_id, datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.loading = false;
            _this.alerta_tipo = 'success';
            _this.alerta_msg = _this.data.message;
            _this.alerta = true;
            setTimeout(function () { _this.alerta = false; }, 4000);
            _this.irAMisPedidos();
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
    CartComponent.prototype.irAMisPedidos = function () {
        this.router.navigate(['luvas/pedidos/cliente']);
    };
    CartComponent.prototype.getBancos = function () {
        var _this = this;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'bancos?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.bancos = _this.data.bancos;
            _this.loading = false;
            _this.myModal2.show();
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('autoShownModal'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
    ], CartComponent.prototype, "autoShownModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('autoShownModal2'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _b || Object)
    ], CartComponent.prototype, "autoShownModal2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myModal2'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _c || Object)
    ], CartComponent.prototype, "myModal2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myModal3'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _d || Object)
    ], CartComponent.prototype, "myModal3", void 0);
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/luvas/cart/cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/luvas/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services_ruta_service_ruta_service__["a" /* RutaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_ruta_service_ruta_service__["a" /* RutaService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__services_cart_service_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_cart_service_cart_service__["a" /* CartService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8__events_login_event_login_event_service__["a" /* LoginEventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__events_login_event_login_event_service__["a" /* LoginEventService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_9__events_cart_event_cart_event_service__["a" /* CartEventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__events_cart_event_cart_event_service__["a" /* CartEventService */]) === "function" && _l || Object])
    ], CartComponent);
    return CartComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/luvas/contacto/contacto.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alertaC {\r\n  position: fixed !important;\r\n  z-index: 1000 !important;\r\n  /* top: 70px !important; */\r\n  right: 10px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/luvas/contacto/contacto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alertaC\" *ngIf=\"alerta\">\r\n  <alert  [type]=\"alerta_tipo\" dismissible=\"true\" close=\"cerrarAlerta()\">\r\n    <strong>{{alerta_msg}}</strong> \r\n  </alert>\r\n</div>\r\n\r\n<div class=\"alertaC\" *ngIf=\"alerta_boton\">\r\n  <alert [type]=\"alerta_tipo\" >\r\n    <strong>{{alerta_msg}}</strong>\r\n    <button type=\"button\" class=\"btn btn4 btn-secondary\" (click)=\"ok_alerta()\">ok</button> \r\n  </alert>\r\n</div>\r\n\r\n  <!-- Title Page -->\r\n  <section class=\"bg-title-page p-t-40 p-b-50 flex-col-c-m\" style=\"background-image: url(http://beau-moda.com/images/banner.png);\">\r\n    <h2 class=\"l-text2 t-center\">\r\n      Contact\r\n    </h2>\r\n  </section>\r\n\r\n  <!-- content page -->\r\n  <section class=\"bgwhite p-t-66 p-b-60\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 p-b-30\">\r\n          <div class=\"p-r-20 p-r-0-lg\">\r\n            <div class=\"contact-map size21\" id=\"google_map\" data-map-x=\"40.614439\" data-map-y=\"-73.926781\" data-pin=\"images/icons/icon-position-map.png\" data-scrollwhell=\"0\" data-draggable=\"1\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 p-b-30\">\r\n          <form [formGroup]=\"myFormContact\" novalidate class=\"leave-comment\">\r\n            <h4 class=\"m-text26 p-b-36 p-t-15\">\r\n              Send us your message\r\n            </h4>\r\n\r\n            <div *ngIf=\"myFormContact.get('name').errors && myFormContact.get('name').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormContact.get('name').hasError('required')\">Name is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"text\" name=\"name\" placeholder=\"Full Name\" formControlName=\"name\">\r\n            </div>\r\n\r\n\r\n            <div *ngIf=\"myFormContact.get('phone').errors && myFormContact.get('phone').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormContact.get('phone').hasError('required')\">Phone is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"text\" name=\"phone-number\" placeholder=\"Phone Number\" formControlName=\"phone\">\r\n            </div>\r\n\r\n            <div *ngIf=\"myFormContact.get('email').errors && myFormContact.get('email').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormContact.get('email').hasError('required')\">Email is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"email\" name=\"email\" placeholder=\"Email Address\" formControlName=\"email\">\r\n            </div>\r\n\r\n            <div *ngIf=\"myFormContact.get('msg').errors && myFormContact.get('msg').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormContact.get('msg').hasError('required')\">Message is required</span>\r\n            </div>\r\n            <textarea class=\"dis-block s-text7 size20 bo4 p-l-22 p-r-22 p-t-13 m-b-20\" name=\"msg\" placeholder=\"Message\" formControlName=\"msg\"></textarea>\r\n\r\n            \r\n          </form>\r\n\r\n          <div class=\"w-size25\">\r\n            <!-- Button -->\r\n            <button class=\"flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" [disabled]=\"myFormContact.invalid\" (click)=\"enviarEmail()\">\r\n              Send\r\n            </button>\r\n          </div>\r\n            \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/luvas/contacto/contacto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ruta_service_ruta_service__ = __webpack_require__("../../../../../src/app/services/ruta-service/ruta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactoComponent = /** @class */ (function () {
    function ContactoComponent(http, router, rutaService, fb) {
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.fb = fb;
        this.loading = false;
        this.alerta = false;
        this.alerta_boton = false;
        this.slides = [
            { img: "http://placehold.it/350x150/000000" },
            { img: "http://placehold.it/350x150/111111" },
            { img: "http://placehold.it/350x150/333333" },
            { img: "http://placehold.it/350x150/666666" }
        ];
        this.slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };
        this.myFormContact = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required]],
            msg: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required]]
        });
    }
    ContactoComponent.prototype.ngOnInit = function () {
        if (this.router.navigated) {
            window.scrollTo(0, 0);
        }
        this.checkLogin();
    };
    ContactoComponent.prototype.addSlide = function () {
        this.slides.push({ img: "http://placehold.it/350x150/777777" });
    };
    ContactoComponent.prototype.removeSlide = function () {
        this.slides.length = this.slides.length - 1;
    };
    ContactoComponent.prototype.afterChange = function (e) {
        console.log('afterChange');
    };
    //Alerta cuando se vence el token
    ContactoComponent.prototype.ok_alerta = function () {
        this.router.navigate(['luvas']);
    };
    ContactoComponent.prototype.cerrarAlerta = function () {
        this.alerta = false;
    };
    ContactoComponent.prototype.checkLogin = function () {
        /*Verifiacar si hay un usario logeado y su tipo*/
        var user = localStorage.getItem('luvas_user');
        var user_login = JSON.parse(user);
        if (user_login) {
            this.myFormContact.patchValue({ name: user_login.nombre });
            this.myFormContact.patchValue({ phone: user_login.telefono });
            this.myFormContact.patchValue({ email: user_login.email });
        }
    };
    ContactoComponent.prototype.enviarEmail = function () {
        var _this = this;
        console.log(this.myFormContact.value);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('luvas_token'),
            name: this.myFormContact.value.name,
            phone: this.myFormContact.value.phone,
            email: this.myFormContact.value.email,
            msg: this.myFormContact.value.msg
        };
        this.http.post(this.rutaService.getRutaApi() + 'emails/contact', datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.loading = false;
            _this.alerta_tipo = 'success';
            _this.alerta_msg = _this.data.message;
            _this.alerta = true;
            setTimeout(function () { _this.alerta = false; }, 4000);
            _this.resetFormulario();
        }, function (msg) {
            //msg.error = JSON.parse(msg.error);
            console.log(msg);
            //console.log(msg.error.error);
            _this.loading = false;
            _this.alerta_tipo = 'danger';
            _this.alerta_msg = 'Email no enviado!';
            _this.alerta = true;
            setTimeout(function () { _this.alerta = false; }, 4000);
        });
    };
    ContactoComponent.prototype.resetFormulario = function () {
        /*this.myFormContact = this.fb.group({
          name: ['', [Validators.required]],
          phone: ['', [Validators.required]],
          email: ['', [Validators.required]],
          msg: ['', [Validators.required]]
        });*/
        this.myFormContact.patchValue({ msg: '' });
    };
    ContactoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/luvas/contacto/contacto.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/luvas/contacto/contacto.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_ruta_service_ruta_service__["a" /* RutaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_ruta_service_ruta_service__["a" /* RutaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object])
    ], ContactoComponent);
    return ContactoComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=contacto.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/luvas/detalle/detalle.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <!-- breadcrumb -->\r\n  <div class=\"bread-crumb bgwhite flex-w p-l-52 p-r-15 p-t-30 p-l-15-sm\">\r\n    <a href=\"index.html\" class=\"s-text16\">\r\n      Home\r\n      <i class=\"fa fa-angle-right m-l-8 m-r-9\" aria-hidden=\"true\"></i>\r\n    </a>\r\n\r\n    <a href=\"product.html\" class=\"s-text16\">\r\n      Women\r\n      <i class=\"fa fa-angle-right m-l-8 m-r-9\" aria-hidden=\"true\"></i>\r\n    </a>\r\n\r\n    <a href=\"#\" class=\"s-text16\">\r\n      T-Shirt\r\n      <i class=\"fa fa-angle-right m-l-8 m-r-9\" aria-hidden=\"true\"></i>\r\n    </a>\r\n\r\n    <span class=\"s-text17\">\r\n      Boxy T-Shirt with Roll Sleeve Detail\r\n    </span>\r\n  </div>\r\n\r\n  <!-- Product Detail -->\r\n  <div class=\"container bgwhite p-t-35 p-b-80\">\r\n    <div class=\"flex-w flex-sb\">\r\n      <div class=\"w-size13 p-t-30 respon5\">\r\n        <div class=\"wrap-slick3 flex-sb flex-w\">\r\n          <div class=\"wrap-slick3-dots\"></div>\r\n\r\n          <div class=\"slick3\">\r\n            <div class=\"item-slick3\" data-thumb=\"assets/images/thumb-item-01.jpg\">\r\n              <div class=\"wrap-pic-w\">\r\n                <img src=\"assets/images/product-detail-01.jpg\" alt=\"IMG-PRODUCT\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"item-slick3\" data-thumb=\"assets/images/thumb-item-02.jpg\">\r\n              <div class=\"wrap-pic-w\">\r\n                <img src=\"assets/images/product-detail-02.jpg\" alt=\"IMG-PRODUCT\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"item-slick3\" data-thumb=\"assets/images/thumb-item-03.jpg\">\r\n              <div class=\"wrap-pic-w\">\r\n                <img src=\"assets/images/product-detail-03.jpg\" alt=\"IMG-PRODUCT\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"w-size14 p-t-30 respon5\">\r\n        <h4 class=\"product-detail-name m-text16 p-b-13\">\r\n          Boxy T-Shirt with Roll Sleeve Detail\r\n        </h4>\r\n\r\n        <span class=\"m-text17\">\r\n          $22\r\n        </span>\r\n\r\n        <p class=\"s-text8 p-t-10\">\r\n          Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.\r\n        </p>\r\n\r\n        <!--  -->\r\n        <div class=\"p-t-33 p-b-60\">\r\n          <div class=\"flex-m flex-w p-b-10\">\r\n            <div class=\"s-text15 w-size15 t-center\">\r\n              Size\r\n            </div>\r\n\r\n            <div class=\"rs2-select2 rs3-select2 bo4 of-hidden w-size16\">\r\n              <select class=\"selection-2\" name=\"size\">\r\n                <option>Choose an option</option>\r\n                <option>Size S</option>\r\n                <option>Size M</option>\r\n                <option>Size L</option>\r\n                <option>Size XL</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"flex-m flex-w\">\r\n            <div class=\"s-text15 w-size15 t-center\">\r\n              Color\r\n            </div>\r\n\r\n            <div class=\"rs2-select2 rs3-select2 bo4 of-hidden w-size16\">\r\n              <select class=\"selection-2\" name=\"color\">\r\n                <option>Choose an option</option>\r\n                <option>Gray</option>\r\n                <option>Red</option>\r\n                <option>Black</option>\r\n                <option>Blue</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"flex-r-m flex-w p-t-10\">\r\n            <div class=\"w-size16 flex-m flex-w\">\r\n              <div class=\"flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10\">\r\n                <button class=\"btn-num-product-down color1 flex-c-m size7 bg8 eff2\">\r\n                  <i class=\"fs-12 fa fa-minus\" aria-hidden=\"true\"></i>\r\n                </button>\r\n\r\n                <input class=\"size8 m-text18 t-center num-product\" type=\"number\" name=\"num-product\" value=\"1\">\r\n\r\n                <button class=\"btn-num-product-up color1 flex-c-m size7 bg8 eff2\">\r\n                  <i class=\"fs-12 fa fa-plus\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n\r\n              <div class=\"btn-addcart-product-detail size9 trans-0-4 m-t-10 m-b-10\">\r\n                <!-- Button -->\r\n                <button class=\"flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n                  Add to Cart\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"p-b-45\">\r\n          <span class=\"s-text8 m-r-35\">SKU: MUG-01</span>\r\n          <span class=\"s-text8\">Categories: Mug, Design</span>\r\n        </div>\r\n\r\n        <!--  -->\r\n        <div class=\"wrap-dropdown-content bo6 p-t-15 p-b-14 active-dropdown-content\">\r\n          <h5 class=\"js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4\">\r\n            Description\r\n            <i class=\"down-mark fs-12 color1 fa fa-minus dis-none\" aria-hidden=\"true\"></i>\r\n            <i class=\"up-mark fs-12 color1 fa fa-plus\" aria-hidden=\"true\"></i>\r\n          </h5>\r\n\r\n          <div class=\"dropdown-content dis-none p-t-15 p-b-23\">\r\n            <p class=\"s-text8\">\r\n              Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"wrap-dropdown-content bo7 p-t-15 p-b-14\">\r\n          <h5 class=\"js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4\">\r\n            Additional information\r\n            <i class=\"down-mark fs-12 color1 fa fa-minus dis-none\" aria-hidden=\"true\"></i>\r\n            <i class=\"up-mark fs-12 color1 fa fa-plus\" aria-hidden=\"true\"></i>\r\n          </h5>\r\n\r\n          <div class=\"dropdown-content dis-none p-t-15 p-b-23\">\r\n            <p class=\"s-text8\">\r\n              Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"wrap-dropdown-content bo7 p-t-15 p-b-14\">\r\n          <h5 class=\"js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4\">\r\n            Reviews (0)\r\n            <i class=\"down-mark fs-12 color1 fa fa-minus dis-none\" aria-hidden=\"true\"></i>\r\n            <i class=\"up-mark fs-12 color1 fa fa-plus\" aria-hidden=\"true\"></i>\r\n          </h5>\r\n\r\n          <div class=\"dropdown-content dis-none p-t-15 p-b-23\">\r\n            <p class=\"s-text8\">\r\n              Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- Relate Product -->\r\n  <section class=\"relateproduct bgwhite p-t-45 p-b-138\">\r\n    <div class=\"container\">\r\n      <div class=\"sec-title p-b-60\">\r\n        <h3 class=\"m-text5 t-center\">\r\n          Related Products\r\n        </h3>\r\n      </div>\r\n\r\n      <!-- Slide2 -->\r\n      <div class=\"wrap-slick2\">\r\n        <div class=\"slick2\">\r\n\r\n          <div class=\"item-slick2 p-l-15 p-r-15\">\r\n            <!-- Block2 -->\r\n            <div class=\"block2\">\r\n              <div class=\"block2-img wrap-pic-w of-hidden pos-relative block2-labelnew\">\r\n                <img src=\"assets/images/item-02.jpg\" alt=\"IMG-PRODUCT\" style=\"width: 400px; height:400px\">\r\n\r\n                <div class=\"block2-overlay trans-0-4\">\r\n                  <a href=\"#\" class=\"block2-btn-addwishlist hov-pointer trans-0-4\">\r\n                    <i class=\"icon-wishlist icon_heart_alt\" aria-hidden=\"true\"></i>\r\n                    <i class=\"icon-wishlist icon_heart dis-none\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n\r\n                  <div class=\"block2-btn-addcart w-size1 trans-0-4\">\r\n                    <!-- Button -->\r\n                    <button class=\"flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n                      Add to Cart\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"block2-txt p-t-20\">\r\n                <a href=\"product-detail.html\" class=\"block2-name dis-block s-text3 p-b-5\">\r\n                  Herschel supply co 25l\r\n                </a>\r\n\r\n                <span class=\"block2-price m-text6 p-r-5\">\r\n                  $75.00\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"item-slick2 p-l-15 p-r-15\">\r\n            <!-- Block2 -->\r\n            <div class=\"block2\">\r\n              <div class=\"block2-img wrap-pic-w of-hidden pos-relative\">\r\n                <img src=\"assets/images/item-03.jpg\" alt=\"IMG-PRODUCT\" style=\"width: 400px; height:400px\">\r\n\r\n                <div class=\"block2-overlay trans-0-4\">\r\n                  <a href=\"#\" class=\"block2-btn-addwishlist hov-pointer trans-0-4\">\r\n                    <i class=\"icon-wishlist icon_heart_alt\" aria-hidden=\"true\"></i>\r\n                    <i class=\"icon-wishlist icon_heart dis-none\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n\r\n                  <div class=\"block2-btn-addcart w-size1 trans-0-4\">\r\n                    <!-- Button -->\r\n                    <button class=\"flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n                      Add to Cart\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"block2-txt p-t-20\">\r\n                <a href=\"product-detail.html\" class=\"block2-name dis-block s-text3 p-b-5\">\r\n                  Denim jacket blue\r\n                </a>\r\n\r\n                <span class=\"block2-price m-text6 p-r-5\">\r\n                  $92.50\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"item-slick2 p-l-15 p-r-15\">\r\n            <!-- Block2 -->\r\n            <div class=\"block2\">\r\n              <div class=\"block2-img wrap-pic-w of-hidden pos-relative\">\r\n                <img src=\"assets/images/item-05.jpg\" alt=\"IMG-PRODUCT\" style=\"width: 400px; height:400px\">\r\n\r\n                <div class=\"block2-overlay trans-0-4\">\r\n                  <a href=\"#\" class=\"block2-btn-addwishlist hov-pointer trans-0-4\">\r\n                    <i class=\"icon-wishlist icon_heart_alt\" aria-hidden=\"true\"></i>\r\n                    <i class=\"icon-wishlist icon_heart dis-none\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n\r\n                  <div class=\"block2-btn-addcart w-size1 trans-0-4\">\r\n                    <!-- Button -->\r\n                    <button class=\"flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n                      Add to Cart\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"block2-txt p-t-20\">\r\n                <a href=\"product-detail.html\" class=\"block2-name dis-block s-text3 p-b-5\">\r\n                  Coach slim easton black\r\n                </a>\r\n\r\n                <span class=\"block2-price m-text6 p-r-5\">\r\n                  $165.90\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"item-slick2 p-l-15 p-r-15\">\r\n            <!-- Block2 -->\r\n            <div class=\"block2\">\r\n              <div class=\"block2-img wrap-pic-w of-hidden pos-relative block2-labelsale\">\r\n                <img src=\"assets/images/item-07.jpg\" alt=\"IMG-PRODUCT\" style=\"width: 400px; height:400px\">\r\n\r\n                <div class=\"block2-overlay trans-0-4\">\r\n                  <a href=\"#\" class=\"block2-btn-addwishlist hov-pointer trans-0-4\">\r\n                    <i class=\"icon-wishlist icon_heart_alt\" aria-hidden=\"true\"></i>\r\n                    <i class=\"icon-wishlist icon_heart dis-none\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n\r\n                  <div class=\"block2-btn-addcart w-size1 trans-0-4\">\r\n                    <!-- Button -->\r\n                    <button class=\"flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n                      Add to Cart\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"block2-txt p-t-20\">\r\n                <a href=\"product-detail.html\" class=\"block2-name dis-block s-text3 p-b-5\">\r\n                  Frayed denim shorts\r\n                </a>\r\n\r\n                <span class=\"block2-oldprice m-text7 p-r-5\">\r\n                  $29.50\r\n                </span>\r\n\r\n                <span class=\"block2-newprice m-text8 p-r-5\">\r\n                  $15.90\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"item-slick2 p-l-15 p-r-15\">\r\n            <!-- Block2 -->\r\n            <div class=\"block2\">\r\n              <div class=\"block2-img wrap-pic-w of-hidden pos-relative block2-labelnew\">\r\n                <img src=\"assets/images/item-02.jpg\" alt=\"IMG-PRODUCT\" style=\"width: 400px; height:400px\">\r\n\r\n                <div class=\"block2-overlay trans-0-4\">\r\n                  <a href=\"#\" class=\"block2-btn-addwishlist hov-pointer trans-0-4\">\r\n                    <i class=\"icon-wishlist icon_heart_alt\" aria-hidden=\"true\"></i>\r\n                    <i class=\"icon-wishlist icon_heart dis-none\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n\r\n                  <div class=\"block2-btn-addcart w-size1 trans-0-4\">\r\n                    <!-- Button -->\r\n                    <button class=\"flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n                      Add to Cart\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"block2-txt p-t-20\">\r\n                <a href=\"product-detail.html\" class=\"block2-name dis-block s-text3 p-b-5\">\r\n                  Herschel supply co 25l\r\n                </a>\r\n\r\n                <span class=\"block2-price m-text6 p-r-5\">\r\n                  $75.00\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"item-slick2 p-l-15 p-r-15\">\r\n            <!-- Block2 -->\r\n            <div class=\"block2\">\r\n              <div class=\"block2-img wrap-pic-w of-hidden pos-relative\">\r\n                <img src=\"assets/images/item-03.jpg\" alt=\"IMG-PRODUCT\" style=\"width: 400px; height:400px\">\r\n\r\n                <div class=\"block2-overlay trans-0-4\">\r\n                  <a href=\"#\" class=\"block2-btn-addwishlist hov-pointer trans-0-4\">\r\n                    <i class=\"icon-wishlist icon_heart_alt\" aria-hidden=\"true\"></i>\r\n                    <i class=\"icon-wishlist icon_heart dis-none\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n\r\n                  <div class=\"block2-btn-addcart w-size1 trans-0-4\">\r\n                    <!-- Button -->\r\n                    <button class=\"flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n                      Add to Cart\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"block2-txt p-t-20\">\r\n                <a href=\"product-detail.html\" class=\"block2-name dis-block s-text3 p-b-5\">\r\n                  Denim jacket blue\r\n                </a>\r\n\r\n                <span class=\"block2-price m-text6 p-r-5\">\r\n                  $92.50\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"item-slick2 p-l-15 p-r-15\">\r\n            <!-- Block2 -->\r\n            <div class=\"block2\">\r\n              <div class=\"block2-img wrap-pic-w of-hidden pos-relative\">\r\n                <img src=\"assets/images/item-05.jpg\" alt=\"IMG-PRODUCT\" style=\"width: 400px; height:400px\">\r\n\r\n                <div class=\"block2-overlay trans-0-4\">\r\n                  <a href=\"#\" class=\"block2-btn-addwishlist hov-pointer trans-0-4\">\r\n                    <i class=\"icon-wishlist icon_heart_alt\" aria-hidden=\"true\"></i>\r\n                    <i class=\"icon-wishlist icon_heart dis-none\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n\r\n                  <div class=\"block2-btn-addcart w-size1 trans-0-4\">\r\n                    <!-- Button -->\r\n                    <button class=\"flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n                      Add to Cart\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"block2-txt p-t-20\">\r\n                <a href=\"product-detail.html\" class=\"block2-name dis-block s-text3 p-b-5\">\r\n                  Coach slim easton black\r\n                </a>\r\n\r\n                <span class=\"block2-price m-text6 p-r-5\">\r\n                  $165.90\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"item-slick2 p-l-15 p-r-15\">\r\n            <!-- Block2 -->\r\n            <div class=\"block2\">\r\n              <div class=\"block2-img wrap-pic-w of-hidden pos-relative block2-labelsale\">\r\n                <img src=\"assets/images/item-07.jpg\" alt=\"IMG-PRODUCT\" style=\"width: 400px; height:400px\">\r\n\r\n                <div class=\"block2-overlay trans-0-4\">\r\n                  <a href=\"#\" class=\"block2-btn-addwishlist hov-pointer trans-0-4\">\r\n                    <i class=\"icon-wishlist icon_heart_alt\" aria-hidden=\"true\"></i>\r\n                    <i class=\"icon-wishlist icon_heart dis-none\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n\r\n                  <div class=\"block2-btn-addcart w-size1 trans-0-4\">\r\n                    <!-- Button -->\r\n                    <button class=\"flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n                      Add to Cart\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"block2-txt p-t-20\">\r\n                <a href=\"product-detail.html\" class=\"block2-name dis-block s-text3 p-b-5\">\r\n                  Frayed denim shorts\r\n                </a>\r\n\r\n                <span class=\"block2-oldprice m-text7 p-r-5\">\r\n                  $29.50\r\n                </span>\r\n\r\n                <span class=\"block2-newprice m-text8 p-r-5\">\r\n                  $15.90\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </section>\r\n\r\n\r\n  "

/***/ }),

/***/ "../../../../../src/app/views/luvas/detalle/detalle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetalleComponent = /** @class */ (function () {
    function DetalleComponent() {
        this.slides = [
            { img: "http://placehold.it/350x150/000000" },
            { img: "http://placehold.it/350x150/111111" },
            { img: "http://placehold.it/350x150/333333" },
            { img: "http://placehold.it/350x150/666666" }
        ];
        this.slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };
    }
    DetalleComponent.prototype.ngOnInit = function () {
    };
    DetalleComponent.prototype.addSlide = function () {
        this.slides.push({ img: "http://placehold.it/350x150/777777" });
    };
    DetalleComponent.prototype.removeSlide = function () {
        this.slides.length = this.slides.length - 1;
    };
    DetalleComponent.prototype.afterChange = function (e) {
        console.log('afterChange');
    };
    DetalleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/luvas/detalle/detalle.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], DetalleComponent);
    return DetalleComponent;
}());

//# sourceMappingURL=detalle.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/luvas/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alertaC {\r\n  position: fixed !important;\r\n  z-index: 1000 !important;\r\n  /* top: 70px !important; */\r\n  right: 10px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/luvas/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alertaC\" *ngIf=\"alerta\">\r\n  <alert  [type]=\"alerta_tipo\" dismissible=\"true\" close=\"cerrarAlerta()\">\r\n    <strong>{{alerta_msg}}</strong> \r\n  </alert>\r\n</div>\r\n\r\n\r\n<!-- Banner2 -->\r\n  <section class=\"banner2 bg5 p-t-55 p-b-55\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-10 col-md-8 col-lg-6 m-l-r-auto p-t-15 p-b-15\">\r\n          <div class=\"hov-img-zoom pos-relative\">\r\n            <img src=\"http://massagegraf.com/beau/nuevo/images/model_3.png\" alt=\"IMG-BANNER\">\r\n\r\n            <div class=\"ab-t-l sizefull flex-col-c-m p-l-15 p-r-15\"><br><br><br><br>\r\n              <span class=\"m-text9 p-t-45 fs-20-sm\">\r\n                El mejor\r\n              </span>\r\n\r\n              <h3 class=\"l-text1 fs-35-sm\">\r\n                Outfit!\r\n              </h3>\r\n\r\n              <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/productos']\" class=\"s-text4 hov2 p-t-20 \">\r\n                Ver Colección\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--div class=\"col-sm-10 col-md-8 col-lg-6 m-l-r-auto p-t-15 p-b-15\">\r\n          <div class=\"hov-img-zoom pos-relative\">\r\n            <img src=\"http://massagegraf.com/beau/nuevo/images/model_1.png\" alt=\"IMG-BANNER\">\r\n\r\n            <div class=\"ab-t-l sizefull flex-col-c-m p-l-15 p-r-15\">\r\n              <span class=\"m-text9 p-t-45 fs-20-sm\" style=\"color:#000\">\r\n                Complementa Tu belleza\r\n              </span>\r\n\r\n              <h3 class=\"l-text1 fs-35-sm\" style=\"color:#000\">\r\n                 Interior!\r\n              </h3>\r\n\r\n              <a routerLinkActive=\"active\" [routerLink]=\"['/luvas/productos']\" class=\"s-text4 hov2 p-t-20 \">\r\n                Ver Colección\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div-->\r\n\r\n        <!--div class=\"col-sm-10 col-md-8 col-lg-6 m-l-r-auto p-t-15 p-b-15\">\r\n          <div class=\"bgwhite hov-img-zoom pos-relative p-b-20per-ssm\">\r\n            <img src=\"http://massagegraf.com/beau/nuevo/images/model_1.png\" alt=\"IMG-BANNER\">\r\n\r\n            <div class=\"ab-t-l sizefull flex-col-c-b p-l-15 p-r-15 p-b-20\">\r\n              <div class=\"t-center\">\r\n                <a href=\"product-detail.html\" class=\"dis-block s-text3 p-b-5\">\r\n                  Gafas sol Hawkers one\r\n                </a>\r\n\r\n                <span class=\"block2-oldprice m-text7 p-r-5\">\r\n                  $29.50\r\n                </span>\r\n\r\n                <span class=\"block2-newprice m-text8\">\r\n                  $15.90\r\n                </span>\r\n              </div>\r\n\r\n              <!--div class=\"flex-c-m p-t-44 p-t-30-xl\">\r\n                <div class=\"flex-col-c-m size3 bo1 m-l-5 m-r-5\">\r\n                  <span class=\"m-text10 p-b-1 days\">\r\n                    69\r\n                  </span>\r\n\r\n                  <span class=\"s-text5\">\r\n                    days\r\n                  </span>\r\n                </div>\r\n\r\n                <div class=\"flex-col-c-m size3 bo1 m-l-5 m-r-5\">\r\n                  <span class=\"m-text10 p-b-1 hours\">\r\n                    04\r\n                  </span>\r\n\r\n                  <span class=\"s-text5\">\r\n                    hrs\r\n                  </span>\r\n                </div>\r\n\r\n                <div class=\"flex-col-c-m size3 bo1 m-l-5 m-r-5\">\r\n                  <span class=\"m-text10 p-b-1 minutes\">\r\n                    32\r\n                  </span>\r\n\r\n                  <span class=\"s-text5\">\r\n                    mins\r\n                  </span>\r\n                </div>\r\n\r\n                <div class=\"flex-col-c-m size3 bo1 m-l-5 m-r-5\">\r\n                  <span class=\"m-text10 p-b-1 seconds\">\r\n                    05\r\n                  </span>\r\n\r\n                  <span class=\"s-text5\">\r\n                    secs\r\n                  </span>\r\n                </div>\r\n              </div >\r\n            </div>\r\n          </div>\r\n        </div-->\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n<div class=\"alertaC\" *ngIf=\"alerta_boton\">\r\n  <alert [type]=\"alerta_tipo\" >\r\n    <strong>{{alerta_msg}}</strong>\r\n    <button type=\"button\" class=\"btn btn4 btn-secondary\" (click)=\"ok_alerta()\">ok</button> \r\n  </alert>\r\n</div>\r\n  <!-- Banner -->\r\n  <section class=\"banner bgwhite p-t-40 p-b-40\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div *ngFor = \"let categoria of categorias\" class=\"col-sm-10 col-md-8 col-lg-4 m-l-r-auto\">\r\n          <!-- block1 izquierda-->\r\n          <div class=\"block1 hov-img-zoom pos-relative m-b-30\">\r\n            <img src=\"{{categoria.imagen}}\" alt=\"IMG-BENNER\">\r\n\r\n            <div class=\"block1-wrapbtn w-size2\">\r\n              <!-- Button -->\r\n              <a routerLinkActive=\"active\" [routerLink]=\"\" (click)=\"selectCategoria(categoria)\" class=\"flex-c-m size2 m-text2 bg3 hov1 trans-0-4\">\r\n                {{categoria.nombre}}\r\n              </a>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- block1 izquierda inferior-->\r\n          <!-- <div class=\"block1 hov-img-zoom pos-relative m-b-30\">\r\n            <img src=\"assets/images/banner-04.png\" alt=\"IMG-BENNER\">\r\n          \r\n            <div class=\"block1-wrapbtn w-size2\">\r\n              Button\r\n              <a href=\"#\" class=\"flex-c-m size2 m-text2 bg3 hov1 trans-0-4\">\r\n                Sunglasses\r\n              </a>\r\n            </div>\r\n          </div> -->\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- Our product -->\r\n  <section class=\"bgwhite p-t-45 p-b-58\">\r\n    <div class=\"container\">\r\n      <div class=\"sec-title p-b-22\">\r\n        <h3 class=\"m-text5 t-center\">\r\n          NUEVA COLECCIÓN\r\n        </h3>\r\n      </div>\r\n\r\n      <!-- Tab01 -->\r\n      <div class=\"tab01\">\r\n        <!-- Nav tabs -->\r\n        <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#best-seller\" role=\"tab\">Más Vistos</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#featured\" role=\"tab\">\r\n            Mejor vendidos</a>\r\n          </li>\r\n          \r\n        </ul>\r\n\r\n        <!-- Tab panes -->\r\n        <div class=\"tab-content p-t-35\">\r\n          <!-- - -->\r\n          <div class=\"tab-pane fade show active\" id=\"best-seller\" role=\"tabpanel\">\r\n            <div class=\"row\">\r\n              <div *ngFor = \"let producto of masVistos\" class=\"col-sm-6 col-md-4 col-lg-3 p-b-50\">\r\n                <!-- Block2 -->\r\n                <div class=\"block2\">\r\n                  <div class=\"block2-img wrap-pic-w of-hidden pos-relative \">\r\n                    <img src=\"{{producto.color.imagen[0].src}}\" alt=\"IMG-PRODUCT\">\r\n\r\n                    <div class=\"block2-overlay trans-0-4\">\r\n                      <!-- <a href=\"#\" class=\"block2-btn-addwishlist hov-pointer trans-0-4\">\r\n                        <i class=\"icon-wishlist icon_heart_alt\" aria-hidden=\"true\"></i>\r\n                        <i class=\"icon-wishlist icon_heart dis-none\" aria-hidden=\"true\"></i>\r\n                      </a> -->\r\n\r\n                      <div class=\"block2-btn-addcart w-size1 trans-0-4\">\r\n                        <!-- Button -->\r\n                        <button (click)=\"selectProducto(producto)\" class=\"flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n                          Agrega al carrito\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"block2-txt p-t-20\">\r\n                    <a [routerLink]=\"\" (click)=\"selectProducto(producto)\" class=\"block2-name dis-block s-text3 p-b-5\">\r\n                      {{producto.nombre}}\r\n                    </a>\r\n\r\n                    <span class=\"block2-price m-text6 p-r-5\">\r\n                      ${{producto.color.atributos[0].precio}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              \r\n            </div>\r\n          </div>\r\n\r\n          <!-- - -->\r\n          <div class=\"tab-pane fade\" id=\"featured\" role=\"tabpanel\">\r\n            <div class=\"row\">\r\n              <div *ngFor = \"let producto of masVendidos\" class=\"col-sm-6 col-md-4 col-lg-3 p-b-50\">\r\n                <!-- Block2 -->\r\n                <div class=\"block2\">\r\n                  <div class=\"block2-img wrap-pic-w of-hidden pos-relative \">\r\n                    <img src=\"{{producto.color.imagen[0].src}}\" alt=\"IMG-PRODUCT\">\r\n\r\n                    <div class=\"block2-overlay trans-0-4\">\r\n                      <!-- <a href=\"#\" class=\"block2-btn-addwishlist hov-pointer trans-0-4\">\r\n                        <i class=\"icon-wishlist icon_heart_alt\" aria-hidden=\"true\"></i>\r\n                        <i class=\"icon-wishlist icon_heart dis-none\" aria-hidden=\"true\"></i>\r\n                      </a> -->\r\n\r\n                      <div class=\"block2-btn-addcart w-size1 trans-0-4\">\r\n                        <!-- Button -->\r\n                        <button (click)=\"selectProducto(producto)\" class=\"flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n                          Agrega al carrito\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"block2-txt p-t-20\">\r\n                    <a [routerLink]=\"\" (click)=\"selectProducto(producto)\" class=\"block2-name dis-block s-text3 p-b-5\">\r\n                      {{producto.nombre}}\r\n                    </a>\r\n\r\n                    <span class=\"block2-price m-text6 p-r-5\">\r\n                      ${{producto.color.atributos[0].precio}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n            </div>\r\n          </div>\r\n\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n\r\n\r\n  <!-- Blog -->\r\n  <section *ngIf=\"blogs\" class=\"blog bgwhite p-t-94 p-b-65\">\r\n    <div class=\"container\">\r\n      <div class=\"sec-title p-b-52\">\r\n        <h3 class=\"m-text5 t-center\">\r\n          Nuestro Blog\r\n        </h3>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div *ngFor = \"let blog of blogs\" class=\"col-sm-10 col-md-4 p-b-30 m-l-r-auto\">\r\n          <!-- Block3 -->\r\n          <div class=\"block3\">\r\n            <a [routerLink]=\"\" (click)=\"selectBlog(blog)\" class=\"block3-img dis-block hov-img-zoom\">\r\n              <img src=\"{{blog.imagen}}\" alt=\"IMG-BLOG\" style=\"width: 500px;height: 500px;\">\r\n            </a>\r\n\r\n            <div class=\"block3-txt p-t-14\">\r\n              <h4 class=\"p-b-7\">\r\n                <a [routerLink]=\"\" (click)=\"selectBlog(blog)\" class=\"m-text11\">\r\n                  {{blog.titulo}}\r\n                </a>\r\n              </h4>\r\n\r\n              <span class=\"s-text6\">By</span> <span class=\"s-text7\">{{blog.creador}}</span>\r\n              <span class=\"s-text6\">on</span> <span class=\"s-text7\">{{blog.created_at | date}}</span>\r\n\r\n              <p class=\"s-text8 p-t-16\">\r\n                {{blog.contenido}}\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- Instagram -->\r\n  <section class=\"instagram p-t-20\">\r\n    <div class=\"sec-title p-b-52 p-l-15 p-r-15\">\r\n      <h3 class=\"m-text5 t-center\">\r\n        <a class=\"m-text5 t-center\" href=\"https://www.instagram.com/beauve_/\">@beauve_ Siguenos Instagram</a>\r\n      </h3>\r\n    </div>\r\n\r\n    <div class=\"flex-w\">\r\n      <!-- Block4 -->\r\n      <div class=\"block4 wrap-pic-w\">\r\n        <img src=\"http://massagegraf.com/beau/nuevo/images/blusarosas.png\" alt=\"beau\" style=\"width: 330px;height: 350px;\">\r\n\r\n        <a href=\"#\" class=\"block4-overlay sizefull ab-t-l trans-0-4\">\r\n          <!--span class=\"block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25\">\r\n            <i class=\"icon_heart_alt fs-20 p-r-12\" aria-hidden=\"true\"></i>\r\n            <span class=\"p-t-2\">39</span>\r\n          </span-->\r\n\r\n          <div class=\"block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30\">\r\n            <p class=\"s-text10 m-b-15 h-size1 of-hidden\">\r\n              \r\n            </p>\r\n\r\n            <span class=\"s-text9\">\r\n              Photo by @beauve_\r\n            </span>\r\n          </div>\r\n        </a>\r\n      </div>\r\n\r\n      <!-- Block4 -->\r\n      <div class=\"block4 wrap-pic-w\">\r\n        <img src=\"http://massagegraf.com/beau/nuevo/images/chaqueta.png\" alt=\"beau\" style=\"width: 330px;height: 350px;\">\r\n\r\n        <a href=\"#\" class=\"block4-overlay sizefull ab-t-l trans-0-4\">\r\n          <!--span class=\"block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25\">\r\n            <i class=\"icon_heart_alt fs-20 p-r-12\" aria-hidden=\"true\"></i>\r\n            <span class=\"p-t-2\">39</span>\r\n          </span-->\r\n\r\n          <div class=\"block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30\">\r\n            <p class=\"s-text10 m-b-15 h-size1 of-hidden\">\r\n              \r\n            </p>\r\n\r\n            <span class=\"s-text9\">\r\n              Photo by @beauve_\r\n            </span>\r\n          </div>\r\n        </a>\r\n      </div>\r\n\r\n      <!-- Block4 -->\r\n      <div class=\"block4 wrap-pic-w\">\r\n        <img src=\"http://massagegraf.com/beau/nuevo/images/chalecos.png\" alt=\"beau\" style=\"width: 330px;height: 350px;\">\r\n\r\n        <a href=\"#\" class=\"block4-overlay sizefull ab-t-l trans-0-4\">\r\n          <!--span class=\"block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25\">\r\n            <i class=\"icon_heart_alt fs-20 p-r-12\" aria-hidden=\"true\"></i>\r\n            <span class=\"p-t-2\">39</span>\r\n          </span-->\r\n\r\n          <div class=\"block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30\">\r\n            <p class=\"s-text10 m-b-15 h-size1 of-hidden\">\r\n              \r\n            </p>\r\n\r\n            <span class=\"s-text9\">\r\n              Photo by @beauve_\r\n            </span>\r\n          </div>\r\n        </a>\r\n      </div>\r\n\r\n      <!-- Block4 -->\r\n      <div class=\"block4 wrap-pic-w\">\r\n        <img src=\"http://massagegraf.com/beau/nuevo/images/cuellotortuga.png\" alt=\"beau\" style=\"width: 330px;height: 350px;\">\r\n\r\n        <a href=\"#\" class=\"block4-overlay sizefull ab-t-l trans-0-4\">\r\n          <!--span class=\"block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25\">\r\n            <i class=\"icon_heart_alt fs-20 p-r-12\" aria-hidden=\"true\"></i>\r\n            <span class=\"p-t-2\">39</span>\r\n          </span-->\r\n\r\n          <div class=\"block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30\">\r\n            <p class=\"s-text10 m-b-15 h-size1 of-hidden\">\r\n              \r\n            </p>\r\n\r\n            <span class=\"s-text9\">\r\n              Photo by @beauve_\r\n            </span>\r\n          </div>\r\n        </a>\r\n      </div>\r\n\r\n      <!-- Block4 -->\r\n      <div class=\"block4 wrap-pic-w\">\r\n        <img src=\"http://massagegraf.com/beau/nuevo/images/sueter-rosado.png\" alt=\"beau\" style=\"width: 330px;height: 350px;\">\r\n\r\n        <a href=\"#\" class=\"block4-overlay sizefull ab-t-l trans-0-4\">\r\n          <!--span class=\"block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25\">\r\n            <i class=\"icon_heart_alt fs-20 p-r-12\" aria-hidden=\"true\"></i>\r\n            <span class=\"p-t-2\">39</span>\r\n          </span-->\r\n\r\n          <div class=\"block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30\">\r\n            <p class=\"s-text10 m-b-15 h-size1 of-hidden\">\r\n              \r\n            </p>\r\n\r\n            <span class=\"s-text9\">\r\n              Photo by @beauve_\r\n            </span>\r\n          </div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- Shipping -->\r\n  <section class=\"shipping bgwhite p-t-62 p-b-46\">\r\n    <div class=\"flex-w p-l-15 p-r-15\">\r\n      <div class=\"flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 respon1\">\r\n        <h4 class=\"m-text12 t-center\">\r\n          ¡Envio gratis! \r\n        </h4>\r\n\r\n        <a href=\"#\" class=\"s-text11 t-center\">\r\n          En compras mayores de 50$\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 bo2 respon2\">\r\n        <h4 class=\"m-text12 t-center\">\r\n          Compra con previa cita\r\n        </h4>\r\n\r\n        <span class=\"s-text11 t-center\">\r\n          Pide tu cita con un dia te anticipación.\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 respon1\">\r\n        <h4 class=\"m-text12 t-center\">\r\n          Horario 10:00 am a 1:00 pm\r\n        </h4>\r\n\r\n        <span class=\"s-text11 t-center\">\r\n          Abiertos de Lunes a Domingo\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/luvas/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ruta_service_ruta_service__ = __webpack_require__("../../../../../src/app/services/ruta-service/ruta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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
//import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
//import { CartService } from '../../../services/cart-service/cart.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, router, rutaService, fb /*,
        private cartService: CartService*/) {
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.fb = fb; /*,
        private cartService: CartService*/
        this.loading = false;
        this.editando = false;
        this.agregando = false;
        this.mostrar = true;
        this.detalle = false;
        this.alerta = false;
        this.alerta_boton = false;
        this.slides = [
            { img: "http://placehold.it/350x150/000000" },
            { img: "http://placehold.it/350x150/111111" },
            { img: "http://placehold.it/350x150/333333" },
            { img: "http://placehold.it/350x150/666666" }
        ];
        this.slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.router.navigated) {
            window.scrollTo(0, 0);
        }
        this.getCategorias();
    };
    HomeComponent.prototype.addSlide = function () {
        this.slides.push({ img: "http://placehold.it/350x150/777777" });
    };
    HomeComponent.prototype.removeSlide = function () {
        this.slides.length = this.slides.length - 1;
    };
    HomeComponent.prototype.afterChange = function (e) {
        console.log('afterChange');
    };
    //Alerta cuando se vence el token
    HomeComponent.prototype.ok_alerta = function () {
        this.router.navigate(['luvas']);
    };
    HomeComponent.prototype.cerrarAlerta = function () {
        this.alerta = false;
    };
    /*Trae las categorias en estado ON*/
    HomeComponent.prototype.getCategorias = function () {
        var _this = this;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'categorias/home/cliente?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data2 = data;
            _this.categorias = _this.data2.categorias;
            _this.loading = false;
            _this.getProductsPopulares();
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
                _this.alerta_tipo = 'info';
                _this.alerta_msg = msg.error.error;
                _this.alerta = true;
                setTimeout(function () { _this.alerta = false; }, 4000);
            }
        });
    };
    HomeComponent.prototype.selectCategoria = function (categoria) {
        var cat = JSON.stringify(categoria);
        localStorage.setItem('luvas_catFilter', cat);
        this.router.navigateByUrl('/luvas/productos');
    };
    /*Trae los productos mas vistos y mas populares*/
    HomeComponent.prototype.getProductsPopulares = function () {
        var _this = this;
        //this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'productos/mas/populares?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.masVistos = _this.data.masVistos;
            _this.masVendidos = _this.data.masVendidos;
            //this.loading = false;
            _this.getBlogs();
        }, function (msg) {
            msg.error = JSON.parse(msg.error);
            console.log(msg);
            console.log(msg.error.error);
            //this.loading = false;
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
                _this.alerta_tipo = 'info';
                _this.alerta_msg = msg.error.error;
                _this.alerta = true;
                setTimeout(function () { _this.alerta = false; }, 4000);
            }
        });
    };
    HomeComponent.prototype.selectProducto = function (producto) {
        var prod = JSON.stringify(producto);
        localStorage.setItem('luvas_prodFilter', prod);
        this.router.navigateByUrl('/luvas/productos');
    };
    /*Trae los ultimos 3 blogs*/
    HomeComponent.prototype.getBlogs = function () {
        var _this = this;
        //this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'blogs/home/cliente?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.blogs = _this.data.blogs;
            //this.loading = false;    
        }, function (msg) {
            msg.error = JSON.parse(msg.error);
            console.log(msg);
            console.log(msg.error.error);
            //this.loading = false;
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
                _this.alerta_tipo = 'info';
                _this.alerta_msg = msg.error.error;
                _this.alerta = true;
                setTimeout(function () { _this.alerta = false; }, 4000);
            }
        });
    };
    HomeComponent.prototype.selectBlog = function (blog) {
        var blogAux = JSON.stringify(blog);
        localStorage.setItem('luvas_blogFilter', blogAux);
        this.router.navigateByUrl('/luvas/blog');
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/luvas/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/luvas/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_ruta_service_ruta_service__["a" /* RutaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_ruta_service_ruta_service__["a" /* RutaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] /*,
            private cartService: CartService*/ !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] /*,
            private cartService: CartService*/) === "function" && _d || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/luvas/luvas-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LuvasRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_luvas__ = __webpack_require__("../../../../../src/app/containers-luvas/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/views/luvas/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productos_productos_component__ = __webpack_require__("../../../../../src/app/views/luvas/productos/productos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detalle_detalle_component__ = __webpack_require__("../../../../../src/app/views/luvas/detalle/detalle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blog_blog_component__ = __webpack_require__("../../../../../src/app/views/luvas/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blog_detalle_blog_detalle_component__ = __webpack_require__("../../../../../src/app/views/luvas/blog-detalle/blog-detalle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cart_cart_component__ = __webpack_require__("../../../../../src/app/views/luvas/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contacto_contacto_component__ = __webpack_require__("../../../../../src/app/views/luvas/contacto/contacto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__registro_registro_component__ = __webpack_require__("../../../../../src/app/views/luvas/registro/registro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pedidoscli_pedidoscli_component__ = __webpack_require__("../../../../../src/app/views/luvas/pedidoscli/pedidoscli.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Import containers

//Importar componentes









var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__containers_luvas__["a" /* FullLayoutLuvas */],
        data: {
            title: 'Example Pages Luvas'
        },
        children: [
            {
                path: 'home',
                component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
                data: {
                    title: 'Page home'
                }
            },
            {
                path: 'productos',
                component: __WEBPACK_IMPORTED_MODULE_4__productos_productos_component__["a" /* ProductosComponent */],
                data: {
                    title: 'Page productos'
                }
            },
            {
                path: 'detalle',
                component: __WEBPACK_IMPORTED_MODULE_5__detalle_detalle_component__["a" /* DetalleComponent */],
                data: {
                    title: 'Page detalle'
                }
            },
            {
                path: 'blog',
                component: __WEBPACK_IMPORTED_MODULE_6__blog_blog_component__["a" /* BlogComponent */],
                data: {
                    title: 'Page blog'
                }
            },
            {
                path: 'blog/detalle',
                component: __WEBPACK_IMPORTED_MODULE_7__blog_detalle_blog_detalle_component__["a" /* BlogDetalleComponent */],
                data: {
                    title: 'Page blog detalle'
                }
            },
            {
                path: 'carrito',
                component: __WEBPACK_IMPORTED_MODULE_8__cart_cart_component__["a" /* CartComponent */],
                data: {
                    title: 'Page carrito'
                }
            },
            {
                path: 'contacto',
                component: __WEBPACK_IMPORTED_MODULE_9__contacto_contacto_component__["a" /* ContactoComponent */],
                data: {
                    title: 'Page contacto'
                }
            },
            {
                path: 'registro',
                component: __WEBPACK_IMPORTED_MODULE_10__registro_registro_component__["a" /* RegistroComponent */],
                data: {
                    title: 'Page registro'
                }
            },
            {
                path: 'pedidos/cliente',
                component: __WEBPACK_IMPORTED_MODULE_11__pedidoscli_pedidoscli_component__["a" /* PedidosCliComponent */],
                data: {
                    title: 'Page pedidos cliente'
                }
            }
        ]
    }
];
var LuvasRoutingModule = /** @class */ (function () {
    function LuvasRoutingModule() {
    }
    LuvasRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], LuvasRoutingModule);
    return LuvasRoutingModule;
}());

//# sourceMappingURL=luvas-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/luvas/luvas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LuvasModule", function() { return LuvasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_luvas__ = __webpack_require__("../../../../../src/app/containers-luvas/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_luvas__ = __webpack_require__("../../../../../src/app/components-luvas/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/views/luvas/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productos_productos_component__ = __webpack_require__("../../../../../src/app/views/luvas/productos/productos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detalle_detalle_component__ = __webpack_require__("../../../../../src/app/views/luvas/detalle/detalle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blog_blog_component__ = __webpack_require__("../../../../../src/app/views/luvas/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blog_detalle_blog_detalle_component__ = __webpack_require__("../../../../../src/app/views/luvas/blog-detalle/blog-detalle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cart_cart_component__ = __webpack_require__("../../../../../src/app/views/luvas/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contacto_contacto_component__ = __webpack_require__("../../../../../src/app/views/luvas/contacto/contacto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__registro_registro_component__ = __webpack_require__("../../../../../src/app/views/luvas/registro/registro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pedidoscli_pedidoscli_component__ = __webpack_require__("../../../../../src/app/views/luvas/pedidoscli/pedidoscli.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__luvas_routing_module__ = __webpack_require__("../../../../../src/app/views/luvas/luvas-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap_alert__ = __webpack_require__("../../../../ngx-bootstrap/alert/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ngx_gallery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Import containers

var APP_CONTAINERS2 = [
    __WEBPACK_IMPORTED_MODULE_1__containers_luvas__["a" /* FullLayoutLuvas */]
];
// Import components

var APP_COMPONENTS2 = [
    __WEBPACK_IMPORTED_MODULE_2__components_luvas__["b" /* HeaderLuvas */],
    __WEBPACK_IMPORTED_MODULE_2__components_luvas__["a" /* FooterLuvas */]
];
//Importar componentes










//Mis imports


// Modal Component



//import { Ng2UploaderModule } from 'ng2-uploader';


//import { NgxPermissionsModule } from 'ngx-permissions';

var LuvasModule = /** @class */ (function () {
    function LuvasModule() {
    }
    LuvasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_19_ngx_gallery__["NgxGalleryModule"],
                //NgxPermissionsModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot(),
                //Ng2UploaderModule,
                __WEBPACK_IMPORTED_MODULE_12__luvas_routing_module__["a" /* LuvasRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17_ngx_loading__["b" /* LoadingModule */].forRoot({
                    animationType: __WEBPACK_IMPORTED_MODULE_17_ngx_loading__["a" /* ANIMATION_TYPES */].chasingDots,
                    backdropBackgroundColour: 'rgba(0,0,0,0.5)',
                    backdropBorderRadius: '4px',
                    primaryColour: '#ffffff',
                    secondaryColour: '#ffffff',
                    tertiaryColour: '#ffffff',
                    fullScreenBackdrop: true
                })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__productos_productos_component__["a" /* ProductosComponent */],
                __WEBPACK_IMPORTED_MODULE_5__detalle_detalle_component__["a" /* DetalleComponent */],
                __WEBPACK_IMPORTED_MODULE_6__blog_blog_component__["a" /* BlogComponent */],
                __WEBPACK_IMPORTED_MODULE_7__blog_detalle_blog_detalle_component__["a" /* BlogDetalleComponent */],
                __WEBPACK_IMPORTED_MODULE_8__cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_9__contacto_contacto_component__["a" /* ContactoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pedidoscli_pedidoscli_component__["a" /* PedidosCliComponent */],
                __WEBPACK_IMPORTED_MODULE_10__registro_registro_component__["a" /* RegistroComponent */]
            ].concat(APP_CONTAINERS2, APP_COMPONENTS2)
        })
    ], LuvasModule);
    return LuvasModule;
}());

//# sourceMappingURL=luvas.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/luvas/pedidoscli/pedidoscli.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alertaC {\r\n  position: fixed !important;\r\n  z-index: 1000 !important;\r\n  /* top: 70px !important; */\r\n  right: 10px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/luvas/pedidoscli/pedidoscli.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alertaC\"  *ngIf=\"alerta\">\r\n  <alert  [type]=\"alerta_tipo\" dismissible=\"true\" close=\"cerrarAlerta()\">\r\n    <strong>{{alerta_msg}}</strong> \r\n  </alert>\r\n</div> \r\n\r\n<div class=\"alertaC\" *ngIf=\"alerta_boton\">\r\n  <alert [type]=\"alerta_tipo\" >\r\n    <strong>{{alerta_msg}}</strong>\r\n    <button type=\"button\" class=\"btn btn4 btn-secondary\" (click)=\"ok_alerta()\">ok</button> \r\n  </alert>\r\n</div>\r\n\r\n<!--Modal automatica para hacer login:\r\n <button type=\"button\" class=\"btn btn-primary\" (click)=\"showModal()\">Render auto-shown modal</button>-->\r\n<div *ngIf=\"isModalShown\" [config]=\"{ show: true, ignoreBackdropClick: true, keyboard: false }\" (onHidden)=\"onHidden()\" bsModal #autoShownModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Login</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        \r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n  <!-- content page -->\r\n  <section class=\"bgwhite p-t-66 p-b-60\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n\r\n        <div style=\"display:block; margin:auto\" class=\"col-md-6 p-b-30\">\r\n          <form [formGroup]=\"myFormLogin\" novalidate class=\"leave-comment\">\r\n            <h4 class=\"m-text26 p-b-36 p-t-15\">\r\n              Enter your data\r\n            </h4>\r\n\r\n            <div *ngIf=\"myFormLogin.get('email').errors && myFormLogin.get('email').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormLogin.get('email').hasError('required')\">Email is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"text\" name=\"email\" placeholder=\"Email Address\" formControlName=\"email\">\r\n            </div>\r\n\r\n            <div *ngIf=\"myFormLogin.get('password').errors && myFormLogin.get('password').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormLogin.get('password').hasError('required')\">Password is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"password\" name=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n            </div>\r\n\r\n            \r\n          </form>\r\n\r\n          <div class=\"w-size25\">\r\n            <!-- Button -->\r\n            <button class=\"flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" [disabled]=\"myFormLogin.invalid\" (click)=\"login(); hideModal()\">\r\n              Login\r\n            </button>\r\n          </div>\r\n\r\n          <button class=\"btn btn-facebook\" type=\"button\" style=\"margin-top: 16px\" (click)=\"hideModal()\"><span>facebook</span></button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>            \r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <div class=\"w-size25\">\r\n          <!-- Button -->\r\n          <button class=\"flex-c-m size1 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" (click)=\"hideModal(); irARegistro()\">\r\n            Subscribe\r\n          </button>\r\n        </div>\r\n        <div class=\"w-size25\">\r\n          <!-- Button -->\r\n          <button class=\"flex-c-m size1 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" (click)=\"hideModal()\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--Modal automatica para seleccionar el metodo de pago:\r\n <button type=\"button\" class=\"btn btn-primary\" (click)=\"showModal()\">Render auto-shown modal</button>-->\r\n<div *ngIf=\"isModalShown2\" [config]=\"{ show: true, ignoreBackdropClick: true, keyboard: false }\" (onHidden)=\"onHidden2()\" bsModal #autoShownModal2=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Payment method</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal2()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        \r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n  <!-- content page -->\r\n  <section class=\"bgwhite p-t-66 p-b-60\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n\r\n        <div style=\"display:block; margin:auto\" class=\"col-md-9 p-b-30\">\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-md-3 form-control-label\">Methods</label>\r\n\r\n            <div class=\"col-md-9\">\r\n              <div class=\"radio\">\r\n                <label for=\"radio1\">\r\n                  <input type=\"radio\" id=\"radio1\" name=\"radios\" value=\"option1\" (click)=\"hideModal2(); getBancos(); setTransferencia()\"> Transfer\r\n                </label>\r\n              </div>\r\n              <div class=\"radio\">\r\n                <label for=\"radio2\">\r\n                  <input type=\"radio\" id=\"radio2\" name=\"radios\" value=\"option2\" (click)=\"hideModal2(); myModal3.show(); setPayPal()\"> PayPal\r\n                </label>\r\n              </div>\r\n              \r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>          \r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <div class=\"w-size25\">\r\n          <!-- Button -->\r\n          <button class=\"flex-c-m size1 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" (click)=\"hideModal2()\">\r\n             Pay later\r\n          </button>\r\n        </div>\r\n        <div class=\"w-size25\">\r\n          <!-- Button -->\r\n          <button class=\"flex-c-m size1 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" (click)=\"hideModal2()\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--Modal para presentar los datos de la transferencia-->\r\n<div bsModal #myModal2=\"bs-modal\" [config]=\"{ ignoreBackdropClick: true, keyboard: false }\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Transfer </h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"myModal2.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        \r\n  <!-- content page -->\r\n  <section class=\"bgwhite p-t-66 p-b-60\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n\r\n        <div style=\"display:block; margin:auto\" class=\"col-md-6 p-b-30\">\r\n          \r\n          <form [formGroup]=\"myFormPago\" novalidate class=\"leave-comment\">\r\n            <h4 class=\"m-text26 p-b-36 p-t-15\">\r\n              Data for the transfer\r\n            </h4>\r\n\r\n            <div *ngFor = \"let banco of bancos\">\r\n              <span class=\"danger\" color=\"danger\"><strong>Account number:</strong> {{banco.cuenta}}</span>\r\n              <br>\r\n\r\n              <span class=\"danger\" color=\"danger\"><strong>Headline:</strong> {{banco.titular}}</span>\r\n              <br>\r\n\r\n              <span class=\"danger\" color=\"danger\"><strong>Email:</strong> {{banco.email}}</span>\r\n              <br>\r\n\r\n              <span class=\"danger\" color=\"danger\"><strong>Num document:</strong> {{banco.num_documento}}</span>\r\n              <br>\r\n\r\n              <span class=\"danger\" color=\"danger\"><strong>Account type:</strong> {{banco.tipo_cuenta}}</span>\r\n              <br>\r\n              <br>\r\n              <br>\r\n            </div>\r\n\r\n\r\n            <div *ngIf=\"myFormPago.get('ref_pago').errors && myFormPago.get('ref_pago').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormPago.get('ref_pago').hasError('required')\">Reference is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"text\" name=\"ref_pago\" placeholder=\"Reference\" formControlName=\"ref_pago\">\r\n            </div>\r\n            \r\n          </form>\r\n\r\n          <div class=\"w-size25\">\r\n            <!-- Button -->\r\n            <button class=\"flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" [disabled]=\"myFormPago.invalid\" (click)=\"pagar(); myModal2.hide()\">\r\n              pay\r\n            </button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> \r\n\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <div class=\"w-size25\">\r\n          <!-- Button -->\r\n          <button class=\"flex-c-m size1 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" (click)=\"myModal2.hide()\">\r\n            Pay later\r\n          </button>\r\n        </div>\r\n        <div class=\"w-size25\">\r\n          <!-- Button -->\r\n          <button class=\"flex-c-m size1 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" (click)=\"myModal2.hide()\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<!--Modal para el pago con paypal-->\r\n<div bsModal #myModal3=\"bs-modal\" [config]=\"{ ignoreBackdropClick: true, keyboard: false }\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Transfer </h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"myModal3.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        \r\n  <!-- content page -->\r\n  <section class=\"bgwhite p-t-66 p-b-60\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n\r\n        <div style=\"display:block; margin:auto\" class=\"col-md-6 p-b-30\">\r\n          \r\n          <form [formGroup]=\"myFormPago\" novalidate class=\"leave-comment\">\r\n            <h4 class=\"m-text26 p-b-36 p-t-15\">\r\n              Data PayPal\r\n            </h4>\r\n\r\n            \r\n           \r\n            <br>\r\n            <br>\r\n\r\n\r\n            <div *ngIf=\"myFormPago.get('ref_pago').errors && myFormPago.get('ref_pago').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormPago.get('ref_pago').hasError('required')\">Reference is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"text\" name=\"ref_pago\" placeholder=\"Reference\" formControlName=\"ref_pago\">\r\n            </div>\r\n            \r\n          </form>\r\n\r\n          <div class=\"w-size25\">\r\n            <!-- Button -->\r\n            <button class=\"flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" [disabled]=\"myFormPago.invalid\" (click)=\"pagar(); myModal3.hide()\">\r\n              pay\r\n            </button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> \r\n\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <div class=\"w-size25\">\r\n          <!-- Button -->\r\n          <button class=\"flex-c-m size1 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" (click)=\"myModal3.hide()\">\r\n            Pay later\r\n          </button>\r\n        </div>\r\n        <div class=\"w-size25\">\r\n          <!-- Button -->\r\n          <button class=\"flex-c-m size1 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" (click)=\"myModal3.hide()\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n  <!-- Title Page -->\r\n  <section *ngIf=\"!viendo && mostrar\" class=\"bg-title-page p-t-40 p-b-50 flex-col-c-m\" style=\"background-image: url(http://beau-moda.com/images/banner.png);\">\r\n    <h2 class=\"l-text2 t-center\">\r\n      Orders\r\n    </h2>\r\n  </section>\r\n\r\n  <!-- Cart -->\r\n  <section *ngIf=\"!viendo && mostrar\" class=\"cart bgwhite p-t-70 p-b-100\">\r\n    <div class=\"container\">\r\n      <!-- Cart item -->\r\n      <div class=\"container-table-cart pos-relative\">\r\n        <div class=\"wrap-table-shopping-cart bgwhite\">\r\n          <table class=\"table-shopping-cart\">\r\n            <tr class=\"table-head\">\r\n              <th class=\"column-1\"></th>\r\n              <th class=\"column-1\">Id</th>\r\n              <th class=\"column-1\">Status</th>\r\n              <th class=\"column-1\">Date</th>\r\n              <th class=\"column-1\">Hour</th>\r\n              <th class=\"column-1\">Total</th>\r\n            </tr>\r\n\r\n            <tr *ngFor=\"let item of pedidos\" class=\"table-row\">\r\n              <td class=\"column-1\">\r\n                <a routerLinkActive=\"active\" [routerLink]=\"\" (click)=\"ver(item)\" class=\"s-text13\">\r\n                  Show\r\n                </a>\r\n              </td>\r\n              <td class=\"column-1\">\r\n                {{item.id}}\r\n              </td>\r\n              <td class=\"column-1\">\r\n                {{item.estado}}\r\n              </td>\r\n              <td class=\"column-1\">\r\n                {{item.fecha}}\r\n              </td>\r\n              <td class=\"column-1\">\r\n                {{item.hora}}\r\n              </td>\r\n              <td class=\"column-1\">\r\n                ${{item.subtotal}}\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <div class=\"flex-w flex-sb-m p-t-25 p-b-25 bo8 p-l-35 p-r-60 p-lr-15-sm\">\r\n        <div class=\"flex-w flex-m w-full-sm\">\r\n          <div class=\"size11 bo4 m-r-10\">\r\n            <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"text\" name=\"coupon-code\" placeholder=\"Coupon Code\">\r\n          </div>\r\n        \r\n          <div class=\"size12 trans-0-4 m-t-10 m-b-10 m-r-10\">\r\n            Button\r\n            <button class=\"flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n              Apply coupon\r\n            </button>\r\n          </div>\r\n        </div>\r\n      \r\n        <div class=\"size10 trans-0-4 m-t-10 m-b-10\">\r\n          Button\r\n          <button class=\"flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n            Update Cart\r\n          </button>\r\n        </div>\r\n      </div> -->\r\n\r\n      <!-- Total -->\r\n      <div class=\"bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm\">\r\n        <h5 class=\"m-text20 p-b-24\">\r\n          User Profile\r\n        </h5>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div style=\"display:block; margin:auto\" class=\"col-md-12 p-b-30\">\r\n          <form [formGroup]=\"myFormUpdateProfile\" novalidate class=\"leave-comment\">\r\n\r\n            <span class=\"s-text18 w-size19 w-full-sm\">Email</span>\r\n            <div *ngIf=\"myFormUpdateProfile.get('email').errors && myFormUpdateProfile.get('email').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormUpdateProfile.get('email').hasError('required')\">Email is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"text\" name=\"email\" placeholder=\"Email Address\" formControlName=\"email\" >\r\n            </div>\r\n\r\n            <span class=\"s-text18 w-size19 w-full-sm\">Password</span>\r\n            <div *ngIf=\"myFormUpdateProfile.get('password').errors && myFormUpdateProfile.get('password').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormUpdateProfile.get('password').hasError('required')\">Password is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"password\" name=\"password\" placeholder=\"Password\" formControlName=\"password\" >\r\n            </div>\r\n\r\n            <span class=\"s-text18 w-size19 w-full-sm\">Confirm Password</span>\r\n            <div *ngIf=\"myFormUpdateProfile.get('confirm').errors && myFormUpdateProfile.get('confirm').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormUpdateProfile.get('confirm').hasError('required')\">Password is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"password\" name=\"confirm\" placeholder=\"Confirm Password\" formControlName=\"confirm\" >\r\n            </div>\r\n\r\n            <span class=\"s-text18 w-size19 w-full-sm\">Full Name</span>\r\n            <div *ngIf=\"myFormUpdateProfile.get('nombre').errors && myFormUpdateProfile.get('nombre').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormUpdateProfile.get('nombre').hasError('required')\">Name is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"text\" name=\"nombre\" placeholder=\"Full Name\" formControlName=\"nombre\" >\r\n            </div>\r\n\r\n            <span class=\"s-text18 w-size19 w-full-sm\">Phone</span>\r\n            <div *ngIf=\"myFormUpdateProfile.get('telefono').errors && myFormUpdateProfile.get('telefono').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormUpdateProfile.get('telefono').hasError('required')\">Phone is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"text\" name=\"telefono\" placeholder=\"Phone Number\" formControlName=\"telefono\" >\r\n            </div>\r\n\r\n            <span class=\"s-text18 w-size19 w-full-sm\">Address</span>\r\n            <div *ngIf=\"myFormUpdateProfile.get('direccion').errors && myFormUpdateProfile.get('direccion').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormUpdateProfile.get('direccion').hasError('required')\">Address is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"text\" name=\"direccion\" placeholder=\"Address\" formControlName=\"direccion\" >\r\n            </div>\r\n\r\n            <div *ngIf=\"user\" [hidden]=\"clear\" class=\"form-group row\" style=\"margin-left: 4px;\">\r\n              <br>\r\n              <span class=\"s-text18 w-size19 w-full-sm\">Image</span>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"file\" name=\"imagen\" id=\"imagen\" (change)=\"onFileChange($event)\" #fileInput accept=\"image/*\">\r\n\r\n                <br>\r\n                <br>\r\n                \r\n                <!-- <p [hidden]=\"clear\" style=\"color: #c71717\"><b>Sugerencia:</b> La dimensión de la imagen no debe ser mayor a 870x370 px.</p> -->\r\n                \r\n                <img src = \"{{user.imagen}}\" alt=\"\" height=\"100px\">\r\n              </div>\r\n            </div>\r\n\r\n             <div *ngIf=\"clear\" class=\"form-group row\" style=\"margin-left: 4px;\">\r\n               <span class=\"s-text18 w-size19 w-full-sm\">Image</span>\r\n               <div class=\"col-md-9\">\r\n                 <br>\r\n                 <output id=\"list\"></output>\r\n                 <br>\r\n                 <br>\r\n                 <button type=\"button\" class=\"btn btn-danger btn-tn\" (click)=\"clearFile()\">clear file</button>\r\n               </div>\r\n             </div>\r\n\r\n            \r\n          </form>\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n        <div class=\"size15 trans-0-4\">\r\n          <!-- Button -->\r\n          <button [disabled]=\"myFormUpdateProfile.invalid\" (click)=\"validarUpdate()\" class=\"flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n            Update\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      \r\n    </div>\r\n  </section>\r\n\r\n  <!-- Cart -->\r\n  <section *ngIf=\"viendo\" class=\"cart bgwhite p-t-70 p-b-100\">\r\n    <div class=\"container\">\r\n      <!-- Cart item -->\r\n      <div class=\"container-table-cart pos-relative\">\r\n        <div class=\"wrap-table-shopping-cart bgwhite\">\r\n          <table class=\"table-shopping-cart\">\r\n            <tr class=\"table-head\">\r\n              <th class=\"column-1\"></th>\r\n              <th class=\"column-1\">Product</th>\r\n              <th class=\"column-1\">Color</th>\r\n              <th class=\"column-1\">Size</th>\r\n              <th class=\"column-1\">Price</th>\r\n              <th class=\"column-1\">Quantity</th>\r\n              <th class=\"column-1\">Total</th>\r\n            </tr>\r\n\r\n            <tr *ngFor=\"let item of selectedObj.productos\" class=\"table-row\">\r\n              <td class=\"column-1\">\r\n                <div class=\"cart-img-product b-rad-4 o-f-hidden\">\r\n                  <img src=\"{{item.color.imagen[0].src}}\" alt=\"IMG-PRODUCT\">\r\n                </div>\r\n              </td>\r\n              <td class=\"column-1\">{{item.nombre}}</td>\r\n              <td class=\"column-1\">{{item.color.nombre_color}}</td>\r\n              <td class=\"column-1\">{{item.atributo.atributo}}</td>\r\n              <td class=\"column-1\">{{item.pivot.precio_unitario}}</td>\r\n              <td class=\"column-1\">{{item.pivot.cantidad}}</td>\r\n              <td class=\"column-1\">${{item.pivot.subtotal}}</td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"flex-w flex-sb-m p-t-25 p-b-25 bo8 p-l-35 p-r-60 p-lr-15-sm\">\r\n        <div class=\"flex-w flex-m w-full-sm\">\r\n          <!-- <div class=\"size11 bo4 m-r-10\">\r\n             <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"text\" name=\"coupon-code\" placeholder=\"Coupon Code\">\r\n           </div>\r\n                   \r\n           <div class=\"size12 trans-0-4 m-t-10 m-b-10 m-r-10\">\r\n             \r\n             <button class=\"flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n               Apply coupon\r\n             </button>\r\n           </div> --> \r\n\r\n        </div>\r\n      \r\n        <div >\r\n\r\n          <span class=\"m-text22 w-size19 w-full-sm\">\r\n            Total:\r\n          </span>\r\n\r\n          <span class=\"m-text21 w-size20 w-full-sm\">\r\n            ${{selectedObj.subtotal}}\r\n          </span>\r\n      \r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- Total -->\r\n      <div class=\"bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm\">\r\n        <h5 class=\"m-text20 p-b-24\">\r\n          Order Details\r\n        </h5>\r\n\r\n        <!--  -->\r\n        <div class=\"flex-w flex-sb-m p-b-12\">\r\n          <span class=\"s-text18 w-size19 w-full-sm\">\r\n            Id:\r\n          </span>\r\n\r\n          <span class=\"m-text10 w-size20 w-full-sm\">\r\n            {{selectedObj.id}}\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"flex-w flex-sb-m p-b-12\">\r\n          <span class=\"s-text18 w-size19 w-full-sm\">\r\n            Status:\r\n          </span>\r\n\r\n          <span class=\"m-text10 w-size20 w-full-sm\">\r\n            {{selectedObj.estado}}\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"flex-w flex-sb-m p-b-12\">\r\n          <span class=\"s-text18 w-size19 w-full-sm\">\r\n            Payment method:\r\n          </span>\r\n\r\n          <span class=\"m-text10 w-size20 w-full-sm\">\r\n            {{selectedObj.metodo_pago}}\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"flex-w flex-sb-m p-b-12\">\r\n          <span class=\"s-text18 w-size19 w-full-sm\">\r\n            Reference:\r\n          </span>\r\n\r\n          <span class=\"m-text10 w-size20 w-full-sm\">\r\n            {{selectedObj.ref_pago}}\r\n          </span>\r\n        </div>\r\n\r\n        <hr>\r\n\r\n        <div class=\"flex-w flex-sb-m p-b-12\">\r\n          <span class=\"s-text18 w-size19 w-full-sm\">\r\n            User:\r\n          </span>\r\n\r\n          <span class=\"m-text10 w-size20 w-full-sm\">\r\n            {{selectedObj.usuario.nombre}}\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"flex-w flex-sb-m p-b-12\">\r\n          <span class=\"s-text18 w-size19 w-full-sm\">\r\n            Email:\r\n          </span>\r\n\r\n          <span class=\"m-text10 w-size20 w-full-sm\">\r\n            {{selectedObj.usuario.email}}\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"flex-w flex-sb-m p-b-12\">\r\n          <span class=\"s-text18 w-size19 w-full-sm\">\r\n            Phone:\r\n          </span>\r\n\r\n          <span class=\"m-text10 w-size20 w-full-sm\">\r\n            {{selectedObj.usuario.telefono}}\r\n          </span>\r\n        </div>\r\n\r\n        <hr>\r\n\r\n        <div class=\"flex-w flex-sb-m p-b-12\">\r\n          <span class=\"s-text18 w-size19 w-full-sm\">\r\n            Country:\r\n          </span>\r\n\r\n          <span class=\"m-text10 w-size20 w-full-sm\">\r\n            {{selectedObj.country}}\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"flex-w flex-sb-m p-b-12\">\r\n          <span class=\"s-text18 w-size19 w-full-sm\">\r\n            State/City:\r\n          </span>\r\n\r\n          <span class=\"m-text10 w-size20 w-full-sm\">\r\n            {{selectedObj.state}}\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"flex-w flex-sb-m p-b-12\">\r\n          <span class=\"s-text18 w-size19 w-full-sm\">\r\n            Post Code:\r\n          </span>\r\n\r\n          <span class=\"m-text10 w-size20 w-full-sm\">\r\n            {{selectedObj.postcode}}\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"flex-w flex-sb-m p-b-12\">\r\n          <span class=\"s-text18 w-size19 w-full-sm\">\r\n            Address:\r\n          </span>\r\n\r\n          <span class=\"m-text10 w-size20 w-full-sm\">\r\n            {{selectedObj.address}}\r\n          </span>\r\n        </div>\r\n\r\n        \r\n        <br *ngIf=\"selectedObj.estado == 'Pending' || selectedObj.estado == 1\">\r\n        <div *ngIf=\"selectedObj.estado == 'Pending' || selectedObj.estado == 1\" class=\"size15 trans-0-4\">\r\n          <!-- Button -->\r\n          <button (click)=\"checkout()\" class=\"flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n            Pay\r\n          </button>\r\n        </div>\r\n\r\n        <br>\r\n        <div class=\"size15 trans-0-4\">\r\n          <!-- Button -->\r\n          <button (click)=\"atras()\" class=\"flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n            Return\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/luvas/pedidoscli/pedidoscli.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosCliComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ruta_service_ruta_service__ = __webpack_require__("../../../../../src/app/services/ruta-service/ruta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_cart_service_cart_service__ = __webpack_require__("../../../../../src/app/services/cart-service/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__events_login_event_login_event_service__ = __webpack_require__("../../../../../src/app/events/login-event/login-event.service.ts");
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





var PedidosCliComponent = /** @class */ (function () {
    function PedidosCliComponent(http, router, rutaService, fb, cartService, loginEventService) {
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.fb = fb;
        this.cartService = cartService;
        this.loginEventService = loginEventService;
        this.isModalShown = false;
        this.isModalShown2 = false;
        this.loading = false;
        this.mostrar = true;
        this.viendo = false;
        this.alerta = false;
        this.alerta_boton = false;
        this.bancos = [];
        this.clear = false; //puedo borrar?
        this.fileIMG = null;
        this.imgUpload = null;
        this.loadinImg = false;
        this.slides = [
            { img: "http://placehold.it/350x150/000000" },
            { img: "http://placehold.it/350x150/111111" },
            { img: "http://placehold.it/350x150/333333" },
            { img: "http://placehold.it/350x150/666666" }
        ];
        this.slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };
        this.items = this.cartService.getCartContents();
        //console.log(this.items);
        this.myFormLogin = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]]
        });
        this.myFormPago = this.fb.group({
            ref_pago: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            metodo_pago: [0],
            pedido_id: [0]
        });
        this.myFormUpdateProfile = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            password: [''],
            confirm: [''],
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            telefono: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            direccion: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            imagen: ['']
        });
    }
    PedidosCliComponent.prototype.showModal = function () {
        this.isModalShown = true;
    };
    PedidosCliComponent.prototype.hideModal = function () {
        this.autoShownModal.hide();
    };
    PedidosCliComponent.prototype.onHidden = function () {
        this.isModalShown = false;
    };
    PedidosCliComponent.prototype.showModal2 = function () {
        this.isModalShown2 = true;
    };
    PedidosCliComponent.prototype.hideModal2 = function () {
        this.autoShownModal2.hide();
    };
    PedidosCliComponent.prototype.onHidden2 = function () {
        this.isModalShown2 = false;
    };
    PedidosCliComponent.prototype.ngOnInit = function () {
        if (this.router.navigated) {
            window.scrollTo(0, 0);
        }
        /*Verificar si hay un usuario logeado*/
        this.token = localStorage.getItem('luvas_token');
        var user_aux = localStorage.getItem('luvas_user');
        var user_login = JSON.parse(user_aux);
        if (!user_login || user_login == 'null' || !this.token || this.token == 'null') {
            this.showModal();
        }
        else {
            this.user = user_login;
            this.getMisPedidos();
            this.setFormProfile();
        }
    };
    PedidosCliComponent.prototype.addSlide = function () {
        this.slides.push({ img: "http://placehold.it/350x150/777777" });
    };
    PedidosCliComponent.prototype.removeSlide = function () {
        this.slides.length = this.slides.length - 1;
    };
    PedidosCliComponent.prototype.afterChange = function (e) {
        console.log('afterChange');
    };
    //Alerta cuando se vence el token
    PedidosCliComponent.prototype.ok_alerta = function () {
        this.router.navigate(['luvas']);
    };
    PedidosCliComponent.prototype.cerrarAlerta = function () {
        this.alerta = false;
    };
    PedidosCliComponent.prototype.getMisPedidos = function () {
        var _this = this;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'pedidos/usuario/' + this.user.id + '?token=' + localStorage.getItem('luvas_token'))
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
            if (_this.data.pedidos.length == 0) {
                _this.alerta_tipo = 'info';
                _this.alerta_msg = 'You have no registered orders';
                _this.alerta = true;
                setTimeout(function () { _this.alerta = false; }, 4000);
            }
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
                _this.loading = false;
                _this.pedidos = _this.data.pedidos;
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
    PedidosCliComponent.prototype.ver = function (obj) {
        var _this = this;
        /*Verificar si hay un usuario logeado*/
        this.token = localStorage.getItem('luvas_token');
        var user_aux = localStorage.getItem('luvas_user');
        var user_login = JSON.parse(user_aux);
        if (!user_login || user_login == 'null' || !this.token || this.token == 'null') {
            this.showModal();
        }
        else {
            this.user = user_login;
            this.loading = true;
            this.http.get(this.rutaService.getRutaApi() + 'pedidos/' + obj.id + '?token=' + localStorage.getItem('luvas_token'))
                .toPromise()
                .then(function (data) {
                console.log(data);
                _this.data = data;
                _this.selectedObj = _this.data.pedido;
                _this.myFormPago.patchValue({ pedido_id: _this.selectedObj.id });
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
                    _this.data.pedido.metodo_pago = 'Transfer';
                }
                else if (_this.data.pedido.metodo_pago == 2) {
                    _this.data.pedido.metodo_pago = 'PayPal';
                }
                _this.viendo = true;
                _this.loading = false;
                window.scrollTo(0, 0);
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
        }
    };
    PedidosCliComponent.prototype.atras = function () {
        this.viendo = false;
        this.selectedObj = null;
        window.scrollTo(0, 0);
        this.myFormPago.patchValue({ ref_pago: '' });
        this.myFormPago.patchValue({ metodo_pago: 0 });
        this.myFormPago.patchValue({ pedido_id: 0 });
    };
    PedidosCliComponent.prototype.irARegistro = function () {
        this.router.navigate(['luvas/registro']);
    };
    PedidosCliComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        var datos = {
            email: this.myFormLogin.value.email,
            password: this.myFormLogin.value.password
        };
        this.http.post(this.rutaService.getRutaApi() + 'login/app', datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.loading = false;
            _this.alerta_tipo = 'success';
            _this.alerta_msg = 'Login Ok';
            _this.alerta = true;
            setTimeout(function () { _this.alerta = false; }, 4000);
            /*Guardar datos del usuario en memoria*/
            var user = JSON.stringify(_this.data.user);
            localStorage.setItem('luvas_user', user);
            var token = JSON.stringify(_this.data.token);
            localStorage.setItem('luvas_token', token);
            _this.user = _this.data.user;
            _this.setFormProfile();
            _this.getMisPedidos();
            _this.loginEventService.loginEventData.emit(1);
        }, function (msg) {
            msg.error = JSON.parse(msg.error);
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            _this.alerta_tipo = 'danger';
            _this.alerta_msg = msg.error.error;
            _this.alerta = true;
            setTimeout(function () { _this.alerta = false; }, 4000);
        });
    };
    PedidosCliComponent.prototype.setTransferencia = function () {
        this.myFormPago.patchValue({ metodo_pago: 1 });
    };
    PedidosCliComponent.prototype.setPayPal = function () {
        this.myFormPago.patchValue({ metodo_pago: 2 });
    };
    PedidosCliComponent.prototype.pagar = function () {
        var _this = this;
        this.loading = true;
        var datos = {
            token: localStorage.getItem('luvas_token'),
            estado: 2,
            metodo_pago: this.myFormPago.value.metodo_pago,
            ref_pago: this.myFormPago.value.ref_pago
        };
        this.http.put(this.rutaService.getRutaApi() + 'pedidos/' + this.myFormPago.value.pedido_id, datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.loading = false;
            _this.alerta_tipo = 'success';
            _this.alerta_msg = _this.data.message;
            _this.alerta = true;
            setTimeout(function () { _this.alerta = false; }, 4000);
            _this.selectedObj.estado = 'Payment';
            _this.selectedObj.ref_pago = _this.myFormPago.value.ref_pago;
            if (_this.myFormPago.value.metodo_pago == 1) {
                _this.selectedObj.metodo_pago = 'Transfer';
            }
            else if (_this.myFormPago.value.metodo_pago == 2) {
                _this.selectedObj.metodo_pago = 'PayPal';
            }
            for (var i = 0; i < _this.pedidos.length; i++) {
                if (_this.pedidos[i].id == _this.selectedObj.id) {
                    _this.pedidos[i].estado = 'Payment';
                    if (_this.myFormPago.value.metodo_pago == 1) {
                        _this.pedidos[i].metodo_pago = 'Transfer';
                    }
                    else if (_this.myFormPago.value.metodo_pago == 2) {
                        _this.pedidos[i].metodo_pago = 'PayPal';
                    }
                }
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
    PedidosCliComponent.prototype.checkout = function () {
        //Mostrar modal de metodo de pago
        this.showModal2();
    };
    PedidosCliComponent.prototype.getBancos = function () {
        var _this = this;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'bancos?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.bancos = _this.data.bancos;
            _this.loading = false;
            _this.myModal2.show();
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
    PedidosCliComponent.prototype.setFormProfile = function () {
        this.myFormUpdateProfile.patchValue({ email: this.user.email });
        //this.myFormUpdateProfile.patchValue({password : ''});
        //this.myFormUpdateProfile.patchValue({confirm : ''});
        this.myFormUpdateProfile.patchValue({ nombre: this.user.nombre });
        this.myFormUpdateProfile.patchValue({ telefono: this.user.telefono });
        this.myFormUpdateProfile.patchValue({ direccion: this.user.direccion });
        //this.myFormUpdateProfile.patchValue({activo : ''});
        //this.myFormUpdateProfile.patchValue({tipo_usuario : 2});
        //this.myFormUpdateProfile.patchValue({tipo_registro : 1});
        this.myFormUpdateProfile.patchValue({ imagen: this.user.imagen });
    };
    PedidosCliComponent.prototype.validarUpdate = function () {
        var _this = this;
        /*Verificar si hay un usuario logeado*/
        this.token = localStorage.getItem('luvas_token');
        var user_aux = localStorage.getItem('luvas_user');
        var user_login = JSON.parse(user_aux);
        if (!user_login || user_login == 'null' || !this.token || this.token == 'null') {
            this.showModal();
        }
        else {
            this.user = user_login;
            console.log(this.myFormUpdateProfile.value);
            if (this.myFormUpdateProfile.value.password != '' ||
                this.myFormUpdateProfile.value.confirm != '') {
                if (this.myFormUpdateProfile.value.password != this.myFormUpdateProfile.value.confirm) {
                    this.alerta_tipo = 'danger';
                    this.alerta_msg = 'Passwords do not match.';
                    this.alerta = true;
                    setTimeout(function () { _this.alerta = false; }, 4000);
                }
                else {
                    this.updateProfile();
                }
            }
            else {
                this.updateProfile();
            }
        }
    };
    PedidosCliComponent.prototype.updateProfile = function () {
        var _this = this;
        this.loading = true;
        var imgAux;
        if (this.imgUpload) {
            imgAux = this.imgUpload;
        }
        else {
            imgAux = this.myFormUpdateProfile.value.imagen;
        }
        var datos = {
            token: localStorage.getItem('luvas_token'),
            email: this.myFormUpdateProfile.value.email,
            password: this.myFormUpdateProfile.value.password,
            nombre: this.myFormUpdateProfile.value.nombre,
            telefono: this.myFormUpdateProfile.value.telefono,
            direccion: this.myFormUpdateProfile.value.direccion,
            //activo: this.myFormUpdateProfile.value.activo,
            //tipo_usuario: this.myFormUpdateProfile.value.tipo_usuario,
            //tipo_registro: this.myFormUpdateProfile.value.tipo_registro,
            imagen: imgAux
        };
        this.http.put(this.rutaService.getRutaApi() + 'usuarios/' + this.user.id, datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.loading = false;
            _this.alerta_tipo = 'success';
            _this.alerta_msg = _this.data.message;
            _this.alerta = true;
            setTimeout(function () { _this.alerta = false; }, 4000);
            /*Guardar datos del usuario en memoria*/
            var user = JSON.stringify(_this.data.usuario);
            localStorage.setItem('luvas_user', user);
            //var token = JSON.stringify(this.data.token);
            //localStorage.setItem('luvas_user', token);
            _this.loginEventService.loginEventData.emit(1);
            _this.user = _this.data.usuario;
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
    //Carga de img---<
    PedidosCliComponent.prototype.subirImagen = function () {
        var _this = this;
        this.loading = true;
        var formModel = this.prepareSave();
        this.http.post(this.rutaService.getRutaApi() + 'imagenes?token=' + localStorage.getItem('mouvers_token'), formModel)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.imgUpload = _this.data.imagen;
            _this.myFormUpdateProfile.patchValue({ imagen: _this.imgUpload });
            //Solo admitimos imágenes.
            if (!_this.fileIMG.type.match('image.*')) {
                return;
            }
            var reader = new FileReader();
            reader.onload = (function (theFile) {
                return function (e) {
                    // Creamos la imagen.
                    document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="100px"/>'].join('');
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
    PedidosCliComponent.prototype.prepareSave = function () {
        var input = new FormData();
        input.append('imagen', this.fileIMG);
        input.append('carpeta', 'usuarios');
        input.append('url_imagen', this.rutaService.getRutaImages());
        return input;
    };
    PedidosCliComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            this.fileIMG = event.target.files[0];
            this.subirImagen();
        }
    };
    PedidosCliComponent.prototype.clearFile = function () {
        this.imgUpload = null;
        this.fileInput.nativeElement.value = '';
        this.clear = false;
        this.myFormUpdateProfile.patchValue({ imagen: null });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('autoShownModal'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
    ], PedidosCliComponent.prototype, "autoShownModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('autoShownModal2'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _b || Object)
    ], PedidosCliComponent.prototype, "autoShownModal2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myModal2'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _c || Object)
    ], PedidosCliComponent.prototype, "myModal2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myModal3'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _d || Object)
    ], PedidosCliComponent.prototype, "myModal3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object)
    ], PedidosCliComponent.prototype, "fileInput", void 0);
    PedidosCliComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/luvas/pedidoscli/pedidoscli.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/luvas/pedidoscli/pedidoscli.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__services_ruta_service_ruta_service__["a" /* RutaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_ruta_service_ruta_service__["a" /* RutaService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_7__services_cart_service_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_cart_service_cart_service__["a" /* CartService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_8__events_login_event_login_event_service__["a" /* LoginEventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__events_login_event_login_event_service__["a" /* LoginEventService */]) === "function" && _l || Object])
    ], PedidosCliComponent);
    return PedidosCliComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=pedidoscli.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/luvas/productos/productos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alertaC {\r\n  position: fixed !important;\r\n  z-index: 1000 !important;\r\n  /* top: 70px !important; */\r\n  right: 10px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/luvas/productos/productos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alertaC\" *ngIf=\"alerta\">\r\n  <alert  [type]=\"alerta_tipo\" dismissible=\"true\" close=\"cerrarAlerta()\">\r\n    <strong>{{alerta_msg}}</strong> \r\n  </alert>\r\n</div>\r\n\r\n<div class=\"alertaC\" *ngIf=\"alerta_boton\">\r\n  <alert [type]=\"alerta_tipo\" >\r\n    <strong>{{alerta_msg}}</strong>\r\n    <button type=\"button\" class=\"btn btn4 btn-secondary\" (click)=\"ok_alerta()\">ok</button> \r\n  </alert>\r\n</div>\r\n\r\n<div *ngIf=\"isModalShown\" [config]=\"{ show: true, ignoreBackdropClick: true, keyboard: false }\" (onHidden)=\"onHidden()\" bsModal #autoShownModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Producto agregado</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        \r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h4 class=\"product-detail-name m-text16 p-b-13\">\r\n              {{producto.nombre}}\r\n            </h4>\r\n\r\n            <span class=\"m-text17\">\r\n              ${{precio_unidad}}\r\n            </span>\r\n\r\n            <p class=\"s-text8 p-t-10\">\r\n              {{producto.descripcion}}\r\n            </p>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <br>\r\n            <button (click)=\"hideModal(); irAlCart()\" class=\"flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n              Ir al carrito\r\n            </button>\r\n            <br>\r\n            <button (click)=\"hideModal(); atras()\" class=\"flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n              Seguir comprando\r\n            </button>\r\n          </div>\r\n          <br>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <div class=\"modal-footer\">\r\n        \r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- Listado de productos -->\r\n<div *ngIf=\"mostrar && !detalle\">\r\n\r\n\r\n  <!-- Title Page -->\r\n  <section class=\"bg-title-page p-t-50 p-b-40 flex-col-c-m\" style=\"background-image: url(http://beau-moda.com/images/banner.png);\">\r\n    <h2 class=\"l-text2 t-center\">\r\n      {{catSelect.nombre}}\r\n    </h2>\r\n    <p class=\"m-text13 t-center\">\r\n      {{catSelect.descripcion}}\r\n    </p>\r\n  </section>\r\n\r\n\r\n  <!-- Content page -->\r\n  <section class=\"bgwhite p-t-55 p-b-65\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6 col-md-4 col-lg-3 p-b-50\">\r\n          <div class=\"leftbar p-r-20 p-r-0-sm\">\r\n            <!--  -->\r\n            <h4 class=\"m-text14 p-b-7\">\r\n              Categories\r\n            </h4>\r\n\r\n            <ul class=\"p-b-54\">\r\n              <li class=\"p-t-4\">\r\n                <a routerLinkActive=\"active\" [routerLink]=\"\" (click)=\"mostrarCat(1)\" class=\"s-text13 active1\">\r\n                  All\r\n                </a>\r\n              </li>\r\n\r\n              <li *ngFor=\"let item of categorias\" class=\"p-t-4\">\r\n                <a routerLinkActive=\"active\" [routerLink]=\"\" (click)=\"mostrarCat(item)\" class=\"s-text13\">\r\n                  {{item.nombre}}\r\n                </a>\r\n              </li>\r\n\r\n            </ul>\r\n\r\n            <!--  -->\r\n            <!-- <h4 class=\"m-text14 p-b-32\">\r\n              Filters\r\n            </h4>\r\n            \r\n            <div class=\"filter-price p-t-22 p-b-50 bo3\">\r\n              <div class=\"m-text15 p-b-17\">\r\n                Price\r\n              </div>\r\n            \r\n              <div class=\"wra-filter-bar\">\r\n                <div id=\"filter-bar\"></div>\r\n              </div>\r\n            \r\n              <div class=\"flex-sb-m flex-w p-t-16\">\r\n                <div class=\"w-size11\">\r\n                  Button\r\n                  <button class=\"flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4\">\r\n                    Filter\r\n                  </button>\r\n                </div>\r\n            \r\n                <div class=\"s-text3 p-t-10 p-b-10\">\r\n                  Range: $<span id=\"value-lower\">610</span> - $<span id=\"value-upper\">980</span>\r\n                </div>\r\n              </div>\r\n            </div> -->\r\n\r\n            <div class=\"search-product pos-relative bo4 of-hidden\">\r\n              <input class=\"s-text7 size6 p-l-23 p-r-50\" type=\"text\" name=\"search-product\" placeholder=\"Search Products...\" id=\"inputName\" [(ngModel)]=\"searchTerm\" (ngModelChange)=\"FilterByName()\">\r\n\r\n              <button class=\"flex-c-m size5 ab-r-m color2 color0-hov trans-0-4\">\r\n                <i class=\"fs-12 fa fa-search\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-6 col-md-8 col-lg-9 p-b-50\">\r\n          <!--  -->\r\n          <div class=\"flex-sb-m flex-w p-b-35\">\r\n            <div class=\"flex-w\">\r\n              <div class=\"rs2-select2 bo4 of-hidden w-size10 m-t-5 m-b-5 m-r-10\">\r\n                <select class=\"selection-2\" name=\"sorting\" (change)=\"orderPor($event.target.value)\">\r\n                  <option [value]=\"1\">Default Sorting</option>\r\n                  <option [value]=\"2\">Popularity</option>\r\n                  <option [value]=\"3\">Price: low to high</option>\r\n                  <option [value]=\"4\">Price: high to low</option>\r\n                </select>\r\n              </div>\r\n\r\n              <div class=\"rs2-select2 bo4 of-hidden w-size10 m-t-5 m-b-5 m-r-10\">\r\n                <select class=\"selection-2\" name=\"sorting\" (change)=\"filterPrice($event.target.value)\">\r\n                  <option [value]=\"1\">Price</option>\r\n                  <option [value]=\"2\">$0.00 - $50.00</option>\r\n                  <option [value]=\"3\">$50.00 - $100.00</option>\r\n                  <option [value]=\"4\">$100.00 - $150.00</option>\r\n                  <option [value]=\"5\">$150.00 - $200.00</option>\r\n                  <option [value]=\"6\">$200.00+</option>\r\n\r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n            <span class=\"s-text8 p-t-5 p-b-5\">\r\n              Showing 1–12 of 16 results\r\n            </span>\r\n          </div>\r\n\r\n          <!-- Product -->\r\n          <div class=\"row\">\r\n\r\n            <div *ngFor = \"let producto of items\" class=\"col-sm-12 col-md-6 col-lg-4 p-b-50\">\r\n              <!-- Block2 -->\r\n              <div class=\"block2\">\r\n                <div class=\"block2-img wrap-pic-w of-hidden pos-relative block2-labelnew\">\r\n                  <img src=\"{{producto.color.imagen[0].src}}\" alt=\"IMG-PRODUCT\">\r\n\r\n                  <div class=\"block2-overlay trans-0-4\">\r\n                    <!-- <a href=\"#\" class=\"block2-btn-addwishlist hov-pointer trans-0-4\">\r\n                      <i class=\"icon-wishlist icon_heart_alt\" aria-hidden=\"true\"></i>\r\n                      <i class=\"icon-wishlist icon_heart dis-none\" aria-hidden=\"true\"></i>\r\n                    </a> -->\r\n\r\n                    <div class=\"block2-btn-addcart w-size1 trans-0-4\">\r\n                      <!-- Button -->\r\n                      <button (click)=\"getProducto(producto)\" class=\"flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n                        Add to Cart\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"block2-txt p-t-20\">\r\n                  <a [routerLink]=\"\" (click)=\"getProducto(producto)\" class=\"block2-name dis-block s-text3 p-b-5\">\r\n                    {{producto.nombre}}\r\n                  </a>\r\n\r\n                  <span class=\"block2-price m-text6 p-r-5\">\r\n                    ${{producto.color.atributos[0].precio}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            \r\n          </div>\r\n\r\n          <!-- Pagination -->\r\n          <div class=\"pagination flex-m flex-w p-t-26\">\r\n            <!-- <a href=\"#\" class=\"item-pagination flex-c-m trans-0-4 active-pagination\">1</a>\r\n            <a href=\"#\" class=\"item-pagination flex-c-m trans-0-4\">2</a> -->\r\n\r\n            <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\r\n              <div class=\"btn-group\">\r\n                 <label style=\"margin-top:14px\">Pag {{currentIndex}}/{{pageNumber}} </label>\r\n              </div>\r\n              <div style=\"margin-left:16px\" class=\"btn-group pull-right\">\r\n                 <ul class=\"pagination\" >\r\n                    <li [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a class=\"item-pagination flex-c-m trans-0-4\"  (click)=\"prevPage()\" > - </a></li>\r\n                       <li *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\r\n                          <a class=\"item-pagination flex-c-m trans-0-4\" (click)=\"setPage(page)\"  >{{page}} </a>\r\n                       </li>\r\n                    <li [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a class=\"item-pagination flex-c-m trans-0-4\"   (click)=\"nextPage()\" > + </a></li>\r\n                 </ul>\r\n              </div>\r\n            </div>\r\n            \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>\r\n\r\n<!-- Detalle de producto -->\r\n<div *ngIf=\"detalle\">\r\n  \r\n  <!-- breadcrumb -->\r\n  <div class=\"bread-crumb bgwhite flex-w p-l-52 p-r-15 p-t-30 p-l-15-sm\">\r\n    <a [routerLink]=\"\" (click)=\"breadcrumb(1)\"  class=\"s-text16\">\r\n      Shop\r\n      <i class=\"fa fa-angle-right m-l-8 m-r-9\" aria-hidden=\"true\"></i>\r\n    </a>\r\n\r\n    <a [routerLink]=\"\" (click)=\"breadcrumb(producto.categoria)\"  class=\"s-text16\">\r\n      {{producto.categoria.nombre}}\r\n      <i class=\"fa fa-angle-right m-l-8 m-r-9\" aria-hidden=\"true\"></i>\r\n    </a>\r\n\r\n    <span class=\"s-text17\">\r\n      {{producto.nombre}}\r\n    </span>\r\n  </div>\r\n\r\n  <!-- Product Detail -->\r\n  <div class=\"container bgwhite p-t-35 p-b-80\">\r\n    <div class=\"flex-w flex-sb\">\r\n      <div class=\"w-size13 p-t-30 respon5\">\r\n        <div class=\"wrap-slick3 flex-sb flex-w\">\r\n          <div class=\"wrap-slick3-dots\"></div>\r\n\r\n          <!-- <div class=\"slick3\">\r\n            <div *ngFor = \"let imagen of color_select.imagen\" class=\"item-slick3\" data-thumb=\"imagen.src\">\r\n              <div class=\"wrap-pic-w\">\r\n                <img src=\"{{imagen.src}}\" alt=\"IMG-PRODUCT\">\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n              \r\n          <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\r\n              \r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"w-size14 p-t-30 respon5\">\r\n        <h4 class=\"product-detail-name m-text16 p-b-13\">\r\n          {{producto.nombre}}\r\n        </h4>\r\n\r\n        <span class=\"m-text17\">\r\n          ${{precio_unidad}}\r\n        </span>\r\n\r\n        <p class=\"s-text8 p-t-10\">\r\n          {{producto.descripcion}}\r\n        </p>\r\n\r\n        <!--  -->\r\n        <div class=\"p-t-33 p-b-60\">\r\n          <div class=\"flex-m flex-w p-b-10\">\r\n            <div class=\"s-text15 w-size15 t-center\">\r\n              Size\r\n            </div>\r\n\r\n            <div class=\"rs2-select2 rs3-select2 bo4 of-hidden w-size16\">\r\n              <!-- <select class=\"selection-2\" name=\"size\">\r\n                <option>Choose an option</option>\r\n                <option>Size S</option>\r\n                <option>Size M</option>\r\n                <option>Size L</option>\r\n                <option>Size XL</option>\r\n              </select> -->\r\n              <select id=\"size\" name=\"size\" class=\"selection-2\" class=\"form-control\" (change)=\"setTalla($event.target.value)\">\r\n                <option *ngFor=\"let atributo of color_select.atributos\" [value]=\"atributo.id\">{{atributo.atributo}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"flex-m flex-w\">\r\n            <div class=\"s-text15 w-size15 t-center\">\r\n              Color\r\n            </div>\r\n\r\n            <div class=\"rs2-select2 rs3-select2 bo4 of-hidden w-size16\">\r\n              <!-- <select class=\"selection-2\" name=\"color\">\r\n                <option>Choose an option</option>\r\n                <option>Gray</option>\r\n                <option>Red</option>\r\n                <option>Black</option>\r\n                <option>Blue</option>\r\n              </select> -->\r\n              <select id=\"color\" name=\"color\" class=\"selection-2\" class=\"form-control\" (change)=\"setColor($event.target.value)\">\r\n                <option *ngFor=\"let color of producto.colores\" [value]=\"color.id\">{{color.nombre_color}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"flex-r-m flex-w p-t-10\">\r\n            <div class=\"w-size16 flex-m flex-w\">\r\n              <div class=\"flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10\">\r\n                <button [disabled]=\"cantidad_select == 1 || cantidad_select == 0\" (click)=\"restarCantidad()\" class=\"btn-num-product-down color1 flex-c-m size7 bg8 eff2\">\r\n                  <i class=\"fs-12 fa fa-minus\" aria-hidden=\"true\"></i>\r\n                </button>\r\n\r\n                <input class=\"size8 m-text18 t-center num-product\" type=\"number\" name=\"num-product\" [(ngModel)]=\"cantidad_select\" (change)=\"setCantidad()\">\r\n\r\n                <button [disabled]=\"cantidad_select == cantidad_max\" (click)=\"sumarCantidad()\" class=\"btn-num-product-up color1 flex-c-m size7 bg8 eff2\">\r\n                  <i class=\"fs-12 fa fa-plus\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n\r\n              <div class=\"btn-addcart-product-detail size9 trans-0-4 m-t-10 m-b-10\">\r\n                <!-- Button -->\r\n                <button [disabled]=\"cantidad_select == 0\" (click)=\"buyItem()\" class=\"flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n                  Add to Cart\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"p-b-45\">\r\n          <!-- <span class=\"s-text8 m-r-35\">SKU: MUG-01</span> -->\r\n          <span class=\"s-text8\">Category: {{producto.categoria.nombre}}</span>\r\n        </div>\r\n\r\n        <!--  -->\r\n        <!-- <div class=\"wrap-dropdown-content bo6 p-t-15 p-b-14 active-dropdown-content\">\r\n          <h5 class=\"js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4\">\r\n            Description\r\n            <i class=\"down-mark fs-12 color1 fa fa-minus dis-none\" aria-hidden=\"true\"></i>\r\n            <i class=\"up-mark fs-12 color1 fa fa-plus\" aria-hidden=\"true\"></i>\r\n          </h5>\r\n        \r\n          <div class=\"dropdown-content dis-none p-t-15 p-b-23\">\r\n            <p class=\"s-text8\">\r\n              Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat\r\n            </p>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"wrap-dropdown-content bo7 p-t-15 p-b-14\">\r\n          <h5 class=\"js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4\">\r\n            Additional information\r\n            <i class=\"down-mark fs-12 color1 fa fa-minus dis-none\" aria-hidden=\"true\"></i>\r\n            <i class=\"up-mark fs-12 color1 fa fa-plus\" aria-hidden=\"true\"></i>\r\n          </h5>\r\n        \r\n          <div class=\"dropdown-content dis-none p-t-15 p-b-23\">\r\n            <p class=\"s-text8\">\r\n              Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat\r\n            </p>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"wrap-dropdown-content bo7 p-t-15 p-b-14\">\r\n          <h5 class=\"js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4\">\r\n            Reviews (0)\r\n            <i class=\"down-mark fs-12 color1 fa fa-minus dis-none\" aria-hidden=\"true\"></i>\r\n            <i class=\"up-mark fs-12 color1 fa fa-plus\" aria-hidden=\"true\"></i>\r\n          </h5>\r\n        \r\n          <div class=\"dropdown-content dis-none p-t-15 p-b-23\">\r\n            <p class=\"s-text8\">\r\n              Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat\r\n            </p>\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- Related Products -->\r\n  <section *ngIf=\"masVistos && masVistos.length > 0\"  class=\"bgwhite p-t-45 p-b-58\">\r\n    <div class=\"container\">\r\n      <div class=\"sec-title p-b-22\">\r\n        <h3 class=\"m-text5 t-center\">\r\n          Related Products\r\n        </h3>\r\n      </div>\r\n\r\n      <!-- Tab01 -->\r\n      <div class=\"tab01\">\r\n        <!-- Nav tabs -->\r\n        <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#best-seller\" role=\"tab\">Products Most seen</a>\r\n          </li>\r\n          \r\n          \r\n        </ul>\r\n\r\n        <!-- Tab panes -->\r\n        <div class=\"tab-content p-t-35\">\r\n          <!-- - -->\r\n          <div class=\"tab-pane fade show active\" id=\"best-seller\" role=\"tabpanel\">\r\n            <div class=\"row\">\r\n              <div *ngFor = \"let productoX of masVistos\" class=\"col-sm-6 col-md-4 col-lg-3 p-b-50\">\r\n                <!-- Block2 -->\r\n                <div class=\"block2\">\r\n                  <div class=\"block2-img wrap-pic-w of-hidden pos-relative \">\r\n                    <img src=\"{{productoX.color.imagen[0].src}}\" alt=\"IMG-PRODUCT\">\r\n\r\n                    <div class=\"block2-overlay trans-0-4\">\r\n                      <!-- <a href=\"#\" class=\"block2-btn-addwishlist hov-pointer trans-0-4\">\r\n                        <i class=\"icon-wishlist icon_heart_alt\" aria-hidden=\"true\"></i>\r\n                        <i class=\"icon-wishlist icon_heart dis-none\" aria-hidden=\"true\"></i>\r\n                      </a> -->\r\n\r\n                      <div class=\"block2-btn-addcart w-size1 trans-0-4\">\r\n                        <!-- Button -->\r\n                        <button (click)=\"getProducto(productoX)\" class=\"flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4\">\r\n                          Add to Cart\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"block2-txt p-t-20\">\r\n                    <a [routerLink]=\"\" (click)=\"getProducto(productoX)\" class=\"block2-name dis-block s-text3 p-b-5\">\r\n                      {{productoX.nombre}}\r\n                    </a>\r\n\r\n                    <span class=\"block2-price m-text6 p-r-5\">\r\n                      ${{productoX.color.atributos[0].precio}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              \r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n\r\n</div>\r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/luvas/productos/productos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosComponent; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_cart_service_cart_service__ = __webpack_require__("../../../../../src/app/services/cart-service/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__events_cart_event_cart_event_service__ = __webpack_require__("../../../../../src/app/events/cart-event/cart-event.service.ts");
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



var ProductosComponent = /** @class */ (function () {
    function ProductosComponent(http, router, rutaService, fb, cartService, cartEventService) {
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.fb = fb;
        this.cartService = cartService;
        this.cartEventService = cartEventService;
        this.isModalShown = false;
        this.loading = false;
        this.editando = false;
        this.agregando = false;
        this.mostrar = true;
        this.detalle = false;
        this.alerta = false;
        this.alerta_boton = false;
        this.catSelect = { estado: "ON",
            id: 0,
            imagen: "http://www.eltiempo.com/files/article_main/uploads/2017/12/30/5a472db243f62.jpeg",
            nombre: "All Categories",
            descripcion: "All Categories"
        };
        this.slides = [
            { img: "http://placehold.it/350x150/000000" },
            { img: "http://placehold.it/350x150/111111" },
            { img: "http://placehold.it/350x150/333333" },
            { img: "http://placehold.it/350x150/666666" }
        ];
        this.slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };
        this.pages = 4;
        this.pageSize = 9;
        this.pageNumber = 0;
        this.currentIndex = 1;
        this.pageStart = 1;
        this.inputName = '';
    }
    ProductosComponent.prototype.showModal = function () {
        this.isModalShown = true;
    };
    ProductosComponent.prototype.hideModal = function () {
        this.autoShownModal.hide();
    };
    ProductosComponent.prototype.onHidden = function () {
        this.isModalShown = false;
    };
    ProductosComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.navigated) {
            window.scrollTo(0, 0);
        }
        //this.getCategorias();
        this.itemsInCart = this.cartService.getCartCount();
        console.log('itemsInCart shop: ' + this.itemsInCart);
        this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: __WEBPACK_IMPORTED_MODULE_7_ngx_gallery__["NgxGalleryAnimation"].Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
        this.galleryImages = [];
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'productos/filter/disponibles?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.productos = _this.data.productos;
            _this.productosFiltrados = _this.data.productos;
            _this.itemsCopy = _this.productosFiltrados;
            _this.filteredItems = _this.productosFiltrados;
            _this.init();
            /*Filtrar categoria*/
            var catFilter = localStorage.getItem('luvas_catFilter');
            var catAux = JSON.parse(catFilter);
            if (catAux) {
                _this.mostrarCat(catAux);
            }
            /*Filtrar producto*/
            var prodFilter = localStorage.getItem('luvas_prodFilter');
            var prodAux = JSON.parse(prodFilter);
            if (prodAux) {
                _this.getProducto(prodAux);
            }
            _this.getCategorias();
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
                _this.alerta_tipo = 'info';
                _this.alerta_msg = msg.error.error;
                _this.alerta = true;
                setTimeout(function () { _this.alerta = false; }, 4000);
            }
        });
    };
    ProductosComponent.prototype.ngOnDestroy = function () {
        // acciones de destrucción
        localStorage.setItem('luvas_catFilter', null);
        localStorage.setItem('luvas_prodFilter', null);
    };
    ProductosComponent.prototype.addSlide = function () {
        this.slides.push({ img: "http://placehold.it/350x150/777777" });
    };
    ProductosComponent.prototype.removeSlide = function () {
        this.slides.length = this.slides.length - 1;
    };
    ProductosComponent.prototype.afterChange = function (e) {
        console.log('afterChange');
    };
    //Alerta cuando se vence el token
    ProductosComponent.prototype.ok_alerta = function () {
        this.router.navigate(['luvas']);
    };
    ProductosComponent.prototype.cerrarAlerta = function () {
        this.alerta = false;
    };
    ProductosComponent.prototype.getProducto = function (producto) {
        var _this = this;
        this.loading = true;
        this.galleryImages = [];
        this.http.get(this.rutaService.getRutaApi() + 'productos/' + producto.id + '/detalle/cliente?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.producto = _this.data.producto;
            _this.color_select = _this.producto.colores[0];
            _this.talla_select = _this.color_select.atributos[0];
            _this.precio_unidad = _this.color_select.atributos[0].precio;
            if (_this.color_select.atributos[0].cantidad > 0) {
                _this.cantidad_select = 1;
                _this.cantidad_max = _this.color_select.atributos[0].cantidad;
            }
            else {
                _this.cantidad_select = 0;
                _this.cantidad_max = _this.color_select.atributos[0].cantidad;
            }
            for (var i = 0; i < _this.color_select.imagen.length; ++i) {
                _this.galleryImages.push({
                    small: _this.color_select.imagen[i].src,
                    medium: _this.color_select.imagen[i].src,
                    big: _this.color_select.imagen[i].src
                });
            }
            _this.loading = false;
            _this.mostrar = false;
            _this.detalle = true;
            window.scrollTo(0, 0);
            _this.prodVisto(producto.id);
            _this.getProductsRelacionados(producto.categoria_id, producto.id);
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
    /*Aumenta el contador de vistas del producto*/
    ProductosComponent.prototype.prodVisto = function (producto_id) {
        var datos = {
            token: localStorage.getItem('luvas_token')
        };
        this.http.put(this.rutaService.getRutaApi() + 'productos/visitar/' + producto_id, datos)
            .toPromise()
            .then(function (data) {
        }, function (msg) {
        });
    };
    ProductosComponent.prototype.restarCantidad = function () {
        this.cantidad_select = this.cantidad_select - 1;
    };
    ProductosComponent.prototype.sumarCantidad = function () {
        this.cantidad_select = this.cantidad_select + 1;
    };
    ProductosComponent.prototype.setCantidad = function () {
        if (this.cantidad_select < 1) {
            if (this.cantidad_max > 0) {
                this.cantidad_select = 1;
            }
            else {
                this.cantidad_select = 0;
            }
        }
        if (this.cantidad_select > this.cantidad_max) {
            this.cantidad_select = this.cantidad_max;
        }
    };
    ProductosComponent.prototype.setColor = function (color_id) {
        //console.log(color_id);
        this.talla_select = null;
        for (var i = 0; i < this.producto.colores.length; i++) {
            if (this.producto.colores[i].id == color_id) {
                this.galleryImages = [];
                this.color_select = this.producto.colores[i];
                if (this.color_select.atributos[0].cantidad > 0) {
                    this.cantidad_select = 1;
                    this.cantidad_max = this.color_select.atributos[0].cantidad;
                }
                else {
                    this.cantidad_select = 0;
                    this.cantidad_max = this.color_select.atributos[0].cantidad;
                }
                this.talla_select = this.color_select.atributos[0];
                this.precio_unidad = this.color_select.atributos[0].precio;
                for (var i = 0; i < this.color_select.imagen.length; ++i) {
                    this.galleryImages.push({
                        small: this.color_select.imagen[i].src,
                        medium: this.color_select.imagen[i].src,
                        big: this.color_select.imagen[i].src
                    });
                }
            }
        }
    };
    ProductosComponent.prototype.setTalla = function (talla_id) {
        //console.log(talla_id);
        this.talla_select = null;
        for (var i = 0; i < this.color_select.atributos.length; i++) {
            if (this.color_select.atributos[i].id == talla_id) {
                this.precio_unidad = this.color_select.atributos[i].precio;
                if (this.color_select.atributos[i].cantidad > 0) {
                    this.cantidad_select = 1;
                    this.cantidad_max = this.color_select.atributos[i].cantidad;
                }
                else {
                    this.cantidad_select = 0;
                    this.cantidad_max = this.color_select.atributos[i].cantidad;
                }
                this.talla_select = this.color_select.atributos[i];
            }
        }
    };
    ProductosComponent.prototype.atras = function () {
        this.mostrar = true;
        this.detalle = false;
        this.producto = null;
        this.galleryImages = [];
        this.color_select = null;
        this.talla_select = null;
        this.precio_unidad = null;
        this.cantidad_select = null;
        this.cantidad_max = null;
        window.scrollTo(0, 0);
    };
    ProductosComponent.prototype.buyItem = function () {
        var _this = this;
        /*Valida la cantidad
        introducida manualmente*/
        if (this.cantidad_select < 1) {
            if (this.cantidad_max > 0) {
                this.cantidad_select = 1;
            }
            else {
                this.cantidad_select = 0;
            }
        }
        if (this.cantidad_select > this.cantidad_max) {
            this.cantidad_select = this.cantidad_max;
        }
        setTimeout(function () {
            //console.log(this.producto);
            //let item_aux = Object.assign({},JSON.stringify(obj));
            var item = JSON.parse(JSON.stringify(_this.producto));
            var color = JSON.parse(JSON.stringify(_this.color_select));
            var talla = JSON.parse(JSON.stringify(_this.talla_select));
            //console.log(color);
            //console.log(talla);
            item.colores = [color];
            item.colores[0].atributos = [talla];
            console.log(item);
            _this.cartService.addProduct(item, _this.cantidad_select).subscribe(function (success) {
                if (success) {
                    _this.itemsInCart = _this.cartService.getCartCount();
                    //alert('¡Producto agregado!');
                    _this.alerta_tipo = 'success';
                    _this.alerta_msg = '¡Producto agregado!';
                    _this.alerta = true;
                    setTimeout(function () { _this.alerta = false; }, 4000);
                    //this.presentCheckout();
                    _this.showModal();
                    _this.cartEventService.cartEventData.emit(_this.itemsInCart);
                }
                else {
                    //alert('Ha ocurrido un error intenta de nuevo');
                    _this.alerta_tipo = 'warning';
                    _this.alerta_msg = 'Ha ocurrido un error intenta de nuevo';
                    _this.alerta = true;
                    setTimeout(function () { _this.alerta = false; }, 4000);
                }
            }, function (error) {
                //alert(error);
                _this.alerta_tipo = 'danger';
                _this.alerta_msg = error;
                _this.alerta = true;
                setTimeout(function () { _this.alerta = false; }, 4000);
            });
        }, 60);
    };
    ProductosComponent.prototype.irAlCart = function () {
        this.router.navigateByUrl('/luvas/carrito');
    };
    /*Trae las categorias en estado ON*/
    ProductosComponent.prototype.getCategorias = function () {
        var _this = this;
        this.http.get(this.rutaService.getRutaApi() + 'categorias/habilitadas?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data2 = data;
            _this.categorias = _this.data2.categorias;
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
                _this.mostrar = false;
            }
            else {
                //alert(msg.error.error);
                _this.alerta_tipo = 'info';
                _this.alerta_msg = msg.error.error;
                _this.alerta = true;
                setTimeout(function () { _this.alerta = false; }, 4000);
            }
        });
    };
    /*Filtrar por categoria*/
    ProductosComponent.prototype.mostrarCat = function (cat) {
        if (cat == 1) {
            this.catSelect =
                { estado: "ON",
                    id: 0,
                    imagen: "http://www.eltiempo.com/files/article_main/uploads/2017/12/30/5a472db243f62.jpeg",
                    nombre: "All Categories",
                    descripcion: "All Categories",
                };
            this.productosFiltrados = this.productos;
            this.itemsCopy = this.productosFiltrados;
            this.filteredItems = this.productosFiltrados;
            this.init();
        }
        else {
            this.catSelect = cat;
            this.productosFiltrados = [];
            this.itemsCopy = this.productosFiltrados;
            for (var i = 0; i < this.productos.length; i++) {
                if (this.productos[i].categoria_id == cat.id) {
                    this.productosFiltrados.push(this.productos[i]);
                }
            }
            this.filteredItems = this.productosFiltrados;
            this.init();
        }
    };
    /*Miga de pan del detalle de producto*/
    ProductosComponent.prototype.breadcrumb = function (cat) {
        this.mostrarCat(cat);
        this.atras();
    };
    /*Trae los productos mas vistos y mas populares*/
    ProductosComponent.prototype.getProductsRelacionados = function (categoria_id, producto_id) {
        //console.log(categoria_id);
        //console.log(producto_id);
        var _this = this;
        //this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'productos/filter/categoria/relacionados?categoria_id=' + categoria_id + '&producto_id=' + producto_id + '&token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.masVistos = _this.data.masVistos;
            //this.loading = false;    
        }, function (msg) {
            msg.error = JSON.parse(msg.error);
            console.log(msg);
            console.log(msg.error.error);
            //this.loading = false;
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
                _this.alerta_tipo = 'info';
                _this.alerta_msg = msg.error.error;
                _this.alerta = true;
                setTimeout(function () { _this.alerta = false; }, 4000);
            }
        });
    };
    /*Filtrar por nombre*/
    ProductosComponent.prototype.search = function () {
        var term = this.searchTerm.toLowerCase();
        this.productosFiltrados = this.itemsCopy.filter(function (tag) {
            return tag.nombre.toLowerCase().indexOf(term) >= 0;
        });
    };
    ProductosComponent.prototype.orderPor = function (value) {
        //console.log(value);
        if (value == 1) {
            this.orderDefault();
        }
        else if (value == 2) {
            this.orderPopularity();
        }
        else if (value == 3) {
            this.orderLowToHigh();
        }
        else if (value == 4) {
            this.orderHighToLow();
        }
    };
    ProductosComponent.prototype.orderDefault = function () {
        this.productosFiltrados = (this.productosFiltrados || []).sort(function (a, b) { return a.id < b.id ? -1 : 1; });
        this.filteredItems = this.productosFiltrados;
        this.init();
    };
    ProductosComponent.prototype.orderPopularity = function () {
        this.productosFiltrados = (this.productosFiltrados || []).sort(function (a, b) { return a.count_vistas < b.count_vistas ? -1 : 1; });
        this.filteredItems = this.productosFiltrados;
        this.init();
    };
    ProductosComponent.prototype.orderLowToHigh = function () {
        this.productosFiltrados = (this.productosFiltrados || []).sort(function (a, b) { return a.color.atributos[0].precio < b.color.atributos[0].precio ? -1 : 1; });
        this.filteredItems = this.productosFiltrados;
        this.init();
    };
    ProductosComponent.prototype.orderHighToLow = function () {
        this.productosFiltrados = (this.productosFiltrados || []).sort(function (a, b) { return a.color.atributos[0].precio > b.color.atributos[0].precio ? -1 : 1; });
        this.filteredItems = this.productosFiltrados;
        this.init();
    };
    ProductosComponent.prototype.filterPrice = function (value) {
        if (value == 1) {
            this.productosFiltrados = this.itemsCopy;
        }
        else if (value == 2) {
            this.filterPriceRange(0.00, 50.00);
        }
        else if (value == 3) {
            this.filterPriceRange(50.00, 100.00);
        }
        else if (value == 4) {
            this.filterPriceRange(100.00, 150.00);
        }
        else if (value == 5) {
            this.filterPriceRange(150.00, 200.00);
        }
        else if (value == 6) {
            this.filterPriceMin(200.00);
        }
    };
    ProductosComponent.prototype.filterPriceRange = function (min, max) {
        this.productosFiltrados = this.itemsCopy.filter(function (tag) {
            return (tag.color.atributos[0].precio >= min && tag.color.atributos[0].precio <= max);
        });
        this.filteredItems = this.productosFiltrados;
        this.init();
    };
    ProductosComponent.prototype.filterPriceMin = function (min) {
        this.productosFiltrados = this.itemsCopy.filter(function (tag) {
            return tag.color.atributos[0].precio >= min;
        });
        this.filteredItems = this.productosFiltrados;
        this.init();
    };
    ProductosComponent.prototype.autoScroll = function () {
        window.scrollTo(0, 0);
    };
    ProductosComponent.prototype.init = function () {
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
    /*Nota: esta fue una union entre las dos busquedas*/
    ProductosComponent.prototype.FilterByName = function () {
        var term = this.searchTerm.toLowerCase();
        this.productosFiltrados = this.itemsCopy.filter(function (tag) {
            return tag.nombre.toLowerCase().indexOf(term) >= 0;
        });
        this.filteredItems = this.productosFiltrados;
        this.init();
    };
    ProductosComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    ProductosComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    ProductosComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
        this.autoScroll();
    };
    ProductosComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
        this.autoScroll();
    };
    ProductosComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
        this.autoScroll();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('autoShownModal'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
    ], ProductosComponent.prototype, "autoShownModal", void 0);
    ProductosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/luvas/productos/productos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/luvas/productos/productos.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_ruta_service_ruta_service__["a" /* RutaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_ruta_service_ruta_service__["a" /* RutaService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__services_cart_service_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_cart_service_cart_service__["a" /* CartService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9__events_cart_event_cart_event_service__["a" /* CartEventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__events_cart_event_cart_event_service__["a" /* CartEventService */]) === "function" && _g || Object])
    ], ProductosComponent);
    return ProductosComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=productos.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/luvas/registro/registro.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alertaC {\r\n  position: fixed !important;\r\n  z-index: 1000 !important;\r\n  /* top: 70px !important; */\r\n  right: 10px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/luvas/registro/registro.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alertaC\" *ngIf=\"alerta\">\r\n  <alert  [type]=\"alerta_tipo\" dismissible=\"true\" close=\"cerrarAlerta()\">\r\n    <strong>{{alerta_msg}}</strong> \r\n  </alert>\r\n</div>\r\n\r\n<div class=\"alertaC\" *ngIf=\"alerta_boton\">\r\n  <alert [type]=\"alerta_tipo\" >\r\n    <strong>{{alerta_msg}}</strong>\r\n    <button type=\"button\" class=\"btn btn4 btn-secondary\" (click)=\"ok_alerta()\">ok</button> \r\n  </alert>\r\n</div>\r\n\r\n  <!-- Title Page -->\r\n  <section class=\"bg-title-page p-t-40 p-b-50 flex-col-c-m\" style=\"background-image: url(http://beau-moda.com/images/banner.png);\">\r\n    <h2 class=\"l-text2 t-center\">\r\n      Suscribe\r\n    </h2>\r\n  </section>\r\n\r\n  <!-- content page -->\r\n  <section class=\"bgwhite p-t-66 p-b-60\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <!-- <div class=\"col-md-6 p-b-30\">\r\n          <div class=\"p-r-20 p-r-0-lg\">\r\n            <div class=\"contact-map size21\" id=\"google_map\" data-map-x=\"40.614439\" data-map-y=\"-73.926781\" data-pin=\"images/icons/icon-position-map.png\" data-scrollwhell=\"0\" data-draggable=\"1\"></div>\r\n          </div>\r\n        </div> -->\r\n\r\n        <div style=\"display:block; margin:auto\" class=\"col-md-6 p-b-30\">\r\n          <form [formGroup]=\"myFormAgregar\" novalidate class=\"leave-comment\">\r\n            <h4 class=\"m-text26 p-b-36 p-t-15\">\r\n              Enter your data\r\n            </h4>\r\n\r\n            <div *ngIf=\"myFormAgregar.get('email').errors && myFormAgregar.get('email').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormAgregar.get('email').hasError('required')\">Email is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"text\" name=\"email\" placeholder=\"Email Address\" formControlName=\"email\" >\r\n            </div>\r\n\r\n            <div *ngIf=\"myFormAgregar.get('password').errors && myFormAgregar.get('password').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormAgregar.get('password').hasError('required')\">Password is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"password\" name=\"password\" placeholder=\"Password\" formControlName=\"password\" >\r\n            </div>\r\n\r\n            <div *ngIf=\"myFormAgregar.get('confirm').errors && myFormAgregar.get('confirm').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormAgregar.get('confirm').hasError('required')\">Password is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"password\" name=\"confirm\" placeholder=\"Confirm Password\" formControlName=\"confirm\" >\r\n            </div>\r\n\r\n            <div *ngIf=\"myFormAgregar.get('nombre').errors && myFormAgregar.get('nombre').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormAgregar.get('nombre').hasError('required')\">Name is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"text\" name=\"nombre\" placeholder=\"Full Name\" formControlName=\"nombre\" >\r\n            </div>\r\n\r\n            <div *ngIf=\"myFormAgregar.get('telefono').errors && myFormAgregar.get('telefono').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormAgregar.get('telefono').hasError('required')\">Phone is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"text\" name=\"telefono\" placeholder=\"Phone Number\" formControlName=\"telefono\" >\r\n            </div>\r\n\r\n            <div *ngIf=\"myFormAgregar.get('direccion').errors && myFormAgregar.get('direccion').dirty\">\r\n              <span class=\"danger\" color=\"danger\" *ngIf=\"myFormAgregar.get('direccion').hasError('required')\">Address is required</span>\r\n            </div>\r\n            <div class=\"bo4 of-hidden size15 m-b-20\">\r\n              <input class=\"sizefull s-text7 p-l-22 p-r-22\" type=\"text\" name=\"direccion\" placeholder=\"Address\" formControlName=\"direccion\" >\r\n            </div>\r\n\r\n            \r\n          </form>\r\n\r\n          <div class=\"w-size25\">\r\n            <!-- Button -->\r\n            <button class=\"flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4\" [disabled]=\"myFormAgregar.invalid\" (click)=\"crear()\">\r\n              Suscribe\r\n            </button>\r\n          </div>\r\n\r\n          <button class=\"btn btn-facebook\" type=\"button\" style=\"margin-top: 16px\"><span>facebook</span></button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/luvas/registro/registro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ruta_service_ruta_service__ = __webpack_require__("../../../../../src/app/services/ruta-service/ruta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__events_login_event_login_event_service__ = __webpack_require__("../../../../../src/app/events/login-event/login-event.service.ts");
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
//import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
//import { CartService } from '../../../services/cart-service/cart.service';

var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(http, router, rutaService, fb, loginEventService) {
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.fb = fb;
        this.loginEventService = loginEventService;
        this.loading = false;
        this.editando = false;
        this.agregando = false;
        this.mostrar = true;
        this.detalle = false;
        this.alerta = false;
        this.alerta_boton = false;
        this.slides = [
            { img: "http://placehold.it/350x150/000000" },
            { img: "http://placehold.it/350x150/111111" },
            { img: "http://placehold.it/350x150/333333" },
            { img: "http://placehold.it/350x150/666666" }
        ];
        this.slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };
        this.myFormAgregar = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required]],
            confirm: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required]],
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required]],
            telefono: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required]],
            direccion: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required]],
            activo: [1],
            tipo_usuario: [2],
            tipo_registro: [1],
            imagen: ['assets/images/icons/icon-header-01.png']
        });
    }
    RegistroComponent.prototype.ngOnInit = function () {
        if (this.router.navigated) {
            window.scrollTo(0, 0);
        }
    };
    RegistroComponent.prototype.addSlide = function () {
        this.slides.push({ img: "http://placehold.it/350x150/777777" });
    };
    RegistroComponent.prototype.removeSlide = function () {
        this.slides.length = this.slides.length - 1;
    };
    RegistroComponent.prototype.afterChange = function (e) {
        console.log('afterChange');
    };
    //Alerta cuando se vence el token
    RegistroComponent.prototype.ok_alerta = function () {
        this.router.navigate(['luvas']);
    };
    RegistroComponent.prototype.cerrarAlerta = function () {
        this.alerta = false;
    };
    RegistroComponent.prototype.crear = function () {
        var _this = this;
        console.log(this.myFormAgregar.value);
        if (this.myFormAgregar.value.password != this.myFormAgregar.value.confirm) {
            this.alerta_tipo = 'danger';
            this.alerta_msg = 'Passwords do not match.';
            this.alerta = true;
            setTimeout(function () { _this.alerta = false; }, 4000);
        }
        else {
            this.loading = true;
            var datos = {
                token: localStorage.getItem('luvas_token'),
                email: this.myFormAgregar.value.email,
                password: this.myFormAgregar.value.password,
                nombre: this.myFormAgregar.value.nombre,
                telefono: this.myFormAgregar.value.telefono,
                direccion: this.myFormAgregar.value.direccion,
                activo: this.myFormAgregar.value.activo,
                tipo_usuario: this.myFormAgregar.value.tipo_usuario,
                tipo_registro: this.myFormAgregar.value.tipo_registro,
                imagen: this.myFormAgregar.value.imagen
            };
            this.http.post(this.rutaService.getRutaApi() + 'usuarios', datos)
                .toPromise()
                .then(function (data) {
                console.log(data);
                _this.data = data;
                _this.loading = false;
                _this.alerta_tipo = 'success';
                _this.alerta_msg = _this.data.message;
                _this.alerta = true;
                setTimeout(function () { _this.alerta = false; }, 4000);
                _this.resetFormulario();
                /*Guardar datos del usuario en memoria*/
                var user = JSON.stringify(_this.data.usuario);
                localStorage.setItem('luvas_user', user);
                var token = JSON.stringify(_this.data.token);
                localStorage.setItem('luvas_token', token);
                _this.loginEventService.loginEventData.emit(1);
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
        }
    };
    RegistroComponent.prototype.resetFormulario = function () {
        /*this.myFormAgregar.patchValue({email : ''});
        this.myFormAgregar.patchValue({password : ''});
        this.myFormAgregar.patchValue({confirm : ''});
        this.myFormAgregar.patchValue({nombre : ''});
        this.myFormAgregar.patchValue({telefono : ''});
        this.myFormAgregar.patchValue({direccion : ''});
        this.myFormAgregar.patchValue({activo : ''});
        this.myFormAgregar.patchValue({tipo_usuario : 2});
        this.myFormAgregar.patchValue({tipo_registro : 1});*/
        this.myFormAgregar = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required]],
            confirm: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required]],
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required]],
            telefono: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required]],
            direccion: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required]],
            activo: [1],
            tipo_usuario: [2],
            tipo_registro: [1]
        });
    };
    RegistroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/luvas/registro/registro.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/luvas/registro/registro.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_ruta_service_ruta_service__["a" /* RutaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_ruta_service_ruta_service__["a" /* RutaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__events_login_event_login_event_service__["a" /* LoginEventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__events_login_event_login_event_service__["a" /* LoginEventService */]) === "function" && _e || Object])
    ], RegistroComponent);
    return RegistroComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=registro.component.js.map

/***/ })

});
//# sourceMappingURL=luvas.module.chunk.js.map