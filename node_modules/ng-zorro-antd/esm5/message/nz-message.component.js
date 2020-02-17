/**
 * @fileoverview added by tsickle
 * Generated from: nz-message.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { moveUpMotion } from 'ng-zorro-antd/core';
import { NzMessageContainerComponent } from './nz-message-container.component';
var NzMessageComponent = /** @class */ (function () {
    function NzMessageComponent(_messageContainer, cdr) {
        this._messageContainer = _messageContainer;
        this.cdr = cdr;
        // Whether to set a timeout to destroy itself.
        this._eraseTimer = null;
    }
    /**
     * @return {?}
     */
    NzMessageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    NzMessageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._autoErase) {
            this._clearEraseTimeout();
        }
    };
    /**
     * @return {?}
     */
    NzMessageComponent.prototype.onEnter = /**
     * @return {?}
     */
    function () {
        if (this._autoErase && this._options.nzPauseOnHover) {
            this._clearEraseTimeout();
            this._updateTTL();
        }
    };
    /**
     * @return {?}
     */
    NzMessageComponent.prototype.onLeave = /**
     * @return {?}
     */
    function () {
        if (this._autoErase && this._options.nzPauseOnHover) {
            this._startEraseTimeout();
        }
    };
    // Remove self
    // Remove self
    /**
     * @protected
     * @param {?=} userAction
     * @return {?}
     */
    NzMessageComponent.prototype._destroy = 
    // Remove self
    /**
     * @protected
     * @param {?=} userAction
     * @return {?}
     */
    function (userAction) {
        var _this = this;
        if (userAction === void 0) { userAction = false; }
        if (this._options.nzAnimate) {
            this.nzMessage.state = 'leave';
            this.cdr.detectChanges();
            setTimeout((/**
             * @return {?}
             */
            function () { return _this._messageContainer.removeMessage(_this.nzMessage.messageId, userAction); }), 200);
        }
        else {
            this._messageContainer.removeMessage(this.nzMessage.messageId, userAction);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzMessageComponent.prototype._initErase = /**
     * @private
     * @return {?}
     */
    function () {
        this._eraseTTL = this._options.nzDuration;
        this._eraseTimingStart = Date.now();
    };
    /**
     * @private
     * @return {?}
     */
    NzMessageComponent.prototype._updateTTL = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._autoErase) {
            this._eraseTTL -= Date.now() - this._eraseTimingStart;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzMessageComponent.prototype._startEraseTimeout = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._eraseTTL > 0) {
            this._clearEraseTimeout();
            this._eraseTimer = setTimeout((/**
             * @return {?}
             */
            function () { return _this._destroy(); }), this._eraseTTL);
            this._eraseTimingStart = Date.now();
        }
        else {
            this._destroy();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzMessageComponent.prototype._clearEraseTimeout = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._eraseTimer !== null) {
            clearTimeout(this._eraseTimer);
            this._eraseTimer = null;
        }
    };
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
    NzMessageComponent.ctorParameters = function () { return [
        { type: NzMessageContainerComponent },
        { type: ChangeDetectorRef }
    ]; };
    NzMessageComponent.propDecorators = {
        nzMessage: [{ type: Input }],
        nzIndex: [{ type: Input }]
    };
    return NzMessageComponent;
}());
export { NzMessageComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lc3NhZ2UvIiwic291cmNlcyI6WyJuei1tZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUdMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHL0U7SUFvQkUsNEJBQW9CLGlCQUE4QyxFQUFZLEdBQXNCO1FBQWhGLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNkI7UUFBWSxRQUFHLEdBQUgsR0FBRyxDQUFtQjs7UUFKNUYsZ0JBQVcsR0FBa0IsSUFBSSxDQUFDO0lBSTZELENBQUM7Ozs7SUFFeEcscUNBQVE7OztJQUFSO1FBQ0UsMkVBQTJFO1FBQzNFLElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQWtDLENBQUM7UUFFekUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7U0FDaEM7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUUvQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNu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Ozs0QkF1QmhCLEtBQUs7MEJBQ0wsS0FBSzs7SUFvRlIseUJBQUM7Q0FBQSxBQS9GRCxJQStGQztTQXRGWSxrQkFBa0I7OztJQUM3Qix1Q0FBd0M7O0lBQ3hDLHFDQUF5Qjs7Ozs7SUFFekIsc0NBQW1EOzs7OztJQUVuRCx3Q0FBNEI7Ozs7O0lBQzVCLHlDQUEwQzs7Ozs7SUFDMUMsK0NBQWtDOzs7OztJQUNsQyx1Q0FBMEI7Ozs7O0lBRWQsK0NBQXNEOzs7OztJQUFFLGlDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgbW92ZVVwTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpNZXNzYWdlRGF0YUZpbGxlZCwgTnpNZXNzYWdlRGF0YU9wdGlvbnMgfSBmcm9tICcuL256LW1lc3NhZ2UuZGVmaW5pdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotbWVzc2FnZScsXG4gIGV4cG9ydEFzOiAnbnpNZXNzYWdlJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnM6IFttb3ZlVXBNb3Rpb25dLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotbWVzc2FnZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpNZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBuek1lc3NhZ2U6IE56TWVzc2FnZURhdGFGaWxsZWQ7XG4gIEBJbnB1dCgpIG56SW5kZXg6IG51bWJlcjtcblxuICBwcm90ZWN0ZWQgX29wdGlvbnM6IFJlcXVpcmVkPE56TWVzc2FnZURhdGFPcHRpb25zPjtcblxuICBwcml2YXRlIF9hdXRvRXJhc2U6IGJvb2xlYW47IC8vIFdoZXRoZXIgdG8gc2V0IGEgdGltZW91dCB0byBkZXN0cm95IGl0c2VsZi5cbiAgcHJpdmF0ZSBfZXJhc2VUaW1lcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2VyYXNlVGltaW5nU3RhcnQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBfZXJhc2VUVEw6IG51bWJlcjsgLy8gVGltZSB0byBsaXZlLlxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2VDb250YWluZXI6IE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCwgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gYE56TWVzc2FnZUNvbnRhaW5lcmAgZG9lcyBpdHMgam9iIHNvIGFsbCBwcm9wZXJ0aWVzIGNhbm5vdCBiZSB1bmRlZmluZWQuXG4gICAgdGhpcy5fb3B0aW9ucyA9IHRoaXMubnpNZXNzYWdlLm9wdGlvbnMgYXMgUmVxdWlyZWQ8TnpNZXNzYWdlRGF0YU9wdGlvbnM+O1xuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMubnpBbmltYXRlKSB7XG4gICAgICB0aGlzLm56TWVzc2FnZS5zdGF0ZSA9ICdlbnRlcic7XG4gICAgfVxuXG4gICAgdGhpcy5fYXV0b0VyYXNlID0gdGhpcy5fb3B0aW9ucy5uekR1cmF0aW9uID4gMDtcblxuICAgIGlmICh0aGlzLl9hdXRvRXJhc2UpIHtcbiAgICAgIHRoaXMuX2luaXRFcmFzZSgpO1xuICAgICAgdGhpcy5fc3RhcnRFcmFzZVRpbWVvdXQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYXV0b0VyYXNlKSB7XG4gICAgICB0aGlzLl9jbGVhckVyYXNlVGltZW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uRW50ZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2F1dG9FcmFzZSAmJiB0aGlzLl9vcHRpb25zLm56UGF1c2VPbkhvdmVyKSB7XG4gICAgICB0aGlzLl9jbGVhckVyYXNlVGltZW91dCgpO1xuICAgICAgdGhpcy5fdXBkYXRlVFRMKCk7XG4gICAgfVxuICB9XG5cbiAgb25MZWF2ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYXV0b0VyYXNlICYmIHRoaXMuX29wdGlvbnMubnpQYXVzZU9uSG92ZXIpIHtcbiAgICAgIHRoaXMuX3N0YXJ0RXJhc2VUaW1lb3V0KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gUmVtb3ZlIHNlbGZcbiAgcHJvdGVjdGVkIF9kZXN0cm95KHVzZXJBY3Rpb246IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vcHRpb25zLm56QW5pbWF0ZSkge1xuICAgICAgdGhpcy5uek1lc3NhZ2Uuc3RhdGUgPSAnbGVhdmUnO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9tZXNzYWdlQ29udGFpbmVyLnJlbW92ZU1lc3NhZ2UodGhpcy5uek1lc3NhZ2UubWVzc2FnZUlkLCB1c2VyQWN0aW9uKSwgMjAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbWVzc2FnZUNvbnRhaW5lci5yZW1vdmVNZXNzYWdlKHRoaXMubnpNZXNzYWdlLm1lc3NhZ2VJZCwgdXNlckFjdGlvbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdEVyYXNlKCk6IHZvaWQge1xuICAgIHRoaXMuX2VyYXNlVFRMID0gdGhpcy5fb3B0aW9ucy5uekR1cmF0aW9uO1xuICAgIHRoaXMuX2VyYXNlVGltaW5nU3RhcnQgPSBEYXRlLm5vdygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVFRMKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9hdXRvRXJhc2UpIHtcbiAgICAgIHRoaXMuX2VyYXNlVFRMIC09IERhdGUubm93KCkgLSB0aGlzLl9lcmFzZVRpbWluZ1N0YXJ0O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3N0YXJ0RXJhc2VUaW1lb3V0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9lcmFzZVRUTCA+IDApIHtcbiAgICAgIHRoaXMuX2NsZWFyRXJhc2VUaW1lb3V0KCk7XG4gICAgICB0aGlzLl9lcmFzZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLl9kZXN0cm95KCksIHRoaXMuX2VyYXNlVFRMKTtcbiAgICAgIHRoaXMuX2VyYXNlVGltaW5nU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2xlYXJFcmFzZVRpbWVvdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2VyYXNlVGltZXIgIT09IG51bGwpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9lcmFzZVRpbWVyKTtcbiAgICAgIHRoaXMuX2VyYXNlVGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19