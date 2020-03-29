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

module.exports = ".app-container {\n  margin: 0px;\n  padding: 0px;\n  width: 100vw;\n  max-width: 100%;\n  overflow-x: hidden;\n  /*\n    @-webkit-keyframes slide {\n        from { background-position: 0 0; }\n        to { background-position: 1000px 0px; }\n    }\n    */ }\n  .app-container .jumbotron {\n    font-family: 'Montserrat', sans-serif;\n    color: white;\n    text-align: center;\n    padding: 0px;\n    margin: 0px;\n    height: 100vh;\n    min-height: 860px;\n    width: 100vw;\n    max-width: 100%;\n    background-color: #32adaa;\n    background-image: url('black-felt.png');\n    position: relative;\n    transition: transform 0.2s; }\n  .app-container .jumbotron .arrowContainer {\n      width: 100%;\n      height: 10%;\n      position: absolute;\n      bottom: 0px;\n      text-align: center;\n      z-index: 100; }\n  .app-container .jumbotron .arrowContainer:hover {\n        transform: scale(1.01); }\n  .app-container .jumbotron .arrowContainer:hover a {\n          color: black; }\n  .app-container .jumbotron .arrowContainer a {\n        display: inline;\n        font-size: 150%;\n        text-decoration: none;\n        color: white; }\n  .app-container .jumbotron .sticky {\n      background-color: #32adaa;\n      background-image: url('black-felt.png');\n      box-shadow: 3px 3px 12px 3px rgba(0, 0, 0, 0.1);\n      position: fixed;\n      top: 0;\n      left: 0;\n      height: 5re;\n      min-height: 67px;\n      width: 100%;\n      z-index: 5000; }\n  .app-container .jumbotron .sticky .navbar {\n        background-color: #037171; }\n  .app-container .jumbotron .name {\n      padding: 35vh 0px;\n      z-index: 100; }\n  .app-container .jumbotron .name h1 {\n        font-size: 500%; }\n  .app-container .jumbotron .name h3 {\n        font-size: 300%; }\n  .app-container .jumbotron .name h5 {\n        font-size: 200%; }\n  .app-container .jumbotron .fade-in {\n      transform: translateZ(0);\n      opacity: 0;\n      /* make things invisible upon start */\n      -webkit-animation: fadeIn ease-in 1;\n      /* call our keyframe named fadeIn, use animattion ease-in and repeat it only 1 time */\n      animation: fadeIn ease-in 1;\n      -webkit-animation-fill-mode: forwards;\n      /* this makes sure that after animation is done we remain at the last keyframe value (opacity: 1)*/\n      animation-fill-mode: forwards;\n      -webkit-animation-duration: 1s;\n      animation-duration: 1s; }\n  .app-container .body {\n    height: 100vh;\n    width: 100vw;\n    max-width: 100%;\n    margin: auto;\n    background: white;\n    color: black;\n    overflow: hidden;\n    z-index: 2; }\n  .app-container #bio, .app-container #services {\n    max-width: 2560px; }\n  .app-container #projects, .app-container #contact {\n    background-color: #ececec; }\n  .app-container #bio, .app-container #projects, .app-container #services {\n    min-height: 1080px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qbW91c3NhL2NvZGVfYW5ndWxhci9wcm9mZXNzaW9uYWxTaXRlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFVO0VBQ1YsWUFBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBR2xCOzs7OztLQ0VDLEVER0M7RUFkTjtJQWdCUSxxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFXO0lBQ1gsV0FBVTtJQUNWLGFBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBVztJQUNYLGVBQWU7SUFDZix5QkFBaUM7SUFDakMsdUNBQWlEO0lBQ2pELGtCQUFrQjtJQUlsQiwwQkFBMEIsRUFBQTtFQS9CbEM7TUFrQ1ksV0FBVztNQUNYLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixZQUFZLEVBQUE7RUF2Q3hCO1FBNkNnQixzQkFBc0IsRUFBQTtFQTdDdEM7VUEwQ29CLFlBQVksRUFBQTtFQTFDaEM7UUFnRGdCLGVBQWM7UUFDZCxlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLFlBQVksRUFBQTtFQW5ENUI7TUF5RFkseUJBQWlDO01BQ2pDLHVDQUFpRDtNQUVqRCwrQ0FBMkM7TUFDM0MsZUFBZTtNQUNmLE1BQU07TUFDTixPQUFPO01BQ1AsV0FBVztNQUNYLGdCQUFnQjtNQUNoQixXQUFXO01BS1gsYUFBYSxFQUFBO0VBdkV6QjtRQW9FZ0IseUJBQXlCLEVBQUE7RUFwRXpDO01BMkVZLGlCQUFpQjtNQUNqQixZQUFZLEVBQUE7RUE1RXhCO1FBOEVnQixlQUFlLEVBQUE7RUE5RS9CO1FBaUZnQixlQUFlLEVBQUE7RUFqRi9CO1FBb0ZnQixlQUFlLEVBQUE7RUFwRi9CO01BeUZZLHdCQUF3QjtNQUN4QixVQUFTO01BQUcscUNBQUE7TUFDWixtQ0FBa0M7TUFBRyxxRkFBQTtNQUVyQywyQkFBMEI7TUFFMUIscUNBQW9DO01BQUcsa0dBQUE7TUFFdkMsNkJBQTRCO01BRTVCLDhCQUE2QjtNQUU3QixzQkFBcUIsRUFBQTtFQXJHakM7SUEyR1EsYUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUE4QjtJQUM5QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVUsRUFBQTtFQWxIbEI7SUFzSFEsaUJBQWlCLEVBQUE7RUF0SHpCO0lBeUhRLHlCQUFvQyxFQUFBO0VBekg1QztJQTZIUSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29udGFpbmVye1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbjowcHg7XG4gICAgcGFkZGluZzowcHg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgLy9tYXgtd2lkdGg6IDEwODBweDtcbiAgICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKlxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBzbGlkZSB7XG4gICAgICAgIGZyb20geyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7IH1cbiAgICAgICAgdG8geyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAwcHggMHB4OyB9XG4gICAgfVxuICAgICovXG4gICAgLmp1bWJvdHJvbntcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6MHB4O1xuICAgICAgICBtYXJnaW46MHB4O1xuICAgICAgICBoZWlnaHQ6MTAwdmg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDg2MHB4OyBcbiAgICAgICAgd2lkdGg6MTAwdnc7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLDE3MywxNzApO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9ibGFjay1mZWx0LnBuZycpOyBcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICAgICAgICAtby10cmFuc2l0aW9uOnRyYW5zZm9ybSAwLjJzO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgICAgICAgXG4gICAgICAgIC5hcnJvd0NvbnRhaW5lcntcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDsgXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIC8vY29sb3I6ICMwMGUxZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1MCU7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICAuc3RpY2t5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwxNzMsMTcwKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2JsYWNrLWZlbHQucG5nJyk7IFxuICAgICAgICAgICAgLy9iYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAzcHggcmdiYSgwLDAsMCwuMSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiA1cmU7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA2N3B4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAubmF2YmFyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM3MTcxO1xuICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB6LWluZGV4OiA1MDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgcGFkZGluZzogMzV2aCAwcHg7IFxuICAgICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoNSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZmFkZS1pbiB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgICAgICBvcGFjaXR5OjA7ICAvKiBtYWtlIHRoaW5ncyBpbnZpc2libGUgdXBvbiBzdGFydCAqL1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTsgIC8qIGNhbGwgb3VyIGtleWZyYW1lIG5hbWVkIGZhZGVJbiwgdXNlIGFuaW1hdHRpb24gZWFzZS1pbiBhbmQgcmVwZWF0IGl0IG9ubHkgMSB0aW1lICovXG4gICAgICAgICAgICAtbW96LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuICAgICAgICAgICAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gICAgICAgIFxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzOyAgLyogdGhpcyBtYWtlcyBzdXJlIHRoYXQgYWZ0ZXIgYW5pbWF0aW9uIGlzIGRvbmUgd2UgcmVtYWluIGF0IHRoZSBsYXN0IGtleWZyYW1lIHZhbHVlIChvcGFjaXR5OiAxKSovXG4gICAgICAgICAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG4gICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuICAgICAgICBcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xuICAgICAgICAgICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246MXM7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC5ib2R5IHtcbiAgICAgICAgaGVpZ2h0OjEwMHZoO1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICB9XG4gICAgXG4gICAgI2JpbywgI3NlcnZpY2VzIHtcbiAgICAgICAgbWF4LXdpZHRoOiAyNTYwcHg7XG4gICAgfVxuICAgICNwcm9qZWN0cywgI2NvbnRhY3R7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcbiAgICB9XG5cbiAgICAjYmlvLCAjcHJvamVjdHMsICNzZXJ2aWNlcyB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwODBweDtcbiAgICB9XG5cbn1cbiIsIi5hcHAtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgLypcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUge1xuICAgICAgICBmcm9tIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwOyB9XG4gICAgICAgIHRvIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwMHB4IDBweDsgfVxuICAgIH1cbiAgICAqLyB9XG4gIC5hcHAtY29udGFpbmVyIC5qdW1ib3Ryb24ge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtaW4taGVpZ2h0OiA4NjBweDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMmFkYWE7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2JsYWNrLWZlbHQucG5nXCIpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gICAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7IH1cbiAgICAuYXBwLWNvbnRhaW5lciAuanVtYm90cm9uIC5hcnJvd0NvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB6LWluZGV4OiAxMDA7IH1cbiAgICAgIC5hcHAtY29udGFpbmVyIC5qdW1ib3Ryb24gLmFycm93Q29udGFpbmVyOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTsgfVxuICAgICAgICAuYXBwLWNvbnRhaW5lciAuanVtYm90cm9uIC5hcnJvd0NvbnRhaW5lcjpob3ZlciBhIHtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7IH1cbiAgICAgIC5hcHAtY29udGFpbmVyIC5qdW1ib3Ryb24gLmFycm93Q29udGFpbmVyIGEge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogd2hpdGU7IH1cbiAgICAuYXBwLWNvbnRhaW5lciAuanVtYm90cm9uIC5zdGlja3kge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMyYWRhYTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9ibGFjay1mZWx0LnBuZ1wiKTtcbiAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGhlaWdodDogNXJlO1xuICAgICAgbWluLWhlaWdodDogNjdweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgei1pbmRleDogNTAwMDsgfVxuICAgICAgLmFwcC1jb250YWluZXIgLmp1bWJvdHJvbiAuc3RpY2t5IC5uYXZiYXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM3MTcxOyB9XG4gICAgLmFwcC1jb250YWluZXIgLmp1bWJvdHJvbiAubmFtZSB7XG4gICAgICBwYWRkaW5nOiAzNXZoIDBweDtcbiAgICAgIHotaW5kZXg6IDEwMDsgfVxuICAgICAgLmFwcC1jb250YWluZXIgLmp1bWJvdHJvbiAubmFtZSBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNTAwJTsgfVxuICAgICAgLmFwcC1jb250YWluZXIgLmp1bWJvdHJvbiAubmFtZSBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzAwJTsgfVxuICAgICAgLmFwcC1jb250YWluZXIgLmp1bWJvdHJvbiAubmFtZSBoNSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjAwJTsgfVxuICAgIC5hcHAtY29udGFpbmVyIC5qdW1ib3Ryb24gLmZhZGUtaW4ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIC8qIG1ha2UgdGhpbmdzIGludmlzaWJsZSB1cG9uIHN0YXJ0ICovXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIGVhc2UtaW4gMTtcbiAgICAgIC8qIGNhbGwgb3VyIGtleWZyYW1lIG5hbWVkIGZhZGVJbiwgdXNlIGFuaW1hdHRpb24gZWFzZS1pbiBhbmQgcmVwZWF0IGl0IG9ubHkgMSB0aW1lICovXG4gICAgICAtbW96LWFuaW1hdGlvbjogZmFkZUluIGVhc2UtaW4gMTtcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIGVhc2UtaW4gMTtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAvKiB0aGlzIG1ha2VzIHN1cmUgdGhhdCBhZnRlciBhbmltYXRpb24gaXMgZG9uZSB3ZSByZW1haW4gYXQgdGhlIGxhc3Qga2V5ZnJhbWUgdmFsdWUgKG9wYWNpdHk6IDEpKi9cbiAgICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7IH1cbiAgLmFwcC1jb250YWluZXIgLmJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgei1pbmRleDogMjsgfVxuICAuYXBwLWNvbnRhaW5lciAjYmlvLCAuYXBwLWNvbnRhaW5lciAjc2VydmljZXMge1xuICAgIG1heC13aWR0aDogMjU2MHB4OyB9XG4gIC5hcHAtY29udGFpbmVyICNwcm9qZWN0cywgLmFwcC1jb250YWluZXIgI2NvbnRhY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7IH1cbiAgLmFwcC1jb250YWluZXIgI2JpbywgLmFwcC1jb250YWluZXIgI3Byb2plY3RzLCAuYXBwLWNvbnRhaW5lciAjc2VydmljZXMge1xuICAgIG1pbi1oZWlnaHQ6IDEwODBweDsgfVxuIl19 */"

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
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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

