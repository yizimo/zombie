/**
 * @fileoverview added by tsickle
 * Generated from: nz-rate-item.component.ts
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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
var NzRateItemComponent = /** @class */ (function () {
    function NzRateItemComponent() {
        this.allowHalf = false;
        this.itemHover = new EventEmitter();
        this.itemClick = new EventEmitter();
    }
    /**
     * @param {?} isHalf
     * @return {?}
     */
    NzRateItemComponent.prototype.hoverRate = /**
     * @param {?} isHalf
     * @return {?}
     */
    function (isHalf) {
        this.itemHover.next(isHalf && this.allowHalf);
    };
    /**
     * @param {?} isHalf
     * @return {?}
     */
    NzRateItemComponent.prototype.clickRate = /**
     * @param {?} isHalf
     * @return {?}
     */
    function (isHalf) {
        this.itemClick.next(isHalf && this.allowHalf);
    };
    NzRateItemComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: '[nz-rate-item]',
                    exportAs: 'nzRateItem',
                    template: "<div class=\"ant-rate-star-second\"\n  (mouseover)=\"hoverRate(false); $event.stopPropagation();\"\n  (click)=\"clickRate(false);\">\n  <ng-template [ngTemplateOutlet]=\"character || defaultCharacter\"></ng-template>\n</div>\n<div class=\"ant-rate-star-first\"\n  (mouseover)=\"hoverRate(true); $event.stopPropagation();\"\n  (click)=\"clickRate(true);\">\n  <ng-template [ngTemplateOutlet]=\"character || defaultCharacter\"></ng-template>\n</div>\n\n<ng-template #defaultCharacter>\n  <i nz-icon\n    nzType=\"star\"\n    nzTheme=\"fill\"></i>\n</ng-template>\n"
                }] }
    ];
    NzRateItemComponent.propDecorators = {
        character: [{ type: Input }],
        allowHalf: [{ type: Input }],
        itemHover: [{ type: Output }],
        itemClick: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzRateItemComponent.prototype, "allowHalf", void 0);
    return NzRateItemComponent;
}());
export { NzRateItemComponent };
if (false) {
    /** @type {?} */
    NzRateItemComponent.prototype.character;
    /** @type {?} */
    NzRateItemComponent.prototype.allowHalf;
    /** @type {?} */
    NzRateItemComponent.prototype.itemHover;
    /** @type {?} */
    NzRateItemComponent.prototype.itemClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmF0ZS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmF0ZS8iLCJzb3VyY2VzIjpbIm56LXJhdGUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxEO0lBQUE7UUFTMkIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUNqQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN4QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQVM3RCxDQUFDOzs7OztJQVBDLHVDQUFTOzs7O0lBQVQsVUFBVSxNQUFlO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFFRCx1Q0FBUzs7OztJQUFULFVBQVUsTUFBZTtRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsOGpCQUE0QztpQkFDN0M7Ozs0QkFFRSxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsTUFBTTs0QkFDTixNQUFNOztJQUZrQjtRQUFmLFlBQVksRUFBRTs7MERBQTRCO0lBV3RELDBCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FiWSxtQkFBbUI7OztJQUM5Qix3Q0FBc0M7O0lBQ3RDLHdDQUFvRDs7SUFDcEQsd0NBQTJEOztJQUMzRCx3Q0FBMkQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnW256LXJhdGUtaXRlbV0nLFxuICBleHBvcnRBczogJ256UmF0ZUl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotcmF0ZS1pdGVtLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelJhdGVJdGVtQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY2hhcmFjdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFsbG93SGFsZjogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgaXRlbUhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgaXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGhvdmVyUmF0ZShpc0hhbGY6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLml0ZW1Ib3Zlci5uZXh0KGlzSGFsZiAmJiB0aGlzLmFsbG93SGFsZik7XG4gIH1cblxuICBjbGlja1JhdGUoaXNIYWxmOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pdGVtQ2xpY2submV4dChpc0hhbGYgJiYgdGhpcy5hbGxvd0hhbGYpO1xuICB9XG59XG4iXX0=