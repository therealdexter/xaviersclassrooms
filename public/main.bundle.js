webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_notices_notices_component__ = __webpack_require__("../../../../../src/app/components/notices/notices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_addnotice_addnotice_component__ = __webpack_require__("../../../../../src/app/components/addnotice/addnotice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_person_guard__ = __webpack_require__("../../../../../src/app/guards/person.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_sendmessage_sendmessage_component__ = __webpack_require__("../../../../../src/app/components/sendmessage/sendmessage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_outbox_outbox_component__ = __webpack_require__("../../../../../src/app/components/outbox/outbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_inbox_inbox_component__ = __webpack_require__("../../../../../src/app/components/inbox/inbox.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'notices/view',
        component: __WEBPACK_IMPORTED_MODULE_4__components_notices_notices_component__["a" /* NoticesComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'notices/add',
        component: __WEBPACK_IMPORTED_MODULE_8__components_addnotice_addnotice_component__["a" /* AddnoticeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__guards_person_guard__["a" /* PersonGuard */]]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_5__components_profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'messages/newmessage',
        component: __WEBPACK_IMPORTED_MODULE_10__components_sendmessage_sendmessage_component__["a" /* SendmessageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'messages/outbox',
        component: __WEBPACK_IMPORTED_MODULE_11__components_outbox_outbox_component__["a" /* OutboxComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'messages/inbox',
        component: __WEBPACK_IMPORTED_MODULE_12__components_inbox_inbox_component__["a" /* InboxComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\" style=\"margin-top: 30px\">\n        <flash-messages></flash-messages>\n        <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_notices_notices_component__ = __webpack_require__("../../../../../src/app/components/notices/notices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages_module_flash_messages_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_notice_service__ = __webpack_require__("../../../../../src/app/services/notice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_addnotice_addnotice_component__ = __webpack_require__("../../../../../src/app/components/addnotice/addnotice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_tabs_tabs_component__ = __webpack_require__("../../../../../src/app/components/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__guards_person_guard__ = __webpack_require__("../../../../../src/app/guards/person.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_sendmessage_sendmessage_component__ = __webpack_require__("../../../../../src/app/components/sendmessage/sendmessage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_inbox_inbox_component__ = __webpack_require__("../../../../../src/app/components/inbox/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_outbox_outbox_component__ = __webpack_require__("../../../../../src/app/components/outbox/outbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_messagenav_messagenav_component__ = __webpack_require__("../../../../../src/app/components/messagenav/messagenav.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_notices_notices_component__["a" /* NoticesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_addnotice_addnotice_component__["a" /* AddnoticeComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_tabs_tabs_component__["a" /* TabsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_sendmessage_sendmessage_component__["a" /* SendmessageComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_inbox_inbox_component__["a" /* InboxComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_outbox_outbox_component__["a" /* OutboxComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_messagenav_messagenav_component__["a" /* MessagenavComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_16__angular_http__["HttpModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_22__services_message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_18__services_notice_service__["a" /* NoticeService */],
                __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"],
                __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_21__guards_person_guard__["a" /* PersonGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/addnotice/addnotice.component.html":
/***/ (function(module, exports) {

module.exports = "<app-tabs></app-tabs>\n<div class=\"container not-form\">\n    <div class=\"form-group\">\n      <h4 class=\"page-header\">Title</h4>\n      <input type=\"text\" name=\"title\" [(ngModel)]=\"title\">\n    </div>\n  <h5 class=\"page-header\"> Add a notice</h5>\n  <div class=\"form-group\">\n    <p class=\"ex\" >For ex. complete journals, 2:40 lecture cancelled, etc. </p>\n    <textarea maxlength=\"250\" (input)=\"updateCharRem()\" name=\"notice\" [(ngModel)]=\"notice\" rows=\"5\" cols=\"50\"></textarea>\n  </div>\n  <p>Characters left: {{length}}</p>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNotice()\" value=\"Submit\">Submit</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/addnotice/addnotice.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".not-form {\n  margin-top: 30px;\n  margin-left: 30px;\n  margin-bottom: 30px; }\n\n.not-form > p {\n  font-size: 70%; }\n\n.not-form > .form-group {\n  margin-top: 15px; }\n\n.not-form > .form-group > textarea {\n  resize: none; }\n\n.ex {\n  font-size: 70%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/addnotice/addnotice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddnoticeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notice_service__ = __webpack_require__("../../../../../src/app/services/notice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddnoticeComponent = /** @class */ (function () {
    function AddnoticeComponent(noticeService, authService, flashMessage, router, validateService) {
        this.noticeService = noticeService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.validateService = validateService;
        this.notice = "";
        this.title = "";
        this.length = 0;
    }
    AddnoticeComponent.prototype.ngOnInit = function () {
        this.length = 250 - this.notice.length;
    };
    AddnoticeComponent.prototype.updateCharRem = function () {
        this.length = 250 - this.notice.length;
    };
    AddnoticeComponent.prototype.addNotice = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            var date = new Date();
            var currdate = "" + date.getUTCDate() + "/" + (date.getUTCMonth() + 1) + "/" + date.getUTCFullYear() + "";
            var currtime = "" + ((date.getHours() < 10) ? "0" + date.getHours() : "" + date.getHours()) + ":" + ((date.getMinutes() < 10) ? "0" + date.getMinutes() : "" + date.getMinutes());
            var notice = {
                title: _this.title,
                notice: _this.notice,
                author: profile.user.name,
                date: currdate,
                time: currtime
            };
            var not = {
                title: _this.title,
                notice: _this.notice
            };
            if (_this.validateService.validateNotices(not)) {
                _this.noticeService.addNotice(notice).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show(data.message, {
                            timeout: 5000,
                            cssClass: 'alert-success flashfade'
                        });
                        _this.router.navigate(['/notices']);
                    }
                    else {
                        _this.flashMessage.show(data.message, {
                            timeout: 5000,
                            cssClass: 'alert-danger flashfade'
                        });
                    }
                });
            }
            else {
                if (!_this.validateService.validateTitle(not.title)) {
                    _this.flashMessage.show("Title should be 10 to 50 characters long", {
                        timeout: 5000,
                        cssClass: 'alert-danger flashfade'
                    });
                }
                if (!_this.validateService.validateNoticeBody(not.notice)) {
                    _this.flashMessage.show("Notice should be 50 to 250 characters long", {
                        timeout: 5000,
                        cssClass: 'alert-danger flashfade'
                    });
                }
            }
        });
    };
    AddnoticeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addnotice',
            template: __webpack_require__("../../../../../src/app/components/addnotice/addnotice.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/addnotice/addnotice.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_notice_service__["a" /* NoticeService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */]])
    ], AddnoticeComponent);
    return AddnoticeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer bg-inverse fixed-bottom center\">\n  <div class=\"container\">\n    <span class=\"text-muted\">Place sticky footer content here.</span>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <br>\n  <br>\n  <h3>Welcome to Xavier's Classrooms</h3>\n  <p>Your one stop for everything</p>\n  <button *ngIf=\"!authService.loggedIn()\" type=\"button\" class=\"btn btn-primary\" routerLink = \"login\">Login</button>\n  <button *ngIf=\"!authService.loggedIn()\" type=\"button\" class=\"btn btn-primary\" routerLink = \"register\">Register</button>\n\n  <br>\n  <p *ngIf=\"authService.loggedIn()\">Head over to <b>messaging</b> to send a personal message to anyone.</p>\n  <br>\n  <p *ngIf=\"authService.loggedIn()\">Want to send something to the whole class? Head over to <b>notices</b> to post a notice everyone can see!<br><small>(Only for professors)</small></p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.container {\n  font-family: 'Raleway', sans-serif;\n  font-size: 120%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/inbox/inbox.component.html":
