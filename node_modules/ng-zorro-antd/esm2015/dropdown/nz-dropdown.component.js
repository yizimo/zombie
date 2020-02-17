/**
 * @fileoverview added by tsickle
 * Generated from: nz-dropdown.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Host, Injector, Input, Optional, Output, Self, ViewEncapsulation } from '@angular/core';
import { combineLatest, merge, EMPTY, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, mapTo, takeUntil } from 'rxjs/operators';
import { slideMotion, warnDeprecation, DEFAULT_DROPDOWN_POSITIONS, InputBoolean, NzDropdownHigherOrderServiceToken, NzNoAnimationDirective, POSITION_MAP } from 'ng-zorro-antd/core';
import { NzDropDownDirective } from './nz-dropdown.directive';
import { NzMenuDropdownService } from './nz-menu-dropdown.service';
/**
 * @param {?} injector
 * @return {?}
 */
export function menuServiceFactory(injector) {
    return injector.get(NzMenuDropdownService);
}
/**
 * @deprecated Use `NzDropdownDirective` instead, will remove in 9.0.0.
 */
export class NzDropDownComponent {
    /**
     * @param {?} cdr
     * @param {?} nzMenuDropdownService
     * @param {?=} noAnimation
     */
    constructor(cdr, nzMenuDropdownService, noAnimation) {
        this.cdr = cdr;
        this.nzMenuDropdownService = nzMenuDropdownService;
        this.noAnimation = noAnimation;
        this.triggerWidth = 0;
        this.dropDownPosition = 'bottom';
        this.positions = [...DEFAULT_DROPDOWN_POSITIONS];
        this.visible$ = new Subject();
        this.destroy$ = new Subject();
        this.nzTrigger = 'hover';
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzPlacement = 'bottomLeft';
        this.nzClickHide = true;
        this.nzDisabled = false;
        this.nzVisible = false;
        this.nzTableFilter = false;
        this.nzVisibleChange = new EventEmitter();
        warnDeprecation(`'nz-dropdown' Component is going to be removed in 9.0.0. Please use 'nz-dropdown-menu' instead. Read https://ng.ant.design/components/dropdown/en`);
    }
    /**
     * @param {?} visible
     * @param {?=} trigger
     * @return {?}
     */
    setVisibleStateWhen(visible, trigger = 'all') {
        if (this.nzTrigger === trigger || trigger === 'all') {
            this.visible$.next(visible);
        }
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        this.dropDownPosition = position.connectionPair.originY;
        this.cdr.markForCheck();
    }
    /**
     * @param {?} observable$
     * @return {?}
     */
    startSubscribe(observable$) {
        /** @type {?} */
        const click$ = this.nzClickHide ? this.nzMenuDropdownService.menuItemClick$.pipe(mapTo(false)) : EMPTY;
        combineLatest([merge(observable$, click$), this.nzMenuDropdownService.menuOpen$])
            .pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        value => value[0] || value[1])), debounceTime(50), distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} visible
         * @return {?}
         */
        visible => {
            if (!this.nzDisabled && this.nzVisible !== visible) {
                this.nzVisible = visible;
                this.nzVisibleChange.emit(this.nzVisible);
                this.triggerWidth = this.nzDropDownDirective.elementRef.nativeElement.getBoundingClientRect().width;
                this.cdr.markForCheck();
            }
        }));
    }
    /**
     * @return {?}
     */
    updateDisabledState() {
        if (this.nzDropDownDirective) {
            this.nzDropDownDirective.setDisabled(this.nzDisabled);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.startSubscribe(merge(this.visible$, this.nzTrigger === 'hover' ? this.nzDropDownDirective.hover$ : this.nzDropDownDirective.$click));
        this.updateDisabledState();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzVisible) {
            this.visible$.next(this.nzVisible);
        }
        if (changes.nzDisabled) {
            this.updateDisabledState();
        }
        if (changes.nzPlacement) {
            this.dropDownPosition = this.nzPlacement.indexOf('top') !== -1 ? 'top' : 'bottom';
            this.positions = [POSITION_MAP[this.nzPlacement], ...this.positions];
        }
    }
}
NzDropDownComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-dropdown',
                exportAs: 'nzDropdown',
                preserveWhitespaces: false,
                providers: [
                    NzMenuDropdownService,
                    {
                        provide: NzDropdownHigherOrderServiceToken,
                        useFactory: menuServiceFactory,
                        deps: [[new Self(), Injector]]
                    }
                ],
                animations: [slideMotion],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<ng-content select=\"[nz-dropdown]\"></ng-content>\n<ng-template\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"nzTrigger === 'click'\"\n  [cdkConnectedOverlayPositions]=\"positions\"\n  [cdkConnectedOverlayOrigin]=\"nzDropDownDirective\"\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\n  [cdkConnectedOverlayOpen]=\"nzVisible\"\n  (backdropClick)=\"setVisibleStateWhen(false)\"\n  (detach)=\"setVisibleStateWhen(false)\"\n  (positionChange)=\"onPositionChange($event)\">\n  <div class=\"{{'ant-dropdown ant-dropdown-placement-'+nzPlacement}}\"\n    [ngClass]=\"nzOverlayClassName\"\n    [ngStyle]=\"nzOverlayStyle\"\n    [@slideMotion]=\"dropDownPosition\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [style.minWidth.px]=\"triggerWidth\"\n    (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\n    (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\n    <div [class.ant-table-filter-dropdown]=\"nzTableFilter\">\n      <ng-content select=\"[nz-menu]\"></ng-content>\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>",
                styles: [`
      :root .ant-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `]
            }] }
];
/** @nocollapse */
NzDropDownComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzMenuDropdownService },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzDropDownComponent.propDecorators = {
    nzDropDownDirective: [{ type: ContentChild, args: [NzDropDownDirective, { static: false },] }],
    nzTrigger: [{ type: Input }],
    nzOverlayClassName: [{ type: Input }],
    nzOverlayStyle: [{ type: Input }],
    nzPlacement: [{ type: Input }],
    nzClickHide: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzVisible: [{ type: Input }],
    nzTableFilter: [{ type: Input }],
    nzVisibleChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzDropDownComponent.prototype, "nzClickHide", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzDropDownComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzDropDownComponent.prototype, "nzVisible", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzDropDownComponent.prototype, "nzTableFilter", void 0);
