/**
 * @fileoverview added by tsickle
 * Generated from: nz-steps.component.ts
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
import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, Output, QueryList, TemplateRef, ViewEncapsulation } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { toBoolean } from 'ng-zorro-antd/core';
import { NzStepComponent } from './nz-step.component';
var NzStepsComponent = /** @class */ (function () {
    function NzStepsComponent() {
        this.nzCurrent = 0;
        this.nzDirection = 'horizontal';
        this.nzLabelPlacement = 'horizontal';
        this.nzType = 'default';
        this.nzSize = 'default';
        this.nzStartIndex = 0;
        this.nzStatus = 'process';
        this.nzIndexChange = new EventEmitter();
        this.destroy$ = new Subject();
        this.showProcessDot = false;
    }
    Object.defineProperty(NzStepsComponent.prototype, "nzProgressDot", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.showProcessDot = true;
                this.customProcessDotTemplate = value;
            }
            else {
                this.showProcessDot = toBoolean(value);
            }
            this.updateChildrenSteps();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzStepsComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzStartIndex || changes.nzDirection || changes.nzStatus || changes.nzCurrent) {
            this.updateChildrenSteps();
        }
        if (changes.nzDirection || changes.nzProgressDot || changes.nzLabelPlacement || changes.nzSize) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    NzStepsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.updateChildrenSteps();
    };
    /**
     * @return {?}
     */
    NzStepsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.indexChangeSubscription) {
            this.indexChangeSubscription.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    NzStepsComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.steps) {
            this.steps.changes
                .pipe(startWith(null), takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.updateChildrenSteps();
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzStepsComponent.prototype.updateChildrenSteps = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.steps) {
            /** @type {?} */
            var length_1 = this.steps.length;
            this.steps.toArray().forEach((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            function (step, index) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () {
                    step.outStatus = _this.nzStatus;
                    step.showProcessDot = _this.showProcessDot;
                    if (_this.customProcessDotTemplate) {
                        step.customProcessTemplate = _this.customProcessDotTemplate;
                    }
                    step.clickable = _this.nzIndexChange.observers.length > 0;
                    step.direction = _this.nzDirection;
                    step.index = index + _this.nzStartIndex;
                    step.currentIndex = _this.nzCurrent;
                    step.last = length_1 === index + 1;
                    step.markForCheck();
                }));
            }));
            if (this.indexChangeSubscription) {
                this.indexChangeSubscription.unsubscribe();
            }
            this.indexChangeSubscription = merge.apply(void 0, tslib_1.__spread(this.steps.map((/**
             * @param {?} step
             * @return {?}
             */
            function (step) { return step.click$; })))).subscribe((/**
             * @param {?} index
             * @return {?}
             */
            function (index) {
                return _this.nzIndexChange.emit(index);
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzStepsComponent.prototype.setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {},
            _a["ant-steps-" + this.nzDirection] = true,
            _a["ant-steps-label-horizontal"] = this.nzDirection === 'horizontal',
            _a["ant-steps-label-vertical"] = (this.showProcessDot || this.nzLabelPlacement === 'vertical') && this.nzDirection === 'horizontal',
            _a["ant-steps-dot"] = this.showProcessDot,
            _a['ant-steps-small'] = this.nzSize === 'small',
            _a['ant-steps-navigation'] = this.nzType === 'navigation',
            _a);
    };
    NzStepsComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'nz-steps',
                    exportAs: 'nzSteps',
                    template: "<div class=\"ant-steps\" [ngClass]=\"classMap\">\n  <ng-content></ng-content>\n</div>"
                }] }
    ];
    NzStepsComponent.propDecorators = {
        steps: [{ type: ContentChildren, args: [NzStepComponent,] }],
        nzCurrent: [{ type: Input }],
        nzDirection: [{ type: Input }],
        nzLabelPlacement: [{ type: Input }],
        nzType: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzStartIndex: [{ type: Input }],
        nzStatus: [{ type: Input }],
        nzProgressDot: [{ type: Input }],
        nzIndexChange: [{ type: Output }]
    };
    return NzStepsComponent;
}());
export { NzStepsComponent };
if (false) {
    /** @type {?} */
    NzStepsComponent.prototype.steps;
    /** @type {?} */
    NzStepsComponent.prototype.nzCurrent;
    /** @type {?} */
    NzStepsComponent.prototype.nzDirection;
    /** @type {?} */
    NzStepsComponent.prototype.nzLabelPlacement;
    /** @type {?} */
    NzStepsComponent.prototype.nzType;
    /** @type {?} */
    NzStepsComponent.prototype.nzSize;
    /** @type {?} */
    NzStepsComponent.prototype.nzStartIndex;
    /** @type {?} */
    NzStepsComponent.prototype.nzStatus;
    /** @type {?} */
    NzStepsComponent.prototype.nzIndexChange;
    /**
     * @type {?}
     * @private
     */
    NzStepsComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzStepsComponent.prototype.indexChangeSubscription;
    /** @type {?} */
    NzStepsComponent.prototype.showProcessDot;
    /** @type {?} */
    NzStepsComponent.prototype.customProcessDotTemplate;
    /** @type {?} */
    NzStepsComponent.prototype.classMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RlcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9zdGVwcy8iLCJzb3VyY2VzIjpbIm56LXN0ZXBzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUNOLFNBQVMsRUFFVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxTQUFTLEVBQTZCLE1BQU0sb0JBQW9CLENBQUM7QUFFMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBS3REO0lBQUE7UUFXVyxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsZ0JBQVcsR0FBb0IsWUFBWSxDQUFDO1FBQzVDLHFCQUFnQixHQUE4QixZQUFZLENBQUM7UUFDM0QsV0FBTSxHQUE2QixTQUFTLENBQUM7UUFDN0MsV0FBTSxHQUFpQixTQUFTLENBQUM7UUFDakMsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsYUFBUSxHQUFpQixTQUFTLENBQUM7UUFhekIsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRXRELGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBR3ZDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBNkV6QixDQUFDO0lBN0ZDLHNCQUNJLDJDQUFhOzs7OztRQURqQixVQUNrQixLQUE2RjtZQUM3RyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hDO1lBQ0QsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7Ozs7O0lBV0Qsc0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUN4RixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM1QjtRQUNELElBQUksT0FBTyxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQzlGLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUNoQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUM7SUFDSCxDQUFDOzs7O0lBRUQsNkNBQWtCOzs7SUFBbEI7UUFBQSxpQkFXQztRQVZDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTztpQkFDZixJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNmLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCO2lCQUNBLFNBQVM7OztZQUFDO2dCQUNULEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzdCLENBQUMsRUFBQyxDQUFDO1NBQ047SUFDSCxDQUFDOzs7OztJQUVPLDhDQUFtQjs7OztJQUEzQjtRQUFBLGlCQXlCQztRQXhCQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7O2dCQUNSLFFBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPOzs7OztZQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7Z0JBQ3ZDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJOzs7Z0JBQUM7b0JBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDO29CQUMxQyxJQUFJLEtBQUksQ0FBQyx3QkFBd0IsRUFBRTt3QkFDakMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQztxQkFDNUQ7b0JBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFNLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDakMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUN0QixDQUFDLEVBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxDQUFDO1lBQ0gsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUM1QztZQUNELElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLGdDQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE1BQU0sRUFBWCxDQUFXLEVBQUMsR0FBRSxTQUFTOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUMxRixPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUE5QixDQUE4QixFQUMvQixDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7OztJQUVPLHNDQUFXOzs7O0lBQW5COztRQUNFLElBQUksQ0FBQyxRQUFRO1lBQ1gsR0FBQyxlQUFhLElBQUksQ0FBQyxXQUFhLElBQUcsSUFBSTtZQUN2QyxHQUFDLDRCQUE0QixJQUFHLElBQUksQ0FBQyxXQUFXLEtBQUssWUFBWTtZQUNqRSxHQUFDLDBCQUEwQixJQUN6QixDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGdCQUFnQixLQUFLLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssWUFBWTtZQUNwRyxHQUFDLGVBQWUsSUFBRyxJQUFJLENBQUMsY0FBYztZQUN0QyxHQUFDLGlCQUFpQixJQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTztZQUM1QyxHQUFDLHNCQUFzQixJQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssWUFBWTtlQUN2RCxDQUFDO0lBQ0osQ0FBQzs7Z0JBL0dGLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsU0FBUztvQkFDbkIsaUdBQXdDO2lCQUN6Qzs7O3dCQUVFLGVBQWUsU0FBQyxlQUFlOzRCQUUvQixLQUFLOzhCQUNMLEtBQUs7bUNBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7K0JBQ0wsS0FBSzsyQkFDTCxLQUFLO2dDQUVMLEtBQUs7Z0NBV0wsTUFBTTs7SUFrRlQsdUJBQUM7Q0FBQSxBQWhIRCxJQWdIQztTQXhHWSxnQkFBZ0I7OztJQUMzQixpQ0FBb0U7O0lBRXBFLHFDQUF1Qjs7SUFDdkIsdUNBQXFEOztJQUNyRCw0Q0FBb0U7O0lBQ3BFLGtDQUFzRDs7SUFDdEQsa0NBQTBDOztJQUMxQyx3Q0FBMEI7O0lBQzFCLG9DQUE0Qzs7SUFhNUMseUNBQThEOzs7OztJQUU5RCxvQ0FBdUM7Ozs7O0lBQ3ZDLG1EQUE4Qzs7SUFFOUMsMENBQXVCOztJQUN2QixvREFBdUc7O0lBQ3ZHLG9DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuLCBOZ0NsYXNzVHlwZSwgTnpTaXplRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zdGVwLmNvbXBvbmVudCc7XG5cbmV4cG9ydCB0eXBlIE56RGlyZWN0aW9uVHlwZSA9ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XG5leHBvcnQgdHlwZSBOelN0YXR1c1R5cGUgPSAnd2FpdCcgfCAncHJvY2VzcycgfCAnZmluaXNoJyB8ICdlcnJvcic7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHNlbGVjdG9yOiAnbnotc3RlcHMnLFxuICBleHBvcnRBczogJ256U3RlcHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotc3RlcHMuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56U3RlcHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihOelN0ZXBDb21wb25lbnQpIHN0ZXBzOiBRdWVyeUxpc3Q8TnpTdGVwQ29tcG9uZW50PjtcblxuICBASW5wdXQoKSBuekN1cnJlbnQgPSAwO1xuICBASW5wdXQoKSBuekRpcmVjdGlvbjogTnpEaXJlY3Rpb25UeXBlID0gJ2hvcml6b250YWwnO1xuICBASW5wdXQoKSBuekxhYmVsUGxhY2VtZW50OiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ2hvcml6b250YWwnO1xuICBASW5wdXQoKSBuelR5cGU6ICdkZWZhdWx0JyB8ICduYXZpZ2F0aW9uJyA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpTaXplOiBOelNpemVEU1R5cGUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56U3RhcnRJbmRleCA9IDA7XG4gIEBJbnB1dCgpIG56U3RhdHVzOiBOelN0YXR1c1R5cGUgPSAncHJvY2Vzcyc7XG5cbiAgQElucHV0KClcbiAgc2V0IG56UHJvZ3Jlc3NEb3QodmFsdWU6IGJvb2xlYW4gfCBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVGVtcGxhdGVSZWY8dm9pZD47IHN0YXR1czogc3RyaW5nOyBpbmRleDogbnVtYmVyIH0+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuc2hvd1Byb2Nlc3NEb3QgPSB0cnVlO1xuICAgICAgdGhpcy5jdXN0b21Qcm9jZXNzRG90VGVtcGxhdGUgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93UHJvY2Vzc0RvdCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGVwcygpO1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56SW5kZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBpbmRleENoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHNob3dQcm9jZXNzRG90ID0gZmFsc2U7XG4gIGN1c3RvbVByb2Nlc3NEb3RUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IFRlbXBsYXRlUmVmPHZvaWQ+OyBzdGF0dXM6IHN0cmluZzsgaW5kZXg6IG51bWJlciB9PjtcbiAgY2xhc3NNYXA6IE5nQ2xhc3NUeXBlO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uelN0YXJ0SW5kZXggfHwgY2hhbmdlcy5uekRpcmVjdGlvbiB8fCBjaGFuZ2VzLm56U3RhdHVzIHx8IGNoYW5nZXMubnpDdXJyZW50KSB7XG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpEaXJlY3Rpb24gfHwgY2hhbmdlcy5uelByb2dyZXNzRG90IHx8IGNoYW5nZXMubnpMYWJlbFBsYWNlbWVudCB8fCBjaGFuZ2VzLm56U2l6ZSkge1xuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICBpZiAodGhpcy5pbmRleENoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5pbmRleENoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdGVwcykge1xuICAgICAgdGhpcy5zdGVwcy5jaGFuZ2VzXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDaGlsZHJlblN0ZXBzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0ZXBzKSB7XG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLnN0ZXBzLmxlbmd0aDtcbiAgICAgIHRoaXMuc3RlcHMudG9BcnJheSgpLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHN0ZXAub3V0U3RhdHVzID0gdGhpcy5uelN0YXR1cztcbiAgICAgICAgICBzdGVwLnNob3dQcm9jZXNzRG90ID0gdGhpcy5zaG93UHJvY2Vzc0RvdDtcbiAgICAgICAgICBpZiAodGhpcy5jdXN0b21Qcm9jZXNzRG90VGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHN0ZXAuY3VzdG9tUHJvY2Vzc1RlbXBsYXRlID0gdGhpcy5jdXN0b21Qcm9jZXNzRG90VGVtcGxhdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0ZXAuY2xpY2thYmxlID0gdGhpcy5uekluZGV4Q2hhbmdlLm9ic2VydmVycy5sZW5ndGggPiAwO1xuICAgICAgICAgIHN0ZXAuZGlyZWN0aW9uID0gdGhpcy5uekRpcmVjdGlvbjtcbiAgICAgICAgICBzdGVwLmluZGV4ID0gaW5kZXggKyB0aGlzLm56U3RhcnRJbmRleDtcbiAgICAgICAgICBzdGVwLmN1cnJlbnRJbmRleCA9IHRoaXMubnpDdXJyZW50O1xuICAgICAgICAgIHN0ZXAubGFzdCA9IGxlbmd0aCA9PT0gaW5kZXggKyAxO1xuICAgICAgICAgIHN0ZXAubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5pbmRleENoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLmluZGV4Q2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmluZGV4Q2hhbmdlU3Vic2NyaXB0aW9uID0gbWVyZ2UoLi4udGhpcy5zdGVwcy5tYXAoc3RlcCA9PiBzdGVwLmNsaWNrJCkpLnN1YnNjcmliZShpbmRleCA9PlxuICAgICAgICB0aGlzLm56SW5kZXhDaGFuZ2UuZW1pdChpbmRleClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsYXNzTWFwID0ge1xuICAgICAgW2BhbnQtc3RlcHMtJHt0aGlzLm56RGlyZWN0aW9ufWBdOiB0cnVlLFxuICAgICAgW2BhbnQtc3RlcHMtbGFiZWwtaG9yaXpvbnRhbGBdOiB0aGlzLm56RGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcsXG4gICAgICBbYGFudC1zdGVwcy1sYWJlbC12ZXJ0aWNhbGBdOlxuICAgICAgICAodGhpcy5zaG93UHJvY2Vzc0RvdCB8fCB0aGlzLm56TGFiZWxQbGFjZW1lbnQgPT09ICd2ZXJ0aWNhbCcpICYmIHRoaXMubnpEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyxcbiAgICAgIFtgYW50LXN0ZXBzLWRvdGBdOiB0aGlzLnNob3dQcm9jZXNzRG90LFxuICAgICAgWydhbnQtc3RlcHMtc21hbGwnXTogdGhpcy5uelNpemUgPT09ICdzbWFsbCcsXG4gICAgICBbJ2FudC1zdGVwcy1uYXZpZ2F0aW9uJ106IHRoaXMubnpUeXBlID09PSAnbmF2aWdhdGlvbidcbiAgICB9O1xuICB9XG59XG4iXX0=