/**
 * @fileoverview added by tsickle
 * Generated from: nz-notification-container.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Optional, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { toCssPixel, warnDeprecation, NzConfigService } from 'ng-zorro-antd/core';
import { NzMessageContainerComponent } from 'ng-zorro-antd/message';
import { NZ_NOTIFICATION_CONFIG, NZ_NOTIFICATION_DEFAULT_CONFIG } from './nz-notification-config';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'notification';
var NzNotificationContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzNotificationContainerComponent, _super);
    function NzNotificationContainerComponent(cdr, nzConfigService, defaultConfig, config) {
        var _this = _super.call(this, cdr, nzConfigService, defaultConfig, config) || this;
        /**
         * @override
         */
        _this.messages = [];
        if (!!config) {
            warnDeprecation("Injection token 'NZ_NOTIFICATION_CONFIG' is deprecated and will be removed in 9.0.0. Please use 'NzConfigService' instead.");
        }
        return _this;
    }
    /**
     * @override
     */
    /**
     * @override
     * @param {?=} config
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.setConfig = /**
     * @override
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var newConfig = (this.config = tslib_1.__assign({}, this.config, config, this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME)));
        /** @type {?} */
        var placement = this.config.nzPlacement;
        this.top = placement === 'topLeft' || placement === 'topRight' ? toCssPixel(newConfig.nzTop) : null;
        this.bottom = placement === 'bottomLeft' || placement === 'bottomRight' ? toCssPixel(newConfig.nzBottom) : null;
        this.cdr.markForCheck();
    };
    /**
     * Create a new notification.
     * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`,
     * replace its content instead of create a new one.
     * @override
     * @param notification
     */
    /**
     * Create a new notification.
     * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`,
     * replace its content instead of create a new one.
     * @override
     * @param {?} notification
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.createMessage = /**
     * Create a new notification.
     * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`,
     * replace its content instead of create a new one.
     * @override
     * @param {?} notification
     * @return {?}
     */
    function (notification) {
        notification.options = this._mergeMessageOptions(notification.options);
        notification.onClose = new Subject();
        /** @type {?} */
        var key = notification.options.nzKey;
        /** @type {?} */
        var notificationWithSameKey = this.messages.find((/**
         * @param {?} msg
         * @return {?}
         */
        function (msg) { return msg.options.nzKey === ((/** @type {?} */ (notification.options))).nzKey; }));
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
    };
    /**
     * @override
     */
    /**
     * @override
     * @protected
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.subscribeConfigChange = /**
     * @override
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).subscribe((/**
         * @return {?}
         */
        function () { return _this.setConfig(); }));
    };
    /**
     * @private
     * @param {?} old
     * @param {?} _new
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.replaceNotification = /**
     * @private
     * @param {?} old
     * @param {?} _new
     * @return {?}
     */
    function (old, _new) {
        old.title = _new.title;
        old.content = _new.content;
        old.template = _new.template;
        old.type = _new.type;
    };
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
    NzNotificationContainerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzConfigService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_NOTIFICATION_DEFAULT_CONFIG,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_NOTIFICATION_CONFIG,] }] }
    ]; };
    return NzNotificationContainerComponent;
}(NzMessageContainerComponent));
export { NzNotificationContainerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL25vdGlmaWNhdGlvbi8iLCJzb3VyY2VzIjpbIm56LW5vdGlmaWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsTUFBTSxFQUNOLFFBQVEsRUFDUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVwRSxPQUFPLEVBRUwsc0JBQXNCLEVBQ3RCLDhCQUE4QixFQUMvQixNQUFNLDBCQUEwQixDQUFDOztJQUc1Qix3QkFBd0IsR0FBRyxjQUFjO0FBRS9DO0lBUXNELDREQUEyQjtJQVMvRSwwQ0FDRSxHQUFzQixFQUN0QixlQUFnQyxFQUNvQixhQUF5QyxFQUNqRCxNQUFrQztRQUpoRixZQU1FLGtCQUFNLEdBQUcsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxTQU1uRDs7OztRQWRELGNBQVEsR0FBOEMsRUFBRSxDQUFDO1FBU3ZELElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNaLGVBQWUsQ0FDYiw0SEFBNEgsQ0FDN0gsQ0FBQztTQUNIOztJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsb0RBQVM7Ozs7O0lBQVQsVUFBVSxNQUFtQzs7WUFDckMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sd0JBQ3pCLElBQUksQ0FBQyxNQUFNLEVBQ1gsTUFBTSxFQUNOLElBQUks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TSxTQUFDLDhCQUE4QjtnREFDakQsUUFBUSxZQUFJLE1BQU0sU0FBQyxzQkFBc0I7O0lBa0U5Qyx1Q0FBQztDQUFBLEFBdkZELENBUXNELDJCQUEyQixHQStFaEY7U0EvRVksZ0NBQWdDOzs7SUFDM0Msa0RBQTZDOztJQUM3QyxrREFBc0I7Ozs7O0lBS3RCLG9EQUF5RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBPcHRpb25hbCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IHRvQ3NzUGl4ZWwsIHdhcm5EZXByZWNhdGlvbiwgTnpDb25maWdTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVzc2FnZSc7XG5cbmltcG9ydCB7XG4gIE56Tm90aWZpY2F0aW9uQ29uZmlnTGVnYWN5LFxuICBOWl9OT1RJRklDQVRJT05fQ09ORklHLFxuICBOWl9OT1RJRklDQVRJT05fREVGQVVMVF9DT05GSUdcbn0gZnJvbSAnLi9uei1ub3RpZmljYXRpb24tY29uZmlnJztcbmltcG9ydCB7IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCwgTnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucyB9IGZyb20gJy4vbnotbm90aWZpY2F0aW9uLmRlZmluaXRpb25zJztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ25vdGlmaWNhdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1ub3RpZmljYXRpb24tY29udGFpbmVyJyxcbiAgZXhwb3J0QXM6ICduek5vdGlmaWNhdGlvbkNvbnRhaW5lcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQge1xuICBjb25maWc6IFJlcXVpcmVkPE56Tm90aWZpY2F0aW9uQ29uZmlnTGVnYWN5PjtcbiAgYm90dG9tOiBzdHJpbmcgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIG1lc3NhZ2VzOiBBcnJheTxSZXF1aXJlZDxOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQ+PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9OT1RJRklDQVRJT05fREVGQVVMVF9DT05GSUcpIGRlZmF1bHRDb25maWc6IE56Tm90aWZpY2F0aW9uQ29uZmlnTGVnYWN5LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfTk9USUZJQ0FUSU9OX0NPTkZJRykgY29uZmlnOiBOek5vdGlmaWNhdGlvbkNvbmZpZ0xlZ2FjeVxuICApIHtcbiAgICBzdXBlcihjZHIsIG56Q29uZmlnU2VydmljZSwgZGVmYXVsdENvbmZpZywgY29uZmlnKTtcbiAgICBpZiAoISFjb25maWcpIHtcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcbiAgICAgICAgYEluamVjdGlvbiB0b2tlbiAnTlpfTk9USUZJQ0FUSU9OX0NPTkZJRycgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICdOekNvbmZpZ1NlcnZpY2UnIGluc3RlYWQuYFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzZXRDb25maWcoY29uZmlnPzogTnpOb3RpZmljYXRpb25Db25maWdMZWdhY3kpOiB2b2lkIHtcbiAgICBjb25zdCBuZXdDb25maWcgPSAodGhpcy5jb25maWcgPSB7XG4gICAgICAuLi50aGlzLmNvbmZpZyxcbiAgICAgIC4uLmNvbmZpZyxcbiAgICAgIC4uLnRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXG4gICAgfSk7XG4gICAgY29uc3QgcGxhY2VtZW50ID0gdGhpcy5jb25maWcubnpQbGFjZW1lbnQ7XG5cbiAgICB0aGlzLnRvcCA9IHBsYWNlbWVudCA9PT0gJ3RvcExlZnQnIHx8IHBsYWNlbWVudCA9PT0gJ3RvcFJpZ2h0JyA/IHRvQ3NzUGl4ZWwobmV3Q29uZmlnLm56VG9wKSA6IG51bGw7XG4gICAgdGhpcy5ib3R0b20gPSBwbGFjZW1lbnQgPT09ICdib3R0b21MZWZ0JyB8fCBwbGFjZW1lbnQgPT09ICdib3R0b21SaWdodCcgPyB0b0Nzc1BpeGVsKG5ld0NvbmZpZy5uekJvdHRvbSkgOiBudWxsO1xuXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IG5vdGlmaWNhdGlvbi5cbiAgICogSWYgdGhlcmUncyBhIG5vdGlmaWNhdGlvbiB3aG9zZSBgbnpLZXlgIGlzIHNhbWUgd2l0aCBgbnpLZXlgIGluIGBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWRgLFxuICAgKiByZXBsYWNlIGl0cyBjb250ZW50IGluc3RlYWQgb2YgY3JlYXRlIGEgbmV3IG9uZS5cbiAgICogQG92ZXJyaWRlXG4gICAqIEBwYXJhbSBub3RpZmljYXRpb25cbiAgICovXG4gIGNyZWF0ZU1lc3NhZ2Uobm90aWZpY2F0aW9uOiBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQpOiB2b2lkIHtcbiAgICBub3RpZmljYXRpb24ub3B0aW9ucyA9IHRoaXMuX21lcmdlTWVzc2FnZU9wdGlvbnMobm90aWZpY2F0aW9uLm9wdGlvbnMpO1xuICAgIG5vdGlmaWNhdGlvbi5vbkNsb3NlID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICBjb25zdCBrZXkgPSBub3RpZmljYXRpb24ub3B0aW9ucy5uektleTtcbiAgICBjb25zdCBub3RpZmljYXRpb25XaXRoU2FtZUtleSA9IHRoaXMubWVzc2FnZXMuZmluZChcbiAgICAgIG1zZyA9PiBtc2cub3B0aW9ucy5uektleSA9PT0gKG5vdGlmaWNhdGlvbi5vcHRpb25zIGFzIFJlcXVpcmVkPE56Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnM+KS5uektleVxuICAgICk7XG5cbiAgICBpZiAoa2V5ICYmIG5vdGlmaWNhdGlvbldpdGhTYW1lS2V5KSB7XG4gICAgICB0aGlzLnJlcGxhY2VOb3RpZmljYXRpb24obm90aWZpY2F0aW9uV2l0aFNhbWVLZXksIG5vdGlmaWNhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm1lc3NhZ2VzLmxlbmd0aCA+PSB0aGlzLmNvbmZpZy5uek1heFN0YWNrKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKDAsIDEpO1xuICAgICAgfVxuICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG5vdGlmaWNhdGlvbiBhcyBSZXF1aXJlZDxOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQ+KTtcbiAgICB9XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdGVjdGVkIHN1YnNjcmliZUNvbmZpZ0NoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldENvbmZpZygpKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVwbGFjZU5vdGlmaWNhdGlvbihvbGQ6IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCwgX25ldzogTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkKTogdm9pZCB7XG4gICAgb2xkLnRpdGxlID0gX25ldy50aXRsZTtcbiAgICBvbGQuY29udGVudCA9IF9uZXcuY29udGVudDtcbiAgICBvbGQudGVtcGxhdGUgPSBfbmV3LnRlbXBsYXRlO1xuICAgIG9sZC50eXBlID0gX25ldy50eXBlO1xuICB9XG59XG4iXX0=