/**
 * @fileoverview added by tsickle
 * Generated from: header-picker.component.ts
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
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { valueFunctionProp, CandyDate, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { AbstractPickerComponent } from './abstract-picker.component';
/**
 * The base picker for header panels, current support: Year/Month
 */
var HeaderPickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(HeaderPickerComponent, _super);
    function HeaderPickerComponent(i18n, cdr, dateHelper, noAnimation) {
        return _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
    }
    /**
     * @return {?}
     */
    HeaderPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.panelMode = this.endPanelMode;
        /** @type {?} */
        var allHeaderPanels = ['decade', 'year', 'month'];
        this.supportPanels = allHeaderPanels.slice(0, allHeaderPanels.indexOf(this.endPanelMode) + 1);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    HeaderPickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (changes.nzRenderExtraFooter) {
            this.extraFooter = valueFunctionProp(this.nzRenderExtraFooter);
        }
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    HeaderPickerComponent.prototype.onPanelModeChange = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        if (this.supportPanels.indexOf(mode) > -1) {
            this.panelMode = mode;
        }
        else {
            // Since the default "click year" logic can be "year panel" -> "date panel", we need force to the end panel otherwise
            this.panelMode = this.endPanelMode;
        }
    };
    /**
     * @param {?} mode
     * @param {?} value
     * @return {?}
     */
    HeaderPickerComponent.prototype.onChooseValue = /**
     * @param {?} mode
     * @param {?} value
     * @return {?}
     */
    function (mode, value) {
        if (this.endPanelMode === mode) {
            _super.prototype.onValueChange.call(this, value);
            this.closeOverlay();
        }
    };
    /**
     * @param {?} open
     * @return {?}
     */
    HeaderPickerComponent.prototype.onOpenChange = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        if (!open) {
            this.cleanUp();
        }
        this.nzOnOpenChange.emit(open);
    };
    // Restore some initial props to let open as new in next time
    // Restore some initial props to let open as new in next time
    /**
     * @private
     * @return {?}
     */
    HeaderPickerComponent.prototype.cleanUp = 
    // Restore some initial props to let open as new in next time
    /**
     * @private
     * @return {?}
     */
    function () {
        this.panelMode = this.endPanelMode;
    };
    HeaderPickerComponent.decorators = [
        { type: Component, args: [{
                    template: ""
                }] }
    ];
    /** @nocollapse */
    HeaderPickerComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ChangeDetectorRef },
        { type: DateHelperService },
        { type: NzNoAnimationDirective }
    ]; };
    HeaderPickerComponent.propDecorators = {
        nzPlaceHolder: [{ type: Input }],
        nzRenderExtraFooter: [{ type: Input }],
        nzDefaultValue: [{ type: Input }],
        nzFormat: [{ type: Input }]
    };
    return HeaderPickerComponent;
}(AbstractPickerComponent));
export { HeaderPickerComponent };
if (false) {
    /** @type {?} */
    HeaderPickerComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    HeaderPickerComponent.prototype.nzRenderExtraFooter;
    /** @type {?} */
    HeaderPickerComponent.prototype.nzDefaultValue;
    /** @type {?} */
    HeaderPickerComponent.prototype.nzFormat;
    /** @type {?} */
    HeaderPickerComponent.prototype.endPanelMode;
    /** @type {?} */
    HeaderPickerComponent.prototype.panelMode;
    /** @type {?} */
    HeaderPickerComponent.prototype.extraFooter;
    /**
     * @type {?}
     * @private
     */
    HeaderPickerComponent.prototype.supportPanels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsiaGVhZGVyLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFpRCxNQUFNLGVBQWUsQ0FBQztBQUVuSCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFnQixzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQU90RTtJQUcyQyxpREFBdUI7SUFhaEUsK0JBQ0UsSUFBbUIsRUFDbkIsR0FBc0IsRUFDdEIsVUFBNkIsRUFDN0IsV0FBb0M7ZUFFcEMsa0JBQU0sSUFBSSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFDRSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7O1lBRTdCLGVBQWUsR0FBZ0IsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztRQUNoRSxJQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7Ozs7O0lBRUQsMkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLGlCQUFNLFdBQVcsWUFBQyxPQUFPLENBQUMsQ0FBQztRQUUzQixJQUFJLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRTtZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ2hFO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxpREFBaUI7Ozs7SUFBakIsVUFBa0IsSUFBZTtRQUMvQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxxSEFBcUg7WUFDckgsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsNkNBQWE7Ozs7O0lBQWIsVUFBYyxJQUF3QixFQUFFLEtBQWdCO1FBQ3RELElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7WUFDOUIsaUJBQU0sYUFBYSxZQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7O0lBRUQsNENBQVk7Ozs7SUFBWixVQUFhLElBQWE7UUFDeEIsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCw2REFBNkQ7Ozs7OztJQUNyRCx1Q0FBTzs7Ozs7O0lBQWY7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDckMsQ0FBQzs7Z0JBckVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsRUFBRTtpQkFDYjs7OztnQkFYMkIsYUFBYTtnQkFIaEMsaUJBQWlCO2dCQUdqQixpQkFBaUI7Z0JBRDJCLHNCQUFzQjs7O2dDQWN4RSxLQUFLO3NDQUVMLEtBQUs7aUNBQ0wsS0FBSzsyQkFDTCxLQUFLOztJQThEUiw0QkFBQztDQUFBLEFBdEVELENBRzJDLHVCQUF1QixHQW1FakU7U0FuRVkscUJBQXFCOzs7SUFDaEMsOENBQStCOztJQUUvQixvREFBdUU7O0lBQ3ZFLCtDQUFtQzs7SUFDbkMseUNBQTBCOztJQUUxQiw2Q0FBaUM7O0lBQ2pDLDBDQUFxQjs7SUFDckIsNENBQXdDOzs7OztJQUV4Qyw4Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB2YWx1ZUZ1bmN0aW9uUHJvcCwgQ2FuZHlEYXRlLCBGdW5jdGlvblByb3AsIE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5pbXBvcnQgeyBBYnN0cmFjdFBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vYWJzdHJhY3QtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYW5lbE1vZGUgfSBmcm9tICcuL3N0YW5kYXJkLXR5cGVzJztcblxuLyoqXG4gKiBUaGUgYmFzZSBwaWNrZXIgZm9yIGhlYWRlciBwYW5lbHMsIGN1cnJlbnQgc3VwcG9ydDogWWVhci9Nb250aFxuICovXG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYGBcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZztcblxuICBASW5wdXQoKSBuelJlbmRlckV4dHJhRm9vdGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc+O1xuICBASW5wdXQoKSBuekRlZmF1bHRWYWx1ZTogQ2FuZHlEYXRlO1xuICBASW5wdXQoKSBuekZvcm1hdDogc3RyaW5nOyAvLyBbQ2FubXBsZW1lbnRlZCBieSBzdWIgY2xhc3NdIFRoZSBvdXRwdXQgZm9ybWF0XG5cbiAgZW5kUGFuZWxNb2RlOiBTdXBwb3J0SGVhZGVyUGFuZWw7IC8vIFtJbXBsZW1lbnRlZCBieSBzdWIgY2xhc3NdIFRoZSBmaW5hbCBwYW5lbCBmb3IgcGlja2luZyBhIGRhdGVcbiAgcGFuZWxNb2RlOiBQYW5lbE1vZGU7IC8vIEN1cnJlbnQgcGFuZWwgbW9kZVxuICBleHRyYUZvb3RlcjogVGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBzdXBwb3J0UGFuZWxzOiBQYW5lbE1vZGVbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBpMThuOiBOekkxOG5TZXJ2aWNlLFxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UsXG4gICAgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXG4gICkge1xuICAgIHN1cGVyKGkxOG4sIGNkciwgZGF0ZUhlbHBlciwgbm9BbmltYXRpb24pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcblxuICAgIHRoaXMucGFuZWxNb2RlID0gdGhpcy5lbmRQYW5lbE1vZGU7XG5cbiAgICBjb25zdCBhbGxIZWFkZXJQYW5lbHM6IFBhbmVsTW9kZVtdID0gWydkZWNhZGUnLCAneWVhcicsICdtb250aCddO1xuICAgIHRoaXMuc3VwcG9ydFBhbmVscyA9IGFsbEhlYWRlclBhbmVscy5zbGljZSgwLCBhbGxIZWFkZXJQYW5lbHMuaW5kZXhPZih0aGlzLmVuZFBhbmVsTW9kZSkgKyAxKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcblxuICAgIGlmIChjaGFuZ2VzLm56UmVuZGVyRXh0cmFGb290ZXIpIHtcbiAgICAgIHRoaXMuZXh0cmFGb290ZXIgPSB2YWx1ZUZ1bmN0aW9uUHJvcCh0aGlzLm56UmVuZGVyRXh0cmFGb290ZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9uUGFuZWxNb2RlQ2hhbmdlKG1vZGU6IFBhbmVsTW9kZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1cHBvcnRQYW5lbHMuaW5kZXhPZihtb2RlKSA+IC0xKSB7XG4gICAgICB0aGlzLnBhbmVsTW9kZSA9IG1vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNpbmNlIHRoZSBkZWZhdWx0IFwiY2xpY2sgeWVhclwiIGxvZ2ljIGNhbiBiZSBcInllYXIgcGFuZWxcIiAtPiBcImRhdGUgcGFuZWxcIiwgd2UgbmVlZCBmb3JjZSB0byB0aGUgZW5kIHBhbmVsIG90aGVyd2lzZVxuICAgICAgdGhpcy5wYW5lbE1vZGUgPSB0aGlzLmVuZFBhbmVsTW9kZTtcbiAgICB9XG4gIH1cblxuICBvbkNob29zZVZhbHVlKG1vZGU6IFN1cHBvcnRIZWFkZXJQYW5lbCwgdmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmVuZFBhbmVsTW9kZSA9PT0gbW9kZSkge1xuICAgICAgc3VwZXIub25WYWx1ZUNoYW5nZSh2YWx1ZSk7XG5cbiAgICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XG4gICAgfVxuICB9XG5cbiAgb25PcGVuQ2hhbmdlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIW9wZW4pIHtcbiAgICAgIHRoaXMuY2xlYW5VcCgpO1xuICAgIH1cbiAgICB0aGlzLm56T25PcGVuQ2hhbmdlLmVtaXQob3Blbik7XG4gIH1cblxuICAvLyBSZXN0b3JlIHNvbWUgaW5pdGlhbCBwcm9wcyB0byBsZXQgb3BlbiBhcyBuZXcgaW4gbmV4dCB0aW1lXG4gIHByaXZhdGUgY2xlYW5VcCgpOiB2b2lkIHtcbiAgICB0aGlzLnBhbmVsTW9kZSA9IHRoaXMuZW5kUGFuZWxNb2RlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFN1cHBvcnRIZWFkZXJQYW5lbCA9ICd5ZWFyJyB8ICdtb250aCc7XG4iXX0=