module.exports = "<div id='main'>\n\t<div class=\"header\">\n    <h1 @slide *ngIf='inView' >Bio</h1>\n    <div @slideOpposite *ngIf='inView' class=\"bar\"></div>\n  </div>\n  <div class='container d-none d-md-inline-block'>\n    <ul @staggerGrow *ngIf='iconView' class='row'>\n      <li class='d-none d-sm-none d-md-inline-block col-lg-3 col-md-6'>\n\t\t\t\t<img src='../../assets/images/tailored.png' alt='tailored' width=\"175px\" height=\"125px\"/>\n\t\t\t\t<h5>Tailored</h5>\n      </li>\n      <li class='d-none d-sm-none d-md-inline-block col-lg-3 col-md-6'>\n\t\t\t\t<img src='../../assets/images/dynamic.png' alt='dynamic' width=\"175px\" height=\"125px\"/>\n        <h5>Dynamic</h5>\n      </li>\n      <li class='d-none d-sm-none d-md-inline-block col-lg-3 col-md-6'>\n\t\t\t\t<img src='../../assets/images/pixelperfect.png' alt='pixel perfect' width=\"175px\" height=\"125px\"/>\n        <h5>Pixel Perfect</h5>\n      </li>\n      <li class='d-none d-sm-none d-md-inline-block col-lg-3 col-md-6'>\n\t\t\t\t<img src='../../assets/images/user.png' alt='user driven' width=\"175px\" height=\"125px\"/>\n        <h5>User Driven</h5>\n      </li>\n    </ul>\n  </div>\n\t<div class=\"row\">\n\t\t<div class='about col-md-6 col-sm-12 col-12'>\n\t\t\t<div class='img'>\n\t\t\t\t<img src=\"../../assets/images/headshot.jpeg\" alt=\"headshot\" width='120' height=\"150\">\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<h2>About Me</h2>\n                Hey there! \n                I'm currently a Backend Software Engineer at <a href='https://thewaltdisneycompany.com/'>The Walt Disney Company</a>, with over 3 years of experience in software development.\n                I also have experience building full stack web applications in addition to data pipelining.\n                In my free time I enjoy reading about and picking up some of the latest trends in software development, watching/playing sports, motorcycling and just getting out of the house.\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"chart-container col-md-6 col-sm-12 col-12\">\n\t\t\t<div class=\"chart chart--dev\">\n\t\t\t\t<ul @staggerSlide *ngIf='graphView' class=\"chart--horiz\">\n\t\t\t\t\t<li class=\"chart__bar\">\n\t\t\t\t\t\t<div class='chart_percent' style=\"width: 90%;\">\n\t\t\t\t\t\t\t<div class=\"label__holder\">\n                                HTML/CSS\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t</li>\n                    <li class=\"chart__bar\">\n\t\t\t\t\t\t<div class='chart_percent' style=\"width: 80%;\">\n\t\t\t\t\t\t\t<div class=\"label__holder\">\n\t\t\t\t\t\t\t\tJavaScript\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"chart__bar\">\n\t\t\t\t\t\t<div class='chart_percent' style=\"width: 70%;\">\n\t\t\t\t\t\t\t<div class=\"label__holder\">\n\t\t\t\t\t\t\t\tAngular\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"chart__bar\">\n\t\t\t\t\t\t<div class='chart_percent' style=\"width: 70%;\">\n\t\t\t\t\t\t\t<div class=\"label__holder\">\n\t\t\t\t\t\t\t\tReact\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"chart__bar\">\n\t\t\t\t\t\t<div class='chart_percent' style=\"width: 80%;\">\n\t\t\t\t\t\t\t<div class=\"label__holder\">\n\t\t\t\t\t\t\t\tMySQL\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"chart__bar\">\n\t\t\t\t\t\t<div class='chart_percent' style=\"width: 90%;\">\n\t\t\t\t\t\t\t<div class=\"label__holder\">\n\t\t\t\t\t\t\t\tSequelize\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"chart__bar\">\n\t\t\t\t\t\t<div class='chart_percent' style=\"width: 90%;\">\n\t\t\t\t\t\t\t<div class=\"label__holder\">\n\t\t\t\t\t\t\t\tNodeJS\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"chart__bar\">\n\t\t\t\t\t\t<div class='chart_percent' style=\"width: 90%;\">\n\t\t\t\t\t\t\t<div class=\"label__holder\">\n\t\t\t\t\t\t\t\tExpress\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n                    <li class=\"chart__bar\">\n\t\t\t\t\t\t<div class='chart_percent' style=\"width: 90%;\">\n\t\t\t\t\t\t\t<div class=\"label__holder\">\n                                Python \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n                    <li class=\"chart__bar\">\n\t\t\t\t\t\t<div class='chart_percent' style=\"width: 80%;\">\n\t\t\t\t\t\t\t<div class=\"label__holder\">\n                                AWS\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n                </ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/bio/bio.component.scss":
/*!****************************************!*\
  !*** ./src/app/bio/bio.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\n  padding: 6% 0;\n  margin: 0 15%; }\n  #main .header {\n    text-align: center;\n    width: 100%;\n    height: 10vh;\n    display: block; }\n  #main .header .bar {\n      margin: 1% auto;\n      background-color: black;\n      width: 50px;\n      height: 5%; }\n  #main .container {\n    width: 100%;\n    max-width: 100%;\n    margin: 0;\n    padding: 0; }\n  #main .container .row {\n      width: 100%;\n      max-width: 100%;\n      text-align: center;\n      height: 100%;\n      padding: 0;\n      margin: 3% 0; }\n  #main .container .row li {\n        display: block;\n        padding: 0 5%;\n        margin: auto;\n        transform: translateZ(0); }\n  #main .container .row li img {\n          transform: translateZ(0);\n          max-width: 100%;\n          max-height: 125px;\n          width: auto;\n          height: auto;\n          display: block;\n          margin: auto;\n          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n          transform: translateZ(0);\n          box-shadow: 0 0 1px rgba(0, 0, 0, 0); }\n  #main .container .row li h5 {\n          transform: translateZ(0);\n          display: block;\n          text-align: center;\n          margin: 5% auto;\n          width: 100%; }\n  #main .about {\n    float: left;\n    width: 50%;\n    height: 50%;\n    text-align: center;\n    padding: 5%; }\n  #main .about div {\n      overflow: hidden;\n      height: 50%;\n      padding: 0 5%;\n      text-align: center; }\n  #main .about div img {\n        border-radius: 5px;\n        border: 2px solid #0abab5;\n        height: 35%;\n        width: 35%;\n        margin-bottom: 5%; }\n  #main .chart-container {\n    float: right;\n    width: 50%;\n    height: 50%;\n    padding: 5%; }\n  .chart {\n  margin: 30px 0 0; }\n  .chart:first-child {\n    margin: 0; }\n  .chart--horiz {\n  overflow: hidden;\n  list-style-type: none;\n  margin: 0px;\n  padding: 0px; }\n  .label__holder {\n  overflow: hidden;\n  width: 100px;\n  height: 100%;\n  background-color: grey;\n  text-align: center;\n  z-index: 10;\n  padding: 0 7px;\n  line-height: 30px;\n  color: black; }\n  .chart__bar {\n  height: 30px;\n  margin-bottom: 15px;\n  background-color: #ececec;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n  z-index: 500;\n  width: 100%; }\n  .chart_percent {\n  transform: translateZ(0);\n  z-index: 499;\n  background-color: #0abab5;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qbW91c3NhL2NvZGVfYW5ndWxhci9wcm9mZXNzaW9uYWxTaXRlL3NyYy9hcHAvYmlvL2Jpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQTtFQUNJLGFBQWE7RUFDYixhQUFhLEVBQUE7RUFGakI7SUFJUSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjLEVBQUE7RUFQdEI7TUFTWSxlQUFlO01BQ2YsdUJBQXVCO01BQ3ZCLFdBQVc7TUFDWCxVQUFVLEVBQUE7RUFadEI7SUFpQlEsV0FBVztJQUNYLGVBQWU7SUFDZixTQUFRO0lBQ1IsVUFBUyxFQUFBO0VBcEJqQjtNQXNCWSxXQUFXO01BQ1gsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osVUFBVTtNQUNWLFlBQVksRUFBQTtFQTNCeEI7UUE4QmdCLGNBQWM7UUFDZCxhQUFhO1FBQ2IsWUFBWTtRQUNaLHdCQUF3QixFQUFBO0VBakN4QztVQW1Db0Isd0JBQXdCO1VBQ3hCLGVBQWU7VUFDZixpQkFBaUI7VUFDakIsV0FBVztVQUNYLFlBQVk7VUFDWixjQUFjO1VBQ2QsWUFBWTtVQXJEL0IsNkNBQTBDO1VBSTFDLHdCQUF3QjtVQUt2QixvQ0FBb0MsRUFBQTtFQUd0QztVQStDb0Isd0JBQXdCO1VBQ3hCLGNBQWE7VUFDYixrQkFBa0I7VUFDbEIsZUFBZTtVQUNmLFdBQVUsRUFBQTtFQW5EOUI7SUEwRFEsV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVcsRUFBQTtFQTlEbkI7TUFnRVksZ0JBQWdCO01BUWhCLFdBQVc7TUFDWCxhQUFhO01BQ2Isa0JBQWtCLEVBQUE7RUExRTlCO1FBa0VnQixrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLFdBQVc7UUFDWCxVQUFVO1FBQ1YsaUJBQWlCLEVBQUE7RUF0RWpDO0lBZ0ZRLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVcsRUFBQTtFQUduQjtFQUNJLGdCQUFnQixFQUFBO0VBRHBCO0lBR1EsU0FBUyxFQUFBO0VBR2pCO0VBQ0ksZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWSxFQUFBO0VBRWhCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7RUFFaEI7RUFFSSxZQUFZO0VBQ1osbUJBQW1CO0VBRW5CLHlCQUFvQztFQUNwQyw0QkFMZ0I7RUFNaEIsK0JBTmdCO0VBT2hCLFlBQVk7RUFDWixXQUFXLEVBQUE7RUFJZjtFQUNJLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Jpby9iaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gaGlkZVRhcEhpZ2hsaWdodENvbG9yKCkge1xuXHQvL1ByZXZlbnQgaGlnaGxpZ2h0IGNvbG91ciB3aGVuIGVsZW1lbnQgaXMgdGFwcGVkXG5cdC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcbn1cbkBtaXhpbiBoYXJkd2FyZUFjY2VsKCkge1xuXHQvL0ltcHJvdmUgcGVyZm9ybWFuY2Ugb24gbW9iaWxlL3RhYmxldCBkZXZpY2VzXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbn1cblxuQG1peGluIGltcHJvdmVBbnRpQWxpYXMoKSB7XG5cdC8vSW1wcm92ZSBhbGlhc2luZyBvbiBtb2JpbGUvdGFibGV0IGRldmljZXNcbiAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4jbWFpbiB7XG4gICAgcGFkZGluZzogNiUgMDtcbiAgICBtYXJnaW46IDAgMTUlO1xuICAgIC5oZWFkZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwdmg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAuYmFyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMSUgYXV0bztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUlO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjowO1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAzJSAwO1xuXG4gICAgICAgICAgICBsaXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDUlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEyNXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBoaWRlVGFwSGlnaGxpZ2h0Q29sb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgaGFyZHdhcmVBY2NlbCgpO1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBpbXByb3ZlQW50aUFsaWFzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGg1IHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNSUgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWJvdXQge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzBhYmFiNTsgXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNSU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1JTsgXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNSU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgLmNoYXJ0LWNvbnRhaW5lciB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgIHBhZGRpbmc6IDUlO1xuICAgIH1cbn1cbi5jaGFydCB7XG4gICAgbWFyZ2luOiAzMHB4IDAgMDtcbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn1cbi5jaGFydC0taG9yaXoge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5sYWJlbF9faG9sZGVye1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBwYWRkaW5nOiAwIDdweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4uY2hhcnRfX2JhciB7XG4gICAgJGJvcmRlci1yYWQ6IDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTsgXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRib3JkZXItcmFkO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZDtcbiAgICB6LWluZGV4OiA1MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG59XG5cbi5jaGFydF9wZXJjZW50IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgei1pbmRleDogNDk5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYWJhYjU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbiJdfQ== */"

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
            ],
            styles: [__webpack_require__(/*! ./bio.component.scss */ "./src/app/bio/bio.component.scss")]
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

