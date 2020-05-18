webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./views/bancos/bancos.module": [
		"../../../../../src/app/views/bancos/bancos.module.ts",
		"common",
		"bancos.module"
	],
	"./views/blogs/blogs.module": [
		"../../../../../src/app/views/blogs/blogs.module.ts",
		"common",
		"blogs.module"
	],
	"./views/categorias/categorias.module": [
		"../../../../../src/app/views/categorias/categorias.module.ts",
		"common",
		"categorias.module"
	],
	"./views/chartjs/chartjs.module": [
		"../../../../../src/app/views/chartjs/chartjs.module.ts",
		"chartjs.module"
	],
	"./views/clientes/clientes.module": [
		"../../../../../src/app/views/clientes/clientes.module.ts",
		"common",
		"clientes.module"
	],
	"./views/components/components.module": [
		"../../../../../src/app/views/components/components.module.ts",
		"components.module"
	],
	"./views/dashboard/dashboard.module": [
		"../../../../../src/app/views/dashboard/dashboard.module.ts",
		"common",
		"dashboard.module"
	],
	"./views/icons/icons.module": [
		"../../../../../src/app/views/icons/icons.module.ts",
		"icons.module"
	],
	"./views/luvas/luvas.module": [
		"../../../../../src/app/views/luvas/luvas.module.ts",
		"luvas.module",
		"common"
	],
	"./views/pages/pages.module": [
		"../../../../../src/app/views/pages/pages.module.ts",
		"pages.module"
	],
	"./views/pedidos/pedidos.module": [
		"../../../../../src/app/views/pedidos/pedidos.module.ts",
		"common",
		"pedidos.module"
	],
	"./views/productosadmin/productosadmin.module": [
		"../../../../../src/app/views/productosadmin/productosadmin.module.ts",
		"common",
		"productosadmin.module"
	],
	"./views/widgets/widgets.module": [
		"../../../../../src/app/views/widgets/widgets.module.ts",
		"widgets.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // tslint:disable-next-line
            selector: 'body',
            template: '<router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers__ = __webpack_require__("../../../../../src/app/containers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_ruta_service_ruta_service__ = __webpack_require__("../../../../../src/app/services/ruta-service/ruta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ngx_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_cart_service_cart_service__ = __webpack_require__("../../../../../src/app/services/cart-service/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__events_login_event_login_event_service__ = __webpack_require__("../../../../../src/app/events/login-event/login-event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__events_cart_event_cart_event_service__ = __webpack_require__("../../../../../src/app/events/cart-event/cart-event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular4_social_login__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Import containers

var APP_CONTAINERS = [
    __WEBPACK_IMPORTED_MODULE_4__containers__["a" /* FullLayout */],
    __WEBPACK_IMPORTED_MODULE_4__containers__["b" /* SimpleLayout */]
];
// Import components

var APP_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_5__components__["a" /* AppAside */],
    __WEBPACK_IMPORTED_MODULE_5__components__["b" /* AppBreadcrumbs */],
    __WEBPACK_IMPORTED_MODULE_5__components__["c" /* AppFooter */],
    __WEBPACK_IMPORTED_MODULE_5__components__["d" /* AppHeader */],
    __WEBPACK_IMPORTED_MODULE_5__components__["e" /* AppSidebar */],
    __WEBPACK_IMPORTED_MODULE_5__components__["f" /* AppSidebarFooter */],
    __WEBPACK_IMPORTED_MODULE_5__components__["g" /* AppSidebarForm */],
    __WEBPACK_IMPORTED_MODULE_5__components__["h" /* AppSidebarHeader */],
    __WEBPACK_IMPORTED_MODULE_5__components__["i" /* AppSidebarMinimizer */]
];
// Import directives

var APP_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_6__directives__["a" /* AsideToggleDirective */],
    __WEBPACK_IMPORTED_MODULE_6__directives__["b" /* NAV_DROPDOWN_DIRECTIVES */],
    __WEBPACK_IMPORTED_MODULE_6__directives__["c" /* SIDEBAR_TOGGLE_DIRECTIVES */]
];
// Import routing module

// Import 3rd party components



//mis imports

// Modal Component

//import { CommonModule } from '@angular/common';








