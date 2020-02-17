/**
 * @fileoverview added by tsickle
 * Generated from: nz-text-edit.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzAutosizeDirective } from 'ng-zorro-antd/input';
var NzTextEditComponent = /** @class */ (function () {
    function NzTextEditComponent(host, cdr, i18n) {
        this.host = host;
        this.cdr = cdr;
        this.i18n = i18n;
        this.editing = false;
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.destroy$ = new Subject();
        this.startEditing = new EventEmitter();
        this.endEditing = new EventEmitter();
        this.nativeElement = this.host.nativeElement;
    }
    /**
     * @return {?}
     */
    NzTextEditComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Text');
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzTextEditComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    NzTextEditComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.beforeText = this.text;
        this.currentText = this.beforeText;
        this.editing = true;
        this.startEditing.emit();
        this.focusAndSetValue();
    };
    /**
     * @return {?}
     */
    NzTextEditComponent.prototype.confirm = /**
     * @return {?}
     */
    function () {
        this.editing = false;
        this.endEditing.emit(this.currentText);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzTextEditComponent.prototype.onInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var target = (/** @type {?} */ (event.target));
        this.currentText = target.value;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzTextEditComponent.prototype.onEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.confirm();
    };
    /**
     * @return {?}
     */
    NzTextEditComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.currentText = this.beforeText;
        this.confirm();
    };
    /**
     * @return {?}
     */
    NzTextEditComponent.prototype.focusAndSetValue = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.textarea && _this.textarea.nativeElement) {
                _this.textarea.nativeElement.focus();
                _this.textarea.nativeElement.value = _this.currentText;
                _this.autosizeDirective.resizeToFitContent();
            }
        }));
    };
    NzTextEditComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-text-edit',
                    exportAs: 'nzTextEdit',
                    template: "<button\n  *ngIf=\"!editing\"\n  [nzTitle]=\"locale?.edit\"\n  nz-tooltip\n  nz-trans-button\n  class=\"ant-typography-edit\"\n  (click)=\"onClick()\">\n  <i nz-icon nzType=\"edit\"></i>\n</button>\n<ng-container *ngIf=\"editing\">\n  <textarea #textarea\n            nz-input\n            nzAutosize\n            (input)=\"onInput($event)\"\n            (blur)=\"confirm()\"\n            (keydown.esc)=\"onCancel()\"\n            (keydown.enter)=\"onEnter($event)\">\n  </textarea>\n  <button nz-trans-button class=\"ant-typography-edit-content-confirm\" (click)=\"confirm()\">\n    <i nz-icon nzType=\"enter\"></i>\n  </button>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    NzTextEditComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NzI18nService }
    ]; };
    NzTextEditComponent.propDecorators = {
        text: [{ type: Input }],
        startEditing: [{ type: Output }],
        endEditing: [{ type: Output }],
        textarea: [{ type: ViewChild, args: ['textarea', { static: false },] }],
        autosizeDirective: [{ type: ViewChild, args: [NzAutosizeDirective, { static: false },] }]
    };
    return NzTextEditComponent;
}());
export { NzTextEditComponent };
if (false) {
    /** @type {?} */
    NzTextEditComponent.prototype.editing;
    /** @type {?} */
    NzTextEditComponent.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    NzTextEditComponent.prototype.destroy$;
    /** @type {?} */
    NzTextEditComponent.prototype.text;
    /** @type {?} */
    NzTextEditComponent.prototype.startEditing;
    /** @type {?} */
    NzTextEditComponent.prototype.endEditing;
    /** @type {?} */
    NzTextEditComponent.prototype.textarea;
    /** @type {?} */
    NzTextEditComponent.prototype.autosizeDirective;
    /** @type {?} */
    NzTextEditComponent.prototype.beforeText;
    /** @type {?} */
    NzTextEditComponent.prototype.currentText;
    /** @type {?} */
    NzTextEditComponent.prototype.nativeElement;
    /**
     * @type {?}
     * @private
     */
    NzTextEditComponent.prototype.host;
    /**
     * @type {?}
     * @private
     */
    NzTextEditComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTextEditComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGV4dC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdHlwb2dyYXBoeS8iLCJzb3VyY2VzIjpbIm56LXRleHQtZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUxRDtJQXVCRSw2QkFBb0IsSUFBZ0IsRUFBVSxHQUFzQixFQUFVLElBQW1CO1FBQTdFLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQWU7UUFkakcsWUFBTyxHQUFHLEtBQUssQ0FBQzs7UUFFaEIsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUNULGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBR2QsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3hDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBTTNELGtCQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNEQsQ0FBQzs7OztJQUVyRyxzQ0FBUTs7O0lBQVI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMs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akMsbUNBQXNCOztJQUN0QiwyQ0FBMkQ7O0lBQzNELHlDQUEyRDs7SUFDM0QsdUNBQW9GOztJQUNwRixnREFBMEY7O0lBRTFGLHlDQUFtQjs7SUFDbkIsMENBQW9COztJQUNwQiw0Q0FBd0M7Ozs7O0lBQzVCLG1DQUF3Qjs7Ozs7SUFBRSxrQ0FBOEI7Ozs7O0lBQUUsbUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgTnpBdXRvc2l6ZURpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW5wdXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10ZXh0LWVkaXQnLFxuICBleHBvcnRBczogJ256VGV4dEVkaXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGV4dC1lZGl0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIE56VGV4dEVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGVkaXRpbmcgPSBmYWxzZTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBsb2NhbGU6IGFueSA9IHt9O1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcblxuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gIEBPdXRwdXQoKSByZWFkb25seSBzdGFydEVkaXRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBlbmRFZGl0aW5nID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBWaWV3Q2hpbGQoJ3RleHRhcmVhJywgeyBzdGF0aWM6IGZhbHNlIH0pIHRleHRhcmVhOiBFbGVtZW50UmVmPEhUTUxUZXh0QXJlYUVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKE56QXV0b3NpemVEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSBhdXRvc2l6ZURpcmVjdGl2ZTogTnpBdXRvc2l6ZURpcmVjdGl2ZTtcblxuICBiZWZvcmVUZXh0OiBzdHJpbmc7XG4gIGN1cnJlbnRUZXh0OiBzdHJpbmc7XG4gIG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmhvc3QubmF0aXZlRWxlbWVudDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVGV4dCcpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuYmVmb3JlVGV4dCA9IHRoaXMudGV4dDtcbiAgICB0aGlzLmN1cnJlbnRUZXh0ID0gdGhpcy5iZWZvcmVUZXh0O1xuICAgIHRoaXMuZWRpdGluZyA9IHRydWU7XG4gICAgdGhpcy5zdGFydEVkaXRpbmcuZW1pdCgpO1xuICAgIHRoaXMuZm9jdXNBbmRTZXRWYWx1ZSgpO1xuICB9XG5cbiAgY29uZmlybSgpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmVuZEVkaXRpbmcuZW1pdCh0aGlzLmN1cnJlbnRUZXh0KTtcbiAgfVxuXG4gIG9uSW5wdXQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgdGhpcy5jdXJyZW50VGV4dCA9IHRhcmdldC52YWx1ZTtcbiAgfVxuXG4gIG9uRW50ZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY29uZmlybSgpO1xuICB9XG5cbiAgb25DYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5jdXJyZW50VGV4dCA9IHRoaXMuYmVmb3JlVGV4dDtcbiAgICB0aGlzLmNvbmZpcm0oKTtcbiAgfVxuXG4gIGZvY3VzQW5kU2V0VmFsdWUoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy50ZXh0YXJlYSAmJiB0aGlzLnRleHRhcmVhLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy50ZXh0YXJlYS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIHRoaXMudGV4dGFyZWEubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuY3VycmVudFRleHQ7XG4gICAgICAgIHRoaXMuYXV0b3NpemVEaXJlY3RpdmUucmVzaXplVG9GaXRDb250ZW50KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==