import { CommonModule, DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Renderer2, Input, TemplateRef, ViewContainerRef, NgModule, isDevMode, Optional, Inject, Injectable, SkipSelf, RendererFactory2, ɵɵdefineInjectable, ɵɵinject, NgZone, Type, EventEmitter, InjectionToken, Pipe } from '@angular/core';
import { __values, __spread, __decorate, __metadata, __read, __assign, __extends } from 'tslib';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { coerceBooleanProperty, _isNumberValue, coerceCssPixelValue, coerceElement } from '@angular/cdk/coercion';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { CdkConnectedOverlay, ConnectionPositionPair } from '@angular/cdk/overlay';
import { startOfWeek, startOfMonth, setYear, isSameDay, isSameSecond, isSameMinute, isSameHour, isSameMonth, isSameYear, differenceInCalendarDays, differenceInSeconds, differenceInMinutes, differenceInHours, differenceInCalendarMonths, differenceInCalendarYears, isToday, isValid } from 'date-fns';
import addMonths from 'date-fns/add_months';
import addYears from 'date-fns/add_years';
import setDay from 'date-fns/set_day';
import setMonth from 'date-fns/set_month';
import { Subject, BehaviorSubject } from 'rxjs';
import { auditTime, map, filter, finalize, take, mapTo } from 'rxjs/operators';
import { Platform, PlatformModule } from '@angular/cdk/platform';

/**
 * @fileoverview added by tsickle
 * Generated from: addon/classlist_add.ts
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
 * Generated from: addon/string_template_outlet.ts
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
 * Generated from: addon/addon.module.ts
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
 * Generated from: addon/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: animation/animation-consts.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var AnimationDuration = /** @class */ (function () {
    function AnimationDuration() {
    }
    AnimationDuration.SLOW = '0.3s'; // Modal
    // Modal
    AnimationDuration.BASE = '0.2s';
    AnimationDuration.FAST = '0.1s'; // Tooltip
    return AnimationDuration;
}());
if (false) {
    /** @type {?} */
    AnimationDuration.SLOW;
    /** @type {?} */
    AnimationDuration.BASE;
    /** @type {?} */
    AnimationDuration.FAST;
}
var AnimationCurves = /** @class */ (function () {
    function AnimationCurves() {
    }
    AnimationCurves.EASE_BASE_OUT = 'cubic-bezier(0.7, 0.3, 0.1, 1)';
    AnimationCurves.EASE_BASE_IN = 'cubic-bezier(0.9, 0, 0.3, 0.7)';
    AnimationCurves.EASE_OUT = 'cubic-bezier(0.215, 0.61, 0.355, 1)';
    AnimationCurves.EASE_IN = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)';
    AnimationCurves.EASE_IN_OUT = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
    AnimationCurves.EASE_OUT_BACK = 'cubic-bezier(0.12, 0.4, 0.29, 1.46)';
    AnimationCurves.EASE_IN_BACK = 'cubic-bezier(0.71, -0.46, 0.88, 0.6)';
    AnimationCurves.EASE_IN_OUT_BACK = 'cubic-bezier(0.71, -0.46, 0.29, 1.46)';
    AnimationCurves.EASE_OUT_CIRC = 'cubic-bezier(0.08, 0.82, 0.17, 1)';
    AnimationCurves.EASE_IN_CIRC = 'cubic-bezier(0.6, 0.04, 0.98, 0.34)';
    AnimationCurves.EASE_IN_OUT_CIRC = 'cubic-bezier(0.78, 0.14, 0.15, 0.86)';
    AnimationCurves.EASE_OUT_QUINT = 'cubic-bezier(0.23, 1, 0.32, 1)';
    AnimationCurves.EASE_IN_QUINT = 'cubic-bezier(0.755, 0.05, 0.855, 0.06)';
    AnimationCurves.EASE_IN_OUT_QUINT = 'cubic-bezier(0.86, 0, 0.07, 1)';
    return AnimationCurves;
}());
if (false) {
    /** @type {?} */
    AnimationCurves.EASE_BASE_OUT;
    /** @type {?} */
    AnimationCurves.EASE_BASE_IN;
    /** @type {?} */
    AnimationCurves.EASE_OUT;
    /** @type {?} */
    AnimationCurves.EASE_IN;
    /** @type {?} */
    AnimationCurves.EASE_IN_OUT;
    /** @type {?} */
    AnimationCurves.EASE_OUT_BACK;
    /** @type {?} */
    AnimationCurves.EASE_IN_BACK;
    /** @type {?} */
    AnimationCurves.EASE_IN_OUT_BACK;
    /** @type {?} */
    AnimationCurves.EASE_OUT_CIRC;
    /** @type {?} */
    AnimationCurves.EASE_IN_CIRC;
    /** @type {?} */
    AnimationCurves.EASE_IN_OUT_CIRC;
    /** @type {?} */
    AnimationCurves.EASE_OUT_QUINT;
    /** @type {?} */
    AnimationCurves.EASE_IN_QUINT;
    /** @type {?} */
    AnimationCurves.EASE_IN_OUT_QUINT;
}

/**
 * @fileoverview added by tsickle
 * Generated from: animation/collapse.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var collapseMotion = trigger('collapseMotion', [
    state('expanded', style({ height: '*' })),
    state('collapsed', style({ height: 0, overflow: 'hidden' })),
    state('hidden', style({ height: 0, overflow: 'hidden', borderTopWidth: '0' })),
    transition('expanded => collapsed', animate("150ms " + AnimationCurves.EASE_IN_OUT)),
    transition('expanded => hidden', animate("150ms " + AnimationCurves.EASE_IN_OUT)),
    transition('collapsed => expanded', animate("150ms " + AnimationCurves.EASE_IN_OUT)),
    transition('hidden => expanded', animate("150ms " + AnimationCurves.EASE_IN_OUT))
]);
/** @type {?} */
var treeCollapseMotion = trigger('treeCollapseMotion', [
    transition(':leave', [
        style({ overflow: 'hidden' }),
        animate("150ms " + AnimationCurves.EASE_IN_OUT, style({ height: 0 }))
    ]),
    transition(':enter', [
        style({ overflow: 'hidden', height: 0 }),
        animate("150ms " + AnimationCurves.EASE_IN_OUT, style({ overflow: 'hidden', height: '*' }))
    ])
]);

/**
 * @fileoverview added by tsickle
 * Generated from: animation/fade.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var fadeMotion = trigger('fadeMotion', [
    transition(':enter', [style({ opacity: 0 }), animate("" + AnimationDuration.BASE, style({ opacity: 1 }))]),
    transition(':leave', [style({ opacity: 1 }), animate("" + AnimationDuration.BASE, style({ opacity: 0 }))])
]);

/**
 * @fileoverview added by tsickle
 * Generated from: animation/help.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var helpMotion = trigger('helpMotion', [
    transition(':enter', [
        style({
            opacity: 0,
            transform: 'translateY(-5px)'
        }),
        animate(AnimationDuration.SLOW + " " + AnimationCurves.EASE_IN_OUT, style({
            opacity: 1,
            transform: 'translateY(0)'
        }))
    ]),
    transition(':leave', [
        style({
            opacity: 1,
            transform: 'translateY(0)'
        }),
        animate(AnimationDuration.SLOW + " " + AnimationCurves.EASE_IN_OUT, style({
            opacity: 0,
            transform: 'translateY(-5px)'
        }))
    ])
]);

/**
 * @fileoverview added by tsickle
 * Generated from: animation/move.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moveUpMotion = trigger('moveUpMotion', [
    transition('* => enter', [
        style({
            transformOrigin: '0 0',
            transform: 'translateY(-100%)',
            opacity: 0
        }),
        animate("" + AnimationDuration.BASE, style({
            transformOrigin: '0 0',
            transform: 'translateY(0%)',
            opacity: 1
        }))
    ]),
    transition('* => leave', [
        style({
            transformOrigin: '0 0',
            transform: 'translateY(0%)',
            opacity: 1
        }),
        animate("" + AnimationDuration.BASE, style({
            transformOrigin: '0 0',
            transform: 'translateY(-100%)',
            opacity: 0
        }))
    ])
]);

/**
 * @fileoverview added by tsickle
 * Generated from: animation/notification.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var notificationMotion = trigger('notificationMotion', [
    state('enterRight', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('* => enterRight', [style({ opacity: 0, transform: 'translateX(5%)' }), animate('100ms linear')]),
    state('enterLeft', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('* => enterLeft', [style({ opacity: 0, transform: 'translateX(-5%)' }), animate('100ms linear')]),
    state('leave', style({
        opacity: 0,
        transform: 'scaleY(0.8)',
        transformOrigin: '0% 0%'
    })),
    transition('* => leave', [
        style({
            opacity: 1,
            transform: 'scaleY(1)',
            transformOrigin: '0% 0%'
        }),
        animate('100ms linear')
    ])
]);

/**
 * @fileoverview added by tsickle
 * Generated from: animation/slide.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ANIMATION_TRANSITION_IN = AnimationDuration.BASE + " " + AnimationCurves.EASE_OUT_QUINT;
/** @type {?} */
var ANIMATION_TRANSITION_OUT = AnimationDuration.BASE + " " + AnimationCurves.EASE_IN_QUINT;
/** @type {?} */
var slideMotion = trigger('slideMotion', [
    state('bottom', style({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 0%'
    })),
    state('top', style({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 100%'
    })),
    transition('void => bottom', [
        style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 0%'
        }),
        animate(ANIMATION_TRANSITION_IN)
    ]),
    transition('bottom => void', [
        animate(ANIMATION_TRANSITION_OUT, style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 0%'
        }))
    ]),
    transition('void => top', [
        style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 100%'
        }),
        animate(ANIMATION_TRANSITION_IN)
    ]),
    transition('top => void', [
        animate(ANIMATION_TRANSITION_OUT, style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 100%'
        }))
    ])
]);
/** @type {?} */
var slideAlertMotion = trigger('slideAlertMotion', [
    transition(':leave', [
        style({ opacity: 1, transform: 'scaleY(1)', transformOrigin: '0% 0%' }),
        animate(AnimationDuration.SLOW + " " + AnimationCurves.EASE_IN_OUT_CIRC, style({
            opacity: 0,
            transform: 'scaleY(0)',
            transformOrigin: '0% 0%'
        }))
    ])
]);

/**
 * @fileoverview added by tsickle
 * Generated from: animation/zoom.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var zoomMotion = trigger('zoomMotion', [
    transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.2)' }),
        animate(AnimationDuration.BASE + " " + AnimationCurves.EASE_OUT_CIRC, style({
            opacity: 1,
            transform: 'scale(1)'
        }))
    ]),
    transition(':leave', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate(AnimationDuration.BASE + " " + AnimationCurves.EASE_IN_OUT_CIRC, style({
            opacity: 0,
            transform: 'scale(0.2)'
        }))
    ])
]);
/** @type {?} */
var zoomBigMotion = trigger('zoomBigMotion', [
    transition('void => active', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate(AnimationDuration.BASE + " " + AnimationCurves.EASE_OUT_CIRC, style({
            opacity: 1,
            transform: 'scale(1)'
        }))
    ]),
    transition('active => void', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate(AnimationDuration.BASE + " " + AnimationCurves.EASE_IN_OUT_CIRC, style({
            opacity: 0,
            transform: 'scale(0.8)'
        }))
    ])
]);
/** @type {?} */
var zoomBadgeMotion = trigger('zoomBadgeMotion', [
    transition(':enter', [
        style({ opacity: 0, transform: 'scale(0) translate(50%, -50%)' }),
        animate(AnimationDuration.SLOW + " " + AnimationCurves.EASE_OUT_BACK, style({
            opacity: 1,
            transform: 'scale(1) translate(50%, -50%)'
        }))
    ]),
    transition(':leave', [
        style({ opacity: 1, transform: 'scale(1) translate(50%, -50%)' }),
        animate(AnimationDuration.SLOW + " " + AnimationCurves.EASE_IN_BACK, style({
            opacity: 0,
            transform: 'scale(0) translate(50%, -50%)'
        }))
    ])
]);

/**
 * @fileoverview added by tsickle
 * Generated from: animation/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: environments/environment.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** @type {?} */
var environment = {
    isTestMode: false
};

/**
 * @fileoverview added by tsickle
 * Generated from: logger/logger.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var record = {};
/** @type {?} */
var PREFIX = '[NG-ZORRO]:';
/**
 * @param {...?} args
 * @return {?}
 */
function notRecorded() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    /** @type {?} */
    var asRecord = args.reduce((/**
     * @param {?} acc
     * @param {?} c
     * @return {?}
     */
    function (acc, c) { return acc + c.toString(); }), '');
    if (record[asRecord]) {
        return false;
    }
    else {
        record[asRecord] = true;
        return true;
    }
}
/**
 * @param {?} consoleFunc
 * @param {...?} args
 * @return {?}
 */
function consoleCommonBehavior(consoleFunc) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (environment.isTestMode || (isDevMode() && notRecorded.apply(void 0, __spread(args)))) {
        consoleFunc.apply(void 0, __spread(args));
    }
}
// Warning should only be printed in dev mode and only once.
/** @type {?} */
var warn = (/**
 * @param {...?} args
 * @return {?}
 */
function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return consoleCommonBehavior.apply(void 0, __spread([(/**
         * @param {...?} arg
         * @return {?}
         */
        function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            return console.warn.apply(console, __spread([PREFIX], arg));
        })], args));
});
/** @type {?} */
var warnDeprecation = (/**
 * @param {...?} args
 * @return {?}
 */
function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!environment.isTestMode) {
        /** @type {?} */
        var stack_1 = new Error().stack;
        return consoleCommonBehavior.apply(void 0, __spread([(/**
             * @param {...?} arg
             * @return {?}
             */
            function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
                return console.warn.apply(console, __spread([PREFIX, 'deprecated:'], arg, [stack_1]));
            })], args));
    }
    else {
        return (/**
         * @return {?}
         */
        function () { });
    }
});
// Log should only be printed in dev mode.
/** @type {?} */
var log = (/**
 * @param {...?} args
 * @return {?}
 */
function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (isDevMode()) {
        console.log.apply(console, __spread([PREFIX], args));
    }
});

/**
 * @fileoverview added by tsickle
 * Generated from: util/convert.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function toBoolean(value) {
    return coerceBooleanProperty(value);
}
/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */
function toNumber(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * @param {?} value
 * @return {?}
 */
function toCssPixel(value) {
    return coerceCssPixelValue(value);
}
// tslint:disable no-any
// tslint:disable no-invalid-this
/**
 * Get the function-property type's value
 * @template T
 * @param {?} prop
 * @param {...?} args
 * @return {?}
 */
function valueFunctionProp(prop) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return typeof prop === 'function' ? prop.apply(void 0, __spread(args)) : prop;
}
/**
 * @template T, D
 * @param {?} name
 * @param {?} fallback
 * @return {?}
 */
function propDecoratorFactory(name, fallback) {
    /**
     * @param {?} target
     * @param {?} propName
     * @param {?=} originalDescriptor
     * @return {?}
     */
    function propDecorator(target, propName, originalDescriptor) {
        /** @type {?} */
        var privatePropName = "$$__" + propName;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            warn("The prop \"" + privatePropName + "\" is already exist, it will be overrided by " + name + " decorator.");
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });
        return {
            get: /**
             * @return {?}
             */
            function () {
                return originalDescriptor && originalDescriptor.get
                    ? originalDescriptor.get.bind(this)()
                    : this[privatePropName];
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (originalDescriptor && originalDescriptor.set) {
                    originalDescriptor.set.bind(this)(fallback(value));
                }
                this[privatePropName] = fallback(value);
            }
        };
    }
    return propDecorator;
}
/**
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 *
 * Why not using \@InputBoolean alone without \@Input? AOT needs \@Input to be visible
 *
 * \@howToUse
 * ```
 * \@Input() \@InputBoolean() visible: boolean = false;
 *
 * // Act as below:
 * // \@Input()
 * // get visible() { return this.__visible; }
 * // set visible(value) { this.__visible = value; }
 * // __visible = false;
 * ```
 * @return {?}
 */
function InputBoolean() {
    return propDecoratorFactory('InputBoolean', toBoolean);
}
/**
 * @return {?}
 */
function InputCssPixel() {
    return propDecoratorFactory('InputCssPixel', toCssPixel);
}
/**
 * @return {?}
 */
function InputNumber() {
    // tslint:disable-line: no-any
    return propDecoratorFactory('InputNumber', toNumber);
}

/**
 * @fileoverview added by tsickle
 * Generated from: no-animation/nz-no-animation.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DISABLED_CLASSNAME = 'nz-animate-disabled';
var NzNoAnimationDirective = /** @class */ (function () {
    function NzNoAnimationDirective(element, renderer, animationType) {
        this.element = element;
        this.renderer = renderer;
        this.animationType = animationType;
        this.nzNoAnimation = false;
    }
    /**
     * @return {?}
     */
    NzNoAnimationDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateClass();
    };
    /**
     * @return {?}
     */
    NzNoAnimationDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateClass();
    };
    /**
     * @private
     * @return {?}
     */
    NzNoAnimationDirective.prototype.updateClass = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = coerceElement(this.element);
        if (!element) {
            return;
        }
        if (this.nzNoAnimation || this.animationType === 'NoopAnimations') {
            this.renderer.addClass(element, DISABLED_CLASSNAME);
        }
        else {
            this.renderer.removeClass(element, DISABLED_CLASSNAME);
        }
    };
    NzNoAnimationDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nzNoAnimation]',
                    exportAs: 'nzNoAnimation'
                },] }
    ];
    /** @nocollapse */
    NzNoAnimationDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ]; };
    NzNoAnimationDirective.propDecorators = {
        nzNoAnimation: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzNoAnimationDirective.prototype, "nzNoAnimation", void 0);
    return NzNoAnimationDirective;
}());
if (false) {
    /** @type {?} */
    NzNoAnimationDirective.prototype.nzNoAnimation;
    /**
     * @type {?}
     * @private
     */
    NzNoAnimationDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    NzNoAnimationDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzNoAnimationDirective.prototype.animationType;
}

/**
 * @fileoverview added by tsickle
 * Generated from: no-animation/nz-no-animation.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzNoAnimationModule = /** @class */ (function () {
    function NzNoAnimationModule() {
    }
    NzNoAnimationModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzNoAnimationDirective],
                    exports: [NzNoAnimationDirective],
                    imports: [CommonModule]
                },] }
    ];
    return NzNoAnimationModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: no-animation/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: overlay/nz-connected-overlay.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzConnectedOverlayDirective = /** @class */ (function () {
    function NzConnectedOverlayDirective(cdkConnectedOverlay) {
        this.cdkConnectedOverlay = cdkConnectedOverlay;
        this.cdkConnectedOverlay.backdropClass = 'nz-overlay-transparent-backdrop';
    }
    NzConnectedOverlayDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cdkConnectedOverlay][nzConnectedOverlay]',
                    exportAs: 'nzConnectedOverlay'
                },] }
    ];
    /** @nocollapse */
    NzConnectedOverlayDirective.ctorParameters = function () { return [
        { type: CdkConnectedOverlay }
    ]; };
    return NzConnectedOverlayDirective;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzConnectedOverlayDirective.prototype.cdkConnectedOverlay;
}