var config = new __WEBPACK_IMPORTED_MODULE_19_angular4_social_login__["AuthServiceConfig"]([
    {
        id: __WEBPACK_IMPORTED_MODULE_19_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_19_angular4_social_login__["FacebookLoginProvider"]("946733242186568")
    }
]);
function provideConfig() {
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_19_angular4_social_login__["SocialLoginModule"],
                __WEBPACK_IMPORTED_MODULE_15_ngx_gallery__["NgxGalleryModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
                //CommonModule,
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_14_ngx_loading__["b" /* LoadingModule */].forRoot({
                    animationType: __WEBPACK_IMPORTED_MODULE_14_ngx_loading__["a" /* ANIMATION_TYPES */].wanderingCubes,
                    backdropBackgroundColour: 'rgba(0,0,0,0.7)',
                    backdropBorderRadius: '4px',
                    primaryColour: '#ffffff',
                    secondaryColour: '#ffffff',
                    tertiaryColour: '#ffffff',
                    fullScreenBackdrop: true
                })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ].concat(APP_CONTAINERS, APP_COMPONENTS, APP_DIRECTIVES),
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__events_cart_event_cart_event_service__["a" /* CartEventService */],
                __WEBPACK_IMPORTED_MODULE_17__events_login_event_login_event_service__["a" /* LoginEventService */],
                __WEBPACK_IMPORTED_MODULE_16__services_cart_service_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_11__services_ruta_service_ruta_service__["a" /* RutaService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["LocationStrategy"],
                    useClass: __WEBPACK_IMPORTED_MODULE_2__angular_common__["HashLocationStrategy"]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_19_angular4_social_login__["AuthServiceConfig"],
                    useFactory: provideConfig
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers__ = __webpack_require__("../../../../../src/app/containers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Import Containers

var routes = [
    {
        path: '',
        redirectTo: 'luvas',
        pathMatch: 'full',
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["a" /* FullLayout */],
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: './views/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'components',
                loadChildren: './views/components/components.module#ComponentsModule'
            },
            {
                path: 'icons',
                loadChildren: './views/icons/icons.module#IconsModule'
            },
            {
                path: 'widgets',
                loadChildren: './views/widgets/widgets.module#WidgetsModule'
            },
            {
                path: 'charts',
                loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
            },
            {
                path: 'categorias',
                loadChildren: './views/categorias/categorias.module#CategoriasModule'
            },
            {
                path: 'clientes',
                loadChildren: './views/clientes/clientes.module#ClientesModule'
            },
            {
                path: 'pedidos',
                loadChildren: './views/pedidos/pedidos.module#PedidosModule'
            },
            {
                path: 'productosadmin',
                loadChildren: './views/productosadmin/productosadmin.module#ProductosAdminModule'
            },
            {
                path: 'bancos',
                loadChildren: './views/bancos/bancos.module#BancosModule'
            },
            {
                path: 'blogs',
                loadChildren: './views/blogs/blogs.module#BlogsModule'
            }
        ]
    },
    {
        path: 'pages',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["b" /* SimpleLayout */],
        data: {
            title: 'Pages'
        },
        children: [
            {
                path: '',
                loadChildren: './views/pages/pages.module#PagesModule',
            }
        ]
    },
    {
        path: 'luvas',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["b" /* SimpleLayout */],
        data: {
            title: 'Pages Luvas'
        },
        children: [
            {
                path: '',
                loadChildren: './views/luvas/luvas.module#LuvasModule',
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-aside/app-aside.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"aside-menu\">\r\n  <tabset>\r\n    <tab>\r\n      <ng-template tabHeading><i class=\"icon-list\"></i></ng-template>\r\n      <div class=\"callout m-0 py-2 text-muted text-center bg-light text-uppercase\">\r\n        <small><b>Today</b></small>\r\n      </div>\r\n      <hr class=\"transparent mx-3 my-0\">\r\n      <div class=\"callout callout-warning m-0 py-3\">\r\n        <div class=\"avatar float-right\">\r\n          <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n        </div>\r\n        <div>Meeting with <strong>Lucas</strong></div>\r\n        <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\r\n        <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA </small>\r\n      </div>\r\n      <hr class=\"mx-3 my-0\">\r\n      <div class=\"callout callout-info m-0 py-3\">\r\n        <div class=\"avatar float-right\">\r\n          <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n        </div>\r\n        <div>Skype with <strong>Megan</strong></div>\r\n        <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 5pm</small>\r\n        <small class=\"text-muted\"><i class=\"icon-social-skype\"></i>&nbsp; On-line </small>\r\n      </div>\r\n      <hr class=\"transparent mx-3 my-0\">\r\n      <div class=\"callout m-0 py-2 text-muted text-center bg-light text-uppercase\">\r\n        <small><b>Tomorrow</b></small>\r\n      </div>\r\n      <hr class=\"transparent mx-3 my-0\">\r\n      <div class=\"callout callout-danger m-0 py-3\">\r\n        <div>New UI Project - <strong>deadline</strong></div>\r\n        <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 10 - 11pm</small>\r\n        <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ </small>\r\n        <div class=\"avatars-stack mt-2\">\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr class=\"mx-3 my-0\">\r\n      <div class=\"callout callout-success m-0 py-3\">\r\n        <div><strong>#10 Startups.Garden</strong> Meetup</div>\r\n        <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\r\n        <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA </small>\r\n      </div>\r\n      <hr class=\"mx-3 my-0\">\r\n      <div class=\"callout callout-primary m-0 py-3\">\r\n        <div><strong>Team meeting</strong></div>\r\n        <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 6pm</small>\r\n        <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ </small>\r\n        <div class=\"avatars-stack mt-2\">\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/8.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr class=\"mx-3 my-0\">\r\n    </tab>\r\n    <tab>\r\n      <ng-template tabHeading><i class=\"icon-speech\"></i></ng-template>\r\n      <div class=\"p-3\">\r\n        <div class=\"message\">\r\n          <div class=\"py-3 pb-5 mr-3 float-left\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n              <span class=\"avatar-status badge-success\"></span>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lukasz Holeczek</small>\r\n            <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n          </div>\r\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n        </div>\r\n        <hr>\r\n        <div class=\"message\">\r\n          <div class=\"py-3 pb-5 mr-3 float-left\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n              <span class=\"avatar-status badge-success\"></span>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lukasz Holeczek</small>\r\n            <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n          </div>\r\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n        </div>\r\n        <hr>\r\n        <div class=\"message\">\r\n          <div class=\"py-3 pb-5 mr-3 float-left\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n              <span class=\"avatar-status badge-success\"></span>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lukasz Holeczek</small>\r\n            <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n          </div>\r\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n        </div>\r\n        <hr>\r\n        <div class=\"message\">\r\n          <div class=\"py-3 pb-5 mr-3 float-left\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n              <span class=\"avatar-status badge-success\"></span>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lukasz Holeczek</small>\r\n            <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n          </div>\r\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n        </div>\r\n        <hr>\r\n        <div class=\"message\">\r\n          <div class=\"py-3 pb-5 mr-3 float-left\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n              <span class=\"avatar-status badge-success\"></span>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lukasz Holeczek</small>\r\n            <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n          </div>\r\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n        </div>\r\n      </div>\r\n    </tab>\r\n    <tab>\r\n      <ng-template tabHeading><i class=\"icon-settings\"></i></ng-template>\r\n      <div class=\"p-3\">\r\n        <h6>Settings</h6>\r\n\r\n        <div class=\"aside-options\">\r\n          <div class=\"clearfix mt-4\">\r\n            <small><b>Option 1</b></small>\r\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n              <input type=\"checkbox\" class=\"switch-input\" checked>\r\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n              <span class=\"switch-handle\"></span>\r\n            </label>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"aside-options\">\r\n          <div class=\"clearfix mt-3\">\r\n            <small><b>Option 2</b></small>\r\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n              <input type=\"checkbox\" class=\"switch-input\">\r\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n              <span class=\"switch-handle\"></span>\r\n            </label>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"aside-options\">\r\n          <div class=\"clearfix mt-3\">\r\n            <small><b>Option 3</b></small>\r\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n              <input type=\"checkbox\" class=\"switch-input\">\r\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n              <span class=\"switch-handle\"></span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"aside-options\">\r\n          <div class=\"clearfix mt-3\">\r\n            <small><b>Option 4</b></small>\r\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n              <input type=\"checkbox\" class=\"switch-input\" checked>\r\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n              <span class=\"switch-handle\"></span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n        <hr>\r\n        <h6>System Utilization</h6>\r\n\r\n        <div class=\"text-uppercase mb-1 mt-4\"><small><b>CPU Usage</b></small></div>\r\n        <div class=\"progress progress-xs\">\r\n          <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n        </div>\r\n        <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\r\n\r\n        <div class=\"text-uppercase mb-1 mt-2\"><small><b>Memory Usage</b></small></div>\r\n        <div class=\"progress progress-xs\">\r\n          <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n        </div>\r\n        <small class=\"text-muted\">11444GB/16384MB</small>\r\n\r\n        <div class=\"text-uppercase mb-1 mt-2\"><small><b>SSD 1 Usage</b></small></div>\r\n        <div class=\"progress progress-xs\">\r\n          <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n        </div>\r\n        <small class=\"text-muted\">243GB/256GB</small>\r\n\r\n        <div class=\"text-uppercase mb-1 mt-2\"><small><b>SSD 2 Usage</b></small></div>\r\n        <div class=\"progress progress-xs\">\r\n          <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n        </div>\r\n        <small class=\"text-muted\">25GB/256GB</small>\r\n      </div>\r\n    </tab>\r\n  </tabset>\r\n</aside>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-aside/app-aside.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppAside; });
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

var AppAside = /** @class */ (function () {
    function AppAside(el) {
        this.el = el;
    }
    //wait for the component to render completely
    AppAside.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    AppAside = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aside',
            template: __webpack_require__("../../../../../src/app/components/app-aside/app-aside.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], AppAside);
    return AppAside;
    var _a;
}());

//# sourceMappingURL=app-aside.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-aside/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_aside_component__ = __webpack_require__("../../../../../src/app/components/app-aside/app-aside.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_aside_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-breadcrumbs/app-breadcrumbs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBreadcrumbs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppBreadcrumbs = /** @class */ (function () {
    function AppBreadcrumbs(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (event) {
            _this.breadcrumbs = [];
            var currentRoute = _this.route.root, url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        _this.breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
        });
    }
    AppBreadcrumbs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-breadcrumbs',
            template: "\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs\" let-last = last>\n    <li class=\"breadcrumb-item\"\n        *ngIf=\"breadcrumb.label.title&&breadcrumb.url.substring(breadcrumb.url.length-1) == ''||breadcrumb.label.title&&last\"\n        [ngClass]=\"{active: last}\">\n      <!-- <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a> -->\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n    </li>\n  </ng-template>\n  "
        })
        /*<ng-template ngFor let-breadcrumb [ngForOf]="breadcrumbs" let-last = last>
            <li class="breadcrumb-item"
                *ngIf="breadcrumb.label.title&&breadcrumb.url.substring(breadcrumb.url.length-1) == '/'||breadcrumb.label.title&&last"
                [ngClass]="{active: last}">
              <a *ngIf="!last" [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</a>
              <span *ngIf="last" [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</span>
            </li>
          </ng-template>*/
        ,
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
    ], AppBreadcrumbs);
    return AppBreadcrumbs;
    var _a, _b;
}());

