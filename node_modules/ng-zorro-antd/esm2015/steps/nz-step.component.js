/**
 * @fileoverview added by tsickle
 * Generated from: nz-step.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
export class NzStepComponent {
    /**
     * @param {?} cdr
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.nzDisabled = false;
        this.isCustomStatus = false;
        this._status = 'wait';
        this.oldAPIIcon = true;
        this.isIconString = true;
        // Set by parent.
        this.direction = 'horizontal';
        this.index = 0;
        this.last = false;
        this.outStatus = 'process';
        this.showProcessDot = false;
        this.clickable = false;
        this.click$ = new Subject();
        this._currentIndex = 0;
        renderer.addClass(elementRef.nativeElement, 'ant-steps-item');
    }
    /**
     * @return {?}
     */
    get nzStatus() {
        return this._status;
    }
    /**
     * @param {?} status
     * @return {?}
     */
    set nzStatus(status) {
        this._status = status;
        this.isCustomStatus = true;
    }
    /**
     * @return {?}
     */
    get nzIcon() {
        return this._icon;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzIcon(value) {
        if (!(value instanceof TemplateRef)) {
            this.isIconString = true;
            this.oldAPIIcon = typeof value === 'string' && value.indexOf('anticon') > -1;
        }
        else {
            this.isIconString = false;
        }
        this._icon = value;
    }
    /**
     * @return {?}
     */
    get currentIndex() {
        return this._currentIndex;
    }
    /**
     * @param {?} current
     * @return {?}
     */
    set currentIndex(current) {
        this._currentIndex = current;
        if (!this.isCustomStatus) {
            this._status = current > this.index ? 'finish' : current === this.index ? this.outStatus || '' : 'wait';
        }
    }
    /**
     * @return {?}
     */
    onClick() {
        if (this.clickable && this.currentIndex !== this.index && !this.nzDisabled) {
            this.click$.next(this.index);
        }
    }
    /**
     * @return {?}
     */
    markForCheck() {
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.click$.complete();
    }
}
NzStepComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-step',
                exportAs: 'nzStep',
                preserveWhitespaces: false,
                template: "<div\n  class=\"ant-steps-item-container\"\n  [attr.role]=\"(clickable && !nzDisabled) ? 'button' : null\"\n  [tabindex]=\"(clickable && !nzDisabled) ? 0 : null\"\n  (click)=\"onClick()\">\n  <div class=\"ant-steps-item-tail\" *ngIf=\"last !== true\"></div>\n  <div class=\"ant-steps-item-icon\">\n    <ng-template [ngIf]=\"!showProcessDot\">\n      <span class=\"ant-steps-icon\" *ngIf=\"nzStatus === 'finish' && !nzIcon\"><i nz-icon nzType=\"check\"></i></span>\n      <span class=\"ant-steps-icon\" *ngIf=\"nzStatus === 'error'\"><i nz-icon nzType=\"close\"></i></span>\n      <span\n        class=\"ant-steps-icon\"\n        *ngIf=\"(nzStatus === 'process' || nzStatus === 'wait') && !nzIcon\">{{ index + 1 }}</span>\n      <span class=\"ant-steps-icon\" *ngIf=\"nzIcon\">\n      <ng-container *ngIf=\"isIconString; else iconTemplate\">\n        <i nz-icon [nzType]=\"!oldAPIIcon && nzIcon\" [ngClass]=\"oldAPIIcon && nzIcon\"></i>\n      </ng-container>\n      <ng-template #iconTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzIcon\"></ng-template>\n    </ng-template>\n    </span>\n    </ng-template>\n    <ng-template [ngIf]=\"showProcessDot\">\n    <span class=\"ant-steps-icon\">\n      <ng-template #processDotTemplate>\n        <span class=\"ant-steps-icon-dot\"></span>\n      </ng-template>\n      <ng-template\n        [ngTemplateOutlet]=\"customProcessTemplate||processDotTemplate\"\n        [ngTemplateOutletContext]=\"{ $implicit: processDotTemplate, status:nzStatus, index:index }\">\n      </ng-template>\n    </span>\n    </ng-template>\n  </div>\n  <div class=\"ant-steps-item-content\">\n    <div class=\"ant-steps-item-title\">\n      <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n      <div *ngIf=\"nzSubtitle\" class=\"ant-steps-item-subtitle\">\n        <ng-container *nzStringTemplateOutlet=\"nzSubtitle\">{{ nzSubtitle }}</ng-container>\n      </div>\n    </div>\n    <div class=\"ant-steps-item-description\">\n      <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\n    </div>\n  </div>\n</div>\n",
                host: {
                    '[class.ant-steps-item-wait]': 'nzStatus === "wait"',
                    '[class.ant-steps-item-process]': 'nzStatus === "process"',
                    '[class.ant-steps-item-finish]': 'nzStatus === "finish"',
                    '[class.ant-steps-item-error]': 'nzStatus === "error"',
                    '[class.ant-steps-item-active]': 'currentIndex === index',
                    '[class.ant-steps-item-disabled]': 'nzDisabled',
                    '[class.ant-steps-item-custom]': '!!nzIcon',
                    '[class.ant-steps-next-error]': '(outStatus === "error") && (currentIndex === index + 1)'
                }
            }] }
];
/** @nocollapse */
NzStepComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef }
];
NzStepComponent.propDecorators = {
    processDotTemplate: [{ type: ViewChild, args: ['processDotTemplate', { static: false },] }],
    nzTitle: [{ type: Input }],
    nzSubtitle: [{ type: Input }],
    nzDescription: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzIcon: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzStepComponent.prototype, "nzDisabled", void 0);