/**
 * @fileoverview added by tsickle
 * Generated from: overlay/nz-overlay.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzOverlayModule = /** @class */ (function () {
    function NzOverlayModule() {
    }
    NzOverlayModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzConnectedOverlayDirective],
                    exports: [NzConnectedOverlayDirective]
                },] }
    ];
    return NzOverlayModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: overlay/overlay-position.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var POSITION_MAP = {
    top: new ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'center', overlayY: 'bottom' }),
    topCenter: new ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'center', overlayY: 'bottom' }),
    topLeft: new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
    topRight: new ConnectionPositionPair({ originX: 'end', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
    right: new ConnectionPositionPair({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' }),
    rightTop: new ConnectionPositionPair({ originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
    rightBottom: new ConnectionPositionPair({ originX: 'end', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' }),
    bottom: new ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' }),
    bottomCenter: new ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' }),
    bottomLeft: new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
    bottomRight: new ConnectionPositionPair({ originX: 'end', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' }),
    left: new ConnectionPositionPair({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'center' }),
    leftTop: new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' }),
    leftBottom: new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'bottom' })
};
/** @type {?} */
var DEFAULT_TOOLTIP_POSITIONS = [POSITION_MAP.top, POSITION_MAP.right, POSITION_MAP.bottom, POSITION_MAP.left];
/** @type {?} */
var DEFAULT_DROPDOWN_POSITIONS = [
    POSITION_MAP.bottomLeft,
    POSITION_MAP.bottomRight,
    POSITION_MAP.topRight,
    POSITION_MAP.topLeft
];
/** @type {?} */
var DEFAULT_SUBMENU_POSITIONS = [POSITION_MAP.rightTop, POSITION_MAP.leftTop];
/** @type {?} */
var DEFAULT_MENTION_TOP_POSITIONS = [
    new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' }),
    new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'bottom' })
];
/** @type {?} */
var DEFAULT_MENTION_BOTTOM_POSITIONS = [
    POSITION_MAP.bottomLeft,
    new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' })
];
/**
 * @param {?} position
 * @return {?}
 */
function getPlacementName(position) {
    /** @type {?} */
    var keyList = ['originX', 'originY', 'overlayX', 'overlayY'];
    var _loop_1 = function (placement) {
        // @ts-ignore
        if (keyList.every((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return position.connectionPair[key] === POSITION_MAP[placement][key]; }))) {
            return { value: placement };
        }
    };
    for (var placement in POSITION_MAP) {
        var state_1 = _loop_1(placement);
        if (typeof state_1 === "object")
            return state_1.value;
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: overlay/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: logger/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: logger/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: time/candy-date.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} rangeValue
 * @return {?}
 */
function sortRangeValue(rangeValue) {
    if (Array.isArray(rangeValue)) {
        var _a = __read(rangeValue, 2), start = _a[0], end = _a[1];
        return start && end && start.isAfterSecond(end) ? [end, start] : [start, end];
    }
    return rangeValue;
}
/**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
var  /**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
CandyDate = /** @class */ (function () {
    // locale: string; // Custom specified locale ID
    function CandyDate(date) {
        if (date) {
            if (date instanceof Date) {
                this.nativeDate = date;
            }
            else if (typeof date === 'string' || typeof date === 'number') {
                warn('The string type is not recommended for date-picker, use "Date" type');
                this.nativeDate = new Date(date);
            }
            else {
                throw new Error('The input date type is not supported ("Date" is now recommended)');
            }
        }
        else {
            this.nativeDate = new Date();
        }
    }
    // getLocale(): string {
    //   return this.locale;
    // }
    // setLocale(locale: string): CandyDate {
    //   this.locale = locale;
    //   return this;
    // }
    // getLocale(): string {
    //   return this.locale;
    // }
    // setLocale(locale: string): CandyDate {
    //   this.locale = locale;
    //   return this;
    // }
    /**
     * @param {?=} options
     * @return {?}
     */
    CandyDate.prototype.calendarStart = 
    // getLocale(): string {
    //   return this.locale;
    // }
    // setLocale(locale: string): CandyDate {
    //   this.locale = locale;
    //   return this;
    // }
    /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return new CandyDate(startOfWeek(startOfMonth(this.nativeDate), options));
    };
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // ---------------------------------------------------------------------
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    CandyDate.prototype.getYear = 
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getFullYear();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getMonth = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getMonth();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getDay = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getDay();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getTime = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getTime();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getDate = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getDate();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getHours = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getHours();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getMinutes = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getMinutes();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getSeconds = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getSeconds();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getMilliseconds = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getMilliseconds();
    };
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    CandyDate.prototype.clone = 
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    function () {
        return new CandyDate(new Date(this.nativeDate));
    };
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} second
     * @return {?}
     */
    CandyDate.prototype.setHms = /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} second
     * @return {?}
     */
    function (hour, minute, second) {
        /** @type {?} */
        var date = new Date(this.nativeDate);
        date.setHours(hour, minute, second);
        return new CandyDate(date);
    };
    /**
     * @param {?} year
     * @return {?}
     */
    CandyDate.prototype.setYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        return new CandyDate(setYear(this.nativeDate, year));
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.addYears = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return new CandyDate(addYears(this.nativeDate, amount));
    };
    // NOTE: month starts from 0
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    // NOTE: month starts from 0
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    /**
     * @param {?} month
     * @return {?}
     */
    CandyDate.prototype.setMonth = 
    // NOTE: month starts from 0
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        return new CandyDate(setMonth(this.nativeDate, month));
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.addMonths = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return new CandyDate(addMonths(this.nativeDate, amount));
    };
    /**
     * @param {?} day
     * @param {?=} options
     * @return {?}
     */
    CandyDate.prototype.setDay = /**
     * @param {?} day
     * @param {?=} options
     * @return {?}
     */
    function (day, options) {
        return new CandyDate(setDay(this.nativeDate, day, options));
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.setDate = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        /** @type {?} */
        var date = new Date(this.nativeDate);
        date.setDate(amount);
        return new CandyDate(date);
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.addDays = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return this.setDate(this.getDate() + amount);
    };
    /**
     * @param {?} date
     * @param {?=} grain
     * @return {?}
     */
    CandyDate.prototype.isSame = /**
     * @param {?} date
     * @param {?=} grain
     * @return {?}
     */
    function (date, grain) {
        if (grain === void 0) { grain = 'day'; }
        /** @type {?} */
        var fn;
        switch (grain) {
            case 'year':
                fn = isSameYear;
                break;
            case 'month':
                fn = isSameMonth;
                break;
            case 'day':
                fn = isSameDay;
                break;
            case 'hour':
                fn = isSameHour;
                break;
            case 'minute':
                fn = isSameMinute;
                break;
            case 'second':
                fn = isSameSecond;
                break;
            default:
                fn = isSameDay;
                break;
        }
        return fn(this.nativeDate, this.toNativeDate(date));
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isSameYear = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSame(date, 'year');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isSameMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSame(date, 'month');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isSameDay = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSame(date, 'day');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isSameHour = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSame(date, 'hour');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isSameMinute = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSame(date, 'minute');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isSameSecond = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSame(date, 'second');
    };
    /**
     * @param {?} date
     * @param {?=} grain
     * @param {?=} isBefore
     * @return {?}
     */
    CandyDate.prototype.compare = /**
     * @param {?} date
     * @param {?=} grain
     * @param {?=} isBefore
     * @return {?}
     */
    function (date, grain, isBefore) {
        if (grain === void 0) { grain = 'day'; }
        if (isBefore === void 0) { isBefore = true; }
        if (date === null) {
            return false;
        }
        /** @type {?} */
        var fn;
        switch (grain) {
            case 'year':
                fn = differenceInCalendarYears;
                break;
            case 'month':
                fn = differenceInCalendarMonths;
                break;
            case 'day':
                fn = differenceInCalendarDays;
                break;
            case 'hour':
                fn = differenceInHours;
                break;
            case 'minute':
                fn = differenceInMinutes;
                break;
            case 'second':
                fn = differenceInSeconds;
                break;
            default:
                fn = differenceInCalendarDays;
                break;
        }
        return isBefore
            ? fn(this.nativeDate, this.toNativeDate(date)) < 0
            : fn(this.nativeDate, this.toNativeDate(date)) > 0;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isBeforeYear = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'year');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isBeforeMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'month');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isBeforeDay = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'day');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isBeforeHour = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'hour');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isBeforeMinute = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'minute');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isBeforeSecond = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'second');
    };
    // TODO: isBefore
    // TODO: isBefore
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isAfterYear = 
    // TODO: isBefore
    /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'year', false);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isAfterMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'month', false);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isAfterDay = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'day', false);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isAfterHour = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'hour', false);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isAfterMinute = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'minute', false);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isAfterSecond = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'second', false);
    };
    // Equal to today accurate to "day"
    // Equal to today accurate to "day"
    /**
     * @return {?}
     */
    CandyDate.prototype.isToday = 
    // Equal to today accurate to "day"
    /**
     * @return {?}
     */
    function () {
        return isToday(this.nativeDate);
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.isValid = /**
     * @return {?}
     */
    function () {
        return isValid(this.nativeDate);
    };
    // tslint:disable-next-line: no-any
    // tslint:disable-next-line: no-any
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.toNativeDate = 
    // tslint:disable-next-line: no-any
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date instanceof CandyDate ? date.nativeDate : date;
    };
    return CandyDate;
}());
if (false) {
    /** @type {?} */
    CandyDate.prototype.nativeDate;
}

/**
 * @fileoverview added by tsickle
 * Generated from: time/time.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** @type {?} */
var timeUnits = [
    ['Y', 1000 * 60 * 60 * 24 * 365],
    ['M', 1000 * 60 * 60 * 24 * 30],
    ['D', 1000 * 60 * 60 * 24],
    ['H', 1000 * 60 * 60],
    ['m', 1000 * 60],
    ['s', 1000],
    ['S', 1] // million seconds
];

/**
 * @fileoverview added by tsickle
 * Generated from: time/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: polyfill/request-animation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable:no-any typedef no-invalid-this
/** @type {?} */
var availablePrefixes = ['moz', 'ms', 'webkit'];
/**
 * @return {?}
 */
function requestAnimationFramePolyfill() {
    /** @type {?} */
    var lastTime = 0;
    return (/**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        /** @type {?} */
        var currTime = new Date().getTime();
        /** @type {?} */
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        /** @type {?} */
        var id = setTimeout((/**
         * @return {?}
         */
        function () {
            callback(currTime + timeToCall);
        }), timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    });
}
/**
 * @return {?}
 */
function getRequestAnimationFrame() {
    if (typeof window === 'undefined') {
        return (/**
         * @return {?}
         */
        function () { return 0; });
    }
    if (window.requestAnimationFrame) {
        // https://github.com/vuejs/vue/issues/4465
        return window.requestAnimationFrame.bind(window);
    }
    /** @type {?} */
    var prefix = availablePrefixes.filter((/**
     * @param {?} key
     * @return {?}
     */
    function (key) { return key + "RequestAnimationFrame" in window; }))[0];
    return prefix ? ((/** @type {?} */ (window)))[prefix + "RequestAnimationFrame"] : requestAnimationFramePolyfill();
}
/**
 * @param {?} id
 * @return {?}
 */
function cancelRequestAnimationFrame(id) {
    if (typeof window === 'undefined') {
        return null;
    }
    if (window.cancelAnimationFrame) {
        return window.cancelAnimationFrame(id);
    }
    /** @type {?} */
    var prefix = availablePrefixes.filter((/**
     * @param {?} key
     * @return {?}
     */
    function (key) { return key + "CancelAnimationFrame" in window || key + "CancelRequestAnimationFrame" in window; }))[0];
    return prefix
        ? (((/** @type {?} */ (window)))[prefix + "CancelAnimationFrame"] || ((/** @type {?} */ (window)))[prefix + "CancelRequestAnimationFrame"])
            // @ts-ignore
            .call(this, id)
        : clearTimeout(id);
}
/** @type {?} */
var reqAnimFrame = getRequestAnimationFrame();

/**
 * @fileoverview added by tsickle
 * Generated from: polyfill/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: scroll/nz-scroll.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} t
 * @param {?} b
 * @param {?} c
 * @param {?} d
 * @return {?}
 */
function easeInOutCubic(t, b, c, d) {
    /** @type {?} */
    var cc = c - b;
    /** @type {?} */
    var tt = t / (d / 2);
    if (tt < 1) {
        return (cc / 2) * tt * tt * tt + b;
    }
    else {
        return (cc / 2) * ((tt -= 2) * tt * tt + 2) + b;
    }
}
var NzScrollService = /** @class */ (function () {
    /* tslint:disable-next-line:no-any */
    function NzScrollService(doc) {
        this.doc = doc;
    }
    /** Set the position of the scroll bar of `el`. */
    /**
     * Set the position of the scroll bar of `el`.
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    NzScrollService.prototype.setScrollTop = /**
     * Set the position of the scroll bar of `el`.
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    function (el, topValue) {
        if (topValue === void 0) { topValue = 0; }
        if (el === window) {
            this.doc.body.scrollTop = topValue;
            (/** @type {?} */ (this.doc.documentElement)).scrollTop = topValue;
        }
        else {
            ((/** @type {?} */ (el))).scrollTop = topValue;
        }
    };
    /** Get position of `el` against window. */
    /**
     * Get position of `el` against window.
     * @param {?} el
     * @return {?}
     */
    NzScrollService.prototype.getOffset = /**
     * Get position of `el` against window.
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var ret = {
            top: 0,
            left: 0
        };
        if (!el || !el.getClientRects().length) {
            return ret;
        }
        /** @type {?} */
        var rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
            /** @type {?} */
            var doc = (/** @type {?} */ (el.ownerDocument)).documentElement;
            ret.top = rect.top - (/** @type {?} */ (doc)).clientTop;
            ret.left = rect.left - (/** @type {?} */ (doc)).clientLeft;
        }
        else {
            ret.top = rect.top;
            ret.left = rect.left;
        }
        return ret;
    };
    /** Get the position of the scoll bar of `el`. */
    // TODO: remove '| Window' as the fallback already happens here
    /**
     * Get the position of the scoll bar of `el`.
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    // TODO: remove '| Window' as the fallback already happens here
    NzScrollService.prototype.getScroll = /**
     * Get the position of the scoll bar of `el`.
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    // TODO: remove '| Window' as the fallback already happens here
    function (el, top) {
        if (top === void 0) { top = true; }
        /** @type {?} */
        var target = el ? el : window;
        /** @type {?} */
        var prop = top ? 'pageYOffset' : 'pageXOffset';
        /** @type {?} */
        var method = top ? 'scrollTop' : 'scrollLeft';
        /** @type {?} */
        var isWindow = target === window;
        // @ts-ignore
        /** @type {?} */
        var ret = isWindow ? target[prop] : target[method];
        if (isWindow && typeof ret !== 'number') {
            ret = (/** @type {?} */ (this.doc.documentElement))[method];
        }
        return ret;
    };
    /**
     * Scroll `el` to some position with animation.
     *
     * @param containerEl container, `window` by default
     * @param targetTopValue Scroll to `top`, 0 by default
     * @param easing Transition curve, `easeInOutCubic` by default
     * @param callback callback invoked when transition is done
     */
    /**
     * Scroll `el` to some position with animation.
     *
     * @param {?} containerEl container, `window` by default
     * @param {?=} targetTopValue Scroll to `top`, 0 by default
     * @param {?=} easing Transition curve, `easeInOutCubic` by default
     * @param {?=} callback callback invoked when transition is done
     * @return {?}
     */
    NzScrollService.prototype.scrollTo = /**
     * Scroll `el` to some position with animation.
     *
     * @param {?} containerEl container, `window` by default
     * @param {?=} targetTopValue Scroll to `top`, 0 by default
     * @param {?=} easing Transition curve, `easeInOutCubic` by default
     * @param {?=} callback callback invoked when transition is done
     * @return {?}
     */
    function (containerEl, targetTopValue, easing, callback) {
        var _this = this;
        if (targetTopValue === void 0) { targetTopValue = 0; }
        /** @type {?} */
        var target = containerEl ? containerEl : window;
        /** @type {?} */
        var scrollTop = this.getScroll(target);
        /** @type {?} */
        var startTime = Date.now();
        /** @type {?} */
        var frameFunc = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var timestamp = Date.now();
            /** @type {?} */
            var time = timestamp - startTime;
            _this.setScrollTop(target, (easing || easeInOutCubic)(time, scrollTop, targetTopValue, 450));
            if (time < 450) {
                reqAnimFrame(frameFunc);
            }
            else {
                if (callback) {
                    callback();
                }
            }
        });
        reqAnimFrame(frameFunc);
    };
    NzScrollService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NzScrollService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return NzScrollService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzScrollService.prototype.doc;
}
/**
 * @param {?} doc
 * @param {?} scrollService
 * @return {?}
 */
function SCROLL_SERVICE_PROVIDER_FACTORY(doc, scrollService) {
    return scrollService || new NzScrollService(doc);
}
/** @type {?} */
var SCROLL_SERVICE_PROVIDER = {
    provide: NzScrollService,
    useFactory: SCROLL_SERVICE_PROVIDER_FACTORY,
    deps: [DOCUMENT, [new Optional(), new SkipSelf(), NzScrollService]]
};

/**
 * @fileoverview added by tsickle
 * Generated from: scroll/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: services/update-host-class.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzUpdateHostClassService = /** @class */ (function () {
    function NzUpdateHostClassService(rendererFactory2) {
        this.classMap = {};
        this.renderer = rendererFactory2.createRenderer(null, null);
    }
    /**
     * @param {?} el
     * @param {?} classMap
     * @return {?}
     */
    NzUpdateHostClassService.prototype.updateHostClass = /**
     * @param {?} el
     * @param {?} classMap
     * @return {?}
     */
    function (el, classMap) {
        this.removeClass(el, this.classMap, this.renderer);
        this.classMap = __assign({}, classMap);
        this.addClass(el, this.classMap, this.renderer);
    };
    /**
     * @private
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    NzUpdateHostClassService.prototype.removeClass = /**
     * @private
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    function (el, classMap, renderer) {
        for (var i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                renderer.removeClass(el, i);
            }
        }
    };
    /**
     * @private
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    NzUpdateHostClassService.prototype.addClass = /**
     * @private
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    function (el, classMap, renderer) {
        for (var i in classMap) {
            if (classMap.hasOwnProperty(i) && classMap[i]) {
                renderer.addClass(el, i);
            }
        }
    };
    NzUpdateHostClassService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NzUpdateHostClassService.ctorParameters = function () { return [
        { type: RendererFactory2 }
    ]; };
    return NzUpdateHostClassService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzUpdateHostClassService.prototype.classMap;
    /** @type {?} */
    NzUpdateHostClassService.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: services/nz-copy-to-clipboard.service.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCopyToClipboardServiceModule = /** @class */ (function () {
    function NzCopyToClipboardServiceModule() {
    }
    NzCopyToClipboardServiceModule.decorators = [
        { type: NgModule }
    ];
    return NzCopyToClipboardServiceModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: services/nz-copy-to-clipboard.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCopyToClipboardService = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function NzCopyToClipboardService(document) {
        this.document = document;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    NzCopyToClipboardService.prototype.copy = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            /** @type {?} */
            var copyTextArea = null;
            try {
                // tslint:disable-next-line no-any
                copyTextArea = (/** @type {?} */ (_this.document.createElement('textarea')));
                (/** @type {?} */ (copyTextArea.style)).all = 'unset';
                copyTextArea.style.position = 'fixed';
                copyTextArea.style.top = '0';
                copyTextArea.style.clip = 'rect(0, 0, 0, 0)';
                copyTextArea.style.whiteSpace = 'pre';
                copyTextArea.style.webkitUserSelect = 'text';
                (/** @type {?} */ (copyTextArea.style)).MozUserSelect = 'text';
                copyTextArea.style.msUserSelect = 'text';
                copyTextArea.style.userSelect = 'text';
                _this.document.body.appendChild(copyTextArea);
                copyTextArea.value = text;
                copyTextArea.select();
                /** @type {?} */
                var successful = _this.document.execCommand('copy');
                if (!successful) {
                    reject(text);
                }
                resolve(text);
            }
            finally {
                if (copyTextArea) {
                    _this.document.body.removeChild(copyTextArea);
                }
            }
        }));
    };
    NzCopyToClipboardService.decorators = [
        { type: Injectable, args: [{
                    providedIn: NzCopyToClipboardServiceModule
                },] }
    ];
    /** @nocollapse */
    NzCopyToClipboardService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ NzCopyToClipboardService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NzCopyToClipboardService_Factory() { return new NzCopyToClipboardService(ɵɵinject(DOCUMENT)); }, token: NzCopyToClipboardService, providedIn: NzCopyToClipboardServiceModule });
    return NzCopyToClipboardService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzCopyToClipboardService.prototype.document;
}

