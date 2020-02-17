/**
 * @fileoverview added by tsickle
 * Generated from: nz-row.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Input, NgZone, Renderer2 } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { responsiveMap, NzDomEventService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
var NzRowDirective = /** @class */ (function () {
    function NzRowDirective(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.mediaMatcher = mediaMatcher;
        this.ngZone = ngZone;
        this.platform = platform;
        this.nzDomEventService = nzDomEventService;
        this.nzAlign = 'top';
        this.nzJustify = 'start';
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-row';
        this.actualGutter$ = new Subject();
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    NzRowDirective.prototype.calculateGutter = /**
     * @return {?}
     */
    function () {
        if (typeof this.nzGutter !== 'object') {
            return this.nzGutter;
        }
        else if (this.breakPoint && this.nzGutter[this.breakPoint]) {
            return this.nzGutter[this.breakPoint];
        }
        else {
            return 0;
        }
    };
    /**
     * @return {?}
     */
    NzRowDirective.prototype.updateGutter = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var actualGutter = this.calculateGutter();
        if (this.actualGutter !== actualGutter) {
            this.actualGutter = actualGutter;
            this.actualGutter$.next(this.actualGutter);
            this.renderer.setStyle(this.el, 'margin-left', "-" + this.actualGutter / 2 + "px");
            this.renderer.setStyle(this.el, 'margin-right', "-" + this.actualGutter / 2 + "px");
        }
    };
    /**
     * @return {?}
     */
    NzRowDirective.prototype.watchMedia = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(responsiveMap).map((/**
         * @param {?} screen
         * @return {?}
         */
        function (screen) {
            /** @type {?} */
            var castBP = (/** @type {?} */ (screen));
            /** @type {?} */
            var matchBelow = _this.mediaMatcher.matchMedia(responsiveMap[castBP]).matches;
            if (matchBelow) {
                _this.breakPoint = castBP;
            }
        }));
        this.updateGutter();
    };
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    NzRowDirective.prototype.setClassMap = /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a["" + this.prefixCls] = !this.nzType,
            _a[this.prefixCls + "-" + this.nzType] = this.nzType,
            _a[this.prefixCls + "-" + this.nzType + "-" + this.nzAlign] = this.nzType && this.nzAlign,
            _a[this.prefixCls + "-" + this.nzType + "-" + this.nzJustify] = this.nzType && this.nzJustify,
            _a);
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    /**
     * @return {?}
     */
    NzRowDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.watchMedia();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzRowDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzType || changes.nzAlign || changes.nzJustify) {
            this.setClassMap();
        }
        if (changes.nzGutter) {
            this.updateGutter();
        }
    };
    /**
     * @return {?}
     */
    NzRowDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.platform.isBrowser) {
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize((/**
             * @return {?}
             */
            function () { return _this.nzDomEventService.unregisterResizeListener(); })))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.watchMedia(); }));
        }
    };
    /**
     * @return {?}
     */
    NzRowDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzRowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-row],nz-row',
                    exportAs: 'nzRow',
                    providers: [NzUpdateHostClassService]
                },] }
    ];
    /** @nocollapse */
    NzRowDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzUpdateHostClassService },
        { type: MediaMatcher },
        { type: NgZone },
        { type: Platform },
        { type: NzDomEventService }
    ]; };
    NzRowDirective.propDecorators = {
        nzType: [{ type: Input }],
        nzAlign: [{ type: Input }],
        nzJustify: [{ type: Input }],
        nzGutter: [{ type: Input }]
    };
    return NzRowDirective;
}());
export { NzRowDirective };
if (false) {
    /** @type {?} */
    NzRowDirective.prototype.nzType;
    /** @type {?} */
    NzRowDirective.prototype.nzAlign;
    /** @type {?} */
    NzRowDirective.prototype.nzJustify;
    /** @type {?} */
    NzRowDirective.prototype.nzGutter;
    /**
     * @type {?}
     * @private
     */
    NzRowDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzRowDirective.prototype.prefixCls;
    /**
     * @type {?}
     * @private
     */
    NzRowDirective.prototype.breakPoint;
    /** @type {?} */
    NzRowDirective.prototype.actualGutter;
    /** @type {?} */
    NzRowDirective.prototype.actualGutter$;
    /** @type {?} */
    NzRowDirective.prototype.destroy$;
    /** @type {?} */
    NzRowDirective.prototype.elementRef;
    /** @type {?} */
    NzRowDirective.prototype.renderer;
    /** @type {?} */
    NzRowDirective.prototype.nzUpdateHostClassService;
    /** @type {?} */
    NzRowDirective.prototype.mediaMatcher;
    /** @type {?} */
    NzRowDirective.prototype.ngZone;
    /** @type {?} */
    NzRowDirective.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzRowDirective.prototype.nzDomEventService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZ3JpZC8iLCJzb3VyY2VzIjpbIm56LXJvdy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFJTixTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsYUFBYSxFQUliLGlCQUFpQixFQUNqQix3QkFBd0IsRUFDekIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLckQ7SUEyREUsd0JBQ1MsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsd0JBQWtELEVBQ2xELFlBQTBCLEVBQzFCLE1BQWMsRUFDZCxRQUFrQixFQUNqQixpQkFBb0M7UUFOckMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDakIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQTNEckMsWUFBTyxHQUFnQixLQUFLLENBQUM7UUFDN0IsY0FBUyxHQUFjLE9BQU8sQ0FBQztRQUVoQyxPQUFFLEdBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ2hELGNBQVMsR0FBRyxTQUFTLENBQUM7UUFH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SUFDNUMsNEJBQXdEOzs7OztJQUN4RCxtQ0FBOEI7Ozs7O0lBQzlCLG9DQUFpQzs7SUFDakMsc0NBQXFCOztJQUNyQix1Q0FBc0M7O0lBQ3RDLGtDQUF5Qjs7SUE2Q3ZCLG9DQUE2Qjs7SUFDN0Isa0NBQTBCOztJQUMxQixrREFBeUQ7O0lBQ3pELHNDQUFpQzs7SUFDakMsZ0NBQXFCOztJQUNyQixrQ0FBeUI7Ozs7O0lBQ3pCLDJDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWVkaWFNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICByZXNwb25zaXZlTWFwLFxuICBJbmRleGFibGVPYmplY3QsXG4gIE56QWxpZ25UeXBlLFxuICBOekJyZWFrUG9pbnQsXG4gIE56RG9tRXZlbnRTZXJ2aWNlLFxuICBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2Vcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbmFsaXplLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCB0eXBlIE56SnVzdGlmeSA9ICdzdGFydCcgfCAnZW5kJyB8ICdjZW50ZXInIHwgJ3NwYWNlLWFyb3VuZCcgfCAnc3BhY2UtYmV0d2Vlbic7XG5leHBvcnQgdHlwZSBOekdyaWRUeXBlID0gJ2ZsZXgnIHwgbnVsbDtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LXJvd10sbnotcm93JyxcbiAgZXhwb3J0QXM6ICduelJvdycsXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTnpSb3dEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbnpUeXBlOiBOekdyaWRUeXBlO1xuICBASW5wdXQoKSBuekFsaWduOiBOekFsaWduVHlwZSA9ICd0b3AnO1xuICBASW5wdXQoKSBuekp1c3RpZnk6IE56SnVzdGlmeSA9ICdzdGFydCc7XG4gIEBJbnB1dCgpIG56R3V0dGVyOiBudW1iZXIgfCBJbmRleGFibGVPYmplY3Q7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1yb3cnO1xuICBwcml2YXRlIGJyZWFrUG9pbnQ6IE56QnJlYWtQb2ludDtcbiAgYWN0dWFsR3V0dGVyOiBudW1iZXI7XG4gIGFjdHVhbEd1dHRlciQgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcblxuICBjYWxjdWxhdGVHdXR0ZXIoKTogbnVtYmVyIHtcbiAgICBpZiAodHlwZW9mIHRoaXMubnpHdXR0ZXIgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gdGhpcy5uekd1dHRlcjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJlYWtQb2ludCAmJiB0aGlzLm56R3V0dGVyW3RoaXMuYnJlYWtQb2ludF0pIHtcbiAgICAgIHJldHVybiB0aGlzLm56R3V0dGVyW3RoaXMuYnJlYWtQb2ludF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUd1dHRlcigpOiB2b2lkIHtcbiAgICBjb25zdCBhY3R1YWxHdXR0ZXIgPSB0aGlzLmNhbGN1bGF0ZUd1dHRlcigpO1xuICAgIGlmICh0aGlzLmFjdHVhbEd1dHRlciAhPT0gYWN0dWFsR3V0dGVyKSB7XG4gICAgICB0aGlzLmFjdHVhbEd1dHRlciA9IGFjdHVhbEd1dHRlcjtcbiAgICAgIHRoaXMuYWN0dWFsR3V0dGVyJC5uZXh0KHRoaXMuYWN0dWFsR3V0dGVyKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ21hcmdpbi1sZWZ0JywgYC0ke3RoaXMuYWN0dWFsR3V0dGVyIC8gMn1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnbWFyZ2luLXJpZ2h0JywgYC0ke3RoaXMuYWN0dWFsR3V0dGVyIC8gMn1weGApO1xuICAgIH1cbiAgfVxuXG4gIHdhdGNoTWVkaWEoKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXMocmVzcG9uc2l2ZU1hcCkubWFwKChzY3JlZW46IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgY2FzdEJQID0gc2NyZWVuIGFzIE56QnJlYWtQb2ludDtcbiAgICAgIGNvbnN0IG1hdGNoQmVsb3cgPSB0aGlzLm1lZGlhTWF0Y2hlci5tYXRjaE1lZGlhKHJlc3BvbnNpdmVNYXBbY2FzdEJQXSkubWF0Y2hlcztcbiAgICAgIGlmIChtYXRjaEJlbG93KSB7XG4gICAgICAgIHRoaXMuYnJlYWtQb2ludCA9IGNhc3RCUDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZUd1dHRlcigpO1xuICB9XG5cbiAgLyoqIHRlbXAgc29sdXRpb24gc2luY2Ugbm8gbWV0aG9kIGFkZCBjbGFzc01hcCB0byBob3N0IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzcyODkqL1xuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc31gXTogIXRoaXMubnpUeXBlLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpUeXBlfWBdOiB0aGlzLm56VHlwZSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56VHlwZX0tJHt0aGlzLm56QWxpZ259YF06IHRoaXMubnpUeXBlICYmIHRoaXMubnpBbGlnbixcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56VHlwZX0tJHt0aGlzLm56SnVzdGlmeX1gXTogdGhpcy5uelR5cGUgJiYgdGhpcy5uekp1c3RpZnlcbiAgICB9O1xuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCBjbGFzc01hcCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXG4gICAgcHVibGljIG1lZGlhTWF0Y2hlcjogTWVkaWFNYXRjaGVyLFxuICAgIHB1YmxpYyBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgbnpEb21FdmVudFNlcnZpY2U6IE56RG9tRXZlbnRTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy53YXRjaE1lZGlhKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpUeXBlIHx8IGNoYW5nZXMubnpBbGlnbiB8fCBjaGFuZ2VzLm56SnVzdGlmeSkge1xuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uekd1dHRlcikge1xuICAgICAgdGhpcy51cGRhdGVHdXR0ZXIoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLm56RG9tRXZlbnRTZXJ2aWNlXG4gICAgICAgIC5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMubnpEb21FdmVudFNlcnZpY2UudW5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCkpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLndhdGNoTWVkaWEoKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=