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
class NzTagComponent {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} nzUpdateHostClassService
     */
    constructor(renderer, elementRef, nzUpdateHostClassService) {
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
    isPresetColor(color) {
        if (!color) {
            return false;
        }
        return /^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/.test(color);
    }
    /**
     * @private
     * @return {?}
     */
    updateClassMap() {
        this.presetColor = this.isPresetColor(this.nzColor);
        /** @type {?} */
        const prefix = 'ant-tag';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [`${prefix}`]: true,
            [`${prefix}-has-color`]: this.nzColor && !this.presetColor,
            [`${prefix}-${this.nzColor}`]: this.presetColor,
            [`${prefix}-checkable`]: this.nzMode === 'checkable',
            [`${prefix}-checkable-checked`]: this.nzChecked
        });
    }
    /**
     * @return {?}
     */
    updateCheckedStatus() {
        if (this.nzMode === 'checkable') {
            this.nzChecked = !this.nzChecked;
            this.nzCheckedChange.emit(this.nzChecked);
            this.updateClassMap();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    closeTag(e) {
        this.nzOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    afterAnimation(e) {
        if (e.toState === 'void') {
            this.nzAfterClose.emit();
            if (this.nzAfterClose.observers.length) {
                warnDeprecation(`'(nzAfterClose)' Output is going to be removed in 9.0.0. Please use '(nzOnClose)' instead.`);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateClassMap();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.updateClassMap();
    }
}
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
NzTagComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: NzUpdateHostClassService }
];
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
class NzTagModule {
}
NzTagModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, NzIconModule],
                declarations: [NzTagComponent],
                exports: [NzTagComponent]
            },] }
];

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
