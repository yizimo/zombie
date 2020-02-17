/**
 * @fileoverview added by tsickle
 * Generated from: nz-tabs-ink-bar.directive.ts
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
import { Directive, ElementRef, Input, NgZone, Renderer2 } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
export class NzTabsInkBarDirective {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} ngZone
     */
    constructor(renderer, elementRef, ngZone) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.nzAnimated = false;
        this.nzPositionMode = 'horizontal';
        renderer.addClass(elementRef.nativeElement, 'ant-tabs-ink-bar');
    }
    /**
     * @param {?} element
     * @return {?}
     */
    alignToElement(element) {
        if (typeof requestAnimationFrame !== 'undefined') {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                requestAnimationFrame((/**
                 * @return {?}
                 */
                () => this.setStyles(element)));
            }));
        }
        else {
            this.setStyles(element);
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    setStyles(element) {
        /** when horizontal remove height style and add transform left **/
        if (this.nzPositionMode === 'horizontal') {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'height');
            this.renderer.setStyle(this.elementRef.nativeElement, 'transform', `translate3d(${this.getLeftPosition(element)}, 0px, 0px)`);
            this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.getElementWidth(element));
        }
        else {
            /** when vertical remove width style and add transform top **/
            this.renderer.removeStyle(this.elementRef.nativeElement, 'width');
            this.renderer.setStyle(this.elementRef.nativeElement, 'transform', `translate3d(0px, ${this.getTopPosition(element)}, 0px)`);
            this.renderer.setStyle(this.elementRef.nativeElement, 'height', this.getElementHeight(element));
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getLeftPosition(element) {
        return element ? element.offsetLeft + 'px' : '0';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getElementWidth(element) {
        return element ? element.offsetWidth + 'px' : '0';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getTopPosition(element) {
        return element ? element.offsetTop + 'px' : '0';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getElementHeight(element) {
        return element ? element.offsetHeight + 'px' : '0';
    }
}
NzTabsInkBarDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-tabs-ink-bar]',
                exportAs: 'nzTabsInkBar',
                host: {
                    '[class.ant-tabs-ink-bar-animated]': 'nzAnimated',
                    '[class.ant-tabs-ink-bar-no-animated]': '!nzAnimated'
                }
            },] }
];
/** @nocollapse */
NzTabsInkBarDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: NgZone }
];
NzTabsInkBarDirective.propDecorators = {
    nzAnimated: [{ type: Input }],
    nzPositionMode: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTabsInkBarDirective.prototype, "nzAnimated", void 0);
