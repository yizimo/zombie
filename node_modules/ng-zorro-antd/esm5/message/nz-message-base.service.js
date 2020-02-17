/**
 * @fileoverview added by tsickle
 * Generated from: nz-message-base.service.ts
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
import { warnDeprecation } from 'ng-zorro-antd/core';
/** @type {?} */
var globalCounter = 0;
/**
 * @template ContainerClass, MessageData, MessageConfig
 */
var /**
 * @template ContainerClass, MessageData, MessageConfig
 */
NzMessageBaseService = /** @class */ (function () {
    function NzMessageBaseService(nzSingletonService, overlay, containerClass, injector, cfr, appRef, name) {
        if (name === void 0) { name = ''; }
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
    NzMessageBaseService.prototype.remove = /**
     * @param {?=} messageId
     * @return {?}
     */
    function (messageId) {
        if (messageId) {
            this._container.removeMessage(messageId);
        }
        else {
            this._container.removeMessageAll();
        }
    };
    /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    NzMessageBaseService.prototype.createMessage = /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    function (message, options) {
        /** @type {?} */
        var resultMessage = tslib_1.__assign({}, ((/** @type {?} */ (message))), {
            createdAt: new Date(),
            messageId: this._generateMessageId(),
            options: options
        });
        this._container.createMessage(resultMessage);
        return resultMessage;
    };
    /**
     * @param {?} config
     * @return {?}
     */
    NzMessageBaseService.prototype.config = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        warnDeprecation("'config' of 'NzMessageService' and 'NzNotificationService' is deprecated and will be removed in 9.0.0. Please use 'set' of 'NzConfigService' instead.");
        this._container.setConfig(config);
    };
    /**
     * @protected
     * @return {?}
     */
    NzMessageBaseService.prototype._generateMessageId = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.name + "-" + globalCounter++;
    };
    // Manually creating container for overlay to avoid multi-checking error, see: https://github.com/NG-ZORRO/ng-zorro-antd/issues/391
    // NOTE: we never clean up the container component and it's overlay resources, if we should, we need to do it by our own codes.
    // Manually creating container for overlay to avoid multi-checking error, see: https://github.com/NG-ZORRO/ng-zorro-antd/issues/391
    // NOTE: we never clean up the container component and it's overlay resources, if we should, we need to do it by our own codes.
    /**
     * @private
     * @return {?}
     */
    NzMessageBaseService.prototype.withContainer = 
    // Manually creating container for overlay to avoid multi-checking error, see: https://github.com/NG-ZORRO/ng-zorro-antd/issues/391
    // NOTE: we never clean up the container component and it's overlay resources, if we should, we need to do it by our own codes.
    /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var containerInstance = this.nzSingletonService.getSingletonWithKey(this.name);
        if (containerInstance) {
            return (/** @type {?} */ (containerInstance));
        }
        /** @type {?} */
        var factory = this.cfr.resolveComponentFactory(this.containerClass);
        /** @type {?} */
        var componentRef = factory.create(this.injector);
        componentRef.changeDetectorRef.detectChanges(); // Immediately change detection to avoid multi-checking error
        this.appRef.attachView(componentRef.hostView); // Load view into app root
        // Load view into app root
        /** @type {?} */
        var overlayPane = this.overlay.create().overlayElement;
        overlayPane.style.zIndex = '1010'; // Patching: assign the same zIndex of ant-message to it's parent overlay panel, to the ant-message's zindex work.
        overlayPane.appendChild((/** @type {?} */ (((/** @type {?} */ (componentRef.hostView))).rootNodes[0])));
        return componentRef.instance;
    };
    return NzMessageBaseService;
}());
/**
 * @template ContainerClass, MessageData, MessageConfig
 */
