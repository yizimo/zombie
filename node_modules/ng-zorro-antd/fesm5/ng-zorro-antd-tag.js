import { __decorate, __metadata } from 'tslib';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, Renderer2, ElementRef, Input, Output, NgModule } from '@angular/core';
import { warnDeprecation, NzUpdateHostClassService, fadeMotion, InputBoolean } from 'ng-zorro-antd/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * Generated from: nz-tag.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzTagComponent = /** @class */ (function () {
    function NzTagComponent(renderer, elementRef, nzUpdateHostClassService) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.presetColor = false;
        this.nzMode = 'default';
        this.nzChecked = false;
        this.nzNoAnimation = false;
        this.nzAfterClose = new EventEmitter();
        this.nzOnClose = new EventEmitter();
        this.nzCheckedChange = new EventEmitter();
    }
    /**
     * @private
     * @param {?=} color
     * @return {?}
     */
    NzTagComponent.prototype.isPresetColor = /**
     * @private
     * @param {?=} color
     * @return {?}
     */
    function (color) {
        if (!color) {
            return false;
        }
        return /^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/.test(color);
    };
    /**
     * @private
     * @return {?}
     */
    NzTagComponent.prototype.updateClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        this.presetColor = this.isPresetColor(this.nzColor);
        /** @type {?} */
        var prefix = 'ant-tag';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["" + prefix] = true,
            _a[prefix + "-has-color"] = this.nzColor && !this.presetColor,
            _a[prefix + "-" + this.nzColor] = this.presetColor,
            _a[prefix + "-checkable"] = this.nzMode === 'checkable',
            _a[prefix + "-checkable-checked"] = this.nzChecked,
            _a));
    };
    /**
     * @return {?}
     */
    NzTagComponent.prototype.updateCheckedStatus = /**
     * @return {?}
     */
    function () {
        if (this.nzMode === 'checkable') {
            this.nzChecked = !this.nzChecked;
            this.nzCheckedChange.emit(this.nzChecked);
            this.updateClassMap();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTagComponent.prototype.closeTag = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.nzOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTagComponent.prototype.afterAnimation = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.toState === 'void') {
            this.nzAfterClose.emit();
            if (this.nzAfterClose.observers.length) {
                warnDeprecation("'(nzAfterClose)' Output is going to be removed in 9.0.0. Please use '(nzOnClose)' instead.");
            }
        }
    };
    /**
     * @return {?}
     */
    NzTagComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateClassMap();
    };
    /**
     * @return {?}
     */
    NzTagComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateClassMap();
    };
    NzTagComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-tag',
                    exportAs: 'nzTag',
                    preserveWhitespaces: false,
                    providers: [NzUpdateHostClassService],
                    animations: [fadeMotion],
                    template: "<ng-content></ng-content>\n<i nz-icon nzType=\"close\" *ngIf=\"nzMode==='closeable'\" tabindex=\"-1\" (click)=\"closeTag($event)\"></i>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[@fadeMotion]': '',
                        '[@.disabled]': 'nzNoAnimation',
                        '(@fadeMotion.done)': 'afterAnimation($event)',
                        '(click)': 'updateCheckedStatus()',
                        '[style.background-color]': 'presetColor? null : nzColor'
                    }
                }] }
    ];
    /** @nocollapse */
    NzTagComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: NzUpdateHostClassService }
    ]; };
    NzTagComponent.propDecorators = {
        nzMode: [{ type: Input }],
        nzColor: [{ type: Input }],
        nzChecked: [{ type: Input }],
        nzNoAnimation: [{ type: Input }],
        nzAfterClose: [{ type: Output }],
        nzOnClose: [{ type: Output }],
        nzCheckedChange: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTagComponent.prototype, "nzChecked", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTagComponent.prototype, "nzNoAnimation", void 0);
    return NzTagComponent;
}());
if (false) {
    /** @type {?} */
    NzTagComponent.prototype.presetColor;
    /** @type {?} */
    NzTagComponent.prototype.nzMode;
    /** @type {?} */
    NzTagComponent.prototype.nzColor;
    /** @type {?} */
    NzTagComponent.prototype.nzChecked;
    /** @type {?} */
    NzTagComponent.prototype.nzNoAnimation;
    /** @type {?} */
    NzTagComponent.prototype.nzAfterClose;
    /** @type {?} */
    NzTagComponent.prototype.nzOnClose;
    /** @type {?} */
    NzTagComponent.prototype.nzCheckedChange;
    /**
     * @type {?}
     * @private
     */
    NzTagComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTagComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTagComponent.prototype.nzUpdateHostClassService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-tag.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzTagModule = /** @class */ (function () {
    function NzTagModule() {
    }
    NzTagModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, NzIconModule],
                    declarations: [NzTagComponent],
                    exports: [NzTagComponent]
                },] }
    ];
    return NzTagModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-tag.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzTagComponent, NzTagModule };
//# sourceMappingURL=ng-zorro-antd-tag.js.map