//# sourceMappingURL=app-breadcrumbs.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-breadcrumbs/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_breadcrumbs_component__ = __webpack_require__("../../../../../src/app/components/app-breadcrumbs/app-breadcrumbs.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_breadcrumbs_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-footer/app-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"app-footer\">\r\n  <!-- <span><a href=\"http://coreui.io\">CoreUI</a> &copy; 2017 creativeLabs.</span> -->\r\n  <span class=\"ml-auto\">Powered by <a href=\"https://rattios.com\" target=\"_blank\">Rattios Technology.</a></span>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-footer/app-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFooter; });
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

var AppFooter = /** @class */ (function () {
    function AppFooter(el) {
        this.el = el;
    }
    //wait for the component to render completely
    AppFooter.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    AppFooter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/app-footer/app-footer.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], AppFooter);
    return AppFooter;
    var _a;
}());

//# sourceMappingURL=app-footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-footer/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_footer_component__ = __webpack_require__("../../../../../src/app/components/app-footer/app-footer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_footer_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-header/app-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\r\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" appMobileSidebarToggler>&#9776;</button>\r\n  <a class=\"navbar-brand\" href=\"#\"></a>\r\n  <button class=\"navbar-toggler d-md-down-none\" type=\"button\" appSidebarToggler>&#9776;</button>\r\n  <!-- <ul class=\"nav navbar-nav d-md-down-none\">\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" href=\"#\">Dashboard</a>\r\n    </li>\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" href=\"#\">Users</a>\r\n    </li>\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" href=\"#\">Settings</a>\r\n    </li>\r\n  </ul> -->\r\n  <ul class=\"nav navbar-nav ml-auto\" style=\"margin-right: 20px\">\r\n    <!-- <li class=\"nav-item dropdown d-md-down-none\" dropdown placement=\"bottom right\">\r\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\r\n        <i class=\"icon-bell\"></i><span class=\"badge badge-pill badge-danger\">5</span>\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\r\n        <div class=\"dropdown-header text-center\"><strong>You have 5 notifications</strong></div>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <i class=\"icon-user-follow text-success\"></i> New user registered\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <i class=\"icon-user-unfollow text-danger\"></i> User deleted\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <i class=\"icon-chart text-info\"></i> Sales report is ready\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <i class=\"icon-basket-loaded text-primary\"></i> New client\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <i class=\"icon-speedometer text-warning\"></i> Server overloaded\r\n        </a>\r\n        <div class=\"dropdown-header text-center\"><strong>Server</strong></div>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <div class=\"text-uppercase mb-1\"><small><b>CPU Usage</b></small></div>\r\n          <span class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </span>\r\n          <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <div class=\"text-uppercase mb-1\"><small><b>Memory Usage</b></small></div>\r\n          <span class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </span>\r\n          <small class=\"text-muted\">11444GB/16384MB</small>\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <div class=\"text-uppercase mb-1\"><small><b>SSD 1 Usage</b></small></div>\r\n          <span class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </span>\r\n          <small class=\"text-muted\">243GB/256GB</small>\r\n        </a>\r\n      </div>\r\n    </li>\r\n    <li class=\"nav-item dropdown d-md-down-none\" dropdown placement=\"bottom right\">\r\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\r\n        <i class=\"icon-list\"></i><span class=\"badge badge-pill badge-warning\">15</span>\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\r\n        <div class=\"dropdown-header text-center\"><strong>You have 5 pending tasks</strong></div>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <div class=\"small mb-1\">Upgrade NPM &amp; Bower <span class=\"float-right\"><strong>0%</strong></span></div>\r\n          <span class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 0%\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </span>\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <div class=\"small mb-1\">ReactJS Version <span class=\"float-right\"><strong>25%</strong></span></div>\r\n          <span class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </span>\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <div class=\"small mb-1\">VueJS Version <span class=\"float-right\"><strong>50%</strong></span></div>\r\n          <span class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </span>\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <div class=\"small mb-1\">Add new layouts <span class=\"float-right\"><strong>75%</strong></span></div>\r\n          <span class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </span>\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <div class=\"small mb-1\">Angular 2 Cli Version <span class=\"float-right\"><strong>100%</strong></span></div>\r\n          <span class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </span>\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item text-center\">\r\n          <strong>View all tasks</strong>\r\n        </a>\r\n      </div>\r\n    </li>\r\n    <li class=\"nav-item dropdown d-md-down-none\" dropdown placement=\"bottom right\">\r\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\r\n        <i class=\"icon-envelope-letter\"></i><span class=\"badge badge-pill badge-info\">7</span>\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\r\n        <div class=\"dropdown-header text-center\"><strong>You have 4 messages</strong></div>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <div class=\"message\">\r\n            <div class=\"py-3 mr-3 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">John Doe</small>\r\n              <small class=\"text-muted float-right mt-1\">Just now</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\"><span class=\"fa fa-exclamation text-danger\"></span> Important message</div>\r\n            <div class=\"small text-muted text-truncate\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>\r\n          </div>\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <div class=\"message\">\r\n            <div class=\"py-3 mr-3 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-warning\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">John Doe</small>\r\n              <small class=\"text-muted float-right mt-1\">5 minutes ago</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <div class=\"small text-muted text-truncate\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>\r\n          </div>\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <div class=\"message\">\r\n            <div class=\"py-3 mr-3 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-danger\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">John Doe</small>\r\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <div class=\"small text-muted text-truncate\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>\r\n          </div>\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <div class=\"message\">\r\n            <div class=\"py-3 mr-3 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-info\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">John Doe</small>\r\n              <small class=\"text-muted float-right mt-1\">4:03 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <div class=\"small text-muted text-truncate\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>\r\n          </div>\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item text-center\">\r\n          <strong>View all messages</strong>\r\n        </a>\r\n      </div>\r\n    </li>\r\n    <li class=\"nav-item d-md-down-none\">\r\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-location-pin\"></i></a>\r\n    </li> -->\r\n    <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\" >\r\n      <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\r\n        <img src=\"{{imagen}}\" class=\"img-avatar\" alt=\"admin@beau.com\"/>\r\n        <span class=\"d-md-down-none\">admin</span>\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\r\n        <div class=\"dropdown-header text-center\"><strong>Account</strong></div>\r\n        <!-- <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-bell-o\"></i> Updates<span class=\"badge badge-info\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-envelope-o\"></i> Messages<span class=\"badge badge-success\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-tasks\"></i> Tasks<span class=\"badge badge-danger\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-comments\"></i> Comment<span class=\"badge badge-warning\">42</span></a>\r\n        <div class=\"dropdown-header text-center\"><strong>Settings</strong></div>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-wrench\"></i> Setting</a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-usd\"></i> Payments<span class=\"badge badge-dark\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-file\"></i> Projects<span class=\"badge badge-primary\">42</span></a>\r\n        <div class=\"divider\"></div>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-shield\"></i> Lock account</a> -->\r\n        <a class=\"dropdown-item\" routerLinkActive=\"active\" [routerLink]=\"['/luvas']\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\r\n      </div>\r\n    </li>\r\n    <!-- <button class=\"navbar-toggler d-md-down-none\" type=\"button\" appAsideMenuToggler>&#9776;</button> -->\r\n  </ul>\r\n</header>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-header/app-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeader; });
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

