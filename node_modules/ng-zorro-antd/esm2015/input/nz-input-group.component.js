/**
 * @fileoverview added by tsickle
 * Generated from: nz-input-group.component.ts
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
import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import { NzInputDirective } from './nz-input.directive';
export class NzInputGroupComponent {
    constructor() {
        this._size = 'default';
        this.nzSearch = false;
        this.nzCompact = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSize(value) {
        this._size = value;
        this.updateChildrenInputSize();
    }
    /**
     * @return {?}
     */
    get nzSize() {
        return this._size;
    }
    /**
     * @return {?}
     */
    get isLarge() {
        return this.nzSize === 'large';
    }
    /**
     * @return {?}
     */
    get isSmall() {
        return this.nzSize === 'small';
    }
    /**
     * @return {?}
     */
    get isAffix() {
        return !!(this.nzSuffix || this.nzPrefix || this.nzPrefixIcon || this.nzSuffixIcon);
    }
    /**
     * @return {?}
     */
    get isAddOn() {
        return !!(this.nzAddOnAfter || this.nzAddOnBefore || this.nzAddOnAfterIcon || this.nzAddOnBeforeIcon);
    }
    /**
     * @return {?}
     */
    get isAffixWrapper() {
        return this.isAffix && !this.isAddOn;
    }
    /**
     * @return {?}
     */
    get isGroup() {
        return !this.isAffix && !this.isAddOn;
    }
    /**
     * @return {?}
     */
    get isLargeGroup() {
        return this.isGroup && this.isLarge;
    }
    /**
     * @return {?}
     */
    get isLargeGroupWrapper() {
        return this.isAddOn && this.isLarge;
    }
    /**
     * @return {?}
     */
    get isLargeAffix() {
        return this.isAffixWrapper && this.isLarge;
    }
    /**
     * @return {?}
     */
    get isLargeSearch() {
        return this.nzSearch && this.isLarge;
    }
    /**
     * @return {?}
     */
    get isSmallGroup() {
        return this.isGroup && this.isSmall;
    }
    /**
     * @return {?}
     */
    get isSmallAffix() {
        return this.isAffixWrapper && this.isSmall;
    }
    /**
     * @return {?}
     */
    get isSmallGroupWrapper() {
        return this.isAddOn && this.isSmall;
    }
    /**
     * @return {?}
     */
    get isSmallSearch() {
        return this.nzSearch && this.isSmall;
    }
    /**
     * @return {?}
     */
    updateChildrenInputSize() {
        if (this.listOfNzInputDirective) {
            this.listOfNzInputDirective.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => (item.nzSize = this.nzSize)));
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateChildrenInputSize();
    }
}
NzInputGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-input-group',
                exportAs: 'nzInputGroup',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<span class=\"ant-input-wrapper ant-input-group\" *ngIf=\"isAddOn\">\n  <span class=\"ant-input-group-addon\" *ngIf=\"nzAddOnBefore || nzAddOnBeforeIcon\">\n    <i nz-icon [nzType]=\"nzAddOnBeforeIcon\" *ngIf=\"nzAddOnBeforeIcon\"></i>\n    <ng-container *nzStringTemplateOutlet=\"nzAddOnBefore\">{{ nzAddOnBefore }}</ng-container>\n  </span>\n  <ng-container *ngIf=\"!isAffix\">\n    <ng-template *ngTemplateOutlet=\"contentTemplate\"></ng-template>\n  </ng-container>\n  <span class=\"ant-input-affix-wrapper\" [class.ant-input-affix-wrapper-sm]=\"isSmall\" [class.ant-input-affix-wrapper-lg]=\"isLarge\" *ngIf=\"isAffix\">\n    <ng-template *ngTemplateOutlet=\"affixTemplate\"></ng-template>\n  </span>\n  <span class=\"ant-input-group-addon\" *ngIf=\"nzAddOnAfter || nzAddOnAfterIcon\">\n    <i nz-icon [nzType]=\"nzAddOnAfterIcon\" *ngIf=\"nzAddOnAfterIcon\"></i>\n    <ng-container *nzStringTemplateOutlet=\"nzAddOnAfter\">{{ nzAddOnAfter }}</ng-container>\n  </span>\n</span>\n<ng-container *ngIf=\"isAffix && !isAddOn\">\n  <ng-template *ngTemplateOutlet=\"affixTemplate\"></ng-template>\n</ng-container>\n<ng-template #affixTemplate>\n  <span class=\"ant-input-prefix\" *ngIf=\"nzPrefix || nzPrefixIcon\">\n    <!-- TODO: should have a class to set its color, cc: antd-->\n    <i nz-icon [nzType]=\"nzPrefixIcon\" *ngIf=\"nzPrefixIcon\" style=\"color: rgba(0, 0, 0, 0.25)\"></i>\n    <ng-container *nzStringTemplateOutlet=\"nzPrefix\">{{ nzPrefix }}</ng-container>\n  </span>\n  <ng-template *ngTemplateOutlet=\"contentTemplate\"></ng-template>\n  <span class=\"ant-input-suffix\" *ngIf=\"nzSuffix || nzSuffixIcon\">\n    <i nz-icon [nzType]=\"nzSuffixIcon\" *ngIf=\"nzSuffixIcon\"></i>\n    <ng-container *nzStringTemplateOutlet=\"nzSuffix\">{{ nzSuffix }}</ng-container>\n  </span>\n</ng-template>\n<ng-container *ngIf=\"isGroup\">\n  <ng-template *ngTemplateOutlet=\"contentTemplate\"></ng-template>\n</ng-container>\n<ng-template #contentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n",
                host: {
                    '[class.ant-input-group-compact]': 'nzCompact',
                    '[class.ant-input-search-enter-button]': 'nzSearch',
                    '[class.ant-input-search]': 'nzSearch',
                    '[class.ant-input-search-sm]': 'isSmallSearch',
                    '[class.ant-input-affix-wrapper]': 'isAffixWrapper',
                    '[class.ant-input-group-wrapper]': 'isAddOn',
                    '[class.ant-input-group]': 'isGroup',
                    '[class.ant-input-group-lg]': 'isLargeGroup',
                    '[class.ant-input-group-wrapper-lg]': 'isLargeGroupWrapper',
                    '[class.ant-input-affix-wrapper-lg]': 'isLargeAffix',
                    '[class.ant-input-search-lg]': 'isLargeSearch',
                    '[class.ant-input-group-sm]': 'isSmallGroup',
                    '[class.ant-input-affix-wrapper-sm]': 'isSmallAffix',
                    '[class.ant-input-group-wrapper-sm]': 'isSmallGroupWrapper'
                }
            }] }
];
NzInputGroupComponent.propDecorators = {
    listOfNzInputDirective: [{ type: ContentChildren, args: [NzInputDirective,] }],
    nzAddOnBeforeIcon: [{ type: Input }],
    nzAddOnAfterIcon: [{ type: Input }],
    nzPrefixIcon: [{ type: Input }],
    nzSuffixIcon: [{ type: Input }],
    nzAddOnBefore: [{ type: Input }],
    nzAddOnAfter: [{ type: Input }],
    nzPrefix: [{ type: Input }],
    nzSuffix: [{ type: Input }],
    nzSearch: [{ type: Input }],
    nzCompact: [{ type: Input }],
    nzSize: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzInputGroupComponent.prototype, "nzSearch", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzInputGroupComponent.prototype, "nzCompact", void 0);
