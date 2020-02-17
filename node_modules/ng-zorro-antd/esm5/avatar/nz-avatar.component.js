/**
 * @fileoverview added by tsickle
 * Generated from: nz-avatar.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzConfigService, NzUpdateHostClassService, WithConfig } from 'ng-zorro-antd/core';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'avatar';
var NzAvatarComponent = /** @class */ (function () {
    function NzAvatarComponent(nzConfigService, elementRef, cd, updateHostClassService, renderer, platform) {
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.cd = cd;
        this.updateHostClassService = updateHostClassService;
        this.renderer = renderer;
        this.platform = platform;
        this.nzError = new EventEmitter();
        this.oldAPIIcon = true; // Make the user defined icon compatible to old API. Should be removed in 2.0.
        // Make the user defined icon compatible to old API. Should be removed in 2.0.
        this.hasText = false;
        this.hasSrc = true;
        this.hasIcon = false;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-avatar';
        this.sizeMap = { large: 'lg', small: 'sm' };
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    NzAvatarComponent.prototype.setClass = /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a[(/** @type {?} */ (this)).prefixCls] = true,
            _a[(/** @type {?} */ (this)).prefixCls + "-" + (/** @type {?} */ (this)).sizeMap[(/** @type {?} */ (this)).nzSize]] = (/** @type {?} */ (this)).sizeMap[(/** @type {?} */ (this)).nzSize],
            _a[(/** @type {?} */ (this)).prefixCls + "-" + (/** @type {?} */ (this)).nzShape] = (/** @type {?} */ (this)).nzShape,
            _a[(/** @type {?} */ (this)).prefixCls + "-icon"] = (/** @type {?} */ (this)).nzIcon,
            _a[(/** @type {?} */ (this)).prefixCls + "-image"] = (/** @type {?} */ (this)).hasSrc // downgrade after image error
        ,
            _a);
        (/** @type {?} */ (this)).updateHostClassService.updateHostClass((/** @type {?} */ (this)).el, classMap);
        (/** @type {?} */ (this)).cd.detectChanges();
        return (/** @type {?} */ (this));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NzAvatarComponent.prototype.imgError = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.nzError.emit($event);
        if (!$event.defaultPrevented) {
            this.hasSrc = false;
            this.hasIcon = false;
            this.hasText = false;
            if (this.nzIcon) {
                this.hasIcon = true;
            }
            else if (this.nzText) {
                this.hasText = true;
            }
            this.setClass().notifyCalc();
            this.setSizeStyle();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzAvatarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('nzIcon') && changes.nzIcon.currentValue) {
            this.oldAPIIcon = changes.nzIcon.currentValue.indexOf('anticon') > -1;
        }
        this.hasText = !this.nzSrc && !!this.nzText;
        this.hasIcon = !this.nzSrc && !!this.nzIcon;
        this.hasSrc = !!this.nzSrc;
        this.setClass().notifyCalc();
        this.setSizeStyle();
    };
    /**
     * @private
     * @return {?}
     */
    NzAvatarComponent.prototype.calcStringSize = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.hasText) {
            return;
        }
        /** @type {?} */
        var childrenWidth = this.textEl.nativeElement.offsetWidth;
        /** @type {?} */
        var avatarWidth = this.el.getBoundingClientRect().width;
        /** @type {?} */
        var scale = avatarWidth - 8 < childrenWidth ? (avatarWidth - 8) / childrenWidth : 1;
        this.textStyles = {
            transform: "scale(" + scale + ") translateX(-50%)"
        };
        if (typeof this.nzSize === 'number') {
            Object.assign(this.textStyles, {
                lineHeight: this.nzSize + "px"
            });
        }
        this.cd.detectChanges();
    };
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    NzAvatarComponent.prototype.notifyCalc = /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        var _this = this;
        // If use ngAfterViewChecked, always demands more computations, so......
        if ((/** @type {?} */ (this)).platform.isBrowser) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                (/** @type {?} */ (_this)).calcStringSize();
            }));
        }
        return (/** @type {?} */ (this));
    };
    /**
     * @private
     * @return {?}
     */
    NzAvatarComponent.prototype.setSizeStyle = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var size = typeof this.nzSize === 'string' ? this.nzSize : this.nzSize + "px";
        this.renderer.setStyle(this.el, 'width', size);
        this.renderer.setStyle(this.el, 'height', size);
        this.renderer.setStyle(this.el, 'line-height', size);
        if (this.hasIcon) {
            this.renderer.setStyle(this.el, 'font-size', "calc(" + size + " / 2)");
        }
    };
    NzAvatarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-avatar',
                    exportAs: 'nzAvatar',
                    template: "<i nz-icon *ngIf=\"nzIcon && hasIcon\" [nzType]=\"!oldAPIIcon && nzIcon\" [ngClass]=\"oldAPIIcon && nzIcon\"></i>\n<img *ngIf=\"nzSrc && hasSrc\" [src]=\"nzSrc\" [attr.srcset]=\"nzSrcSet\" [attr.alt]=\"nzAlt\" (error)=\"imgError($event)\"/>\n<span class=\"ant-avatar-string\" #textEl [ngStyle]=\"textStyles\" *ngIf=\"nzText && hasText\">{{ nzText }}</span>\n",
                    providers: [NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    NzAvatarComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NzUpdateHostClassService },
        { type: Renderer2 },
        { type: Platform }
    ]; };
    NzAvatarComponent.propDecorators = {
        nzShape: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzText: [{ type: Input }],
        nzSrc: [{ type: Input }],
        nzSrcSet: [{ type: Input }],
        nzAlt: [{ type: Input }],
        nzIcon: [{ type: Input }],
        nzError: [{ type: Output }],
        textEl: [{ type: ViewChild, args: ['textEl', { static: false },] }]
    };
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'circle'),
        tslib_1.__metadata("design:type", String)
    ], NzAvatarComponent.prototype, "nzShape", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
        tslib_1.__metadata("design:type", Object)
    ], NzAvatarComponent.prototype, "nzSize", void 0);
    return NzAvatarComponent;
}());
export { NzAvatarComponent };
if (false) {
    /** @type {?} */
    NzAvatarComponent.prototype.nzShape;
    /** @type {?} */
    NzAvatarComponent.prototype.nzSize;
    /** @type {?} */
    NzAvatarComponent.prototype.nzText;
    /** @type {?} */
    NzAvatarComponent.prototype.nzSrc;
    /** @type {?} */
    NzAvatarComponent.prototype.nzSrcSet;
    /** @type {?} */
    NzAvatarComponent.prototype.nzAlt;
    /** @type {?} */
    NzAvatarComponent.prototype.nzIcon;
    /** @type {?} */
    NzAvatarComponent.prototype.nzError;
    /** @type {?} */
    NzAvatarComponent.prototype.oldAPIIcon;
    /** @type {?} */
    NzAvatarComponent.prototype.hasText;
    /** @type {?} */
    NzAvatarComponent.prototype.hasSrc;
    /** @type {?} */
    NzAvatarComponent.prototype.hasIcon;
    /** @type {?} */
    NzAvatarComponent.prototype.textStyles;
    /** @type {?} */
    NzAvatarComponent.prototype.textEl;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.prefixCls;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.sizeMap;
    /** @type {?} */
    NzAvatarComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.updateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYXZhdGFyLyIsInNvdXJjZXMiOlsibnotYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLGVBQWUsRUFJZix3QkFBd0IsRUFDeEIsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7O0lBRXRCLHdCQUF3QixHQUFHLFFBQVE7QUFFekM7SUErQkUsMkJBQ1MsZUFBZ0MsRUFDL0IsVUFBc0IsRUFDdEIsRUFBcUIsRUFDckIsc0JBQWdELEVBQ2hELFFBQW1CLEVBQ25CLFFBQWtCO1FBTG5CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7UUFDaEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBcEJULFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO1FBRXZELGVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyw4RUFBOEU7O1FBQ2pHLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBS2pCLE9BQUUsR0FBZ0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDaEQsY0FBUyxHQUFHLFlBQVksQ0FBQztRQUN6QixZQUFPLEdBQWMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztJQVN2RCxDQUFDOzs7Ozs7SUFFSixvQ0FBUTs7Ozs7SUFBUjs7O1lBQ1EsUUFBUTtZQUNaLEdBQUMsbUJBQUEsSUFBSSxFQUFBLENBQUMsU0FBUyxJQUFHLElBQUk7WUFDdEIsR0FBSSxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxTQUFTLFNBQUksbUJBQUEsSUFBSSxFQUFBLENBQUMsT0FBTyxDQUFDLG1CQUFBLElBQUksRUFBQSxDQUFDLE1BQU0sQ0FBRyxJQUFHLG1CQUFBLElBQUksRUFBQSxDQUFDLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxNQUFNLENBQUM7WUFDN0UsR0FBSSxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxTQUFTLFNBQUksbUJBQUEsSUFBSSxFQUFBLENBQUMsT0FBUyxJQUFHLG1CQUFBLElBQUksRUFBQSxDQUFDLE9BQU87WUFDbkQsR0FBSSxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxTQUFTLFVBQU8sSUFBRyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxNQUFNO1lBQ3ZDLEdBQUksbUJBQUEsSUFBSSxFQUFBLENBQUMsU0FBUyxXQUFRLElBQUcsbUJBQUEsSUFBSSxFQUFBLENBQUMsTUFBTSxDQUFDLDhCQUE4Qjs7ZUFDeEU7UUFDRCxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsbUJBQUEsSUFBSSxFQUFBLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQy9ELG1CQUFBLElBQUksRUFBQSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QixPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxvQ0FBUTs7OztJQUFSLFVBQVMsTUFBYTtRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFO1lBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNyQjtpQkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3JCO1lBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7O0lBRUQsdUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtZQUNuRSxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN2RTtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFM0IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVPLDBDQUFjOzs7O0lBQXRCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsT0FBTztTQUNSOztZQUVLLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXOztZQUNyRCxXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUs7O1lBQ25ELEtBQUssR0FBRyxXQUFXLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDaEIsU0FBUyxFQUFFLFdBQVMsS0FBSyx1QkFBb0I7U0FDOUMsQ0FBQztRQUNGLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUNuQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQzdCLFVBQVUsRUFBSyxJQUFJLENBQUMsTUFBTSxPQUFJO2FBQy9CLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7Ozs7O0lBRU8sc0NBQVU7Ozs7OztJQUFsQjtRQUFBLGlCQVFDO1FBUEMsd0VBQXdFO1FBQ3hFLElBQUksbUJBQUEsSUFBSSxFQUFBLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUMzQixVQUFVOzs7WUFBQztnQkFDVCxtQkFBQSxLQUFJLEVBQUEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN4QixDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU8sd0NBQVk7Ozs7SUFBcEI7O1lBQ1EsSUFBSSxHQUFHLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFJLElBQUksQ0FBQyxNQUFNLE9BQUk7UUFDL0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLFVBQVEsSUFBSSxVQUFPLENBQUMsQ0FBQztTQUNuRTtJQUNILENBQUM7O2dCQXRIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxVQUFVO29CQUNwQixrWEFBeUM7b0JBQ3pDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO29CQUNyQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7O2dCQWxCQyxlQUFlO2dCQVpmLFVBQVU7Z0JBRlYsaUJBQWlCO2dCQWtCakIsd0JBQXdCO2dCQVh4QixTQUFTO2dCQVZGLFFBQVE7OzswQkFxQ2QsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxNQUFNO3lCQVFOLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQWZtQjtRQUEvQyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsUUFBUSxDQUFDOztzREFBd0I7SUFDdEI7UUFBaEQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLFNBQVMsQ0FBQzs7cURBQWdDO0lBNEczRix3QkFBQztDQUFBLEFBdkhELElBdUhDO1NBOUdZLGlCQUFpQjs7O0lBQzVCLG9DQUFnRjs7SUFDaEYsbUNBQXlGOztJQUN6RixtQ0FBd0I7O0lBQ3hCLGtDQUF1Qjs7SUFDdkIscUNBQTBCOztJQUMxQixrQ0FBdUI7O0lBQ3ZCLG1DQUF3Qjs7SUFDeEIsb0NBQXVEOztJQUV2RCx1Q0FBa0I7O0lBQ2xCLG9DQUF5Qjs7SUFDekIsbUNBQXVCOztJQUN2QixvQ0FBeUI7O0lBQ3pCLHVDQUFlOztJQUVmLG1DQUEyRDs7Ozs7SUFFM0QsK0JBQXdEOzs7OztJQUN4RCxzQ0FBaUM7Ozs7O0lBQ2pDLG9DQUEwRDs7SUFHeEQsNENBQXVDOzs7OztJQUN2Qyx1Q0FBOEI7Ozs7O0lBQzlCLCtCQUE2Qjs7Ozs7SUFDN0IsbURBQXdEOzs7OztJQUN4RCxxQ0FBMkI7Ozs7O0lBQzNCLHFDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgTnpDb25maWdTZXJ2aWNlLFxuICBOelNoYXBlU0NUeXBlLFxuICBOelNpemVMRFNUeXBlLFxuICBOelNpemVNYXAsXG4gIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcbiAgV2l0aENvbmZpZ1xufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnYXZhdGFyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotYXZhdGFyJyxcbiAgZXhwb3J0QXM6ICduekF2YXRhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1hdmF0YXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTnpBdmF0YXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdjaXJjbGUnKSBuelNoYXBlOiBOelNoYXBlU0NUeXBlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdkZWZhdWx0JykgbnpTaXplOiBOelNpemVMRFNUeXBlIHwgbnVtYmVyO1xuICBASW5wdXQoKSBuelRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgbnpTcmM6IHN0cmluZztcbiAgQElucHV0KCkgbnpTcmNTZXQ6IHN0cmluZztcbiAgQElucHV0KCkgbnpBbHQ6IHN0cmluZztcbiAgQElucHV0KCkgbnpJY29uOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcblxuICBvbGRBUElJY29uID0gdHJ1ZTsgLy8gTWFrZSB0aGUgdXNlciBkZWZpbmVkIGljb24gY29tcGF0aWJsZSB0byBvbGQgQVBJLiBTaG91bGQgYmUgcmVtb3ZlZCBpbiAyLjAuXG4gIGhhc1RleHQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaGFzU3JjOiBib29sZWFuID0gdHJ1ZTtcbiAgaGFzSWNvbjogYm9vbGVhbiA9IGZhbHNlO1xuICB0ZXh0U3R5bGVzOiB7fTtcblxuICBAVmlld0NoaWxkKCd0ZXh0RWwnLCB7IHN0YXRpYzogZmFsc2UgfSkgdGV4dEVsOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1hdmF0YXInO1xuICBwcml2YXRlIHNpemVNYXA6IE56U2l6ZU1hcCA9IHsgbGFyZ2U6ICdsZycsIHNtYWxsOiAnc20nIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cbiAgKSB7fVxuXG4gIHNldENsYXNzKCk6IHRoaXMge1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLnNpemVNYXBbdGhpcy5uelNpemVdfWBdOiB0aGlzLnNpemVNYXBbdGhpcy5uelNpemVdLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpTaGFwZX1gXTogdGhpcy5uelNoYXBlLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pY29uYF06IHRoaXMubnpJY29uLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pbWFnZWBdOiB0aGlzLmhhc1NyYyAvLyBkb3duZ3JhZGUgYWZ0ZXIgaW1hZ2UgZXJyb3JcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaW1nRXJyb3IoJGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMubnpFcnJvci5lbWl0KCRldmVudCk7XG4gICAgaWYgKCEkZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgdGhpcy5oYXNTcmMgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGFzSWNvbiA9IGZhbHNlO1xuICAgICAgdGhpcy5oYXNUZXh0ID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5uekljb24pIHtcbiAgICAgICAgdGhpcy5oYXNJY29uID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5uelRleHQpIHtcbiAgICAgICAgdGhpcy5oYXNUZXh0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0Q2xhc3MoKS5ub3RpZnlDYWxjKCk7XG4gICAgICB0aGlzLnNldFNpemVTdHlsZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbnpJY29uJykgJiYgY2hhbmdlcy5uekljb24uY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLm9sZEFQSUljb24gPSBjaGFuZ2VzLm56SWNvbi5jdXJyZW50VmFsdWUuaW5kZXhPZignYW50aWNvbicpID4gLTE7XG4gICAgfVxuICAgIHRoaXMuaGFzVGV4dCA9ICF0aGlzLm56U3JjICYmICEhdGhpcy5uelRleHQ7XG4gICAgdGhpcy5oYXNJY29uID0gIXRoaXMubnpTcmMgJiYgISF0aGlzLm56SWNvbjtcbiAgICB0aGlzLmhhc1NyYyA9ICEhdGhpcy5uelNyYztcblxuICAgIHRoaXMuc2V0Q2xhc3MoKS5ub3RpZnlDYWxjKCk7XG4gICAgdGhpcy5zZXRTaXplU3R5bGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2FsY1N0cmluZ1NpemUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc1RleHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZHJlbldpZHRoID0gdGhpcy50ZXh0RWwubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBhdmF0YXJXaWR0aCA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgY29uc3Qgc2NhbGUgPSBhdmF0YXJXaWR0aCAtIDggPCBjaGlsZHJlbldpZHRoID8gKGF2YXRhcldpZHRoIC0gOCkgLyBjaGlsZHJlbldpZHRoIDogMTtcbiAgICB0aGlzLnRleHRTdHlsZXMgPSB7XG4gICAgICB0cmFuc2Zvcm06IGBzY2FsZSgke3NjYWxlfSkgdHJhbnNsYXRlWCgtNTAlKWBcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgdGhpcy5uelNpemUgPT09ICdudW1iZXInKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMudGV4dFN0eWxlcywge1xuICAgICAgICBsaW5lSGVpZ2h0OiBgJHt0aGlzLm56U2l6ZX1weGBcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5Q2FsYygpOiB0aGlzIHtcbiAgICAvLyBJZiB1c2UgbmdBZnRlclZpZXdDaGVja2VkLCBhbHdheXMgZGVtYW5kcyBtb3JlIGNvbXB1dGF0aW9ucywgc28uLi4uLi5cbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmNhbGNTdHJpbmdTaXplKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIHNldFNpemVTdHlsZSgpOiB2b2lkIHtcbiAgICBjb25zdCBzaXplID0gdHlwZW9mIHRoaXMubnpTaXplID09PSAnc3RyaW5nJyA/IHRoaXMubnpTaXplIDogYCR7dGhpcy5uelNpemV9cHhgO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3dpZHRoJywgc2l6ZSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnaGVpZ2h0Jywgc2l6ZSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnbGluZS1oZWlnaHQnLCBzaXplKTtcbiAgICBpZiAodGhpcy5oYXNJY29uKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdmb250LXNpemUnLCBgY2FsYygke3NpemV9IC8gMilgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==