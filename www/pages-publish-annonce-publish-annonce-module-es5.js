(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-publish-annonce-publish-annonce-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/publish-annonce/publish-annonce.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/publish-annonce/publish-annonce.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content>\r\n<div>\r\n  <app-afriflash-add-annonce></app-afriflash-add-annonce>\r\n</div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/publish-annonce/publish-annonce-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/publish-annonce/publish-annonce-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: PublishAnnoncePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishAnnoncePageRoutingModule", function() { return PublishAnnoncePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _publish_annonce_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publish-annonce.page */ "./src/app/pages/publish-annonce/publish-annonce.page.ts");




var routes = [
    {
        path: '',
        component: _publish_annonce_page__WEBPACK_IMPORTED_MODULE_3__["PublishAnnoncePage"]
    }
];
var PublishAnnoncePageRoutingModule = /** @class */ (function () {
    function PublishAnnoncePageRoutingModule() {
    }
    PublishAnnoncePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PublishAnnoncePageRoutingModule);
    return PublishAnnoncePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/publish-annonce/publish-annonce.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/publish-annonce/publish-annonce.module.ts ***!
  \*****************************************************************/
/*! exports provided: PublishAnnoncePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishAnnoncePageModule", function() { return PublishAnnoncePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _publish_annonce_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./publish-annonce-routing.module */ "./src/app/pages/publish-annonce/publish-annonce-routing.module.ts");
/* harmony import */ var _publish_annonce_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./publish-annonce.page */ "./src/app/pages/publish-annonce/publish-annonce.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var PublishAnnoncePageModule = /** @class */ (function () {
    function PublishAnnoncePageModule() {
    }
    PublishAnnoncePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _publish_annonce_routing_module__WEBPACK_IMPORTED_MODULE_5__["PublishAnnoncePageRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_publish_annonce_page__WEBPACK_IMPORTED_MODULE_6__["PublishAnnoncePage"]]
        })
    ], PublishAnnoncePageModule);
    return PublishAnnoncePageModule;
}());



/***/ }),

/***/ "./src/app/pages/publish-annonce/publish-annonce.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/publish-annonce/publish-annonce.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1Ymxpc2gtYW5ub25jZS9wdWJsaXNoLWFubm9uY2UucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/publish-annonce/publish-annonce.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/publish-annonce/publish-annonce.page.ts ***!
  \***************************************************************/
/*! exports provided: PublishAnnoncePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishAnnoncePage", function() { return PublishAnnoncePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PublishAnnoncePage = /** @class */ (function () {
    function PublishAnnoncePage() {
    }
    PublishAnnoncePage.prototype.ngOnInit = function () {
    };
    PublishAnnoncePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-publish-annonce',
            template: __webpack_require__(/*! raw-loader!./publish-annonce.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/publish-annonce/publish-annonce.page.html"),
            styles: [__webpack_require__(/*! ./publish-annonce.page.scss */ "./src/app/pages/publish-annonce/publish-annonce.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PublishAnnoncePage);
    return PublishAnnoncePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-publish-annonce-publish-annonce-module-es5.js.map