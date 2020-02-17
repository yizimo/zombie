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
export const sortGradient = (/**
 * @param {?} gradients
 * @return {?}
 */
(gradients) => {
    /** @type {?} */
    let tempArr = [];
    Object.keys(gradients).forEach((/**
     * @param {?} key
     * @return {?}
     */
    key => {
        /** @type {?} */
        const value = gradients[key];
        /** @type {?} */
        const formatKey = stripPercentToNumber(key);
        if (isNaN(formatKey)) {
            return {};
        }
        tempArr.push({
            key: formatKey,
            value
        });
    }));
    tempArr = tempArr.sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    (a, b) => a.key - b.key));
    return tempArr;
});
/** @type {?} */
export const handleCircleGradient = (/**
 * @param {?} strokeColor
 * @return {?}
 */
(strokeColor) => {
    return sortGradient(strokeColor).map((/**
     * @param {?} __0
     * @return {?}
     */
    ({ key, value }) => ({ offset: `${key}%`, color: value })));
});
/** @type {?} */
export const handleLinearGradient = (/**
 * @param {?} strokeColor
 * @return {?}
 */
(strokeColor) => {
    const { from = '#1890ff', to = '#1890ff', direction = 'to right' } = strokeColor, rest = tslib_1.__rest(strokeColor, ["from", "to", "direction"]);
    if (Object.keys(rest).length !== 0) {
        /** @type {?} */
        const sortedGradients = sortGradient((/** @type {?} */ (rest)))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ key, value }) => `${value} ${key}%`))
            .join(', ');
        return `linear-gradient(${direction}, ${sortedGradients})`;
    }
    return `linear-gradient(${direction}, ${from}, ${to})`;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibnotcHJvZ3Jlc3MtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxTQUFTLG9CQUFvQixDQUFDLE9BQWU7SUFDM0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ25DLENBQUM7O0FBRUQsTUFBTSxPQUFPLFlBQVk7Ozs7QUFBRyxDQUFDLFNBQXFDLEVBQUUsRUFBRTs7UUFDaEUsT0FBTyxHQUEwQyxFQUFFO0lBRXZELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTzs7OztJQUFDLEdBQUcsQ0FBQyxFQUFFOztjQUM3QixLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQzs7Y0FDdEIsU0FBUyxHQUFHLG9CQUFvQixDQUFDLEdBQUcsQ0FBQztRQUMzQyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNwQixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNYLEdBQUcsRUFBRSxTQUFTO1lBQ2QsS0FBSztTQUNOLENBQUMsQ0FBQztJQUNMLENBQUMsRUFBQyxDQUFDO0lBRUgsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJOzs7OztJQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUM7SUFDaEQsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTyxvQkFBb0I7Ozs7QUFBRyxDQUNsQyxXQUF1QyxFQUNHLEVBQUU7SUFDNUMsT0FBTyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRzs7OztJQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDO0FBQ2xHLENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8sb0JBQW9COzs7O0FBQUcsQ0FBQyxXQUFvQyxFQUFFLEVBQUU7VUFDckUsRUFBRSxJQUFJLEdBQUcsU0FBUyxFQUFFLEVBQUUsR0FBRyxTQUFTLEVBQUUsU0FBUyxHQUFHLFVBQVUsS0FBYyxXQUFXLEVBQXZCLCtEQUFPO0lBQ3pFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFOztjQUM1QixlQUFlLEdBQUcsWUFBWSxDQUFDLG1CQUFBLElBQUksRUFBOEIsQ0FBQzthQUNyRSxHQUFHOzs7O1FBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLElBQUksR0FBRyxHQUFHLEVBQUM7YUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNiLE9BQU8sbUJBQW1CLFNBQVMsS0FBSyxlQUFlLEdBQUcsQ0FBQztLQUM1RDtJQUNELE9BQU8sbUJBQW1CLFNBQVMsS0FBSyxJQUFJLEtBQUssRUFBRSxHQUFHLENBQUM7QUFDekQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IE56UHJvZ3Jlc3NDb2xvckdyYWRpZW50LCBOelByb2dyZXNzR3JhZGllbnRQcm9ncmVzcyB9IGZyb20gJy4vbnotcHJvZ3Jlc3MuZGVmaW5pdGlvbnMnO1xuXG5mdW5jdGlvbiBzdHJpcFBlcmNlbnRUb051bWJlcihwZXJjZW50OiBzdHJpbmcpOiBudW1iZXIge1xuICByZXR1cm4gK3BlcmNlbnQucmVwbGFjZSgnJScsICcnKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNvcnRHcmFkaWVudCA9IChncmFkaWVudHM6IE56UHJvZ3Jlc3NHcmFkaWVudFByb2dyZXNzKSA9PiB7XG4gIGxldCB0ZW1wQXJyOiBBcnJheTx7IGtleTogbnVtYmVyOyB2YWx1ZTogc3RyaW5nIH0+ID0gW107XG5cbiAgT2JqZWN0LmtleXMoZ3JhZGllbnRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBncmFkaWVudHNba2V5XTtcbiAgICBjb25zdCBmb3JtYXRLZXkgPSBzdHJpcFBlcmNlbnRUb051bWJlcihrZXkpO1xuICAgIGlmIChpc05hTihmb3JtYXRLZXkpKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHRlbXBBcnIucHVzaCh7XG4gICAgICBrZXk6IGZvcm1hdEtleSxcbiAgICAgIHZhbHVlXG4gICAgfSk7XG4gIH0pO1xuXG4gIHRlbXBBcnIgPSB0ZW1wQXJyLnNvcnQoKGEsIGIpID0+IGEua2V5IC0gYi5rZXkpO1xuICByZXR1cm4gdGVtcEFycjtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVDaXJjbGVHcmFkaWVudCA9IChcbiAgc3Ryb2tlQ29sb3I6IE56UHJvZ3Jlc3NHcmFkaWVudFByb2dyZXNzXG4pOiBBcnJheTx7IG9mZnNldDogc3RyaW5nOyBjb2xvcjogc3RyaW5nIH0+ID0+IHtcbiAgcmV0dXJuIHNvcnRHcmFkaWVudChzdHJva2VDb2xvcikubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gKHsgb2Zmc2V0OiBgJHtrZXl9JWAsIGNvbG9yOiB2YWx1ZSB9KSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTGluZWFyR3JhZGllbnQgPSAoc3Ryb2tlQ29sb3I6IE56UHJvZ3Jlc3NDb2xvckdyYWRpZW50KSA9PiB7XG4gIGNvbnN0IHsgZnJvbSA9ICcjMTg5MGZmJywgdG8gPSAnIzE4OTBmZicsIGRpcmVjdGlvbiA9ICd0byByaWdodCcsIC4uLnJlc3QgfSA9IHN0cm9rZUNvbG9yO1xuICBpZiAoT2JqZWN0LmtleXMocmVzdCkubGVuZ3RoICE9PSAwKSB7XG4gICAgY29uc3Qgc29ydGVkR3JhZGllbnRzID0gc29ydEdyYWRpZW50KHJlc3QgYXMgTnpQcm9ncmVzc0dyYWRpZW50UHJvZ3Jlc3MpXG4gICAgICAubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gYCR7dmFsdWV9ICR7a2V5fSVgKVxuICAgICAgLmpvaW4oJywgJyk7XG4gICAgcmV0dXJuIGBsaW5lYXItZ3JhZGllbnQoJHtkaXJlY3Rpb259LCAke3NvcnRlZEdyYWRpZW50c30pYDtcbiAgfVxuICByZXR1cm4gYGxpbmVhci1ncmFkaWVudCgke2RpcmVjdGlvbn0sICR7ZnJvbX0sICR7dG99KWA7XG59O1xuIl19