/**
 * @fileoverview added by tsickle
 * Generated from: strategies/transform-strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Subject } from 'rxjs';
import { NzCarouselBaseStrategy } from './base-strategy';
export class NzCarouselTransformStrategy extends NzCarouselBaseStrategy {
    constructor() {
        super(...arguments);
        this.isDragging = false;
        this.isTransitioning = false;
    }
    /**
     * @private
     * @return {?}
     */
    get vertical() {
        return (/** @type {?} */ (this.carouselComponent)).vertical;
    }
    /**
     * @return {?}
     */
    dispose() {
        super.dispose();
        this.renderer.setStyle(this.slickTrackEl, 'transform', null);
    }
    /**
     * @param {?} contents
     * @return {?}
     */
    withCarouselContents(contents) {
        super.withCarouselContents(contents);
        /** @type {?} */
        const carousel = (/** @type {?} */ (this.carouselComponent));
        /** @type {?} */
        const activeIndex = carousel.activeIndex;
        if (this.contents.length) {
            this.renderer.setStyle(this.slickListEl, 'height', `${this.unitHeight}px`);
            if (this.vertical) {
                this.renderer.setStyle(this.slickTrackEl, 'width', `${this.unitWidth}px`);
                this.renderer.setStyle(this.slickTrackEl, 'height', `${this.length * this.unitHeight}px`);
                this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(0, ${-activeIndex * this.unitHeight}px, 0)`);
            }
            else {
                this.renderer.setStyle(this.slickTrackEl, 'height', `${this.unitHeight}px`);
                this.renderer.setStyle(this.slickTrackEl, 'width', `${this.length * this.unitWidth}px`);
                this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(${-activeIndex * this.unitWidth}px, 0, 0)`);
            }
            this.contents.forEach((/**
             * @param {?} content
             * @return {?}
             */
            (content) => {
                this.renderer.setStyle(content.el, 'position', 'relative');
                this.renderer.setStyle(content.el, 'width', `${this.unitWidth}px`);
                this.renderer.setStyle(content.el, 'height', `${this.unitHeight}px`);
            }));
        }
    }
    /**
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    switch(_f, _t) {
        const { to: t } = this.getFromToInBoundary(_f, _t);
        /** @type {?} */
        const complete$ = new Subject();
        this.renderer.setStyle(this.slickTrackEl, 'transition', `transform ${(/** @type {?} */ (this.carouselComponent)).nzTransitionSpeed}ms ease`);
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
        () => {
            this.renderer.setStyle(this.slickTrackEl, 'transition', null);
            this.contents.forEach((/**
             * @param {?} content
             * @return {?}
             */
            (content) => {
                this.renderer.setStyle(content.el, this.vertical ? 'top' : 'left', null);
            }));
            if (this.vertical) {
                this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(0, ${-t * this.unitHeight}px, 0)`);
            }
            else {
                this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(${-t * this.unitWidth}px, 0, 0)`);
            }
            this.isTransitioning = false;
            complete$.next();
            complete$.complete();
        }), (/** @type {?} */ (this.carouselComponent)).nzTransitionSpeed);
        return complete$.asObservable();
    }
    /**
     * @param {?} _vector
     * @return {?}
     */
    dragging(_vector) {
        if (this.isTransitioning) {
            return;
        }
        /** @type {?} */
        const activeIndex = (/** @type {?} */ (this.carouselComponent)).activeIndex;
        if ((/** @type {?} */ (this.carouselComponent)).vertical) {
            if (!this.isDragging && this.length > 2) {
                if (activeIndex === this.maxIndex) {
                    this.prepareVerticalContext(true);
                }
                else if (activeIndex === 0) {
                    this.prepareVerticalContext(false);
                }
            }
            this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(0, ${-activeIndex * this.unitHeight + _vector.x}px, 0)`);
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
            this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(${-activeIndex * this.unitWidth + _vector.x}px, 0, 0)`);
        }
        this.isDragging = true;
    }
    /**
     * @private
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    verticalTransform(_f, _t) {
        const { from: f, to: t } = this.getFromToInBoundary(_f, _t);
        /** @type {?} */
        const needToAdjust = this.length > 2 && _t !== t;
        if (needToAdjust) {
            this.prepareVerticalContext(t < f);
            this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(0, ${-_t * this.unitHeight}px, 0)`);
        }
        else {
            this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(0, ${-t * this.unitHeight}px, 0`);
        }
    }
    /**
     * @private
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    horizontalTransform(_f, _t) {
        const { from: f, to: t } = this.getFromToInBoundary(_f, _t);
        /** @type {?} */
        const needToAdjust = this.length > 2 && _t !== t;
        if (needToAdjust) {
            this.prepareHorizontalContext(t < f);
            this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(${-_t * this.unitWidth}px, 0, 0)`);
        }
        else {
            this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(${-t * this.unitWidth}px, 0, 0`);
        }
    }
    /**
     * @private
     * @param {?} lastToFirst
     * @return {?}
     */
    prepareVerticalContext(lastToFirst) {
        if (lastToFirst) {
            this.renderer.setStyle(this.firstEl, 'top', `${this.length * this.unitHeight}px`);
            this.renderer.setStyle(this.lastEl, 'top', null);
        }
        else {
            this.renderer.setStyle(this.firstEl, 'top', null);
            this.renderer.setStyle(this.lastEl, 'top', `${-this.unitHeight * this.length}px`);
        }
    }
    /**
     * @private
     * @param {?} lastToFirst
     * @return {?}
     */
    prepareHorizontalContext(lastToFirst) {
        if (lastToFirst) {
            this.renderer.setStyle(this.firstEl, 'left', `${this.length * this.unitWidth}px`);
            this.renderer.setStyle(this.lastEl, 'left', null);
        }
        else {
            this.renderer.setStyle(this.firstEl, 'left', null);
            this.renderer.setStyle(this.lastEl, 'left', `${-this.unitWidth * this.length}px`);
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbInN0cmF0ZWdpZXMvdHJhbnNmb3JtLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekQsTUFBTSxPQUFPLDJCQUE0QixTQUFRLHNCQUFzQjtJQUF2RTs7UUFDVSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0lBbUtsQyxDQUFDOzs7OztJQWpLQyxJQUFZLFFBQVE7UUFDbEIsT0FBTyxtQkFBQSxJQUFJLENBQUMsaUJBQWlCLEVBQUMsQ0FBQyxRQUFRLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxRQUFzRDtRQUN6RSxLQUFLLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7O2NBRS9CLFFBQVEsR0FBRyxtQkFBQSxJQUFJLENBQUMsaUJBQWlCLEVBQUM7O2NBQ2xDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVztRQUV4QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7WUFFM0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDO2dCQUMxRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7Z0JBQzFGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNwQixJQUFJLENBQUMsWUFBWSxFQUNqQixXQUFXLEVBQ1gsa0JBQWtCLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLFFBQVEsQ0FDekQsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7Z0JBQzVFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQztnQkFDeEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsZUFBZSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxXQUFXLENBQUMsQ0FBQzthQUNqSDtZQUVELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztZQUFDLENBQUMsT0FBbUMsRUFBRSxFQUFFO2dCQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQztnQkFDbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztZQUN2RSxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLEVBQVUsRUFBRSxFQUFVO2NBQ3JCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDOztjQUM1QyxTQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVE7UUFFckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQ2pCLFlBQVksRUFDWixhQUFhLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsRUFBQyxDQUFDLGlCQUFpQixTQUFTLENBQ2hFLENBQUM7UUFFRixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ0wsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNsQztRQUVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXhCLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztZQUFDLENBQUMsT0FBbUMsRUFBRSxFQUFFO2dCQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzNFLENBQUMsRUFBQyxDQUFDO1lBRUgsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsUUFBUSxDQUFDLENBQUM7YUFDeEc7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxXQUFXLENBQUMsQ0FBQzthQUN2RztZQUVELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBRTdCLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNqQixTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxHQUFFLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsRUFBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFOUMsT0FBTyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsT0FBc0I7UUFDN0IsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLE9BQU87U0FDUjs7Y0FFSyxXQUFXLEdBQUcsbUJBQUEsSUFBSSxDQUFDLGlCQUFpQixFQUFDLENBQUMsV0FBVztRQUV2RCxJQUFJLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsRUFBQyxDQUFDLFFBQVEsRUFBRTtZQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdkMsSUFBSSxXQUFXLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDakMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNuQztxQkFBTSxJQUFJLFdBQVcsS0FBSyxDQUFDLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDcEM7YUFDRjtZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNwQixJQUFJLENBQUMsWUFBWSxFQUNqQixXQUFXLEVBQ1gsa0JBQWtCLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUNyRSxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QyxJQUFJLFdBQVcsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3JDO3FCQUFNLElBQUksV0FBVyxLQUFLLENBQUMsRUFBRTtvQkFDNUIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN0QzthQUNGO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQ2pCLFdBQVcsRUFDWCxlQUFlLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUNwRSxDQUFDO1NBQ0g7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDOzs7Ozs7O0lBRU8saUJBQWlCLENBQUMsRUFBVSxFQUFFLEVBQVU7Y0FDeEMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQzs7Y0FDckQsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO1FBRWhELElBQUksWUFBWSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLFFBQVEsQ0FBQyxDQUFDO1NBQ3pHO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsT0FBTyxDQUFDLENBQUM7U0FDdkc7SUFDSCxDQUFDOzs7Ozs7O0lBRU8sbUJBQW1CLENBQUMsRUFBVSxFQUFFLEVBQVU7Y0FDMUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQzs7Y0FDckQsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO1FBRWhELElBQUksWUFBWSxFQUFFO1lBQ2hCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsZUFBZSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxXQUFXLENBQUMsQ0FBQztTQUN4RzthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxVQUFVLENBQUMsQ0FBQztTQUN0RztJQUNILENBQUM7Ozs7OztJQUVPLHNCQUFzQixDQUFDLFdBQW9CO1FBQ2pELElBQUksV0FBVyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO1lBQ2xGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2xEO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztTQUNuRjtJQUNILENBQUM7Ozs7OztJQUVPLHdCQUF3QixDQUFDLFdBQW9CO1FBQ25ELElBQUksV0FBVyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDO1lBQ2xGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ25EO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztTQUNuRjtJQUNILENBQUM7Q0FDRjs7Ozs7O0lBcEtDLGlEQUEyQjs7Ozs7SUFDM0Isc0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4uL256LWNhcm91c2VsLWNvbnRlbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFBvaW50ZXJWZWN0b3IgfSBmcm9tICcuLi9uei1jYXJvdXNlbC1kZWZpbml0aW9ucyc7XG5cbmltcG9ydCB7IE56Q2Fyb3VzZWxCYXNlU3RyYXRlZ3kgfSBmcm9tICcuL2Jhc2Utc3RyYXRlZ3knO1xuXG5leHBvcnQgY2xhc3MgTnpDYXJvdXNlbFRyYW5zZm9ybVN0cmF0ZWd5IGV4dGVuZHMgTnpDYXJvdXNlbEJhc2VTdHJhdGVneSB7XG4gIHByaXZhdGUgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICBwcml2YXRlIGlzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuXG4gIHByaXZhdGUgZ2V0IHZlcnRpY2FsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNhcm91c2VsQ29tcG9uZW50IS52ZXJ0aWNhbDtcbiAgfVxuXG4gIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd0cmFuc2Zvcm0nLCBudWxsKTtcbiAgfVxuXG4gIHdpdGhDYXJvdXNlbENvbnRlbnRzKGNvbnRlbnRzOiBRdWVyeUxpc3Q8TnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmU+IHwgbnVsbCk6IHZvaWQge1xuICAgIHN1cGVyLndpdGhDYXJvdXNlbENvbnRlbnRzKGNvbnRlbnRzKTtcblxuICAgIGNvbnN0IGNhcm91c2VsID0gdGhpcy5jYXJvdXNlbENvbXBvbmVudCE7XG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSBjYXJvdXNlbC5hY3RpdmVJbmRleDtcblxuICAgIGlmICh0aGlzLmNvbnRlbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrTGlzdEVsLCAnaGVpZ2h0JywgYCR7dGhpcy51bml0SGVpZ2h0fXB4YCk7XG5cbiAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd3aWR0aCcsIGAke3RoaXMudW5pdFdpZHRofXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICdoZWlnaHQnLCBgJHt0aGlzLmxlbmd0aCAqIHRoaXMudW5pdEhlaWdodH1weGApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgIHRoaXMuc2xpY2tUcmFja0VsLFxuICAgICAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgICAgIGB0cmFuc2xhdGUzZCgwLCAkey1hY3RpdmVJbmRleCAqIHRoaXMudW5pdEhlaWdodH1weCwgMClgXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAnaGVpZ2h0JywgYCR7dGhpcy51bml0SGVpZ2h0fXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd3aWR0aCcsIGAke3RoaXMubGVuZ3RoICogdGhpcy51bml0V2lkdGh9cHhgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2tFbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgkey1hY3RpdmVJbmRleCAqIHRoaXMudW5pdFdpZHRofXB4LCAwLCAwKWApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnRlbnRzLmZvckVhY2goKGNvbnRlbnQ6IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlKSA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY29udGVudC5lbCwgJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY29udGVudC5lbCwgJ3dpZHRoJywgYCR7dGhpcy51bml0V2lkdGh9cHhgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjb250ZW50LmVsLCAnaGVpZ2h0JywgYCR7dGhpcy51bml0SGVpZ2h0fXB4YCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzd2l0Y2goX2Y6IG51bWJlciwgX3Q6IG51bWJlcik6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIGNvbnN0IHsgdG86IHQgfSA9IHRoaXMuZ2V0RnJvbVRvSW5Cb3VuZGFyeShfZiwgX3QpO1xuICAgIGNvbnN0IGNvbXBsZXRlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgdGhpcy5zbGlja1RyYWNrRWwsXG4gICAgICAndHJhbnNpdGlvbicsXG4gICAgICBgdHJhbnNmb3JtICR7dGhpcy5jYXJvdXNlbENvbXBvbmVudCEubnpUcmFuc2l0aW9uU3BlZWR9bXMgZWFzZWBcbiAgICApO1xuXG4gICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgIHRoaXMudmVydGljYWxUcmFuc2Zvcm0oX2YsIF90KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ob3Jpem9udGFsVHJhbnNmb3JtKF9mLCBfdCk7XG4gICAgfVxuXG4gICAgdGhpcy5pc1RyYW5zaXRpb25pbmcgPSB0cnVlO1xuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAndHJhbnNpdGlvbicsIG51bGwpO1xuICAgICAgdGhpcy5jb250ZW50cy5mb3JFYWNoKChjb250ZW50OiBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSkgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNvbnRlbnQuZWwsIHRoaXMudmVydGljYWwgPyAndG9wJyA6ICdsZWZ0JywgbnVsbCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2tFbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgwLCAkey10ICogdGhpcy51bml0SGVpZ2h0fXB4LCAwKWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2tFbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgkey10ICogdGhpcy51bml0V2lkdGh9cHgsIDAsIDApYCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG5cbiAgICAgIGNvbXBsZXRlJC5uZXh0KCk7XG4gICAgICBjb21wbGV0ZSQuY29tcGxldGUoKTtcbiAgICB9LCB0aGlzLmNhcm91c2VsQ29tcG9uZW50IS5uelRyYW5zaXRpb25TcGVlZCk7XG5cbiAgICByZXR1cm4gY29tcGxldGUkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgZHJhZ2dpbmcoX3ZlY3RvcjogUG9pbnRlclZlY3Rvcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5jYXJvdXNlbENvbXBvbmVudCEuYWN0aXZlSW5kZXg7XG5cbiAgICBpZiAodGhpcy5jYXJvdXNlbENvbXBvbmVudCEudmVydGljYWwpIHtcbiAgICAgIGlmICghdGhpcy5pc0RyYWdnaW5nICYmIHRoaXMubGVuZ3RoID4gMikge1xuICAgICAgICBpZiAoYWN0aXZlSW5kZXggPT09IHRoaXMubWF4SW5kZXgpIHtcbiAgICAgICAgICB0aGlzLnByZXBhcmVWZXJ0aWNhbENvbnRleHQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlSW5kZXggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnByZXBhcmVWZXJ0aWNhbENvbnRleHQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLnNsaWNrVHJhY2tFbCxcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgIGB0cmFuc2xhdGUzZCgwLCAkey1hY3RpdmVJbmRleCAqIHRoaXMudW5pdEhlaWdodCArIF92ZWN0b3IueH1weCwgMClgXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuaXNEcmFnZ2luZyAmJiB0aGlzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgaWYgKGFjdGl2ZUluZGV4ID09PSB0aGlzLm1heEluZGV4KSB7XG4gICAgICAgICAgdGhpcy5wcmVwYXJlSG9yaXpvbnRhbENvbnRleHQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlSW5kZXggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnByZXBhcmVIb3Jpem9udGFsQ29udGV4dChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHRoaXMuc2xpY2tUcmFja0VsLFxuICAgICAgICAndHJhbnNmb3JtJyxcbiAgICAgICAgYHRyYW5zbGF0ZTNkKCR7LWFjdGl2ZUluZGV4ICogdGhpcy51bml0V2lkdGggKyBfdmVjdG9yLnh9cHgsIDAsIDApYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSB2ZXJ0aWNhbFRyYW5zZm9ybShfZjogbnVtYmVyLCBfdDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgeyBmcm9tOiBmLCB0bzogdCB9ID0gdGhpcy5nZXRGcm9tVG9JbkJvdW5kYXJ5KF9mLCBfdCk7XG4gICAgY29uc3QgbmVlZFRvQWRqdXN0ID0gdGhpcy5sZW5ndGggPiAyICYmIF90ICE9PSB0O1xuXG4gICAgaWYgKG5lZWRUb0FkanVzdCkge1xuICAgICAgdGhpcy5wcmVwYXJlVmVydGljYWxDb250ZXh0KHQgPCBmKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoMCwgJHstX3QgKiB0aGlzLnVuaXRIZWlnaHR9cHgsIDApYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoMCwgJHstdCAqIHRoaXMudW5pdEhlaWdodH1weCwgMGApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaG9yaXpvbnRhbFRyYW5zZm9ybShfZjogbnVtYmVyLCBfdDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgeyBmcm9tOiBmLCB0bzogdCB9ID0gdGhpcy5nZXRGcm9tVG9JbkJvdW5kYXJ5KF9mLCBfdCk7XG4gICAgY29uc3QgbmVlZFRvQWRqdXN0ID0gdGhpcy5sZW5ndGggPiAyICYmIF90ICE9PSB0O1xuXG4gICAgaWYgKG5lZWRUb0FkanVzdCkge1xuICAgICAgdGhpcy5wcmVwYXJlSG9yaXpvbnRhbENvbnRleHQodCA8IGYpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2tFbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgkey1fdCAqIHRoaXMudW5pdFdpZHRofXB4LCAwLCAwKWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKCR7LXQgKiB0aGlzLnVuaXRXaWR0aH1weCwgMCwgMGApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZVZlcnRpY2FsQ29udGV4dChsYXN0VG9GaXJzdDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChsYXN0VG9GaXJzdCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmZpcnN0RWwsICd0b3AnLCBgJHt0aGlzLmxlbmd0aCAqIHRoaXMudW5pdEhlaWdodH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmxhc3RFbCwgJ3RvcCcsIG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZmlyc3RFbCwgJ3RvcCcsIG51bGwpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmxhc3RFbCwgJ3RvcCcsIGAkey10aGlzLnVuaXRIZWlnaHQgKiB0aGlzLmxlbmd0aH1weGApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZUhvcml6b250YWxDb250ZXh0KGxhc3RUb0ZpcnN0OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGxhc3RUb0ZpcnN0KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZmlyc3RFbCwgJ2xlZnQnLCBgJHt0aGlzLmxlbmd0aCAqIHRoaXMudW5pdFdpZHRofXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMubGFzdEVsLCAnbGVmdCcsIG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZmlyc3RFbCwgJ2xlZnQnLCBudWxsKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5sYXN0RWwsICdsZWZ0JywgYCR7LXRoaXMudW5pdFdpZHRoICogdGhpcy5sZW5ndGh9cHhgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==