(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-annonce-search-annonce-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/search-annonce/search-annonce.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/search-annonce/search-annonce.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content #content>\r\n  \r\n  <div class=\"content-page\">\r\n\r\n    <!-- FILTRES PRINCIPAUX-->\r\n    <div class=\"filters\">\r\n\r\n       <app-afriflash-ad-filters [categoryDefault]=\"categoryDefault\" (sendFilters)=\"getFilters($event)\">\r\n\r\n       </app-afriflash-ad-filters>\r\n\r\n    </div>\r\n\r\n    <!-- FILTRES SECONDAIRE  -->\r\n    <div class=\"filters-secondary\" *ngIf=\"annoncesTmp\" [ngClass]=\"\r\n      {\r\n        'row': isWeb == true,\r\n        'col': isWeb == false\r\n      } \"\r\n    >\r\n\r\n      <!-- Nombres d'annonces trouvées -->\r\n      <div class=\"nbr-results col x-lg-4 mr-0\">\r\n        <span>Annonces : </span>\r\n        <span>{{ annoncesTmp.length }}</span>\r\n      </div>\r\n\r\n      <!-- Pro - Particulier -->\r\n      <div class=\"pro-particulier row x-lg-4 ml-3 mr-0\">\r\n          <div [ngClass]=\"\r\n              {  \r\n                'col-6': isWeb == true,\r\n                '': isWeb == false\r\n              }\r\n            \"\r\n          >\r\n              <input type=\"checkbox\" (click)=\"handleCheckboxParticulier($event)\"\r\n                     id=\"Particuliers\" name=\"Particulier\" value=\"Particulier\" checked>\r\n              <ion-label  color='primary' position=\"stacked\">\r\n                Particuliers\r\n              </ion-label>\r\n          </div>\r\n          <div  [ngClass]=\"\r\n              {  \r\n                'col-6': isWeb == true,\r\n                '': isWeb == false\r\n              }\r\n            \"\r\n          >\r\n              <input type=\"checkbox\" (click)=\"handleCheckboxPro($event)\"\r\n                     id=\"Professionnels\" name=\"Professionnel\" value=\"Professionnel\" checked>\r\n              <ion-label  color='primary' position=\"stacked\">\r\n                Professionnels\r\n              </ion-label>\r\n          </div>\r\n\r\n      </div>\r\n      \r\n      <!-- TRI -->\r\n      <div class=\"location col x-lg-4\" *ngIf=\"choicies\">\r\n        <select #valueSelect \r\n                (change)=\"getChoiceSecondFilter(valueSelect.value)\">\r\n            <option value=\"Tri: Plus récentes\" selected>\r\n              Tri: Plus récentes\r\n            </option>\r\n            <option *ngFor=\"let value of choicies\" value=\"{{ value }}\">\r\n              {{ value }}\r\n            </option>\r\n        </select>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"spinner\" [hidden]=\"hiddeSpinner\">\r\n      <ion-spinner name=\"bubbles\"></ion-spinner>\r\n    </div>\r\n\r\n    <!-- LISTES DES ANNONCES -->\r\n    <div class=\"annonces-list\" *ngIf=\"annoncesTmp && hiddeSpinner === true\">\r\n\r\n        <afriflash-ads [ads]=\"annoncesTmp\" [itemsPerPage]=\"nbrAnnoncesPerPage\" \r\n                       [currentPage]=\"currentPage\" (position)=\"getPosition($event)\"\r\n                       (emitId)=\"moreDetails($event)\">\r\n\r\n        </afriflash-ads>\r\n\r\n    </div>\r\n\r\n    <!-- PAGINATION -->\r\n    <!-- <div class=\"pagination\" *ngIf=\"annoncesTmp && hiddeSpinner === true\">\r\n        <app-afriflash-pagination [positions]=\"positions\" (position)=\"getPosition($event)\">\r\n\r\n        </app-afriflash-pagination>\r\n    </div> -->\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/search-annonce/search-annonce-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/search-annonce/search-annonce-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SearchAnnoncePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAnnoncePageRoutingModule", function() { return SearchAnnoncePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_annonce_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-annonce.page */ "./src/app/pages/search-annonce/search-annonce.page.ts");




var routes = [
    {
        path: '',
        component: _search_annonce_page__WEBPACK_IMPORTED_MODULE_3__["SearchAnnoncePage"]
    }
];
var SearchAnnoncePageRoutingModule = /** @class */ (function () {
    function SearchAnnoncePageRoutingModule() {
    }
    SearchAnnoncePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SearchAnnoncePageRoutingModule);
    return SearchAnnoncePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/search-annonce/search-annonce.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/search-annonce/search-annonce.module.ts ***!
  \***************************************************************/
/*! exports provided: SearchAnnoncePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAnnoncePageModule", function() { return SearchAnnoncePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_annonce_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-annonce-routing.module */ "./src/app/pages/search-annonce/search-annonce-routing.module.ts");
/* harmony import */ var _search_annonce_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-annonce.page */ "./src/app/pages/search-annonce/search-annonce.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");









