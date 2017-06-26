webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__results_results_component__ = __webpack_require__("../../../../../src/app/results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bids_bids_component__ = __webpack_require__("../../../../../src/app/bids/bids.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'bids', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_4__bids_bids_component__["a" /* BidsComponent */] },
    { path: 'results', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_3__results_results_component__["a" /* ResultsComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bid_service__ = __webpack_require__("../../../../../src/app/bid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bids_bids_component__ = __webpack_require__("../../../../../src/app/bids/bids.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__results_results_component__ = __webpack_require__("../../../../../src/app/results/results.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__bids_bids_component__["a" /* BidsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__results_results_component__["a" /* ResultsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__bid_service__["a" /* BidService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bid.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BidService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BidService = (function () {
    function BidService(_http) {
        this._http = _http;
    }
    BidService.prototype.login = function (User) {
        return this._http.post('/api/login', User).map(function (data) { return data.json(); }).toPromise();
    };
    BidService.prototype.LogOut = function () {
        return this._http.get('/api/getOut').map(function (data) { return data.json(); }).toPromise();
    };
    BidService.prototype.placeBid = function (newBet) {
        return this._http.post('/api/Bet', newBet).map(function (data) { return data.json(); }).toPromise();
    };
    BidService.prototype.getBids = function (productNum) {
        return this._http.get('/api/getBets/' + productNum).map(function (data) { return data.json(); }).toPromise();
    };
    BidService.prototype.getTop = function (productNum) {
        return this._http.get('/api/getTop/' + productNum).map(function (data) { return data.json(); }).toPromise();
    };
    BidService.prototype.resetBids = function () {
        return this._http.get('/api/reset').toPromise();
    };
    BidService.prototype.getCurrent = function () {
        return this._http.get('/api/getCurrent').map(function (data) { return data.json(); }).toPromise();
    };
    return BidService;
}());
BidService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BidService);

var _a;
//# sourceMappingURL=bid.service.js.map

/***/ }),