/**
 * @fileoverview added by tsickle
 * Generated from: services/nz-dom-event.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Listener() { }
if (false) {
    /** @type {?} */
    Listener.prototype.countOfListeners;
    /**
     * @param {?} e
     * @return {?}
     */
    Listener.prototype.handler = function (e) { };
    /**
     * @return {?}
     */
    Listener.prototype.unsubscribe = function () { };
}
var NzDomEventService = /** @class */ (function () {
    function NzDomEventService(ngZone, rendererFactory2) {
        this.ngZone = ngZone;
        this.rendererFactory2 = rendererFactory2;
        this.resizeSource = new Subject();
        this.domEventListeners = new Map();
        this.renderer = this.rendererFactory2.createRenderer(null, null);
    }
    /**
     * @return {?}
     */
    NzDomEventService.prototype.registerResizeListener = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.domEventListeners.has('resize')) {
            this.domEventListeners.set('resize', {
                handler: (/**
                 * @return {?}
                 */
                function () {
                    _this.resizeSource.next();
                }),
                countOfListeners: 0
            });
        }
        /** @type {?} */
        var listener = (/** @type {?} */ (this.domEventListeners.get('resize')));
        this.tryToStartListener(listener, 'resize');
        return this.resizeSource.pipe(auditTime(16));
    };
    /**
     * @return {?}
     */
    NzDomEventService.prototype.unregisterResizeListener = /**
     * @return {?}
     */
    function () {
        if (!this.domEventListeners.has('resize')) {
            return;
        }
        /** @type {?} */
        var listener = (/** @type {?} */ (this.domEventListeners.get('resize')));
        this.tryToStopListener(listener);
    };
    /**
     * @private
     * @param {?} l
     * @param {?} name
     * @return {?}
     */
    NzDomEventService.prototype.tryToStartListener = /**
     * @private
     * @param {?} l
     * @param {?} name
     * @return {?}
     */
    function (l, name) {
        var _this = this;
        l.countOfListeners += 1;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            if (l.countOfListeners === 1) {
                l.unsubscribe = _this.renderer.listen('window', name, l.handler);
            }
        }));
    };
    /**
     * @private
     * @param {?} l
     * @return {?}
     */
    NzDomEventService.prototype.tryToStopListener = /**
     * @private
     * @param {?} l
     * @return {?}
     */
    function (l) {
        l.countOfListeners -= 1;
        if (l.countOfListeners === 0) {
            (/** @type {?} */ (l.unsubscribe))();
            l.unsubscribe = undefined;
        }
    };
    NzDomEventService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzDomEventService.ctorParameters = function () { return [
        { type: NgZone },
        { type: RendererFactory2 }
    ]; };
    /** @nocollapse */ NzDomEventService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NzDomEventService_Factory() { return new NzDomEventService(ɵɵinject(NgZone), ɵɵinject(RendererFactory2)); }, token: NzDomEventService, providedIn: "root" });
    return NzDomEventService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzDomEventService.prototype.resizeSource;
    /**
     * @type {?}
     * @private
     */
    NzDomEventService.prototype.domEventListeners;
    /**
     * @type {?}
     * @private
     */
    NzDomEventService.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzDomEventService.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzDomEventService.prototype.rendererFactory2;
}

/**
 * @fileoverview added by tsickle
 * Generated from: services/nz-singleton.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SingletonRegistryItem() { }
if (false) {
    /** @type {?} */
    SingletonRegistryItem.prototype.target;
}
/**
 * When running in test, singletons should not be destroyed. So we keep references of singletons
 * in this global variable.
 * @type {?}
 */
var testSingleRegistry = new Map();
/**
 * Some singletons should have life cycle that is same to Angular's. This service make sure that
 * those singletons get destroyed in HMR.
 */
var NzSingletonService = /** @class */ (function () {
    function NzSingletonService() {
        /**
         * This registry is used to register singleton in dev mode.
         * So that singletons get destroyed when hot module reload happens.
         *
         * This works in prod mode too but with no specific effect.
         */
        this._singletonRegistry = new Map();
    }
    Object.defineProperty(NzSingletonService.prototype, "singletonRegistry", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return environment.isTestMode ? testSingleRegistry : this._singletonRegistry;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} key
     * @param {?} target
     * @return {?}
     */
    NzSingletonService.prototype.registerSingletonWithKey = /**
     * @param {?} key
     * @param {?} target
     * @return {?}
     */
    function (key, target) {
        /** @type {?} */
        var alreadyHave = this.singletonRegistry.has(key);
        /** @type {?} */
        var item = alreadyHave ? (/** @type {?} */ (this.singletonRegistry.get(key))) : this.withNewTarget(target);
        if (!alreadyHave) {
            this.singletonRegistry.set(key, item);
        }
    };
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    NzSingletonService.prototype.getSingletonWithKey = /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.singletonRegistry.has(key) ? ((/** @type {?} */ ((/** @type {?} */ (this.singletonRegistry.get(key))).target))) : null;
    };
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    NzSingletonService.prototype.withNewTarget = /**
     * @private
     * @param {?} target
     * @return {?}
     */
    function (target) {
        return {
            target: target
        };
    };
    NzSingletonService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ NzSingletonService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NzSingletonService_Factory() { return new NzSingletonService(); }, token: NzSingletonService, providedIn: "root" });
    return NzSingletonService;
}());
if (false) {
    /**
     * This registry is used to register singleton in dev mode.
     * So that singletons get destroyed when hot module reload happens.
     *
     * This works in prod mode too but with no specific effect.
     * @type {?}
     * @private
     */
    NzSingletonService.prototype._singletonRegistry;
}

/**
 * @fileoverview added by tsickle
 * Generated from: util/check.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
function isNotNil(value) {
    return typeof value !== 'undefined' && value !== null;
}
/**
 * @param {?} value
 * @return {?}
 */
function isNil(value) {
    return typeof value === 'undefined' || value === null;
}
/**
 * Examine if two objects are shallowly equaled.
 * @param {?=} objA
 * @param {?=} objB
 * @return {?}
 */
function shallowEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
        return false;
    }
    /** @type {?} */
    var keysA = Object.keys(objA);
    /** @type {?} */
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    /** @type {?} */
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // tslint:disable-next-line:prefer-for-of
    for (var idx = 0; idx < keysA.length; idx++) {
        /** @type {?} */
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        if (objA[key] !== objB[key]) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} value
 * @return {?}
 */
function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
/**
 * @param {?} element
 * @return {?}
 */
function isEmpty(element) {
    /** @type {?} */
    var nodes = element.childNodes;
    for (var i = 0; i < nodes.length; i++) {
        if (filterNotEmptyNode(nodes.item(i))) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} node
 * @return {?}
 */
function filterNotEmptyNode(node) {
    if (node) {
        if (node.nodeType === 1 && ((/** @type {?} */ (node))).outerHTML.toString().trim().length !== 0) {
            // ELEMENT_NODE
            return node;
        }
        else if (node.nodeType === 3 && (/** @type {?} */ (node.textContent)).toString().trim().length !== 0) {
            // TEXT_NODE
            return node;
        }
        return null;
    }
    return null;
}
// tslint:disable-next-line:no-any
/**
 * @param {?} value
 * @return {?}
 */
function isNonEmptyString(value) {
    return typeof value === 'string' && value !== '';
}
// tslint:disable-next-line:no-any
/**
 * @param {?} value
 * @return {?}
 */
function isTemplateRef(value) {
    return value instanceof TemplateRef;
}
// tslint:disable-next-line:no-any
/**
 * @param {?} value
 * @return {?}
 */
function isComponent(value) {
    return value instanceof Type;
}

/**
 * @fileoverview added by tsickle
 * Generated from: util/dom.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Silent an event by stopping and preventing it.
 * @param {?} e
 * @return {?}
 */
function silentEvent(e) {
    e.stopPropagation();
    e.preventDefault();
}
/**
 * @param {?} elem
 * @return {?}
 */
function getElementOffset(elem) {
    if (!elem.getClientRects().length) {
        return { top: 0, left: 0 };
    }
    /** @type {?} */
    var rect = elem.getBoundingClientRect();
    /** @type {?} */
    var win = (/** @type {?} */ (elem.ownerDocument)).defaultView;
    return {
        top: rect.top + (/** @type {?} */ (win)).pageYOffset,
        left: rect.left + (/** @type {?} */ (win)).pageXOffset
    };
}
/**
 * @param {?} element
 * @return {?}
 */
function findFirstNotEmptyNode(element) {
    /** @type {?} */
    var children = element.childNodes;
    for (var i = 0; i < children.length; i++) {
        /** @type {?} */
        var node = children.item(i);
        if (filterNotEmptyNode(node)) {
            return node;
        }
    }
    return null;
}
/**
 * @param {?} element
 * @return {?}
 */
function findLastNotEmptyNode(element) {
    /** @type {?} */
    var children = element.childNodes;
    for (var i = children.length - 1; i >= 0; i--) {
        /** @type {?} */
        var node = children.item(i);
        if (filterNotEmptyNode(node)) {
            return node;
        }
    }
    return null;
}
/**
 * @param {?} parent
 * @return {?}
 */
function reverseChildNodes(parent) {
    /** @type {?} */
    var children = parent.childNodes;
    /** @type {?} */
    var length = children.length;
    if (length) {
        /** @type {?} */
        var nodes_1 = [];
        children.forEach((/**
         * @param {?} node
         * @param {?} i
         * @return {?}
         */
        function (node, i) { return (nodes_1[i] = node); }));
        while (length--) {
            parent.appendChild(nodes_1[length]);
        }
    }
}
/**
 * Investigate if an event is a `TouchEvent`.
 * @param {?} event
 * @return {?}
 */
function isTouchEvent(event) {
    return event.type.startsWith('touch');
}
/**
 * @param {?} event
 * @return {?}
 */
function getEventPosition(event) {
    return isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
}
/**
 * @record
 */
function MouseTouchObserverConfig() { }
if (false) {
    /** @type {?} */
    MouseTouchObserverConfig.prototype.end;
    /** @type {?} */
    MouseTouchObserverConfig.prototype.move;
    /** @type {?} */
    MouseTouchObserverConfig.prototype.pluckKey;
    /** @type {?} */
    MouseTouchObserverConfig.prototype.start;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.end$;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.moveResolved$;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.startPlucked$;
    /**
     * @param {?} e
     * @return {?}
     */
    MouseTouchObserverConfig.prototype.filter = function (e) { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: services/drag/nz-drag.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Point() { }
if (false) {
    /** @type {?} */
    Point.prototype.x;
    /** @type {?} */
    Point.prototype.y;
}
/**
 * @record
 */
function HandlerItem() { }
if (false) {
    /**
     * @param {?} e
     * @return {?}
     */
    HandlerItem.prototype.handler = function (e) { };
    /**
     * @return {?}
     */
    HandlerItem.prototype.teardown = function () { };
}
/**
 * @param {?} event
 * @return {?}
 */
function getPagePosition(event) {
    /** @type {?} */
    var e = getEventPosition(event);
    return {
        x: e.pageX,
        y: e.pageY
    };
}
/**
 * This module provide a global dragging service to other components.
 */
var NzDragService = /** @class */ (function () {
    function NzDragService(rendererFactory2) {
        this.draggingThreshold = 5;
        this.currentDraggingSequence = null;
        this.currentStartingPoint = null;
        this.handleRegistry = new Set();
        this.renderer = rendererFactory2.createRenderer(null, null);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NzDragService.prototype.requestDraggingSequence = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (!this.handleRegistry.size) {
            this.registerDraggingHandler(isTouchEvent(event));
        }
        // Complete last dragging sequence if a new target is dragged.
        if (this.currentDraggingSequence) {
            this.currentDraggingSequence.complete();
        }
        this.currentStartingPoint = getPagePosition(event);
        this.currentDraggingSequence = new Subject();
        return this.currentDraggingSequence.pipe(map((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            return {
                x: e.pageX - (/** @type {?} */ (_this.currentStartingPoint)).x,
                y: e.pageY - (/** @type {?} */ (_this.currentStartingPoint)).y
            };
        })), filter((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return Math.abs(e.x) > _this.draggingThreshold || Math.abs(e.y) > _this.draggingThreshold; })), finalize((/**
         * @return {?}
         */
        function () { return _this.teardownDraggingSequence(); })));
    };
    /**
     * @private
     * @param {?} isTouch
     * @return {?}
     */
    NzDragService.prototype.registerDraggingHandler = /**
     * @private
     * @param {?} isTouch
     * @return {?}
     */
    function (isTouch) {
        var _this = this;
        if (isTouch) {
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'touchmove', (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    if (_this.currentDraggingSequence) {
                        _this.currentDraggingSequence.next(e.touches[0] || e.changedTouches[0]);
                    }
                }))
            });
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'touchend', (/**
                 * @return {?}
                 */
                function () {
                    if (_this.currentDraggingSequence) {
                        _this.currentDraggingSequence.complete();
                    }
                }))
            });
        }
        else {
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'mousemove', (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    if (_this.currentDraggingSequence) {
                        _this.currentDraggingSequence.next(e);
                    }
                }))
            });
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'mouseup', (/**
                 * @return {?}
                 */
                function () {
                    if (_this.currentDraggingSequence) {
                        _this.currentDraggingSequence.complete();
                    }
                }))
            });
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzDragService.prototype.teardownDraggingSequence = /**
     * @private
     * @return {?}
     */
    function () {
        this.currentDraggingSequence = null;
    };
    NzDragService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzDragService.ctorParameters = function () { return [
        { type: RendererFactory2 }
    ]; };
    /** @nocollapse */ NzDragService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NzDragService_Factory() { return new NzDragService(ɵɵinject(RendererFactory2)); }, token: NzDragService, providedIn: "root" });
    return NzDragService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.draggingThreshold;
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.currentDraggingSequence;
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.currentStartingPoint;
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.handleRegistry;
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: services/drag/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: services/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: testing/event-objects.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a browser MouseEvent with the specified options.
 * @param {?} type
 * @param {?=} x
 * @param {?=} y
 * @param {?=} button
 * @return {?}
 */
function createMouseEvent(type, x, y, button) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    if (button === void 0) { button = 0; }
    /** @type {?} */
    var event = document.createEvent('MouseEvent');
    event.initMouseEvent(type, true /* canBubble */, false /* cancelable */, window /* view */, 0 /* detail */, x /* screenX */, y /* screenY */, x /* clientX */, y /* clientY */, false /* ctrlKey */, false /* altKey */, false /* shiftKey */, false /* metaKey */, button /* button */, null /* relatedTarget */);
    // `initMouseEvent` doesn't allow us to pass the `buttons` and
    // defaults it to 0 which looks like a fake event.
    Object.defineProperty(event, 'buttons', { get: (/**
         * @return {?}
         */
        function () { return 1; }) });
    return event;
}
/**
 * Creates a browser TouchEvent with the specified pointer coordinates.
 * @param {?} type
 * @param {?=} pageX
 * @param {?=} pageY
 * @return {?}
 */
function createTouchEvent(type, pageX, pageY) {
    if (pageX === void 0) { pageX = 0; }
    if (pageY === void 0) { pageY = 0; }
    // In favor of creating events that work for most of the browsers, the event is created
    // as a basic UI Event. The necessary details for the event will be set manually.
    /** @type {?} */
    var event = document.createEvent('UIEvent');
    /** @type {?} */
    var touchDetails = { pageX: pageX, pageY: pageY, clientX: pageX, clientY: pageY };
    event.initUIEvent(type, true, true, window, 0);
    // Most of the browsers don't have a "initTouchEvent" method that can be used to define
    // the touch details.
    Object.defineProperties(event, {
        touches: { value: [touchDetails] },
        targetTouches: { value: [touchDetails] },
        changedTouches: { value: [touchDetails] }
    });
    return event;
}
/**
 * Dispatches a keydown event from an element.
 * @param {?} type
 * @param {?} keyCode
 * @param {?=} target
 * @param {?=} key
 * @return {?}
 */
function createKeyboardEvent(type, keyCode, target, key) {
    // tslint:disable-next-line:no-any
    /** @type {?} */
    var event = (/** @type {?} */ (document.createEvent('KeyboardEvent')));
    /** @type {?} */
    var originalPreventDefault = event.preventDefault;
    // Firefox does not support `initKeyboardEvent`, but supports `initKeyEvent`.
    if (event.initKeyEvent) {
        event.initKeyEvent(type, true, true, window, 0, 0, 0, 0, 0, keyCode);
    }
    else {
        event.initKeyboardEvent(type, true, true, window, 0, key, 0, '', false);
    }
    // Webkit Browsers don't set the keyCode when calling the init function.
    // See related bug https://bugs.webkit.org/show_bug.cgi?id=16735
    Object.defineProperties(event, {
        keyCode: { get: (/**
             * @return {?}
             */
            function () { return keyCode; }) },
        key: { get: (/**
             * @return {?}
             */
            function () { return key; }) },
        target: { get: (/**
             * @return {?}
             */
            function () { return target; }) }
    });
    // IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
    // tslint:disable-next-line:typedef
    event.preventDefault = (/**
     * @return {?}
     */
    function () {
        Object.defineProperty(event, 'defaultPrevented', { get: (/**
             * @return {?}
             */
            function () { return true; }) });
        // tslint:disable-next-line:no-invalid-this
        return originalPreventDefault.apply(this, arguments);
    });
    return event;
}
/**
 * Creates a fake event object with any desired event type.
 * @param {?} type
 * @param {?=} canBubble
 * @param {?=} cancelable
 * @return {?}
 */
function createFakeEvent(type, canBubble, cancelable) {
    if (canBubble === void 0) { canBubble = true; }
    if (cancelable === void 0) { cancelable = true; }
    /** @type {?} */
    var event = document.createEvent('Event');
    event.initEvent(type, canBubble, cancelable);
    return event;
}

/**
 * @fileoverview added by tsickle
 * Generated from: testing/dispatch-events.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Utility to dispatch any event on a Node.
 * @param {?} node
 * @param {?} event
 * @return {?}
 */
function dispatchEvent(node, event) {
    node.dispatchEvent(event);
    return event;
}
/**
 * Shorthand to dispatch a fake event on a specified node.
 * @param {?} node
 * @param {?} type
 * @param {?=} canBubble
 * @return {?}
 */
function dispatchFakeEvent(node, type, canBubble) {
    return dispatchEvent(node, createFakeEvent(type, canBubble));
}
/**
 * Shorthand to dispatch a keyboard event with a specified key code.
 * @param {?} node
 * @param {?} type
 * @param {?} keyCode
 * @param {?=} target
 * @return {?}
 */
function dispatchKeyboardEvent(node, type, keyCode, target) {
    return (/** @type {?} */ (dispatchEvent(node, createKeyboardEvent(type, keyCode, target))));
}
/**
 * Shorthand to dispatch a mouse event on the specified coordinates.
 * @param {?} node
 * @param {?} type
 * @param {?=} x
 * @param {?=} y
 * @param {?=} event
 * @return {?}
 */
function dispatchMouseEvent(node, type, x, y, event) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    if (event === void 0) { event = createMouseEvent(type, x, y); }
    return (/** @type {?} */ (dispatchEvent(node, event)));
}
/**
 * Shorthand to dispatch a touch event on the specified coordinates.
 * @param {?} node
 * @param {?} type
 * @param {?=} x
 * @param {?=} y
 * @return {?}
 */
function dispatchTouchEvent(node, type, x, y) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    return (/** @type {?} */ (dispatchEvent(node, createTouchEvent(type, x, y))));
}

/**
 * @fileoverview added by tsickle
 * Generated from: testing/type-in-element.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Focuses an input, sets its value and dispatches
 * the `input` event, simulating the user typing.
 * @param {?} value Value to be set on the input.
 * @param {?} element Element onto which to set the value.
 * @return {?}
 */
function typeInElement(value, element) {
    element.focus();
    element.value = value;
    dispatchFakeEvent(element, 'input');
}

/**
 * @fileoverview added by tsickle
 * Generated from: testing/wrapped-error-message.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Gets a RegExp used to detect an angular wrapped error message.
 * See https://github.com/angular/angular/issues/8348
 * @param {?} e
 * @return {?}
 */
function wrappedErrorMessage(e) {
    /** @type {?} */
    var escapedMessage = e.message.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
    return new RegExp(escapedMessage);
}