var SearchAnnoncePageModule = /** @class */ (function () {
    function SearchAnnoncePageModule() {
    }
    SearchAnnoncePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _search_annonce_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchAnnoncePageRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"]
            ],
            declarations: [_search_annonce_page__WEBPACK_IMPORTED_MODULE_6__["SearchAnnoncePage"]]
        })
    ], SearchAnnoncePageModule);
    return SearchAnnoncePageModule;
}());



/***/ }),

/***/ "./src/app/pages/search-annonce/search-annonce.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/search-annonce/search-annonce.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-page .filters-secondary {\n  margin-left: 3vw;\n  margin-right: 3vw;\n  margin-top: 3vh;\n  font-family: Raleway;\n}\n.content-page .filters-secondary .nbr-results {\n  font-weight: bold;\n}\n.content-page .filters-secondary .pro-particulier {\n  font-weight: bold;\n  width: 37vw;\n}\n.content-page .spinner {\n  text-align: center;\n  margin-top: 5vh;\n}\n.content-page .pagination {\n  margin-left: auto;\n  margin-right: auto;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  margin-top: 3vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VhcmNoLWFubm9uY2UvQzpcXFVzZXJzXFx0bWRpYWxsb1xcRG9jdW1lbnRzXFxQcm9qZXRfQWZyaXF1ZVxcQWZyaWZsYXNoXFxhZnJpZmxhc2gtZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxzZWFyY2gtYW5ub25jZVxcc2VhcmNoLWFubm9uY2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWFyY2gtYW5ub25jZS9zZWFyY2gtYW5ub25jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFFRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDRko7QURJSTtFQUNFLGlCQUFBO0FDRk47QURLSTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0hOO0FET0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNMSjtBRFFFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGVBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC1hbm5vbmNlL3NlYXJjaC1hbm5vbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LXBhZ2Uge1xyXG5cclxuICAuZmlsdGVycy1zZWNvbmRhcnkge1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiAzdnc7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDN2dztcclxuICAgIG1hcmdpbi10b3A6IDN2aDtcclxuICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5O1xyXG5cclxuICAgIC5uYnItcmVzdWx0cyB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm8tcGFydGljdWxpZXIge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgd2lkdGg6IDM3dnc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3Bpbm5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgfVxyXG5cclxuICAucGFnaW5hdGlvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIG1hcmdpbi10b3A6IDN2aDtcclxuICB9XHJcbn1cclxuIiwiLmNvbnRlbnQtcGFnZSAuZmlsdGVycy1zZWNvbmRhcnkge1xuICBtYXJnaW4tbGVmdDogM3Z3O1xuICBtYXJnaW4tcmlnaHQ6IDN2dztcbiAgbWFyZ2luLXRvcDogM3ZoO1xuICBmb250LWZhbWlseTogUmFsZXdheTtcbn1cbi5jb250ZW50LXBhZ2UgLmZpbHRlcnMtc2Vjb25kYXJ5IC5uYnItcmVzdWx0cyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRlbnQtcGFnZSAuZmlsdGVycy1zZWNvbmRhcnkgLnByby1wYXJ0aWN1bGllciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMzd2dztcbn1cbi5jb250ZW50LXBhZ2UgLnNwaW5uZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDV2aDtcbn1cbi5jb250ZW50LXBhZ2UgLnBhZ2luYXRpb24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIG1hcmdpbi10b3A6IDN2aDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/search-annonce/search-annonce.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/search-annonce/search-annonce.page.ts ***!
  \*************************************************************/
