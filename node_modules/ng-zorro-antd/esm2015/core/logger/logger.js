/**
 * @fileoverview added by tsickle
 * Generated from: logger/logger.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable:no-any
import { isDevMode } from '@angular/core';
import { environment } from '../environments/environment';
/** @type {?} */
const record = {};
/** @type {?} */
export const PREFIX = '[NG-ZORRO]:';
/**
 * @param {...?} args
 * @return {?}
 */
function notRecorded(...args) {
    /** @type {?} */
    const asRecord = args.reduce((/**
     * @param {?} acc
     * @param {?} c
     * @return {?}
     */
    (acc, c) => acc + c.toString()), '');
    if (record[asRecord]) {
        return false;
    }
    else {
        record[asRecord] = true;
        return true;
    }
}
/**
 * @param {?} consoleFunc
 * @param {...?} args
 * @return {?}
 */
function consoleCommonBehavior(consoleFunc, ...args) {
    if (environment.isTestMode || (isDevMode() && notRecorded(...args))) {
        consoleFunc(...args);
    }
}
// Warning should only be printed in dev mode and only once.
/** @type {?} */
export const warn = (/**
 * @param {...?} args
 * @return {?}
 */
(...args) => consoleCommonBehavior((/**
 * @param {...?} arg
 * @return {?}
 */
(...arg) => console.warn(PREFIX, ...arg)), ...args));
/** @type {?} */
export const warnDeprecation = (/**
 * @param {...?} args
 * @return {?}
 */
(...args) => {
    if (!environment.isTestMode) {
        /** @type {?} */
        const stack = new Error().stack;
        return consoleCommonBehavior((/**
         * @param {...?} arg
         * @return {?}
         */
        (...arg) => console.warn(PREFIX, 'deprecated:', ...arg, stack)), ...args);
    }
    else {
        return (/**
         * @return {?}
         */
        () => { });
    }
});
// Log should only be printed in dev mode.
/** @type {?} */
export const log = (/**
 * @param {...?} args
 * @return {?}
 */
(...args) => {
    if (isDevMode()) {
        console.log(PREFIX, ...args);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsibG9nZ2VyL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7O01BRXBELE1BQU0sR0FBNEIsRUFBRTs7QUFFMUMsTUFBTSxPQUFPLE1BQU0sR0FBRyxhQUFhOzs7OztBQUVuQyxTQUFTLFdBQVcsQ0FBQyxHQUFHLElBQVc7O1VBQzNCLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTTs7Ozs7SUFBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUUsRUFBRSxDQUFDO0lBRWhFLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7U0FBTTtRQUNMLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUM7S0FDYjtBQUNILENBQUM7Ozs7OztBQUVELFNBQVMscUJBQXFCLENBQUMsV0FBbUMsRUFBRSxHQUFHLElBQVc7SUFDaEYsSUFBSSxXQUFXLENBQUMsVUFBVSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUNuRSxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUN0QjtBQUNILENBQUM7OztBQUdELE1BQU0sT0FBTyxJQUFJOzs7O0FBQUcsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFLENBQUMscUJBQXFCOzs7O0FBQUMsQ0FBQyxHQUFHLEdBQVUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRSxHQUFHLElBQUksQ0FBQyxDQUFBOztBQUV2SCxNQUFNLE9BQU8sZUFBZTs7OztBQUFHLENBQUMsR0FBRyxJQUFXLEVBQUUsRUFBRTtJQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRTs7Y0FDckIsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUMsS0FBSztRQUMvQixPQUFPLHFCQUFxQjs7OztRQUFDLENBQUMsR0FBRyxHQUFVLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQzlHO1NBQU07UUFDTDs7O1FBQU8sR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUFDO0tBQ2pCO0FBQ0gsQ0FBQyxDQUFBOzs7QUFHRCxNQUFNLE9BQU8sR0FBRzs7OztBQUFHLENBQUMsR0FBRyxJQUFXLEVBQUUsRUFBRTtJQUNwQyxJQUFJLFNBQVMsRUFBRSxFQUFFO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUM5QjtBQUNILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcbmltcG9ydCB7IGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5cbmNvbnN0IHJlY29yZDogUmVjb3JkPHN0cmluZywgYm9vbGVhbj4gPSB7fTtcblxuZXhwb3J0IGNvbnN0IFBSRUZJWCA9ICdbTkctWk9SUk9dOic7XG5cbmZ1bmN0aW9uIG5vdFJlY29yZGVkKC4uLmFyZ3M6IGFueVtdKTogYm9vbGVhbiB7XG4gIGNvbnN0IGFzUmVjb3JkID0gYXJncy5yZWR1Y2UoKGFjYywgYykgPT4gYWNjICsgYy50b1N0cmluZygpLCAnJyk7XG5cbiAgaWYgKHJlY29yZFthc1JlY29yZF0pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmVjb3JkW2FzUmVjb3JkXSA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29uc29sZUNvbW1vbkJlaGF2aW9yKGNvbnNvbGVGdW5jOiAoLi4uYXJnczogYW55KSA9PiB2b2lkLCAuLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICBpZiAoZW52aXJvbm1lbnQuaXNUZXN0TW9kZSB8fCAoaXNEZXZNb2RlKCkgJiYgbm90UmVjb3JkZWQoLi4uYXJncykpKSB7XG4gICAgY29uc29sZUZ1bmMoLi4uYXJncyk7XG4gIH1cbn1cblxuLy8gV2FybmluZyBzaG91bGQgb25seSBiZSBwcmludGVkIGluIGRldiBtb2RlIGFuZCBvbmx5IG9uY2UuXG5leHBvcnQgY29uc3Qgd2FybiA9ICguLi5hcmdzOiBhbnlbXSkgPT4gY29uc29sZUNvbW1vbkJlaGF2aW9yKCguLi5hcmc6IGFueVtdKSA9PiBjb25zb2xlLndhcm4oUFJFRklYLCAuLi5hcmcpLCAuLi5hcmdzKTtcblxuZXhwb3J0IGNvbnN0IHdhcm5EZXByZWNhdGlvbiA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICBpZiAoIWVudmlyb25tZW50LmlzVGVzdE1vZGUpIHtcbiAgICBjb25zdCBzdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xuICAgIHJldHVybiBjb25zb2xlQ29tbW9uQmVoYXZpb3IoKC4uLmFyZzogYW55W10pID0+IGNvbnNvbGUud2FybihQUkVGSVgsICdkZXByZWNhdGVkOicsIC4uLmFyZywgc3RhY2spLCAuLi5hcmdzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKCkgPT4ge307XG4gIH1cbn07XG5cbi8vIExvZyBzaG91bGQgb25seSBiZSBwcmludGVkIGluIGRldiBtb2RlLlxuZXhwb3J0IGNvbnN0IGxvZyA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICBjb25zb2xlLmxvZyhQUkVGSVgsIC4uLmFyZ3MpO1xuICB9XG59O1xuIl19