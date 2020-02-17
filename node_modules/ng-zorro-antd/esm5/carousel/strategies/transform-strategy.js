/**
 * @fileoverview added by tsickle
 * Generated from: strategies/transform-strategy.ts
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
import { Subject } from 'rxjs';
import { NzCarouselBaseStrategy } from './base-strategy';
var NzCarouselTransformStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(NzCarouselTransformStrategy, _super);
    function NzCarouselTransformStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDragging = false;
        _this.isTransitioning = false;
        return _this;
    }
    Object.defineProperty(NzCarouselTransformStrategy.prototype, "vertical", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.carouselComponent)).vertical;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.dispose = /**
     * @return {?}
     */
    function () {
        _super.prototype.dispose.call(this);
        this.renderer.setStyle(this.slickTrackEl, 'transform', null);
    };
    /**
     * @param {?} contents
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.withCarouselContents = /**
     * @param {?} contents
     * @return {?}
     */
    function (contents) {
        var _this = this;
        _super.prototype.withCarouselContents.call(this, contents);
        /** @type {?} */
        var carousel = (/** @type {?} */ (this.carouselComponent));
        /** @type {?} */
        var activeIndex = carousel.activeIndex;
        if (this.contents.length) {
            this.renderer.setStyle(this.slickListEl, 'height', this.unitHeight + "px");
            if (this.vertical) {
                this.renderer.setStyle(this.slickTrackEl, 'width', this.unitWidth + "px");
                this.renderer.setStyle(this.slickTrackEl, 'height', this.length * this.unitHeight + "px");
                this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + -activeIndex * this.unitHeight + "px, 0)");
            }
            else {
                this.renderer.setStyle(this.slickTrackEl, 'height', this.unitHeight + "px");
                this.renderer.setStyle(this.slickTrackEl, 'width', this.length * this.unitWidth + "px");
                this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + -activeIndex * this.unitWidth + "px, 0, 0)");
            }
            this.contents.forEach((/**
             * @param {?} content
             * @return {?}
             */
            function (content) {
                _this.renderer.setStyle(content.el, 'position', 'relative');
                _this.renderer.setStyle(content.el, 'width', _this.unitWidth + "px");
                _this.renderer.setStyle(content.el, 'height', _this.unitHeight + "px");
            }));
        }
    };
    /**
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.switch = /**
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    function (_f, _t) {
        var _this = this;
        var t = this.getFromToInBoundary(_f, _t).to;
        /** @type {?} */
        var complete$ = new Subject();
        this.renderer.setStyle(this.slickTrackEl, 'transition', "transform " + (/** @type {?} */ (this.carouselComponent)).nzTransitionSpeed + "ms ease");
        if (this.vertical) {
            this.verticalTransform(_f, _t);
        }
        else {
            this.horizontalTransform(_f, _t);
        }
        this.isTransitioning = true;
        this.isDragging = false;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.renderer.setStyle(_this.slickTrackEl, 'transition', null);
            _this.contents.forEach((/**
             * @param {?} content
             * @return {?}
             */
            function (content) {
                _this.renderer.setStyle(content.el, _this.vertical ? 'top' : 'left', null);
            }));
            if (_this.vertical) {
                _this.renderer.setStyle(_this.slickTrackEl, 'transform', "translate3d(0, " + -t * _this.unitHeight + "px, 0)");
            }
            else {
                _this.renderer.setStyle(_this.slickTrackEl, 'transform', "translate3d(" + -t * _this.unitWidth + "px, 0, 0)");
            }
            _this.isTransitioning = false;
            complete$.next();
            complete$.complete();
        }), (/** @type {?} */ (this.carouselComponent)).nzTransitionSpeed);
        return complete$.asObservable();
    };
    /**
     * @param {?} _vector
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.dragging = /**
     * @param {?} _vector
     * @return {?}
     */
    function (_vector) {
        if (this.isTransitioning) {
            return;
        }
        /** @type {?} */
        var activeIndex = (/** @type {?} */ (this.carouselComponent)).activeIndex;
        if ((/** @type {?} */ (this.carouselComponent)).vertical) {
            if (!this.isDragging && this.length > 2) {
                if (activeIndex === this.maxIndex) {
                    this.prepareVerticalContext(true);
                }
                else if (activeIndex === 0) {
                    this.prepareVerticalContext(false);
                }
            }
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + (-activeIndex * this.unitHeight + _vector.x) + "px, 0)");
        }
        else {
            if (!this.isDragging && this.length > 2) {
                if (activeIndex === this.maxIndex) {
                    this.prepareHorizontalContext(true);
                }
                else if (activeIndex === 0) {
                    this.prepareHorizontalContext(false);
                }
            }
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + (-activeIndex * this.unitWidth + _vector.x) + "px, 0, 0)");
        }
        this.isDragging = true;
    };
    /**
     * @private
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.verticalTransform = /**
     * @private
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    function (_f, _t) {
        var _a = this.getFromToInBoundary(_f, _t), f = _a.from, t = _a.to;
        /** @type {?} */
        var needToAdjust = this.length > 2 && _t !== t;
        if (needToAdjust) {
            this.prepareVerticalContext(t < f);
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + -_t * this.unitHeight + "px, 0)");
        }
        else {
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + -t * this.unitHeight + "px, 0");
        }
    };
    /**
     * @private
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.horizontalTransform = /**
     * @private
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    function (_f, _t) {
        var _a = this.getFromToInBoundary(_f, _t), f = _a.from, t = _a.to;
        /** @type {?} */
        var needToAdjust = this.length > 2 && _t !== t;
        if (needToAdjust) {
            this.prepareHorizontalContext(t < f);
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + -_t * this.unitWidth + "px, 0, 0)");
        }
        else {
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + -t * this.unitWidth + "px, 0, 0");
        }
    };
    /**
     * @private
     * @param {?} lastToFirst
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.prepareVerticalContext = /**
     * @private
     * @param {?} lastToFirst
     * @return {?}
     */
    function (lastToFirst) {
        if (lastToFirst) {
            this.renderer.setStyle(this.firstEl, 'top', this.length * this.unitHeight + "px");
            this.renderer.setStyle(this.lastEl, 'top', null);
        }
        else {
            this.renderer.setStyle(this.firstEl, 'top', null);
            this.renderer.setStyle(this.lastEl, 'top', -this.unitHeight * this.length + "px");
        }
    };
    /**
     * @private
     * @param {?} lastToFirst
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.prepareHorizontalContext = /**
     * @private
     * @param {?} lastToFirst
     * @return {?}
     */
    function (lastToFirst) {
        if (lastToFirst) {
            this.renderer.setStyle(this.firstEl, 'left', this.length * this.unitWidth + "px");
            this.renderer.setStyle(this.lastEl, 'left', null);
        }
        else {
            this.renderer.setStyle(this.firstEl, 'left', null);
            this.renderer.setStyle(this.lastEl, 'left', -this.unitWidth * this.length + "px");
        }
    };
    return NzCarouselTransformStrategy;
}(NzCarouselBaseStrategy));
export { NzCarouselTransformStrategy };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzCarouselTransformStrategy.prototype.isDragging;
    /**
     * @type {?}
     * @private
     */
    NzCarouselTransformStrategy.prototype.isTransitioning;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbInN0cmF0ZWdpZXMvdHJhbnNmb3JtLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpEO0lBQWlELHVEQUFzQjtJQUF2RTtRQUFBLHFFQXFLQztRQXBLUyxnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixxQkFBZSxHQUFHLEtBQUssQ0FBQzs7SUFtS2xDLENBQUM7SUFqS0Msc0JBQVksaURBQVE7Ozs7O1FBQXBCO1lBQ0UsT0FBTyxtQkFBQSxJQUFJLENBQUMsaUJBQWlCLEVBQUMsQ0FBQyxRQUFRLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7Ozs7SUFFRCw2Q0FBTzs7O0lBQVA7UUFDRSxpQkFBTSxPQUFPLFdBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7OztJQUVELDBEQUFvQjs7OztJQUFwQixVQUFxQixRQUFzRDtRQUEzRSxpQkE2QkM7UUE1QkMsaUJBQU0sb0JBQW9CLFlBQUMsUUFBUSxDQUFDLENBQUM7O1lBRS9CLFFBQVEsR0FBRyxtQkFBQSxJQUFJLENBQUMsaUJBQWlCLEVBQUM7O1lBQ2xDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVztRQUV4QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFLLElBQUksQ0FBQyxVQUFVLE9BQUksQ0FBQyxDQUFD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ICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuLi9uei1jYXJvdXNlbC1jb250ZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQb2ludGVyVmVjdG9yIH0gZnJvbSAnLi4vbnotY2Fyb3VzZWwtZGVmaW5pdGlvbnMnO1xuXG5pbXBvcnQgeyBOekNhcm91c2VsQmFzZVN0cmF0ZWd5IH0gZnJvbSAnLi9iYXNlLXN0cmF0ZWd5JztcblxuZXhwb3J0IGNsYXNzIE56Q2Fyb3VzZWxUcmFuc2Zvcm1TdHJhdGVneSBleHRlbmRzIE56Q2Fyb3VzZWxCYXNlU3RyYXRlZ3kge1xuICBwcml2YXRlIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcblxuICBwcml2YXRlIGdldCB2ZXJ0aWNhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jYXJvdXNlbENvbXBvbmVudCEudmVydGljYWw7XG4gIH1cblxuICBkaXNwb3NlKCk6IHZvaWQge1xuICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAndHJhbnNmb3JtJywgbnVsbCk7XG4gIH1cblxuICB3aXRoQ2Fyb3VzZWxDb250ZW50cyhjb250ZW50czogUXVlcnlMaXN0PE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlPiB8IG51bGwpOiB2b2lkIHtcbiAgICBzdXBlci53aXRoQ2Fyb3VzZWxDb250ZW50cyhjb250ZW50cyk7XG5cbiAgICBjb25zdCBjYXJvdXNlbCA9IHRoaXMuY2Fyb3VzZWxDb21wb25lbnQhO1xuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gY2Fyb3VzZWwuYWN0aXZlSW5kZXg7XG5cbiAgICBpZiAodGhpcy5jb250ZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja0xpc3RFbCwgJ2hlaWdodCcsIGAke3RoaXMudW5pdEhlaWdodH1weGApO1xuXG4gICAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAnd2lkdGgnLCBgJHt0aGlzLnVuaXRXaWR0aH1weGApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAnaGVpZ2h0JywgYCR7dGhpcy5sZW5ndGggKiB0aGlzLnVuaXRIZWlnaHR9cHhgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICB0aGlzLnNsaWNrVHJhY2tFbCxcbiAgICAgICAgICAndHJhbnNmb3JtJyxcbiAgICAgICAgICBgdHJhbnNsYXRlM2QoMCwgJHstYWN0aXZlSW5kZXggKiB0aGlzLnVuaXRIZWlnaHR9cHgsIDApYFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2tFbCwgJ2hlaWdodCcsIGAke3RoaXMudW5pdEhlaWdodH1weGApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAnd2lkdGgnLCBgJHt0aGlzLmxlbmd0aCAqIHRoaXMudW5pdFdpZHRofXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHstYWN0aXZlSW5kZXggKiB0aGlzLnVuaXRXaWR0aH1weCwgMCwgMClgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250ZW50cy5mb3JFYWNoKChjb250ZW50OiBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSkgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNvbnRlbnQuZWwsICdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNvbnRlbnQuZWwsICd3aWR0aCcsIGAke3RoaXMudW5pdFdpZHRofXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY29udGVudC5lbCwgJ2hlaWdodCcsIGAke3RoaXMudW5pdEhlaWdodH1weGApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3dpdGNoKF9mOiBudW1iZXIsIF90OiBudW1iZXIpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICBjb25zdCB7IHRvOiB0IH0gPSB0aGlzLmdldEZyb21Ub0luQm91bmRhcnkoX2YsIF90KTtcbiAgICBjb25zdCBjb21wbGV0ZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIHRoaXMuc2xpY2tUcmFja0VsLFxuICAgICAgJ3RyYW5zaXRpb24nLFxuICAgICAgYHRyYW5zZm9ybSAke3RoaXMuY2Fyb3VzZWxDb21wb25lbnQhLm56VHJhbnNpdGlvblNwZWVkfW1zIGVhc2VgXG4gICAgKTtcblxuICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICB0aGlzLnZlcnRpY2FsVHJhbnNmb3JtKF9mLCBfdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaG9yaXpvbnRhbFRyYW5zZm9ybShfZiwgX3QpO1xuICAgIH1cblxuICAgIHRoaXMuaXNUcmFuc2l0aW9uaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2tFbCwgJ3RyYW5zaXRpb24nLCBudWxsKTtcbiAgICAgIHRoaXMuY29udGVudHMuZm9yRWFjaCgoY29udGVudDogTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUpID0+IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjb250ZW50LmVsLCB0aGlzLnZlcnRpY2FsID8gJ3RvcCcgOiAnbGVmdCcsIG51bGwpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoMCwgJHstdCAqIHRoaXMudW5pdEhlaWdodH1weCwgMClgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHstdCAqIHRoaXMudW5pdFdpZHRofXB4LCAwLCAwKWApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmlzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuXG4gICAgICBjb21wbGV0ZSQubmV4dCgpO1xuICAgICAgY29tcGxldGUkLmNvbXBsZXRlKCk7XG4gICAgfSwgdGhpcy5jYXJvdXNlbENvbXBvbmVudCEubnpUcmFuc2l0aW9uU3BlZWQpO1xuXG4gICAgcmV0dXJuIGNvbXBsZXRlJC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGRyYWdnaW5nKF92ZWN0b3I6IFBvaW50ZXJWZWN0b3IpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuY2Fyb3VzZWxDb21wb25lbnQhLmFjdGl2ZUluZGV4O1xuXG4gICAgaWYgKHRoaXMuY2Fyb3VzZWxDb21wb25lbnQhLnZlcnRpY2FsKSB7XG4gICAgICBpZiAoIXRoaXMuaXNEcmFnZ2luZyAmJiB0aGlzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgaWYgKGFjdGl2ZUluZGV4ID09PSB0aGlzLm1heEluZGV4KSB7XG4gICAgICAgICAgdGhpcy5wcmVwYXJlVmVydGljYWxDb250ZXh0KHRydWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGl2ZUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5wcmVwYXJlVmVydGljYWxDb250ZXh0KGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgdGhpcy5zbGlja1RyYWNrRWwsXG4gICAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgICBgdHJhbnNsYXRlM2QoMCwgJHstYWN0aXZlSW5kZXggKiB0aGlzLnVuaXRIZWlnaHQgKyBfdmVjdG9yLnh9cHgsIDApYFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcgJiYgdGhpcy5sZW5ndGggPiAyKSB7XG4gICAgICAgIGlmIChhY3RpdmVJbmRleCA9PT0gdGhpcy5tYXhJbmRleCkge1xuICAgICAgICAgIHRoaXMucHJlcGFyZUhvcml6b250YWxDb250ZXh0KHRydWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGl2ZUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5wcmVwYXJlSG9yaXpvbnRhbENvbnRleHQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLnNsaWNrVHJhY2tFbCxcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgIGB0cmFuc2xhdGUzZCgkey1hY3RpdmVJbmRleCAqIHRoaXMudW5pdFdpZHRoICsgX3ZlY3Rvci54fXB4LCAwLCAwKWBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgdmVydGljYWxUcmFuc2Zvcm0oX2Y6IG51bWJlciwgX3Q6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHsgZnJvbTogZiwgdG86IHQgfSA9IHRoaXMuZ2V0RnJvbVRvSW5Cb3VuZGFyeShfZiwgX3QpO1xuICAgIGNvbnN0IG5lZWRUb0FkanVzdCA9IHRoaXMubGVuZ3RoID4gMiAmJiBfdCAhPT0gdDtcblxuICAgIGlmIChuZWVkVG9BZGp1c3QpIHtcbiAgICAgIHRoaXMucHJlcGFyZVZlcnRpY2FsQ29udGV4dCh0IDwgZik7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKDAsICR7LV90ICogdGhpcy51bml0SGVpZ2h0fXB4LCAwKWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKDAsICR7LXQgKiB0aGlzLnVuaXRIZWlnaHR9cHgsIDBgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhvcml6b250YWxUcmFuc2Zvcm0oX2Y6IG51bWJlciwgX3Q6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHsgZnJvbTogZiwgdG86IHQgfSA9IHRoaXMuZ2V0RnJvbVRvSW5Cb3VuZGFyeShfZiwgX3QpO1xuICAgIGNvbnN0IG5lZWRUb0FkanVzdCA9IHRoaXMubGVuZ3RoID4gMiAmJiBfdCAhPT0gdDtcblxuICAgIGlmIChuZWVkVG9BZGp1c3QpIHtcbiAgICAgIHRoaXMucHJlcGFyZUhvcml6b250YWxDb250ZXh0KHQgPCBmKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHstX3QgKiB0aGlzLnVuaXRXaWR0aH1weCwgMCwgMClgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2tFbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgkey10ICogdGhpcy51bml0V2lkdGh9cHgsIDAsIDBgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVWZXJ0aWNhbENvbnRleHQobGFzdFRvRmlyc3Q6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAobGFzdFRvRmlyc3QpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5maXJzdEVsLCAndG9wJywgYCR7dGhpcy5sZW5ndGggKiB0aGlzLnVuaXRIZWlnaHR9cHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5sYXN0RWwsICd0b3AnLCBudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmZpcnN0RWwsICd0b3AnLCBudWxsKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5sYXN0RWwsICd0b3AnLCBgJHstdGhpcy51bml0SGVpZ2h0ICogdGhpcy5sZW5ndGh9cHhgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVIb3Jpem9udGFsQ29udGV4dChsYXN0VG9GaXJzdDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChsYXN0VG9GaXJzdCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmZpcnN0RWwsICdsZWZ0JywgYCR7dGhpcy5sZW5ndGggKiB0aGlzLnVuaXRXaWR0aH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmxhc3RFbCwgJ2xlZnQnLCBudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmZpcnN0RWwsICdsZWZ0JywgbnVsbCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMubGFzdEVsLCAnbGVmdCcsIGAkey10aGlzLnVuaXRXaWR0aCAqIHRoaXMubGVuZ3RofXB4YCk7XG4gICAgfVxuICB9XG59XG4iXX0=