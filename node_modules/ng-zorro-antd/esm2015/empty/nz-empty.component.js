/**
 * @fileoverview added by tsickle
 * Generated from: nz-empty.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { emptyImage } from './nz-empty-config';
export class NzEmptyComponent {
    /**
     * @param {?} sanitizer
     * @param {?} i18n
     * @param {?} cdr
     */
    constructor(sanitizer, i18n, cdr) {
        this.sanitizer = sanitizer;
        this.i18n = i18n;
        this.cdr = cdr;
        // NOTE: It would be very hack to use `ContentChild`, because Angular could
        // tell if user actually pass something to <ng-content>.
        // See: https://github.com/angular/angular/issues/12530.
        // I can use a directive but this would expose the name `footer`.
        // @ContentChild(TemplateRef, {static: false}) nzNotFoundFooter: TemplateRef<void>;
        this.defaultSvg = this.sanitizer.bypassSecurityTrustResourceUrl(emptyImage);
        this.isContentString = false;
        this.locale = {};
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    get shouldRenderContent() {
        /** @type {?} */
        const content = this.nzNotFoundContent;
        return !!(content || typeof content === 'string');
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzNotFoundContent } = changes;
        if (nzNotFoundContent) {
            this.isContentString = typeof nzNotFoundContent.currentValue === 'string';
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
            this.locale = this.i18n.getLocaleData('Empty');
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
NzEmptyComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-empty',
                exportAs: 'nzEmpty',
                template: "<div class=\"ant-empty-image\">\n  <ng-container *nzStringTemplateOutlet=\"nzNotFoundImage\">\n    <img [src]=\"nzNotFoundImage || defaultSvg\" [alt]=\"isContentString ? nzNotFoundContent : 'empty'\">\n  </ng-container>\n</div>\n<p class=\"ant-empty-description\">\n  <ng-container *nzStringTemplateOutlet=\"nzNotFoundContent\">\n    {{ shouldRenderContent ? nzNotFoundContent : locale['description'] }}\n  </ng-container>\n</p>\n<div class=\"ant-empty-footer\" *ngIf=\"nzNotFoundFooter\">\n  <ng-container *nzStringTemplateOutlet=\"nzNotFoundFooter\">\n    {{ nzNotFoundFooter }}\n  </ng-container>\n</div>\n",
                host: {
                    class: 'ant-empty'
                },
                styles: ['nz-empty { display: block; }']
            }] }
];
/** @nocollapse */
NzEmptyComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: NzI18nService },
    { type: ChangeDetectorRef }
];
NzEmptyComponent.propDecorators = {
    nzNotFoundImage: [{ type: Input }],
    nzNotFoundContent: [{ type: Input }],
    nzNotFoundFooter: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzEmptyComponent.prototype.nzNotFoundImage;
    /** @type {?} */
    NzEmptyComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzEmptyComponent.prototype.nzNotFoundFooter;
    /** @type {?} */
    NzEmptyComponent.prototype.defaultSvg;
    /** @type {?} */
    NzEmptyComponent.prototype.isContentString;
    /** @type {?} */
    NzEmptyComponent.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    NzEmptyComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzEmptyComponent.prototype.sanitizer;
    /**
     * @type {?}
     * @private
     */
    NzEmptyComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzEmptyComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZW1wdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9lbXB0eS8iLCJzb3VyY2VzIjpbIm56LWVtcHR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQU1MLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQWEvQyxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUFzQjNCLFlBQW9CLFNBQXVCLEVBQVUsSUFBbUIsRUFBVSxHQUFzQjtRQUFwRixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1COzs7Ozs7UUFYeEcsZUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkUsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsV0FBTSxHQUE4QixFQUFFLENBQUM7UUFPL0IsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFFb0UsQ0FBQzs7OztJQVA1RyxJQUFJLG1CQUFtQjs7Y0FDZixPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQjtRQUN0QyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQU1ELFdBQVcsQ0FBQyxPQUFzQjtjQUMxQixFQUFFLGlCQUFpQixFQUFFLEdBQUcsT0FBTztRQUNyQyxJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxpQkFBaUIsQ0FBQyxZQUFZLEtBQUssUUFBUSxDQUFDO1NBQzNFO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNuRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUFwREYsU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSxTQUFTO2dCQUNuQiw2bUJBQXdDO2dCQUV4QyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLFdBQVc7aUJBQ25CO3lCQUhRLDhCQUE4QjthQUl4Qzs7OztZQWxCUSxZQUFZO1lBSVosYUFBYTtZQWRwQixpQkFBaUI7Ozs4QkE4QmhCLEtBQUs7Z0NBQ0wsS0FBSzsrQkFDTCxLQUFLOzs7O0lBRk4sMkNBQXFEOztJQUNyRCw2Q0FBdUQ7O0lBQ3ZELDRDQUFzRDs7SUFRdEQsc0NBQXVFOztJQUN2RSwyQ0FBd0I7O0lBQ3hCLGtDQUF1Qzs7Ozs7SUFPdkMsb0NBQXVDOzs7OztJQUUzQixxQ0FBK0I7Ozs7O0lBQUUsZ0NBQTJCOzs7OztJQUFFLCtCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcblxuaW1wb3J0IHsgZW1wdHlJbWFnZSB9IGZyb20gJy4vbnotZW1wdHktY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LWVtcHR5JyxcbiAgZXhwb3J0QXM6ICduekVtcHR5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWVtcHR5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbJ256LWVtcHR5IHsgZGlzcGxheTogYmxvY2s7IH0nXSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LWVtcHR5J1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56RW1wdHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbnpOb3RGb3VuZEltYWdlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuek5vdEZvdW5kRm9vdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICAvLyBOT1RFOiBJdCB3b3VsZCBiZSB2ZXJ5IGhhY2sgdG8gdXNlIGBDb250ZW50Q2hpbGRgLCBiZWNhdXNlIEFuZ3VsYXIgY291bGRcbiAgLy8gdGVsbCBpZiB1c2VyIGFjdHVhbGx5IHBhc3Mgc29tZXRoaW5nIHRvIDxuZy1jb250ZW50Pi5cbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMjUzMC5cbiAgLy8gSSBjYW4gdXNlIGEgZGlyZWN0aXZlIGJ1dCB0aGlzIHdvdWxkIGV4cG9zZSB0aGUgbmFtZSBgZm9vdGVyYC5cbiAgLy8gQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZiwge3N0YXRpYzogZmFsc2V9KSBuek5vdEZvdW5kRm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBkZWZhdWx0U3ZnID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKGVtcHR5SW1hZ2UpO1xuICBpc0NvbnRlbnRTdHJpbmcgPSBmYWxzZTtcbiAgbG9jYWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbiAgZ2V0IHNob3VsZFJlbmRlckNvbnRlbnQoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMubnpOb3RGb3VuZENvbnRlbnQ7XG4gICAgcmV0dXJuICEhKGNvbnRlbnQgfHwgdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56Tm90Rm91bmRDb250ZW50IH0gPSBjaGFuZ2VzO1xuICAgIGlmIChuek5vdEZvdW5kQ29udGVudCkge1xuICAgICAgdGhpcy5pc0NvbnRlbnRTdHJpbmcgPSB0eXBlb2YgbnpOb3RGb3VuZENvbnRlbnQuY3VycmVudFZhbHVlID09PSAnc3RyaW5nJztcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnRW1wdHknKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=