/***/ (function(module, exports) {

module.exports = "<app-messagenav></app-messagenav>\n\n<div class=\"message-container\">\n    <h5 class=\"page-header\">{{inboxsize}} message(s)</h5>\n    <div *ngFor = \"let message of inbox\" class=\"card card-styling\">\n      <div class=\"card-header\"><h5>{{message.title}}</h5></div>\n      <div class=\"card-body\">\n          <p class=\"card-text\">{{message.message}}</p>\n      </div> \n      <div class=\"card-footer\">\n        <p>Sent by {{message.name}} on {{message.date}} at {{message.time}}</p>\n      </div>\n    </div>\n</div>\n\n<div class=\"empty\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/components/inbox/inbox.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-styling {\n  margin-top: 30px; }\n\n.card-styling > div {\n  padding: 15px 25px; }\n\n.card-footer {\n  padding: 0px; }\n\n.card-footer p {\n  font-size: 75%;\n  margin: 0px; }\n\n.author {\n  font-size: 70%; }\n\n.empty {\n  margin-top: 30px; }\n\n.page-header {\n  margin-top: 30px; }\n\n.message-container {\n  margin-left: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/inbox/inbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InboxComponent = /** @class */ (function () {
    function InboxComponent(authService) {
        this.authService = authService;
    }
    InboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (data) {
            _this.inbox = data.user.inbox;
            _this.inbox = _this.inbox.reverse();
            _this.inboxsize = _this.inbox.length;
        });
    };
    InboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inbox',
            template: __webpack_require__("../../../../../src/app/components/inbox/inbox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/inbox/inbox.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], InboxComponent);
    return InboxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container log-form\">\n    <h2 class=\"page-header\" >Login</h2>\n    <br>\n    <form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\n            <div class=\"form-group\">\n              <label for=\"uid\">UID No</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter UID\" [(ngModel)]=\"uid\" name=\"uid\">\n            </div>\n            <div class=\"form-group\">\n            <label for=\"Password\">Password</label>\n            <input type=\"password\" class=\"form-control\" placeholder=\" Enter Password\" [(ngModel)]=\"password\" name=\"password\">\n            </div>\n            <br>\n            <input class=\"btn btn-lg btn-primary\" type=\"submit\" value=\"Login\">\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".log-form {\n  margin-top: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.isChecked = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var person = {
            uid: this.uid,
            password: this.password
        };
        this.authService.authenticatePerson(person).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("You've successfully logged in", {
                    cssClass: "alert-success flashfade",
                    timeout: 5000
                });
                _this.authService.storePerson(data.token, data.person);
                _this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessage.show(data.message, {
                    cssClass: "alert-danger flashfade",
                    timeout: 5000
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/messagenav/messagenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <br>\n  <div>\n    <h3 class=\"page-header messagenav\">Messaging</h3>\n    <p>Send messages to anyone, it's for all!</p>\n  </div>\n  <div>\n    <ul class=\"nav nav-tabs\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" routerLink = \"/messages/inbox\">Inbox</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" routerLink = \"/messages/outbox\">Outbox</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" routerLink = \"/messages/newmessage\">Compose</a>\n          </li>\n    </ul>\n  </div>\n  <br>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/messagenav/messagenav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "messagenav {\n  font-size: 110%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/messagenav/messagenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagenavComponent = /** @class */ (function () {
    function MessagenavComponent() {
    }
    MessagenavComponent.prototype.ngOnInit = function () {
    };
    MessagenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-messagenav',
            template: __webpack_require__("../../../../../src/app/components/messagenav/messagenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/messagenav/messagenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagenavComponent);
    return MessagenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\">\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a class=\"navbar-brand\" routerLink = \"\"><span style=\"font-weight: normal\">Xavier's </span><span style=\"font-weight: lighter\">Classrooms</span></a>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\"><a routerLink = \"/\" class=\"nav-link\">HOME</a></li>\n      </ul>\n      <ul class=\"navbar-nav\">\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\"><a routerLink = \"/login\" class=\"nav-link\">LOGIN</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\"><a routerLink = \"/register\" class=\"nav-link\">REGISTER</a></li>\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\"><a routerLink = \"/messages/inbox\" class=\"nav-link\">MESSAGING</a></li>\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\"><a routerLink = \"/notices/view\" class=\"nav-link\">NOTICES</a></li>\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\"><a routerLink = \"/profile\" class=\"nav-link\">PROFILE</a></li>\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\"><a (click)=\"onLogoutClick()\" ng-href=\"\" class=\"nav-link\">LOGOUT</a></li>\n      </ul>\n    </div>\n  </nav>\n    "

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show("You are logged out", {
            cssClass: "alert-success flashfade",
            timeout: 5000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/notices/notices.component.html":
/***/ (function(module, exports) {

module.exports = "<app-tabs></app-tabs>\n<div class=\"notices-container\">\n  <h5 class=\"page-header\">{{noticelength}} notice(s)</h5>\n  <div *ngFor = \"let notice of notices\" class=\"card card-styling\">\n  <div class=\"card-header\"><h4>{{notice.title}}</h4></div>\n  <div class=\"card-body\">\n      <p class=\"card-text\">{{notice.notice}}</p>\n      <h6 class=\"card-title author\">By {{notice.author}}</h6>\n  </div> \n  <div class=\"card-footer\">\n    <p>Posted on {{notice.date}} at {{notice.time}}</p>\n  </div>\n</div>\n</div>\n\n<div class=\"empty\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/components/notices/notices.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-styling {\n  margin-top: 30px; }\n\n.card-styling > div {\n  padding: 15px 25px; }\n\n.card-footer {\n  padding: 0px; }\n\n.card-footer p {\n  font-size: 70%;\n  margin: 0px; }\n\n.author {\n  font-size: 70%; }\n\n.empty {\n  margin-top: 30px; }\n\n.page-header {\n  margin-top: 30px; }\n\n.notices-container {\n  margin-left: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/notices/notices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notice_service__ = __webpack_require__("../../../../../src/app/services/notice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoticesComponent = /** @class */ (function () {
    function NoticesComponent(noticeService) {
        this.noticeService = noticeService;
    }
    NoticesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.noticeService.getNotices().subscribe(function (notice) {
            _this.notices = notice;
            _this.notices = _this.notices.reverse();
            _this.noticelength = _this.notices.length;
        });
    };
    NoticesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notices',
            template: __webpack_require__("../../../../../src/app/components/notices/notices.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/notices/notices.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_notice_service__["a" /* NoticeService */]])
    ], NoticesComponent);
    return NoticesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/outbox/outbox.component.html":
/***/ (function(module, exports) {

module.exports = "<app-messagenav></app-messagenav>\r\n\r\n<div class=\"message-container\">\r\n        <h5 class=\"page-header\">{{outboxsize}} message(s)</h5>\r\n        <div *ngFor = \"let message of outbox\" class=\"card card-styling\">\r\n          <div class=\"card-header\"><h5>{{message.title}}</h5></div>\r\n          <div class=\"card-body\">\r\n              <p class=\"card-text\">{{message.message}}</p>\r\n          </div> \r\n          <div class=\"card-footer\">\r\n            <p>Sent to {{message.namer}} on {{message.date}} at {{message.time}}</p>\r\n          </div>\r\n        </div>\r\n</div>\r\n\r\n<div class=\"empty\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/outbox/outbox.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-styling {\n  margin-top: 30px; }\n\n.card-styling > div {\n  padding: 15px 25px; }\n\n.card-footer {\n  padding: 0px; }\n\n.card-footer p {\n  font-size: 75%;\n  margin: 0px; }\n\n.author {\n  font-size: 70%; }\n\n.empty {\n  margin-top: 30px; }\n\n.page-header {\n  margin-top: 30px; }\n\n.message-container {\n  margin-left: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/outbox/outbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OutboxComponent = /** @class */ (function () {
    function OutboxComponent(authService) {
        this.authService = authService;
    }
    OutboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (data) {
            _this.outbox = data.user.outbox;
            _this.outbox = _this.outbox.reverse();
            _this.outboxsize = _this.outbox.length;
        });
    };
    OutboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-outbox',
            template: __webpack_require__("../../../../../src/app/components/outbox/outbox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/outbox/outbox.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], OutboxComponent);
    return OutboxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"person\" >\n  <h2 class=\"page-header\">Welcome {{person.name}}</h2><br>\n  <div class=\"card\">\n      <div class=\"card-header\">{{person.uid}}</div>\n      <div class=\"card-body\">{{person.email}}</div> \n      <div *ngIf=\"person.isTeacher\" class=\"card-footer\">Professor</div>\n      <div *ngIf=\"!person.isTeacher\" class=\"card-footer\">Student</div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-header {\n  font-family: \"Raleway\",\"sans-serif\"; }\n\n.card-body {\n  padding: 12px 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notice_service__ = __webpack_require__("../../../../../src/app/services/notice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router, noticeService) {
        this.authService = authService;
        this.router = router;
        this.noticeService = noticeService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.person = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_notice_service__["a" /* NoticeService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container reg-form\">\n    <h2 class=\"page-header\">Register</h2>\n    <form (submit)=\"onRegisterSubmit()\" >\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Full name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"uid\">UID (6 digit)</label>\n        <input type=\"text\" maxlength=\"6\" [(ngModel)]=\"uid\" name=\"uid\" class=\"form-control\" id=\"uid\" placeholder=\"Enter Username\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email\">\n        <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\" Enter Password\">\n      </div>\n\n      <div class=\"form-group\">\n          <label for=\"cpassword\">Confirm password</label>\n          <input type=\"password\" [(ngModel)]=\"cpassword\" name=\"cpassword\" class=\"form-control\" id=\"cpassword\" placeholder=\"Confirm Password\">\n        </div>\n\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n    </form>\n    \n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reg-form {\n  margin-top: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module_flash_messages_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var person = {
            name: this.name,
            uid: this.uid,
            email: this.email,
            password: this.password,
            cpassword: this.cpassword
        };
        this.isValid = true;
        //Required fields
        if (!this.validateService.validateName(person.name)) {
            //fill in all fields
            this.flashMessage.show("Please fill in your full name (eg. Walter White)", {
                timeout: 5000,
                cssClass: 'alert-danger flashfade'
            });
            this.isValid = this.isValid && false;
        }
        if (!this.validateService.validateEmail(person.email)) {
            this.flashMessage.show("Please enter a valid email ID", {
                timeout: 5000,
                cssClass: 'alert-danger flashfade'
            });
            this.isValid = this.isValid && false;
        }
        if (!this.validateService.validatePasswords(person.password, person.cpassword)) {
            this.flashMessage.show("Password field empty or passwords don't match. Password must be between 8 and 12 characters long and include at least one numeric digit.", {
                timeout: 5000,
                cssClass: 'alert-danger flashfade'
            });
            this.isValid = this.isValid && false;
        }
        if (!this.validateService.validateUID(person.uid)) {
            this.flashMessage.show("UID should be a 6 digit number", {
                timeout: 5000,
                cssClass: 'alert-danger flashfade'
            });
            this.isValid = this.isValid && false;
        }
        else {
            this.authService.uidExists({ uid: person.uid }).subscribe(function (response) {
                if (!response.success) {
                    _this.flashMessage.show(response.message, {
                        timeout: 5000,
                        cssClass: 'alert-danger flashfade'
                    });
                    _this.isValid = _this.isValid && false;
                }
                else {
                    if (_this.isValid) {
                        console.log("person is " + person);
                        _this.authService.registerPerson(person).subscribe(function (data) {
                            if (data.success) {
                                _this.flashMessage.show("You are now registered. Login using your username and password.", {
                                    timeout: 5000,
                                    cssClass: 'alert-success flashfade'
                                });
                                _this.router.navigate(['/login']);
                            }
                            else {
                                _this.flashMessage.show("Something went wrong!", {
                                    timeout: 5000,
                                    cssClass: 'alert-danger flashfade'
                                });
                                _this.router.navigate(['/register']);
                            }
                        });
                    }
                }
            });
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sendmessage/sendmessage.component.html":
/***/ (function(module, exports) {

module.exports = "<app-messagenav></app-messagenav>\n\n<div class=\"container mes-form\">\n    <div class=\"form-group\">\n        <h4 class=\"page-header\">Title</h4>\n        <input type=\"text\" name=\"title\" [(ngModel)]=\"title\">\n      </div>\n    <h5 class=\"page-header\">Message</h5>\n    <div class=\"form-group\">\n      <p class=\"ex\" >For ex. you could request for notes, help, etc. </p>\n      <textarea maxlength=\"250\" (input)=\"updateCharRem()\" name=\"message\" [(ngModel)]=\"message\" rows=\"5\" cols=\"25\"></textarea>\n    </div>\n    <p>Characters left: {{length}}</p>\n    <div class=\"form-group\">\n          <h5>To (Enter the UID)</h5>\n          <input type=\"text\" maxlength=\"6\" [(ngModel)]=\"to\" name=\"to\">\n    </div>\n\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onMessageSend()\">Send</button>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/sendmessage/sendmessage.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mes-form {\n  margin-top: 30px;\n  margin-left: 30px;\n  margin-bottom: 30px; }\n\n.mes-form > p {\n  font-size: 70%; }\n\n.mes-form > .form-group {\n  margin-top: 15px; }\n\n.mes-form > .form-group > textarea {\n  resize: none; }\n\n.ex {\n  font-size: 70%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sendmessage/sendmessage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendmessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SendmessageComponent = /** @class */ (function () {
    function SendmessageComponent(authService, messageService, flashMessage, validateService, router) {
        this.authService = authService;
        this.messageService = messageService;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
        this.router = router;
        this.message = "";
        this.length = 0;
    }
    SendmessageComponent.prototype.ngOnInit = function () {
        this.length = 250 - this.message.length;
    };
    SendmessageComponent.prototype.updateCharRem = function () {
        this.length = 250 - this.message.length;
    };
    SendmessageComponent.prototype.onMessageSend = function () {
        var _this = this;
        this.isValid = true;
        if (!this.validateService.validateMessageTitle(this.title)) {
            this.isValid = this.isValid && false;
            this.flashMessage.show("Title should be 10 to 50 characters long", {
                timeout: 5000,
                cssClass: 'alert-danger flashfade'
            });
        }
        if (!this.validateService.validateMessageBody(this.message)) {
            this.isValid = this.isValid && false;
            this.flashMessage.show("Message should be 50 to 250 characters long", {
                timeout: 5000,
                cssClass: 'alert-danger flashfade'
            });
        }
        this.authService.uidExists({ uid: this.to }).subscribe(function (response) {
            if (!response.success && _this.isValid && (_this.authService.getLoggedInDetails().uid != _this.to)) {
                var date = new Date();
                var currdate = "" + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + "";
                var currtime = "" + ((date.getHours() < 10) ? "0" + date.getHours() : "" + date.getHours()) + ":" + ((date.getMinutes() < 10) ? "0" + date.getMinutes() : "" + date.getMinutes());
                var message_1 = {
                    uids: _this.authService.getLoggedInDetails().uid,
                    name: _this.authService.getLoggedInDetails().name,
                    uidr: _this.to,
                    namer: response.person.name,
                    title: _this.title,
                    message: _this.message,
                    date: currdate,
                    time: currtime
                };
                _this.messageService.postMessages(message_1).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show("Message has been sent to " + message_1.namer + " (" + message_1.uidr + ")", {
                            timeout: 5000,
                            cssClass: 'alert-success flashfade'
                        });
                        _this.router.navigate(['/messages/outbox']);
                    }
                    else {
                        _this.flashMessage.show("Message could not be sent to " + message_1.namer + " (" + message_1.uidr + ")", {
                            timeout: 5000,
                            cssClass: 'alert-danger flashfade'
                        });
                    }
                });
            }
            else {
                if (!_this.validateService.validateUID(_this.to)) {
                    _this.flashMessage.show("UID should be a 6 digit number", {
                        timeout: 5000,
                        cssClass: 'alert-danger flashfade'
                    });
                }
                else if (_this.authService.getLoggedInDetails().uid == _this.to) {
                    _this.flashMessage.show("You cannot send a message to yourself!", {
                        timeout: 5000,
                        cssClass: 'alert-danger flashfade'
                    });
                }
                else if (response.success) {
                    _this.flashMessage.show(_this.to + " is not registered", {
                        timeout: 5000,
                        cssClass: 'alert-danger flashfade'
                    });
                }
            }
        });
    };
    SendmessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sendmessage',
            template: __webpack_require__("../../../../../src/app/components/sendmessage/sendmessage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sendmessage/sendmessage.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]])
    ], SendmessageComponent);
    return SendmessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"authService.isTeacherLoggedIn()\" class=\"container\">\n  <br>\n  <h3>Classroom notices</h3>\n  <p>You can view notices or add your own!</p>\n  <div>\n    <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/notices/view\">View notices</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/notices/add\">Add a notice</a>\n      </li>\n    </ul>\n  </div>\n  <br>\n</div>\n<div *ngIf=\"!authService.isTeacherLoggedIn()\" class=\"container\">\n  <br>\n  <h3>Classroom notices</h3>\n  <p>View the notices posted by your professors</p>\n  <br>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/tabs/tabs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsComponent = /** @class */ (function () {
    function TabsComponent(authService) {
        this.authService = authService;
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__("../../../../../src/app/components/tabs/tabs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tabs/tabs.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/person.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonGuard = /** @class */ (function () {
    function PersonGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    PersonGuard.prototype.canActivate = function () {
        if (this.authService.isTeacherLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/notices']);
            return false;
        }
    };
    PersonGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], PersonGuard);
    return PersonGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //as we are working with observables

var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerPerson = function (person) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', person, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticatePerson = function (person) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', person, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.storePerson = function (token, person) {
        localStorage.setItem("id_token", token);
        localStorage.setItem("person", JSON.stringify(person));
        this.authToken = token;
        this.person = person;
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append("Authorization", this.authToken);
        headers.append("Content-Type", "application/json");
        return this.http.get('users/profile', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.isTeacherLoggedIn = function () {
        var persontoken = JSON.parse(localStorage.getItem('person'));
        return persontoken.isTeacher;
    };
    AuthService.prototype.getLoggedInDetails = function () {
        return JSON.parse(localStorage.getItem('person'));
    };
    AuthService.prototype.uidExists = function (uidtoken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/uidexists', uidtoken, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.person = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.postMessages = function (message) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/send', message, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/notice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //as we are working with observables
var NoticeService = /** @class */ (function () {
    function NoticeService(http) {
        this.http = http;
    }
    NoticeService.prototype.addNotice = function (notice) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/addnotice', notice, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    NoticeService.prototype.getNotices = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/notices', {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    NoticeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], NoticeService);
    return NoticeService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ValidateService = /** @class */ (function () {
    function ValidateService(authService, http) {
        this.authService = authService;
        this.http = http;
    }
    ValidateService.prototype.validateName = function (name) {
        var re = /^[A-Z][a-z]*(-|\s)[A-Z][a-z]*$/;
        return re.test(name);
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateUID = function (uid) {
        var re = /^[0-9]{6}$/;
        return re.test(uid);
    };
    ValidateService.prototype.validatePasswords = function (password, cpassword) {
        var re = /^(?=.*\d).{8,12}$/;
        return password == cpassword && re.test(password);
    };
    //username validations
    ValidateService.prototype.validateNotices = function (notices) {
        var title = /^.{10,50}$/;
        var notice = /^.{50,250}$/;
        console.log(notices);
        return title.test(notices.title) && notice.test(notices.notice);
    };
    ValidateService.prototype.validateTitle = function (title) {
        var re = /^.{10,50}$/;
        return re.test(title);
    };
    ValidateService.prototype.validateNoticeBody = function (body) {
        var notice = /^.{50,250}$/;
        return notice.test(body);
    };
    //notice validation
    ValidateService.prototype.validateMessage = function (message) {
        var title = /^.{10,50}$/;
        var mess = /^.{50,250}$/;
        return title.test(message.title) && mess.test(message.message);
    };
    ValidateService.prototype.validateMessageTitle = function (title) {
        var re = /^.{10,50}$/;
        return re.test(title);
    };
    ValidateService.prototype.validateMessageBody = function (message) {
        var re = /^.{50,250}$/;
        return re.test(message);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map