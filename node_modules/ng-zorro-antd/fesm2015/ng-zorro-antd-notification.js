import { InjectionToken, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Optional, Inject, Input, NgModule, Injectable, Injector, ComponentFactoryResolver, ApplicationRef, ɵɵdefineInjectable, ɵɵinject, INJECTOR } from '@angular/core';
import { warnDeprecation, toCssPixel, NzConfigService, notificationMotion, NzSingletonService } from 'ng-zorro-antd/core';
import { NzMessageContainerComponent, NzMessageComponent, NzMessageBaseService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { OverlayModule, Overlay } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * Generated from: nz-notification-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated This interface would has been moved to `ng-zorro-antd/core`. Please migrate to that.
 * @record
 */
function NzNotificationConfigLegacy() { }
if (false) {
    /** @type {?|undefined} */
    NzNotificationConfigLegacy.prototype.nzTop;
    /** @type {?|undefined} */
    NzNotificationConfigLegacy.prototype.nzBottom;
    /** @type {?|undefined} */
    NzNotificationConfigLegacy.prototype.nzPlacement;
}
/** @type {?} */
const NZ_NOTIFICATION_DEFAULT_CONFIG = new InjectionToken('NZ_NOTIFICATION_DEFAULT_CONFIG');
/** @type {?} */
const NZ_NOTIFICATION_CONFIG = new InjectionToken('NZ_NOTIFICATION_CONFIG');
const ɵ0 = {
    nzTop: '24px',
    nzBottom: '24px',
    nzPlacement: 'topRight',
    nzDuration: 4500,
    nzMaxStack: 7,
    nzPauseOnHover: true,
    nzAnimate: true
};
/** @type {?} */
const NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER = {
    provide: NZ_NOTIFICATION_DEFAULT_CONFIG,
    useValue: ɵ0
};

/**
 * @fileoverview added by tsickle
 * Generated from: nz-notification-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'notification';
class NzNotificationContainerComponent extends NzMessageContainerComponent {
    /**
     * @param {?} cdr
     * @param {?} nzConfigService
     * @param {?} defaultConfig
     * @param {?} config
     */
    constructor(cdr, nzConfigService, defaultConfig, config) {
        super(cdr, nzConfigService, defaultConfig, config);
        /**
         * @override
         */
        this.messages = [];
        if (!!config) {
            warnDeprecation(`Injection token 'NZ_NOTIFICATION_CONFIG' is deprecated and will be removed in 9.0.0. Please use 'NzConfigService' instead.`);
        }
    }
    /**
     * @override
     * @param {?=} config
     * @return {?}
     */
    setConfig(config) {
        /** @type {?} */
        const newConfig = (this.config = Object.assign({}, this.config, config, this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME)));
        /** @type {?} */
        const placement = this.config.nzPlacement;
        this.top = placement === 'topLeft' || placement === 'topRight' ? toCssPixel(newConfig.nzTop) : null;
        this.bottom = placement === 'bottomLeft' || placement === 'bottomRight' ? toCssPixel(newConfig.nzBottom) : null;
        this.cdr.markForCheck();
    }
    /**
     * Create a new notification.
     * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`,
     * replace its content instead of create a new one.
     * @override
     * @param {?} notification
     * @return {?}
     */
    createMessage(notification) {
        notification.options = this._mergeMessageOptions(notification.options);
        notification.onClose = new Subject();
        /** @type {?} */
        const key = notification.options.nzKey;
        /** @type {?} */
        const notificationWithSameKey = this.messages.find((/**
         * @param {?} msg
         * @return {?}
         */
        msg => msg.options.nzKey === ((/** @type {?} */ (notification.options))).nzKey));
        if (key && notificationWithSameKey) {
            this.replaceNotification(notificationWithSameKey, notification);
        }
        else {
            if (this.messages.length >= this.config.nzMaxStack) {
                this.messages.splice(0, 1);
            }
            this.messages.push((/** @type {?} */ (notification)));
        }
        this.cdr.detectChanges();
    }
    /**
     * @override
     * @protected
     * @return {?}
     */
    subscribeConfigChange() {
        this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).subscribe((/**
         * @return {?}
         */
        () => this.setConfig()));
    }
    /**
     * @private
     * @param {?} old
     * @param {?} _new
     * @return {?}
     */
    replaceNotification(old, _new) {
        old.title = _new.title;
        old.content = _new.content;
        old.template = _new.template;
        old.type = _new.type;
    }
}
NzNotificationContainerComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-notification-container',
                exportAs: 'nzNotificationContainer',
                preserveWhitespaces: false,
                template: "<div\n  class=\"ant-notification ant-notification-{{config.nzPlacement}}\"\n  [style.top]=\"(config.nzPlacement === 'topLeft' || config.nzPlacement === 'topRight') ? top : null\"\n  [style.bottom]=\"(config.nzPlacement === 'bottomLeft' || config.nzPlacement === 'bottomRight') ? bottom : null\"\n  [style.right]=\"(config.nzPlacement === 'bottomRight' || config.nzPlacement === 'topRight') ? '0px' : null\"\n  [style.left]=\"(config.nzPlacement === 'topLeft' || config.nzPlacement === 'bottomLeft') ? '0px' : null\">\n  <nz-notification\n    *ngFor=\"let message of messages; let i = index\"\n    [nzMessage]=\"message\"\n    [nzIndex]=\"i\">\n  </nz-notification>\n</div>"
            }] }
];
/** @nocollapse */
NzNotificationContainerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzConfigService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_NOTIFICATION_DEFAULT_CONFIG,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_NOTIFICATION_CONFIG,] }] }
];
if (false) {
    /** @type {?} */
    NzNotificationContainerComponent.prototype.config;
    /** @type {?} */
    NzNotificationContainerComponent.prototype.bottom;
    /**
     * @override
     * @type {?}
     */
    NzNotificationContainerComponent.prototype.messages;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-notification.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzNotificationComponent extends NzMessageComponent {
    /**
     * @param {?} container
     * @param {?} cdr
     */
    constructor(container, cdr) {
        super(container, cdr);
        this.container = container;
        this.cdr = cdr;
    }
    /**
     * @return {?}
     */
    close() {
        this._destroy(true);
    }
    /**
     * @return {?}
     */
    get state() {
        if (this.nzMessage.state === 'enter') {
            if (this.container.config.nzPlacement === 'topLeft' || this.container.config.nzPlacement === 'bottomLeft') {
                return 'enterLeft';
            }
            else {
                return 'enterRight';
            }
        }
        else {
            return this.nzMessage.state;
        }
    }
}
NzNotificationComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-notification',
                exportAs: 'nzNotification',
                preserveWhitespaces: false,
                animations: [notificationMotion],
                template: "<div class=\"ant-notification-notice ant-notification-notice-closable\"\n  [ngStyle]=\"nzMessage.options?.nzStyle\"\n  [ngClass]=\"nzMessage.options?.nzClass\"\n  [@notificationMotion]=\"state\"\n  (mouseenter)=\"onEnter()\"\n  (mouseleave)=\"onLeave()\">\n  <div *ngIf=\"!nzMessage.template\" class=\"ant-notification-notice-content\">\n    <div class=\"ant-notification-notice-content\" [ngClass]=\"{ 'ant-notification-notice-with-icon': nzMessage.type !== 'blank' }\">\n      <div [class.ant-notification-notice-with-icon]=\"nzMessage.type !== 'blank'\">\n        <ng-container [ngSwitch]=\"nzMessage.type\">\n          <i *ngSwitchCase=\"'success'\" nz-icon nzType=\"check-circle\" class=\"ant-notification-notice-icon ant-notification-notice-icon-success\"></i>\n          <i *ngSwitchCase=\"'info'\" nz-icon nzType=\"info-circle\" class=\"ant-notification-notice-icon ant-notification-notice-icon-info\"></i>\n          <i *ngSwitchCase=\"'warning'\" nz-icon nzType=\"exclamation-circle\" class=\"ant-notification-notice-icon ant-notification-notice-icon-warning\"></i>\n          <i *ngSwitchCase=\"'error'\" nz-icon nzType=\"close-circle\" class=\"ant-notification-notice-icon ant-notification-notice-icon-error\"></i>\n        </ng-container>\n        <div class=\"ant-notification-notice-message\" [innerHTML]=\"nzMessage.title\"></div>\n        <div class=\"ant-notification-notice-description\" [innerHTML]=\"nzMessage.content\"></div>\n      </div>\n    </div>\n  </div>\n  <ng-template\n    [ngIf]=\"nzMessage.template\"\n    [ngTemplateOutlet]=\"nzMessage.template\"\n    [ngTemplateOutletContext]=\"{ $implicit: this, data: nzMessage.options?.nzData }\">\n  </ng-template>\n  <a tabindex=\"0\" class=\"ant-notification-notice-close\" (click)=\"close()\">\n    <span class=\"ant-notification-notice-close-x\">\n      <i nz-icon nzType=\"close\" class=\"ant-notification-close-icon\"></i>\n    </span>\n  </a>\n</div>\n"
            }] }
];
/** @nocollapse */
NzNotificationComponent.ctorParameters = () => [
    { type: NzNotificationContainerComponent },
    { type: ChangeDetectorRef }
];
NzNotificationComponent.propDecorators = {
    nzMessage: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzNotificationComponent.prototype.nzMessage;
    /**
     * @type {?}
     * @private
     */
    NzNotificationComponent.prototype.container;
    /**
     * @type {?}
     * @protected
     */
    NzNotificationComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-notification.service.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzNotificationServiceModule {
}
NzNotificationServiceModule.decorators = [
    { type: NgModule }
];

/**
 * @fileoverview added by tsickle
 * Generated from: nz-notification.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzNotificationModule {
}
NzNotificationModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, OverlayModule, NzIconModule, NzNotificationServiceModule],
                declarations: [NzNotificationComponent, NzNotificationContainerComponent],
                providers: [NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER],
                entryComponents: [NzNotificationContainerComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: nz-notification.definitions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @record
 */
function NzNotificationData() { }
if (false) {
    /** @type {?|undefined} */
    NzNotificationData.prototype.template;
    /** @type {?|undefined} */
    NzNotificationData.prototype.type;
    /** @type {?|undefined} */
    NzNotificationData.prototype.title;
}
/**
 * @record
 * @template T
 */
function NzNotificationDataOptions() { }
if (false) {
    /** @type {?|undefined} */
    NzNotificationDataOptions.prototype.nzKey;
    /** @type {?|undefined} */
    NzNotificationDataOptions.prototype.nzStyle;
    /** @type {?|undefined} */
    NzNotificationDataOptions.prototype.nzClass;
    /**
     * Anything user wants renderer into a template.
     * @type {?|undefined}
     */
    NzNotificationDataOptions.prototype.nzData;
}
/**
 * @record
 */
function NzNotificationDataFilled() { }
if (false) {
    /** @type {?} */
    NzNotificationDataFilled.prototype.messageId;
    /** @type {?} */
    NzNotificationDataFilled.prototype.createdAt;
    /** @type {?|undefined} */
    NzNotificationDataFilled.prototype.state;
    /** @type {?|undefined} */
    NzNotificationDataFilled.prototype.options;
    /** @type {?|undefined} */
    NzNotificationDataFilled.prototype.onClose;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-notification.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzNotificationService extends NzMessageBaseService {
    /**
     * @param {?} nzSingletonService
     * @param {?} overlay
     * @param {?} injector
     * @param {?} cfr
     * @param {?} appRef
     */
    constructor(nzSingletonService, overlay, injector, cfr, appRef) {
        super(nzSingletonService, overlay, NzNotificationContainerComponent, injector, cfr, appRef, 'notification-');
    }
    // Shortcut methods
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    success(title, content, options) {
        return (/** @type {?} */ (this.createMessage({ type: 'success', title, content }, options)));
    }
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    error(title, content, options) {
        return (/** @type {?} */ (this.createMessage({ type: 'error', title, content }, options)));
    }
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    info(title, content, options) {
        return (/** @type {?} */ (this.createMessage({ type: 'info', title, content }, options)));
    }
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    warning(title, content, options) {
        return (/** @type {?} */ (this.createMessage({ type: 'warning', title, content }, options)));
    }
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    blank(title, content, options) {
        return (/** @type {?} */ (this.createMessage({ type: 'blank', title, content }, options)));
    }
    /**
     * @param {?} type
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    create(type, title, content, options) {
        return (/** @type {?} */ (this.createMessage({ type, title, content }, options)));
    }
    // For content with template
    /**
     * @param {?} template
     * @param {?=} options
     * @return {?}
     */
    template(template, options) {
        return (/** @type {?} */ (this.createMessage({ template }, options)));
    }
}
NzNotificationService.decorators = [
    { type: Injectable, args: [{
                providedIn: NzNotificationServiceModule
            },] }
];
/** @nocollapse */
NzNotificationService.ctorParameters = () => [
    { type: NzSingletonService },
    { type: Overlay },
    { type: Injector },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef }
];
/** @nocollapse */ NzNotificationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NzNotificationService_Factory() { return new NzNotificationService(ɵɵinject(NzSingletonService), ɵɵinject(Overlay), ɵɵinject(INJECTOR), ɵɵinject(ComponentFactoryResolver), ɵɵinject(ApplicationRef)); }, token: NzNotificationService, providedIn: NzNotificationServiceModule });

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-notification.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NZ_NOTIFICATION_CONFIG, NZ_NOTIFICATION_DEFAULT_CONFIG, NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER, NzNotificationComponent, NzNotificationContainerComponent, NzNotificationModule, NzNotificationService, NzNotificationServiceModule };
//# sourceMappingURL=ng-zorro-antd-notification.js.map
