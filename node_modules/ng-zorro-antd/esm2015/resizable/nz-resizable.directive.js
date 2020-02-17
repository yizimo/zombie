/**
 * @fileoverview added by tsickle
 * Generated from: nz-resizable.directive.ts
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
import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2 } from '@angular/core';
import { ensureInBounds, InputBoolean } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getEventWithPoint } from './nz-resizable-utils';
import { NzResizableService } from './nz-resizable.service';
/**
 * @record
 */
export function NzResizeEvent() { }
if (false) {
    /** @type {?|undefined} */
    NzResizeEvent.prototype.width;
    /** @type {?|undefined} */
    NzResizeEvent.prototype.height;
    /** @type {?|undefined} */
    NzResizeEvent.prototype.col;
    /** @type {?|undefined} */
    NzResizeEvent.prototype.mouseEvent;
}
export class NzResizableDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} nzResizableService
     * @param {?} platform
     * @param {?} ngZone
     */
    constructor(elementRef, renderer, nzResizableService, platform, ngZone) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzResizableService = nzResizableService;
        this.platform = platform;
        this.ngZone = ngZone;
        this.nzBounds = 'parent';
        this.nzMinHeight = 40;
        this.nzMinWidth = 40;
        this.nzGridColumnCount = -1;
        this.nzMaxColumn = -1;
        this.nzMinColumn = -1;
        this.nzLockAspectRatio = false;
        this.nzPreview = false;
        this.nzResize = new EventEmitter();
        this.nzResizeEnd = new EventEmitter();
        this.nzResizeStart = new EventEmitter();
        this.resizing = false;
        this.destroy$ = new Subject();
        this.nzResizableService.handleMouseDown$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.resizing = true;
            this.nzResizableService.startResizing(event.mouseEvent);
            this.currentHandleEvent = event;
            this.setCursor();
            this.nzResizeStart.emit({
                mouseEvent: event.mouseEvent
            });
            this.elRect = this.el.getBoundingClientRect();
        }));
        this.nzResizableService.documentMouseUp$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (this.resizing) {
                this.resizing = false;
                this.nzResizableService.documentMouseUp$.next();
                this.endResize(event);
            }
        }));
        this.nzResizableService.documentMouseMove$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (this.resizing) {
                this.resize(event);
            }
        }));
    }
    /**
     * @return {?}
     */
    onMouseenter() {
        this.nzResizableService.mouseEntered$.next(true);
    }
    /**
     * @return {?}
     */
    onMouseleave() {
        this.nzResizableService.mouseEntered$.next(false);
    }
    /**
     * @return {?}
     */
    setPosition() {
        /** @type {?} */
        const position = getComputedStyle(this.el).position;
        if (position === 'static' || !position) {
            this.renderer.setStyle(this.el, 'position', 'relative');
        }
    }
    /**
     * @param {?} width
     * @param {?} height
     * @param {?} ratio
     * @return {?}
     */
    calcSize(width, height, ratio) {
        /** @type {?} */
        let newWidth;
        /** @type {?} */
        let newHeight;
        /** @type {?} */
        let maxWidth;
        /** @type {?} */
        let maxHeight;
        /** @type {?} */
        let col = 0;
        /** @type {?} */
        let spanWidth = 0;
        /** @type {?} */
        let minWidth = this.nzMinWidth;
        /** @type {?} */
        let boundWidth = Infinity;
        /** @type {?} */
        let boundHeight = Infinity;
        if (this.nzBounds === 'parent') {
            /** @type {?} */
            const parent = this.renderer.parentNode(this.el);
            if (parent instanceof HTMLElement) {
                /** @type {?} */
                const parentRect = parent.getBoundingClientRect();
                boundWidth = parentRect.width;
                boundHeight = parentRect.height;
            }
        }
        else if (this.nzBounds === 'window') {
            if (typeof window !== 'undefined') {
                boundWidth = window.innerWidth;
                boundHeight = window.innerHeight;
            }
        }
        else if (this.nzBounds && this.nzBounds.nativeElement && this.nzBounds.nativeElement instanceof HTMLElement) {
            /** @type {?} */
            const boundsRect = this.nzBounds.nativeElement.getBoundingClientRect();
            boundWidth = boundsRect.width;
            boundHeight = boundsRect.height;
        }
        maxWidth = ensureInBounds(this.nzMaxWidth, boundWidth);
        maxHeight = ensureInBounds(this.nzMaxHeight, boundHeight);
        if (this.nzGridColumnCount !== -1) {
            spanWidth = maxWidth / this.nzGridColumnCount;
            minWidth = this.nzMinColumn !== -1 ? spanWidth * this.nzMinColumn : minWidth;
            maxWidth = this.nzMaxColumn !== -1 ? spanWidth * this.nzMaxColumn : maxWidth;
        }
        if (ratio !== -1) {
            if (/(left|right)/i.test((/** @type {?} */ (this.currentHandleEvent)).direction)) {
                newWidth = Math.min(Math.max(width, minWidth), maxWidth);
                newHeight = Math.min(Math.max(newWidth / ratio, this.nzMinHeight), maxHeight);
                if (newHeight >= maxHeight || newHeight <= this.nzMinHeight) {
                    newWidth = Math.min(Math.max(newHeight * ratio, minWidth), maxWidth);
                }
            }
            else {
                newHeight = Math.min(Math.max(height, this.nzMinHeight), maxHeight);
                newWidth = Math.min(Math.max(newHeight * ratio, minWidth), maxWidth);
                if (newWidth >= maxWidth || newWidth <= minWidth) {
                    newHeight = Math.min(Math.max(newWidth / ratio, this.nzMinHeight), maxHeight);
                }
            }
        }
        else {
            newWidth = Math.min(Math.max(width, minWidth), maxWidth);
            newHeight = Math.min(Math.max(height, this.nzMinHeight), maxHeight);
        }
        if (this.nzGridColumnCount !== -1) {
            col = Math.round(newWidth / spanWidth);
            newWidth = col * spanWidth;
        }
        return {
            col,
            width: newWidth,
            height: newHeight
        };
    }
    /**
     * @return {?}
     */
    setCursor() {
        switch ((/** @type {?} */ (this.currentHandleEvent)).direction) {
            case 'left':
            case 'right':
                this.renderer.setStyle(document.body, 'cursor', 'col-resize');
                break;
            case 'top':
            case 'bottom':
                this.renderer.setStyle(document.body, 'cursor', 'row-resize');
                break;
            case 'topLeft':
            case 'bottomRight':
                this.renderer.setStyle(document.body, 'cursor', 'nwse-resize');
                break;
            case 'topRight':
            case 'bottomLeft':
                this.renderer.setStyle(document.body, 'cursor', 'nesw-resize');
                break;
        }
        this.renderer.setStyle(document.body, 'user-select', 'none');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    resize(event) {
        /** @type {?} */
        const elRect = this.elRect;
        /** @type {?} */
        const resizeEvent = getEventWithPoint(event);
        /** @type {?} */
        const handleEvent = getEventWithPoint((/** @type {?} */ (this.currentHandleEvent)).mouseEvent);
        /** @type {?} */
        let width = elRect.width;
        /** @type {?} */
        let height = elRect.height;
        /** @type {?} */
        const ratio = this.nzLockAspectRatio ? width / height : -1;
        switch ((/** @type {?} */ (this.currentHandleEvent)).direction) {
            case 'bottomRight':
                width = resizeEvent.clientX - elRect.left;
                height = resizeEvent.clientY - elRect.top;
                break;
            case 'bottomLeft':
                width = elRect.width + handleEvent.clientX - resizeEvent.clientX;
                height = resizeEvent.clientY - elRect.top;
                break;
            case 'topRight':
                width = resizeEvent.clientX - elRect.left;
                height = elRect.height + handleEvent.clientY - resizeEvent.clientY;
                break;
            case 'topLeft':
                width = elRect.width + handleEvent.clientX - resizeEvent.clientX;
                height = elRect.height + handleEvent.clientY - resizeEvent.clientY;
                break;
            case 'top':
                height = elRect.height + handleEvent.clientY - resizeEvent.clientY;
                break;
            case 'right':
                width = resizeEvent.clientX - elRect.left;
                break;
            case 'bottom':
                height = resizeEvent.clientY - elRect.top;
                break;
            case 'left':
                width = elRect.width + handleEvent.clientX - resizeEvent.clientX;
        }
        /** @type {?} */
        const size = this.calcSize(width, height, ratio);
        this.sizeCache = Object.assign({}, size);
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            this.nzResize.emit(Object.assign({}, size, { mouseEvent: event }));
        }));
        if (this.nzPreview) {
            this.previewResize(size);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    endResize(event) {
        this.renderer.setStyle(document.body, 'cursor', '');
        this.renderer.setStyle(document.body, 'user-select', '');
        this.removeGhostElement();
        /** @type {?} */
        const size = this.sizeCache
            ? Object.assign({}, this.sizeCache) : {
            width: this.elRect.width,
            height: this.elRect.height
        };
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            this.nzResizeEnd.emit(Object.assign({}, size, { mouseEvent: event }));
        }));
        this.sizeCache = null;
        this.currentHandleEvent = null;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    previewResize({ width, height }) {
        this.createGhostElement();
        this.renderer.setStyle(this.ghostElement, 'width', `${width}px`);
        this.renderer.setStyle(this.ghostElement, 'height', `${height}px`);
    }
    /**
     * @return {?}
     */
    createGhostElement() {
        if (!this.ghostElement) {
            this.ghostElement = this.renderer.createElement('div');
            this.renderer.setAttribute(this.ghostElement, 'class', 'nz-resizable-preview');
        }
        this.renderer.appendChild(this.el, this.ghostElement);
    }
    /**
     * @return {?}
     */
    removeGhostElement() {
        if (this.ghostElement) {
            this.renderer.removeChild(this.el, this.ghostElement);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.platform.isBrowser) {
            this.el = this.elementRef.nativeElement;
            this.setPosition();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.ghostElement = null;
        this.sizeCache = null;
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzResizableDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-resizable]',
                exportAs: 'nzResizable',
                providers: [NzResizableService],
                host: {
                    '[class.nz-resizable]': 'true',
                    '[class.nz-resizable-resizing]': 'resizing',
                    '(mouseenter)': 'onMouseenter()',
                    '(mouseleave)': 'onMouseleave()'
                }
            },] }
];
/** @nocollapse */
NzResizableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzResizableService },
    { type: Platform },
    { type: NgZone }
];
NzResizableDirective.propDecorators = {
    nzBounds: [{ type: Input }],
    nzMaxHeight: [{ type: Input }],
    nzMaxWidth: [{ type: Input }],
    nzMinHeight: [{ type: Input }],
    nzMinWidth: [{ type: Input }],
    nzGridColumnCount: [{ type: Input }],
    nzMaxColumn: [{ type: Input }],
    nzMinColumn: [{ type: Input }],
    nzLockAspectRatio: [{ type: Input }],
    nzPreview: [{ type: Input }],
    nzResize: [{ type: Output }],
    nzResizeEnd: [{ type: Output }],
    nzResizeStart: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzResizableDirective.prototype, "nzLockAspectRatio", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzResizableDirective.prototype, "nzPreview", void 0);
