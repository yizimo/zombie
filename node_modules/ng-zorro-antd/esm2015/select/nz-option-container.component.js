/**
 * @fileoverview added by tsickle
 * Generated from: nz-option-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, QueryList, TemplateRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { filter, map, pairwise, takeUntil } from 'rxjs/operators';
import { NzOptionLiComponent } from './nz-option-li.component';
import { NzSelectService } from './nz-select.service';
export class NzOptionContainerComponent {
    /**
     * @param {?} nzSelectService
     * @param {?} cdr
     * @param {?} ngZone
     */
    constructor(nzSelectService, cdr, ngZone) {
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.destroy$ = new Subject();
        this.lastScrollTop = 0;
        this.nzScrollToBottom = new EventEmitter();
    }
    /**
     * @param {?} option
     * @return {?}
     */
    scrollIntoViewIfNeeded(option) {
        // delay after open
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.listOfNzOptionLiComponent && this.listOfNzOptionLiComponent.length && option) {
                /** @type {?} */
                const targetOption = this.listOfNzOptionLiComponent.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => this.nzSelectService.compareWith(o.nzOption.nzValue, option.nzValue)));
                // tslint:disable:no-any
                if (targetOption && targetOption.el && ((/** @type {?} */ (targetOption.el))).scrollIntoViewIfNeeded) {
                    ((/** @type {?} */ (targetOption.el))).scrollIntoViewIfNeeded(false);
                }
            }
        }));
    }
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    trackLabel(_index, option) {
        return option.nzLabel;
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
    ngOnInit() {
        this.nzSelectService.activatedOption$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            this.scrollIntoViewIfNeeded((/** @type {?} */ (option)));
        }));
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.cdr.markForCheck();
        }));
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const ul = this.dropdownUl.nativeElement;
            fromEvent(ul, 'scroll')
                .pipe(takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            e => {
                e.preventDefault();
                e.stopPropagation();
                if (ul && ul.scrollTop > this.lastScrollTop && ul.scrollHeight < ul.clientHeight + ul.scrollTop + 10) {
                    this.lastScrollTop = ul.scrollTop;
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        this.nzScrollToBottom.emit();
                    }));
                }
            }));
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.listOfNzOptionLiComponent.changes
            .pipe(map((/**
         * @param {?} list
         * @return {?}
         */
        list => list.length)), pairwise(), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([before, after]) => after < before)), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => (this.lastScrollTop = 0)));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzOptionContainerComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-option-container]',
                exportAs: 'nzOptionContainer',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                template: "<ul #dropdownUl\n  class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n  role=\"menu\"\n  tabindex=\"0\">\n  <li *ngIf=\"nzSelectService.isShowNotFound\"\n    nz-select-unselectable\n    class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\">\n    <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"nzNotFoundContent\"></nz-embed-empty>\n  </li>\n  <li nz-option-li\n    *ngIf=\"nzSelectService.addedTagOption\"\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\n    [nzOption]=\"nzSelectService.addedTagOption\">\n  </li>\n  <ng-container *ngFor=\"let option of nzSelectService.listOfNzOptionComponent | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue\">\n    <li nz-option-li\n      *ngIf=\"!option.nzHide\"\n      [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\n      [nzOption]=\"option\">\n    </li>\n  </ng-container>\n  <li class=\"ant-select-dropdown-menu-item-group\"\n    *ngFor=\"let group of nzSelectService.listOfNzOptionGroupComponent | nzFilterGroupOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackLabel\">\n    <div class=\"ant-select-dropdown-menu-item-group-title\"\n      [attr.title]=\"group.isLabelString ? group.nzLabel : ''\">\n      <ng-container *nzStringTemplateOutlet=\"group.nzLabel\"> {{group.nzLabel}} </ng-container>\n    </div>\n    <ul class=\"ant-select-dropdown-menu-item-group-list\">\n      <ng-container *ngFor=\"let option of group.listOfNzOptionComponent | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackValue\">\n        <li nz-option-li\n          *ngIf=\"!option.nzHide\"\n          [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\n          [nzOption]=\"option\">\n        </li>\n      </ng-container>\n    </ul>\n  </li>\n  <li nz-option-li\n    *ngFor=\"let option of nzSelectService.listOfTagOption | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue \"\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\n    [nzOption]=\"option\">\n  </li>\n</ul>\n"
            }] }
];
/** @nocollapse */
NzOptionContainerComponent.ctorParameters = () => [
    { type: NzSelectService },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
NzOptionContainerComponent.propDecorators = {
    listOfNzOptionLiComponent: [{ type: ViewChildren, args: [NzOptionLiComponent,] }],
    dropdownUl: [{ type: ViewChild, args: ['dropdownUl', { static: true },] }],
    nzNotFoundContent: [{ type: Input }],
    nzMenuItemSelectedIcon: [{ type: Input }],
    nzScrollToBottom: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzOptionContainerComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzOptionContainerComponent.prototype.lastScrollTop;
    /** @type {?} */
    NzOptionContainerComponent.prototype.listOfNzOptionLiComponent;
    /** @type {?} */
    NzOptionContainerComponent.prototype.dropdownUl;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzMenuItemSelectedIcon;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzScrollToBottom;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzSelectService;
    /**
     * @type {?}
     * @private
     */
    NzOptionContainerComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzOptionContainerComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NlbGVjdC8iLCJzb3VyY2VzIjpbIm56LW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVV0RCxNQUFNLE9BQU8sMEJBQTBCOzs7Ozs7SUFpQ3JDLFlBQW1CLGVBQWdDLEVBQVUsR0FBc0IsRUFBVSxNQUFjO1FBQXhGLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWhDbkcsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDekIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFLUCxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBMEIrQyxDQUFDOzs7OztJQXhCL0csc0JBQXNCLENBQUMsTUFBeUI7UUFDOUMsbUJBQW1CO1FBQ25CLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUks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LEtBQUssR0FBRyxNQUFNLEVBQUMsRUFDM0MsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekI7YUFDQSxTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUFqRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsMndFQUFtRDthQUNwRDs7OztZQVRRLGVBQWU7WUFwQnRCLGlCQUFpQjtZQUtqQixNQUFNOzs7d0NBNEJMLFlBQVksU0FBQyxtQkFBbUI7eUJBQ2hDLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dDQUN4QyxLQUFLO3FDQUNMLEtBQUs7K0JBQ0wsTUFBTTs7Ozs7OztJQU5QLDhDQUFpQzs7Ozs7SUFDakMsbURBQTBCOztJQUMxQiwrREFBNkY7O0lBQzdGLGdEQUFvRjs7SUFDcEYsdURBQW1DOztJQUNuQyw0REFBbUQ7O0lBQ25ELHNEQUErRDs7SUEwQm5ELHFEQUF1Qzs7Ozs7SUFBRSx5Q0FBOEI7Ozs7O0lBQUUsNENBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NoaWxkcmVuLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHBhaXJ3aXNlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOek9wdGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24tZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IE56T3B0aW9uTGlDb21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi1saS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnLi9uei1zZWxlY3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuei1vcHRpb24tY29udGFpbmVyXScsXG4gIGV4cG9ydEFzOiAnbnpPcHRpb25Db250YWluZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOek9wdGlvbkNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgbGFzdFNjcm9sbFRvcCA9IDA7XG4gIEBWaWV3Q2hpbGRyZW4oTnpPcHRpb25MaUNvbXBvbmVudCkgbGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudDogUXVlcnlMaXN0PE56T3B0aW9uTGlDb21wb25lbnQ+O1xuICBAVmlld0NoaWxkKCdkcm9wZG93blVsJywgeyBzdGF0aWM6IHRydWUgfSkgZHJvcGRvd25VbDogRWxlbWVudFJlZjxIVE1MVUxpc3RFbGVtZW50PjtcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZztcbiAgQElucHV0KCkgbnpNZW51SXRlbVNlbGVjdGVkSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNjcm9sbFRvQm90dG9tID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIHNjcm9sbEludG9WaWV3SWZOZWVkZWQob3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCk6IHZvaWQge1xuICAgIC8vIGRlbGF5IGFmdGVyIG9wZW5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQgJiYgdGhpcy5saXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50Lmxlbmd0aCAmJiBvcHRpb24pIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0T3B0aW9uID0gdGhpcy5saXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50LmZpbmQobyA9PlxuICAgICAgICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNvbXBhcmVXaXRoKG8ubnpPcHRpb24ubnpWYWx1ZSwgb3B0aW9uLm56VmFsdWUpXG4gICAgICAgICk7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuICAgICAgICBpZiAodGFyZ2V0T3B0aW9uICYmIHRhcmdldE9wdGlvbi5lbCAmJiAodGFyZ2V0T3B0aW9uLmVsIGFzIGFueSkuc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCkge1xuICAgICAgICAgICh0YXJnZXRPcHRpb24uZWwgYXMgYW55KS5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdHJhY2tMYWJlbChfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBOek9wdGlvbkdyb3VwQ29tcG9uZW50KTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiBvcHRpb24ubnpMYWJlbDtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgdHJhY2tWYWx1ZShfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCk6IGFueSB7XG4gICAgcmV0dXJuIG9wdGlvbi5uelZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIG56U2VsZWN0U2VydmljZTogTnpTZWxlY3RTZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuYWN0aXZhdGVkT3B0aW9uJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKG9wdGlvbiA9PiB7XG4gICAgICB0aGlzLnNjcm9sbEludG9WaWV3SWZOZWVkZWQob3B0aW9uISk7XG4gICAgfSk7XG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2hlY2skLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgY29uc3QgdWwgPSB0aGlzLmRyb3Bkb3duVWwubmF0aXZlRWxlbWVudDtcbiAgICAgIGZyb21FdmVudDxNb3VzZUV2ZW50Pih1bCwgJ3Njcm9sbCcpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZShlID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBpZiAodWwgJiYgdWwuc2Nyb2xsVG9wID4gdGhpcy5sYXN0U2Nyb2xsVG9wICYmIHVsLnNjcm9sbEhlaWdodCA8IHVsLmNsaWVudEhlaWdodCArIHVsLnNjcm9sbFRvcCArIDEwKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RTY3JvbGxUb3AgPSB1bC5zY3JvbGxUb3A7XG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLm56U2Nyb2xsVG9Cb3R0b20uZW1pdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQuY2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChsaXN0ID0+IGxpc3QubGVuZ3RoKSxcbiAgICAgICAgcGFpcndpc2UoKSxcbiAgICAgICAgZmlsdGVyKChbYmVmb3JlLCBhZnRlcl0pID0+IGFmdGVyIDwgYmVmb3JlKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+ICh0aGlzLmxhc3RTY3JvbGxUb3AgPSAwKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==