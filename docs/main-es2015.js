(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6 col-md-offset-3\">\n            <div style=\"text-align: center\">\n                <h1>Login to MY Portal</h1>\n            </div>\n            <form>\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label for=\"email\"><span class=\"req\">* </span> Email:</label>\n                        <input required type=\"email\" [(ngModel)]=\"user.email\"\n                            name=\"email\" id=\"email\"\n                            class=\"form-control phone\" maxlength=\"28\"\n                            placeholder=\"Enter your Email...\" #email=\"ngModel\"\n                            [email]=\"user.email!==''\">\n\n                        <span class=\"help-block\"\n                            *ngIf=\"email.errors?.required && email.touched\">*Email\n                            is Required</span>\n                        <span class=\"help-block\"\n                            *ngIf=\"email.errors?.email && email.touched \">*Email\n                            is invalid</span>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"lastname\"><span class=\"req\">* </span>\n                            Password : </label>\n                        <input class=\"form-control\" type=\"password\"\n                            [(ngModel)]=\"user.password\" name=\"password\"\n                            id=\"password\"\n                            placeholder=\"Enter your password\" required\n                            #password=\"ngModel\">\n                        <span class=\"help-block\"\n                            *ngIf=\"password.invalid && password.touched\">\n                            Password is required</span>\n                        <div id=\"errLast\"></div>\n                    </div>\n                    <div class=\"form-group\">\n                        <button mat-raised-button color=\"primary\"\n                            [disabled]=\"!(!email.errors?.email && !password.invalid)\"\n                            (click)=\"loginNow()\">Login</button>\n                        &nbsp;&nbsp;&nbsp;&nbsp;\n                        <a href=\"/register\">Dont have an account?</a>\n                    </div>\n                </fieldset>\n            </form>\n\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ng-container [ngSwitch]=\"data.dialogType\">\n\n    <!-- Edit Dialog-->\n    <ng-container *ngSwitchCase=\"'edit'\">\n        <h2 mat-dialog-title>Edit Note</h2>\n        <mat-dialog-content>\n\n            <!-- TEXTAREA FOR ENTERING NOTES -->\n\n            <textarea type=\"textarea\" [(ngModel)]=\"note[noteindex].content\"\n                class=\"textarea\" name=\"textarea\" rows=\"12\" cols=\"75\" id=\"textarea\" required></textarea><br>\n\n        </mat-dialog-content>\n        <mat-dialog-actions>\n\n            <button mat-raised-button color=\"primary\" mat-dialog-close\n                 (click)=\"UpdateNote()\">Save</button>\n            <button mat-raised-button color=\"warn\" mat-dialog-close>Close</button>\n        </mat-dialog-actions>\n    </ng-container>\n\n    <!-- ADD Dialog-->\n    <ng-container *ngSwitchCase=\"'add'\">\n\n        <h2 mat-dialog-title>Add Note</h2>\n\n        <!-- TEXTAREA FOR ENTERING NOTES -->\n\n        <textarea type=\"textarea\" [(ngModel)]=\"note.content\" name=\"textarea\"\n            rows=\"12\" cols=\"75\" id=\"textarea\"\n            class=\"textarea\" placeholder=\"Start Adding Notes...\" required></textarea><br>\n\n        <mat-dialog-actions>\n\n            <!-- SAVE BUTTON FOR SAVING NOTES -->\n            <button mat-raised-button color=\"primary\"\n                [disabled]=\"!(note.content)\"\n                (click)=\"createnote() \" mat-dialog-close>Add</button>\n            <button mat-raised-button color=\"warn\" mat-dialog-close>Close</button>\n        </mat-dialog-actions>\n    </ng-container>\n\n    <!-- Delete Dialog-->\n    <ng-container *ngSwitchCase=\"'delete'\">\n        <h2 mat-dialog-title>Delete Note?</h2>\n        <mat-dialog-content>\n           <p> This will delete the note </p>\n        </mat-dialog-content>\n        <mat-dialog-actions>\n            <button mat-raised-button color=\"basic\" mat-dialog-close>Cancel</button>\n            <button mat-raised-button color=\"warn\" mat-dialog-close (click)=\"DeleteNote()\">Delete</button>\n         \n        </mat-dialog-actions>\n    </ng-container>\n\n    <!-- Show Dialog-->\n    <ng-container *ngSwitchCase=\"'show'\">\n\n        <h2>Content</h2>\n\n        <mat-dialog-content>\n           <!-- <p >{{ notelist[noteindex].content }}</p>-->\n            <p class=\"modal-content\">{{ data.message }}</p>\n        </mat-dialog-content>\n\n        <mat-dialog-actions>\n            <button mat-button mat-dialog-close>Close</button>\n        </mat-dialog-actions>\n\n    </ng-container>\n\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar\">\n  \n\n    <i class=\"fa-solid fa-house fa-xl enlarge-icon\" style=\"color: #ffffff;\"></i>\n    \n\n    <div class=\"buttons\" *ngIf=\"activeflag==0\">\n      <button mat-stroked-button color=\"basic\"  (click)=\"login()\">Login </button>\n      <button mat-stroked-button color=\"basic\"  (click)=\"register()\" >Register</button>\n    </div>\n    <div class=\"buttons\" *ngIf=\"activeflag==1\">\n      \n      <!--<p class=\"userid\" color=\"\" >User Id : {{userid+100}}-->\n      <button mat-stroked-button color=\"primary\"  (click)=\"SignOut()\" routerLink=\"/\" routerLinkActive=\"active\"><i class=\"fas fa-sign-out-alt\"></i> Sign Out </button>\n\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n\n\n\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6 col-md-offset-3\">\n            <div>\n                <h2 style=\"text-align: center\">Enter Valid Information to Register</h2>\n            </div>\n            <form>\n                <fieldset>\n                    <label for=\"Name\"><span class=\"req\">* </span> Name:</label>\n                    <input required type=\"text\" [(ngModel)]=\"user.name\" name=\"name\" id=\"name\" class=\"form-control phone\"\n                        maxlength=\"28\" #name=\"ngModel\" placeholder=\"Enter your fullname...\">\n\n                    <div class=\"form-group\">\n                        <label for=\"email\"><span class=\"req\">* </span> Email:\n                        </label>\n                        <input class=\"form-control\" type=\"email\" [(ngModel)]=\"user.email\" name=\"email\" id=\"email\"\n                            title=\"Enter a valid email address\" placeholder=\"Enter valid email address\" required\n                            [email]=\"user.email!==''\" #email=\"ngModel\">\n\n                        <span class=\"help-block\" *ngIf=\"email.errors?.required && email.touched\">Email\n                            is Required</span>\n                        <span class=\"help-block\" *ngIf=\"email.errors?.email && email.touched \">Email\n                            is invalid</span>\n\n                        <div id=\"errFirst\"></div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"age\"><span class=\"req\">* </span> Age: </label>\n                        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"user.age\" name=\"age\"\n                            id=\"age\" placeholder=\"Age > 18\" required>\n                            <span class=\"help-block\">\n                                <ul><li>Age > 18</li></ul> </span>\n            \n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"password\"><span class=\"req\">* </span>\n                            Password: </label>\n                        <input class=\"form-control\" required type=\"password\" [(ngModel)]=\"user.password\" name=\"password\"\n                            id=\"password\" placeholder=\"Enter a valid password\" required >\n\n                        <span class=\"help-block\">\n                            <ul>\n                                <li>Length: ≥ 8 characters</li>\n                                <li>Uppercase: ≥ 1 (A-Z)</li>\n                                <li>Lowercase: ≥ 1 (a-z)</li>\n                                <li>Special Characters: ≥ 1 (!, @, #, $, etc.)</li>\n                                <li>Numbers: ≥ 1 (0-9) </li>\n                            </ul>\n                        </span>\n                    </div>\n\n                    <div class=\"col-md-offset-9\">\n                        <button mat-raised-button color=\"primary\" (click)=\"registerNow()\">Register</button>\n                    </div>\n\n                </fieldset>\n            </form>\n\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/userdetails/userdetails.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userdetails/userdetails.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<!-- SHOWING ALL NOTES -->\n\n<div class='container-fluid'>\n\n    <div class=\"row\" class=\" col-md-offset\">\n\n        <h2>My Notes</h2>\n        <button mat-raised-button color=\"primary\" (click)=\"openadddialog()\"> <i\n                class=\"fa-solid fa-plus\"></i> Add</button>\n        <br><br>\n        <table class=\"table table-hover\" border=\"bold\">\n            <thead class=\"table-active\">\n                <tr>\n                    <th scope=\"col\">Content</th>\n                    <th scope=\"col\" class=\"col-md-6\">Actions</th>\n                </tr>\n            </thead>\n            <tbody id=\"tabcontent\">\n                <tr *ngFor=\"let alphabet of notelist ; let i = index\"\n                    (click)=\"getIndex(i)\" class=\"table-default\">\n                    <td>{{ alphabet.content | truncate: 25 }} </td>\n                    <td>\n                        <button mat-raised-button color=\"basic\"\n                            (click)=\"getIndex(i)\" (click)=\"openshowdialog()\"><i\n                                class=\"fa-regular fa-eye\"></i> Show</button>\n                        &nbsp;&nbsp;\n                        <button mat-raised-button color=\"primary\"\n                            (click)=\"getIndex(i)\" (click)=\"openeditdialog()\"><i\n                                class=\"fa-regular fa-pen-to-square\"></i> Edit</button>\n                        &nbsp;&nbsp;\n                        <button mat-raised-button color=\"warn\"\n                            (click)=\"getIndex(i)\" (click)=\"opendeletedialog()\"><i\n                                class=\"fa-solid fa-trash\"></i> Delete</button>\n\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userdetails/userdetails.component */ "./src/app/userdetails/userdetails.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");







const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "register", component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "nav", component: _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"] },
    { path: "home", component: _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_5__["UserdetailsComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'portal2';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _user_registration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-registration.service */ "./src/app/user-registration.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./userdetails/userdetails.component */ "./src/app/userdetails/userdetails.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _truncate_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./truncate.pipe */ "./src/app/truncate.pipe.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"],
            _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_11__["UserdetailsComponent"],
            _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["ModalComponent"],
            _truncate_pipe__WEBPACK_IMPORTED_MODULE_15__["TruncatePipe"],
        ],
        entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["ModalComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_14__["MaterialModule"]
        ],
        providers: [_user_registration_service__WEBPACK_IMPORTED_MODULE_6__["UserRegistrationService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nbody {\r\n    padding-top:50px;\r\n}\r\nfieldset {\r\n    border: thin solid #ccc; \r\n    border-radius: 4px;\r\n    padding: 20px;\r\n    padding-left: 40px;\r\n    background: #fbfbfb;\r\n}\r\nlegend {\r\n   color: #678;\r\n}\r\n.form-control {\r\n    width: 95%;\r\n}\r\nlabel small {\r\n    color: #678 !important;\r\n}\r\nspan.req {\r\n    color:maroon;\r\n    font-size: 112%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtHQUNHLFdBQVc7QUFDZDtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CIiwiZmlsZSI6Ii4uLy4uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5ib2R5IHtcclxuICAgIHBhZGRpbmctdG9wOjUwcHg7XHJcbn1cclxuZmllbGRzZXQge1xyXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkICNjY2M7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbn1cclxubGVnZW5kIHtcclxuICAgY29sb3I6ICM2Nzg7XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcbmxhYmVsIHNtYWxsIHtcclxuICAgIGNvbG9yOiAjNjc4ICFpbXBvcnRhbnQ7XHJcbn1cclxuc3Bhbi5yZXEge1xyXG4gICAgY29sb3I6bWFyb29uO1xyXG4gICAgZm9udC1zaXplOiAxMTIlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-registration.service */ "./src/app/user-registration.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");




let LoginComponent = class LoginComponent {
    constructor(service) {
        this.service = service;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]("", "", 0, "");
    }
    ngOnInit() { }
    loginNow() {
        return this.service.login(this.user);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



const MaterialComonent = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"]
];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [MaterialComonent],
        imports: [MaterialComonent]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/modal/modal.component.css":
/*!*******************************************!*\
  !*** ./src/app/modal/modal.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\nmat-dialog-title{\r\n  text-align: center;  \r\n}\r\n\r\n mat-dialog-content {\r\n    justify-content: center;\r\n    min-width: 300px;\r\n    color: black;\r\n  }\r\n\r\n mat-dialog-actions {\r\n    justify-content: flex-end;\r\n    margin-top: 10px;\r\n  }\r\n\r\n .modal-content {\r\n    word-break: break-all; /* Break words to the next line if there is no space */\r\n    padding: 20px;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\r\n    \r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztDQUVDO0lBQ0csdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7O0NBRUE7SUFDRSx5QkFBeUI7SUFDekIsZ0JBQWdCO0VBQ2xCOztDQUVBO0lBQ0UscUJBQXFCLEVBQUUsc0RBQXNEO0lBQzdFLGFBQWE7SUFDYix3Q0FBd0M7O0VBRTFDIiwiZmlsZSI6Ii4uLy4uL3NyYy9hcHAvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxubWF0LWRpYWxvZy10aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxufVxyXG5cclxuIG1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDsgLyogQnJlYWsgd29yZHMgdG8gdGhlIG5leHQgbGluZSBpZiB0aGVyZSBpcyBubyBzcGFjZSAqL1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _user_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-registration.service */ "./src/app/user-registration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ModalComponent = class ModalComponent {
    constructor(service, router, dialog, data) {
        this.service = service;
        this.router = router;
        this.dialog = dialog;
        this.data = data;
        this.postnote = { content: '', userid: -1 };
        this.note = { content: '', userid: -1 };
        this.noteindex = -1;
    }
    ngOnInit() {
        this.noteindex = this.service.GetIndex();
        this.userid = this.service.getid();
        this.note.userid = this.service.getid();
        this.GetNote();
        console.log("User ID is ", this.userid);
    }
    //UpdateNote (Edit)
    UpdateNote() {
        console.log("TO edit ", this.note[this.noteindex].content);
        this.postnote.content = this.note[this.noteindex].content;
        this.postnote.userid = this.userid;
        console.log("Before Updateinggggggg ", this.note[this.noteindex]);
        console.log("INDEX ", this.noteindex);
        console.log("KEY ID", this.note[this.noteindex]._id);
        this.service.updatenote(this.postnote, this.note[this.noteindex]._id).subscribe((response) => {
            console.log('Update success:', response);
            console.log("After Update", this.note[this.noteindex]);
            this.GetNote();
        }, (error) => {
            console.error('Update:', error);
        });
    }
    //GetNote
    GetNote() {
        this.service.getnote().subscribe((data) => {
            this.note = data;
            console.log('Received data:', this.note);
            this.notelist = Object.values(this.note);
            console.log('Received data list:', this.notelist);
        }, (error) => {
            console.error('Error fetching data:', error);
        });
    }
    //Post Notes
    createnote() {
        {
            console.log("Create Note is called");
            this.postnote.content = this.note.content;
            this.postnote.userid = this.userid;
            this.service.postnote(this.postnote).subscribe((response) => {
                console.log('POST success:', response);
            }, (error) => {
                console.error('POST error:', error);
            });
        }
    }
    //DeleteNote
    DeleteNote() {
        console.log("Before delete iNdex ", this.noteindex);
        console.log("Before delete id ", this.note[this.noteindex]._id);
        this.service.deletenote(this.note[this.noteindex]._id).subscribe((response) => {
            console.log('Delete success:', response);
            this.GetNote();
        }, (error) => {
            console.error('Delete error:', error);
        });
    }
};
ModalComponent.ctorParameters = () => [
    { type: _user_registration_service__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.component.css */ "./src/app/modal/modal.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ModalComponent);



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  .navbar {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    background-color:rgb(36, 247, 4);\r\n    padding: 10px;\r\n    color: #fff;\r\n  }\r\n  \r\n  .logo img {\r\n    height: 40px;\r\n    width: auto;\r\n  }\r\n  \r\n  .buttons button {\r\n    margin-left: 10px;\r\n    color: rgb(255, 255, 255);\r\n\r\n\r\n  }\r\n  \r\n  .logo a {\r\n    color: #fff;\r\n    font-size: 24px;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .buttons {\r\n    margin-left: auto;\r\n  }\r\n  \r\n  .logo {\r\n    margin-right: auto;\r\n  }\r\n  \r\n  .userid{\r\n    color:white;\r\n  }\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQix5QkFBeUI7OztFQUczQjs7RUFHQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0UsV0FBVztFQUNiIiwiZmlsZSI6Ii4uLy4uL3NyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLm5hdmJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDM2LCAyNDcsIDQpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAubG9nbyBpbWcge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b25zIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcblxyXG5cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmxvZ28gYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4gIC5idXR0b25zIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAubG9nbyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC51c2VyaWR7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-registration.service */ "./src/app/user-registration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NavComponent = class NavComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.activeflag = 0;
        this.userid = 0;
    }
    ngOnInit() {
        this.activeflag = this.service.setflag();
        this.userid = this.service.setid();
        setTimeout(() => { this.ngOnInit(); }, 1000 * 1);
    }
    login() {
        this.router.navigate(['/login']);
    }
    register() {
        this.router.navigate(['/register']);
    }
    //SignOut User
    SignOut() {
        return this.service.Signout();
    }
};
NavComponent.ctorParameters = () => [
    { type: _user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nbody {\r\n    padding-top:50px;\r\n}\r\nfieldset {\r\n    border: thin solid #ccc; \r\n    border-radius: 4px;\r\n    padding: 20px;\r\n    padding-left: 40px;\r\n    background: #fbfbfb;\r\n}\r\nlegend {\r\n   color: #678;\r\n}\r\n.form-control {\r\n    width: 95%;\r\n}\r\nlabel small {\r\n    color: #678 !important;\r\n}\r\nspan.req {\r\n    color:maroon;\r\n    font-size: 112%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0dBQ0csV0FBVztBQUNkO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkIiLCJmaWxlIjoiLi4vLi4vc3JjL2FwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYm9keSB7XHJcbiAgICBwYWRkaW5nLXRvcDo1MHB4O1xyXG59XHJcbmZpZWxkc2V0IHtcclxuICAgIGJvcmRlcjogdGhpbiBzb2xpZCAjY2NjOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG59XHJcbmxlZ2VuZCB7XHJcbiAgIGNvbG9yOiAjNjc4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgd2lkdGg6IDk1JTtcclxufVxyXG5sYWJlbCBzbWFsbCB7XHJcbiAgICBjb2xvcjogIzY3OCAhaW1wb3J0YW50O1xyXG59XHJcbnNwYW4ucmVxIHtcclxuICAgIGNvbG9yOm1hcm9vbjtcclxuICAgIGZvbnQtc2l6ZTogMTEyJTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _user_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-registration.service */ "./src/app/user-registration.service.ts");




let RegistrationComponent = class RegistrationComponent {
    constructor(service) {
        this.service = service;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_2__["User"]("", "", 0, "");
    }
    ngOnInit() {
    }
    registerNow() {
        if (this.service.isPasswordValid(this.user.password) && this.service.isAgeVaild(this.user.age)) {
            console.log('Password is valid');
            return this.service.doRegistration(this.user);
        }
        else {
            alert('Enter valid information');
            console.log('Password does not meet the criteria');
        }
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _user_registration_service__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationService"] }
];
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")).default]
    })
], RegistrationComponent);



/***/ }),

/***/ "./src/app/truncate.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/truncate.pipe.ts ***!
  \**********************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TruncatePipe = class TruncatePipe {
    transform(value, limit = 25) {
        if (value.length <= limit) {
            return value;
        }
        else {
            return value.substr(0, limit) + '...';
        }
    }
};
TruncatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'truncate'
    })
], TruncatePipe);