/***/ "../../../../../src/app/bids/bids.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n}\nh1, h2 {\n  display: inline;\n}\n\na {\n  float: right;\n  margin-right: 20px;\n}\n.product {\n  margin: 0 auto;\n  display: inline-block;\n  width: 14%;\n  margin-left: 40px;\n  height: 80%;\n}\n\nbutton {\n  display: block;\n  float: right;\n  margin-right: 20px;\n}\n\n#bidContainer {\n\n  margin: 0 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bids/bids.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>Bid Now!</h1>\n  <a href='#'(click)='logOut()'>Logout</a>\n</header>\n<main>\n  <div id=bidContainer>\n    <div class=\"product\">\n      <div class=\"productBox\">\n        <p>{{products[0].name}}</p>\n        <img [src]='products[0].img' alt=\"NO PICTURE AVAILABLE\">\n        <form (submit)='placeBid(1, bids1)'>\n          <input type=\"number\" name=\"bidAmount\" [(ngModel)] = bid1.amount #bids1 = ngModel><input type=\"submit\" value=\"bid\">\n        </form>\n      </div>\n      <label>Curent Bids:</label>\n      <div class=\"currentBids\">\n        <div *ngFor='let bid of products[0].bids'>\n          <p *ngIf='bid._user !== undefined'>{{bid._user.name}} : ${{bid.amount}}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"product\">\n      <div class=\"productBox\">\n        <p>{{products[1].name}}</p>\n        <img [src]='products[1].img' alt=\"NO PICTURE AVAILABLE\">\n        <form (submit)='placeBid(2, bids2)'>\n          <input type=\"number\" name=\"bidAmount\" [(ngModel)] = bid2.amount #bids2 = ngModel><input type=\"submit\" value=\"bid\">\n        </form>\n      </div>\n      <label>Curent Bids:</label>\n      <div class=\"currentBids\">\n        <div *ngFor='let bid of products[1].bids'>\n          <p *ngIf='bid._user !== undefined'>{{bid._user.name}} : ${{bid.amount}}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"product\">\n      <div class=\"productBox\">\n        <p>{{products[2].name}}</p>\n        <img [src]='products[2].img' alt=\"NO PICTURE AVAILABLE\">\n        <form (submit)='placeBid(3, bids3)'>\n          <input type=\"number\" name=\"bidAmount\" [(ngModel)] = bid3.amount #bids3 = ngModel><input type=\"submit\" value=\"bid\">\n        </form>\n      </div>\n      <label>Curent Bids:</label>\n      <div class=\"currentBids\">\n        <div *ngFor='let bid of products[2].bids'>\n          <p *ngIf='bid._user !== undefined'>{{bid._user.name}} : ${{bid.amount}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <h3 *ngIf='error'>{{error}}</h3>\n<button type=\"button\"  (click)='alerted()'>End bid</button>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/bids/bids.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bid_service__ = __webpack_require__("../../../../../src/app/bid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BidsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BidsComponent = (function () {
    function BidsComponent(_bidService, _route, _router) {
        this._bidService = _bidService;
        this._route = _route;
        this._router = _router;
        this.products = [{ number: 1, name: 'Red Bull Red', img: 'http://image.redbull.com/rbx00264/0100/0/406/products/packshots/en_US/USA_355_RB_YELLOW_SingleUnit_closed_cold_front.png', bids: [] },
            { number: 2, name: 'Red Bull Original', img: 'http://image.redbull.com/rbx00264/0100/0/406/products/packshots/en_US/USA_355_RBED_SingleUnit_closed_cold_front_0.png', bids: [] },
            { number: 3, name: 'Red Bull Total Zero', img: 'http://image.redbull.com/rbx00264/0100/0/406/products/packshots/en_US/US_RBZE_355_Single%20Unit_close_cold_ORIGINAL_DRES%20(2).png', bids: [] }];
        this.bid1 = { product: 1, amount: null };
        this.bid2 = { product: 2, amount: null };
        this.bid3 = { product: 3, amount: null };
        this.error = '';
    }
    BidsComponent.prototype.ngOnInit = function () {
        this.getAllBids(1);
        this.getAllBids(2);
        this.getAllBids(3);
    };
    BidsComponent.prototype.logOut = function () {
        var _this = this;
        console.log("Leaving...");
        this._bidService.LogOut()
            .then(function (data) { _this._router.navigate(['/']); })
            .catch(function (err) { return console.log('did not log out successfully'); });
    };
    BidsComponent.prototype.alerted = function () {
        console.log('Hello');
        if (this.products[0].bids.length && this.products[1].bids.length && this.products[2].bids.length) {
            this._router.navigate(['/results']);
        }
        else {
            alert('All Products need Bid to continue');
        }
    };
    BidsComponent.prototype.placeBid = function (productnumber, amount) {
        var _this = this;
        this.error = '';
        this._bidService.placeBid({ product: productnumber, amount: amount.value })
            .then(function (data) {
            if (data.hasOwnProperty('error')) {
                _this.error = data.error;
            }
        })
            .catch(function (err) { return console.log(err, 'hello'); });
        this.getAllBids(productnumber);
    };
    BidsComponent.prototype.getAllBids = function (prod) {
        var _this = this;
        this._bidService.getBids(prod)
            .then(function (data) {
            _this.products[prod - 1].bids = data;
        })
            .catch(function (err) { return console.log('Problem getting bids'); });
    };
    return BidsComponent;
}());
BidsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-bids',
        template: __webpack_require__("../../../../../src/app/bids/bids.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bids/bids.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bid_service__["a" /* BidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bid_service__["a" /* BidService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], BidsComponent);

var _a, _b, _c;
//# sourceMappingURL=bids.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  margin: 0 auto;\n  margin-top: 10%;\n  text-align: center;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit) = \"login()\">\n\n  <label>Your Name: <input type=\"input\" name=\"username\" [(ngModel)]='user.name'></label>\n  <input type=\"submit\" value=\"Enter\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bid_service__ = __webpack_require__("../../../../../src/app/bid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_bidService, _route, _router) {
        this._bidService = _bidService;
        this._route = _route;
        this._router = _router;
        this.user = { name: '' };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._bidService.login(this.user)
            .then(function (data) { console.log(data); _this._router.navigate(['/bids']); })
            .catch(function (err) { return console.log(err); });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bid_service__["a" /* BidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bid_service__["a" /* BidService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/results/results.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n}\nh1, h2 {\n  display: inline;\n}\n\na {\n  float: right;\n  margin-right: 20px;\n}\n.product {\n  margin: 0 auto;\n  display: inline-block;\n  width: 14%;\n  margin-left: 40px;\n  height: 80%;\n}\n\nbutton {\n  display: block;\n  float: right;\n  margin-right: 20px;\n}\n\n#bidContainer {\n\n  margin: 0 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/results/results.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>{{currentUser.name}} ended the Bid.</h1>\n  <a href='#'(click)='logOut()'>Logout</a>\n</header>\n<main>\n  <h4>Highest Bidder per Product</h4>\n  <div id=bidContainer>\n    <div class=\"product\">\n      <div class=\"productBox\">\n        <p>{{products[0].name}}</p>\n        <img [src]='products[0].img' alt=\"NO PICTURE AVAILABLE\">\n      </div>\n      <label>Winner:</label>\n      <div class=\"currentBids\">\n        <div *ngFor='let bid of products[0].bids'>\n          <p *ngIf='bid._user !== undefined'>{{bid._user.name}} : ${{bid.amount}}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"product\">\n      <div class=\"productBox\">\n        <p>{{products[1].name}}</p>\n        <img [src]='products[1].img' alt=\"NO PICTURE AVAILABLE\">\n      </div>\n      <label>Winner:</label>\n      <div class=\"currentBids\">\n        <div *ngFor='let bid of products[1].bids'>\n          <p *ngIf='bid._user !== undefined'>{{bid._user.name}} : ${{bid.amount}}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"product\">\n      <div class=\"productBox\">\n        <p>{{products[2].name}}</p>\n        <img [src]='products[2].img' alt=\"NO PICTURE AVAILABLE\">\n      </div>\n      <label>Winner:</label>\n      <div class=\"currentBids\">\n        <div *ngFor='let bid of products[2].bids'>\n          <p *ngIf='bid._user !== undefined'>{{bid._user.name}} : ${{bid.amount}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n<button (click) = \"reset()\">Start Bid</button>\n"

/***/ }),

