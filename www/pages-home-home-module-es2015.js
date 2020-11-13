(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n    <div class=\"content-page\" [ngClass]=\"{\r\n        'content-page-mobile': isWeb === false\r\n    }\">\r\n        <!-- Div principale  contenant les éléments de la page Home -->\r\n        <div class=\" first-part col\">\r\n            <div class=\"part-1\">\r\n                <div class=\"button-recherche\" [ngClass]=\"{\r\n                    'button-recherche-mobile': isWeb === false\r\n                }\">\r\n                    <span>Recherchez une annonce de vente de bien ou de service</span>\r\n                </div>\r\n\r\n                <div class=\"search-publish-button\" *ngIf=\"!isWeb\">\r\n                    <div class=\"item button-announce\">\r\n                        <afriflash-small-button [theme]=\"'btn-orange'\" [title]=\"'Publier une annonce'\"\r\n                                                (clickButton)=\"publish()\">\r\n                        </afriflash-small-button>\r\n                    </div>\r\n                    <div class=\"item button-search\">\r\n                        <afriflash-small-button [theme]=\"'btn-blue'\" [title]=\"'Rechercher une annonce'\"\r\n                                                (clickButton)=\"search()\">\r\n                        </afriflash-small-button>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Selection un pays -->\r\n                <!-- <div class=\"search-button col\">\r\n                    <div class=\"select\">\r\n                        <select #countrySelect>\r\n                            <option value=\"choose a country\" selected>\r\n                                {{ 'PAGES.HOME.SELECT_A_COUNTRY' | translate }}\r\n                                Choisissez un pays\r\n                            </option>\r\n                            <option *ngFor=\"let country of countries\" [value]=\"country\">\r\n                                {{ country }}\r\n                            </option>\r\n                        </select>\r\n\r\n                    </div>\r\n                    <div>\r\n                        <button class=\"btn-primary buton-title-search\" type=\"submit\">Rechercher</button>\r\n                    </div>\r\n                </div> -->\r\n\r\n                <div class=\"video-presentation\" [ngClass]=\"{\r\n                    'video-presentation-mobile': isWeb === false\r\n                }\">\r\n                    <iframe width=\"310\" height=\"200\" src=\"https://www.youtube.com/embed/hHSwu37T_ZU\" frameborder=\"0\"\r\n                            allowfullscreen>\r\n                    </iframe>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"row form-inline m-0 slide-block\">\r\n            <ion-col size=\"1\">\r\n                <span class=\"slider-nav arrow-prev\" (click)=\"slidePrev(sliderTwo,slideWithNav2)\">\r\n                    <div *ngIf=\"isWeb\" class=\"prev-icon-custom-web custon-nav web-style\" [class.disabled]=\"sliderTwo.isBeginningSlide\"></div>\r\n                    <div *ngIf=\"!isWeb\" class=\"prev-icon-custom-mobile custon-nav\" [class.disabled]=\"sliderTwo.isBeginningSlide\"></div>\r\n\r\n                </span>\r\n            </ion-col>\r\n            <ion-col size=\"10\" *ngIf=\"isWeb\">\r\n                <ion-slides #slideWithNav2>\r\n                    <ion-slide *ngFor=\"let slide of sliderTwo.slidesItems\">\r\n                        <div *ngFor=\"let category of slide.s\" class=\"m-0\">\r\n                            <ion-col>\r\n\r\n                                <afriflash-button\r\n                                        [title]=\"category\"\r\n                                        [icon]=\"category\"\r\n                                        (clickButton)=\"goToPage(category)\"\r\n                                        [isWeb]=\"isWeb\">\r\n                                </afriflash-button>\r\n\r\n                            </ion-col>\r\n                        </div>\r\n\r\n                    </ion-slide>\r\n\r\n                </ion-slides>\r\n\r\n            </ion-col>\r\n\r\n\r\n            <ion-col size=\"10\" *ngIf=\"!isWeb\">\r\n                <ion-slides #slideWithNav2>\r\n                    <ion-slide *ngFor=\"let slide of sliderTwo.slidesItems\">\r\n                        <div *ngFor=\"let category of slide.s\" class=\"m-1 cate-slide\">\r\n                            <ion-col>\r\n\r\n                                <afriflash-button\r\n                                        [title]=\"category\"\r\n                                        [icon]=\"category\"\r\n                                        (clickButton)=\"goToPage(category )\"\r\n                                        [isWeb]=\"isWeb\">\r\n                                </afriflash-button>\r\n\r\n                            </ion-col>\r\n                        </div>\r\n\r\n                    </ion-slide>\r\n\r\n                </ion-slides>\r\n\r\n            </ion-col>\r\n\r\n\r\n            <ion-col size=\"1\">\r\n                <span class=\"slider-nav arrow-next\" (click)=\"slideNext(sliderTwo,slideWithNav2)\">\r\n                    <div class=\"next-icon-custom custon-nav\" [class.disabled]=\"sliderTwo.isEndSlide\"></div>\r\n                </span>\r\n            </ion-col>\r\n        </div>\r\n\r\n        <!-- <div class=\"m-0\">\r\n            <div class=\"describe-test\">\r\n                <span>Déposez en toute simplicité votre annonce de biens ou de services partout en Afrique</span>\r\n            </div>\r\n        </div> -->\r\n\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");