/***/ }),

/***/ "./src/app/user-registration.service.ts":
/*!**********************************************!*\
  !*** ./src/app/user-registration.service.ts ***!
  \**********************************************/
/*! exports provided: UserRegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationService", function() { return UserRegistrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let userid = 0;
let activeflag = 0;
let noteindex = 0;
let UserRegistrationService = class UserRegistrationService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.array = [
            { name: "a", email: "abc@gmail.com", experience: 1, password: "a", notes: "aaaa" }
        ];
        this.apiUrl = 'https://crudcrud.com/api/318bdc1ace824aff9186e9a54d757900';
    }
    //++++++++++++++++++++++++++NOTES FUNCTION+++++++++++++++++++++++++++++++++++
    //POST NOTE
    postnote(note) {
        note.userid = userid;
        const noteURL = `${this.apiUrl}/notes-${userid}`;
        console.log("Notes are", note);
        return this.http.post(noteURL, note);
    }
    //GET NOTE
    getnote() {
        const noteURL = `${this.apiUrl}/notes-${userid}`;
        console.log("userid", userid);
        return this.http.get(noteURL);
    }
    //PUT NOTE
    updatenote(note, noteid) {
        note.userid = userid;
        const noteURL = `${this.apiUrl}/notes-${userid}/${noteid}`;
        return this.http.put(noteURL, note);
    }
    //DELETE NOTE
    deletenote(noteid) {
        const noteURL = `${this.apiUrl}/notes-${userid}/${noteid}`;
        return this.http.delete(noteURL);
    }
    //Used to get UserID
    getid() {
        console.log("user id =", userid);
        return userid;
    }
    //Used to SetIndex
    SetIndex(index) {
        noteindex = index;
    }
    // Used to GetIndex  
    GetIndex() {
        return noteindex;
    }
    //+++++++++++++++++++++++++User Functions++++++++++++++++++++++++++++ 
    // Registers a User
    doRegistration(user) {
        function isEmailPresent(email, usersArray) {
            for (var val of usersArray) {
                console.log("Comparing", val.email, "and", email);
                if (val.email === email) {
                    return true;
                }
            }
            return false;
        }
        const isPresent = isEmailPresent(user.email, this.array);
        if (isPresent) {
            alert("User Exists with the email");
            console.log("User Exists with the email", user.email);
            user.name = "";
            user.email = "";
            user.password = "";
            user.age = "";
        }
        else {
            user.notes = '';
            this.array.push(user);
            console.log("User Added", this.array);
            alert("Press OK to Register");
            alert("User Registered!");
            this.router.navigate(['/']);
        }
    }
    //Login  
    login(user) {
        console.log("user = ", user.email, user.password);
        function isEmailPresent(email, password, usersArray) {
            for (var index in usersArray) {
                console.log("Comparing email ", usersArray[index].email, "and", email);
                console.log("Comparing password ", usersArray[index].password, "and", password);
                if (usersArray[index].email === email && usersArray[index].password === password) {
                    userid = Number(index);
                    activeflag = 1;
                    return true;
                }
            }
            return false;
        }
        const isPresent = isEmailPresent(user.email, user.password, this.array);
        if (isPresent) {
            this.router.navigate(['/home']);
            console.log("Login Successfull", user.email, user.password);
        }
        else {
            alert("Failed to log in");
        }
    }
    //SignOut
    Signout() {
        userid = 0;
        activeflag = 0;
        alert("Press OK to SignOut");
    }
    //FLag to keep record of user activity  
    setflag() {
        return activeflag;
    }
    //Keeps a record of user id
    setid() {
        return userid;
    }
    setUser() {
        return this.array[userid];
    }
    //Used to set password
    isPasswordValid(password) {
        // Password must be at least 8 characters long, contain at least 1 uppercase letter, 1 lowercase letter, 1 number
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordPattern.test(password); // Use the password property of the User object
    }
    isAgeVaild(age) {
        return age > 18;
    }
};
UserRegistrationService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserRegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserRegistrationService);



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(name, email, age, password) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;
    }
}


/***/ }),