export { NzMessageBaseService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS1iYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lc3NhZ2UvIiwic291cmNlcyI6WyJuei1tZXNzYWdlLWJhc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLGVBQWUsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7SUFNckUsYUFBYSxHQUFHLENBQUM7Ozs7QUFFckI7Ozs7SUFPRSw4QkFDVSxrQkFBc0MsRUFDdEMsT0FBZ0IsRUFDaEIsY0FBb0MsRUFDcEMsUUFBa0IsRUFDbEIsR0FBNkIsRUFDN0IsTUFBc0IsRUFDdEIsSUFBaUI7UUFBakIscUJBQUEsRUFBQSxTQUFpQjtRQU5qQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsbUJBQWMsR0FBZCxjQUFjLENBQXNCO1FBQ3BDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsUUFBRyxHQUFILEdBQUcsQ0FBMEI7UUFDN0IsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUV6QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7Ozs7SUFFRCxxQ0FBTTs7OztJQUFOLFVBQU8sU0FBa0I7UUFDdkIsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsNENBQWE7Ozs7O0lBQWIsVUFBYyxPQUFvQixFQUFFLE9BQThCOztZQUMxRCxhQUFhLHdCQUNkLENBQUMsbUJBQUEsT0FBTyxFQUFpQixDQUFDLEVBQzFCO1lBQ0QsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFO1lBQ3JCLFNBQVMsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDcEMsT0FBTyxTQUFBO1NBQ1IsQ0FDRjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTdDLE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQscUNBQU07Ozs7SUFBTixVQUFPLE1BQXFCO1FBQzFCLGVBQWUsQ0FBQyx1SkFBdUosQ0FBQyxDQUFDO1FBRXpLLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRVMsaURBQWtCOzs7O0lBQTVCO1FBQ0UsT0FBVSxJQUFJLENBQUMsSUFBSSxTQUFJLGFBQWEsRUFBSSxDQUFDO0lBQzNDLENBQUM7SUFFRCxtSUFBbUk7SUFDbkksK0hBQStIOzs7Ozs7O0lBQ3ZILDRDQUFhOzs7Ozs7O0lBQXJCOztZQUNRLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRWhGLElBQUksaUJBQWlCLEVBQUU7WUFDckIsT0FBTyxtQkFBQSxpQkFBaUIsRUFBa0IsQ0FBQztTQUM1Qzs7WUFFSyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDOztZQUMvRCxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2xELFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLDZEQUE2RDtRQUM3RyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQywwQkFBMEI7OztZQUNuRSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxjQUFjO1FBQ3hELFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLGtIQUFrSDtRQUNySixXQUFXLENBQUMsV0FBVyxDQUFDLG1CQUFBLENBQUMsbUJBQUEsWUFBWSxDQUFDLFFBQVEsRUFBdUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBZSxDQUFDLENBQUM7UUFFcEcsT0FBTyxZQUFZLENBQUMsUUFBUSxDQUFDO0lBQy9CLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUF2RUQsSUF1RUM7Ozs7Ozs7Ozs7SUFsRUMsMENBQXFDOzs7OztJQUduQyxrREFBOEM7Ozs7O0lBQzlDLHVDQUF3Qjs7Ozs7SUFDeEIsOENBQTRDOzs7OztJQUM1Qyx3Q0FBMEI7Ozs7O0lBQzFCLG1DQUFxQzs7Ozs7SUFDckMsc0NBQThCOzs7OztJQUM5QixvQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEVtYmVkZGVkVmlld1JlZiwgSW5qZWN0b3IsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHdhcm5EZXByZWNhdGlvbiwgTnpTaW5nbGV0b25TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpNZXNzYWdlQ29uZmlnTGVnYWN5IH0gZnJvbSAnLi9uei1tZXNzYWdlLWNvbmZpZyc7XG5pbXBvcnQgeyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL256LW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek1lc3NhZ2VEYXRhLCBOek1lc3NhZ2VEYXRhRmlsbGVkLCBOek1lc3NhZ2VEYXRhT3B0aW9ucyB9IGZyb20gJy4vbnotbWVzc2FnZS5kZWZpbml0aW9ucyc7XG5cbmxldCBnbG9iYWxDb3VudGVyID0gMDtcblxuZXhwb3J0IGNsYXNzIE56TWVzc2FnZUJhc2VTZXJ2aWNlPFxuICBDb250YWluZXJDbGFzcyBleHRlbmRzIE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCxcbiAgTWVzc2FnZURhdGEsXG4gIE1lc3NhZ2VDb25maWcgZXh0ZW5kcyBOek1lc3NhZ2VDb25maWdMZWdhY3lcbj4ge1xuICBwcm90ZWN0ZWQgX2NvbnRhaW5lcjogQ29udGFpbmVyQ2xhc3M7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuelNpbmdsZXRvblNlcnZpY2U6IE56U2luZ2xldG9uU2VydmljZSxcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBjb250YWluZXJDbGFzczogVHlwZTxDb250YWluZXJDbGFzcz4sXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmcgPSAnJ1xuICApIHtcbiAgICB0aGlzLl9jb250YWluZXIgPSB0aGlzLndpdGhDb250YWluZXIoKTtcbiAgICB0aGlzLm56U2luZ2xldG9uU2VydmljZS5yZWdpc3RlclNpbmdsZXRvbldpdGhLZXkodGhpcy5uYW1lLCB0aGlzLl9jb250YWluZXIpO1xuICB9XG5cbiAgcmVtb3ZlKG1lc3NhZ2VJZD86IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChtZXNzYWdlSWQpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5yZW1vdmVNZXNzYWdlKG1lc3NhZ2VJZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5yZW1vdmVNZXNzYWdlQWxsKCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlRGF0YSwgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlRGF0YUZpbGxlZCB7XG4gICAgY29uc3QgcmVzdWx0TWVzc2FnZTogTnpNZXNzYWdlRGF0YUZpbGxlZCA9IHtcbiAgICAgIC4uLihtZXNzYWdlIGFzIE56TWVzc2FnZURhdGEpLFxuICAgICAgLi4ue1xuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIG1lc3NhZ2VJZDogdGhpcy5fZ2VuZXJhdGVNZXNzYWdlSWQoKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5fY29udGFpbmVyLmNyZWF0ZU1lc3NhZ2UocmVzdWx0TWVzc2FnZSk7XG5cbiAgICByZXR1cm4gcmVzdWx0TWVzc2FnZTtcbiAgfVxuXG4gIGNvbmZpZyhjb25maWc6IE1lc3NhZ2VDb25maWcpOiB2b2lkIHtcbiAgICB3YXJuRGVwcmVjYXRpb24oYCdjb25maWcnIG9mICdOek1lc3NhZ2VTZXJ2aWNlJyBhbmQgJ056Tm90aWZpY2F0aW9uU2VydmljZScgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICdzZXQnIG9mICdOekNvbmZpZ1NlcnZpY2UnIGluc3RlYWQuYCk7XG5cbiAgICB0aGlzLl9jb250YWluZXIuc2V0Q29uZmlnKGNvbmZpZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2dlbmVyYXRlTWVzc2FnZUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMubmFtZX0tJHtnbG9iYWxDb3VudGVyKyt9YDtcbiAgfVxuXG4gIC8vIE1hbnVhbGx5IGNyZWF0aW5nIGNvbnRhaW5lciBmb3Igb3ZlcmxheSB0byBhdm9pZCBtdWx0aS1jaGVja2luZyBlcnJvciwgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9pc3N1ZXMvMzkxXG4gIC8vIE5PVEU6IHdlIG5ldmVyIGNsZWFuIHVwIHRoZSBjb250YWluZXIgY29tcG9uZW50IGFuZCBpdCdzIG92ZXJsYXkgcmVzb3VyY2VzLCBpZiB3ZSBzaG91bGQsIHdlIG5lZWQgdG8gZG8gaXQgYnkgb3VyIG93biBjb2Rlcy5cbiAgcHJpdmF0ZSB3aXRoQ29udGFpbmVyKCk6IENvbnRhaW5lckNsYXNzIHtcbiAgICBjb25zdCBjb250YWluZXJJbnN0YW5jZSA9IHRoaXMubnpTaW5nbGV0b25TZXJ2aWNlLmdldFNpbmdsZXRvbldpdGhLZXkodGhpcy5uYW1lKTtcblxuICAgIGlmIChjb250YWluZXJJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIGNvbnRhaW5lckluc3RhbmNlIGFzIENvbnRhaW5lckNsYXNzO1xuICAgIH1cblxuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmNvbnRhaW5lckNsYXNzKTtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSBmYWN0b3J5LmNyZWF0ZSh0aGlzLmluamVjdG9yKTsgLy8gVXNlIHJvb3QgaW5qZWN0b3JcbiAgICBjb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpOyAvLyBJbW1lZGlhdGVseSBjaGFuZ2UgZGV0ZWN0aW9uIHRvIGF2b2lkIG11bHRpLWNoZWNraW5nIGVycm9yXG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpOyAvLyBMb2FkIHZpZXcgaW50byBhcHAgcm9vdFxuICAgIGNvbnN0IG92ZXJsYXlQYW5lID0gdGhpcy5vdmVybGF5LmNyZWF0ZSgpLm92ZXJsYXlFbGVtZW50O1xuICAgIG92ZXJsYXlQYW5lLnN0eWxlLnpJbmRleCA9ICcxMDEwJzsgLy8gUGF0Y2hpbmc6IGFzc2lnbiB0aGUgc2FtZSB6SW5kZXggb2YgYW50LW1lc3NhZ2UgdG8gaXQncyBwYXJlbnQgb3ZlcmxheSBwYW5lbCwgdG8gdGhlIGFudC1tZXNzYWdlJ3MgemluZGV4IHdvcmsuXG4gICAgb3ZlcmxheVBhbmUuYXBwZW5kQ2hpbGQoKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8e30+KS5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgfVxufVxuIl19