/**
 * @fileoverview added by tsickle
 * Generated from: nz-popconfirm.directive.ts
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
import { ComponentFactoryResolver, Directive, ElementRef, EventEmitter, Host, Input, Optional, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipBaseDirective } from 'ng-zorro-antd/tooltip';
import { NzPopconfirmComponent } from './nz-popconfirm.component';
var NzPopconfirmDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NzPopconfirmDirective, _super);
    function NzPopconfirmDirective(elementRef, hostView, resolver, renderer, tooltip, noAnimation) {
        var _this = _super.call(this, elementRef, hostView, resolver, renderer, tooltip, noAnimation) || this;
        _this.noAnimation = noAnimation;
        /**
         * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
         * Please use a more specific API. Like `nzTooltipTrigger`.
         */
        _this.nzTrigger = 'click';
        _this.nzOnCancel = new EventEmitter();
        _this.nzOnConfirm = new EventEmitter();
        _this.componentFactory = _this.resolver.resolveComponentFactory(NzPopconfirmComponent);
        _this.needProxyProperties = [
            'nzOverlayClassName',
            'nzOverlayStyle',
            'nzMouseEnterDelay',
            'nzMouseLeaveDelay',
            'nzVisible',
            'nzOkText',
            'nzOkType',
            'nzCancelText',
            'nzCondition',
            'nzIcon'
        ];
        return _this;
    }
    /**
     * @override
     */
    /**
     * @override
     * @protected
     * @return {?}
     */
    NzPopconfirmDirective.prototype.createDynamicTooltipComponent = /**
     * @override
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.createDynamicTooltipComponent.call(this);
        ((/** @type {?} */ (this.tooltip))).nzOnCancel.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.nzOnCancel.emit();
        }));
        ((/** @type {?} */ (this.tooltip))).nzOnConfirm.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.nzOnConfirm.emit();
        }));
    };
    NzPopconfirmDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-popconfirm]',
                    exportAs: 'nzPopconfirm',
                    host: {
                        '[class.ant-popover-open]': 'isTooltipComponentVisible'
                    }
                },] }
    ];
    /** @nocollapse */
    NzPopconfirmDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: NzPopconfirmComponent, decorators: [{ type: Optional }] },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzPopconfirmDirective.propDecorators = {
        specificTitle: [{ type: Input, args: ['nzPopconfirmTitle',] }],
        directiveNameTitle: [{ type: Input, args: ['nz-popconfirm',] }],
        specificTrigger: [{ type: Input, args: ['nzPopconfirmTrigger',] }],
        specificPlacement: [{ type: Input, args: ['nzPopconfirmPlacement',] }],
        nzOkText: [{ type: Input }],
        nzOkType: [{ type: Input }],
        nzCancelText: [{ type: Input }],
        nzIcon: [{ type: Input }],
        nzCondition: [{ type: Input }],
        nzTrigger: [{ type: Input }],
        nzOnCancel: [{ type: Output }],
        nzOnConfirm: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzPopconfirmDirective.prototype, "nzCondition", void 0);
    return NzPopconfirmDirective;
}(NzTooltipBaseDirective));
export { NzPopconfirmDirective };
if (false) {
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificTitle;
    /** @type {?} */
    NzPopconfirmDirective.prototype.directiveNameTitle;
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificTrigger;
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificPlacement;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOkText;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOkType;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzCancelText;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzIcon;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzCondition;
    /**
     * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
     * Please use a more specific API. Like `nzTooltipTrigger`.
     * @type {?}
     */
    NzPopconfirmDirective.prototype.nzTrigger;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOnCancel;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOnConfirm;
    /** @type {?} */
    NzPopconfirmDirective.prototype.componentFactory;
    /**
     * @type {?}
     * @protected
     */
    NzPopconfirmDirective.prototype.needProxyProperties;
    /** @type {?} */
    NzPopconfirmDirective.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wY29uZmlybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcGNvbmZpcm0vIiwic291cmNlcyI6WyJuei1wb3Bjb25maXJtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUVMLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxzQkFBc0IsRUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBb0IsTUFBTSx1QkFBdUIsQ0FBQztBQUVqRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRTtJQU8yQyxpREFBc0I7SUFxQy9ELCtCQUNFLFVBQXNCLEVBQ3RCLFFBQTBCLEVBQzFCLFFBQWtDLEVBQ2xDLFFBQW1CLEVBQ1AsT0FBOEIsRUFDZixXQUFvQztRQU5qRSxZQVFFLGtCQUFNLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLFNBQ3RFO1FBSDRCLGlCQUFXLEdBQVgsV0FBVyxDQUF5Qjs7Ozs7UUE1QnhELGVBQVMsR0FBcUIsT0FBTyxDQUFDO1FBRTVCLGdCQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN0QyxpQkFBVyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFMUQsc0JBQWdCLEdBQTRDLEtBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQy9GLHFCQUFxQixDQUN0QixDQUFDO1FBRVEseUJBQW1CLEdBQUc7WUFDOUIsb0JBQW9CO1lBQ3BCLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxVQUFVO1lBQ1YsVUFBVTtZQUNWLGNBQWM7WUFDZCxhQUFhO1lBQ2IsUUFBUTtTQUNULENBQUM7O0lBV0YsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDTyw2REFBNkI7Ozs7O0lBQXZDO1FBQUEsaUJBU0M7UUFSQyxpQkFBTSw2QkFBNkIsV0FBRSxDQUFDO1FBRXRDLENBQUMsbUJBQUEsSUFBSSxDQUFDLE9BQU8sRUFBeUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDO1lBQzFGLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFDLENBQUM7UUFDSCxDQUFDLG1CQUFBLElBQUksQ0FBQyxPQUFPLEVBQXlCLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7UUFBQztZQUMzRixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBbkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsY0FBYztvQkFDeEIsSUFBSSxFQUFFO3dCQUNKLDBCQUEwQixFQUFFLDJCQUEyQjtxQkFDeEQ7aUJBQ0Y7Ozs7Z0JBekJDLFVBQVU7Z0JBU1YsZ0JBQWdCO2dCQVhoQix3QkFBd0I7Z0JBU3hCLFNBQVM7Z0JBVUYscUJBQXFCLHVCQW1EekIsUUFBUTtnQkF0RFUsc0JBQXNCLHVCQXVEeEMsSUFBSSxZQUFJLFFBQVE7OztnQ0ExQ2xCLEtBQUssU0FBQyxtQkFBbUI7cUNBQ3pCLEtBQUssU0FBQyxlQUFlO2tDQUNyQixLQUFLLFNBQUMscUJBQXFCO29DQUMzQixLQUFLLFNBQUMsdUJBQXVCOzJCQUM3QixLQUFLOzJCQUNMLEtBQUs7K0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7NEJBTUwsS0FBSzs2QkFFTCxNQUFNOzhCQUNOLE1BQU07O0lBVGtCO1FBQWYsWUFBWSxFQUFFOzs4REFBc0I7SUFvRGhELDRCQUFDO0NBQUEsQUFwRUQsQ0FPMkMsc0JBQXNCLEdBNkRoRTtTQTdEWSxxQkFBcUI7OztJQUNoQyw4Q0FBb0Q7O0lBQ3BELG1EQUE0RDs7SUFDNUQsZ0RBQWdFOztJQUNoRSxrREFBMEQ7O0lBQzFELHlDQUEwQjs7SUFDMUIseUNBQTBCOztJQUMxQiw2Q0FBOEI7O0lBQzlCLHVDQUE0Qzs7SUFDNUMsNENBQThDOzs7Ozs7SUFNOUMsMENBQStDOztJQUUvQywyQ0FBeUQ7O0lBQ3pELDRDQUEwRDs7SUFFMUQsaURBRUU7Ozs7O0lBRUYsb0RBV0U7O0lBUUEsNENBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnksXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBOelRTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlLCBOelRvb2x0aXBUcmlnZ2VyIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcblxuaW1wb3J0IHsgTnpQb3Bjb25maXJtQ29tcG9uZW50IH0gZnJvbSAnLi9uei1wb3Bjb25maXJtLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei1wb3Bjb25maXJtXScsXG4gIGV4cG9ydEFzOiAnbnpQb3Bjb25maXJtJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXBvcG92ZXItb3Blbl0nOiAnaXNUb29sdGlwQ29tcG9uZW50VmlzaWJsZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelBvcGNvbmZpcm1EaXJlY3RpdmUgZXh0ZW5kcyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCduelBvcGNvbmZpcm1UaXRsZScpIHNwZWNpZmljVGl0bGU6IE56VFNUeXBlO1xuICBASW5wdXQoJ256LXBvcGNvbmZpcm0nKSBkaXJlY3RpdmVOYW1lVGl0bGU6IE56VFNUeXBlIHwgbnVsbDtcbiAgQElucHV0KCduelBvcGNvbmZpcm1UcmlnZ2VyJykgc3BlY2lmaWNUcmlnZ2VyOiBOelRvb2x0aXBUcmlnZ2VyO1xuICBASW5wdXQoJ256UG9wY29uZmlybVBsYWNlbWVudCcpIHNwZWNpZmljUGxhY2VtZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56T2tUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56T2tUeXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56Q2FuY2VsVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBuekljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDb25kaXRpb246IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUaGlzIGlzIGRlcHJlY2F0ZWQgYW5kIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuXG4gICAqIFBsZWFzZSB1c2UgYSBtb3JlIHNwZWNpZmljIEFQSS4gTGlrZSBgbnpUb29sdGlwVHJpZ2dlcmAuXG4gICAqL1xuICBASW5wdXQoKSBuelRyaWdnZXI6IE56VG9vbHRpcFRyaWdnZXIgPSAnY2xpY2snO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkNvbmZpcm0gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxOelBvcGNvbmZpcm1Db21wb25lbnQ+ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICBOelBvcGNvbmZpcm1Db21wb25lbnRcbiAgKTtcblxuICBwcm90ZWN0ZWQgbmVlZFByb3h5UHJvcGVydGllcyA9IFtcbiAgICAnbnpPdmVybGF5Q2xhc3NOYW1lJyxcbiAgICAnbnpPdmVybGF5U3R5bGUnLFxuICAgICduek1vdXNlRW50ZXJEZWxheScsXG4gICAgJ256TW91c2VMZWF2ZURlbGF5JyxcbiAgICAnbnpWaXNpYmxlJyxcbiAgICAnbnpPa1RleHQnLFxuICAgICduek9rVHlwZScsXG4gICAgJ256Q2FuY2VsVGV4dCcsXG4gICAgJ256Q29uZGl0aW9uJyxcbiAgICAnbnpJY29uJ1xuICBdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIHRvb2x0aXA6IE56UG9wY29uZmlybUNvbXBvbmVudCxcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgaG9zdFZpZXcsIHJlc29sdmVyLCByZW5kZXJlciwgdG9vbHRpcCwgbm9BbmltYXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdGVjdGVkIGNyZWF0ZUR5bmFtaWNUb29sdGlwQ29tcG9uZW50KCk6IHZvaWQge1xuICAgIHN1cGVyLmNyZWF0ZUR5bmFtaWNUb29sdGlwQ29tcG9uZW50KCk7XG5cbiAgICAodGhpcy50b29sdGlwIGFzIE56UG9wY29uZmlybUNvbXBvbmVudCkubnpPbkNhbmNlbC5waXBlKHRha2VVbnRpbCh0aGlzLiRkZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubnpPbkNhbmNlbC5lbWl0KCk7XG4gICAgfSk7XG4gICAgKHRoaXMudG9vbHRpcCBhcyBOelBvcGNvbmZpcm1Db21wb25lbnQpLm56T25Db25maXJtLnBpcGUodGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5uek9uQ29uZmlybS5lbWl0KCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==