/*! exports provided: SearchAnnoncePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAnnoncePage", function() { return SearchAnnoncePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_providers_afriflash_observables_afriflash_observables_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/afriflash-observables/afriflash-observables.provider */ "./src/providers/afriflash-observables/afriflash-observables.provider.ts");
/* harmony import */ var src_providers_afriflash_http_afriflash_http_annonce_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/afriflash-http/afriflash-http-annonce.provider */ "./src/providers/afriflash-http/afriflash-http-annonce.provider.ts");
/* harmony import */ var src_providers_afriflash_data_afriflash_data_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/afriflash-data/afriflash-data.provider */ "./src/providers/afriflash-data/afriflash-data.provider.ts");
/* harmony import */ var src_providers_afriflash_config_afriflash_config_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/afriflash-config/afriflash-config.provider */ "./src/providers/afriflash-config/afriflash-config.provider.ts");
/* harmony import */ var src_providers_afriflash_filter_afriflash_filter_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/afriflash-filter/afriflash-filter.provider */ "./src/providers/afriflash-filter/afriflash-filter.provider.ts");
/* harmony import */ var src_providers_afriflash_utils_functions_afriflash_utils_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/providers/afriflash-utils-functions/afriflash-utils.provider */ "./src/providers/afriflash-utils-functions/afriflash-utils.provider.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_providers_afriflash_session_afriflash_session_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/providers/afriflash-session/afriflash-session.provider */ "./src/providers/afriflash-session/afriflash-session.provider.ts");











