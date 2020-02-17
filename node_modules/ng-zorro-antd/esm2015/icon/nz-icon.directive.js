/**
 * @fileoverview added by tsickle
 * Generated from: nz-icon.directive.ts
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
import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { IconDirective } from '@ant-design/icons-angular';
import { warnDeprecation, InputBoolean } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzIconService } from './nz-icon.service';
/** @type {?} */
const iconTypeRE = /^anticon\-\w/;
/** @type {?} */
const getIconTypeClass = (/**
 * @param {?} className
 * @return {?}
 */
(className) => {
    if (!className) {
        return undefined;
    }
    else {
        /** @type {?} */
        const classArr = className.split(/\s/);
        /** @type {?} */
        const index = classArr.findIndex((/**
         * @param {?} cls
         * @return {?}
         */
        cls => cls !== 'anticon' && cls !== 'anticon-spin' && !!cls.match(iconTypeRE)));
        return index === -1 ? undefined : { name: classArr[index], index };
    }
});
const ɵ0 = getIconTypeClass;
/** @type {?} */
const normalizeType = (/**
 * @param {?} rawType
 * @return {?}
 */
(rawType) => {
    /** @type {?} */
    const ret = { type: rawType, crossError: false, verticalError: false };
    ret.type = rawType ? rawType.replace('anticon-', '') : '';
    if (ret.type.includes('verticle')) {
        ret.type = 'up';
        ret.verticalError = true;
    }
    if (ret.type.startsWith('cross')) {
        ret.type = 'close';
        ret.crossError = true;
    }
    return ret;
});
const ɵ1 = normalizeType;
/**
 * This directive extends IconDirective to provide:
 *
 * - IconFont support
 * - spinning
 * - old API compatibility
 *
 * \@break-changes
 *
 * - old API compatibility, icon class names would not be supported.
 * - properties that not started with `nz`.
 */
export class NzIconDirective extends IconDirective {
    /**
     * @param {?} iconService
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} platform
     */
    constructor(iconService, elementRef, renderer, platform) {
        super(iconService, elementRef, renderer);
        this.iconService = iconService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.platform = platform;
        this.nzRotate = 0;
        /**
         * @deprecated 8.0.0 avoid exposing low layer API.
         */
        this.spin = false;
        this.el = this.elementRef.nativeElement;
        this.destroy$ = new Subject();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSpin(value) {
        this.spin = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzType(value) {
        this.type = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTheme(value) {
        this.theme = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTwotoneColor(value) {
        this.twoToneColor = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzIconfont(value) {
        this.iconfont = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        if (value && value.startsWith('anticon')) {
            /** @type {?} */
            const rawClass = getIconTypeClass(value);
            /** @type {?} */
            const type = rawClass ? normalizeType(rawClass.name).type : '';
            if (type && this.type !== type) {
                this._type = type;
            }
        }
        else {
            this._type = value;
        }
    }
    /**
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * Replacement of `changeIcon` for more modifications.
     * @private
     * @param {?=} oldAPI
     * @return {?}
     */
    changeIcon2(oldAPI = false) {
        if (!oldAPI) {
            this.setClassName();
        }
        this._changeIcon().then((/**
         * @param {?} svg
         * @return {?}
         */
        svg => {
            this.setSVGData(svg);
            if (!oldAPI && svg) {
                this.handleSpin(svg);
                this.handleRotate(svg);
            }
        }));
    }
    /**
     * @private
     * @param {?} className
     * @return {?}
     */
    classChangeHandler(className) {
        /** @type {?} */
        const ret = getIconTypeClass(className);
        if (ret) {
            const { type, crossError, verticalError } = normalizeType(ret.name);
            if (crossError) {
                this.iconService.warnAPI('cross');
            }
            if (verticalError) {
                this.iconService.warnAPI('vertical');
            }
            if (this.type !== type) {
                this._type = type;
                this.changeIcon2(true);
            }
        }
    }
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    handleSpin(svg) {
        if ((this.spin || this.type === 'loading') && !this.elementRef.nativeElement.classList.contains('anticon-spin')) {
            this.renderer.addClass(svg, 'anticon-spin');
        }
        else {
            this.renderer.removeClass(svg, 'anticon-spin');
        }
    }
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    handleRotate(svg) {
        if (this.nzRotate) {
            this.renderer.setAttribute(svg, 'style', `transform: rotate(${this.nzRotate}deg)`);
        }
        else {
            this.renderer.removeAttribute(svg, 'style');
        }
    }
    /**
     * @private
     * @return {?}
     */
    setClassName() {
        if (typeof this.type === 'string') {
            /** @type {?} */
            const iconClassNameArr = this.el.className.split(/\s/);
            /** @type {?} */
            const ret = getIconTypeClass(this.el.className);
            if (ret) {
                iconClassNameArr.splice(ret.index, 1, `anticon-${this.type}`);
                this.renderer.setAttribute(this.el, 'class', iconClassNameArr.join(' '));
            }
            else {
                this.renderer.addClass(this.el, `anticon-${this.type}`);
            }
        }
    }
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    setSVGData(svg) {
        if (typeof this.type === 'string' && svg) {
            this.renderer.setAttribute(svg, 'data-icon', this.type);
            this.renderer.setAttribute(svg, 'aria-hidden', 'true');
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { type, nzType, nzTwotoneColor, twoToneColor, spin, nzSpin, theme, nzTheme, nzRotate } = changes;
        if (type && !nzType) {
            warnDeprecation(`APIs for Icon without 'nz' prefix are deprecated and will be removed in 9.0.0! Please check icons with this type: '${type.currentValue}'.`);
        }
        if (type || nzType || nzTwotoneColor || twoToneColor || spin || nzSpin || theme || nzTheme) {
            this.changeIcon2();
        }
        else if (nzRotate) {
            this.handleRotate(this.el.firstChild);
        }
        else {
            this._setSVGElement(this.iconService.createIconfontIcon(`#${this.iconfont}`));
        }
        if (type && !nzType) {
            warnDeprecation(`APIs for Icon without 'nz' prefix are deprecated and will be removed in 9.0.0! Please check icons with this type: '${this.type}'.`);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // If `this.type` is not specified and `classList` contains `anticon`, it should be an icon using old API.
        if (!this.type && this.el.classList.contains('anticon')) {
            this.iconService.warnAPI('old');
            // Get `type` from `className`. If not, initial rendering would be missed.
            this.classChangeHandler(this.el.className);
            if (this.platform.isBrowser) {
                // Add `class` mutation observer.
                this.classNameObserver = new MutationObserver((/**
                 * @param {?} mutations
                 * @return {?}
                 */
                (mutations) => {
                    mutations
                        .filter((/**
                     * @param {?} mutation
                     * @return {?}
                     */
                    (mutation) => mutation.attributeName === 'class'))
                        .forEach((/**
                     * @param {?} mutation
                     * @return {?}
                     */
                    (mutation) => this.classChangeHandler(((/** @type {?} */ (mutation.target))).className)));
                }));
                this.classNameObserver.observe(this.el, { attributes: true });
            }
        }
        // If `classList` does not contain `anticon`, add it before other class names.
        if (!this.el.classList.contains('anticon')) {
            this.renderer.setAttribute(this.el, 'class', `anticon ${this.el.className}`.trim());
        }
        this.iconService.configUpdated$
            .asObservable()
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            if (this.type) {
                this.changeIcon2();
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.classNameObserver) {
            this.classNameObserver.disconnect();
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * If custom content is provided, try to normalize SVG elements.
     * @return {?}
     */
    ngAfterContentChecked() {
        /** @type {?} */
        const children = this.el.children;
        /** @type {?} */
        let length = children.length;
        if (!this.type && children.length) {
            while (length--) {
                /** @type {?} */
                const child = children[length];
                if (child.tagName.toLowerCase() === 'svg') {
                    this.iconService.normalizeSvgElement((/** @type {?} */ (child)));
                }
            }
        }
    }
}
NzIconDirective.decorators = [
    { type: Directive, args: [{
                selector: 'i.anticon, [nz-icon]',
                exportAs: 'nzIcon'
            },] }
];
/** @nocollapse */
NzIconDirective.ctorParameters = () => [
    { type: NzIconService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: Platform }
];
NzIconDirective.propDecorators = {
    nzSpin: [{ type: Input }],
    nzRotate: [{ type: Input }],
    nzType: [{ type: Input }],
    nzTheme: [{ type: Input }],
    nzTwotoneColor: [{ type: Input }],
    nzIconfont: [{ type: Input }],
    spin: [{ type: Input }],
    iconfont: [{ type: Input }],
    type: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], NzIconDirective.prototype, "nzSpin", null);
if (false) {
    /** @type {?} */
    NzIconDirective.prototype.nzRotate;
    /**
     * @deprecated 8.0.0 avoid exposing low layer API.
     * @type {?}
     */
    NzIconDirective.prototype.spin;
    /**
     * @deprecated 8.0.0 avoid exposing low layer API.
     * @type {?}
     */
    NzIconDirective.prototype.iconfont;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype.classNameObserver;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype._type;
    /** @type {?} */
    NzIconDirective.prototype.iconService;
    /** @type {?} */
    NzIconDirective.prototype.elementRef;
    /** @type {?} */
    NzIconDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype.platform;
}
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2ljb24vIiwic291cmNlcyI6WyJuei1pY29uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFJTCxTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBYSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztNQUU1QyxVQUFVLEdBQUcsY0FBYzs7TUFFM0IsZ0JBQWdCOzs7O0FBQUcsQ0FBQyxTQUFpQixFQUErQyxFQUFFO0lBQzFGLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDZCxPQUFPLFNBQVMsQ0FBQztLQUNsQjtTQUFNOztjQUNDLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzs7Y0FDaEMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxTQUFTOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxjQUFjLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUM7UUFDL0csT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUss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Q0gsQ0FBQzs7O1lBdE5GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsUUFBUTthQUNuQjs7OztZQTNDUSxhQUFhO1lBWnBCLFVBQVU7WUFLVixTQUFTO1lBVEYsUUFBUTs7O3FCQTZEZCxLQUFLO3VCQU1MLEtBQUs7cUJBRUwsS0FBSztzQkFJTCxLQUFLOzZCQUlMLEtBQUs7eUJBSUwsS0FBSzttQkFLTCxLQUFLO3VCQUdMLEtBQUs7bUJBRUwsS0FBSzs7QUE1Qk47SUFEQyxZQUFZLEVBQUU7Ozs2Q0FHZDs7O0lBRUQsbUNBQThCOzs7OztJQW1COUIsK0JBQXNCOzs7OztJQUd0QixtQ0FBMEI7Ozs7O0lBbUIxQiw0Q0FBNEM7Ozs7O0lBQzVDLDZCQUEyQzs7Ozs7SUFDM0MsbUNBQXVDOzs7OztJQUN2QyxnQ0FBc0I7O0lBeUVwQixzQ0FBaUM7O0lBQ2pDLHFDQUE2Qjs7SUFDN0IsbUNBQTBCOzs7OztJQUMxQixtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkRpcmVjdGl2ZSwgVGhlbWVUeXBlIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhcic7XG5pbXBvcnQgeyB3YXJuRGVwcmVjYXRpb24sIElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOekljb25TZXJ2aWNlIH0gZnJvbSAnLi9uei1pY29uLnNlcnZpY2UnO1xuXG5jb25zdCBpY29uVHlwZVJFID0gL15hbnRpY29uXFwtXFx3LztcblxuY29uc3QgZ2V0SWNvblR5cGVDbGFzcyA9IChjbGFzc05hbWU6IHN0cmluZyk6IHsgbmFtZTogc3RyaW5nOyBpbmRleDogbnVtYmVyIH0gfCB1bmRlZmluZWQgPT4ge1xuICBpZiAoIWNsYXNzTmFtZSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgY2xhc3NBcnIgPSBjbGFzc05hbWUuc3BsaXQoL1xccy8pO1xuICAgIGNvbnN0IGluZGV4ID0gY2xhc3NBcnIuZmluZEluZGV4KGNscyA9PiBjbHMgIT09ICdhbnRpY29uJyAmJiBjbHMgIT09ICdhbnRpY29uLXNwaW4nICYmICEhY2xzLm1hdGNoKGljb25UeXBlUkUpKTtcbiAgICByZXR1cm4gaW5kZXggPT09IC0xID8gdW5kZWZpbmVkIDogeyBuYW1lOiBjbGFzc0FycltpbmRleF0sIGluZGV4IH07XG4gIH1cbn07XG5cbmNvbnN0IG5vcm1hbGl6ZVR5cGUgPSAocmF3VHlwZTogc3RyaW5nKTogeyB0eXBlOiBzdHJpbmc7IGNyb3NzRXJyb3I6IGJvb2xlYW47IHZlcnRpY2FsRXJyb3I6IGJvb2xlYW4gfSA9PiB7XG4gIGNvbnN0IHJldCA9IHsgdHlwZTogcmF3VHlwZSwgY3Jvc3NFcnJvcjogZmFsc2UsIHZlcnRpY2FsRXJyb3I6IGZhbHNlIH07XG4gIHJldC50eXBlID0gcmF3VHlwZSA/IHJhd1R5cGUucmVwbGFjZSgnYW50aWNvbi0nLCAnJykgOiAnJztcbiAgaWYgKHJldC50eXBlLmluY2x1ZGVzKCd2ZXJ0aWNsZScpKSB7XG4gICAgcmV0LnR5cGUgPSAndXAnO1xuICAgIHJldC52ZXJ0aWNhbEVycm9yID0gdHJ1ZTtcbiAgfVxuICBpZiAocmV0LnR5cGUuc3RhcnRzV2l0aCgnY3Jvc3MnKSkge1xuICAgIHJldC50eXBlID0gJ2Nsb3NlJztcbiAgICByZXQuY3Jvc3NFcnJvciA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn07XG5cbi8qKlxuICogVGhpcyBkaXJlY3RpdmUgZXh0ZW5kcyBJY29uRGlyZWN0aXZlIHRvIHByb3ZpZGU6XG4gKlxuICogLSBJY29uRm9udCBzdXBwb3J0XG4gKiAtIHNwaW5uaW5nXG4gKiAtIG9sZCBBUEkgY29tcGF0aWJpbGl0eVxuICpcbiAqIEBicmVhay1jaGFuZ2VzXG4gKlxuICogLSBvbGQgQVBJIGNvbXBhdGliaWxpdHksIGljb24gY2xhc3MgbmFtZXMgd291bGQgbm90IGJlIHN1cHBvcnRlZC5cbiAqIC0gcHJvcGVydGllcyB0aGF0IG5vdCBzdGFydGVkIHdpdGggYG56YC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaS5hbnRpY29uLCBbbnotaWNvbl0nLFxuICBleHBvcnRBczogJ256SWNvbidcbn0pXG5leHBvcnQgY2xhc3MgTnpJY29uRGlyZWN0aXZlIGV4dGVuZHMgSWNvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgc2V0IG56U3Bpbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc3BpbiA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KCkgbnpSb3RhdGU6IG51bWJlciA9IDA7XG5cbiAgQElucHV0KCkgc2V0IG56VHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy50eXBlID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgbnpUaGVtZSh2YWx1ZTogVGhlbWVUeXBlKSB7XG4gICAgdGhpcy50aGVtZSA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IG56VHdvdG9uZUNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnR3b1RvbmVDb2xvciA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IG56SWNvbmZvbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuaWNvbmZvbnQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCA4LjAuMCBhdm9pZCBleHBvc2luZyBsb3cgbGF5ZXIgQVBJLiAqL1xuICBASW5wdXQoKSBzcGluID0gZmFsc2U7XG5cbiAgLyoqIEBkZXByZWNhdGVkIDguMC4wIGF2b2lkIGV4cG9zaW5nIGxvdyBsYXllciBBUEkuICovXG4gIEBJbnB1dCgpIGljb25mb250OiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5zdGFydHNXaXRoKCdhbnRpY29uJykpIHtcbiAgICAgIGNvbnN0IHJhd0NsYXNzID0gZ2V0SWNvblR5cGVDbGFzcyh2YWx1ZSk7XG4gICAgICBjb25zdCB0eXBlID0gcmF3Q2xhc3MgPyBub3JtYWxpemVUeXBlKHJhd0NsYXNzLm5hbWUpLnR5cGUgOiAnJztcbiAgICAgIGlmICh0eXBlICYmIHRoaXMudHlwZSAhPT0gdHlwZSkge1xuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBwcml2YXRlIGNsYXNzTmFtZU9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xuICBwcml2YXRlIGVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIF90eXBlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VtZW50IG9mIGBjaGFuZ2VJY29uYCBmb3IgbW9yZSBtb2RpZmljYXRpb25zLlxuICAgKiBAcGFyYW0gb2xkQVBJXG4gICAqL1xuICBwcml2YXRlIGNoYW5nZUljb24yKG9sZEFQSTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKCFvbGRBUEkpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3NOYW1lKCk7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZUljb24oKS50aGVuKHN2ZyA9PiB7XG4gICAgICB0aGlzLnNldFNWR0RhdGEoc3ZnKTtcbiAgICAgIGlmICghb2xkQVBJICYmIHN2Zykge1xuICAgICAgICB0aGlzLmhhbmRsZVNwaW4oc3ZnKTtcbiAgICAgICAgdGhpcy5oYW5kbGVSb3RhdGUoc3ZnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2xhc3NDaGFuZ2VIYW5kbGVyKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcmV0ID0gZ2V0SWNvblR5cGVDbGFzcyhjbGFzc05hbWUpO1xuICAgIGlmIChyZXQpIHtcbiAgICAgIGNvbnN0IHsgdHlwZSwgY3Jvc3NFcnJvciwgdmVydGljYWxFcnJvciB9ID0gbm9ybWFsaXplVHlwZShyZXQubmFtZSk7XG4gICAgICBpZiAoY3Jvc3NFcnJvcikge1xuICAgICAgICB0aGlzLmljb25TZXJ2aWNlLndhcm5BUEkoJ2Nyb3NzJyk7XG4gICAgICB9XG4gICAgICBpZiAodmVydGljYWxFcnJvcikge1xuICAgICAgICB0aGlzLmljb25TZXJ2aWNlLndhcm5BUEkoJ3ZlcnRpY2FsJyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50eXBlICE9PSB0eXBlKSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmNoYW5nZUljb24yKHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU3Bpbihzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoKHRoaXMuc3BpbiB8fCB0aGlzLnR5cGUgPT09ICdsb2FkaW5nJykgJiYgIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYW50aWNvbi1zcGluJykpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Moc3ZnLCAnYW50aWNvbi1zcGluJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3Moc3ZnLCAnYW50aWNvbi1zcGluJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVSb3RhdGUoc3ZnOiBTVkdFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpSb3RhdGUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ3N0eWxlJywgYHRyYW5zZm9ybTogcm90YXRlKCR7dGhpcy5uelJvdGF0ZX1kZWcpYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHN2ZywgJ3N0eWxlJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzc05hbWUoKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBpY29uQ2xhc3NOYW1lQXJyID0gdGhpcy5lbC5jbGFzc05hbWUuc3BsaXQoL1xccy8pO1xuICAgICAgY29uc3QgcmV0ID0gZ2V0SWNvblR5cGVDbGFzcyh0aGlzLmVsLmNsYXNzTmFtZSk7XG4gICAgICBpZiAocmV0KSB7XG4gICAgICAgIGljb25DbGFzc05hbWVBcnIuc3BsaWNlKHJldC5pbmRleCwgMSwgYGFudGljb24tJHt0aGlzLnR5cGV9YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwsICdjbGFzcycsIGljb25DbGFzc05hbWVBcnIuam9pbignICcpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgYGFudGljb24tJHt0aGlzLnR5cGV9YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRTVkdEYXRhKHN2ZzogU1ZHRWxlbWVudCB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHRoaXMudHlwZSA9PT0gJ3N0cmluZycgJiYgc3ZnKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdkYXRhLWljb24nLCB0aGlzLnR5cGUpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpY29uU2VydmljZTogTnpJY29uU2VydmljZSxcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHtcbiAgICBzdXBlcihpY29uU2VydmljZSwgZWxlbWVudFJlZiwgcmVuZGVyZXIpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgdHlwZSwgbnpUeXBlLCBuelR3b3RvbmVDb2xvciwgdHdvVG9uZUNvbG9yLCBzcGluLCBuelNwaW4sIHRoZW1lLCBuelRoZW1lLCBuelJvdGF0ZSB9ID0gY2hhbmdlcztcblxuICAgIGlmICh0eXBlICYmICFuelR5cGUpIHtcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcbiAgICAgICAgYEFQSXMgZm9yIEljb24gd2l0aG91dCAnbnonIHByZWZpeCBhcmUgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDkuMC4wISBQbGVhc2UgY2hlY2sgaWNvbnMgd2l0aCB0aGlzIHR5cGU6ICcke3R5cGUuY3VycmVudFZhbHVlfScuYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSB8fCBuelR5cGUgfHwgbnpUd290b25lQ29sb3IgfHwgdHdvVG9uZUNvbG9yIHx8IHNwaW4gfHwgbnpTcGluIHx8IHRoZW1lIHx8IG56VGhlbWUpIHtcbiAgICAgIHRoaXMuY2hhbmdlSWNvbjIoKTtcbiAgICB9IGVsc2UgaWYgKG56Um90YXRlKSB7XG4gICAgICB0aGlzLmhhbmRsZVJvdGF0ZSh0aGlzLmVsLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZXRTVkdFbGVtZW50KHRoaXMuaWNvblNlcnZpY2UuY3JlYXRlSWNvbmZvbnRJY29uKGAjJHt0aGlzLmljb25mb250fWApKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSAmJiAhbnpUeXBlKSB7XG4gICAgICB3YXJuRGVwcmVjYXRpb24oXG4gICAgICAgIGBBUElzIGZvciBJY29uIHdpdGhvdXQgJ256JyBwcmVmaXggYXJlIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA5LjAuMCEgUGxlYXNlIGNoZWNrIGljb25zIHdpdGggdGhpcyB0eXBlOiAnJHt0aGlzLnR5cGV9Jy5gXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIElmIGB0aGlzLnR5cGVgIGlzIG5vdCBzcGVjaWZpZWQgYW5kIGBjbGFzc0xpc3RgIGNvbnRhaW5zIGBhbnRpY29uYCwgaXQgc2hvdWxkIGJlIGFuIGljb24gdXNpbmcgb2xkIEFQSS5cbiAgICBpZiAoIXRoaXMudHlwZSAmJiB0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYW50aWNvbicpKSB7XG4gICAgICB0aGlzLmljb25TZXJ2aWNlLndhcm5BUEkoJ29sZCcpO1xuICAgICAgLy8gR2V0IGB0eXBlYCBmcm9tIGBjbGFzc05hbWVgLiBJZiBub3QsIGluaXRpYWwgcmVuZGVyaW5nIHdvdWxkIGJlIG1pc3NlZC5cbiAgICAgIHRoaXMuY2xhc3NDaGFuZ2VIYW5kbGVyKHRoaXMuZWwuY2xhc3NOYW1lKTtcbiAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgICAvLyBBZGQgYGNsYXNzYCBtdXRhdGlvbiBvYnNlcnZlci5cbiAgICAgICAgdGhpcy5jbGFzc05hbWVPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnM6IE11dGF0aW9uUmVjb3JkW10pID0+IHtcbiAgICAgICAgICBtdXRhdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIoKG11dGF0aW9uOiBNdXRhdGlvblJlY29yZCkgPT4gbXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2NsYXNzJylcbiAgICAgICAgICAgIC5mb3JFYWNoKChtdXRhdGlvbjogTXV0YXRpb25SZWNvcmQpID0+IHRoaXMuY2xhc3NDaGFuZ2VIYW5kbGVyKChtdXRhdGlvbi50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTmFtZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbGFzc05hbWVPYnNlcnZlci5vYnNlcnZlKHRoaXMuZWwsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gSWYgYGNsYXNzTGlzdGAgZG9lcyBub3QgY29udGFpbiBgYW50aWNvbmAsIGFkZCBpdCBiZWZvcmUgb3RoZXIgY2xhc3MgbmFtZXMuXG4gICAgaWYgKCF0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYW50aWNvbicpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLCAnY2xhc3MnLCBgYW50aWNvbiAke3RoaXMuZWwuY2xhc3NOYW1lfWAudHJpbSgpKTtcbiAgICB9XG5cbiAgICB0aGlzLmljb25TZXJ2aWNlLmNvbmZpZ1VwZGF0ZWQkXG4gICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy50eXBlKSB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VJY29uMigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYXNzTmFtZU9ic2VydmVyKSB7XG4gICAgICB0aGlzLmNsYXNzTmFtZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogSWYgY3VzdG9tIGNvbnRlbnQgaXMgcHJvdmlkZWQsIHRyeSB0byBub3JtYWxpemUgU1ZHIGVsZW1lbnRzLlxuICAgKi9cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5lbC5jaGlsZHJlbjtcbiAgICBsZXQgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGlmICghdGhpcy50eXBlICYmIGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5bbGVuZ3RoXTtcbiAgICAgICAgaWYgKGNoaWxkLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2ZycpIHtcbiAgICAgICAgICB0aGlzLmljb25TZXJ2aWNlLm5vcm1hbGl6ZVN2Z0VsZW1lbnQoY2hpbGQgYXMgU1ZHRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==