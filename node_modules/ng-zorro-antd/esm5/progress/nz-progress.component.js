/**
 * @fileoverview added by tsickle
 * Generated from: nz-progress.component.ts
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
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { isNotNil, InputNumber, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { handleCircleGradient, handleLinearGradient } from './nz-progress-utils';
/** @type {?} */
var gradientIdSeed = 0;
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'progress';
/** @type {?} */
var statusIconNameMap = new Map([['success', 'check'], ['exception', 'close']]);
/** @type {?} */
var statusColorMap = new Map([['normal', '#108ee9'], ['exception', '#ff5500'], ['success', '#87d068']]);
/** @type {?} */
var defaultFormatter = (/**
 * @param {?} p
 * @return {?}
 */
function (p) { return p + "%"; });
var ɵ0 = defaultFormatter;
var NzProgressComponent = /** @class */ (function () {
    function NzProgressComponent(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.nzWidth = 132;
        this.nzPercent = 0;
        this.nzType = 'line';
        /**
         * Gradient style when `nzType` is `line`.
         */
        this.lineGradient = null;
        /**
         * If user uses gradient color.
         */
        this.isGradient = false;
        /**
         * Each progress whose `nzType` is circle or dashboard should have unique id to
         * define `<linearGradient>`.
         */
        this.gradientId = gradientIdSeed++;
        /**
         * Paths to rendered in the template.
         */
        this.progressCirclePath = [];
        this.trackByFn = (/**
         * @param {?} index
         * @return {?}
         */
        function (index) { return "" + index; });
        this.cachedStatus = 'normal';
        this.inferredStatus = 'normal';
        this.destroy$ = new Subject();
    }
    Object.defineProperty(NzProgressComponent.prototype, "formatter", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzFormat || defaultFormatter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "status", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzStatus || this.inferredStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "strokeWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzStrokeWidth || (this.nzType === 'line' && this.nzSize !== 'small' ? 8 : 6);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "isCircleStyle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzType === 'circle' || this.nzType === 'dashboard';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzProgressComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzGapPosition = changes.nzGapPosition, nzStrokeLinecap = changes.nzStrokeLinecap, nzStrokeColor = changes.nzStrokeColor, nzGapDegree = changes.nzGapDegree, nzType = changes.nzType, nzStatus = changes.nzStatus, nzPercent = changes.nzPercent, nzSuccessPercent = changes.nzSuccessPercent;
        if (nzStatus) {
            this.cachedStatus = this.nzStatus || this.cachedStatus;
        }
        if (nzPercent || nzSuccessPercent) {
            /** @type {?} */
            var fillAll = parseInt(this.nzPercent.toString(), 10) >= 100;
            if (fillAll) {
                if ((isNotNil(this.nzSuccessPercent) && (/** @type {?} */ (this.nzSuccessPercent)) >= 100) || this.nzSuccessPercent === undefined) {
                    this.inferredStatus = 'success';
                }
            }
            else {
                this.inferredStatus = this.cachedStatus;
            }
        }
        if (nzStatus || nzPercent || nzSuccessPercent) {
            this.updateIcon();
        }
        if (nzStrokeColor) {
            this.setStrokeColor();
        }
        if (nzGapPosition || nzStrokeLinecap || nzGapDegree || nzType || nzPercent || nzStrokeColor) {
            this.getCirclePaths();
        }
    };
    /**
     * @return {?}
     */
    NzProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.updateIcon();
            _this.setStrokeColor();
            _this.getCirclePaths();
        }));
    };
    /**
     * @return {?}
     */
    NzProgressComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @private
     * @return {?}
     */
    NzProgressComponent.prototype.updateIcon = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ret = statusIconNameMap.get(this.status);
        this.icon = ret ? ret + (this.isCircleStyle ? '-o' : '-circle-fill') : '';
    };
    /**
     * Calculate paths when the type is circle or dashboard.
     */
    /**
     * Calculate paths when the type is circle or dashboard.
     * @private
     * @return {?}
     */
    NzProgressComponent.prototype.getCirclePaths = /**
     * Calculate paths when the type is circle or dashboard.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isCircleStyle) {
            return;
        }
        /** @type {?} */
        var values = isNotNil(this.nzSuccessPercent) ? [(/** @type {?} */ (this.nzSuccessPercent)), this.nzPercent] : [this.nzPercent];
        // Calculate shared styles.
        /** @type {?} */
        var radius = 50 - this.strokeWidth / 2;
        /** @type {?} */
        var gapPosition = this.nzGapPosition || (this.nzType === 'circle' ? 'top' : 'bottom');
        /** @type {?} */
        var len = Math.PI * 2 * radius;
        /** @type {?} */
        var gapDegree = this.nzGapDegree || (this.nzType === 'circle' ? 0 : 75);
        /** @type {?} */
        var beginPositionX = 0;
        /** @type {?} */
        var beginPositionY = -radius;
        /** @type {?} */
        var endPositionX = 0;
        /** @type {?} */
        var endPositionY = radius * -2;
        switch (gapPosition) {
            case 'left':
                beginPositionX = -radius;
                beginPositionY = 0;
                endPositionX = radius * 2;
                endPositionY = 0;
                break;
            case 'right':
                beginPositionX = radius;
                beginPositionY = 0;
                endPositionX = radius * -2;
                endPositionY = 0;
                break;
            case 'bottom':
                beginPositionY = radius;
                endPositionY = radius * 2;
                break;
            default:
        }
        this.pathString = "M 50,50 m " + beginPositionX + "," + beginPositionY + "\n       a " + radius + "," + radius + " 0 1 1 " + endPositionX + "," + -endPositionY + "\n       a " + radius + "," + radius + " 0 1 1 " + -endPositionX + "," + endPositionY;
        this.trailPathStyle = {
            strokeDasharray: len - gapDegree + "px " + len + "px",
            strokeDashoffset: "-" + gapDegree / 2 + "px",
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        // Calculate styles for each path.
        this.progressCirclePath = values
            .map((/**
         * @param {?} value
         * @param {?} index
         * @return {?}
         */
        function (value, index) {
            /** @type {?} */
            var isSuccessPercent = values.length === 2 && index === 0;
            return {
                stroke: _this.isGradient && !isSuccessPercent ? "url(#gradient-" + _this.gradientId + ")" : null,
                strokePathStyle: {
                    stroke: !_this.isGradient
                        ? isSuccessPercent
                            ? statusColorMap.get('success')
                            : ((/** @type {?} */ (_this.nzStrokeColor)))
                        : null,
                    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s',
                    strokeDasharray: ((value || 0) / 100) * (len - gapDegree) + "px " + len + "px",
                    strokeDashoffset: "-" + gapDegree / 2 + "px"
                }
            };
        }))
            .reverse();
    };
    /**
     * @private
     * @return {?}
     */
    NzProgressComponent.prototype.setStrokeColor = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var color = this.nzStrokeColor;
        /** @type {?} */
        var isGradient = (this.isGradient = !!color && typeof color !== 'string');
        if (isGradient && !this.isCircleStyle) {
            this.lineGradient = handleLinearGradient((/** @type {?} */ (color)));
        }
        else if (isGradient && this.isCircleStyle) {
            this.circleGradient = handleCircleGradient((/** @type {?} */ (this.nzStrokeColor)));
        }
        else {
            this.lineGradient = null;
            this.circleGradient = [];
        }
    };
    NzProgressComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-progress',
                    exportAs: 'nzProgress',
                    preserveWhitespaces: false,
                    template: "<ng-template #progressInfoTemplate>\n  <span class=\"ant-progress-text\"\n        *ngIf=\"nzShowInfo\">\n    <ng-container *ngIf=\"status === 'exception' || (status === 'success' && !nzFormat); else formatTemplate\">\n      <i nz-icon\n         [nzType]=\"icon\"></i>\n    </ng-container>\n    <ng-template #formatTemplate>\n      {{ formatter(nzPercent) }}\n    </ng-template>\n  </span>\n</ng-template>\n\n<div [ngClass]=\"'ant-progress ant-progress-status-' + status\"\n     [class.ant-progress-line]=\"nzType == 'line'\"\n     [class.ant-progress-small]=\"nzSize == 'small'\"\n     [class.ant-progress-show-info]=\"nzShowInfo\"\n     [class.ant-progress-circle]=\"isCircleStyle\">\n  <!-- line progress -->\n  <div *ngIf=\"nzType === 'line'\">\n    <div class=\"ant-progress-outer\">\n      <div class=\"ant-progress-inner\">\n        <div class=\"ant-progress-bg\"\n             [style.width.%]=\"nzPercent\"\n             [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\n             [style.background]=\"!isGradient ? nzStrokeColor : null\"\n             [style.background-image]=\"isGradient ? lineGradient : null\"\n             [style.height.px]=\"strokeWidth\"></div>\n        <div *ngIf=\"nzSuccessPercent || nzSuccessPercent === 0\"\n             class=\"ant-progress-success-bg\"\n             [style.width.%]=\"nzSuccessPercent\"\n             [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\n             [style.height.px]=\"strokeWidth\"></div>\n      </div>\n    </div>\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\n  </div>\n\n  <!-- circle / dashboard progress -->\n  <div [style.width.px]=\"this.nzWidth\"\n       [style.height.px]=\"this.nzWidth\"\n       [style.fontSize.px]=\"this.nzWidth * 0.15 + 6\"\n       class=\"ant-progress-inner\"\n       [class.ant-progress-circle-gradient]=\"isGradient\"\n       *ngIf=\"isCircleStyle\">\n    <svg class=\"ant-progress-circle \"\n         viewBox=\"0 0 100 100\">\n      <defs *ngIf=\"isGradient\">\n        <linearGradient [id]=\"'gradient-' + gradientId\"\n                        x1=\"100%\"\n                        y1=\"0%\"\n                        x2=\"0%\"\n                        y2=\"0%\">\n          <stop *ngFor=\"let i of circleGradient;\"\n                [attr.offset]=\"i.offset\"\n                [attr.stop-color]=\"i.color\"></stop>\n        </linearGradient>\n      </defs>\n      <path class=\"ant-progress-circle-trail\"\n            stroke=\"#f3f3f3\"\n            fill-opacity=\"0\"\n            [attr.stroke-width]=\"strokeWidth\"\n            [attr.d]=\"pathString\"\n            [ngStyle]=\"trailPathStyle\"></path>\n      <path *ngFor=\"let p of progressCirclePath; trackBy: trackByFn\"\n            class=\"ant-progress-circle-path\"\n            fill-opacity=\"0\"\n            [attr.d]=\"pathString\"\n            [attr.stroke-linecap]=\"nzStrokeLinecap\"\n            [attr.stroke]=\"p.stroke\"\n            [attr.stroke-width]=\"nzPercent ? strokeWidth : 0\"\n            [ngStyle]=\"p.strokePathStyle\">\n      </path>\n    </svg>\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    NzProgressComponent.ctorParameters = function () { return [
        { type: NzConfigService }
    ]; };
    NzProgressComponent.propDecorators = {
        nzShowInfo: [{ type: Input }],
        nzWidth: [{ type: Input }],
        nzStrokeColor: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzFormat: [{ type: Input }],
        nzSuccessPercent: [{ type: Input }],
        nzPercent: [{ type: Input }],
        nzStrokeWidth: [{ type: Input }],
        nzGapDegree: [{ type: Input }],
        nzStatus: [{ type: Input }],
        nzType: [{ type: Input }],
        nzGapPosition: [{ type: Input }],
        nzStrokeLinecap: [{ type: Input }]
    };
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
        tslib_1.__metadata("design:type", Boolean)
    ], NzProgressComponent.prototype, "nzShowInfo", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        tslib_1.__metadata("design:type", Object)
    ], NzProgressComponent.prototype, "nzStrokeColor", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
        tslib_1.__metadata("design:type", String)
    ], NzProgressComponent.prototype, "nzSize", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzSuccessPercent", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzPercent", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzStrokeWidth", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzGapDegree", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'top'),
        tslib_1.__metadata("design:type", String)
    ], NzProgressComponent.prototype, "nzGapPosition", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'round'),
        tslib_1.__metadata("design:type", String)
    ], NzProgressComponent.prototype, "nzStrokeLinecap", void 0);
    return NzProgressComponent;
}());
export { NzProgressComponent };
if (false) {
    /** @type {?} */
    NzProgressComponent.prototype.nzShowInfo;
    /** @type {?} */
    NzProgressComponent.prototype.nzWidth;
    /** @type {?} */
    NzProgressComponent.prototype.nzStrokeColor;
    /** @type {?} */
    NzProgressComponent.prototype.nzSize;
    /** @type {?} */
    NzProgressComponent.prototype.nzFormat;
    /** @type {?} */
    NzProgressComponent.prototype.nzSuccessPercent;
    /** @type {?} */
    NzProgressComponent.prototype.nzPercent;
    /** @type {?} */
    NzProgressComponent.prototype.nzStrokeWidth;
    /** @type {?} */
    NzProgressComponent.prototype.nzGapDegree;
    /** @type {?} */
    NzProgressComponent.prototype.nzStatus;
    /** @type {?} */
    NzProgressComponent.prototype.nzType;
    /** @type {?} */
    NzProgressComponent.prototype.nzGapPosition;
    /** @type {?} */
    NzProgressComponent.prototype.nzStrokeLinecap;
    /**
     * Gradient style when `nzType` is `line`.
     * @type {?}
     */
    NzProgressComponent.prototype.lineGradient;
    /**
     * If user uses gradient color.
     * @type {?}
     */
    NzProgressComponent.prototype.isGradient;
    /**
     * Each progress whose `nzType` is circle or dashboard should have unique id to
     * define `<linearGradient>`.
     * @type {?}
     */
    NzProgressComponent.prototype.gradientId;
    /**
     * Paths to rendered in the template.
     * @type {?}
     */
    NzProgressComponent.prototype.progressCirclePath;
    /** @type {?} */
    NzProgressComponent.prototype.circleGradient;
    /** @type {?} */
    NzProgressComponent.prototype.trailPathStyle;
    /** @type {?} */
    NzProgressComponent.prototype.pathString;
    /** @type {?} */
    NzProgressComponent.prototype.icon;
    /** @type {?} */
    NzProgressComponent.prototype.trackByFn;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype.cachedStatus;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype.inferredStatus;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype.destroy$;
    /** @type {?} */
    NzProgressComponent.prototype.nzConfigService;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbIm56LXByb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUtMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBb0IsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTFHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztJQWE3RSxjQUFjLEdBQUcsQ0FBQzs7SUFFaEIsd0JBQXdCLEdBQUcsVUFBVTs7SUFDckMsaUJBQWlCLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDOztJQUMzRSxjQUFjLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDOztJQUNuRyxnQkFBZ0I7Ozs7QUFBd0IsVUFBQyxDQUFTLElBQWEsT0FBRyxDQUFDLE1BQUcsRUFBUCxDQUFPLENBQUE7O0FBRTVFO0lBb0VFLDZCQUFtQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUExRDFDLFlBQU8sR0FBRyxHQUFHLENBQUM7UUFLQyxjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBSXJDLFdBQU0sR0FBdUIsTUFBTSxDQUFDOzs7O1FBSzdDLGlCQUFZLEdBQWtCLElBQUksQ0FBQzs7OztRQUduQyxlQUFVLEdBQUcsS0FBSyxDQUFDOzs7OztRQU1uQixlQUFVLEdBQUcsY0FBYyxFQUFFLENBQUM7Ozs7UUFHOUIsdUJBQWtCLEdBQTJCLEVBQUUsQ0FBQztRQVVoRCxjQUFTOzs7O1FBQUcsVUFBQyxLQUFhLElBQUssT0FBQSxLQUFHLEtBQU8sRUFBVixDQUFVLEVBQUM7UUFrQmxDLGlCQUFZLEdBQXlCLFFBQVEsQ0FBQztRQUM5QyxtQkFBYyxHQUF5QixRQUFRLENBQUM7UUFDaEQsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFFZSxDQUFDO0lBcEJ2RCxzQkFBSSwwQ0FBUzs7OztRQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLGdCQUFnQixDQUFDO1FBQzNDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzlDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNENBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNGLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOENBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssV0FBVyxDQUFDO1FBQ2pFLENBQUM7OztPQUFBOzs7OztJQVFELHlDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUU5QixJQUFBLHFDQUFhLEVBQ2IseUNBQWUsRUFDZixxQ0FBYSxFQUNiLGlDQUFXLEVBQ1gsdUJBQU0sRUFDTiwyQkFBUSxFQUNSLDZCQUFTLEVBQ1QsMkNBQWdCO1FBR2xCLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDeEQ7UUFFRCxJQUFJLFNBQVMsSUFBSSxnQkFBZ0IsRUFBRTs7Z0JBQzNCLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxHQUFHO1lBQzlELElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksbUJBQUEsSUFBSSxDQUFDLGdCQUFnQixFQUFDLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixLQUFLLFNBQVMsRUFBRTtvQkFDN0csSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7aUJBQ2pDO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQ3pDO1NBQ0Y7UUFFRCxJQUFJLFFBQVEsSUFBSSxTQUFTLElBQUksZ0JBQWdCLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO1FBRUQsSUFBSSxhQUFhLEVBQUU7WUFDakIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxhQUFhLElBQUksZUFBZSxJQUFJLFdBQVcsSUFBSSxNQUFNLElBQUksU0FBUyxJQUFJLGFBQWEsRUFBRTtZQUMzRixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsZUFBZTthQUNqQixnQ0FBZ0MsQ0FBQyx3QkFBd0IsQ0FBQzthQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTOzs7UUFBQztZQUNULEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVPLHdDQUFVOzs7O0lBQWxCOztZQUNRLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzVFLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0ssNENBQWM7Ozs7O0lBQXRCO1FBQUEsaUJBb0VDO1FBbkVDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZCLE9BQU87U0FDUjs7WUFFSyxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxnQkFBZ0IsRUFBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDOzs7WUFHdEcsTUFBTSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUM7O1lBQ2xDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDOztZQUNqRixHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsTUFBTTs7WUFDMUIsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7O1lBRXJFLGNBQWMsR0FBRyxDQUFDOztZQUNsQixjQUFjLEdBQUcsQ0FBQyxNQUFNOztZQUN4QixZQUFZLEdBQUcsQ0FBQzs7WUFDaEIsWUFBWSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFOUIsUUFBUSxXQUFXLEVBQUU7WUFDbkIsS0FBSyxNQUFNO2dCQUNULGNBQWMsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDekIsY0FBYyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsWUFBWSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQzFCLFlBQVksR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLE1BQU07WUFDUixLQUFLLE9BQU87Z0JBQ1YsY0FBYyxHQUFHLE1BQU0sQ0FBQztnQkFDeEIsY0FBYyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsWUFBWSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsWUFBWSxHQUFHLENBQUMsQ0FBQztnQkFDakIsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxjQUFjLEdBQUcsTUFBTSxDQUFDO2dCQUN4QixZQUFZLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDMUIsTUFBTTtZQUNSLFFBQVE7U0FDVDtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsZUFBYSxjQUFjLFNBQUksY0FBYyxtQkFDeEQsTUFBTSxTQUFJLE1BQU0sZUFBVSxZQUFZLFNBQUksQ0FBQyxZQUFZLG1CQUN2RCxNQUFNLFNBQUksTUFBTSxlQUFVLENBQUMsWUFBWSxTQUFJLFlBQWMsQ0FBQztRQUVqRSxJQUFJLENBQUMsY0FBYyxHQUFHO1lBQ3BCLGVBQWUsRUFBSyxHQUFHLEdBQUcsU0FBUyxXQUFNLEdBQUcsT0FBSTtZQUNoRCxnQkFBZ0IsRUFBRSxNQUFJLFNBQVMsR0FBRyxDQUFDLE9BQUk7WUFDdkMsVUFBVSxFQUFFLHlFQUF5RTtTQUN0RixDQUFDO1FBRUYsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNO2FBQzdCLEdBQUc7Ozs7O1FBQUMsVUFBQyxLQUFLLEVBQUUsS0FBSzs7Z0JBQ1YsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUM7WUFDM0QsT0FBTztnQkFDTCxNQUFNLEVBQUUsS0FBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxtQkFBaUIsS0FBSSxDQUFDLFVBQVUsTUFBRyxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUN6RixlQUFlLEVBQUU7b0JBQ2YsTUFBTSxFQUFFLENBQUMsS0FBSSxDQUFDLFVBQVU7d0JBQ3RCLENBQUMsQ0FBQyxnQkFBZ0I7NEJBQ2hCLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQzs0QkFDL0IsQ0FBQyxDQUFDLENBQUMsbUJBQUEsS0FBSSxDQUFDLGFBQWEsRUFBVSxDQUFDO3dCQUNsQyxDQUFDLENBQUMsSUFBSTtvQkFDUixVQUFVLEVBQ1IscUdBQXFHO29CQUN2RyxlQUFlLEVBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsV0FBTSxHQUFHLE9BQUk7b0JBQ3pFLGdCQUFnQixFQUFFLE1BQUksU0FBUyxHQUFHLENBQUMsT0FBSTtpQkFDeEM7YUFDRixDQUFDO1FBQ0osQ0FBQyxFQUFDO2FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDOzs7OztJQUVPLDRDQUFjOzs7O0lBQXRCOztZQUNRLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYTs7WUFDMUIsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQztRQUMzRSxJQUFJLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBb0IsQ0FBQyxtQkFBQSxLQUFLLEVBQTJCLENBQUMsQ0FBQztTQUM1RTthQUFNLElBQUksVUFBVSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDM0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBb0IsQ0FBQyxtQkFBQSxJQUFJLENBQUMsYUFBYSxFQUE4QixDQUFDLENBQUM7U0FDOUY7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Z0JBdk5GLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsa3BHQUEyQztpQkFDNUM7Ozs7Z0JBL0JpRCxlQUFlOzs7NkJBaUM5RCxLQUFLOzBCQUNMLEtBQUs7Z0NBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7bUNBQ0wsS0FBSzs0QkFDTCxLQUFLO2dDQUNMLEtBQUs7OEJBQ0wsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLEtBQUs7Z0NBQ0wsS0FBSztrQ0FDTCxLQUFLOztJQVorQztRQUEzQyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDOzsyREFBcUI7SUFFMUI7UUFBckMsVUFBVSxDQUFDLHdCQUF3QixDQUFDOzs4REFBMEM7SUFDOUI7UUFBaEQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLFNBQVMsQ0FBQzs7dURBQTZCO0lBRTlEO1FBQWQsV0FBVyxFQUFFOztpRUFBMkI7SUFDMUI7UUFBZCxXQUFXLEVBQUU7OzBEQUF1QjtJQUNnQjtRQUFwRCxVQUFVLENBQUMsd0JBQXdCLENBQUMsRUFBRSxXQUFXLEVBQUU7OzhEQUF1QjtJQUN0QjtRQUFwRCxVQUFVLENBQUMsd0JBQXdCLENBQUMsRUFBRSxXQUFXLEVBQUU7OzREQUFxQjtJQUc1QjtRQUE1QyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDOzs4REFBMEM7SUFDdkM7UUFBOUMsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQzs7Z0VBQThDO0lBbU12RywwQkFBQztDQUFBLEFBeE5ELElBd05DO1NBaE5ZLG1CQUFtQjs7O0lBQzlCLHlDQUF5RTs7SUFDekUsc0NBQXVCOztJQUN2Qiw0Q0FBd0Y7O0lBQ3hGLHFDQUFzRjs7SUFDdEYsdUNBQXdDOztJQUN4QywrQ0FBa0Q7O0lBQ2xELHdDQUE4Qzs7SUFDOUMsNENBQW9GOztJQUNwRiwwQ0FBa0Y7O0lBQ2xGLHVDQUF3Qzs7SUFDeEMscUNBQTZDOztJQUM3Qyw0Q0FBK0Y7O0lBQy9GLDhDQUFxRzs7Ozs7SUFHckcsMkNBQW1DOzs7OztJQUduQyx5Q0FBbUI7Ozs7OztJQU1uQix5Q0FBOEI7Ozs7O0lBRzlCLGlEQUFnRDs7SUFFaEQsNkNBQXlEOztJQUV6RCw2Q0FBaUM7O0lBRWpDLHlDQUFtQjs7SUFFbkIsbUNBQWE7O0lBRWIsd0NBQTBDOzs7OztJQWtCMUMsMkNBQXNEOzs7OztJQUN0RCw2Q0FBd0Q7Ozs7O0lBQ3hELHVDQUF1Qzs7SUFFM0IsOENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaXNOb3ROaWwsIElucHV0TnVtYmVyLCBOZ1N0eWxlSW50ZXJmYWNlLCBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBoYW5kbGVDaXJjbGVHcmFkaWVudCwgaGFuZGxlTGluZWFyR3JhZGllbnQgfSBmcm9tICcuL256LXByb2dyZXNzLXV0aWxzJztcbmltcG9ydCB7XG4gIE56UHJvZ3Jlc3NDaXJjbGVQYXRoLFxuICBOelByb2dyZXNzQ29sb3JHcmFkaWVudCxcbiAgTnpQcm9ncmVzc0Zvcm1hdHRlcixcbiAgTnpQcm9ncmVzc0dhcFBvc2l0aW9uVHlwZSxcbiAgTnpQcm9ncmVzc0dyYWRpZW50UHJvZ3Jlc3MsXG4gIE56UHJvZ3Jlc3NTdGF0dXNUeXBlLFxuICBOelByb2dyZXNzU3Ryb2tlQ29sb3JUeXBlLFxuICBOelByb2dyZXNzU3Ryb2tlTGluZWNhcFR5cGUsXG4gIE56UHJvZ3Jlc3NUeXBlVHlwZVxufSBmcm9tICcuL256LXByb2dyZXNzLmRlZmluaXRpb25zJztcblxubGV0IGdyYWRpZW50SWRTZWVkID0gMDtcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ3Byb2dyZXNzJztcbmNvbnN0IHN0YXR1c0ljb25OYW1lTWFwID0gbmV3IE1hcChbWydzdWNjZXNzJywgJ2NoZWNrJ10sIFsnZXhjZXB0aW9uJywgJ2Nsb3NlJ11dKTtcbmNvbnN0IHN0YXR1c0NvbG9yTWFwID0gbmV3IE1hcChbWydub3JtYWwnLCAnIzEwOGVlOSddLCBbJ2V4Y2VwdGlvbicsICcjZmY1NTAwJ10sIFsnc3VjY2VzcycsICcjODdkMDY4J11dKTtcbmNvbnN0IGRlZmF1bHRGb3JtYXR0ZXI6IE56UHJvZ3Jlc3NGb3JtYXR0ZXIgPSAocDogbnVtYmVyKTogc3RyaW5nID0+IGAke3B9JWA7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1wcm9ncmVzcycsXG4gIGV4cG9ydEFzOiAnbnpQcm9ncmVzcycsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotcHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56UHJvZ3Jlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBuelNob3dJbmZvOiBib29sZWFuO1xuICBASW5wdXQoKSBueldpZHRoID0gMTMyO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIG56U3Ryb2tlQ29sb3I6IE56UHJvZ3Jlc3NTdHJva2VDb2xvclR5cGU7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2RlZmF1bHQnKSBuelNpemU6ICdkZWZhdWx0JyB8ICdzbWFsbCc7XG4gIEBJbnB1dCgpIG56Rm9ybWF0PzogTnpQcm9ncmVzc0Zvcm1hdHRlcjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpTdWNjZXNzUGVyY2VudD86IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpQZXJjZW50OiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIEBJbnB1dE51bWJlcigpIG56U3Ryb2tlV2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBASW5wdXROdW1iZXIoKSBuekdhcERlZ3JlZTogbnVtYmVyO1xuICBASW5wdXQoKSBuelN0YXR1czogTnpQcm9ncmVzc1N0YXR1c1R5cGU7XG4gIEBJbnB1dCgpIG56VHlwZTogTnpQcm9ncmVzc1R5cGVUeXBlID0gJ2xpbmUnO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICd0b3AnKSBuekdhcFBvc2l0aW9uOiBOelByb2dyZXNzR2FwUG9zaXRpb25UeXBlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdyb3VuZCcpIG56U3Ryb2tlTGluZWNhcDogTnpQcm9ncmVzc1N0cm9rZUxpbmVjYXBUeXBlO1xuXG4gIC8qKiBHcmFkaWVudCBzdHlsZSB3aGVuIGBuelR5cGVgIGlzIGBsaW5lYC4gKi9cbiAgbGluZUdyYWRpZW50OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICAvKiogSWYgdXNlciB1c2VzIGdyYWRpZW50IGNvbG9yLiAqL1xuICBpc0dyYWRpZW50ID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEVhY2ggcHJvZ3Jlc3Mgd2hvc2UgYG56VHlwZWAgaXMgY2lyY2xlIG9yIGRhc2hib2FyZCBzaG91bGQgaGF2ZSB1bmlxdWUgaWQgdG9cbiAgICogZGVmaW5lIGA8bGluZWFyR3JhZGllbnQ+YC5cbiAgICovXG4gIGdyYWRpZW50SWQgPSBncmFkaWVudElkU2VlZCsrO1xuXG4gIC8qKiBQYXRocyB0byByZW5kZXJlZCBpbiB0aGUgdGVtcGxhdGUuICovXG4gIHByb2dyZXNzQ2lyY2xlUGF0aDogTnpQcm9ncmVzc0NpcmNsZVBhdGhbXSA9IFtdO1xuXG4gIGNpcmNsZUdyYWRpZW50OiBBcnJheTx7IG9mZnNldDogc3RyaW5nOyBjb2xvcjogc3RyaW5nIH0+O1xuXG4gIHRyYWlsUGF0aFN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlO1xuXG4gIHBhdGhTdHJpbmc6IHN0cmluZztcblxuICBpY29uOiBzdHJpbmc7XG5cbiAgdHJhY2tCeUZuID0gKGluZGV4OiBudW1iZXIpID0+IGAke2luZGV4fWA7XG5cbiAgZ2V0IGZvcm1hdHRlcigpOiBOelByb2dyZXNzRm9ybWF0dGVyIHtcbiAgICByZXR1cm4gdGhpcy5uekZvcm1hdCB8fCBkZWZhdWx0Rm9ybWF0dGVyO1xuICB9XG5cbiAgZ2V0IHN0YXR1cygpOiBOelByb2dyZXNzU3RhdHVzVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMubnpTdGF0dXMgfHwgdGhpcy5pbmZlcnJlZFN0YXR1cztcbiAgfVxuXG4gIGdldCBzdHJva2VXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm56U3Ryb2tlV2lkdGggfHwgKHRoaXMubnpUeXBlID09PSAnbGluZScgJiYgdGhpcy5uelNpemUgIT09ICdzbWFsbCcgPyA4IDogNik7XG4gIH1cblxuICBnZXQgaXNDaXJjbGVTdHlsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uelR5cGUgPT09ICdjaXJjbGUnIHx8IHRoaXMubnpUeXBlID09PSAnZGFzaGJvYXJkJztcbiAgfVxuXG4gIHByaXZhdGUgY2FjaGVkU3RhdHVzOiBOelByb2dyZXNzU3RhdHVzVHlwZSA9ICdub3JtYWwnO1xuICBwcml2YXRlIGluZmVycmVkU3RhdHVzOiBOelByb2dyZXNzU3RhdHVzVHlwZSA9ICdub3JtYWwnO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHtcbiAgICAgIG56R2FwUG9zaXRpb24sXG4gICAgICBuelN0cm9rZUxpbmVjYXAsXG4gICAgICBuelN0cm9rZUNvbG9yLFxuICAgICAgbnpHYXBEZWdyZWUsXG4gICAgICBuelR5cGUsXG4gICAgICBuelN0YXR1cyxcbiAgICAgIG56UGVyY2VudCxcbiAgICAgIG56U3VjY2Vzc1BlcmNlbnRcbiAgICB9ID0gY2hhbmdlcztcblxuICAgIGlmIChuelN0YXR1cykge1xuICAgICAgdGhpcy5jYWNoZWRTdGF0dXMgPSB0aGlzLm56U3RhdHVzIHx8IHRoaXMuY2FjaGVkU3RhdHVzO1xuICAgIH1cblxuICAgIGlmIChuelBlcmNlbnQgfHwgbnpTdWNjZXNzUGVyY2VudCkge1xuICAgICAgY29uc3QgZmlsbEFsbCA9IHBhcnNlSW50KHRoaXMubnpQZXJjZW50LnRvU3RyaW5nKCksIDEwKSA+PSAxMDA7XG4gICAgICBpZiAoZmlsbEFsbCkge1xuICAgICAgICBpZiAoKGlzTm90TmlsKHRoaXMubnpTdWNjZXNzUGVyY2VudCkgJiYgdGhpcy5uelN1Y2Nlc3NQZXJjZW50ISA+PSAxMDApIHx8IHRoaXMubnpTdWNjZXNzUGVyY2VudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5pbmZlcnJlZFN0YXR1cyA9ICdzdWNjZXNzJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbmZlcnJlZFN0YXR1cyA9IHRoaXMuY2FjaGVkU3RhdHVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuelN0YXR1cyB8fCBuelBlcmNlbnQgfHwgbnpTdWNjZXNzUGVyY2VudCkge1xuICAgICAgdGhpcy51cGRhdGVJY29uKCk7XG4gICAgfVxuXG4gICAgaWYgKG56U3Ryb2tlQ29sb3IpIHtcbiAgICAgIHRoaXMuc2V0U3Ryb2tlQ29sb3IoKTtcbiAgICB9XG5cbiAgICBpZiAobnpHYXBQb3NpdGlvbiB8fCBuelN0cm9rZUxpbmVjYXAgfHwgbnpHYXBEZWdyZWUgfHwgbnpUeXBlIHx8IG56UGVyY2VudCB8fCBuelN0cm9rZUNvbG9yKSB7XG4gICAgICB0aGlzLmdldENpcmNsZVBhdGhzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2VcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVJY29uKCk7XG4gICAgICAgIHRoaXMuc2V0U3Ryb2tlQ29sb3IoKTtcbiAgICAgICAgdGhpcy5nZXRDaXJjbGVQYXRocygpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUljb24oKTogdm9pZCB7XG4gICAgY29uc3QgcmV0ID0gc3RhdHVzSWNvbk5hbWVNYXAuZ2V0KHRoaXMuc3RhdHVzKTtcbiAgICB0aGlzLmljb24gPSByZXQgPyByZXQgKyAodGhpcy5pc0NpcmNsZVN0eWxlID8gJy1vJyA6ICctY2lyY2xlLWZpbGwnKSA6ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBwYXRocyB3aGVuIHRoZSB0eXBlIGlzIGNpcmNsZSBvciBkYXNoYm9hcmQuXG4gICAqL1xuICBwcml2YXRlIGdldENpcmNsZVBhdGhzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0NpcmNsZVN0eWxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWVzID0gaXNOb3ROaWwodGhpcy5uelN1Y2Nlc3NQZXJjZW50KSA/IFt0aGlzLm56U3VjY2Vzc1BlcmNlbnQhLCB0aGlzLm56UGVyY2VudF0gOiBbdGhpcy5uelBlcmNlbnRdO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHNoYXJlZCBzdHlsZXMuXG4gICAgY29uc3QgcmFkaXVzID0gNTAgLSB0aGlzLnN0cm9rZVdpZHRoIC8gMjtcbiAgICBjb25zdCBnYXBQb3NpdGlvbiA9IHRoaXMubnpHYXBQb3NpdGlvbiB8fCAodGhpcy5uelR5cGUgPT09ICdjaXJjbGUnID8gJ3RvcCcgOiAnYm90dG9tJyk7XG4gICAgY29uc3QgbGVuID0gTWF0aC5QSSAqIDIgKiByYWRpdXM7XG4gICAgY29uc3QgZ2FwRGVncmVlID0gdGhpcy5uekdhcERlZ3JlZSB8fCAodGhpcy5uelR5cGUgPT09ICdjaXJjbGUnID8gMCA6IDc1KTtcblxuICAgIGxldCBiZWdpblBvc2l0aW9uWCA9IDA7XG4gICAgbGV0IGJlZ2luUG9zaXRpb25ZID0gLXJhZGl1cztcbiAgICBsZXQgZW5kUG9zaXRpb25YID0gMDtcbiAgICBsZXQgZW5kUG9zaXRpb25ZID0gcmFkaXVzICogLTI7XG5cbiAgICBzd2l0Y2ggKGdhcFBvc2l0aW9uKSB7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgYmVnaW5Qb3NpdGlvblggPSAtcmFkaXVzO1xuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGVuZFBvc2l0aW9uWCA9IHJhZGl1cyAqIDI7XG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICBiZWdpblBvc2l0aW9uWCA9IHJhZGl1cztcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSAwO1xuICAgICAgICBlbmRQb3NpdGlvblggPSByYWRpdXMgKiAtMjtcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IHJhZGl1cztcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gcmFkaXVzICogMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cblxuICAgIHRoaXMucGF0aFN0cmluZyA9IGBNIDUwLDUwIG0gJHtiZWdpblBvc2l0aW9uWH0sJHtiZWdpblBvc2l0aW9uWX1cbiAgICAgICBhICR7cmFkaXVzfSwke3JhZGl1c30gMCAxIDEgJHtlbmRQb3NpdGlvblh9LCR7LWVuZFBvc2l0aW9uWX1cbiAgICAgICBhICR7cmFkaXVzfSwke3JhZGl1c30gMCAxIDEgJHstZW5kUG9zaXRpb25YfSwke2VuZFBvc2l0aW9uWX1gO1xuXG4gICAgdGhpcy50cmFpbFBhdGhTdHlsZSA9IHtcbiAgICAgIHN0cm9rZURhc2hhcnJheTogYCR7bGVuIC0gZ2FwRGVncmVlfXB4ICR7bGVufXB4YCxcbiAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IGAtJHtnYXBEZWdyZWUgLyAyfXB4YCxcbiAgICAgIHRyYW5zaXRpb246ICdzdHJva2UtZGFzaG9mZnNldCAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIC4zcydcbiAgICB9O1xuXG4gICAgLy8gQ2FsY3VsYXRlIHN0eWxlcyBmb3IgZWFjaCBwYXRoLlxuICAgIHRoaXMucHJvZ3Jlc3NDaXJjbGVQYXRoID0gdmFsdWVzXG4gICAgICAubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgaXNTdWNjZXNzUGVyY2VudCA9IHZhbHVlcy5sZW5ndGggPT09IDIgJiYgaW5kZXggPT09IDA7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3Ryb2tlOiB0aGlzLmlzR3JhZGllbnQgJiYgIWlzU3VjY2Vzc1BlcmNlbnQgPyBgdXJsKCNncmFkaWVudC0ke3RoaXMuZ3JhZGllbnRJZH0pYCA6IG51bGwsXG4gICAgICAgICAgc3Ryb2tlUGF0aFN0eWxlOiB7XG4gICAgICAgICAgICBzdHJva2U6ICF0aGlzLmlzR3JhZGllbnRcbiAgICAgICAgICAgICAgPyBpc1N1Y2Nlc3NQZXJjZW50XG4gICAgICAgICAgICAgICAgPyBzdGF0dXNDb2xvck1hcC5nZXQoJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgICAgIDogKHRoaXMubnpTdHJva2VDb2xvciBhcyBzdHJpbmcpXG4gICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIC4zcywgc3Ryb2tlLXdpZHRoIC4wNnMgZWFzZSAuM3MnLFxuICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiBgJHsoKHZhbHVlIHx8IDApIC8gMTAwKSAqIChsZW4gLSBnYXBEZWdyZWUpfXB4ICR7bGVufXB4YCxcbiAgICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IGAtJHtnYXBEZWdyZWUgLyAyfXB4YFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgICAucmV2ZXJzZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdHJva2VDb2xvcigpOiB2b2lkIHtcbiAgICBjb25zdCBjb2xvciA9IHRoaXMubnpTdHJva2VDb2xvcjtcbiAgICBjb25zdCBpc0dyYWRpZW50ID0gKHRoaXMuaXNHcmFkaWVudCA9ICEhY29sb3IgJiYgdHlwZW9mIGNvbG9yICE9PSAnc3RyaW5nJyk7XG4gICAgaWYgKGlzR3JhZGllbnQgJiYgIXRoaXMuaXNDaXJjbGVTdHlsZSkge1xuICAgICAgdGhpcy5saW5lR3JhZGllbnQgPSBoYW5kbGVMaW5lYXJHcmFkaWVudChjb2xvciBhcyBOelByb2dyZXNzQ29sb3JHcmFkaWVudCk7XG4gICAgfSBlbHNlIGlmIChpc0dyYWRpZW50ICYmIHRoaXMuaXNDaXJjbGVTdHlsZSkge1xuICAgICAgdGhpcy5jaXJjbGVHcmFkaWVudCA9IGhhbmRsZUNpcmNsZUdyYWRpZW50KHRoaXMubnpTdHJva2VDb2xvciBhcyBOelByb2dyZXNzR3JhZGllbnRQcm9ncmVzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGluZUdyYWRpZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuY2lyY2xlR3JhZGllbnQgPSBbXTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==