/**
 * @fileoverview added by tsickle
 * Generated from: nz-modal-footer.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Optional, TemplateRef } from '@angular/core';
import { NzModalRef } from './nz-modal-ref.class';
var NzModalFooterDirective = /** @class */ (function () {
    function NzModalFooterDirective(nzModalRef, templateRef) {
        this.nzModalRef = nzModalRef;
        this.templateRef = templateRef;
        if (this.nzModalRef) {
            this.nzModalRef.getInstance().setFooterWithTemplate(this.templateRef);
        }
    }
    NzModalFooterDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nzModalFooter]',
                    exportAs: 'nzModalFooter'
                },] }
    ];
    /** @nocollapse */
    NzModalFooterDirective.ctorParameters = function () { return [
        { type: NzModalRef, decorators: [{ type: Optional }] },
        { type: TemplateRef }
    ]; };
    return NzModalFooterDirective;
}());
export { NzModalFooterDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzModalFooterDirective.prototype.nzModalRef;
    /** @type {?} */
    NzModalFooterDirective.prototype.templateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwtZm9vdGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbW9kYWwvIiwic291cmNlcyI6WyJuei1tb2RhbC1mb290ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQ7SUFLRSxnQ0FBZ0MsVUFBc0IsRUFBUyxXQUE0QjtRQUEzRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBQ3pGLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN2RTtJQUNILENBQUM7O2dCQVRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsZUFBZTtpQkFDMUI7Ozs7Z0JBTFEsVUFBVSx1QkFPSixRQUFRO2dCQVJPLFdBQVc7O0lBYXpDLDZCQUFDO0NBQUEsQUFWRCxJQVVDO1NBTlksc0JBQXNCOzs7Ozs7SUFDckIsNENBQTBDOztJQUFFLDZDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIE9wdGlvbmFsLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpNb2RhbFJlZiB9IGZyb20gJy4vbnotbW9kYWwtcmVmLmNsYXNzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256TW9kYWxGb290ZXJdJyxcbiAgZXhwb3J0QXM6ICduek1vZGFsRm9vdGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBOek1vZGFsRm9vdGVyRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBuek1vZGFsUmVmOiBOek1vZGFsUmVmLCBwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHt9Pikge1xuICAgIGlmICh0aGlzLm56TW9kYWxSZWYpIHtcbiAgICAgIHRoaXMubnpNb2RhbFJlZi5nZXRJbnN0YW5jZSgpLnNldEZvb3RlcldpdGhUZW1wbGF0ZSh0aGlzLnRlbXBsYXRlUmVmKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==