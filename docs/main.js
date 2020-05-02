(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_product_list_product_list_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/product-list/product-list.module */ "./src/app/pages/product-list/product-list.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//module



// component

// routes

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _routes__WEBPACK_IMPORTED_MODULE_6__["AppRoutes"],
                _pages_product_list_product_list_module__WEBPACK_IMPORTED_MODULE_2__["ProductListModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/product-list/product-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/product-list/product-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/product-list/product-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/product-list/product-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"padding-all-20 bg-blue\">\n\n\t\t<div class=\"col-md-12\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<mat-form-field class=\"white font18 bold\" appearance=\"standart\">\n\t\t\t\t\t\t<input matInput (keyup)=\"filterOnChange($event.target.value, 'search')\" placeholder=\"Search Furniture\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-md-12\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t\t\t<mat-select (selectionChange)=\"filterOnChange($event.value, 'style')\" [value]=\"filterStyle\" placeholder=\"Furniture Style\" multiple>\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let style of furnitureStyles\" [value]=\"style\">\n\t\t\t\t\t\t\t\t{{ style }}\n\t\t\t\t\t\t\t</mat-option>\t\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t\t\t<mat-select (selectionChange)=\"filterOnChange($event.value, 'delivery')\" [value]=\"filterDeliveryDays\" placeholder=\"Delivery Time\" multiple>\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let deliver of deliveryDays\" [value]=\"deliver.value\">\n\t\t\t\t\t\t\t\t{{ deliver.label }}\n\t\t\t\t\t\t\t</mat-option>\t\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n\t<div class=\"padding-all-20\">\n\n\t\t<div class=\"col-md-12\">\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<div class=\"col-md-6 margin-vertical-10\" *ngFor=\"let product of filteredProductList;\">\n\t\t\t\t\t<div class=\"flex flex-column height-180 padding-all-20 full-width border-radius-5 box-shadow-1\">\n\t\t\t\t\t\t<div class=\"flex justify-between\">\n\t\t\t\t\t\t\t<div class=\"font18 bold\">{{ product?.name }}</div>\n\t\t\t\t\t\t\t<div class=\"orange bold\">{{ product?.price | currency }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"margin-top-15\">{{ product?.description.slice(0, 114) + '...' }}</div>\n\t\t\t\t\t\t<div class=\"blue-light margin-top-15\">{{ product?.furnitureStyle.join(', ') }}</div>\n\t\t\t\t\t\t<div class=\"blue text-underline bold flex justify-flex-end margin-top-15\">{{ product?.deliveryTime + ' days' }}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/pages/product-list/product-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/product-list/product-list.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/service */ "./src/app/pages/product-list/shared/service/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// service

var deliveryTimeOpt = [
    {
        label: '1 week',
        value: 7
    },
    {
        label: '2 weeks',
        value: 14
    },
    {
        label: '1 month',
        value: 30
    },
    {
        label: 'More than 1 month',
        value: 0
    }
];
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productListService) {
        this.productListService = productListService;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.subscibers = [];
        this.productList = [];
        this.filteredProductList = [];
        this.furnitureStyles = [];
        this.keyword = '';
        this.filterStyle = [];
        this.filterDeliveryTime = [];
        this.deliveryDays = deliveryTimeOpt;
        this.getProductList();
    };
    ProductListComponent.prototype.ngOnDestroy = function () {
        this.subscibers.forEach(function (each) { return each.unsubscribe(); });
    };
    ProductListComponent.prototype.getProductList = function () {
        var _this = this;
        var subs = this.productListService.getProductList()
            .subscribe(function (resp) {
            _this.productList = resp.products;
            _this.furnitureStyles = resp.furnitureStyles;
            _this.filterProduct();
        });
        this.subscibers.push(subs);
    };
    ProductListComponent.prototype.filterOnChange = function (value, type) {
        if (type == 'search')
            this.keyword = value;
        else if (type == 'style')
            this.filterStyle = value;
        else if (type == 'delivery')
            this.filterDeliveryTime = value;
        this.filterProduct();
    };
    ProductListComponent.prototype.filterProduct = function () {
        var _this = this;
        var tempProduct = this.productList;
        var keyword = this.keyword;
        var filterStyle = this.filterStyle;
        var filterDeliveryTime = this.filterDeliveryTime;
        if (keyword !== '' || filterStyle.length > 0 || filterDeliveryTime.length > 0) {
            var temp = [];
            temp = Object.keys(tempProduct).reduce(function (r, index) {
                if (keyword !== '' && filterStyle.length > 0 && filterDeliveryTime.length > 0) {
                    if (_this.isIncludeKeyword(tempProduct[index].name, keyword) && _this.compareStyle(filterStyle, tempProduct[index].furnitureStyle) && _this.compareDelivery(filterDeliveryTime, tempProduct[index].deliveryTime))
                        r.push(tempProduct[index]);
                }
                else if (keyword !== '' && filterStyle.length > 0) {
                    if (_this.isIncludeKeyword(tempProduct[index].name, keyword) && _this.compareStyle(filterStyle, tempProduct[index].furnitureStyle))
                        r.push(tempProduct[index]);
                }
                else if (keyword !== '' && filterDeliveryTime.length > 0) {
                    if (_this.isIncludeKeyword(tempProduct[index].name, keyword) && _this.compareDelivery(filterDeliveryTime, tempProduct[index].deliveryTime))
                        r.push(tempProduct[index]);
                }
                else if (filterStyle.length > 0 && filterDeliveryTime.length > 0) {
                    if (_this.compareStyle(filterStyle, tempProduct[index].furnitureStyle) && _this.compareDelivery(filterDeliveryTime, tempProduct[index].deliveryTime))
                        r.push(tempProduct[index]);
                }
                else if (keyword !== '') {
                    if (_this.isIncludeKeyword(tempProduct[index].name, keyword))
                        r.push(tempProduct[index]);
                }
                else if (filterStyle.length > 0) {
                    if (_this.compareStyle(filterStyle, tempProduct[index].furnitureStyle))
                        r.push(tempProduct[index]);
                }
                else if (filterDeliveryTime.length > 0) {
                    if (_this.compareDelivery(filterDeliveryTime, tempProduct[index].deliveryTime))
                        r.push(tempProduct[index]);
                }
                return r;
            }, []);
            this.filteredProductList = temp;
        }
        else {
            this.filteredProductList = this.productList;
        }
    };
    ProductListComponent.prototype.compareStyle = function (filterValue, productStyles) {
        var result = false;
        filterValue.forEach(function (eachFilter) { return productStyles.forEach(function (eachStyle) {
            if (eachFilter == eachStyle) {
                result = true;
            }
        }); });
        return result;
    };
    ProductListComponent.prototype.compareDelivery = function (filterValue, productDelivery) {
        var result = false;
        filterValue.forEach(function (eachFilter) {
            if (eachFilter == 0) {
                if (productDelivery > 30)
                    result = true;
            }
            else if (productDelivery <= eachFilter) {
                result = true;
            }
        });
        return result;
    };
    ProductListComponent.prototype.isIncludeKeyword = function (name, keyword) {
        return name.toLowerCase().includes(keyword.toLowerCase());
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/pages/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/pages/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_1__["ProductListService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/pages/product-list/product-list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/product-list/product-list.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListModule", function() { return ProductListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");
/* harmony import */ var _product_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-list.component */ "./src/app/pages/product-list/product-list.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./src/app/pages/product-list/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// component

// material

// routes

var ProductListModule = /** @class */ (function () {
    function ProductListModule() {
    }
    ProductListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _routes__WEBPACK_IMPORTED_MODULE_7__["ProductListRoutes"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [
                _product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"]
            ]
        })
    ], ProductListModule);
    return ProductListModule;
}());



/***/ }),