/**
 * @fileoverview added by tsickle
 * Generated from: testing/fake-viewport-ruler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
FakeViewportRuler = /** @class */ (function () {
    function FakeViewportRuler() {
    }
    /**
     * @return {?}
     */
    FakeViewportRuler.prototype.getViewportRect = /**
     * @return {?}
     */
    function () {
        return {
            left: 0,
            top: 0,
            width: 1014,
            height: 686,
            bottom: 686,
            right: 1014
        };
    };
    /**
     * @return {?}
     */
    FakeViewportRuler.prototype.getViewportSize = /**
     * @return {?}
     */
    function () {
        return { width: 1014, height: 686 };
    };
    /**
     * @return {?}
     */
    FakeViewportRuler.prototype.getViewportScrollPosition = /**
     * @return {?}
     */
    function () {
        return { top: 0, left: 0 };
    };
    return FakeViewportRuler;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: testing/mock-ng-zone.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Mock synchronous NgZone implementation that can be used
 * to flush out `onStable` subscriptions in tests.
 *
 * via: https://github.com/angular/angular/blob/master/packages/core/testing/src/ng_zone_mock.ts
 * \@docs-private
 */
var MockNgZone = /** @class */ (function (_super) {
    __extends(MockNgZone, _super);
    function MockNgZone() {
        var _this = _super.call(this, { enableLongStackTrace: false }) || this;
        _this.onStable = new EventEmitter(false);
        return _this;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    MockNgZone.prototype.run = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        return fn();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MockNgZone.prototype.runOutsideAngular = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        return fn();
    };
    /**
     * @return {?}
     */
    MockNgZone.prototype.simulateZoneExit = /**
     * @return {?}
     */
    function () {
        this.onStable.emit(null);
    };
    MockNgZone.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MockNgZone.ctorParameters = function () { return []; };
    return MockNgZone;
}(NgZone));
if (false) {
    /** @type {?} */
    MockNgZone.prototype.onStable;
}

/**
 * @fileoverview added by tsickle
 * Generated from: testing/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: tree/nz-tree-base-node.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NzTreeNodeOptions() { }
if (false) {
    /** @type {?} */
    NzTreeNodeOptions.prototype.title;
    /** @type {?} */
    NzTreeNodeOptions.prototype.key;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.icon;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.isLeaf;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.checked;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.selected;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.selectable;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.disabled;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.disableCheckbox;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.expanded;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.children;
    /* Skipping unhandled member: [key: string]: any;*/
}
var NzTreeNode = /** @class */ (function () {
    function NzTreeNode(option, parent, service) {
        var _this = this;
        if (parent === void 0) { parent = null; }
        if (service === void 0) { service = null; }
        this.level = 0;
        if (option instanceof NzTreeNode) {
            return option;
        }
        this.service = service || null;
        this.origin = option;
        this.key = option.key;
        this.parentNode = parent;
        this._title = option.title || '---';
        this._icon = option.icon || '';
        this._isLeaf = option.isLeaf || false;
        this._children = [];
        // option params
        this._isChecked = option.checked || false;
        this._isSelectable = option.disabled || option.selectable !== false;
        this._isDisabled = option.disabled || false;
        this._isDisableCheckbox = option.disableCheckbox || false;
        this._isExpanded = option.isLeaf ? false : option.expanded || false;
        this._isHalfChecked = false;
        this._isSelected = (!option.disabled && option.selected) || false;
        this._isLoading = false;
        this.isMatched = false;
        /**
         * parent's checked status will affect children while initializing
         */
        if (parent) {
            this.level = parent.level + 1;
        }
        else {
            this.level = 0;
        }
        if (typeof option.children !== 'undefined' && option.children !== null) {
            option.children.forEach((/**
             * @param {?} nodeOptions
             * @return {?}
             */
            function (nodeOptions) {
                /** @type {?} */
                var s = _this.treeService;
                if (s &&
                    !s.isCheckStrictly &&
                    option.checked &&
                    !option.disabled &&
                    !nodeOptions.disabled &&
                    !nodeOptions.disableCheckbox) {
                    nodeOptions.checked = option.checked;
                }
                _this._children.push(new NzTreeNode(nodeOptions, _this));
            }));
        }
    }
    Object.defineProperty(NzTreeNode.prototype, "treeService", {
        get: /**
         * @return {?}
         */
        function () {
            return this.service || (this.parentNode && this.parentNode.treeService);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "title", {
        /**
         * auto generate
         * get
         * set
         */
        get: /**
         * auto generate
         * get
         * set
         * @return {?}
         */
        function () {
            return this._title;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._title = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._icon;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._icon = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "children", {
        get: /**
         * @return {?}
         */
        function () {
            return this._children;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._children = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isLeaf", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isLeaf;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isLeaf = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isChecked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isChecked;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isChecked = value;
            this._isAllChecked = value;
            this.origin.checked = value;
            this.afterValueChange('isChecked');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isAllChecked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isAllChecked;
        },
        /**
         * @deprecated Maybe removed in next major version, use `isChecked` instead.
         */
        set: /**
         * @deprecated Maybe removed in next major version, use `isChecked` instead.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnDeprecation("'isAllChecked' is going to be removed in 9.0.0. Please use 'isChecked' instead.");
            this._isAllChecked = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isHalfChecked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isHalfChecked;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isHalfChecked = value;
            this.afterValueChange('isHalfChecked');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isSelectable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isSelectable;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isSelectable = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDisabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isDisabled = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isDisableCheckbox", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDisableCheckbox;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isDisableCheckbox = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isExpanded", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isExpanded;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isExpanded = value;
            this.origin.expanded = value;
            this.afterValueChange('isExpanded');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isSelected;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isSelected = value;
            this.origin.selected = value;
            this.afterValueChange('isSelected');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isLoading", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isLoading;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isLoading = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} checked
     * @param {?=} halfChecked
     * @return {?}
     */
    NzTreeNode.prototype.setSyncChecked = /**
     * @param {?=} checked
     * @param {?=} halfChecked
     * @return {?}
     */
    function (checked, halfChecked) {
        if (checked === void 0) { checked = false; }
        if (halfChecked === void 0) { halfChecked = false; }
        this.setChecked(checked, halfChecked);
        if (this.treeService && !this.treeService.isCheckStrictly) {
            this.treeService.conduct(this);
        }
    };
    /**
     * @deprecated Maybe removed in next major version, use `isChecked` instead.
     */
    /**
     * @deprecated Maybe removed in next major version, use `isChecked` instead.
     * @param {?=} checked
     * @param {?=} halfChecked
     * @return {?}
     */
    NzTreeNode.prototype.setChecked = /**
     * @deprecated Maybe removed in next major version, use `isChecked` instead.
     * @param {?=} checked
     * @param {?=} halfChecked
     * @return {?}
     */
    function (checked, halfChecked) {
        if (checked === void 0) { checked = false; }
        if (halfChecked === void 0) { halfChecked = false; }
        warnDeprecation("'setChecked' is going to be removed in 9.0.0. Please use 'isChecked' instead.");
        this.origin.checked = checked;
        this.isChecked = checked;
        this.isAllChecked = checked;
        this.isHalfChecked = halfChecked;
    };
    /**
     * @deprecated Maybe removed in next major version, use `isExpanded` instead.
     */
    /**
     * @deprecated Maybe removed in next major version, use `isExpanded` instead.
     * @param {?} value
     * @return {?}
     */
    NzTreeNode.prototype.setExpanded = /**
     * @deprecated Maybe removed in next major version, use `isExpanded` instead.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        warnDeprecation("'setExpanded' is going to be removed in 9.0.0. Please use 'isExpanded' instead.");
        this.isExpanded = value;
    };
    /**
     * @deprecated Maybe removed in next major version, use `isSelected` instead.
     */
    /**
     * @deprecated Maybe removed in next major version, use `isSelected` instead.
     * @param {?} value
     * @return {?}
     */
    NzTreeNode.prototype.setSelected = /**
     * @deprecated Maybe removed in next major version, use `isSelected` instead.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        warnDeprecation("'setSelected' is going to be removed in 9.0.0. Please use 'isExpanded' isSelected.");
        if (this.isDisabled) {
            return;
        }
        this.isSelected = value;
    };
    /**
     * @return {?}
     */
    NzTreeNode.prototype.getParentNode = /**
     * @return {?}
     */
    function () {
        return this.parentNode;
    };
    /**
     * @return {?}
     */
    NzTreeNode.prototype.getChildren = /**
     * @return {?}
     */
    function () {
        return this.children;
    };
    /**
     * Support appending child nodes by position. Leaf node cannot be appended.
     */
    // tslint:disable-next-line:no-any
    /**
     * Support appending child nodes by position. Leaf node cannot be appended.
     * @param {?} children
     * @param {?=} childPos
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    NzTreeNode.prototype.addChildren = /**
     * Support appending child nodes by position. Leaf node cannot be appended.
     * @param {?} children
     * @param {?=} childPos
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    function (children, childPos) {
        var _this = this;
        if (childPos === void 0) { childPos = -1; }
        if (!this.isLeaf) {
            children.forEach((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                /** @type {?} */
                var refreshLevel = (/**
                 * @param {?} n
                 * @return {?}
                 */
                function (n) {
                    n.getChildren().forEach((/**
                     * @param {?} c
                     * @return {?}
                     */
                    function (c) {
                        c.level = (/** @type {?} */ (c.getParentNode())).level + 1;
                        // flush origin
                        c.origin.level = c.level;
                        refreshLevel(c);
                    }));
                });
                /** @type {?} */
                var child = node;
                if (child instanceof NzTreeNode) {
                    child.parentNode = _this;
                }
                else {
                    child = new NzTreeNode(node, _this);
                }
                child.level = _this.level + 1;
                child.origin.level = child.level;
                refreshLevel(child);
                try {
                    childPos === -1 ? _this.children.push(child) : _this.children.splice(childPos, 0, child);
                    // flush origin
                }
                catch (e) { }
            }));
            this.origin.children = this.getChildren().map((/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return v.origin; }));
            // remove loading state
            this.isLoading = false;
        }
    };
    /**
     * @return {?}
     */
    NzTreeNode.prototype.clearChildren = /**
     * @return {?}
     */
    function () {
        // refresh checked state
        this.afterValueChange('clearChildren');
        this.children = [];
        this.origin.children = [];
    };
    /**
     * @return {?}
     */
    NzTreeNode.prototype.remove = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var parentNode = this.getParentNode();
        if (parentNode) {
            parentNode.children = parentNode.getChildren().filter((/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return v.key !== _this.key; }));
            parentNode.origin.children = (/** @type {?} */ (parentNode.origin.children)).filter((/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return v.key !== _this.key; }));
            this.afterValueChange('remove');
        }
    };
    /**
     * @param {?} key
     * @return {?}
     */
    NzTreeNode.prototype.afterValueChange = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (this.treeService) {
            switch (key) {
                case 'isChecked':
                    this.treeService.setCheckedNodeList(this);
                    break;
                case 'isHalfChecked':
                    this.treeService.setHalfCheckedNodeList(this);
                    break;
                case 'isExpanded':
                    this.treeService.setExpandedNodeList(this);
                    break;
                case 'isSelected':
                    this.treeService.setNodeActive(this);
                    break;
                case 'clearChildren':
                    this.treeService.afterRemove(this.getChildren());
                    break;
                case 'remove':
                    this.treeService.afterRemove([this]);
                    break;
            }
        }
        this.update();
    };
    /**
     * @return {?}
     */
    NzTreeNode.prototype.update = /**
     * @return {?}
     */
    function () {
        if (this.component) {
            this.component.setClassMap();
            this.component.markForCheck();
        }
    };
    return NzTreeNode;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._title;
    /** @type {?} */
    NzTreeNode.prototype.key;
    /** @type {?} */
    NzTreeNode.prototype.level;
    /** @type {?} */
    NzTreeNode.prototype.origin;
    /** @type {?} */
    NzTreeNode.prototype.parentNode;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._icon;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._children;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isLeaf;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isChecked;
    /**
     * @deprecated Maybe removed in next major version, use isChecked instead
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isAllChecked;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isSelectable;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isDisabled;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isDisableCheckbox;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isExpanded;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isHalfChecked;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isSelected;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isLoading;
    /** @type {?} */
    NzTreeNode.prototype.canHide;
    /** @type {?} */
    NzTreeNode.prototype.isMatched;
    /** @type {?} */
    NzTreeNode.prototype.service;
    /** @type {?} */
    NzTreeNode.prototype.component;
}

/**
 * @fileoverview added by tsickle
 * Generated from: tree/nz-tree-base.definitions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @record
 */
function NzFormatEmitEvent() { }
if (false) {
    /** @type {?} */
    NzFormatEmitEvent.prototype.eventName;
    /** @type {?|undefined} */
    NzFormatEmitEvent.prototype.node;
    /** @type {?|undefined} */
    NzFormatEmitEvent.prototype.event;
    /** @type {?|undefined} */
    NzFormatEmitEvent.prototype.dragNode;
    /** @type {?|undefined} */
    NzFormatEmitEvent.prototype.selectedKeys;
    /** @type {?|undefined} */
    NzFormatEmitEvent.prototype.checkedKeys;
    /** @type {?|undefined} */
    NzFormatEmitEvent.prototype.matchedKeys;
    /** @type {?|undefined} */
    NzFormatEmitEvent.prototype.nodes;
    /** @type {?|undefined} */
    NzFormatEmitEvent.prototype.keys;
}
/**
 * @record
 */
function NzFormatBeforeDropEvent() { }
if (false) {
    /** @type {?} */
    NzFormatBeforeDropEvent.prototype.dragNode;
    /** @type {?} */
    NzFormatBeforeDropEvent.prototype.node;
    /** @type {?} */
    NzFormatBeforeDropEvent.prototype.pos;
}
/**
 * @record
 */
