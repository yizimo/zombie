/**
 * @fileoverview added by tsickle
 * Generated from: nz-comment.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzCommentActionComponent, NzCommentActionHostDirective, NzCommentAvatarDirective, NzCommentContentDirective } from './nz-comment-cells';
import { NzCommentComponent } from './nz-comment.component';
/** @type {?} */
const NZ_COMMENT_CELLS = [
    NzCommentAvatarDirective,
    NzCommentContentDirective,
    NzCommentActionComponent,
    NzCommentActionHostDirective
];
export class NzCommentModule {
}
NzCommentModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NzAddOnModule],
                exports: [NzCommentComponent, ...NZ_COMMENT_CELLS],
                declarations: [NzCommentComponent, ...NZ_COMMENT_CELLS]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29tbWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvbW1lbnQvIiwic291cmNlcyI6WyJuei1jb21tZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUNMLHdCQUF3QixFQUN4Qiw0QkFBNEIsRUFDNUIsd0JBQXdCLEVBQ3hCLHlCQUF5QixFQUMxQixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztNQUV0RCxnQkFBZ0IsR0FBRztJQUN2Qix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7Q0FDN0I7QUFPRCxNQUFNLE9BQU8sZUFBZTs7O1lBTDNCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO2dCQUN0QyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLGdCQUFnQixDQUFDO2dCQUNsRCxZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLGdCQUFnQixDQUFDO2FBQ3hEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHtcbiAgTnpDb21tZW50QWN0aW9uQ29tcG9uZW50LFxuICBOekNvbW1lbnRBY3Rpb25Ib3N0RGlyZWN0aXZlLFxuICBOekNvbW1lbnRBdmF0YXJEaXJlY3RpdmUsXG4gIE56Q29tbWVudENvbnRlbnREaXJlY3RpdmVcbn0gZnJvbSAnLi9uei1jb21tZW50LWNlbGxzJztcbmltcG9ydCB7IE56Q29tbWVudENvbXBvbmVudCB9IGZyb20gJy4vbnotY29tbWVudC5jb21wb25lbnQnO1xuXG5jb25zdCBOWl9DT01NRU5UX0NFTExTID0gW1xuICBOekNvbW1lbnRBdmF0YXJEaXJlY3RpdmUsXG4gIE56Q29tbWVudENvbnRlbnREaXJlY3RpdmUsXG4gIE56Q29tbWVudEFjdGlvbkNvbXBvbmVudCxcbiAgTnpDb21tZW50QWN0aW9uSG9zdERpcmVjdGl2ZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnpBZGRPbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtOekNvbW1lbnRDb21wb25lbnQsIC4uLk5aX0NPTU1FTlRfQ0VMTFNdLFxuICBkZWNsYXJhdGlvbnM6IFtOekNvbW1lbnRDb21wb25lbnQsIC4uLk5aX0NPTU1FTlRfQ0VMTFNdXG59KVxuZXhwb3J0IGNsYXNzIE56Q29tbWVudE1vZHVsZSB7fVxuIl19