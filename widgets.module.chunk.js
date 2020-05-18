webpackJsonp(["widgets.module"],{

/***/ "../../../../../src/app/views/widgets/widgets-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widgets_component__ = __webpack_require__("../../../../../src/app/views/widgets/widgets.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__widgets_component__["a" /* WidgetsComponent */],
        data: {
            title: 'Widgets'
        }
    }
];
var WidgetsRoutingModule = /** @class */ (function () {
    function WidgetsRoutingModule() {
    }
    WidgetsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], WidgetsRoutingModule);
    return WidgetsRoutingModule;
}());

//# sourceMappingURL=widgets-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/widgets/widgets.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card text-white bg-primary\">\r\n        <div class=\"card-body pb-0\">\r\n          <div class=\"btn-group float-right\" dropdown>\r\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\r\n              <i class=\"icon-settings\"></i>\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </div>\r\n          <h4 class=\"mb-0\">9.823</h4>\r\n          <p>Members online</p>\r\n        </div>\r\n        <div class=\"chart-wrapper px-3\" style=\"height:70px;\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"lineChart1Data\"\r\n          [labels]=\"lineChart1Labels\"\r\n          [options]=\"lineChart1Options\"\r\n          [colors]=\"lineChart1Colours\"\r\n          [legend]=\"lineChart1Legend\"\r\n          [chartType]=\"lineChart1Type\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card text-white bg-info\">\r\n        <div class=\"card-body pb-0\">\r\n          <button type=\"button\" class=\"btn btn-transparent p-0 float-right\">\r\n            <i class=\"icon-location-pin\"></i>\r\n          </button>\r\n          <h4 class=\"mb-0\">9.823</h4>\r\n          <p>Members online</p>\r\n        </div>\r\n        <div class=\"chart-wrapper px-3\" style=\"height:70px;\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"lineChart2Data\"\r\n          [labels]=\"lineChart2Labels\"\r\n          [options]=\"lineChart2Options\"\r\n          [colors]=\"lineChart2Colours\"\r\n          [legend]=\"lineChart2Legend\"\r\n          [chartType]=\"lineChart2Type\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card text-white bg-warning\">\r\n        <div class=\"card-body pb-0\">\r\n          <div class=\"btn-group float-right\" dropdown>\r\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\r\n              <i class=\"icon-settings\"></i>\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </div>\r\n          <h4 class=\"mb-0\">9.823</h4>\r\n          <p>Members online</p>\r\n        </div>\r\n        <div class=\"chart-wrapper\" style=\"height:70px;\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"lineChart3Data\"\r\n          [labels]=\"lineChart3Labels\"\r\n          [options]=\"lineChart3Options\"\r\n          [colors]=\"lineChart3Colours\"\r\n          [legend]=\"lineChart3Legend\"\r\n          [chartType]=\"lineChart3Type\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card text-white bg-danger\">\r\n        <div class=\"card-body pb-0\">\r\n          <div class=\"btn-group float-right\" dropdown>\r\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\r\n              <i class=\"icon-settings\"></i>\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </div>\r\n          <h4 class=\"mb-0\">9.823</h4>\r\n          <p>Members online</p>\r\n        </div>\r\n        <div class=\"chart-wrapper px-3\" style=\"height:70px;\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"barChart1Data\"\r\n          [labels]=\"barChart1Labels\"\r\n          [options]=\"barChart1Options\"\r\n          [colors]=\"barChart1Colours\"\r\n          [legend]=\"barChart1Legend\"\r\n          [chartType]=\"barChart1Type\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header bg-primary\">\r\n          <div class=\"font-weight-bold\">\r\n            <span>SALE</span>\r\n            <span class=\"float-right\">$1.890,65</span>\r\n          </div>\r\n          <div>\r\n            <span>\r\n              <small>Today 6:43 AM</small>\r\n            </span>\r\n            <span class=\"float-right\">\r\n              <small>+432,50 (15,78%)</small>\r\n            </span>\r\n          </div>\r\n          <div class=\"chart-wrapper\" style=\"height:38px;\">\r\n            <canvas baseChart class=\"chart\"\r\n            [datasets]=\"lineChart4Data\"\r\n            [labels]=\"lineChart4Labels\"\r\n            [options]=\"lineChart4Options\"\r\n            [colors]=\"lineChart4Colours\"\r\n            [legend]=\"lineChart4Legend\"\r\n            [chartType]=\"lineChart4Type\"\r\n            (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\"></canvas>\r\n          </div>\r\n          <div class=\"chart-wrapper\" style=\"height:38px;\">\r\n            <canvas baseChart class=\"chart\"\r\n            [datasets]=\"barChart2Data\"\r\n            [labels]=\"barChart2Labels\"\r\n            [options]=\"barChart2Options\"\r\n            [colors]=\"barChart2Colours\"\r\n            [legend]=\"barChart2Legend\"\r\n            [chartType]=\"barChart2Type\"\r\n            (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\"></canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header bg-danger\">\r\n          <div class=\"font-weight-bold\">\r\n            <span>SALE</span>\r\n            <span class=\"float-right\">$1.890,65</span>\r\n          </div>\r\n          <div>\r\n            <span>\r\n              <small>Today 6:43 AM</small>\r\n            </span>\r\n            <span class=\"float-right\">\r\n              <small>+432,50 (15,78%)</small>\r\n            </span>\r\n          </div>\r\n          <div class=\"chart-wrapper\" style=\"height:38px;\">\r\n            <canvas baseChart class=\"chart\"\r\n            [datasets]=\"lineChart4Data\"\r\n            [labels]=\"lineChart4Labels\"\r\n            [options]=\"lineChart4Options\"\r\n            [colors]=\"lineChart4Colours\"\r\n            [legend]=\"lineChart4Legend\"\r\n            [chartType]=\"lineChart4Type\"\r\n            (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\"></canvas>\r\n          </div>\r\n          <div class=\"chart-wrapper\" style=\"height:38px;\">\r\n            <canvas baseChart class=\"chart\"\r\n            [datasets]=\"barChart2Data\"\r\n            [labels]=\"barChart2Labels\"\r\n            [options]=\"barChart2Options\"\r\n            [colors]=\"barChart2Colours\"\r\n            [legend]=\"barChart2Legend\"\r\n            [chartType]=\"barChart2Type\"\r\n            (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\"></canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header bg-success\">\r\n          <div class=\"font-weight-bold\">\r\n            <span>SALE</span>\r\n            <span class=\"float-right\">$1.890,65</span>\r\n          </div>\r\n          <div>\r\n            <span>\r\n              <small>Today 6:43 AM</small>\r\n            </span>\r\n            <span class=\"float-right\">\r\n              <small>+432,50 (15,78%)</small>\r\n            </span>\r\n          </div>\r\n          <div class=\"chart-wrapper\" style=\"height:38px;\">\r\n            <canvas baseChart class=\"chart\"\r\n            [datasets]=\"lineChart4Data\"\r\n            [labels]=\"lineChart4Labels\"\r\n            [options]=\"lineChart4Options\"\r\n            [colors]=\"lineChart4Colours\"\r\n            [legend]=\"lineChart4Legend\"\r\n            [chartType]=\"lineChart4Type\"\r\n            (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\"></canvas>\r\n          </div>\r\n          <div class=\"chart-wrapper\" style=\"height:38px;\">\r\n            <canvas baseChart class=\"chart\"\r\n            [datasets]=\"barChart2Data\"\r\n            [labels]=\"barChart2Labels\"\r\n            [options]=\"barChart2Options\"\r\n            [colors]=\"barChart2Colours\"\r\n            [legend]=\"barChart2Legend\"\r\n            [chartType]=\"barChart2Type\"\r\n            (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\"></canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header bg-warning\">\r\n          <div class=\"font-weight-bold\">\r\n            <span>SALE</span>\r\n            <span class=\"float-right\">$1.890,65</span>\r\n          </div>\r\n          <div>\r\n            <span>\r\n              <small>Today 6:43 AM</small>\r\n            </span>\r\n            <span class=\"float-right\">\r\n              <small>+432,50 (15,78%)</small>\r\n            </span>\r\n          </div>\r\n          <div class=\"chart-wrapper\" style=\"height:38px;\">\r\n            <canvas baseChart class=\"chart\"\r\n            [datasets]=\"lineChart4Data\"\r\n            [labels]=\"lineChart4Labels\"\r\n            [options]=\"lineChart4Options\"\r\n            [colors]=\"lineChart4Colours\"\r\n            [legend]=\"lineChart4Legend\"\r\n            [chartType]=\"lineChart4Type\"\r\n            (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\"></canvas>\r\n          </div>\r\n          <div class=\"chart-wrapper\" style=\"height:38px;\">\r\n            <canvas baseChart class=\"chart\"\r\n            [datasets]=\"barChart2Data\"\r\n            [labels]=\"barChart2Labels\"\r\n            [options]=\"barChart2Options\"\r\n            [colors]=\"barChart2Colours\"\r\n            [legend]=\"barChart2Legend\"\r\n            [chartType]=\"barChart2Type\"\r\n            (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\"></canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"h4 m-0\">89.9%</div>\r\n          <div>Lorem ipsum...</div>\r\n          <div class=\"progress progress-xs my-3\">\r\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"h4 m-0\">12.124</div>\r\n          <div>Lorem ipsum...</div>\r\n          <div class=\"progress progress-xs my-3\">\r\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"h4 m-0\">$98.111,00</div>\r\n          <div>Lorem ipsum...</div>\r\n          <div class=\"progress progress-xs my-3\">\r\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"h4 m-0\">2 TB</div>\r\n          <div>Lorem ipsum...</div>\r\n          <div class=\"progress progress-xs my-3\">\r\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card text-white bg-primary\">\r\n        <div class=\"card-body\">\r\n          <div class=\"h4 m-0\">89.9%</div>\r\n          <div>Lorem ipsum...</div>\r\n          <div class=\"progress progress-white progress-xs my-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card text-white bg-warning\">\r\n        <div class=\"card-body\">\r\n          <div class=\"h4 m-0\">12.124</div>\r\n          <div>Lorem ipsum...</div>\r\n          <div class=\"progress progress-white progress-xs my-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card text-white bg-danger\">\r\n        <div class=\"card-body\">\r\n          <div class=\"h4 m-0\">$98.111,00</div>\r\n          <div>Lorem ipsum...</div>\r\n          <div class=\"progress progress-white progress-xs my-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card text-white bg-info\">\r\n        <div class=\"card-body\">\r\n          <div class=\"h4 m-0\">2 TB</div>\r\n          <div>Lorem ipsum...</div>\r\n          <div class=\"progress progress-white progress-xs my-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2 col-sm-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body text-center\">\r\n          <div class=\"text-muted small text-uppercase font-weight-bold\">Title</div>\r\n          <div class=\"h2 py-3\">1,123</div>\r\n          <div class=\"chart-wrapper \" style=\"height:40px;width:80px;\">\r\n            <canvas baseChart class=\"chart\"\r\n            [datasets]=\"barChart3Data\"\r\n            [labels]=\"barChart3Labels\"\r\n            [options]=\"barChart3Options\"\r\n            [colors]=\"barChart3Primary\"\r\n            [legend]=\"barChart3Legend\"\r\n            [chartType]=\"barChart3Type\"\r\n            (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\"></canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-2 col-sm-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body text-center\">\r\n          <div class=\"text-muted small text-uppercase font-weight-bold\">Title</div>\r\n          <div class=\"h2 py-3\">1,123</div>\r\n          <div class=\"chart-wrapper \" style=\"height:40px;width:80px;\">\r\n            <canvas baseChart class=\"chart\"\r\n            [datasets]=\"barChart3Data\"\r\n            [labels]=\"barChart3Labels\"\r\n            [options]=\"barChart3Options\"\r\n            [colors]=\"barChart3Danger\"\r\n            [legend]=\"barChart3Legend\"\r\n            [chartType]=\"barChart3Type\"\r\n            (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\"></canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-2 col-sm-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body text-center\">\r\n          <div class=\"text-muted small text-uppercase font-weight-bold\">Title</div>\r\n          <div class=\"h2 py-3\">1,123</div>\r\n          <div class=\"chart-wrapper \" style=\"height:40px;width:80px;\">\r\n            <canvas baseChart class=\"chart\"\r\n            [datasets]=\"barChart3Data\"\r\n            [labels]=\"barChart3Labels\"\r\n            [options]=\"barChart3Options\"\r\n            [colors]=\"barChart3Success\"\r\n            [legend]=\"barChart3Legend\"\r\n            [chartType]=\"barChart3Type\"\r\n            (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\"></canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-2 col-sm-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body text-center\">\r\n          <div class=\"text-muted small text-uppercase font-weight-bold\">Title</div>\r\n          <div class=\"h2 py-3\">1,123</div>\r\n          <div class=\"chart-wrapper \" style=\"height:40px;width:80px;\">\r\n            <canvas baseChart class=\"chart\"\r\n            [datasets]=\"lineChart5Data\"\r\n            [labels]=\"lineChart5Labels\"\r\n            [options]=\"lineChart5Options\"\r\n            [colors]=\"lineChart5Info\"\r\n            [legend]=\"lineChart5Legend\"\r\n            [chartType]=\"lineChart5Type\"\r\n            (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\"></canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-2 col-sm-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body text-center\">\r\n          <div class=\"text-muted small text-uppercase font-weight-bold\">Title</div>\r\n          <div class=\"h2 py-3\">1,123</div>\r\n          <div class=\"chart-wrapper \" style=\"height:40px;width:80px;\">\r\n            <canvas baseChart class=\"chart\"\r\n            [datasets]=\"lineChart5Data\"\r\n            [labels]=\"lineChart5Labels\"\r\n            [options]=\"lineChart5Options\"\r\n            [colors]=\"lineChart5Success\"\r\n            [legend]=\"lineChart5Legend\"\r\n            [chartType]=\"lineChart5Type\"\r\n            (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\"></canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-2 col-sm-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body text-center\">\r\n          <div class=\"text-muted small text-uppercase font-weight-bold\">Title</div>\r\n          <div class=\"h2 py-3\">1,123</div>\r\n          <div class=\"chart-wrapper \" style=\"height:40px;width:80px;\">\r\n            <canvas baseChart class=\"chart\"\r\n            [datasets]=\"lineChart5Data\"\r\n            [labels]=\"lineChart5Labels\"\r\n            [options]=\"lineChart5Options\"\r\n            [colors]=\"lineChart5Warning\"\r\n            [legend]=\"lineChart5Legend\"\r\n            [chartType]=\"lineChart5Type\"\r\n            (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\"></canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n  <div class=\"row\">\r\n    <div class=\"col-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body p-3 clearfix\">\r\n          <i class=\"fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left\"></i>\r\n          <div class=\"h5 text-primary mb-0 mt-2\">$1.999,50</div>\r\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body p-3 clearfix\">\r\n          <i class=\"fa fa-laptop bg-info p-3 font-2xl mr-3 float-left\"></i>\r\n          <div class=\"h5 text-info mb-0 mt-2\">$1.999,50</div>\r\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body p-3 clearfix\">\r\n          <i class=\"fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left\"></i>\r\n          <div class=\"h5 text-warning mb-0 mt-2\">$1.999,50</div>\r\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body p-3 clearfix\">\r\n          <i class=\"fa fa-bell bg-danger p-3 font-2xl mr-3 float-left\"></i>\r\n          <div class=\"h5 text-danger mb-0 mt-2\">$1.999,50</div>\r\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body p-3 clearfix\">\r\n          <i class=\"fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left\"></i>\r\n          <div class=\"h5 text-primary mb-0 mt-2\">$1.999,50</div>\r\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\r\n        </div>\r\n        <div class=\"card-footer px-3 py-2\">\r\n          <a class=\"font-weight-bold font-xs btn-block text-muted\" href=\"#\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body p-3 clearfix\">\r\n          <i class=\"fa fa-laptop bg-info p-3 font-2xl mr-3 float-left\"></i>\r\n          <div class=\"h5 text-info mb-0 mt-2\">$1.999,50</div>\r\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\r\n        </div>\r\n        <div class=\"card-footer px-3 py-2\">\r\n          <a class=\"font-weight-bold font-xs btn-block text-muted\" href=\"#\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body p-3 clearfix\">\r\n          <i class=\"fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left\"></i>\r\n          <div class=\"h5 text-warning mb-0 mt-2\">$1.999,50</div>\r\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\r\n        </div>\r\n        <div class=\"card-footer px-3 py-2\">\r\n          <a class=\"font-weight-bold font-xs btn-block text-muted\" href=\"#\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body p-3 clearfix\">\r\n          <i class=\"fa fa-bell bg-danger p-3 font-2xl mr-3 float-left\"></i>\r\n          <div class=\"h5 text-danger mb-0 mt-2\">$1.999,50</div>\r\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\r\n        </div>\r\n        <div class=\"card-footer px-3 py-2\">\r\n          <a class=\"font-weight-bold font-xs btn-block text-muted\" href=\"#\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n  </div>\r\n  <!--/.row-->\r\n  <div class=\"row\">\r\n    <div class=\"col-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body p-0 clearfix\">\r\n          <i class=\"fa fa-cogs bg-primary p-4 font-2xl mr-3 float-left\"></i>\r\n          <div class=\"h5 text-primary mb-0 pt-3\">$1.999,50</div>\r\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body p-0 clearfix\">\r\n          <i class=\"fa fa-laptop bg-info p-4 font-2xl mr-3 float-left\"></i>\r\n          <div class=\"h5 text-info mb-0 pt-3\">$1.999,50</div>\r\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body p-0 clearfix\">\r\n          <i class=\"fa fa-moon-o bg-warning p-4 font-2xl mr-3 float-left\"></i>\r\n          <div class=\"h5 text-warning mb-0 pt-3\">$1.999,50</div>\r\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body p-0 clearfix\">\r\n          <i class=\"fa fa-bell bg-danger p-4 font-2xl mr-3 float-left\"></i>\r\n          <div class=\"h5 text-danger mb-0 pt-3\">$1.999,50</div>\r\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body p-0 clearfix\">\r\n          <i class=\"fa fa-cogs bg-primary p-4 px-5 font-2xl mr-3 float-left\"></i>\r\n          <div class=\"h5 text-primary mb-0 pt-3\">$1.999,50</div>\r\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body p-0 clearfix\">\r\n          <i class=\"fa fa-laptop bg-info p-4 px-5 font-2xl mr-3 float-left\"></i>\r\n          <div class=\"h5 text-info mb-0 pt-3\">$1.999,50</div>\r\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body p-0 clearfix\">\r\n          <i class=\"fa fa-moon-o bg-warning p-4 px-5 font-2xl mr-3 float-left\"></i>\r\n          <div class=\"h5 text-warning mb-0 pt-3\">$1.999,50</div>\r\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body p-0 clearfix\">\r\n          <i class=\"fa fa-bell bg-danger p-4 px-5 font-2xl mr-3 float-left\"></i>\r\n          <div class=\"h5 text-danger mb-0 pt-3\">$1.999,50</div>\r\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n  </div>\r\n  <!--/.row-->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 col-sm-6\">\r\n      <div class=\"social-box facebook\">\r\n        <i class=\"fa fa-facebook\"></i>\r\n        <ul>\r\n          <li>\r\n            <strong>89k</strong>\r\n            <span>friends</span>\r\n          </li>\r\n          <li>\r\n            <strong>459</strong>\r\n            <span>feeds</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!--/social-box-->\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-3 col-sm-6\">\r\n      <div class=\"social-box twitter\">\r\n        <i class=\"fa fa-twitter\"></i>\r\n        <ul>\r\n          <li>\r\n            <strong>973k</strong>\r\n            <span>followers</span>\r\n          </li>\r\n          <li>\r\n            <strong>1.792</strong>\r\n            <span>tweets</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!--/social-box-->\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-3 col-sm-6\">\r\n      <div class=\"social-box linkedin\">\r\n        <i class=\"fa fa-linkedin\"></i>\r\n        <ul>\r\n          <li>\r\n            <strong>500+</strong>\r\n            <span>contacts</span>\r\n          </li>\r\n          <li>\r\n            <strong>292</strong>\r\n            <span>feeds</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!--/social-box-->\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-3 col-sm-6\">\r\n      <div class=\"social-box google-plus\">\r\n        <i class=\"fa fa-google-plus\"></i>\r\n        <ul>\r\n          <li>\r\n            <strong>894</strong>\r\n            <span>followers</span>\r\n          </li>\r\n          <li>\r\n            <strong>92</strong>\r\n            <span>circles</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!--/social-box-->\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n\r\n  <div class=\"card-group\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"h1 text-muted text-right mb-4\">\r\n          <i class=\"icon-people\"></i>\r\n        </div>\r\n        <div class=\"h4 mb-0\">87.500</div>\r\n        <small class=\"text-muted text-uppercase font-weight-bold\">Visitors</small>\r\n        <div class=\"progress progress-xs mt-3 mb-0\">\r\n          <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"h1 text-muted text-right mb-4\">\r\n          <i class=\"icon-user-follow\"></i>\r\n        </div>\r\n        <div class=\"h4 mb-0\">385</div>\r\n        <small class=\"text-muted text-uppercase font-weight-bold\">New Clients</small>\r\n        <div class=\"progress progress-xs mt-3 mb-0\">\r\n          <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"h1 text-muted text-right mb-4\">\r\n          <i class=\"icon-basket-loaded\"></i>\r\n        </div>\r\n        <div class=\"h4 mb-0\">1238</div>\r\n        <small class=\"text-muted text-uppercase font-weight-bold\">Products sold</small>\r\n        <div class=\"progress progress-xs mt-3 mb-0\">\r\n          <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"h1 text-muted text-right mb-4\">\r\n          <i class=\"icon-pie-chart\"></i>\r\n        </div>\r\n        <div class=\"h4 mb-0\">28%</div>\r\n        <small class=\"text-muted text-uppercase font-weight-bold\">Returning Visitors</small>\r\n        <div class=\"progress progress-xs mt-3 mb-0\">\r\n          <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"h1 text-muted text-right mb-4\">\r\n          <i class=\"icon-speedometer\"></i>\r\n        </div>\r\n        <div class=\"h4 mb-0\">5:34:11</div>\r\n        <small class=\"text-muted text-uppercase font-weight-bold\">Avg. Time</small>\r\n        <div class=\"progress progress-xs mt-3 mb-0\">\r\n          <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-md-2\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"h1 text-muted text-right mb-4\">\r\n            <i class=\"icon-people\"></i>\r\n          </div>\r\n          <div class=\"h4 mb-0\">87.500</div>\r\n          <small class=\"text-muted text-uppercase font-weight-bold\">Visitors</small>\r\n          <div class=\"progress progress-xs mt-3 mb-0\">\r\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-2\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"h1 text-muted text-right mb-4\">\r\n            <i class=\"icon-user-follow\"></i>\r\n          </div>\r\n          <div class=\"h4 mb-0\">385</div>\r\n          <small class=\"text-muted text-uppercase font-weight-bold\">New Clients</small>\r\n          <div class=\"progress progress-xs mt-3 mb-0\">\r\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-2\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"h1 text-muted text-right mb-4\">\r\n            <i class=\"icon-basket-loaded\"></i>\r\n          </div>\r\n          <div class=\"h4 mb-0\">1238</div>\r\n          <small class=\"text-muted text-uppercase font-weight-bold\">Products sold</small>\r\n          <div class=\"progress progress-xs mt-3 mb-0\">\r\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-2\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"h1 text-muted text-right mb-4\">\r\n            <i class=\"icon-pie-chart\"></i>\r\n          </div>\r\n          <div class=\"h4 mb-0\">28%</div>\r\n          <small class=\"text-muted text-uppercase font-weight-bold\">Returning Visitors</small>\r\n          <div class=\"progress progress-xs mt-3 mb-0\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-2\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"h1 text-muted text-right mb-4\">\r\n            <i class=\"icon-speedometer\"></i>\r\n          </div>\r\n          <div class=\"h4 mb-0\">5:34:11</div>\r\n          <small class=\"text-muted text-uppercase font-weight-bold\">Avg. Time</small>\r\n          <div class=\"progress progress-xs mt-3 mb-0\">\r\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-2\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"h1 text-muted text-right mb-4\">\r\n            <i class=\"icon-speech\"></i>\r\n          </div>\r\n          <div class=\"h4 mb-0\">972</div>\r\n          <small class=\"text-muted text-uppercase font-weight-bold\">Comments</small>\r\n          <div class=\"progress progress-xs mt-3 mb-0\">\r\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-md-2\">\r\n      <div class=\"card text-white bg-info\">\r\n        <div class=\"card-body\">\r\n          <div class=\"h1 text-muted text-right mb-4\">\r\n            <i class=\"icon-people\"></i>\r\n          </div>\r\n          <div class=\"h4 mb-0\">87.500</div>\r\n          <small class=\"text-muted text-uppercase font-weight-bold\">Visitors</small>\r\n          <div class=\"progress progress-white progress-xs mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-2\">\r\n      <div class=\"card text-white bg-success\">\r\n        <div class=\"card-body\">\r\n          <div class=\"h1 text-muted text-right mb-4\">\r\n            <i class=\"icon-user-follow\"></i>\r\n          </div>\r\n          <div class=\"h4 mb-0\">385</div>\r\n          <small class=\"text-muted text-uppercase font-weight-bold\">New Clients</small>\r\n          <div class=\"progress progress-white progress-xs mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-2\">\r\n      <div class=\"card text-white bg-warning\">\r\n        <div class=\"card-body\">\r\n          <div class=\"h1 text-muted text-right mb-4\">\r\n            <i class=\"icon-basket-loaded\"></i>\r\n          </div>\r\n          <div class=\"h4 mb-0\">1238</div>\r\n          <small class=\"text-muted text-uppercase font-weight-bold\">Products sold</small>\r\n          <div class=\"progress progress-white progress-xs mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-2\">\r\n      <div class=\"card text-white bg-primary\">\r\n        <div class=\"card-body\">\r\n          <div class=\"h1 text-muted text-right mb-4\">\r\n            <i class=\"icon-pie-chart\"></i>\r\n          </div>\r\n          <div class=\"h4 mb-0\">28%</div>\r\n          <small class=\"text-muted text-uppercase font-weight-bold\">Returning Visitors</small>\r\n          <div class=\"progress progress-white progress-xs mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-2\">\r\n      <div class=\"card text-white bg-danger\">\r\n        <div class=\"card-body\">\r\n          <div class=\"h1 text-muted text-right mb-4\">\r\n            <i class=\"icon-speedometer\"></i>\r\n          </div>\r\n          <div class=\"h4 mb-0\">5:34:11</div>\r\n          <small class=\"text-muted text-uppercase font-weight-bold\">Avg. Time</small>\r\n          <div class=\"progress progress-white progress-xs mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-2\">\r\n      <div class=\"card text-white bg-info\">\r\n        <div class=\"card-body\">\r\n          <div class=\"h1 text-muted text-right mb-4\">\r\n            <i class=\"icon-speech\"></i>\r\n          </div>\r\n          <div class=\"h4 mb-0\">972</div>\r\n          <small class=\"text-muted text-uppercase font-weight-bold\">Comments</small>\r\n          <div class=\"progress progress-white progress-xs mt-3\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/widgets/widgets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsComponent; });
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