/***/ "../../../../../src/app/results/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bid_service__ = __webpack_require__("../../../../../src/app/bid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultsComponent = (function () {
    function ResultsComponent(_bidService, _route, _router) {
        this._bidService = _bidService;
        this._route = _route;
        this._router = _router;
        this.products = [{ number: 1, name: 'Red Bull Red', img: 'http://image.redbull.com/rbx00264/0100/0/406/products/packshots/en_US/USA_355_RB_YELLOW_SingleUnit_closed_cold_front.png', bids: [] },
            { number: 2, name: 'Red Bull Original', img: 'http://image.redbull.com/rbx00264/0100/0/406/products/packshots/en_US/USA_355_RBED_SingleUnit_closed_cold_front_0.png', bids: [] },
            { number: 3, name: 'Red Bull Total Zero', img: 'http://image.redbull.com/rbx00264/0100/0/406/products/packshots/en_US/US_RBZE_355_Single%20Unit_close_cold_ORIGINAL_DRES%20(2).png', bids: [] }];
        this.currentUser = {};
    }
    ResultsComponent.prototype.ngOnInit = function () {
        this.getTopBid(1);
        this.getTopBid(2);
        this.getTopBid(3);
        this.getCurrent();
    };
    ResultsComponent.prototype.getTopBid = function (prod) {
        var _this = this;
        this._bidService.getTop(prod)
            .then(function (data) {
            console.log("The data in getTopBids ", data);
            _this.products[prod - 1].bids = data;
        })
            .catch(function (err) { return console.log('Problem getting bids'); });
    };
    ResultsComponent.prototype.reset = function () {
        var _this = this;
        this._bidService.resetBids()
            .then(function () { return _this._router.navigate(['/bids']); })
            .catch(function (err) { return console.log(err, 'while deleting errthing'); });
    };
    ResultsComponent.prototype.logOut = function () {
        var _this = this;
        console.log("Leaving...");
        this._bidService.LogOut()
            .then(function (data) { _this._router.navigate(['/']); })
            .catch(function (err) { return console.log('did not log out successfully'); });
    };
    ResultsComponent.prototype.getCurrent = function () {
        var _this = this;
        this._bidService.getCurrent()
            .then(function (data) { return _this.currentUser = data; })
            .catch(function (err) { return console.log('trouble getting currentUser'); });
    };
    return ResultsComponent;
}());
ResultsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-results',
        template: __webpack_require__("../../../../../src/app/results/results.component.html"),
        styles: [__webpack_require__("../../../../../src/app/results/results.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bid_service__["a" /* BidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bid_service__["a" /* BidService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], ResultsComponent);

var _a, _b, _c;
//# sourceMappingURL=results.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map