module.exports = ".contact-container {\n  margin: 0px;\n  padding: 0px;\n  width: 100vw;\n  height: 100vh;\n  position: relative; }\n  .contact-container .main {\n    padding: 0;\n    margin: 6% 25%;\n    color: black;\n    height: 85%;\n    display: inline;\n    width: 100%; }\n  .contact-container .main .cform {\n      width: 100%;\n      text-align: center;\n      margin: 0px;\n      padding: 0px; }\n  .contact-container .main .cform .contact-header {\n        text-align: center;\n        width: 100%;\n        height: 10vh;\n        margin-bottom: 3vh;\n        display: block; }\n  .contact-container .main .cform .contact-header .bar {\n          margin: 1% auto;\n          background-color: black;\n          width: 50px;\n          height: 5%; }\n  .contact-container .main .cform .contact-statement {\n        padding: 3% 0; }\n  .contact-container .main .cform .contact-statement h6 {\n          padding: 1% 15%; }\n  .contact-container .main .cform .contact-button {\n        margin: 10% 0; }\n  .contact-container .main .cform .contact-button a {\n          text-decoration: none;\n          color: black;\n          padding: 2% 5%;\n          border: 2px solid #0abab5; }\n  .contact-container .main .cform .contact-button a:hover {\n            background-color: #0abab5; }\n  .contact-container .main .cform .form-group button {\n        border-radius: 0px; }\n  .contact-container .main .cform .form-group button:hover {\n          background-color: #0abab5; }\n  .contact-container .contact-footer {\n    width: 100%;\n    text-align: center;\n    background-color: #32adaa;\n    height: 75px;\n    margin: auto;\n    padding: 0;\n    display: flex;\n    position: absolute;\n    bottom: 0px; }\n  .contact-container .contact-footer div {\n      display: flex;\n      margin: auto; }\n  .contact-container .footer {\n    display: block;\n    text-align: center;\n    position: fixed;\n    bottom: 0px;\n    height: 35vh;\n    min-height: 300px; }\n  @media screen and (max-width: 760px) {\n      .contact-container .footer {\n        width: 10%; } }\n  @media screen and (min-width: 761px) {\n      .contact-container .footer {\n        width: 7.5%; } }\n  .contact-container .footer .line {\n      background-color: #32adaa;\n      width: 3px;\n      padding: 0px;\n      margin-left: 49.25%;\n      margin-right: 49.25%;\n      margin-top: 15%;\n      height: 100%; }\n  .contact-container .footer .links {\n      margin: 0;\n      display: block;\n      width: 100%;\n      text-align: center; }\n  .contact-container .footer .links div {\n        margin: auto;\n        margin-top: 10%;\n        width: 100%;\n        max-width: 100%;\n        padding: 1%;\n        height: auto;\n        display: block;\n        text-align: center; }\n  .contact-container .footer .links div a {\n          padding: 0;\n          margin: auto;\n          position: relative;\n          text-decoration: none;\n          color: black; }\n  .contact-container .footer .links div a .label {\n            margin: 0px;\n            padding: 0px;\n            width: 0px;\n            position: absolute;\n            right: 0;\n            bottom: 0;\n            left: 0px;\n            opacity: 0;\n            text-decoration: none;\n            text-align: left; }\n  .contact-container .footer .links div a img {\n            padding: 0;\n            margin: 0;\n            width: 25px;\n            height: 25px;\n            transition-duration: 250ms;\n            transition-property: transform; }\n  .contact-container .footer .links div:hover {\n          transform: scale(1.2); }\n  .contact-container .footer .links div:hover a .label {\n            transition: 0.2s ease-out;\n            left: 30px;\n            opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qbW91c3NhL2NvZGVfYW5ndWxhci9wcm9mZXNzaW9uYWxTaXRlL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUViLGtCQUFrQixFQUFBO0VBTnRCO0lBU1EsVUFBVTtJQUNWLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXLEVBQUE7RUFkbkI7TUFpQlksV0FBVztNQUNYLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsWUFBWSxFQUFBO0VBcEJ4QjtRQXNCZ0Isa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGNBQWMsRUFBQTtFQTFCOUI7VUE0Qm9CLGVBQWU7VUFDZix1QkFBdUI7VUFDdkIsV0FBVztVQUNYLFVBQVUsRUFBQTtFQS9COUI7UUFxQ2dCLGFBQWEsRUFBQTtFQXJDN0I7VUF1Q29CLGVBQWUsRUFBQTtFQXZDbkM7UUE0Q2dCLGFBQWEsRUFBQTtFQTVDN0I7VUErQ29CLHFCQUFxQjtVQUNyQixZQUFZO1VBQ1osY0FBYztVQUNkLHlCQUF5QixFQUFBO0VBbEQ3QztZQXFEd0IseUJBQXlCLEVBQUE7RUFyRGpEO1FBNERvQixrQkFBa0IsRUFBQTtFQTVEdEM7VUE4RHdCLHlCQUF5QixFQUFBO0VBOURqRDtJQXNFUSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQUFpQztJQUNqQyxZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVcsRUFBQTtFQTlFbkI7TUFnRlksYUFBYTtNQUNiLFlBQVksRUFBQTtFQWpGeEI7SUF3RlEsY0FBYztJQVFkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUIsRUFBQTtFQVhoQjtNQXpGVDtRQTBGWSxVQUFVLEVBQUEsRUFvRmpCO0VBbEZHO01BNUZSO1FBNkZZLFdBQVcsRUFBQSxFQWlGbEI7RUE5S0w7TUF1R1kseUJBQWlDO01BQ2pDLFVBQVU7TUFDVixZQUFZO01BQ1osbUJBQW1CO01BQ25CLG9CQUFvQjtNQUNwQixlQUFlO01BQ2YsWUFBWSxFQUFBO0VBN0d4QjtNQWdIWSxTQUFTO01BQ1QsY0FBYztNQUNkLFdBQVc7TUFDWCxrQkFBa0IsRUFBQTtFQW5IOUI7UUFxSGdCLFlBQVk7UUFDWixlQUFlO1FBQ2YsV0FBVztRQUNYLGVBQWU7UUFFZixXQUFXO1FBRVgsWUFBWTtRQUNaLGNBQWM7UUFDZCxrQkFBaUIsRUFBQTtFQTlIakM7VUFpSW9CLFVBQVU7VUFDVixZQUFZO1VBQ1osa0JBQWtCO1VBQ2xCLHFCQUFxQjtVQUNyQixZQUFZLEVBQUE7RUFySWhDO1lBdUl3QixXQUFXO1lBQ1gsWUFBWTtZQUNaLFVBQVU7WUFDVixrQkFBaUI7WUFDakIsUUFBTztZQUNQLFNBQVE7WUFDUixTQUFRO1lBQ1IsVUFBUztZQUNULHFCQUFxQjtZQUNyQixnQkFBZ0IsRUFBQTtFQWhKeEM7WUFvSndCLFVBQVU7WUFDVixTQUFTO1lBQ1QsV0FBVztZQUNYLFlBQVk7WUFDWiwwQkFBMEI7WUFDMUIsOEJBQThCLEVBQUE7RUF6SnREO1VBK0pvQixxQkFBc0IsRUFBQTtFQS9KMUM7WUFxSzRCLHlCQUF5QjtZQUN6QixVQUFVO1lBQ1YsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgLy9taW4taGVpZ2h0OiA4NzVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAubWFpbntcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiA2JSAyNSU7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgaGVpZ2h0OiA4NSU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgLmNmb3JtIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAuY29udGFjdC1oZWFkZXIge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwdmg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIC5iYXIge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDElIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1JTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRhY3Qtc3RhdGVtZW50IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzJSAwO1xuICAgICAgICAgICAgICAgIGg2IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMSUgMTUlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRhY3QtYnV0dG9ue1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTAlIDA7XG5cbiAgICAgICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMiUgNSU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwYWJhYjU7XG5cbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGFiYWI1O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZm9ybS1ncm91cHtcbiAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGFiYWI1O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnRhY3QtZm9vdGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLDE3MywxNzApO1xuICAgICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBkaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIC5mb290ZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KXtcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzYxcHgpe1xuICAgICAgICAgICAgd2lkdGg6IDcuNSU7XG4gICAgICAgIH1cblxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGhlaWdodDogMzV2aDtcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XG5cbiAgICAgICAgLmxpbmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLDE3MywxNzApO1xuICAgICAgICAgICAgd2lkdGg6IDNweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0OS4yNSU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQ5LjI1JTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1JTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAubGlua3Mge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjazsgXG4gICAgICAgICAgICAgICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OjA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjApO1xuICAgICAgICAgICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgICAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

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
        window.open('../../assets/JosephMoussaResume.pdf', '_blank');
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
            ],
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
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

