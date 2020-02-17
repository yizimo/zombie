import { CommonModule } from '@angular/common';
import { Directive, ElementRef, Renderer2, Input, TemplateRef, ViewContainerRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: classlist_add.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzClassListAddDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.classList = [];
    }
    /**
     * @param {?} list
     * @return {?}
     */
    set nzClassListAdd(list) {
        this.classList.forEach((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            this.renderer.removeClass(this.elementRef.nativeElement, name);
        }));
        list.forEach((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            this.renderer.addClass(this.elementRef.nativeElement, name);
        }));
        this.classList = list;
    }
}
NzClassListAddDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nzClassListAdd]',
                exportAs: 'nzClassListAdd'
            },] }
];
/** @nocollapse */
NzClassListAddDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NzClassListAddDirective.propDecorators = {
    nzClassListAdd: [{ type: Input }]
};
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
class NzStringTemplateOutletDirective {
    /**
     * @param {?} viewContainer
     * @param {?} defaultTemplate
     */
    constructor(viewContainer, defaultTemplate) {
        this.viewContainer = viewContainer;
        this.defaultTemplate = defaultTemplate;
        // tslint:disable-next-line:no-any
        this.inputTemplate = null;
        this.inputViewRef = null;
        this.defaultViewRef = null;
        // tslint:disable-next-line:no-any
        this.nzStringTemplateOutletContext = null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzStringTemplateOutlet(value) {
        if (value instanceof TemplateRef) {
            this.isTemplate = true;
            this.inputTemplate = value;
        }
        else {
            this.isTemplate = false;
        }
    }
    /**
     * @return {?}
     */
    recreateView() {
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
    }
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    getType(value) {
        if (value instanceof TemplateRef) {
            return 'template';
        }
        else {
            return 'string';
        }
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    shouldRecreateView(changes) {
        const { nzStringTemplateOutletContext, nzStringTemplateOutlet } = changes;
        /** @type {?} */
        let shouldOutletRecreate = false;
        if (nzStringTemplateOutlet) {
            if (nzStringTemplateOutlet.firstChange) {
                shouldOutletRecreate = true;
            }
            else {
                /** @type {?} */
                const previousOutletType = this.getType(nzStringTemplateOutlet.previousValue);
                /** @type {?} */
                const currentOutletType = this.getType(nzStringTemplateOutlet.currentValue);
                shouldOutletRecreate = !(previousOutletType === 'string' && currentOutletType === 'string');
            }
        }
        /** @type {?} */
        const shouldContextRecreate = nzStringTemplateOutletContext && this.hasContextShapeChanged(nzStringTemplateOutletContext);
        return shouldContextRecreate || shouldOutletRecreate;
    }
    /**
     * @private
     * @param {?} ctxChange
     * @return {?}
     */
    hasContextShapeChanged(ctxChange) {
        /** @type {?} */
        const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
        /** @type {?} */
        const currCtxKeys = Object.keys(ctxChange.currentValue || {});
        if (prevCtxKeys.length === currCtxKeys.length) {
            for (const propName of currCtxKeys) {
                if (prevCtxKeys.indexOf(propName) === -1) {
                    return true;
                }
            }
            return false;
        }
        else {
            return true;
        }
    }
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} ctx
     * @return {?}
     */
    updateExistingContext(ctx) {
        for (const propName of Object.keys(ctx)) {
            // tslint:disable-next-line:no-any
            ((/** @type {?} */ ((/** @type {?} */ (this.inputViewRef)).context)))[propName] = this.nzStringTemplateOutletContext[propName];
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const recreateView = this.shouldRecreateView(changes);
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
    }
}
NzStringTemplateOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nzStringTemplateOutlet]',
                exportAs: 'nzStringTemplateOutlet'
            },] }
];
/** @nocollapse */
NzStringTemplateOutletDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef }
];
NzStringTemplateOutletDirective.propDecorators = {
    nzStringTemplateOutletContext: [{ type: Input }],
    nzStringTemplateOutlet: [{ type: Input }]
};
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
class NzAddOnModule {
}
NzAddOnModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [NzStringTemplateOutletDirective, NzClassListAddDirective],
                declarations: [NzStringTemplateOutletDirective, NzClassListAddDirective]
            },] }
];

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
