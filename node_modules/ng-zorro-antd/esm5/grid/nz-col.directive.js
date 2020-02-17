/**
 * @fileoverview added by tsickle
 * Generated from: nz-col.directive.ts
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
import { Directive, ElementRef, Host, Input, Optional, Renderer2 } from '@angular/core';
import { isNotNil, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { NzRowDirective } from './nz-row.directive';
/**
 * @record
 */
export function EmbeddedProperty() { }
if (false) {
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.span;
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.pull;
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.push;
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.offset;
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.order;
}
var NzColDirective = /** @class */ (function () {
    function NzColDirective(nzUpdateHostClassService, elementRef, nzRowDirective, renderer) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzRowDirective = nzRowDirective;
        this.renderer = renderer;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-col';
        this.destroy$ = new Subject();
    }
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    NzColDirective.prototype.setClassMap = /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = tslib_1.__assign((_a = {}, _a["" + this.prefixCls] = true, _a[this.prefixCls + "-" + this.nzSpan] = isNotNil(this.nzSpan), _a[this.prefixCls + "-order-" + this.nzOrder] = isNotNil(this.nzOrder), _a[this.prefixCls + "-offset-" + this.nzOffset] = isNotNil(this.nzOffset), _a[this.prefixCls + "-pull-" + this.nzPull] = isNotNil(this.nzPull), _a[this.prefixCls + "-push-" + this.nzPush] = isNotNil(this.nzPush), _a), this.generateClass());
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    /**
     * @return {?}
     */
    NzColDirective.prototype.generateClass = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
        /** @type {?} */
        var listClassMap = {};
        listOfSizeInputName.forEach((/**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            /** @type {?} */
            var sizeName = name.replace('nz', '').toLowerCase();
            if (isNotNil(_this[name])) {
                if (typeof _this[name] === 'number' || typeof _this[name] === 'string') {
                    listClassMap[_this.prefixCls + "-" + sizeName + "-" + _this[name]] = true;
                }
                else {
                    /** @type {?} */
                    var embedded_1 = (/** @type {?} */ (_this[name]));
                    /** @type {?} */
                    var prefixArray = ['span', 'pull', 'push', 'offset', 'order'];
                    prefixArray.forEach((/**
                     * @param {?} prefix
                     * @return {?}
                     */
                    function (prefix) {
                        /** @type {?} */
                        var prefixClass = prefix === 'span' ? '-' : "-" + prefix + "-";
                        listClassMap[_this.prefixCls + "-" + sizeName + prefixClass + embedded_1[prefix]] =
                            embedded_1 && isNotNil(embedded_1[prefix]);
                    }));
                }
            }
        }));
        return listClassMap;
    };
    /**
     * @return {?}
     */
    NzColDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzColDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzRowDirective) {
            this.nzRowDirective.actualGutter$
                .pipe(startWith(this.nzRowDirective.actualGutter), takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} actualGutter
             * @return {?}
             */
            function (actualGutter) {
                _this.renderer.setStyle(_this.el, 'padding-left', actualGutter / 2 + "px");
                _this.renderer.setStyle(_this.el, 'padding-right', actualGutter / 2 + "px");
            }));
        }
    };
    /**
     * @return {?}
     */
    NzColDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzColDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzColDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-col],nz-col',
                    exportAs: 'nzCol',
                    providers: [NzUpdateHostClassService]
                },] }
    ];
    /** @nocollapse */
    NzColDirective.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
        { type: Renderer2 }
    ]; };
    NzColDirective.propDecorators = {
        nzSpan: [{ type: Input }],
        nzOrder: [{ type: Input }],
        nzOffset: [{ type: Input }],
        nzPush: [{ type: Input }],
        nzPull: [{ type: Input }],
        nzXs: [{ type: Input }],
        nzSm: [{ type: Input }],
        nzMd: [{ type: Input }],
        nzLg: [{ type: Input }],
        nzXl: [{ type: Input }],
        nzXXl: [{ type: Input }]
    };
    return NzColDirective;
}());
export { NzColDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzColDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzColDirective.prototype.prefixCls;
    /**
     * @type {?}
     * @protected
     */
    NzColDirective.prototype.destroy$;
    /** @type {?} */
    NzColDirective.prototype.nzSpan;
    /** @type {?} */
    NzColDirective.prototype.nzOrder;
    /** @type {?} */
    NzColDirective.prototype.nzOffset;
    /** @type {?} */
    NzColDirective.prototype.nzPush;
    /** @type {?} */
    NzColDirective.prototype.nzPull;
    /** @type {?} */
    NzColDirective.prototype.nzXs;
    /** @type {?} */
    NzColDirective.prototype.nzSm;
    /** @type {?} */
    NzColDirective.prototype.nzMd;
    /** @type {?} */
    NzColDirective.prototype.nzLg;
    /** @type {?} */
    NzColDirective.prototype.nzXl;
    /** @type {?} */
    NzColDirective.prototype.nzXXl;
    /**
     * @type {?}
     * @private
     */
    NzColDirective.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzColDirective.prototype.elementRef;
    /** @type {?} */
    NzColDirective.prototype.nzRowDirective;
    /** @type {?} */
    NzColDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZ3JpZC8iLCJzb3VyY2VzIjpbIm56LWNvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUNSLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFvQix3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzFGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFFcEQsc0NBTUM7OztJQUxDLGdDQUFjOztJQUNkLGdDQUFjOztJQUNkLGdDQUFjOztJQUNkLGtDQUFnQjs7SUFDaEIsaUNBQWU7O0FBR2pCO0lBMERFLHdCQUNVLHdCQUFrRCxFQUNsRCxVQUFzQixFQUNILGNBQThCLEVBQ2xELFFBQW1CO1FBSGxCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNILG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNsRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBeERwQixPQUFFLEdBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ2hELGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDcEIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUF1RGhDLENBQUM7SUF6Q0osdUdBQXVHOzs7OztJQUN2RyxvQ0FBVzs7OztJQUFYOzs7WUFDUSxRQUFRLGlDQUNYLEtBQUcsSUFBSSxDQUFDLFNBQVcsSUFBRyxJQUFJLEtBQ3ZCLElB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SUF1Q3hDLGtEQUEwRDs7Ozs7SUFDMUQsb0NBQThCOztJQUM5Qix3Q0FBeUQ7O0lBQ3pELGtDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOb3ROaWwsIE5nQ2xhc3NJbnRlcmZhY2UsIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56Um93RGlyZWN0aXZlIH0gZnJvbSAnLi9uei1yb3cuZGlyZWN0aXZlJztcblxuZXhwb3J0IGludGVyZmFjZSBFbWJlZGRlZFByb3BlcnR5IHtcbiAgc3Bhbj86IG51bWJlcjtcbiAgcHVsbD86IG51bWJlcjtcbiAgcHVzaD86IG51bWJlcjtcbiAgb2Zmc2V0PzogbnVtYmVyO1xuICBvcmRlcj86IG51bWJlcjtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LWNvbF0sbnotY29sJyxcbiAgZXhwb3J0QXM6ICduekNvbCcsXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTnpDb2xEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LWNvbCc7XG4gIHByb3RlY3RlZCBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgQElucHV0KCkgbnpTcGFuOiBudW1iZXI7XG4gIEBJbnB1dCgpIG56T3JkZXI6IG51bWJlcjtcbiAgQElucHV0KCkgbnpPZmZzZXQ6IG51bWJlcjtcbiAgQElucHV0KCkgbnpQdXNoOiBudW1iZXI7XG4gIEBJbnB1dCgpIG56UHVsbDogbnVtYmVyO1xuICBASW5wdXQoKSBuelhzOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xuICBASW5wdXQoKSBuelNtOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xuICBASW5wdXQoKSBuek1kOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xuICBASW5wdXQoKSBuekxnOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xuICBASW5wdXQoKSBuelhsOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xuICBASW5wdXQoKSBuelhYbDogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcblxuICAvKiogdGVtcCBzb2x1dGlvbiBzaW5jZSBubyBtZXRob2QgYWRkIGNsYXNzTWFwIHRvIGhvc3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNzI4OSovXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfWBdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpTcGFufWBdOiBpc05vdE5pbCh0aGlzLm56U3BhbiksXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW9yZGVyLSR7dGhpcy5uek9yZGVyfWBdOiBpc05vdE5pbCh0aGlzLm56T3JkZXIpLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1vZmZzZXQtJHt0aGlzLm56T2Zmc2V0fWBdOiBpc05vdE5pbCh0aGlzLm56T2Zmc2V0KSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tcHVsbC0ke3RoaXMubnpQdWxsfWBdOiBpc05vdE5pbCh0aGlzLm56UHVsbCksXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXB1c2gtJHt0aGlzLm56UHVzaH1gXTogaXNOb3ROaWwodGhpcy5uelB1c2gpLFxuICAgICAgLi4udGhpcy5nZW5lcmF0ZUNsYXNzKClcbiAgICB9O1xuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCBjbGFzc01hcCk7XG4gIH1cblxuICBnZW5lcmF0ZUNsYXNzKCk6IG9iamVjdCB7XG4gICAgY29uc3QgbGlzdE9mU2l6ZUlucHV0TmFtZTogQXJyYXk8a2V5b2YgTnpDb2xEaXJlY3RpdmU+ID0gWyduelhzJywgJ256U20nLCAnbnpNZCcsICduekxnJywgJ256WGwnLCAnbnpYWGwnXTtcbiAgICBjb25zdCBsaXN0Q2xhc3NNYXA6IE5nQ2xhc3NJbnRlcmZhY2UgPSB7fTtcbiAgICBsaXN0T2ZTaXplSW5wdXROYW1lLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBjb25zdCBzaXplTmFtZSA9IG5hbWUucmVwbGFjZSgnbnonLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmIChpc05vdE5pbCh0aGlzW25hbWVdKSkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXNbbmFtZV0gPT09ICdudW1iZXInIHx8IHR5cGVvZiB0aGlzW25hbWVdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGxpc3RDbGFzc01hcFtgJHt0aGlzLnByZWZpeENsc30tJHtzaXplTmFtZX0tJHt0aGlzW25hbWVdfWBdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBlbWJlZGRlZCA9IHRoaXNbbmFtZV0gYXMgRW1iZWRkZWRQcm9wZXJ0eTtcbiAgICAgICAgICBjb25zdCBwcmVmaXhBcnJheTogQXJyYXk8a2V5b2YgRW1iZWRkZWRQcm9wZXJ0eT4gPSBbJ3NwYW4nLCAncHVsbCcsICdwdXNoJywgJ29mZnNldCcsICdvcmRlciddO1xuICAgICAgICAgIHByZWZpeEFycmF5LmZvckVhY2gocHJlZml4ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZWZpeENsYXNzID0gcHJlZml4ID09PSAnc3BhbicgPyAnLScgOiBgLSR7cHJlZml4fS1gO1xuICAgICAgICAgICAgbGlzdENsYXNzTWFwW2Ake3RoaXMucHJlZml4Q2xzfS0ke3NpemVOYW1lfSR7cHJlZml4Q2xhc3N9JHtlbWJlZGRlZFtwcmVmaXhdfWBdID1cbiAgICAgICAgICAgICAgZW1iZWRkZWQgJiYgaXNOb3ROaWwoZW1iZWRkZWRbcHJlZml4XSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbGlzdENsYXNzTWFwO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwdWJsaWMgbnpSb3dEaXJlY3RpdmU6IE56Um93RGlyZWN0aXZlLFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge31cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpSb3dEaXJlY3RpdmUpIHtcbiAgICAgIHRoaXMubnpSb3dEaXJlY3RpdmUuYWN0dWFsR3V0dGVyJFxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzdGFydFdpdGgodGhpcy5uelJvd0RpcmVjdGl2ZS5hY3R1YWxHdXR0ZXIpLFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoYWN0dWFsR3V0dGVyID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdwYWRkaW5nLWxlZnQnLCBgJHthY3R1YWxHdXR0ZXIgLyAyfXB4YCk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncGFkZGluZy1yaWdodCcsIGAke2FjdHVhbEd1dHRlciAvIDJ9cHhgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=