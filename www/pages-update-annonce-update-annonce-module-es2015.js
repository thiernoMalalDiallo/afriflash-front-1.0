(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-update-annonce-update-annonce-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/update-annonce/update-annonce.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/update-annonce/update-annonce.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content>\r\n  <div *ngIf=\"annonceInformation\">\r\n    <app-afriflash-add-annonce [action]=\"'update'\" [annonce]=\"annonceInformation\"></app-afriflash-add-annonce>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/update-annonce/update-annonce-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/update-annonce/update-annonce-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: UpdateAnnoncePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAnnoncePageRoutingModule", function() { return UpdateAnnoncePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _update_annonce_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-annonce.page */ "./src/app/pages/update-annonce/update-annonce.page.ts");




const routes = [
    {
        path: '',
        component: _update_annonce_page__WEBPACK_IMPORTED_MODULE_3__["UpdateAnnoncePage"]
    }
];
let UpdateAnnoncePageRoutingModule = class UpdateAnnoncePageRoutingModule {
};
UpdateAnnoncePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UpdateAnnoncePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/update-annonce/update-annonce.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/update-annonce/update-annonce.module.ts ***!
  \***************************************************************/
/*! exports provided: UpdateAnnoncePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAnnoncePageModule", function() { return UpdateAnnoncePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _update_annonce_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-annonce-routing.module */ "./src/app/pages/update-annonce/update-annonce-routing.module.ts");
/* harmony import */ var _update_annonce_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-annonce.page */ "./src/app/pages/update-annonce/update-annonce.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let UpdateAnnoncePageModule = class UpdateAnnoncePageModule {
};
UpdateAnnoncePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _update_annonce_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateAnnoncePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_update_annonce_page__WEBPACK_IMPORTED_MODULE_6__["UpdateAnnoncePage"]]
    })
], UpdateAnnoncePageModule);



/***/ }),

/***/ "./src/app/pages/update-annonce/update-annonce.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/update-annonce/update-annonce.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VwZGF0ZS1hbm5vbmNlL3VwZGF0ZS1hbm5vbmNlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/update-annonce/update-annonce.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/update-annonce/update-annonce.page.ts ***!
  \*************************************************************/
/*! exports provided: UpdateAnnoncePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAnnoncePage", function() { return UpdateAnnoncePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_afriflash_http_afriflash_http_annonce_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/afriflash-http/afriflash-http-annonce.provider */ "./src/providers/afriflash-http/afriflash-http-annonce.provider.ts");




let UpdateAnnoncePage = class UpdateAnnoncePage {
    constructor(route, httpAnnonce) {
        this.route = route;
        this.httpAnnonce = httpAnnonce;
    }
    ngOnInit() {
        this.route.queryParams.subscribe((object) => {
            this.loadAnnonce(object.id).subscribe((annonce) => {
                this.annonceInformation = annonce;
                console.log(this.annonceInformation);
            });
        });
    }
    /**
     * Requeter l'annonce
     * @param id Id de l'annonce
     */
    loadAnnonce(id) {
        return this.httpAnnonce.getById('annonce/' + id);
    }
    /**
     * Initialiser les champs dans le cas d'une modification
     */
    ionViewWillEnter() {
        this.annonceInformation = null;
    }
    actualize() {
        this.annonceInformation = null;
    }
};
UpdateAnnoncePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _providers_afriflash_http_afriflash_http_annonce_provider__WEBPACK_IMPORTED_MODULE_3__["AfriflashHttpAnnonceProvider"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UpdateAnnoncePage.prototype, "annonceInformation", void 0);
UpdateAnnoncePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-annonce',
        template: __webpack_require__(/*! raw-loader!./update-annonce.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/update-annonce/update-annonce.page.html"),
        styles: [__webpack_require__(/*! ./update-annonce.page.scss */ "./src/app/pages/update-annonce/update-annonce.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _providers_afriflash_http_afriflash_http_annonce_provider__WEBPACK_IMPORTED_MODULE_3__["AfriflashHttpAnnonceProvider"]])
], UpdateAnnoncePage);



/***/ })

}]);
//# sourceMappingURL=pages-update-annonce-update-annonce-module-es2015.js.map