function NzTreeNodeBaseComponent() { }
if (false) {
    /**
     * @return {?}
     */
    NzTreeNodeBaseComponent.prototype.setClassMap = function () { };
    /**
     * @return {?}
     */
    NzTreeNodeBaseComponent.prototype.markForCheck = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: util/array.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
function toArray(value) {
    /** @type {?} */
    var ret;
    if (value == null) {
        ret = [];
    }
    else if (!Array.isArray(value)) {
        ret = [value];
    }
    else {
        ret = value;
    }
    return ret;
}
/**
 * @template T
 * @param {?} array1
 * @param {?} array2
 * @return {?}
 */
function arraysEqual(array1, array2) {
    if (!array1 || !array2 || array1.length !== array2.length) {
        return false;
    }
    /** @type {?} */
    var len = array1.length;
    for (var i = 0; i < len; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function shallowCopyArray(source) {
    return source.slice();
}

/**
 * @fileoverview added by tsickle
 * Generated from: util/getMentions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @param {?} prefix
 * @return {?}
 */
function getRegExp(prefix) {
    /** @type {?} */
    var prefixArray = Array.isArray(prefix) ? prefix : [prefix];
    /** @type {?} */
    var prefixToken = prefixArray.join('').replace(/(\$|\^)/g, '\\$1');
    if (prefixArray.length > 1) {
        prefixToken = "[" + prefixToken + "]";
    }
    return new RegExp("(\\s|^)(" + prefixToken + ")[^\\s]*", 'g');
}
/**
 * @param {?} value
 * @param {?=} prefix
 * @return {?}
 */
function getMentions(value, prefix) {
    if (prefix === void 0) { prefix = '@'; }
    if (typeof value !== 'string') {
        return [];
    }
    /** @type {?} */
    var regex = getRegExp(prefix);
    /** @type {?} */
    var mentions = value.match(regex);
    return mentions !== null ? mentions.map((/**
     * @param {?} e
     * @return {?}
     */
    function (e) { return e.trim(); })) : [];
}

/**
 * @fileoverview added by tsickle
 * Generated from: util/string.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Much like lodash.
 * @param {?} toPad
 * @param {?} length
 * @param {?} element
 * @return {?}
 */
function padStart(toPad, length, element) {
    if (toPad.length > length) {
        return toPad;
    }
    /** @type {?} */
    var joined = "" + getRepeatedElement(length, element) + toPad;
    return joined.slice(joined.length - length, joined.length);
}
/**
 * @param {?} toPad
 * @param {?} length
 * @param {?} element
 * @return {?}
 */
function padEnd(toPad, length, element) {
    /** @type {?} */
    var joined = "" + toPad + getRepeatedElement(length, element);
    return joined.slice(0, length);
}
/**
 * @param {?} length
 * @param {?} element
 * @return {?}
 */
function getRepeatedElement(length, element) {
    return Array(length)
        .fill(element)
        .join('');
}

/**
 * @fileoverview added by tsickle
 * Generated from: util/is-promise.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable-next-line:no-any
/**
 * @param {?} obj
 * @return {?}
 */
function isPromise(obj) {
    return !!obj && typeof obj.then === 'function' && typeof obj.catch === 'function';
}

/**
 * @fileoverview added by tsickle
 * Generated from: util/number.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @param {?} min
 * @param {?} max
 * @param {?} value
 * @return {?}
 */
function getPercent(min, max, value) {
    return ((value - min) / (max - min)) * 100;
}
/**
 * @param {?} num
 * @return {?}
 */
function getPrecision(num) {
    /** @type {?} */
    var numStr = num.toString();
    /** @type {?} */
    var dotIndex = numStr.indexOf('.');
    return dotIndex >= 0 ? numStr.length - dotIndex - 1 : 0;
}
/**
 * @param {?} num
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function ensureNumberInRange(num, min, max) {
    if (isNaN(num) || num < min) {
        return min;
    }
    else if (num > max) {
        return max;
    }
    else {
        return num;
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: util/scroll-into-view-if-needed.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @param {?} node
 * @return {?}
 */
function scrollIntoView(node) {
    /** @type {?} */
    var nodeAsAny = (/** @type {?} */ (node));
    if (nodeAsAny.scrollIntoViewIfNeeded) {
        /* tslint:disable-next-line:no-string-literal */
        nodeAsAny.scrollIntoViewIfNeeded(false);
        return;
    }
    if (node.scrollIntoView) {
        node.scrollIntoView(false);
        return;
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: util/textarea-caret-position.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// from https://github.com/component/textarea-caret-position
// We'll copy the properties below into the mirror div.
// Note that some browsers, such as Firefox, do not concatenate properties
// into their shorthand (e.g. padding-top, padding-bottom etc. -> padding),
// so we have to list every single property explicitly.
/** @type {?} */
var properties = [
    'direction',
    'boxSizing',
    'width',
    'height',
    'overflowX',
    'overflowY',
    'borderTopWidth',
    'borderRightWidth',
    'borderBottomWidth',
    'borderLeftWidth',
    'borderStyle',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    // https://developer.mozilla.org/en-US/docs/Web/CSS/font
    'fontStyle',
    'fontVariant',
    'fontWeight',
    'fontStretch',
    'fontSize',
    'fontSizeAdjust',
    'lineHeight',
    'fontFamily',
    'textAlign',
    'textTransform',
    'textIndent',
    'textDecoration',
    'letterSpacing',
    'wordSpacing',
    'tabSize',
    'MozTabSize'
];
/** @type {?} */
var isBrowser = typeof window !== 'undefined';
// tslint:disable-next-line:no-any
/** @type {?} */
var isFirefox = isBrowser && ((/** @type {?} */ (window))).mozInnerScreenX != null;
/** @type {?} */
var _parseInt = (/**
 * @param {?} str
 * @return {?}
 */
function (str) { return parseInt(str, 10); });
var ɵ0 = _parseInt;
/**
 * @record
 */
function Coordinates() { }
if (false) {
    /** @type {?} */
    Coordinates.prototype.top;
    /** @type {?} */
    Coordinates.prototype.left;
    /** @type {?} */
    Coordinates.prototype.height;
}
/**
 * @param {?} element
 * @param {?} position
 * @param {?=} options
 * @return {?}
 */
function getCaretCoordinates(element, position, options) {
    if (!isBrowser) {
        throw new Error('textarea-caret-position#getCaretCoordinates should only be called in a browser');
    }
    /** @type {?} */
    var debug = (options && options.debug) || false;
    if (debug) {
        /** @type {?} */
        var el = document.querySelector('#input-textarea-caret-position-mirror-div');
        if (el) {
            (/** @type {?} */ (el.parentNode)).removeChild(el);
        }
    }
    // The mirror div will replicate the textarea's style
    /** @type {?} */
    var div = document.createElement('div');
    div.id = 'input-textarea-caret-position-mirror-div';
    document.body.appendChild(div);
    /** @type {?} */
    var style = div.style;
    // tslint:disable-next-line:no-any
    /** @type {?} */
    var computed = window.getComputedStyle ? window.getComputedStyle(element) : ((/** @type {?} */ (element))).currentStyle;
    // currentStyle for IE < 9
    /** @type {?} */
    var isInput = element.nodeName === 'INPUT';
    // Default textarea styles
    style.whiteSpace = 'pre-wrap';
    if (!isInput) {
        style.wordWrap = 'break-word'; // only for textarea-s
    }
    // Position off-screen
    style.position = 'absolute'; // required to return coordinates properly
    if (!debug) {
        style.visibility = 'hidden';
    } // not 'display: none' because we want rendering
    // Transfer the element's properties to the div
    properties.forEach((/**
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        if (isInput && prop === 'lineHeight') {
            // Special case for <input>s because text is rendered centered and line height may be != height
            style.lineHeight = computed.height;
        }
        else {
            // @ts-ignore
            style[prop] = computed[prop];
        }
    }));
    if (isFirefox) {
        // Firefox lies about the overflow property for textareas: https://bugzilla.mozilla.org/show_bug.cgi?id=984275
        if (element.scrollHeight > _parseInt(computed.height)) {
            style.overflowY = 'scroll';
        }
    }
    else {
        style.overflow = 'hidden'; // for Chrome to not render a scrollbar; IE keeps overflowY = 'scroll'
    }
    div.textContent = element.value.substring(0, position);
    // The second special handling for input type="text" vs textarea:
    // spaces need to be replaced with non-breaking spaces - http://stackoverflow.com/a/13402035/1269037
    if (isInput) {
        div.textContent = div.textContent.replace(/\s/g, '\u00a0');
    }
    /** @type {?} */
    var span = document.createElement('span');
    // Wrapping must be replicated *exactly*, including when a long word gets
    // onto the next line, with whitespace at the end of the line before (#7).
    // The  *only* reliable way to do that is to copy the *entire* rest of the
    // textarea's content into the <span> created at the caret position.
    // For inputs, just '.' would be enough, but no need to bother.
    span.textContent = element.value.substring(position) || '.'; // || because a completely empty faux span doesn't render at all
    div.appendChild(span);
    /** @type {?} */
    var coordinates = {
        top: span.offsetTop + _parseInt(computed.borderTopWidth),
        left: span.offsetLeft + _parseInt(computed.borderLeftWidth),
        height: _parseInt(computed.lineHeight)
    };
    if (debug) {
        span.style.backgroundColor = '#eee';
        createDebugEle(element, coordinates);
    }
    else {
        document.body.removeChild(div);
    }
    return coordinates;
}
/**
 * @param {?} element
 * @param {?} coordinates
 * @return {?}
 */
function createDebugEle(element, coordinates) {
    /** @type {?} */
    var fontSize = getComputedStyle(element).getPropertyValue('font-size');
    /** @type {?} */
    var rect = ((/** @type {?} */ (document.querySelector('#DEBUG')))) || document.createElement('div');
    document.body.appendChild(rect);
    rect.id = 'DEBUG';
    rect.style.position = 'absolute';
    rect.style.backgroundColor = 'red';
    rect.style.height = fontSize;
    rect.style.width = '1px';
    rect.style.top = element.getBoundingClientRect().top -
        element.scrollTop +
        window.pageYOffset +
        coordinates.top + "px";
    rect.style.left = element.getBoundingClientRect().left -
        element.scrollLeft +
        window.pageXOffset +
        coordinates.left + "px";
}

/**
 * @fileoverview added by tsickle
 * Generated from: util/style.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @param {?} styleName
 * @return {?}
 */
function isStyleSupport(styleName) {
    if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
        /** @type {?} */
        var styleNameList = Array.isArray(styleName) ? styleName : [styleName];
        var documentElement_1 = window.document.documentElement;
        return styleNameList.some((/**
         * @param {?} name
         * @return {?}
         */
        function (name) { return name in documentElement_1.style; }));
    }
    return false;
}
/**
 * @param {?=} styles
 * @return {?}
 */
function getStyleAsText(styles) {
    if (!styles) {
        return '';
    }
    return Object.keys(styles)
        .map((/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var val = styles[key];
        return key + ":" + (typeof val === 'string' ? val : val + 'px');
    }))
        .join(';');
}

/**
 * @fileoverview added by tsickle
 * Generated from: util/text-measure.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @record
 */
function MeasureResult() { }
if (false) {
    /** @type {?} */
    MeasureResult.prototype.finished;
    /** @type {?} */
    MeasureResult.prototype.node;
}
// We only handle element & text node.
/** @type {?} */
var ELEMENT_NODE = 1;
/** @type {?} */
var TEXT_NODE = 3;
/** @type {?} */
var COMMENT_NODE = 8;
/** @type {?} */
var ellipsisContainer;
/** @type {?} */
var wrapperStyle = {
    padding: '0',
    margin: '0',
    display: 'inline',
    lineHeight: 'inherit'
};
/**
 * @param {?} value
 * @return {?}
 */
function pxToNumber(value) {
    if (!value) {
        return 0;
    }
    /** @type {?} */
    var match = value.match(/^\d*(\.\d*)?/);
    return match ? Number(match[0]) : 0;
}
/**
 * @param {?} style
 * @return {?}
 */
function styleToString(style) {
    // There are some different behavior between Firefox & Chrome.
    // We have to handle this ourself.
    /** @type {?} */
    var styleNames = Array.prototype.slice.apply(style);
    return styleNames.map((/**
     * @param {?} name
     * @return {?}
     */
    function (name) { return name + ": " + style.getPropertyValue(name) + ";"; })).join('');
}
/**
 * @param {?} children
 * @return {?}
 */
function mergeChildren(children) {
    /** @type {?} */
    var childList = [];
    children.forEach((/**
     * @param {?} child
     * @return {?}
     */
    function (child) {
        /** @type {?} */
        var prevChild = childList[childList.length - 1];
        if (prevChild && child.nodeType === TEXT_NODE && prevChild.nodeType === TEXT_NODE) {
            ((/** @type {?} */ (prevChild))).data += ((/** @type {?} */ (child))).data;
        }
        else {
            childList.push(child);
        }
    }));
    return childList;
}
/**
 * @param {?} originEle
 * @param {?} rows
 * @param {?} contentNodes
 * @param {?} fixedContent
 * @param {?} ellipsisStr
 * @return {?}
 */
function measure(originEle, rows, contentNodes, fixedContent, ellipsisStr) {
    if (!ellipsisContainer) {
        ellipsisContainer = document.createElement('div');
        ellipsisContainer.setAttribute('aria-hidden', 'true');
        document.body.appendChild(ellipsisContainer);
    }
    // Get origin style
    /** @type {?} */
    var originStyle = window.getComputedStyle(originEle);
    /** @type {?} */
    var originCSS = styleToString(originStyle);
    /** @type {?} */
    var lineHeight = pxToNumber(originStyle.lineHeight);
    /** @type {?} */
    var maxHeight = lineHeight * (rows + 1) + pxToNumber(originStyle.paddingTop) + pxToNumber(originStyle.paddingBottom);
    // Set shadow
    ellipsisContainer.setAttribute('style', originCSS);
    ellipsisContainer.style.position = 'fixed';
    ellipsisContainer.style.left = '0';
    ellipsisContainer.style.height = 'auto';
    ellipsisContainer.style.minHeight = 'auto';
    ellipsisContainer.style.maxHeight = 'auto';
    ellipsisContainer.style.top = '-999999px';
    ellipsisContainer.style.zIndex = '-1000';
    // clean up css overflow
    ellipsisContainer.style.textOverflow = 'clip';
    ellipsisContainer.style.whiteSpace = 'normal';
    // tslint:disable-next-line no-any
    ((/** @type {?} */ (ellipsisContainer.style))).webkitLineClamp = 'none';
    /** @type {?} */
    var contentList = mergeChildren(contentNodes);
    /** @type {?} */
    var container = document.createElement('div');
    /** @type {?} */
    var contentContainer = document.createElement('span');
    /** @type {?} */
    var fixedContainer = document.createElement('span');
    // Add styles in container
    Object.assign(container.style, wrapperStyle);
    Object.assign(contentContainer.style, wrapperStyle);
    Object.assign(fixedContainer.style, wrapperStyle);
    contentList.forEach((/**
     * @param {?} n
     * @return {?}
     */
    function (n) {
        contentContainer.appendChild(n);
    }));
    fixedContent.forEach((/**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        fixedContainer.appendChild(node.cloneNode(true));
    }));
    container.appendChild(contentContainer);
    container.appendChild(fixedContainer);
    // Render in the fake container
    ellipsisContainer.appendChild(container);
    // Check if ellipsis in measure div is height enough for content
    /**
     * @return {?}
     */
    function inRange() {
        return ellipsisContainer.offsetHeight < maxHeight;
    }
    if (inRange()) {
        /** @type {?} */
        var text = ellipsisContainer.innerHTML;
        ellipsisContainer.removeChild(container);
        return { contentNodes: contentNodes, text: text, ellipsis: false };
    }
    // We should clone the childNode since they're controlled by React and we can't reuse it without warning
    /** @type {?} */
    var childNodes = Array.prototype.slice
        .apply(ellipsisContainer.childNodes[0].childNodes[0].cloneNode(true).childNodes)
        .filter((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var nodeType = _a.nodeType;
        return nodeType !== COMMENT_NODE;
    }));
    /** @type {?} */
    var fixedNodes = Array.prototype.slice.apply(ellipsisContainer.childNodes[0].childNodes[1].cloneNode(true).childNodes);
    ellipsisContainer.removeChild(container);
    // ========================= Find match ellipsis content =========================
    ellipsisContainer.innerHTML = '';
    // Create origin content holder
    /** @type {?} */
    var ellipsisContentHolder = document.createElement('span');
    ellipsisContainer.appendChild(ellipsisContentHolder);
    /** @type {?} */
    var ellipsisTextNode = document.createTextNode(ellipsisStr);
    ellipsisContentHolder.appendChild(ellipsisTextNode);
    fixedNodes.forEach((/**
     * @param {?} childNode
     * @return {?}
     */
    function (childNode) {
        ellipsisContainer.appendChild(childNode);
    }));
    // Append before fixed nodes
    /**
     * @param {?} node
     * @return {?}
     */
    function appendChildNode(node) {
        ellipsisContentHolder.insertBefore(node, ellipsisTextNode);
    }
    // Get maximum text
    /**
     * @param {?} textNode
     * @param {?} fullText
     * @param {?=} startLoc
     * @param {?=} endLoc
     * @param {?=} lastSuccessLoc
     * @return {?}
     */
    function measureText(textNode, fullText, startLoc, endLoc, lastSuccessLoc) {
        if (startLoc === void 0) { startLoc = 0; }
        if (endLoc === void 0) { endLoc = fullText.length; }
        if (lastSuccessLoc === void 0) { lastSuccessLoc = 0; }
        /** @type {?} */
        var midLoc = Math.floor((startLoc + endLoc) / 2);
        /** @type {?} */
        var currentText = fullText.slice(0, midLoc);
        textNode.textContent = currentText;
        if (startLoc >= endLoc - 1) {
            // Loop when step is small
            for (var step = endLoc; step >= startLoc; step -= 1) {
                /** @type {?} */
                var currentStepText = fullText.slice(0, step);
                textNode.textContent = currentStepText;
                if (inRange()) {
                    return step === fullText.length
                        ? {
                            finished: false,
                            node: document.createTextNode(fullText)
                        }
                        : {
                            finished: true,
                            node: document.createTextNode(currentStepText)
                        };
                }
            }
        }
        if (inRange()) {
            return measureText(textNode, fullText, midLoc, endLoc, midLoc);
        }
        else {
            return measureText(textNode, fullText, startLoc, midLoc, lastSuccessLoc);
        }
    }
    /**
     * @param {?} childNode
     * @param {?} index
     * @return {?}
     */
    function measureNode(childNode, index) {
        /** @type {?} */
        var type = childNode.nodeType;
        if (type === ELEMENT_NODE) {
            // We don't split element, it will keep if whole element can be displayed.
            // appendChildNode(childNode);
            if (inRange()) {
                return {
                    finished: false,
                    node: contentList[index]
                };
            }
            // Clean up if can not pull in
            ellipsisContentHolder.removeChild(childNode);
            return {
                finished: true,
                node: null
            };
        }
        else if (type === TEXT_NODE) {
            /** @type {?} */
            var fullText = childNode.textContent || '';
            /** @type {?} */
            var textNode = document.createTextNode(fullText);
            appendChildNode(textNode);
            return measureText(textNode, fullText);
        }
        // Not handle other type of content
        // PS: This code should not be attached after react 16
        return {
            finished: false,
            node: null
        };
    }
    /** @type {?} */
    var ellipsisNodes = [];
    childNodes.some((/**
     * @param {?} childNode
     * @param {?} index
     * @return {?}
     */
    function (childNode, index) {
        var _a = measureNode(childNode, index), finished = _a.finished, node = _a.node;
        if (node) {
            ellipsisNodes.push(node);
        }
        return finished;
    }));
    /** @type {?} */
    var result = {
        contentNodes: ellipsisNodes,
        text: ellipsisContainer.innerHTML,
        ellipsis: true
    };
    while (ellipsisContainer.firstChild) {
        ellipsisContainer.removeChild(ellipsisContainer.firstChild);
    }
    return result;
}

/**
 * @fileoverview added by tsickle
 * Generated from: util/measure-scrollbar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 * @type {?}
 */
var scrollbarVerticalSize;
/** @type {?} */
var scrollbarHorizontalSize;
// Measure scrollbar width for padding body during modal show/hide
/** @type {?} */
var scrollbarMeasure = {
    position: 'absolute',
    top: '-9999px',
    width: '50px',
    height: '50px'
};
/**
 * @param {?=} direction
 * @param {?=} prefix
 * @return {?}
 */
function measureScrollbar(direction, prefix) {
    if (direction === void 0) { direction = 'vertical'; }
    if (prefix === void 0) { prefix = 'ant'; }
    if (typeof document === 'undefined' || typeof window === 'undefined') {
        return 0;
    }
    /** @type {?} */
    var isVertical = direction === 'vertical';
    if (isVertical && scrollbarVerticalSize) {
        return scrollbarVerticalSize;
    }
    else if (!isVertical && scrollbarHorizontalSize) {
        return scrollbarHorizontalSize;
    }
    /** @type {?} */
    var scrollDiv = document.createElement('div');
    Object.keys(scrollbarMeasure).forEach((/**
     * @param {?} scrollProp
     * @return {?}
     */
    function (scrollProp) {
        // @ts-ignore
        scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
    }));
    // apply hide scrollbar className ahead
    scrollDiv.className = prefix + "-hide-scrollbar scroll-div-append-to-body";
    // Append related overflow style
    if (isVertical) {
        scrollDiv.style.overflowY = 'scroll';
    }
    else {
        scrollDiv.style.overflowX = 'scroll';
    }
    document.body.appendChild(scrollDiv);
    /** @type {?} */
    var size = 0;
    if (isVertical) {
        size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        scrollbarVerticalSize = size;
    }
    else {
        size = scrollDiv.offsetHeight - scrollDiv.clientHeight;
        scrollbarHorizontalSize = size;
    }
    document.body.removeChild(scrollDiv);
    return size;
}

/**
 * @fileoverview added by tsickle
 * Generated from: util/ensure-in-bounds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @param {?} value
 * @param {?} boundValue
 * @return {?}
 */
function ensureInBounds(value, boundValue) {
    return value ? (value < boundValue ? value : boundValue) : boundValue;
}

/**
 * @fileoverview added by tsickle
 * Generated from: util/tick.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function inNextTick() {
    /** @type {?} */
    var timer = new Subject();
    Promise.resolve().then((/**
     * @return {?}
     */
    function () { return timer.next(); }));
    return timer.pipe(take(1));
}

/**
 * @fileoverview added by tsickle
 * Generated from: util/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: util/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: tree/nz-tree-base-util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @param {?} node
 * @return {?}
 */
function isCheckDisabled(node) {
    var isDisabled = node.isDisabled, isDisableCheckbox = node.isDisableCheckbox;
    return !!(isDisabled || isDisableCheckbox);
}
// tslint:disable-next-line:no-any
/**
 * @param {?} needle
 * @param {?} haystack
 * @return {?}
 */
function isInArray(needle, haystack) {
    return haystack.length > 0 && haystack.indexOf(needle) > -1;
}

/**
 * @fileoverview added by tsickle
 * Generated from: tree/nz-tree-base.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzTreeBaseService = /** @class */ (function () {
    function NzTreeBaseService() {
        this.DRAG_SIDE_RANGE = 0.25;
        this.DRAG_MIN_GAP = 2;
        this.isCheckStrictly = false;
        this.isMultiple = false;
        this.rootNodes = [];
        this.selectedNodeList = [];
        this.expandedNodeList = [];
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        this.matchedNodeList = [];
        this.triggerEventChange$ = new Subject();
    }
    /**
     * trigger event
     */
    /**
     * trigger event
     * @return {?}
     */
    NzTreeBaseService.prototype.eventTriggerChanged = /**
     * trigger event
     * @return {?}
     */
    function () {
        return this.triggerEventChange$.asObservable();
    };
    /**
     * reset tree nodes will clear default node list
     */
    /**
     * reset tree nodes will clear default node list
     * @param {?} nzNodes
     * @return {?}
     */
    NzTreeBaseService.prototype.initTree = /**
     * reset tree nodes will clear default node list
     * @param {?} nzNodes
     * @return {?}
     */
    function (nzNodes) {
        var _this = this;
        this.rootNodes = nzNodes;
        this.expandedNodeList = [];
        this.selectedNodeList = [];
        this.halfCheckedNodeList = [];
        this.checkedNodeList = [];
        this.matchedNodeList = [];
        // refresh node checked state
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.refreshCheckState(_this.isCheckStrictly);
        }));
    };
    /**
     * @return {?}
     */
    NzTreeBaseService.prototype.getSelectedNode = /**
     * @return {?}
     */
    function () {
        return this.selectedNode;
    };
    /**
     * get some list
     */
    /**
     * get some list
     * @return {?}
     */
    NzTreeBaseService.prototype.getSelectedNodeList = /**
     * get some list
     * @return {?}
     */
    function () {
        return this.conductNodeState('select');
    };
    /**
     * return checked nodes
     */
    /**
     * return checked nodes
     * @return {?}
     */
    NzTreeBaseService.prototype.getCheckedNodeList = /**
     * return checked nodes
     * @return {?}
     */
    function () {
        return this.conductNodeState('check');
    };
    /**
     * @return {?}
     */
    NzTreeBaseService.prototype.getHalfCheckedNodeList = /**
     * @return {?}
     */
    function () {
        return this.conductNodeState('halfCheck');
    };
    /**
     * return expanded nodes
     */
    /**
     * return expanded nodes
     * @return {?}
     */
    NzTreeBaseService.prototype.getExpandedNodeList = /**
     * return expanded nodes
     * @return {?}
     */
    function () {
        return this.conductNodeState('expand');
    };
    /**
     * return search matched nodes
     */
    /**
     * return search matched nodes
     * @return {?}
     */
    NzTreeBaseService.prototype.getMatchedNodeList = /**
     * return search matched nodes
     * @return {?}
     */
    function () {
        return this.conductNodeState('match');
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeBaseService.prototype.isArrayOfNzTreeNode = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.every((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item instanceof NzTreeNode; }));
    };
    /**
     * reset selectedNodeList
     */
    /**
     * reset selectedNodeList
     * @param {?} selectedKeys
     * @param {?} nzNodes
     * @param {?=} isMulti
     * @return {?}
     */
    NzTreeBaseService.prototype.calcSelectedKeys = /**
     * reset selectedNodeList
     * @param {?} selectedKeys
     * @param {?} nzNodes
     * @param {?=} isMulti
     * @return {?}
     */
    function (selectedKeys, nzNodes, isMulti) {
        if (isMulti === void 0) { isMulti = false; }
        /** @type {?} */
        var calc = (/**
         * @param {?} nodes
         * @return {?}
         */
        function (nodes) {
            return nodes.every((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                if (isInArray(node.key, selectedKeys)) {
                    node.isSelected = true;
                    if (!isMulti) {
                        // if not support multi select
                        return false;
                    }
                }
                else {
                    node.isSelected = false;
                }
                if (node.children.length > 0) {
                    // Recursion
                    return calc(node.children);
                }
                return true;
            }));
        });
        calc(nzNodes);
    };
    /**
     * reset expandedNodeList
     */
    /**
     * reset expandedNodeList
     * @param {?} expandedKeys
     * @param {?} nzNodes
     * @return {?}
     */
    NzTreeBaseService.prototype.calcExpandedKeys = /**
     * reset expandedNodeList
     * @param {?} expandedKeys
     * @param {?} nzNodes
     * @return {?}
     */
    function (expandedKeys, nzNodes) {
        this.expandedNodeList = [];
        /** @type {?} */
        var calc = (/**
         * @param {?} nodes
         * @return {?}
         */
        function (nodes) {
            nodes.forEach((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                node.isExpanded = isInArray(node.key, expandedKeys);
                if (node.children.length > 0) {
                    calc(node.children);
                }
            }));
        });
        calc(nzNodes);
    };
    /**
     * reset checkedNodeList
     */
    /**
     * reset checkedNodeList
     * @param {?} checkedKeys
     * @param {?} nzNodes
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    NzTreeBaseService.prototype.calcCheckedKeys = /**
     * reset checkedNodeList
     * @param {?} checkedKeys
     * @param {?} nzNodes
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    function (checkedKeys, nzNodes, isCheckStrictly) {
        if (isCheckStrictly === void 0) { isCheckStrictly = false; }
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        /** @type {?} */
        var calc = (/**
         * @param {?} nodes
         * @return {?}
         */
        function (nodes) {
            nodes.forEach((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                if (isInArray(node.key, checkedKeys)) {
                    node.isChecked = true;
                    node.isHalfChecked = false;
                }
                else {
                    node.isChecked = false;
                    node.isHalfChecked = false;
                }
                if (node.children.length > 0) {
                    calc(node.children);
                }
            }));
        });
        calc(nzNodes);
        // controlled state
        this.refreshCheckState(isCheckStrictly);
    };
    /**
     * set drag node
     */
    /**
     * set drag node
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.setSelectedNode = /**
     * set drag node
     * @param {?} node
     * @return {?}
     */
    function (node) {
        this.selectedNode = node;
    };
    /**
     * set node selected status
     */
    /**
     * set node selected status
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.setNodeActive = /**
     * set node selected status
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (!this.isMultiple && node.isSelected) {
            this.selectedNodeList.forEach((/**
             * @param {?} n
             * @return {?}
             */
            function (n) {
                if (node.key !== n.key) {
                    // reset other nodes
                    n.isSelected = false;
                }
            }));
            // single mode: remove pre node
            this.selectedNodeList = [];
        }
        this.setSelectedNodeList(node, this.isMultiple);
    };
    /**
     * add or remove node to selectedNodeList
     */
    /**
     * add or remove node to selectedNodeList
     * @param {?} node
     * @param {?=} isMultiple
     * @return {?}
     */
    NzTreeBaseService.prototype.setSelectedNodeList = /**
     * add or remove node to selectedNodeList
     * @param {?} node
     * @param {?=} isMultiple
     * @return {?}
     */
    function (node, isMultiple) {
        if (isMultiple === void 0) { isMultiple = false; }
        /** @type {?} */
        var index = this.selectedNodeList.findIndex((/**
         * @param {?} n
         * @return {?}
         */
        function (n) { return node.key === n.key; }));
        if (isMultiple) {
            if (node.isSelected && index === -1) {
                this.selectedNodeList.push(node);
            }
        }
        else {
            if (node.isSelected && index === -1) {
                this.selectedNodeList = [node];
            }
        }
        if (!node.isSelected) {
            this.selectedNodeList = this.selectedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key !== node.key; }));
        }
    };
    /**
     * merge checked nodes
     */
    /**
     * merge checked nodes
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.setHalfCheckedNodeList = /**
     * merge checked nodes
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var index = this.halfCheckedNodeList.findIndex((/**
         * @param {?} n
         * @return {?}
         */
        function (n) { return node.key === n.key; }));
        if (node.isHalfChecked && index === -1) {
            this.halfCheckedNodeList.push(node);
        }
        else if (!node.isHalfChecked && index > -1) {
            this.halfCheckedNodeList = this.halfCheckedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return node.key !== n.key; }));
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.setCheckedNodeList = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var index = this.checkedNodeList.findIndex((/**
         * @param {?} n
         * @return {?}
         */
        function (n) { return node.key === n.key; }));
        if (node.isChecked && index === -1) {
            this.checkedNodeList.push(node);
        }
        else if (!node.isChecked && index > -1) {
            this.checkedNodeList = this.checkedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return node.key !== n.key; }));
        }
    };
    /**
     * conduct checked/selected/expanded keys
     */
    /**
     * conduct checked/selected/expanded keys
     * @param {?=} type
     * @return {?}
     */
    NzTreeBaseService.prototype.conductNodeState = /**
     * conduct checked/selected/expanded keys
     * @param {?=} type
     * @return {?}
     */
    function (type) {
        var _this = this;
        if (type === void 0) { type = 'check'; }
        /** @type {?} */
        var resultNodesList = [];
        switch (type) {
            case 'select':
                resultNodesList = this.selectedNodeList;
                break;
            case 'expand':
                resultNodesList = this.expandedNodeList;
                break;
            case 'match':
                resultNodesList = this.matchedNodeList;
                break;
            case 'check':
                resultNodesList = this.checkedNodeList;
                /** @type {?} */
                var isIgnore_1 = (/**
                 * @param {?} node
                 * @return {?}
                 */
                function (node) {
                    /** @type {?} */
                    var parentNode = node.getParentNode();
                    if (parentNode) {
                        if (_this.checkedNodeList.findIndex((/**
                         * @param {?} n
                         * @return {?}
                         */
                        function (n) { return n.key === parentNode.key; })) > -1) {
                            return true;
                        }
                        else {
                            return isIgnore_1(parentNode);
                        }
                    }
                    return false;
                });
                // merge checked
                if (!this.isCheckStrictly) {
                    resultNodesList = this.checkedNodeList.filter((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return !isIgnore_1(n); }));
                }
                break;
            case 'halfCheck':
                if (!this.isCheckStrictly) {
                    resultNodesList = this.halfCheckedNodeList;
                }
                break;
        }
        return resultNodesList;
    };
    /**
     * set expanded nodes
     */
    /**
     * set expanded nodes
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.setExpandedNodeList = /**
     * set expanded nodes
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (node.isLeaf) {
            return;
        }
        /** @type {?} */
        var index = this.expandedNodeList.findIndex((/**
         * @param {?} n
         * @return {?}
         */
        function (n) { return node.key === n.key; }));
        if (node.isExpanded && index === -1) {
            this.expandedNodeList.push(node);
        }
        else if (!node.isExpanded && index > -1) {
            this.expandedNodeList = this.expandedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return node.key !== n.key; }));
        }
    };
    /**
     * check state
     * @param isCheckStrictly
     */
    /**
     * check state
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    NzTreeBaseService.prototype.refreshCheckState = /**
     * check state
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    function (isCheckStrictly) {
        var _this = this;
        if (isCheckStrictly === void 0) { isCheckStrictly = false; }
        if (isCheckStrictly) {
            return;
        }
        this.checkedNodeList.forEach((/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            _this.conduct(node);
        }));
    };
    // reset other node checked state based current node
    // reset other node checked state based current node
    /**
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.conduct = 
    // reset other node checked state based current node
    /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var isChecked = node.isChecked;
        if (node) {
            this.conductUp(node);
            this.conductDown(node, isChecked);
        }
    };
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     */
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.conductUp = /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var parentNode = node.getParentNode();
        if (parentNode) {
            if (!isCheckDisabled(parentNode)) {
                if (parentNode.children.every((/**
                 * @param {?} child
                 * @return {?}
                 */
                function (child) { return isCheckDisabled(child) || (!child.isHalfChecked && child.isChecked); }))) {
                    parentNode.isChecked = true;
                    parentNode.isHalfChecked = false;
                }
                else if (parentNode.children.some((/**
                 * @param {?} child
                 * @return {?}
                 */
                function (child) { return child.isHalfChecked || child.isChecked; }))) {
                    parentNode.isChecked = false;
                    parentNode.isHalfChecked = true;
                }
                else {
                    parentNode.isChecked = false;
                    parentNode.isHalfChecked = false;
                }
            }
            this.setCheckedNodeList(parentNode);
            this.setHalfCheckedNodeList(parentNode);
            this.conductUp(parentNode);
        }
    };
    /**
     * reset child check state
     */
    /**
     * reset child check state
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    NzTreeBaseService.prototype.conductDown = /**
     * reset child check state
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    function (node, value) {
        var _this = this;
        if (!isCheckDisabled(node)) {
            node.isChecked = value;
            node.isHalfChecked = false;
            this.setCheckedNodeList(node);
            this.setHalfCheckedNodeList(node);
            node.children.forEach((/**
             * @param {?} n
             * @return {?}
             */
            function (n) {
                _this.conductDown(n, value);
            }));
        }
    };
    /**
     * search value & expand node
     * should add expandlist
     */
    /**
     * search value & expand node
     * should add expandlist
     * @param {?} value
     * @return {?}
     */
    NzTreeBaseService.prototype.searchExpand = /**
     * search value & expand node
     * should add expandlist
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.matchedNodeList = [];
        /** @type {?} */
        var expandedKeys = [];
        if (!isNotNil(value)) {
            return;
        }
        // to reset expandedNodeList
        /** @type {?} */
        var expandParent = (/**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            // expand parent node
            /** @type {?} */
            var parentNode = n.getParentNode();
            if (parentNode) {
                expandedKeys.push(parentNode.key);
                expandParent(parentNode);
            }
        });
        /** @type {?} */
        var searchChild = (/**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            if (value && n.title.includes(value)) {
                // match the node
                n.isMatched = true;
                _this.matchedNodeList.push(n);
                // expand parentNode
                expandParent(n);
            }
            else {
                n.isMatched = false;
            }
            n.canHide = !n.isMatched;
            n.children.forEach((/**
             * @param {?} child
             * @return {?}
             */
            function (child) {
                searchChild(child);
            }));
        });
        this.rootNodes.forEach((/**
         * @param {?} child
         * @return {?}
         */
        function (child) {
            searchChild(child);
        }));
        // expand matched keys
        this.calcExpandedKeys(expandedKeys, this.rootNodes);
    };
    /**
     * flush after delete node
     */
    /**
     * flush after delete node
     * @param {?} nodes
     * @return {?}
     */
    NzTreeBaseService.prototype.afterRemove = /**
     * flush after delete node
     * @param {?} nodes
     * @return {?}
     */
    function (nodes) {
        var _this = this;
        // to reset selectedNodeList & expandedNodeList
        /** @type {?} */
        var loopNode = (/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            // remove selected node
            _this.selectedNodeList = _this.selectedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key !== node.key; }));
            // remove expanded node
            _this.expandedNodeList = _this.expandedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key !== node.key; }));
            // remove checked node
            _this.checkedNodeList = _this.checkedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key !== node.key; }));
            if (node.children) {
                node.children.forEach((/**
                 * @param {?} child
                 * @return {?}
                 */
                function (child) {
                    loopNode(child);
                }));
            }
        });
        nodes.forEach((/**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            loopNode(n);
        }));
        this.refreshCheckState(this.isCheckStrictly);
    };
    /**
     * drag event
     */
    /**
     * drag event
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.refreshDragNode = /**
     * drag event
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var _this = this;
        if (node.children.length === 0) {
            // until root
            this.conductUp(node);
        }
        else {
            node.children.forEach((/**
             * @param {?} child
             * @return {?}
             */
            function (child) {
                _this.refreshDragNode(child);
            }));
        }
    };
    // reset node level
    // reset node level
    /**
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.resetNodeLevel = 
    // reset node level
    /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var e_1, _a;
        /** @type {?} */
        var parentNode = node.getParentNode();
        if (parentNode) {
            node.level = parentNode.level + 1;
        }
        else {
            node.level = 0;
        }
        try {
            for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                this.resetNodeLevel(child);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzTreeBaseService.prototype.calcDropPosition = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var clientY = event.clientY;
        // to fix firefox undefined
        var _a = event.srcElement
            ? ((/** @type {?} */ (event.srcElement))).getBoundingClientRect()
            : ((/** @type {?} */ (event.target))).getBoundingClientRect(), top = _a.top, bottom = _a.bottom, height = _a.height;
        /** @type {?} */
        var des = Math.max(height * this.DRAG_SIDE_RANGE, this.DRAG_MIN_GAP);
        if (clientY <= top + des) {
            return -1;
        }
        else if (clientY >= bottom - des) {
            return 1;
        }
        return 0;
    };
    /**
     * drop
     * 0: inner -1: pre 1: next
     */
    /**
     * drop
     * 0: inner -1: pre 1: next
     * @param {?} targetNode
     * @param {?=} dragPos
     * @return {?}
     */
    NzTreeBaseService.prototype.dropAndApply = /**
     * drop
     * 0: inner -1: pre 1: next
     * @param {?} targetNode
     * @param {?=} dragPos
     * @return {?}
     */
    function (targetNode, dragPos) {
        var _this = this;
        if (dragPos === void 0) { dragPos = -1; }
        if (!targetNode || dragPos > 1) {
            return;
        }
        /** @type {?} */
        var treeService = targetNode.treeService;
        /** @type {?} */
        var targetParent = targetNode.getParentNode();
        /** @type {?} */
        var isSelectedRootNode = this.selectedNode.getParentNode();
        // remove the dragNode
        if (isSelectedRootNode) {
            isSelectedRootNode.children = isSelectedRootNode.children.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key !== _this.selectedNode.key; }));
        }
        else {
            this.rootNodes = this.rootNodes.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key !== _this.selectedNode.key; }));
        }
        switch (dragPos) {
            case 0:
                targetNode.addChildren([this.selectedNode]);
                this.resetNodeLevel(targetNode);
                break;
            case -1:
            case 1:
                /** @type {?} */
                var tIndex = dragPos === 1 ? 1 : 0;
                if (targetParent) {
                    targetParent.addChildren([this.selectedNode], targetParent.children.indexOf(targetNode) + tIndex);
                    /** @type {?} */
                    var parentNode = this.selectedNode.getParentNode();
                    if (parentNode) {
                        this.resetNodeLevel(parentNode);
                    }
                }
                else {
                    /** @type {?} */
                    var targetIndex = this.rootNodes.indexOf(targetNode) + tIndex;
                    // Insert root node.
                    this.rootNodes.splice(targetIndex, 0, this.selectedNode);
                    this.rootNodes[targetIndex].parentNode = null;
                    this.rootNodes[targetIndex].level = 0;
                }
                break;
        }
        // flush all nodes
        this.rootNodes.forEach((/**
         * @param {?} child
         * @return {?}
         */
        function (child) {
            if (!child.treeService) {
                child.service = treeService;
            }
            _this.refreshDragNode(child);
        }));
    };
    /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     */
    /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     * @param {?} eventName
     * @param {?} node
     * @param {?} event
     * @return {?}
     */
    NzTreeBaseService.prototype.formatEvent = /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     * @param {?} eventName
     * @param {?} node
     * @param {?} event
     * @return {?}
     */
    function (eventName, node, event) {
        /** @type {?} */
        var emitStructure = {
            eventName: eventName,
            node: node,
            event: event
        };
        switch (eventName) {
            case 'dragstart':
            case 'dragenter':
            case 'dragover':
            case 'dragleave':
            case 'drop':
            case 'dragend':
                Object.assign(emitStructure, { dragNode: this.getSelectedNode() });
                break;
            case 'click':
            case 'dblclick':
                Object.assign(emitStructure, { selectedKeys: this.selectedNodeList });
                Object.assign(emitStructure, { nodes: this.selectedNodeList });
                Object.assign(emitStructure, { keys: this.selectedNodeList.map((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return n.key; })) });
                break;
            case 'check':
                /** @type {?} */
                var checkedNodeList = this.getCheckedNodeList();
                Object.assign(emitStructure, { checkedKeys: checkedNodeList });
                Object.assign(emitStructure, { nodes: checkedNodeList });
                Object.assign(emitStructure, { keys: checkedNodeList.map((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return n.key; })) });
                break;
            case 'search':
                Object.assign(emitStructure, { matchedKeys: this.getMatchedNodeList() });
                Object.assign(emitStructure, { nodes: this.getMatchedNodeList() });
                Object.assign(emitStructure, { keys: this.getMatchedNodeList().map((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return n.key; })) });
                break;
            case 'expand':
                Object.assign(emitStructure, { nodes: this.expandedNodeList });
                Object.assign(emitStructure, { keys: this.expandedNodeList.map((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return n.key; })) });
                break;
        }
        return emitStructure;
    };
    /**
     * @return {?}
     */
    NzTreeBaseService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.triggerEventChange$.complete();
    };
    NzTreeBaseService.decorators = [
        { type: Injectable }
    ];
    return NzTreeBaseService;
}());
if (false) {
    /** @type {?} */
    NzTreeBaseService.prototype.DRAG_SIDE_RANGE;
    /** @type {?} */
    NzTreeBaseService.prototype.DRAG_MIN_GAP;
    /** @type {?} */
    NzTreeBaseService.prototype.isCheckStrictly;
    /** @type {?} */
    NzTreeBaseService.prototype.isMultiple;
    /** @type {?} */
    NzTreeBaseService.prototype.selectedNode;
    /** @type {?} */
    NzTreeBaseService.prototype.rootNodes;
    /** @type {?} */
    NzTreeBaseService.prototype.selectedNodeList;
    /** @type {?} */
    NzTreeBaseService.prototype.expandedNodeList;
    /** @type {?} */
    NzTreeBaseService.prototype.checkedNodeList;
    /** @type {?} */
    NzTreeBaseService.prototype.halfCheckedNodeList;
    /** @type {?} */
    NzTreeBaseService.prototype.matchedNodeList;
    /** @type {?} */
    NzTreeBaseService.prototype.triggerEventChange$;
}