var AppHeader = /** @class */ (function () {
    function AppHeader(el) {
        this.el = el;
    }
    //wait for the component to render completely
    AppHeader.prototype.ngOnInit = function () {
        this.checkLogin();
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    AppHeader.prototype.logout = function () {
        localStorage.setItem('luvas_user', null);
        localStorage.setItem('luvas_token', null);
    };
    AppHeader.prototype.checkLogin = function () {
        /*Verifiacar si hay un usario logeado y su tipo*/
        var user = localStorage.getItem('luvas_user');
        var user_login = JSON.parse(user);
        if (user_login) {
            this.imagen = user_login.imagen;
            //   assets/img/avatars/user.png
        }
    };
    AppHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/app-header/app-header.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], AppHeader);
    return AppHeader;
    var _a;
}());

//# sourceMappingURL=app-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-header/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_header_component__ = __webpack_require__("../../../../../src/app/components/app-header/app-header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_header_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-footer/app-sidebar-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"sidebar-footer\"></div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-footer/app-sidebar-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidebarFooter; });
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

var AppSidebarFooter = /** @class */ (function () {
    function AppSidebarFooter(el) {
        this.el = el;
    }
    //wait for the component to render completely
    AppSidebarFooter.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    AppSidebarFooter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-footer',
            template: __webpack_require__("../../../../../src/app/components/app-sidebar-footer/app-sidebar-footer.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], AppSidebarFooter);
    return AppSidebarFooter;
    var _a;
}());

//# sourceMappingURL=app-sidebar-footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-footer/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_sidebar_footer_component__ = __webpack_require__("../../../../../src/app/components/app-sidebar-footer/app-sidebar-footer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_sidebar_footer_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-form/app-sidebar-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <form class=\"sidebar-form\"></form> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-form/app-sidebar-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidebarForm; });
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

var AppSidebarForm = /** @class */ (function () {
    function AppSidebarForm(el) {
        this.el = el;
    }
    //wait for the component to render completely
    AppSidebarForm.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    AppSidebarForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-form',
            template: __webpack_require__("../../../../../src/app/components/app-sidebar-form/app-sidebar-form.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], AppSidebarForm);
    return AppSidebarForm;
    var _a;
}());

//# sourceMappingURL=app-sidebar-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-form/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_sidebar_form_component__ = __webpack_require__("../../../../../src/app/components/app-sidebar-form/app-sidebar-form.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_sidebar_form_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-header/app-sidebar-header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"sidebar-header\"></div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-header/app-sidebar-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidebarHeader; });
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

var AppSidebarHeader = /** @class */ (function () {
    function AppSidebarHeader(el) {
        this.el = el;
    }
    //wait for the component to render completely
    AppSidebarHeader.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    AppSidebarHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-header',
            template: __webpack_require__("../../../../../src/app/components/app-sidebar-header/app-sidebar-header.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], AppSidebarHeader);
    return AppSidebarHeader;
    var _a;
}());

//# sourceMappingURL=app-sidebar-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-header/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_sidebar_header_component__ = __webpack_require__("../../../../../src/app/components/app-sidebar-header/app-sidebar-header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_sidebar_header_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-minimizer/app-sidebar-minimizer.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"sidebar-minimizer\" type=\"button\" appSidebarMinimizer appBrandMinimizer></button>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-minimizer/app-sidebar-minimizer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidebarMinimizer; });
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

var AppSidebarMinimizer = /** @class */ (function () {
    function AppSidebarMinimizer(el) {
        this.el = el;
    }
    //wait for the component to render completely
    AppSidebarMinimizer.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    AppSidebarMinimizer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-minimizer',
            template: __webpack_require__("../../../../../src/app/components/app-sidebar-minimizer/app-sidebar-minimizer.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], AppSidebarMinimizer);
    return AppSidebarMinimizer;
    var _a;
}());

//# sourceMappingURL=app-sidebar-minimizer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-minimizer/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_sidebar_minimizer_component__ = __webpack_require__("../../../../../src/app/components/app-sidebar-minimizer/app-sidebar-minimizer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_sidebar_minimizer_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar/app-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\r\n  <app-sidebar-header></app-sidebar-header>\r\n  <app-sidebar-form></app-sidebar-form>\r\n  <nav class=\"sidebar-nav\">\r\n    <ul class=\"nav\">\r\n      <li class=\"nav-title\">\r\n        Menu\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\"><i class=\"icon-speedometer\"></i> Dashboard <!-- <span class=\"badge badge-info\">NEW</span> --></a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/categorias']\"><i class=\"icon-puzzle\"></i> Categorías </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/productosadmin']\"><i class=\"icon-star\"></i> Productos </a> \r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/clientes']\"><i class=\"icon-people\"></i> Clientes </a> \r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pedidos']\"><i class=\"icon-basket-loaded\"></i> Pedidos </a> \r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/bancos']\"><i class=\"icon-credit-card\"></i> Bancos </a> \r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/blogs']\"><i class=\"icon-book-open\"></i> Blogs </a> \r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/luvas']\"><i class=\"icon-social-dropbox\"></i> eComerce </a> \r\n      </li>\r\n\r\n  <!-- <li class=\"divider\"></li>\r\n   <li class=\"nav-title\">\r\n     UI Elements\r\n   </li>\r\n   <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\" appNavDropdown>\r\n     <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" appNavDropdownToggle><i class=\"icon-puzzle\"></i> Components</a>\r\n     <ul class=\"nav-dropdown-items\">\r\n       <li class=\"nav-item\">\r\n         <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/buttons']\"><i class=\"icon-puzzle\"></i> Buttons</a>\r\n       </li>\r\n       <li class=\"nav-item\">\r\n         <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/social-buttons']\"><i class=\"icon-puzzle\"></i> Social Buttons</a>\r\n       </li>\r\n       <li class=\"nav-item\">\r\n         <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/cards']\"><i class=\"icon-puzzle\"></i> Cards</a>\r\n       </li>\r\n       <li class=\"nav-item\">\r\n         <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/forms']\"><i class=\"icon-puzzle\"></i> Forms</a>\r\n       </li>\r\n       <li class=\"nav-item\">\r\n         <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/modals']\"><i class=\"icon-puzzle\"></i> Modals</a>\r\n       </li>\r\n       <li class=\"nav-item\">\r\n         <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/switches']\"><i class=\"icon-puzzle\"></i> Switches</a>\r\n       </li>\r\n       <li class=\"nav-item\">\r\n         <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/tables']\"><i class=\"icon-puzzle\"></i> Tables</a>\r\n       </li>\r\n       <li class=\"nav-item\">\r\n         <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/tabs']\"><i class=\"icon-puzzle\"></i> Tabs</a>\r\n       </li>\r\n     </ul>\r\n   </li>\r\n   <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\" appNavDropdown>\r\n     <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" appNavDropdownToggle><i class=\"icon-star\"></i> Icons</a>\r\n     <ul class=\"nav-dropdown-items\">\r\n       <li class=\"nav-item\">\r\n         <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/icons/font-awesome']\"><i class=\"icon-star\"></i> Font Awesome<span class=\"badge badge-secondary\">4.7</span></a>\r\n       </li>\r\n       <li class=\"nav-item\">\r\n         <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/icons/simple-line-icons']\"><i class=\"icon-star\"></i> Simple Line Icons</a>\r\n       </li>\r\n     </ul>\r\n   </li>\r\n   <li class=\"nav-item\">\r\n     <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/widgets']\"><i class=\"icon-calculator\"></i> Widgets <span class=\"badge badge-info\">NEW</span></a>\r\n   </li>\r\n   <li class=\"nav-item\">\r\n     <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/charts']\"><i class=\"icon-pie-chart\"></i> Charts</a>\r\n   </li>\r\n   <li class=\"divider\"></li>\r\n   <li class=\"nav-title\">\r\n     Extras\r\n   </li>\r\n   <li class=\"nav-item nav-dropdown\" appNavDropdown>\r\n     <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" appNavDropdownToggle><i class=\"icon-star\"></i> Pages</a>\r\n     <ul class=\"nav-dropdown-items\">\r\n       <li class=\"nav-item\">\r\n         <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/login']\"><i class=\"icon-star\"></i> Login</a>\r\n       </li>\r\n       <li class=\"nav-item\">\r\n         <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/register']\"><i class=\"icon-star\"></i> Register</a>\r\n       </li>\r\n       <li class=\"nav-item\">\r\n         <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/404']\"><i class=\"icon-star\"></i> Error 404</a>\r\n       </li>\r\n       <li class=\"nav-item\">\r\n         <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/500']\"><i class=\"icon-star\"></i> Error 500</a>\r\n       </li>\r\n     </ul>\r\n   </li>\r\n   <li class=\"nav-item mt-auto\">\r\n     <a class=\"nav-link nav-link-success\" href=\"http://coreui.io/angular/\"><i class=\"icon-cloud-download\"></i> Download CoreUI</a>\r\n   </li>\r\n   <li class=\"nav-item\">\r\n     <a class=\"nav-link nav-link-danger\" href=\"http://coreui.io/pro/angular/\"><i class=\"icon-layers\"></i> Try CoreUI <strong>PRO</strong></a>\r\n   </li> -->\r\n\r\n\r\n    </ul>\r\n  </nav>\r\n  <app-sidebar-footer></app-sidebar-footer>\r\n  <app-sidebar-minimizer></app-sidebar-minimizer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar/app-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidebar; });
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

var AppSidebar = /** @class */ (function () {
    function AppSidebar(el) {
        this.el = el;
    }
    //wait for the component to render completely
    AppSidebar.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    AppSidebar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/components/app-sidebar/app-sidebar.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], AppSidebar);
    return AppSidebar;
    var _a;
}());

//# sourceMappingURL=app-sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_sidebar_component__ = __webpack_require__("../../../../../src/app/components/app-sidebar/app-sidebar.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_sidebar_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_aside__ = __webpack_require__("../../../../../src/app/components/app-aside/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_aside__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_breadcrumbs__ = __webpack_require__("../../../../../src/app/components/app-breadcrumbs/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__app_breadcrumbs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_footer__ = __webpack_require__("../../../../../src/app/components/app-footer/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__app_footer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_header__ = __webpack_require__("../../../../../src/app/components/app-header/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__app_header__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_sidebar__ = __webpack_require__("../../../../../src/app/components/app-sidebar/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__app_sidebar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_sidebar_footer__ = __webpack_require__("../../../../../src/app/components/app-sidebar-footer/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__app_sidebar_footer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_sidebar_form__ = __webpack_require__("../../../../../src/app/components/app-sidebar-form/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__app_sidebar_form__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_sidebar_header__ = __webpack_require__("../../../../../src/app/components/app-sidebar-header/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__app_sidebar_header__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_sidebar_minimizer__ = __webpack_require__("../../../../../src/app/components/app-sidebar-minimizer/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__app_sidebar_minimizer__["a"]; });









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/containers/full-layout/full-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"app-body\">\r\n  <app-sidebar></app-sidebar>\r\n  <!-- Main content -->\r\n  <main class=\"main\">\r\n    <!-- Breadcrumb -->\r\n    <ol class=\"breadcrumb\">\r\n      <app-breadcrumbs></app-breadcrumbs>\r\n      <!-- Breadcrumb Menu-->\r\n      <!-- <li class=\"breadcrumb-menu d-md-down-none\">\r\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n          <a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>\r\n          <a class=\"btn\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\r\n          <a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\r\n        </div>\r\n      </li> -->\r\n    </ol>\r\n    <div class=\"container-fluid\">\r\n      <router-outlet></router-outlet>\r\n    </div><!-- /.conainer-fluid -->\r\n  </main>\r\n  <app-aside></app-aside>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/containers/full-layout/full-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullLayout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FullLayout = /** @class */ (function () {
    function FullLayout() {
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
    FullLayout.prototype.ngOnInit = function () { };
    FullLayout = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/containers/full-layout/full-layout.component.html")
        })
    ], FullLayout);
    return FullLayout;
}());

