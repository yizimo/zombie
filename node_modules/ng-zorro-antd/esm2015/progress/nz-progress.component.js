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
let gradientIdSeed = 0;
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'progress';
/** @type {?} */
const statusIconNameMap = new Map([['success', 'check'], ['exception', 'close']]);
/** @type {?} */
const statusColorMap = new Map([['normal', '#108ee9'], ['exception', '#ff5500'], ['success', '#87d068']]);
/** @type {?} */
const defaultFormatter = (/**
 * @param {?} p
 * @return {?}
 */
(p) => `${p}%`);
const ɵ0 = defaultFormatter;
export class NzProgressComponent {
    /**
     * @param {?} nzConfigService
     */
    constructor(nzConfigService) {
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
        (index) => `${index}`);
        this.cachedStatus = 'normal';
        this.inferredStatus = 'normal';
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    get formatter() {
        return this.nzFormat || defaultFormatter;
    }
    /**
     * @return {?}
     */
    get status() {
        return this.nzStatus || this.inferredStatus;
    }
    /**
     * @return {?}
     */
    get strokeWidth() {
        return this.nzStrokeWidth || (this.nzType === 'line' && this.nzSize !== 'small' ? 8 : 6);
    }
    /**
     * @return {?}
     */
    get isCircleStyle() {
        return this.nzType === 'circle' || this.nzType === 'dashboard';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzGapPosition, nzStrokeLinecap, nzStrokeColor, nzGapDegree, nzType, nzStatus, nzPercent, nzSuccessPercent } = changes;
        if (nzStatus) {
            this.cachedStatus = this.nzStatus || this.cachedStatus;
        }
        if (nzPercent || nzSuccessPercent) {
            /** @type {?} */
            const fillAll = parseInt(this.nzPercent.toString(), 10) >= 100;
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.updateIcon();
            this.setStrokeColor();
            this.getCirclePaths();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @private
     * @return {?}
     */
    updateIcon() {
        /** @type {?} */
        const ret = statusIconNameMap.get(this.status);
        this.icon = ret ? ret + (this.isCircleStyle ? '-o' : '-circle-fill') : '';
    }
    /**
     * Calculate paths when the type is circle or dashboard.
     * @private
     * @return {?}
     */
    getCirclePaths() {
        if (!this.isCircleStyle) {
            return;
        }
        /** @type {?} */
        const values = isNotNil(this.nzSuccessPercent) ? [(/** @type {?} */ (this.nzSuccessPercent)), this.nzPercent] : [this.nzPercent];
        // Calculate shared styles.
        /** @type {?} */
        const radius = 50 - this.strokeWidth / 2;
        /** @type {?} */
        const gapPosition = this.nzGapPosition || (this.nzType === 'circle' ? 'top' : 'bottom');
        /** @type {?} */
        const len = Math.PI * 2 * radius;
        /** @type {?} */
        const gapDegree = this.nzGapDegree || (this.nzType === 'circle' ? 0 : 75);
        /** @type {?} */
        let beginPositionX = 0;
        /** @type {?} */
        let beginPositionY = -radius;
        /** @type {?} */
        let endPositionX = 0;
        /** @type {?} */
        let endPositionY = radius * -2;
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
        this.pathString = `M 50,50 m ${beginPositionX},${beginPositionY}
       a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
       a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`;
        this.trailPathStyle = {
            strokeDasharray: `${len - gapDegree}px ${len}px`,
            strokeDashoffset: `-${gapDegree / 2}px`,
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        // Calculate styles for each path.
        this.progressCirclePath = values
            .map((/**
         * @param {?} value
         * @param {?} index
         * @return {?}
         */
        (value, index) => {
            /** @type {?} */
            const isSuccessPercent = values.length === 2 && index === 0;
            return {
                stroke: this.isGradient && !isSuccessPercent ? `url(#gradient-${this.gradientId})` : null,
                strokePathStyle: {
                    stroke: !this.isGradient
                        ? isSuccessPercent
                            ? statusColorMap.get('success')
                            : ((/** @type {?} */ (this.nzStrokeColor)))
                        : null,
                    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s',
                    strokeDasharray: `${((value || 0) / 100) * (len - gapDegree)}px ${len}px`,
                    strokeDashoffset: `-${gapDegree / 2}px`
                }
            };
        }))
            .reverse();
    }
    /**
     * @private
     * @return {?}
     */
    setStrokeColor() {
        /** @type {?} */
        const color = this.nzStrokeColor;
        /** @type {?} */
        const isGradient = (this.isGradient = !!color && typeof color !== 'string');
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
    }
}
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
NzProgressComponent.ctorParameters = () => [
    { type: NzConfigService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbIm56LXByb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUtMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBb0IsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTFHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztJQWE3RSxjQUFjLEdBQUcsQ0FBQzs7TUFFaEIsd0JBQXdCLEdBQUcsVUFBVTs7TUFDckMsaUJBQWlCLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDOztNQUMzRSxjQUFjLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDOztNQUNuRyxnQkFBZ0I7Ozs7QUFBd0IsQ0FBQyxDQUFTLEVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUE7O0FBVTVFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUE0RDlCLFlBQW1CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQTFEMUMsWUFBTyxHQUFHLEdB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Q3RCO0lBQXBELFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLFdBQVcsRUFBRTs7d0RBQXFCO0FBRzVCO0lBQTVDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUM7OzBEQUEwQztBQUN2QztJQUE5QyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDOzs0REFBOEM7OztJQVpyRyx5Q0FBeUU7O0lBQ3pFLHNDQUF1Qjs7SUFDdkIsNENBQXdGOztJQUN4RixxQ0FBc0Y7O0lBQ3RGLHVDQUF3Qzs7SUFDeEMsK0NBQWtEOztJQUNsRCx3Q0FBOEM7O0lBQzlDLDRDQUFvRjs7SUFDcEYsMENBQWtGOztJQUNsRix1Q0FBd0M7O0lBQ3hDLHFDQUE2Qzs7SUFDN0MsNENBQStGOztJQUMvRiw4Q0FBcUc7Ozs7O0lBR3JHLDJDQUFtQzs7Ozs7SUFHbkMseUNBQW1COzs7Ozs7SUFNbkIseUNBQThCOzs7OztJQUc5QixpREFBZ0Q7O0lBRWhELDZDQUF5RDs7SUFFekQsNkNBQWlDOztJQUVqQyx5Q0FBbUI7O0lBRW5CLG1DQUFhOztJQUViLHdDQUEwQzs7Ozs7SUFrQjFDLDJDQUFzRDs7Ozs7SUFDdEQsNkNBQXdEOzs7OztJQUN4RCx1Q0FBdUM7O0lBRTNCLDhDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGlzTm90TmlsLCBJbnB1dE51bWJlciwgTmdTdHlsZUludGVyZmFjZSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgaGFuZGxlQ2lyY2xlR3JhZGllbnQsIGhhbmRsZUxpbmVhckdyYWRpZW50IH0gZnJvbSAnLi9uei1wcm9ncmVzcy11dGlscyc7XG5pbXBvcnQge1xuICBOelByb2dyZXNzQ2lyY2xlUGF0aCxcbiAgTnpQcm9ncmVzc0NvbG9yR3JhZGllbnQsXG4gIE56UHJvZ3Jlc3NGb3JtYXR0ZXIsXG4gIE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUsXG4gIE56UHJvZ3Jlc3NHcmFkaWVudFByb2dyZXNzLFxuICBOelByb2dyZXNzU3RhdHVzVHlwZSxcbiAgTnpQcm9ncmVzc1N0cm9rZUNvbG9yVHlwZSxcbiAgTnpQcm9ncmVzc1N0cm9rZUxpbmVjYXBUeXBlLFxuICBOelByb2dyZXNzVHlwZVR5cGVcbn0gZnJvbSAnLi9uei1wcm9ncmVzcy5kZWZpbml0aW9ucyc7XG5cbmxldCBncmFkaWVudElkU2VlZCA9IDA7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdwcm9ncmVzcyc7XG5jb25zdCBzdGF0dXNJY29uTmFtZU1hcCA9IG5ldyBNYXAoW1snc3VjY2VzcycsICdjaGVjayddLCBbJ2V4Y2VwdGlvbicsICdjbG9zZSddXSk7XG5jb25zdCBzdGF0dXNDb2xvck1hcCA9IG5ldyBNYXAoW1snbm9ybWFsJywgJyMxMDhlZTknXSwgWydleGNlcHRpb24nLCAnI2ZmNTUwMCddLCBbJ3N1Y2Nlc3MnLCAnIzg3ZDA2OCddXSk7XG5jb25zdCBkZWZhdWx0Rm9ybWF0dGVyOiBOelByb2dyZXNzRm9ybWF0dGVyID0gKHA6IG51bWJlcik6IHN0cmluZyA9PiBgJHtwfSVgO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotcHJvZ3Jlc3MnLFxuICBleHBvcnRBczogJ256UHJvZ3Jlc3MnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXByb2dyZXNzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelByb2dyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgbnpTaG93SW5mbzogYm9vbGVhbjtcbiAgQElucHV0KCkgbnpXaWR0aCA9IDEzMjtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuelN0cm9rZUNvbG9yOiBOelByb2dyZXNzU3Ryb2tlQ29sb3JUeXBlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdkZWZhdWx0JykgbnpTaXplOiAnZGVmYXVsdCcgfCAnc21hbGwnO1xuICBASW5wdXQoKSBuekZvcm1hdD86IE56UHJvZ3Jlc3NGb3JtYXR0ZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56U3VjY2Vzc1BlcmNlbnQ/OiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56UGVyY2VudDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBASW5wdXROdW1iZXIoKSBuelN0cm9rZVdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgQElucHV0TnVtYmVyKCkgbnpHYXBEZWdyZWU6IG51bWJlcjtcbiAgQElucHV0KCkgbnpTdGF0dXM6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlO1xuICBASW5wdXQoKSBuelR5cGU6IE56UHJvZ3Jlc3NUeXBlVHlwZSA9ICdsaW5lJztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAndG9wJykgbnpHYXBQb3NpdGlvbjogTnpQcm9ncmVzc0dhcFBvc2l0aW9uVHlwZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAncm91bmQnKSBuelN0cm9rZUxpbmVjYXA6IE56UHJvZ3Jlc3NTdHJva2VMaW5lY2FwVHlwZTtcblxuICAvKiogR3JhZGllbnQgc3R5bGUgd2hlbiBgbnpUeXBlYCBpcyBgbGluZWAuICovXG4gIGxpbmVHcmFkaWVudDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIElmIHVzZXIgdXNlcyBncmFkaWVudCBjb2xvci4gKi9cbiAgaXNHcmFkaWVudCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBFYWNoIHByb2dyZXNzIHdob3NlIGBuelR5cGVgIGlzIGNpcmNsZSBvciBkYXNoYm9hcmQgc2hvdWxkIGhhdmUgdW5pcXVlIGlkIHRvXG4gICAqIGRlZmluZSBgPGxpbmVhckdyYWRpZW50PmAuXG4gICAqL1xuICBncmFkaWVudElkID0gZ3JhZGllbnRJZFNlZWQrKztcblxuICAvKiogUGF0aHMgdG8gcmVuZGVyZWQgaW4gdGhlIHRlbXBsYXRlLiAqL1xuICBwcm9ncmVzc0NpcmNsZVBhdGg6IE56UHJvZ3Jlc3NDaXJjbGVQYXRoW10gPSBbXTtcblxuICBjaXJjbGVHcmFkaWVudDogQXJyYXk8eyBvZmZzZXQ6IHN0cmluZzsgY29sb3I6IHN0cmluZyB9PjtcblxuICB0cmFpbFBhdGhTdHlsZTogTmdTdHlsZUludGVyZmFjZTtcblxuICBwYXRoU3RyaW5nOiBzdHJpbmc7XG5cbiAgaWNvbjogc3RyaW5nO1xuXG4gIHRyYWNrQnlGbiA9IChpbmRleDogbnVtYmVyKSA9PiBgJHtpbmRleH1gO1xuXG4gIGdldCBmb3JtYXR0ZXIoKTogTnpQcm9ncmVzc0Zvcm1hdHRlciB7XG4gICAgcmV0dXJuIHRoaXMubnpGb3JtYXQgfHwgZGVmYXVsdEZvcm1hdHRlcjtcbiAgfVxuXG4gIGdldCBzdGF0dXMoKTogTnpQcm9ncmVzc1N0YXR1c1R5cGUge1xuICAgIHJldHVybiB0aGlzLm56U3RhdHVzIHx8IHRoaXMuaW5mZXJyZWRTdGF0dXM7XG4gIH1cblxuICBnZXQgc3Ryb2tlV2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uelN0cm9rZVdpZHRoIHx8ICh0aGlzLm56VHlwZSA9PT0gJ2xpbmUnICYmIHRoaXMubnpTaXplICE9PSAnc21hbGwnID8gOCA6IDYpO1xuICB9XG5cbiAgZ2V0IGlzQ2lyY2xlU3R5bGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpUeXBlID09PSAnY2lyY2xlJyB8fCB0aGlzLm56VHlwZSA9PT0gJ2Rhc2hib2FyZCc7XG4gIH1cblxuICBwcml2YXRlIGNhY2hlZFN0YXR1czogTnpQcm9ncmVzc1N0YXR1c1R5cGUgPSAnbm9ybWFsJztcbiAgcHJpdmF0ZSBpbmZlcnJlZFN0YXR1czogTnpQcm9ncmVzc1N0YXR1c1R5cGUgPSAnbm9ybWFsJztcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7XG4gICAgICBuekdhcFBvc2l0aW9uLFxuICAgICAgbnpTdHJva2VMaW5lY2FwLFxuICAgICAgbnpTdHJva2VDb2xvcixcbiAgICAgIG56R2FwRGVncmVlLFxuICAgICAgbnpUeXBlLFxuICAgICAgbnpTdGF0dXMsXG4gICAgICBuelBlcmNlbnQsXG4gICAgICBuelN1Y2Nlc3NQZXJjZW50XG4gICAgfSA9IGNoYW5nZXM7XG5cbiAgICBpZiAobnpTdGF0dXMpIHtcbiAgICAgIHRoaXMuY2FjaGVkU3RhdHVzID0gdGhpcy5uelN0YXR1cyB8fCB0aGlzLmNhY2hlZFN0YXR1cztcbiAgICB9XG5cbiAgICBpZiAobnpQZXJjZW50IHx8IG56U3VjY2Vzc1BlcmNlbnQpIHtcbiAgICAgIGNvbnN0IGZpbGxBbGwgPSBwYXJzZUludCh0aGlzLm56UGVyY2VudC50b1N0cmluZygpLCAxMCkgPj0gMTAwO1xuICAgICAgaWYgKGZpbGxBbGwpIHtcbiAgICAgICAgaWYgKChpc05vdE5pbCh0aGlzLm56U3VjY2Vzc1BlcmNlbnQpICYmIHRoaXMubnpTdWNjZXNzUGVyY2VudCEgPj0gMTAwKSB8fCB0aGlzLm56U3VjY2Vzc1BlcmNlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaW5mZXJyZWRTdGF0dXMgPSAnc3VjY2Vzcyc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5mZXJyZWRTdGF0dXMgPSB0aGlzLmNhY2hlZFN0YXR1cztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobnpTdGF0dXMgfHwgbnpQZXJjZW50IHx8IG56U3VjY2Vzc1BlcmNlbnQpIHtcbiAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xuICAgIH1cblxuICAgIGlmIChuelN0cm9rZUNvbG9yKSB7XG4gICAgICB0aGlzLnNldFN0cm9rZUNvbG9yKCk7XG4gICAgfVxuXG4gICAgaWYgKG56R2FwUG9zaXRpb24gfHwgbnpTdHJva2VMaW5lY2FwIHx8IG56R2FwRGVncmVlIHx8IG56VHlwZSB8fCBuelBlcmNlbnQgfHwgbnpTdHJva2VDb2xvcikge1xuICAgICAgdGhpcy5nZXRDaXJjbGVQYXRocygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xuICAgICAgICB0aGlzLnNldFN0cm9rZUNvbG9yKCk7XG4gICAgICAgIHRoaXMuZ2V0Q2lyY2xlUGF0aHMoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVJY29uKCk6IHZvaWQge1xuICAgIGNvbnN0IHJldCA9IHN0YXR1c0ljb25OYW1lTWFwLmdldCh0aGlzLnN0YXR1cyk7XG4gICAgdGhpcy5pY29uID0gcmV0ID8gcmV0ICsgKHRoaXMuaXNDaXJjbGVTdHlsZSA/ICctbycgOiAnLWNpcmNsZS1maWxsJykgOiAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgcGF0aHMgd2hlbiB0aGUgdHlwZSBpcyBjaXJjbGUgb3IgZGFzaGJvYXJkLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRDaXJjbGVQYXRocygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNDaXJjbGVTdHlsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlcyA9IGlzTm90TmlsKHRoaXMubnpTdWNjZXNzUGVyY2VudCkgPyBbdGhpcy5uelN1Y2Nlc3NQZXJjZW50ISwgdGhpcy5uelBlcmNlbnRdIDogW3RoaXMubnpQZXJjZW50XTtcblxuICAgIC8vIENhbGN1bGF0ZSBzaGFyZWQgc3R5bGVzLlxuICAgIGNvbnN0IHJhZGl1cyA9IDUwIC0gdGhpcy5zdHJva2VXaWR0aCAvIDI7XG4gICAgY29uc3QgZ2FwUG9zaXRpb24gPSB0aGlzLm56R2FwUG9zaXRpb24gfHwgKHRoaXMubnpUeXBlID09PSAnY2lyY2xlJyA/ICd0b3AnIDogJ2JvdHRvbScpO1xuICAgIGNvbnN0IGxlbiA9IE1hdGguUEkgKiAyICogcmFkaXVzO1xuICAgIGNvbnN0IGdhcERlZ3JlZSA9IHRoaXMubnpHYXBEZWdyZWUgfHwgKHRoaXMubnpUeXBlID09PSAnY2lyY2xlJyA/IDAgOiA3NSk7XG5cbiAgICBsZXQgYmVnaW5Qb3NpdGlvblggPSAwO1xuICAgIGxldCBiZWdpblBvc2l0aW9uWSA9IC1yYWRpdXM7XG4gICAgbGV0IGVuZFBvc2l0aW9uWCA9IDA7XG4gICAgbGV0IGVuZFBvc2l0aW9uWSA9IHJhZGl1cyAqIC0yO1xuXG4gICAgc3dpdGNoIChnYXBQb3NpdGlvbikge1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIGJlZ2luUG9zaXRpb25YID0gLXJhZGl1cztcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSAwO1xuICAgICAgICBlbmRQb3NpdGlvblggPSByYWRpdXMgKiAyO1xuICAgICAgICBlbmRQb3NpdGlvblkgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgYmVnaW5Qb3NpdGlvblggPSByYWRpdXM7XG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gMDtcbiAgICAgICAgZW5kUG9zaXRpb25YID0gcmFkaXVzICogLTI7XG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSByYWRpdXM7XG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IHJhZGl1cyAqIDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG5cbiAgICB0aGlzLnBhdGhTdHJpbmcgPSBgTSA1MCw1MCBtICR7YmVnaW5Qb3NpdGlvblh9LCR7YmVnaW5Qb3NpdGlvbll9XG4gICAgICAgYSAke3JhZGl1c30sJHtyYWRpdXN9IDAgMSAxICR7ZW5kUG9zaXRpb25YfSwkey1lbmRQb3NpdGlvbll9XG4gICAgICAgYSAke3JhZGl1c30sJHtyYWRpdXN9IDAgMSAxICR7LWVuZFBvc2l0aW9uWH0sJHtlbmRQb3NpdGlvbll9YDtcblxuICAgIHRoaXMudHJhaWxQYXRoU3R5bGUgPSB7XG4gICAgICBzdHJva2VEYXNoYXJyYXk6IGAke2xlbiAtIGdhcERlZ3JlZX1weCAke2xlbn1weGAsXG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiBgLSR7Z2FwRGVncmVlIC8gMn1weGAsXG4gICAgICB0cmFuc2l0aW9uOiAnc3Ryb2tlLWRhc2hvZmZzZXQgLjNzIGVhc2UgMHMsIHN0cm9rZS1kYXNoYXJyYXkgLjNzIGVhc2UgMHMsIHN0cm9rZSAuM3MnXG4gICAgfTtcblxuICAgIC8vIENhbGN1bGF0ZSBzdHlsZXMgZm9yIGVhY2ggcGF0aC5cbiAgICB0aGlzLnByb2dyZXNzQ2lyY2xlUGF0aCA9IHZhbHVlc1xuICAgICAgLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzU3VjY2Vzc1BlcmNlbnQgPSB2YWx1ZXMubGVuZ3RoID09PSAyICYmIGluZGV4ID09PSAwO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0cm9rZTogdGhpcy5pc0dyYWRpZW50ICYmICFpc1N1Y2Nlc3NQZXJjZW50ID8gYHVybCgjZ3JhZGllbnQtJHt0aGlzLmdyYWRpZW50SWR9KWAgOiBudWxsLFxuICAgICAgICAgIHN0cm9rZVBhdGhTdHlsZToge1xuICAgICAgICAgICAgc3Ryb2tlOiAhdGhpcy5pc0dyYWRpZW50XG4gICAgICAgICAgICAgID8gaXNTdWNjZXNzUGVyY2VudFxuICAgICAgICAgICAgICAgID8gc3RhdHVzQ29sb3JNYXAuZ2V0KCdzdWNjZXNzJylcbiAgICAgICAgICAgICAgICA6ICh0aGlzLm56U3Ryb2tlQ29sb3IgYXMgc3RyaW5nKVxuICAgICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQgLjNzIGVhc2UgMHMsIHN0cm9rZS1kYXNoYXJyYXkgLjNzIGVhc2UgMHMsIHN0cm9rZSAuM3MsIHN0cm9rZS13aWR0aCAuMDZzIGVhc2UgLjNzJyxcbiAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheTogYCR7KCh2YWx1ZSB8fCAwKSAvIDEwMCkgKiAobGVuIC0gZ2FwRGVncmVlKX1weCAke2xlbn1weGAsXG4gICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiBgLSR7Z2FwRGVncmVlIC8gMn1weGBcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICAgLnJldmVyc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U3Ryb2tlQ29sb3IoKTogdm9pZCB7XG4gICAgY29uc3QgY29sb3IgPSB0aGlzLm56U3Ryb2tlQ29sb3I7XG4gICAgY29uc3QgaXNHcmFkaWVudCA9ICh0aGlzLmlzR3JhZGllbnQgPSAhIWNvbG9yICYmIHR5cGVvZiBjb2xvciAhPT0gJ3N0cmluZycpO1xuICAgIGlmIChpc0dyYWRpZW50ICYmICF0aGlzLmlzQ2lyY2xlU3R5bGUpIHtcbiAgICAgIHRoaXMubGluZUdyYWRpZW50ID0gaGFuZGxlTGluZWFyR3JhZGllbnQoY29sb3IgYXMgTnpQcm9ncmVzc0NvbG9yR3JhZGllbnQpO1xuICAgIH0gZWxzZSBpZiAoaXNHcmFkaWVudCAmJiB0aGlzLmlzQ2lyY2xlU3R5bGUpIHtcbiAgICAgIHRoaXMuY2lyY2xlR3JhZGllbnQgPSBoYW5kbGVDaXJjbGVHcmFkaWVudCh0aGlzLm56U3Ryb2tlQ29sb3IgYXMgTnpQcm9ncmVzc0dyYWRpZW50UHJvZ3Jlc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpbmVHcmFkaWVudCA9IG51bGw7XG4gICAgICB0aGlzLmNpcmNsZUdyYWRpZW50ID0gW107XG4gICAgfVxuICB9XG59XG4iXX0=