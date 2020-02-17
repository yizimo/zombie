import { __decorate, __metadata } from 'tslib';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { DOCUMENT, CommonModule } from '@angular/common';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, Inject, ChangeDetectorRef, Input, Output, NgModule } from '@angular/core';
import { fadeMotion, NzConfigService, NzScrollService, WithConfig, InputNumber, SCROLL_SERVICE_PROVIDER } from 'ng-zorro-antd/core';
import { fromEvent } from 'rxjs';
import { throttleTime, distinctUntilChanged } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: nz-back-top.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'backTop';
var NzBackTopComponent = /** @class */ (function () {
    function NzBackTopComponent(nzConfigService, scrollSrv, doc, platform, cd) {
        this.nzConfigService = nzConfigService;
        this.scrollSrv = scrollSrv;
        this.doc = doc;
        this.platform = platform;
        this.cd = cd;
        this.scroll$ = null;
        this.target = null;
        this.visible = false;
        this.nzClick = new EventEmitter();
    }
    Object.defineProperty(NzBackTopComponent.prototype, "nzTarget", {
        set: /**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            this.target = typeof el === 'string' ? this.doc.querySelector(el) : el;
            this.registerScrollEvent();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzBackTopComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.scroll$) {
            this.registerScrollEvent();
        }
    };
    /**
     * @return {?}
     */
    NzBackTopComponent.prototype.clickBackTop = /**
     * @return {?}
     */
    function () {
        this.scrollSrv.scrollTo(this.getTarget(), 0);
        this.nzClick.emit(true);
    };
    /**
     * @private
     * @return {?}
     */
    NzBackTopComponent.prototype.getTarget = /**
     * @private
     * @return {?}
     */
    function () {
        return this.target || window;
    };
    /**
     * @private
     * @return {?}
     */
    NzBackTopComponent.prototype.handleScroll = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.visible === this.scrollSrv.getScroll(this.getTarget()) > this.nzVisibilityHeight) {
            return;
        }
        this.visible = !this.visible;
        this.cd.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    NzBackTopComponent.prototype.removeListen = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.scroll$) {
            this.scroll$.unsubscribe();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzBackTopComponent.prototype.registerScrollEvent = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.platform.isBrowser) {
            return;
        }
        this.removeListen();
        this.handleScroll();
        this.scroll$ = fromEvent(this.getTarget(), 'scroll')
            .pipe(throttleTime(50), distinctUntilChanged())
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.handleScroll(); }));
    };
    /**
     * @return {?}
     */
    NzBackTopComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeListen();
    };
    NzBackTopComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-back-top',
                    exportAs: 'nzBackTop',
                    animations: [fadeMotion],
                    template: "<div class=\"ant-back-top\" (click)=\"clickBackTop()\" @fadeMotion *ngIf=\"visible\">\n  <ng-template #defaultContent>\n    <div class=\"ant-back-top-content\">\n      <div class=\"ant-back-top-icon\"></div>\n    </div>\n  </ng-template>\n  <ng-template [ngTemplateOutlet]=\"nzTemplate || defaultContent\"></ng-template>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    NzBackTopComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: NzScrollService },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Platform },
        { type: ChangeDetectorRef }
    ]; };
    NzBackTopComponent.propDecorators = {
        nzTemplate: [{ type: Input }],
        nzVisibilityHeight: [{ type: Input }],
        nzTarget: [{ type: Input }],
        nzClick: [{ type: Output }]
    };
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 400), InputNumber(),
        __metadata("design:type", Number)
    ], NzBackTopComponent.prototype, "nzVisibilityHeight", void 0);
    return NzBackTopComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.scroll$;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.target;
    /** @type {?} */
    NzBackTopComponent.prototype.visible;
    /** @type {?} */
    NzBackTopComponent.prototype.nzTemplate;
    /** @type {?} */
    NzBackTopComponent.prototype.nzVisibilityHeight;
    /** @type {?} */
    NzBackTopComponent.prototype.nzClick;
    /** @type {?} */
    NzBackTopComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.scrollSrv;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.doc;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-back-top.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzBackTopModule = /** @class */ (function () {
    function NzBackTopModule() {
    }
    NzBackTopModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzBackTopComponent],
                    exports: [NzBackTopComponent],
                    imports: [CommonModule, PlatformModule],
                    providers: [SCROLL_SERVICE_PROVIDER]
                },] }
    ];
    return NzBackTopModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-back-top.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzBackTopComponent, NzBackTopModule };
//# sourceMappingURL=ng-zorro-antd-back-top.js.map