//# sourceMappingURL=full-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/full-layout/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__full_layout_component__ = __webpack_require__("../../../../../src/app/containers/full-layout/full-layout.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__full_layout_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/containers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__full_layout__ = __webpack_require__("../../../../../src/app/containers/full-layout/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__full_layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__simple_layout__ = __webpack_require__("../../../../../src/app/containers/simple-layout/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__simple_layout__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/containers/simple-layout/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__simple_layout_component__ = __webpack_require__("../../../../../src/app/containers/simple-layout/simple-layout.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__simple_layout_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/containers/simple-layout/simple-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleLayout; });
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

var SimpleLayout = /** @class */ (function () {
    function SimpleLayout() {
    }
    SimpleLayout.prototype.ngOnInit = function () { };
    SimpleLayout = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: '<router-outlet></router-outlet>',
        }),
        __metadata("design:paramtypes", [])
    ], SimpleLayout);
    return SimpleLayout;
}());

//# sourceMappingURL=simple-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/aside/aside.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideToggleDirective; });
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

/**
* Allows the aside to be toggled via click.
*/
var AsideToggleDirective = /** @class */ (function () {
    function AsideToggleDirective() {
    }
    AsideToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('aside-menu-hidden');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AsideToggleDirective.prototype, "toggleOpen", null);
    AsideToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAsideMenuToggler]',
        }),
        __metadata("design:paramtypes", [])
    ], AsideToggleDirective);
    return AsideToggleDirective;
}());

