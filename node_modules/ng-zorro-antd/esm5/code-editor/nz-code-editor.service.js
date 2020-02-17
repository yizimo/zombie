/**
 * @fileoverview added by tsickle
 * Generated from: nz-code-editor.service.ts
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
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import { of as observableOf, BehaviorSubject, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { warn, warnDeprecation, NzConfigService, PREFIX } from 'ng-zorro-antd/core';
import { NzCodeEditorLoadingStatus, NZ_CODE_EDITOR_CONFIG } from './nz-code-editor.definitions';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/common";
import * as i3 from "./nz-code-editor.definitions";
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'codeEditor';
// tslint:disable no-any
/**
 * @param {?=} fn
 * @return {?}
 */
function tryTriggerFunc(fn) {
    return (/**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (fn) {
            fn.apply(void 0, tslib_1.__spread(args));
        }
    });
}
// tslint:enable no-any
var NzCodeEditorService = /** @class */ (function () {
    function NzCodeEditorService(nzConfigService, _document, // tslint:disable-line no-any
    config) {
        var _this = this;
        this.nzConfigService = nzConfigService;
        this.firstEditorInitialized = false;
        this.loaded$ = new Subject();
        this.loadingStatus = NzCodeEditorLoadingStatus.UNLOAD;
        this.option$ = new BehaviorSubject(this.option);
        /** @type {?} */
        var globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
        if (config) {
            warnDeprecation("'NZ_CODE_EDITOR_CONFIG' is deprecated and will be removed in next minor version. Please use 'NzConfigService' instead.");
        }
        this.document = _document;
        this.config = tslib_1.__assign({}, config, globalConfig);
        this.option = this.config.defaultEditorOption || {};
        this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var newGlobalConfig = _this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
            if (newGlobalConfig) {
                _this._updateDefaultOption(newGlobalConfig.defaultEditorOption);
            }
        }));
    }
    /**
     * @param {?} option
     * @return {?}
     */
    NzCodeEditorService.prototype.updateDefaultOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        warnDeprecation("'updateDefaultOption' is deprecated and will be removed in next minor version. Please use 'set' of 'NzConfigService' instead.");
        this._updateDefaultOption(option);
    };
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    NzCodeEditorService.prototype._updateDefaultOption = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.option = tslib_1.__assign({}, this.option, option);
        this.option$.next(this.option);
        if (option.theme) {
            monaco.editor.setTheme(option.theme);
        }
    };
    /**
     * @return {?}
     */
    NzCodeEditorService.prototype.requestToInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.loadingStatus === NzCodeEditorLoadingStatus.LOADED) {
            this.onInit();
            return observableOf(this.getLatestOption());
        }
        if (this.loadingStatus === NzCodeEditorLoadingStatus.UNLOAD) {
            if (this.config.useStaticLoading && typeof monaco === 'undefined') {
                warn('You choose to use static loading but it seems that you forget ' +
                    'to config webpack plugin correctly. Please refer to our official website' +
                    'for more details about static loading.');
            }
            else {
                this.loadMonacoScript();
            }
        }
        return this.loaded$.asObservable().pipe(tap((/**
         * @return {?}
         */
        function () { return _this.onInit(); })), map((/**
         * @return {?}
         */
        function () { return _this.getLatestOption(); })));
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorService.prototype.loadMonacoScript = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.config.useStaticLoading) {
            this.onLoad();
            return;
        }
        if (this.loadingStatus === NzCodeEditorLoadingStatus.LOADING) {
            return;
        }
        this.loadingStatus = NzCodeEditorLoadingStatus.LOADING;
        /** @type {?} */
        var assetsRoot = this.config.assetsRoot;
        /** @type {?} */
        var vs = assetsRoot ? assetsRoot + "/vs" : 'assets/vs';
        /** @type {?} */
        var windowAsAny = (/** @type {?} */ (window));
        // tslint:disable-line no-any
        /** @type {?} */
        var loadScript = this.document.createElement('script');
        loadScript.type = 'text/javascript';
        loadScript.src = vs + "/loader.js";
        loadScript.onload = (/**
         * @return {?}
         */
        function () {
            windowAsAny.require.config({
                paths: { vs: vs }
            });
            windowAsAny.require(['vs/editor/editor.main'], (/**
             * @return {?}
             */
            function () {
                _this.onLoad();
            }));
        });
        loadScript.onerror = (/**
         * @return {?}
         */
        function () {
            throw new Error(PREFIX + " cannot load assets of monaco editor from source \"" + vs + "\".");
        });
        this.document.documentElement.appendChild(loadScript);
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorService.prototype.onLoad = /**
     * @private
     * @return {?}
     */
    function () {
        this.loadingStatus = NzCodeEditorLoadingStatus.LOADED;
        this.loaded$.next(true);
        this.loaded$.complete();
        tryTriggerFunc(this.config.onLoad)();
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorService.prototype.onInit = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.firstEditorInitialized) {
            this.firstEditorInitialized = true;
            tryTriggerFunc(this.config.onFirstEditorInit)();
        }
        tryTriggerFunc(this.config.onInit)();
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorService.prototype.getLatestOption = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__assign({}, this.option);
    };
    NzCodeEditorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzCodeEditorService.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [NZ_CODE_EDITOR_CONFIG,] }, { type: Optional }] }
    ]; };
    /** @nocollapse */ NzCodeEditorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzCodeEditorService_Factory() { return new NzCodeEditorService(i0.ɵɵinject(i1.NzConfigService), i0.ɵɵinject(i2.DOCUMENT), i0.ɵɵinject(i3.NZ_CODE_EDITOR_CONFIG, 8)); }, token: NzCodeEditorService, providedIn: "root" });
    return NzCodeEditorService;
}());
export { NzCodeEditorService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.document;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.firstEditorInitialized;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.loaded$;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.loadingStatus;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.option;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.config;
    /** @type {?} */
    NzCodeEditorService.prototype.option$;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.nzConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29kZS1lZGl0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29kZS1lZGl0b3IvIiwic291cmNlcyI6WyJuei1jb2RlLWVkaXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxFQUFFLElBQUksWUFBWSxFQUFFLGVBQWUsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEYsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEYsT0FBTyxFQUdMLHlCQUF5QixFQUN6QixxQkFBcUIsRUFDdEIsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7O0lBS2hDLHdCQUF3QixHQUFHLFlBQVk7Ozs7OztBQUc3QyxTQUFTLGNBQWMsQ0FBQyxFQUE0QjtJQUNsRDs7OztJQUFPO1FBQUMsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDcEIsSUFBSSxFQUFFLEVBQUU7WUFDTixFQUFFLGdDQUFJLElBQUksR0FBRTtTQUNiO0lBQ0gsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7QUFHRDtJQWFFLDZCQUNtQixlQUFnQyxFQUMvQixTQUFjLEVBQUUsNkJBQTZCO0lBQ3BCLE1BQTJCO1FBSHhFLGlCQXVCQztRQXRCa0Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBVDNDLDJCQUFzQixHQUFHLEtBQUssQ0FBQztRQUMvQixZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztR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QVEsRUFBRSxDQUFDO1FBRXhCLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFTyxvQ0FBTTs7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUNoQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1lBQ25DLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQztTQUNqRDtRQUVELGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFTyw2Q0FBZTs7OztJQUF2QjtRQUNFLDRCQUFZLElBQUksQ0FBQyxNQUFNLEVBQUc7SUFDNUIsQ0FBQzs7Z0JBcElGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBekIrQixlQUFlO2dEQXNDMUMsTUFBTSxTQUFDLFFBQVE7Z0RBQ2YsTUFBTSxTQUFDLHFCQUFxQixjQUFHLFFBQVE7Ozs4QkFwRDVDO0NBeUtDLEFBcklELElBcUlDO1NBbElZLG1CQUFtQjs7Ozs7O0lBQzlCLHVDQUEyQjs7Ozs7SUFDM0IscURBQXVDOzs7OztJQUN2QyxzQ0FBeUM7Ozs7O0lBQ3pDLDRDQUF5RDs7Ozs7SUFDekQscUNBQW9DOzs7OztJQUNwQyxxQ0FBbUM7O0lBRW5DLHNDQUFnRTs7Ozs7SUFHOUQsOENBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG9mIGFzIG9ic2VydmFibGVPZiwgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgd2Fybiwgd2FybkRlcHJlY2F0aW9uLCBOekNvbmZpZ1NlcnZpY2UsIFBSRUZJWCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQge1xuICBKb2luZWRFZGl0b3JPcHRpb25zLFxuICBOekNvZGVFZGl0b3JDb25maWcsXG4gIE56Q29kZUVkaXRvckxvYWRpbmdTdGF0dXMsXG4gIE5aX0NPREVfRURJVE9SX0NPTkZJR1xufSBmcm9tICcuL256LWNvZGUtZWRpdG9yLmRlZmluaXRpb25zJztcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxuZGVjbGFyZSBjb25zdCBtb25hY286IGFueTtcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2NvZGVFZGl0b3InO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZSBuby1hbnlcbmZ1bmN0aW9uIHRyeVRyaWdnZXJGdW5jKGZuPzogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkpOiAoLi4uYXJnczogYW55KSA9PiB2b2lkIHtcbiAgcmV0dXJuICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmIChmbikge1xuICAgICAgZm4oLi4uYXJncyk7XG4gICAgfVxuICB9O1xufVxuLy8gdHNsaW50OmVuYWJsZSBuby1hbnlcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTnpDb2RlRWRpdG9yU2VydmljZSB7XG4gIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50O1xuICBwcml2YXRlIGZpcnN0RWRpdG9ySW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBsb2FkZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBsb2FkaW5nU3RhdHVzID0gTnpDb2RlRWRpdG9yTG9hZGluZ1N0YXR1cy5VTkxPQUQ7XG4gIHByaXZhdGUgb3B0aW9uOiBKb2luZWRFZGl0b3JPcHRpb25zO1xuICBwcml2YXRlIGNvbmZpZzogTnpDb2RlRWRpdG9yQ29uZmlnO1xuXG4gIG9wdGlvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEpvaW5lZEVkaXRvck9wdGlvbnM+KHRoaXMub3B0aW9uKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudDogYW55LCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG5vLWFueVxuICAgIEBJbmplY3QoTlpfQ09ERV9FRElUT1JfQ09ORklHKSBAT3B0aW9uYWwoKSBjb25maWc/OiBOekNvZGVFZGl0b3JDb25maWdcbiAgKSB7XG4gICAgY29uc3QgZ2xvYmFsQ29uZmlnID0gdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSk7XG5cbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICB3YXJuRGVwcmVjYXRpb24oXG4gICAgICAgIGAnTlpfQ09ERV9FRElUT1JfQ09ORklHJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gbmV4dCBtaW5vciB2ZXJzaW9uLiBQbGVhc2UgdXNlICdOekNvbmZpZ1NlcnZpY2UnIGluc3RlYWQuYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLmRvY3VtZW50ID0gX2RvY3VtZW50O1xuICAgIHRoaXMuY29uZmlnID0geyAuLi5jb25maWcsIC4uLmdsb2JhbENvbmZpZyB9O1xuICAgIHRoaXMub3B0aW9uID0gdGhpcy5jb25maWcuZGVmYXVsdEVkaXRvck9wdGlvbiB8fCB7fTtcblxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IG5ld0dsb2JhbENvbmZpZyA9IHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpO1xuICAgICAgaWYgKG5ld0dsb2JhbENvbmZpZykge1xuICAgICAgICB0aGlzLl91cGRhdGVEZWZhdWx0T3B0aW9uKG5ld0dsb2JhbENvbmZpZy5kZWZhdWx0RWRpdG9yT3B0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZURlZmF1bHRPcHRpb24ob3B0aW9uOiBKb2luZWRFZGl0b3JPcHRpb25zKTogdm9pZCB7XG4gICAgd2FybkRlcHJlY2F0aW9uKFxuICAgICAgYCd1cGRhdGVEZWZhdWx0T3B0aW9uJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gbmV4dCBtaW5vciB2ZXJzaW9uLiBQbGVhc2UgdXNlICdzZXQnIG9mICdOekNvbmZpZ1NlcnZpY2UnIGluc3RlYWQuYFxuICAgICk7XG5cbiAgICB0aGlzLl91cGRhdGVEZWZhdWx0T3B0aW9uKG9wdGlvbik7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVEZWZhdWx0T3B0aW9uKG9wdGlvbjogSm9pbmVkRWRpdG9yT3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMub3B0aW9uID0geyAuLi50aGlzLm9wdGlvbiwgLi4ub3B0aW9uIH07XG4gICAgdGhpcy5vcHRpb24kLm5leHQodGhpcy5vcHRpb24pO1xuXG4gICAgaWYgKG9wdGlvbi50aGVtZSkge1xuICAgICAgbW9uYWNvLmVkaXRvci5zZXRUaGVtZShvcHRpb24udGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlcXVlc3RUb0luaXQoKTogT2JzZXJ2YWJsZTxKb2luZWRFZGl0b3JPcHRpb25zPiB7XG4gICAgaWYgKHRoaXMubG9hZGluZ1N0YXR1cyA9PT0gTnpDb2RlRWRpdG9yTG9hZGluZ1N0YXR1cy5MT0FERUQpIHtcbiAgICAgIHRoaXMub25Jbml0KCk7XG4gICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMuZ2V0TGF0ZXN0T3B0aW9uKCkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxvYWRpbmdTdGF0dXMgPT09IE56Q29kZUVkaXRvckxvYWRpbmdTdGF0dXMuVU5MT0FEKSB7XG4gICAgICBpZiAodGhpcy5jb25maWcudXNlU3RhdGljTG9hZGluZyAmJiB0eXBlb2YgbW9uYWNvID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdZb3UgY2hvb3NlIHRvIHVzZSBzdGF0aWMgbG9hZGluZyBidXQgaXQgc2VlbXMgdGhhdCB5b3UgZm9yZ2V0ICcgK1xuICAgICAgICAgICAgJ3RvIGNvbmZpZyB3ZWJwYWNrIHBsdWdpbiBjb3JyZWN0bHkuIFBsZWFzZSByZWZlciB0byBvdXIgb2ZmaWNpYWwgd2Vic2l0ZScgK1xuICAgICAgICAgICAgJ2ZvciBtb3JlIGRldGFpbHMgYWJvdXQgc3RhdGljIGxvYWRpbmcuJ1xuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2FkTW9uYWNvU2NyaXB0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubG9hZGVkJC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgdGFwKCgpID0+IHRoaXMub25Jbml0KCkpLFxuICAgICAgbWFwKCgpID0+IHRoaXMuZ2V0TGF0ZXN0T3B0aW9uKCkpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZE1vbmFjb1NjcmlwdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb25maWcudXNlU3RhdGljTG9hZGluZykge1xuICAgICAgdGhpcy5vbkxvYWQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sb2FkaW5nU3RhdHVzID09PSBOekNvZGVFZGl0b3JMb2FkaW5nU3RhdHVzLkxPQURJTkcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvYWRpbmdTdGF0dXMgPSBOekNvZGVFZGl0b3JMb2FkaW5nU3RhdHVzLkxPQURJTkc7XG5cbiAgICBjb25zdCBhc3NldHNSb290ID0gdGhpcy5jb25maWcuYXNzZXRzUm9vdDtcbiAgICBjb25zdCB2cyA9IGFzc2V0c1Jvb3QgPyBgJHthc3NldHNSb290fS92c2AgOiAnYXNzZXRzL3ZzJztcbiAgICBjb25zdCB3aW5kb3dBc0FueSA9IHdpbmRvdyBhcyBhbnk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmUgbm8tYW55XG4gICAgY29uc3QgbG9hZFNjcmlwdCA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgICBsb2FkU2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICBsb2FkU2NyaXB0LnNyYyA9IGAke3ZzfS9sb2FkZXIuanNgO1xuICAgIGxvYWRTY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgd2luZG93QXNBbnkucmVxdWlyZS5jb25maWcoe1xuICAgICAgICBwYXRoczogeyB2cyB9XG4gICAgICB9KTtcbiAgICAgIHdpbmRvd0FzQW55LnJlcXVpcmUoWyd2cy9lZGl0b3IvZWRpdG9yLm1haW4nXSwgKCkgPT4ge1xuICAgICAgICB0aGlzLm9uTG9hZCgpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBsb2FkU2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7UFJFRklYfSBjYW5ub3QgbG9hZCBhc3NldHMgb2YgbW9uYWNvIGVkaXRvciBmcm9tIHNvdXJjZSBcIiR7dnN9XCIuYCk7XG4gICAgfTtcblxuICAgIHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGxvYWRTY3JpcHQpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkxvYWQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nU3RhdHVzID0gTnpDb2RlRWRpdG9yTG9hZGluZ1N0YXR1cy5MT0FERUQ7XG4gICAgdGhpcy5sb2FkZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5sb2FkZWQkLmNvbXBsZXRlKCk7XG5cbiAgICB0cnlUcmlnZ2VyRnVuYyh0aGlzLmNvbmZpZy5vbkxvYWQpKCk7XG4gIH1cblxuICBwcml2YXRlIG9uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZmlyc3RFZGl0b3JJbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5maXJzdEVkaXRvckluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIHRyeVRyaWdnZXJGdW5jKHRoaXMuY29uZmlnLm9uRmlyc3RFZGl0b3JJbml0KSgpO1xuICAgIH1cblxuICAgIHRyeVRyaWdnZXJGdW5jKHRoaXMuY29uZmlnLm9uSW5pdCkoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGF0ZXN0T3B0aW9uKCk6IEpvaW5lZEVkaXRvck9wdGlvbnMge1xuICAgIHJldHVybiB7IC4uLnRoaXMub3B0aW9uIH07XG4gIH1cbn1cbiJdfQ==