/***/ "./src/app/pages/product-list/routes.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/product-list/routes.ts ***!
  \**********************************************/
/*! exports provided: ProductListRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListRoutes", function() { return ProductListRoutes; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list.component */ "./src/app/pages/product-list/product-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// component

var routes = [{
        path: '',
        component: _product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"]
    }];
var ProductListRoutes = /** @class */ (function () {
    function ProductListRoutes() {
    }
    ProductListRoutes = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProductListRoutes);
    return ProductListRoutes;
}());



/***/ }),

/***/ "./src/app/pages/product-list/shared/mapper/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/product-list/shared/mapper/index.ts ***!
  \***********************************************************/
/*! exports provided: ProductListReqMapper, ProductMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_list_req_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-list-req.mapper */ "./src/app/pages/product-list/shared/mapper/product-list-req.mapper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductListReqMapper", function() { return _product_list_req_mapper__WEBPACK_IMPORTED_MODULE_0__["ProductListReqMapper"]; });

/* harmony import */ var _product_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.mapper */ "./src/app/pages/product-list/shared/mapper/product.mapper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductMapper", function() { return _product_mapper__WEBPACK_IMPORTED_MODULE_1__["ProductMapper"]; });





/***/ }),

/***/ "./src/app/pages/product-list/shared/mapper/product-list-req.mapper.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/product-list/shared/mapper/product-list-req.mapper.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductListReqMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListReqMapper", function() { return ProductListReqMapper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model */ "./src/app/pages/product-list/shared/model/index.ts");
/* harmony import */ var _product_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.mapper */ "./src/app/pages/product-list/shared/mapper/product.mapper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductListReqMapper = /** @class */ (function () {
    function ProductListReqMapper(productMapper) {
        this.productMapper = productMapper;
    }
    ProductListReqMapper.prototype.mappingDTOToModel = function (dto) {
        if (dto) {
            var model = new _model__WEBPACK_IMPORTED_MODULE_1__["ProductListReqModel"]();
            model.furnitureStyles = dto.furniture_styles;
            model.products = this.productMapper.mappingDTOsToModels(dto.products);
            return model;
        }
        else {
            console.error('ProductListReqMapper : Cannot mapping empty data');
            return null;
        }
    };
    ProductListReqMapper = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_product_mapper__WEBPACK_IMPORTED_MODULE_2__["ProductMapper"]])
    ], ProductListReqMapper);
    return ProductListReqMapper;
}());