//# sourceMappingURL=aside.directive.js.map

/***/ }),

/***/ "../../../../../src/app/directives/aside/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aside_directive__ = __webpack_require__("../../../../../src/app/directives/aside/aside.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__aside_directive__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aside__ = __webpack_require__("../../../../../src/app/directives/aside/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__aside__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nav_dropdown__ = __webpack_require__("../../../../../src/app/directives/nav-dropdown/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__nav_dropdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar__ = __webpack_require__("../../../../../src/app/directives/sidebar/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__sidebar__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/directives/nav-dropdown/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nav_dropdown_directive__ = __webpack_require__("../../../../../src/app/directives/nav-dropdown/nav-dropdown.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__nav_dropdown_directive__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/directives/nav-dropdown/nav-dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NavDropdownDirective */
/* unused harmony export NavDropdownToggleDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NAV_DROPDOWN_DIRECTIVES; });
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

var NavDropdownDirective = /** @class */ (function () {
    function NavDropdownDirective(el) {
        this.el = el;
    }
    NavDropdownDirective.prototype.toggle = function () {
        this.el.nativeElement.classList.toggle('open');
    };
    NavDropdownDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appNavDropdown]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], NavDropdownDirective);
    return NavDropdownDirective;
    var _a;
}());

/**
* Allows the dropdown to be toggled via click.
*/
var NavDropdownToggleDirective = /** @class */ (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavDropdownToggleDirective.prototype, "toggleOpen", null);
    NavDropdownToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appNavDropdownToggle]'
        }),
        __metadata("design:paramtypes", [NavDropdownDirective])
    ], NavDropdownToggleDirective);
    return NavDropdownToggleDirective;
}());

var NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];
//# sourceMappingURL=nav-dropdown.directive.js.map

/***/ }),

/***/ "../../../../../src/app/directives/sidebar/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sidebar_directive__ = __webpack_require__("../../../../../src/app/directives/sidebar/sidebar.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sidebar_directive__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/directives/sidebar/sidebar.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SidebarToggleDirective */
/* unused harmony export SidebarMinimizeDirective */
/* unused harmony export BrandMinimizeDirective */
/* unused harmony export MobileSidebarToggleDirective */
/* unused harmony export SidebarOffCanvasCloseDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SIDEBAR_TOGGLE_DIRECTIVES; });
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

/**
* Allows the sidebar to be toggled via click.
*/
var SidebarToggleDirective = /** @class */ (function () {
    function SidebarToggleDirective() {
    }
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-hidden');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarToggleDirective.prototype, "toggleOpen", null);
    SidebarToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appSidebarToggler]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarToggleDirective);
    return SidebarToggleDirective;
}());

var SidebarMinimizeDirective = /** @class */ (function () {
    function SidebarMinimizeDirective() {
    }
    SidebarMinimizeDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-minimized');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarMinimizeDirective.prototype, "toggleOpen", null);
    SidebarMinimizeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appSidebarMinimizer]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarMinimizeDirective);
    return SidebarMinimizeDirective;
}());

var BrandMinimizeDirective = /** @class */ (function () {
    function BrandMinimizeDirective() {
    }
    BrandMinimizeDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('brand-minimized');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BrandMinimizeDirective.prototype, "toggleOpen", null);
    BrandMinimizeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appBrandMinimizer]'
        }),
        __metadata("design:paramtypes", [])
    ], BrandMinimizeDirective);
    return BrandMinimizeDirective;
}());