/**
 * @fileoverview added by tsickle
 * Generated from: tree/nz-tree-service.resolver.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NzTreeHigherOrderServiceToken = new InjectionToken('NzTreeHigherOrder');

/**
 * @fileoverview added by tsickle
 * Generated from: tree/nz-tree-base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzTreeBase = /** @class */ (function () {
    function NzTreeBase(nzTreeService) {
        this.nzTreeService = nzTreeService;
    }
    /**
     * Coerces a value({@link any[]}) to a TreeNodes({@link NzTreeNode[]})
     */
    /**
     * Coerces a value({\@link any[]}) to a TreeNodes({\@link NzTreeNode[]})
     * @param {?} value
     * @return {?}
     */
    NzTreeBase.prototype.coerceTreeNodes = /**
     * Coerces a value({\@link any[]}) to a TreeNodes({\@link NzTreeNode[]})
     * @param {?} value
     * @return {?}
     */
    function (
    // tslint:disable-next-line:no-any
    value) {
        var _this = this;
        /** @type {?} */
        var nodes = [];
        if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
            // has not been new NzTreeNode
            nodes = value.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return new NzTreeNode(item, null, _this.nzTreeService); }));
        }
        else {
            nodes = value.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                item.service = _this.nzTreeService;
                return item;
            }));
        }
        return nodes;
    };
    /**
     * Get all nodes({@link NzTreeNode})
     */
    /**
     * Get all nodes({\@link NzTreeNode})
     * @return {?}
     */
    NzTreeBase.prototype.getTreeNodes = /**
     * Get all nodes({\@link NzTreeNode})
     * @return {?}
     */
    function () {
        return this.nzTreeService.rootNodes;
    };
    /**
     * Get {@link NzTreeNode} with key
     */
    /**
     * Get {\@link NzTreeNode} with key
     * @param {?} key
     * @return {?}
     */
    NzTreeBase.prototype.getTreeNodeByKey = /**
     * Get {\@link NzTreeNode} with key
     * @param {?} key
     * @return {?}
     */
    function (key) {
        // flat tree nodes
        /** @type {?} */
        var nodes = [];
        /** @type {?} */
        var getNode = (/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            nodes.push(node);
            node.getChildren().forEach((/**
             * @param {?} n
             * @return {?}
             */
            function (n) {
                getNode(n);
            }));
        });
        this.getTreeNodes().forEach((/**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            getNode(n);
        }));
        return nodes.find((/**
         * @param {?} n
         * @return {?}
         */
        function (n) { return n.key === key; })) || null;
    };
    /**
     * Get checked nodes(merged)
     */
    /**
     * Get checked nodes(merged)
     * @return {?}
     */
    NzTreeBase.prototype.getCheckedNodeList = /**
     * Get checked nodes(merged)
     * @return {?}
     */
    function () {
        return this.nzTreeService.getCheckedNodeList();
    };
    /**
     * Get selected nodes
     */
    /**
     * Get selected nodes
     * @return {?}
     */
    NzTreeBase.prototype.getSelectedNodeList = /**
     * Get selected nodes
     * @return {?}
     */
    function () {
        return this.nzTreeService.getSelectedNodeList();
    };
    /**
     * Get half checked nodes
     */
    /**
     * Get half checked nodes
     * @return {?}
     */
    NzTreeBase.prototype.getHalfCheckedNodeList = /**
     * Get half checked nodes
     * @return {?}
     */
    function () {
        return this.nzTreeService.getHalfCheckedNodeList();
    };
    /**
     * Get expanded nodes
     */
    /**
     * Get expanded nodes
     * @return {?}
     */
    NzTreeBase.prototype.getExpandedNodeList = /**
     * Get expanded nodes
     * @return {?}
     */
    function () {
        return this.nzTreeService.getExpandedNodeList();
    };
    /**
     * Get matched nodes(if nzSearchValue is not null)
     */
    /**
     * Get matched nodes(if nzSearchValue is not null)
     * @return {?}
     */
    NzTreeBase.prototype.getMatchedNodeList = /**
     * Get matched nodes(if nzSearchValue is not null)
     * @return {?}
     */
    function () {
        return this.nzTreeService.getMatchedNodeList();
    };
    return NzTreeBase;
}());
if (false) {
    /** @type {?} */
    NzTreeBase.prototype.nzTreeService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: tree/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: types/common-wrap.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * @fileoverview added by tsickle
 * Generated from: types/direction.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * @fileoverview added by tsickle
 * Generated from: types/drop-down-position.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * @fileoverview added by tsickle
 * Generated from: types/indexable.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @record
 */
function IndexableObject() { }

/**
 * @fileoverview added by tsickle
 * Generated from: types/ng-class.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @record
 */
function NgClassInterface() { }
/**
 * @record
 */
function NgStyleInterface() { }

/**
 * @fileoverview added by tsickle
 * Generated from: types/size.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @record
 */
function NzSizeMap() { }

/**
 * @fileoverview added by tsickle
 * Generated from: types/template.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * @fileoverview added by tsickle
 * Generated from: types/shape.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * @fileoverview added by tsickle
 * Generated from: types/compare-with.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * @fileoverview added by tsickle
 * Generated from: types/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: wave/nz-wave-renderer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzWaveRenderer = /** @class */ (function () {
    function NzWaveRenderer(triggerElement, ngZone, insertExtraNode) {
        var _this = this;
        this.triggerElement = triggerElement;
        this.ngZone = ngZone;
        this.insertExtraNode = insertExtraNode;
        this.waveTransitionDuration = 400;
        this.lastTime = 0;
        this.platform = new Platform();
        this.onClick = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (!_this.triggerElement ||
                !_this.triggerElement.getAttribute ||
                _this.triggerElement.getAttribute('disabled') ||
                ((/** @type {?} */ (event.target))).tagName === 'INPUT' ||
                _this.triggerElement.className.indexOf('disabled') >= 0) {
                return;
            }
            _this.fadeOutWave();
        });
        this.clickHandler = this.onClick.bind(this);
        this.bindTriggerEvent();
    }
    Object.defineProperty(NzWaveRenderer.prototype, "waveAttributeName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.insertExtraNode ? 'ant-click-animating' : 'ant-click-animating-without-extra-node';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzWaveRenderer.prototype.bindTriggerEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.removeTriggerEvent();
                if (_this.triggerElement) {
                    _this.triggerElement.addEventListener('click', _this.clickHandler, true);
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    NzWaveRenderer.prototype.removeTriggerEvent = /**
     * @return {?}
     */
    function () {
        if (this.triggerElement) {
            this.triggerElement.removeEventListener('click', this.clickHandler, true);
        }
    };
    /**
     * @return {?}
     */
    NzWaveRenderer.prototype.removeStyleAndExtraNode = /**
     * @return {?}
     */
    function () {
        if (this.styleForPseudo && document.body.contains(this.styleForPseudo)) {
            document.body.removeChild(this.styleForPseudo);
            this.styleForPseudo = null;
        }
        if (this.insertExtraNode && this.triggerElement.contains(this.extraNode)) {
            this.triggerElement.removeChild((/** @type {?} */ (this.extraNode)));
        }
    };
    /**
     * @return {?}
     */
    NzWaveRenderer.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.removeTriggerEvent();
        this.removeStyleAndExtraNode();
    };
    /**
     * @private
     * @return {?}
     */
    NzWaveRenderer.prototype.fadeOutWave = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var node = this.triggerElement;
        /** @type {?} */
        var waveColor = this.getWaveColor(node);
        node.setAttribute(this.waveAttributeName, 'true');
        if (Date.now() < this.lastTime + this.waveTransitionDuration) {
            return;
        }
        if (this.isValidColor(waveColor)) {
            if (!this.styleForPseudo) {
                this.styleForPseudo = document.createElement('style');
            }
            this.styleForPseudo.innerHTML = "\n      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {\n        --antd-wave-shadow-color: " + waveColor + ";\n      }";
            document.body.appendChild(this.styleForPseudo);
        }
        if (this.insertExtraNode) {
            if (!this.extraNode) {
                this.extraNode = document.createElement('div');
            }
            this.extraNode.className = 'ant-click-animating-node';
            node.appendChild(this.extraNode);
        }
        this.lastTime = Date.now();
        this.runTimeoutOutsideZone((/**
         * @return {?}
         */
        function () {
            node.removeAttribute(_this.waveAttributeName);
            _this.removeStyleAndExtraNode();
        }), this.waveTransitionDuration);
    };
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    NzWaveRenderer.prototype.isValidColor = /**
     * @private
     * @param {?} color
     * @return {?}
     */
    function (color) {
        return (!!color &&
            color !== '#ffffff' &&
            color !== 'rgb(255, 255, 255)' &&
            this.isNotGrey(color) &&
            !/rgba\(\d*, \d*, \d*, 0\)/.test(color) &&
            color !== 'transparent');
    };
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    NzWaveRenderer.prototype.isNotGrey = /**
     * @private
     * @param {?} color
     * @return {?}
     */
    function (color) {
        /** @type {?} */
        var match = color.match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
        if (match && match[1] && match[2] && match[3]) {
            return !(match[1] === match[2] && match[2] === match[3]);
        }
        return true;
    };
    /**
     * @private
     * @param {?} node
     * @return {?}
     */
    NzWaveRenderer.prototype.getWaveColor = /**
     * @private
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var nodeStyle = getComputedStyle(node);
        return (nodeStyle.getPropertyValue('border-top-color') || // Firefox Compatible
            nodeStyle.getPropertyValue('border-color') ||
            nodeStyle.getPropertyValue('background-color'));
    };
    /**
     * @private
     * @param {?} fn
     * @param {?} delay
     * @return {?}
     */
    NzWaveRenderer.prototype.runTimeoutOutsideZone = /**
     * @private
     * @param {?} fn
     * @param {?} delay
     * @return {?}
     */
    function (fn, delay) {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return setTimeout(fn, delay); }));
    };
    return NzWaveRenderer;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzWaveRenderer.prototype.waveTransitionDuration;
    /**
     * @type {?}
     * @private
     */
    NzWaveRenderer.prototype.styleForPseudo;
    /**
     * @type {?}
     * @private
     */
    NzWaveRenderer.prototype.extraNode;
    /**
     * @type {?}
     * @private
     */
    NzWaveRenderer.prototype.lastTime;
    /**
     * @type {?}
     * @private
     */
    NzWaveRenderer.prototype.platform;
    /** @type {?} */
    NzWaveRenderer.prototype.clickHandler;
    /** @type {?} */
    NzWaveRenderer.prototype.onClick;
    /**
     * @type {?}
     * @private
     */
    NzWaveRenderer.prototype.triggerElement;
    /**
     * @type {?}
     * @private
     */
    NzWaveRenderer.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzWaveRenderer.prototype.insertExtraNode;
}