if (false) {
    /** @type {?} */
    NzDropDownComponent.prototype.triggerWidth;
    /** @type {?} */
    NzDropDownComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzDropDownComponent.prototype.positions;
    /** @type {?} */
    NzDropDownComponent.prototype.visible$;
    /**
     * @type {?}
     * @private
     */
    NzDropDownComponent.prototype.destroy$;
    /** @type {?} */
    NzDropDownComponent.prototype.nzDropDownDirective;
    /** @type {?} */
    NzDropDownComponent.prototype.nzTrigger;
    /** @type {?} */
    NzDropDownComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzDropDownComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzDropDownComponent.prototype.nzPlacement;
    /** @type {?} */
    NzDropDownComponent.prototype.nzClickHide;
    /** @type {?} */
    NzDropDownComponent.prototype.nzDisabled;
    /** @type {?} */
    NzDropDownComponent.prototype.nzVisible;
    /** @type {?} */
    NzDropDownComponent.prototype.nzTableFilter;
    /** @type {?} */
    NzDropDownComponent.prototype.nzVisibleChange;
    /**
     * @type {?}
     * @protected
     */
    NzDropDownComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzDropDownComponent.prototype.nzMenuDropdownService;
    /** @type {?} */
    NzDropDownComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kcm9wZG93bi8iLCJzb3VyY2VzIjpbIm56LWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEVBRUosaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNGLE9BQU8sRUFDTCxXQUFXLEVBQ1gsZUFBZSxFQUNmLDBCQUEwQixFQUMxQixZQUFZLEVBQ1osaUNBQWlDLEVBRWpDLHNCQUFzQixFQUN0QixZQUFZLEVBQ2IsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7QUFJbkUsTUFBTSxVQUFVLGtCQUFrQixDQUFDLFFBQWtCO0lBQ25ELE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUErQkQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFxRDlCLFlBQ1ksR0FBc0IsRUFDeEIscUJBQTRDLEVBQ3pCLFdBQW9DO1FBRnJELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3hCLDBCQUFx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IENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFNlbGYsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBtZXJnZSwgRU1QVFksIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgbWFwVG8sIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgc2xpZGVNb3Rpb24sXG4gIHdhcm5EZXByZWNhdGlvbixcbiAgREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlMsXG4gIElucHV0Qm9vbGVhbixcbiAgTnpEcm9wZG93bkhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxuICBOek1lbnVCYXNlU2VydmljZSxcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcbiAgUE9TSVRJT05fTUFQXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBOekRyb3BEb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1kcm9wZG93bi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpNZW51RHJvcGRvd25TZXJ2aWNlIH0gZnJvbSAnLi9uei1tZW51LWRyb3Bkb3duLnNlcnZpY2UnO1xuXG5leHBvcnQgdHlwZSBOelBsYWNlbWVudCA9ICdib3R0b21MZWZ0JyB8ICdib3R0b21DZW50ZXInIHwgJ2JvdHRvbVJpZ2h0JyB8ICd0b3BMZWZ0JyB8ICd0b3BDZW50ZXInIHwgJ3RvcFJpZ2h0JztcblxuZXhwb3J0IGZ1bmN0aW9uIG1lbnVTZXJ2aWNlRmFjdG9yeShpbmplY3RvcjogSW5qZWN0b3IpOiBOek1lbnVCYXNlU2VydmljZSB7XG4gIHJldHVybiBpbmplY3Rvci5nZXQoTnpNZW51RHJvcGRvd25TZXJ2aWNlKTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotZHJvcGRvd24nLFxuICBleHBvcnRBczogJ256RHJvcGRvd24nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTnpNZW51RHJvcGRvd25TZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE56RHJvcGRvd25IaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcbiAgICAgIHVzZUZhY3Rvcnk6IG1lbnVTZXJ2aWNlRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtbbmV3IFNlbGYoKSwgSW5qZWN0b3JdXVxuICAgIH1cbiAgXSxcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIDpyb290IC5hbnQtZHJvcGRvd24ge1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIGBOekRyb3Bkb3duRGlyZWN0aXZlYCBpbnN0ZWFkLCB3aWxsIHJlbW92ZSBpbiA5LjAuMC5cbiAqL1xuZXhwb3J0IGNsYXNzIE56RHJvcERvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XG4gIHRyaWdnZXJXaWR0aCA9IDA7XG4gIGRyb3BEb3duUG9zaXRpb246ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyA9ICdib3R0b20nO1xuICBwb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsuLi5ERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OU107XG4gIHZpc2libGUkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIEBDb250ZW50Q2hpbGQoTnpEcm9wRG93bkRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIG56RHJvcERvd25EaXJlY3RpdmU6IE56RHJvcERvd25EaXJlY3RpdmU7XG4gIEBJbnB1dCgpIG56VHJpZ2dlcjogJ2NsaWNrJyB8ICdob3ZlcicgPSAnaG92ZXInO1xuICBASW5wdXQoKSBuek92ZXJsYXlDbGFzc05hbWUgPSAnJztcbiAgQElucHV0KCkgbnpPdmVybGF5U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgQElucHV0KCkgbnpQbGFjZW1lbnQ6IE56UGxhY2VtZW50ID0gJ2JvdHRvbUxlZnQnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDbGlja0hpZGUgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpWaXNpYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelRhYmxlRmlsdGVyID0gZmFsc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBzZXRWaXNpYmxlU3RhdGVXaGVuKHZpc2libGU6IGJvb2xlYW4sIHRyaWdnZXI6ICdjbGljaycgfCAnaG92ZXInIHwgJ2FsbCcgPSAnYWxsJyk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56VHJpZ2dlciA9PT0gdHJpZ2dlciB8fCB0cmlnZ2VyID09PSAnYWxsJykge1xuICAgICAgdGhpcy52aXNpYmxlJC5uZXh0KHZpc2libGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xuICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBzdGFydFN1YnNjcmliZShvYnNlcnZhYmxlJDogT2JzZXJ2YWJsZTxib29sZWFuPik6IHZvaWQge1xuICAgIGNvbnN0IGNsaWNrJCA9IHRoaXMubnpDbGlja0hpZGUgPyB0aGlzLm56TWVudURyb3Bkb3duU2VydmljZS5tZW51SXRlbUNsaWNrJC5waXBlKG1hcFRvKGZhbHNlKSkgOiBFTVBUWTtcbiAgICBjb21iaW5lTGF0ZXN0KFttZXJnZShvYnNlcnZhYmxlJCwgY2xpY2skKSwgdGhpcy5uek1lbnVEcm9wZG93blNlcnZpY2UubWVudU9wZW4kXSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAodmFsdWUgPT4gdmFsdWVbMF0gfHwgdmFsdWVbMV0pLFxuICAgICAgICBkZWJvdW5jZVRpbWUoNTApLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUodmlzaWJsZSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5uekRpc2FibGVkICYmIHRoaXMubnpWaXNpYmxlICE9PSB2aXNpYmxlKSB7XG4gICAgICAgICAgdGhpcy5uelZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQodGhpcy5uelZpc2libGUpO1xuICAgICAgICAgIHRoaXMudHJpZ2dlcldpZHRoID0gdGhpcy5uekRyb3BEb3duRGlyZWN0aXZlLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICB1cGRhdGVEaXNhYmxlZFN0YXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RHJvcERvd25EaXJlY3RpdmUpIHtcbiAgICAgIHRoaXMubnpEcm9wRG93bkRpcmVjdGl2ZS5zZXREaXNhYmxlZCh0aGlzLm56RGlzYWJsZWQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbnpNZW51RHJvcGRvd25TZXJ2aWNlOiBOek1lbnVEcm9wZG93blNlcnZpY2UsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXG4gICkge1xuICAgIHdhcm5EZXByZWNhdGlvbihcbiAgICAgIGAnbnotZHJvcGRvd24nIENvbXBvbmVudCBpcyBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICduei1kcm9wZG93bi1tZW51JyBpbnN0ZWFkLiBSZWFkIGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2Ryb3Bkb3duL2VuYFxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGFydFN1YnNjcmliZShcbiAgICAgIG1lcmdlKFxuICAgICAgICB0aGlzLnZpc2libGUkLFxuICAgICAgICB0aGlzLm56VHJpZ2dlciA9PT0gJ2hvdmVyJyA/IHRoaXMubnpEcm9wRG93bkRpcmVjdGl2ZS5ob3ZlciQgOiB0aGlzLm56RHJvcERvd25EaXJlY3RpdmUuJGNsaWNrXG4gICAgICApXG4gICAgKTtcbiAgICB0aGlzLnVwZGF0ZURpc2FibGVkU3RhdGUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uelZpc2libGUpIHtcbiAgICAgIHRoaXMudmlzaWJsZSQubmV4dCh0aGlzLm56VmlzaWJsZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm56RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlRGlzYWJsZWRTdGF0ZSgpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uelBsYWNlbWVudCkge1xuICAgICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gdGhpcy5uelBsYWNlbWVudC5pbmRleE9mKCd0b3AnKSAhPT0gLTEgPyAndG9wJyA6ICdib3R0b20nO1xuICAgICAgdGhpcy5wb3NpdGlvbnMgPSBbUE9TSVRJT05fTUFQW3RoaXMubnpQbGFjZW1lbnRdLCAuLi50aGlzLnBvc2l0aW9uc107XG4gICAgfVxuICB9XG59XG4iXX0=