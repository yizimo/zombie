/**
 * @fileoverview added by tsickle
 * Generated from: nz-typography.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { cancelRequestAnimationFrame, isStyleSupport, measure, reqAnimFrame, InputBoolean, InputNumber, NzConfigService, NzDomEventService, WithConfig } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzTextCopyComponent } from './nz-text-copy.component';
import { NzTextEditComponent } from './nz-text-edit.component';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'typography';
export class NzTypographyComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} host
     * @param {?} cdr
     * @param {?} viewContainerRef
     * @param {?} renderer
     * @param {?} platform
     * @param {?} i18n
     * @param {?} nzDomEventService
     */
    constructor(nzConfigService, host, cdr, viewContainerRef, renderer, platform, i18n, nzDomEventService) {
        this.nzConfigService = nzConfigService;
        this.host = host;
        this.cdr = cdr;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this.platform = platform;
        this.i18n = i18n;
        this.nzDomEventService = nzDomEventService;
        this.nzCopyable = false;
        this.nzEditable = false;
        this.nzDisabled = false;
        this.nzExpandable = false;
        this.nzEllipsis = false;
        this.nzContentChange = new EventEmitter();
        this.nzCopy = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.editing = false;
        this.cssEllipsis = false;
        this.isEllipsis = false;
        this.expanded = false;
        this.ellipsisStr = '...';
        this.viewInit = false;
        this.rfaId = -1;
        this.destroy$ = new Subject();
        this.windowResizeSubscription = Subscription.EMPTY;
    }
    /**
     * @return {?}
     */
    get canCssEllipsis() {
        return this.nzEllipsis && this.cssEllipsis && !this.expanded;
    }
    /**
     * @return {?}
     */
    get copyText() {
        return typeof this.nzCopyText === 'string' ? this.nzCopyText : this.nzContent;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    onTextCopy(text) {
        this.nzCopy.emit(text);
    }
    /**
     * @return {?}
     */
    onStartEditing() {
        this.editing = true;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    onEndEditing(text) {
        this.editing = false;
        this.nzContentChange.emit(text);
        if (this.nzContent === text) {
            this.renderOnNextFrame();
        }
    }
    /**
     * @return {?}
     */
    onExpand() {
        this.expanded = true;
        this.nzExpandChange.emit();
    }
    /**
     * @return {?}
     */
    canUseCSSEllipsis() {
        if (this.nzEditable || this.nzCopyable || this.nzExpandable) {
            return false;
        }
        if (this.nzEllipsisRows === 1) {
            return isStyleSupport('textOverflow');
        }
        else {
            return isStyleSupport('webkitLineClamp');
        }
    }
    /**
     * @return {?}
     */
    renderOnNextFrame() {
        cancelRequestAnimationFrame(this.rfaId);
        if (!this.viewInit || !this.nzEllipsis || this.nzEllipsisRows < 0 || this.expanded || !this.platform.isBrowser) {
            return;
        }
        this.rfaId = reqAnimFrame((/**
         * @return {?}
         */
        () => {
            this.syncEllipsis();
        }));
    }
    /**
     * @return {?}
     */
    getOriginContentViewRef() {
        /** @type {?} */
        const viewRef = this.viewContainerRef.createEmbeddedView(this.contentTemplate, {
            content: this.nzContent
        });
        viewRef.detectChanges();
        return {
            viewRef,
            removeView: (/**
             * @return {?}
             */
            () => {
                this.viewContainerRef.remove(this.viewContainerRef.indexOf(viewRef));
            })
        };
    }
    /**
     * @return {?}
     */
    syncEllipsis() {
        if (this.cssEllipsis) {
            return;
        }
        const { viewRef, removeView } = this.getOriginContentViewRef();
        /** @type {?} */
        const fixedNodes = [this.textCopyRef, this.textEditRef, this.expandableBtn]
            .filter((/**
         * @param {?} e
         * @return {?}
         */
        e => e && e.nativeElement))
            .map((/**
         * @param {?} e
         * @return {?}
         */
        e => e.nativeElement));
        const { contentNodes, text, ellipsis } = measure(this.host.nativeElement, this.nzEllipsisRows, viewRef.rootNodes, fixedNodes, this.ellipsisStr);
        removeView();
        this.ellipsisText = text;
        this.isEllipsis = ellipsis;
        /** @type {?} */
        const ellipsisContainerNativeElement = this.ellipsisContainer.nativeElement;
        while (ellipsisContainerNativeElement.firstChild) {
            this.renderer.removeChild(ellipsisContainerNativeElement, ellipsisContainerNativeElement.firstChild);
        }
        contentNodes.forEach((/**
         * @param {?} n
         * @return {?}
         */
        n => {
            this.renderer.appendChild(ellipsisContainerNativeElement, n.cloneNode(true));
        }));
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    renderAndSubscribeWindowResize() {
        if (this.platform.isBrowser) {
            this.windowResizeSubscription.unsubscribe();
            this.cssEllipsis = this.canUseCSSEllipsis();
            this.renderOnNextFrame();
            this.windowResizeSubscription = this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize((/**
             * @return {?}
             */
            () => this.nzDomEventService.unregisterResizeListener())))
                .subscribe((/**
             * @return {?}
             */
            () => this.renderOnNextFrame()));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Text');
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.viewInit = true;
        this.renderAndSubscribeWindowResize();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzCopyable, nzEditable, nzExpandable, nzEllipsis, nzContent, nzEllipsisRows } = changes;
        if (nzCopyable || nzEditable || nzExpandable || nzEllipsis || nzContent || nzEllipsisRows) {
            if (this.nzEllipsis) {
                if (this.expanded) {
                    this.windowResizeSubscription.unsubscribe();
                }
                else {
                    this.renderAndSubscribeWindowResize();
                }
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.windowResizeSubscription.unsubscribe();
    }
}
NzTypographyComponent.decorators = [
    { type: Component, args: [{
                selector: `
  nz-typography,
  [nz-typography],
  p[nz-paragraph],
  span[nz-text],
  h1[nz-title], h2[nz-title], h3[nz-title], h4[nz-title]
  `,
                exportAs: 'nzTypography',
                template: "<ng-template #contentTemplate let-content=\"content\">\n  <ng-content *ngIf=\"!content\"></ng-content>\n  {{content}}\n</ng-template>\n\n<ng-container *ngIf=\"!editing\">\n  <ng-container *ngIf=\"expanded || (!nzExpandable && nzEllipsisRows === 1) || canCssEllipsis\">\n    <ng-template [ngTemplateOutlet]=\"contentTemplate\" [ngTemplateOutletContext]=\"{ content: nzContent}\"></ng-template>\n  </ng-container>\n  <ng-container *ngIf=\"nzEllipsis && !expanded && (nzEllipsisRows > 1 || nzExpandable)\">\n    <span #ellipsisContainer></span>\n    <ng-container *ngIf=\"isEllipsis\">{{ellipsisStr}}</ng-container>\n    <a #expandable *ngIf=\"nzExpandable && isEllipsis\" class=\"ant-typography-expand\" (click)=\"onExpand()\">{{locale?.expand}}</a>\n  </ng-container>\n</ng-container>\n\n<nz-text-edit\n  *ngIf=\"nzEditable\"\n  [text]=\"nzContent\"\n  (endEditing)=\"onEndEditing($event)\"\n  (startEditing)=\"onStartEditing()\">\n</nz-text-edit>\n\n<nz-text-copy *ngIf=\"nzCopyable && !editing\" [text]=\"copyText\" (textCopy)=\"onTextCopy($event)\"></nz-text-copy>\n\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                host: {
                    '[class.ant-typography]': '!editing',
                    '[class.ant-typography-edit-content]': 'editing',
                    '[class.ant-typography-secondary]': 'nzType === "secondary"',
                    '[class.ant-typography-warning]': 'nzType === "warning"',
                    '[class.ant-typography-danger]': 'nzType === "danger"',
                    '[class.ant-typography-disabled]': 'nzDisabled',
                    '[class.ant-typography-ellipsis]': 'nzEllipsis && !expanded',
                    '[class.ant-typography-ellipsis-single-line]': 'canCssEllipsis && nzEllipsisRows === 1',
                    '[class.ant-typography-ellipsis-multiple-line]': 'canCssEllipsis && nzEllipsisRows > 1',
                    '[style.-webkit-line-clamp]': '(canCssEllipsis && nzEllipsisRows > 1) ? nzEllipsisRows : null'
                }
            }] }
];
/** @nocollapse */
NzTypographyComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: ViewContainerRef },
    { type: Renderer2 },
    { type: Platform },
    { type: NzI18nService },
    { type: NzDomEventService }
];
NzTypographyComponent.propDecorators = {
    nzCopyable: [{ type: Input }],
    nzEditable: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzExpandable: [{ type: Input }],
    nzEllipsis: [{ type: Input }],
    nzContent: [{ type: Input }],
    nzEllipsisRows: [{ type: Input }],
    nzType: [{ type: Input }],
    nzCopyText: [{ type: Input }],
    nzContentChange: [{ type: Output }],
    nzCopy: [{ type: Output }],
    nzExpandChange: [{ type: Output }],
    textEditRef: [{ type: ViewChild, args: [NzTextEditComponent, { static: false },] }],
    textCopyRef: [{ type: ViewChild, args: [NzTextCopyComponent, { static: false },] }],
    ellipsisContainer: [{ type: ViewChild, args: ['ellipsisContainer', { static: false },] }],
    expandableBtn: [{ type: ViewChild, args: ['expandable', { static: false },] }],
    contentTemplate: [{ type: ViewChild, args: ['contentTemplate', { static: false },] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzCopyable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzEditable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzExpandable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzEllipsis", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 1), InputNumber(),
    tslib_1.__metadata("design:type", Number)
], NzTypographyComponent.prototype, "nzEllipsisRows", void 0);
if (false) {
    /** @type {?} */
    NzTypographyComponent.prototype.nzCopyable;
    /** @type {?} */
    NzTypographyComponent.prototype.nzEditable;
    /** @type {?} */
    NzTypographyComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTypographyComponent.prototype.nzExpandable;
    /** @type {?} */
    NzTypographyComponent.prototype.nzEllipsis;
    /** @type {?} */
    NzTypographyComponent.prototype.nzContent;
    /** @type {?} */
    NzTypographyComponent.prototype.nzEllipsisRows;
    /** @type {?} */
    NzTypographyComponent.prototype.nzType;
    /** @type {?} */
    NzTypographyComponent.prototype.nzCopyText;
    /** @type {?} */
    NzTypographyComponent.prototype.nzContentChange;
    /** @type {?} */
    NzTypographyComponent.prototype.nzCopy;
    /** @type {?} */
    NzTypographyComponent.prototype.nzExpandChange;
    /** @type {?} */
    NzTypographyComponent.prototype.textEditRef;
    /** @type {?} */
    NzTypographyComponent.prototype.textCopyRef;
    /** @type {?} */
    NzTypographyComponent.prototype.ellipsisContainer;
    /** @type {?} */
    NzTypographyComponent.prototype.expandableBtn;
    /** @type {?} */
    NzTypographyComponent.prototype.contentTemplate;
    /** @type {?} */
    NzTypographyComponent.prototype.locale;
    /** @type {?} */
    NzTypographyComponent.prototype.editing;
    /** @type {?} */
    NzTypographyComponent.prototype.ellipsisText;
    /** @type {?} */
    NzTypographyComponent.prototype.cssEllipsis;
    /** @type {?} */
    NzTypographyComponent.prototype.isEllipsis;
    /** @type {?} */
    NzTypographyComponent.prototype.expanded;
    /** @type {?} */
    NzTypographyComponent.prototype.ellipsisStr;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.viewInit;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.rfaId;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.windowResizeSubscription;
    /** @type {?} */
    NzTypographyComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.host;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.nzDomEventService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHlwb2dyYXBoeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3R5cG9ncmFwaHkvIiwic291cmNlcyI6WyJuei10eXBvZ3JhcGh5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBRVYsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFDTCwyQkFBMkIsRUFDM0IsY0FBYyxFQUNkLE9BQU8sRUFDUCxZQUFZLEVBQ1osWUFBWSxFQUNaLFdBQVcsRUFDWCxlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDWCxNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7TUFFekQsd0JBQXdCLEdBQUcsWUFBWTtBQTRCN0MsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7Ozs7Ozs7SUF5Q2hDLFlBQ1MsZUFBZ0MsRUFDL0IsSUFBNkIsRUFDN0IsR0FBc0IsRUFDdEIsZ0JBQWtDLEVBQ2xDLFFBQW1CLEVBQ25CLFFBQWtCLEVBQ2xCLElBQW1CLEVBQ25CLGlC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QUMxQixxQ0FBMkI7Ozs7O0lBQzNCLGtEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmluYWxpemUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxuICBpc1N0eWxlU3VwcG9ydCxcbiAgbWVhc3VyZSxcbiAgcmVxQW5pbUZyYW1lLFxuICBJbnB1dEJvb2xlYW4sXG4gIElucHV0TnVtYmVyLFxuICBOekNvbmZpZ1NlcnZpY2UsXG4gIE56RG9tRXZlbnRTZXJ2aWNlLFxuICBXaXRoQ29uZmlnXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcblxuaW1wb3J0IHsgTnpUZXh0Q29weUNvbXBvbmVudCB9IGZyb20gJy4vbnotdGV4dC1jb3B5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelRleHRFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9uei10ZXh0LWVkaXQuY29tcG9uZW50JztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ3R5cG9ncmFwaHknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IGBcbiAgbnotdHlwb2dyYXBoeSxcbiAgW256LXR5cG9ncmFwaHldLFxuICBwW256LXBhcmFncmFwaF0sXG4gIHNwYW5bbnotdGV4dF0sXG4gIGgxW256LXRpdGxlXSwgaDJbbnotdGl0bGVdLCBoM1tuei10aXRsZV0sIGg0W256LXRpdGxlXVxuICBgLFxuICBleHBvcnRBczogJ256VHlwb2dyYXBoeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10eXBvZ3JhcGh5LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeV0nOiAnIWVkaXRpbmcnLFxuICAgICdbY2xhc3MuYW50LXR5cG9ncmFwaHktZWRpdC1jb250ZW50XSc6ICdlZGl0aW5nJyxcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5LXNlY29uZGFyeV0nOiAnbnpUeXBlID09PSBcInNlY29uZGFyeVwiJyxcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5LXdhcm5pbmddJzogJ256VHlwZSA9PT0gXCJ3YXJuaW5nXCInLFxuICAgICdbY2xhc3MuYW50LXR5cG9ncmFwaHktZGFuZ2VyXSc6ICduelR5cGUgPT09IFwiZGFuZ2VyXCInLFxuICAgICdbY2xhc3MuYW50LXR5cG9ncmFwaHktZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LXR5cG9ncmFwaHktZWxsaXBzaXNdJzogJ256RWxsaXBzaXMgJiYgIWV4cGFuZGVkJyxcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5LWVsbGlwc2lzLXNpbmdsZS1saW5lXSc6ICdjYW5Dc3NFbGxpcHNpcyAmJiBuekVsbGlwc2lzUm93cyA9PT0gMScsXG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeS1lbGxpcHNpcy1tdWx0aXBsZS1saW5lXSc6ICdjYW5Dc3NFbGxpcHNpcyAmJiBuekVsbGlwc2lzUm93cyA+IDEnLFxuICAgICdbc3R5bGUuLXdlYmtpdC1saW5lLWNsYW1wXSc6ICcoY2FuQ3NzRWxsaXBzaXMgJiYgbnpFbGxpcHNpc1Jvd3MgPiAxKSA/IG56RWxsaXBzaXNSb3dzIDogbnVsbCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelR5cG9ncmFwaHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q29weWFibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RWRpdGFibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RXhwYW5kYWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpFbGxpcHNpcyA9IGZhbHNlO1xuICBASW5wdXQoKSBuekNvbnRlbnQ6IHN0cmluZztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAxKSBASW5wdXROdW1iZXIoKSBuekVsbGlwc2lzUm93czogbnVtYmVyO1xuICBASW5wdXQoKSBuelR5cGU6ICdzZWNvbmRhcnknIHwgJ3dhcm5pbmcnIHwgJ2RhbmdlcicgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIG56Q29weVRleHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q29udGVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDb3B5ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekV4cGFuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBAVmlld0NoaWxkKE56VGV4dEVkaXRDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSB0ZXh0RWRpdFJlZjogTnpUZXh0RWRpdENvbXBvbmVudDtcbiAgQFZpZXdDaGlsZChOelRleHRDb3B5Q29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgdGV4dENvcHlSZWY6IE56VGV4dENvcHlDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ2VsbGlwc2lzQ29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIGVsbGlwc2lzQ29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxTcGFuRWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ2V4cGFuZGFibGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgZXhwYW5kYWJsZUJ0bjogRWxlbWVudFJlZjxIVE1MU3BhbkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdjb250ZW50VGVtcGxhdGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgY29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7IGNvbnRlbnQ6IHN0cmluZyB9PjtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGxvY2FsZTogYW55ID0ge307XG4gIGVkaXRpbmcgPSBmYWxzZTtcbiAgZWxsaXBzaXNUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNzc0VsbGlwc2lzOiBib29sZWFuID0gZmFsc2U7XG4gIGlzRWxsaXBzaXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZWxsaXBzaXNTdHIgPSAnLi4uJztcblxuICBnZXQgY2FuQ3NzRWxsaXBzaXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpFbGxpcHNpcyAmJiB0aGlzLmNzc0VsbGlwc2lzICYmICF0aGlzLmV4cGFuZGVkO1xuICB9XG5cbiAgcHJpdmF0ZSB2aWV3SW5pdCA9IGZhbHNlO1xuICBwcml2YXRlIHJmYUlkOiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgd2luZG93UmVzaXplU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBnZXQgY29weVRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMubnpDb3B5VGV4dCA9PT0gJ3N0cmluZycgPyB0aGlzLm56Q29weVRleHQgOiB0aGlzLm56Q29udGVudDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGhvc3Q6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSxcbiAgICBwcml2YXRlIG56RG9tRXZlbnRTZXJ2aWNlOiBOekRvbUV2ZW50U2VydmljZVxuICApIHt9XG5cbiAgb25UZXh0Q29weSh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm56Q29weS5lbWl0KHRleHQpO1xuICB9XG5cbiAgb25TdGFydEVkaXRpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0aW5nID0gdHJ1ZTtcbiAgfVxuXG4gIG9uRW5kRWRpdGluZyh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm56Q29udGVudENoYW5nZS5lbWl0KHRleHQpO1xuICAgIGlmICh0aGlzLm56Q29udGVudCA9PT0gdGV4dCkge1xuICAgICAgdGhpcy5yZW5kZXJPbk5leHRGcmFtZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uRXhwYW5kKCk6IHZvaWQge1xuICAgIHRoaXMuZXhwYW5kZWQgPSB0cnVlO1xuICAgIHRoaXMubnpFeHBhbmRDaGFuZ2UuZW1pdCgpO1xuICB9XG5cbiAgY2FuVXNlQ1NTRWxsaXBzaXMoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubnpFZGl0YWJsZSB8fCB0aGlzLm56Q29weWFibGUgfHwgdGhpcy5uekV4cGFuZGFibGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMubnpFbGxpcHNpc1Jvd3MgPT09IDEpIHtcbiAgICAgIHJldHVybiBpc1N0eWxlU3VwcG9ydCgndGV4dE92ZXJmbG93Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpc1N0eWxlU3VwcG9ydCgnd2Via2l0TGluZUNsYW1wJyk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyT25OZXh0RnJhbWUoKTogdm9pZCB7XG4gICAgY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmZhSWQpO1xuICAgIGlmICghdGhpcy52aWV3SW5pdCB8fCAhdGhpcy5uekVsbGlwc2lzIHx8IHRoaXMubnpFbGxpcHNpc1Jvd3MgPCAwIHx8IHRoaXMuZXhwYW5kZWQgfHwgIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmZhSWQgPSByZXFBbmltRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5zeW5jRWxsaXBzaXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldE9yaWdpbkNvbnRlbnRWaWV3UmVmKCk6IHsgdmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPHsgY29udGVudDogc3RyaW5nIH0+OyByZW1vdmVWaWV3KCk6IHZvaWQgfSB7XG4gICAgY29uc3Qgdmlld1JlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXc8eyBjb250ZW50OiBzdHJpbmcgfT4odGhpcy5jb250ZW50VGVtcGxhdGUsIHtcbiAgICAgIGNvbnRlbnQ6IHRoaXMubnpDb250ZW50XG4gICAgfSk7XG4gICAgdmlld1JlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZpZXdSZWYsXG4gICAgICByZW1vdmVWaWV3OiAoKSA9PiB7XG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5yZW1vdmUodGhpcy52aWV3Q29udGFpbmVyUmVmLmluZGV4T2Yodmlld1JlZikpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBzeW5jRWxsaXBzaXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY3NzRWxsaXBzaXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyB2aWV3UmVmLCByZW1vdmVWaWV3IH0gPSB0aGlzLmdldE9yaWdpbkNvbnRlbnRWaWV3UmVmKCk7XG4gICAgY29uc3QgZml4ZWROb2RlcyA9IFt0aGlzLnRleHRDb3B5UmVmLCB0aGlzLnRleHRFZGl0UmVmLCB0aGlzLmV4cGFuZGFibGVCdG5dXG4gICAgICAuZmlsdGVyKGUgPT4gZSAmJiBlLm5hdGl2ZUVsZW1lbnQpXG4gICAgICAubWFwKGUgPT4gZS5uYXRpdmVFbGVtZW50KTtcblxuICAgIGNvbnN0IHsgY29udGVudE5vZGVzLCB0ZXh0LCBlbGxpcHNpcyB9ID0gbWVhc3VyZShcbiAgICAgIHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5uekVsbGlwc2lzUm93cyxcbiAgICAgIHZpZXdSZWYucm9vdE5vZGVzLFxuICAgICAgZml4ZWROb2RlcyxcbiAgICAgIHRoaXMuZWxsaXBzaXNTdHJcbiAgICApO1xuXG4gICAgcmVtb3ZlVmlldygpO1xuXG4gICAgdGhpcy5lbGxpcHNpc1RleHQgPSB0ZXh0O1xuICAgIHRoaXMuaXNFbGxpcHNpcyA9IGVsbGlwc2lzO1xuICAgIGNvbnN0IGVsbGlwc2lzQ29udGFpbmVyTmF0aXZlRWxlbWVudCA9IHRoaXMuZWxsaXBzaXNDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICB3aGlsZSAoZWxsaXBzaXNDb250YWluZXJOYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoZWxsaXBzaXNDb250YWluZXJOYXRpdmVFbGVtZW50LCBlbGxpcHNpc0NvbnRhaW5lck5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGNvbnRlbnROb2Rlcy5mb3JFYWNoKG4gPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChlbGxpcHNpc0NvbnRhaW5lck5hdGl2ZUVsZW1lbnQsIG4uY2xvbmVOb2RlKHRydWUpKTtcbiAgICB9KTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyQW5kU3Vic2NyaWJlV2luZG93UmVzaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy53aW5kb3dSZXNpemVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuY3NzRWxsaXBzaXMgPSB0aGlzLmNhblVzZUNTU0VsbGlwc2lzKCk7XG4gICAgICB0aGlzLnJlbmRlck9uTmV4dEZyYW1lKCk7XG4gICAgICB0aGlzLndpbmRvd1Jlc2l6ZVN1YnNjcmlwdGlvbiA9IHRoaXMubnpEb21FdmVudFNlcnZpY2VcbiAgICAgICAgLnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgICAgZmluYWxpemUoKCkgPT4gdGhpcy5uekRvbUV2ZW50U2VydmljZS51bnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVuZGVyT25OZXh0RnJhbWUoKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RleHQnKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudmlld0luaXQgPSB0cnVlO1xuICAgIHRoaXMucmVuZGVyQW5kU3Vic2NyaWJlV2luZG93UmVzaXplKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuekNvcHlhYmxlLCBuekVkaXRhYmxlLCBuekV4cGFuZGFibGUsIG56RWxsaXBzaXMsIG56Q29udGVudCwgbnpFbGxpcHNpc1Jvd3MgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56Q29weWFibGUgfHwgbnpFZGl0YWJsZSB8fCBuekV4cGFuZGFibGUgfHwgbnpFbGxpcHNpcyB8fCBuekNvbnRlbnQgfHwgbnpFbGxpcHNpc1Jvd3MpIHtcbiAgICAgIGlmICh0aGlzLm56RWxsaXBzaXMpIHtcbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kZWQpIHtcbiAgICAgICAgICB0aGlzLndpbmRvd1Jlc2l6ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVuZGVyQW5kU3Vic2NyaWJlV2luZG93UmVzaXplKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy53aW5kb3dSZXNpemVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19