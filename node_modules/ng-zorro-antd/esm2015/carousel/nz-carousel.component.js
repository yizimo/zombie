/**
 * @fileoverview added by tsickle
 * Generated from: nz-carousel.component.ts
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
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Inject, Input, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { warnDeprecation, InputBoolean, InputNumber, NzConfigService, NzDomEventService, NzDragService, WithConfig } from 'ng-zorro-antd/core';
import { NzCarouselContentDirective } from './nz-carousel-content.directive';
import { NZ_CAROUSEL_CUSTOM_STRATEGIES } from './nz-carousel-definitions';
import { NzCarouselOpacityStrategy } from './strategies/opacity-strategy';
import { NzCarouselTransformStrategy } from './strategies/transform-strategy';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'carousel';
export class NzCarouselComponent {
    /**
     * @param {?} elementRef
     * @param {?} nzConfigService
     * @param {?} renderer
     * @param {?} cdr
     * @param {?} platform
     * @param {?} nzDomEventService
     * @param {?} nzDragService
     * @param {?} customStrategies
     */
    constructor(elementRef, nzConfigService, renderer, cdr, platform, nzDomEventService, nzDragService, customStrategies) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.cdr = cdr;
        this.platform = platform;
        this.nzDomEventService = nzDomEventService;
        this.nzDragService = nzDragService;
        this.customStrategies = customStrategies;
        this.nzTransitionSpeed = 500;
        this.nzBeforeChange = new EventEmitter();
        this.nzAfterChange = new EventEmitter();
        this.activeIndex = 0;
        this.vertical = false;
        this.destroy$ = new Subject();
        this.gestureRect = null;
        this.pointerDelta = null;
        this.isTransiting = false;
        this.isDragging = false;
        /**
         * Drag carousel.
         * @param event
         */
        this.pointerDown = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (!this.isDragging && !this.isTransiting && this.nzEnableSwipe) {
                this.clearScheduledTransition();
                this.gestureRect = this.slickListEl.getBoundingClientRect();
                this.nzDragService.requestDraggingSequence(event).subscribe((/**
                 * @param {?} delta
                 * @return {?}
                 */
                delta => {
                    this.pointerDelta = delta;
                    this.isDragging = true;
                    this.strategy.dragging(this.pointerDelta);
                }), (/**
                 * @return {?}
                 */
                () => { }), (/**
                 * @return {?}
                 */
                () => {
                    if (this.nzEnableSwipe && this.isDragging) {
                        /** @type {?} */
                        const xDelta = this.pointerDelta ? this.pointerDelta.x : 0;
                        // Switch to another slide if delta is bigger than third of the width.
                        if (Math.abs(xDelta) > (/** @type {?} */ (this.gestureRect)).width / 3) {
                            this.goTo(xDelta > 0 ? this.activeIndex - 1 : this.activeIndex + 1);
                        }
                        else {
                            this.goTo(this.activeIndex);
                        }
                        this.gestureRect = null;
                        this.pointerDelta = null;
                    }
                    this.isDragging = false;
                }));
            }
        });
        this.renderer.addClass(elementRef.nativeElement, 'ant-carousel');
        this.el = elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    get nzVertical() {
        return this.vertical;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzVertical(value) {
        warnDeprecation(`'nzVertical' is deprecated and will be removed in 9.0.0. Please use 'nzDotPosition' instead.`);
        this.vertical = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDotPosition(value) {
        this._dotPosition = value;
        if (value === 'left' || value === 'right') {
            this.vertical = true;
        }
        else {
            this.vertical = false;
        }
    }
    /**
     * @return {?}
     */
    get nzDotPosition() {
        return this._dotPosition;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.markContentActive(0);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.slickListEl = this.slickList.nativeElement;
        this.slickTrackEl = this.slickTrack.nativeElement;
        this.carouselContents.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.markContentActive(0);
            this.syncStrategy();
        }));
        this.nzDomEventService
            .registerResizeListener()
            .pipe(takeUntil(this.destroy$), finalize((/**
         * @return {?}
         */
        () => this.nzDomEventService.unregisterResizeListener())))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.syncStrategy();
        }));
        this.switchStrategy();
        this.markContentActive(0);
        this.syncStrategy();
        // If embedded in an entry component, it may do initial render at a inappropriate time.
        // ngZone.onStable won't do this trick
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this.syncStrategy();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzEffect, nzDotPosition } = changes;
        if (nzEffect && !nzEffect.isFirstChange()) {
            this.switchStrategy();
            this.markContentActive(0);
            this.syncStrategy();
        }
        if (nzDotPosition && !nzDotPosition.isFirstChange()) {
            this.switchStrategy();
            this.markContentActive(0);
            this.syncStrategy();
        }
        if (!this.nzAutoPlay || !this.nzAutoPlaySpeed) {
            this.clearScheduledTransition();
        }
        else {
            this.scheduleNextTransition();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clearScheduledTransition();
        if (this.strategy) {
            this.strategy.dispose();
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (e.keyCode === LEFT_ARROW) {
            e.preventDefault();
            this.pre();
        }
        else if (e.keyCode === RIGHT_ARROW) {
            this.next();
            e.preventDefault();
        }
    }
    /**
     * @return {?}
     */
    next() {
        this.goTo(this.activeIndex + 1);
    }
    /**
     * @return {?}
     */
    pre() {
        this.goTo(this.activeIndex - 1);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    goTo(index) {
        if (this.carouselContents && this.carouselContents.length && !this.isTransiting) {
            /** @type {?} */
            const length = this.carouselContents.length;
            /** @type {?} */
            const from = this.activeIndex;
            /** @type {?} */
            const to = (index + length) % length;
            this.isTransiting = true;
            this.nzBeforeChange.emit({ from, to });
            this.strategy.switch(this.activeIndex, index).subscribe((/**
             * @return {?}
             */
            () => {
                this.scheduleNextTransition();
                this.nzAfterChange.emit(index);
                this.isTransiting = false;
            }));
            this.markContentActive(to);
            this.cdr.markForCheck();
        }
    }
    /**
     * @private
     * @return {?}
     */
    switchStrategy() {
        if (this.strategy) {
            this.strategy.dispose();
        }
        // Load custom strategies first.
        /** @type {?} */
        const customStrategy = this.customStrategies ? this.customStrategies.find((/**
         * @param {?} s
         * @return {?}
         */
        s => s.name === this.nzEffect)) : null;
        if (customStrategy) {
            // tslint:disable-next-line:no-any
            this.strategy = new ((/** @type {?} */ (customStrategy.strategy)))(this, this.cdr, this.renderer);
            return;
        }
        this.strategy =
            this.nzEffect === 'scrollx'
                ? new NzCarouselTransformStrategy(this, this.cdr, this.renderer)
                : new NzCarouselOpacityStrategy(this, this.cdr, this.renderer);
    }
    /**
     * @private
     * @return {?}
     */
    scheduleNextTransition() {
        this.clearScheduledTransition();
        if (this.nzAutoPlay && this.nzAutoPlaySpeed > 0 && this.platform.isBrowser) {
            this.transitionInProgress = setTimeout((/**
             * @return {?}
             */
            () => {
                this.goTo(this.activeIndex + 1);
            }), this.nzAutoPlaySpeed);
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearScheduledTransition() {
        if (this.transitionInProgress) {
            clearTimeout(this.transitionInProgress);
            this.transitionInProgress = null;
        }
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    markContentActive(index) {
        this.activeIndex = index;
        if (this.carouselContents) {
            this.carouselContents.forEach((/**
             * @param {?} slide
             * @param {?} i
             * @return {?}
             */
            (slide, i) => {
                slide.isActive = index === i;
            }));
        }
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    syncStrategy() {
        if (this.strategy) {
            this.strategy.withCarouselContents(this.carouselContents);
        }
    }
}
NzCarouselComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-carousel',
                exportAs: 'nzCarousel',
                preserveWhitespaces: false,
                template: "<div class=\"slick-initialized slick-slider\" [class.slick-vertical]=\"nzVertical\">\n  <div\n    #slickList\n    class=\"slick-list\"\n    tabindex=\"-1\"\n    (keydown)=\"onKeyDown($event)\"\n    (mousedown)=\"pointerDown($event)\"\n    (touchstart)=\"pointerDown($event)\"\n  >\n    <!-- Render carousel items. -->\n    <div class=\"slick-track\" #slickTrack>\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <!-- Render dots. -->\n  <ul\n    class=\"slick-dots\"\n    *ngIf=\"nzDots\"\n    [class.slick-dots-top]=\"nzDotPosition === 'top'\"\n    [class.slick-dots-bottom]=\"nzDotPosition === 'bottom'\"\n    [class.slick-dots-left]=\"nzDotPosition === 'left'\"\n    [class.slick-dots-right]=\"nzDotPosition === 'right'\"\n  >\n    <li\n      *ngFor=\"let content of carouselContents; let i = index\"\n      [class.slick-active]=\"content.isActive\"\n      (click)=\"goTo(i)\"\n    >\n      <ng-template [ngTemplateOutlet]=\"nzDotRender || renderDotTemplate\" [ngTemplateOutletContext]=\"{ $implicit: i }\">\n      </ng-template>\n    </li>\n  </ul>\n</div>\n\n<ng-template #renderDotTemplate let-index>\n  <button>{{ index + 1 }}</button>\n</ng-template>\n",
                host: {
                    '[class.ant-carousel-vertical]': 'vertical'
                },
                styles: [`
      nz-carousel {
        display: block;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      .slick-dots {
        display: block;
      }

      .slick-track {
        opacity: 1;
      }
    `]
            }] }
];
/** @nocollapse */
NzCarouselComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzConfigService },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: Platform },
    { type: NzDomEventService },
    { type: NzDragService },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NZ_CAROUSEL_CUSTOM_STRATEGIES,] }] }
];
NzCarouselComponent.propDecorators = {
    carouselContents: [{ type: ContentChildren, args: [NzCarouselContentDirective,] }],
    slickList: [{ type: ViewChild, args: ['slickList', { static: false },] }],
    slickTrack: [{ type: ViewChild, args: ['slickTrack', { static: false },] }],
    nzDotRender: [{ type: Input }],
    nzEffect: [{ type: Input }],
    nzEnableSwipe: [{ type: Input }],
    nzDots: [{ type: Input }],
    nzAutoPlay: [{ type: Input }],
    nzAutoPlaySpeed: [{ type: Input }],
    nzTransitionSpeed: [{ type: Input }],
    nzVertical: [{ type: Input }],
    nzDotPosition: [{ type: Input }],
    nzBeforeChange: [{ type: Output }],
    nzAfterChange: [{ type: Output }]
};
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'scrollx'),
    tslib_1.__metadata("design:type", String)
], NzCarouselComponent.prototype, "nzEffect", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzCarouselComponent.prototype, "nzEnableSwipe", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzCarouselComponent.prototype, "nzDots", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzCarouselComponent.prototype, "nzAutoPlay", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 3000), InputNumber(),
    tslib_1.__metadata("design:type", Number)
], NzCarouselComponent.prototype, "nzAutoPlaySpeed", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], NzCarouselComponent.prototype, "nzTransitionSpeed", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], NzCarouselComponent.prototype, "nzVertical", null);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'bottom'),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], NzCarouselComponent.prototype, "nzDotPosition", null);
if (false) {
    /** @type {?} */
    NzCarouselComponent.prototype.carouselContents;
    /** @type {?} */
    NzCarouselComponent.prototype.slickList;
    /** @type {?} */
    NzCarouselComponent.prototype.slickTrack;
    /** @type {?} */
    NzCarouselComponent.prototype.nzDotRender;
    /** @type {?} */
    NzCarouselComponent.prototype.nzEffect;
    /** @type {?} */
    NzCarouselComponent.prototype.nzEnableSwipe;
    /** @type {?} */
    NzCarouselComponent.prototype.nzDots;
    /** @type {?} */
    NzCarouselComponent.prototype.nzAutoPlay;
    /** @type {?} */
    NzCarouselComponent.prototype.nzAutoPlaySpeed;
    /** @type {?} */
    NzCarouselComponent.prototype.nzTransitionSpeed;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype._dotPosition;
    /** @type {?} */
    NzCarouselComponent.prototype.nzBeforeChange;
    /** @type {?} */
    NzCarouselComponent.prototype.nzAfterChange;
    /** @type {?} */
    NzCarouselComponent.prototype.activeIndex;
    /** @type {?} */
    NzCarouselComponent.prototype.el;
    /** @type {?} */
    NzCarouselComponent.prototype.slickListEl;
    /** @type {?} */
    NzCarouselComponent.prototype.slickTrackEl;
    /** @type {?} */
    NzCarouselComponent.prototype.strategy;
    /** @type {?} */
    NzCarouselComponent.prototype.vertical;
    /** @type {?} */
    NzCarouselComponent.prototype.transitionInProgress;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.gestureRect;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.pointerDelta;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.isTransiting;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.isDragging;
    /**
     * Drag carousel.
     * \@param event
     * @type {?}
     */
    NzCarouselComponent.prototype.pointerDown;
    /** @type {?} */
    NzCarouselComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.nzDomEventService;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.nzDragService;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.customStrategies;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbIm56LWNhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQ0wsZUFBZSxFQUNmLFlBQVksRUFDWixXQUFXLEVBQ1gsZUFBZSxFQUNmLGlCQUFpQixFQUNqQixhQUFhLEVBQ2IsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUtMLDZCQUE2QixFQUU5QixNQUFNLDJCQUEyQixDQUFDO0FBRW5DLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztNQUV4RSx3QkFBd0IsR0FBRyxVQUFVO0FBZ0MzQyxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7Ozs7OztJQTJEOUIsWUFD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O0lBQ3BDLGtDQUF1Qzs7Ozs7SUFDdkMsdUNBQW1DOzs7OztJQUNuQyxnREFBcUQ7Ozs7O0lBQ3JELDRDQUE2Qzs7Ozs7SUFDN0MsK0NBQTZHIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IExFRlRfQVJST1csIFJJR0hUX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbmFsaXplLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIHdhcm5EZXByZWNhdGlvbixcbiAgSW5wdXRCb29sZWFuLFxuICBJbnB1dE51bWJlcixcbiAgTnpDb25maWdTZXJ2aWNlLFxuICBOekRvbUV2ZW50U2VydmljZSxcbiAgTnpEcmFnU2VydmljZSxcbiAgV2l0aENvbmZpZ1xufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vbnotY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtcbiAgRnJvbVRvSW50ZXJmYWNlLFxuICBOekNhcm91c2VsRG90UG9zaXRpb24sXG4gIE56Q2Fyb3VzZWxFZmZlY3RzLFxuICBOekNhcm91c2VsU3RyYXRlZ3lSZWdpc3RyeUl0ZW0sXG4gIE5aX0NBUk9VU0VMX0NVU1RPTV9TVFJBVEVHSUVTLFxuICBQb2ludGVyVmVjdG9yXG59IGZyb20gJy4vbnotY2Fyb3VzZWwtZGVmaW5pdGlvbnMnO1xuaW1wb3J0IHsgTnpDYXJvdXNlbEJhc2VTdHJhdGVneSB9IGZyb20gJy4vc3RyYXRlZ2llcy9iYXNlLXN0cmF0ZWd5JztcbmltcG9ydCB7IE56Q2Fyb3VzZWxPcGFjaXR5U3RyYXRlZ3kgfSBmcm9tICcuL3N0cmF0ZWdpZXMvb3BhY2l0eS1zdHJhdGVneSc7XG5pbXBvcnQgeyBOekNhcm91c2VsVHJhbnNmb3JtU3RyYXRlZ3kgfSBmcm9tICcuL3N0cmF0ZWdpZXMvdHJhbnNmb3JtLXN0cmF0ZWd5JztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2Nhcm91c2VsJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LWNhcm91c2VsJyxcbiAgZXhwb3J0QXM6ICduekNhcm91c2VsJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1jYXJvdXNlbC12ZXJ0aWNhbF0nOiAndmVydGljYWwnXG4gIH0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIG56LWNhcm91c2VsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLnNsaWNrLWRvdHMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgLnNsaWNrLXRyYWNrIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgQENvbnRlbnRDaGlsZHJlbihOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSkgY2Fyb3VzZWxDb250ZW50czogUXVlcnlMaXN0PE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlPjtcblxuICBAVmlld0NoaWxkKCdzbGlja0xpc3QnLCB7IHN0YXRpYzogZmFsc2UgfSkgc2xpY2tMaXN0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzbGlja1RyYWNrJywgeyBzdGF0aWM6IGZhbHNlIH0pIHNsaWNrVHJhY2s6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgbnpEb3RSZW5kZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXIgfT47XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ3Njcm9sbHgnKSBuekVmZmVjdDogTnpDYXJvdXNlbEVmZmVjdHM7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgQElucHV0Qm9vbGVhbigpIG56RW5hYmxlU3dpcGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgQElucHV0Qm9vbGVhbigpIG56RG90czogYm9vbGVhbjtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56QXV0b1BsYXk6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgMzAwMCkgQElucHV0TnVtYmVyKCkgbnpBdXRvUGxheVNwZWVkOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56VHJhbnNpdGlvblNwZWVkID0gNTAwO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBnZXQgbnpWZXJ0aWNhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbDtcbiAgfVxuXG4gIHNldCBuelZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgd2FybkRlcHJlY2F0aW9uKGAnbnpWZXJ0aWNhbCcgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICduekRvdFBvc2l0aW9uJyBpbnN0ZWFkLmApO1xuICAgIHRoaXMudmVydGljYWwgPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2JvdHRvbScpXG4gIHNldCBuekRvdFBvc2l0aW9uKHZhbHVlOiBOekNhcm91c2VsRG90UG9zaXRpb24pIHtcbiAgICB0aGlzLl9kb3RQb3NpdGlvbiA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gJ2xlZnQnIHx8IHZhbHVlID09PSAncmlnaHQnKSB7XG4gICAgICB0aGlzLnZlcnRpY2FsID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52ZXJ0aWNhbCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekRvdFBvc2l0aW9uKCk6IE56Q2Fyb3VzZWxEb3RQb3NpdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RvdFBvc2l0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBfZG90UG9zaXRpb246IE56Q2Fyb3VzZWxEb3RQb3NpdGlvbjtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpCZWZvcmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEZyb21Ub0ludGVyZmFjZT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56QWZ0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBhY3RpdmVJbmRleCA9IDA7XG4gIGVsOiBIVE1MRWxlbWVudDtcbiAgc2xpY2tMaXN0RWw6IEhUTUxFbGVtZW50O1xuICBzbGlja1RyYWNrRWw6IEhUTUxFbGVtZW50O1xuICBzdHJhdGVneTogTnpDYXJvdXNlbEJhc2VTdHJhdGVneTtcbiAgdmVydGljYWwgPSBmYWxzZTtcbiAgdHJhbnNpdGlvbkluUHJvZ3Jlc3M6IG51bWJlciB8IG51bGw7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgZ2VzdHVyZVJlY3Q6IENsaWVudFJlY3QgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBwb2ludGVyRGVsdGE6IFBvaW50ZXJWZWN0b3IgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBpc1RyYW5zaXRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpc0RyYWdnaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgcmVhZG9ubHkgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IG56RG9tRXZlbnRTZXJ2aWNlOiBOekRvbUV2ZW50U2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IG56RHJhZ1NlcnZpY2U6IE56RHJhZ1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9DQVJPVVNFTF9DVVNUT01fU1RSQVRFR0lFUykgcHJpdmF0ZSBjdXN0b21TdHJhdGVnaWVzOiBOekNhcm91c2VsU3RyYXRlZ3lSZWdpc3RyeUl0ZW1bXVxuICApIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYXJvdXNlbCcpO1xuICAgIHRoaXMuZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5tYXJrQ29udGVudEFjdGl2ZSgwKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2xpY2tMaXN0RWwgPSB0aGlzLnNsaWNrTGlzdC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuc2xpY2tUcmFja0VsID0gdGhpcy5zbGlja1RyYWNrLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICB0aGlzLmNhcm91c2VsQ29udGVudHMuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubWFya0NvbnRlbnRBY3RpdmUoMCk7XG4gICAgICB0aGlzLnN5bmNTdHJhdGVneSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5uekRvbUV2ZW50U2VydmljZVxuICAgICAgLnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgZmluYWxpemUoKCkgPT4gdGhpcy5uekRvbUV2ZW50U2VydmljZS51bnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnN5bmNTdHJhdGVneSgpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLnN3aXRjaFN0cmF0ZWd5KCk7XG4gICAgdGhpcy5tYXJrQ29udGVudEFjdGl2ZSgwKTtcbiAgICB0aGlzLnN5bmNTdHJhdGVneSgpO1xuXG4gICAgLy8gSWYgZW1iZWRkZWQgaW4gYW4gZW50cnkgY29tcG9uZW50LCBpdCBtYXkgZG8gaW5pdGlhbCByZW5kZXIgYXQgYSBpbmFwcHJvcHJpYXRlIHRpbWUuXG4gICAgLy8gbmdab25lLm9uU3RhYmxlIHdvbid0IGRvIHRoaXMgdHJpY2tcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuc3luY1N0cmF0ZWd5KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuekVmZmVjdCwgbnpEb3RQb3NpdGlvbiB9ID0gY2hhbmdlcztcblxuICAgIGlmIChuekVmZmVjdCAmJiAhbnpFZmZlY3QuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLnN3aXRjaFN0cmF0ZWd5KCk7XG4gICAgICB0aGlzLm1hcmtDb250ZW50QWN0aXZlKDApO1xuICAgICAgdGhpcy5zeW5jU3RyYXRlZ3koKTtcbiAgICB9XG5cbiAgICBpZiAobnpEb3RQb3NpdGlvbiAmJiAhbnpEb3RQb3NpdGlvbi5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuc3dpdGNoU3RyYXRlZ3koKTtcbiAgICAgIHRoaXMubWFya0NvbnRlbnRBY3RpdmUoMCk7XG4gICAgICB0aGlzLnN5bmNTdHJhdGVneSgpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5uekF1dG9QbGF5IHx8ICF0aGlzLm56QXV0b1BsYXlTcGVlZCkge1xuICAgICAgdGhpcy5jbGVhclNjaGVkdWxlZFRyYW5zaXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY2hlZHVsZU5leHRUcmFuc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhclNjaGVkdWxlZFRyYW5zaXRpb24oKTtcbiAgICBpZiAodGhpcy5zdHJhdGVneSkge1xuICAgICAgdGhpcy5zdHJhdGVneS5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSBMRUZUX0FSUk9XKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnByZSgpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBSSUdIVF9BUlJPVykge1xuICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLmdvVG8odGhpcy5hY3RpdmVJbmRleCArIDEpO1xuICB9XG5cbiAgcHJlKCk6IHZvaWQge1xuICAgIHRoaXMuZ29Ubyh0aGlzLmFjdGl2ZUluZGV4IC0gMSk7XG4gIH1cblxuICBnb1RvKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYXJvdXNlbENvbnRlbnRzICYmIHRoaXMuY2Fyb3VzZWxDb250ZW50cy5sZW5ndGggJiYgIXRoaXMuaXNUcmFuc2l0aW5nKSB7XG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmNhcm91c2VsQ29udGVudHMubGVuZ3RoO1xuICAgICAgY29uc3QgZnJvbSA9IHRoaXMuYWN0aXZlSW5kZXg7XG4gICAgICBjb25zdCB0byA9IChpbmRleCArIGxlbmd0aCkgJSBsZW5ndGg7XG4gICAgICB0aGlzLmlzVHJhbnNpdGluZyA9IHRydWU7XG4gICAgICB0aGlzLm56QmVmb3JlQ2hhbmdlLmVtaXQoeyBmcm9tLCB0byB9KTtcbiAgICAgIHRoaXMuc3RyYXRlZ3kuc3dpdGNoKHRoaXMuYWN0aXZlSW5kZXgsIGluZGV4KS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnNjaGVkdWxlTmV4dFRyYW5zaXRpb24oKTtcbiAgICAgICAgdGhpcy5uekFmdGVyQ2hhbmdlLmVtaXQoaW5kZXgpO1xuICAgICAgICB0aGlzLmlzVHJhbnNpdGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm1hcmtDb250ZW50QWN0aXZlKHRvKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3dpdGNoU3RyYXRlZ3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RyYXRlZ3kpIHtcbiAgICAgIHRoaXMuc3RyYXRlZ3kuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIC8vIExvYWQgY3VzdG9tIHN0cmF0ZWdpZXMgZmlyc3QuXG4gICAgY29uc3QgY3VzdG9tU3RyYXRlZ3kgPSB0aGlzLmN1c3RvbVN0cmF0ZWdpZXMgPyB0aGlzLmN1c3RvbVN0cmF0ZWdpZXMuZmluZChzID0+IHMubmFtZSA9PT0gdGhpcy5uekVmZmVjdCkgOiBudWxsO1xuICAgIGlmIChjdXN0b21TdHJhdGVneSkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgdGhpcy5zdHJhdGVneSA9IG5ldyAoY3VzdG9tU3RyYXRlZ3kuc3RyYXRlZ3kgYXMgYW55KSh0aGlzLCB0aGlzLmNkciwgdGhpcy5yZW5kZXJlcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdHJhdGVneSA9XG4gICAgICB0aGlzLm56RWZmZWN0ID09PSAnc2Nyb2xseCdcbiAgICAgICAgPyBuZXcgTnpDYXJvdXNlbFRyYW5zZm9ybVN0cmF0ZWd5KHRoaXMsIHRoaXMuY2RyLCB0aGlzLnJlbmRlcmVyKVxuICAgICAgICA6IG5ldyBOekNhcm91c2VsT3BhY2l0eVN0cmF0ZWd5KHRoaXMsIHRoaXMuY2RyLCB0aGlzLnJlbmRlcmVyKTtcbiAgfVxuXG4gIHByaXZhdGUgc2NoZWR1bGVOZXh0VHJhbnNpdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyU2NoZWR1bGVkVHJhbnNpdGlvbigpO1xuICAgIGlmICh0aGlzLm56QXV0b1BsYXkgJiYgdGhpcy5uekF1dG9QbGF5U3BlZWQgPiAwICYmIHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnRyYW5zaXRpb25JblByb2dyZXNzID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZ29Ubyh0aGlzLmFjdGl2ZUluZGV4ICsgMSk7XG4gICAgICB9LCB0aGlzLm56QXV0b1BsYXlTcGVlZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhclNjaGVkdWxlZFRyYW5zaXRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbkluUHJvZ3Jlc3MpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRyYW5zaXRpb25JblByb2dyZXNzKTtcbiAgICAgIHRoaXMudHJhbnNpdGlvbkluUHJvZ3Jlc3MgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbWFya0NvbnRlbnRBY3RpdmUoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlSW5kZXggPSBpbmRleDtcblxuICAgIGlmICh0aGlzLmNhcm91c2VsQ29udGVudHMpIHtcbiAgICAgIHRoaXMuY2Fyb3VzZWxDb250ZW50cy5mb3JFYWNoKChzbGlkZSwgaSkgPT4ge1xuICAgICAgICBzbGlkZS5pc0FjdGl2ZSA9IGluZGV4ID09PSBpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogRHJhZyBjYXJvdXNlbC5cbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBwb2ludGVyRG93biA9IChldmVudDogVG91Y2hFdmVudCB8IE1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIXRoaXMuaXNEcmFnZ2luZyAmJiAhdGhpcy5pc1RyYW5zaXRpbmcgJiYgdGhpcy5uekVuYWJsZVN3aXBlKSB7XG4gICAgICB0aGlzLmNsZWFyU2NoZWR1bGVkVHJhbnNpdGlvbigpO1xuICAgICAgdGhpcy5nZXN0dXJlUmVjdCA9IHRoaXMuc2xpY2tMaXN0RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIHRoaXMubnpEcmFnU2VydmljZS5yZXF1ZXN0RHJhZ2dpbmdTZXF1ZW5jZShldmVudCkuc3Vic2NyaWJlKFxuICAgICAgICBkZWx0YSA9PiB7XG4gICAgICAgICAgdGhpcy5wb2ludGVyRGVsdGEgPSBkZWx0YTtcbiAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc3RyYXRlZ3kuZHJhZ2dpbmcodGhpcy5wb2ludGVyRGVsdGEpO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7fSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLm56RW5hYmxlU3dpcGUgJiYgdGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICAgICAgICBjb25zdCB4RGVsdGEgPSB0aGlzLnBvaW50ZXJEZWx0YSA/IHRoaXMucG9pbnRlckRlbHRhLnggOiAwO1xuXG4gICAgICAgICAgICAvLyBTd2l0Y2ggdG8gYW5vdGhlciBzbGlkZSBpZiBkZWx0YSBpcyBiaWdnZXIgdGhhbiB0aGlyZCBvZiB0aGUgd2lkdGguXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoeERlbHRhKSA+IHRoaXMuZ2VzdHVyZVJlY3QhLndpZHRoIC8gMykge1xuICAgICAgICAgICAgICB0aGlzLmdvVG8oeERlbHRhID4gMCA/IHRoaXMuYWN0aXZlSW5kZXggLSAxIDogdGhpcy5hY3RpdmVJbmRleCArIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5nb1RvKHRoaXMuYWN0aXZlSW5kZXgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmdlc3R1cmVSZWN0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMucG9pbnRlckRlbHRhID0gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBzeW5jU3RyYXRlZ3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RyYXRlZ3kpIHtcbiAgICAgIHRoaXMuc3RyYXRlZ3kud2l0aENhcm91c2VsQ29udGVudHModGhpcy5jYXJvdXNlbENvbnRlbnRzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==