var SearchAnnoncePage = /** @class */ (function () {
    function SearchAnnoncePage(observable, navCtrl, httpAnnonce, dataProvider, config, filterProvider, route, session, utilsProvider) {
        this.observable = observable;
        this.navCtrl = navCtrl;
        this.httpAnnonce = httpAnnonce;
        this.dataProvider = dataProvider;
        this.config = config;
        this.filterProvider = filterProvider;
        this.route = route;
        this.session = session;
        this.utilsProvider = utilsProvider;
        /**
         * Filtres secondaires
         */
        this.secondaryFilters = {
            proSort: 'Professionnel',
            ParticulierSort: 'Particulier',
            selectFiltre: ''
        };
        /**
         * Afficher le spinner ou non
         */
        this.hiddeSpinner = true;
        /**
         * numéro des pages
         */
        this.positions = [];
        /**
         * Position de la page courante
         */
        this.currentPage = 1;
        /**
         * La limite pour récuperer les données
         */
        this.limit = 100;
        /**
         * Données à ignorer
         */
        this.skip = 0;
        /**
         * Le nombre d'annonces par pages
         */
        this.nbrAnnoncesPerPage = 10;
        /**
         * Valeur de la categorie par défaut
         */
        this.categoryDefault = '';
    }
    SearchAnnoncePage.prototype.ngOnInit = function () {
        var _this = this;
        // initialisation tableau positions
        this.positions = [];
        // Initialisation des choix pour les filtres secondaires
        this.choicies = this.dataProvider.getChoices();
        // Initialisation de la plateforme
        this.isWeb = this.config.isWeb();
        // On supprime la source avant d'initialiser la recherche
        this.session.remove('source').then(function () {
            _this.getAnnonces();
        });
    };
    /**
     * Reinitialise l'ecouteur
     */
    SearchAnnoncePage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var source;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.session.getItem('source')];
                    case 1:
                        source = _a.sent();
                        if (source && source === 'home') {
                            this.subscribe = this.route.queryParams.subscribe(function (category) {
                                if (category) {
                                    _this.criteres = {
                                        acountType: '',
                                        category: category.category,
                                        country: '',
                                        filters: {},
                                        subCategories: null,
                                        typeAnnonce: '',
                                    };
                                    _this.annonces = null;
                                    _this.annoncesTmp = null;
                                    _this.skip = 0;
                                    _this.currentPage = 1;
                                    _this.categoryDefault = category.category;
                                    _this.observable.initDefaultCategory.emit(_this.categoryDefault);
                                    _this.getAnnonces();
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Lorsque l'on quitte la page on se désabonne
     */
    SearchAnnoncePage.prototype.ionViewWillLeave = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Unsuscribe observer');
                        return [4 /*yield*/, this.session.remove('source')];
                    case 1:
                        _a.sent();
                        if (this.subscribe) {
                            this.subscribe.unsubscribe();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Recupère les critères
     * @param criteres critères
     */
    SearchAnnoncePage.prototype.getFilters = function (criteres) {
        this.criteres = criteres;
        this.annonces = null;
        this.annoncesTmp = null;
        this.skip = 0;
        this.currentPage = 1;
        this.getAnnonces();
    };
    /**
     * Recupere la position de la page courante et permet de savoir si c'est un suivant
     * donc il faut requeter de nouveau (multiple de 5) ou si c'est un precedent il ne faut
     * rien faire dans ce cas
     * @param position Position de la page
     */
    SearchAnnoncePage.prototype.getPosition = function (position) {
        this.currentPage = position;
        // On scroll au debut de la page
        this.content.scrollToTop(300);
        // Recuperer un multiple de 5
        if (position % 5 === 0 && !this.positions.includes(position)) {
            this.positions.push(position);
            this.skip = this.skip + this.limit;
            this.getAnnonces();
        }
    };
    /**
     * Afficher plus de details pour l'annonce en question
     * @param id id
     */
    SearchAnnoncePage.prototype.moreDetails = function (annonceId) {
        this.navCtrl.navigateForward('details-annonce', {
            queryParams: { id: annonceId }
        });
    };
    /**
     * Recupère la liste des annonces
     */
    SearchAnnoncePage.prototype.getAnnonces = function () {
        var _this = this;
        var body = {};
        console.log(this.criteres);
        if (this.criteres && this.criteresExist()) {
            body = {
                limit: this.limit,
                skip: this.skip,
                filters: this.criteres
            };
        }
        else {
            body = {
                limit: this.limit,
                skip: this.skip
            };
        }
        this.hiddeSpinner = false;
        this.httpAnnonce.getAllWithFilters('annonce/annonces', body).subscribe(function (annonces) {
            if (!_this.annonces && !_this.annoncesTmp) {
                _this.annonces = [];
                _this.annoncesTmp = [];
                _this.positions = [];
            }
            _this.annonces = _this.annonces.concat(annonces.slice());
            _this.annoncesTmp = _this.annoncesTmp.concat(annonces.slice());
            _this.results = _this.utilsProvider.customizeNumber(annonces.length);
            _this.hiddeSpinner = true;
            // this.observable.spinnerEvent.emit(true);
        });
    };
    /**
     * Recupère le filtre secondaire
     * @param event
     */
    SearchAnnoncePage.prototype.getChoiceSecondFilter = function (value) {
        this.secondaryFilters.selectFiltre = value;
        this.reloadAnnonces();
    };
    /**
     * Récupère le filtre pro
     * @param event
     */
    SearchAnnoncePage.prototype.handleCheckboxPro = function (event) {
        if (event.target.checked) {
            this.secondaryFilters.proSort = event.target.value;
            this.reloadAnnonces();
        }
        else {
            this.secondaryFilters.proSort = '';
            this.reloadAnnonces();
        }
    };
    /**
     * Récupère le filtre particulier
     * @param event
     */
    SearchAnnoncePage.prototype.handleCheckboxParticulier = function (event) {
        if (event.target.checked) {
            this.secondaryFilters.ParticulierSort = event.target.value;
            this.reloadAnnonces();
        }
        else {
            this.secondaryFilters.ParticulierSort = '';
            this.reloadAnnonces();
        }
    };
    /**
     * Verifie si au moins un des critères est remplit
     */
    SearchAnnoncePage.prototype.criteresExist = function () {
        if (this.criteres.acountType !== '' || this.criteres.category !== '' ||
            this.criteres.filters !== {} || this.criteres.subCategories.length !== 0 ||
            this.criteres.typeAnnonce !== '') {
            return true;
        }
        return false;
    };
    /**
     * Recharge les annonces avec les filtres secondaires
     */
    SearchAnnoncePage.prototype.reloadAnnonces = function () {
        if (this.secondaryFilters.selectFiltre && this.secondaryFilters.selectFiltre.trim() !== '') {
            this.hiddeSpinner = false;
            if (this.secondaryFilters.selectFiltre.trim() === 'Tri: Plus récentes') {
                this.annoncesTmp.sort(this.filterProvider.cmpByRecentAnnonces);
                this.annonces.sort(this.filterProvider.cmpByRecentAnnonces);
            }
            if (this.secondaryFilters.selectFiltre.trim() === 'Tri: Plus anciennes') {
                this.annoncesTmp.sort(this.filterProvider.cmpByOldAnnonces);
                this.annonces.sort(this.filterProvider.cmpByOldAnnonces);
            }
        }
        if (this.secondaryFilters.ParticulierSort && this.secondaryFilters.ParticulierSort.trim() === 'Particulier') {
            this.hiddeSpinner = false;
            this.annoncesTmp = this.annonces.filter(function (object) { return object.annonce.compteType === 'Particulier'; });
            this.currentPage = 1;
        }
        if (this.secondaryFilters.proSort && this.secondaryFilters.proSort.trim() === 'Professionnel') {
            this.hiddeSpinner = false;
            this.annoncesTmp = this.annonces.filter(function (object) { return object.annonce.compteType === 'Professionnel'; });
            this.currentPage = 1;
        }
        if (this.secondaryFilters.proSort && this.secondaryFilters.proSort.trim() === 'Professionnel' &&
            this.secondaryFilters.ParticulierSort && this.secondaryFilters.ParticulierSort.trim() === 'Particulier') {
            this.hiddeSpinner = false;
            this.annoncesTmp = this.annonces;
            this.currentPage = 1;
        }
        if (this.secondaryFilters.proSort.trim() !== 'Professionnel' && this.secondaryFilters.ParticulierSort.trim() !== 'Particulier') {
            this.hiddeSpinner = false;
            this.annoncesTmp = this.annonces;
            this.currentPage = 1;
            document.getElementById('Professionnels').click();
            document.getElementById('Particuliers').click();
        }
        this.hiddeSpinner = true;
    };
    SearchAnnoncePage.ctorParameters = function () { return [
        { type: src_providers_afriflash_observables_afriflash_observables_provider__WEBPACK_IMPORTED_MODULE_2__["AfriflashObservablesProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
        { type: src_providers_afriflash_http_afriflash_http_annonce_provider__WEBPACK_IMPORTED_MODULE_3__["AfriflashHttpAnnonceProvider"] },
        { type: src_providers_afriflash_data_afriflash_data_provider__WEBPACK_IMPORTED_MODULE_4__["AfriflashDataProvider"] },
        { type: src_providers_afriflash_config_afriflash_config_provider__WEBPACK_IMPORTED_MODULE_5__["AfriflashConfigProvider"] },
        { type: src_providers_afriflash_filter_afriflash_filter_provider__WEBPACK_IMPORTED_MODULE_6__["AfriflashFilterProvider"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
        { type: src_providers_afriflash_session_afriflash_session_provider__WEBPACK_IMPORTED_MODULE_10__["AfriflashSessionProvider"] },
        { type: src_providers_afriflash_utils_functions_afriflash_utils_provider__WEBPACK_IMPORTED_MODULE_7__["AfriflashUtilsProvider"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchAnnoncePage.prototype, "content", void 0);
    SearchAnnoncePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-annonce',
            template: __webpack_require__(/*! raw-loader!./search-annonce.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/search-annonce/search-annonce.page.html"),
            styles: [__webpack_require__(/*! ./search-annonce.page.scss */ "./src/app/pages/search-annonce/search-annonce.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_afriflash_observables_afriflash_observables_provider__WEBPACK_IMPORTED_MODULE_2__["AfriflashObservablesProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"],
            src_providers_afriflash_http_afriflash_http_annonce_provider__WEBPACK_IMPORTED_MODULE_3__["AfriflashHttpAnnonceProvider"],
            src_providers_afriflash_data_afriflash_data_provider__WEBPACK_IMPORTED_MODULE_4__["AfriflashDataProvider"],
            src_providers_afriflash_config_afriflash_config_provider__WEBPACK_IMPORTED_MODULE_5__["AfriflashConfigProvider"],
            src_providers_afriflash_filter_afriflash_filter_provider__WEBPACK_IMPORTED_MODULE_6__["AfriflashFilterProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            src_providers_afriflash_session_afriflash_session_provider__WEBPACK_IMPORTED_MODULE_10__["AfriflashSessionProvider"],
            src_providers_afriflash_utils_functions_afriflash_utils_provider__WEBPACK_IMPORTED_MODULE_7__["AfriflashUtilsProvider"]])
    ], SearchAnnoncePage);
    return SearchAnnoncePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-search-annonce-search-annonce-module-es5.js.map