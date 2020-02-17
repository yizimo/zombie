/**
 * @fileoverview added by tsickle
 * Generated from: nz-message-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Optional, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { toCssPixel, warnDeprecation, NzConfigService } from 'ng-zorro-antd/core';
import { NZ_MESSAGE_CONFIG, NZ_MESSAGE_DEFAULT_CONFIG } from './nz-message-config';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'message';
export class NzMessageContainerComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZXNzYWdlLyIsInNvdXJjZXMiOlsibnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxNQUFNLEVBRU4sUUFBUSxFQUNSLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxGLE9BQU8sRUFBeUIsaUJBQWlCLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7TUFHcEcsd0JBQXdCLEdBQUcsU0FBUztBQVUxQyxNQUFNLE9BQU8sMkJBQTJCOzs7Ozs7O0lBS3RDLFlBQ1ksR0FBc0IsRUFDdEIsZUFBZ0MsRUFDSyxhQUFvQyxFQUM1QyxNQUE2QjtRQUgxRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFONUMsYUFBUSxHQUEwQixFQUFFLENBQUM7UUFVbkMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ1osZUFBZSxDQUNiLHVIQUF1SCxDQUN4SCxDQUFDO1NBQ0g7UUFDRCxJQUFJLENBQUMsU0FBUyxtQkFBTSxhQUFhLEVBQUssTUFBTSxFQUFHLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUE4QjtRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMs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UUFBUSxZQUFJLE1BQU0sU0FBQyxpQkFBaUI7Ozs7SUFSdkMsK0NBQXFDOztJQUNyQyw2Q0FBd0M7O0lBQ3hDLDBDQUFtQjs7Ozs7SUFHakIsMENBQWdDOzs7OztJQUNoQyxzREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEluamVjdCxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IHRvQ3NzUGl4ZWwsIHdhcm5EZXByZWNhdGlvbiwgTnpDb25maWdTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpNZXNzYWdlQ29uZmlnTGVnYWN5LCBOWl9NRVNTQUdFX0NPTkZJRywgTlpfTUVTU0FHRV9ERUZBVUxUX0NPTkZJRyB9IGZyb20gJy4vbnotbWVzc2FnZS1jb25maWcnO1xuaW1wb3J0IHsgTnpNZXNzYWdlRGF0YUZpbGxlZCwgTnpNZXNzYWdlRGF0YU9wdGlvbnMgfSBmcm9tICcuL256LW1lc3NhZ2UuZGVmaW5pdGlvbnMnO1xuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnbWVzc2FnZSc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1tZXNzYWdlLWNvbnRhaW5lcicsXG4gIGV4cG9ydEFzOiAnbnpNZXNzYWdlQ29udGFpbmVyJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbWVzc2FnZXM6IE56TWVzc2FnZURhdGFGaWxsZWRbXSA9IFtdO1xuICBjb25maWc6IFJlcXVpcmVkPE56TWVzc2FnZUNvbmZpZ0xlZ2FjeT47XG4gIHRvcDogc3RyaW5nIHwgbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcm90ZWN0ZWQgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9NRVNTQUdFX0RFRkFVTFRfQ09ORklHKSBkZWZhdWx0Q29uZmlnOiBOek1lc3NhZ2VDb25maWdMZWdhY3ksXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9NRVNTQUdFX0NPTkZJRykgY29uZmlnOiBOek1lc3NhZ2VDb25maWdMZWdhY3lcbiAgKSB7XG4gICAgaWYgKCEhY29uZmlnKSB7XG4gICAgICB3YXJuRGVwcmVjYXRpb24oXG4gICAgICAgIGBJbmplY3Rpb24gdG9rZW4gJ05aX01FU1NBR0VfQ09ORklHJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ056Q29uZmlnU2VydmljZScgaW5zdGVhZC5gXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLnNldENvbmZpZyh7IC4uLmRlZmF1bHRDb25maWcsIC4uLmNvbmZpZyB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaWJlQ29uZmlnQ2hhbmdlKCk7XG4gIH1cblxuICBzZXRDb25maWcoY29uZmlnPzogTnpNZXNzYWdlQ29uZmlnTGVnYWN5KTogdm9pZCB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLm1lcmdlTWVzc2FnZUNvbmZpZyhjb25maWcpO1xuICAgIHRoaXMudG9wID0gdG9Dc3NQaXhlbCh0aGlzLmNvbmZpZy5uelRvcCk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IG1lc3NhZ2UuXG4gICAqIEBwYXJhbSBtZXNzYWdlIFBhcnNlZCBtZXNzYWdlIGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBjcmVhdGVNZXNzYWdlKG1lc3NhZ2U6IE56TWVzc2FnZURhdGFGaWxsZWQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tZXNzYWdlcy5sZW5ndGggPj0gdGhpcy5jb25maWcubnpNYXhTdGFjaykge1xuICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoMCwgMSk7XG4gICAgfVxuICAgIG1lc3NhZ2Uub3B0aW9ucyA9IHRoaXMuX21lcmdlTWVzc2FnZU9wdGlvbnMobWVzc2FnZS5vcHRpb25zKTtcbiAgICBtZXNzYWdlLm9uQ2xvc2UgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEgbWVzc2FnZSBieSBgbWVzc2FnZUlkYC5cbiAgICogQHBhcmFtIG1lc3NhZ2VJZCBJZCBvZiB0aGUgbWVzc2FnZSB0byBiZSByZW1vdmVkLlxuICAgKiBAcGFyYW0gdXNlckFjdGlvbiBXaGV0aGVyIHRoaXMgaXMgY2xvc2VkIGJ5IHVzZXIgaW50ZXJhY3Rpb24uXG4gICAqL1xuICByZW1vdmVNZXNzYWdlKG1lc3NhZ2VJZDogc3RyaW5nLCB1c2VyQWN0aW9uOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLm1lc3NhZ2VzLnNvbWUoKG1lc3NhZ2UsIGluZGV4KSA9PiB7XG4gICAgICBpZiAobWVzc2FnZS5tZXNzYWdlSWQgPT09IG1lc3NhZ2VJZCkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgbWVzc2FnZS5vbkNsb3NlIS5uZXh0KHVzZXJBY3Rpb24pO1xuICAgICAgICBtZXNzYWdlLm9uQ2xvc2UhLmNvbXBsZXRlKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgbWVzc2FnZXMuXG4gICAqL1xuICByZW1vdmVNZXNzYWdlQWxsKCk6IHZvaWQge1xuICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc3Vic2NyaWJlQ29uZmlnQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0Q29uZmlnKCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG1lcmdlTWVzc2FnZUNvbmZpZyhjb25maWc/OiBOek1lc3NhZ2VDb25maWdMZWdhY3kpOiBSZXF1aXJlZDxOek1lc3NhZ2VDb25maWdMZWdhY3k+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4udGhpcy5jb25maWcsXG4gICAgICAuLi5jb25maWcsXG4gICAgICAuLi50aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2UgZGVmYXVsdCBvcHRpb25zIGFuZCBjdXN0b20gbWVzc2FnZSBvcHRpb25zXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBwcm90ZWN0ZWQgX21lcmdlTWVzc2FnZU9wdGlvbnMob3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlRGF0YU9wdGlvbnMge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBOek1lc3NhZ2VEYXRhT3B0aW9ucyA9IHtcbiAgICAgIG56RHVyYXRpb246IHRoaXMuY29uZmlnLm56RHVyYXRpb24sXG4gICAgICBuekFuaW1hdGU6IHRoaXMuY29uZmlnLm56QW5pbWF0ZSxcbiAgICAgIG56UGF1c2VPbkhvdmVyOiB0aGlzLmNvbmZpZy5uelBhdXNlT25Ib3ZlclxuICAgIH07XG4gICAgcmV0dXJuIHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcbiAgfVxufVxuIl19