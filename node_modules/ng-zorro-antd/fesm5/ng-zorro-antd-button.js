import { __decorate, __metadata } from 'tslib';
import { ContentObserver, ObserversModule } from '@angular/cdk/observers';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, ChangeDetectorRef, Renderer2, NgZone, Optional, Inject, ViewChild, ContentChildren, HostBinding, Input, NgModule } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { NzWaveDirective, isEmpty, findFirstNotEmptyNode, findLastNotEmptyNode, NzUpdateHostClassService, NzConfigService, NZ_WAVE_GLOBAL_CONFIG, InputBoolean, WithConfig, NzWaveModule } from 'ng-zorro-antd/core';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { Subject } from 'rxjs';
import { takeUntil, startWith } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: nz-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'button';
var NzButtonComponent = /** @class */ (function () {
    function NzButtonComponent(elementRef, cdr, renderer, contentObserver, nzUpdateHostClassService, ngZone, nzConfigService, waveConfig, animationType) {
        var _this = this;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.contentObserver = contentObserver;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.ngZone = ngZone;
        this.nzConfigService = nzConfigService;
        this.waveConfig = waveConfig;
        this.animationType = animationType;
        this.nzWave = new NzWaveDirective(this.ngZone, this.elementRef, this.waveConfig, this.animationType);
        this.nzBlock = false;
        this.nzGhost = false;
        this.nzSearch = false;
        this.nzLoading = false;
        this.nzType = 'default';
        this.nzShape = null;
        this.el = this.elementRef.nativeElement;
        this.isInDropdown = false;
        this.iconOnly = false;
        this.destroy$ = new Subject();
        this.renderer.addClass(elementRef.nativeElement, 'ant-btn');
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.setClassMap();
            _this.cdr.markForCheck();
        }));
    }
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289 */
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    NzButtonComponent.prototype.setClassMap = /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefixCls = 'ant-btn';
        /** @type {?} */
        var sizeMap = { large: 'lg', small: 'sm' };
        this.nzUpdateHostClassService.updateHostClass(this.el, (_a = {},
            _a[prefixCls + "-" + this.nzType] = this.nzType,
            _a[prefixCls + "-" + this.nzShape] = this.nzShape,
            _a[prefixCls + "-" + sizeMap[this.nzSize]] = sizeMap[this.nzSize],
            _a[prefixCls + "-loading"] = this.nzLoading,
            _a[prefixCls + "-icon-only"] = this.iconOnly && !this.nzSearch && !this.isInDropdown,
            _a[prefixCls + "-background-ghost"] = this.nzGhost,
            _a[prefixCls + "-block"] = this.nzBlock,
            _a["ant-input-search-button"] = this.nzSearch,
            _a));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzButtonComponent.prototype.updateIconDisplay = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.iconElement) {
            this.renderer.setStyle(this.iconElement, 'display', value ? 'none' : 'inline-block');
        }
    };
    /**
     * @return {?}
     */
    NzButtonComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hasIcon = this.listOfIconElement && this.listOfIconElement.length;
        if (hasIcon) {
            this.moveIcon();
        }
        this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
        /** https://github.com/angular/angular/issues/12530 **/
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
            this.iconOnly = !!hasIcon;
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
            this.iconOnly = false;
        }
        this.setClassMap();
        this.updateIconDisplay(this.nzLoading);
        if (!((/** @type {?} */ (this.cdr))).destroyed) {
            this.cdr.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    NzButtonComponent.prototype.moveIcon = /**
     * @return {?}
     */
    function () {
        if (this.listOfIconElement && this.listOfIconElement.length) {
            /** @type {?} */
            var firstChildElement = findFirstNotEmptyNode(this.contentElement.nativeElement);
            /** @type {?} */
            var lastChildElement = findLastNotEmptyNode(this.contentElement.nativeElement);
            if (firstChildElement && firstChildElement === this.listOfIconElement.first.nativeElement) {
                this.renderer.insertBefore(this.el, firstChildElement, this.contentElement.nativeElement);
                this.iconElement = (/** @type {?} */ (firstChildElement));
            }
            else if (lastChildElement && lastChildElement === this.listOfIconElement.last.nativeElement) {
                this.renderer.appendChild(this.el, lastChildElement);
            }
        }
    };
    /**
     * @return {?}
     */
    NzButtonComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.contentObserver
            .observe(this.contentElement)
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            // https://github.com/NG-ZORRO/ng-zorro-antd/issues/3079
            Promise.resolve().then((/**
             * @return {?}
             */
            function () { return _this.checkContent(); }));
        }));
    };
    /**
     * @return {?}
     */
    NzButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.nzWave.ngOnInit();
    };
    /**
     * @return {?}
     */
    NzButtonComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.nzWave.ngOnDestroy();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzButtonComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzBlock ||
            changes.nzGhost ||
            changes.nzSearch ||
            changes.nzType ||
            changes.nzShape ||
            changes.nzSize ||
            changes.nzLoading) {
            this.setClassMap();
        }
        if (changes.nzLoading) {
            this.updateIconDisplay(this.nzLoading);
        }
        if (changes.nzType && changes.nzType.currentValue === 'link') {
            this.nzWave.disable();
        }
        else {
            this.nzWave.enable();
        }
    };
    NzButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-button]',
                    exportAs: 'nzButton',
                    providers: [NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<i nz-icon nzType=\"loading\" *ngIf=\"nzLoading\"></i>\n<span #contentElement><ng-content></ng-content></span>"
                }] }
    ];
    /** @nocollapse */
    NzButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ContentObserver },
        { type: NzUpdateHostClassService },
        { type: NgZone },
        { type: NzConfigService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_WAVE_GLOBAL_CONFIG,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ]; };
    NzButtonComponent.propDecorators = {
        contentElement: [{ type: ViewChild, args: ['contentElement', { static: true },] }],
        listOfIconElement: [{ type: ContentChildren, args: [NzIconDirective, { read: ElementRef },] }],
        nzWave: [{ type: HostBinding, args: ['attr.nz-wave',] }],
        nzBlock: [{ type: Input }],
        nzGhost: [{ type: Input }],
        nzSearch: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzType: [{ type: Input }],
        nzShape: [{ type: Input }],
        nzSize: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzButtonComponent.prototype, "nzBlock", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzButtonComponent.prototype, "nzGhost", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzButtonComponent.prototype, "nzSearch", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzButtonComponent.prototype, "nzLoading", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
        __metadata("design:type", String)
    ], NzButtonComponent.prototype, "nzSize", void 0);
    return NzButtonComponent;
}());
if (false) {
    /** @type {?} */
    NzButtonComponent.prototype.contentElement;
    /** @type {?} */
    NzButtonComponent.prototype.listOfIconElement;
    /** @type {?} */
    NzButtonComponent.prototype.nzWave;
    /** @type {?} */
    NzButtonComponent.prototype.nzBlock;
    /** @type {?} */
    NzButtonComponent.prototype.nzGhost;
    /** @type {?} */
    NzButtonComponent.prototype.nzSearch;
    /** @type {?} */
    NzButtonComponent.prototype.nzLoading;
    /** @type {?} */
    NzButtonComponent.prototype.nzType;
    /** @type {?} */
    NzButtonComponent.prototype.nzShape;
    /** @type {?} */
    NzButtonComponent.prototype.nzSize;
    /** @type {?} */
    NzButtonComponent.prototype.el;
    /** @type {?} */
    NzButtonComponent.prototype.isInDropdown;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.iconElement;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.iconOnly;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.contentObserver;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.ngZone;
    /** @type {?} */
    NzButtonComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.waveConfig;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.animationType;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-button-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzButtonGroupComponent = /** @class */ (function () {
    function NzButtonGroupComponent(nzUpdateHostClassService, elementRef) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.isInDropdown = false;
    }
    Object.defineProperty(NzButtonGroupComponent.prototype, "nzSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzButtonGroupComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefixCls = 'ant-btn-group';
        /** @type {?} */
        var classMap = (_a = {},
            _a[prefixCls] = true,
            _a["ant-dropdown-button"] = this.isInDropdown,
            _a[prefixCls + "-lg"] = this.nzSize === 'large',
            _a[prefixCls + "-sm"] = this.nzSize === 'small',
            _a);
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, classMap);
    };
    /**
     * @return {?}
     */
    NzButtonGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    NzButtonGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-button-group',
                    exportAs: 'nzButtonGroup',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    providers: [NzUpdateHostClassService],
                    template: "<ng-content></ng-content>\n"
                }] }
    ];
    /** @nocollapse */
    NzButtonGroupComponent.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef }
    ]; };
    NzButtonGroupComponent.propDecorators = {
        nzSize: [{ type: Input }]
    };
    return NzButtonGroupComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzButtonGroupComponent.prototype._size;
    /** @type {?} */
    NzButtonGroupComponent.prototype.isInDropdown;
    /**
     * @type {?}
     * @private
     */
    NzButtonGroupComponent.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzButtonGroupComponent.prototype.elementRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-button.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzButtonModule = /** @class */ (function () {
    function NzButtonModule() {
    }
    NzButtonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzButtonComponent, NzButtonGroupComponent],
                    exports: [NzButtonComponent, NzButtonGroupComponent],
                    imports: [CommonModule, ObserversModule, NzWaveModule, NzIconModule]
                },] }
    ];
    return NzButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-button.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzButtonComponent, NzButtonGroupComponent, NzButtonModule };
//# sourceMappingURL=ng-zorro-antd-button.js.map
