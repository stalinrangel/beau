webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/views/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/views/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
        data: {
            title: 'Dashboard'
        }
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());

//# sourceMappingURL=dashboard-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alertaC\" *ngIf=\"alerta\">\r\n  <alert  [type]=\"alerta_tipo\" dismissible=\"true\" close=\"cerrarAlerta()\">\r\n    <strong>{{alerta_msg}}</strong> \r\n  </alert>\r\n</div>\r\n\r\n<div class=\"alertaC\" *ngIf=\"alerta_boton\">\r\n  <alert [type]=\"alerta_tipo\" >\r\n    <strong>{{alerta_msg}}</strong>\r\n    <button type=\"button\" class=\"btn btn4 btn-secondary\" (click)=\"ok_alerta()\">ok</button> \r\n  </alert>\r\n</div>\r\n\r\n<div class=\"animated fadeIn\" >\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card text-white bg-success\">\r\n        <div class=\"card-body\">\r\n          <div class=\"h1 text-muted text-right mb-4\">\r\n            <i class=\"icon-user-follow\"></i>\r\n          </div>\r\n          <div class=\"h4 mb-0\">{{contClientesHoy}}</div>\r\n          <small class=\"text-muted text-uppercase font-weight-bold\">Nuevos Usuarios</small>\r\n          <div class=\"progress progress-white progress-xs mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card text-white bg-primary\">\r\n        <div class=\"card-body\">\r\n          <div class=\"h1 text-muted text-right mb-4\">\r\n            <i class=\"icon-basket-loaded\"></i>\r\n          </div>\r\n          <div class=\"h4 mb-0\">{{contPedidosHoy}}</div>\r\n          <small class=\"text-muted text-uppercase font-weight-bold\">Pedidos</small>\r\n          <div class=\"progress progress-white progress-xs mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <!-- *ngxPermissionsOnly=\"['SUPER']\" colocar en el div-->\r\n    <div  class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card text-white bg-warning\">\r\n        <div class=\"card-body\">\r\n          <div class=\"h1 text-muted text-right mb-4\">\r\n            <i class=\"icon-grid\"></i>\r\n          </div>\r\n          <div class=\"h4 mb-0\">{{prodSolicitadosHoy}}</div>\r\n          <small class=\"text-muted text-uppercase font-weight-bold\">Productos Solicitados</small>\r\n          <div class=\"progress progress-white progress-xs mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <!-- *ngxPermissionsOnly=\"['ADMIN']\"  colocar en el div-->\r\n    <div  class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card text-white bg-danger\">\r\n        <div class=\"card-body\">\r\n          <div class=\"h1 text-muted text-right mb-4\">\r\n            <i class=\"icon-credit-card\"></i>\r\n          </div>\r\n          <div class=\"h4 mb-0\">${{dineroRecaudadoHoy}}</div>\r\n          <small class=\"text-muted text-uppercase font-weight-bold\">Dinero recaudado</small>\r\n          <div class=\"progress progress-white progress-xs mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-5\">\r\n          <h4 class=\"card-title mb-0\">Pedidos/Nuevos Usuarios</h4>\r\n          <div class=\"small text-muted\">{{fecha}}</div>\r\n        </div><!--/.col-->\r\n        <!-- <div class=\"col-sm-7 hidden-sm-down\">\r\n          <button type=\"button\" class=\"btn btn-primary float-right\"><i class=\"icon-cloud-download\"></i></button>\r\n          <div class=\"btn-toolbar float-right\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n            <div class=\"btn-group mr-3\" data-toggle=\"buttons\" aria-label=\"First group\">\r\n              <label class=\"btn btn-outline-secondary\">\r\n                <input type=\"radio\" name=\"options\" id=\"option1\"> Day\r\n              </label>\r\n              <label class=\"btn btn-outline-secondary active\">\r\n                <input type=\"radio\" name=\"options\" id=\"option2\" checked> Month\r\n              </label>\r\n              <label class=\"btn btn-outline-secondary\">\r\n                <input type=\"radio\" name=\"options\" id=\"option3\"> Year\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div> --><!--/.col-->\r\n      </div><!--/.row-->\r\n      <div class=\"chart-wrapper\" style=\"height:300px;margin-top:40px;\">\r\n        <canvas baseChart class=\"chart\"\r\n        [datasets]=\"mainChartData\"\r\n        [labels]=\"mainChartLabels\"\r\n        [options]=\"mainChartOptions\"\r\n        [colors]=\"mainChartColours\"\r\n        [legend]=\"mainChartLegend\"\r\n        [chartType]=\"mainChartType\"\r\n        (chartHover)=\"chartHovered($event)\"\r\n        (chartClick)=\"chartClicked($event)\"></canvas>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n      <ul>\r\n        <li>\r\n          <div class=\"text-muted\">Total </div>\r\n          <div *ngIf=\"totalPedidosMes == 1\"><strong>{{totalPedidosMes}} Pedido </strong></div>\r\n          <div *ngIf=\"totalPedidosMes != 1\"><strong>{{totalPedidosMes}} Pedidos </strong></div>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </li>\r\n        <li class=\"hidden-sm-down\">\r\n          <div class=\"text-muted\">Total </div>\r\n          <div *ngIf=\"totalClientesMes == 1\"><strong>{{totalClientesMes}} Usuario</strong></div>\r\n          <div *ngIf=\"totalClientesMes != 1\"><strong>{{totalClientesMes}} Usuarios</strong></div>\r\n          \r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </li>\r\n        <!--<li>\r\n          <div class=\"text-muted\">Pageviews</div>\r\n          <strong>78.706 Views (60%)</strong>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 60%\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </li>\r\n        <li class=\"hidden-sm-down\">\r\n          <div class=\"text-muted\">New Users</div>\r\n          <strong>22.123 Users (80%)</strong>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </li>\r\n        <li class=\"hidden-sm-down\">\r\n          <div class=\"text-muted\">Bounce Rate</div>\r\n          <strong>40.15%</strong>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </li> -->\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <!--/.card-->\r\n  \r\n  \r\n</div>\r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\r\n</div>\r\n\r\n  "