if (false) {
    /** @type {?} */
    NzInputGroupComponent.prototype.listOfNzInputDirective;
    /**
     * @type {?}
     * @private
     */
    NzInputGroupComponent.prototype._size;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzAddOnBeforeIcon;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzAddOnAfterIcon;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzPrefixIcon;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzSuffixIcon;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzAddOnBefore;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzAddOnAfter;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzPrefix;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzSuffix;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzSearch;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzCompact;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pbnB1dC8iLCJzb3VyY2VzIjpbIm56LWlucHV0LWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFDTCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQThCLE1BQU0sb0JBQW9CLENBQUM7QUFDOUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUEwQnhELE1BQU0sT0FBTyxxQkFBcUI7SUF4QmxDO1FBMEJVLFVBQUssR0FBa0IsU0FBUyxDQUFDO1FBU2hCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLEtBQUssQ0FBQztJQTRFN0MsQ0FBQzs7Ozs7SUExRUMsSUFBYSxNQUFNLENBQUMsS0FBb0I7UUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFB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S0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBRUwsS0FBSzs7QUFIbUI7SUFBZixZQUFZLEVBQUU7O3VEQUFrQjtBQUNqQjtJQUFmLFlBQVksRUFBRTs7d0RBQW1COzs7SUFYM0MsdURBQXVGOzs7OztJQUN2RixzQ0FBeUM7O0lBQ3pDLGtEQUF3Qzs7SUFDeEMsaURBQXVDOztJQUN2Qyw2Q0FBbUM7O0lBQ25DLDZDQUFtQzs7SUFDbkMsOENBQW1EOztJQUNuRCw2Q0FBa0Q7O0lBQ2xELHlDQUE4Qzs7SUFDOUMseUNBQThDOztJQUM5Qyx5Q0FBMEM7O0lBQzFDLDBDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIElucHV0LFxuICBRdWVyeUxpc3QsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTmdDbGFzc1R5cGUsIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vbnotaW5wdXQuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotaW5wdXQtZ3JvdXAnLFxuICBleHBvcnRBczogJ256SW5wdXRHcm91cCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWlucHV0LWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLWNvbXBhY3RdJzogJ256Q29tcGFjdCcsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc2VhcmNoLWVudGVyLWJ1dHRvbl0nOiAnbnpTZWFyY2gnLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaF0nOiAnbnpTZWFyY2gnLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1zbV0nOiAnaXNTbWFsbFNlYXJjaCcsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlcl0nOiAnaXNBZmZpeFdyYXBwZXInLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXJdJzogJ2lzQWRkT24nLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwXSc6ICdpc0dyb3VwJyxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC1sZ10nOiAnaXNMYXJnZUdyb3VwJyxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyLWxnXSc6ICdpc0xhcmdlR3JvdXBXcmFwcGVyJyxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLWxnXSc6ICdpc0xhcmdlQWZmaXgnLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1sZ10nOiAnaXNMYXJnZVNlYXJjaCcsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtc21dJzogJ2lzU21hbGxHcm91cCcsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1zbV0nOiAnaXNTbWFsbEFmZml4JyxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyLXNtXSc6ICdpc1NtYWxsR3JvdXBXcmFwcGVyJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56SW5wdXRHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBAQ29udGVudENoaWxkcmVuKE56SW5wdXREaXJlY3RpdmUpIGxpc3RPZk56SW5wdXREaXJlY3RpdmU6IFF1ZXJ5TGlzdDxOeklucHV0RGlyZWN0aXZlPjtcbiAgcHJpdmF0ZSBfc2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpBZGRPbkJlZm9yZUljb246IE5nQ2xhc3NUeXBlO1xuICBASW5wdXQoKSBuekFkZE9uQWZ0ZXJJY29uOiBOZ0NsYXNzVHlwZTtcbiAgQElucHV0KCkgbnpQcmVmaXhJY29uOiBOZ0NsYXNzVHlwZTtcbiAgQElucHV0KCkgbnpTdWZmaXhJY29uOiBOZ0NsYXNzVHlwZTtcbiAgQElucHV0KCkgbnpBZGRPbkJlZm9yZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56QWRkT25BZnRlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56UHJlZml4OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpTdWZmaXg6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTZWFyY2ggPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q29tcGFjdCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHNldCBuelNpemUodmFsdWU6IE56U2l6ZUxEU1R5cGUpIHtcbiAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlbklucHV0U2l6ZSgpO1xuICB9XG5cbiAgZ2V0IG56U2l6ZSgpOiBOelNpemVMRFNUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIGdldCBpc0xhcmdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56U2l6ZSA9PT0gJ2xhcmdlJztcbiAgfVxuXG4gIGdldCBpc1NtYWxsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56U2l6ZSA9PT0gJ3NtYWxsJztcbiAgfVxuXG4gIGdldCBpc0FmZml4KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhISh0aGlzLm56U3VmZml4IHx8IHRoaXMubnpQcmVmaXggfHwgdGhpcy5uelByZWZpeEljb24gfHwgdGhpcy5uelN1ZmZpeEljb24pO1xuICB9XG5cbiAgZ2V0IGlzQWRkT24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKHRoaXMubnpBZGRPbkFmdGVyIHx8IHRoaXMubnpBZGRPbkJlZm9yZSB8fCB0aGlzLm56QWRkT25BZnRlckljb24gfHwgdGhpcy5uekFkZE9uQmVmb3JlSWNvbik7XG4gIH1cblxuICBnZXQgaXNBZmZpeFdyYXBwZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNBZmZpeCAmJiAhdGhpcy5pc0FkZE9uO1xuICB9XG5cbiAgZ2V0IGlzR3JvdXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmlzQWZmaXggJiYgIXRoaXMuaXNBZGRPbjtcbiAgfVxuXG4gIGdldCBpc0xhcmdlR3JvdXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNHcm91cCAmJiB0aGlzLmlzTGFyZ2U7XG4gIH1cblxuICBnZXQgaXNMYXJnZUdyb3VwV3JhcHBlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0FkZE9uICYmIHRoaXMuaXNMYXJnZTtcbiAgfVxuXG4gIGdldCBpc0xhcmdlQWZmaXgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNBZmZpeFdyYXBwZXIgJiYgdGhpcy5pc0xhcmdlO1xuICB9XG5cbiAgZ2V0IGlzTGFyZ2VTZWFyY2goKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpTZWFyY2ggJiYgdGhpcy5pc0xhcmdlO1xuICB9XG5cbiAgZ2V0IGlzU21hbGxHcm91cCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0dyb3VwICYmIHRoaXMuaXNTbWFsbDtcbiAgfVxuXG4gIGdldCBpc1NtYWxsQWZmaXgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNBZmZpeFdyYXBwZXIgJiYgdGhpcy5pc1NtYWxsO1xuICB9XG5cbiAgZ2V0IGlzU21hbGxHcm91cFdyYXBwZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNBZGRPbiAmJiB0aGlzLmlzU21hbGw7XG4gIH1cblxuICBnZXQgaXNTbWFsbFNlYXJjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uelNlYXJjaCAmJiB0aGlzLmlzU21hbGw7XG4gIH1cblxuICB1cGRhdGVDaGlsZHJlbklucHV0U2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5saXN0T2ZOeklucHV0RGlyZWN0aXZlKSB7XG4gICAgICB0aGlzLmxpc3RPZk56SW5wdXREaXJlY3RpdmUuZm9yRWFjaChpdGVtID0+IChpdGVtLm56U2l6ZSA9IHRoaXMubnpTaXplKSk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5JbnB1dFNpemUoKTtcbiAgfVxufVxuIl19