module.exports = "<div class='projects-container'>\n  <div class=\"project-header\">\n    <h1 @slide *ngIf='inView' class='heading'>Projects</h1>\n    <div @slideOpposite *ngIf='inView' class=\"bar\"></div>\n  </div>\n  \n  <div class='project-container' [@slideUp]='selected ? \"showDetails\" : \"hideDetails\"'>\n    <div @staggerGrow *ngIf='projectView' class='row'>\n      <div class='cards col-lg-4 col-md-12 col-sm-12 col-12'>\n        <div id='stocks'>\n          <h3>Stocks Analyzer</h3>\n          <span>  \n            <button (click)='showDetails(\"stocks\")' mat-button>Details</button>\n            <button (click)='navigateToGithub(\"python_stonks\")' mat-button>Github</button>\n          </span>  \n        </div>\n      </div>\n      <div class='cards col-lg-4 col-md-12 col-sm-12 col-12'>\n        <div id='expense'>\n          <h3>Expense Report App</h3>\n          <span>  \n            <button (click)='showDetails(\"expense\")' mat-button>Details</button>\n            <button (click)='navigateToGithub(\"expenseReportApp\")' mat-button>Github</button>\n            <button (click)='navigateToWebsite()' mat-button>Website</button>\n          </span>  \n        </div>\n      </div>\n      <div class='cards col-lg-4 col-md-12 col-sm-12 col-12'>\n        <div id='d3'>\n          <h3>D3 Charts</h3>\n          <span>  \n            <button (click)='showDetails(\"d3\")' mat-button>Details</button>\n            <button (click)='navigateToGithub(\"d3_graphs\")' mat-button>Github</button>\n          </span>  \n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class='detail-view' style='position:relative;'>\n    <div @slide *ngIf='stocks' class=\"project-detail\" style='position:absolute; top:25%; left:15%; right:15%;'>\n        <h4>Python Stock Market Analysis</h4>  \n        <p>\n          Basic S&amp;P 500 Analysis tool.<br>\n          Complete with scraper, local caching via pickle files, graphing and some machine learning prediction.<br>\n          Constant work in progress as I fine tune the classifiers and learn more\n        </p>\n        <h6>Technologies Used</h6>\n        <ul>\n          <li>Python</li>\n          <li>Pandas</li>\n          <li>SciKitLearn</li>\n        </ul>\n    </div>\n    <div @slide *ngIf='expense' class=\"project-detail\" style='position:absolute; top:25%; left:15%; right:15%;'> \n        <h4>Expense Report Web App</h4>  \n        <p>\n          Personal project using React.js, Node/Express and a MySQL database to hold an individual's purchase/expense history across stores.<br>\n          Good practice for building a front-end with React, and communicating with a backend and database.<br>\n          <a href=\"http://www.expensereport.link/\">Expense Report App</a>\n        </p>\n        <h6>Technologies Used</h6>\n        <ul>\n          <li>JavaScript</li>\n          <li>React</li>\n          <li>Node.js</li>\n          <li>ExpressJS</li>\n        </ul>\n    </div>\n    <div @slide *ngIf='d3' class=\"project-detail\" style='position:absolute; top:25%; left:15%; right:15%;'>\n        <h4>D3 Charts</h4>  \n        <p>\n          Simple Demo of D3's charting capabilities<br>\n          Comes with a custom formatted JSON file to input and output interactive graphs<br>\n        </p>\n        <h6>Technologies Used</h6>        \n        <ul>\n          <li>Javascript</li>\n          <li>D3</li>\n        </ul>\n    </div> \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projects-container {\n  margin: 0 15%;\n  padding: 6% 0; }\n  .projects-container .project-header {\n    text-align: center;\n    width: 100%;\n    height: 10vh;\n    min-height: 90px;\n    display: block; }\n  .projects-container .project-header .bar {\n      margin: 1% auto;\n      background-color: black;\n      width: 50px;\n      height: 5%; }\n  .projects-container .project-container {\n    width: 100%;\n    padding-top: 10%; }\n  .projects-container .project-container .row {\n      width: 100%;\n      text-align: center;\n      height: 100%;\n      padding: 0px;\n      margin: 0px; }\n  .projects-container .project-container .row div {\n        height: 100%;\n        list-style: none;\n        transform: translateZ(0); }\n  .projects-container .project-container .row div #stocks {\n          background: url('stocks.jpg');\n          background-repeat: no-repeat;\n          background-size: cover; }\n  .projects-container .project-container .row div #stocks:hover {\n            background: #0abab5; }\n  .projects-container .project-container .row div #expense {\n          background: url('expense.jpg');\n          background-repeat: no-repeat;\n          background-size: cover; }\n  .projects-container .project-container .row div #expense:hover {\n            background: #0abab5; }\n  .projects-container .project-container .row div #d3 {\n          background: url('d3.jpg');\n          background-repeat: no-repeat;\n          background-size: cover; }\n  .projects-container .project-container .row div #d3:hover {\n            background: #09b8b2; }\n  .projects-container .project-container .row div div {\n          transform: translateZ(0);\n          overflow: hidden;\n          width: 100%;\n          text-align: center;\n          background: grey;\n          margin: 3px 0;\n          transition-duration: 250ms;\n          transition-property: display, transform, opacity, background-color;\n          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n          transform: translateZ(0);\n          box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n          z-index: 50; }\n  @media screen and (max-width: 991px) {\n            .projects-container .project-container .row div div {\n              height: 13vh;\n              min-height: 130px; } }\n  @media screen and (min-width: 992px) {\n            .projects-container .project-container .row div div {\n              height: 25vh;\n              min-height: 210px; } }\n  .projects-container .project-container .row div div h3 {\n            transform: translateZ(0);\n            overflow: hidden;\n            height: 40%;\n            margin-top: 10%;\n            text-align: center;\n            display: none;\n            transition: translateX(-200%); }\n  @media screen and (max-width: 991px) {\n              .projects-container .project-container .row div div h3 {\n                margin: 0px;\n                padding-top: 5%; } }\n  .projects-container .project-container .row div div span {\n            transform: translateZ(0);\n            overflow: hidden;\n            height: 50%;\n            width: 100%;\n            transition: translateX(-200%);\n            display: none; }\n  @media screen and (max-width: 991px) {\n              .projects-container .project-container .row div div span {\n                margin-bottom: 50%;\n                height: 60%; } }\n  .projects-container .project-container .row div div span button {\n              transform: translateZ(0);\n              border-radius: 0px;\n              margin: 3%; }\n  .projects-container .project-container .row div div span button:hover {\n                background-color: #0abab5; }\n  .projects-container .project-container .row div div:hover {\n            transform: scale(1.02);\n            background: #0abab5;\n            opacity: 1; }\n  .projects-container .project-container .row div div:hover h3 {\n              display: inline-block;\n              -webkit-animation: 0.2s ease-out 0s 1 slideInFromTop;\n                      animation: 0.2s ease-out 0s 1 slideInFromTop;\n              opacity: 1; }\n  .projects-container .project-container .row div div:hover span {\n              opacity: 1;\n              display: inline-block;\n              -webkit-animation: 0.2s ease-out 0s 1 slideInFromBottom;\n                      animation: 0.2s ease-out 0s 1 slideInFromBottom; }\n  .projects-container .detail-view {\n    transform: translateZ(0);\n    width: 100%;\n    display: block;\n    padding: 5% 15%; }\n  .projects-container .detail-view .project-detail {\n      transform: translateZ(0);\n      background-color: white;\n      box-shadow: 0px 5px #888888;\n      padding: 4%;\n      font-size: 120%; }\n  @media screen and (max-width: 991px) {\n        .projects-container .detail-view .project-detail {\n          font-size: 100%;\n          box-shadow: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qbW91c3NhL2NvZGVfYW5ndWxhci9wcm9mZXNzaW9uYWxTaXRlL3NyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0E7RUFDSSxhQUFhO0VBQ2IsYUFBYSxFQUFBO0VBRmpCO0lBSVEsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWMsRUFBQTtFQVJ0QjtNQVVZLGVBQWU7TUFDZix1QkFBdUI7TUFDdkIsV0FBVztNQUNYLFVBQVUsRUFBQTtFQWJ0QjtJQWlCUSxXQUFXO0lBQ1gsZ0JBQWdCLEVBQUE7RUFsQnhCO01Bb0JZLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsWUFBVztNQUNYLFlBQVk7TUFDWixXQUFXLEVBQUE7RUF4QnZCO1FBMEJnQixZQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLHdCQUF3QixFQUFBO0VBNUJ4QztVQThCb0IsNkJBQWlEO1VBQ2pELDRCQUE0QjtVQUM1QixzQkFBc0IsRUFBQTtFQWhDMUM7WUFtQ3dCLG1CQUFtQixFQUFBO0VBbkMzQztVQXdDb0IsOEJBQWtEO1VBQ2xELDRCQUE0QjtVQUM1QixzQkFBc0IsRUFBQTtFQTFDMUM7WUE2Q3dCLG1CQUFtQixFQUFBO0VBN0MzQztVQWtEb0IseUJBQTZDO1VBQzdDLDRCQUE0QjtVQUM1QixzQkFBc0IsRUFBQTtFQXBEMUM7WUF1RHdCLG1CQUFtQixFQUFBO0VBdkQzQztVQTZEb0Isd0JBQXdCO1VBQ3hCLGdCQUFnQjtVQUNoQixXQUFVO1VBU1Ysa0JBQWtCO1VBQ2xCLGdCQUFlO1VBRWYsYUFBYTtVQW1DYiwwQkFBMEI7VUFDMUIsa0VBQWtFO1VBM0hyRiw2Q0FBMEM7VUFJMUMsd0JBQXdCO1VBS3JCLG9DQUFvQztVQXdIcEIsV0FBVyxFQUFBO0VBckRYO1lBaEVwQjtjQWlFd0IsWUFBVztjQUNYLGlCQUFnQixFQUFBLEVBbUV2QjtFQWpFRztZQXBFcEI7Y0FxRXdCLFlBQVc7Y0FDWCxpQkFBaUIsRUFBQSxFQStEeEI7RUFySWpCO1lBNkV3Qix3QkFBd0I7WUFDeEIsZ0JBQWdCO1lBQ2hCLFdBQVc7WUFDWCxlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYiw2QkFBNkIsRUFBQTtFQUM3QjtjQXBGeEI7Z0JBcUY0QixXQUFXO2dCQUNYLGVBQWUsRUFBQSxFQUV0QjtFQXhGckI7WUEwRndCLHdCQUF3QjtZQUN4QixnQkFBZ0I7WUFDaEIsV0FBVztZQUNYLFdBQVc7WUFDWCw2QkFBNkI7WUFDN0IsYUFBYSxFQUFBO0VBQ2I7Y0FoR3hCO2dCQWlHNEIsa0JBQWtCO2dCQUNsQixXQUFXLEVBQUEsRUFVbEI7RUE1R3JCO2NBcUc0Qix3QkFBd0I7Y0FDeEIsa0JBQWtCO2NBQ2xCLFVBQVUsRUFBQTtFQXZHdEM7Z0JBeUdnQyx5QkFBeUIsRUFBQTtFQXpHekQ7WUF1SHdCLHNCQUFzQjtZQUN0QixtQkFBbUI7WUFDbkIsVUFBVSxFQUFBO0VBekhsQztjQTJINEIscUJBQW9CO2NBQ3BCLG9EQUE0QztzQkFBNUMsNENBQTRDO2NBQzVDLFVBQVUsRUFBQTtFQTdIdEM7Y0FnSTRCLFVBQVU7Y0FDVixxQkFBb0I7Y0FDcEIsdURBQStDO3NCQUEvQywrQ0FBK0MsRUFBQTtFQWxJM0U7SUEySVEsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxjQUFhO0lBQ2IsZUFBZSxFQUFBO0VBOUl2QjtNQWdKWSx3QkFBd0I7TUFDeEIsdUJBQXVCO01BQ3ZCLDJCQUEyQjtNQUMzQixXQUFXO01BQ1gsZUFBZSxFQUFBO0VBQ2Y7UUFySlo7VUFzSmdCLGVBQWU7VUFDZixnQkFBZ0IsRUFBQSxFQUV2QiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGhpZGVUYXBIaWdobGlnaHRDb2xvcigpIHtcblx0Ly9QcmV2ZW50IGhpZ2hsaWdodCBjb2xvdXIgd2hlbiBlbGVtZW50IGlzIHRhcHBlZFxuXHQtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XG59XG5AbWl4aW4gaGFyZHdhcmVBY2NlbCgpIHtcblx0Ly9JbXByb3ZlIHBlcmZvcm1hbmNlIG9uIG1vYmlsZS90YWJsZXQgZGV2aWNlc1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG59XG5cbkBtaXhpbiBpbXByb3ZlQW50aUFsaWFzKCkge1xuXHQvL0ltcHJvdmUgYWxpYXNpbmcgb24gbW9iaWxlL3RhYmxldCBkZXZpY2VzXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4ucHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDAgMTUlO1xuICAgIHBhZGRpbmc6IDYlIDA7XG4gICAgLnByb2plY3QtaGVhZGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xuICAgICAgICBtaW4taGVpZ2h0OiA5MHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLmJhciB7XG4gICAgICAgICAgICBtYXJnaW46IDElIGF1dG87XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1JTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucHJvamVjdC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgICAgICAgICAgI3N0b2Nrc3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL3N0b2Nrcy5qcGcnKTsgXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCAjODg4ODg4O1xuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwYWJhYjU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2JveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI2V4cGVuc2V7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9leHBlbnNlLmpwZycpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggIzg4ODg4ODtcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMGFiYWI1O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICNkM3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2QzLmpwZycpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggIzg4ODg4ODtcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDliOGIyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxM3ZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDoxMzBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5MnB4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoyNXZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOmdyZXk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbHRlcjogYmx1cigwLjVweCk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogM3B4IDA7XG4gICAgICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2xhdGVYKC0yMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNsYXRlWCgtMjAwJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMyU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBhYmFiNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogZGlzcGxheSwgdHJhbnNmb3JtLCBvcGFjaXR5LCBiYWNrZ3JvdW5kLWNvbG9yO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBoaWRlVGFwSGlnaGxpZ2h0Q29sb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgaGFyZHdhcmVBY2NlbCgpO1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBpbXByb3ZlQW50aUFsaWFzKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA1MDtcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMGFiYWI1O1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IDAuMnMgZWFzZS1vdXQgMHMgMSBzbGlkZUluRnJvbVRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IDAuMnMgZWFzZS1vdXQgMHMgMSBzbGlkZUluRnJvbUJvdHRvbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kZXRhaWwtdmlldyB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDUlIDE1JTtcbiAgICAgICAgLnByb2plY3QtZGV0YWlsIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCAjODg4ODg4O1xuICAgICAgICAgICAgcGFkZGluZzogNCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEyMCU7XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"

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
    ProjectsComponent.prototype.navigateToWebsite = function () {
        window.open('http://www.expensereport.link/');
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
        this.stocks = false;
        this.expense = false;
        this.d3 = false;
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
            case 'stocks': {
                this.stocks = true;
                this.expense = false;
                this.d3 = false;
                break;
            }
            case 'expense': {
                this.stocks = false;
                this.expense = true;
                this.d3 = false;
                break;
            }
            case 'd3': {
                this.stocks = false;
                this.expense = false;
                this.d3 = true;
                break;
            }
            default: {
                this.stocks = false;
                this.expense = false;
                this.d3 = false;
                break;
            }
        }
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
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
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")]
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

