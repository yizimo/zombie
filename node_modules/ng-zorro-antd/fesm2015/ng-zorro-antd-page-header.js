import { Location, CommonModule } from '@angular/common';
import { Directive, EventEmitter, TemplateRef, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, ContentChild, NgModule } from '@angular/core';
import { NzConfigService, WithConfig, NzAddOnModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { __decorate, __metadata } from 'tslib';

/**
 * @fileoverview added by tsickle
 * Generated from: nz-page-header-cells.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzPageHeaderTitleDirective {
}
NzPageHeaderTitleDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nz-page-header-title, [nz-page-header-title]',
                exportAs: 'nzPageHeaderTitle',
                host: {
                    class: 'ant-page-header-heading-title'
                }
            },] }
];
class NzPageHeaderSubtitleDirective {
}
NzPageHeaderSubtitleDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nz-page-header-subtitle, [nz-page-header-subtitle]',
                exportAs: 'nzPageHeaderSubtitle',
                host: {
                    class: 'ant-page-header-heading-sub-title'
                }
            },] }
];
class NzPageHeaderContentDirective {
}
NzPageHeaderContentDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nz-page-header-content, [nz-page-header-content]',
                exportAs: 'nzPageHeaderContent',
                host: {
                    class: 'ant-page-header-content'
                }
            },] }
];
class NzPageHeaderTagDirective {
}
NzPageHeaderTagDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nz-page-header-tags, [nz-page-header-tags]',
                exportAs: 'nzPageHeaderTags',
                host: {
                    class: 'ant-page-header-heading-tags'
                }
            },] }
];
class NzPageHeaderExtraDirective {
}
NzPageHeaderExtraDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nz-page-header-extra, [nz-page-header-extra]',
                exportAs: 'nzPageHeaderExtra',
                host: {
                    class: 'ant-page-header-heading-extra'
                }
            },] }
];
class NzPageHeaderFooterDirective {
}
NzPageHeaderFooterDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nz-page-header-footer, [nz-page-header-footer]',
                exportAs: 'nzPageHeaderFooter',
                host: {
                    class: 'ant-page-header-footer'
                }
            },] }
];
class NzPageHeaderBreadcrumbDirective {
}
NzPageHeaderBreadcrumbDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nz-breadcrumb[nz-page-header-breadcrumb]',
                exportAs: 'nzPageHeaderBreadcrumb'
            },] }
];
class NzPageHeaderAvatarDirective {
}
NzPageHeaderAvatarDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nz-avatar[nz-page-header-avatar]',
                exportAs: 'nzPageHeaderAvatar'
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: nz-page-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'pageHeader';
class NzPageHeaderComponent {
    /**
     * @param {?} location
     * @param {?} nzConfigService
     */
    constructor(location, nzConfigService) {
        this.location = location;
        this.nzConfigService = nzConfigService;
        this.isTemplateRefBackIcon = false;
        this.isStringBackIcon = false;
        this.nzBackIcon = null;
        this.nzBack = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('nzBackIcon')) {
            this.isTemplateRefBackIcon = changes.nzBackIcon.currentValue instanceof TemplateRef;
            this.isStringBackIcon = typeof changes.nzBackIcon.currentValue === 'string';
        }
    }
    /**
     * @return {?}
     */
    onBack() {
        if (this.nzBack.observers.length) {
            this.nzBack.emit();
        }
        else {
            this.location.back();
        }
    }
}
NzPageHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-page-header',
                exportAs: 'nzPageHeader',
                template: "<ng-content select=\"nz-breadcrumb[nz-page-header-breadcrumb]\"></ng-content>\n\n<div class=\"ant-page-header-heading\">\n  <!--back-->\n  <div *ngIf=\"nzBackIcon !== null\" (click)=\"onBack()\" class=\"ant-page-header-back\">\n    <div role=\"button\" tabindex=\"0\" class=\"ant-page-header-back-button\">\n      <i *ngIf=\"isStringBackIcon\" nz-icon [nzType]=\"nzBackIcon ? nzBackIcon : 'arrow-left'\" nzTheme=\"outline\"></i>\n      <ng-container *ngIf=\"isTemplateRefBackIcon\" [ngTemplateOutlet]=\"nzBackIcon\"></ng-container>\n    </div>\n  </div>\n  <!--avatar-->\n  <ng-content select=\"nz-avatar[nz-page-header-avatar]\"></ng-content>\n  <!--title-->\n  <span class=\"ant-page-header-heading-title\" *ngIf=\"nzTitle\">\n    <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n  </span>\n  <ng-content *ngIf=\"!nzTitle\" select=\"nz-page-header-title, [nz-page-header-title]\"></ng-content>\n  <!--subtitle-->\n  <span class=\"ant-page-header-heading-sub-title\" *ngIf=\"nzSubtitle\">\n    <ng-container *nzStringTemplateOutlet=\"nzSubtitle\">{{ nzSubtitle }}</ng-container>\n  </span>\n  <ng-content *ngIf=\"!nzSubtitle\" select=\"nz-page-header-subtitle, [nz-page-header-subtitle]\"></ng-content>\n  <ng-content select=\"nz-page-header-tags, [nz-page-header-tags]\"></ng-content>\n  <ng-content select=\"nz-page-header-extra, [nz-page-header-extra]\"></ng-content>\n</div>\n\n<ng-content select=\"nz-page-header-content, [nz-page-header-content]\"></ng-content>\n<ng-content select=\"nz-page-header-footer, [nz-page-header-footer]\"></ng-content>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'ant-page-header',
                    '[class.has-footer]': 'nzPageHeaderFooter',
                    '[class.ant-page-header-ghost]': 'nzGhost',
                    '[class.has-breadcrumb]': 'nzPageHeaderBreadcrumb'
                },
                styles: ["nz-page-header,nz-page-header-content,nz-page-header-footer{display:block}", `
      .ant-page-header-back-button {
        border: 0px;
        background: transparent;
        padding: 0px;
        line-height: inherit;
        display: inline-block;
      }
    `]
            }] }
];
/** @nocollapse */
NzPageHeaderComponent.ctorParameters = () => [
    { type: Location },
    { type: NzConfigService }
];
NzPageHeaderComponent.propDecorators = {
    nzBackIcon: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzSubtitle: [{ type: Input }],
    nzGhost: [{ type: Input }],
    nzBack: [{ type: Output }],
    nzPageHeaderFooter: [{ type: ContentChild, args: [NzPageHeaderFooterDirective, { static: false },] }],
    nzPageHeaderBreadcrumb: [{ type: ContentChild, args: [NzPageHeaderBreadcrumbDirective, { static: false },] }]
};
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
    __metadata("design:type", Boolean)
], NzPageHeaderComponent.prototype, "nzGhost", void 0);
if (false) {
    /** @type {?} */
    NzPageHeaderComponent.prototype.isTemplateRefBackIcon;
    /** @type {?} */
    NzPageHeaderComponent.prototype.isStringBackIcon;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzBackIcon;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzTitle;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzSubtitle;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzGhost;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzBack;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzPageHeaderFooter;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzPageHeaderBreadcrumb;
    /**
     * @type {?}
     * @private
     */
    NzPageHeaderComponent.prototype.location;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzConfigService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-page-header.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NzPageHeaderCells = [
    NzPageHeaderTitleDirective,
    NzPageHeaderSubtitleDirective,
    NzPageHeaderContentDirective,
    NzPageHeaderTagDirective,
    NzPageHeaderExtraDirective,
    NzPageHeaderFooterDirective,
    NzPageHeaderBreadcrumbDirective,
    NzPageHeaderAvatarDirective
];
class NzPageHeaderModule {
}
NzPageHeaderModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NzAddOnModule, NzIconModule],
                exports: [NzPageHeaderComponent, NzPageHeaderCells],
                declarations: [NzPageHeaderComponent, NzPageHeaderCells]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-page-header.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzPageHeaderAvatarDirective, NzPageHeaderBreadcrumbDirective, NzPageHeaderComponent, NzPageHeaderContentDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderModule, NzPageHeaderSubtitleDirective, NzPageHeaderTagDirective, NzPageHeaderTitleDirective };
//# sourceMappingURL=ng-zorro-antd-page-header.js.map
