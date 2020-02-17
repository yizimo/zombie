/**
 * @fileoverview added by tsickle
 * Generated from: nz-option.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Pipe } from '@angular/core';
export class NzFilterOptionPipe {
    /**
     * @param {?} options
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    transform(options, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return (/** @type {?} */ (options));
        }
        else {
            return ((/** @type {?} */ (options))).filter((/**
             * @param {?} o
             * @return {?}
             */
            o => filterOption(searchValue, o)));
        }
    }
}
NzFilterOptionPipe.decorators = [
    { type: Pipe, args: [{ name: 'nzFilterOption' },] }
];
export class NzFilterGroupOptionPipe {
    /**
     * @param {?} groups
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    transform(groups, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return groups;
        }
        else {
            return ((/** @type {?} */ (groups))).filter((/**
             * @param {?} g
             * @return {?}
             */
            g => {
                return g.listOfNzOptionComponent.some((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => filterOption(searchValue, o)));
            }));
        }
    }
}
NzFilterGroupOptionPipe.decorators = [
    { type: Pipe, args: [{ name: 'nzFilterGroupOption' },] }
];
/**
 * @param {?} searchValue
 * @param {?} option
 * @return {?}
 */
export function defaultFilterOption(searchValue, option) {
    if (option && option.nzLabel) {
        return option.nzLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NlbGVjdC8iLCJzb3VyY2VzIjpbIm56LW9wdGlvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxJQUFJLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBTy9ELE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7O0lBQzdCLFNBQVMsQ0FDUCxPQUEyRCxFQUMzRCxXQUFtQixFQUNuQixZQUEyQixFQUMzQixZQUFxQjtRQUVyQixJQUFJLFlBQVksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQyxPQUFPLG1CQUFBLE9BQU8sRUFBdUIsQ0FBQztTQUN2QzthQUFNO1lBQ0wsT0FBTyxDQUFDLG1CQUFBLE9BQU8sRUFBdUIsQ0FBQyxDQUFDLE1BQU07Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQztTQUNuRjtJQUNILENBQUM7OztZQWJGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7QUFpQmhDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7Ozs7O0lBQ2xDLFNBQVMsQ0FDUCxNQUFnQyxFQUNoQyxXQUFtQixFQUNuQixZQUEyQixFQUMzQixZQUFxQjtRQUVyQixJQUFJLFlBQVksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQyxPQUFPLE1BQU0sQ0FBQztTQUNmO2FBQU07WUFDTCxPQUFPLENBQUMsbUJBQUEsTUFBTSxFQUE0QixDQUFDLENBQUMsTUFBTTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyRCxPQUFPLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQzNFLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7WUFmRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUU7Ozs7Ozs7QUFrQnJDLE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxXQUFtQixFQUFFLE1BQXlCO0lBQ2hGLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDNUIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUM3RTtTQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOek9wdGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24tZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24uY29tcG9uZW50JztcblxuZXhwb3J0IHR5cGUgVEZpbHRlck9wdGlvbiA9IChpbnB1dDogc3RyaW5nLCBvcHRpb246IE56T3B0aW9uQ29tcG9uZW50KSA9PiBib29sZWFuO1xuXG5AUGlwZSh7IG5hbWU6ICduekZpbHRlck9wdGlvbicgfSlcbmV4cG9ydCBjbGFzcyBOekZpbHRlck9wdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKFxuICAgIG9wdGlvbnM6IE56T3B0aW9uQ29tcG9uZW50W10gfCBRdWVyeUxpc3Q8TnpPcHRpb25Db21wb25lbnQ+LFxuICAgIHNlYXJjaFZhbHVlOiBzdHJpbmcsXG4gICAgZmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uLFxuICAgIHNlcnZlclNlYXJjaDogYm9vbGVhblxuICApOiBOek9wdGlvbkNvbXBvbmVudFtdIHtcbiAgICBpZiAoc2VydmVyU2VhcmNoIHx8ICFzZWFyY2hWYWx1ZSkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMgYXMgTnpPcHRpb25Db21wb25lbnRbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChvcHRpb25zIGFzIE56T3B0aW9uQ29tcG9uZW50W10pLmZpbHRlcihvID0+IGZpbHRlck9wdGlvbihzZWFyY2hWYWx1ZSwgbykpO1xuICAgIH1cbiAgfVxufVxuXG5AUGlwZSh7IG5hbWU6ICduekZpbHRlckdyb3VwT3B0aW9uJyB9KVxuZXhwb3J0IGNsYXNzIE56RmlsdGVyR3JvdXBPcHRpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShcbiAgICBncm91cHM6IE56T3B0aW9uR3JvdXBDb21wb25lbnRbXSxcbiAgICBzZWFyY2hWYWx1ZTogc3RyaW5nLFxuICAgIGZpbHRlck9wdGlvbjogVEZpbHRlck9wdGlvbixcbiAgICBzZXJ2ZXJTZWFyY2g6IGJvb2xlYW5cbiAgKTogTnpPcHRpb25Hcm91cENvbXBvbmVudFtdIHtcbiAgICBpZiAoc2VydmVyU2VhcmNoIHx8ICFzZWFyY2hWYWx1ZSkge1xuICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChncm91cHMgYXMgTnpPcHRpb25Hcm91cENvbXBvbmVudFtdKS5maWx0ZXIoZyA9PiB7XG4gICAgICAgIHJldHVybiBnLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LnNvbWUobyA9PiBmaWx0ZXJPcHRpb24oc2VhcmNoVmFsdWUsIG8pKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEZpbHRlck9wdGlvbihzZWFyY2hWYWx1ZTogc3RyaW5nLCBvcHRpb246IE56T3B0aW9uQ29tcG9uZW50KTogYm9vbGVhbiB7XG4gIGlmIChvcHRpb24gJiYgb3B0aW9uLm56TGFiZWwpIHtcbiAgICByZXR1cm4gb3B0aW9uLm56TGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=