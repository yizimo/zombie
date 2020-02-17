/**
 * @fileoverview added by tsickle
 * Generated from: nz-icon.service.ts
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
import { HttpBackend } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional, RendererFactory2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconService } from '@ant-design/icons-angular';
import { BarsOutline, CalendarOutline, CaretDownFill, CaretDownOutline, CaretUpFill, CaretUpOutline, CheckCircleFill, CheckCircleOutline, CheckOutline, ClockCircleOutline, CloseCircleFill, CloseCircleOutline, CloseOutline, CopyOutline, DoubleLeftOutline, DoubleRightOutline, DownOutline, EditOutline, EllipsisOutline, ExclamationCircleFill, ExclamationCircleOutline, EyeOutline, FileFill, FileOutline, FilterFill, InfoCircleFill, InfoCircleOutline, LeftOutline, LoadingOutline, PaperClipOutline, QuestionCircleOutline, RightOutline, SearchOutline, StarFill, UploadOutline, UpOutline } from '@ant-design/icons-angular/icons';
import { warn, warnDeprecation, NzConfigService } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "ng-zorro-antd/core";
import * as i3 from "@angular/common/http";
import * as i4 from "@angular/common";
/**
 * @record
 */
export function NzIconfontOption() { }
if (false) {
    /** @type {?} */
    NzIconfontOption.prototype.scriptUrl;
}
/** @type {?} */
export var NZ_ICONS = new InjectionToken('nz_icons');
/** @type {?} */
export var NZ_ICON_DEFAULT_TWOTONE_COLOR = new InjectionToken('nz_icon_default_twotone_color');
/** @type {?} */
export var DEFAULT_TWOTONE_COLOR = '#1890ff';
/** @type {?} */
export var NZ_ICONS_USED_BY_ZORRO = [
    BarsOutline,
    CalendarOutline,
    CaretUpFill,
    CaretUpOutline,
    CaretDownFill,
    CaretDownOutline,
    CheckCircleFill,
    CheckCircleOutline,
    CheckOutline,
    ClockCircleOutline,
    CloseCircleOutline,
    CloseCircleFill,
    CloseOutline,
    CopyOutline,
    DoubleLeftOutline,
    DoubleRightOutline,
    DownOutline,
    EditOutline,
    EllipsisOutline,
    ExclamationCircleFill,
    ExclamationCircleOutline,
    EyeOutline,
    FileFill,
    FileOutline,
    FilterFill,
    InfoCircleFill,
    InfoCircleOutline,
    LeftOutline,
    LoadingOutline,
    PaperClipOutline,
    QuestionCircleOutline,
    RightOutline,
    StarFill,
    SearchOutline,
    StarFill,
    UploadOutline,
    UpOutline
];
/**
 * It should be a global singleton, otherwise registered icons could not be found.
 */
var NzIconService = /** @class */ (function (_super) {
    tslib_1.__extends(NzIconService, _super);
    function NzIconService(rendererFactory, sanitizer, nzConfigService, handler, 
    // tslint:disable-next-line:no-any
    _document, icons, legacyDefaultTwotoneColor) {
        var _this = _super.call(this, rendererFactory, handler, _document, sanitizer) || this;
        _this.nzConfigService = nzConfigService;
        _this.legacyDefaultTwotoneColor = legacyDefaultTwotoneColor;
        _this.configUpdated$ = new Subject();
        _this.iconfontCache = new Set();
        _this.onConfigChange();
        _this.addIcon.apply(_this, tslib_1.__spread(NZ_ICONS_USED_BY_ZORRO, (icons || [])));
        if (legacyDefaultTwotoneColor) {
            warnDeprecation("'NZ_ICON_DEFAULT_TWOTONE_COLOR' is deprecated and will be removed in 9.0.0. Please use 'NZ_CONFIG' instead!");
        }
        _this.configDefaultTwotoneColor();
        _this.configDefaultTheme();
        return _this;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    NzIconService.prototype.warnAPI = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (type === 'old') {
            warnDeprecation("'<i class=\"anticon\"></i>' would be deprecated in 9.0.0. Please use '<i nz-icon nzType=\"\"></i>' API. Please refer https://ng.ant.design/components/icon/en.");
        }
        if (type === 'cross') {
            warnDeprecation("'cross' icon is replaced by 'close' icon. This auto correction would be removed in 9.0.0.");
        }
        if (type === 'vertical') {
            warnDeprecation("'verticle' is misspelled. Please use 'vertical'. This misspell would be fixed in 9.0.0.");
        }
    };
    /**
     * @param {?} svg
     * @return {?}
     */
    NzIconService.prototype.normalizeSvgElement = /**
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if (!svg.getAttribute('viewBox')) {
            this._renderer.setAttribute(svg, 'viewBox', '0 0 1024 1024');
        }
        if (!svg.getAttribute('width') || !svg.getAttribute('height')) {
            this._renderer.setAttribute(svg, 'width', '1em');
            this._renderer.setAttribute(svg, 'height', '1em');
        }
        if (!svg.getAttribute('fill')) {
            this._renderer.setAttribute(svg, 'fill', 'currentColor');
        }
    };
    /**
     * @param {?} opt
     * @return {?}
     */
    NzIconService.prototype.fetchFromIconfont = /**
     * @param {?} opt
     * @return {?}
     */
    function (opt) {
        var scriptUrl = opt.scriptUrl;
        if (this._document && !this.iconfontCache.has(scriptUrl)) {
            /** @type {?} */
            var script = this._renderer.createElement('script');
            this._renderer.setAttribute(script, 'src', scriptUrl);
            this._renderer.setAttribute(script, 'data-namespace', scriptUrl.replace(/^(https?|http):/g, ''));
            this._renderer.appendChild(this._document.body, script);
            this.iconfontCache.add(scriptUrl);
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    NzIconService.prototype.createIconfontIcon = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this._createSVGElementFromString("<svg><use xlink:href=\"" + type + "\"></svg>");
    };
    /**
     * @private
     * @return {?}
     */
    NzIconService.prototype.onConfigChange = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzConfigService.getConfigChangeEventForComponent('icon').subscribe((/**
         * @return {?}
         */
        function () {
            _this.configDefaultTwotoneColor();
            _this.configDefaultTheme();
            _this.configUpdated$.next();
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzIconService.prototype.configDefaultTheme = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var iconConfig = this.getConfig();
        this.defaultTheme = iconConfig.nzTheme || 'outline';
    };
    /**
     * @private
     * @return {?}
     */
    NzIconService.prototype.configDefaultTwotoneColor = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var iconConfig = this.getConfig();
        /** @type {?} */
        var defaultTwotoneColor = iconConfig.nzTwotoneColor || this.legacyDefaultTwotoneColor;
        /** @type {?} */
        var primaryColor = DEFAULT_TWOTONE_COLOR;
        if (defaultTwotoneColor) {
            if (defaultTwotoneColor.startsWith('#')) {
                primaryColor = defaultTwotoneColor;
            }
            else {
                warn('Twotone color must be a hex color!');
            }
        }
        this.twoToneColor = { primaryColor: primaryColor };
    };
    /**
     * @private
     * @return {?}
     */
    NzIconService.prototype.getConfig = /**
     * @private
     * @return {?}
     */
    function () {
        return this.nzConfigService.getConfigForComponent('icon') || {};
    };
    NzIconService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzIconService.ctorParameters = function () { return [
        { type: RendererFactory2 },
        { type: DomSanitizer },
        { type: NzConfigService },
        { type: HttpBackend, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NZ_ICONS,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [NZ_ICON_DEFAULT_TWOTONE_COLOR,] }] }
    ]; };
    /** @nocollapse */ NzIconService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzIconService_Factory() { return new NzIconService(i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i1.DomSanitizer), i0.ɵɵinject(i2.NzConfigService), i0.ɵɵinject(i3.HttpBackend, 8), i0.ɵɵinject(i4.DOCUMENT, 8), i0.ɵɵinject(NZ_ICONS, 8), i0.ɵɵinject(NZ_ICON_DEFAULT_TWOTONE_COLOR, 8)); }, token: NzIconService, providedIn: "root" });
    return NzIconService;
}(IconService));
export { NzIconService };
if (false) {
    /** @type {?} */
    NzIconService.prototype.configUpdated$;
    /**
     * @type {?}
     * @private
     */
    NzIconService.prototype.iconfontCache;
    /**
     * @type {?}
     * @protected
     */
    NzIconService.prototype.nzConfigService;
    /**
     * @deprecated
     * \@inner
     * @type {?}
     * @private
     */
    NzIconService.prototype.legacyDefaultTwotoneColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pY29uLyIsInNvdXJjZXMiOlsibnotaWNvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBa0IsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEUsT0FBTyxFQUNMLFdBQVcsRUFDWCxlQUFlLEVBQ2YsYUFBYSxFQUNiLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsY0FBYyxFQUNkLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQixXQUFXLEVBQ1gsV0FBVyxFQUNYLGVBQWUsRUFDZixxQkFBcUIsRUFDckIsd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixRQUFRLEVBQ1IsV0FBVyxFQUNYLFVBQVUsRUFDVixjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLFdBQVcsRUFDWCxjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLHFCQUFxQixFQUNyQixZQUFZLEVBQ1osYUFBYSxFQUNiLFFBQVEsRUFDUixhQUFhLEVBQ2IsU0FBUyxFQUNWLE1BQU0saUNBQWlDLENBQUM7QUFDekMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQWMsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEYs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U0FBQyxRQUFROzRDQUMzQixRQUFRLFlBQUksTUFBTSxTQUFDLFFBQVE7NkNBSzNCLFFBQVEsWUFBSSxNQUFNLFNBQUMsNkJBQTZCOzs7d0JBdEtyRDtDQXlOQyxBQWpIRCxDQUdtQyxXQUFXLEdBOEc3QztTQTlHWSxhQUFhOzs7SUFDeEIsdUNBQXFDOzs7OztJQUVyQyxzQ0FBMEM7Ozs7O0lBK0N4Qyx3Q0FBMEM7Ozs7Ozs7SUFTMUMsa0RBQTZGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBCYWNrZW5kIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSWNvbkRlZmluaXRpb24sIEljb25TZXJ2aWNlIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhcic7XG5pbXBvcnQge1xuICBCYXJzT3V0bGluZSxcbiAgQ2FsZW5kYXJPdXRsaW5lLFxuICBDYXJldERvd25GaWxsLFxuICBDYXJldERvd25PdXRsaW5lLFxuICBDYXJldFVwRmlsbCxcbiAgQ2FyZXRVcE91dGxpbmUsXG4gIENoZWNrQ2lyY2xlRmlsbCxcbiAgQ2hlY2tDaXJjbGVPdXRsaW5lLFxuICBDaGVja091dGxpbmUsXG4gIENsb2NrQ2lyY2xlT3V0bGluZSxcbiAgQ2xvc2VDaXJjbGVGaWxsLFxuICBDbG9zZUNpcmNsZU91dGxpbmUsXG4gIENsb3NlT3V0bGluZSxcbiAgQ29weU91dGxpbmUsXG4gIERvdWJsZUxlZnRPdXRsaW5lLFxuICBEb3VibGVSaWdodE91dGxpbmUsXG4gIERvd25PdXRsaW5lLFxuICBFZGl0T3V0bGluZSxcbiAgRWxsaXBzaXNPdXRsaW5lLFxuICBFeGNsYW1hdGlvbkNpcmNsZUZpbGwsXG4gIEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZSxcbiAgRXllT3V0bGluZSxcbiAgRmlsZUZpbGwsXG4gIEZpbGVPdXRsaW5lLFxuICBGaWx0ZXJGaWxsLFxuICBJbmZvQ2lyY2xlRmlsbCxcbiAgSW5mb0NpcmNsZU91dGxpbmUsXG4gIExlZnRPdXRsaW5lLFxuICBMb2FkaW5nT3V0bGluZSxcbiAgUGFwZXJDbGlwT3V0bGluZSxcbiAgUXVlc3Rpb25DaXJjbGVPdXRsaW5lLFxuICBSaWdodE91dGxpbmUsXG4gIFNlYXJjaE91dGxpbmUsXG4gIFN0YXJGaWxsLFxuICBVcGxvYWRPdXRsaW5lLFxuICBVcE91dGxpbmVcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhci9pY29ucyc7XG5pbXBvcnQgeyB3YXJuLCB3YXJuRGVwcmVjYXRpb24sIEljb25Db25maWcsIE56Q29uZmlnU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnpJY29uZm9udE9wdGlvbiB7XG4gIHNjcmlwdFVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTlpfSUNPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ256X2ljb25zJyk7XG5leHBvcnQgY29uc3QgTlpfSUNPTl9ERUZBVUxUX1RXT1RPTkVfQ09MT1IgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ256X2ljb25fZGVmYXVsdF90d290b25lX2NvbG9yJyk7XG5leHBvcnQgY29uc3QgREVGQVVMVF9UV09UT05FX0NPTE9SID0gJyMxODkwZmYnO1xuZXhwb3J0IGNvbnN0IE5aX0lDT05TX1VTRURfQllfWk9SUk86IEljb25EZWZpbml0aW9uW10gPSBbXG4gIEJhcnNPdXRsaW5lLFxuICBDYWxlbmRhck91dGxpbmUsXG4gIENhcmV0VXBGaWxsLFxuICBDYXJldFVwT3V0bGluZSxcbiAgQ2FyZXREb3duRmlsbCxcbiAgQ2FyZXREb3duT3V0bGluZSxcbiAgQ2hlY2tDaXJjbGVGaWxsLFxuICBDaGVja0NpcmNsZU91dGxpbmUsXG4gIENoZWNrT3V0bGluZSxcbiAgQ2xvY2tDaXJjbGVPdXRsaW5lLFxuICBDbG9zZUNpcmNsZU91dGxpbmUsXG4gIENsb3NlQ2lyY2xlRmlsbCxcbiAgQ2xvc2VPdXRsaW5lLFxuICBDb3B5T3V0bGluZSxcbiAgRG91YmxlTGVmdE91dGxpbmUsXG4gIERvdWJsZVJpZ2h0T3V0bGluZSxcbiAgRG93bk91dGxpbmUsXG4gIEVkaXRPdXRsaW5lLFxuICBFbGxpcHNpc091dGxpbmUsXG4gIEV4Y2xhbWF0aW9uQ2lyY2xlRmlsbCxcbiAgRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lLFxuICBFeWVPdXRsaW5lLFxuICBGaWxlRmlsbCxcbiAgRmlsZU91dGxpbmUsXG4gIEZpbHRlckZpbGwsXG4gIEluZm9DaXJjbGVGaWxsLFxuICBJbmZvQ2lyY2xlT3V0bGluZSxcbiAgTGVmdE91dGxpbmUsXG4gIExvYWRpbmdPdXRsaW5lLFxuICBQYXBlckNsaXBPdXRsaW5lLFxuICBRdWVzdGlvbkNpcmNsZU91dGxpbmUsXG4gIFJpZ2h0T3V0bGluZSxcbiAgU3RhckZpbGwsXG4gIFNlYXJjaE91dGxpbmUsXG4gIFN0YXJGaWxsLFxuICBVcGxvYWRPdXRsaW5lLFxuICBVcE91dGxpbmVcbl07XG5cbi8qKlxuICogSXQgc2hvdWxkIGJlIGEgZ2xvYmFsIHNpbmdsZXRvbiwgb3RoZXJ3aXNlIHJlZ2lzdGVyZWQgaWNvbnMgY291bGQgbm90IGJlIGZvdW5kLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOekljb25TZXJ2aWNlIGV4dGVuZHMgSWNvblNlcnZpY2Uge1xuICBjb25maWdVcGRhdGVkJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgcHJpdmF0ZSBpY29uZm9udENhY2hlID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgd2FybkFQSSh0eXBlOiAnb2xkJyB8ICdjcm9zcycgfCAndmVydGljYWwnKTogdm9pZCB7XG4gICAgaWYgKHR5cGUgPT09ICdvbGQnKSB7XG4gICAgICB3YXJuRGVwcmVjYXRpb24oXG4gICAgICAgIGAnPGkgY2xhc3M9XCJhbnRpY29uXCI+PC9pPicgd291bGQgYmUgZGVwcmVjYXRlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnPGkgbnotaWNvbiBuelR5cGU9XCJcIj48L2k+JyBBUEkuIFBsZWFzZSByZWZlciBodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9pY29uL2VuLmBcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnY3Jvc3MnKSB7XG4gICAgICB3YXJuRGVwcmVjYXRpb24oYCdjcm9zcycgaWNvbiBpcyByZXBsYWNlZCBieSAnY2xvc2UnIGljb24uIFRoaXMgYXV0byBjb3JyZWN0aW9uIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuYCk7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICB3YXJuRGVwcmVjYXRpb24oYCd2ZXJ0aWNsZScgaXMgbWlzc3BlbGxlZC4gUGxlYXNlIHVzZSAndmVydGljYWwnLiBUaGlzIG1pc3NwZWxsIHdvdWxkIGJlIGZpeGVkIGluIDkuMC4wLmApO1xuICAgIH1cbiAgfVxuXG4gIG5vcm1hbGl6ZVN2Z0VsZW1lbnQoc3ZnOiBTVkdFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKCFzdmcuZ2V0QXR0cmlidXRlKCd2aWV3Qm94JykpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICd2aWV3Qm94JywgJzAgMCAxMDI0IDEwMjQnKTtcbiAgICB9XG4gICAgaWYgKCFzdmcuZ2V0QXR0cmlidXRlKCd3aWR0aCcpIHx8ICFzdmcuZ2V0QXR0cmlidXRlKCdoZWlnaHQnKSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ3dpZHRoJywgJzFlbScpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ2hlaWdodCcsICcxZW0nKTtcbiAgICB9XG4gICAgaWYgKCFzdmcuZ2V0QXR0cmlidXRlKCdmaWxsJykpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdmaWxsJywgJ2N1cnJlbnRDb2xvcicpO1xuICAgIH1cbiAgfVxuXG4gIGZldGNoRnJvbUljb25mb250KG9wdDogTnpJY29uZm9udE9wdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IHsgc2NyaXB0VXJsIH0gPSBvcHQ7XG4gICAgaWYgKHRoaXMuX2RvY3VtZW50ICYmICF0aGlzLmljb25mb250Q2FjaGUuaGFzKHNjcmlwdFVybCkpIHtcbiAgICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHNjcmlwdCwgJ3NyYycsIHNjcmlwdFVybCk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc2NyaXB0LCAnZGF0YS1uYW1lc3BhY2UnLCBzY3JpcHRVcmwucmVwbGFjZSgvXihodHRwcz98aHR0cCk6L2csICcnKSk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9kb2N1bWVudC5ib2R5LCBzY3JpcHQpO1xuICAgICAgdGhpcy5pY29uZm9udENhY2hlLmFkZChzY3JpcHRVcmwpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUljb25mb250SWNvbih0eXBlOiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlU1ZHRWxlbWVudEZyb21TdHJpbmcoYDxzdmc+PHVzZSB4bGluazpocmVmPVwiJHt0eXBlfVwiPjwvc3ZnPmApO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByb3RlY3RlZCBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBoYW5kbGVyOiBIdHRwQmFja2VuZCxcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgX2RvY3VtZW50OiBhbnksXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9JQ09OUykgaWNvbnM/OiBJY29uRGVmaW5pdGlvbltdLFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9JQ09OX0RFRkFVTFRfVFdPVE9ORV9DT0xPUikgcHJpdmF0ZSBsZWdhY3lEZWZhdWx0VHdvdG9uZUNvbG9yPzogc3RyaW5nXG4gICkge1xuICAgIHN1cGVyKHJlbmRlcmVyRmFjdG9yeSwgaGFuZGxlciwgX2RvY3VtZW50LCBzYW5pdGl6ZXIpO1xuXG4gICAgdGhpcy5vbkNvbmZpZ0NoYW5nZSgpO1xuXG4gICAgdGhpcy5hZGRJY29uKC4uLk5aX0lDT05TX1VTRURfQllfWk9SUk8sIC4uLihpY29ucyB8fCBbXSkpO1xuXG4gICAgaWYgKGxlZ2FjeURlZmF1bHRUd290b25lQ29sb3IpIHtcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcbiAgICAgICAgYCdOWl9JQ09OX0RFRkFVTFRfVFdPVE9ORV9DT0xPUicgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICdOWl9DT05GSUcnIGluc3RlYWQhYFxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5jb25maWdEZWZhdWx0VHdvdG9uZUNvbG9yKCk7XG5cbiAgICB0aGlzLmNvbmZpZ0RlZmF1bHRUaGVtZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkNvbmZpZ0NoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudCgnaWNvbicpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNvbmZpZ0RlZmF1bHRUd290b25lQ29sb3IoKTtcbiAgICAgIHRoaXMuY29uZmlnRGVmYXVsdFRoZW1lKCk7XG4gICAgICB0aGlzLmNvbmZpZ1VwZGF0ZWQkLm5leHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY29uZmlnRGVmYXVsdFRoZW1lKCk6IHZvaWQge1xuICAgIGNvbnN0IGljb25Db25maWcgPSB0aGlzLmdldENvbmZpZygpO1xuICAgIHRoaXMuZGVmYXVsdFRoZW1lID0gaWNvbkNvbmZpZy5uelRoZW1lIHx8ICdvdXRsaW5lJztcbiAgfVxuXG4gIHByaXZhdGUgY29uZmlnRGVmYXVsdFR3b3RvbmVDb2xvcigpOiB2b2lkIHtcbiAgICBjb25zdCBpY29uQ29uZmlnID0gdGhpcy5nZXRDb25maWcoKTtcbiAgICBjb25zdCBkZWZhdWx0VHdvdG9uZUNvbG9yID0gaWNvbkNvbmZpZy5uelR3b3RvbmVDb2xvciB8fCB0aGlzLmxlZ2FjeURlZmF1bHRUd290b25lQ29sb3I7XG5cbiAgICBsZXQgcHJpbWFyeUNvbG9yID0gREVGQVVMVF9UV09UT05FX0NPTE9SO1xuXG4gICAgaWYgKGRlZmF1bHRUd290b25lQ29sb3IpIHtcbiAgICAgIGlmIChkZWZhdWx0VHdvdG9uZUNvbG9yLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgICBwcmltYXJ5Q29sb3IgPSBkZWZhdWx0VHdvdG9uZUNvbG9yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybignVHdvdG9uZSBjb2xvciBtdXN0IGJlIGEgaGV4IGNvbG9yIScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudHdvVG9uZUNvbG9yID0geyBwcmltYXJ5Q29sb3IgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29uZmlnKCk6IEljb25Db25maWcge1xuICAgIHJldHVybiB0aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdGb3JDb21wb25lbnQoJ2ljb24nKSB8fCB7fTtcbiAgfVxufVxuIl19