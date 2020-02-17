/**
 * @fileoverview added by tsickle
 * Generated from: logger/logger.ts
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
// tslint:disable:no-any
import { isDevMode } from '@angular/core';
import { environment } from '../environments/environment';
/** @type {?} */
var record = {};
/** @type {?} */
export var PREFIX = '[NG-ZORRO]:';
/**
 * @param {...?} args
 * @return {?}
 */
function notRecorded() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    /** @type {?} */
    var asRecord = args.reduce((/**
     * @param {?} acc
     * @param {?} c
     * @return {?}
     */
    function (acc, c) { return acc + c.toString(); }), '');
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
function consoleCommonBehavior(consoleFunc) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (environment.isTestMode || (isDevMode() && notRecorded.apply(void 0, tslib_1.__spread(args)))) {
        consoleFunc.apply(void 0, tslib_1.__spread(args));
    }
}
// Warning should only be printed in dev mode and only once.
/** @type {?} */
export var warn = (/**
 * @param {...?} args
 * @return {?}
 */
function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return consoleCommonBehavior.apply(void 0, tslib_1.__spread([(/**
         * @param {...?} arg
         * @return {?}
         */
        function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            return console.warn.apply(console, tslib_1.__spread([PREFIX], arg));
        })], args));
});
/** @type {?} */
export var warnDeprecation = (/**
 * @param {...?} args
 * @return {?}
 */
function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!environment.isTestMode) {
        /** @type {?} */
        var stack_1 = new Error().stack;
        return consoleCommonBehavior.apply(void 0, tslib_1.__spread([(/**
             * @param {...?} arg
             * @return {?}
             */
            function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
                return console.warn.apply(console, tslib_1.__spread([PREFIX, 'deprecated:'], arg, [stack_1]));
            })], args));
    }
    else {
        return (/**
         * @return {?}
         */
        function () { });
    }
});
// Log should only be printed in dev mode.
/** @type {?} */
export var log = (/**
 * @param {...?} args
 * @return {?}
 */
function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (isDevMode()) {
        console.log.apply(console, tslib_1.__spread([PREFIX], args));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsibG9nZ2VyL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztJQUVwRCxNQUFNLEdBQTRCLEVBQUU7O0FBRTFDLE1BQU0sS0FBTyxNQUFNLEdBQUcsYUFBYTs7Ozs7QUFFbkMsU0FBUyxXQUFXO0lBQUMsY0FBYztTQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7UUFBZCx5QkFBYzs7O1FBQzNCLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTTs7Ozs7SUFBQyxVQUFDLEdBQUcsRUFBRSxDQUFDLElBQUssT0FBQSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFsQixDQUFrQixHQUFFLEVBQUUsQ0FBQztJQUVoRSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNwQixPQUFPLEtBQUssQ0FBQztLQUNkO1NBQU07UUFDTCxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7QUFDSCxDQUFDOzs7Ozs7QUFFRCxTQUFTLHFCQUFxQixDQUFDLFdBQW1DO0lBQUUsY0FBYztTQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7UUFBZCw2QkFBYzs7SUFDaEYsSUFBSSxXQUFXLENBQUMsVUFBVSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksV0FBVyxnQ0FBSSxJQUFJLEVBQUMsQ0FBQyxFQUFFO1FBQ25FLFdBQVcsZ0NBQUksSUFBSSxHQUFFO0tBQ3RCO0FBQ0gsQ0FBQzs7O0FBR0QsTUFBTSxLQUFPLElBQUk7Ozs7QUFBRztJQUFDLGNBQWM7U0FBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1FBQWQseUJBQWM7O0lBQUssT0FBQSxxQkFBcUI7Ozs7UUFBQztZQUFDLGFBQWE7aUJBQWIsVUFBYSxFQUFiLHFCQUFhLEVBQWIsSUFBYTtnQkFBYix3QkFBYTs7WUFBSyxPQUFBLE9BQU8sQ0FBQyxJQUFJLE9BQVosT0FBTyxvQkFBTSxNQUFNLEdBQUssR0FBRztRQUEzQixDQUE0QixJQUFLLElBQUk7QUFBOUUsQ0FBK0UsQ0FBQTs7QUFFdkgsTUFBTSxLQUFPLGVBQWU7Ozs7QUFBRztJQUFDLGNBQWM7U0FBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1FBQWQseUJBQWM7O0lBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFOztZQUNyQixPQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQyxLQUFLO1FBQy9CLE9BQU8scUJBQXFCOzs7O1lBQUM7Z0JBQUMsYUFBYTtxQkFBYixVQUFhLEVBQWIscUJBQWEsRUFBYixJQUFhO29CQUFiLHdCQUFhOztnQkFBSyxPQUFBLE9BQU8sQ0FBQyxJQUFJLE9BQVosT0FBTyxvQkFBTSxNQUFNLEVBQUUsYUFBYSxHQUFLLEdBQUcsR0FBRSxPQUFLO1lBQWpELENBQWtELElBQUssSUFBSSxHQUFFO0tBQzlHO1NBQU07UUFDTDs7O1FBQU8sY0FBTyxDQUFDLEVBQUM7S0FDakI7QUFDSCxDQUFDLENBQUE7OztBQUdELE1BQU0sS0FBTyxHQUFHOzs7O0FBQUc7SUFBQyxjQUFjO1NBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztRQUFkLHlCQUFjOztJQUNoQyxJQUFJLFNBQVMsRUFBRSxFQUFFO1FBQ2YsT0FBTyxDQUFDLEdBQUcsT0FBWCxPQUFPLG9CQUFLLE1BQU0sR0FBSyxJQUFJLEdBQUU7S0FDOUI7QUFDSCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5pbXBvcnQgeyBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuXG5jb25zdCByZWNvcmQ6IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+ID0ge307XG5cbmV4cG9ydCBjb25zdCBQUkVGSVggPSAnW05HLVpPUlJPXTonO1xuXG5mdW5jdGlvbiBub3RSZWNvcmRlZCguLi5hcmdzOiBhbnlbXSk6IGJvb2xlYW4ge1xuICBjb25zdCBhc1JlY29yZCA9IGFyZ3MucmVkdWNlKChhY2MsIGMpID0+IGFjYyArIGMudG9TdHJpbmcoKSwgJycpO1xuXG4gIGlmIChyZWNvcmRbYXNSZWNvcmRdKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJlY29yZFthc1JlY29yZF0gPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnNvbGVDb21tb25CZWhhdmlvcihjb25zb2xlRnVuYzogKC4uLmFyZ3M6IGFueSkgPT4gdm9pZCwgLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgaWYgKGVudmlyb25tZW50LmlzVGVzdE1vZGUgfHwgKGlzRGV2TW9kZSgpICYmIG5vdFJlY29yZGVkKC4uLmFyZ3MpKSkge1xuICAgIGNvbnNvbGVGdW5jKC4uLmFyZ3MpO1xuICB9XG59XG5cbi8vIFdhcm5pbmcgc2hvdWxkIG9ubHkgYmUgcHJpbnRlZCBpbiBkZXYgbW9kZSBhbmQgb25seSBvbmNlLlxuZXhwb3J0IGNvbnN0IHdhcm4gPSAoLi4uYXJnczogYW55W10pID0+IGNvbnNvbGVDb21tb25CZWhhdmlvcigoLi4uYXJnOiBhbnlbXSkgPT4gY29uc29sZS53YXJuKFBSRUZJWCwgLi4uYXJnKSwgLi4uYXJncyk7XG5cbmV4cG9ydCBjb25zdCB3YXJuRGVwcmVjYXRpb24gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgaWYgKCFlbnZpcm9ubWVudC5pc1Rlc3RNb2RlKSB7XG4gICAgY29uc3Qgc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjaztcbiAgICByZXR1cm4gY29uc29sZUNvbW1vbkJlaGF2aW9yKCguLi5hcmc6IGFueVtdKSA9PiBjb25zb2xlLndhcm4oUFJFRklYLCAnZGVwcmVjYXRlZDonLCAuLi5hcmcsIHN0YWNrKSwgLi4uYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgpID0+IHt9O1xuICB9XG59O1xuXG4vLyBMb2cgc2hvdWxkIG9ubHkgYmUgcHJpbnRlZCBpbiBkZXYgbW9kZS5cbmV4cG9ydCBjb25zdCBsb2cgPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgY29uc29sZS5sb2coUFJFRklYLCAuLi5hcmdzKTtcbiAgfVxufTtcbiJdfQ==