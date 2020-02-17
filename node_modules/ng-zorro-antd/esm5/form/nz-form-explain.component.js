/**
 * @fileoverview added by tsickle
 * Generated from: nz-form-explain.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { helpMotion, warnDeprecation } from 'ng-zorro-antd/core';
var NzFormExplainComponent = /** @class */ (function () {
    function NzFormExplainComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-explain');
        warnDeprecation("'nz-form-explain' is going to be removed in 9.0.0. Use [nzSuccessTip] | [nzWarningTip] | [nzErrorTip] | [nzValidatingTip] in nz-form-control instead. Read https://ng.ant.design/components/form/en");
    }
    NzFormExplainComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-form-explain',
                    exportAs: 'nzFormExplain',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [helpMotion],
                    template: "<div [@helpMotion]>\n  <ng-content></ng-content>\n</div>",
                    styles: ["\n      nz-form-explain {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzFormExplainComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return NzFormExplainComponent;
}());
export { NzFormExplainComponent };
if (false) {
    /** @type {?} */
    NzFormExplainComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzFormExplainComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1leHBsYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZm9ybS8iLCJzb3VyY2VzIjpbIm56LWZvcm0tZXhwbGFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakU7SUFvQkUsZ0NBQW1CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDcEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUMxRSxlQUFlLENBQ2IscU1BQXFNLENBQ3RNLENBQUM7SUFDSixDQUFDOztnQkF6QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDeEIsb0VBQStDOzZCQUU3QyxtRUFJQztpQkFFSjs7OztnQkFsQjRDLFVBQVU7Z0JBQUUsU0FBUzs7SUE2QmxFLDZCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0FQWSxzQkFBc0I7OztJQUNyQiw0Q0FBNkI7Ozs7O0lBQUUsMENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGhlbHBNb3Rpb24sIHdhcm5EZXByZWNhdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWZvcm0tZXhwbGFpbicsXG4gIGV4cG9ydEFzOiAnbnpGb3JtRXhwbGFpbicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW2hlbHBNb3Rpb25dLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotZm9ybS1leHBsYWluLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgbnotZm9ybS1leHBsYWluIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgYFtuelN1Y2Nlc3NUaXBdIHwgW256V2FybmluZ1RpcF0gfCBbbnpFcnJvclRpcF0gfCBbbnpWYWxpZGF0aW5nVGlwXWAgaW4gYE56Rm9ybUNvbnRyb2xDb21wb25lbnRgIGluc3RlYWQsIHdpbGwgcmVtb3ZlIGluIDkuMC4wLlxuICovXG5leHBvcnQgY2xhc3MgTnpGb3JtRXhwbGFpbkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWZvcm0tZXhwbGFpbicpO1xuICAgIHdhcm5EZXByZWNhdGlvbihcbiAgICAgIGAnbnotZm9ybS1leHBsYWluJyBpcyBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLiBVc2UgW256U3VjY2Vzc1RpcF0gfCBbbnpXYXJuaW5nVGlwXSB8IFtuekVycm9yVGlwXSB8IFtuelZhbGlkYXRpbmdUaXBdIGluIG56LWZvcm0tY29udHJvbCBpbnN0ZWFkLiBSZWFkIGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2Zvcm0vZW5gXG4gICAgKTtcbiAgfVxufVxuIl19