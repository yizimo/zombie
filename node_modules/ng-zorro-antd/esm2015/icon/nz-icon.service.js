/**
 * @fileoverview added by tsickle
 * Generated from: nz-icon.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export const NZ_ICONS = new InjectionToken('nz_icons');
/** @type {?} */
export const NZ_ICON_DEFAULT_TWOTONE_COLOR = new InjectionToken('nz_icon_default_twotone_color');
/** @type {?} */
export const DEFAULT_TWOTONE_COLOR = '#1890ff';
/** @type {?} */
export const NZ_ICONS_USED_BY_ZORRO = [
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
export class NzIconService extends IconService {
    /**
     * @param {?} rendererFactory
     * @param {?} sanitizer
     * @param {?} nzConfigService
     * @param {?} handler
     * @param {?} _document
     * @param {?=} icons
     * @param {?=} legacyDefaultTwotoneColor
     */
    constructor(rendererFactory, sanitizer, nzConfigService, handler, 
    // tslint:disable-next-line:no-any
    _document, icons, legacyDefaultTwotoneColor) {
        super(rendererFactory, handler, _document, sanitizer);
        this.nzConfigService = nzConfigService;
        this.legacyDefaultTwotoneColor = legacyDefaultTwotoneColor;
        this.configUpdated$ = new Subject();
        this.iconfontCache = new Set();
        this.onConfigChange();
        this.addIcon(...NZ_ICONS_USED_BY_ZORRO, ...(icons || []));
        if (legacyDefaultTwotoneColor) {
            warnDeprecation(`'NZ_ICON_DEFAULT_TWOTONE_COLOR' is deprecated and will be removed in 9.0.0. Please use 'NZ_CONFIG' instead!`);
        }
        this.configDefaultTwotoneColor();
        this.configDefaultTheme();
    }
    /**
     * @param {?} type
     * @return {?}
     */
    warnAPI(type) {
        if (type === 'old') {
            warnDeprecation(`'<i class="anticon"></i>' would be deprecated in 9.0.0. Please use '<i nz-icon nzType=""></i>' API. Please refer https://ng.ant.design/components/icon/en.`);
        }
        if (type === 'cross') {
            warnDeprecation(`'cross' icon is replaced by 'close' icon. This auto correction would be removed in 9.0.0.`);
        }
        if (type === 'vertical') {
            warnDeprecation(`'verticle' is misspelled. Please use 'vertical'. This misspell would be fixed in 9.0.0.`);
        }
    }
    /**
     * @param {?} svg
     * @return {?}
     */
    normalizeSvgElement(svg) {
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
    }
    /**
     * @param {?} opt
     * @return {?}
     */
    fetchFromIconfont(opt) {
        const { scriptUrl } = opt;
        if (this._document && !this.iconfontCache.has(scriptUrl)) {
            /** @type {?} */
            const script = this._renderer.createElement('script');
            this._renderer.setAttribute(script, 'src', scriptUrl);
            this._renderer.setAttribute(script, 'data-namespace', scriptUrl.replace(/^(https?|http):/g, ''));
            this._renderer.appendChild(this._document.body, script);
            this.iconfontCache.add(scriptUrl);
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    createIconfontIcon(type) {
        return this._createSVGElementFromString(`<svg><use xlink:href="${type}"></svg>`);
    }
    /**
     * @private
     * @return {?}
     */
    onConfigChange() {
        this.nzConfigService.getConfigChangeEventForComponent('icon').subscribe((/**
         * @return {?}
         */
        () => {
            this.configDefaultTwotoneColor();
            this.configDefaultTheme();
            this.configUpdated$.next();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    configDefaultTheme() {
        /** @type {?} */
        const iconConfig = this.getConfig();
        this.defaultTheme = iconConfig.nzTheme || 'outline';
    }
    /**
     * @private
     * @return {?}
     */
    configDefaultTwotoneColor() {
        /** @type {?} */
        const iconConfig = this.getConfig();
        /** @type {?} */
        const defaultTwotoneColor = iconConfig.nzTwotoneColor || this.legacyDefaultTwotoneColor;
        /** @type {?} */
        let primaryColor = DEFAULT_TWOTONE_COLOR;
        if (defaultTwotoneColor) {
            if (defaultTwotoneColor.startsWith('#')) {
                primaryColor = defaultTwotoneColor;
            }
            else {
                warn('Twotone color must be a hex color!');
            }
        }
        this.twoToneColor = { primaryColor };
    }
    /**
     * @private
     * @return {?}
     */
    getConfig() {
        return this.nzConfigService.getConfigForComponent('icon') || {};
    }
}
NzIconService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzIconService.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: DomSanitizer },
    { type: NzConfigService },
    { type: HttpBackend, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NZ_ICONS,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [NZ_ICON_DEFAULT_TWOTONE_COLOR,] }] }
];
/** @nocollapse */ NzIconService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzIconService_Factory() { return new NzIconService(i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i1.DomSanitizer), i0.ɵɵinject(i2.NzConfigService), i0.ɵɵinject(i3.HttpBackend, 8), i0.ɵɵinject(i4.DOCUMENT, 8), i0.ɵɵinject(NZ_ICONS, 8), i0.ɵɵinject(NZ_ICON_DEFAULT_TWOTONE_COLOR, 8)); }, token: NzIconService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pY29uLyIsInNvdXJjZXMiOlsibnotaWNvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFrQixXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RSxPQUFPLEVBQ0wsV0FBVyxFQUNYLGVBQWUsRUFDZixhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLFdBQVcsRUFDWCxjQUFjLEVBQ2QsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsWUFBWSxFQUNaLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLFdBQVcsRUFDWCxXQUFXLEVBQ1gsZUFBZSxFQUNmLHFCQUFxQixFQUNyQix3QkFBd0IsRUFDeEIsVUFBVSxFQUNWLFFBQVEsRUFDUixXQUFXLEVBQ1gsVUFBVSxFQUNWLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsV0FBVyxFQUNYLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIscUJBQXFCLEVBQ3JCLFlBQVksRUFDWixhQUFhLEVBQ2IsUUFBUSxFQUNSLGFBQWEsRUFDYixTQUFTLEVBQ1YsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBYyxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7QUFFL0Isc0NBRUM7OztJQURDLHFDQUFrQjs7O0FBR3BCLE1BQU0sT0FBTyxRQUFRLEdBQUcsSUFBSSxjQUFjLENBQUMsVUFBVSxDQUFDOztBQUN0RCxNQUFNLE9BQU8sNkJBQTZCLEdBQUcsSUFBSSxjQUFjLENBQUMsK0JBQStCLENBQUM7O0FBQ2hHLE1BQU0sT0FBTyxxQkFBcUIsR0FBRyxTQUFTOztBQUM5QyxNQUFNLE9BQU8sc0JBQXNCLEdBQXFCO0lBQ3RELFdBQVc7SUFDWCxlQUFlO0lBQ2YsV0FBVztJQUNYLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixRQUFRO0lBQ1IsV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osUUFBUTtJQUNSLGFBQWE7SUFDYixRQUFRO0lBQ1IsYUFBYTtJQUNiLFNBQVM7Q0FDVjs7OztBQVFELE1BQU0sT0FBTyxhQUFjLFNBQVEsV0FBVzs7Ozs7Ozs7OztJQStDNUMsWUFDRSxlQUFpQyxFQUNqQyxTQUF1QixFQUNiLGVBQWdDLEVBQzlCLE9BQW9CO0lBQ2hDLGtDQUFrQztJQUNKLFNBQWMsRUFDZCxLQUF3QixFQUtLLHlCQUFrQztRQUU3RixLQUFLLENBQUMsZUFBZSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFYNUMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBU2lCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBUztRQTFEL0YsbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRTdCLGtCQUFhLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztRQTREeEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFMUQsSUFBSSx5QkFBeUIsRUFBRTtZQUM3QixlQUFlLENBQ2IsNkdBQTZHLENBQzlHLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBRWpDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBdEVELE9BQU8sQ0FBQyxJQUFrQztRQUN4QyxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUU7WUFDbEIsZUFBZSxDQUNiLDRKQUE0SixDQUM3SixDQUFDO1NBQ0g7UUFDRCxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDcEIsZUFBZSxDQUFDLDJGQUEyRixDQUFDLENBQUM7U0FDOUc7UUFDRCxJQUFJLElBQUksS0FBSyxVQUFVLEVBQUU7WUFDdkIsZUFBZSxDQUFDLHlGQUF5RixDQUFDLENBQUM7U0FDNUc7SUFDSCxDQUFDOzs7OztJQUVELG1CQUFtQixDQUFDLEdBQWU7UUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxlQUFlLENBQUMsQ0FBQztTQUM5RDtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM3RCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkQ7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxHQUFxQjtjQUMvQixFQUFFLFNBQVMsRUFBRSxHQUFHLEdBQUc7UUFDekIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUU7O2tCQUNsRCxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsSUFBWTtRQUM3QixPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyx5QkFBeUIsSUFBSSxVQUFVLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7OztJQWdDTyxjQUFjO1FBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsZ0NBQWdDLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQzNFLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLGtCQUFrQjs7Y0FDbEIsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVPLHlCQUF5Qjs7Y0FDekIsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7O2NBQzdCLG1CQUFtQixHQUFHLFVBQVUsQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLHlCQUF5Qjs7WUFFbkYsWUFBWSxHQUFHLHFCQUFxQjtRQUV4QyxJQUFJLG1CQUFtQixFQUFFO1lBQ3ZCLElBQUksbUJBQW1CLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QyxZQUFZLEdBQUcsbUJBQW1CLENBQUM7YUFDcEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLG9DQUFvQyxDQUFDLENBQUM7YUFDNUM7U0FDRjtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxZQUFZLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVPLFNBQVM7UUFDZixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xFLENBQUM7OztZQWhIRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFoR3NELGdCQUFnQjtZQUM5RCxZQUFZO1lBd0N1QixlQUFlO1lBMUNsRCxXQUFXLHVCQXFKZixRQUFROzRDQUVSLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTt3Q0FDM0IsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFRO3lDQUszQixRQUFRLFlBQUksTUFBTSxTQUFDLDZCQUE2Qjs7Ozs7SUExRG5ELHVDQUFxQzs7Ozs7SUFFckMsc0NBQTBDOzs7OztJQStDeEMsd0NBQTBDOzs7Ozs7O0lBUzFDLGtEQUE2RiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEljb25EZWZpbml0aW9uLCBJY29uU2VydmljZSB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXInO1xuaW1wb3J0IHtcbiAgQmFyc091dGxpbmUsXG4gIENhbGVuZGFyT3V0bGluZSxcbiAgQ2FyZXREb3duRmlsbCxcbiAgQ2FyZXREb3duT3V0bGluZSxcbiAgQ2FyZXRVcEZpbGwsXG4gIENhcmV0VXBPdXRsaW5lLFxuICBDaGVja0NpcmNsZUZpbGwsXG4gIENoZWNrQ2lyY2xlT3V0bGluZSxcbiAgQ2hlY2tPdXRsaW5lLFxuICBDbG9ja0NpcmNsZU91dGxpbmUsXG4gIENsb3NlQ2lyY2xlRmlsbCxcbiAgQ2xvc2VDaXJjbGVPdXRsaW5lLFxuICBDbG9zZU91dGxpbmUsXG4gIENvcHlPdXRsaW5lLFxuICBEb3VibGVMZWZ0T3V0bGluZSxcbiAgRG91YmxlUmlnaHRPdXRsaW5lLFxuICBEb3duT3V0bGluZSxcbiAgRWRpdE91dGxpbmUsXG4gIEVsbGlwc2lzT3V0bGluZSxcbiAgRXhjbGFtYXRpb25DaXJjbGVGaWxsLFxuICBFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmUsXG4gIEV5ZU91dGxpbmUsXG4gIEZpbGVGaWxsLFxuICBGaWxlT3V0bGluZSxcbiAgRmlsdGVyRmlsbCxcbiAgSW5mb0NpcmNsZUZpbGwsXG4gIEluZm9DaXJjbGVPdXRsaW5lLFxuICBMZWZ0T3V0bGluZSxcbiAgTG9hZGluZ091dGxpbmUsXG4gIFBhcGVyQ2xpcE91dGxpbmUsXG4gIFF1ZXN0aW9uQ2lyY2xlT3V0bGluZSxcbiAgUmlnaHRPdXRsaW5lLFxuICBTZWFyY2hPdXRsaW5lLFxuICBTdGFyRmlsbCxcbiAgVXBsb2FkT3V0bGluZSxcbiAgVXBPdXRsaW5lXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXIvaWNvbnMnO1xuaW1wb3J0IHsgd2Fybiwgd2FybkRlcHJlY2F0aW9uLCBJY29uQ29uZmlnLCBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE56SWNvbmZvbnRPcHRpb24ge1xuICBzY3JpcHRVcmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IE5aX0lDT05TID0gbmV3IEluamVjdGlvblRva2VuKCduel9pY29ucycpO1xuZXhwb3J0IGNvbnN0IE5aX0lDT05fREVGQVVMVF9UV09UT05FX0NPTE9SID0gbmV3IEluamVjdGlvblRva2VuKCduel9pY29uX2RlZmF1bHRfdHdvdG9uZV9jb2xvcicpO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfVFdPVE9ORV9DT0xPUiA9ICcjMTg5MGZmJztcbmV4cG9ydCBjb25zdCBOWl9JQ09OU19VU0VEX0JZX1pPUlJPOiBJY29uRGVmaW5pdGlvbltdID0gW1xuICBCYXJzT3V0bGluZSxcbiAgQ2FsZW5kYXJPdXRsaW5lLFxuICBDYXJldFVwRmlsbCxcbiAgQ2FyZXRVcE91dGxpbmUsXG4gIENhcmV0RG93bkZpbGwsXG4gIENhcmV0RG93bk91dGxpbmUsXG4gIENoZWNrQ2lyY2xlRmlsbCxcbiAgQ2hlY2tDaXJjbGVPdXRsaW5lLFxuICBDaGVja091dGxpbmUsXG4gIENsb2NrQ2lyY2xlT3V0bGluZSxcbiAgQ2xvc2VDaXJjbGVPdXRsaW5lLFxuICBDbG9zZUNpcmNsZUZpbGwsXG4gIENsb3NlT3V0bGluZSxcbiAgQ29weU91dGxpbmUsXG4gIERvdWJsZUxlZnRPdXRsaW5lLFxuICBEb3VibGVSaWdodE91dGxpbmUsXG4gIERvd25PdXRsaW5lLFxuICBFZGl0T3V0bGluZSxcbiAgRWxsaXBzaXNPdXRsaW5lLFxuICBFeGNsYW1hdGlvbkNpcmNsZUZpbGwsXG4gIEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZSxcbiAgRXllT3V0bGluZSxcbiAgRmlsZUZpbGwsXG4gIEZpbGVPdXRsaW5lLFxuICBGaWx0ZXJGaWxsLFxuICBJbmZvQ2lyY2xlRmlsbCxcbiAgSW5mb0NpcmNsZU91dGxpbmUsXG4gIExlZnRPdXRsaW5lLFxuICBMb2FkaW5nT3V0bGluZSxcbiAgUGFwZXJDbGlwT3V0bGluZSxcbiAgUXVlc3Rpb25DaXJjbGVPdXRsaW5lLFxuICBSaWdodE91dGxpbmUsXG4gIFN0YXJGaWxsLFxuICBTZWFyY2hPdXRsaW5lLFxuICBTdGFyRmlsbCxcbiAgVXBsb2FkT3V0bGluZSxcbiAgVXBPdXRsaW5lXG5dO1xuXG4vKipcbiAqIEl0IHNob3VsZCBiZSBhIGdsb2JhbCBzaW5nbGV0b24sIG90aGVyd2lzZSByZWdpc3RlcmVkIGljb25zIGNvdWxkIG5vdCBiZSBmb3VuZC5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTnpJY29uU2VydmljZSBleHRlbmRzIEljb25TZXJ2aWNlIHtcbiAgY29uZmlnVXBkYXRlZCQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHByaXZhdGUgaWNvbmZvbnRDYWNoZSA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gIHdhcm5BUEkodHlwZTogJ29sZCcgfCAnY3Jvc3MnIHwgJ3ZlcnRpY2FsJyk6IHZvaWQge1xuICAgIGlmICh0eXBlID09PSAnb2xkJykge1xuICAgICAgd2FybkRlcHJlY2F0aW9uKFxuICAgICAgICBgJzxpIGNsYXNzPVwiYW50aWNvblwiPjwvaT4nIHdvdWxkIGJlIGRlcHJlY2F0ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJzxpIG56LWljb24gbnpUeXBlPVwiXCI+PC9pPicgQVBJLiBQbGVhc2UgcmVmZXIgaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvaWNvbi9lbi5gXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2Nyb3NzJykge1xuICAgICAgd2FybkRlcHJlY2F0aW9uKGAnY3Jvc3MnIGljb24gaXMgcmVwbGFjZWQgYnkgJ2Nsb3NlJyBpY29uLiBUaGlzIGF1dG8gY29ycmVjdGlvbiB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLmApO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgd2FybkRlcHJlY2F0aW9uKGAndmVydGljbGUnIGlzIG1pc3NwZWxsZWQuIFBsZWFzZSB1c2UgJ3ZlcnRpY2FsJy4gVGhpcyBtaXNzcGVsbCB3b3VsZCBiZSBmaXhlZCBpbiA5LjAuMC5gKTtcbiAgICB9XG4gIH1cblxuICBub3JtYWxpemVTdmdFbGVtZW50KHN2ZzogU1ZHRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICghc3ZnLmdldEF0dHJpYnV0ZSgndmlld0JveCcpKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAndmlld0JveCcsICcwIDAgMTAyNCAxMDI0Jyk7XG4gICAgfVxuICAgIGlmICghc3ZnLmdldEF0dHJpYnV0ZSgnd2lkdGgnKSB8fCAhc3ZnLmdldEF0dHJpYnV0ZSgnaGVpZ2h0JykpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICd3aWR0aCcsICcxZW0nKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdoZWlnaHQnLCAnMWVtJyk7XG4gICAgfVxuICAgIGlmICghc3ZnLmdldEF0dHJpYnV0ZSgnZmlsbCcpKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnZmlsbCcsICdjdXJyZW50Q29sb3InKTtcbiAgICB9XG4gIH1cblxuICBmZXRjaEZyb21JY29uZm9udChvcHQ6IE56SWNvbmZvbnRPcHRpb24pOiB2b2lkIHtcbiAgICBjb25zdCB7IHNjcmlwdFVybCB9ID0gb3B0O1xuICAgIGlmICh0aGlzLl9kb2N1bWVudCAmJiAhdGhpcy5pY29uZm9udENhY2hlLmhhcyhzY3JpcHRVcmwpKSB7XG4gICAgICBjb25zdCBzY3JpcHQgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzY3JpcHQsICdzcmMnLCBzY3JpcHRVcmwpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHNjcmlwdCwgJ2RhdGEtbmFtZXNwYWNlJywgc2NyaXB0VXJsLnJlcGxhY2UoL14oaHR0cHM/fGh0dHApOi9nLCAnJykpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fZG9jdW1lbnQuYm9keSwgc2NyaXB0KTtcbiAgICAgIHRoaXMuaWNvbmZvbnRDYWNoZS5hZGQoc2NyaXB0VXJsKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVJY29uZm9udEljb24odHlwZTogc3RyaW5nKTogU1ZHRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVNWR0VsZW1lbnRGcm9tU3RyaW5nKGA8c3ZnPjx1c2UgeGxpbms6aHJlZj1cIiR7dHlwZX1cIj48L3N2Zz5gKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwcm90ZWN0ZWQgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgaGFuZGxlcjogSHR0cEJhY2tlbmQsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudDogYW55LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfSUNPTlMpIGljb25zPzogSWNvbkRlZmluaXRpb25bXSxcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfSUNPTl9ERUZBVUxUX1RXT1RPTkVfQ09MT1IpIHByaXZhdGUgbGVnYWN5RGVmYXVsdFR3b3RvbmVDb2xvcj86IHN0cmluZ1xuICApIHtcbiAgICBzdXBlcihyZW5kZXJlckZhY3RvcnksIGhhbmRsZXIsIF9kb2N1bWVudCwgc2FuaXRpemVyKTtcblxuICAgIHRoaXMub25Db25maWdDaGFuZ2UoKTtcblxuICAgIHRoaXMuYWRkSWNvbiguLi5OWl9JQ09OU19VU0VEX0JZX1pPUlJPLCAuLi4oaWNvbnMgfHwgW10pKTtcblxuICAgIGlmIChsZWdhY3lEZWZhdWx0VHdvdG9uZUNvbG9yKSB7XG4gICAgICB3YXJuRGVwcmVjYXRpb24oXG4gICAgICAgIGAnTlpfSUNPTl9ERUZBVUxUX1RXT1RPTkVfQ09MT1InIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnTlpfQ09ORklHJyBpbnN0ZWFkIWBcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMuY29uZmlnRGVmYXVsdFR3b3RvbmVDb2xvcigpO1xuXG4gICAgdGhpcy5jb25maWdEZWZhdWx0VGhlbWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgb25Db25maWdDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoJ2ljb24nKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jb25maWdEZWZhdWx0VHdvdG9uZUNvbG9yKCk7XG4gICAgICB0aGlzLmNvbmZpZ0RlZmF1bHRUaGVtZSgpO1xuICAgICAgdGhpcy5jb25maWdVcGRhdGVkJC5uZXh0KCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ0RlZmF1bHRUaGVtZSgpOiB2b2lkIHtcbiAgICBjb25zdCBpY29uQ29uZmlnID0gdGhpcy5nZXRDb25maWcoKTtcbiAgICB0aGlzLmRlZmF1bHRUaGVtZSA9IGljb25Db25maWcubnpUaGVtZSB8fCAnb3V0bGluZSc7XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ0RlZmF1bHRUd290b25lQ29sb3IoKTogdm9pZCB7XG4gICAgY29uc3QgaWNvbkNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKCk7XG4gICAgY29uc3QgZGVmYXVsdFR3b3RvbmVDb2xvciA9IGljb25Db25maWcubnpUd290b25lQ29sb3IgfHwgdGhpcy5sZWdhY3lEZWZhdWx0VHdvdG9uZUNvbG9yO1xuXG4gICAgbGV0IHByaW1hcnlDb2xvciA9IERFRkFVTFRfVFdPVE9ORV9DT0xPUjtcblxuICAgIGlmIChkZWZhdWx0VHdvdG9uZUNvbG9yKSB7XG4gICAgICBpZiAoZGVmYXVsdFR3b3RvbmVDb2xvci5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgICAgcHJpbWFyeUNvbG9yID0gZGVmYXVsdFR3b3RvbmVDb2xvcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oJ1R3b3RvbmUgY29sb3IgbXVzdCBiZSBhIGhleCBjb2xvciEnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnR3b1RvbmVDb2xvciA9IHsgcHJpbWFyeUNvbG9yIH07XG4gIH1cblxuICBwcml2YXRlIGdldENvbmZpZygpOiBJY29uQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KCdpY29uJykgfHwge307XG4gIH1cbn1cbiJdfQ==