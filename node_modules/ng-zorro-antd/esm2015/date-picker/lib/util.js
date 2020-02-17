/**
 * @fileoverview added by tsickle
 * Generated from: lib/util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** @type {?} */
const defaultDisabledTime = {
    /**
     * @return {?}
     */
    nzDisabledHours() {
        return [];
    },
    /**
     * @return {?}
     */
    nzDisabledMinutes() {
        return [];
    },
    /**
     * @return {?}
     */
    nzDisabledSeconds() {
        return [];
    }
};
/**
 * @param {?} value
 * @param {?} disabledTime
 * @return {?}
 */
export function getTimeConfig(value, disabledTime) {
    /** @type {?} */
    let disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : ((/** @type {?} */ ({})));
    disabledTimeConfig = Object.assign({}, defaultDisabledTime, disabledTimeConfig);
    return disabledTimeConfig;
}
/**
 * @param {?} value
 * @param {?} disabledTimeConfig
 * @return {?}
 */
export function isTimeValidByConfig(value, disabledTimeConfig) {
    /** @type {?} */
    let invalidTime = false;
    if (value) {
        /** @type {?} */
        const hour = value.getHours();
        /** @type {?} */
        const minutes = value.getMinutes();
        /** @type {?} */
        const seconds = value.getSeconds();
        /** @type {?} */
        const disabledHours = disabledTimeConfig.nzDisabledHours();
        if (disabledHours.indexOf(hour) === -1) {
            /** @type {?} */
            const disabledMinutes = disabledTimeConfig.nzDisabledMinutes(hour);
            if (disabledMinutes.indexOf(minutes) === -1) {
                /** @type {?} */
                const disabledSeconds = disabledTimeConfig.nzDisabledSeconds(hour, minutes);
                invalidTime = disabledSeconds.indexOf(seconds) !== -1;
            }
            else {
                invalidTime = true;
            }
        }
        else {
            invalidTime = true;
        }
    }
    return !invalidTime;
}
/**
 * @param {?} value
 * @param {?} disabledTime
 * @return {?}
 */
export function isTimeValid(value, disabledTime) {
    /** @type {?} */
    const disabledTimeConfig = getTimeConfig(value, disabledTime);
    return isTimeValidByConfig(value, disabledTimeConfig);
}
/**
 * @param {?} value
 * @param {?=} disabledDate
 * @param {?=} disabledTime
 * @return {?}
 */
