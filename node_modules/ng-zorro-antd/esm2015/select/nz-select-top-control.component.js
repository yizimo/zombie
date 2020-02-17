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
export class NzSelectTopControlComponent {
    /**
     * @param {?} renderer
     * @param {?} nzSelectService
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(renderer, nzSelectService, cdr, noAnimation) {
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
    onClearSelection(e) {
        e.stopPropagation();
        this.nzSelectService.updateListOfSelectedValue([], true);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setInputValue(value) {
        /** fix clear value https://github.com/NG-ZORRO/ng-zorro-antd/issues/3825 **/
        if (this.inputDOM && !value) {
            this.inputDOM.value = value;
        }
        this.inputValue = value;
        this.updateWidth();
        this.nzSelectService.updateSearchValue(value);
        this.nzSelectService.tokenSeparate(this.inputValue, this.nzTokenSeparators);
    }
    /**
     * @return {?}
     */
    get mirrorDOM() {
        return this.mirrorElement && this.mirrorElement.nativeElement;
    }
    /**
     * @return {?}
     */
    get inputDOM() {
        return this.inputElement && this.inputElement.nativeElement;
    }
    /**
     * @return {?}
     */
    get placeHolderDisplay() {
        return this.inputValue || this.isComposing || this.nzSelectService.listOfSelectedValue.length ? 'none' : 'block';
    }
    /**
     * @return {?}
     */
    get selectedValueStyle() {
        /** @type {?} */
        let showSelectedValue = false;
        /** @type {?} */
        let opacity = 1;
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
            opacity: `${opacity}`
        };
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    trackValue(_index, option) {
        return option.nzValue;
    }
    /**
     * @return {?}
     */
    updateWidth() {
        if (this.mirrorDOM && this.inputDOM && this.inputDOM.value) {
            this.mirrorDOM.innerText = `${this.inputDOM.value}&nbsp;`;
            this.renderer.removeStyle(this.inputDOM, 'width');
            this.renderer.setStyle(this.inputDOM, 'width', `${this.mirrorDOM.clientWidth}px`);
        }
        else if (this.inputDOM) {
            this.renderer.removeStyle(this.inputDOM, 'width');
            this.mirrorDOM.innerText = '';
        }
    }
    /**
     * @param {?} option
     * @param {?} e
     * @return {?}
     */
    removeSelectedValue(option, e) {
        this.nzSelectService.removeValueFormSelected(option);
        e.stopPropagation();
    }
    /**
     * @return {?}
     */
    animationEnd() {
        this.nzSelectService.animationEvent$.next();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzSelectService.open$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} open
         * @return {?}
         */
        open => {
            if (this.inputElement && open) {
                setTimeout((/**
                 * @return {?}
                 */
                () => this.inputDOM.focus()));
            }
        }));
        this.nzSelectService.clearInput$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.setInputValue('');
        }));
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
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
NzSelectTopControlComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: NzSelectService },
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2VsZWN0LyIsInNvdXJjZXMiOlsibnotc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBV3RELE1BQU0sT0FBTywyQkFBMkI7Ozs7Ozs7SUErRnRDLFlBQ1UsUUFBbUIsRUFDcEIsZUFBZ0MsRUFDL0IsR0FBc0IsRUFDSCxXQUFvQztRQUh2RCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3BCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNILGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQWpHakUsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDWixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUd4QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUVyQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsY0FBUyxHQUFHLEtBQUssQ0FBQztR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QUN6QyxrREFBd0M7O0lBQ3hDLG1EQUF5Qzs7SUFFekMsMERBQWdFOztJQUNoRSx3REFBMEM7Ozs7O0lBNkV4QywrQ0FBMkI7O0lBQzNCLHNEQUF1Qzs7Ozs7SUFDdkMsMENBQThCOztJQUM5QixrREFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHpvb21Nb3Rpb24sIE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOek9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelNlbGVjdFNlcnZpY2UgfSBmcm9tICcuL256LXNlbGVjdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW256LXNlbGVjdC10b3AtY29udHJvbF0nLFxuICBleHBvcnRBczogJ256U2VsZWN0VG9wQ29udHJvbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBhbmltYXRpb25zOiBbem9vbU1vdGlvbl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGlucHV0VmFsdWU6IHN0cmluZztcbiAgaXNDb21wb3NpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ21pcnJvckVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgbWlycm9yRWxlbWVudDogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgbnpTaG93U2VhcmNoID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgbnpPcGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56TWF4VGFnQ291bnQ6IG51bWJlcjtcbiAgQElucHV0KCkgbnpBbGxvd0NsZWFyID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56U2hvd0Fycm93ID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpMb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56Q3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOek9wdGlvbkNvbXBvbmVudCB9PjtcbiAgQElucHV0KCkgbnpTdWZmaXhJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpDbGVhckljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuelJlbW92ZUljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIG56TWF4VGFnUGxhY2Vob2xkZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBhbnlbXSB9PjtcbiAgQElucHV0KCkgbnpUb2tlblNlcGFyYXRvcnM6IHN0cmluZ1tdID0gW107XG5cbiAgb25DbGVhclNlbGVjdGlvbihlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKFtdLCB0cnVlKTtcbiAgfVxuXG4gIHNldElucHV0VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIC8qKiBmaXggY2xlYXIgdmFsdWUgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzM4MjUgKiovXG4gICAgaWYgKHRoaXMuaW5wdXRET00gJiYgIXZhbHVlKSB7XG4gICAgICB0aGlzLmlucHV0RE9NLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS51cGRhdGVTZWFyY2hWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudG9rZW5TZXBhcmF0ZSh0aGlzLmlucHV0VmFsdWUsIHRoaXMubnpUb2tlblNlcGFyYXRvcnMpO1xuICB9XG5cbiAgZ2V0IG1pcnJvckRPTSgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMubWlycm9yRWxlbWVudCAmJiB0aGlzLm1pcnJvckVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGdldCBpbnB1dERPTSgpOiBIVE1MSW5wdXRFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dEVsZW1lbnQgJiYgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGdldCBwbGFjZUhvbGRlckRpc3BsYXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcgfHwgdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggPyAnbm9uZScgOiAnYmxvY2snO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkVmFsdWVTdHlsZSgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBsZXQgc2hvd1NlbGVjdGVkVmFsdWUgPSBmYWxzZTtcbiAgICBsZXQgb3BhY2l0eSA9IDE7XG4gICAgaWYgKCF0aGlzLm56U2hvd1NlYXJjaCkge1xuICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5uek9wZW4pIHtcbiAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSAhKHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nKTtcbiAgICAgICAgaWYgKHNob3dTZWxlY3RlZFZhbHVlKSB7XG4gICAgICAgICAgb3BhY2l0eSA9IDAuNDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZGlzcGxheTogc2hvd1NlbGVjdGVkVmFsdWUgPyAnYmxvY2snIDogJ25vbmUnLFxuICAgICAgb3BhY2l0eTogYCR7b3BhY2l0eX1gXG4gICAgfTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgdHJhY2tWYWx1ZShfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCk6IGFueSB7XG4gICAgcmV0dXJuIG9wdGlvbi5uelZhbHVlO1xuICB9XG5cbiAgdXBkYXRlV2lkdGgoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWlycm9yRE9NICYmIHRoaXMuaW5wdXRET00gJiYgdGhpcy5pbnB1dERPTS52YWx1ZSkge1xuICAgICAgdGhpcy5taXJyb3JET00uaW5uZXJUZXh0ID0gYCR7dGhpcy5pbnB1dERPTS52YWx1ZX0mbmJzcDtgO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmlucHV0RE9NLCAnd2lkdGgnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5pbnB1dERPTSwgJ3dpZHRoJywgYCR7dGhpcy5taXJyb3JET00uY2xpZW50V2lkdGh9cHhgKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaW5wdXRET00pIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5pbnB1dERPTSwgJ3dpZHRoJyk7XG4gICAgICB0aGlzLm1pcnJvckRPTS5pbm5lclRleHQgPSAnJztcbiAgICB9XG4gIH1cblxuICByZW1vdmVTZWxlY3RlZFZhbHVlKG9wdGlvbjogTnpPcHRpb25Db21wb25lbnQsIGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5yZW1vdmVWYWx1ZUZvcm1TZWxlY3RlZChvcHRpb24pO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBhbmltYXRpb25FbmQoKTogdm9pZCB7XG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuYW5pbWF0aW9uRXZlbnQkLm5leHQoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgbnpTZWxlY3RTZXJ2aWNlOiBOelNlbGVjdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uub3BlbiQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShvcGVuID0+IHtcbiAgICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCAmJiBvcGVuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnB1dERPTS5mb2N1cygpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jbGVhcklucHV0JC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSgnJyk7XG4gICAgfSk7XG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2hlY2skLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==