import { CommonModule } from '@angular/common';
import { Directive, ElementRef, Renderer2, Input, TemplateRef, ViewContainerRef, NgModule } from '@angular/core';
import { __values } from 'tslib';

/**
 * @fileoverview added by tsickle
 * Generated from: classlist_add.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzClassListAddDirective = /** @class */ (function () {
    function NzClassListAddDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.classList = [];
    }
    Object.defineProperty(NzClassListAddDirective.prototype, "nzClassListAdd", {
        set: /**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            var _this = this;
            this.classList.forEach((/**
             * @param {?} name
             * @return {?}
             */
            function (name) {
                _this.renderer.removeClass(_this.elementRef.nativeElement, name);
            }));
            list.forEach((/**
             * @param {?} name
             * @return {?}
             */
            function (name) {
                _this.renderer.addClass(_this.elementRef.nativeElement, name);
            }));
            this.classList = list;
        },
        enumerable: true,
        configurable: true
    });
    NzClassListAddDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nzClassListAdd]',
                    exportAs: 'nzClassListAdd'
                },] }
    ];
    /** @nocollapse */
    NzClassListAddDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzClassListAddDirective.propDecorators = {
        nzClassListAdd: [{ type: Input }]
    };
    return NzClassListAddDirective;
}());
if (false) {
    /** @type {?} */
    NzClassListAddDirective.prototype.classList;
    /**
     * @type {?}
     * @private
     */
    NzClassListAddDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzClassListAddDirective.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: string_template_outlet.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzStringTemplateOutletDirective = /** @class */ (function () {
    function NzStringTemplateOutletDirective(viewContainer, defaultTemplate) {
        this.viewContainer = viewContainer;
        this.defaultTemplate = defaultTemplate;
        // tslint:disable-next-line:no-any
        this.inputTemplate = null;
        this.inputViewRef = null;
        this.defaultViewRef = null;
        // tslint:disable-next-line:no-any
        this.nzStringTemplateOutletContext = null;
    }
    Object.defineProperty(NzStringTemplateOutletDirective.prototype, "nzStringTemplateOutlet", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.isTemplate = true;
                this.inputTemplate = value;
            }
            else {
                this.isTemplate = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzStringTemplateOutletDirective.prototype.recreateView = /**
     * @return {?}
     */
    function () {
        if (!this.isTemplate) {
            /** use default template when input is string **/
            if (!this.defaultViewRef) {
                if (this.defaultTemplate) {
                    this.defaultViewRef = this.viewContainer.createEmbeddedView(this.defaultTemplate, this.nzStringTemplateOutletContext);
                }
            }
        }
        else {
            /** use input template when input is templateRef **/
            if (!this.inputViewRef) {
                if (this.inputTemplate) {
                    this.inputViewRef = this.viewContainer.createEmbeddedView(this.inputTemplate, this.nzStringTemplateOutletContext);
                }
            }
        }
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NzStringTemplateOutletDirective.prototype.getType = 
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value instanceof TemplateRef) {
            return 'template';
        }
        else {
            return 'string';
        }
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    NzStringTemplateOutletDirective.prototype.shouldRecreateView = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzStringTemplateOutletContext = changes.nzStringTemplateOutletContext, nzStringTemplateOutlet = changes.nzStringTemplateOutlet;
        /** @type {?} */
        var shouldOutletRecreate = false;
        if (nzStringTemplateOutlet) {
            if (nzStringTemplateOutlet.firstChange) {
                shouldOutletRecreate = true;
            }
            else {
                /** @type {?} */
                var previousOutletType = this.getType(nzStringTemplateOutlet.previousValue);
                /** @type {?} */
                var currentOutletType = this.getType(nzStringTemplateOutlet.currentValue);
                shouldOutletRecreate = !(previousOutletType === 'string' && currentOutletType === 'string');
            }
        }
        /** @type {?} */
        var shouldContextRecreate = nzStringTemplateOutletContext && this.hasContextShapeChanged(nzStringTemplateOutletContext);
        return shouldContextRecreate || shouldOutletRecreate;
    };
    /**
     * @private
     * @param {?} ctxChange
     * @return {?}
     */
    NzStringTemplateOutletDirective.prototype.hasContextShapeChanged = /**
     * @private
     * @param {?} ctxChange
     * @return {?}
     */
    function (ctxChange) {
        var e_1, _a;
        /** @type {?} */
        var prevCtxKeys = Object.keys(ctxChange.previousValue || {});
        /** @type {?} */
        var currCtxKeys = Object.keys(ctxChange.currentValue || {});
        if (prevCtxKeys.length === currCtxKeys.length) {
            try {
                for (var currCtxKeys_1 = __values(currCtxKeys), currCtxKeys_1_1 = currCtxKeys_1.next(); !currCtxKeys_1_1.done; currCtxKeys_1_1 = currCtxKeys_1.next()) {
                    var propName = currCtxKeys_1_1.value;
                    if (prevCtxKeys.indexOf(propName) === -1) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (currCtxKeys_1_1 && !currCtxKeys_1_1.done && (_a = currCtxKeys_1.return)) _a.call(currCtxKeys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        }
        else {
            return true;
        }
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} ctx
     * @return {?}
     */
    NzStringTemplateOutletDirective.prototype.updateExistingContext = 
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} ctx
     * @return {?}
     */
    function (ctx) {
        var e_2, _a;
        try {
            for (var _b = __values(Object.keys(ctx)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var propName = _c.value;
                // tslint:disable-next-line:no-any
                ((/** @type {?} */ ((/** @type {?} */ (this.inputViewRef)).context)))[propName] = this.nzStringTemplateOutletContext[propName];
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzStringTemplateOutletDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var recreateView = this.shouldRecreateView(changes);
        if (recreateView) {
            if (this.viewContainer) {
                this.viewContainer.clear();
                this.defaultViewRef = null;
                this.inputViewRef = null;
            }
            this.recreateView();
        }
        else {
            if (this.inputViewRef && this.nzStringTemplateOutletContext) {
                this.updateExistingContext(this.nzStringTemplateOutletContext);
            }
        }
    };
    NzStringTemplateOutletDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nzStringTemplateOutlet]',
                    exportAs: 'nzStringTemplateOutlet'
                },] }
    ];
    /** @nocollapse */
    NzStringTemplateOutletDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef }
    ]; };
    NzStringTemplateOutletDirective.propDecorators = {
        nzStringTemplateOutletContext: [{ type: Input }],
        nzStringTemplateOutlet: [{ type: Input }]
    };
    return NzStringTemplateOutletDirective;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.isTemplate;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.inputTemplate;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.inputViewRef;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.defaultViewRef;
    /** @type {?} */
    NzStringTemplateOutletDirective.prototype.nzStringTemplateOutletContext;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.viewContainer;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.defaultTemplate;
}

/**
 * @fileoverview added by tsickle
 * Generated from: addon.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzAddOnModule = /** @class */ (function () {
    function NzAddOnModule() {
    }
    NzAddOnModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [NzStringTemplateOutletDirective, NzClassListAddDirective],
                    declarations: [NzStringTemplateOutletDirective, NzClassListAddDirective]
                },] }
    ];
    return NzAddOnModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-core-addon.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzAddOnModule, NzClassListAddDirective, NzStringTemplateOutletDirective };
//# sourceMappingURL=ng-zorro-antd-core-addon.js.map
