/**
 * @fileoverview added by tsickle
 * Generated from: nz-code-editor.definitions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { InjectionToken } from '@angular/core';
/** @enum {string} */
const NzCodeEditorLoadingStatus = {
    UNLOAD: "unload",
    LOADING: "loading",
    LOADED: "LOADED",
};
export { NzCodeEditorLoadingStatus };
/**
 * @record
 */
export function NzCodeEditorConfig() { }
if (false) {
    /** @type {?|undefined} */
    NzCodeEditorConfig.prototype.assetsRoot;
    /** @type {?|undefined} */
    NzCodeEditorConfig.prototype.defaultEditorOption;
    /** @type {?|undefined} */
    NzCodeEditorConfig.prototype.useStaticLoading;
    /**
     * @return {?}
     */
    NzCodeEditorConfig.prototype.onLoad = function () { };
    /**
     * @return {?}
     */
    NzCodeEditorConfig.prototype.onFirstEditorInit = function () { };
    /**
     * @return {?}
     */
    NzCodeEditorConfig.prototype.onInit = function () { };
}
/** @type {?} */
export const NZ_CODE_EDITOR_CONFIG = new InjectionToken('nz-code-editor-config', {
    providedIn: 'root',
    factory: NZ_CODE_EDITOR_CONFIG_FACTORY
});
/**
 * @return {?}
 */
export function NZ_CODE_EDITOR_CONFIG_FACTORY() {
    return {};
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29kZS1lZGl0b3IuZGVmaW5pdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvZGUtZWRpdG9yLyIsInNvdXJjZXMiOlsibnotY29kZS1lZGl0b3IuZGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFZL0MsTUFBWSx5QkFBeUI7SUFDbkMsTUFBTSxVQUFXO0lBQ2pCLE9BQU8sV0FBWTtJQUNuQixNQUFNLFVBQVc7RUFDbEI7Ozs7O0FBRUQsd0NBUUM7OztJQVBDLHdDQUE4Qjs7SUFDOUIsaURBQTBDOztJQUMxQyw4Q0FBMkI7Ozs7SUFFM0Isc0RBQWdCOzs7O0lBQ2hCLGlFQUEyQjs7OztJQUMzQixzREFBZ0I7OztBQUdsQixNQUFNLE9BQU8scUJBQXFCLEdBQUcsSUFBSSxjQUFjLENBQXFCLHVCQUF1QixFQUFFO0lBQ25HLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLE9BQU8sRUFBRSw2QkFBNkI7Q0FDdkMsQ0FBQzs7OztBQUVGLE1BQU0sVUFBVSw2QkFBNkI7SUFDM0MsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBlZGl0b3IgfSBmcm9tICdtb25hY28tZWRpdG9yJztcbmltcG9ydCBJRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucyA9IGVkaXRvci5JRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucztcbmltcG9ydCBJRGlmZkVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnMgPSBlZGl0b3IuSURpZmZFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zO1xuXG5leHBvcnQgdHlwZSBFZGl0b3JPcHRpb25zID0gSUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnM7XG5leHBvcnQgdHlwZSBEaWZmRWRpdG9yT3B0aW9ucyA9IElEaWZmRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucztcbmV4cG9ydCB0eXBlIEpvaW5lZEVkaXRvck9wdGlvbnMgPSBFZGl0b3JPcHRpb25zIHwgRGlmZkVkaXRvck9wdGlvbnM7XG5cbmV4cG9ydCB0eXBlIE56RWRpdG9yTW9kZSA9ICdub3JtYWwnIHwgJ2RpZmYnO1xuXG5leHBvcnQgZW51bSBOekNvZGVFZGl0b3JMb2FkaW5nU3RhdHVzIHtcbiAgVU5MT0FEID0gJ3VubG9hZCcsXG4gIExPQURJTkcgPSAnbG9hZGluZycsXG4gIExPQURFRCA9ICdMT0FERUQnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnpDb2RlRWRpdG9yQ29uZmlnIHtcbiAgYXNzZXRzUm9vdD86IHN0cmluZyB8IFNhZmVVcmw7XG4gIGRlZmF1bHRFZGl0b3JPcHRpb24/OiBKb2luZWRFZGl0b3JPcHRpb25zO1xuICB1c2VTdGF0aWNMb2FkaW5nPzogYm9vbGVhbjtcblxuICBvbkxvYWQ/KCk6IHZvaWQ7XG4gIG9uRmlyc3RFZGl0b3JJbml0PygpOiB2b2lkO1xuICBvbkluaXQ/KCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBOWl9DT0RFX0VESVRPUl9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48TnpDb2RlRWRpdG9yQ29uZmlnPignbnotY29kZS1lZGl0b3ItY29uZmlnJywge1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIGZhY3Rvcnk6IE5aX0NPREVfRURJVE9SX0NPTkZJR19GQUNUT1JZXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIE5aX0NPREVfRURJVE9SX0NPTkZJR19GQUNUT1JZKCk6IE56Q29kZUVkaXRvckNvbmZpZyB7XG4gIHJldHVybiB7fTtcbn1cbiJdfQ==