var WidgetsComponent = /** @class */ (function () {
    function WidgetsComponent() {
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
        // lineChart4
        this.lineChart4Data = [
            {
                data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
                label: 'Series A'
            }
        ];
        this.lineChart4Labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.lineChart4Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        points: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: { point: { radius: 0 } },
            legend: {
                display: false
            }
        };
        this.lineChart4Colours = [
            {
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,255,255,.55)',
                borderWidth: 2
            }
        ];
        this.lineChart4Legend = false;
        this.lineChart4Type = 'line';
        // barChart2
        this.barChart2Data = [
            {
                data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
                label: 'Series A'
            }
        ];
        this.barChart2Labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.barChart2Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        barPercentage: 0.6,
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
            },
            legend: {
                display: false
            }
        };
        this.barChart2Colours = [
            {
                backgroundColor: 'rgba(0,0,0,.2)',
                borderWidth: 0
            }
        ];
        this.barChart2Legend = false;
        this.barChart2Type = 'bar';
        // barChart3
        this.barChart3Data = [
            {
                data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
                label: 'Series A'
            }
        ];
        this.barChart3Labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.barChart3Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            legend: {
                display: false
            }
        };
        this.barChart3Primary = [
            {
                backgroundColor: this.brandPrimary,
                borderColor: 'transparent',
                borderWidth: 1
            }
        ];
        this.barChart3Danger = [
            {
                backgroundColor: this.brandDanger,
                borderColor: 'transparent',
                borderWidth: 1
            }
        ];
        this.barChart3Success = [
            {
                backgroundColor: this.brandSuccess,
                borderColor: 'transparent',
                borderWidth: 1
            }
        ];
        this.barChart3Legend = false;
        this.barChart3Type = 'bar';
        // lineChart5
        this.lineChart5Data = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Series A'
            }
        ];
        this.lineChart5Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart5Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        points: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: { point: { radius: 0 } },
            legend: {
                display: false
            }
        };
        this.lineChart5Info = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandInfo,
                borderWidth: 2
            }
        ];
        this.lineChart5Success = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandInfo,
                borderWidth: 2
            }
        ];
        this.lineChart5Warning = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandWarning,
                borderWidth: 2
            }
        ];
        this.lineChart5Legend = false;
        this.lineChart5Type = 'line';
    }
    WidgetsComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    // convert Hex to RGBA
    // public convertHex(hex: string, opacity: number){
    //   hex = hex.replace('#','');
    //   let r = parseInt(hex.substring(0,2), 16);
    //   let g = parseInt(hex.substring(2,4), 16);
    //   let b = parseInt(hex.substring(4,6), 16);
    //
    //   let rgba = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    //   return rgba;
    // }
    // events
    WidgetsComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    WidgetsComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    WidgetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/widgets/widgets.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], WidgetsComponent);
    return WidgetsComponent;
}());

//# sourceMappingURL=widgets.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/widgets/widgets.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widgets_component__ = __webpack_require__("../../../../../src/app/views/widgets/widgets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__widgets_routing_module__ = __webpack_require__("../../../../../src/app/views/widgets/widgets-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var WidgetsModule = /** @class */ (function () {
    function WidgetsModule() {
    }
    WidgetsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__widgets_routing_module__["a" /* WidgetsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__widgets_component__["a" /* WidgetsComponent */]]
        })
    ], WidgetsModule);
    return WidgetsModule;
}());

//# sourceMappingURL=widgets.module.js.map

/***/ })

});
//# sourceMappingURL=widgets.module.chunk.js.map