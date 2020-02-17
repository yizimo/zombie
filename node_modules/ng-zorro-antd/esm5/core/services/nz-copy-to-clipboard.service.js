/**
 * @fileoverview added by tsickle
 * Generated from: services/nz-copy-to-clipboard.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { NzCopyToClipboardServiceModule } from './nz-copy-to-clipboard.service.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./nz-copy-to-clipboard.service.module";
var NzCopyToClipboardService = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function NzCopyToClipboardService(document) {
        this.document = document;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    NzCopyToClipboardService.prototype.copy = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            /** @type {?} */
            var copyTextArea = null;
            try {
                // tslint:disable-next-line no-any
                copyTextArea = (/** @type {?} */ (_this.document.createElement('textarea')));
                (/** @type {?} */ (copyTextArea.style)).all = 'unset';
                copyTextArea.style.position = 'fixed';
                copyTextArea.style.top = '0';
                copyTextArea.style.clip = 'rect(0, 0, 0, 0)';
                copyTextArea.style.whiteSpace = 'pre';
                copyTextArea.style.webkitUserSelect = 'text';
                (/** @type {?} */ (copyTextArea.style)).MozUserSelect = 'text';
                copyTextArea.style.msUserSelect = 'text';
                copyTextArea.style.userSelect = 'text';
                _this.document.body.appendChild(copyTextArea);
                copyTextArea.value = text;
                copyTextArea.select();
                /** @type {?} */
                var successful = _this.document.execCommand('copy');
                if (!successful) {
                    reject(text);
                }
                resolve(text);
            }
            finally {
                if (copyTextArea) {
                    _this.document.body.removeChild(copyTextArea);
                }
            }
        }));
    };
    NzCopyToClipboardService.decorators = [
        { type: Injectable, args: [{
                    providedIn: NzCopyToClipboardServiceModule
                },] }
    ];
    /** @nocollapse */
    NzCopyToClipboardService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ NzCopyToClipboardService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzCopyToClipboardService_Factory() { return new NzCopyToClipboardService(i0.ɵɵinject(i1.DOCUMENT)); }, token: NzCopyToClipboardService, providedIn: i2.NzCopyToClipboardServiceModule });
    return NzCopyToClipboardService;
}());
export { NzCopyToClipboardService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzCopyToClipboardService.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29weS10by1jbGlwYm9hcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL256LWNvcHktdG8tY2xpcGJvYXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7O0FBRXZGO0lBSUUsa0NBQWtDO0lBQ2xDLGtDQUFzQyxRQUFhO1FBQWIsYUFBUSxHQUFSLFFBQVEsQ0FBSztJQUFHLENBQUM7Ozs7O0lBRXZELHVDQUFJOzs7O0lBQUosVUFBSyxJQUFZO1FBQWpCLGlCQWdDQztRQS9CQyxPQUFPLElBQUksT0FBTzs7Ozs7UUFDaEIsVUFBQyxPQUFPLEVBQUUsTUFBTTs7Z0JBQ1YsWUFBWSxHQUFHLElBQUk7WUFDdkIsSUFBSTtnQkFDRixrQ0FBa0M7Z0JBQ2xDLFlBQVksR0FBRyxtQkFBQSxLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBTyxDQUFDO2dCQUM5RCxtQkFBQSxZQUFZLENBQUMsS0FBSyxFQUFDLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztnQkFDbEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO2dCQUN0QyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0JBQzdCLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDO2dCQUM3QyxZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3RDLFlBQVksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO2dCQUM3QyxtQkFBQSxZQUFZLENBQUMsS0FBSyxFQUFDLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztnQkFDM0MsWUFBWSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO2dCQUN6QyxZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7Z0JBQ3ZDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDN0MsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQzFCLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7b0JBRWhCLFVBQVUsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNkO2dCQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNmO29CQUFTO2dCQUNSLElBQUksWUFBWSxFQUFFO29CQUNoQixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzlDO2FBQ0Y7UUFDSCxDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQXZDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLDhCQUE4QjtpQkFDM0M7Ozs7Z0RBR2MsTUFBTSxTQUFDLFFBQVE7OzttQ0FqQjlCO0NBb0RDLEFBeENELElBd0NDO1NBckNZLHdCQUF3Qjs7Ozs7O0lBRXZCLDRDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56Q29weVRvQ2xpcGJvYXJkU2VydmljZU1vZHVsZSB9IGZyb20gJy4vbnotY29weS10by1jbGlwYm9hcmQuc2VydmljZS5tb2R1bGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IE56Q29weVRvQ2xpcGJvYXJkU2VydmljZU1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBOekNvcHlUb0NsaXBib2FyZFNlcnZpY2Uge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge31cblxuICBjb3B5KHRleHQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oXG4gICAgICAocmVzb2x2ZSwgcmVqZWN0KTogdm9pZCA9PiB7XG4gICAgICAgIGxldCBjb3B5VGV4dEFyZWEgPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcbiAgICAgICAgICBjb3B5VGV4dEFyZWEgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJykgYXMgYW55O1xuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZSEuYWxsID0gJ3Vuc2V0JztcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS50b3AgPSAnMCc7XG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLmNsaXAgPSAncmVjdCgwLCAwLCAwLCAwKSc7XG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLndoaXRlU3BhY2UgPSAncHJlJztcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9ICd0ZXh0JztcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUhLk1velVzZXJTZWxlY3QgPSAndGV4dCc7XG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLm1zVXNlclNlbGVjdCA9ICd0ZXh0JztcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUudXNlclNlbGVjdCA9ICd0ZXh0JztcbiAgICAgICAgICB0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29weVRleHRBcmVhKTtcbiAgICAgICAgICBjb3B5VGV4dEFyZWEudmFsdWUgPSB0ZXh0O1xuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zZWxlY3QoKTtcblxuICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NmdWwgPSB0aGlzLmRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgICAgICAgaWYgKCFzdWNjZXNzZnVsKSB7XG4gICAgICAgICAgICByZWplY3QodGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc29sdmUodGV4dCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKGNvcHlUZXh0QXJlYSkge1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvcHlUZXh0QXJlYSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIl19