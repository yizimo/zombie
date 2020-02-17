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
var NZ_CONFIG_COMPONENT_NAME = 'typography';
var NzTypographyComponent = /** @class */ (function () {
    function NzTypographyComponent(nzConfigService, host, cdr, viewContainerRef, renderer, platform, i18n, nzDomEventService) {
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
    Object.defineProperty(NzTypographyComponent.prototype, "canCssEllipsis", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzEllipsis && this.cssEllipsis && !this.expanded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTypographyComponent.prototype, "copyText", {
        get: /**
         * @return {?}
         */
        function () {
            return typeof this.nzCopyText === 'string' ? this.nzCopyText : this.nzContent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} text
     * @return {?}
     */
    NzTypographyComponent.prototype.onTextCopy = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        this.nzCopy.emit(text);
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.onStartEditing = /**
     * @return {?}
     */
    function () {
        this.editing = true;
    };
    /**
     * @param {?} text
     * @return {?}
     */
    NzTypographyComponent.prototype.onEndEditing = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        this.editing = false;
        this.nzContentChange.emit(text);
        if (this.nzContent === text) {
            this.renderOnNextFrame();
        }
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.onExpand = /**
     * @return {?}
     */
    function () {
        this.expanded = true;
        this.nzExpandChange.emit();
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.canUseCSSEllipsis = /**
     * @return {?}
     */
    function () {
        if (this.nzEditable || this.nzCopyable || this.nzExpandable) {
            return false;
        }
        if (this.nzEllipsisRows === 1) {
            return isStyleSupport('textOverflow');
        }
        else {
            return isStyleSupport('webkitLineClamp');
        }
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.renderOnNextFrame = /**
     * @return {?}
     */
    function () {
        var _this = this;
        cancelRequestAnimationFrame(this.rfaId);
        if (!this.viewInit || !this.nzEllipsis || this.nzEllipsisRows < 0 || this.expanded || !this.platform.isBrowser) {
            return;
        }
        this.rfaId = reqAnimFrame((/**
         * @return {?}
         */
        function () {
            _this.syncEllipsis();
        }));
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.getOriginContentViewRef = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var viewRef = this.viewContainerRef.createEmbeddedView(this.contentTemplate, {
            content: this.nzContent
        });
        viewRef.detectChanges();
        return {
            viewRef: viewRef,
            removeView: (/**
             * @return {?}
             */
            function () {
                _this.viewContainerRef.remove(_this.viewContainerRef.indexOf(viewRef));
            })
        };
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.syncEllipsis = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.cssEllipsis) {
            return;
        }
        var _a = this.getOriginContentViewRef(), viewRef = _a.viewRef, removeView = _a.removeView;
        /** @type {?} */
        var fixedNodes = [this.textCopyRef, this.textEditRef, this.expandableBtn]
            .filter((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e && e.nativeElement; }))
            .map((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.nativeElement; }));
        var _b = measure(this.host.nativeElement, this.nzEllipsisRows, viewRef.rootNodes, fixedNodes, this.ellipsisStr), contentNodes = _b.contentNodes, text = _b.text, ellipsis = _b.ellipsis;
        removeView();
        this.ellipsisText = text;
        this.isEllipsis = ellipsis;
        /** @type {?} */
        var ellipsisContainerNativeElement = this.ellipsisContainer.nativeElement;
        while (ellipsisContainerNativeElement.firstChild) {
            this.renderer.removeChild(ellipsisContainerNativeElement, ellipsisContainerNativeElement.firstChild);
        }
        contentNodes.forEach((/**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            _this.renderer.appendChild(ellipsisContainerNativeElement, n.cloneNode(true));
        }));
        this.cdr.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    NzTypographyComponent.prototype.renderAndSubscribeWindowResize = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.platform.isBrowser) {
            this.windowResizeSubscription.unsubscribe();
            this.cssEllipsis = this.canUseCSSEllipsis();
            this.renderOnNextFrame();
            this.windowResizeSubscription = this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize((/**
             * @return {?}
             */
            function () { return _this.nzDomEventService.unregisterResizeListener(); })))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.renderOnNextFrame(); }));
        }
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Text');
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.viewInit = true;
        this.renderAndSubscribeWindowResize();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTypographyComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzCopyable = changes.nzCopyable, nzEditable = changes.nzEditable, nzExpandable = changes.nzExpandable, nzEllipsis = changes.nzEllipsis, nzContent = changes.nzContent, nzEllipsisRows = changes.nzEllipsisRows;
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
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.windowResizeSubscription.unsubscribe();
    };
    NzTypographyComponent.decorators = [
        { type: Component, args: [{
                    selector: "\n  nz-typography,\n  [nz-typography],\n  p[nz-paragraph],\n  span[nz-text],\n  h1[nz-title], h2[nz-title], h3[nz-title], h4[nz-title]\n  ",
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
    NzTypographyComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: ViewContainerRef },
        { type: Renderer2 },
        { type: Platform },
        { type: NzI18nService },
        { type: NzDomEventService }
    ]; };
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
    return NzTypographyComponent;
}());
export { NzTypographyComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHlwb2dyYXBoeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3R5cG9ncmFwaHkvIiwic291cmNlcyI6WyJuei10eXBvZ3JhcGh5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBRVYsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFDTCwyQkFBMkIsRUFDM0IsY0FBYyxFQUNkLE9BQU8sRUFDUCxZQUFZLEVBQ1osWUFBWSxFQUNaLFdBQVcsRUFDWCxlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDWCxNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7SUFFekQsd0JBQXdCLEdBQUcsWUFBWTtBQUU3QztJQW1FRSwrQkFDUyxlQUFnQyxFQUMvQixJQUE2QixFQUM3QixHQUFzQixFQUN0QixnQkFBa0MsRUFDbEMsUUFBbUIsRUFDbkIsUUFBa0IsRUFDbEIsSUFBbUIsRUFDbkIsaUJBQW9DO1FBUHJDLG9CQUFlLEdBQWYsZUFBZSxD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QyxxQ0FBcUM7Ozs7O0lBQ3JDLG9DQUE4Qjs7Ozs7SUFDOUIsaURBQTBDOzs7OztJQUMxQyx5Q0FBMkI7Ozs7O0lBQzNCLHlDQUEwQjs7Ozs7SUFDMUIscUNBQTJCOzs7OztJQUMzQixrREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbmFsaXplLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSxcbiAgaXNTdHlsZVN1cHBvcnQsXG4gIG1lYXN1cmUsXG4gIHJlcUFuaW1GcmFtZSxcbiAgSW5wdXRCb29sZWFuLFxuICBJbnB1dE51bWJlcixcbiAgTnpDb25maWdTZXJ2aWNlLFxuICBOekRvbUV2ZW50U2VydmljZSxcbiAgV2l0aENvbmZpZ1xufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbmltcG9ydCB7IE56VGV4dENvcHlDb21wb25lbnQgfSBmcm9tICcuL256LXRleHQtY29weS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUZXh0RWRpdENvbXBvbmVudCB9IGZyb20gJy4vbnotdGV4dC1lZGl0LmNvbXBvbmVudCc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICd0eXBvZ3JhcGh5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBgXG4gIG56LXR5cG9ncmFwaHksXG4gIFtuei10eXBvZ3JhcGh5XSxcbiAgcFtuei1wYXJhZ3JhcGhdLFxuICBzcGFuW256LXRleHRdLFxuICBoMVtuei10aXRsZV0sIGgyW256LXRpdGxlXSwgaDNbbnotdGl0bGVdLCBoNFtuei10aXRsZV1cbiAgYCxcbiAgZXhwb3J0QXM6ICduelR5cG9ncmFwaHknLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotdHlwb2dyYXBoeS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXR5cG9ncmFwaHldJzogJyFlZGl0aW5nJyxcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5LWVkaXQtY29udGVudF0nOiAnZWRpdGluZycsXG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeS1zZWNvbmRhcnldJzogJ256VHlwZSA9PT0gXCJzZWNvbmRhcnlcIicsXG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeS13YXJuaW5nXSc6ICduelR5cGUgPT09IFwid2FybmluZ1wiJyxcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5LWRhbmdlcl0nOiAnbnpUeXBlID09PSBcImRhbmdlclwiJyxcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5LWRpc2FibGVkXSc6ICduekRpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5LWVsbGlwc2lzXSc6ICduekVsbGlwc2lzICYmICFleHBhbmRlZCcsXG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeS1lbGxpcHNpcy1zaW5nbGUtbGluZV0nOiAnY2FuQ3NzRWxsaXBzaXMgJiYgbnpFbGxpcHNpc1Jvd3MgPT09IDEnLFxuICAgICdbY2xhc3MuYW50LXR5cG9ncmFwaHktZWxsaXBzaXMtbXVsdGlwbGUtbGluZV0nOiAnY2FuQ3NzRWxsaXBzaXMgJiYgbnpFbGxpcHNpc1Jvd3MgPiAxJyxcbiAgICAnW3N0eWxlLi13ZWJraXQtbGluZS1jbGFtcF0nOiAnKGNhbkNzc0VsbGlwc2lzICYmIG56RWxsaXBzaXNSb3dzID4gMSkgPyBuekVsbGlwc2lzUm93cyA6IG51bGwnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUeXBvZ3JhcGh5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNvcHlhYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekVkaXRhYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekV4cGFuZGFibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RWxsaXBzaXMgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpDb250ZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgMSkgQElucHV0TnVtYmVyKCkgbnpFbGxpcHNpc1Jvd3M6IG51bWJlcjtcbiAgQElucHV0KCkgbnpUeXBlOiAnc2Vjb25kYXJ5JyB8ICd3YXJuaW5nJyB8ICdkYW5nZXInIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBuekNvcHlUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNvbnRlbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q29weSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFeHBhbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQFZpZXdDaGlsZChOelRleHRFZGl0Q29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgdGV4dEVkaXRSZWY6IE56VGV4dEVkaXRDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoTnpUZXh0Q29weUNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIHRleHRDb3B5UmVmOiBOelRleHRDb3B5Q29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdlbGxpcHNpc0NvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBlbGxpcHNpc0NvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MU3BhbkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdleHBhbmRhYmxlJywgeyBzdGF0aWM6IGZhbHNlIH0pIGV4cGFuZGFibGVCdG46IEVsZW1lbnRSZWY8SFRNTFNwYW5FbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnY29udGVudFRlbXBsYXRlJywgeyBzdGF0aWM6IGZhbHNlIH0pIGNvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyBjb250ZW50OiBzdHJpbmcgfT47XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBsb2NhbGU6IGFueSA9IHt9O1xuICBlZGl0aW5nID0gZmFsc2U7XG4gIGVsbGlwc2lzVGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjc3NFbGxpcHNpczogYm9vbGVhbiA9IGZhbHNlO1xuICBpc0VsbGlwc2lzOiBib29sZWFuID0gZmFsc2U7XG4gIGV4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XG4gIGVsbGlwc2lzU3RyID0gJy4uLic7XG5cbiAgZ2V0IGNhbkNzc0VsbGlwc2lzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56RWxsaXBzaXMgJiYgdGhpcy5jc3NFbGxpcHNpcyAmJiAhdGhpcy5leHBhbmRlZDtcbiAgfVxuXG4gIHByaXZhdGUgdmlld0luaXQgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZmFJZDogbnVtYmVyID0gLTE7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHdpbmRvd1Jlc2l6ZVN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgZ2V0IGNvcHlUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLm56Q29weVRleHQgPT09ICdzdHJpbmcnID8gdGhpcy5uekNvcHlUZXh0IDogdGhpcy5uekNvbnRlbnQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsXG4gICAgcHJpdmF0ZSBuekRvbUV2ZW50U2VydmljZTogTnpEb21FdmVudFNlcnZpY2VcbiAgKSB7fVxuXG4gIG9uVGV4dENvcHkodGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5uekNvcHkuZW1pdCh0ZXh0KTtcbiAgfVxuXG4gIG9uU3RhcnRFZGl0aW5nKCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdGluZyA9IHRydWU7XG4gIH1cblxuICBvbkVuZEVkaXRpbmcodGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5uekNvbnRlbnRDaGFuZ2UuZW1pdCh0ZXh0KTtcbiAgICBpZiAodGhpcy5uekNvbnRlbnQgPT09IHRleHQpIHtcbiAgICAgIHRoaXMucmVuZGVyT25OZXh0RnJhbWUoKTtcbiAgICB9XG4gIH1cblxuICBvbkV4cGFuZCgpOiB2b2lkIHtcbiAgICB0aGlzLmV4cGFuZGVkID0gdHJ1ZTtcbiAgICB0aGlzLm56RXhwYW5kQ2hhbmdlLmVtaXQoKTtcbiAgfVxuXG4gIGNhblVzZUNTU0VsbGlwc2lzKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLm56RWRpdGFibGUgfHwgdGhpcy5uekNvcHlhYmxlIHx8IHRoaXMubnpFeHBhbmRhYmxlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLm56RWxsaXBzaXNSb3dzID09PSAxKSB7XG4gICAgICByZXR1cm4gaXNTdHlsZVN1cHBvcnQoJ3RleHRPdmVyZmxvdycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaXNTdHlsZVN1cHBvcnQoJ3dlYmtpdExpbmVDbGFtcCcpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlck9uTmV4dEZyYW1lKCk6IHZvaWQge1xuICAgIGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJmYUlkKTtcbiAgICBpZiAoIXRoaXMudmlld0luaXQgfHwgIXRoaXMubnpFbGxpcHNpcyB8fCB0aGlzLm56RWxsaXBzaXNSb3dzIDwgMCB8fCB0aGlzLmV4cGFuZGVkIHx8ICF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJmYUlkID0gcmVxQW5pbUZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuc3luY0VsbGlwc2lzKCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRPcmlnaW5Db250ZW50Vmlld1JlZigpOiB7IHZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjx7IGNvbnRlbnQ6IHN0cmluZyB9PjsgcmVtb3ZlVmlldygpOiB2b2lkIH0ge1xuICAgIGNvbnN0IHZpZXdSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3PHsgY29udGVudDogc3RyaW5nIH0+KHRoaXMuY29udGVudFRlbXBsYXRlLCB7XG4gICAgICBjb250ZW50OiB0aGlzLm56Q29udGVudFxuICAgIH0pO1xuICAgIHZpZXdSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB7XG4gICAgICB2aWV3UmVmLFxuICAgICAgcmVtb3ZlVmlldzogKCkgPT4ge1xuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYucmVtb3ZlKHRoaXMudmlld0NvbnRhaW5lclJlZi5pbmRleE9mKHZpZXdSZWYpKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgc3luY0VsbGlwc2lzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNzc0VsbGlwc2lzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgdmlld1JlZiwgcmVtb3ZlVmlldyB9ID0gdGhpcy5nZXRPcmlnaW5Db250ZW50Vmlld1JlZigpO1xuICAgIGNvbnN0IGZpeGVkTm9kZXMgPSBbdGhpcy50ZXh0Q29weVJlZiwgdGhpcy50ZXh0RWRpdFJlZiwgdGhpcy5leHBhbmRhYmxlQnRuXVxuICAgICAgLmZpbHRlcihlID0+IGUgJiYgZS5uYXRpdmVFbGVtZW50KVxuICAgICAgLm1hcChlID0+IGUubmF0aXZlRWxlbWVudCk7XG5cbiAgICBjb25zdCB7IGNvbnRlbnROb2RlcywgdGV4dCwgZWxsaXBzaXMgfSA9IG1lYXN1cmUoXG4gICAgICB0aGlzLmhvc3QubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMubnpFbGxpcHNpc1Jvd3MsXG4gICAgICB2aWV3UmVmLnJvb3ROb2RlcyxcbiAgICAgIGZpeGVkTm9kZXMsXG4gICAgICB0aGlzLmVsbGlwc2lzU3RyXG4gICAgKTtcblxuICAgIHJlbW92ZVZpZXcoKTtcblxuICAgIHRoaXMuZWxsaXBzaXNUZXh0ID0gdGV4dDtcbiAgICB0aGlzLmlzRWxsaXBzaXMgPSBlbGxpcHNpcztcbiAgICBjb25zdCBlbGxpcHNpc0NvbnRhaW5lck5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsbGlwc2lzQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgd2hpbGUgKGVsbGlwc2lzQ29udGFpbmVyTmF0aXZlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKGVsbGlwc2lzQ29udGFpbmVyTmF0aXZlRWxlbWVudCwgZWxsaXBzaXNDb250YWluZXJOYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBjb250ZW50Tm9kZXMuZm9yRWFjaChuID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoZWxsaXBzaXNDb250YWluZXJOYXRpdmVFbGVtZW50LCBuLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgfSk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckFuZFN1YnNjcmliZVdpbmRvd1Jlc2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMud2luZG93UmVzaXplU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmNzc0VsbGlwc2lzID0gdGhpcy5jYW5Vc2VDU1NFbGxpcHNpcygpO1xuICAgICAgdGhpcy5yZW5kZXJPbk5leHRGcmFtZSgpO1xuICAgICAgdGhpcy53aW5kb3dSZXNpemVTdWJzY3JpcHRpb24gPSB0aGlzLm56RG9tRXZlbnRTZXJ2aWNlXG4gICAgICAgIC5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMubnpEb21FdmVudFNlcnZpY2UudW5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCkpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlbmRlck9uTmV4dEZyYW1lKCkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUZXh0Jyk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdJbml0ID0gdHJ1ZTtcbiAgICB0aGlzLnJlbmRlckFuZFN1YnNjcmliZVdpbmRvd1Jlc2l6ZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpDb3B5YWJsZSwgbnpFZGl0YWJsZSwgbnpFeHBhbmRhYmxlLCBuekVsbGlwc2lzLCBuekNvbnRlbnQsIG56RWxsaXBzaXNSb3dzIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChuekNvcHlhYmxlIHx8IG56RWRpdGFibGUgfHwgbnpFeHBhbmRhYmxlIHx8IG56RWxsaXBzaXMgfHwgbnpDb250ZW50IHx8IG56RWxsaXBzaXNSb3dzKSB7XG4gICAgICBpZiAodGhpcy5uekVsbGlwc2lzKSB7XG4gICAgICAgIGlmICh0aGlzLmV4cGFuZGVkKSB7XG4gICAgICAgICAgdGhpcy53aW5kb3dSZXNpemVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlckFuZFN1YnNjcmliZVdpbmRvd1Jlc2l6ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMud2luZG93UmVzaXplU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==