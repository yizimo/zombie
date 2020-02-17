/**
 * @fileoverview added by tsickle
 * Generated from: nz-col.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class NzColDirective {
    /**
     * @param {?} nzUpdateHostClassService
     * @param {?} elementRef
     * @param {?} nzRowDirective
     * @param {?} renderer
     */
    constructor(nzUpdateHostClassService, elementRef, nzRowDirective, renderer) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzRowDirective = nzRowDirective;
        this.renderer = renderer;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-col';
        this.destroy$ = new Subject();
    }
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = Object.assign({ [`${this.prefixCls}`]: true, [`${this.prefixCls}-${this.nzSpan}`]: isNotNil(this.nzSpan), [`${this.prefixCls}-order-${this.nzOrder}`]: isNotNil(this.nzOrder), [`${this.prefixCls}-offset-${this.nzOffset}`]: isNotNil(this.nzOffset), [`${this.prefixCls}-pull-${this.nzPull}`]: isNotNil(this.nzPull), [`${this.prefixCls}-push-${this.nzPush}`]: isNotNil(this.nzPush) }, this.generateClass());
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    /**
     * @return {?}
     */
    generateClass() {
        /** @type {?} */
        const listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
        /** @type {?} */
        const listClassMap = {};
        listOfSizeInputName.forEach((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            /** @type {?} */
            const sizeName = name.replace('nz', '').toLowerCase();
            if (isNotNil(this[name])) {
                if (typeof this[name] === 'number' || typeof this[name] === 'string') {
                    listClassMap[`${this.prefixCls}-${sizeName}-${this[name]}`] = true;
                }
                else {
                    /** @type {?} */
                    const embedded = (/** @type {?} */ (this[name]));
                    /** @type {?} */
                    const prefixArray = ['span', 'pull', 'push', 'offset', 'order'];
                    prefixArray.forEach((/**
                     * @param {?} prefix
                     * @return {?}
                     */
                    prefix => {
                        /** @type {?} */
                        const prefixClass = prefix === 'span' ? '-' : `-${prefix}-`;
                        listClassMap[`${this.prefixCls}-${sizeName}${prefixClass}${embedded[prefix]}`] =
                            embedded && isNotNil(embedded[prefix]);
                    }));
                }
            }
        }));
        return listClassMap;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.nzRowDirective) {
            this.nzRowDirective.actualGutter$
                .pipe(startWith(this.nzRowDirective.actualGutter), takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} actualGutter
             * @return {?}
             */
            actualGutter => {
                this.renderer.setStyle(this.el, 'padding-left', `${actualGutter / 2}px`);
                this.renderer.setStyle(this.el, 'padding-right', `${actualGutter / 2}px`);
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzColDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-col],nz-col',
                exportAs: 'nzCol',
                providers: [NzUpdateHostClassService]
            },] }
];
/** @nocollapse */
NzColDirective.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: ElementRef },
    { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZ3JpZC8iLCJzb3VyY2VzIjpbIm56LWNvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFJTCxRQUFRLEVBQ1IsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQW9CLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUVwRCxzQ0FNQzs7O0lBTEMsZ0NBQWM7O0lBQ2QsZ0NBQWM7O0lBQ2QsZ0NBQWM7O0lBQ2Qsa0NBQWdCOztJQUNoQixpQ0FBZTs7QUFRakIsTUFBTSxPQUFPLGNBQWM7Ozs7Ozs7SUFxRHpCLFlBQ1Usd0JBQWtELEVBQ2xELFVBQXNCLEVBQ0gsY0FBOEIsRUFDbEQsUUFBbUI7UUFIbEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ0gsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ2xELGFBQVEsR0FBUixRQUFRLENBQVc7UUF4RHBCLE9BQUUsR0FBZ0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDaEQsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNwQixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQXVEaEMsQ0FBQzs7Ozs7SUF4Q0osV0FBVzs7Y0FDSCxRQUFRLG1CQUNaLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxJ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O0lBQ3pDLDhCQUF5Qzs7SUFDekMsOEJBQXlDOztJQUN6QywrQkFBMEM7Ozs7O0lBdUN4QyxrREFBMEQ7Ozs7O0lBQzFELG9DQUE4Qjs7SUFDOUIsd0NBQXlEOztJQUN6RCxrQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzTm90TmlsLCBOZ0NsYXNzSW50ZXJmYWNlLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOelJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vbnotcm93LmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1iZWRkZWRQcm9wZXJ0eSB7XG4gIHNwYW4/OiBudW1iZXI7XG4gIHB1bGw/OiBudW1iZXI7XG4gIHB1c2g/OiBudW1iZXI7XG4gIG9mZnNldD86IG51bWJlcjtcbiAgb3JkZXI/OiBudW1iZXI7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei1jb2xdLG56LWNvbCcsXG4gIGV4cG9ydEFzOiAnbnpDb2wnLFxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE56Q29sRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1jb2wnO1xuICBwcm90ZWN0ZWQgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIEBJbnB1dCgpIG56U3BhbjogbnVtYmVyO1xuICBASW5wdXQoKSBuek9yZGVyOiBudW1iZXI7XG4gIEBJbnB1dCgpIG56T2Zmc2V0OiBudW1iZXI7XG4gIEBJbnB1dCgpIG56UHVzaDogbnVtYmVyO1xuICBASW5wdXQoKSBuelB1bGw6IG51bWJlcjtcbiAgQElucHV0KCkgbnpYczogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcbiAgQElucHV0KCkgbnpTbTogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcbiAgQElucHV0KCkgbnpNZDogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcbiAgQElucHV0KCkgbnpMZzogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcbiAgQElucHV0KCkgbnpYbDogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcbiAgQElucHV0KCkgbnpYWGw6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XG5cbiAgLyoqIHRlbXAgc29sdXRpb24gc2luY2Ugbm8gbWV0aG9kIGFkZCBjbGFzc01hcCB0byBob3N0IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzcyODkqL1xuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc31gXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56U3Bhbn1gXTogaXNOb3ROaWwodGhpcy5uelNwYW4pLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1vcmRlci0ke3RoaXMubnpPcmRlcn1gXTogaXNOb3ROaWwodGhpcy5uek9yZGVyKSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tb2Zmc2V0LSR7dGhpcy5uek9mZnNldH1gXTogaXNOb3ROaWwodGhpcy5uek9mZnNldCksXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXB1bGwtJHt0aGlzLm56UHVsbH1gXTogaXNOb3ROaWwodGhpcy5uelB1bGwpLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1wdXNoLSR7dGhpcy5uelB1c2h9YF06IGlzTm90TmlsKHRoaXMubnpQdXNoKSxcbiAgICAgIC4uLnRoaXMuZ2VuZXJhdGVDbGFzcygpXG4gICAgfTtcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xuICB9XG5cbiAgZ2VuZXJhdGVDbGFzcygpOiBvYmplY3Qge1xuICAgIGNvbnN0IGxpc3RPZlNpemVJbnB1dE5hbWU6IEFycmF5PGtleW9mIE56Q29sRGlyZWN0aXZlPiA9IFsnbnpYcycsICduelNtJywgJ256TWQnLCAnbnpMZycsICduelhsJywgJ256WFhsJ107XG4gICAgY29uc3QgbGlzdENsYXNzTWFwOiBOZ0NsYXNzSW50ZXJmYWNlID0ge307XG4gICAgbGlzdE9mU2l6ZUlucHV0TmFtZS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgY29uc3Qgc2l6ZU5hbWUgPSBuYW1lLnJlcGxhY2UoJ256JywgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoaXNOb3ROaWwodGhpc1tuYW1lXSkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzW25hbWVdID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdGhpc1tuYW1lXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBsaXN0Q2xhc3NNYXBbYCR7dGhpcy5wcmVmaXhDbHN9LSR7c2l6ZU5hbWV9LSR7dGhpc1tuYW1lXX1gXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZW1iZWRkZWQgPSB0aGlzW25hbWVdIGFzIEVtYmVkZGVkUHJvcGVydHk7XG4gICAgICAgICAgY29uc3QgcHJlZml4QXJyYXk6IEFycmF5PGtleW9mIEVtYmVkZGVkUHJvcGVydHk+ID0gWydzcGFuJywgJ3B1bGwnLCAncHVzaCcsICdvZmZzZXQnLCAnb3JkZXInXTtcbiAgICAgICAgICBwcmVmaXhBcnJheS5mb3JFYWNoKHByZWZpeCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmVmaXhDbGFzcyA9IHByZWZpeCA9PT0gJ3NwYW4nID8gJy0nIDogYC0ke3ByZWZpeH0tYDtcbiAgICAgICAgICAgIGxpc3RDbGFzc01hcFtgJHt0aGlzLnByZWZpeENsc30tJHtzaXplTmFtZX0ke3ByZWZpeENsYXNzfSR7ZW1iZWRkZWRbcHJlZml4XX1gXSA9XG4gICAgICAgICAgICAgIGVtYmVkZGVkICYmIGlzTm90TmlsKGVtYmVkZGVkW3ByZWZpeF0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGxpc3RDbGFzc01hcDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHVibGljIG56Um93RGlyZWN0aXZlOiBOelJvd0RpcmVjdGl2ZSxcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56Um93RGlyZWN0aXZlKSB7XG4gICAgICB0aGlzLm56Um93RGlyZWN0aXZlLmFjdHVhbEd1dHRlciRcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3RhcnRXaXRoKHRoaXMubnpSb3dEaXJlY3RpdmUuYWN0dWFsR3V0dGVyKSxcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKGFjdHVhbEd1dHRlciA9PiB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncGFkZGluZy1sZWZ0JywgYCR7YWN0dWFsR3V0dGVyIC8gMn1weGApO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3BhZGRpbmctcmlnaHQnLCBgJHthY3R1YWxHdXR0ZXIgLyAyfXB4YCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19