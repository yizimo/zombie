import { Platform, PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, TemplateRef, Input, ChangeDetectorRef, ContentChildren, NgModule } from '@angular/core';
import { InputNumber, warn, NzBreakpoint, responsiveMap, NzConfigService, NzDomEventService, InputBoolean, WithConfig, NzAddOnModule } from 'ng-zorro-antd/core';
import { __decorate, __metadata } from 'tslib';
import { Subject, merge } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';
import { startWith, takeUntil, switchMap, auditTime, finalize } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: nz-descriptions-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzDescriptionsItemComponent {
    constructor() {
        this.nzSpan = 1;
        this.nzTitle = '';
        this.inputChange$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.inputChange$.next();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.inputChange$.complete();
    }
}
NzDescriptionsItemComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-descriptions-item',
                template: "<!-- Use a template to wrap contents so contents wouldn't be displayed. -->\n<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n",
                exportAs: 'nzDescriptionsItem',
                preserveWhitespaces: false
            }] }
];
NzDescriptionsItemComponent.propDecorators = {
    content: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
    nzSpan: [{ type: Input }],
    nzTitle: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzDescriptionsItemComponent.prototype, "nzSpan", void 0);
if (false) {
    /** @type {?} */
    NzDescriptionsItemComponent.prototype.content;
    /** @type {?} */
    NzDescriptionsItemComponent.prototype.nzSpan;
    /** @type {?} */
    NzDescriptionsItemComponent.prototype.nzTitle;
    /** @type {?} */
    NzDescriptionsItemComponent.prototype.inputChange$;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-descriptions.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
class NzDescriptionsComponent {
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
__decorate([
    InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
    __metadata("design:type", Boolean)
], NzDescriptionsComponent.prototype, "nzBordered", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, defaultColumnMap),
    __metadata("design:type", Object)
], NzDescriptionsComponent.prototype, "nzColumn", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
    __metadata("design:type", String)
], NzDescriptionsComponent.prototype, "nzSize", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
    __metadata("design:type", Boolean)
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

/**
 * @fileoverview added by tsickle
 * Generated from: nz-descriptions.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzDescriptionsModule {
}
NzDescriptionsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NzAddOnModule, PlatformModule],
                declarations: [NzDescriptionsComponent, NzDescriptionsItemComponent],
                exports: [NzDescriptionsComponent, NzDescriptionsItemComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: nz-descriptions-definitions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @record
 */
function NzDescriptionsItemRenderProps() { }
if (false) {
    /** @type {?} */
    NzDescriptionsItemRenderProps.prototype.title;
    /** @type {?} */
    NzDescriptionsItemRenderProps.prototype.span;
    /** @type {?} */
    NzDescriptionsItemRenderProps.prototype.content;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-descriptions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzDescriptionsComponent, NzDescriptionsItemComponent, NzDescriptionsModule };
//# sourceMappingURL=ng-zorro-antd-descriptions.js.map
