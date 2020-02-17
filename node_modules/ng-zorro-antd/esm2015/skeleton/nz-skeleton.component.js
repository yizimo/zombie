/**
 * @fileoverview added by tsickle
 * Generated from: nz-skeleton.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { toCssPixel } from 'ng-zorro-antd/core';
export class NzSkeletonComponent {
    /**
     * @param {?} cdr
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.nzActive = false;
        this.nzLoading = true;
        this.nzTitle = true;
        this.nzAvatar = false;
        this.nzParagraph = true;
        this.rowsList = [];
        this.widthList = [];
        renderer.addClass(elementRef.nativeElement, 'ant-skeleton');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    toCSSUnit(value = '') {
        return toCssPixel(value);
    }
    /**
     * @private
     * @return {?}
     */
    getTitleProps() {
        /** @type {?} */
        const hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        const hasParagraph = !!this.nzParagraph;
        /** @type {?} */
        let width = '';
        if (!hasAvatar && hasParagraph) {
            width = '38%';
        }
        else if (hasAvatar && hasParagraph) {
            width = '50%';
        }
        return Object.assign({ width }, this.getProps(this.nzTitle));
    }
    /**
     * @private
     * @return {?}
     */
    getAvatarProps() {
        /** @type {?} */
        const shape = !!this.nzTitle && !this.nzParagraph ? 'square' : 'circle';
        /** @type {?} */
        const size = 'large';
        return Object.assign({ shape, size }, this.getProps(this.nzAvatar));
    }
    /**
     * @private
     * @return {?}
     */
    getParagraphProps() {
        /** @type {?} */
        const hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        const hasTitle = !!this.nzTitle;
        /** @type {?} */
        const basicProps = {};
        // Width
        if (!hasAvatar || !hasTitle) {
            basicProps.width = '61%';
        }
        // Rows
        if (!hasAvatar && hasTitle) {
            basicProps.rows = 3;
        }
        else {
            basicProps.rows = 2;
        }
        return Object.assign({}, basicProps, this.getProps(this.nzParagraph));
    }
    /**
     * @private
     * @template T
     * @param {?} prop
     * @return {?}
     */
    getProps(prop) {
        return prop && typeof prop === 'object' ? prop : {};
    }
    /**
     * @private
     * @return {?}
     */
    getWidthList() {
        const { width, rows } = this.paragraph;
        /** @type {?} */
        let widthList = [];
        if (width && Array.isArray(width)) {
            widthList = width;
        }
        else if (width && !Array.isArray(width)) {
            widthList = [];
            widthList[(/** @type {?} */ (rows)) - 1] = width;
        }
        return widthList;
    }
    /**
     * @private
     * @return {?}
     */
    updateProps() {
        this.title = this.getTitleProps();
        this.avatar = this.getAvatarProps();
        this.paragraph = this.getParagraphProps();
        this.rowsList = [...Array(this.paragraph.rows)];
        this.widthList = this.getWidthList();
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateProps();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzTitle || changes.nzAvatar || changes.nzParagraph) {
            this.updateProps();
        }
    }
}
NzSkeletonComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-skeleton',
                exportAs: 'nzSkeleton',
                template: "<ng-container *ngIf=\"nzLoading\">\n  <div class=\"ant-skeleton-header\" *ngIf=\"!!nzAvatar\">\n    <span\n      class=\"ant-skeleton-avatar\"\n      [class.ant-skeleton-avatar-lg]=\"avatar.size === 'large'\"\n      [class.ant-skeleton-avatar-sm]=\"avatar.size === 'small'\"\n      [class.ant-skeleton-avatar-circle]=\"avatar.shape === 'circle'\"\n      [class.ant-skeleton-avatar-square]=\"avatar.shape === 'square'\">\n    </span>\n  </div>\n  <div class=\"ant-skeleton-content\">\n    <h3 *ngIf=\"!!nzTitle\" class=\"ant-skeleton-title\" [style.width]=\"toCSSUnit(title.width)\"></h3>\n    <ul *ngIf=\"!!nzParagraph\" class=\"ant-skeleton-paragraph\">\n      <li *ngFor=\"let row of rowsList; let i=index\" [style.width]=\"toCSSUnit(widthList[i])\">\n      </li>\n    </ul>\n  </div>\n</ng-container>\n<ng-container *ngIf=\"!nzLoading\">\n  <ng-content></ng-content>\n</ng-container>",
                host: {
                    '[class.ant-skeleton-with-avatar]': '!!nzAvatar',
                    '[class.ant-skeleton-active]': 'nzActive'
                }
            }] }
];
/** @nocollapse */
NzSkeletonComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef }
];
NzSkeletonComponent.propDecorators = {
    nzActive: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzAvatar: [{ type: Input }],
    nzParagraph: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzSkeletonComponent.prototype.nzActive;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzLoading;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzTitle;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzAvatar;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzParagraph;
    /** @type {?} */
    NzSkeletonComponent.prototype.title;
    /** @type {?} */
    NzSkeletonComponent.prototype.avatar;
    /** @type {?} */
    NzSkeletonComponent.prototype.paragraph;
    /** @type {?} */
    NzSkeletonComponent.prototype.rowsList;
    /** @type {?} */
    NzSkeletonComponent.prototype.widthList;
    /**
     * @type {?}
     * @private
     */
    NzSkeletonComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2tlbGV0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9za2VsZXRvbi8iLCJzb3VyY2VzIjpbIm56LXNrZWxldG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQWNoRCxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFhOUIsWUFBb0IsR0FBc0IsRUFBRSxRQUFtQixFQUFFLFVBQXNCO1FBQW5FLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBWmpDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixZQUFPLEdBQThCLElBQUksQ0FBQztRQUMxQyxhQUFRLEdBQStCLEtBQUssQ0FBQztRQUM3QyxnQkFBVyxHQUFrQyxJQUFJLENBQUM7UUFLM0QsYUFBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixjQUFTLEdBQTJCLEVBQUUsQ0FBQztRQUdyQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsUUFBeUIsRUFBRTtRQUNuQyxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVPLGFBQWE7O2NBQ2IsU0FBUyxHQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUTs7Y0FDcEMsWUFBWSxHQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVzs7WUFDNUMsS0FBSyxHQUFHLEVBQUU7UUFDZCxJQUFJLENBQUMsU0FBUyxJQUFJLFlBQVksRUFBRTtZQUM5QixLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ2Y7YUFBTSxJQUFJLFNBQVMsSUFBSSxZQUFZLEVBQUU7WUFDcEMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNmO1FBQ0QsdUJBQVMsS0FBSyxJQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFHO0lBQ25ELENBQUM7Ozs7O0lBRU8sY0FBYzs7Y0FDZCxLQUFLLEdBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFROztjQUM5RSxJQUFJLEdBQWUsT0FBTztRQUNoQyx1QkFBUyxLQUFLLEVBQUUsSUFBSSxJQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFHO0lBQzFELENBQUM7Ozs7O0lBRU8saUJBQWlCOztjQUNqQixTQUFTLEdBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFROztjQUNwQyxRQUFRLEdBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPOztjQUNsQyxVQUFVLEdBQXdCLEVBQUU7UUFDMUMsUUFBUTtRQUNSLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDM0IsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDMUI7UUFDRCxPQUFPO1FBQ1AsSUFBSSxDQUFDLFNBQVMsSUFBSSxRQUFRLEVBQUU7WUFDMUIsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7U0FDckI7YUFBTTtZQUNMLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1NBQ3JCO1FBQ0QseUJBQVksVUFBVSxFQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFHO0lBQy9ELENBQUM7Ozs7Ozs7SUFFTyxRQUFRLENBQUksSUFBNkI7UUFDL0MsT0FBTyxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVPLFlBQVk7Y0FDWixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUzs7WUFDbEMsU0FBUyxHQUEyQixFQUFFO1FBQzFDLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUNuQjthQUFNLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ2YsU0FBUyxDQUFDLG1CQUFBLElBQUksRUFBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUM5QjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU8sV0FBVztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQzlELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7OztZQXBHRixTQUFTLFNBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLGs0QkFBMkM7Z0JBQzNDLElBQUksRUFBRTtvQkFDSixrQ0FBa0MsRUFBRSxZQUFZO29CQUNoRCw2QkFBNkIsRUFBRSxVQUFVO2lCQUMxQzthQUNGOzs7O1lBeEJDLGlCQUFpQjtZQU1qQixTQUFTO1lBSlQsVUFBVTs7O3VCQXdCVCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7Ozs7SUFKTix1Q0FBMEI7O0lBQzFCLHdDQUEwQjs7SUFDMUIsc0NBQW1EOztJQUNuRCx1Q0FBc0Q7O0lBQ3RELDBDQUEyRDs7SUFFM0Qsb0NBQXVCOztJQUN2QixxQ0FBeUI7O0lBQ3pCLHdDQUErQjs7SUFDL0IsdUNBQXdCOztJQUN4Qix3Q0FBdUM7Ozs7O0lBRTNCLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0b0Nzc1BpeGVsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IEF2YXRhclNoYXBlLCBBdmF0YXJTaXplLCBOelNrZWxldG9uQXZhdGFyLCBOelNrZWxldG9uUGFyYWdyYXBoLCBOelNrZWxldG9uVGl0bGUgfSBmcm9tICcuL256LXNrZWxldG9uLnR5cGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotc2tlbGV0b24nLFxuICBleHBvcnRBczogJ256U2tlbGV0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotc2tlbGV0b24uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtc2tlbGV0b24td2l0aC1hdmF0YXJdJzogJyEhbnpBdmF0YXInLFxuICAgICdbY2xhc3MuYW50LXNrZWxldG9uLWFjdGl2ZV0nOiAnbnpBY3RpdmUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpTa2VsZXRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbnpBY3RpdmUgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpMb2FkaW5nID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpUaXRsZTogTnpTa2VsZXRvblRpdGxlIHwgYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIG56QXZhdGFyOiBOelNrZWxldG9uQXZhdGFyIHwgYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBuelBhcmFncmFwaDogTnpTa2VsZXRvblBhcmFncmFwaCB8IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHRpdGxlOiBOelNrZWxldG9uVGl0bGU7XG4gIGF2YXRhcjogTnpTa2VsZXRvbkF2YXRhcjtcbiAgcGFyYWdyYXBoOiBOelNrZWxldG9uUGFyYWdyYXBoO1xuICByb3dzTGlzdDogbnVtYmVyW10gPSBbXTtcbiAgd2lkdGhMaXN0OiBBcnJheTxudW1iZXIgfCBzdHJpbmc+ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXNrZWxldG9uJyk7XG4gIH1cblxuICB0b0NTU1VuaXQodmFsdWU6IG51bWJlciB8IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdG9Dc3NQaXhlbCh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGdldFRpdGxlUHJvcHMoKTogTnpTa2VsZXRvblRpdGxlIHtcbiAgICBjb25zdCBoYXNBdmF0YXI6IGJvb2xlYW4gPSAhIXRoaXMubnpBdmF0YXI7XG4gICAgY29uc3QgaGFzUGFyYWdyYXBoOiBib29sZWFuID0gISF0aGlzLm56UGFyYWdyYXBoO1xuICAgIGxldCB3aWR0aCA9ICcnO1xuICAgIGlmICghaGFzQXZhdGFyICYmIGhhc1BhcmFncmFwaCkge1xuICAgICAgd2lkdGggPSAnMzglJztcbiAgICB9IGVsc2UgaWYgKGhhc0F2YXRhciAmJiBoYXNQYXJhZ3JhcGgpIHtcbiAgICAgIHdpZHRoID0gJzUwJSc7XG4gICAgfVxuICAgIHJldHVybiB7IHdpZHRoLCAuLi50aGlzLmdldFByb3BzKHRoaXMubnpUaXRsZSkgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QXZhdGFyUHJvcHMoKTogTnpTa2VsZXRvbkF2YXRhciB7XG4gICAgY29uc3Qgc2hhcGU6IEF2YXRhclNoYXBlID0gISF0aGlzLm56VGl0bGUgJiYgIXRoaXMubnpQYXJhZ3JhcGggPyAnc3F1YXJlJyA6ICdjaXJjbGUnO1xuICAgIGNvbnN0IHNpemU6IEF2YXRhclNpemUgPSAnbGFyZ2UnO1xuICAgIHJldHVybiB7IHNoYXBlLCBzaXplLCAuLi50aGlzLmdldFByb3BzKHRoaXMubnpBdmF0YXIpIH07XG4gIH1cblxuICBwcml2YXRlIGdldFBhcmFncmFwaFByb3BzKCk6IE56U2tlbGV0b25QYXJhZ3JhcGgge1xuICAgIGNvbnN0IGhhc0F2YXRhcjogYm9vbGVhbiA9ICEhdGhpcy5uekF2YXRhcjtcbiAgICBjb25zdCBoYXNUaXRsZTogYm9vbGVhbiA9ICEhdGhpcy5uelRpdGxlO1xuICAgIGNvbnN0IGJhc2ljUHJvcHM6IE56U2tlbGV0b25QYXJhZ3JhcGggPSB7fTtcbiAgICAvLyBXaWR0aFxuICAgIGlmICghaGFzQXZhdGFyIHx8ICFoYXNUaXRsZSkge1xuICAgICAgYmFzaWNQcm9wcy53aWR0aCA9ICc2MSUnO1xuICAgIH1cbiAgICAvLyBSb3dzXG4gICAgaWYgKCFoYXNBdmF0YXIgJiYgaGFzVGl0bGUpIHtcbiAgICAgIGJhc2ljUHJvcHMucm93cyA9IDM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhc2ljUHJvcHMucm93cyA9IDI7XG4gICAgfVxuICAgIHJldHVybiB7IC4uLmJhc2ljUHJvcHMsIC4uLnRoaXMuZ2V0UHJvcHModGhpcy5uelBhcmFncmFwaCkgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJvcHM8VD4ocHJvcDogVCB8IGJvb2xlYW4gfCB1bmRlZmluZWQpOiBUIHwge30ge1xuICAgIHJldHVybiBwcm9wICYmIHR5cGVvZiBwcm9wID09PSAnb2JqZWN0JyA/IHByb3AgOiB7fTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0V2lkdGhMaXN0KCk6IEFycmF5PG51bWJlciB8IHN0cmluZz4ge1xuICAgIGNvbnN0IHsgd2lkdGgsIHJvd3MgfSA9IHRoaXMucGFyYWdyYXBoO1xuICAgIGxldCB3aWR0aExpc3Q6IEFycmF5PHN0cmluZyB8IG51bWJlcj4gPSBbXTtcbiAgICBpZiAod2lkdGggJiYgQXJyYXkuaXNBcnJheSh3aWR0aCkpIHtcbiAgICAgIHdpZHRoTGlzdCA9IHdpZHRoO1xuICAgIH0gZWxzZSBpZiAod2lkdGggJiYgIUFycmF5LmlzQXJyYXkod2lkdGgpKSB7XG4gICAgICB3aWR0aExpc3QgPSBbXTtcbiAgICAgIHdpZHRoTGlzdFtyb3dzISAtIDFdID0gd2lkdGg7XG4gICAgfVxuICAgIHJldHVybiB3aWR0aExpc3Q7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVByb3BzKCk6IHZvaWQge1xuICAgIHRoaXMudGl0bGUgPSB0aGlzLmdldFRpdGxlUHJvcHMoKTtcbiAgICB0aGlzLmF2YXRhciA9IHRoaXMuZ2V0QXZhdGFyUHJvcHMoKTtcbiAgICB0aGlzLnBhcmFncmFwaCA9IHRoaXMuZ2V0UGFyYWdyYXBoUHJvcHMoKTtcbiAgICB0aGlzLnJvd3NMaXN0ID0gWy4uLkFycmF5KHRoaXMucGFyYWdyYXBoLnJvd3MpXTtcbiAgICB0aGlzLndpZHRoTGlzdCA9IHRoaXMuZ2V0V2lkdGhMaXN0KCk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVByb3BzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpUaXRsZSB8fCBjaGFuZ2VzLm56QXZhdGFyIHx8IGNoYW5nZXMubnpQYXJhZ3JhcGgpIHtcbiAgICAgIHRoaXMudXBkYXRlUHJvcHMoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==