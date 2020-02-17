/**
 * @fileoverview added by tsickle
 * Generated from: nz-text-copy.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { NzCopyToClipboardService } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var NzTextCopyComponent = /** @class */ (function () {
    function NzTextCopyComponent(host, cdr, copyToClipboard, i18n) {
        this.host = host;
        this.cdr = cdr;
        this.copyToClipboard = copyToClipboard;
        this.i18n = i18n;
        this.copied = false;
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.nativeElement = this.host.nativeElement;
        this.destroy$ = new Subject();
        this.textCopy = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NzTextCopyComponent.prototype.ngOnInit = /**
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
    NzTextCopyComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        clearTimeout(this.copyId);
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    NzTextCopyComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.copied) {
            return;
        }
        this.copied = true;
        this.cdr.detectChanges();
        /** @type {?} */
        var text = this.text;
        this.textCopy.emit(text);
        this.copyToClipboard
            .copy(text)
            .then((/**
         * @return {?}
         */
        function () { return _this.onCopied(); }))
            .catch((/**
         * @return {?}
         */
        function () { return _this.onCopied(); }));
    };
    /**
     * @return {?}
     */
    NzTextCopyComponent.prototype.onCopied = /**
     * @return {?}
     */
    function () {
        var _this = this;
        clearTimeout(this.copyId);
        this.copyId = setTimeout((/**
         * @return {?}
         */
        function () {
            _this.copied = false;
            _this.cdr.detectChanges();
        }), 3000);
    };
    NzTextCopyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-text-copy',
                    exportAs: 'nzTextCopy',
                    template: "<button\n  nz-tooltip\n  nz-trans-button\n  [nzTitle]=\"copied ? locale?.copied : locale?.copy\"\n  class=\"ant-typography-copy\"\n  [class.ant-typography-copy-success]=\"copied\"\n  (click)=\"onClick()\">\n  <i nz-icon [nzType]=\"copied ? 'check' : 'copy'\"></i>\n</button>\n\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    NzTextCopyComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NzCopyToClipboardService },
        { type: NzI18nService }
    ]; };
    NzTextCopyComponent.propDecorators = {
        text: [{ type: Input }],
        textCopy: [{ type: Output }]
    };
    return NzTextCopyComponent;
}());
export { NzTextCopyComponent };
if (false) {
    /** @type {?} */
    NzTextCopyComponent.prototype.copied;
    /** @type {?} */
    NzTextCopyComponent.prototype.copyId;
    /** @type {?} */
    NzTextCopyComponent.prototype.locale;
    /** @type {?} */
    NzTextCopyComponent.prototype.nativeElement;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.destroy$;
    /** @type {?} */
    NzTextCopyComponent.prototype.text;
    /** @type {?} */
    NzTextCopyComponent.prototype.textCopy;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.host;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.copyToClipboard;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGV4dC1jb3B5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdHlwb2dyYXBoeS8iLCJzb3VyY2VzIjpbIm56LXRleHQtY29weS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBbUJFLDZCQUNVLElBQWdCLEVBQ2hCLEdBQXNCLEVBQ3RCLGVBQXlDLEVBQ3pDLElBQW1CO1FBSG5CLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsb0JBQWUsR0FBZixlQUFlLENBQTBCO1FBQ3pDLFNBQUksR0FBSixJQUFJLENBQWU7UUFkN0IsV0FBTSxHQUFHLEtBQUssQ0FBQzs7UUFHZixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDaEMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFHZCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQU90RCxDQUFDOzs7O0lBRUosc0NBQVE7OztJQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDO1lBQzlELEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQscUNBQU87OztJQUFQO1FBQUEsaUJBWUM7UUFYQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDOztZQUNuQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWU7YUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNWLElBQUk7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxFQUFFLEVBQWYsQ0FBZSxFQUFDO2FBQzNCLEtBQUs7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxFQUFFLEVBQWYsQ0FBZSxFQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUFBLGlCQU1DO1FBTEMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVU7OztRQUFDO1lBQ3ZCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7Z0JBM0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLGtTQUE0QztvQkFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7OztnQkFyQkMsVUFBVTtnQkFGVixpQkFBaUI7Z0JBV1Ysd0JBQXdCO2dCQUN4QixhQUFhOzs7dUJBb0JuQixLQUFLOzJCQUNMLE1BQU07O0lBMkNULDBCQUFDO0NBQUEsQUE1REQsSUE0REM7U0FwRFksbUJBQW1COzs7SUFDOUIscUNBQWU7O0lBQ2YscUNBQWU7O0lBRWYscUNBQWlCOztJQUNqQiw0Q0FBd0M7Ozs7O0lBQ3hDLHVDQUFpQzs7SUFFakMsbUNBQXNCOztJQUN0Qix1Q0FBeUQ7Ozs7O0lBR3ZELG1DQUF3Qjs7Ozs7SUFDeEIsa0NBQThCOzs7OztJQUM5Qiw4Q0FBaUQ7Ozs7O0lBQ2pELG1DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56Q29weVRvQ2xpcGJvYXJkU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdGV4dC1jb3B5JyxcbiAgZXhwb3J0QXM6ICduelRleHRDb3B5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRleHQtY29weS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBOelRleHRDb3B5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb3BpZWQgPSBmYWxzZTtcbiAgY29weUlkOiBudW1iZXI7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgbG9jYWxlOiBhbnkgPSB7fTtcbiAgbmF0aXZlRWxlbWVudCA9IHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50O1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcblxuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gIEBPdXRwdXQoKSByZWFkb25seSB0ZXh0Q29weSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaG9zdDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBjb3B5VG9DbGlwYm9hcmQ6IE56Q29weVRvQ2xpcGJvYXJkU2VydmljZSxcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUZXh0Jyk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmNvcHlJZCk7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb3BpZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jb3BpZWQgPSB0cnVlO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy50ZXh0O1xuICAgIHRoaXMudGV4dENvcHkuZW1pdCh0ZXh0KTtcbiAgICB0aGlzLmNvcHlUb0NsaXBib2FyZFxuICAgICAgLmNvcHkodGV4dClcbiAgICAgIC50aGVuKCgpID0+IHRoaXMub25Db3BpZWQoKSlcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLm9uQ29waWVkKCkpO1xuICB9XG5cbiAgb25Db3BpZWQoKTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY29weUlkKTtcbiAgICB0aGlzLmNvcHlJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jb3BpZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9LCAzMDAwKTtcbiAgfVxufVxuIl19