module.exports = "<div class='services-container'>\n  <div class=\"services-header\">\n    <h1 @slide *ngIf='inView' class='heading'>Services</h1>\n    <div @slideOpposite *ngIf='inView' class=\"bar\"></div>\n  </div>\n  \n  <div class='service-list'>\n    <ul @staggerSlide @staggerSlide2 *ngIf='serviceView' class='services'>\n      <li class='service'>\n        <div class='image-container'>\n          <img src=\"../../assets/images/design.svg\" alt=\"Design\" title='Design'>\n        </div>\n        <div class='content-container' id='design'>\n          <h4>Front End Development</h4>\n          <div>\n            <p>\n                The front end is what the user will see and interact with. \n                This is deceivingly difficult because in addition to making everything look and feel intuitive, \n                there also is a fair bit of data manipulation and state management at play behend the scenes. \n                I focus on dynamic, interactive, responsive and intuitive web interfaces for both web and mobile.\n            </p>\n          </div>\n        </div>\n      </li>\n      <li class='service odd'>\n        <div class='image-container'>\n          <img src=\"../../assets/images/frontend.svg\" alt=\"frontend\" title='frontend'>\n        </div>\n        <div class='content-container' id='frontend'>\n          <h4>Back End Development</h4>\n          <div>\n            <p>\n                The back end is where all the logic that connects to your business/brand will go.\n                This is arguably the most time consuming and in my opinion the most important part, since the backend bridges the information from the frontend to the backend, and vice-versa.\n                I primarily write my backends using Node.js and Express.\n                Below are some of the functions that the backend serves:\n            </p>\n            <ul>\n              <li>Create, Read, Update and Delete (CRUD) database resources using a RESTful API</li>\n              <li>Authentication Authorization and Validation of a user based system</li>\n              <li>Syncing with other data endpoints and resources (AWS, third party APIs)</li>\n            </ul>\n          </div>\n        </div>        \n      </li>\n      <li class='service'>\n        <div class='image-container'>\n          <img src=\"../../assets/images/backend.svg\" alt=\"backend\" title='backend'>\n        </div>\n        <div class='content-container' id='backend'>\n          <h4>Database Architecture</h4>\n          <div>\n            <p>\n                Designing an implementing a database is no small task. \n                This is the underlying structure that your whole web app is based upon, and probably more. \n                When it comes to databases you have two options (SQL and NoSQL), the benefits for each rely solely on your business needs and how you plan on using your database.\n                I have experience working with both SQL or NoSQL based databases and designing for each of their strengths.\n            </p>\n          </div>\n        </div>        \n      </li>\n      <li class='service odd'>\n        <div class='image-container'>\n          <img src=\"../../assets/images/database.svg\" alt=\"database\" title='database'>\n        </div>\n        <div class='content-container' id='database'>\n          <h4>Deployment, Integration and Pipelining</h4>\n          <div>\n            <p>\n                After your application is deployed it needs to be available to the outside world, and has to be reliably updated and scaled for the traffic you are receiving.\n                Thats where Continuous Deployment and Continuous Integration (CI/CD) comes in. \n                I mainly use AWS and Jenkins to construct my pipelines and set them up to autodeploy new features when ready. \n                I like to create a development, a staging and a production instance of the web app in order to keep everything working available, and to test out new features while safely replicating production conditions.\n            </p> \n          </div>\n        </div>        \n    </li>\n    </ul>\n  </div>\n \n\n</div>\n"

