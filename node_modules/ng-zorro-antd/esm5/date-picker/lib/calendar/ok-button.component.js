/**
 * @fileoverview added by tsickle
 * Generated from: lib/calendar/ok-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
var OkButtonComponent = /** @class */ (function () {
    function OkButtonComponent() {
        this.okDisabled = false;
        this.clickOk = new EventEmitter();
        this.prefixCls = 'ant-calendar';
    }
    OkButtonComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'ok-button',
                    exportAs: 'okButton',
                    template: "<a\n    class=\"{{ prefixCls }}-ok-btn {{ okDisabled ? prefixCls + '-ok-btn-disabled' : '' }}\"\n    role=\"button\"\n    (click)=\"okDisabled ? null : clickOk.emit()\"\n  >\n    {{ locale.ok }}\n  </a>"
                }] }
    ];
    OkButtonComponent.propDecorators = {
        locale: [{ type: Input }],
        okDisabled: [{ type: Input }],
        clickOk: [{ type: Output }]
    };
    return OkButtonComponent;
}());
export { OkButtonComponent };
if (false) {
    /** @type {?} */
    OkButtonComponent.prototype.locale;
    /** @type {?} */
    OkButtonComponent.prototype.okDisabled;
    /** @type {?} */
    OkButtonComponent.prototype.clickOk;
    /** @type {?} */
    OkButtonComponent.prototype.prefixCls;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2stYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvb2stYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSW5IO0lBQUE7UUFVVyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQ2xCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRXRELGNBQVMsR0FBVyxjQUFjLENBQUM7SUFDckMsQ0FBQzs7Z0JBZEEsU0FBUyxTQUFDO29CQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7b0JBRS9DLFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsc05BQXVDO2lCQUN4Qzs7O3lCQUVFLEtBQUs7NkJBQ0wsS0FBSzswQkFDTCxNQUFNOztJQUdULHdCQUFDO0NBQUEsQUFkRCxJQWNDO1NBTlksaUJBQWlCOzs7SUFDNUIsbUNBQXlDOztJQUN6Qyx1Q0FBcUM7O0lBQ3JDLG9DQUFzRDs7SUFFdEQsc0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdvay1idXR0b24nLFxuICBleHBvcnRBczogJ29rQnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICdvay1idXR0b24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE9rQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcbiAgQElucHV0KCkgb2tEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xpY2tPayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXInO1xufVxuIl19