if (false) {
    /** @type {?} */
    NzTabsInkBarDirective.prototype.nzAnimated;
    /** @type {?} */
    NzTabsInkBarDirective.prototype.nzPositionMode;
    /**
     * @type {?}
     * @private
     */
    NzTabsInkBarDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTabsInkBarDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTabsInkBarDirective.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFicy1pbmstYmFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFicy8iLCJzb3VyY2VzIjpbIm56LXRhYnMtaW5rLWJhci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVlsRCxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7SUFLaEMsWUFBb0IsUUFBbUIsRUFBVSxVQUFzQixFQUFVLE1BQWM7UUFBM0UsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSnRFLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbkMsbUJBQWMsR0FBc0IsWUFBWSxDQUFDO1FBR3hELFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLE9BQW9CO1FBQ2pDLElBQUksT0FBTyxxQkFBcUIsS0FBSyxXQUFXLEVBQUU7WUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztZQUFDLEdBQUcsRUFBRTtnQkFDakMscUJBQXFCOzs7Z0JBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDO1lBQ3ZELENBQUMsRUFBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxPQUFvQjtRQUM1QixrRUFBa0U7UUFDbEUsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFlBQVksRUFBRTtZQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQzdCLFdBQVcsRUFDWCxlQUFlLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FDMUQsQ0FBQztZQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDL0Y7YUFBTTtZQUNMLDhEQUE4RDtZQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQzdCLFdBQVcsRUFDWCxvQkFBb0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUN6RCxDQUFDO1lBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ2pHO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsT0FBb0I7UUFDbEMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsT0FBb0I7UUFDbEMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsT0FBb0I7UUFDakMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxPQUFvQjtRQUNuQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNyRCxDQUFDOzs7WUEvREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixJQUFJLEVBQUU7b0JBQ0osbUNBQW1DLEVBQUUsWUFBWTtvQkFDakQsc0NBQXNDLEVBQUUsYUFBYTtpQkFDdEQ7YUFDRjs7OztZQWI4QyxTQUFTO1lBQXBDLFVBQVU7WUFBUyxNQUFNOzs7eUJBZTFDLEtBQUs7NkJBRUwsS0FBSzs7QUFGbUI7SUFBZixZQUFZLEVBQUU7O3lEQUFvQjs7O0lBQTVDLDJDQUE0Qzs7SUFFNUMsK0NBQTBEOzs7OztJQUU5Qyx5Q0FBMkI7Ozs7O0lBQUUsMkNBQThCOzs7OztJQUFFLHVDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBOZ1pvbmUsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOelRhYlBvc2l0aW9uTW9kZSB9IGZyb20gJy4vbnotdGFic2V0LmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei10YWJzLWluay1iYXJdJyxcbiAgZXhwb3J0QXM6ICduelRhYnNJbmtCYXInLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdGFicy1pbmstYmFyLWFuaW1hdGVkXSc6ICduekFuaW1hdGVkJyxcbiAgICAnW2NsYXNzLmFudC10YWJzLWluay1iYXItbm8tYW5pbWF0ZWRdJzogJyFuekFuaW1hdGVkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VGFic0lua0JhckRpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFuaW1hdGVkID0gZmFsc2U7XG5cbiAgQElucHV0KCkgbnpQb3NpdGlvbk1vZGU6IE56VGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXRhYnMtaW5rLWJhcicpO1xuICB9XG5cbiAgYWxpZ25Ub0VsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuc2V0U3R5bGVzKGVsZW1lbnQpKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0eWxlcyhlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBzZXRTdHlsZXMoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAvKiogd2hlbiBob3Jpem9udGFsIHJlbW92ZSBoZWlnaHQgc3R5bGUgYW5kIGFkZCB0cmFuc2Zvcm0gbGVmdCAqKi9cbiAgICBpZiAodGhpcy5uelBvc2l0aW9uTW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgIGB0cmFuc2xhdGUzZCgke3RoaXMuZ2V0TGVmdFBvc2l0aW9uKGVsZW1lbnQpfSwgMHB4LCAwcHgpYFxuICAgICAgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIHRoaXMuZ2V0RWxlbWVudFdpZHRoKGVsZW1lbnQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyoqIHdoZW4gdmVydGljYWwgcmVtb3ZlIHdpZHRoIHN0eWxlIGFuZCBhZGQgdHJhbnNmb3JtIHRvcCAqKi9cbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgICBgdHJhbnNsYXRlM2QoMHB4LCAke3RoaXMuZ2V0VG9wUG9zaXRpb24oZWxlbWVudCl9LCAwcHgpYFxuICAgICAgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCB0aGlzLmdldEVsZW1lbnRIZWlnaHQoZWxlbWVudCkpO1xuICAgIH1cbiAgfVxuXG4gIGdldExlZnRQb3NpdGlvbihlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50Lm9mZnNldExlZnQgKyAncHgnIDogJzAnO1xuICB9XG5cbiAgZ2V0RWxlbWVudFdpZHRoKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcbiAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQub2Zmc2V0V2lkdGggKyAncHgnIDogJzAnO1xuICB9XG5cbiAgZ2V0VG9wUG9zaXRpb24oZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5vZmZzZXRUb3AgKyAncHgnIDogJzAnO1xuICB9XG5cbiAgZ2V0RWxlbWVudEhlaWdodChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50Lm9mZnNldEhlaWdodCArICdweCcgOiAnMCc7XG4gIH1cbn1cbiJdfQ==