/***/ "./src/app/userdetails/userdetails.component.css":
/*!*******************************************************!*\
  !*** ./src/app/userdetails/userdetails.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-container {\r\n\r\n    margin: 0 auto;\r\n    width: 80%; /* Adjust the width as needed */\r\n  \r\n  \r\n\r\n}\r\n.grid-container {\r\n  display: grid;\r\n  place-items: center;\r\n  height: 100vh; /* Adjust the height as needed */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvdXNlcmRldGFpbHMvdXNlcmRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxjQUFjO0lBQ2QsVUFBVSxFQUFFLCtCQUErQjs7OztBQUkvQztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhLEVBQUUsZ0NBQWdDO0FBQ2pEIiwiZmlsZSI6Ii4uLy4uL3NyYy9hcHAvdXNlcmRldGFpbHMvdXNlcmRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1jb250YWluZXIge1xyXG5cclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDgwJTsgLyogQWRqdXN0IHRoZSB3aWR0aCBhcyBuZWVkZWQgKi9cclxuICBcclxuICBcclxuXHJcbn1cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDsgLyogQWRqdXN0IHRoZSBoZWlnaHQgYXMgbmVlZGVkICovXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/userdetails/userdetails.component.ts":
/*!******************************************************!*\
  !*** ./src/app/userdetails/userdetails.component.ts ***!
  \******************************************************/
/*! exports provided: UserdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdetailsComponent", function() { return UserdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-registration.service */ "./src/app/user-registration.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let UserdetailsComponent = class UserdetailsComponent {
    constructor(service, dialog, router) {
        this.service = service;
        this.dialog = dialog;
        this.router = router;
        this.noteindex = -1;
        this.activeflag = 0;
    }
    ngOnInit() {
        this.userid = this.service.getid();
        this.getUser();
        this.GetNote();
    }
    //OPENS THE Edit DIALOG
    openeditdialog() {
        const dialogRef = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], { height: '400px',
            width: '600px',
            data: { dialogType: "edit" }
        });
        console.log("DialogueType=", this.dialogType);
        dialogRef.afterClosed().subscribe(result => {
            this.refreshComponent();
        });
    }
    //open Add Dialog 
    openadddialog() {
        const dialogRef = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], { height: '400px',
            width: '600px',
            data: {
                dialogType: 'add'
                // You can pass any additional data required for Dialog 2 here
            } });
        dialogRef.afterClosed().subscribe(result => {
            console.log("Refreshing Component");
            this.refreshComponent();
        });
    }
    //open delete Dialog 
    opendeletedialog() {
        const dialogRef = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], {
            data: {
                dialogType: 'delete'
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.refreshComponent();
        });
    }
    //Opens Show Dialog
    openshowdialog() {
        const dialogRef = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], {
            width: '600px',
            data: {
                dialogType: 'show',
                message: this.note[this.noteindex].content
                // You can pass any additional data required for Dialog 2 here
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.refreshComponent();
        });
    }
    //Refresh th Component
    refreshComponent() {
        this.ngOnInit();
        this.GetNote();
        console.log('Component has been refreshed!');
    }
    //GET Notes
    GetNote() {
        this.service.getnote().subscribe((data) => {
            this.note = data;
            console.log('Received data:', this.note);
            this.notelist = Object.values(data);
        }, (error) => {
            console.error('Error fetching data:', error);
        });
    }
    // Gets the index of the selected note
    getIndex(index) {
        this.noteindex = index;
        console.log('Selected item index:', index);
        this.setIndex();
    }
    // Sets Index of notes array
    setIndex() {
        this.service.SetIndex(this.noteindex);
    }
    //Get Users
    getUser() {
        this.user = this.service.setUser();
        console.log("User is ", this.user);
    }
};
UserdetailsComponent.ctorParameters = () => [
    { type: _user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserdetailsComponent.prototype, "dialogType", void 0);
UserdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userdetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userdetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/userdetails/userdetails.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userdetails.component.css */ "./src/app/userdetails/userdetails.component.css")).default]
    })
], UserdetailsComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\NoteKeep\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map