if (false) {
    /** @type {?} */
    NzStepComponent.prototype.processDotTemplate;
    /** @type {?} */
    NzStepComponent.prototype.nzTitle;
    /** @type {?} */
    NzStepComponent.prototype.nzSubtitle;
    /** @type {?} */
    NzStepComponent.prototype.nzDescription;
    /** @type {?} */
    NzStepComponent.prototype.nzDisabled;
    /** @type {?} */
    NzStepComponent.prototype.isCustomStatus;
    /**
     * @type {?}
     * @private
     */
    NzStepComponent.prototype._status;
    /** @type {?} */
    NzStepComponent.prototype.oldAPIIcon;
    /** @type {?} */
    NzStepComponent.prototype.isIconString;
    /**
     * @type {?}
     * @private
     */
    NzStepComponent.prototype._icon;
    /** @type {?} */
    NzStepComponent.prototype.customProcessTemplate;
    /** @type {?} */
    NzStepComponent.prototype.direction;
    /** @type {?} */
    NzStepComponent.prototype.index;
    /** @type {?} */
    NzStepComponent.prototype.last;
    /** @type {?} */
    NzStepComponent.prototype.outStatus;
    /** @type {?} */
    NzStepComponent.prototype.showProcessDot;
    /** @type {?} */
    NzStepComponent.prototype.clickable;
    /** @type {?} */
    NzStepComponent.prototype.click$;
    /**
     * @type {?}
     * @private
     */
    NzStepComponent.prototype._currentIndex;
    /**
     * @type {?}
     * @private
     */
    NzStepComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3N0ZXBzLyIsInNvdXJjZXMiOlsibnotc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFDL0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQW9CL0IsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQThEMUIsWUFBb0IsR0FBc0IsRUFBRSxRQUFtQixFQUFFLFVBQXNCO1FBQW5FLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBeERqQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBWTVDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHLE1BQU0sQ0FBQztRQWlCekIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixpQkFBWSxHQUFHLElBQUksQ0FBQzs7UUFJcEIsY0FBUyxHQUFHLFlBQVksQ0FBQztRQUN6QixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixXQUFNLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQWF2QixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUd4QixRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7O0lBeERELElB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OztJQUUxRixrQ0FBNkM7O0lBQzdDLHFDQUFnRDs7SUFDaEQsd0NBQW1EOztJQUNuRCxxQ0FBNEM7O0lBWTVDLHlDQUF1Qjs7Ozs7SUFDdkIsa0NBQXlCOztJQWlCekIscUNBQWtCOztJQUNsQix1Q0FBb0I7Ozs7O0lBQ3BCLGdDQUErQzs7SUFFL0MsZ0RBQW9HOztJQUNwRyxvQ0FBeUI7O0lBQ3pCLGdDQUFVOztJQUNWLCtCQUFhOztJQUNiLG9DQUFzQjs7SUFDdEIseUNBQXVCOztJQUN2QixvQ0FBa0I7O0lBQ2xCLGlDQUErQjs7Ozs7SUFhL0Isd0NBQTBCOzs7OztJQUVkLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOZ0NsYXNzVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1zdGVwJyxcbiAgZXhwb3J0QXM6ICduelN0ZXAnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXN0ZXAuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtaXRlbS13YWl0XSc6ICduelN0YXR1cyA9PT0gXCJ3YWl0XCInLFxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tcHJvY2Vzc10nOiAnbnpTdGF0dXMgPT09IFwicHJvY2Vzc1wiJyxcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1pdGVtLWZpbmlzaF0nOiAnbnpTdGF0dXMgPT09IFwiZmluaXNoXCInLFxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tZXJyb3JdJzogJ256U3RhdHVzID09PSBcImVycm9yXCInLFxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tYWN0aXZlXSc6ICdjdXJyZW50SW5kZXggPT09IGluZGV4JyxcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1pdGVtLWRpc2FibGVkXSc6ICduekRpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1pdGVtLWN1c3RvbV0nOiAnISFuekljb24nLFxuICAgICdbY2xhc3MuYW50LXN0ZXBzLW5leHQtZXJyb3JdJzogJyhvdXRTdGF0dXMgPT09IFwiZXJyb3JcIikgJiYgKGN1cnJlbnRJbmRleCA9PT0gaW5kZXggKyAxKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelN0ZXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKCdwcm9jZXNzRG90VGVtcGxhdGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJvY2Vzc0RvdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpTdWJ0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56RGVzY3JpcHRpb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBuelN0YXR1cygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gIH1cblxuICBzZXQgbnpTdGF0dXMoc3RhdHVzOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy5pc0N1c3RvbVN0YXR1cyA9IHRydWU7XG4gIH1cblxuICBpc0N1c3RvbVN0YXR1cyA9IGZhbHNlO1xuICBwcml2YXRlIF9zdGF0dXMgPSAnd2FpdCc7XG5cbiAgQElucHV0KClcbiAgZ2V0IG56SWNvbigpOiBOZ0NsYXNzVHlwZSB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuXG4gIHNldCBuekljb24odmFsdWU6IE5nQ2xhc3NUeXBlIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSkge1xuICAgICAgdGhpcy5pc0ljb25TdHJpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5vbGRBUElJY29uID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5pbmRleE9mKCdhbnRpY29uJykgPiAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0ljb25TdHJpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5faWNvbiA9IHZhbHVlO1xuICB9XG5cbiAgb2xkQVBJSWNvbiA9IHRydWU7XG4gIGlzSWNvblN0cmluZyA9IHRydWU7XG4gIHByaXZhdGUgX2ljb246IE5nQ2xhc3NUeXBlIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgY3VzdG9tUHJvY2Vzc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVGVtcGxhdGVSZWY8dm9pZD47IHN0YXR1czogc3RyaW5nOyBpbmRleDogbnVtYmVyIH0+OyAvLyBTZXQgYnkgcGFyZW50LlxuICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gIGluZGV4ID0gMDtcbiAgbGFzdCA9IGZhbHNlO1xuICBvdXRTdGF0dXMgPSAncHJvY2Vzcyc7XG4gIHNob3dQcm9jZXNzRG90ID0gZmFsc2U7XG4gIGNsaWNrYWJsZSA9IGZhbHNlO1xuICBjbGljayQgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cbiAgZ2V0IGN1cnJlbnRJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50SW5kZXg7XG4gIH1cblxuICBzZXQgY3VycmVudEluZGV4KGN1cnJlbnQ6IG51bWJlcikge1xuICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IGN1cnJlbnQ7XG4gICAgaWYgKCF0aGlzLmlzQ3VzdG9tU3RhdHVzKSB7XG4gICAgICB0aGlzLl9zdGF0dXMgPSBjdXJyZW50ID4gdGhpcy5pbmRleCA/ICdmaW5pc2gnIDogY3VycmVudCA9PT0gdGhpcy5pbmRleCA/IHRoaXMub3V0U3RhdHVzIHx8ICcnIDogJ3dhaXQnO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2N1cnJlbnRJbmRleCA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXN0ZXBzLWl0ZW0nKTtcbiAgfVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xpY2thYmxlICYmIHRoaXMuY3VycmVudEluZGV4ICE9PSB0aGlzLmluZGV4ICYmICF0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xpY2skLm5leHQodGhpcy5pbmRleCk7XG4gICAgfVxuICB9XG5cbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGljayQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19