let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-page {\n  background-color: var(--ion-color-background);\n  padding-top: 7vh;\n  padding-bottom: 7vh;\n  font-family: Raleway;\n}\n.content-page.content-page-mobile {\n  height: 85vh;\n}\n.content-page .first-part {\n  margin-top: 8vh;\n}\n.content-page .first-part .part-1 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.content-page .first-part .part-1 .button-recherche {\n  font-weight: bold;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 1.1rem !important;\n  align-content: center;\n}\n.content-page .first-part .part-1 .button-recherche-mobile {\n  margin-left: 2vh;\n  margin-right: 2vh;\n  text-align: center;\n  width: auto;\n}\n.content-page .first-part .part-1 .search-button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.content-page .first-part .part-1 .search-button .select {\n  margin-bottom: 1rem;\n}\n.content-page .first-part .part-1 .search-button .select select {\n  height: 3rem;\n  border-radius: 8px;\n}\n.content-page .first-part .part-1 .search-button .buton-title-search {\n  margin-top: 0.5vh;\n  font-size: 1.3rem;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 1rem;\n  background-color: var(--ion-color-principal);\n  color: white;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  width: 19rem;\n  margin-left: 2rem !important;\n  margin-right: 2rem !important;\n  border-radius: 8px;\n}\n.content-page .first-part .part-1 .video-presentation {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.content-page .first-part .part-1 .video-presentation iframe {\n  width: 37vw;\n  height: 40vh;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.content-page .first-part .part-1 .video-presentation-mobile {\n  margin-top: 1rem;\n}\n.content-page .first-part .part-1 .video-presentation-mobile iframe {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.content-page .first-part .part-1 .search-publish-button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.content-page .first-part .part-1 .search-publish-button .button-announce {\n  margin-bottom: 0.7rem;\n  margin-top: 1rem;\n}\n.content-page .slide-block {\n  background-color: var(--ion-color-background);\n  width: 100% !important;\n}\n.content-page .slide-block ion-slides {\n  background: #e6e6e6;\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n  width: 100% !important;\n}\n.content-page .slide-block ion-slides ion-slide {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.content-page .slide-block ion-slides ion-slide ion-col {\n  padding: 0;\n  margin: 0;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.content-page .slide-block .custon-nav {\n  height: 48px;\n  width: 20px;\n  cursor: pointer;\n  vertical-align: middle;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.content-page .slide-block .prev-icon-custom-web {\n  margin-left: 5rem !important;\n  background: url(https://freakyjolly.com/demo/jquery/OwlCarousel2/nav-icon.png) no-repeat scroll 0px 0px;\n}\n.content-page .slide-block .prev-icon-custom-mobile {\n  background: url(https://freakyjolly.com/demo/jquery/OwlCarousel2/nav-icon.png) no-repeat scroll 0px 0px;\n}\n.content-page .slide-block .prev-icon-custom.disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.content-page .slide-block .next-icon-custom {\n  margin: 0 !important;\n  padding: 0 !important;\n  background: url(https://freakyjolly.com/demo/jquery/OwlCarousel2/nav-icon.png) no-repeat scroll -32px 0px;\n}\n.content-page .slide-block .next-icon-custom.disabled {\n  opacity: 0.4;\n  cursor: default;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.content-page .slide-block .slider-nav {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.content-page .slide-block .slider-nav ion-icon {\n  margin: 0 !important;\n  padding: 0 !important;\n  height: 100%;\n}\n.content-page .slide-block .slide-text {\n  margin: 0 !important;\n  padding: 0 !important;\n  position: absolute;\n  color: white;\n  bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXHRtZGlhbGxvXFxEb2N1bWVudHNcXFByb2pldF9BZnJpcXVlXFxBZnJpZmxhc2hcXGFmcmlmbGFzaC1mcm9udC9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUUsNkNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNERjtBREdFO0VBQ0UsWUFBQTtBQ0RKO0FESUU7RUFDRSxlQUFBO0FDRko7QURJSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0ZOO0FESU07RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FDRlI7QURRTTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNOUjtBRFNNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ1BSO0FEU1E7RUFDRSxtQkFBQTtBQ1BWO0FEU1U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNQWjtBRFdRO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUVBLGtCQUFBO0FDVlY7QURjTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNaUjtBRGFRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDWFY7QURlTTtFQUNFLGdCQUFBO0FDYlI7QURjUTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNaVjtBRGdCTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNkUjtBRGdCUTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QUNkWjtBRHVCRTtFQUNFLDZDQUFBO0VBQ0Esc0JBQUE7QUNyQko7QUR1Qkk7RUFDRSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ3JCTjtBRHNCTTtFQUNFLHlCQUFBO1VBQUEsOEJBQUE7QUNwQlI7QURxQlE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNuQlY7QUR3Qkk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FDdkJOO0FEMEJJO0VBQ0UsNEJBQUE7RUFDQSx1R0FBQTtBQ3hCTjtBRDBCSTtFQUNFLHVHQUFBO0FDeEJOO0FEMkJJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUN6Qk47QUQ0Qkk7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUdBQUE7QUMxQk47QUQ2Qkk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUMzQk47QUQ4Qkk7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FDNUJOO0FENkJNO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUMzQlI7QUQrQkk7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQzdCTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRlbnQtcGFnZSB7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kKTtcclxuICBwYWRkaW5nLXRvcDogN3ZoO1xyXG4gIHBhZGRpbmctYm90dG9tOiA3dmg7XHJcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XHJcblxyXG4gICYuY29udGVudC1wYWdlLW1vYmlsZSB7XHJcbiAgICBoZWlnaHQ6IDg1dmg7XHJcbiAgfVxyXG5cclxuICAuZmlyc3QtcGFydCB7XHJcbiAgICBtYXJnaW4tdG9wOiA4dmg7XHJcblxyXG4gICAgLnBhcnQtMSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgXHJcbiAgICAgIC5idXR0b24tcmVjaGVyY2hlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtIWltcG9ydGFudDtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgLy8gIHdpZHRoOiBtYXgtY29udGVudCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gIG1hcmdpbjogMXJlbTtcclxuICAgICAgICAvLyAgcGFkZGluZzogMXJlbSFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idXR0b24tcmVjaGVyY2hlLW1vYmlsZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJ2aDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJ2aDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnNlYXJjaC1idXR0b24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gICAgICAgIC5zZWxlY3Qge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBcclxuICAgICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYnV0b24tdGl0bGUtc2VhcmNoIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXZoO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbmNpcGFsKTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgICAgd2lkdGg6IDE5cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMnJlbSAhaW1wb3J0YW50O1xyXG4gIFxyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgfVxyXG4gICAgICAudmlkZW8tcHJlc2VudGF0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBpZnJhbWUge1xyXG4gICAgICAgICAgd2lkdGg6IDM3dnc7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC52aWRlby1wcmVzZW50YXRpb24tbW9iaWxlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VhcmNoLXB1Ymxpc2gtYnV0dG9uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmJ1dHRvbi1hbm5vdW5jZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcbiAgLnNsaWRlLWJsb2NrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kKTtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgaW9uLXNsaWRlcyB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMCFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgaW9uLXNsaWRlIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgICAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY3VzdG9uLW5hdiB7XHJcbiAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucHJldi1pY29uLWN1c3RvbS13ZWIge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXJlbSFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2ZyZWFreWpvbGx5LmNvbS9kZW1vL2pxdWVyeS9Pd2xDYXJvdXNlbDIvbmF2LWljb24ucG5nKSBuby1yZXBlYXQgc2Nyb2xsIDBweCAwcHg7XHJcbiAgICB9XHJcbiAgICAucHJldi1pY29uLWN1c3RvbS1tb2JpbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9mcmVha3lqb2xseS5jb20vZGVtby9qcXVlcnkvT3dsQ2Fyb3VzZWwyL25hdi1pY29uLnBuZykgbm8tcmVwZWF0IHNjcm9sbCAwcHggMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcmV2LWljb24tY3VzdG9tLmRpc2FibGVkIHtcclxuICAgICAgb3BhY2l0eTogMC40O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm5leHQtaWNvbi1jdXN0b20ge1xyXG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9mcmVha3lqb2xseS5jb20vZGVtby9qcXVlcnkvT3dsQ2Fyb3VzZWwyL25hdi1pY29uLnBuZykgbm8tcmVwZWF0IHNjcm9sbCAtMzJweCAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm5leHQtaWNvbi1jdXN0b20uZGlzYWJsZWQge1xyXG4gICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGVyLW5hdiB7XHJcbiAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNsaWRlLXRleHQge1xyXG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8vIC5kZXNjcmliZS10ZXN0IHtcclxuICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kKTtcclxuICAvLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIC8vICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgLy8gICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgLy8gICBtYXJnaW4tdG9wOiAydmghaW1wb3J0YW50O1xyXG4gIC8vICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIC8vIH1cclxufVxyXG4iLCIuY29udGVudC1wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQpO1xuICBwYWRkaW5nLXRvcDogN3ZoO1xuICBwYWRkaW5nLWJvdHRvbTogN3ZoO1xuICBmb250LWZhbWlseTogUmFsZXdheTtcbn1cbi5jb250ZW50LXBhZ2UuY29udGVudC1wYWdlLW1vYmlsZSB7XG4gIGhlaWdodDogODV2aDtcbn1cbi5jb250ZW50LXBhZ2UgLmZpcnN0LXBhcnQge1xuICBtYXJnaW4tdG9wOiA4dmg7XG59XG4uY29udGVudC1wYWdlIC5maXJzdC1wYXJ0IC5wYXJ0LTEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbnRlbnQtcGFnZSAuZmlyc3QtcGFydCAucGFydC0xIC5idXR0b24tcmVjaGVyY2hlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuLmNvbnRlbnQtcGFnZSAuZmlyc3QtcGFydCAucGFydC0xIC5idXR0b24tcmVjaGVyY2hlLW1vYmlsZSB7XG4gIG1hcmdpbi1sZWZ0OiAydmg7XG4gIG1hcmdpbi1yaWdodDogMnZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiBhdXRvO1xufVxuLmNvbnRlbnQtcGFnZSAuZmlyc3QtcGFydCAucGFydC0xIC5zZWFyY2gtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250ZW50LXBhZ2UgLmZpcnN0LXBhcnQgLnBhcnQtMSAuc2VhcmNoLWJ1dHRvbiAuc2VsZWN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5jb250ZW50LXBhZ2UgLmZpcnN0LXBhcnQgLnBhcnQtMSAuc2VhcmNoLWJ1dHRvbiAuc2VsZWN0IHNlbGVjdCB7XG4gIGhlaWdodDogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmNvbnRlbnQtcGFnZSAuZmlyc3QtcGFydCAucGFydC0xIC5zZWFyY2gtYnV0dG9uIC5idXRvbi10aXRsZS1zZWFyY2gge1xuICBtYXJnaW4tdG9wOiAwLjV2aDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmluY2lwYWwpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIHdpZHRoOiAxOXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDJyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5jb250ZW50LXBhZ2UgLmZpcnN0LXBhcnQgLnBhcnQtMSAudmlkZW8tcHJlc2VudGF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250ZW50LXBhZ2UgLmZpcnN0LXBhcnQgLnBhcnQtMSAudmlkZW8tcHJlc2VudGF0aW9uIGlmcmFtZSB7XG4gIHdpZHRoOiAzN3Z3O1xuICBoZWlnaHQ6IDQwdmg7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uY29udGVudC1wYWdlIC5maXJzdC1wYXJ0IC5wYXJ0LTEgLnZpZGVvLXByZXNlbnRhdGlvbi1tb2JpbGUge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLmNvbnRlbnQtcGFnZSAuZmlyc3QtcGFydCAucGFydC0xIC52aWRlby1wcmVzZW50YXRpb24tbW9iaWxlIGlmcmFtZSB7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5jb250ZW50LXBhZ2UgLmZpcnN0LXBhcnQgLnBhcnQtMSAuc2VhcmNoLXB1Ymxpc2gtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250ZW50LXBhZ2UgLmZpcnN0LXBhcnQgLnBhcnQtMSAuc2VhcmNoLXB1Ymxpc2gtYnV0dG9uIC5idXR0b24tYW5ub3VuY2Uge1xuICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG4uY29udGVudC1wYWdlIC5zbGlkZS1ibG9jayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kKTtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5jb250ZW50LXBhZ2UgLnNsaWRlLWJsb2NrIGlvbi1zbGlkZXMge1xuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5jb250ZW50LXBhZ2UgLnNsaWRlLWJsb2NrIGlvbi1zbGlkZXMgaW9uLXNsaWRlIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNvbnRlbnQtcGFnZSAuc2xpZGUtYmxvY2sgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY29udGVudC1wYWdlIC5zbGlkZS1ibG9jayAuY3VzdG9uLW5hdiB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuLmNvbnRlbnQtcGFnZSAuc2xpZGUtYmxvY2sgLnByZXYtaWNvbi1jdXN0b20td2ViIHtcbiAgbWFyZ2luLWxlZnQ6IDVyZW0gIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vZnJlYWt5am9sbHkuY29tL2RlbW8vanF1ZXJ5L093bENhcm91c2VsMi9uYXYtaWNvbi5wbmcpIG5vLXJlcGVhdCBzY3JvbGwgMHB4IDBweDtcbn1cbi5jb250ZW50LXBhZ2UgLnNsaWRlLWJsb2NrIC5wcmV2LWljb24tY3VzdG9tLW1vYmlsZSB7XG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2ZyZWFreWpvbGx5LmNvbS9kZW1vL2pxdWVyeS9Pd2xDYXJvdXNlbDIvbmF2LWljb24ucG5nKSBuby1yZXBlYXQgc2Nyb2xsIDBweCAwcHg7XG59XG4uY29udGVudC1wYWdlIC5zbGlkZS1ibG9jayAucHJldi1pY29uLWN1c3RvbS5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLmNvbnRlbnQtcGFnZSAuc2xpZGUtYmxvY2sgLm5leHQtaWNvbi1jdXN0b20ge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9mcmVha3lqb2xseS5jb20vZGVtby9qcXVlcnkvT3dsQ2Fyb3VzZWwyL25hdi1pY29uLnBuZykgbm8tcmVwZWF0IHNjcm9sbCAtMzJweCAwcHg7XG59XG4uY29udGVudC1wYWdlIC5zbGlkZS1ibG9jayAubmV4dC1pY29uLWN1c3RvbS5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuLmNvbnRlbnQtcGFnZSAuc2xpZGUtYmxvY2sgLnNsaWRlci1uYXYge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuLmNvbnRlbnQtcGFnZSAuc2xpZGUtYmxvY2sgLnNsaWRlci1uYXYgaW9uLWljb24ge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGVudC1wYWdlIC5zbGlkZS1ibG9jayAuc2xpZGUtdGV4dCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3R0b206IDMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_afriflash_social_users_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/afriflash-social-users.model */ "./src/models/afriflash-social-users.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _providers_afriflash_data_afriflash_data_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/afriflash-data/afriflash-data.provider */ "./src/providers/afriflash-data/afriflash-data.provider.ts");
/* harmony import */ var _providers_afriflash_config_afriflash_config_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/afriflash-config/afriflash-config.provider */ "./src/providers/afriflash-config/afriflash-config.provider.ts");
/* harmony import */ var src_providers_afriflash_session_afriflash_session_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/providers/afriflash-session/afriflash-session.provider */ "./src/providers/afriflash-session/afriflash-session.provider.ts");









let HomePage = class HomePage {
    constructor(OAuth, modalCtrl, dataProvider, config, sanitizer, navCtrl, session) {
        this.OAuth = OAuth;
        this.modalCtrl = modalCtrl;
        this.dataProvider = dataProvider;
        this.config = config;
        this.sanitizer = sanitizer;
        this.navCtrl = navCtrl;
        this.session = session;
        this.socialusers = new _models_afriflash_social_users_model__WEBPACK_IMPORTED_MODULE_3__["Socialusers"]();
        this.slideOptsTwo = {
            initialSlide: 1,
            slidesPerView: 2,
            loop: true,
            centeredSlides: true,
            spaceBetween: 40
        };
        this.icon = 'camera';
        this.sliderOpts = {
            zome: false,
            slidesPerView: 1.5,
            centeredSlides: true,
            spaceBetween: 20,
        };
    }
    ngOnInit() {
        this.isWeb = this.config.isWeb();
        this.countries = this.dataProvider.getCountries();
        this.initSlide();
    }
    initSlide() {
        if (this.isWeb) {
            this.sliderTwo = {
                isBeginningSlide: true,
                isEndSlide: false,
                slidesItems: [
                    { s: this.dataProvider.getSlideHome().web.slide1 },
                    { s: this.dataProvider.getSlideHome().web.slide2 },
                    { s: this.dataProvider.getSlideHome().web.slide3 },
                    { s: this.dataProvider.getSlideHome().web.slide4 },
                ]
            };
        }
        else {
            this.sliderTwo = {
                isBeginningSlide: true,
                isEndSlide: false,
                slidesItems: [
                    { s: this.dataProvider.getSlideHome().mobile.slide1 },
                    { s: this.dataProvider.getSlideHome().mobile.slide2 },
                    { s: this.dataProvider.getSlideHome().mobile.slide3 },
                    { s: this.dataProvider.getSlideHome().mobile.slide4 },
                    { s: this.dataProvider.getSlideHome().mobile.slide5 },
                    { s: this.dataProvider.getSlideHome().mobile.slide6 },
                    { s: this.dataProvider.getSlideHome().mobile.slide7 },
                    { s: this.dataProvider.getSlideHome().mobile.slide8 },
                    { s: this.dataProvider.getSlideHome().mobile.slide9 },
                ]
            };
        }
    }
    /**
     * Publier une annonce
     */
    publish() {
        this.navCtrl.navigateForward('publish-annonce');
    }
    /**
     * Cherche une annonce
     */
    search() {
        this.navCtrl.navigateForward('search-annonce');
    }
    // Move to Next slide
    slideNext(object, slideView) {
        if (slideView) {
            slideView.slideNext(500).then(() => {
                this.checkIfNavDisabled(object, slideView);
            });
        }
    }
    // Move to previous slide
    slidePrev(object, slideView) {
        slideView.slidePrev(500).then(() => {
            this.checkIfNavDisabled(object, slideView);
        });
    }
    // Method called when slide is changed by drag or navigation
    SlideDidChange(object, slideView) {
        this.checkIfNavDisabled(object, slideView);
    }
    // Call methods to check if slide is first or last to enable disbale navigation
    checkIfNavDisabled(object, slideView) {
        this.checkisBeginning(object, slideView);
        this.checkisEnd(object, slideView);
    }
    checkisBeginning(object, slideView) {
        slideView.isBeginning().then((istrue) => {
            object.isBeginningSlide = istrue;
        });
    }
    checkisEnd(object, slideView) {
        slideView.isEnd().then((istrue) => {
            object.isEndSlide = istrue;
        });
    }
    goToPage(categoryValue) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.session.setItem('source', 'home');
            this.navCtrl.navigateForward('search-annonce', {
                queryParams: { category: categoryValue }
            });
        });
    }
};
HomePage.ctorParameters = () => [
    { type: angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _providers_afriflash_data_afriflash_data_provider__WEBPACK_IMPORTED_MODULE_6__["AfriflashDataProvider"] },
    { type: _providers_afriflash_config_afriflash_config_provider__WEBPACK_IMPORTED_MODULE_7__["AfriflashConfigProvider"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_providers_afriflash_session_afriflash_session_provider__WEBPACK_IMPORTED_MODULE_8__["AfriflashSessionProvider"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideWithNav', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])
], HomePage.prototype, "slideWithNav", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideWithNav2', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])
], HomePage.prototype, "slideWithNav2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideWithNav3', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])
], HomePage.prototype, "slideWithNav3", void 0);
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _providers_afriflash_data_afriflash_data_provider__WEBPACK_IMPORTED_MODULE_6__["AfriflashDataProvider"],
        _providers_afriflash_config_afriflash_config_provider__WEBPACK_IMPORTED_MODULE_7__["AfriflashConfigProvider"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        src_providers_afriflash_session_afriflash_session_provider__WEBPACK_IMPORTED_MODULE_8__["AfriflashSessionProvider"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map