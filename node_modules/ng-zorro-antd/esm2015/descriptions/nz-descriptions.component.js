/**
 * @fileoverview added by tsickle
 * Generated from: nz-descriptions.component.ts
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
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { auditTime, finalize, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { responsiveMap, warn, InputBoolean, NzBreakpoint, NzConfigService, NzDomEventService, WithConfig } from 'ng-zorro-antd/core';
import { NzDescriptionsItemComponent } from './nz-descriptions-item.component';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'descriptions';
/** @type {?} */
const defaultColumnMap = {
    xxl: 3,
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
};
export class NzDescriptionsComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} cdr
     * @param {?} mediaMatcher
     * @param {?} platform
     * @param {?} nzDomEventService
     */
    constructor(nzConfigService, cdr, mediaMatcher, platform, nzDomEventService) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.mediaMatcher = mediaMatcher;
        this.platform = platform;
        this.nzDomEventService = nzDomEventService;
        this.nzLayout = 'horizontal';
        this.nzTitle = '';
        this.itemMatrix = [];
        this.realColumn = 3;
        this.destroy$ = new Subject();
        this.resize$ = new Subject();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzColumn) {
            this.resize$.next();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        /** @type {?} */
        const contentChange$ = this.items.changes.pipe(startWith(this.items), takeUntil(this.destroy$));
        merge(contentChange$, contentChange$.pipe(switchMap((/**
         * @return {?}
         */
        () => merge(...this.items.map((/**
         * @param {?} i
         * @return {?}
         */
        i => i.inputChange$))).pipe(auditTime(16))))), this.resize$)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.prepareMatrix();
            this.cdr.markForCheck();
        }));
        if (this.platform.isBrowser) {
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize((/**
             * @return {?}
             */
            () => this.nzDomEventService.unregisterResizeListener())))
                .subscribe((/**
             * @return {?}
             */
            () => this.resize$.next()));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.resize$.complete();
    }
    /**
     * Prepare the render matrix according to description items' spans.
     * @private
     * @return {?}
     */
    prepareMatrix() {
        /** @type {?} */
        let currentRow = [];
        /** @type {?} */
        let width = 0;
        /** @type {?} */
        const column = (this.realColumn = this.getColumn());
        /** @type {?} */
        const items = this.items.toArray();
        /** @type {?} */
        const length = items.length;
        /** @type {?} */
        const matrix = [];
        /** @type {?} */
        const flushRow = (/**
         * @return {?}
         */
        () => {
            matrix.push(currentRow);
            currentRow = [];
            width = 0;
        });
        for (let i = 0; i < length; i++) {
            /** @type {?} */
            const item = items[i];
            const { nzTitle: title, content, nzSpan: span } = item;
            width += span;
            // If the last item make the row's length exceeds `nzColumn`, the last
            // item should take all the space left. This logic is implemented in the template.
            // Warn user about that.
            if (width >= column) {
                if (width > column) {
                    warn(`"nzColumn" is ${column} but we have row length ${width}`);
                }
                currentRow.push({ title, content, span: column - (width - span) });
                flushRow();
            }
            else if (i === length - 1) {
                currentRow.push({ title, content, span: column - (width - span) });
                flushRow();
            }
            else {
                currentRow.push({ title, content, span });
            }
        }
        this.itemMatrix = matrix;
    }
    /**
     * @private
     * @return {?}
     */
    matchMedia() {
        /** @type {?} */
        let bp = NzBreakpoint.md;
        Object.keys(responsiveMap).map((/**
         * @param {?} breakpoint
         * @return {?}
         */
        (breakpoint) => {
            /** @type {?} */
            const castBP = (/** @type {?} */ (breakpoint));
            /** @type {?} */
            const matchBelow = this.mediaMatcher.matchMedia(responsiveMap[castBP]).matches;
            if (matchBelow) {
                bp = castBP;
            }
        }));
        return bp;
    }
    /**
     * @private
     * @return {?}
     */
    getColumn() {
        if (typeof this.nzColumn !== 'number') {
            return this.nzColumn[this.matchMedia()];
        }
        return this.nzColumn;
    }
}
NzDescriptionsComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-descriptions',
                template: "<div *ngIf=\"nzTitle\"\n     class=\"ant-descriptions-title\">\n  <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n</div>\n<div class=\"ant-descriptions-view\">\n  <table>\n    <tbody>\n      <ng-container *ngIf=\"nzLayout === 'horizontal'\">\n        <tr class=\"ant-descriptions-row\"\n            *ngFor=\"let row of itemMatrix; let i = index\">\n          <ng-container *ngFor=\"let item of row; let isLast = last\">\n            <!-- Horizontal & NOT Bordered -->\n            <ng-container *ngIf=\"!nzBordered\">\n              <td class=\"ant-descriptions-item\"\n                  [colSpan]=\"item.span\">\n                <span class=\"ant-descriptions-item-label\"\n                      [class.ant-descriptions-item-colon]=\"nzColon\">{{ item.title }}</span>\n                <span class=\"ant-descriptions-item-content\">\n                  <ng-template [ngTemplateOutlet]=\"item.content\"></ng-template>\n                </span>\n              </td>\n            </ng-container>\n            <!-- Horizontal & Bordered -->\n            <ng-container *ngIf=\"nzBordered\">\n              <td class=\"ant-descriptions-item-label\"\n                  *nzStringTemplateOutlet=\"item.title\">{{ item.title }}</td>\n              <td class=\"ant-descriptions-item-content\"\n                  [colSpan]=\"item.span * 2 - 1\">\n                <ng-template [ngTemplateOutlet]=\"item.content\"></ng-template>\n              </td>\n            </ng-container>\n          </ng-container>\n        </tr>\n      </ng-container>\n\n      <ng-container *ngIf=\"nzLayout === 'vertical'\">\n        <!-- Vertical & NOT Bordered -->\n        <ng-container *ngIf=\"!nzBordered\">\n          <ng-container *ngFor=\"let row of itemMatrix; let i = index\">\n            <tr class=\"ant-descriptions-row\">\n              <ng-container *ngFor=\"let item of row; let isLast = last\">\n                <td class=\"ant-descriptions-item\"\n                    [colSpan]=\"item.span\">\n                  <span class=\"ant-descriptions-item-label\"\n                        [class.ant-descriptions-item-colon]=\"nzColon\">{{ item.title }}</span>\n                </td>\n              </ng-container>\n            </tr>\n            <tr class=\"ant-descriptions-row\">\n              <ng-container *ngFor=\"let item of row; let isLast = last\">\n                <td class=\"ant-descriptions-item\"\n                    [colSpan]=\"item.span\">\n                  <span class=\"ant-descriptions-item-content\">\n                    <ng-template [ngTemplateOutlet]=\"item.content\"></ng-template>\n                  </span>\n                </td>\n              </ng-container>\n            </tr>\n          </ng-container>\n        </ng-container>\n        <!-- Vertical & Bordered -->\n        <ng-container *ngIf=\"nzBordered\">\n          <ng-container *ngFor=\"let row of itemMatrix; let i = index\">\n            <tr class=\"ant-descriptions-row\">\n              <ng-container *ngFor=\"let item of row; let isLast = last\">\n                <td class=\"ant-descriptions-item-label\"\n                    [colSpan]=\"item.span\">\n                  {{ item.title }}\n                </td>\n              </ng-container>\n            </tr>\n            <tr class=\"ant-descriptions-row\">\n              <ng-container *ngFor=\"let item of row; let isLast = last\">\n                <td class=\"ant-descriptions-item-content\"\n                    [colSpan]=\"item.span\">\n                  <ng-template [ngTemplateOutlet]=\"item.content\"></ng-template>\n                </td>\n              </ng-container>\n            </tr>\n          </ng-container>\n        </ng-container>\n      </ng-container>\n    </tbody>\n  </table>\n</div>\n",
                exportAs: 'nzDescriptions',
                preserveWhitespaces: false,
                host: {
                    class: 'ant-descriptions',
                    '[class.ant-descriptions-bordered]': 'nzBordered',
                    '[class.ant-descriptions-middle]': 'nzSize === "middle"',
                    '[class.ant-descriptions-small]': 'nzSize === "small"'
                },
                styles: [`
      nz-descriptions {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzDescriptionsComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: MediaMatcher },
    { type: Platform },
    { type: NzDomEventService }
];
NzDescriptionsComponent.propDecorators = {
    items: [{ type: ContentChildren, args: [NzDescriptionsItemComponent,] }],
    nzBordered: [{ type: Input }],
    nzLayout: [{ type: Input }],
    nzColumn: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzColon: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
    tslib_1.__metadata("design:type", Boolean)
], NzDescriptionsComponent.prototype, "nzBordered", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, defaultColumnMap),
    tslib_1.__metadata("design:type", Object)
], NzDescriptionsComponent.prototype, "nzColumn", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
    tslib_1.__metadata("design:type", String)
], NzDescriptionsComponent.prototype, "nzSize", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzDescriptionsComponent.prototype, "nzColon", void 0);
if (false) {
    /** @type {?} */
    NzDescriptionsComponent.prototype.items;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzBordered;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzLayout;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzColumn;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzSize;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzTitle;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzColon;
    /** @type {?} */
    NzDescriptionsComponent.prototype.itemMatrix;
    /** @type {?} */
    NzDescriptionsComponent.prototype.realColumn;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.resize$;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.mediaMatcher;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.nzDomEventService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGVzY3JpcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGVzY3JpcHRpb25zLyIsInNvdXJjZXMiOlsibnotZGVzY3JpcHRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFHTCxTQUFTLEVBR1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEYsT0FBTyxFQUNMLGFBQWEsRUFDYixJQUFJLEVBQ0osWUFBWSxFQUNaLFlBQVksRUFDWixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDWCxNQUFNLG9CQUFvQixDQUFDO0FBRTVCLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztNQUV6RSx3QkFBd0IsR0FBRyxjQUFjOztNQUN6QyxnQkFBZ0IsR0FBc0M7SUFDMUQsR0FBRyxFQUFFLENBQUM7SUFDTixFQUFFLEVBQUUsQ0FBQztJQUNMLEVBQUUsRUFBRSxDQUFDO0lBQ0wsRUFBRSxFQUFFLENBQUM7SUFDTCxFQUFFLEVBQUUsQ0FBQztJQUNMLEVBQUUsRUFBRSxDQUFDO0NBQ047QUF1QkQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7Ozs7SUFpQmxDLFlBQ1MsZUFBZ0MsRUFDL0IsR0FBc0IsRUFDdEIsWUFBMEIs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QUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSzs7QUFMZ0U7SUFBNUQsWUFBWSxFQUFFLEVBQUUsVUFBVSxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQzs7MkRBQXFCO0FBRXpCO0lBQXZELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxnQkFBZ0IsQ0FBQzs7eURBQXNEO0FBQzVEO0lBQWhELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxTQUFTLENBQUM7O3VEQUE0QjtBQUVoQjtJQUEzRCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFOzt3REFBa0I7OztJQVB0Rix3Q0FBNEY7O0lBRTVGLDZDQUEwRjs7SUFDMUYsMkNBQXVEOztJQUN2RCwyQ0FBc0g7O0lBQ3RILHlDQUFxRjs7SUFDckYsMENBQWtEOztJQUNsRCwwQ0FBc0Y7O0lBRXRGLDZDQUFtRDs7SUFFbkQsNkNBQWU7Ozs7O0lBRWYsMkNBQXVDOzs7OztJQUN2QywwQ0FBc0M7O0lBR3BDLGtEQUF1Qzs7Ozs7SUFDdkMsc0NBQThCOzs7OztJQUM5QiwrQ0FBa0M7Ozs7O0lBQ2xDLDJDQUEwQjs7Ozs7SUFDMUIsb0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IE1lZGlhTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBRdWVyeUxpc3QsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBhdWRpdFRpbWUsIGZpbmFsaXplLCBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICByZXNwb25zaXZlTWFwLFxuICB3YXJuLFxuICBJbnB1dEJvb2xlYW4sXG4gIE56QnJlYWtwb2ludCxcbiAgTnpDb25maWdTZXJ2aWNlLFxuICBOekRvbUV2ZW50U2VydmljZSxcbiAgV2l0aENvbmZpZ1xufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpEZXNjcmlwdGlvbnNJdGVtUmVuZGVyUHJvcHMsIE56RGVzY3JpcHRpb25zTGF5b3V0LCBOekRlc2NyaXB0aW9uc1NpemUgfSBmcm9tICcuL256LWRlc2NyaXB0aW9ucy1kZWZpbml0aW9ucyc7XG5pbXBvcnQgeyBOekRlc2NyaXB0aW9uc0l0ZW1Db21wb25lbnQgfSBmcm9tICcuL256LWRlc2NyaXB0aW9ucy1pdGVtLmNvbXBvbmVudCc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdkZXNjcmlwdGlvbnMnO1xuY29uc3QgZGVmYXVsdENvbHVtbk1hcDogeyBba2V5IGluIE56QnJlYWtwb2ludF06IG51bWJlciB9ID0ge1xuICB4eGw6IDMsXG4gIHhsOiAzLFxuICBsZzogMyxcbiAgbWQ6IDMsXG4gIHNtOiAyLFxuICB4czogMVxufTtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LWRlc2NyaXB0aW9ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1kZXNjcmlwdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBleHBvcnRBczogJ256RGVzY3JpcHRpb25zJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC1kZXNjcmlwdGlvbnMnLFxuICAgICdbY2xhc3MuYW50LWRlc2NyaXB0aW9ucy1ib3JkZXJlZF0nOiAnbnpCb3JkZXJlZCcsXG4gICAgJ1tjbGFzcy5hbnQtZGVzY3JpcHRpb25zLW1pZGRsZV0nOiAnbnpTaXplID09PSBcIm1pZGRsZVwiJyxcbiAgICAnW2NsYXNzLmFudC1kZXNjcmlwdGlvbnMtc21hbGxdJzogJ256U2l6ZSA9PT0gXCJzbWFsbFwiJ1xuICB9LFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBuei1kZXNjcmlwdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpEZXNjcmlwdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpEZXNjcmlwdGlvbnNJdGVtQ29tcG9uZW50KSBpdGVtczogUXVlcnlMaXN0PE56RGVzY3JpcHRpb25zSXRlbUNvbXBvbmVudD47XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIG56Qm9yZGVyZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG56TGF5b3V0OiBOekRlc2NyaXB0aW9uc0xheW91dCA9ICdob3Jpem9udGFsJztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBkZWZhdWx0Q29sdW1uTWFwKSBuekNvbHVtbjogbnVtYmVyIHwgeyBba2V5IGluIE56QnJlYWtwb2ludF06IG51bWJlciB9O1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdkZWZhdWx0JykgbnpTaXplOiBOekRlc2NyaXB0aW9uc1NpemU7XG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+ID0gJyc7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgQElucHV0Qm9vbGVhbigpIG56Q29sb246IGJvb2xlYW47XG5cbiAgaXRlbU1hdHJpeDogTnpEZXNjcmlwdGlvbnNJdGVtUmVuZGVyUHJvcHNbXVtdID0gW107XG5cbiAgcmVhbENvbHVtbiA9IDM7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgcmVzaXplJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIG1lZGlhTWF0Y2hlcjogTWVkaWFNYXRjaGVyLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgbnpEb21FdmVudFNlcnZpY2U6IE56RG9tRXZlbnRTZXJ2aWNlXG4gICkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpDb2x1bW4pIHtcbiAgICAgIHRoaXMucmVzaXplJC5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRlbnRDaGFuZ2UkID0gdGhpcy5pdGVtcy5jaGFuZ2VzLnBpcGUoXG4gICAgICBzdGFydFdpdGgodGhpcy5pdGVtcyksXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICApO1xuXG4gICAgbWVyZ2UoXG4gICAgICBjb250ZW50Q2hhbmdlJCxcbiAgICAgIGNvbnRlbnRDaGFuZ2UkLnBpcGUoc3dpdGNoTWFwKCgpID0+IG1lcmdlKC4uLnRoaXMuaXRlbXMubWFwKGkgPT4gaS5pbnB1dENoYW5nZSQpKS5waXBlKGF1ZGl0VGltZSgxNikpKSksXG4gICAgICB0aGlzLnJlc2l6ZSRcbiAgICApXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5wcmVwYXJlTWF0cml4KCk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMubnpEb21FdmVudFNlcnZpY2VcbiAgICAgICAgLnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgICAgZmluYWxpemUoKCkgPT4gdGhpcy5uekRvbUV2ZW50U2VydmljZS51bnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVzaXplJC5uZXh0KCkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLnJlc2l6ZSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIHRoZSByZW5kZXIgbWF0cml4IGFjY29yZGluZyB0byBkZXNjcmlwdGlvbiBpdGVtcycgc3BhbnMuXG4gICAqL1xuICBwcml2YXRlIHByZXBhcmVNYXRyaXgoKTogdm9pZCB7XG4gICAgbGV0IGN1cnJlbnRSb3c6IE56RGVzY3JpcHRpb25zSXRlbVJlbmRlclByb3BzW10gPSBbXTtcbiAgICBsZXQgd2lkdGggPSAwO1xuXG4gICAgY29uc3QgY29sdW1uID0gKHRoaXMucmVhbENvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uKCkpO1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcy50b0FycmF5KCk7XG4gICAgY29uc3QgbGVuZ3RoID0gaXRlbXMubGVuZ3RoO1xuICAgIGNvbnN0IG1hdHJpeDogTnpEZXNjcmlwdGlvbnNJdGVtUmVuZGVyUHJvcHNbXVtdID0gW107XG4gICAgY29uc3QgZmx1c2hSb3cgPSAoKSA9PiB7XG4gICAgICBtYXRyaXgucHVzaChjdXJyZW50Um93KTtcbiAgICAgIGN1cnJlbnRSb3cgPSBbXTtcbiAgICAgIHdpZHRoID0gMDtcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgY29uc3QgeyBuelRpdGxlOiB0aXRsZSwgY29udGVudCwgbnpTcGFuOiBzcGFuIH0gPSBpdGVtO1xuXG4gICAgICB3aWR0aCArPSBzcGFuO1xuXG4gICAgICAvLyBJZiB0aGUgbGFzdCBpdGVtIG1ha2UgdGhlIHJvdydzIGxlbmd0aCBleGNlZWRzIGBuekNvbHVtbmAsIHRoZSBsYXN0XG4gICAgICAvLyBpdGVtIHNob3VsZCB0YWtlIGFsbCB0aGUgc3BhY2UgbGVmdC4gVGhpcyBsb2dpYyBpcyBpbXBsZW1lbnRlZCBpbiB0aGUgdGVtcGxhdGUuXG4gICAgICAvLyBXYXJuIHVzZXIgYWJvdXQgdGhhdC5cbiAgICAgIGlmICh3aWR0aCA+PSBjb2x1bW4pIHtcbiAgICAgICAgaWYgKHdpZHRoID4gY29sdW1uKSB7XG4gICAgICAgICAgd2FybihgXCJuekNvbHVtblwiIGlzICR7Y29sdW1ufSBidXQgd2UgaGF2ZSByb3cgbGVuZ3RoICR7d2lkdGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFJvdy5wdXNoKHsgdGl0bGUsIGNvbnRlbnQsIHNwYW46IGNvbHVtbiAtICh3aWR0aCAtIHNwYW4pIH0pO1xuICAgICAgICBmbHVzaFJvdygpO1xuICAgICAgfSBlbHNlIGlmIChpID09PSBsZW5ndGggLSAxKSB7XG4gICAgICAgIGN1cnJlbnRSb3cucHVzaCh7IHRpdGxlLCBjb250ZW50LCBzcGFuOiBjb2x1bW4gLSAod2lkdGggLSBzcGFuKSB9KTtcbiAgICAgICAgZmx1c2hSb3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRSb3cucHVzaCh7IHRpdGxlLCBjb250ZW50LCBzcGFuIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaXRlbU1hdHJpeCA9IG1hdHJpeDtcbiAgfVxuXG4gIHByaXZhdGUgbWF0Y2hNZWRpYSgpOiBOekJyZWFrcG9pbnQge1xuICAgIGxldCBicDogTnpCcmVha3BvaW50ID0gTnpCcmVha3BvaW50Lm1kO1xuXG4gICAgT2JqZWN0LmtleXMocmVzcG9uc2l2ZU1hcCkubWFwKChicmVha3BvaW50OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGNhc3RCUCA9IGJyZWFrcG9pbnQgYXMgTnpCcmVha3BvaW50O1xuICAgICAgY29uc3QgbWF0Y2hCZWxvdyA9IHRoaXMubWVkaWFNYXRjaGVyLm1hdGNoTWVkaWEocmVzcG9uc2l2ZU1hcFtjYXN0QlBdKS5tYXRjaGVzO1xuICAgICAgaWYgKG1hdGNoQmVsb3cpIHtcbiAgICAgICAgYnAgPSBjYXN0QlA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYnA7XG4gIH1cblxuICBwcml2YXRlIGdldENvbHVtbigpOiBudW1iZXIge1xuICAgIGlmICh0eXBlb2YgdGhpcy5uekNvbHVtbiAhPT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiB0aGlzLm56Q29sdW1uW3RoaXMubWF0Y2hNZWRpYSgpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5uekNvbHVtbjtcbiAgfVxufVxuIl19