var MobileSidebarToggleDirective = /** @class */ (function () {
    function MobileSidebarToggleDirective() {
    }
    // Check if element has class
    MobileSidebarToggleDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
    MobileSidebarToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appMobileSidebarToggler]'
        }),
        __metadata("design:paramtypes", [])
    ], MobileSidebarToggleDirective);
    return MobileSidebarToggleDirective;
}());

/**
* Allows the off-canvas sidebar to be closed via click.
*/
var SidebarOffCanvasCloseDirective = /** @class */ (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    // Check if element has class
    SidebarOffCanvasCloseDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    // Toggle element class
    SidebarOffCanvasCloseDirective.prototype.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
    SidebarOffCanvasCloseDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appSidebarClose]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarOffCanvasCloseDirective);
    return SidebarOffCanvasCloseDirective;
}());

var SIDEBAR_TOGGLE_DIRECTIVES = [
    SidebarToggleDirective,
    SidebarMinimizeDirective,
    BrandMinimizeDirective,
    SidebarOffCanvasCloseDirective,
    MobileSidebarToggleDirective
];
//# sourceMappingURL=sidebar.directive.js.map

/***/ }),

/***/ "../../../../../src/app/events/cart-event/cart-event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartEventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CartEventService = /** @class */ (function () {
    function CartEventService() {
        this.cartEventData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //constructor() { }
    }
    CartEventService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], CartEventService);
    return CartEventService;
}());

//# sourceMappingURL=cart-event.service.js.map

/***/ }),

/***/ "../../../../../src/app/events/login-event/login-event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginEventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginEventService = /** @class */ (function () {
    function LoginEventService() {
        this.loginEventData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //constructor() { }
    }
    LoginEventService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], LoginEventService);
    return LoginEventService;
}());

