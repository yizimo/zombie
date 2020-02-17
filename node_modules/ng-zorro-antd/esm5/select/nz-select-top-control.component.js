/**
 * @fileoverview added by tsickle
 * Generated from: nz-select-top-control.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Input, Optional, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { zoomMotion, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzSelectService } from './nz-select.service';
var NzSelectTopControlComponent = /** @class */ (function () {
    function NzSelectTopControlComponent(renderer, nzSelectService, cdr, noAnimation) {
        this.renderer = renderer;
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.isComposing = false;
        this.destroy$ = new Subject();
        this.nzShowSearch = false;
        this.nzOpen = false;
        this.nzAllowClear = false;
        this.nzShowArrow = true;
        this.nzLoading = false;
        this.nzTokenSeparators = [];
    }
    /**
     * @param {?} e
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.onClearSelection = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.nzSelectService.updateListOfSelectedValue([], true);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.setInputValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** fix clear value https://github.com/NG-ZORRO/ng-zorro-antd/issues/3825 **/
        if (this.inputDOM && !value) {
            this.inputDOM.value = value;
        }
        this.inputValue = value;
        this.updateWidth();
        this.nzSelectService.updateSearchValue(value);
        this.nzSelectService.tokenSeparate(this.inputValue, this.nzTokenSeparators);
    };
    Object.defineProperty(NzSelectTopControlComponent.prototype, "mirrorDOM", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mirrorElement && this.mirrorElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectTopControlComponent.prototype, "inputDOM", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inputElement && this.inputElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectTopControlComponent.prototype, "placeHolderDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inputValue || this.isComposing || this.nzSelectService.listOfSelectedValue.length ? 'none' : 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectTopControlComponent.prototype, "selectedValueStyle", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var showSelectedValue = false;
            /** @type {?} */
            var opacity = 1;
            if (!this.nzShowSearch) {
                showSelectedValue = true;
            }
            else {
                if (this.nzOpen) {
                    showSelectedValue = !(this.inputValue || this.isComposing);
                    if (showSelectedValue) {
                        opacity = 0.4;
                    }
                }
                else {
                    showSelectedValue = true;
                }
            }
            return {
                display: showSelectedValue ? 'block' : 'none',
                opacity: "" + opacity
            };
        },
        enumerable: true,
        configurable: true
    });
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.trackValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    function (_index, option) {
        return option.nzValue;
    };
    /**
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.updateWidth = /**
     * @return {?}
     */
    function () {
        if (this.mirrorDOM && this.inputDOM && this.inputDOM.value) {
            this.mirrorDOM.innerText = this.inputDOM.value + "&nbsp;";
            this.renderer.removeStyle(this.inputDOM, 'width');
            this.renderer.setStyle(this.inputDOM, 'width', this.mirrorDOM.clientWidth + "px");
        }
        else if (this.inputDOM) {
            this.renderer.removeStyle(this.inputDOM, 'width');
            this.mirrorDOM.innerText = '';
        }
    };
    /**
     * @param {?} option
     * @param {?} e
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.removeSelectedValue = /**
     * @param {?} option
     * @param {?} e
     * @return {?}
     */
    function (option, e) {
        this.nzSelectService.removeValueFormSelected(option);
        e.stopPropagation();
    };
    /**
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.animationEnd = /**
     * @return {?}
     */
    function () {
        this.nzSelectService.animationEvent$.next();
    };
    /**
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzSelectService.open$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} open
         * @return {?}
         */
        function (open) {
            if (_this.inputElement && open) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.inputDOM.focus(); }));
            }
        }));
        this.nzSelectService.clearInput$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.setInputValue('');
        }));
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzSelectTopControlComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-select-top-control]',
                    exportAs: 'nzSelectTopControl',
                    preserveWhitespaces: false,
                    animations: [zoomMotion],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<ng-template #inputTemplate>\n  <input #inputElement\n    autocomplete=\"something-new\"\n    class=\"ant-select-search__field\"\n    (compositionstart)=\"isComposing = true\"\n    (compositionend)=\"isComposing = false\"\n    [ngModel]=\"inputValue\"\n    (ngModelChange)=\"setInputValue($event)\"\n    [disabled]=\"nzSelectService.disabled\">\n  <span #mirrorElement class=\"ant-select-search__field__mirror\"></span>\n</ng-template>\n<div class=\"ant-select-selection__rendered\">\n  <div *ngIf=\"nzPlaceHolder\"\n    nz-select-unselectable\n    [style.display]=\"placeHolderDisplay\"\n    class=\"ant-select-selection__placeholder\">{{ nzPlaceHolder }}</div>\n  <!--single mode-->\n  <ng-container *ngIf=\"nzSelectService.isSingleMode\">\n    <!--selected label-->\n    <div *ngIf=\"nzSelectService.listOfCachedSelectedOption.length && nzSelectService.listOfSelectedValue.length\"\n      class=\"ant-select-selection-selected-value\"\n      [attr.title]=\"nzSelectService.listOfCachedSelectedOption[0]?.nzLabel\"\n      [ngStyle]=\"selectedValueStyle\">\n      <ng-container *nzStringTemplateOutlet=\"nzCustomTemplate; context: { $implicit: nzSelectService.listOfCachedSelectedOption[0] }\">\n        <ng-container>{{ nzSelectService.listOfCachedSelectedOption[0]?.nzLabel }}</ng-container>\n      </ng-container>\n    </div>\n    <!--show search-->\n    <div *ngIf=\"nzShowSearch\"\n      class=\"ant-select-search ant-select-search--inline\" [style.display]=\"nzOpen ? 'block' : 'none'\">\n      <div class=\"ant-select-search__field__wrap\">\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n      </div>\n    </div>\n  </ng-container>\n  <!--multiple or tags mode-->\n  <ul *ngIf=\"nzSelectService.isMultipleOrTags\">\n    <ng-container *ngFor=\"let option of nzSelectService.listOfCachedSelectedOption | slice: 0 : nzMaxTagCount;trackBy:trackValue; let index = index\">\n      <li [@zoomMotion]\n        [@.disabled]=\"noAnimation?.nzNoAnimation\"\n        [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n        [attr.title]=\"option.nzLabel\"\n        [class.ant-select-selection__choice__disabled]=\"option.nzDisabled\"\n        (@zoomMotion.done)=\"animationEnd()\"\n        class=\"ant-select-selection__choice\">\n        <ng-container *nzStringTemplateOutlet=\"nzCustomTemplate; context:{ $implicit: nzSelectService.listOfCachedSelectedOption[index] }\">\n          <div class=\"ant-select-selection__choice__content\">{{ option.nzLabel }}</div>\n        </ng-container>\n        <span *ngIf=\"!option.nzDisabled\"\n          class=\"ant-select-selection__choice__remove\"\n          (mousedown)=\"$event.preventDefault()\"\n          (click)=\"removeSelectedValue(option, $event)\">\n          <i nz-icon nzType=\"close\" class=\"ant-select-remove-icon\" *ngIf=\"!nzRemoveIcon; else nzRemoveIcon\"></i>\n        </span>\n      </li>\n    </ng-container>\n    <li *ngIf=\"nzSelectService.listOfCachedSelectedOption.length > nzMaxTagCount\"\n      [@zoomMotion]\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\n      [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n      (@zoomMotion.done)=\"animationEnd()\"\n      class=\"ant-select-selection__choice\">\n      <div class=\"ant-select-selection__choice__content\">\n        <ng-container *ngIf=\"nzMaxTagPlaceholder\">\n          <ng-template\n            [ngTemplateOutlet]=\"nzMaxTagPlaceholder\"\n            [ngTemplateOutletContext]=\"{ $implicit: nzSelectService.listOfSelectedValue | slice: nzMaxTagCount}\">\n          </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"!nzMaxTagPlaceholder\">\n          + {{ nzSelectService.listOfCachedSelectedOption.length - nzMaxTagCount }} ...\n        </ng-container>\n      </div>\n    </li>\n    <li class=\"ant-select-search ant-select-search--inline\">\n      <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n    </li>\n  </ul>\n</div>\n<span *ngIf=\"nzAllowClear && nzSelectService.listOfSelectedValue.length\"\n  class=\"ant-select-selection__clear\"\n  nz-select-unselectable\n  (mousedown)=\"$event.preventDefault()\"\n  (click)=\"onClearSelection($event)\">\n    <i nz-icon nzType=\"close-circle\" nzTheme=\"fill\" *ngIf=\"!nzClearIcon; else nzClearIcon\" class=\"ant-select-close-icon\"></i>\n  </span>\n<span class=\"ant-select-arrow\" nz-select-unselectable *ngIf=\"nzShowArrow\">\n  <i nz-icon nzType=\"loading\" *ngIf=\"nzLoading; else defaultArrow\"></i>\n  <ng-template #defaultArrow>\n    <i nz-icon nzType=\"down\" class=\"ant-select-arrow-icon\" *ngIf=\"!nzSuffixIcon; else nzSuffixIcon\"></i>\n  </ng-template>\n</span>"
                }] }
    ];
    /** @nocollapse */
    NzSelectTopControlComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: NzSelectService },
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzSelectTopControlComponent.propDecorators = {
        inputElement: [{ type: ViewChild, args: ['inputElement', { static: false },] }],
        mirrorElement: [{ type: ViewChild, args: ['mirrorElement', { static: false },] }],
        nzShowSearch: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzOpen: [{ type: Input }],
        nzMaxTagCount: [{ type: Input }],
        nzAllowClear: [{ type: Input }],
        nzShowArrow: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzCustomTemplate: [{ type: Input }],
        nzSuffixIcon: [{ type: Input }],
        nzClearIcon: [{ type: Input }],
        nzRemoveIcon: [{ type: Input }],
        nzMaxTagPlaceholder: [{ type: Input }],
        nzTokenSeparators: [{ type: Input }]
    };
    return NzSelectTopControlComponent;
}());
export { NzSelectTopControlComponent };
if (false) {
    /** @type {?} */
    NzSelectTopControlComponent.prototype.inputValue;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.isComposing;
    /**
     * @type {?}
     * @private
     */
    NzSelectTopControlComponent.prototype.destroy$;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.inputElement;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.mirrorElement;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzOpen;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzMaxTagCount;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzAllowClear;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzShowArrow;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzLoading;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzCustomTemplate;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzSuffixIcon;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzClearIcon;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzRemoveIcon;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzMaxTagPlaceholder;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzTokenSeparators;
    /**
     * @type {?}
     * @private
     */
    NzSelectTopControlComponent.prototype.renderer;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzSelectService;
    /**
     * @type {?}
     * @private
     */
    NzSelectTopControlComponent.prototype.cdr;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2VsZWN0LyIsInNvdXJjZXMiOlsibnotc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXREO0lBd0dFLHFDQUNVLFFBQW1CLEVBQ3BCLGVBQWdDLEVBQy9CLEdBQXNCLEVBQ0gsV0FBb0M7UUFIdkQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNwQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDSCxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFqR2pFLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ1osYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFHeEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFFckIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVmLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFPbEIsc0JBQWlCLEdBQWEsRUFBRSxD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akMsbURBQXVFOztJQUN2RSxvREFBeUU7O0lBQ3pFLG1EQUE4Qjs7SUFDOUIsb0RBQStCOztJQUMvQiw2Q0FBd0I7O0lBQ3hCLG9EQUErQjs7SUFDL0IsbURBQThCOztJQUM5QixrREFBNEI7O0lBQzVCLGdEQUEyQjs7SUFDM0IsdURBQXlFOztJQUN6RSxtREFBeUM7O0lBQ3pDLGtEQUF3Qzs7SUFDeEMsbURBQXlDOztJQUV6QywwREFBZ0U7O0lBQ2hFLHdEQUEwQzs7Ozs7SUE2RXhDLCtDQUEyQjs7SUFDM0Isc0RBQXVDOzs7OztJQUN2QywwQ0FBOEI7O0lBQzlCLGtEQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgem9vbU1vdGlvbiwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE56U2VsZWN0U2VydmljZSB9IGZyb20gJy4vbnotc2VsZWN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbnotc2VsZWN0LXRvcC1jb250cm9sXScsXG4gIGV4cG9ydEFzOiAnbnpTZWxlY3RUb3BDb250cm9sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnM6IFt6b29tTW90aW9uXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1zZWxlY3QtdG9wLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5wdXRWYWx1ZTogc3RyaW5nO1xuICBpc0NvbXBvc2luZyA9IGZhbHNlO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbWlycm9yRWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBtaXJyb3JFbGVtZW50OiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBuelNob3dTZWFyY2ggPSBmYWxzZTtcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBuek9wZW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbnpNYXhUYWdDb3VudDogbnVtYmVyO1xuICBASW5wdXQoKSBuekFsbG93Q2xlYXIgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpTaG93QXJyb3cgPSB0cnVlO1xuICBASW5wdXQoKSBuekxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpDdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56T3B0aW9uQ29tcG9uZW50IH0+O1xuICBASW5wdXQoKSBuelN1ZmZpeEljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuekNsZWFySWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56UmVtb3ZlSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgbnpNYXhUYWdQbGFjZWhvbGRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueVtdIH0+O1xuICBASW5wdXQoKSBuelRva2VuU2VwYXJhdG9yczogc3RyaW5nW10gPSBbXTtcblxuICBvbkNsZWFyU2VsZWN0aW9uKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUoW10sIHRydWUpO1xuICB9XG5cbiAgc2V0SW5wdXRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgLyoqIGZpeCBjbGVhciB2YWx1ZSBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9pc3N1ZXMvMzgyNSAqKi9cbiAgICBpZiAodGhpcy5pbnB1dERPTSAmJiAhdmFsdWUpIHtcbiAgICAgIHRoaXMuaW5wdXRET00udmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVXaWR0aCgpO1xuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZVNlYXJjaFZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS50b2tlblNlcGFyYXRlKHRoaXMuaW5wdXRWYWx1ZSwgdGhpcy5uelRva2VuU2VwYXJhdG9ycyk7XG4gIH1cblxuICBnZXQgbWlycm9yRE9NKCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5taXJyb3JFbGVtZW50ICYmIHRoaXMubWlycm9yRWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgZ2V0IGlucHV0RE9NKCk6IEhUTUxJbnB1dEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmlucHV0RWxlbWVudCAmJiB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgZ2V0IHBsYWNlSG9sZGVyRGlzcGxheSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZyB8fCB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZTZWxlY3RlZFZhbHVlLmxlbmd0aCA/ICdub25lJyA6ICdibG9jayc7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRWYWx1ZVN0eWxlKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGxldCBzaG93U2VsZWN0ZWRWYWx1ZSA9IGZhbHNlO1xuICAgIGxldCBvcGFjaXR5ID0gMTtcbiAgICBpZiAoIXRoaXMubnpTaG93U2VhcmNoKSB7XG4gICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm56T3Blbikge1xuICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9ICEodGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcpO1xuICAgICAgICBpZiAoc2hvd1NlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICBvcGFjaXR5ID0gMC40O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBkaXNwbGF5OiBzaG93U2VsZWN0ZWRWYWx1ZSA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICBvcGFjaXR5OiBgJHtvcGFjaXR5fWBcbiAgICB9O1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB0cmFja1ZhbHVlKF9pbmRleDogbnVtYmVyLCBvcHRpb246IE56T3B0aW9uQ29tcG9uZW50KTogYW55IHtcbiAgICByZXR1cm4gb3B0aW9uLm56VmFsdWU7XG4gIH1cblxuICB1cGRhdGVXaWR0aCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5taXJyb3JET00gJiYgdGhpcy5pbnB1dERPTSAmJiB0aGlzLmlucHV0RE9NLnZhbHVlKSB7XG4gICAgICB0aGlzLm1pcnJvckRPTS5pbm5lclRleHQgPSBgJHt0aGlzLmlucHV0RE9NLnZhbHVlfSZuYnNwO2A7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuaW5wdXRET00sICd3aWR0aCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmlucHV0RE9NLCAnd2lkdGgnLCBgJHt0aGlzLm1pcnJvckRPTS5jbGllbnRXaWR0aH1weGApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pbnB1dERPTSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmlucHV0RE9NLCAnd2lkdGgnKTtcbiAgICAgIHRoaXMubWlycm9yRE9NLmlubmVyVGV4dCA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVNlbGVjdGVkVmFsdWUob3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCwgZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnJlbW92ZVZhbHVlRm9ybVNlbGVjdGVkKG9wdGlvbik7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGFuaW1hdGlvbkVuZCgpOiB2b2lkIHtcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5hbmltYXRpb25FdmVudCQubmV4dCgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBuelNlbGVjdFNlcnZpY2U6IE56U2VsZWN0U2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5vcGVuJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKG9wZW4gPT4ge1xuICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50ICYmIG9wZW4pIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmlucHV0RE9NLmZvY3VzKCkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNsZWFySW5wdXQkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKCcnKTtcbiAgICB9KTtcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jaGVjayQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19