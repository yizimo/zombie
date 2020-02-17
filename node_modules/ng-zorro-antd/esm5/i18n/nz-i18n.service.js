/**
 * @fileoverview added by tsickle
 * Generated from: nz-i18n.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { warn } from 'ng-zorro-antd/core';
import zh_CN from './languages/zh_CN';
import { NZ_DATE_LOCALE, NZ_I18N } from './nz-i18n.token';
import * as i0 from "@angular/core";
import * as i1 from "./nz-i18n.token";
var NzI18nService = /** @class */ (function () {
    function NzI18nService(locale, dateLocale) {
        this._change = new BehaviorSubject(this._locale);
        this.setLocale(locale || zh_CN);
        this.setDateLocale(dateLocale || null);
    }
    Object.defineProperty(NzI18nService.prototype, "localeChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._change.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // [NOTE] Performance issue: this method may called by every change detections
    // TODO: cache more deeply paths for performance
    /* tslint:disable-next-line:no-any */
    // [NOTE] Performance issue: this method may called by every change detections
    // TODO: cache more deeply paths for performance
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} path
     * @param {?=} data
     * @return {?}
     */
    NzI18nService.prototype.translate = 
    // [NOTE] Performance issue: this method may called by every change detections
    // TODO: cache more deeply paths for performance
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} path
     * @param {?=} data
     * @return {?}
     */
    function (path, data) {
        // this._logger.debug(`[NzI18nService] Translating(${this._locale.locale}): ${path}`);
        /** @type {?} */
        var content = (/** @type {?} */ (this._getObjectPath(this._locale, path)));
        if (typeof content === 'string') {
            if (data) {
                Object.keys(data).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return (content = content.replace(new RegExp("%" + key + "%", 'g'), data[key])); }));
            }
            return content;
        }
        return path;
    };
    /**
     * Set/Change current locale globally throughout the WHOLE application
     * NOTE: If called at runtime, rendered interface may not change along with the locale change,
     * because this do not trigger another render schedule.
     *
     * @param locale The translating letters
     */
    /**
     * Set/Change current locale globally throughout the WHOLE application
     * NOTE: If called at runtime, rendered interface may not change along with the locale change,
     * because this do not trigger another render schedule.
     *
     * @param {?} locale The translating letters
     * @return {?}
     */
    NzI18nService.prototype.setLocale = /**
     * Set/Change current locale globally throughout the WHOLE application
     * NOTE: If called at runtime, rendered interface may not change along with the locale change,
     * because this do not trigger another render schedule.
     *
     * @param {?} locale The translating letters
     * @return {?}
     */
    function (locale) {
        if (this._locale && this._locale.locale === locale.locale) {
            return;
        }
        this._locale = locale;
        this._change.next(locale);
    };
    /**
     * @return {?}
     */
    NzI18nService.prototype.getLocale = /**
     * @return {?}
     */
    function () {
        return this._locale;
    };
    /**
     * @return {?}
     */
    NzI18nService.prototype.getLocaleId = /**
     * @return {?}
     */
    function () {
        return this._locale ? this._locale.locale : '';
    };
    /**
     * @param {?} dateLocale
     * @return {?}
     */
    NzI18nService.prototype.setDateLocale = /**
     * @param {?} dateLocale
     * @return {?}
     */
    function (dateLocale) {
        this.dateLocale = dateLocale;
    };
    /**
     * @return {?}
     */
    NzI18nService.prototype.getDateLocale = /**
     * @return {?}
     */
    function () {
        return this.dateLocale;
    };
    /**
     * Get locale data
     * @param path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param defaultValue default value if the result is not "truthy"
     */
    // tslint:disable-next-line:no-any
    /**
     * Get locale data
     * @param {?} path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param {?=} defaultValue default value if the result is not "truthy"
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    NzI18nService.prototype.getLocaleData = /**
     * Get locale data
     * @param {?} path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param {?=} defaultValue default value if the result is not "truthy"
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    function (path, defaultValue) {
        /** @type {?} */
        var result = path ? this._getObjectPath(this._locale, path) : this._locale;
        if (!result && !defaultValue) {
            warn("Missing translations for \"" + path + "\" in language \"" + this._locale.locale + "\".\nYou can use \"NzI18nService.setLocale\" as a temporary fix.\nWelcome to submit a pull request to help us optimize the translations!\nhttps://github.com/NG-ZORRO/ng-zorro-antd/blob/master/CONTRIBUTING.md");
        }
        return result || defaultValue || {};
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} obj
     * @param {?} path
     * @return {?}
     */
    NzI18nService.prototype._getObjectPath = 
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} obj
     * @param {?} path
     * @return {?}
     */
    function (obj, path) {
        /** @type {?} */
        var res = obj;
        /** @type {?} */
        var paths = path.split('.');
        /** @type {?} */
        var depth = paths.length;
        /** @type {?} */
        var index = 0;
        while (res && index < depth) {
            res = res[paths[index++]];
        }
        return index === depth ? res : null;
    };
    NzI18nService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzI18nService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_I18N,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_LOCALE,] }] }
    ]; };
    /** @nocollapse */ NzI18nService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzI18nService_Factory() { return new NzI18nService(i0.ɵɵinject(i1.NZ_I18N, 8), i0.ɵɵinject(i1.NZ_DATE_LOCALE, 8)); }, token: NzI18nService, providedIn: "root" });
    return NzI18nService;
}());
export { NzI18nService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzI18nService.prototype._locale;
    /**
     * @type {?}
     * @private
     */
    NzI18nService.prototype._change;
    /**
     * @type {?}
     * @private
     */
    NzI18nService.prototype.dateLocale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pMThuLyIsInNvdXJjZXMiOlsibnotaTE4bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxJQUFJLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFFM0QsT0FBTyxLQUFLLE1BQU0sbUJBQW1CLENBQUM7QUFFdEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRTFEO0lBWUUsdUJBQytCLE1BQXVCLEVBQ2hCLFVBQXNCO1FBVHBELFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBa0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBV25FLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFWRCxzQkFBSSx1Q0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQVVELDhFQUE4RTtJQUM5RSxnREFBZ0Q7SUFDaEQscUNBQXFDOzs7Ozs7Ozs7SUFDckMsaUNBQVM7Ozs7Ozs7OztJQUFULFVBQVUsSUFBWSxFQUFFLElBQVU7OztZQUU1QixPQUFPLEdBQUcsbUJBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFVO1FBQy9ELElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQy9CLElBQUksSUFBSSxF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QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgd2FybiwgSW5kZXhhYmxlT2JqZWN0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHpoX0NOIGZyb20gJy4vbGFuZ3VhZ2VzL3poX0NOJztcbmltcG9ydCB7IERhdGVMb2NhbGUsIE56STE4bkludGVyZmFjZSB9IGZyb20gJy4vbnotaTE4bi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTlpfREFURV9MT0NBTEUsIE5aX0kxOE4gfSBmcm9tICcuL256LWkxOG4udG9rZW4nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOekkxOG5TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfbG9jYWxlOiBOekkxOG5JbnRlcmZhY2U7XG4gIHByaXZhdGUgX2NoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TnpJMThuSW50ZXJmYWNlPih0aGlzLl9sb2NhbGUpO1xuICBwcml2YXRlIGRhdGVMb2NhbGU6IERhdGVMb2NhbGU7XG5cbiAgZ2V0IGxvY2FsZUNoYW5nZSgpOiBPYnNlcnZhYmxlPE56STE4bkludGVyZmFjZT4ge1xuICAgIHJldHVybiB0aGlzLl9jaGFuZ2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0kxOE4pIGxvY2FsZTogTnpJMThuSW50ZXJmYWNlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfREFURV9MT0NBTEUpIGRhdGVMb2NhbGU6IERhdGVMb2NhbGVcbiAgKSB7XG4gICAgdGhpcy5zZXRMb2NhbGUobG9jYWxlIHx8IHpoX0NOKTtcbiAgICB0aGlzLnNldERhdGVMb2NhbGUoZGF0ZUxvY2FsZSB8fCBudWxsKTtcbiAgfVxuXG4gIC8vIFtOT1RFXSBQZXJmb3JtYW5jZSBpc3N1ZTogdGhpcyBtZXRob2QgbWF5IGNhbGxlZCBieSBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uc1xuICAvLyBUT0RPOiBjYWNoZSBtb3JlIGRlZXBseSBwYXRocyBmb3IgcGVyZm9ybWFuY2VcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICB0cmFuc2xhdGUocGF0aDogc3RyaW5nLCBkYXRhPzogYW55KTogc3RyaW5nIHtcbiAgICAvLyB0aGlzLl9sb2dnZXIuZGVidWcoYFtOekkxOG5TZXJ2aWNlXSBUcmFuc2xhdGluZygke3RoaXMuX2xvY2FsZS5sb2NhbGV9KTogJHtwYXRofWApO1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5fZ2V0T2JqZWN0UGF0aCh0aGlzLl9sb2NhbGUsIHBhdGgpIGFzIHN0cmluZztcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGtleSA9PiAoY29udGVudCA9IGNvbnRlbnQucmVwbGFjZShuZXcgUmVnRXhwKGAlJHtrZXl9JWAsICdnJyksIGRhdGFba2V5XSkpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQvQ2hhbmdlIGN1cnJlbnQgbG9jYWxlIGdsb2JhbGx5IHRocm91Z2hvdXQgdGhlIFdIT0xFIGFwcGxpY2F0aW9uXG4gICAqIE5PVEU6IElmIGNhbGxlZCBhdCBydW50aW1lLCByZW5kZXJlZCBpbnRlcmZhY2UgbWF5IG5vdCBjaGFuZ2UgYWxvbmcgd2l0aCB0aGUgbG9jYWxlIGNoYW5nZSxcbiAgICogYmVjYXVzZSB0aGlzIGRvIG5vdCB0cmlnZ2VyIGFub3RoZXIgcmVuZGVyIHNjaGVkdWxlLlxuICAgKlxuICAgKiBAcGFyYW0gbG9jYWxlIFRoZSB0cmFuc2xhdGluZyBsZXR0ZXJzXG4gICAqL1xuICBzZXRMb2NhbGUobG9jYWxlOiBOekkxOG5JbnRlcmZhY2UpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbG9jYWxlICYmIHRoaXMuX2xvY2FsZS5sb2NhbGUgPT09IGxvY2FsZS5sb2NhbGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlID0gbG9jYWxlO1xuICAgIHRoaXMuX2NoYW5nZS5uZXh0KGxvY2FsZSk7XG4gIH1cblxuICBnZXRMb2NhbGUoKTogTnpJMThuSW50ZXJmYWNlIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xuICB9XG5cbiAgZ2V0TG9jYWxlSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlID8gdGhpcy5fbG9jYWxlLmxvY2FsZSA6ICcnO1xuICB9XG5cbiAgc2V0RGF0ZUxvY2FsZShkYXRlTG9jYWxlOiBEYXRlTG9jYWxlKTogdm9pZCB7XG4gICAgdGhpcy5kYXRlTG9jYWxlID0gZGF0ZUxvY2FsZTtcbiAgfVxuXG4gIGdldERhdGVMb2NhbGUoKTogRGF0ZUxvY2FsZSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZUxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbG9jYWxlIGRhdGFcbiAgICogQHBhcmFtIHBhdGggZG90IHBhdGhzIGZvciBmaW5kaW5nIGV4aXN0IHZhbHVlIGZyb20gbG9jYWxlIGRhdGEsIGVnLiBcImEuYi5jXCJcbiAgICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBkZWZhdWx0IHZhbHVlIGlmIHRoZSByZXN1bHQgaXMgbm90IFwidHJ1dGh5XCJcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgZ2V0TG9jYWxlRGF0YShwYXRoOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGFueSk6IGFueSB7XG4gICAgY29uc3QgcmVzdWx0ID0gcGF0aCA/IHRoaXMuX2dldE9iamVjdFBhdGgodGhpcy5fbG9jYWxlLCBwYXRoKSA6IHRoaXMuX2xvY2FsZTtcblxuICAgIGlmICghcmVzdWx0ICYmICFkZWZhdWx0VmFsdWUpIHtcbiAgICAgIHdhcm4oYE1pc3NpbmcgdHJhbnNsYXRpb25zIGZvciBcIiR7cGF0aH1cIiBpbiBsYW5ndWFnZSBcIiR7dGhpcy5fbG9jYWxlLmxvY2FsZX1cIi5cbllvdSBjYW4gdXNlIFwiTnpJMThuU2VydmljZS5zZXRMb2NhbGVcIiBhcyBhIHRlbXBvcmFyeSBmaXguXG5XZWxjb21lIHRvIHN1Ym1pdCBhIHB1bGwgcmVxdWVzdCB0byBoZWxwIHVzIG9wdGltaXplIHRoZSB0cmFuc2xhdGlvbnMhXG5odHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9DT05UUklCVVRJTkcubWRgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0IHx8IGRlZmF1bHRWYWx1ZSB8fCB7fTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJpdmF0ZSBfZ2V0T2JqZWN0UGF0aChvYmo6IEluZGV4YWJsZU9iamVjdCwgcGF0aDogc3RyaW5nKTogc3RyaW5nIHwgb2JqZWN0IHwgYW55IHtcbiAgICBsZXQgcmVzID0gb2JqO1xuICAgIGNvbnN0IHBhdGhzID0gcGF0aC5zcGxpdCgnLicpO1xuICAgIGNvbnN0IGRlcHRoID0gcGF0aHMubGVuZ3RoO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgd2hpbGUgKHJlcyAmJiBpbmRleCA8IGRlcHRoKSB7XG4gICAgICByZXMgPSByZXNbcGF0aHNbaW5kZXgrK11dO1xuICAgIH1cbiAgICByZXR1cm4gaW5kZXggPT09IGRlcHRoID8gcmVzIDogbnVsbDtcbiAgfVxufVxuIl19