/**
 * @fileoverview added by tsickle
 * Generated from: wave/nz-wave.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NzWaveConfig() { }
if (false) {
    /** @type {?|undefined} */
    NzWaveConfig.prototype.disabled;
}
/** @type {?} */
var NZ_WAVE_GLOBAL_DEFAULT_CONFIG = {
    disabled: false
};
/** @type {?} */
var NZ_WAVE_GLOBAL_CONFIG = new InjectionToken('nz-wave-global-options', {
    providedIn: 'root',
    factory: NZ_WAVE_GLOBAL_CONFIG_FACTORY
});
/**
 * @return {?}
 */
function NZ_WAVE_GLOBAL_CONFIG_FACTORY() {
    return NZ_WAVE_GLOBAL_DEFAULT_CONFIG;
}
var NzWaveDirective = /** @class */ (function () {
    function NzWaveDirective(ngZone, elementRef, config, animationType) {
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.config = config;
        this.animationType = animationType;
        this.nzWaveExtraNode = false;
        this.waveDisabled = false;
        this.waveDisabled = this.isConfigDisabled();
    }
    Object.defineProperty(NzWaveDirective.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.waveDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzWaveDirective.prototype, "rendererRef", {
        get: /**
         * @return {?}
         */
        function () {
            return this.waveRenderer;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.isConfigDisabled = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var disabled = false;
        if (this.config && typeof this.config.disabled === 'boolean') {
            disabled = this.config.disabled;
        }
        if (this.animationType === 'NoopAnimations') {
            disabled = true;
        }
        return disabled;
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.waveRenderer) {
            this.waveRenderer.destroy();
        }
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderWaveIfEnabled();
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.renderWaveIfEnabled = /**
     * @return {?}
     */
    function () {
        if (!this.waveDisabled && this.elementRef.nativeElement) {
            this.waveRenderer = new NzWaveRenderer(this.elementRef.nativeElement, this.ngZone, this.nzWaveExtraNode);
        }
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.disable = /**
     * @return {?}
     */
    function () {
        this.waveDisabled = true;
        if (this.waveRenderer) {
            this.waveRenderer.removeTriggerEvent();
            this.waveRenderer.removeStyleAndExtraNode();
        }
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.enable = /**
     * @return {?}
     */
    function () {
        // config priority
        this.waveDisabled = this.isConfigDisabled() || false;
        if (this.waveRenderer) {
            this.waveRenderer.bindTriggerEvent();
        }
    };
    NzWaveDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-wave]',
                    exportAs: 'nzWave'
                },] }
    ];
    /** @nocollapse */
    NzWaveDirective.ctorParameters = function () { return [
        { type: NgZone },
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_WAVE_GLOBAL_CONFIG,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ]; };
    NzWaveDirective.propDecorators = {
        nzWaveExtraNode: [{ type: Input }]
    };
    return NzWaveDirective;
}());
if (false) {
    /** @type {?} */
    NzWaveDirective.prototype.nzWaveExtraNode;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.waveRenderer;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.waveDisabled;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.config;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.animationType;
}

/**
 * @fileoverview added by tsickle
 * Generated from: wave/nz-wave.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzWaveModule = /** @class */ (function () {
    function NzWaveModule() {
    }
    NzWaveModule.decorators = [
        { type: NgModule, args: [{
                    imports: [PlatformModule],
                    exports: [NzWaveDirective],
                    declarations: [NzWaveDirective]
                },] }
    ];
    return NzWaveModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: wave/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: dropdown/nz-menu-base.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzMenuBaseService = /** @class */ (function () {
    function NzMenuBaseService() {
        this.menuItemClick$ = new Subject(); // tslint:disable-line no-any
        // tslint:disable-line no-any
        this.theme$ = new Subject();
        this.mode$ = new BehaviorSubject('vertical');
        this.inlineIndent$ = new BehaviorSubject(24);
        this.theme = 'light';
        this.mode = 'vertical';
        this.inlineIndent = 24;
        this.menuOpen$ = new BehaviorSubject(false);
    }
    // tslint:disable-next-line no-any
    // tslint:disable-next-line no-any
    /**
     * @param {?} menu
     * @return {?}
     */
    NzMenuBaseService.prototype.onMenuItemClick = 
    // tslint:disable-next-line no-any
    /**
     * @param {?} menu
     * @return {?}
     */
    function (menu) {
        this.menuItemClick$.next(menu);
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    NzMenuBaseService.prototype.setMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.mode = mode;
        this.mode$.next(mode);
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    NzMenuBaseService.prototype.setTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        this.theme = theme;
        this.theme$.next(theme);
    };
    /**
     * @param {?} indent
     * @return {?}
     */
    NzMenuBaseService.prototype.setInlineIndent = /**
     * @param {?} indent
     * @return {?}
     */
    function (indent) {
        this.inlineIndent = indent;
        this.inlineIndent$.next(indent);
    };
    NzMenuBaseService.decorators = [
        { type: Injectable }
    ];
    return NzMenuBaseService;
}());
if (false) {
    /** @type {?} */
    NzMenuBaseService.prototype.isInDropDown;
    /** @type {?} */
    NzMenuBaseService.prototype.menuItemClick$;
    /** @type {?} */
    NzMenuBaseService.prototype.theme$;
    /** @type {?} */
    NzMenuBaseService.prototype.mode$;
    /** @type {?} */
    NzMenuBaseService.prototype.inlineIndent$;
    /** @type {?} */
    NzMenuBaseService.prototype.theme;
    /** @type {?} */
    NzMenuBaseService.prototype.mode;
    /** @type {?} */
    NzMenuBaseService.prototype.inlineIndent;
    /** @type {?} */
    NzMenuBaseService.prototype.menuOpen$;
}

/**
 * @fileoverview added by tsickle
 * Generated from: dropdown/nz-dropdown-service.resolver.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NzDropdownHigherOrderServiceToken = new InjectionToken('NzMenuHigherOrder');

/**
 * @fileoverview added by tsickle
 * Generated from: dropdown/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: responsive/nz-breakpoint.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** @enum {string} */
var NzBreakpoint = {
    xxl: "xxl",
    xl: "xl",
    lg: "lg",
    md: "md",
    sm: "sm",
    xs: "xs",
};
/** @type {?} */
var responsiveMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)'
};

/**
 * @fileoverview added by tsickle
 * Generated from: responsive/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: trans-button/nz-trans-button.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzTransButtonDirective = /** @class */ (function () {
    function NzTransButtonDirective() {
    }
    NzTransButtonDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'button[nz-trans-button]',
                    host: {
                        '[style.border]': '"0"',
                        '[style.background]': '"transparent"',
                        '[style.padding]': '"0"',
                        '[style.line-height]': '"inherit"'
                    }
                },] }
    ];
    return NzTransButtonDirective;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: trans-button/nz-trans-button.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzTransButtonModule = /** @class */ (function () {
    function NzTransButtonModule() {
    }
    NzTransButtonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzTransButtonDirective],
                    exports: [NzTransButtonDirective],
                    imports: [CommonModule]
                },] }
    ];
    return NzTransButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: trans-button/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: highlight/highlight.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Regular Expressions for parsing tags and attributes
/** @type {?} */
var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
// ! to ~ is the ASCII range.
/** @type {?} */
var NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
/**
 * Escapes all potentially dangerous characters, so that the
 * resulting string can be safely inserted into attribute or
 * element text.
 * @param {?} value
 * @return {?}
 */
function encodeEntities(value) {
    return value
        .replace(/&/g, '&amp;')
        .replace(SURROGATE_PAIR_REGEXP, (/**
     * @param {?} match
     * @return {?}
     */
    function (match) {
        /** @type {?} */
        var hi = match.charCodeAt(0);
        /** @type {?} */
        var low = match.charCodeAt(1);
        return "&#" + ((hi - 0xD800) * 0x400 + (low - 0xDC00) + 0x10000) + ";";
    }))
        .replace(NON_ALPHANUMERIC_REGEXP, (/**
     * @param {?} match
     * @return {?}
     */
    function (match) { return "&#" + match.charCodeAt(0) + ";"; }))
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
var NzHighlightPipe = /** @class */ (function () {
    function NzHighlightPipe() {
        this.UNIQUE_WRAPPERS = ['##==-open_tag-==##', '##==-close_tag-==##'];
    }
    /**
     * @param {?} value
     * @param {?} highlightValue
     * @param {?=} flags
     * @param {?=} klass
     * @return {?}
     */
    NzHighlightPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} highlightValue
     * @param {?=} flags
     * @param {?=} klass
     * @return {?}
     */
    function (value, highlightValue, flags, klass) {
        if (!highlightValue) {
            return value;
        }
        // Escapes regex keyword to interpret these characters literally
        /** @type {?} */
        var searchValue = new RegExp(highlightValue.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$&'), flags);
        /** @type {?} */
        var wrapValue = value.replace(searchValue, this.UNIQUE_WRAPPERS[0] + "$&" + this.UNIQUE_WRAPPERS[1]);
        return encodeEntities(wrapValue)
            .replace(new RegExp(this.UNIQUE_WRAPPERS[0], 'g'), klass ? "<span class=\"" + klass + "\">" : '<span>')
            .replace(new RegExp(this.UNIQUE_WRAPPERS[1], 'g'), '</span>');
    };
    NzHighlightPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'nzHighlight',
                    pure: true
                },] }
    ];
    return NzHighlightPipe;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzHighlightPipe.prototype.UNIQUE_WRAPPERS;
}

/**
 * @fileoverview added by tsickle
 * Generated from: highlight/highlight.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzHighlightModule = /** @class */ (function () {
    function NzHighlightModule() {
    }
    NzHighlightModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [NzHighlightPipe],
                    declarations: [NzHighlightPipe]
                },] }
    ];
    return NzHighlightModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: highlight/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: config/config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NzConfig() { }
if (false) {
    /** @type {?|undefined} */
    NzConfig.prototype.affix;
    /** @type {?|undefined} */
    NzConfig.prototype.alert;
    /** @type {?|undefined} */
    NzConfig.prototype.anchor;
    /** @type {?|undefined} */
    NzConfig.prototype.avatar;
    /** @type {?|undefined} */
    NzConfig.prototype.backTop;
    /** @type {?|undefined} */
    NzConfig.prototype.badge;
    /** @type {?|undefined} */
    NzConfig.prototype.button;
    /** @type {?|undefined} */
    NzConfig.prototype.card;
    /** @type {?|undefined} */
    NzConfig.prototype.carousel;
    /** @type {?|undefined} */
    NzConfig.prototype.cascader;
    /** @type {?|undefined} */
    NzConfig.prototype.codeEditor;
    /** @type {?|undefined} */
    NzConfig.prototype.collapse;
    /** @type {?|undefined} */
    NzConfig.prototype.collapsePanel;
    /** @type {?|undefined} */
    NzConfig.prototype.descriptions;
    /** @type {?|undefined} */
    NzConfig.prototype.drawer;
    /** @type {?|undefined} */
    NzConfig.prototype.empty;
    /** @type {?|undefined} */
    NzConfig.prototype.form;
    /** @type {?|undefined} */
    NzConfig.prototype.grid;
    /** @type {?|undefined} */
    NzConfig.prototype.icon;
    /** @type {?|undefined} */
    NzConfig.prototype.message;
    /** @type {?|undefined} */
    NzConfig.prototype.modal;
    /** @type {?|undefined} */
    NzConfig.prototype.notification;
    /** @type {?|undefined} */
    NzConfig.prototype.pageHeader;
    /** @type {?|undefined} */
    NzConfig.prototype.progress;
    /** @type {?|undefined} */
    NzConfig.prototype.rate;
    /** @type {?|undefined} */
    NzConfig.prototype.spin;
    /** @type {?|undefined} */
    NzConfig.prototype.switch;
    /** @type {?|undefined} */
    NzConfig.prototype.table;
    /** @type {?|undefined} */
    NzConfig.prototype.tabs;
    /** @type {?|undefined} */
    NzConfig.prototype.timePicker;
    /** @type {?|undefined} */
    NzConfig.prototype.tree;
    /** @type {?|undefined} */
    NzConfig.prototype.treeSelect;
    /** @type {?|undefined} */
    NzConfig.prototype.typography;
}
/**
 * @record
 */
function AffixConfig() { }
if (false) {
    /** @type {?|undefined} */
    AffixConfig.prototype.nzOffsetBottom;
    /** @type {?|undefined} */
    AffixConfig.prototype.nzOffsetTop;
}
/**
 * @record
 */
function AlertConfig() { }
if (false) {
    /** @type {?|undefined} */
    AlertConfig.prototype.nzCloseable;
    /** @type {?|undefined} */
    AlertConfig.prototype.nzShowIcon;
}
/**
 * @record
 */
function AvatarConfig() { }
if (false) {
    /** @type {?|undefined} */
    AvatarConfig.prototype.nzShape;
    /** @type {?|undefined} */
    AvatarConfig.prototype.nzSize;
}
/**
 * @record
 */
function AnchorConfig() { }
if (false) {
    /** @type {?|undefined} */
    AnchorConfig.prototype.nzBounds;
    /** @type {?|undefined} */
    AnchorConfig.prototype.nzOffsetBottom;
    /** @type {?|undefined} */
    AnchorConfig.prototype.nzOffsetTop;
    /** @type {?|undefined} */
    AnchorConfig.prototype.nzShowInkInFixed;
}
/**
 * @record
 */
function BackTopConfig() { }
if (false) {
    /** @type {?|undefined} */
    BackTopConfig.prototype.nzVisibilityHeight;
}
/**
 * @record
 */
function BadgeConfig() { }
if (false) {
    /** @type {?|undefined} */
    BadgeConfig.prototype.nzColor;
    /** @type {?|undefined} */
    BadgeConfig.prototype.nzOverflowCount;
    /** @type {?|undefined} */
    BadgeConfig.prototype.nzShowZero;
}
/**
 * @record
 */
function ButtonConfig() { }
if (false) {
    /** @type {?|undefined} */
    ButtonConfig.prototype.nzSize;
}
/**
 * @record
 */
function CodeEditorConfig() { }
if (false) {
    /** @type {?|undefined} */
    CodeEditorConfig.prototype.assetsRoot;
    /** @type {?|undefined} */
    CodeEditorConfig.prototype.defaultEditorOption;
    /** @type {?|undefined} */
    CodeEditorConfig.prototype.useStaticLoading;
    /**
     * @return {?}
     */
    CodeEditorConfig.prototype.onLoad = function () { };
    /**
     * @return {?}
     */
    CodeEditorConfig.prototype.onFirstEditorInit = function () { };
    /**
     * @return {?}
     */
    CodeEditorConfig.prototype.onInit = function () { };
}
/**
 * @record
 */
function CardConfig() { }
if (false) {
    /** @type {?|undefined} */
    CardConfig.prototype.nzSize;
    /** @type {?|undefined} */
    CardConfig.prototype.nzHoverable;
    /** @type {?|undefined} */
    CardConfig.prototype.nzBordered;
}
/**
 * @record
 */
function CarouselConfig() { }
if (false) {
    /** @type {?|undefined} */
    CarouselConfig.prototype.nzAutoPlay;
    /** @type {?|undefined} */
    CarouselConfig.prototype.nzAutoPlaySpeed;
    /** @type {?|undefined} */
    CarouselConfig.prototype.nzDots;
    /** @type {?|undefined} */
    CarouselConfig.prototype.nzEffect;
    /** @type {?|undefined} */
    CarouselConfig.prototype.nzEnableSwipe;
    /** @type {?|undefined} */
    CarouselConfig.prototype.nzVertical;
}
/**
 * @record
 */
function CascaderConfig() { }
if (false) {
    /** @type {?|undefined} */
    CascaderConfig.prototype.nzSize;
}
/**
 * @record
 */
function CollapseConfig() { }
if (false) {
    /** @type {?|undefined} */
    CollapseConfig.prototype.nzAccordion;
    /** @type {?|undefined} */
    CollapseConfig.prototype.nzBordered;
}
/**
 * @record
 */
function CollapsePanelConfig() { }
if (false) {
    /** @type {?|undefined} */
    CollapsePanelConfig.prototype.nzShowArrow;
}
/**
 * @record
 */
function DescriptionsConfig() { }
if (false) {
    /** @type {?|undefined} */
    DescriptionsConfig.prototype.nzBorder;
    /** @type {?|undefined} */
    DescriptionsConfig.prototype.nzColumn;
    /** @type {?|undefined} */
    DescriptionsConfig.prototype.nzSize;
    /** @type {?|undefined} */
    DescriptionsConfig.prototype.nzColon;
}
/**
 * @record
 */
function DrawerConfig() { }
if (false) {
    /** @type {?|undefined} */
    DrawerConfig.prototype.nzMask;
    /** @type {?|undefined} */
    DrawerConfig.prototype.nzMaskClosable;
}
/**
 * @record
 */
function EmptyConfig() { }
if (false) {
    /** @type {?|undefined} */
    EmptyConfig.prototype.nzDefaultEmptyContent;
}
/**
 * @record
 */
function FormConfig() { }
if (false) {
    /** @type {?|undefined} */
    FormConfig.prototype.nzNoColon;
}
/**
 * @record
 */
function GridConfig() { }
if (false) {
    /** @type {?|undefined} */
    GridConfig.prototype.nzAlign;
    /** @type {?|undefined} */
    GridConfig.prototype.nzGutter;
    /** @type {?|undefined} */
    GridConfig.prototype.nzJustify;
    /** @type {?|undefined} */
    GridConfig.prototype.nzType;
}
/**
 * @record
 */
function IconConfig() { }
if (false) {
    /** @type {?|undefined} */
    IconConfig.prototype.nzTheme;
    /** @type {?|undefined} */
    IconConfig.prototype.nzTwotoneColor;
}
/**
 * @record
 */
function MessageConfig() { }
if (false) {
    /** @type {?|undefined} */
    MessageConfig.prototype.nzAnimate;
    /** @type {?|undefined} */
    MessageConfig.prototype.nzDuration;
    /** @type {?|undefined} */
    MessageConfig.prototype.nzMaxStack;
    /** @type {?|undefined} */
    MessageConfig.prototype.nzPauseOnHover;
    /** @type {?|undefined} */
    MessageConfig.prototype.nzTop;
}
/**
 * @record
 */
function ModalConfig() { }
if (false) {
    /** @type {?|undefined} */
    ModalConfig.prototype.nzMask;
    /** @type {?|undefined} */
    ModalConfig.prototype.nzMaskClosable;
}
/**
 * @record
 */
function NotificationConfig() { }
if (false) {
    /** @type {?|undefined} */
    NotificationConfig.prototype.nzTop;
    /** @type {?|undefined} */
    NotificationConfig.prototype.nzBottom;
    /** @type {?|undefined} */
    NotificationConfig.prototype.nzPlacement;
}
/**
 * @record
 */
function PageHeaderConfig() { }
if (false) {
    /** @type {?} */
    PageHeaderConfig.prototype.nzGhost;
}
/**
 * @record
 */
function ProgressConfig() { }
if (false) {
    /** @type {?|undefined} */
    ProgressConfig.prototype.nzGapDegree;
    /** @type {?|undefined} */
    ProgressConfig.prototype.nzGapPosition;
    /** @type {?|undefined} */
    ProgressConfig.prototype.nzShowInfo;
    /** @type {?|undefined} */
    ProgressConfig.prototype.nzStrokeSwitch;
    /** @type {?|undefined} */
    ProgressConfig.prototype.nzStrokeWidth;
    /** @type {?|undefined} */
    ProgressConfig.prototype.nzSize;
    /** @type {?|undefined} */
    ProgressConfig.prototype.nzStrokeLinecap;
    /** @type {?|undefined} */
    ProgressConfig.prototype.nzStrokeColor;
}
/**
 * @record
 */
function RateConfig() { }
if (false) {
    /** @type {?|undefined} */
    RateConfig.prototype.nzAllowClear;
    /** @type {?|undefined} */
    RateConfig.prototype.nzAllowHalf;
}
/**
 * @record
 */
function SpinConfig() { }
if (false) {
    /** @type {?|undefined} */
    SpinConfig.prototype.nzIndicator;
}
/**
 * @record
 */
function SwitchConfig() { }
if (false) {
    /** @type {?} */
    SwitchConfig.prototype.nzSize;
}
/**
 * @record
 */
function TableConfig() { }
if (false) {
    /** @type {?|undefined} */
    TableConfig.prototype.nzBordered;
    /** @type {?|undefined} */
    TableConfig.prototype.nzSize;
    /** @type {?|undefined} */
    TableConfig.prototype.nzShowQuickJumper;
    /** @type {?|undefined} */
    TableConfig.prototype.nzShowSizeChanger;
    /** @type {?|undefined} */
    TableConfig.prototype.nzSimple;
    /** @type {?|undefined} */
    TableConfig.prototype.nzHideOnSinglePage;
}
/**
 * @record
 */
function TabsConfig() { }
if (false) {
    /** @type {?|undefined} */
    TabsConfig.prototype.nzAnimated;
    /** @type {?|undefined} */
    TabsConfig.prototype.nzSize;
    /** @type {?|undefined} */
    TabsConfig.prototype.nzType;
    /** @type {?|undefined} */
    TabsConfig.prototype.nzTabBarGutter;
    /** @type {?|undefined} */
    TabsConfig.prototype.nzShowPagination;
}
/**
 * @record
 */
function TimePickerConfig() { }
if (false) {
    /** @type {?|undefined} */
    TimePickerConfig.prototype.nzAllowEmpty;
    /** @type {?|undefined} */
    TimePickerConfig.prototype.nzClearText;
    /** @type {?|undefined} */
    TimePickerConfig.prototype.nzFormat;
    /** @type {?|undefined} */
    TimePickerConfig.prototype.nzHourStep;
    /** @type {?|undefined} */
    TimePickerConfig.prototype.nzMinuteStep;
    /** @type {?|undefined} */
    TimePickerConfig.prototype.nzSecondStep;
    /** @type {?|undefined} */
    TimePickerConfig.prototype.nzPopupClassName;
    /** @type {?|undefined} */
    TimePickerConfig.prototype.nzUse12Hours;
}
/**
 * @record
 */
function TreeConfig() { }
if (false) {
    /** @type {?|undefined} */
    TreeConfig.prototype.nzBlockNode;
    /** @type {?|undefined} */
    TreeConfig.prototype.nzShowIcon;
    /** @type {?|undefined} */
    TreeConfig.prototype.nzHideUnMatched;
}
/**
 * @record
 */
function TreeSelectConfig() { }
if (false) {
    /** @type {?|undefined} */
    TreeSelectConfig.prototype.nzShowIcon;
    /** @type {?|undefined} */
    TreeSelectConfig.prototype.nzShowLine;
    /** @type {?|undefined} */
    TreeSelectConfig.prototype.nzDropdownMatchSelectWidth;
    /** @type {?|undefined} */
    TreeSelectConfig.prototype.nzHideUnMatched;
    /** @type {?|undefined} */
    TreeSelectConfig.prototype.nzSize;
}
/**
 * @record
 */
function TypographyConfig() { }
if (false) {
    /** @type {?|undefined} */
    TypographyConfig.prototype.nzEllipsisRows;
}
/**
 * User should provide an object implements this interface to set global configurations.
 * @type {?}
 */
var NZ_CONFIG = new InjectionToken('nz-config');

/**
 * @fileoverview added by tsickle
 * Generated from: config/config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var isDefined = (/**
 * @param {?=} value
 * @return {?}
 */
function (value) {
    return value !== undefined;
});
var ɵ0$1 = isDefined;
var NzConfigService = /** @class */ (function () {
    function NzConfigService(defaultConfig) {
        this.configUpdated$ = new Subject();
        this.config = defaultConfig || {};
    }
    /**
     * @template T
     * @param {?} componentName
     * @return {?}
     */
    NzConfigService.prototype.getConfigForComponent = /**
     * @template T
     * @param {?} componentName
     * @return {?}
     */
    function (componentName) {
        return this.config[componentName];
    };
    /**
     * @param {?} componentName
     * @return {?}
     */
    NzConfigService.prototype.getConfigChangeEventForComponent = /**
     * @param {?} componentName
     * @return {?}
     */
    function (componentName) {
        return this.configUpdated$.pipe(filter((/**
         * @param {?} n
         * @return {?}
         */
        function (n) { return n === componentName; })), mapTo(undefined));
    };
    /**
     * @template T
     * @param {?} componentName
     * @param {?} value
     * @return {?}
     */
    NzConfigService.prototype.set = /**
     * @template T
     * @param {?} componentName
     * @param {?} value
     * @return {?}
     */
    function (componentName, value) {
        this.config[componentName] = __assign({}, this.config[componentName], value);
        this.configUpdated$.next(componentName);
    };
    NzConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzConfigService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_CONFIG,] }] }
    ]; };
    /** @nocollapse */ NzConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NzConfigService_Factory() { return new NzConfigService(ɵɵinject(NZ_CONFIG, 8)); }, token: NzConfigService, providedIn: "root" });
    return NzConfigService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzConfigService.prototype.configUpdated$;
    /**
     * Global config holding property.
     * @type {?}
     * @private
     */
    NzConfigService.prototype.config;
}
// tslint:disable:no-invalid-this
// tslint:disable:no-any
/**
 * This decorator is used to decorate properties. If a property is decorated, it would try to load default value from
 * config.
 * @template T
 * @param {?} componentName
 * @param {?=} innerDefaultValue
 * @return {?}
 */
// tslint:disable-next-line:typedef
function WithConfig(componentName, innerDefaultValue) {
    return (/**
     * @param {?} target
     * @param {?} propName
     * @param {?=} originalDescriptor
     * @return {?}
     */
    function ConfigDecorator(target, propName, originalDescriptor) {
        /** @type {?} */
        var privatePropName = "$$__assignedValue__" + propName;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn("The prop \"" + privatePropName + "\" is already exist, it will be override by " + componentName + " decorator.");
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
            enumerable: false
        });
        return {
            get: /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var originalValue = originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
                if (isDefined(originalValue)) {
                    return originalValue;
                }
                /** @type {?} */
                var componentConfig = this.nzConfigService.getConfigForComponent(componentName) || {};
                /** @type {?} */
                var configValue = componentConfig[propName];
                return isDefined(configValue) ? configValue : innerDefaultValue;
            },
            set: /**
             * @param {?=} value
             * @return {?}
             */
            function (value) {
                if (originalDescriptor && originalDescriptor.set) {
                    originalDescriptor.set.bind(this)(value);
                }
                else {
                    this[privatePropName] = value;
                }
            },
            configurable: true,
            enumerable: true
        };
    });
}

/**
 * @fileoverview added by tsickle
 * Generated from: config/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: pipe/nz-css-unit.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzToCssUnitPipe = /** @class */ (function () {
    function NzToCssUnitPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} defaultUnit
     * @return {?}
     */
    NzToCssUnitPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} defaultUnit
     * @return {?}
     */
    function (value, defaultUnit) {
        if (defaultUnit === void 0) { defaultUnit = 'px'; }
        /** @type {?} */
        var formatted = +value;
        return isNaN(formatted) ? "" + value : "" + formatted + defaultUnit;
    };
    NzToCssUnitPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'nzToCssUnit'
                },] }
    ];
    return NzToCssUnitPipe;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: time/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: pipe/nz-time-range.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzTimeRangePipe = /** @class */ (function () {
    function NzTimeRangePipe() {
    }
    /**
     * @param {?} value
     * @param {?=} format
     * @return {?}
     */
    NzTimeRangePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} format
     * @return {?}
     */
    function (value, format) {
        if (format === void 0) { format = 'HH:mm:ss'; }
        /** @type {?} */
        var duration = Number(value || 0);
        return timeUnits.reduce((/**
         * @param {?} current
         * @param {?} __1
         * @return {?}
         */
        function (current, _a) {
            var _b = __read(_a, 2), name = _b[0], unit = _b[1];
            if (current.indexOf(name) !== -1) {
                /** @type {?} */
                var v_1 = Math.floor(duration / unit);
                duration -= v_1 * unit;
                return current.replace(new RegExp(name + "+", 'g'), (/**
                 * @param {?} match
                 * @return {?}
                 */
                function (match) {
                    return padStart(v_1.toString(), match.length, '0');
                }));
            }
            return current;
        }), format);
    };
    NzTimeRangePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'nzTimeRange',
                    pure: true
                },] }
    ];
    return NzTimeRangePipe;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: pipe/nz-pipe.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzPipesModule = /** @class */ (function () {
    function NzPipesModule() {
    }
    NzPipesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [NzTimeRangePipe, NzToCssUnitPipe],
                    declarations: [NzTimeRangePipe, NzToCssUnitPipe]
                },] }
    ];
    return NzPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: pipe/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-core.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AnimationCurves, AnimationDuration, CandyDate, DEFAULT_DROPDOWN_POSITIONS, DEFAULT_MENTION_BOTTOM_POSITIONS, DEFAULT_MENTION_TOP_POSITIONS, DEFAULT_SUBMENU_POSITIONS, DEFAULT_TOOLTIP_POSITIONS, FakeViewportRuler, InputBoolean, InputCssPixel, InputNumber, MockNgZone, NZ_CONFIG, NZ_WAVE_GLOBAL_CONFIG, NZ_WAVE_GLOBAL_CONFIG_FACTORY, NZ_WAVE_GLOBAL_DEFAULT_CONFIG, NzAddOnModule, NzBreakpoint, NzClassListAddDirective, NzConfigService, NzConnectedOverlayDirective, NzCopyToClipboardService, NzCopyToClipboardServiceModule, NzDomEventService, NzDragService, NzDropdownHigherOrderServiceToken, NzHighlightModule, NzHighlightPipe, NzMenuBaseService, NzNoAnimationDirective, NzNoAnimationModule, NzOverlayModule, NzPipesModule, NzScrollService, NzSingletonService, NzStringTemplateOutletDirective, NzTimeRangePipe, NzToCssUnitPipe, NzTransButtonDirective, NzTransButtonModule, NzTreeBase, NzTreeBaseService, NzTreeHigherOrderServiceToken, NzTreeNode, NzUpdateHostClassService, NzWaveDirective, NzWaveModule, NzWaveRenderer, POSITION_MAP, PREFIX, SCROLL_SERVICE_PROVIDER, SCROLL_SERVICE_PROVIDER_FACTORY, WithConfig, arraysEqual, cancelRequestAnimationFrame, collapseMotion, createDebugEle, createFakeEvent, createKeyboardEvent, createMouseEvent, createTouchEvent, dispatchEvent, dispatchFakeEvent, dispatchKeyboardEvent, dispatchMouseEvent, dispatchTouchEvent, ensureInBounds, ensureNumberInRange, fadeMotion, filterNotEmptyNode, findFirstNotEmptyNode, findLastNotEmptyNode, getCaretCoordinates, getElementOffset, getEventPosition, getMentions, getPercent, getPlacementName, getPrecision, getRegExp, getRepeatedElement, getStyleAsText, helpMotion, inNextTick, isComponent, isEmpty, isInteger, isNil, isNonEmptyString, isNotNil, isPromise, isStyleSupport, isTemplateRef, isTouchEvent, log, measure, measureScrollbar, moveUpMotion, notificationMotion, padEnd, padStart, properties, pxToNumber, reqAnimFrame, responsiveMap, reverseChildNodes, scrollIntoView, shallowCopyArray, shallowEqual, silentEvent, slideAlertMotion, slideMotion, sortRangeValue, timeUnits, toArray, toBoolean, toCssPixel, toNumber, treeCollapseMotion, typeInElement, valueFunctionProp, warn, warnDeprecation, wrappedErrorMessage, zoomBadgeMotion, zoomBigMotion, zoomMotion };
//# sourceMappingURL=ng-zorro-antd-core.js.map