/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http, router, rutaService) {
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.loading = false;
        this.mostrar = false;
        this.fecha = this.getFecha();
        this.alerta = false;
        this.alerta_boton = false;
        this.brandPrimary = '#20a8d8';
        this.brandSuccess = '#4dbd74';
        this.brandInfo = '#63c2de';
        this.brandWarning = '#f8cb00';
        this.brandDanger = '#f86c6b';
        // dropdown buttons
        this.status = { isopen: false };
        // lineChart1
        this.lineChart1Data = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Series A'
            }
        ];
        this.lineChart1Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart1Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 40 - 5,
                            max: 84 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart1Colours = [
            {
                backgroundColor: this.brandPrimary,
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart1Legend = false;
        this.lineChart1Type = 'line';
        // lineChart2
        this.lineChart2Data = [
            {
                data: [1, 18, 9, 17, 34, 22, 11],
                label: 'Series A'
            }
        ];
        this.lineChart2Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart2Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 1 - 5,
                            max: 34 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    tension: 0.00001,
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart2Colours = [
            {
                backgroundColor: this.brandInfo,
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart2Legend = false;
        this.lineChart2Type = 'line';
        // lineChart3
        this.lineChart3Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'Series A'
            }
        ];
        this.lineChart3Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart3Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart3Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
            }
        ];
        this.lineChart3Legend = false;
        this.lineChart3Type = 'line';
        // barChart1
        this.barChart1Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
                label: 'Series A'
            }
        ];
        this.barChart1Labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
        this.barChart1Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        barPercentage: 0.6,
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            legend: {
                display: false
            }
        };
        this.barChart1Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.3)',
                borderWidth: 0
            }
        ];
        this.barChart1Legend = false;
        this.barChart1Type = 'bar';
        this.mainChartElements = 31;
        this.mainChartData1 = [];
        this.mainChartData2 = [];
        this.mainChartData3 = [];
        this.mainChartData = [
            {
                data: this.mainChartData1,
                label: 'Pedidos'
            },
            {
                data: this.mainChartData2,
                label: 'Usuarios'
            } /*,
            {
              data: this.mainChartData3,
              label: 'BEP'
            }*/
        ];
        /* tslint:disable:max-line-length */
        //public mainChartLabels: Array<any> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        //public mainChartLabels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
        this.mainChartLabels = [];
        this.mainChartColours = [
            {
                backgroundColor: this.convertHex(this.brandInfo, 10),
                borderColor: this.brandInfo,
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: 'transparent',
                borderColor: this.brandSuccess,
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: 'transparent',
                borderColor: this.brandDanger,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 1,
                borderDash: [8, 5]
            }
        ];
        this.mainChartLegend = false;
        this.mainChartType = 'line';
        // social box charts
        this.socialChartData1 = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Facebook'
            }
        ];
        this.socialChartData2 = [
            {
                data: [1, 13, 9, 17, 34, 41, 38],
                label: 'Twitter'
            }
        ];
        this.socialChartData3 = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'LinkedIn'
            }
        ];
        this.socialChartData4 = [
            {
                data: [35, 23, 56, 22, 97, 23, 64],
                label: 'Google+'
            }
        ];
        this.socialChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.socialChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.socialChartColours = [
            {
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff'
            }
        ];
        this.socialChartLegend = false;
        this.socialChartType = 'line';
        // sparkline charts
        this.sparklineChartData1 = [
            {
                data: [35, 23, 56, 22, 97, 23, 64],
                label: 'Clients'
            }
        ];
        this.sparklineChartData2 = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Clients'
            }
        ];
        this.sparklineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.sparklineChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.sparklineChartDefault = [
            {
                backgroundColor: 'transparent',
                borderColor: '#d1d4d7',
            }
        ];
        this.sparklineChartPrimary = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandPrimary,
            }
        ];
        this.sparklineChartInfo = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandInfo,
            }
        ];
        this.sparklineChartDanger = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandDanger,
            }
        ];
        this.sparklineChartWarning = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandWarning,
            }
        ];
        this.sparklineChartSuccess = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandSuccess,
            }
        ];
        this.sparklineChartLegend = false;
        this.sparklineChartType = 'line';
    }
    DashboardComponent.prototype.getFecha = function () {
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        if (m == 0) {
            return 'Enero ' + y;
        }
        else if (m == 1) {
            return 'Febrero ' + y;
        }
        else if (m == 2) {
            return 'Marzo ' + y;
        }
        else if (m == 3) {
            return 'Abril ' + y;
        }
        else if (m == 4) {
            return 'Mayo ' + y;
        }
        else if (m == 5) {
            return 'Junio ' + y;
        }
        else if (m == 6) {
            return 'Julio ' + y;
        }
        else if (m == 7) {
            return 'Agosto ' + y;
        }
        else if (m == 8) {
            return 'Septiembre ' + y;
        }
        else if (m == 9) {
            return 'Octubre ' + y;
        }
        else if (m == 10) {
            return 'Noviembre ' + y;
        }
        else if (m == 11) {
            return 'Diciembre ' + y;
        }
    };
    DashboardComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    // convert Hex to RGBA
    DashboardComponent.prototype.convertHex = function (hex, opacity) {
        hex = hex.replace('#', '');
        var r = parseInt(hex.substring(0, 2), 16);
        var g = parseInt(hex.substring(2, 4), 16);
        var b = parseInt(hex.substring(4, 6), 16);
        var rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';
        return rgba;
    };
    // events
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    // mainChart
    DashboardComponent.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    DashboardComponent.prototype.setMainChartOptions = function () {
        this.mainChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            drawOnChartArea: false,
                        } /*,
                        ticks: {
                          callback: function(value: any) {
                            return value.charAt(0);
                          }
                        }*/
                    }],
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            stepSize: Math.ceil(this.maxEjeY / 5),
                            max: this.maxEjeY
                        }
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkLogin();
        // generate random values for mainChart
        /*for (let i = 0; i <= this.mainChartElements; i++) {
          this.mainChartData1.push(this.random(50, 200));
          this.mainChartData2.push(this.random(80, 100));
          this.mainChartData3.push(65);
        }*/
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'dashboard?token=' + localStorage.getItem('luvas_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            //Grafico de lineas<----
            //Inicializar las labels
            for (var i = 0; i < _this.data.labelsPedidosMesActual.length; i++) {
                _this.mainChartLabels.push(_this.data.labelsPedidosMesActual[i]);
            }
            //Inicializar los pedidos y los clientes
            for (var i = 0; i < _this.data.pedidosMesActual.length; i++) {
                _this.mainChartData1.push(_this.data.pedidosMesActual[i].contador);
                _this.mainChartData2.push(_this.data.clientesMesActual[i].contador);
            }
            //Inicializar el maximo maxEjeY
            _this.maxEjeY = _this.data.maxEjeY;
            _this.setMainChartOptions();
            //Inicializar los totales
            _this.totalPedidosMes = _this.data.totalPedidosMes;
            _this.totalClientesMes = _this.data.totalClientesMes;
            //Grafico de lineas---->
            //Inicializar cantidades de hoy
            _this.contClientesHoy = _this.data.contClientesHoy;
            _this.contPedidosHoy = _this.data.contPedidosHoy;
            _this.prodSolicitadosHoy = _this.data.prodSolicitadosHoy;
            _this.dineroRecaudadoHoy = _this.data.dineroRecaudadoHoy;
            setTimeout(function () {
                _this.loading = false;
                setTimeout(function () { _this.mostrar = true; }, 100);
            }, 1000);
        }, function (msg) {
            msg.error = JSON.parse(msg.error);
            console.log(msg);
            //console.log(msg.error.error);
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
        });
    };
    DashboardComponent.prototype.checkLogin = function () {
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
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/dashboard/dashboard.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_ruta_service_ruta_service__["a" /* RutaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_ruta_service_ruta_service__["a" /* RutaService */]) === "function" && _c || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("../../../../../src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/views/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_alert__ = __webpack_require__("../../../../ngx-bootstrap/alert/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { Ng2UploaderModule } from 'ng2-uploader';

//import { NgxPermissionsModule } from 'ngx-permissions';
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                //NgxPermissionsModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot(),
                //Ng2UploaderModule,
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__dashboard_routing_module__["a" /* DashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */],
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
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map