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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/bio/bio.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
    },
    {
        path: 'bio',
        component: _bio_bio_component__WEBPACK_IMPORTED_MODULE_3__["BioComponent"]
    },
    {
        path: 'projects',
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"]
    },
    {
        path: 'services',
        component: _services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"]
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='app-container' (scroll)=\"onWindowScroll($event);\">\n  <div class='jumbotron' id='home'>\n    <div class='name fade-in'>\n      <h1><strong>Joseph Moussa</strong></h1>\n      <h3>Sofware Engineer.</h3>\n      <!--<h5>I build for the web.</h5>-->\n    </div>\n    <div class='navContainer d-none d-lg-block'>\n      <app-sticky-navbar id='navbar'></app-sticky-navbar>\n    </div>\n    <div class='arrowContainer d-block d-lg-none align-bottom'>\n      <a href='#bio'>\n        continue\n      </a>\n    </div>\n  </div> \n    \n  <div class='body' id='bio'>\n    <app-bio></app-bio>\n  </div>\n\n  <div class='body' id='projects'>\n    <app-projects></app-projects>\n  </div>\n \n  <div class='body' id='services'>\n    <app-services></app-services>\n  </div>\n\n  <div class='body' id='contact'>\n    <app-contact></app-contact>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-container {\n  margin: 0px;\n  padding: 0px;\n  width: 100vw;\n  max-width: 100%;\n  overflow-x: hidden;\n  /*\n    @-webkit-keyframes slide {\n        from { background-position: 0 0; }\n        to { background-position: 1000px 0px; }\n    }\n    */ }\n  .app-container .jumbotron {\n    font-family: 'Montserrat', sans-serif;\n    color: white;\n    text-align: center;\n    padding: 0px;\n    margin: 0px;\n    height: 100vh;\n    min-height: 860px;\n    width: 100vw;\n    max-width: 100%;\n    background-color: #32adaa;\n    background-image: url('black-felt.png');\n    position: relative;\n    transition: -webkit-transform 0.2s;\n    transition: transform 0.2s;\n    transition: transform 0.2s, -webkit-transform 0.2s; }\n  .app-container .jumbotron .arrowContainer {\n      width: 100%;\n      height: 10%;\n      position: absolute;\n      bottom: 0px;\n      text-align: center;\n      z-index: 100; }\n  .app-container .jumbotron .arrowContainer:hover {\n        -webkit-transform: scale(1.01);\n                transform: scale(1.01); }\n  .app-container .jumbotron .arrowContainer:hover a {\n          color: black; }\n  .app-container .jumbotron .arrowContainer a {\n        display: inline;\n        font-size: 150%;\n        text-decoration: none;\n        color: white; }\n  .app-container .jumbotron .sticky {\n      background-color: #32adaa;\n      background-image: url('black-felt.png');\n      box-shadow: 3px 3px 12px 3px rgba(0, 0, 0, 0.1);\n      position: fixed;\n      top: 0;\n      left: 0;\n      height: 5re;\n      min-height: 67px;\n      width: 100%;\n      z-index: 5000; }\n  .app-container .jumbotron .sticky .navbar {\n        background-color: #037171; }\n  .app-container .jumbotron .name {\n      padding: 35vh 0px;\n      z-index: 100; }\n  .app-container .jumbotron .name h1 {\n        font-size: 500%; }\n  .app-container .jumbotron .name h3 {\n        font-size: 300%; }\n  .app-container .jumbotron .name h5 {\n        font-size: 200%; }\n  .app-container .jumbotron .fade-in {\n      -webkit-transform: translateZ(0);\n              transform: translateZ(0);\n      opacity: 0;\n      /* make things invisible upon start */\n      -webkit-animation: fadeIn ease-in 1;\n      /* call our keyframe named fadeIn, use animattion ease-in and repeat it only 1 time */\n      animation: fadeIn ease-in 1;\n      -webkit-animation-fill-mode: forwards;\n      /* this makes sure that after animation is done we remain at the last keyframe value (opacity: 1)*/\n      animation-fill-mode: forwards;\n      -webkit-animation-duration: 1s;\n      animation-duration: 1s; }\n  .app-container .body {\n    height: 100vh;\n    width: 100vw;\n    max-width: 100%;\n    margin: auto;\n    background: white;\n    color: black;\n    overflow: hidden;\n    z-index: 2; }\n  .app-container #bio, .app-container #services {\n    max-width: 2560px; }\n  .app-container #projects, .app-container #contact {\n    background-color: #ececec; }\n  .app-container #bio, .app-container #projects, .app-container #services {\n    min-height: 1080px; }\n"

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AppComponent = /** @class */ (function () {
    function AppComponent(document) {
        this.originalPosition = 0;
    }
    AppComponent.prototype.goToHome = function () {
        location.href = location.href.replace(/#.*/, '#home');
    };
    AppComponent.prototype.ngAfterContentInit = function () {
        this.originalPosition = document.getElementById('navbar').offsetTop;
        this.hgt = jquery__WEBPACK_IMPORTED_MODULE_2__('#myNavbar').height();
    };
    AppComponent.prototype.onWindowScroll = function (e) {
        var sticky = this.originalPosition - (+this.hgt);
        var element = document.getElementById('navbar');
        if (window.pageYOffset > sticky) {
            element.classList.add('sticky');
        }
        else {
            element.classList.remove('sticky');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onWindowScroll", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/bio/bio.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _sticky_navbar_sticky_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sticky-navbar/sticky-navbar.component */ "./src/app/sticky-navbar/sticky-navbar.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _bio_bio_component__WEBPACK_IMPORTED_MODULE_9__["BioComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsComponent"],
                _sticky_navbar_sticky_navbar_component__WEBPACK_IMPORTED_MODULE_12__["StickyNavbarComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_13__["ServicesComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bio/bio.component.html":
/*!****************************************!*\
  !*** ./src/app/bio/bio.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='main'>\n\t<div class=\"header\">\n    <h1 @slide *ngIf='inView' >Bio</h1>\n    <div @slideOpposite *ngIf='inView' class=\"bar\"></div>\n  </div>\n  <div class='container d-none d-md-inline-block'>\n    <ul @staggerGrow *ngIf='iconView' class='row'>\n      <li class='d-none d-sm-none d-md-inline-block col-lg-3 col-md-6'>\n\t\t\t\t<img src='../../assets/images/tailored.png' alt='tailored' width=\"175px\" height=\"125px\"/>\n\t\t\t\t<h5>Tailored</h5>\n      </li>\n      <li class='d-none d-sm-none d-md-inline-block col-lg-3 col-md-6'>\n\t\t\t\t<img src='../../assets/images/dynamic.png' alt='dynamic' width=\"175px\" height=\"125px\"/>\n        <h5>Dynamic</h5>\n      </li>\n      <li class='d-none d-sm-none d-md-inline-block col-lg-3 col-md-6'>\n\t\t\t\t<img src='../../assets/images/pixelperfect.png' alt='pixel perfect' width=\"175px\" height=\"125px\"/>\n        <h5>Pixel Perfect</h5>\n      </li>\n      <li class='d-none d-sm-none d-md-inline-block col-lg-3 col-md-6'>\n\t\t\t\t<img src='../../assets/images/user.png' alt='user driven' width=\"175px\" height=\"125px\"/>\n        <h5>User Driven</h5>\n      </li>\n    </ul>\n  </div>\n\t<div class=\"row\">\n\t\t<div class='about col-md-6 col-sm-12 col-12'>\n\t\t\t<div class='img'>\n\t\t\t\t<img src=\"../../assets/images/fullsizeoutput_aba.jpg\" alt=\"headshot\" width='120' height=\"150\">\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<h2>About Me</h2>\n\t\t\t\tCurrently a Backend Developer at <a href='https://www.genomicprediction.com/'>Genomic Prediction</a>,\n\t\t\t\tI work closely with the CEO/CTO and a team of other developers on various projects.\n\t\t\t\tI build out their databases and the APIs to integrate them with the font-end and other sources.\n\t\t\t\tI'm a full-stack web developer with an emphasis on simple, functional, yet sophisticated design.\n\t\t\t\tSome of my practices and methods are shown here. \n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"chart-container col-md-6 col-sm-12 col-12\">\n\t\t\t<div class=\"chart chart--dev\">\n\t\t\t\t<ul @staggerSlide *ngIf='graphView' class=\"chart--horiz\">\n\t\t\t\t\t<li class=\"chart__bar\">\n\t\t\t\t\t\t<div class='chart_percent' style=\"width: 90%;\">\n\t\t\t\t\t\t\t<div class=\"label__holder\">\n\t\t\t\t\t\t\t\t\tHTML\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"chart__bar\">\n\t\t\t\t\t\t<div class='chart_percent' style=\"width: 90%;\">\n\t\t\t\t\t\t\t<div class=\"label__holder\">\n\t\t\t\t\t\t\t\t\tCSS\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"chart__bar\">\n\t\t\t\t\t\t<div class='chart_percent' style=\"width: 80%;\">\n\t\t\t\t\t\t\t<div class=\"label__holder\">\n\t\t\t\t\t\t\t\tJavaScript\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"chart__bar\">\n\t\t\t\t\t\t<div class='chart_percent' style=\"width: 70%;\">\n\t\t\t\t\t\t\t<div class=\"label__holder\">\n\t\t\t\t\t\t\t\tAngular\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"chart__bar\">\n\t\t\t\t\t\t<div class='chart_percent' style=\"width: 60%;\">\n\t\t\t\t\t\t\t<div class=\"label__holder\">\n\t\t\t\t\t\t\t\tReact\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"chart__bar\">\n\t\t\t\t\t\t<div class='chart_percent' style=\"width: 80%;\">\n\t\t\t\t\t\t\t<div class=\"label__holder\">\n\t\t\t\t\t\t\t\tMySQL\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"chart__bar\">\n\t\t\t\t\t\t<div class='chart_percent' style=\"width: 95%;\">\n\t\t\t\t\t\t\t<div class=\"label__holder\">\n\t\t\t\t\t\t\t\tSequelize\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"chart__bar\">\n\t\t\t\t\t\t<div class='chart_percent' style=\"width: 90%;\">\n\t\t\t\t\t\t\t<div class=\"label__holder\">\n\t\t\t\t\t\t\t\tNodeJS\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"chart__bar\">\n\t\t\t\t\t\t<div class='chart_percent' style=\"width: 95%;\">\n\t\t\t\t\t\t\t<div class=\"label__holder\">\n\t\t\t\t\t\t\t\tExpress\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"chart__bar\">\n\t\t\t\t\t\t<div class='chart_percent' style=\"width: 70%;\">\n\t\t\t\t\t\t\t<div class=\"label__holder\">\n\t\t\t\t\t\t\t\tAdobe XD\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/bio/bio.component.scss":
/*!****************************************!*\
  !*** ./src/app/bio/bio.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\n  padding: 6% 0;\n  margin: 0 15%; }\n  #main .header {\n    text-align: center;\n    width: 100%;\n    height: 10vh;\n    display: block; }\n  #main .header .bar {\n      margin: 1% auto;\n      background-color: black;\n      width: 50px;\n      height: 5%; }\n  #main .container {\n    width: 100%;\n    max-width: 100%;\n    margin: 0;\n    padding: 0; }\n  #main .container .row {\n      width: 100%;\n      max-width: 100%;\n      text-align: center;\n      height: 100%;\n      padding: 0;\n      margin: 3% 0; }\n  #main .container .row li {\n        display: block;\n        padding: 0 5%;\n        margin: auto;\n        -webkit-transform: translateZ(0);\n                transform: translateZ(0); }\n  #main .container .row li img {\n          -webkit-transform: translateZ(0);\n                  transform: translateZ(0);\n          max-width: 100%;\n          max-height: 125px;\n          width: auto;\n          height: auto;\n          display: block;\n          margin: auto;\n          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n          transform: translateZ(0);\n          box-shadow: 0 0 1px rgba(0, 0, 0, 0); }\n  #main .container .row li h5 {\n          -webkit-transform: translateZ(0);\n                  transform: translateZ(0);\n          display: block;\n          text-align: center;\n          margin: 5% auto;\n          width: 100%; }\n  #main .about {\n    float: left;\n    width: 50%;\n    height: 50%;\n    text-align: center;\n    padding: 5%; }\n  #main .about div {\n      overflow: hidden;\n      height: 50%;\n      padding: 0 5%;\n      text-align: center; }\n  #main .about div img {\n        border-radius: 5px;\n        border: 2px solid #0abab5;\n        height: 35%;\n        width: 35%;\n        margin-bottom: 5%; }\n  #main .chart-container {\n    float: right;\n    width: 50%;\n    height: 50%;\n    padding: 5%; }\n  .chart {\n  margin: 30px 0 0; }\n  .chart:first-child {\n    margin: 0; }\n  .chart--horiz {\n  overflow: hidden;\n  list-style-type: none;\n  margin: 0px;\n  padding: 0px; }\n  .label__holder {\n  overflow: hidden;\n  width: 100px;\n  height: 100%;\n  background-color: grey;\n  text-align: center;\n  z-index: 10;\n  padding: 0 7px;\n  line-height: 30px;\n  color: black; }\n  .chart__bar {\n  height: 30px;\n  margin-bottom: 15px;\n  background-color: #ececec;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n  z-index: 500;\n  width: 100%; }\n  .chart_percent {\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  z-index: 499;\n  background-color: #0abab5;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/bio/bio.component.ts":
/*!**************************************!*\
  !*** ./src/app/bio/bio.component.ts ***!
  \**************************************/
/*! exports provided: BioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioComponent", function() { return BioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BioComponent = /** @class */ (function () {
    function BioComponent() {
    }
    BioComponent.prototype.isInViewport = function (el) {
        var rect = el.getBoundingClientRect();
        return (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.left >= 0 && rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */);
    };
    BioComponent.prototype.isInView = function (el, callback) {
        var _this = this;
        var old_visible = false;
        return (function () {
            var visible = _this.isInViewport(el);
            if (visible !== old_visible) {
                old_visible = visible;
                if (typeof callback === 'function') {
                    callback();
                }
            }
        });
    };
    BioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inView = false;
        this.iconView = false;
        this.graphView = false;
        var headerHandler = this.isInView(document.querySelector('.header'), function () {
            _this.inView = true;
        });
        var iconHandler = this.isInView(document.querySelector('.container'), function () {
            _this.iconView = true;
        });
        var graphHandler = this.isInView(document.querySelector('.chart'), function () {
            _this.graphView = true;
        });
        jquery__WEBPACK_IMPORTED_MODULE_2__(window).on('DOMContentLoaded load resize scroll', headerHandler);
        jquery__WEBPACK_IMPORTED_MODULE_2__(window).on('DOMContentLoaded load resize scroll', iconHandler);
        jquery__WEBPACK_IMPORTED_MODULE_2__(window).on('DOMContentLoaded load resize scroll', graphHandler);
    };
    BioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bio',
            template: __webpack_require__(/*! ./bio.component.html */ "./src/app/bio/bio.component.html"),
            styles: [__webpack_require__(/*! ./bio.component.scss */ "./src/app/bio/bio.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slide', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(-200%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateX(0)' })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateX(200%)' }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideOpposite', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(200%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateX(0)' })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateX(-200%)' }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('staggerGrow', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('li', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'scale(0)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('250ms', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'scale(1)' })),
                            ]),
                        ])
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('staggerSlide', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.chart_percent', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateX(-200%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('100ms', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateX(0)' })),
                            ]),
                        ])
                    ])
                ]),
            ]
        }),
        __metadata("design:paramtypes", [])
    ], BioComponent);
    return BioComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='contact-container row'>\n    <div class='main'>\n        <div class='cform'>\n            <div class=\"contact-header\">\n                <h1 @slide *ngIf='inView' class='heading'>Contact</h1>\n                <div @slideOpposite *ngIf='inView' class=\"bar\"></div>\n            </div>\n            <div class='contact-statement'>\n                <h3>Have a question or want to collaborate?</h3>\n                <h6>\n                    I am currently open for freelance work, and always looking to collaborate with other designers and developers.\n                </h6>\n            </div>\n\n            <div class='contact-button'>\n                <a href=\"mailto:joeph465@gmail.com\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" class='getInTouch' title='mailto:joeph465@gmail.com'>Get In Touch</a>\n            </div>\n\n\n        </div>\n    </div>\n\n   <div class=\"contact-footer\">\n       <div>\n           Designed and Built by Joseph Moussa\n       </div>\n   </div> \n\n    <div class='footer'>\n        <div class='links'>\n            <div>\n                <a (click)='resume()' style='cursor: pointer;'>\n                    <img src=\"../../assets/images/resume.svg\" alt=\"resume\" title='Resume'>\n                    <span class='label'>\n                        Resume\n                    </span>\n                </a>\n            </div>\n            <div>\n                <a href='https://linkedin.com/in/jmoussa'>\n                    <img src=\"../../assets/images/linkedin.svg\" alt=\"linkedin\" title='LinkedIn'>\n                    <span class='label'>\n                        LinkedIn \n                    </span>\n                </a>\n            </div>\n            <div>\n                <a href='https://github.com/jmoussa'>\n                    <img src=\"../../assets/images/github.svg\" alt=\"github\" title='Github'>\n                    <span class='label'>\n                        Github \n                    </span>\n                </a>  \n           </div>\n            <div>\n                <a href='https://twitter.com/j__moussa'>\n                    <img src=\"../../assets/images/twitter.svg\" alt=\"twitter\" title='Twitter'>\n                    <span class='label'>\n                        Twitter\n                    </span>\n                </a>   \n           </div> \n            <div>\n                <a href='https://instagram.com/j__moussa'>\n                    <img src=\"../../assets/images/insta.svg\" alt=\"instagram\" title='Instagram'>\n                    <span class='label'>\n                        Instagram\n                    </span>\n                </a>    \n           </div> \n            <!--\n            <div>\n                <a href='https://facebook.com/joeph465'>\n                    <img src=\"../../assets/images/facebook.svg\" alt=\"facebook\" title='Facebook'>\n                </a> \n            </div>--> \n        </div>       \n        <div class='line'></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-container {\n  margin: 0px;\n  padding: 0px;\n  width: 100vw;\n  height: 100vh;\n  position: relative; }\n  .contact-container .main {\n    padding: 0;\n    margin: 6% 25%;\n    color: black;\n    height: 85%;\n    display: inline;\n    width: 100%; }\n  .contact-container .main .cform {\n      width: 100%;\n      text-align: center;\n      margin: 0px;\n      padding: 0px; }\n  .contact-container .main .cform .contact-header {\n        text-align: center;\n        width: 100%;\n        height: 10vh;\n        margin-bottom: 3vh;\n        display: block; }\n  .contact-container .main .cform .contact-header .bar {\n          margin: 1% auto;\n          background-color: black;\n          width: 50px;\n          height: 5%; }\n  .contact-container .main .cform .contact-statement {\n        padding: 3% 0; }\n  .contact-container .main .cform .contact-statement h6 {\n          padding: 1% 15%; }\n  .contact-container .main .cform .contact-button {\n        margin: 10% 0; }\n  .contact-container .main .cform .contact-button a {\n          text-decoration: none;\n          color: black;\n          padding: 2% 5%;\n          border: 2px solid #0abab5; }\n  .contact-container .main .cform .contact-button a:hover {\n            background-color: #0abab5; }\n  .contact-container .main .cform .form-group button {\n        border-radius: 0px; }\n  .contact-container .main .cform .form-group button:hover {\n          background-color: #0abab5; }\n  .contact-container .contact-footer {\n    width: 100%;\n    text-align: center;\n    background-color: #32adaa;\n    height: 75px;\n    margin: auto;\n    padding: 0;\n    display: flex;\n    position: absolute;\n    bottom: 0px; }\n  .contact-container .contact-footer div {\n      display: flex;\n      margin: auto; }\n  .contact-container .footer {\n    display: block;\n    text-align: center;\n    position: fixed;\n    bottom: 0px;\n    height: 35vh;\n    min-height: 300px; }\n  @media screen and (max-width: 760px) {\n      .contact-container .footer {\n        width: 10%; } }\n  @media screen and (min-width: 761px) {\n      .contact-container .footer {\n        width: 7.5%; } }\n  .contact-container .footer .line {\n      background-color: #32adaa;\n      width: 3px;\n      padding: 0px;\n      margin-left: 49.25%;\n      margin-right: 49.25%;\n      margin-top: 15%;\n      height: 100%; }\n  .contact-container .footer .links {\n      margin: 0;\n      display: block;\n      width: 100%;\n      text-align: center; }\n  .contact-container .footer .links div {\n        margin: auto;\n        margin-top: 10%;\n        width: 100%;\n        max-width: 100%;\n        padding: 1%;\n        height: auto;\n        display: block;\n        text-align: center; }\n  .contact-container .footer .links div a {\n          padding: 0;\n          margin: auto;\n          position: relative;\n          text-decoration: none;\n          color: black; }\n  .contact-container .footer .links div a .label {\n            margin: 0px;\n            padding: 0px;\n            width: 0px;\n            position: absolute;\n            right: 0;\n            bottom: 0;\n            left: 0px;\n            opacity: 0;\n            text-decoration: none;\n            text-align: left; }\n  .contact-container .footer .links div a img {\n            padding: 0;\n            margin: 0;\n            width: 25px;\n            height: 25px;\n            transition-duration: 250ms;\n            transition-property: -webkit-transform;\n            transition-property: transform;\n            transition-property: transform, -webkit-transform; }\n  .contact-container .footer .links div:hover {\n          -webkit-transform: scale(1.2);\n                  transform: scale(1.2); }\n  .contact-container .footer .links div:hover a .label {\n            transition: 0.2s ease-out;\n            left: 30px;\n            opacity: 1; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.resume = function () {
        try {
            window.open('../../assets/JosephMoussa4.0.pdf', '_blank');
        }
        catch (err) {
            window.open('../../assets/JosephMoussa3.0.pdf', '_blank');
        }
    };
    ContactComponent.prototype.isInViewport = function (el) {
        var rect = el.getBoundingClientRect();
        return (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */);
    };
    ContactComponent.prototype.isInView = function (el, callback) {
        var _this = this;
        var old_visible = false;
        return (function () {
            var visible = _this.isInViewport(el);
            if (visible !== old_visible) {
                old_visible = visible;
                if (typeof callback === 'function') {
                    callback();
                }
            }
        });
    };
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inView = false;
        var handler = this.isInView(document.querySelector('.contact-header'), function () {
            _this.inView = true;
        });
        jquery__WEBPACK_IMPORTED_MODULE_2__(window).on('DOMContentLoaded load resize scroll', handler);
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slide', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(-200%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateX(0)' })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateX(200%)' }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideOpposite', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(200%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateX(0)' })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateX(-200%)' }))
                    ])
                ]),
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='projects-container'>\n  <div class=\"project-header\">\n    <h1 @slide *ngIf='inView' class='heading'>Projects</h1>\n    <div @slideOpposite *ngIf='inView' class=\"bar\"></div>\n  </div>\n  \n  <div class='project-container' [@slideUp]='selected ? \"showDetails\" : \"hideDetails\"'>\n    <div @staggerGrow *ngIf='projectView' class='row'>\n      <div class='cards col-lg-4 col-md-12 col-sm-12 col-12'>\n        <div id='message'>\n          <h3>CLI Message Board</h3>\n          <span>  \n            <button (click)='showDetails(\"openssl\")' mat-button>Details</button>\n            <button (click)='navigateToGithub(\"OpenSSLMessageBoard\")' mat-button>Github</button>\n          </span>  \n        </div>\n      </div>\n      <div class='cards col-lg-4 col-md-12 col-sm-12 col-12'>\n        <div id='expense'>\n          <h3>Expense Report App</h3>\n          <span>  \n            <button (click)='showDetails(\"expense\")' mat-button>Details</button>\n            <button (click)='navigateToGithub(\"expenseReportApp\")' mat-button>Github</button>\n          </span>  \n        </div>\n      </div>\n      <div class='cards col-lg-4 col-md-12 col-sm-12 col-12'>\n        <div id='movie'>\n          <h3>Movie Scraping API</h3>\n          <span>  \n            <button (click)='showDetails(\"movie\")' mat-button>Details</button>\n            <button (click)='navigateToGithub(\"movieScraper\")' mat-button>Github</button>\n          </span>  \n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class='detail-view' style='position:relative;'>\n    <div @slide *ngIf='openssl' class=\"project-detail\" style='position:absolute; top:25%; left:15%; right:15%;'>\n        <h4>OpenSSL Message Board</h4>  \n        <p>\n          Simple multithreaded client/server message board application with login.<br>\n          Passwords are salted and hashed in the passwords file.<br>\n          Currently runs as CLI app.<br> \n        </p>\n        <h6>Technologies Used</h6>\n        <ul>\n          <li>Python</li>\n          <li>Sockets API</li>\n          <li>Passlib password hashing library</li>\n        </ul>\n    </div>\n    <div @slide *ngIf='expense' class=\"project-detail\" style='position:absolute; top:25%; left:15%; right:15%;'> \n        <h4>Expense Report Web App</h4>  \n        <p>\n          Personal project using React.js, Node/Express and a MySQL database to hold an individual's purchase/expense history across stores.<br>\n          Good practice for building a front-end with React, and communicating with a backend and database.\n        </p>\n        <h6>Technologies Used</h6>\n        <ul>\n          <li>JavaScript</li>\n          <li>React</li>\n          <li>Node.js</li>\n          <li>ExpressJS</li>\n        </ul>\n    </div>\n    <div @slide *ngIf='movie' class=\"project-detail\" style='position:absolute; top:25%; left:15%; right:15%;'>\n        <h4>Movie Scraper</h4>  \n        <p>\n          Scrape theater, movie and time from IMDB using python BeautifulSoup4 library.<br>\n          Clean scraped data and use as REST API Endpoint.<br>\n          Initial GET request returns JSON array of all nearby movie theatres, the movies and their showtimes.\n        </p>\n        <h6>Technologies Used</h6>        \n        <ul>\n          <li>Python</li>\n          <li>BeautifulSoup4</li>\n          <li>Flask</li>\n        </ul>\n    </div> \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projects-container {\n  margin: 0 15%;\n  padding: 6% 0; }\n  .projects-container .project-header {\n    text-align: center;\n    width: 100%;\n    height: 10vh;\n    min-height: 90px;\n    display: block; }\n  .projects-container .project-header .bar {\n      margin: 1% auto;\n      background-color: black;\n      width: 50px;\n      height: 5%; }\n  .projects-container .project-container {\n    width: 100%;\n    padding-top: 10%; }\n  .projects-container .project-container .row {\n      width: 100%;\n      text-align: center;\n      height: 100%;\n      padding: 0px;\n      margin: 0px; }\n  .projects-container .project-container .row div {\n        height: 100%;\n        list-style: none;\n        -webkit-transform: translateZ(0);\n                transform: translateZ(0); }\n  .projects-container .project-container .row div #message {\n          background: url('openssl.jpg');\n          background-repeat: no-repeat;\n          background-size: cover; }\n  .projects-container .project-container .row div #message:hover {\n            background: #0abab5; }\n  .projects-container .project-container .row div #expense {\n          background: url('expense.jpg');\n          background-repeat: no-repeat;\n          background-size: cover; }\n  .projects-container .project-container .row div #expense:hover {\n            background: #0abab5; }\n  .projects-container .project-container .row div #movie {\n          background: url('movieScraper.jpg');\n          background-repeat: no-repeat;\n          background-size: cover; }\n  .projects-container .project-container .row div #movie:hover {\n            background: #09b8b2; }\n  .projects-container .project-container .row div div {\n          -webkit-transform: translateZ(0);\n                  transform: translateZ(0);\n          overflow: hidden;\n          width: 100%;\n          text-align: center;\n          background: grey;\n          margin: 3px 0;\n          transition-duration: 250ms;\n          transition-property: display, opacity, background-color, -webkit-transform;\n          transition-property: display, transform, opacity, background-color;\n          transition-property: display, transform, opacity, background-color, -webkit-transform;\n          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n          transform: translateZ(0);\n          box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n          z-index: 50; }\n  @media screen and (max-width: 991px) {\n            .projects-container .project-container .row div div {\n              height: 13vh;\n              min-height: 130px; } }\n  @media screen and (min-width: 992px) {\n            .projects-container .project-container .row div div {\n              height: 25vh;\n              min-height: 210px; } }\n  .projects-container .project-container .row div div h3 {\n            -webkit-transform: translateZ(0);\n                    transform: translateZ(0);\n            overflow: hidden;\n            height: 40%;\n            margin-top: 10%;\n            text-align: center;\n            display: none;\n            transition: translateX(-200%); }\n  @media screen and (max-width: 991px) {\n              .projects-container .project-container .row div div h3 {\n                margin: 0px;\n                padding-top: 5%; } }\n  .projects-container .project-container .row div div span {\n            -webkit-transform: translateZ(0);\n                    transform: translateZ(0);\n            overflow: hidden;\n            height: 50%;\n            width: 100%;\n            transition: translateX(-200%);\n            display: none; }\n  @media screen and (max-width: 991px) {\n              .projects-container .project-container .row div div span {\n                margin-bottom: 50%;\n                height: 60%; } }\n  .projects-container .project-container .row div div span button {\n              -webkit-transform: translateZ(0);\n                      transform: translateZ(0);\n              border-radius: 0px;\n              margin: 3%; }\n  .projects-container .project-container .row div div span button:hover {\n                background-color: #0abab5; }\n  .projects-container .project-container .row div div:hover {\n            -webkit-transform: scale(1.02);\n                    transform: scale(1.02);\n            background: #0abab5;\n            opacity: 1; }\n  .projects-container .project-container .row div div:hover h3 {\n              display: inline-block;\n              -webkit-animation: 0.2s ease-out 0s 1 slideInFromTop;\n                      animation: 0.2s ease-out 0s 1 slideInFromTop;\n              opacity: 1; }\n  .projects-container .project-container .row div div:hover span {\n              opacity: 1;\n              display: inline-block;\n              -webkit-animation: 0.2s ease-out 0s 1 slideInFromBottom;\n                      animation: 0.2s ease-out 0s 1 slideInFromBottom; }\n  .projects-container .detail-view {\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0);\n    width: 100%;\n    display: block;\n    padding: 5% 15%; }\n  .projects-container .detail-view .project-detail {\n      -webkit-transform: translateZ(0);\n              transform: translateZ(0);\n      background-color: white;\n      box-shadow: 0px 5px #888888;\n      padding: 4%;\n      font-size: 120%; }\n  @media screen and (max-width: 991px) {\n        .projects-container .detail-view .project-detail {\n          font-size: 100%;\n          box-shadow: none; } }\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.val = '';
    }
    ProjectsComponent.prototype.navigateToGithub = function (s) {
        // console.log( s );
        window.open('https://github.com/jmoussa/' + s, '_blank');
    };
    ProjectsComponent.prototype.isInViewport = function (el) {
        var rect = el.getBoundingClientRect();
        return (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */);
    };
    ProjectsComponent.prototype.isInView = function (el, callback) {
        var _this = this;
        var old_visible = false;
        return (function () {
            var visible = _this.isInViewport(el);
            if (visible !== old_visible) {
                old_visible = visible;
                if (typeof callback === 'function') {
                    callback();
                }
            }
        });
    };
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.openssl = false;
        this.expense = false;
        this.movie = false;
        this.selected = false;
        this.inView = false;
        this.projectView = false;
        var handler = this.isInView(document.querySelector('.project-header'), function () {
            _this.inView = true;
        });
        var projectHandler = this.isInView(document.querySelector('.project-container'), function () {
            _this.projectView = true;
        });
        jquery__WEBPACK_IMPORTED_MODULE_2__(window).on('DOMContentLoaded load resize scroll', projectHandler);
        jquery__WEBPACK_IMPORTED_MODULE_2__(window).on('DOMContentLoaded load resize scroll', handler);
    };
    ProjectsComponent.prototype.showDetails = function (choice) {
        this.selected = true;
        switch (choice) {
            case 'openssl': {
                this.openssl = true;
                this.expense = false;
                this.movie = false;
                break;
            }
            case 'expense': {
                this.openssl = false;
                this.expense = true;
                this.movie = false;
                break;
            }
            case 'movie': {
                this.openssl = false;
                this.expense = false;
                this.movie = true;
                break;
            }
            default: {
                this.openssl = false;
                this.expense = false;
                this.movie = false;
                break;
            }
        }
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideUp', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('showDetails', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        paddingTop: '0',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => showDetails', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease')
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slide', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(-200%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateX(0)' })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateX(200%)' }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideOpposite', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(200%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateX(0)' })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateX(-200%)' }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('staggerGrow', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.cards', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'scale(0)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('100ms', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('750ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'scale(1)' })),
                            ]),
                        ])
                    ])
                ]),
            ],
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='services-container'>\n  <div class=\"services-header\">\n    <h1 @slide *ngIf='inView' class='heading'>Services</h1>\n    <div @slideOpposite *ngIf='inView' class=\"bar\"></div>\n  </div>\n  \n  <div class='service-list'>\n    <ul @staggerSlide @staggerSlide2 *ngIf='serviceView' class='services'>\n      <li class='service'>\n        <div class='image-container'>\n          <img src=\"../../assets/images/design.svg\" alt=\"Design\" title='Design'>\n        </div>\n        <div class='content-container' id='design'>\n          <h4>UI/UX Design</h4>\n          <div>\n            <p>\n              UI/UX design involves planning the layout and structure of the web application, \n              how it will look on mobile and how the user will interact with various components.\n              Once that is decided, I generate a mockup (or blueprint) of the site, usually on paper or Adobe XD.\n            </p>\n        </div>\n        </div>  \n      </li>\n      <li class='service odd'>\n        <div class='image-container'>\n          <img src=\"../../assets/images/frontend.svg\" alt=\"frontend\" title='frontend'>\n        </div>\n        <div class='content-container' id='frontend'>\n          <h4>Front End Development</h4>\n          <div>\n            <p>\n              The front end is what the user will see and interact with. \n              This involves building out the display (ideally so that it matches the mockup).\n              I focus on dynamic, interactive, responsive and intuitive web interfaces for both web and mobile.\n            </p>\n          </div>\n        </div>        \n      </li>\n      <li class='service'>\n        <div class='image-container'>\n          <img src=\"../../assets/images/backend.svg\" alt=\"backend\" title='backend'>\n        </div>\n        <div class='content-container' id='backend'>\n          <h4>Back End Development</h4>\n          <div>\n            <p>\n              The back end is where all the logic that connects to your business or brand will go.\n              Sometimes this is not necessary though, if all you want is to display static information for example.<br>\n              You will require a back end if your site integrates with:\n            </p>\n          <ul>\n              <li>A Database (or anywhere you store your electronic records)</li>\n              <li>3rd Party Service (Google Maps, Email Service, etc.)</li>\n              <li>Another CMS</li>\n            </ul>\n          </div>\n        </div>        \n      </li>\n      <li class='service odd'>\n        <div class='image-container'>\n          <img src=\"../../assets/images/database.svg\" alt=\"database\" title='database'>\n        </div>\n        <div class='content-container' id='database'>\n          <h4>Database Services</h4>\n          <div>\n            The database is what will store all of your information in bulk.\n            It's another optional feature and not always necessary depending on the site's desired functionality.<br>\n            My database services include:\n            <ul>\n              <li>Building a database from Scratch</li>\n              <li>Database Migration</li>\n              <li>Connecting and integrating a database with the back end</li>\n            </ul>\n          </div>\n        </div>        \n    </li>\n    </ul>\n  </div>\n \n\n</div>\n"

