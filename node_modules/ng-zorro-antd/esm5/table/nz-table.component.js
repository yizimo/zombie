/**
 * @fileoverview added by tsickle
 * Generated from: nz-table.component.ts
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
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, NgZone, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, merge, EMPTY, Subject } from 'rxjs';
import { flatMap, startWith, takeUntil } from 'rxjs/operators';
import { measureScrollbar, InputBoolean, InputNumber, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzThComponent } from './nz-th.component';
import { NzVirtualScrollDirective } from './nz-virtual-scroll.directive';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'table';
/**
 * @template T
 */
var NzTableComponent = /** @class */ (function () {
    function NzTableComponent(nzConfigService, renderer, ngZone, cdr, i18n, platform, elementRef) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.i18n = i18n;
        this.platform = platform;
        /**
         * public data for ngFor tr
         */
        this.data = [];
        this.locale = {}; // tslint:disable-line:no-any
        this.lastScrollLeft = 0;
        this.headerBottomStyle = {};
        this.destroy$ = new Subject();
        this.nzPageSizeOptions = [10, 20, 30, 40, 50];
        this.nzVirtualScroll = false;
        this.nzVirtualItemSize = 0;
        this.nzVirtualMaxBufferPx = 200;
        this.nzVirtualMinBufferPx = 100;
        this.nzLoadingDelay = 0;
        this.nzTotal = 0;
        this.nzWidthConfig = [];
        this.nzPageIndex = 1;
        this.nzPageSize = 10;
        this.nzData = [];
        this.nzPaginationPosition = 'bottom';
        this.nzScroll = { x: null, y: null };
        this.nzFrontPagination = true;
        this.nzTemplateMode = false;
        this.nzShowPagination = true;
        this.nzLoading = false;
        this.nzPageSizeChange = new EventEmitter();
        this.nzPageIndexChange = new EventEmitter();
        /* tslint:disable-next-line:no-any */
        this.nzCurrentPageDataChange = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-table-wrapper');
    }
    Object.defineProperty(NzTableComponent.prototype, "itemRender", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzItemRender || this.itemRenderChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "tableBodyNativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.tableBodyElement && this.tableBodyElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "tableHeaderNativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.tableHeaderElement && this.tableHeaderElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "cdkVirtualScrollNativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.cdkVirtualScrollElement && this.cdkVirtualScrollElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "mixTableBodyNativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.tableBodyNativeElement || this.cdkVirtualScrollNativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} size
     * @param {?} index
     * @return {?}
     */
    NzTableComponent.prototype.emitPageSizeOrIndex = /**
     * @param {?} size
     * @param {?} index
     * @return {?}
     */
    function (size, index) {
        if (this.nzPageSize !== size || this.nzPageIndex !== index) {
            if (this.nzPageSize !== size) {
                this.nzPageSize = size;
                this.nzPageSizeChange.emit(this.nzPageSize);
            }
            if (this.nzPageIndex !== index) {
                this.nzPageIndex = index;
                this.nzPageIndexChange.emit(this.nzPageIndex);
            }
            this.updateFrontPaginationDataIfNeeded(this.nzPageSize !== size);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTableComponent.prototype.syncScrollTable = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.currentTarget === e.target) {
            /** @type {?} */
            var target = (/** @type {?} */ (e.target));
            if (target.scrollLeft !== this.lastScrollLeft && this.nzScroll && this.nzScroll.x) {
                if (target === this.mixTableBodyNativeElement && this.tableHeaderNativeElement) {
                    this.tableHeaderNativeElement.scrollLeft = target.scrollLeft;
                }
                else if (target === this.tableHeaderNativeElement && this.mixTableBodyNativeElement) {
                    this.mixTableBodyNativeElement.scrollLeft = target.scrollLeft;
                }
                this.setScrollPositionClassName();
            }
            this.lastScrollLeft = target.scrollLeft;
        }
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.setScrollPositionClassName = /**
     * @return {?}
     */
    function () {
        if (this.mixTableBodyNativeElement && this.nzScroll && this.nzScroll.x) {
            if (this.mixTableBodyNativeElement.scrollWidth === this.mixTableBodyNativeElement.clientWidth &&
                this.mixTableBodyNativeElement.scrollWidth !== 0) {
                this.setScrollName();
            }
            else if (this.mixTableBodyNativeElement.scrollLeft === 0) {
                this.setScrollName('left');
            }
            else if (this.mixTableBodyNativeElement.scrollWidth ===
                this.mixTableBodyNativeElement.scrollLeft + this.mixTableBodyNativeElement.clientWidth) {
                this.setScrollName('right');
            }
            else {
                this.setScrollName('middle');
            }
        }
    };
    /**
     * @param {?=} position
     * @return {?}
     */
    NzTableComponent.prototype.setScrollName = /**
     * @param {?=} position
     * @return {?}
     */
    function (position) {
        var _this = this;
        /** @type {?} */
        var prefix = 'ant-table-scroll-position';
        /** @type {?} */
        var classList = ['left', 'right', 'middle'];
        classList.forEach((/**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            _this.renderer.removeClass(_this.tableMainElement.nativeElement, prefix + "-" + name);
        }));
        if (position) {
            this.renderer.addClass(this.tableMainElement.nativeElement, prefix + "-" + position);
        }
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.fitScrollBar = /**
     * @return {?}
     */
    function () {
        if (this.nzScroll.y) {
            /** @type {?} */
            var scrollbarWidth = measureScrollbar('vertical');
            /** @type {?} */
            var scrollbarWidthOfHeader = measureScrollbar('horizontal', 'ant-table');
            // Add negative margin bottom for scroll bar overflow bug
            if (scrollbarWidthOfHeader > 0) {
                this.headerBottomStyle = {
                    marginBottom: "-" + scrollbarWidthOfHeader + "px",
                    paddingBottom: '0px',
                    overflowX: 'scroll',
                    overflowY: "" + (scrollbarWidth === 0 ? 'hidden' : 'scroll')
                };
                this.cdr.markForCheck();
            }
        }
    };
    /**
     * @param {?=} isPageSizeOrDataChange
     * @return {?}
     */
    NzTableComponent.prototype.updateFrontPaginationDataIfNeeded = /**
     * @param {?=} isPageSizeOrDataChange
     * @return {?}
     */
    function (isPageSizeOrDataChange) {
        var _this = this;
        if (isPageSizeOrDataChange === void 0) { isPageSizeOrDataChange = false; }
        /** @type {?} */
        var data = this.nzData || [];
        if (this.nzFrontPagination) {
            this.nzTotal = data.length;
            if (isPageSizeOrDataChange) {
                /** @type {?} */
                var maxPageIndex = Math.ceil(data.length / this.nzPageSize) || 1;
                /** @type {?} */
                var pageIndex_1 = this.nzPageIndex > maxPageIndex ? maxPageIndex : this.nzPageIndex;
                if (pageIndex_1 !== this.nzPageIndex) {
                    this.nzPageIndex = pageIndex_1;
                    Promise.resolve().then((/**
                     * @return {?}
                     */
                    function () { return _this.nzPageIndexChange.emit(pageIndex_1); }));
                }
            }
            data = data.slice((this.nzPageIndex - 1) * this.nzPageSize, this.nzPageIndex * this.nzPageSize);
        }
        this.data = tslib_1.__spread(data);
        this.nzCurrentPageDataChange.emit(this.data);
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Table');
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes.nzScroll) {
            if (changes.nzScroll.currentValue) {
                this.nzScroll = changes.nzScroll.currentValue;
            }
            else {
                this.nzScroll = { x: null, y: null };
            }
            this.fitScrollBar();
            this.setScrollPositionClassName();
        }
        if (changes.nzData) {
            if (this.platform.isBrowser) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.setScrollPositionClassName(); }));
            }
        }
        if (changes.nzPageIndex || changes.nzPageSize || changes.nzFrontPagination || changes.nzData) {
            this.updateFrontPaginationDataIfNeeded(!!(changes.nzPageSize || changes.nzData));
        }
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.platform.isBrowser) {
            return;
        }
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.setScrollPositionClassName(); }));
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            merge(_this.tableHeaderNativeElement ? fromEvent(_this.tableHeaderNativeElement, 'scroll') : EMPTY, _this.mixTableBodyNativeElement ? fromEvent(_this.mixTableBodyNativeElement, 'scroll') : EMPTY)
                .pipe(takeUntil(_this.destroy$))
                .subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.syncScrollTable(data);
            }));
            fromEvent(window, 'resize')
                .pipe(startWith(true), takeUntil(_this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.fitScrollBar();
                _this.setScrollPositionClassName();
            }));
        }));
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.listOfNzThComponent.changes
            .pipe(startWith(true), flatMap((/**
         * @return {?}
         */
        function () {
            return merge.apply(void 0, tslib_1.__spread([_this.listOfNzThComponent.changes], _this.listOfNzThComponent.map((/**
             * @param {?} th
             * @return {?}
             */
            function (th) { return th.nzWidthChange$; }))));
        })), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-table',
                    exportAs: 'nzTable',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<ng-template #renderItemTemplate let-type let-page=\"page\">\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='pre'\"><i nz-icon nzType=\"left\"></i></a>\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='next'\"><i nz-icon nzType=\"right\"></i></a>\n  <a *ngIf=\"type=='page'\">{{ page }}</a>\n</ng-template>\n<ng-template #colGroupTemplate>\n  <colgroup>\n    <col [style.width]=\"width\" [style.minWidth]=\"width\" *ngFor=\"let width of nzWidthConfig\">\n    <ng-container *ngIf=\"(nzWidthConfig && !nzWidthConfig.length) || !nzWidthConfig\">\n      <col [style.width]=\"th.nzWidth\" [style.minWidth]=\"th.nzWidth\" *ngFor=\"let th of listOfNzThComponent\">\n    </ng-container>\n  </colgroup>\n</ng-template>\n<ng-template #headerTemplate>\n  <ng-template [ngTemplateOutlet]=\"colGroupTemplate\"></ng-template>\n  <thead class=\"ant-table-thead\" *ngIf=\"!nzScroll.y\">\n    <ng-template [ngTemplateOutlet]=\"nzTheadComponent?.templateRef\"></ng-template>\n  </thead>\n</ng-template>\n<ng-template #tableInnerTemplate>\n  <div #tableHeaderElement\n    *ngIf=\"nzScroll.y\"\n    [ngStyle]=\"headerBottomStyle\"\n    class=\"ant-table-header ant-table-hide-scrollbar\">\n    <table [class.ant-table-fixed]=\"nzScroll.x\" [style.width]=\"nzScroll.x\">\n      <ng-template [ngTemplateOutlet]=\"colGroupTemplate\"></ng-template>\n      <thead class=\"ant-table-thead\" *ngIf=\"nzScroll.y\">\n        <ng-template [ngTemplateOutlet]=\"nzTheadComponent?.templateRef\"></ng-template>\n      </thead>\n    </table>\n  </div>\n  <div #tableBodyElement *ngIf=\"!nzVirtualScroll;else scrollViewTpl\"\n    class=\"ant-table-body\"\n    [style.maxHeight]=\"nzScroll.y\"\n    [style.overflow-y]=\"nzScroll.y ? 'scroll' : ''\"\n    [style.overflow-x]=\"nzScroll.x ? 'auto' : ''\">\n    <table [class.ant-table-fixed]=\"nzScroll.x\" [style.width]=\"nzScroll.x\">\n      <ng-template [ngIf]=\"!nzVirtualScroll\" [ngTemplateOutlet]=\"headerTemplate\"></ng-template>\n      <ng-content></ng-content>\n    </table>\n  </div>\n  <ng-template #scrollViewTpl>\n    <cdk-virtual-scroll-viewport\n      class=\"ant-table-body\"\n      [hidden]=\"!data.length\"\n      [itemSize]=\"nzVirtualItemSize\"\n      [maxBufferPx]=\"nzVirtualMaxBufferPx\"\n      [minBufferPx]=\"nzVirtualMinBufferPx\"\n      [style.height]=\"nzScroll.y\">\n      <table [class.ant-table-fixed]=\"nzScroll.x\" [style.width]=\"nzScroll.x\">\n        <ng-template [ngIf]=\"nzVirtualScroll\" [ngTemplateOutlet]=\"headerTemplate\"></ng-template>\n        <tbody>\n          <ng-container *cdkVirtualFor=\"let item of data; let i = index; trackBy:nzVirtualForTrackBy;\">\n            <ng-template [ngTemplateOutlet]=\"nzVirtualScrollDirective?.templateRef\" [ngTemplateOutletContext]=\"{$implicit:item, index:i}\"></ng-template>\n          </ng-container>\n        </tbody>\n      </table>\n    </cdk-virtual-scroll-viewport>\n  </ng-template>\n  <div class=\"ant-table-placeholder\" *ngIf=\"data.length === 0 && !nzLoading && !nzTemplateMode\">\n    <nz-embed-empty [nzComponentName]=\"'table'\" [specificContent]=\"nzNoResult\"></nz-embed-empty>\n  </div>\n  <div class=\"ant-table-footer\" *ngIf=\"nzFooter\">\n    <ng-container *nzStringTemplateOutlet=\"nzFooter\">{{ nzFooter }}</ng-container>\n  </div>\n</ng-template>\n<ng-template #paginationTemplate>\n  <nz-pagination *ngIf=\"nzShowPagination && data.length\"\n    [nzInTable]=\"true\"\n    [nzShowSizeChanger]=\"nzShowSizeChanger\"\n    [nzPageSizeOptions]=\"nzPageSizeOptions\"\n    [nzItemRender]=\"itemRender\"\n    [nzShowQuickJumper]=\"nzShowQuickJumper\"\n    [nzHideOnSinglePage]=\"nzHideOnSinglePage\"\n    [nzShowTotal]=\"nzShowTotal\"\n    [nzSize]=\"nzSize === 'default' ? 'default' : 'small'\"\n    [nzPageSize]=\"nzPageSize\"\n    [nzTotal]=\"nzTotal\"\n    [nzSimple]=\"nzSimple\"\n    [nzPageIndex]=\"nzPageIndex\"\n    (nzPageSizeChange)=\"emitPageSizeOrIndex($event,nzPageIndex)\"\n    (nzPageIndexChange)=\"emitPageSizeOrIndex(nzPageSize,$event)\">\n  </nz-pagination>\n</ng-template>\n<nz-spin [nzDelay]=\"nzLoadingDelay\" [nzSpinning]=\"nzLoading\" [nzIndicator]=\"nzLoadingIndicator\">\n  <ng-container *ngIf=\"nzPaginationPosition === 'both' || nzPaginationPosition === 'top'\">\n    <ng-template [ngTemplateOutlet]=\"paginationTemplate\"></ng-template>\n  </ng-container>\n  <div #tableMainElement\n    class=\"ant-table\"\n    [class.ant-table-fixed-header]=\"nzScroll.x || nzScroll.y\"\n    [class.ant-table-bordered]=\"nzBordered\"\n    [class.ant-table-default]=\"nzSize === 'default'\"\n    [class.ant-table-middle]=\"nzSize === 'middle'\"\n    [class.ant-table-small]=\"nzSize === 'small'\">\n    <div class=\"ant-table-title\" *ngIf=\"nzTitle\">\n      <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n    </div>\n    <div class=\"ant-table-content\">\n      <ng-container *ngIf=\"nzScroll.x || nzScroll.y; else tableInnerTemplate\">\n        <div class=\"ant-table-scroll\">\n          <ng-template [ngTemplateOutlet]=\"tableInnerTemplate\"></ng-template>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n  <ng-container *ngIf=\"nzPaginationPosition === 'both' || nzPaginationPosition === 'bottom'\">\n    <ng-template [ngTemplateOutlet]=\"paginationTemplate\"></ng-template>\n  </ng-container>\n</nz-spin>\n",
                    host: {
                        '[class.ant-table-empty]': 'data.length === 0 && !nzTemplateMode'
                    },
                    styles: ["\n      nz-table {\n        display: block;\n      }\n\n      cdk-virtual-scroll-viewport.ant-table-body {\n        overflow-y: scroll;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzTableComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: Renderer2 },
        { type: NgZone },
        { type: ChangeDetectorRef },
        { type: NzI18nService },
        { type: Platform },
        { type: ElementRef }
    ]; };
    NzTableComponent.propDecorators = {
        listOfNzThComponent: [{ type: ContentChildren, args: [NzThComponent, { descendants: true },] }],
        tableHeaderElement: [{ type: ViewChild, args: ['tableHeaderElement', { static: false, read: ElementRef },] }],
        tableBodyElement: [{ type: ViewChild, args: ['tableBodyElement', { static: false, read: ElementRef },] }],
        tableMainElement: [{ type: ViewChild, args: ['tableMainElement', { static: false, read: ElementRef },] }],
        cdkVirtualScrollElement: [{ type: ViewChild, args: [CdkVirtualScrollViewport, { static: false, read: ElementRef },] }],
        cdkVirtualScrollViewport: [{ type: ViewChild, args: [CdkVirtualScrollViewport, { static: false, read: CdkVirtualScrollViewport },] }],
        nzVirtualScrollDirective: [{ type: ContentChild, args: [NzVirtualScrollDirective, { static: false },] }],
        nzSize: [{ type: Input }],
        nzShowTotal: [{ type: Input }],
        nzPageSizeOptions: [{ type: Input }],
        nzVirtualScroll: [{ type: Input }],
        nzVirtualItemSize: [{ type: Input }],
        nzVirtualMaxBufferPx: [{ type: Input }],
        nzVirtualMinBufferPx: [{ type: Input }],
        nzVirtualForTrackBy: [{ type: Input }],
        nzLoadingDelay: [{ type: Input }],
        nzLoadingIndicator: [{ type: Input }],
        nzTotal: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzFooter: [{ type: Input }],
        nzNoResult: [{ type: Input }],
        nzWidthConfig: [{ type: Input }],
        nzPageIndex: [{ type: Input }],
        nzPageSize: [{ type: Input }],
        nzData: [{ type: Input }],
        nzPaginationPosition: [{ type: Input }],
        nzScroll: [{ type: Input }],
        nzItemRender: [{ type: Input }],
        itemRenderChild: [{ type: ViewChild, args: ['renderItemTemplate', { static: true },] }],
        nzFrontPagination: [{ type: Input }],
        nzTemplateMode: [{ type: Input }],
        nzBordered: [{ type: Input }],
        nzShowPagination: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzShowSizeChanger: [{ type: Input }],
        nzHideOnSinglePage: [{ type: Input }],
        nzShowQuickJumper: [{ type: Input }],
        nzSimple: [{ type: Input }],
        nzPageSizeChange: [{ type: Output }],
        nzPageIndexChange: [{ type: Output }],
        nzCurrentPageDataChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
        tslib_1.__metadata("design:type", String)
    ], NzTableComponent.prototype, "nzSize", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzVirtualScroll", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzVirtualItemSize", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzVirtualMaxBufferPx", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzVirtualMinBufferPx", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzFrontPagination", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzTemplateMode", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTableComponent.prototype, "nzBordered", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzShowPagination", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzLoading", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTableComponent.prototype, "nzShowSizeChanger", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTableComponent.prototype, "nzHideOnSinglePage", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTableComponent.prototype, "nzShowQuickJumper", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTableComponent.prototype, "nzSimple", void 0);
    return NzTableComponent;
}());
export { NzTableComponent };
if (false) {
    /**
     * public data for ngFor tr
     * @type {?}
     */
    NzTableComponent.prototype.data;
    /** @type {?} */
    NzTableComponent.prototype.locale;
    /** @type {?} */
    NzTableComponent.prototype.nzTheadComponent;
    /** @type {?} */
    NzTableComponent.prototype.lastScrollLeft;
    /** @type {?} */
    NzTableComponent.prototype.headerBottomStyle;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.destroy$;
    /** @type {?} */
    NzTableComponent.prototype.listOfNzThComponent;
    /** @type {?} */
    NzTableComponent.prototype.tableHeaderElement;
    /** @type {?} */
    NzTableComponent.prototype.tableBodyElement;
    /** @type {?} */
    NzTableComponent.prototype.tableMainElement;
    /** @type {?} */
    NzTableComponent.prototype.cdkVirtualScrollElement;
    /** @type {?} */
    NzTableComponent.prototype.cdkVirtualScrollViewport;
    /** @type {?} */
    NzTableComponent.prototype.nzVirtualScrollDirective;
    /** @type {?} */
    NzTableComponent.prototype.nzSize;
    /** @type {?} */
    NzTableComponent.prototype.nzShowTotal;
    /** @type {?} */
    NzTableComponent.prototype.nzPageSizeOptions;
    /** @type {?} */
    NzTableComponent.prototype.nzVirtualScroll;
    /** @type {?} */
    NzTableComponent.prototype.nzVirtualItemSize;
    /** @type {?} */
    NzTableComponent.prototype.nzVirtualMaxBufferPx;
    /** @type {?} */
    NzTableComponent.prototype.nzVirtualMinBufferPx;
    /** @type {?} */
    NzTableComponent.prototype.nzVirtualForTrackBy;
    /** @type {?} */
    NzTableComponent.prototype.nzLoadingDelay;
    /** @type {?} */
    NzTableComponent.prototype.nzLoadingIndicator;
    /** @type {?} */
    NzTableComponent.prototype.nzTotal;
    /** @type {?} */
    NzTableComponent.prototype.nzTitle;
    /** @type {?} */
    NzTableComponent.prototype.nzFooter;
    /** @type {?} */
    NzTableComponent.prototype.nzNoResult;
    /** @type {?} */
    NzTableComponent.prototype.nzWidthConfig;
    /** @type {?} */
    NzTableComponent.prototype.nzPageIndex;
    /** @type {?} */
    NzTableComponent.prototype.nzPageSize;
    /** @type {?} */
    NzTableComponent.prototype.nzData;
    /** @type {?} */
    NzTableComponent.prototype.nzPaginationPosition;
    /** @type {?} */
    NzTableComponent.prototype.nzScroll;
    /** @type {?} */
    NzTableComponent.prototype.nzItemRender;
    /** @type {?} */
    NzTableComponent.prototype.itemRenderChild;
    /** @type {?} */
    NzTableComponent.prototype.nzFrontPagination;
    /** @type {?} */
    NzTableComponent.prototype.nzTemplateMode;
    /** @type {?} */
    NzTableComponent.prototype.nzBordered;
    /** @type {?} */
    NzTableComponent.prototype.nzShowPagination;
    /** @type {?} */
    NzTableComponent.prototype.nzLoading;
    /** @type {?} */
    NzTableComponent.prototype.nzShowSizeChanger;
    /** @type {?} */
    NzTableComponent.prototype.nzHideOnSinglePage;
    /** @type {?} */
    NzTableComponent.prototype.nzShowQuickJumper;
    /** @type {?} */
    NzTableComponent.prototype.nzSimple;
    /** @type {?} */
    NzTableComponent.prototype.nzPageSizeChange;
    /** @type {?} */
    NzTableComponent.prototype.nzPageIndexChange;
    /** @type {?} */
    NzTableComponent.prototype.nzCurrentPageDataChange;
    /** @type {?} */
    NzTableComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xFLE9BQU8sRUFHTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFJTixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFFVCxXQUFXLEVBRVgsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9ELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLFdBQVcsRUFDWCxlQUFlLEVBRWYsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7SUFFbkUsd0JBQXdCLEdBQUcsT0FBTzs7OztBQUV4QztJQWdNRSwwQkFDUyxlQUFnQyxFQUMvQixRQUFtQixFQUNuQixNQUFjLEVBQ2QsR0FBc0IsRUFDdEIsSUFBbUIsRUFDbkIsUUFBa0IsRUFDMUIs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K0JBQThCOzs7OztJQUM5QixnQ0FBMkI7Ozs7O0lBQzNCLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVHJhY2tCeUZ1bmN0aW9uLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgRU1QVFksIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZsYXRNYXAsIHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBtZWFzdXJlU2Nyb2xsYmFyLFxuICBJbnB1dEJvb2xlYW4sXG4gIElucHV0TnVtYmVyLFxuICBOekNvbmZpZ1NlcnZpY2UsXG4gIE56U2l6ZU1EU1R5cGUsXG4gIFdpdGhDb25maWdcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9wYWdpbmF0aW9uJztcblxuaW1wb3J0IHsgTnpUaENvbXBvbmVudCB9IGZyb20gJy4vbnotdGguY29tcG9uZW50JztcbmltcG9ydCB7IE56VGhlYWRDb21wb25lbnQgfSBmcm9tICcuL256LXRoZWFkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelZpcnR1YWxTY3JvbGxEaXJlY3RpdmUgfSBmcm9tICcuL256LXZpcnR1YWwtc2Nyb2xsLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICd0YWJsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXRhYmxlJyxcbiAgZXhwb3J0QXM6ICduelRhYmxlJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtZW1wdHldJzogJ2RhdGEubGVuZ3RoID09PSAwICYmICFuelRlbXBsYXRlTW9kZSdcbiAgfSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgbnotdGFibGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0LmFudC10YWJsZS1ib2R5IHtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcbmV4cG9ydCBjbGFzcyBOelRhYmxlQ29tcG9uZW50PFQgPSBhbnk+IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIC8qKiBwdWJsaWMgZGF0YSBmb3IgbmdGb3IgdHIgKi9cbiAgZGF0YTogVFtdID0gW107XG4gIGxvY2FsZTogYW55ID0ge307IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gIG56VGhlYWRDb21wb25lbnQ6IE56VGhlYWRDb21wb25lbnQ7XG4gIGxhc3RTY3JvbGxMZWZ0ID0gMDtcbiAgaGVhZGVyQm90dG9tU3R5bGUgPSB7fTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpUaENvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZOelRoQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpUaENvbXBvbmVudD47XG4gIEBWaWV3Q2hpbGQoJ3RhYmxlSGVhZGVyRWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogRWxlbWVudFJlZiB9KSB0YWJsZUhlYWRlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RhYmxlQm9keUVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgdGFibGVCb2R5RWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGFibGVNYWluRWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogRWxlbWVudFJlZiB9KSB0YWJsZU1haW5FbGVtZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBFbGVtZW50UmVmIH0pIGNka1ZpcnR1YWxTY3JvbGxFbGVtZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgfSlcbiAgY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0OiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQ7XG4gIEBDb250ZW50Q2hpbGQoTnpWaXJ0dWFsU2Nyb2xsRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSkgbnpWaXJ0dWFsU2Nyb2xsRGlyZWN0aXZlOiBOelZpcnR1YWxTY3JvbGxEaXJlY3RpdmU7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2RlZmF1bHQnKSBuelNpemU6IE56U2l6ZU1EU1R5cGU7XG4gIEBJbnB1dCgpIG56U2hvd1RvdGFsOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogbnVtYmVyOyByYW5nZTogW251bWJlciwgbnVtYmVyXSB9PjtcbiAgQElucHV0KCkgbnpQYWdlU2l6ZU9wdGlvbnMgPSBbMTAsIDIwLCAzMCwgNDAsIDUwXTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VmlydHVhbFNjcm9sbCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelZpcnR1YWxJdGVtU2l6ZSA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56VmlydHVhbE1heEJ1ZmZlclB4ID0gMjAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelZpcnR1YWxNaW5CdWZmZXJQeCA9IDEwMDtcbiAgQElucHV0KCkgbnpWaXJ0dWFsRm9yVHJhY2tCeTogVHJhY2tCeUZ1bmN0aW9uPFQ+IHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBuekxvYWRpbmdEZWxheSA9IDA7XG4gIEBJbnB1dCgpIG56TG9hZGluZ0luZGljYXRvcjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56VG90YWwgPSAwO1xuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpGb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuek5vUmVzdWx0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpXaWR0aENvbmZpZzogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgbnpQYWdlSW5kZXggPSAxO1xuICBASW5wdXQoKSBuelBhZ2VTaXplID0gMTA7XG4gIEBJbnB1dCgpIG56RGF0YTogVFtdID0gW107XG4gIEBJbnB1dCgpIG56UGFnaW5hdGlvblBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nIHwgJ2JvdGgnID0gJ2JvdHRvbSc7XG4gIEBJbnB1dCgpIG56U2Nyb2xsOiB7IHg/OiBzdHJpbmcgfCBudWxsOyB5Pzogc3RyaW5nIHwgbnVsbCB9ID0geyB4OiBudWxsLCB5OiBudWxsIH07XG5cbiAgQElucHV0KCkgbnpJdGVtUmVuZGVyOiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uSXRlbVJlbmRlckNvbnRleHQ+O1xuICBAVmlld0NoaWxkKCdyZW5kZXJJdGVtVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBpdGVtUmVuZGVyQ2hpbGQ6IFRlbXBsYXRlUmVmPFBhZ2luYXRpb25JdGVtUmVuZGVyQ29udGV4dD47XG5cbiAgZ2V0IGl0ZW1SZW5kZXIoKTogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0PiB7XG4gICAgcmV0dXJuIHRoaXMubnpJdGVtUmVuZGVyIHx8IHRoaXMuaXRlbVJlbmRlckNoaWxkO1xuICB9XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RnJvbnRQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VGVtcGxhdGVNb2RlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIEBJbnB1dEJvb2xlYW4oKSBuekJvcmRlcmVkOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93UGFnaW5hdGlvbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56U2hvd1NpemVDaGFuZ2VyOiBib29sZWFuO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBASW5wdXRCb29sZWFuKCkgbnpIaWRlT25TaW5nbGVQYWdlOiBib29sZWFuO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBASW5wdXRCb29sZWFuKCkgbnpTaG93UXVpY2tKdW1wZXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIEBJbnB1dEJvb2xlYW4oKSBuelNpbXBsZTogYm9vbGVhbjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UGFnZVNpemVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpQYWdlSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekN1cnJlbnRQYWdlRGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueVtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBnZXQgdGFibGVCb2R5TmF0aXZlRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMudGFibGVCb2R5RWxlbWVudCAmJiB0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGdldCB0YWJsZUhlYWRlck5hdGl2ZUVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLnRhYmxlSGVhZGVyRWxlbWVudCAmJiB0aGlzLnRhYmxlSGVhZGVyRWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgZ2V0IGNka1ZpcnR1YWxTY3JvbGxOYXRpdmVFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5jZGtWaXJ0dWFsU2Nyb2xsRWxlbWVudCAmJiB0aGlzLmNka1ZpcnR1YWxTY3JvbGxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBnZXQgbWl4VGFibGVCb2R5TmF0aXZlRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMudGFibGVCb2R5TmF0aXZlRWxlbWVudCB8fCB0aGlzLmNka1ZpcnR1YWxTY3JvbGxOYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgZW1pdFBhZ2VTaXplT3JJbmRleChzaXplOiBudW1iZXIsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelBhZ2VTaXplICE9PSBzaXplIHx8IHRoaXMubnpQYWdlSW5kZXggIT09IGluZGV4KSB7XG4gICAgICBpZiAodGhpcy5uelBhZ2VTaXplICE9PSBzaXplKSB7XG4gICAgICAgIHRoaXMubnpQYWdlU2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMubnpQYWdlU2l6ZUNoYW5nZS5lbWl0KHRoaXMubnpQYWdlU2l6ZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5uelBhZ2VJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgdGhpcy5uelBhZ2VJbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLm56UGFnZUluZGV4Q2hhbmdlLmVtaXQodGhpcy5uelBhZ2VJbmRleCk7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZUZyb250UGFnaW5hdGlvbkRhdGFJZk5lZWRlZCh0aGlzLm56UGFnZVNpemUgIT09IHNpemUpO1xuICAgIH1cbiAgfVxuXG4gIHN5bmNTY3JvbGxUYWJsZShlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGUuY3VycmVudFRhcmdldCA9PT0gZS50YXJnZXQpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHRhcmdldC5zY3JvbGxMZWZ0ICE9PSB0aGlzLmxhc3RTY3JvbGxMZWZ0ICYmIHRoaXMubnpTY3JvbGwgJiYgdGhpcy5uelNjcm9sbC54KSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHRoaXMubWl4VGFibGVCb2R5TmF0aXZlRWxlbWVudCAmJiB0aGlzLnRhYmxlSGVhZGVyTmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMudGFibGVIZWFkZXJOYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPSB0YXJnZXQuc2Nyb2xsTGVmdDtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgPT09IHRoaXMudGFibGVIZWFkZXJOYXRpdmVFbGVtZW50ICYmIHRoaXMubWl4VGFibGVCb2R5TmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMubWl4VGFibGVCb2R5TmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gdGFyZ2V0LnNjcm9sbExlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTY3JvbGxQb3NpdGlvbkNsYXNzTmFtZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5sYXN0U2Nyb2xsTGVmdCA9IHRhcmdldC5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgfVxuXG4gIHNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1peFRhYmxlQm9keU5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5uelNjcm9sbCAmJiB0aGlzLm56U2Nyb2xsLngpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5taXhUYWJsZUJvZHlOYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoID09PSB0aGlzLm1peFRhYmxlQm9keU5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggJiZcbiAgICAgICAgdGhpcy5taXhUYWJsZUJvZHlOYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoICE9PSAwXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxOYW1lKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubWl4VGFibGVCb2R5TmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID09PSAwKSB7XG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsTmFtZSgnbGVmdCcpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgdGhpcy5taXhUYWJsZUJvZHlOYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoID09PVxuICAgICAgICB0aGlzLm1peFRhYmxlQm9keU5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCArIHRoaXMubWl4VGFibGVCb2R5TmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsTmFtZSgncmlnaHQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsTmFtZSgnbWlkZGxlJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0U2Nyb2xsTmFtZShwb3NpdGlvbj86IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHByZWZpeCA9ICdhbnQtdGFibGUtc2Nyb2xsLXBvc2l0aW9uJztcbiAgICBjb25zdCBjbGFzc0xpc3QgPSBbJ2xlZnQnLCAncmlnaHQnLCAnbWlkZGxlJ107XG4gICAgY2xhc3NMaXN0LmZvckVhY2gobmFtZSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMudGFibGVNYWluRWxlbWVudC5uYXRpdmVFbGVtZW50LCBgJHtwcmVmaXh9LSR7bmFtZX1gKTtcbiAgICB9KTtcbiAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy50YWJsZU1haW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGAke3ByZWZpeH0tJHtwb3NpdGlvbn1gKTtcbiAgICB9XG4gIH1cblxuICBmaXRTY3JvbGxCYXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpTY3JvbGwueSkge1xuICAgICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBtZWFzdXJlU2Nyb2xsYmFyKCd2ZXJ0aWNhbCcpO1xuICAgICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGhPZkhlYWRlciA9IG1lYXN1cmVTY3JvbGxiYXIoJ2hvcml6b250YWwnLCAnYW50LXRhYmxlJyk7XG4gICAgICAvLyBBZGQgbmVnYXRpdmUgbWFyZ2luIGJvdHRvbSBmb3Igc2Nyb2xsIGJhciBvdmVyZmxvdyBidWdcbiAgICAgIGlmIChzY3JvbGxiYXJXaWR0aE9mSGVhZGVyID4gMCkge1xuICAgICAgICB0aGlzLmhlYWRlckJvdHRvbVN0eWxlID0ge1xuICAgICAgICAgIG1hcmdpbkJvdHRvbTogYC0ke3Njcm9sbGJhcldpZHRoT2ZIZWFkZXJ9cHhgLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcwcHgnLFxuICAgICAgICAgIG92ZXJmbG93WDogJ3Njcm9sbCcsXG4gICAgICAgICAgb3ZlcmZsb3dZOiBgJHtzY3JvbGxiYXJXaWR0aCA9PT0gMCA/ICdoaWRkZW4nIDogJ3Njcm9sbCd9YFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVGcm9udFBhZ2luYXRpb25EYXRhSWZOZWVkZWQoaXNQYWdlU2l6ZU9yRGF0YUNoYW5nZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLm56RGF0YSB8fCBbXTtcbiAgICBpZiAodGhpcy5uekZyb250UGFnaW5hdGlvbikge1xuICAgICAgdGhpcy5uelRvdGFsID0gZGF0YS5sZW5ndGg7XG4gICAgICBpZiAoaXNQYWdlU2l6ZU9yRGF0YUNoYW5nZSkge1xuICAgICAgICBjb25zdCBtYXhQYWdlSW5kZXggPSBNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyB0aGlzLm56UGFnZVNpemUpIHx8IDE7XG4gICAgICAgIGNvbnN0IHBhZ2VJbmRleCA9IHRoaXMubnpQYWdlSW5kZXggPiBtYXhQYWdlSW5kZXggPyBtYXhQYWdlSW5kZXggOiB0aGlzLm56UGFnZUluZGV4O1xuICAgICAgICBpZiAocGFnZUluZGV4ICE9PSB0aGlzLm56UGFnZUluZGV4KSB7XG4gICAgICAgICAgdGhpcy5uelBhZ2VJbmRleCA9IHBhZ2VJbmRleDtcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMubnpQYWdlSW5kZXhDaGFuZ2UuZW1pdChwYWdlSW5kZXgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGF0YSA9IGRhdGEuc2xpY2UoKHRoaXMubnpQYWdlSW5kZXggLSAxKSAqIHRoaXMubnpQYWdlU2l6ZSwgdGhpcy5uelBhZ2VJbmRleCAqIHRoaXMubnpQYWdlU2l6ZSk7XG4gICAgfVxuICAgIHRoaXMuZGF0YSA9IFsuLi5kYXRhXTtcbiAgICB0aGlzLm56Q3VycmVudFBhZ2VEYXRhQ2hhbmdlLmVtaXQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXRhYmxlLXdyYXBwZXInKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUYWJsZScpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpTY3JvbGwpIHtcbiAgICAgIGlmIChjaGFuZ2VzLm56U2Nyb2xsLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLm56U2Nyb2xsID0gY2hhbmdlcy5uelNjcm9sbC5jdXJyZW50VmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm56U2Nyb2xsID0geyB4OiBudWxsLCB5OiBudWxsIH07XG4gICAgICB9XG4gICAgICB0aGlzLmZpdFNjcm9sbEJhcigpO1xuICAgICAgdGhpcy5zZXRTY3JvbGxQb3NpdGlvbkNsYXNzTmFtZSgpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uekRhdGEpIHtcbiAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0U2Nyb2xsUG9zaXRpb25DbGFzc05hbWUoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm56UGFnZUluZGV4IHx8IGNoYW5nZXMubnpQYWdlU2l6ZSB8fCBjaGFuZ2VzLm56RnJvbnRQYWdpbmF0aW9uIHx8IGNoYW5nZXMubnpEYXRhKSB7XG4gICAgICB0aGlzLnVwZGF0ZUZyb250UGFnaW5hdGlvbkRhdGFJZk5lZWRlZCghIShjaGFuZ2VzLm56UGFnZVNpemUgfHwgY2hhbmdlcy5uekRhdGEpKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0U2Nyb2xsUG9zaXRpb25DbGFzc05hbWUoKSk7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgbWVyZ2U8TW91c2VFdmVudD4oXG4gICAgICAgIHRoaXMudGFibGVIZWFkZXJOYXRpdmVFbGVtZW50ID8gZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KHRoaXMudGFibGVIZWFkZXJOYXRpdmVFbGVtZW50LCAnc2Nyb2xsJykgOiBFTVBUWSxcbiAgICAgICAgdGhpcy5taXhUYWJsZUJvZHlOYXRpdmVFbGVtZW50ID8gZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KHRoaXMubWl4VGFibGVCb2R5TmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcpIDogRU1QVFlcbiAgICAgIClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5zeW5jU2Nyb2xsVGFibGUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgZnJvbUV2ZW50PFVJRXZlbnQ+KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN0YXJ0V2l0aCh0cnVlKSxcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmZpdFNjcm9sbEJhcigpO1xuICAgICAgICAgIHRoaXMuc2V0U2Nyb2xsUG9zaXRpb25DbGFzc05hbWUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZOelRoQ29tcG9uZW50LmNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgodHJ1ZSksXG4gICAgICAgIGZsYXRNYXAoKCkgPT5cbiAgICAgICAgICBtZXJnZSh0aGlzLmxpc3RPZk56VGhDb21wb25lbnQuY2hhbmdlcywgLi4udGhpcy5saXN0T2ZOelRoQ29tcG9uZW50Lm1hcCh0aCA9PiB0aC5ueldpZHRoQ2hhbmdlJCkpXG4gICAgICAgICksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==