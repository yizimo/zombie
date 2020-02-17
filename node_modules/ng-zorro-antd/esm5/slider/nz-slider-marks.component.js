/**
 * @fileoverview added by tsickle
 * Generated from: nz-slider-marks.component.ts
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
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import { isConfigAObject } from './nz-slider-definitions';
var NzSliderMarksComponent = /** @class */ (function () {
    function NzSliderMarksComponent() {
        this.nzLowerBound = null;
        this.nzUpperBound = null;
        this.nzVertical = false;
        this.nzIncluded = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSliderMarksComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzMarksArray) {
            this.buildMarks();
        }
        if (changes.nzMarksArray || changes.nzLowerBound || changes.nzUpperBound) {
            this.togglePointActive();
        }
    };
    /**
     * @param {?} _index
     * @param {?} mark
     * @return {?}
     */
    NzSliderMarksComponent.prototype.trackById = /**
     * @param {?} _index
     * @param {?} mark
     * @return {?}
     */
    function (_index, mark) {
        return mark.value;
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderMarksComponent.prototype.buildMarks = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var range = this.nzMax - this.nzMin;
        this.marks = this.nzMarksArray.map((/**
         * @param {?} mark
         * @return {?}
         */
        function (mark) {
            var value = mark.value, offset = mark.offset, config = mark.config;
            /** @type {?} */
            var style = _this.getMarkStyles(value, range, config);
            /** @type {?} */
            var label = isConfigAObject(config) ? config.label : config;
            return {
                label: label,
                offset: offset,
                style: style,
                value: value,
                config: config,
                active: false
            };
        }));
    };
    /**
     * @private
     * @param {?} value
     * @param {?} range
     * @param {?} config
     * @return {?}
     */
    NzSliderMarksComponent.prototype.getMarkStyles = /**
     * @private
     * @param {?} value
     * @param {?} range
     * @param {?} config
     * @return {?}
     */
    function (value, range, config) {
        /** @type {?} */
        var style;
        if (this.nzVertical) {
            style = {
                marginBottom: '-50%',
                bottom: ((value - this.nzMin) / range) * 100 + "%"
            };
        }
        else {
            style = {
                transform: "translate3d(-50%, 0, 0)",
                left: ((value - this.nzMin) / range) * 100 + "%"
            };
        }
        if (isConfigAObject(config) && config.style) {
            style = tslib_1.__assign({}, style, config.style);
        }
        return style;
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderMarksComponent.prototype.togglePointActive = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.marks && this.nzLowerBound !== null && this.nzUpperBound !== null) {
            this.marks.forEach((/**
             * @param {?} mark
             * @return {?}
             */
            function (mark) {
                /** @type {?} */
                var value = mark.value;
                /** @type {?} */
                var isActive = (!_this.nzIncluded && value === _this.nzUpperBound) ||
                    (_this.nzIncluded && value <= (/** @type {?} */ (_this.nzUpperBound)) && value >= (/** @type {?} */ (_this.nzLowerBound)));
                mark.active = isActive;
            }));
        }
    };
    NzSliderMarksComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'nz-slider-marks',
                    exportAs: 'nzSliderMarks',
                    template: "<div class=\"ant-slider-mark\">\n  <span\n    class=\"ant-slider-mark-text\"\n    *ngFor=\"let attr of marks; trackBy: trackById\"\n    [class.ant-slider-mark-active]=\"attr.active\"\n    [ngStyle]=\"attr.style\"\n    [innerHTML]=\"attr.label\">\n  </span>\n</div>"
                }] }
    ];
    NzSliderMarksComponent.propDecorators = {
        nzLowerBound: [{ type: Input }],
        nzUpperBound: [{ type: Input }],
        nzMarksArray: [{ type: Input }],
        nzMin: [{ type: Input }],
        nzMax: [{ type: Input }],
        nzVertical: [{ type: Input }],
        nzIncluded: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzSliderMarksComponent.prototype, "nzVertical", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzSliderMarksComponent.prototype, "nzIncluded", void 0);
    return NzSliderMarksComponent;
}());
export { NzSliderMarksComponent };
if (false) {
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzLowerBound;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzUpperBound;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzMarksArray;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzMin;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzMax;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzVertical;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzIncluded;
    /** @type {?} */
    NzSliderMarksComponent.prototype.marks;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2xpZGVyLyIsInNvdXJjZXMiOlsibnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZILE9BQU8sRUFBRSxZQUFZLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFFcEUsT0FBTyxFQUFFLGVBQWUsRUFBcUMsTUFBTSx5QkFBeUIsQ0FBQztBQUU3RjtJQUFBO1FBU1csaUJBQVksR0FBa0IsSUFBSSxDQUFDO1FBQ25DLGlCQUFZLEdBQWtCLElBQUksQ0FBQztRQUluQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFzRTlDLENBQUM7Ozs7O0lBbEVDLDRDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxPQUFPLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQyxZQUFZLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN4RSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7Ozs7OztJQUVELDBDQUFTOzs7OztJQUFULFVBQVUsTUFBYyxFQUFFLElBQW1CO1FBQzNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVPLDJDQUFVOzs7O0lBQWxCO1FBQUEsaUJBaUJDOztZQWhCTyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSztRQUVyQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZ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Q3ZCLHVDQUF1Qjs7SUFDdkIsNENBQTRDOztJQUM1Qyw0Q0FBNEM7O0lBRTVDLHVDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE5nU3R5bGVJbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBpc0NvbmZpZ0FPYmplY3QsIERpc3BsYXllZE1hcmssIEV4dGVuZGVkTWFyaywgTWFyayB9IGZyb20gJy4vbnotc2xpZGVyLWRlZmluaXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgc2VsZWN0b3I6ICduei1zbGlkZXItbWFya3MnLFxuICBleHBvcnRBczogJ256U2xpZGVyTWFya3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelNsaWRlck1hcmtzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbnpMb3dlckJvdW5kOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpVcHBlckJvdW5kOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpNYXJrc0FycmF5OiBFeHRlbmRlZE1hcmtbXTtcbiAgQElucHV0KCkgbnpNaW46IG51bWJlcjtcbiAgQElucHV0KCkgbnpNYXg6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VmVydGljYWwgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56SW5jbHVkZWQgPSBmYWxzZTtcblxuICBtYXJrczogRGlzcGxheWVkTWFya1tdO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uek1hcmtzQXJyYXkpIHtcbiAgICAgIHRoaXMuYnVpbGRNYXJrcygpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uek1hcmtzQXJyYXkgfHwgY2hhbmdlcy5uekxvd2VyQm91bmQgfHwgY2hhbmdlcy5uelVwcGVyQm91bmQpIHtcbiAgICAgIHRoaXMudG9nZ2xlUG9pbnRBY3RpdmUoKTtcbiAgICB9XG4gIH1cblxuICB0cmFja0J5SWQoX2luZGV4OiBudW1iZXIsIG1hcms6IERpc3BsYXllZE1hcmspOiBudW1iZXIge1xuICAgIHJldHVybiBtYXJrLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZE1hcmtzKCk6IHZvaWQge1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5uek1heCAtIHRoaXMubnpNaW47XG5cbiAgICB0aGlzLm1hcmtzID0gdGhpcy5uek1hcmtzQXJyYXkubWFwKG1hcmsgPT4ge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgb2Zmc2V0LCBjb25maWcgfSA9IG1hcms7XG4gICAgICBjb25zdCBzdHlsZSA9IHRoaXMuZ2V0TWFya1N0eWxlcyh2YWx1ZSwgcmFuZ2UsIGNvbmZpZyk7XG4gICAgICBjb25zdCBsYWJlbCA9IGlzQ29uZmlnQU9iamVjdChjb25maWcpID8gY29uZmlnLmxhYmVsIDogY29uZmlnO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYWJlbCxcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBzdHlsZSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWFya1N0eWxlcyh2YWx1ZTogbnVtYmVyLCByYW5nZTogbnVtYmVyLCBjb25maWc6IE1hcmspOiBOZ1N0eWxlSW50ZXJmYWNlIHtcbiAgICBsZXQgc3R5bGU7XG5cbiAgICBpZiAodGhpcy5uelZlcnRpY2FsKSB7XG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnLTUwJScsXG4gICAgICAgIGJvdHRvbTogYCR7KCh2YWx1ZSAtIHRoaXMubnpNaW4pIC8gcmFuZ2UpICogMTAwfSVgXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoLTUwJSwgMCwgMClgLFxuICAgICAgICBsZWZ0OiBgJHsoKHZhbHVlIC0gdGhpcy5uek1pbikgLyByYW5nZSkgKiAxMDB9JWBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGlzQ29uZmlnQU9iamVjdChjb25maWcpICYmIGNvbmZpZy5zdHlsZSkge1xuICAgICAgc3R5bGUgPSB7IC4uLnN0eWxlLCAuLi5jb25maWcuc3R5bGUgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZVBvaW50QWN0aXZlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1hcmtzICYmIHRoaXMubnpMb3dlckJvdW5kICE9PSBudWxsICYmIHRoaXMubnpVcHBlckJvdW5kICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm1hcmtzLmZvckVhY2gobWFyayA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbWFyay52YWx1ZTtcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPVxuICAgICAgICAgICghdGhpcy5uekluY2x1ZGVkICYmIHZhbHVlID09PSB0aGlzLm56VXBwZXJCb3VuZCkgfHxcbiAgICAgICAgICAodGhpcy5uekluY2x1ZGVkICYmIHZhbHVlIDw9IHRoaXMubnpVcHBlckJvdW5kISAmJiB2YWx1ZSA+PSB0aGlzLm56TG93ZXJCb3VuZCEpO1xuXG4gICAgICAgIG1hcmsuYWN0aXZlID0gaXNBY3RpdmU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==