if (false) {
    /** @type {?} */
    NzResizableDirective.prototype.nzBounds;
    /** @type {?} */
    NzResizableDirective.prototype.nzMaxHeight;
    /** @type {?} */
    NzResizableDirective.prototype.nzMaxWidth;
    /** @type {?} */
    NzResizableDirective.prototype.nzMinHeight;
    /** @type {?} */
    NzResizableDirective.prototype.nzMinWidth;
    /** @type {?} */
    NzResizableDirective.prototype.nzGridColumnCount;
    /** @type {?} */
    NzResizableDirective.prototype.nzMaxColumn;
    /** @type {?} */
    NzResizableDirective.prototype.nzMinColumn;
    /** @type {?} */
    NzResizableDirective.prototype.nzLockAspectRatio;
    /** @type {?} */
    NzResizableDirective.prototype.nzPreview;
    /** @type {?} */
    NzResizableDirective.prototype.nzResize;
    /** @type {?} */
    NzResizableDirective.prototype.nzResizeEnd;
    /** @type {?} */
    NzResizableDirective.prototype.nzResizeStart;
    /** @type {?} */
    NzResizableDirective.prototype.resizing;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.elRect;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.currentHandleEvent;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.ghostElement;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.sizeCache;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.nzResizableService;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXphYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmVzaXphYmxlLyIsInNvdXJjZXMiOlsibnotcmVzaXphYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLE1BQU0sRUFDTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUc1RCxtQ0FLQzs7O0lBSkMsOEJBQWU7O0lBQ2YsK0JBQWdCOztJQUNoQiw0QkFBYTs7SUFDYixtQ0FBcUM7O0FBY3ZDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7O0lBdUIvQixZQUNVLFVBQW1DLEVBQ25DLFFBQW1CLEVBQ25CLGtCQUFzQyxFQUN0QyxRQUFrQixFQUNsQixNQUFjO1FBSmQsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDbkMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQTNCZixhQUFRLEdBQWtELFFBQVEsQ0FBQztRQUduRSxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6Qixl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Q2xDLDBDQUFpQzs7SUFDakMsaURBQXdDOztJQUN4QywyQ0FBa0M7O0lBQ2xDLDJDQUFrQzs7SUFDbEMsaURBQTREOztJQUM1RCx5Q0FBb0Q7O0lBQ3BELHdDQUFnRTs7SUFDaEUsMkNBQW1FOztJQUNuRSw2Q0FBcUU7O0lBRXJFLHdDQUFpQjs7Ozs7SUFDakIsc0NBQXFDOzs7OztJQUNyQyxrREFBZ0U7Ozs7O0lBQ2hFLDRDQUE0Qzs7Ozs7SUFDNUMsa0NBQXdCOzs7OztJQUN4Qix5Q0FBd0M7Ozs7O0lBQ3hDLHdDQUF1Qzs7Ozs7SUFHckMsMENBQTJDOzs7OztJQUMzQyx3Q0FBMkI7Ozs7O0lBQzNCLGtEQUE4Qzs7Ozs7SUFDOUMsd0NBQTBCOzs7OztJQUMxQixzQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGVuc3VyZUluQm91bmRzLCBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBnZXRFdmVudFdpdGhQb2ludCB9IGZyb20gJy4vbnotcmVzaXphYmxlLXV0aWxzJztcbmltcG9ydCB7IE56UmVzaXphYmxlU2VydmljZSB9IGZyb20gJy4vbnotcmVzaXphYmxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudCB9IGZyb20gJy4vbnotcmVzaXplLWhhbmRsZS5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE56UmVzaXplRXZlbnQge1xuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBjb2w/OiBudW1iZXI7XG4gIG1vdXNlRXZlbnQ/OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudDtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LXJlc2l6YWJsZV0nLFxuICBleHBvcnRBczogJ256UmVzaXphYmxlJyxcbiAgcHJvdmlkZXJzOiBbTnpSZXNpemFibGVTZXJ2aWNlXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubnotcmVzaXphYmxlXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLm56LXJlc2l6YWJsZS1yZXNpemluZ10nOiAncmVzaXppbmcnLFxuICAgICcobW91c2VlbnRlciknOiAnb25Nb3VzZWVudGVyKCknLFxuICAgICcobW91c2VsZWF2ZSknOiAnb25Nb3VzZWxlYXZlKCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpSZXNpemFibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBuekJvdW5kczogJ3dpbmRvdycgfCAncGFyZW50JyB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+ID0gJ3BhcmVudCc7XG4gIEBJbnB1dCgpIG56TWF4SGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIG56TWF4V2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgbnpNaW5IZWlnaHQ6IG51bWJlciA9IDQwO1xuICBASW5wdXQoKSBuek1pbldpZHRoOiBudW1iZXIgPSA0MDtcbiAgQElucHV0KCkgbnpHcmlkQ29sdW1uQ291bnQ6IG51bWJlciA9IC0xO1xuICBASW5wdXQoKSBuek1heENvbHVtbjogbnVtYmVyID0gLTE7XG4gIEBJbnB1dCgpIG56TWluQ29sdW1uOiBudW1iZXIgPSAtMTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TG9ja0FzcGVjdFJhdGlvOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelByZXZpZXc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjxOelJlc2l6ZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpSZXNpemVFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPE56UmVzaXplRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelJlc2l6ZVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxOelJlc2l6ZUV2ZW50PigpO1xuXG4gIHJlc2l6aW5nID0gZmFsc2U7XG4gIHByaXZhdGUgZWxSZWN0OiBDbGllbnRSZWN0IHwgRE9NUmVjdDtcbiAgcHJpdmF0ZSBjdXJyZW50SGFuZGxlRXZlbnQ6IE56UmVzaXplSGFuZGxlTW91c2VEb3duRXZlbnQgfCBudWxsO1xuICBwcml2YXRlIGdob3N0RWxlbWVudDogSFRNTERpdkVsZW1lbnQgfCBudWxsO1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBzaXplQ2FjaGU6IE56UmVzaXplRXZlbnQgfCBudWxsO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG56UmVzaXphYmxlU2VydmljZTogTnpSZXNpemFibGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgdGhpcy5uelJlc2l6YWJsZVNlcnZpY2UuaGFuZGxlTW91c2VEb3duJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIHRoaXMucmVzaXppbmcgPSB0cnVlO1xuICAgICAgdGhpcy5uelJlc2l6YWJsZVNlcnZpY2Uuc3RhcnRSZXNpemluZyhldmVudC5tb3VzZUV2ZW50KTtcbiAgICAgIHRoaXMuY3VycmVudEhhbmRsZUV2ZW50ID0gZXZlbnQ7XG4gICAgICB0aGlzLnNldEN1cnNvcigpO1xuICAgICAgdGhpcy5uelJlc2l6ZVN0YXJ0LmVtaXQoe1xuICAgICAgICBtb3VzZUV2ZW50OiBldmVudC5tb3VzZUV2ZW50XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZWxSZWN0ID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB9KTtcblxuICAgIHRoaXMubnpSZXNpemFibGVTZXJ2aWNlLmRvY3VtZW50TW91c2VVcCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5yZXNpemluZykge1xuICAgICAgICB0aGlzLnJlc2l6aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubnpSZXNpemFibGVTZXJ2aWNlLmRvY3VtZW50TW91c2VVcCQubmV4dCgpO1xuICAgICAgICB0aGlzLmVuZFJlc2l6ZShldmVudCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5kb2N1bWVudE1vdXNlTW92ZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5yZXNpemluZykge1xuICAgICAgICB0aGlzLnJlc2l6ZShldmVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlZW50ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5uelJlc2l6YWJsZVNlcnZpY2UubW91c2VFbnRlcmVkJC5uZXh0KHRydWUpO1xuICB9XG5cbiAgb25Nb3VzZWxlYXZlKCk6IHZvaWQge1xuICAgIHRoaXMubnpSZXNpemFibGVTZXJ2aWNlLm1vdXNlRW50ZXJlZCQubmV4dChmYWxzZSk7XG4gIH1cblxuICBzZXRQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkucG9zaXRpb247XG4gICAgaWYgKHBvc2l0aW9uID09PSAnc3RhdGljJyB8fCAhcG9zaXRpb24pIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgY2FsY1NpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHJhdGlvOiBudW1iZXIpOiBOelJlc2l6ZUV2ZW50IHtcbiAgICBsZXQgbmV3V2lkdGg6IG51bWJlcjtcbiAgICBsZXQgbmV3SGVpZ2h0OiBudW1iZXI7XG4gICAgbGV0IG1heFdpZHRoOiBudW1iZXI7XG4gICAgbGV0IG1heEhlaWdodDogbnVtYmVyO1xuICAgIGxldCBjb2wgPSAwO1xuICAgIGxldCBzcGFuV2lkdGggPSAwO1xuICAgIGxldCBtaW5XaWR0aCA9IHRoaXMubnpNaW5XaWR0aDtcbiAgICBsZXQgYm91bmRXaWR0aCA9IEluZmluaXR5O1xuICAgIGxldCBib3VuZEhlaWdodCA9IEluZmluaXR5O1xuICAgIGlmICh0aGlzLm56Qm91bmRzID09PSAncGFyZW50Jykge1xuICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWwpO1xuICAgICAgaWYgKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGJvdW5kV2lkdGggPSBwYXJlbnRSZWN0LndpZHRoO1xuICAgICAgICBib3VuZEhlaWdodCA9IHBhcmVudFJlY3QuaGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5uekJvdW5kcyA9PT0gJ3dpbmRvdycpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBib3VuZFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGJvdW5kSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5uekJvdW5kcyAmJiB0aGlzLm56Qm91bmRzLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5uekJvdW5kcy5uYXRpdmVFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGJvdW5kc1JlY3QgPSB0aGlzLm56Qm91bmRzLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBib3VuZFdpZHRoID0gYm91bmRzUmVjdC53aWR0aDtcbiAgICAgIGJvdW5kSGVpZ2h0ID0gYm91bmRzUmVjdC5oZWlnaHQ7XG4gICAgfVxuXG4gICAgbWF4V2lkdGggPSBlbnN1cmVJbkJvdW5kcyh0aGlzLm56TWF4V2lkdGgsIGJvdW5kV2lkdGgpO1xuICAgIG1heEhlaWdodCA9IGVuc3VyZUluQm91bmRzKHRoaXMubnpNYXhIZWlnaHQsIGJvdW5kSGVpZ2h0KTtcblxuICAgIGlmICh0aGlzLm56R3JpZENvbHVtbkNvdW50ICE9PSAtMSkge1xuICAgICAgc3BhbldpZHRoID0gbWF4V2lkdGggLyB0aGlzLm56R3JpZENvbHVtbkNvdW50O1xuICAgICAgbWluV2lkdGggPSB0aGlzLm56TWluQ29sdW1uICE9PSAtMSA/IHNwYW5XaWR0aCAqIHRoaXMubnpNaW5Db2x1bW4gOiBtaW5XaWR0aDtcbiAgICAgIG1heFdpZHRoID0gdGhpcy5uek1heENvbHVtbiAhPT0gLTEgPyBzcGFuV2lkdGggKiB0aGlzLm56TWF4Q29sdW1uIDogbWF4V2lkdGg7XG4gICAgfVxuXG4gICAgaWYgKHJhdGlvICE9PSAtMSkge1xuICAgICAgaWYgKC8obGVmdHxyaWdodCkvaS50ZXN0KHRoaXMuY3VycmVudEhhbmRsZUV2ZW50IS5kaXJlY3Rpb24pKSB7XG4gICAgICAgIG5ld1dpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgod2lkdGgsIG1pbldpZHRoKSwgbWF4V2lkdGgpO1xuICAgICAgICBuZXdIZWlnaHQgPSBNYXRoLm1pbihNYXRoLm1heChuZXdXaWR0aCAvIHJhdGlvLCB0aGlzLm56TWluSGVpZ2h0KSwgbWF4SGVpZ2h0KTtcbiAgICAgICAgaWYgKG5ld0hlaWdodCA+PSBtYXhIZWlnaHQgfHwgbmV3SGVpZ2h0IDw9IHRoaXMubnpNaW5IZWlnaHQpIHtcbiAgICAgICAgICBuZXdXaWR0aCA9IE1hdGgubWluKE1hdGgubWF4KG5ld0hlaWdodCAqIHJhdGlvLCBtaW5XaWR0aCksIG1heFdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3SGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgoaGVpZ2h0LCB0aGlzLm56TWluSGVpZ2h0KSwgbWF4SGVpZ2h0KTtcbiAgICAgICAgbmV3V2lkdGggPSBNYXRoLm1pbihNYXRoLm1heChuZXdIZWlnaHQgKiByYXRpbywgbWluV2lkdGgpLCBtYXhXaWR0aCk7XG4gICAgICAgIGlmIChuZXdXaWR0aCA+PSBtYXhXaWR0aCB8fCBuZXdXaWR0aCA8PSBtaW5XaWR0aCkge1xuICAgICAgICAgIG5ld0hlaWdodCA9IE1hdGgubWluKE1hdGgubWF4KG5ld1dpZHRoIC8gcmF0aW8sIHRoaXMubnpNaW5IZWlnaHQpLCBtYXhIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1dpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgod2lkdGgsIG1pbldpZHRoKSwgbWF4V2lkdGgpO1xuICAgICAgbmV3SGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgoaGVpZ2h0LCB0aGlzLm56TWluSGVpZ2h0KSwgbWF4SGVpZ2h0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uekdyaWRDb2x1bW5Db3VudCAhPT0gLTEpIHtcbiAgICAgIGNvbCA9IE1hdGgucm91bmQobmV3V2lkdGggLyBzcGFuV2lkdGgpO1xuICAgICAgbmV3V2lkdGggPSBjb2wgKiBzcGFuV2lkdGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbCxcbiAgICAgIHdpZHRoOiBuZXdXaWR0aCxcbiAgICAgIGhlaWdodDogbmV3SGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIHNldEN1cnNvcigpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKHRoaXMuY3VycmVudEhhbmRsZUV2ZW50IS5kaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICdjdXJzb3InLCAnY29sLXJlc2l6ZScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICdjdXJzb3InLCAncm93LXJlc2l6ZScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvcExlZnQnOlxuICAgICAgY2FzZSAnYm90dG9tUmlnaHQnOlxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICdjdXJzb3InLCAnbndzZS1yZXNpemUnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3BSaWdodCc6XG4gICAgICBjYXNlICdib3R0b21MZWZ0JzpcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShkb2N1bWVudC5ib2R5LCAnY3Vyc29yJywgJ25lc3ctcmVzaXplJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICd1c2VyLXNlbGVjdCcsICdub25lJyk7XG4gIH1cblxuICByZXNpemUoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgZWxSZWN0ID0gdGhpcy5lbFJlY3Q7XG4gICAgY29uc3QgcmVzaXplRXZlbnQgPSBnZXRFdmVudFdpdGhQb2ludChldmVudCk7XG4gICAgY29uc3QgaGFuZGxlRXZlbnQgPSBnZXRFdmVudFdpdGhQb2ludCh0aGlzLmN1cnJlbnRIYW5kbGVFdmVudCEubW91c2VFdmVudCk7XG4gICAgbGV0IHdpZHRoID0gZWxSZWN0LndpZHRoO1xuICAgIGxldCBoZWlnaHQgPSBlbFJlY3QuaGVpZ2h0O1xuICAgIGNvbnN0IHJhdGlvID0gdGhpcy5uekxvY2tBc3BlY3RSYXRpbyA/IHdpZHRoIC8gaGVpZ2h0IDogLTE7XG4gICAgc3dpdGNoICh0aGlzLmN1cnJlbnRIYW5kbGVFdmVudCEuZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlICdib3R0b21SaWdodCc6XG4gICAgICAgIHdpZHRoID0gcmVzaXplRXZlbnQuY2xpZW50WCAtIGVsUmVjdC5sZWZ0O1xuICAgICAgICBoZWlnaHQgPSByZXNpemVFdmVudC5jbGllbnRZIC0gZWxSZWN0LnRvcDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b21MZWZ0JzpcbiAgICAgICAgd2lkdGggPSBlbFJlY3Qud2lkdGggKyBoYW5kbGVFdmVudC5jbGllbnRYIC0gcmVzaXplRXZlbnQuY2xpZW50WDtcbiAgICAgICAgaGVpZ2h0ID0gcmVzaXplRXZlbnQuY2xpZW50WSAtIGVsUmVjdC50b3A7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9wUmlnaHQnOlxuICAgICAgICB3aWR0aCA9IHJlc2l6ZUV2ZW50LmNsaWVudFggLSBlbFJlY3QubGVmdDtcbiAgICAgICAgaGVpZ2h0ID0gZWxSZWN0LmhlaWdodCArIGhhbmRsZUV2ZW50LmNsaWVudFkgLSByZXNpemVFdmVudC5jbGllbnRZO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvcExlZnQnOlxuICAgICAgICB3aWR0aCA9IGVsUmVjdC53aWR0aCArIGhhbmRsZUV2ZW50LmNsaWVudFggLSByZXNpemVFdmVudC5jbGllbnRYO1xuICAgICAgICBoZWlnaHQgPSBlbFJlY3QuaGVpZ2h0ICsgaGFuZGxlRXZlbnQuY2xpZW50WSAtIHJlc2l6ZUV2ZW50LmNsaWVudFk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgaGVpZ2h0ID0gZWxSZWN0LmhlaWdodCArIGhhbmRsZUV2ZW50LmNsaWVudFkgLSByZXNpemVFdmVudC5jbGllbnRZO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgd2lkdGggPSByZXNpemVFdmVudC5jbGllbnRYIC0gZWxSZWN0LmxlZnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgaGVpZ2h0ID0gcmVzaXplRXZlbnQuY2xpZW50WSAtIGVsUmVjdC50b3A7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIHdpZHRoID0gZWxSZWN0LndpZHRoICsgaGFuZGxlRXZlbnQuY2xpZW50WCAtIHJlc2l6ZUV2ZW50LmNsaWVudFg7XG4gICAgfVxuICAgIGNvbnN0IHNpemUgPSB0aGlzLmNhbGNTaXplKHdpZHRoLCBoZWlnaHQsIHJhdGlvKTtcbiAgICB0aGlzLnNpemVDYWNoZSA9IHsgLi4uc2l6ZSB9O1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLm56UmVzaXplLmVtaXQoe1xuICAgICAgICAuLi5zaXplLFxuICAgICAgICBtb3VzZUV2ZW50OiBldmVudFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHRoaXMubnpQcmV2aWV3KSB7XG4gICAgICB0aGlzLnByZXZpZXdSZXNpemUoc2l6ZSk7XG4gICAgfVxuICB9XG5cbiAgZW5kUmVzaXplKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ2N1cnNvcicsICcnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICd1c2VyLXNlbGVjdCcsICcnKTtcbiAgICB0aGlzLnJlbW92ZUdob3N0RWxlbWVudCgpO1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLnNpemVDYWNoZVxuICAgICAgPyB7IC4uLnRoaXMuc2l6ZUNhY2hlIH1cbiAgICAgIDoge1xuICAgICAgICAgIHdpZHRoOiB0aGlzLmVsUmVjdC53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuZWxSZWN0LmhlaWdodFxuICAgICAgICB9O1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLm56UmVzaXplRW5kLmVtaXQoe1xuICAgICAgICAuLi5zaXplLFxuICAgICAgICBtb3VzZUV2ZW50OiBldmVudFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zaXplQ2FjaGUgPSBudWxsO1xuICAgIHRoaXMuY3VycmVudEhhbmRsZUV2ZW50ID0gbnVsbDtcbiAgfVxuXG4gIHByZXZpZXdSZXNpemUoeyB3aWR0aCwgaGVpZ2h0IH06IE56UmVzaXplRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZUdob3N0RWxlbWVudCgpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5naG9zdEVsZW1lbnQsICd3aWR0aCcsIGAke3dpZHRofXB4YCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmdob3N0RWxlbWVudCwgJ2hlaWdodCcsIGAke2hlaWdodH1weGApO1xuICB9XG5cbiAgY3JlYXRlR2hvc3RFbGVtZW50KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5naG9zdEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZ2hvc3RFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZ2hvc3RFbGVtZW50LCAnY2xhc3MnLCAnbnotcmVzaXphYmxlLXByZXZpZXcnKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsLCB0aGlzLmdob3N0RWxlbWVudCk7XG4gIH1cblxuICByZW1vdmVHaG9zdEVsZW1lbnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ2hvc3RFbGVtZW50KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuZWwsIHRoaXMuZ2hvc3RFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLmVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLnNldFBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5naG9zdEVsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuc2l6ZUNhY2hlID0gbnVsbDtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==