/***/ }),

/***/ "./src/app/pages/product-list/shared/mapper/product.mapper.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/product-list/shared/mapper/product.mapper.ts ***!
  \********************************************************************/
/*! exports provided: ProductMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductMapper", function() { return ProductMapper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model */ "./src/app/pages/product-list/shared/model/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductMapper = /** @class */ (function () {
    function ProductMapper() {
    }
    ProductMapper.prototype.mappingDTOToModel = function (dto) {
        if (dto) {
            var model = new _model__WEBPACK_IMPORTED_MODULE_1__["ProductModel"]();
            model.name = dto.name;
            model.description = dto.description;
            model.furnitureStyle = dto.furniture_style;
            model.deliveryTime = dto.delivery_time;
            model.price = dto.price;
            return model;
        }
        else {
            console.error('ProductMapper : Cannot mapping empty data');
            return null;
        }
    };
    ProductMapper.prototype.mappingDTOsToModels = function (dtos) {
        var _this = this;
        if (dtos) {
            var models = dtos
                .reduce(function (result, each) {
                result.push(_this.mappingDTOToModel(each));
                return result;
            }, []);
            return models;
        }
        else {
            console.error('ProductMapper : Cannot mapping empty data');
            return null;
        }
    };
    ProductMapper = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProductMapper);
    return ProductMapper;
}());



/***/ }),

/***/ "./src/app/pages/product-list/shared/model/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/product-list/shared/model/index.ts ***!
  \**********************************************************/