/***/ }),

/***/ "./src/app/services/services.component.scss":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".services-container {\n  margin: 0px;\n  padding: 5% 10%;\n  width: 100%;\n  height: 100vh;\n  min-height: 875px; }\n  .services-container .services-header {\n    transform: translateZ(0);\n    text-align: center;\n    width: 100%;\n    height: 10vh;\n    min-height: 90px;\n    display: block; }\n  .services-container .services-header .bar {\n      margin: 1% auto;\n      background-color: black;\n      width: 50px;\n      height: 5%; }\n  .services-container .services {\n    transform: translateZ(0);\n    list-style: none;\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0; }\n  .services-container .services .service {\n      transform: translateZ(0);\n      display: flex; }\n  @media screen and (max-width: 991px) {\n        .services-container .services .service {\n          height: auto;\n          margin-bottom: 3%; } }\n  @media screen and (min-width: 992px) {\n        .services-container .services .service {\n          margin-bottom: 1%;\n          min-height: 15%; } }\n  .services-container .services .service .image-container {\n        transform: translateZ(0); }\n  @media screen and (max-width: 991px) {\n          .services-container .services .service .image-container {\n            display: none; } }\n  @media screen and (min-width: 992px) {\n          .services-container .services .service .image-container {\n            float: left;\n            width: 10%;\n            height: 100%;\n            text-align: center;\n            padding: 0;\n            display: flex;\n            margin: auto; }\n            .services-container .services .service .image-container img {\n              margin: auto;\n              width: 75px;\n              height: 75px; } }\n  .services-container .services .service .content-container {\n        transform: translateZ(0);\n        height: 100%;\n        float: right;\n        overflow: hidden;\n        padding: 1.7%;\n        font-size: 80%;\n        color: black;\n        box-shadow: 1px 1px 3px #888888;\n        max-height: 100%; }\n  @media screen and (max-width: 991px) {\n          .services-container .services .service .content-container {\n            width: 100%;\n            padding: 5%; } }\n  @media screen and (min-width: 992px) {\n          .services-container .services .service .content-container {\n            width: 90%; } }\n  .services-container .services .service .content-container h4 {\n          text-decoration: underline; }\n  .services-container .services .service .content-container div {\n          padding: 0.5%;\n          padding-left: 5%;\n          padding-right: 8%; }\n  .services-container .services #frontend, .services-container .services #database {\n      background: #ececec; }\n  .services-container .services #design, .services-container .services #backend {\n      background: #0abab0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qbW91c3NhL2NvZGVfYW5ndWxhci9wcm9mZXNzaW9uYWxTaXRlL3NyYy9hcHAvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7RUFMckI7SUFPUSx3QkFBd0I7SUFHeEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWMsRUFBQTtFQWR0QjtNQWdCWSxlQUFlO01BQ2YsdUJBQXVCO01BQ3ZCLFdBQVc7TUFDWCxVQUFVLEVBQUE7RUFuQnRCO0lBd0JRLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVSxFQUFBO0VBN0JsQjtNQStCWSx3QkFBd0I7TUFDeEIsYUFBYSxFQUFBO0VBQ2I7UUFqQ1o7VUFrQ2dCLFlBQVk7VUFFWixpQkFBaUIsRUFBQSxFQXlEeEI7RUF2REc7UUF0Q1o7VUF1Q2dCLGlCQUFpQjtVQUNqQixlQUFlLEVBQUEsRUFxRHRCO0VBN0ZUO1FBNENnQix3QkFBd0IsRUFBQTtFQUN4QjtVQTdDaEI7WUE4Q29CLGFBQWEsRUFBQSxFQWtCcEI7RUFoQkc7VUFoRGhCO1lBa0RvQixXQUFVO1lBQ1YsVUFBVTtZQUNWLFlBQVk7WUFDWixrQkFBaUI7WUFDakIsVUFBVTtZQUNWLGFBQWE7WUFDYixZQUFZLEVBQUE7WUF4RGhDO2NBMER3QixZQUFZO2NBQ1osV0FBVztjQUNYLFlBQVksRUFBQSxFQUNmO0VBN0RyQjtRQW1FZ0Isd0JBQXdCO1FBQ3hCLFlBQVk7UUFDWixZQUFXO1FBQ1gsZ0JBQWdCO1FBUWhCLGFBQWE7UUFDYixjQUFjO1FBQ2QsWUFBWTtRQUNaLCtCQUErQjtRQUMvQixnQkFBZ0IsRUFBQTtFQVhoQjtVQXZFaEI7WUF3RW9CLFdBQVc7WUFDWCxXQUFXLEVBQUEsRUFrQmxCO0VBaEJHO1VBM0VoQjtZQTRFb0IsVUFBVSxFQUFBLEVBZWpCO0VBM0ZiO1VBb0ZvQiwwQkFBMEIsRUFBQTtFQXBGOUM7VUF1Rm9CLGFBQWE7VUFDYixnQkFBZTtVQUNmLGlCQUFnQixFQUFBO0VBekZwQztNQWdHWSxtQkFBNEIsRUFBQTtFQWhHeEM7TUFvR1ksbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXJ2aWNlcy1jb250YWluZXIge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDUlIDEwJTsgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtaW4taGVpZ2h0OiA4NzVweDtcbiAgICAuc2VydmljZXMtaGVhZGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICAvL21hcmdpbjogMCAxNSU7XG4gICAgICAgIC8vbWFyZ2luLXRvcDogOTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xuICAgICAgICBtaW4taGVpZ2h0OiA5MHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLmJhciB7XG4gICAgICAgICAgICBtYXJnaW46IDElIGF1dG87XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1JTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zZXJ2aWNlcyB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAuc2VydmljZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweCl7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMTgwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMyU7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTJweCl7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMSU7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuaW1hZ2UtY29udGFpbmVye1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KXtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTJweCl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvOyBcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb250ZW50LWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGZsb2F0OnJpZ2h0O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweCl7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTJweCl7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuNyU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA4MCU7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM4ODg4ODg7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjUlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6NSU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6OCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAjZnJvbnRlbmQsICNkYXRhYmFzZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjM2LDIzNiwyMzYpO1xuICAgICAgICB9XG5cbiAgICAgICAgI2Rlc2lnbiwgI2JhY2tlbmQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzBhYmFiMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"

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
            ],
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/services/services.component.scss")]
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