//# sourceMappingURL=login-event.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/cart-service/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ruta_service_ruta_service__ = __webpack_require__("../../../../../src/app/services/ruta-service/ruta.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CartService = /** @class */ (function () {
    function CartService(http, router, rutaService) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.cartObj = {};
        var carrito = localStorage.getItem('luvas_cart');
        var user = localStorage.getItem('luvas_user');
        var item = JSON.parse(carrito);
        var user_id = JSON.parse(user);
        var aux_id = null;
        if (user_id) {
            aux_id = user_id.id;
        }
        this.cartObj.cart = [];
        this.cartObj.subtotal = 0;
        this.cartObj.cantidad = 0;
        this.cartObj.id = null;
        this.cartObj.country = '';
        this.cartObj.state = '';
        this.cartObj.postcode = '';
        this.cartObj.total = 0;
        /*if (item) {
          this.cartObj.cart = item.cart;
          this.cartObj.subtotal = item.subtotal;
          this.cartObj.cantidad = item.cantidad;
          this.cartObj.id = aux_id;
          this.cartObj.country = item.country;
          this.cartObj.state = item.state;
          this.cartObj.postcode = item.postcode;
          this.cartObj.total = item.total;
        } else {
          this.cartObj.cart = [];
          this.cartObj.subtotal = 0;
          this.cartObj.cantidad = 0;
          this.cartObj.id = null;
          this.cartObj.country = '';
          this.cartObj.state = '';
          this.cartObj.postcode = '';
          this.cartObj.total = 0;
        }*/
        if (item) {
            var datos = {
                token: localStorage.getItem('luvas_token'),
                cart: JSON.stringify(item.cart)
            };
            this.http.post(this.rutaService.getRutaApi() + 'productos/verificar/pedido', datos)
                .toPromise()
                .then(function (data) {
                _this.products = data;
                _this.consultProducts(_this.products);
            }, function (msg) {
                _this.cartObj.cart = [];
                _this.cartObj.subtotal = 0;
                _this.cartObj.cantidad = 0;
                _this.cartObj.id = aux_id;
                _this.cartObj.country = '';
                _this.cartObj.state = '';
                _this.cartObj.postcode = '';
                _this.cartObj.total = 0;
            });
        }
        else {
            this.cartObj.cart = [];
            this.cartObj.subtotal = 0;
            this.cartObj.cantidad = 0;
            this.cartObj.id = null;
            this.cartObj.country = '';
            this.cartObj.state = '';
            this.cartObj.postcode = '';
            this.cartObj.total = 0;
        }
    }
    CartService.prototype.consultProducts = function (products) {
        var _this = this;
        if (this.cartObj.cart != '') {
            for (var i = 0; i < this.cartObj.cart.length; ++i) {
                var index = products.productos.findIndex(function (items) { return items.colores[0].atributos[0].id === _this.cartObj.cart[i].colores[0].atributos[0].id; });
                if (index !== -1) {
                    products.productos[index].cantidad = this.cartObj.cart[i].cantidad;
                    this.cartObj.cart[i] = products.productos[index];
                    this.updateProduct(this.cartObj.cart[i], this.cartObj.cart[i].cantidad /*.toString()*/).subscribe(function (success) {
                    }, function (error) {
                    });
                }
                else {
                    this.removeProduct(this.cartObj.cart[i]).subscribe(function (success) {
                    }, function (error) {
                    });
                }
            }
        }
    };
    CartService.prototype.getProducts = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            var carrito = localStorage.getItem('luvas_cart');
            _this.cartObj = JSON.parse(carrito);
            if (_this.cartObj && _this.cartObj.cart) {
                var datos = {
                    token: localStorage.getItem('luvas_token'),
                    cart: JSON.stringify(_this.cartObj.cart)
                };
                _this.http.post(_this.rutaService.getRutaApi() + 'productos/verificar/pedido', datos)
                    .toPromise()
                    .then(function (data) {
                    _this.products = data;
                    _this.consultProducts(_this.products);
                    observer.next(_this.cartObj);
                    observer.complete();
                }, function (msg) {
                    var user = localStorage.getItem('luvas_user');
                    var user_id = JSON.parse(user);
                    var aux_id = null;
                    if (user_id) {
                        aux_id = user_id.id;
                    }
                    _this.cartObj = {};
                    _this.cartObj.cart = [];
                    _this.cartObj.subtotal = 0;
                    _this.cartObj.cantidad = 0;
                    _this.cartObj.id = aux_id;
                    _this.cartObj.country = '';
                    _this.cartObj.state = '';
                    _this.cartObj.postcode = '';
                    _this.cartObj.total = 0;
                    observer.next(_this.cartObj);
                    observer.complete();
                });
            }
            else {
                var user = localStorage.getItem('luvas_user');
                var user_id = JSON.parse(user);
                var aux_id = null;
                if (user_id) {
                    aux_id = user_id.id;
                }
                _this.cartObj = {};
                _this.cartObj.cart = [];
                _this.cartObj.subtotal = 0;
                _this.cartObj.cantidad = 0;
                _this.cartObj.id = aux_id;
                _this.cartObj.country = '';
                _this.cartObj.state = '';
                _this.cartObj.postcode = '';
                _this.cartObj.total = 0;
                observer.next(_this.cartObj);
                observer.complete();
            }
        });
    };
    CartService.prototype.addProduct = function (product, quantity) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            if (_this.cartObj.cart.some(function (x) { return x.colores[0].atributos[0].id === product.colores[0].atributos[0].id; })) {
                observer.error('Este producto ya está incluido en el pedido');
                observer.complete();
            }
            else {
                product.cantidad = quantity;
                _this.cartObj.cart.push(product);
                _this.cartObj.cantidad += 1;
                _this.cartObj.subtotal += parseFloat(product.colores[0].atributos[0].precio) * quantity;
                var carrito = JSON.stringify(_this.cartObj);
                localStorage.setItem('luvas_cart', carrito);
                observer.next(_this.cartObj);
                observer.complete();
            }
        });
    };
    CartService.prototype.updateProduct = function (product, quantity) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            if (_this.cartObj.cart.some(function (x) { return x.colores[0].atributos[0].id === product.colores[0].atributos[0].id; })) {
                if (quantity > product.colores[0].atributos[0].cantidad) {
                    product.cantidad = product.colores[0].atributos[0].cantidad;
                    var quantity_aux = product.cantidad;
                }
                else {
                    product.cantidad = quantity;
                    var quantity_aux = product.cantidad;
                }
                _this.cartObj.subtotal = 0;
                _this.cartObj.cart.forEach(function (elem) {
                    if (elem.colores[0].atributos[0].id === product.colores[0].atributos[0].id) {
                        _this.cartObj.subtotal += parseFloat(product.colores[0].atributos[0].precio) * quantity_aux;
                    }
                    else {
                        _this.cartObj.subtotal += parseFloat(elem.colores[0].atributos[0].precio) * elem.cantidad;
                    }
                });
                if (isNaN(_this.cartObj.subtotal)) {
                    observer.error('Ingrese una cantidad válida');
                    observer.complete();
                }
                else {
                    var carrito = JSON.stringify(_this.cartObj);
                    localStorage.setItem('luvas_cart', carrito);
                    observer.next(_this.cartObj);
                    observer.complete();
                }
            }
            else {
                observer.error('Este producto no está en el pedido');
                observer.complete();
            }
        });
    };
    CartService.prototype.getCartContents = function () {
        if (this.cartObj && this.cartObj.cart) {
            return this.cartObj.cart;
        }
        else {
            var aux = [];
            return aux;
        }
    };
    CartService.prototype.getCartCount = function () {
        if (this.cartObj && this.cartObj.cantidad) {
            return this.cartObj.cantidad;
        }
        else {
            return 0;
        }
    };
    CartService.prototype.getCartSubTotal = function () {
        if (this.cartObj && this.cartObj.subtotal) {
            return this.cartObj.subtotal.toFixed(2);
        }
        else {
            return 0;
        }
    };
    CartService.prototype.getCartId = function () {
        var user = localStorage.getItem('luvas_user');
        var user_id = JSON.parse(user);
        var aux_id = null;
        if (user_id) {
            aux_id = user_id.id;
        }
        return aux_id;
    };
    CartService.prototype.getCartCountry = function () {
        return this.cartObj.country;
    };
    CartService.prototype.getState = function () {
        return this.cartObj.state;
    };
    CartService.prototype.getPostcode = function () {
        return this.cartObj.postcode;
    };
    CartService.prototype.removeProduct = function (product) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            var index = _this.cartObj.cart.findIndex(function (item) { return item.colores[0].atributos[0].id === product.colores[0].atributos[0].id; });
            if (index !== -1) {
                _this.cartObj.cart.splice(index, 1);
                _this.cartObj.cantidad -= 1;
                _this.cartObj.subtotal -= parseFloat(product.colores[0].atributos[0].precio) * product.cantidad;
                console.log(_this.cartObj.subtotal);
                if (_this.cartObj.cantidad === 0) {
                    //localStorage.setItem('luvas_cart', '');
                    _this.deleteCar();
                }
                else {
                    var carrito = JSON.stringify(_this.cartObj);
                    localStorage.setItem('luvas_cart', carrito);
                }
                observer.next(_this.cartObj);
                observer.complete();
            }
            else {
                observer.error('Este producto no está incluido en el pedido');
                observer.complete();
            }
        });
    };
    CartService.prototype.setCountry = function (country) {
        this.cartObj.country = country;
        var carrito = JSON.stringify(this.cartObj);
        localStorage.setItem('luvas_cart', carrito);
    };
    CartService.prototype.setState = function (state) {
        this.cartObj.state = state;
        var carrito = JSON.stringify(this.cartObj);
        localStorage.setItem('luvas_cart', carrito);
    };
    CartService.prototype.setPostcode = function (postcode) {
        this.cartObj.postcode = postcode;
        var carrito = JSON.stringify(this.cartObj);
        localStorage.setItem('luvas_cart', carrito);
    };
    CartService.prototype.setTotal = function (subtotal) {
        this.cartObj.total = (parseFloat(subtotal)).toFixed(2);
        var carrito = JSON.stringify(this.cartObj);
        localStorage.setItem('luvas_cart', carrito);
    };
    CartService.prototype.deleteCar = function () {
        this.cartObj.cart = [];
        this.cartObj.subtotal = 0;
        this.cartObj.cantidad = 0;
        this.cartObj.country = '';
        this.cartObj.state = '';
        this.cartObj.postcode = '';
        this.cartObj.total = 0;
        var carrito = JSON.stringify(this.cartObj);
        localStorage.setItem('luvas_cart', carrito);
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__ruta_service_ruta_service__["a" /* RutaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ruta_service_ruta_service__["a" /* RutaService */]) === "function" && _c || Object])
    ], CartService);
    return CartService;
    var _a, _b, _c;
}());

//# sourceMappingURL=cart.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/ruta-service/ruta.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RutaService; });
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

var RutaService = /** @class */ (function () {
    function RutaService() {
        //Local freddy
        //public api_base = 'http://localhost/luvasxshop/luvasAPI/public/';
        //public images_base = 'http://localhost/luvasxshop/luvasAPI/public/images_uploads/';
        //Remoto cPanel 
        this.api_base = 'http://massagegraf.com/beau/luvasAPI/public/';
        this.images_base = 'http://massagegraf.com/beau/luvasAPI/public/images_uploads/';
    }
    RutaService.prototype.getRutaApi = function () {
        return this.api_base;
    };
    RutaService.prototype.getRutaImages = function () {
        return this.images_base;
    };
    RutaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], RutaService);
    return RutaService;
}());

//# sourceMappingURL=ruta.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map