/**
 * @fileoverview added by tsickle
 * Generated from: nz-progress-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @param {?} percent
 * @return {?}
 */
function stripPercentToNumber(percent) {
    return +percent.replace('%', '');
}
/** @type {?} */
export var sortGradient = (/**
 * @param {?} gradients
 * @return {?}
 */
function (gradients) {
    /** @type {?} */
    var tempArr = [];
    Object.keys(gradients).forEach((/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var value = gradients[key];
        /** @type {?} */
        var formatKey = stripPercentToNumber(key);
        if (isNaN(formatKey)) {
            return {};
        }
        tempArr.push({
            key: formatKey,
            value: value
        });
    }));
    tempArr = tempArr.sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) { return a.key - b.key; }));
    return tempArr;
});
/** @type {?} */
export var handleCircleGradient = (/**
 * @param {?} strokeColor
 * @return {?}
 */
function (strokeColor) {
    return sortGradient(strokeColor).map((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var key = _a.key, value = _a.value;
        return ({ offset: key + "%", color: value });
    }));
});
/** @type {?} */
export var handleLinearGradient = (/**
 * @param {?} strokeColor
 * @return {?}
 */
function (strokeColor) {
    var _a = strokeColor.from, from = _a === void 0 ? '#1890ff' : _a, _b = strokeColor.to, to = _b === void 0 ? '#1890ff' : _b, _c = strokeColor.direction, direction = _c === void 0 ? 'to right' : _c, rest = tslib_1.__rest(strokeColor, ["from", "to", "direction"]);
    if (Object.keys(rest).length !== 0) {
        /** @type {?} */
        var sortedGradients = sortGradient((/** @type {?} */ (rest)))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var key = _a.key, value = _a.value;
            return value + " " + key + "%";
        }))
            .join(', ');
        return "linear-gradient(" + direction + ", " + sortedGradients + ")";
    }
    return "linear-gradient(" + direction + ", " + from + ", " + to + ")";
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibnotcHJvZ3Jlc3MtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxTQUFTLG9CQUFvQixDQUFDLE9BQWU7SUFDM0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ25DLENBQUM7O0FBRUQsTUFBTSxLQUFPLFlBQVk7Ozs7QUFBRyxVQUFDLFNBQXFDOztRQUM1RCxPQUFPLEdBQTBDLEVBQUU7SUFFdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPOzs7O0lBQUMsVUFBQSxHQUFHOztZQUMxQixLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQzs7WUFDdEIsU0FBUyxHQUFHLG9CQUFvQixDQUFDLEdBQUcsQ0FBQztRQUMzQyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNwQixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNYLEdBQUcsRUFBRSxTQUFTO1lBQ2QsS0FBSyxPQUFBO1NBQ04sQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFDLENBQUM7SUFFSCxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUk7Ozs7O0lBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFiLENBQWEsRUFBQyxDQUFDO0lBQ2hELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMsQ0FBQTs7QUFFRCxNQUFNLEtBQU8sb0JBQW9COzs7O0FBQUcsVUFDbEMsV0FBdUM7SUFFdkMsT0FBTyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRzs7OztJQUFDLFVBQUMsRUFBYztZQUFaLFlBQUcsRUFBRSxnQkFBSztRQUFPLE9BQUEsQ0FBQyxFQUFFLE1BQU0sRUFBSyxHQUFHLE1BQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFBckMsQ0FBcUMsRUFBQyxDQUFDO0FBQ2xHLENBQUMsQ0FBQTs7QUFFRCxNQUFNLEtBQU8sb0JBQW9COzs7O0FBQUcsVUFBQyxXQUFvQztJQUMvRCxJQUFBLHFCQUFnQixFQUFoQixxQ0FBZ0IsRUFBRSxtQkFBYyxFQUFkLG1DQUFjLEVBQUUsMEJBQXNCLEVBQXRCLDJDQUFzQixFQUFFLCtEQUFPO0lBQ3pFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFOztZQUM1QixlQUFlLEdBQUcsWUFBWSxDQUFDLG1CQUFBLElBQUksRUFBOEIsQ0FBQzthQUNyRSxHQUFHOzs7O1FBQUMsVUFBQyxFQUFjO2dCQUFaLFlBQUcsRUFBRSxnQkFBSztZQUFPLE9BQUcsS0FBSyxTQUFJLEdBQUcsTUFBRztRQUFsQixDQUFrQixFQUFDO2FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDYixPQUFPLHFCQUFtQixTQUFTLFVBQUssZUFBZSxNQUFHLENBQUM7S0FDNUQ7SUFDRCxPQUFPLHFCQUFtQixTQUFTLFVBQUssSUFBSSxVQUFLLEVBQUUsTUFBRyxDQUFDO0FBQ3pELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBOelByb2dyZXNzQ29sb3JHcmFkaWVudCwgTnpQcm9ncmVzc0dyYWRpZW50UHJvZ3Jlc3MgfSBmcm9tICcuL256LXByb2dyZXNzLmRlZmluaXRpb25zJztcblxuZnVuY3Rpb24gc3RyaXBQZXJjZW50VG9OdW1iZXIocGVyY2VudDogc3RyaW5nKTogbnVtYmVyIHtcbiAgcmV0dXJuICtwZXJjZW50LnJlcGxhY2UoJyUnLCAnJyk7XG59XG5cbmV4cG9ydCBjb25zdCBzb3J0R3JhZGllbnQgPSAoZ3JhZGllbnRzOiBOelByb2dyZXNzR3JhZGllbnRQcm9ncmVzcykgPT4ge1xuICBsZXQgdGVtcEFycjogQXJyYXk8eyBrZXk6IG51bWJlcjsgdmFsdWU6IHN0cmluZyB9PiA9IFtdO1xuXG4gIE9iamVjdC5rZXlzKGdyYWRpZW50cykuZm9yRWFjaChrZXkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZ3JhZGllbnRzW2tleV07XG4gICAgY29uc3QgZm9ybWF0S2V5ID0gc3RyaXBQZXJjZW50VG9OdW1iZXIoa2V5KTtcbiAgICBpZiAoaXNOYU4oZm9ybWF0S2V5KSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICB0ZW1wQXJyLnB1c2goe1xuICAgICAga2V5OiBmb3JtYXRLZXksXG4gICAgICB2YWx1ZVxuICAgIH0pO1xuICB9KTtcblxuICB0ZW1wQXJyID0gdGVtcEFyci5zb3J0KChhLCBiKSA9PiBhLmtleSAtIGIua2V5KTtcbiAgcmV0dXJuIHRlbXBBcnI7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQ2lyY2xlR3JhZGllbnQgPSAoXG4gIHN0cm9rZUNvbG9yOiBOelByb2dyZXNzR3JhZGllbnRQcm9ncmVzc1xuKTogQXJyYXk8eyBvZmZzZXQ6IHN0cmluZzsgY29sb3I6IHN0cmluZyB9PiA9PiB7XG4gIHJldHVybiBzb3J0R3JhZGllbnQoc3Ryb2tlQ29sb3IpLm1hcCgoeyBrZXksIHZhbHVlIH0pID0+ICh7IG9mZnNldDogYCR7a2V5fSVgLCBjb2xvcjogdmFsdWUgfSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUxpbmVhckdyYWRpZW50ID0gKHN0cm9rZUNvbG9yOiBOelByb2dyZXNzQ29sb3JHcmFkaWVudCkgPT4ge1xuICBjb25zdCB7IGZyb20gPSAnIzE4OTBmZicsIHRvID0gJyMxODkwZmYnLCBkaXJlY3Rpb24gPSAndG8gcmlnaHQnLCAuLi5yZXN0IH0gPSBzdHJva2VDb2xvcjtcbiAgaWYgKE9iamVjdC5rZXlzKHJlc3QpLmxlbmd0aCAhPT0gMCkge1xuICAgIGNvbnN0IHNvcnRlZEdyYWRpZW50cyA9IHNvcnRHcmFkaWVudChyZXN0IGFzIE56UHJvZ3Jlc3NHcmFkaWVudFByb2dyZXNzKVxuICAgICAgLm1hcCgoeyBrZXksIHZhbHVlIH0pID0+IGAke3ZhbHVlfSAke2tleX0lYClcbiAgICAgIC5qb2luKCcsICcpO1xuICAgIHJldHVybiBgbGluZWFyLWdyYWRpZW50KCR7ZGlyZWN0aW9ufSwgJHtzb3J0ZWRHcmFkaWVudHN9KWA7XG4gIH1cbiAgcmV0dXJuIGBsaW5lYXItZ3JhZGllbnQoJHtkaXJlY3Rpb259LCAke2Zyb219LCAke3RvfSlgO1xufTtcbiJdfQ==