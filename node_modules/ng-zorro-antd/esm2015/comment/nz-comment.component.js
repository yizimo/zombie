/**
 * @fileoverview added by tsickle
 * Generated from: nz-comment.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { NzCommentActionComponent as CommentAction } from './nz-comment-cells';
export class NzCommentComponent {
    constructor() { }
}
NzCommentComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-comment',
                exportAs: 'nzComment',
                template: "<div class=\"ant-comment-inner\">\n  <div class=\"ant-comment-avatar\">\n    <ng-content select=\"nz-avatar[nz-comment-avatar]\"></ng-content>\n  </div>\n  <div class=\"ant-comment-content\">\n    <div class=\"ant-comment-content-author\">\n      <span *ngIf=\"nzAuthor\" class=\"ant-comment-content-author-name\">\n        <ng-container *nzStringTemplateOutlet=\"nzAuthor\">{{ nzAuthor }}</ng-container>\n      </span>\n      <span *ngIf=\"nzDatetime\" class=\"ant-comment-content-author-time\">\n        <ng-container *nzStringTemplateOutlet=\"nzDatetime\">{{ nzDatetime }}</ng-container>\n      </span>\n    </div>\n    <ng-content select=\"nz-comment-content\"></ng-content>\n    <ul class=\"ant-comment-actions\" *ngIf=\"actions?.length\">\n      <li *ngFor=\"let action of actions\">\n        <span><ng-template [nzCommentActionHost]=\"action.content\"></ng-template></span>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"ant-comment-nested\">\n  <ng-content></ng-content>\n</div>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'ant-comment'
                },
                styles: [`
      nz-comment {
        display: block;
      }

      nz-comment-content {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzCommentComponent.ctorParameters = () => [];
NzCommentComponent.propDecorators = {
    nzAuthor: [{ type: Input }],
    nzDatetime: [{ type: Input }],
    actions: [{ type: ContentChildren, args: [CommentAction,] }]
};
if (false) {
    /** @type {?} */
    NzCommentComponent.prototype.nzAuthor;
    /** @type {?} */
    NzCommentComponent.prototype.nzDatetime;
    /** @type {?} */
    NzCommentComponent.prototype.actions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvbW1lbnQvIiwic291cmNlcyI6WyJuei1jb21tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUNMLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixJQUFJLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBdUIvRSxNQUFNLE9BQU8sa0JBQWtCO0lBSzdCLGdCQUFlLENBQUM7OztZQTFCakIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsKytCQUEwQztnQkFDMUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLGFBQWE7aUJBQ3JCO3lCQUVDOzs7Ozs7OztLQVFDO2FBRUo7Ozs7O3VCQUVFLEtBQUs7eUJBQ0wsS0FBSztzQkFFTCxlQUFlLFNBQUMsYUFBYTs7OztJQUg5QixzQ0FBOEM7O0lBQzlDLHdDQUFnRDs7SUFFaEQscUNBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekNvbW1lbnRBY3Rpb25Db21wb25lbnQgYXMgQ29tbWVudEFjdGlvbiB9IGZyb20gJy4vbnotY29tbWVudC1jZWxscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWNvbW1lbnQnLFxuICBleHBvcnRBczogJ256Q29tbWVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jb21tZW50LmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC1jb21tZW50J1xuICB9LFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBuei1jb21tZW50IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIG56LWNvbW1lbnQtY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOekNvbW1lbnRDb21wb25lbnQge1xuICBASW5wdXQoKSBuekF1dGhvcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56RGF0ZXRpbWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oQ29tbWVudEFjdGlvbikgYWN0aW9uczogUXVlcnlMaXN0PENvbW1lbnRBY3Rpb24+O1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iXX0=