(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-annonces-my-annonces-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/my-annonces/my-annonces.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/my-annonces/my-annonces.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content>\r\n\r\n  <div class=\"content-page\">\r\n\r\n    <!-- Spinner -->\r\n    <div class=\"spinner\" [hidden]=\"hiddeSpinner\">\r\n      <ion-spinner name=\"bubbles\"></ion-spinner>\r\n    </div>\r\n\r\n    <!-- LISTES DES ANNONCES -->\r\n    <div class=\"annonces-list\" *ngIf=\"annoncesTmp && hiddeSpinner === true\">\r\n\r\n      <afriflash-ads [ads]=\"annoncesTmp\" [itemsPerPage]=\"nbrAnnoncesPerPage\"\r\n                     [currentPage]=\"currentPage\" [myadd]=\"true\"\r\n                     (position)=\"getPosition($event)\" (emitId)=\"moreDetails($event)\">\r\n\r\n      </afriflash-ads>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/my-annonces/my-annonces-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/my-annonces/my-annonces-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MyAnnoncesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAnnoncesPageRoutingModule", function() { return MyAnnoncesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _my_annonces_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-annonces.page */ "./src/app/pages/my-annonces/my-annonces.page.ts");




const routes = [
    {
        path: '',
        component: _my_annonces_page__WEBPACK_IMPORTED_MODULE_3__["MyAnnoncesPage"]
    }
];
let MyAnnoncesPageRoutingModule = class MyAnnoncesPageRoutingModule {
};
MyAnnoncesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyAnnoncesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/my-annonces/my-annonces.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/my-annonces/my-annonces.module.ts ***!
  \*********************************************************/
/*! exports provided: MyAnnoncesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAnnoncesPageModule", function() { return MyAnnoncesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_annonces_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-annonces-routing.module */ "./src/app/pages/my-annonces/my-annonces-routing.module.ts");
/* harmony import */ var _my_annonces_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-annonces.page */ "./src/app/pages/my-annonces/my-annonces.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let MyAnnoncesPageModule = class MyAnnoncesPageModule {
};
MyAnnoncesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_annonces_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyAnnoncesPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_my_annonces_page__WEBPACK_IMPORTED_MODULE_6__["MyAnnoncesPage"]]
    })
], MyAnnoncesPageModule);



/***/ }),

/***/ "./src/app/pages/my-annonces/my-annonces.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/my-annonces/my-annonces.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-page .annonces-list {\n  margin-top: 14vh !important;\n}\n.content-page .spinner {\n  text-align: center;\n  margin-top: 50vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktYW5ub25jZXMvQzpcXFVzZXJzXFx0bWRpYWxsb1xcRG9jdW1lbnRzXFxQcm9qZXRfQWZyaXF1ZVxcQWZyaWZsYXNoXFxhZnJpZmxhc2gtZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxteS1hbm5vbmNlc1xcbXktYW5ub25jZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9teS1hbm5vbmNlcy9teS1hbm5vbmNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSwyQkFBQTtBQ0RKO0FESUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9teS1hbm5vbmNlcy9teS1hbm5vbmNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1wYWdlIHtcclxuXHJcbiAgLmFubm9uY2VzLWxpc3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMTR2aCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnNwaW5uZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNTB2aDtcclxuICB9XHJcbn1cclxuIiwiLmNvbnRlbnQtcGFnZSAuYW5ub25jZXMtbGlzdCB7XG4gIG1hcmdpbi10b3A6IDE0dmggIWltcG9ydGFudDtcbn1cbi5jb250ZW50LXBhZ2UgLnNwaW5uZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwdmg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/my-annonces/my-annonces.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/my-annonces/my-annonces.page.ts ***!
  \*******************************************************/
/*! exports provided: MyAnnoncesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAnnoncesPage", function() { return MyAnnoncesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_afriflash_observables_afriflash_observables_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/afriflash-observables/afriflash-observables.provider */ "./src/providers/afriflash-observables/afriflash-observables.provider.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_afriflash_http_afriflash_http_annonce_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/afriflash-http/afriflash-http-annonce.provider */ "./src/providers/afriflash-http/afriflash-http-annonce.provider.ts");
/* harmony import */ var _providers_afriflash_data_afriflash_data_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/afriflash-data/afriflash-data.provider */ "./src/providers/afriflash-data/afriflash-data.provider.ts");
/* harmony import */ var _providers_afriflash_config_afriflash_config_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/afriflash-config/afriflash-config.provider */ "./src/providers/afriflash-config/afriflash-config.provider.ts");
/* harmony import */ var _providers_afriflash_utils_functions_afriflash_utils_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/afriflash-utils-functions/afriflash-utils.provider */ "./src/providers/afriflash-utils-functions/afriflash-utils.provider.ts");
/* harmony import */ var _providers_afriflash_session_afriflash_session_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../providers/afriflash-session/afriflash-session.provider */ "./src/providers/afriflash-session/afriflash-session.provider.ts");









let MyAnnoncesPage = class MyAnnoncesPage {
    constructor(observable, navCtrl, httpAnnonce, dataProvider, config, session, utilsProvider) {
        this.observable = observable;
        this.navCtrl = navCtrl;
        this.httpAnnonce = httpAnnonce;
        this.dataProvider = dataProvider;
        this.config = config;
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
        this.nbrAnnoncesPerPage = 20;
        /**
         * Valeur de la categorie par défaut
         */
        this.categoryDefault = '';
    }
    ngOnInit() {
        // initialisation tableau positions
        this.positions = [];
        // Initialisation des choix pour les filtres secondaires
        this.choicies = this.dataProvider.getChoices();
        // Initialisation de la plateforme
        this.isWeb = this.config.isWeb();
        // Chargement des données
        this.getAnnonces();
        // Pour rediriger vers le home quand le user n'est pas connecté
        this.init();
        this.observable.loadMyAnnonces.subscribe((idUser) => {
            this.annoncesTmp = null;
            this.annonces = null;
            this.getAnnonces();
        });
    }
    /**
     * Verifie si le user est connecté
     */
    init() {
        this.session.getItem('socialusers').then((user) => {
            if (!user) {
                this.navCtrl.navigateRoot('/');
            }
        });
    }
    /**
     * Recupère les critères
     * @param criteres critères
     */
    getFilters(criteres) {
        this.criteres = criteres;
        this.annonces = null;
        this.annoncesTmp = null;
        console.log(this.criteres);
        this.skip = 0;
        this.currentPage = 1;
        this.getAnnonces();
    }
    /**
     * Recupere la position de la page courante
     * @param position Position de la page
     */
    getPosition(position) {
        this.currentPage = position;
        // Recuperer un multiple de 5
        if (position % 5 === 0 && !this.positions.includes(position)) {
            this.positions.push(position);
            this.skip = this.skip + this.limit;
            this.getAnnonces();
        }
    }
    /**
     * Afficher plus de details pour l'annonce en question
     * @param id id
     */
    moreDetails(annonceId) {
        this.navCtrl.navigateForward('details-annonce', {
            queryParams: { id: annonceId }
        });
    }
    /**
     * Recupère la liste des annonces
     */
    getAnnonces() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const currentUser = yield this.session.getItem('socialusers');
            const body = {
                limit: this.limit,
                skip: this.skip,
                user: currentUser.objectId
            };
            this.hiddeSpinner = false;
            this.httpAnnonce.getAllWithFilters('annonce/byuser', body).subscribe((annonces) => {
                if (!this.annonces && !this.annoncesTmp) {
                    this.annonces = [];
                    this.annoncesTmp = [];
                    this.positions = [];
                }
                this.annonces = this.annonces.concat(annonces.slice());
                this.annoncesTmp = this.annoncesTmp.concat(annonces.slice());
                this.results = this.utilsProvider.customizeNumber(annonces.length);
                this.hiddeSpinner = true;
                // this.observable.spinnerEvent.emit(true);
            });
        });
    }
};
MyAnnoncesPage.ctorParameters = () => [
    { type: _providers_afriflash_observables_afriflash_observables_provider__WEBPACK_IMPORTED_MODULE_2__["AfriflashObservablesProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _providers_afriflash_http_afriflash_http_annonce_provider__WEBPACK_IMPORTED_MODULE_4__["AfriflashHttpAnnonceProvider"] },
    { type: _providers_afriflash_data_afriflash_data_provider__WEBPACK_IMPORTED_MODULE_5__["AfriflashDataProvider"] },
    { type: _providers_afriflash_config_afriflash_config_provider__WEBPACK_IMPORTED_MODULE_6__["AfriflashConfigProvider"] },
    { type: _providers_afriflash_session_afriflash_session_provider__WEBPACK_IMPORTED_MODULE_8__["AfriflashSessionProvider"] },
    { type: _providers_afriflash_utils_functions_afriflash_utils_provider__WEBPACK_IMPORTED_MODULE_7__["AfriflashUtilsProvider"] }
];
MyAnnoncesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-annonces',
        template: __webpack_require__(/*! raw-loader!./my-annonces.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/my-annonces/my-annonces.page.html"),
        styles: [__webpack_require__(/*! ./my-annonces.page.scss */ "./src/app/pages/my-annonces/my-annonces.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_afriflash_observables_afriflash_observables_provider__WEBPACK_IMPORTED_MODULE_2__["AfriflashObservablesProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _providers_afriflash_http_afriflash_http_annonce_provider__WEBPACK_IMPORTED_MODULE_4__["AfriflashHttpAnnonceProvider"],
        _providers_afriflash_data_afriflash_data_provider__WEBPACK_IMPORTED_MODULE_5__["AfriflashDataProvider"],
        _providers_afriflash_config_afriflash_config_provider__WEBPACK_IMPORTED_MODULE_6__["AfriflashConfigProvider"],
        _providers_afriflash_session_afriflash_session_provider__WEBPACK_IMPORTED_MODULE_8__["AfriflashSessionProvider"],
        _providers_afriflash_utils_functions_afriflash_utils_provider__WEBPACK_IMPORTED_MODULE_7__["AfriflashUtilsProvider"]])
], MyAnnoncesPage);



/***/ })

}]);
//# sourceMappingURL=pages-my-annonces-my-annonces-module-es2015.js.map