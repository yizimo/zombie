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
export class NzTextEditComponent {
    /**
     * @param {?} host
     * @param {?} cdr
     * @param {?} i18n
     */
    constructor(host, cdr, i18n) {
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
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Text');
            this.cdr.markForCheck();
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
     * @return {?}
     */
    onClick() {
        this.beforeText = this.text;
        this.currentText = this.beforeText;
        this.editing = true;
        this.startEditing.emit();
        this.focusAndSetValue();
    }
    /**
     * @return {?}
     */
    confirm() {
        this.editing = false;
        this.endEditing.emit(this.currentText);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onInput(event) {
        /** @type {?} */
        const target = (/** @type {?} */ (event.target));
        this.currentText = target.value;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onEnter(event) {
        event.stopPropagation();
        event.preventDefault();
        this.confirm();
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.currentText = this.beforeText;
        this.confirm();
    }
    /**
     * @return {?}
     */
    focusAndSetValue() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.textarea && this.textarea.nativeElement) {
                this.textarea.nativeElement.focus();
                this.textarea.nativeElement.value = this.currentText;
                this.autosizeDirective.resizeToFitContent();
            }
        }));
    }
}
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
NzTextEditComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzI18nService }
];
NzTextEditComponent.propDecorators = {
    text: [{ type: Input }],
    startEditing: [{ type: Output }],
    endEditing: [{ type: Output }],
    textarea: [{ type: ViewChild, args: ['textarea', { static: false },] }],
    autosizeDirective: [{ type: ViewChild, args: [NzAutosizeDirective, { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGV4dC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdHlwb2dyYXBoeS8iLCJzb3VyY2VzIjpbIm56LXRleHQtZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVUxRCxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFlOUIsWUFBb0IsSUFBZ0IsRUFBVSxHQUFzQixFQUFVLElBQW1CO1FBQTdFLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQWU7UUFkakcsWUFBTyxHQUFHLEtBQUssQ0FBQzs7UUFFaEIsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUNULGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBR2QsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3hDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBTTNELGtCQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNEQsQ0FBQzs7OztJQUVyRyxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FB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O0lBQ3BCLDRDQUF3Qzs7Ozs7SUFDNUIsbUNBQXdCOzs7OztJQUFFLGtDQUE4Qjs7Ozs7SUFBRSxtQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBOekF1dG9zaXplRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXRleHQtZWRpdCcsXG4gIGV4cG9ydEFzOiAnbnpUZXh0RWRpdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10ZXh0LWVkaXQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgTnpUZXh0RWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgZWRpdGluZyA9IGZhbHNlO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGxvY2FsZTogYW55ID0ge307XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHN0YXJ0RWRpdGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGVuZEVkaXRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQFZpZXdDaGlsZCgndGV4dGFyZWEnLCB7IHN0YXRpYzogZmFsc2UgfSkgdGV4dGFyZWE6IEVsZW1lbnRSZWY8SFRNTFRleHRBcmVhRWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoTnpBdXRvc2l6ZURpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIGF1dG9zaXplRGlyZWN0aXZlOiBOekF1dG9zaXplRGlyZWN0aXZlO1xuXG4gIGJlZm9yZVRleHQ6IHN0cmluZztcbiAgY3VycmVudFRleHQ6IHN0cmluZztcbiAgbmF0aXZlRWxlbWVudCA9IHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvc3Q6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUZXh0Jyk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5iZWZvcmVUZXh0ID0gdGhpcy50ZXh0O1xuICAgIHRoaXMuY3VycmVudFRleHQgPSB0aGlzLmJlZm9yZVRleHQ7XG4gICAgdGhpcy5lZGl0aW5nID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXJ0RWRpdGluZy5lbWl0KCk7XG4gICAgdGhpcy5mb2N1c0FuZFNldFZhbHVlKCk7XG4gIH1cblxuICBjb25maXJtKCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZW5kRWRpdGluZy5lbWl0KHRoaXMuY3VycmVudFRleHQpO1xuICB9XG5cbiAgb25JbnB1dChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICB0aGlzLmN1cnJlbnRUZXh0ID0gdGFyZ2V0LnZhbHVlO1xuICB9XG5cbiAgb25FbnRlcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jb25maXJtKCk7XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRUZXh0ID0gdGhpcy5iZWZvcmVUZXh0O1xuICAgIHRoaXMuY29uZmlybSgpO1xuICB9XG5cbiAgZm9jdXNBbmRTZXRWYWx1ZSgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnRleHRhcmVhICYmIHRoaXMudGV4dGFyZWEubmF0aXZlRWxlbWVudCkge1xuICAgICAgICB0aGlzLnRleHRhcmVhLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgdGhpcy50ZXh0YXJlYS5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5jdXJyZW50VGV4dDtcbiAgICAgICAgdGhpcy5hdXRvc2l6ZURpcmVjdGl2ZS5yZXNpemVUb0ZpdENvbnRlbnQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19