module.exports = ".navigation-bar {\n  -webkit-animation: 1s ease-out 0s 1 slideInFromLeft;\n          animation: 1s ease-out 0s 1 slideInFromLeft;\n  width: 100%; }\n  .navigation-bar ul {\n    width: 100%;\n    margin: 2vh 0;\n    padding: 0;\n    z-index: 5000; }\n  .navigation-bar ul li {\n      font-size: 150%;\n      display: inline-block;\n      width: 15%;\n      padding: 0 3%;\n      transition: transform 0.2s; }\n  .navigation-bar ul li a {\n        text-decoration: none;\n        color: white;\n        display: inline; }\n  .navigation-bar ul li:hover {\n        transform: scale(1.1); }\n  .navigation-bar ul li:hover a {\n          color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qbW91c3NhL2NvZGVfYW5ndWxhci9wcm9mZXNzaW9uYWxTaXRlL3NyYy9hcHAvc3RpY2t5LW5hdmJhci9zdGlja3ktbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbURBQTJDO1VBQTNDLDJDQUEyQztFQUMzQyxXQUFXLEVBQUE7RUFGZjtJQUlRLFdBQVc7SUFDWCxhQUFhO0lBQ2IsVUFBVTtJQUNWLGFBQWEsRUFBQTtFQVByQjtNQVNZLGVBQWU7TUFDZixxQkFBcUI7TUFDckIsVUFBVTtNQUNWLGFBQWE7TUFJYiwwQkFBMEIsRUFBQTtFQWhCdEM7UUFtQmdCLHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osZUFBYyxFQUFBO0VBckI5QjtRQTZCZ0IscUJBQXFCLEVBQUE7RUE3QnJDO1VBMEJvQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdGlja3ktbmF2YmFyL3N0aWNreS1uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdGlvbi1iYXJ7XG4gICAgYW5pbWF0aW9uOiAxcyBlYXNlLW91dCAwcyAxIHNsaWRlSW5Gcm9tTGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB1bHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMnZoIDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHotaW5kZXg6IDUwMDA7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDMlO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOnRyYW5zZm9ybSAwLjJzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgLy9jb2xvcjogIzBhYmFiNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cbn0iXX0= */"

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
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./sticky-navbar.component.scss */ "./src/app/sticky-navbar/sticky-navbar.component.scss")]
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