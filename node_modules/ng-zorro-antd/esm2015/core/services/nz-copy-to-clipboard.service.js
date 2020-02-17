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
export class NzCopyToClipboardService {
    // tslint:disable-next-line:no-any
    /**
     * @param {?} document
     */
    constructor(document) {
        this.document = document;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    copy(text) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            let copyTextArea = null;
            try {
                // tslint:disable-next-line no-any
                copyTextArea = (/** @type {?} */ (this.document.createElement('textarea')));
                (/** @type {?} */ (copyTextArea.style)).all = 'unset';
                copyTextArea.style.position = 'fixed';
                copyTextArea.style.top = '0';
                copyTextArea.style.clip = 'rect(0, 0, 0, 0)';
                copyTextArea.style.whiteSpace = 'pre';
                copyTextArea.style.webkitUserSelect = 'text';
                (/** @type {?} */ (copyTextArea.style)).MozUserSelect = 'text';
                copyTextArea.style.msUserSelect = 'text';
                copyTextArea.style.userSelect = 'text';
                this.document.body.appendChild(copyTextArea);
                copyTextArea.value = text;
                copyTextArea.select();
                /** @type {?} */
                const successful = this.document.execCommand('copy');
                if (!successful) {
                    reject(text);
                }
                resolve(text);
            }
            finally {
                if (copyTextArea) {
                    this.document.body.removeChild(copyTextArea);
                }
            }
        }));
    }
}
NzCopyToClipboardService.decorators = [
    { type: Injectable, args: [{
                providedIn: NzCopyToClipboardServiceModule
            },] }
];
/** @nocollapse */
NzCopyToClipboardService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ NzCopyToClipboardService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzCopyToClipboardService_Factory() { return new NzCopyToClipboardService(i0.ɵɵinject(i1.DOCUMENT)); }, token: NzCopyToClipboardService, providedIn: i2.NzCopyToClipboardServiceModule });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzCopyToClipboardService.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29weS10by1jbGlwYm9hcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL256LWNvcHktdG8tY2xpcGJvYXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7O0FBS3ZGLE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBRW5DLFlBQXNDLFFBQWE7UUFBYixhQUFRLEdBQVIsUUFBUSxDQUFLO0lBQUcsQ0FBQzs7Ozs7SUFFdkQsSUFBSSxDQUFDLElBQVk7UUFDZixPQUFPLElBQUksT0FBTzs7Ozs7UUFDaEIsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFRLEVBQUU7O2dCQUNwQixZQUFZLEdBQUcsSUFBSTtZQUN2QixJQUFJO2dCQUNGLGtDQUFrQztnQkFDbEMsWUFBWSxHQUFHLG1CQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFPLENBQUM7Z0JBQzlELG1CQUFBLFlBQVksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO2dCQUNsQyxZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7Z0JBQ3RDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDN0IsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7Z0JBQzdDLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDdEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7Z0JBQzdDLG1CQUFBLFlBQVksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO2dCQUMzQyxZQUFZLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7Z0JBQ3pDLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM3QyxZQUFZLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDMUIsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDOztzQkFFaEIsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztnQkFDcEQsSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDZixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2Q7Z0JBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2Y7b0JBQVM7Z0JBQ1IsSUFBSSxZQUFZLEVBQUU7b0JBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDOUM7YUFDRjtRQUNILENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7O1lBdkNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsOEJBQThCO2FBQzNDOzs7OzRDQUdjLE1BQU0sU0FBQyxRQUFROzs7Ozs7OztJQUFoQiw0Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekNvcHlUb0NsaXBib2FyZFNlcnZpY2VNb2R1bGUgfSBmcm9tICcuL256LWNvcHktdG8tY2xpcGJvYXJkLnNlcnZpY2UubW9kdWxlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBOekNvcHlUb0NsaXBib2FyZFNlcnZpY2VNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgTnpDb3B5VG9DbGlwYm9hcmRTZXJ2aWNlIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHt9XG5cbiAgY29weSh0ZXh0OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KFxuICAgICAgKHJlc29sdmUsIHJlamVjdCk6IHZvaWQgPT4ge1xuICAgICAgICBsZXQgY29weVRleHRBcmVhID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XG4gICAgICAgICAgY29weVRleHRBcmVhID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpIGFzIGFueTtcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUhLmFsbCA9ICd1bnNldCc7XG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUudG9wID0gJzAnO1xuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS5jbGlwID0gJ3JlY3QoMCwgMCwgMCwgMCknO1xuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS53aGl0ZVNwYWNlID0gJ3ByZSc7XG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLndlYmtpdFVzZXJTZWxlY3QgPSAndGV4dCc7XG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlIS5Nb3pVc2VyU2VsZWN0ID0gJ3RleHQnO1xuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS5tc1VzZXJTZWxlY3QgPSAndGV4dCc7XG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLnVzZXJTZWxlY3QgPSAndGV4dCc7XG4gICAgICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvcHlUZXh0QXJlYSk7XG4gICAgICAgICAgY29weVRleHRBcmVhLnZhbHVlID0gdGV4dDtcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc2VsZWN0KCk7XG5cbiAgICAgICAgICBjb25zdCBzdWNjZXNzZnVsID0gdGhpcy5kb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgICAgICAgIGlmICghc3VjY2Vzc2Z1bCkge1xuICAgICAgICAgICAgcmVqZWN0KHRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXNvbHZlKHRleHQpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChjb3B5VGV4dEFyZWEpIHtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb3B5VGV4dEFyZWEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cbn1cbiJdfQ==