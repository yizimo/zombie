import { warnDeprecation, toCssPixel, NzConfigService, NzSingletonService, moveUpMotion, NzAddOnModule } from 'ng-zorro-antd/core';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { InjectionToken, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Optional, Inject, NgModule, Injectable, Injector, ComponentFactoryResolver, ApplicationRef, ɵɵdefineInjectable, ɵɵinject, INJECTOR, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * Generated from: nz-message-base.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let globalCounter = 0;
/**
 * @template ContainerClass, MessageData, MessageConfig
 */
class NzMessageBaseService {
    /**
     * @param {?} nzSingletonService
     * @param {?} overlay
     * @param {?} containerClass
     * @param {?} injector
     * @param {?} cfr
     * @param {?} appRef
     * @param {?=} name
     */
    constructor(nzSingletonService, overlay, containerClass, injector, cfr, appRef, name = '') {
        this.nzSingletonService = nzSingletonService;
        this.overlay = overlay;
        this.containerClass = containerClass;
        this.injector = injector;
        this.cfr = cfr;
        this.appRef = appRef;
        this.name = name;
        this._container = this.withContainer();
        this.nzSingletonService.registerSingletonWithKey(this.name, this._container);
    }
    /**
     * @param {?=} messageId
     * @return {?}
     */
    remove(messageId) {
        if (messageId) {
            this._container.removeMessage(messageId);
        }
        else {
            this._container.removeMessageAll();
        }
    }
    /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    createMessage(message, options) {
        /** @type {?} */
        const resultMessage = Object.assign({}, ((/** @type {?} */ (message))), {
            createdAt: new Date(),
            messageId: this._generateMessageId(),
            options
        });
        this._container.createMessage(resultMessage);
        return resultMessage;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    config(config) {
        warnDeprecation(`'config' of 'NzMessageService' and 'NzNotificationService' is deprecated and will be removed in 9.0.0. Please use 'set' of 'NzConfigService' instead.`);
        this._container.setConfig(config);
    }
    /**
     * @protected
     * @return {?}
     */
    _generateMessageId() {
        return `${this.name}-${globalCounter++}`;
    }
    // Manually creating container for overlay to avoid multi-checking error, see: https://github.com/NG-ZORRO/ng-zorro-antd/issues/391
    // NOTE: we never clean up the container component and it's overlay resources, if we should, we need to do it by our own codes.
    /**
     * @private
     * @return {?}
     */
    withContainer() {
        /** @type {?} */
        const containerInstance = this.nzSingletonService.getSingletonWithKey(this.name);
        if (containerInstance) {
            return (/** @type {?} */ (containerInstance));
        }
        /** @type {?} */
        const factory = this.cfr.resolveComponentFactory(this.containerClass);
        /** @type {?} */
        const componentRef = factory.create(this.injector);
        componentRef.changeDetectorRef.detectChanges(); // Immediately change detection to avoid multi-checking error
        this.appRef.attachView(componentRef.hostView); // Load view into app root
        // Load view into app root
        /** @type {?} */
        const overlayPane = this.overlay.create().overlayElement;
        overlayPane.style.zIndex = '1010'; // Patching: assign the same zIndex of ant-message to it's parent overlay panel, to the ant-message's zindex work.
        overlayPane.appendChild((/** @type {?} */ (((/** @type {?} */ (componentRef.hostView))).rootNodes[0])));
        return componentRef.instance;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    NzMessageBaseService.prototype._container;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.nzSingletonService;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.containerClass;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.cfr;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.appRef;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.name;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-message-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated This interface has been removed to `ng-zorro-antd/core`. Please migrate to that.
 * @record
 */
function NzMessageConfigLegacy() { }
if (false) {
    /** @type {?|undefined} */
    NzMessageConfigLegacy.prototype.nzAnimate;
    /** @type {?|undefined} */
    NzMessageConfigLegacy.prototype.nzDuration;
    /** @type {?|undefined} */
    NzMessageConfigLegacy.prototype.nzMaxStack;
    /** @type {?|undefined} */
    NzMessageConfigLegacy.prototype.nzPauseOnHover;
    /** @type {?|undefined} */
    NzMessageConfigLegacy.prototype.nzTop;
}
/** @type {?} */
const NZ_MESSAGE_DEFAULT_CONFIG = new InjectionToken('NZ_MESSAGE_DEFAULT_CONFIG');
/**
 * @deprecated 9.0.0 - Injection token 'NZ_MESSAGE_CONFIG' is deprecated and will be removed in 9.0.0. Please use 'NzConfigService' instead.
 * @type {?}
 */
const NZ_MESSAGE_CONFIG = new InjectionToken('NZ_MESSAGE_CONFIG');
const ɵ0 = {
    nzAnimate: true,
    nzDuration: 3000,
    nzMaxStack: 7,
    nzPauseOnHover: true,
    nzTop: 24
};
/** @type {?} */
const NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER = {
    provide: NZ_MESSAGE_DEFAULT_CONFIG,
    useValue: ɵ0
};

/**
 * @fileoverview added by tsickle
 * Generated from: nz-message-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'message';
class NzMessageContainerComponent {
    /**
     * @param {?} cdr
     * @param {?} nzConfigService
     * @param {?} defaultConfig
     * @param {?} config
     */
    constructor(cdr, nzConfigService, defaultConfig, config) {
        this.cdr = cdr;
        this.nzConfigService = nzConfigService;
        this.messages = [];
        if (!!config) {
            warnDeprecation(`Injection token 'NZ_MESSAGE_CONFIG' is deprecated and will be removed in 9.0.0. Please use 'NzConfigService' instead.`);
        }
        this.setConfig(Object.assign({}, defaultConfig, config));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscribeConfigChange();
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    setConfig(config) {
        this.config = this.mergeMessageConfig(config);
        this.top = toCssPixel(this.config.nzTop);
        this.cdr.markForCheck();
    }
    /**
     * Create a new message.
     * @param {?} message Parsed message configuration.
     * @return {?}
     */
    createMessage(message) {
        if (this.messages.length >= this.config.nzMaxStack) {
            this.messages.splice(0, 1);
        }
        message.options = this._mergeMessageOptions(message.options);
        message.onClose = new Subject();
        this.messages.push(message);
        this.cdr.detectChanges();
    }
    /**
     * Remove a message by `messageId`.
     * @param {?} messageId Id of the message to be removed.
     * @param {?=} userAction Whether this is closed by user interaction.
     * @return {?}
     */
    removeMessage(messageId, userAction = false) {
        this.messages.some((/**
         * @param {?} message
         * @param {?} index
         * @return {?}
         */
        (message, index) => {
            if (message.messageId === messageId) {
                this.messages.splice(index, 1);
                this.cdr.detectChanges();
                (/** @type {?} */ (message.onClose)).next(userAction);
                (/** @type {?} */ (message.onClose)).complete();
                return true;
            }
            return false;
        }));
    }
    /**
     * Remove all messages.
     * @return {?}
     */
    removeMessageAll() {
        this.messages = [];
        this.cdr.detectChanges();
    }
    /**
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
     * @protected
     * @param {?=} config
     * @return {?}
     */
    mergeMessageConfig(config) {
        return Object.assign({}, this.config, config, this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME));
    }
    /**
     * Merge default options and custom message options
     * @protected
     * @param {?=} options
     * @return {?}
     */
    _mergeMessageOptions(options) {
        /** @type {?} */
        const defaultOptions = {
            nzDuration: this.config.nzDuration,
            nzAnimate: this.config.nzAnimate,
            nzPauseOnHover: this.config.nzPauseOnHover
        };
        return Object.assign({}, defaultOptions, options);
    }
}
NzMessageContainerComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-message-container',
                exportAs: 'nzMessageContainer',
                preserveWhitespaces: false,
                template: "<div class=\"ant-message\" [style.top]=\"top\">\n  <nz-message *ngFor=\"let message of messages; let i = index\" [nzMessage]=\"message\" [nzIndex]=\"i\"></nz-message>\n</div>"
            }] }
];
/** @nocollapse */
NzMessageContainerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzConfigService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_MESSAGE_DEFAULT_CONFIG,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_MESSAGE_CONFIG,] }] }
];
if (false) {
    /** @type {?} */
    NzMessageContainerComponent.prototype.messages;
    /** @type {?} */
    NzMessageContainerComponent.prototype.config;
    /** @type {?} */
    NzMessageContainerComponent.prototype.top;
    /**
     * @type {?}
     * @protected
     */
    NzMessageContainerComponent.prototype.cdr;
    /**
     * @type {?}
     * @protected
     */
    NzMessageContainerComponent.prototype.nzConfigService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-message.service.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzMessageServiceModule {
}
NzMessageServiceModule.decorators = [
    { type: NgModule }
];

/**
 * @fileoverview added by tsickle
 * Generated from: nz-message.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzMessageService extends NzMessageBaseService {
    /**
     * @param {?} nzSingletonService
     * @param {?} overlay
     * @param {?} injector
     * @param {?} cfr
     * @param {?} appRef
     */
    constructor(nzSingletonService, overlay, injector, cfr, appRef) {
        super(nzSingletonService, overlay, NzMessageContainerComponent, injector, cfr, appRef, 'message');
    }
    // Shortcut methods
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    success(content, options) {
        return this.createMessage({ type: 'success', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    error(content, options) {
        return this.createMessage({ type: 'error', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    info(content, options) {
        return this.createMessage({ type: 'info', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    warning(content, options) {
        return this.createMessage({ type: 'warning', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    loading(content, options) {
        return this.createMessage({ type: 'loading', content }, options);
    }
    /**
     * @param {?} type
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    create(type, content, options) {
        return this.createMessage({ type, content }, options);
    }
}
NzMessageService.decorators = [
    { type: Injectable, args: [{
                providedIn: NzMessageServiceModule
            },] }
];
/** @nocollapse */
NzMessageService.ctorParameters = () => [
    { type: NzSingletonService },
    { type: Overlay },
    { type: Injector },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef }
];
/** @nocollapse */ NzMessageService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NzMessageService_Factory() { return new NzMessageService(ɵɵinject(NzSingletonService), ɵɵinject(Overlay), ɵɵinject(INJECTOR), ɵɵinject(ComponentFactoryResolver), ɵɵinject(ApplicationRef)); }, token: NzMessageService, providedIn: NzMessageServiceModule });

/**
 * @fileoverview added by tsickle
 * Generated from: nz-message.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzMessageComponent {
    // Time to live.
    /**
     * @param {?} _messageContainer
     * @param {?} cdr
     */
    constructor(_messageContainer, cdr) {
        this._messageContainer = _messageContainer;
        this.cdr = cdr;
        // Whether to set a timeout to destroy itself.
        this._eraseTimer = null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // `NzMessageContainer` does its job so all properties cannot be undefined.
        this._options = (/** @type {?} */ (this.nzMessage.options));
        if (this._options.nzAnimate) {
            this.nzMessage.state = 'enter';
        }
        this._autoErase = this._options.nzDuration > 0;
        if (this._autoErase) {
            this._initErase();
            this._startEraseTimeout();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._autoErase) {
            this._clearEraseTimeout();
        }
    }
    /**
     * @return {?}
     */
    onEnter() {
        if (this._autoErase && this._options.nzPauseOnHover) {
            this._clearEraseTimeout();
            this._updateTTL();
        }
    }
    /**
     * @return {?}
     */
    onLeave() {
        if (this._autoErase && this._options.nzPauseOnHover) {
            this._startEraseTimeout();
        }
    }
    // Remove self
    /**
     * @protected
     * @param {?=} userAction
     * @return {?}
     */
    _destroy(userAction = false) {
        if (this._options.nzAnimate) {
            this.nzMessage.state = 'leave';
            this.cdr.detectChanges();
            setTimeout((/**
             * @return {?}
             */
            () => this._messageContainer.removeMessage(this.nzMessage.messageId, userAction)), 200);
        }
        else {
            this._messageContainer.removeMessage(this.nzMessage.messageId, userAction);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _initErase() {
        this._eraseTTL = this._options.nzDuration;
        this._eraseTimingStart = Date.now();
    }
    /**
     * @private
     * @return {?}
     */
    _updateTTL() {
        if (this._autoErase) {
            this._eraseTTL -= Date.now() - this._eraseTimingStart;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _startEraseTimeout() {
        if (this._eraseTTL > 0) {
            this._clearEraseTimeout();
            this._eraseTimer = setTimeout((/**
             * @return {?}
             */
            () => this._destroy()), this._eraseTTL);
            this._eraseTimingStart = Date.now();
        }
        else {
            this._destroy();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _clearEraseTimeout() {
        if (this._eraseTimer !== null) {
            clearTimeout(this._eraseTimer);
            this._eraseTimer = null;
        }
    }
}
NzMessageComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-message',
                exportAs: 'nzMessage',
                preserveWhitespaces: false,
                animations: [moveUpMotion],
                template: "<div class=\"ant-message-notice\"\n  [@moveUpMotion]=\"nzMessage.state\"\n  (mouseenter)=\"onEnter()\"\n  (mouseleave)=\"onLeave()\">\n  <div class=\"ant-message-notice-content\">\n    <div class=\"ant-message-custom-content\" [ngClass]=\"'ant-message-' + nzMessage.type\">\n      <ng-container [ngSwitch]=\"nzMessage.type\">\n        <i *ngSwitchCase=\"'success'\" nz-icon nzType=\"check-circle\"></i>\n        <i *ngSwitchCase=\"'info'\"  nz-icon nzType=\"info-circle\"></i>\n        <i *ngSwitchCase=\"'warning'\" nz-icon nzType=\"exclamation-circle\"></i>\n        <i *ngSwitchCase=\"'error'\" nz-icon nzType=\"close-circle\"></i>\n        <i *ngSwitchCase=\"'loading'\" nz-icon nzType=\"loading\"></i>\n      </ng-container>\n      <ng-container *nzStringTemplateOutlet=\"nzMessage.content\">\n        <span [innerHTML]=\"nzMessage.content\"></span>\n      </ng-container>\n    </div>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
NzMessageComponent.ctorParameters = () => [
    { type: NzMessageContainerComponent },
    { type: ChangeDetectorRef }
];
NzMessageComponent.propDecorators = {
    nzMessage: [{ type: Input }],
    nzIndex: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzMessageComponent.prototype.nzMessage;
    /** @type {?} */
    NzMessageComponent.prototype.nzIndex;
    /**
     * @type {?}
     * @protected
     */
    NzMessageComponent.prototype._options;
    /**
     * @type {?}
     * @private
     */
    NzMessageComponent.prototype._autoErase;
    /**
     * @type {?}
     * @private
     */
    NzMessageComponent.prototype._eraseTimer;
    /**
     * @type {?}
     * @private
     */
    NzMessageComponent.prototype._eraseTimingStart;
    /**
     * @type {?}
     * @private
     */
    NzMessageComponent.prototype._eraseTTL;
    /**
     * @type {?}
     * @private
     */
    NzMessageComponent.prototype._messageContainer;
    /**
     * @type {?}
     * @protected
     */
    NzMessageComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-message.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzMessageModule {
}
NzMessageModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, OverlayModule, NzIconModule, NzAddOnModule, NzMessageServiceModule],
                declarations: [NzMessageContainerComponent, NzMessageComponent],
                providers: [NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER],
                entryComponents: [NzMessageContainerComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: nz-message.definitions.ts
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
function NzMessageDataOptions() { }
if (false) {
    /** @type {?|undefined} */
    NzMessageDataOptions.prototype.nzDuration;
    /** @type {?|undefined} */
    NzMessageDataOptions.prototype.nzAnimate;
    /** @type {?|undefined} */
    NzMessageDataOptions.prototype.nzPauseOnHover;
}
/**
 * Message data for terminal users.
 * @record
 */
function NzMessageData() { }
if (false) {
    /** @type {?|undefined} */
    NzMessageData.prototype.type;
    /** @type {?|undefined} */
    NzMessageData.prototype.content;
}
/**
 * Filled version of NzMessageData (includes more private properties).
 * @record
 */
function NzMessageDataFilled() { }
if (false) {
    /** @type {?} */
    NzMessageDataFilled.prototype.messageId;
    /** @type {?} */
    NzMessageDataFilled.prototype.createdAt;
    /** @type {?|undefined} */
    NzMessageDataFilled.prototype.options;
    /** @type {?|undefined} */
    NzMessageDataFilled.prototype.state;
    /** @type {?|undefined} */
    NzMessageDataFilled.prototype.onClose;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-message.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NZ_MESSAGE_CONFIG, NZ_MESSAGE_DEFAULT_CONFIG, NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER, NzMessageBaseService, NzMessageComponent, NzMessageContainerComponent, NzMessageModule, NzMessageService, NzMessageServiceModule };
//# sourceMappingURL=ng-zorro-antd-message.js.map