/***/ }),

/***/ "./src/app/services/services.component.scss":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".services-container {\n  margin: 0px;\n  padding: 5% 10%;\n  width: 100%;\n  height: 100vh;\n  min-height: 875px; }\n  .services-container .services-header {\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0);\n    text-align: center;\n    width: 100%;\n    height: 10vh;\n    min-height: 90px;\n    display: block; }\n  .services-container .services-header .bar {\n      margin: 1% auto;\n      background-color: black;\n      width: 50px;\n      height: 5%; }\n  .services-container .services {\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0);\n    list-style: none;\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0; }\n  .services-container .services .service {\n      -webkit-transform: translateZ(0);\n              transform: translateZ(0);\n      display: flex; }\n  @media screen and (max-width: 991px) {\n        .services-container .services .service {\n          height: auto;\n          margin-bottom: 3%; } }\n  @media screen and (min-width: 992px) {\n        .services-container .services .service {\n          margin-bottom: 1%;\n          min-height: 15%; } }\n  .services-container .services .service .image-container {\n        -webkit-transform: translateZ(0);\n                transform: translateZ(0); }\n  @media screen and (max-width: 991px) {\n          .services-container .services .service .image-container {\n            display: none; } }\n  @media screen and (min-width: 992px) {\n          .services-container .services .service .image-container {\n            float: left;\n            width: 10%;\n            height: 100%;\n            text-align: center;\n            padding: 0;\n            display: flex;\n            margin: auto; }\n            .services-container .services .service .image-container img {\n              margin: auto;\n              width: 75px;\n              height: 75px; } }\n  .services-container .services .service .content-container {\n        -webkit-transform: translateZ(0);\n                transform: translateZ(0);\n        height: 100%;\n        float: right;\n        overflow: hidden;\n        padding: 1.5%;\n        font-size: 80%;\n        color: black;\n        box-shadow: 1px 1px 3px #888888;\n        max-height: 100%; }\n  @media screen and (max-width: 991px) {\n          .services-container .services .service .content-container {\n            width: 100%;\n            padding: 5%; } }\n  @media screen and (min-width: 992px) {\n          .services-container .services .service .content-container {\n            width: 90%; } }\n  .services-container .services .service .content-container h4 {\n          text-decoration: underline; }\n  .services-container .services .service .content-container div {\n          padding: 0.5%; }\n  .services-container .services #frontend, .services-container .services #database {\n      background: #ececec; }\n  .services-container .services #design, .services-container .services #backend {\n      background: #0abab0; }\n"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.isInViewport = function (el) {
        var rect = el.getBoundingClientRect();
        return (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */);
    };
    ServicesComponent.prototype.isInView = function (el, callback) {
        var _this = this;
        var old_visible = false;
        return (function () {
            var visible = _this.isInViewport(el);
            if (visible !== old_visible) {
                old_visible = visible;
                if (typeof callback === 'function') {
                    callback();
                }
            }
        });
    };
    ServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceView = false;
        this.inView = false;
        var handler = this.isInView(document.querySelector('.services-header'), function () {
            _this.inView = true;
        });
        var serviceHandler = this.isInView(document.querySelector('.service-list'), function () {
            _this.serviceView = true;
        });
        jquery__WEBPACK_IMPORTED_MODULE_2__(window).on('DOMContentLoaded load resize scroll', serviceHandler);
        jquery__WEBPACK_IMPORTED_MODULE_2__(window).on('DOMContentLoaded load resize scroll', handler);
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/services/services.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slide', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(-200%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateX(0)' })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateX(200%)' }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideOpposite', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(200%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateX(0)' })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateX(-200%)' }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('staggerSlide', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.service .image-container', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateX(-200%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('100ms', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('750ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateX(0)' })),
                            ]),
                        ])
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('staggerSlide2', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.service .content-container', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateX(200%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('100ms', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('750ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateX(0)' })),
                            ]),
                        ])
                    ])
                ]),
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/sticky-navbar/sticky-navbar.component.html":
/*!************************************************************!*\
  !*** ./src/app/sticky-navbar/sticky-navbar.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='navigation-bar' id='myNavbar'>\n  <ul>\n    <li><a href='#home'>home</a></li>\n    <li><a href='#bio'>bio</a></li>\n    <li><a href='#projects'>projects</a></li>\n    <li><a href='#services'>services</a></li>\n    <li><a href='#contact'>contact</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/sticky-navbar/sticky-navbar.component.scss":
/*!************************************************************!*\
  !*** ./src/app/sticky-navbar/sticky-navbar.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation-bar {\n  -webkit-animation: 1s ease-out 0s 1 slideInFromLeft;\n          animation: 1s ease-out 0s 1 slideInFromLeft;\n  width: 100%; }\n  .navigation-bar ul {\n    width: 100%;\n    margin: 2vh 0;\n    padding: 0;\n    z-index: 5000; }\n  .navigation-bar ul li {\n      font-size: 150%;\n      display: inline-block;\n      width: 15%;\n      padding: 0 3%;\n      transition: -webkit-transform 0.2s;\n      transition: transform 0.2s;\n      transition: transform 0.2s, -webkit-transform 0.2s; }\n  .navigation-bar ul li a {\n        text-decoration: none;\n        color: white;\n        display: inline; }\n  .navigation-bar ul li:hover {\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1); }\n  .navigation-bar ul li:hover a {\n          color: black; }\n"

/***/ }),

/***/ "./src/app/sticky-navbar/sticky-navbar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/sticky-navbar/sticky-navbar.component.ts ***!
  \**********************************************************/
/*! exports provided: StickyNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyNavbarComponent", function() { return StickyNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StickyNavbarComponent = /** @class */ (function () {
    function StickyNavbarComponent() {
    }
    StickyNavbarComponent.prototype.ngAfterViewInit = function () {
    };
    StickyNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sticky-navbar',
            template: __webpack_require__(/*! ./sticky-navbar.component.html */ "./src/app/sticky-navbar/sticky-navbar.component.html"),
            styles: [__webpack_require__(/*! ./sticky-navbar.component.scss */ "./src/app/sticky-navbar/sticky-navbar.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        }),
        __metadata("design:paramtypes", [])
    ], StickyNavbarComponent);
    return StickyNavbarComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! /Users/jmoussa/code_angular/professionalSite/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map