export function isAllowedDate(value, disabledDate, disabledTime) {
    if (disabledDate) {
        if (disabledDate(value.nativeDate)) {
            return false;
        }
    }
    if (disabledTime) {
        if (!isTimeValid(value, disabledTime)) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O01BV00sbUJBQW1CLEdBQXVCOzs7O0lBQzlDLGVBQWU7UUFDYixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Ozs7SUFDRCxpQkFBaUI7UUFDZixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Ozs7SUFDRCxpQkFBaUI7UUFDZixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Q0FDRjs7Ozs7O0FBRUQsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUFnQixFQUFFLFlBQTRCOztRQUN0RSxrQkFBa0IsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLEVBQUUsRUFBc0IsQ0FBQztJQUM1RyxrQkFBa0IscUJBQ2IsbUJBQW1CLEVBQ25CLGtCQUFrQixDQUN0QixDQUFDO0lBQ0YsT0FBTyxrQkFBa0IsQ0FBQztBQUM1QixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsS0FBZ0IsRUFBRSxrQkFBc0M7O1FBQ3RGLFdBQVcsR0FBRyxLQUFLO0lBQ3ZCLElBQUksS0FBSyxFQUFFOztjQUNILElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFOztjQUN2QixPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRTs7Y0FDNUIsT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUU7O2NBQzVCLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxlQUFlLEVBQUU7UUFDMUQsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOztrQkFDaEMsZUFBZSxHQUFHLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztZQUNsRSxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7O3NCQUNyQyxlQUFlLEdBQUcsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztnQkFDM0UsV0FBVyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDdkQ7aUJBQU07Z0JBQ0wsV0FBVyxHQUFHLElBQUksQ0FBQzthQUNwQjtTQUNGO2FBQU07WUFDTCxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO0tBQ0Y7SUFDRCxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3RCLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBZ0IsRUFBRSxZQUE0Qjs7VUFDbEUsa0JBQWtCLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUM7SUFDN0QsT0FBTyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztBQUN4RCxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUFnQixFQUFFLFlBQTZCLEVBQUUsWUFBNkI7SUFDMUcsSUFBSSxZQUFZLEVBQUU7UUFDaEIsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUNELElBQUksWUFBWSxFQUFFO1FBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxFQUFFO1lBQ3JDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgRGlzYWJsZWREYXRlRm4sIERpc2FibGVkVGltZUNvbmZpZywgRGlzYWJsZWRUaW1lRm4gfSBmcm9tICcuLi9zdGFuZGFyZC10eXBlcyc7XG5cbmNvbnN0IGRlZmF1bHREaXNhYmxlZFRpbWU6IERpc2FibGVkVGltZUNvbmZpZyA9IHtcbiAgbnpEaXNhYmxlZEhvdXJzKCk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gW107XG4gIH0sXG4gIG56RGlzYWJsZWRNaW51dGVzKCk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gW107XG4gIH0sXG4gIG56RGlzYWJsZWRTZWNvbmRzKCk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lQ29uZmlnKHZhbHVlOiBDYW5keURhdGUsIGRpc2FibGVkVGltZTogRGlzYWJsZWRUaW1lRm4pOiBEaXNhYmxlZFRpbWVDb25maWcge1xuICBsZXQgZGlzYWJsZWRUaW1lQ29uZmlnID0gZGlzYWJsZWRUaW1lID8gZGlzYWJsZWRUaW1lKHZhbHVlICYmIHZhbHVlLm5hdGl2ZURhdGUpIDogKHt9IGFzIERpc2FibGVkVGltZUNvbmZpZyk7XG4gIGRpc2FibGVkVGltZUNvbmZpZyA9IHtcbiAgICAuLi5kZWZhdWx0RGlzYWJsZWRUaW1lLFxuICAgIC4uLmRpc2FibGVkVGltZUNvbmZpZ1xuICB9O1xuICByZXR1cm4gZGlzYWJsZWRUaW1lQ29uZmlnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUaW1lVmFsaWRCeUNvbmZpZyh2YWx1ZTogQ2FuZHlEYXRlLCBkaXNhYmxlZFRpbWVDb25maWc6IERpc2FibGVkVGltZUNvbmZpZyk6IGJvb2xlYW4ge1xuICBsZXQgaW52YWxpZFRpbWUgPSBmYWxzZTtcbiAgaWYgKHZhbHVlKSB7XG4gICAgY29uc3QgaG91ciA9IHZhbHVlLmdldEhvdXJzKCk7XG4gICAgY29uc3QgbWludXRlcyA9IHZhbHVlLmdldE1pbnV0ZXMoKTtcbiAgICBjb25zdCBzZWNvbmRzID0gdmFsdWUuZ2V0U2Vjb25kcygpO1xuICAgIGNvbnN0IGRpc2FibGVkSG91cnMgPSBkaXNhYmxlZFRpbWVDb25maWcubnpEaXNhYmxlZEhvdXJzKCk7XG4gICAgaWYgKGRpc2FibGVkSG91cnMuaW5kZXhPZihob3VyKSA9PT0gLTEpIHtcbiAgICAgIGNvbnN0IGRpc2FibGVkTWludXRlcyA9IGRpc2FibGVkVGltZUNvbmZpZy5uekRpc2FibGVkTWludXRlcyhob3VyKTtcbiAgICAgIGlmIChkaXNhYmxlZE1pbnV0ZXMuaW5kZXhPZihtaW51dGVzKSA9PT0gLTEpIHtcbiAgICAgICAgY29uc3QgZGlzYWJsZWRTZWNvbmRzID0gZGlzYWJsZWRUaW1lQ29uZmlnLm56RGlzYWJsZWRTZWNvbmRzKGhvdXIsIG1pbnV0ZXMpO1xuICAgICAgICBpbnZhbGlkVGltZSA9IGRpc2FibGVkU2Vjb25kcy5pbmRleE9mKHNlY29uZHMpICE9PSAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludmFsaWRUaW1lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW52YWxpZFRpbWUgPSB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gIWludmFsaWRUaW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUaW1lVmFsaWQodmFsdWU6IENhbmR5RGF0ZSwgZGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVGbik6IGJvb2xlYW4ge1xuICBjb25zdCBkaXNhYmxlZFRpbWVDb25maWcgPSBnZXRUaW1lQ29uZmlnKHZhbHVlLCBkaXNhYmxlZFRpbWUpO1xuICByZXR1cm4gaXNUaW1lVmFsaWRCeUNvbmZpZyh2YWx1ZSwgZGlzYWJsZWRUaW1lQ29uZmlnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQWxsb3dlZERhdGUodmFsdWU6IENhbmR5RGF0ZSwgZGlzYWJsZWREYXRlPzogRGlzYWJsZWREYXRlRm4sIGRpc2FibGVkVGltZT86IERpc2FibGVkVGltZUZuKTogYm9vbGVhbiB7XG4gIGlmIChkaXNhYmxlZERhdGUpIHtcbiAgICBpZiAoZGlzYWJsZWREYXRlKHZhbHVlLm5hdGl2ZURhdGUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmIChkaXNhYmxlZFRpbWUpIHtcbiAgICBpZiAoIWlzVGltZVZhbGlkKHZhbHVlLCBkaXNhYmxlZFRpbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIl19