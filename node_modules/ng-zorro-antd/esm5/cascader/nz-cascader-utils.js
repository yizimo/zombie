/**
 * @fileoverview added by tsickle
 * Generated from: nz-cascader-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @param {?} o
 * @return {?}
 */
export function isChildOption(o) {
    return o.isLeaf || !o.children || !o.children.length;
}
/**
 * @param {?} o
 * @return {?}
 */
export function isParentOption(o) {
    return !!o.children && !!o.children.length && !o.isLeaf;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXItdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Nhc2NhZGVyLyIsInNvdXJjZXMiOlsibnotY2FzY2FkZXItdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE1BQU0sVUFBVSxhQUFhLENBQUMsQ0FBbUI7SUFDL0MsT0FBTyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQ3ZELENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxDQUFtQjtJQUNoRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDMUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBOekNhc2NhZGVyT3B0aW9uIH0gZnJvbSAnLi9uei1jYXNjYWRlci1kZWZpbml0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NoaWxkT3B0aW9uKG86IE56Q2FzY2FkZXJPcHRpb24pOiBib29sZWFuIHtcbiAgcmV0dXJuIG8uaXNMZWFmIHx8ICFvLmNoaWxkcmVuIHx8ICFvLmNoaWxkcmVuLmxlbmd0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGFyZW50T3B0aW9uKG86IE56Q2FzY2FkZXJPcHRpb24pOiBib29sZWFuIHtcbiAgcmV0dXJuICEhby5jaGlsZHJlbiAmJiAhIW8uY2hpbGRyZW4ubGVuZ3RoICYmICFvLmlzTGVhZjtcbn1cbiJdfQ==