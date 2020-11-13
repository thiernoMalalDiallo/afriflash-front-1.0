(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-details-annonce-details-annonce-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/details-annonce/details-annonce.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/details-annonce/details-annonce.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n    <div class=\"annonce-infos\" *ngIf=\"annonceInformation\">\n        <app-afriflash-ad-details [annonceInformation]=\"annonceInformation\">\n\n        </app-afriflash-ad-details>\n    </div>\n    <button (click)=\"actualize()\" hidden id=\"actualize\">actualize</button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/details-annonce/details-annonce-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/details-annonce/details-annonce-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: DetailsAnnoncePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsAnnoncePageRoutingModule", function() { return DetailsAnnoncePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _details_annonce_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-annonce.page */ "./src/app/pages/details-annonce/details-annonce.page.ts");




const routes = [
    {
        path: '',
        component: _details_annonce_page__WEBPACK_IMPORTED_MODULE_3__["DetailsAnnoncePage"]
    }
];
let DetailsAnnoncePageRoutingModule = class DetailsAnnoncePageRoutingModule {
};
DetailsAnnoncePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailsAnnoncePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/details-annonce/details-annonce.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/details-annonce/details-annonce.module.ts ***!
  \*****************************************************************/
/*! exports provided: DetailsAnnoncePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsAnnoncePageModule", function() { return DetailsAnnoncePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _details_annonce_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-annonce-routing.module */ "./src/app/pages/details-annonce/details-annonce-routing.module.ts");
/* harmony import */ var _details_annonce_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details-annonce.page */ "./src/app/pages/details-annonce/details-annonce.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let DetailsAnnoncePageModule = class DetailsAnnoncePageModule {
};
DetailsAnnoncePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_annonce_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsAnnoncePageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_details_annonce_page__WEBPACK_IMPORTED_MODULE_6__["DetailsAnnoncePage"]]
    })
], DetailsAnnoncePageModule);



/***/ }),

/***/ "./src/app/pages/details-annonce/details-annonce.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/details-annonce/details-annonce.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .annonce-infos {\n  margin-top: 14vh;\n  width: 100vw;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWlscy1hbm5vbmNlL0M6XFxVc2Vyc1xcdG1kaWFsbG9cXERvY3VtZW50c1xcUHJvamV0X0FmcmlxdWVcXEFmcmlmbGFzaFxcYWZyaWZsYXNoLWZyb250L3NyY1xcYXBwXFxwYWdlc1xcZGV0YWlscy1hbm5vbmNlXFxkZXRhaWxzLWFubm9uY2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZXRhaWxzLWFubm9uY2UvZGV0YWlscy1hbm5vbmNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbHMtYW5ub25jZS9kZXRhaWxzLWFubm9uY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG5cclxuICAgIC5hbm5vbmNlLWluZm9zIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNHZoO1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbn0iLCJpb24tY29udGVudCAuYW5ub25jZS1pbmZvcyB7XG4gIG1hcmdpbi10b3A6IDE0dmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/details-annonce/details-annonce.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/details-annonce/details-annonce.page.ts ***!
  \***************************************************************/
/*! exports provided: DetailsAnnoncePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsAnnoncePage", function() { return DetailsAnnoncePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_providers_afriflash_http_afriflash_http_annonce_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/afriflash-http/afriflash-http-annonce.provider */ "./src/providers/afriflash-http/afriflash-http-annonce.provider.ts");




let DetailsAnnoncePage = class DetailsAnnoncePage {
    constructor(route, httpAnnonce) {
        this.route = route;
        this.httpAnnonce = httpAnnonce;
    }
    ngOnInit() {
        this.route.queryParams.subscribe((object) => {
            this.loadAnnonce(object.id).subscribe((annonce) => {
                this.annonceInformation = annonce;
            });
        });
    }
    /**
     * Met tous a nulle avant d'afficher la nouvelle annonce
     */
    ionViewWillEnter() {
        document.getElementById('actualize').click();
    }
    /**
     * Requeter l'annonce
     * @param id Id de l'annonce
     */
    loadAnnonce(id) {
        return this.httpAnnonce.getById('annonce/' + id);
    }
    actualize() {
        this.annonceInformation = null;
    }
};
DetailsAnnoncePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_providers_afriflash_http_afriflash_http_annonce_provider__WEBPACK_IMPORTED_MODULE_3__["AfriflashHttpAnnonceProvider"] }
];
DetailsAnnoncePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-annonce',
        template: __webpack_require__(/*! raw-loader!./details-annonce.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/details-annonce/details-annonce.page.html"),
        styles: [__webpack_require__(/*! ./details-annonce.page.scss */ "./src/app/pages/details-annonce/details-annonce.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_providers_afriflash_http_afriflash_http_annonce_provider__WEBPACK_IMPORTED_MODULE_3__["AfriflashHttpAnnonceProvider"]])
], DetailsAnnoncePage);



/***/ })

}]);
//# sourceMappingURL=pages-details-annonce-details-annonce-module-es2015.js.map