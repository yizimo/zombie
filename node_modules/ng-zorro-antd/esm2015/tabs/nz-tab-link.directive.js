/**
 * @fileoverview added by tsickle
 * Generated from: nz-tab-link.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Optional, Self } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
/**
 * This component is for catching `routerLink` directive.
 */
export class NzTabLinkDirective {
    /**
     * @param {?=} routerLink
     * @param {?=} routerLinkWithHref
     */
    constructor(routerLink, routerLinkWithHref) {
        this.routerLink = routerLink;
        this.routerLinkWithHref = routerLinkWithHref;
    }
}
NzTabLinkDirective.decorators = [
    { type: Directive, args: [{
                selector: 'a[nz-tab-link]',
                exportAs: 'nzTabLink'
            },] }
];
/** @nocollapse */
NzTabLinkDirective.ctorParameters = () => [
    { type: RouterLink, decorators: [{ type: Optional }, { type: Self }] },
    { type: RouterLinkWithHref, decorators: [{ type: Optional }, { type: Self }] }
];
if (false) {
    /** @type {?} */
    NzTabLinkDirective.prototype.routerLink;
    /** @type {?} */
    NzTabLinkDirective.prototype.routerLinkWithHref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFiLWxpbmsuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJzLyIsInNvdXJjZXMiOlsibnotdGFiLWxpbmsuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFTakUsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFDN0IsWUFDNkIsVUFBdUIsRUFDdkIsa0JBQXVDO1FBRHZDLGVBQVUsR0FBVixVQUFVLENBQWE7UUFDdkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFxQjtJQUNqRSxDQUFDOzs7WUFSTCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLFdBQVc7YUFDdEI7Ozs7WUFSUSxVQUFVLHVCQVdkLFFBQVEsWUFBSSxJQUFJO1lBWEEsa0JBQWtCLHVCQVlsQyxRQUFRLFlBQUksSUFBSTs7OztJQURqQix3Q0FBa0Q7O0lBQ2xELGdEQUFrRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIE9wdGlvbmFsLCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJMaW5rLCBSb3V0ZXJMaW5rV2l0aEhyZWYgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGlzIGZvciBjYXRjaGluZyBgcm91dGVyTGlua2AgZGlyZWN0aXZlLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdhW256LXRhYi1saW5rXScsXG4gIGV4cG9ydEFzOiAnbnpUYWJMaW5rJ1xufSlcbmV4cG9ydCBjbGFzcyBOelRhYkxpbmtEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyByb3V0ZXJMaW5rPzogUm91dGVyTGluayxcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyByb3V0ZXJMaW5rV2l0aEhyZWY/OiBSb3V0ZXJMaW5rV2l0aEhyZWZcbiAgKSB7fVxufVxuIl19