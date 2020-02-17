/**
 * @fileoverview added by tsickle
 * Generated from: no-animation/nz-no-animation.directive.ts
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
import { coerceElement } from '@angular/cdk/coercion';
import { Directive, ElementRef, Inject, Input, Optional, Renderer2 } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { InputBoolean } from '../util/convert';
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
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzNoAnimationDirective.prototype, "nzNoAnimation", void 0);
    return NzNoAnimationDirective;
}());
export { NzNoAnimationDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm8tYW5pbWF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbIm5vLWFuaW1hdGlvbi9uei1uby1hbmltYXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQWEsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUU3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBRXpDLGtCQUFrQixHQUFHLHFCQUFxQjtBQUVoRDtJQU9FLGdDQUNVLE9BQW1CLEVBQ25CLFFBQW1CLEVBQ3dCLGFBQXFCO1FBRmhFLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUN3QixrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQUxqRCxrQkFBYSxHQUFZLEtBQUssQ0FBQztJQU1yRCxDQUFDOzs7O0lBRUosNENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxnREFBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFTyw0Q0FBVzs7OztJQUFuQjs7WUFDUSxPQUFPLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLGdCQUFnQixFQUFFO1lBQ2pFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3JEO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztTQUN4RDtJQUNILENBQUM7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLGVBQWU7aUJBQzFCOzs7O2dCQVZrQyxVQUFVO2dCQUFzQyxTQUFTOzZDQWlCdkYsUUFBUSxZQUFJLE1BQU0sU0FBQyxxQkFBcUI7OztnQ0FMMUMsS0FBSzs7SUFBbUI7UUFBZixZQUFZLEVBQUU7O2lFQUFnQztJQTJCMUQsNkJBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQTVCWSxzQkFBc0I7OztJQUNqQywrQ0FBd0Q7Ozs7O0lBR3RELHlDQUEyQjs7Ozs7SUFDM0IsMENBQTJCOzs7OztJQUMzQiwrQ0FBd0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgY29lcmNlRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE9uQ2hhbmdlcywgT3B0aW9uYWwsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQU5JTUFUSU9OX01PRFVMRV9UWVBFIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vdXRpbC9jb252ZXJ0JztcblxuY29uc3QgRElTQUJMRURfQ0xBU1NOQU1FID0gJ256LWFuaW1hdGUtZGlzYWJsZWQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnpOb0FuaW1hdGlvbl0nLFxuICBleHBvcnRBczogJ256Tm9BbmltYXRpb24nXG59KVxuZXhwb3J0IGNsYXNzIE56Tm9BbmltYXRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpOb0FuaW1hdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTklNQVRJT05fTU9EVUxFX1RZUEUpIHByaXZhdGUgYW5pbWF0aW9uVHlwZTogc3RyaW5nXG4gICkge31cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDbGFzcygpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDbGFzcygpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50ID0gY29lcmNlRWxlbWVudCh0aGlzLmVsZW1lbnQpO1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5uek5vQW5pbWF0aW9uIHx8IHRoaXMuYW5pbWF0aW9uVHlwZSA9PT0gJ05vb3BBbmltYXRpb25zJykge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBESVNBQkxFRF9DTEFTU05BTUUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIERJU0FCTEVEX0NMQVNTTkFNRSk7XG4gICAgfVxuICB9XG59XG4iXX0=