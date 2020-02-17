/**
 * @fileoverview added by tsickle
 * Generated from: date-helper.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { formatDate } from '@angular/common';
import { Inject, Injectable, Injector, Optional } from '@angular/core';
import fnsFormat from 'date-fns/format';
import fnsGetISOWeek from 'date-fns/get_iso_week';
import fnsParse from 'date-fns/parse';
import { mergeDateConfig, NZ_DATE_CONFIG } from './date-config';
import { NzI18nService } from './nz-i18n.service';
import * as i0 from "@angular/core";
import * as i1 from "./date-config";
/**
 * @param {?} injector
 * @param {?} config
 * @return {?}
 */
export function DATE_HELPER_SERVICE_FACTORY(injector, config) {
    /** @type {?} */
    const i18n = injector.get(NzI18nService);
    return i18n.getDateLocale() ? new DateHelperByDateFns(i18n, config) : new DateHelperByDatePipe(i18n, config);
}
/**
 * Abstract DateHelperService(Token via Class)
 * Compatibility: compact for original usage by default which using DatePipe
 * @abstract
 */
export class DateHelperService {
    // Indicate whether this service is rely on DatePipe
    /**
     * @param {?} i18n
     * @param {?} config
     */
    constructor(i18n, config) {
        this.i18n = i18n;
        this.config = config;
        this.relyOnDatePipe = this instanceof DateHelperByDatePipe; // Indicate whether this service is rely on DatePipe
        this.config = mergeDateConfig(this.config);
    }
    /**
     * @param {?} text
     * @return {?}
     */
    parseDate(text) {
        if (!text) {
            return;
        }
        return fnsParse(text);
    }
    /**
     * @param {?} text
     * @return {?}
     */
    parseTime(text) {
        if (!text) {
            return;
        }
        return fnsParse(`1970-01-01 ${text}`);
    }
}
DateHelperService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
                useFactory: DATE_HELPER_SERVICE_FACTORY,
                deps: [Injector, [new Optional(), NZ_DATE_CONFIG]]
            },] }
];
/** @nocollapse */
DateHelperService.ctorParameters = () => [
    { type: NzI18nService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_CONFIG,] }] }
];
/** @nocollapse */ DateHelperService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DateHelperService_Factory() { return DATE_HELPER_SERVICE_FACTORY(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.NZ_DATE_CONFIG, 8)); }, token: DateHelperService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DateHelperService.prototype.relyOnDatePipe;
    /**
     * @type {?}
     * @protected
     */
    DateHelperService.prototype.i18n;
    /**
     * @type {?}
     * @protected
     */
    DateHelperService.prototype.config;
    /**
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateHelperService.prototype.getISOWeek = function (date) { };
    /**
     * @abstract
     * @return {?}
     */
    DateHelperService.prototype.getFirstDayOfWeek = function () { };
    /**
     * @abstract
     * @param {?} date
     * @param {?} formatStr
     * @return {?}
     */
    DateHelperService.prototype.format = function (date, formatStr) { };
}
/**
 * DateHelper that handles date formats with date-fns
 */
export class DateHelperByDateFns extends DateHelperService {
    /**
     * @param {?} date
     * @return {?}
     */
    getISOWeek(date) {
        return fnsGetISOWeek(date);
    }
    // TODO: Use date-fns's "weekStartsOn" to support different locale when "config.firstDayOfWeek" is null
    // when v2.0 is ready: https://github.com/date-fns/date-fns/blob/v2.0.0-alpha.27/src/locale/en-US/index.js#L23
    /**
     * @return {?}
     */
    getFirstDayOfWeek() {
        return this.config.firstDayOfWeek == null ? 1 : this.config.firstDayOfWeek;
    }
    /**
     * Format a date
     * @see https://date-fns.org/docs/format#description
     * @param {?} date Date
     * @param {?} formatStr format string
     * @return {?}
     */
    format(date, formatStr) {
        return date ? fnsFormat(date, formatStr, { locale: this.i18n.getDateLocale() }) : '';
    }
}
/** @nocollapse */ DateHelperByDateFns.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DateHelperByDateFns_Factory() { return DATE_HELPER_SERVICE_FACTORY(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.NZ_DATE_CONFIG, 8)); }, token: DateHelperByDateFns, providedIn: "root" });
/**
 * DateHelper that handles date formats with angular's date-pipe
 *
 * @see https://github.com/NG-ZORRO/ng-zorro-antd/issues/2406 - DatePipe may cause non-standard week bug, see:
 *
 */
export class DateHelperByDatePipe extends DateHelperService {
    /**
     * @param {?} i18n
     * @param {?} config
     */
    constructor(i18n, config) {
        super(i18n, config);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getISOWeek(date) {
        return +this.format(date, 'w');
    }
    /**
     * @return {?}
     */
    getFirstDayOfWeek() {
        if (this.config.firstDayOfWeek === undefined) {
            /** @type {?} */
            const locale = this.i18n.getLocaleId();
            return locale && ['zh-cn', 'zh-tw'].indexOf(locale.toLowerCase()) > -1 ? 1 : 0;
        }
        return this.config.firstDayOfWeek;
    }
    /**
     * @param {?} date
     * @param {?} formatStr
     * @return {?}
     */
    format(date, formatStr) {
        return date ? (/** @type {?} */ (formatDate(date, formatStr, this.i18n.getLocaleId()))) : '';
    }
    /**
     * Compatible translate the moment-like format pattern to angular's pattern
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     *
     * TODO: compare and complete all format patterns
     * Each format docs as below:
     * @link https://momentjs.com/docs/#/displaying/format/ / https://angular.io/api/common/DatePipe#description
     * @param {?} format input format pattern
     * @return {?}
     */
    transCompatFormat(format) {
        return (format &&
            format
                .replace(/Y/g, 'y') // only support y, yy, yyy, yyyy
                .replace(/D/g, 'd')); // d, dd represent of D, DD for momentjs, others are not support
    }
}
/** @nocollapse */
DateHelperByDatePipe.ctorParameters = () => [
    { type: NzI18nService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_CONFIG,] }] }
];
/** @nocollapse */ DateHelperByDatePipe.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DateHelperByDatePipe_Factory() { return DATE_HELPER_SERVICE_FACTORY(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.NZ_DATE_CONFIG, 8)); }, token: DateHelperByDatePipe, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxwZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvaTE4bi8iLCJzb3VyY2VzIjpbImRhdGUtaGVscGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxTQUFTLE1BQU0saUJBQWlCLENBQUM7QUFDeEMsT0FBTyxhQUFhLE1BQU0sdUJBQXVCLENBQUM7QUFDbEQsT0FBTyxRQUFRLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEMsT0FBTyxFQUFFLGVBQWUsRUFBZ0IsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7QUFFbEQsTUFBTSxVQUFVLDJCQUEyQixDQUFDLFFBQWtCLEVBQUUsTUFBb0I7O1VBQzVFLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUN4QyxPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksb0JBQW9CLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQy9HLENBQUM7Ozs7OztBQVdELE1BQU0sT0FBZ0IsaUJBQWlCOzs7Ozs7SUFHckMsWUFBc0IsSUFBbUIsRUFBZ0QsTUFBb0I7UUFBdkYsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUFnRCxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBRjdHLG1CQUFjLEdBQVksSUFBSSxZQUFZLG9CQUFvQixDQUFDLENBQUMsb0RBQW9EO1FBR2xILElBQUksQ0FBQyxNQUFN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QUNILE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsZ0NBQWdDO2lCQUNuRCxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUN0QixDQUFDLENBQUMsZ0VBQWdFO0lBQ3JFLENBQUM7Ozs7WUEvR00sYUFBYTs0Q0EwRWMsUUFBUSxZQUFJLE1BQU0sU0FBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBmbnNGb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCBmbnNHZXRJU09XZWVrIGZyb20gJ2RhdGUtZm5zL2dldF9pc29fd2Vlayc7XG5pbXBvcnQgZm5zUGFyc2UgZnJvbSAnZGF0ZS1mbnMvcGFyc2UnO1xuXG5pbXBvcnQgeyBtZXJnZURhdGVDb25maWcsIE56RGF0ZUNvbmZpZywgTlpfREFURV9DT05GSUcgfSBmcm9tICcuL2RhdGUtY29uZmlnJztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICcuL256LWkxOG4uc2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBEQVRFX0hFTFBFUl9TRVJWSUNFX0ZBQ1RPUlkoaW5qZWN0b3I6IEluamVjdG9yLCBjb25maWc6IE56RGF0ZUNvbmZpZyk6IERhdGVIZWxwZXJTZXJ2aWNlIHtcbiAgY29uc3QgaTE4biA9IGluamVjdG9yLmdldChOekkxOG5TZXJ2aWNlKTtcbiAgcmV0dXJuIGkxOG4uZ2V0RGF0ZUxvY2FsZSgpID8gbmV3IERhdGVIZWxwZXJCeURhdGVGbnMoaTE4biwgY29uZmlnKSA6IG5ldyBEYXRlSGVscGVyQnlEYXRlUGlwZShpMThuLCBjb25maWcpO1xufVxuXG4vKipcbiAqIEFic3RyYWN0IERhdGVIZWxwZXJTZXJ2aWNlKFRva2VuIHZpYSBDbGFzcylcbiAqIENvbXBhdGliaWxpdHk6IGNvbXBhY3QgZm9yIG9yaWdpbmFsIHVzYWdlIGJ5IGRlZmF1bHQgd2hpY2ggdXNpbmcgRGF0ZVBpcGVcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIHVzZUZhY3Rvcnk6IERBVEVfSEVMUEVSX1NFUlZJQ0VfRkFDVE9SWSxcbiAgZGVwczogW0luamVjdG9yLCBbbmV3IE9wdGlvbmFsKCksIE5aX0RBVEVfQ09ORklHXV1cbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGF0ZUhlbHBlclNlcnZpY2Uge1xuICByZWx5T25EYXRlUGlwZTogYm9vbGVhbiA9IHRoaXMgaW5zdGFuY2VvZiBEYXRlSGVscGVyQnlEYXRlUGlwZTsgLy8gSW5kaWNhdGUgd2hldGhlciB0aGlzIHNlcnZpY2UgaXMgcmVseSBvbiBEYXRlUGlwZVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBpMThuOiBOekkxOG5TZXJ2aWNlLCBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0RBVEVfQ09ORklHKSBwcm90ZWN0ZWQgY29uZmlnOiBOekRhdGVDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IG1lcmdlRGF0ZUNvbmZpZyh0aGlzLmNvbmZpZyk7XG4gIH1cblxuICBhYnN0cmFjdCBnZXRJU09XZWVrKGRhdGU6IERhdGUpOiBudW1iZXI7XG4gIGFic3RyYWN0IGdldEZpcnN0RGF5T2ZXZWVrKCk6IFdlZWtEYXlJbmRleDtcbiAgYWJzdHJhY3QgZm9ybWF0KGRhdGU6IERhdGUsIGZvcm1hdFN0cjogc3RyaW5nKTogc3RyaW5nO1xuXG4gIHBhcnNlRGF0ZSh0ZXh0OiBzdHJpbmcpOiBEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGZuc1BhcnNlKHRleHQpO1xuICB9XG5cbiAgcGFyc2VUaW1lKHRleHQ6IHN0cmluZyk6IERhdGUgfCB1bmRlZmluZWQge1xuICAgIGlmICghdGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gZm5zUGFyc2UoYDE5NzAtMDEtMDEgJHt0ZXh0fWApO1xuICB9XG59XG5cbi8qKlxuICogRGF0ZUhlbHBlciB0aGF0IGhhbmRsZXMgZGF0ZSBmb3JtYXRzIHdpdGggZGF0ZS1mbnNcbiAqL1xuZXhwb3J0IGNsYXNzIERhdGVIZWxwZXJCeURhdGVGbnMgZXh0ZW5kcyBEYXRlSGVscGVyU2VydmljZSB7XG4gIGdldElTT1dlZWsoZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGZuc0dldElTT1dlZWsoZGF0ZSk7XG4gIH1cblxuICAvLyBUT0RPOiBVc2UgZGF0ZS1mbnMncyBcIndlZWtTdGFydHNPblwiIHRvIHN1cHBvcnQgZGlmZmVyZW50IGxvY2FsZSB3aGVuIFwiY29uZmlnLmZpcnN0RGF5T2ZXZWVrXCIgaXMgbnVsbFxuICAvLyB3aGVuIHYyLjAgaXMgcmVhZHk6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL3YyLjAuMC1hbHBoYS4yNy9zcmMvbG9jYWxlL2VuLVVTL2luZGV4LmpzI0wyM1xuICBnZXRGaXJzdERheU9mV2VlaygpOiAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZmlyc3REYXlPZldlZWsgPT0gbnVsbCA/IDEgOiB0aGlzLmNvbmZpZy5maXJzdERheU9mV2VlaztcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXQgYSBkYXRlXG4gICAqIEBzZWUgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9mb3JtYXQjZGVzY3JpcHRpb25cbiAgICogQHBhcmFtIGRhdGUgRGF0ZVxuICAgKiBAcGFyYW0gZm9ybWF0U3RyIGZvcm1hdCBzdHJpbmdcbiAgICovXG4gIGZvcm1hdChkYXRlOiBEYXRlIHwgbnVsbCwgZm9ybWF0U3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBkYXRlID8gZm5zRm9ybWF0KGRhdGUsIGZvcm1hdFN0ciwgeyBsb2NhbGU6IHRoaXMuaTE4bi5nZXREYXRlTG9jYWxlKCkgfSkgOiAnJztcbiAgfVxufVxuXG4vKipcbiAqIERhdGVIZWxwZXIgdGhhdCBoYW5kbGVzIGRhdGUgZm9ybWF0cyB3aXRoIGFuZ3VsYXIncyBkYXRlLXBpcGVcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy8yNDA2IC0gRGF0ZVBpcGUgbWF5IGNhdXNlIG5vbi1zdGFuZGFyZCB3ZWVrIGJ1Zywgc2VlOlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIERhdGVIZWxwZXJCeURhdGVQaXBlIGV4dGVuZHMgRGF0ZUhlbHBlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihpMThuOiBOekkxOG5TZXJ2aWNlLCBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0RBVEVfQ09ORklHKSBjb25maWc6IE56RGF0ZUNvbmZpZykge1xuICAgIHN1cGVyKGkxOG4sIGNvbmZpZyk7XG4gIH1cblxuICBnZXRJU09XZWVrKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiArdGhpcy5mb3JtYXQoZGF0ZSwgJ3cnKTtcbiAgfVxuXG4gIGdldEZpcnN0RGF5T2ZXZWVrKCk6IFdlZWtEYXlJbmRleCB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmZpcnN0RGF5T2ZXZWVrID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVJZCgpO1xuICAgICAgcmV0dXJuIGxvY2FsZSAmJiBbJ3poLWNuJywgJ3poLXR3J10uaW5kZXhPZihsb2NhbGUudG9Mb3dlckNhc2UoKSkgPiAtMSA/IDEgOiAwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb25maWcuZmlyc3REYXlPZldlZWs7XG4gIH1cblxuICBmb3JtYXQoZGF0ZTogRGF0ZSB8IG51bGwsIGZvcm1hdFN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZGF0ZSA/IGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0U3RyLCB0aGlzLmkxOG4uZ2V0TG9jYWxlSWQoKSkhIDogJyc7XG4gIH1cblxuICAvKipcbiAgICogQ29tcGF0aWJsZSB0cmFuc2xhdGUgdGhlIG1vbWVudC1saWtlIGZvcm1hdCBwYXR0ZXJuIHRvIGFuZ3VsYXIncyBwYXR0ZXJuXG4gICAqIFdoeT8gRm9yIG5vdywgd2UgbmVlZCB0byBzdXBwb3J0IHRoZSBleGlzdGluZyBsYW5ndWFnZSBmb3JtYXRzIGluIEFudEQsIGFuZCBBbnREIHVzZXMgdGhlIGRlZmF1bHQgdGVtcG9yYWwgc3ludGF4LlxuICAgKlxuICAgKiBUT0RPOiBjb21wYXJlIGFuZCBjb21wbGV0ZSBhbGwgZm9ybWF0IHBhdHRlcm5zXG4gICAqIEVhY2ggZm9ybWF0IGRvY3MgYXMgYmVsb3c6XG4gICAqIEBsaW5rIGh0dHBzOi8vbW9tZW50anMuY29tL2RvY3MvIy9kaXNwbGF5aW5nL2Zvcm1hdC9cbiAgICogQGxpbmsgaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9jb21tb24vRGF0ZVBpcGUjZGVzY3JpcHRpb25cbiAgICogQHBhcmFtIGZvcm1hdCBpbnB1dCBmb3JtYXQgcGF0dGVyblxuICAgKi9cbiAgdHJhbnNDb21wYXRGb3JtYXQoZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiAoXG4gICAgICBmb3JtYXQgJiZcbiAgICAgIGZvcm1hdFxuICAgICAgICAucmVwbGFjZSgvWS9nLCAneScpIC8vIG9ubHkgc3VwcG9ydCB5LCB5eSwgeXl5LCB5eXl5XG4gICAgICAgIC5yZXBsYWNlKC9EL2csICdkJylcbiAgICApOyAvLyBkLCBkZCByZXByZXNlbnQgb2YgRCwgREQgZm9yIG1vbWVudGpzLCBvdGhlcnMgYXJlIG5vdCBzdXBwb3J0XG4gIH1cbn1cblxuLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCB0eXBlIFdlZWtEYXlJbmRleCA9IDAgfCAxIHwgMiB8IDMgfCA0IHwgNSB8IDY7XG4iXX0=