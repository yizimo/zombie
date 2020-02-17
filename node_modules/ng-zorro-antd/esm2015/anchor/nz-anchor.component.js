/**
 * @fileoverview added by tsickle
 * Generated from: nz-anchor.component.ts
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
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { toNumber, InputBoolean, InputNumber, NzConfigService, NzScrollService, WithConfig } from 'ng-zorro-antd/core';
/**
 * @record
 */
function Section() { }
if (false) {
    /** @type {?} */
    Section.prototype.comp;
    /** @type {?} */
    Section.prototype.top;
}
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'anchor';
/** @type {?} */
const sharpMatcherRegx = /#([^#]+)$/;
export class NzAnchorComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} scrollSrv
     * @param {?} doc
     * @param {?} cdr
     * @param {?} platform
     */
    constructor(nzConfigService, scrollSrv, doc, cdr, platform) {
        this.nzConfigService = nzConfigService;
        this.scrollSrv = scrollSrv;
        this.doc = doc;
        this.cdr = cdr;
        this.platform = platform;
        this.nzAffix = true;
        this.nzClick = new EventEmitter();
        this.nzScroll = new EventEmitter();
        this.visible = false;
        this.wrapperStyle = { 'max-height': '100vh' };
        this.links = [];
        this.animating = false;
        this.target = null;
        this.scroll$ = null;
        this.destroyed = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzOffsetTop(value) {
        this._offsetTop = toNumber(value, 0);
        this.wrapperStyle = {
            'max-height': `calc(100vh - ${this._offsetTop}px)`
        };
    }
    /**
     * @return {?}
     */
    get nzOffsetTop() {
        return this._offsetTop;
    }
    /**
     * @param {?} el
     * @return {?}
     */
    set nzTarget(el) {
        this.target = typeof el === 'string' ? this.doc.querySelector(el) : el;
        this.registerScrollEvent();
    }
    /**
     * @param {?} link
     * @return {?}
     */
    registerLink(link) {
        this.links.push(link);
    }
    /**
     * @param {?} link
     * @return {?}
     */
    unregisterLink(link) {
        this.links.splice(this.links.indexOf(link), 1);
    }
    /**
     * @private
     * @return {?}
     */
    getTarget() {
        return this.target || window;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.registerScrollEvent();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed = true;
        this.removeListen();
    }
    /**
     * @private
     * @return {?}
     */
    registerScrollEvent() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.removeListen();
        this.scroll$ = fromEvent(this.getTarget(), 'scroll')
            .pipe(throttleTime(50), distinctUntilChanged())
            .subscribe((/**
         * @return {?}
         */
        () => this.handleScroll()));
        // Browser would maintain the scrolling position when refreshing.
        // So we have to delay calculation in avoid of getting a incorrect result.
        setTimeout((/**
         * @return {?}
         */
        () => this.handleScroll()));
    }
    /**
     * @private
     * @return {?}
     */
    removeListen() {
        if (this.scroll$) {
            this.scroll$.unsubscribe();
        }
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    getOffsetTop(element) {
        if (!element || !element.getClientRects().length) {
            return 0;
        }
        /** @type {?} */
        const rect = element.getBoundingClientRect();
        if (rect.width || rect.height) {
            if (this.getTarget() === window) {
                return rect.top - (/** @type {?} */ ((/** @type {?} */ (element.ownerDocument)).documentElement)).clientTop;
            }
            return rect.top - ((/** @type {?} */ (this.getTarget()))).getBoundingClientRect().top;
        }
        return rect.top;
    }
    /**
     * @return {?}
     */
    handleScroll() {
        if (typeof document === 'undefined' || this.destroyed || this.animating) {
            return;
        }
        /** @type {?} */
        const sections = [];
        /** @type {?} */
        const scope = (this.nzOffsetTop || 0) + this.nzBounds;
        this.links.forEach((/**
         * @param {?} comp
         * @return {?}
         */
        comp => {
            /** @type {?} */
            const sharpLinkMatch = sharpMatcherRegx.exec(comp.nzHref.toString());
            if (!sharpLinkMatch) {
                return;
            }
            /** @type {?} */
            const target = this.doc.getElementById(sharpLinkMatch[1]);
            if (target) {
                /** @type {?} */
                const top = this.getOffsetTop(target);
                if (top < scope) {
                    sections.push({
                        top,
                        comp
                    });
                }
            }
        }));
        this.visible = !!sections.length;
        if (!this.visible) {
            this.clearActive();
            this.cdr.detectChanges();
        }
        else {
            /** @type {?} */
            const maxSection = sections.reduce((/**
             * @param {?} prev
             * @param {?} curr
             * @return {?}
             */
            (prev, curr) => (curr.top > prev.top ? curr : prev)));
            this.handleActive(maxSection.comp);
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearActive() {
        this.links.forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => {
            i.active = false;
            i.markForCheck();
        }));
    }
    /**
     * @private
     * @param {?} comp
     * @return {?}
     */
    handleActive(comp) {
        this.clearActive();
        comp.active = true;
        comp.markForCheck();
        /** @type {?} */
        const linkNode = (/** @type {?} */ (((/** @type {?} */ (comp.elementRef.nativeElement))).querySelector('.ant-anchor-link-title')));
        this.ink.nativeElement.style.top = `${linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5}px`;
        this.visible = true;
        this.cdr.detectChanges();
        this.nzScroll.emit(comp);
    }
    /**
     * @param {?} linkComp
     * @return {?}
     */
    handleScrollTo(linkComp) {
        /** @type {?} */
        const el = this.doc.querySelector(linkComp.nzHref);
        if (!el) {
            return;
        }
        this.animating = true;
        /** @type {?} */
        const containerScrollTop = this.scrollSrv.getScroll(this.getTarget());
        /** @type {?} */
        const elOffsetTop = this.getOffsetTop(el);
        /** @type {?} */
        const targetScrollTop = containerScrollTop + elOffsetTop - (this.nzOffsetTop || 0);
        this.scrollSrv.scrollTo(this.getTarget(), targetScrollTop, undefined, (/**
         * @return {?}
         */
        () => {
            this.animating = false;
            this.handleActive(linkComp);
        }));
        this.nzClick.emit(linkComp.nzHref);
    }
}
NzAnchorComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-anchor',
                exportAs: 'nzAnchor',
                preserveWhitespaces: false,
                template: "<nz-affix *ngIf=\"nzAffix;else content\" [nzOffsetTop]=\"nzOffsetTop\">\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n</nz-affix>\n<ng-template #content>\n  <div class=\"ant-anchor-wrapper\" [ngStyle]=\"wrapperStyle\">\n    <div class=\"ant-anchor\" [ngClass]=\"{'fixed': !nzAffix && !nzShowInkInFixed}\">\n      <div class=\"ant-anchor-ink\">\n        <div class=\"ant-anchor-ink-ball\" [class.visible]=\"visible\" #ink></div>\n      </div>\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzAnchorComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: NzScrollService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ChangeDetectorRef },
    { type: Platform }
];
NzAnchorComponent.propDecorators = {
    ink: [{ type: ViewChild, args: ['ink', { static: false },] }],
    nzAffix: [{ type: Input }],
    nzShowInkInFixed: [{ type: Input }],
    nzBounds: [{ type: Input }],
    nzOffsetTop: [{ type: Input }],
    nzTarget: [{ type: Input }],
    nzClick: [{ type: Output }],
    nzScroll: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzAnchorComponent.prototype, "nzAffix", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzAnchorComponent.prototype, "nzShowInkInFixed", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 5),
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], NzAnchorComponent.prototype, "nzBounds", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], NzAnchorComponent.prototype, "nzOffsetTop", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.ink;
    /** @type {?} */
    NzAnchorComponent.prototype.nzAffix;
    /** @type {?} */
    NzAnchorComponent.prototype.nzShowInkInFixed;
    /** @type {?} */
    NzAnchorComponent.prototype.nzBounds;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype._offsetTop;
    /** @type {?} */
    NzAnchorComponent.prototype.nzClick;
    /** @type {?} */
    NzAnchorComponent.prototype.nzScroll;
    /** @type {?} */
    NzAnchorComponent.prototype.visible;
    /** @type {?} */
    NzAnchorComponent.prototype.wrapperStyle;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.links;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.animating;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.target;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.scroll$;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.destroyed;
    /** @type {?} */
    NzAnchorComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.scrollSrv;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.doc;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYW5jaG9yLyIsInNvdXJjZXMiOlsibnotYW5jaG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRSxPQUFPLEVBQ0wsUUFBUSxFQUNSLFlBQVksRUFDWixXQUFXLEVBRVgsZUFBZSxFQUNmLGVBQWUsRUFDZixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUk1QixzQkFHQzs7O0lBRkMsdUJBQTRCOztJQUM1QixzQkFBWTs7O01BR1Isd0JBQXdCLEdBQUcsUUFBUTs7TUFDbkMsZ0JBQWdCLEdBQUcsV0FBVztBQVVwQyxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7OztJQWdENUIsWUFDUyxlQUFnQyxFQUMvQixTQUEwQixFQUVSLEdBQVEsRUFDMUIsR0FBc0IsRUFDdEIsUUFBa0I7UUFMbkIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQy9CLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBRVIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUMxQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBbkRILFlB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Y2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRocm90dGxlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgdG9OdW1iZXIsXG4gIElucHV0Qm9vbGVhbixcbiAgSW5wdXROdW1iZXIsXG4gIE5nU3R5bGVJbnRlcmZhY2UsXG4gIE56Q29uZmlnU2VydmljZSxcbiAgTnpTY3JvbGxTZXJ2aWNlLFxuICBXaXRoQ29uZmlnXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7IE56QW5jaG9yTGlua0NvbXBvbmVudCB9IGZyb20gJy4vbnotYW5jaG9yLWxpbmsuY29tcG9uZW50JztcblxuaW50ZXJmYWNlIFNlY3Rpb24ge1xuICBjb21wOiBOekFuY2hvckxpbmtDb21wb25lbnQ7XG4gIHRvcDogbnVtYmVyO1xufVxuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnYW5jaG9yJztcbmNvbnN0IHNoYXJwTWF0Y2hlclJlZ3ggPSAvIyhbXiNdKykkLztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotYW5jaG9yJyxcbiAgZXhwb3J0QXM6ICduekFuY2hvcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotYW5jaG9yLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTnpBbmNob3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdpbmsnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBpbms6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QWZmaXggPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBuelNob3dJbmtJbkZpeGVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgNSlcbiAgQElucHV0TnVtYmVyKClcbiAgbnpCb3VuZHM6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBAV2l0aENvbmZpZzxudW1iZXI+KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSlcbiAgc2V0IG56T2Zmc2V0VG9wKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9vZmZzZXRUb3AgPSB0b051bWJlcih2YWx1ZSwgMCk7XG4gICAgdGhpcy53cmFwcGVyU3R5bGUgPSB7XG4gICAgICAnbWF4LWhlaWdodCc6IGBjYWxjKDEwMHZoIC0gJHt0aGlzLl9vZmZzZXRUb3B9cHgpYFxuICAgIH07XG4gIH1cblxuICBnZXQgbnpPZmZzZXRUb3AoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0VG9wO1xuICB9XG5cbiAgcHJpdmF0ZSBfb2Zmc2V0VG9wOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgc2V0IG56VGFyZ2V0KGVsOiBzdHJpbmcgfCBFbGVtZW50KSB7XG4gICAgdGhpcy50YXJnZXQgPSB0eXBlb2YgZWwgPT09ICdzdHJpbmcnID8gdGhpcy5kb2MucXVlcnlTZWxlY3RvcihlbCkgOiBlbDtcbiAgICB0aGlzLnJlZ2lzdGVyU2Nyb2xsRXZlbnQoKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNjcm9sbCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpBbmNob3JMaW5rQ29tcG9uZW50PigpO1xuXG4gIHZpc2libGUgPSBmYWxzZTtcbiAgd3JhcHBlclN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlID0geyAnbWF4LWhlaWdodCc6ICcxMDB2aCcgfTtcblxuICBwcml2YXRlIGxpbmtzOiBOekFuY2hvckxpbmtDb21wb25lbnRbXSA9IFtdO1xuICBwcml2YXRlIGFuaW1hdGluZyA9IGZhbHNlO1xuICBwcml2YXRlIHRhcmdldDogRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHNjcm9sbCQ6IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGRlc3Ryb3llZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHNjcm9sbFNydjogTnpTY3JvbGxTZXJ2aWNlLFxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHt9XG5cbiAgcmVnaXN0ZXJMaW5rKGxpbms6IE56QW5jaG9yTGlua0NvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMubGlua3MucHVzaChsaW5rKTtcbiAgfVxuXG4gIHVucmVnaXN0ZXJMaW5rKGxpbms6IE56QW5jaG9yTGlua0NvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMubGlua3Muc3BsaWNlKHRoaXMubGlua3MuaW5kZXhPZihsaW5rKSwgMSk7XG4gIH1cblxuICBwcml2YXRlIGdldFRhcmdldCgpOiBFbGVtZW50IHwgV2luZG93IHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXQgfHwgd2luZG93O1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVnaXN0ZXJTY3JvbGxFdmVudCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuKCk7XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyU2Nyb2xsRXZlbnQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUxpc3RlbigpO1xuICAgIHRoaXMuc2Nyb2xsJCA9IGZyb21FdmVudCh0aGlzLmdldFRhcmdldCgpLCAnc2Nyb2xsJylcbiAgICAgIC5waXBlKFxuICAgICAgICB0aHJvdHRsZVRpbWUoNTApLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuaGFuZGxlU2Nyb2xsKCkpO1xuICAgIC8vIEJyb3dzZXIgd291bGQgbWFpbnRhaW4gdGhlIHNjcm9sbGluZyBwb3NpdGlvbiB3aGVuIHJlZnJlc2hpbmcuXG4gICAgLy8gU28gd2UgaGF2ZSB0byBkZWxheSBjYWxjdWxhdGlvbiBpbiBhdm9pZCBvZiBnZXR0aW5nIGEgaW5jb3JyZWN0IHJlc3VsdC5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaGFuZGxlU2Nyb2xsKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVMaXN0ZW4oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsJCkge1xuICAgICAgdGhpcy5zY3JvbGwkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRPZmZzZXRUb3AoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICAgIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChyZWN0LndpZHRoIHx8IHJlY3QuaGVpZ2h0KSB7XG4gICAgICBpZiAodGhpcy5nZXRUYXJnZXQoKSA9PT0gd2luZG93KSB7XG4gICAgICAgIHJldHVybiByZWN0LnRvcCAtIGVsZW1lbnQub3duZXJEb2N1bWVudCEuZG9jdW1lbnRFbGVtZW50IS5jbGllbnRUb3A7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVjdC50b3AgLSAodGhpcy5nZXRUYXJnZXQoKSBhcyBIVE1MRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIH1cbiAgICByZXR1cm4gcmVjdC50b3A7XG4gIH1cblxuICBoYW5kbGVTY3JvbGwoKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5kZXN0cm95ZWQgfHwgdGhpcy5hbmltYXRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzZWN0aW9uczogU2VjdGlvbltdID0gW107XG4gICAgY29uc3Qgc2NvcGUgPSAodGhpcy5uek9mZnNldFRvcCB8fCAwKSArIHRoaXMubnpCb3VuZHM7XG4gICAgdGhpcy5saW5rcy5mb3JFYWNoKGNvbXAgPT4ge1xuICAgICAgY29uc3Qgc2hhcnBMaW5rTWF0Y2ggPSBzaGFycE1hdGNoZXJSZWd4LmV4ZWMoY29tcC5uekhyZWYudG9TdHJpbmcoKSk7XG4gICAgICBpZiAoIXNoYXJwTGlua01hdGNoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZG9jLmdldEVsZW1lbnRCeUlkKHNoYXJwTGlua01hdGNoWzFdKTtcbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgdG9wID0gdGhpcy5nZXRPZmZzZXRUb3AodGFyZ2V0KTtcbiAgICAgICAgaWYgKHRvcCA8IHNjb3BlKSB7XG4gICAgICAgICAgc2VjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICB0b3AsXG4gICAgICAgICAgICBjb21wXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudmlzaWJsZSA9ICEhc2VjdGlvbnMubGVuZ3RoO1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1heFNlY3Rpb24gPSBzZWN0aW9ucy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IChjdXJyLnRvcCA+IHByZXYudG9wID8gY3VyciA6IHByZXYpKTtcbiAgICAgIHRoaXMuaGFuZGxlQWN0aXZlKG1heFNlY3Rpb24uY29tcCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckFjdGl2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmxpbmtzLmZvckVhY2goaSA9PiB7XG4gICAgICBpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgaS5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQWN0aXZlKGNvbXA6IE56QW5jaG9yTGlua0NvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcblxuICAgIGNvbXAuYWN0aXZlID0gdHJ1ZTtcbiAgICBjb21wLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgY29uc3QgbGlua05vZGUgPSAoY29tcC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLmFudC1hbmNob3ItbGluay10aXRsZSdcbiAgICApIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMuaW5rLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gYCR7bGlua05vZGUub2Zmc2V0VG9wICsgbGlua05vZGUuY2xpZW50SGVpZ2h0IC8gMiAtIDQuNX1weGA7XG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICB0aGlzLm56U2Nyb2xsLmVtaXQoY29tcCk7XG4gIH1cblxuICBoYW5kbGVTY3JvbGxUbyhsaW5rQ29tcDogTnpBbmNob3JMaW5rQ29tcG9uZW50KTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGxpbmtDb21wLm56SHJlZik7XG4gICAgaWYgKCFlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICBjb25zdCBjb250YWluZXJTY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGhpcy5nZXRUYXJnZXQoKSk7XG4gICAgY29uc3QgZWxPZmZzZXRUb3AgPSB0aGlzLmdldE9mZnNldFRvcChlbCk7XG4gICAgY29uc3QgdGFyZ2V0U2Nyb2xsVG9wID0gY29udGFpbmVyU2Nyb2xsVG9wICsgZWxPZmZzZXRUb3AgLSAodGhpcy5uek9mZnNldFRvcCB8fCAwKTtcbiAgICB0aGlzLnNjcm9sbFNydi5zY3JvbGxUbyh0aGlzLmdldFRhcmdldCgpLCB0YXJnZXRTY3JvbGxUb3AsIHVuZGVmaW5lZCwgKCkgPT4ge1xuICAgICAgdGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGFuZGxlQWN0aXZlKGxpbmtDb21wKTtcbiAgICB9KTtcbiAgICB0aGlzLm56Q2xpY2suZW1pdChsaW5rQ29tcC5uekhyZWYpO1xuICB9XG59XG4iXX0=