/*! exports provided: ProductListReqModel, ProductModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_list_req_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-list-req.model */ "./src/app/pages/product-list/shared/model/product-list-req.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductListReqModel", function() { return _product_list_req_model__WEBPACK_IMPORTED_MODULE_0__["ProductListReqModel"]; });

/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.model */ "./src/app/pages/product-list/shared/model/product.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductModel", function() { return _product_model__WEBPACK_IMPORTED_MODULE_1__["ProductModel"]; });





/***/ }),

/***/ "./src/app/pages/product-list/shared/model/product-list-req.model.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/product-list/shared/model/product-list-req.model.ts ***!
  \***************************************************************************/
/*! exports provided: ProductListReqModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListReqModel", function() { return ProductListReqModel; });
var ProductListReqModel = /** @class */ (function () {
    function ProductListReqModel() {
        this.furnitureStyles = new Array();
        this.products = new Array();
    }
    return ProductListReqModel;
}());



/***/ }),

/***/ "./src/app/pages/product-list/shared/model/product.model.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/product-list/shared/model/product.model.ts ***!
  \******************************************************************/
/*! exports provided: ProductModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModel", function() { return ProductModel; });
var ProductModel = /** @class */ (function () {
    function ProductModel() {
        this.name = '';
        this.description = '';
        this.furnitureStyle = new Array();
        this.deliveryTime = '';
        this.price = 0;
    }
    return ProductModel;
}());



/***/ }),

/***/ "./src/app/pages/product-list/shared/service/index.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/product-list/shared/service/index.ts ***!
  \************************************************************/
/*! exports provided: ProductListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_list_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-list.service */ "./src/app/pages/product-list/shared/service/product-list.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductListService", function() { return _product_list_service__WEBPACK_IMPORTED_MODULE_0__["ProductListService"]; });




/***/ }),

/***/ "./src/app/pages/product-list/shared/service/product-list.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/product-list/shared/service/product-list.service.ts ***!
  \***************************************************************************/
/*! exports provided: ProductListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListService", function() { return ProductListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mapper */ "./src/app/pages/product-list/shared/mapper/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// mapper

var ProductListService = /** @class */ (function () {
    function ProductListService(http, productListReqMapper) {
        this.http = http;
        this.productListReqMapper = productListReqMapper;
    }
    ProductListService.prototype.getProductList = function () {
        var _this = this;
        var url = 'http://www.mocky.io/v2/5c9105cb330000112b649af8​,';
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return _this.productListReqMapper.mappingDTOToModel(resp);
        }));
    };
    ProductListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _mapper__WEBPACK_IMPORTED_MODULE_3__["ProductListReqMapper"]])
    ], ProductListService);
    return ProductListService;
}());



/***/ }),

/***/ "./src/app/pages/shared/pipes/currency.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/shared/pipes/currency.pipe.ts ***!
  \*****************************************************/
/*! exports provided: CurrencyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyPipe", function() { return CurrencyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CurrencyPipe = /** @class */ (function () {
    function CurrencyPipe() {
    }
    CurrencyPipe.prototype.transform = function (value) {
        var val = (typeof value === 'number') ? value.toFixed(0) : value;
        if (!isNaN(parseFloat(val))) {
            return 'Rp' + " " + parseFloat(val).toLocaleString('in-ID');
        }
    };
    CurrencyPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'currency'
        })
    ], CurrencyPipe);
    return CurrencyPipe;
}());



/***/ }),

/***/ "./src/app/pages/shared/shared.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/shared/shared.module.ts ***!
  \***********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/currency.pipe */ "./src/app/pages/shared/pipes/currency.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// pipe

var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]
            ],
            declarations: [
                _pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/product-list/product-list.component */ "./src/app/pages/product-list/product-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"]
    }];
var AppRoutes = /** @class */ (function () {
    function AppRoutes() {
    }
    AppRoutes = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutes);
    return AppRoutes;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aldiokta/Documents/Projects/fabelio-tech-test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map