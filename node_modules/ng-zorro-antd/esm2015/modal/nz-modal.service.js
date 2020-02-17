/**
 * @fileoverview added by tsickle
 * Generated from: nz-modal.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { warn } from 'ng-zorro-antd/core';
import { NzModalControlService } from './nz-modal-control.service';
import { NzModalComponent } from './nz-modal.component';
import { NzModalServiceModule } from './nz-modal.service.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "./nz-modal-control.service";
import * as i3 from "./nz-modal.service.module";
// A builder used for managing service creating modals
export class ModalBuilderForService {
    /**
     * @param {?} overlay
     * @param {?=} options
     */
    constructor(overlay, options = {}) {
        this.overlay = overlay;
        this.createModal();
        if (!('nzGetContainer' in options)) {
            // As we use CDK to create modal in service by force, there is no need to use nzGetContainer
            options.nzGetContainer = undefined; // Override nzGetContainer's default value to prevent creating another overlay
        }
        this.changeProps(options);
        (/** @type {?} */ (this.modalRef)).instance.setOverlayRef(this.overlayRef);
        (/** @type {?} */ (this.modalRef)).instance.open();
        (/** @type {?} */ (this.modalRef)).instance.nzAfterClose.subscribe((/**
         * @return {?}
         */
        () => this.destroyModal())); // [NOTE] By default, close equals destroy when using as Service
    }
    /**
     * @return {?}
     */
    getInstance() {
        return this.modalRef && this.modalRef.instance;
    }
    /**
     * @return {?}
     */
    destroyModal() {
        if (this.modalRef) {
            this.overlayRef.dispose();
            this.modalRef = null;
        }
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    changeProps(options) {
        if (this.modalRef) {
            Object.assign(this.modalRef.instance, options); // DANGER: here not limit user's inputs at runtime
        }
    }
    // Create component to ApplicationRef
    /**
     * @private
     * @return {?}
     */
    createModal() {
        this.overlayRef = this.overlay.create();
        this.modalRef = this.overlayRef.attach(new ComponentPortal(NzModalComponent));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalBuilderForService.prototype.modalRef;
    /**
     * @type {?}
     * @private
     */
    ModalBuilderForService.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    ModalBuilderForService.prototype.overlay;
}
export class NzModalService {
    /**
     * @param {?} overlay
     * @param {?} modalControl
     */
    constructor(overlay, modalControl) {
        this.overlay = overlay;
        this.modalControl = modalControl;
    }
    // Track of the current close modals (we assume invisible is close this time)
    /**
     * @return {?}
     */
    get openModals() {
        return this.modalControl.openModals;
    }
    /**
     * @return {?}
     */
    get afterAllClose() {
        return this.modalControl.afterAllClose.asObservable();
    }
    // Closes all of the currently-open dialogs
    /**
     * @return {?}
     */
    closeAll() {
        this.modalControl.closeAll();
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    create(options = {}) {
        if (typeof options.nzOnCancel !== 'function') {
            options.nzOnCancel = (/**
             * @return {?}
             */
            () => { }); // Leave a empty function to close this modal by default
        }
        // NOTE: use NzModalComponent as the NzModalRef by now, we may need archive the real NzModalRef object in the future
        /** @type {?} */
        const modalRef = (/** @type {?} */ (new ModalBuilderForService(this.overlay, options).getInstance()));
        return modalRef;
    }
    /**
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    confirm(options = {}, confirmType = 'confirm') {
        if ('nzFooter' in options) {
            warn(`The Confirm-Modal doesn't support "nzFooter", this property will be ignored.`);
        }
        if (!('nzWidth' in options)) {
            options.nzWidth = 416;
        }
        if (!('nzMaskClosable' in options)) {
            options.nzMaskClosable = false;
        }
        if (typeof options.nzOnOk !== 'function') {
            // NOTE: only support function currently by calling confirm()
            options.nzOnOk = (/**
             * @return {?}
             */
            () => { }); // Leave a empty function to close this modal by default
        }
        options.nzModalType = 'confirm';
        options.nzClassName = `ant-modal-confirm ant-modal-confirm-${confirmType} ${options.nzClassName || ''}`;
        return this.create(options);
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    info(options = {}) {
        return this.simpleConfirm(options, 'info');
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    success(options = {}) {
        return this.simpleConfirm(options, 'success');
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    error(options = {}) {
        return this.simpleConfirm(options, 'error');
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    warning(options = {}) {
        return this.simpleConfirm(options, 'warning');
    }
    /**
     * @private
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    simpleConfirm(options = {}, confirmType) {
        /** @type {?} */
        const iconMap = {
            info: 'info-circle',
            success: 'check-circle',
            error: 'close-circle',
            warning: 'exclamation-circle'
        };
        if (!('nzIconType' in options)) {
            options.nzIconType = iconMap[confirmType];
        }
        if (!('nzCancelText' in options)) {
            // Remove the Cancel button if the user not specify a Cancel button
            options.nzCancelText = null;
        }
        return this.confirm(options, confirmType);
    }
}
NzModalService.decorators = [
    { type: Injectable, args: [{
                providedIn: NzModalServiceModule
            },] }
];
/** @nocollapse */
NzModalService.ctorParameters = () => [
    { type: Overlay },
    { type: NzModalControlService }
];
/** @nocollapse */ NzModalService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzModalService_Factory() { return new NzModalService(i0.ɵɵinject(i1.Overlay), i0.ɵɵinject(i2.NzModalControlService)); }, token: NzModalService, providedIn: i3.NzModalServiceModule });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzModalService.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    NzModalService.prototype.modalControl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbW9kYWwvIiwic291cmNlcyI6WyJuei1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFnQixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHekQsT0FBTyxFQUFFLElBQUksRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7O0FBSWpFLE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBSWpDLFlBQW9CLE9BQWdCLEVBQUUsVUFBa0MsRUFBRTtRQUF0RCxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSxPQUFPLENBQUMsRUFBRTtZQUNsQyw0RkFBNEY7WUFDNUYsT0FBTyxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsQ0FBQyw4RUFBOEU7U0FDbkg7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLG1CQUFBLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2RCxtQkFBQSxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLG1CQUFBLElBQUksQ0FB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SUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7O1lBbEZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsb0JBQW9CO2FBQ2pDOzs7O1lBMURRLE9BQU87WUFPUCxxQkFBcUI7Ozs7Ozs7O0lBOERoQixpQ0FBd0I7Ozs7O0lBQUUsc0NBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IENvbXBvbmVudFJlZiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyB3YXJuLCBJbmRleGFibGVPYmplY3QgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOek1vZGFsQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuL256LW1vZGFsLWNvbnRyb2wuc2VydmljZSc7XG5pbXBvcnQgeyBOek1vZGFsUmVmIH0gZnJvbSAnLi9uei1tb2RhbC1yZWYuY2xhc3MnO1xuaW1wb3J0IHsgTnpNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbnotbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IE56TW9kYWxTZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi9uei1tb2RhbC5zZXJ2aWNlLm1vZHVsZSc7XG5pbXBvcnQgeyBDb25maXJtVHlwZSwgTW9kYWxPcHRpb25zLCBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlIH0gZnJvbSAnLi9uei1tb2RhbC50eXBlJztcblxuLy8gQSBidWlsZGVyIHVzZWQgZm9yIG1hbmFnaW5nIHNlcnZpY2UgY3JlYXRpbmcgbW9kYWxzXG5leHBvcnQgY2xhc3MgTW9kYWxCdWlsZGVyRm9yU2VydmljZSB7XG4gIHByaXZhdGUgbW9kYWxSZWY6IENvbXBvbmVudFJlZjxOek1vZGFsQ29tcG9uZW50PiB8IG51bGw7IC8vIE1vZGFsIENvbXBvbmVudFJlZiwgXCJudWxsXCIgbWVhbnMgaXQgaGFzIGJlZW4gZGVzdHJveWVkXG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksIG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2UgPSB7fSkge1xuICAgIHRoaXMuY3JlYXRlTW9kYWwoKTtcblxuICAgIGlmICghKCduekdldENvbnRhaW5lcicgaW4gb3B0aW9ucykpIHtcbiAgICAgIC8vIEFzIHdlIHVzZSBDREsgdG8gY3JlYXRlIG1vZGFsIGluIHNlcnZpY2UgYnkgZm9yY2UsIHRoZXJlIGlzIG5vIG5lZWQgdG8gdXNlIG56R2V0Q29udGFpbmVyXG4gICAgICBvcHRpb25zLm56R2V0Q29udGFpbmVyID0gdW5kZWZpbmVkOyAvLyBPdmVycmlkZSBuekdldENvbnRhaW5lcidzIGRlZmF1bHQgdmFsdWUgdG8gcHJldmVudCBjcmVhdGluZyBhbm90aGVyIG92ZXJsYXlcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZVByb3BzKG9wdGlvbnMpO1xuICAgIHRoaXMubW9kYWxSZWYhLmluc3RhbmNlLnNldE92ZXJsYXlSZWYodGhpcy5vdmVybGF5UmVmKTtcbiAgICB0aGlzLm1vZGFsUmVmIS5pbnN0YW5jZS5vcGVuKCk7XG4gICAgdGhpcy5tb2RhbFJlZiEuaW5zdGFuY2UubnpBZnRlckNsb3NlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmRlc3Ryb3lNb2RhbCgpKTsgLy8gW05PVEVdIEJ5IGRlZmF1bHQsIGNsb3NlIGVxdWFscyBkZXN0cm95IHdoZW4gdXNpbmcgYXMgU2VydmljZVxuICB9XG5cbiAgZ2V0SW5zdGFuY2UoKTogTnpNb2RhbENvbXBvbmVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLm1vZGFsUmVmICYmIHRoaXMubW9kYWxSZWYuaW5zdGFuY2U7XG4gIH1cblxuICBkZXN0cm95TW9kYWwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubW9kYWxSZWYpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgICB0aGlzLm1vZGFsUmVmID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZVByb3BzKG9wdGlvbnM6IE1vZGFsT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1vZGFsUmVmKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMubW9kYWxSZWYuaW5zdGFuY2UsIG9wdGlvbnMpOyAvLyBEQU5HRVI6IGhlcmUgbm90IGxpbWl0IHVzZXIncyBpbnB1dHMgYXQgcnVudGltZVxuICAgIH1cbiAgfVxuXG4gIC8vIENyZWF0ZSBjb21wb25lbnQgdG8gQXBwbGljYXRpb25SZWZcbiAgcHJpdmF0ZSBjcmVhdGVNb2RhbCgpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKCk7XG4gICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMub3ZlcmxheVJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChOek1vZGFsQ29tcG9uZW50KSk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBOek1vZGFsU2VydmljZU1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBOek1vZGFsU2VydmljZSB7XG4gIC8vIFRyYWNrIG9mIHRoZSBjdXJyZW50IGNsb3NlIG1vZGFscyAod2UgYXNzdW1lIGludmlzaWJsZSBpcyBjbG9zZSB0aGlzIHRpbWUpXG4gIGdldCBvcGVuTW9kYWxzKCk6IE56TW9kYWxSZWZbXSB7XG4gICAgcmV0dXJuIHRoaXMubW9kYWxDb250cm9sLm9wZW5Nb2RhbHM7XG4gIH1cblxuICBnZXQgYWZ0ZXJBbGxDbG9zZSgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5tb2RhbENvbnRyb2wuYWZ0ZXJBbGxDbG9zZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSwgcHJpdmF0ZSBtb2RhbENvbnRyb2w6IE56TW9kYWxDb250cm9sU2VydmljZSkge31cblxuICAvLyBDbG9zZXMgYWxsIG9mIHRoZSBjdXJyZW50bHktb3BlbiBkaWFsb2dzXG4gIGNsb3NlQWxsKCk6IHZvaWQge1xuICAgIHRoaXMubW9kYWxDb250cm9sLmNsb3NlQWxsKCk7XG4gIH1cblxuICBjcmVhdGU8VD4ob3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZTxUPiA9IHt9KTogTnpNb2RhbFJlZjxUPiB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLm56T25DYW5jZWwgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9wdGlvbnMubnpPbkNhbmNlbCA9ICgpID0+IHt9OyAvLyBMZWF2ZSBhIGVtcHR5IGZ1bmN0aW9uIHRvIGNsb3NlIHRoaXMgbW9kYWwgYnkgZGVmYXVsdFxuICAgIH1cblxuICAgIC8vIE5PVEU6IHVzZSBOek1vZGFsQ29tcG9uZW50IGFzIHRoZSBOek1vZGFsUmVmIGJ5IG5vdywgd2UgbWF5IG5lZWQgYXJjaGl2ZSB0aGUgcmVhbCBOek1vZGFsUmVmIG9iamVjdCBpbiB0aGUgZnV0dXJlXG4gICAgY29uc3QgbW9kYWxSZWYgPSBuZXcgTW9kYWxCdWlsZGVyRm9yU2VydmljZSh0aGlzLm92ZXJsYXksIG9wdGlvbnMpLmdldEluc3RhbmNlKCkhO1xuXG4gICAgcmV0dXJuIG1vZGFsUmVmO1xuICB9XG5cbiAgY29uZmlybTxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+ID0ge30sIGNvbmZpcm1UeXBlOiBDb25maXJtVHlwZSA9ICdjb25maXJtJyk6IE56TW9kYWxSZWY8VD4ge1xuICAgIGlmICgnbnpGb290ZXInIGluIG9wdGlvbnMpIHtcbiAgICAgIHdhcm4oYFRoZSBDb25maXJtLU1vZGFsIGRvZXNuJ3Qgc3VwcG9ydCBcIm56Rm9vdGVyXCIsIHRoaXMgcHJvcGVydHkgd2lsbCBiZSBpZ25vcmVkLmApO1xuICAgIH1cbiAgICBpZiAoISgnbnpXaWR0aCcgaW4gb3B0aW9ucykpIHtcbiAgICAgIG9wdGlvbnMubnpXaWR0aCA9IDQxNjtcbiAgICB9XG4gICAgaWYgKCEoJ256TWFza0Nsb3NhYmxlJyBpbiBvcHRpb25zKSkge1xuICAgICAgb3B0aW9ucy5uek1hc2tDbG9zYWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMubnpPbk9rICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBOT1RFOiBvbmx5IHN1cHBvcnQgZnVuY3Rpb24gY3VycmVudGx5IGJ5IGNhbGxpbmcgY29uZmlybSgpXG4gICAgICBvcHRpb25zLm56T25PayA9ICgpID0+IHt9OyAvLyBMZWF2ZSBhIGVtcHR5IGZ1bmN0aW9uIHRvIGNsb3NlIHRoaXMgbW9kYWwgYnkgZGVmYXVsdFxuICAgIH1cblxuICAgIG9wdGlvbnMubnpNb2RhbFR5cGUgPSAnY29uZmlybSc7XG4gICAgb3B0aW9ucy5uekNsYXNzTmFtZSA9IGBhbnQtbW9kYWwtY29uZmlybSBhbnQtbW9kYWwtY29uZmlybS0ke2NvbmZpcm1UeXBlfSAke29wdGlvbnMubnpDbGFzc05hbWUgfHwgJyd9YDtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUob3B0aW9ucyk7XG4gIH1cblxuICBpbmZvPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4gPSB7fSk6IE56TW9kYWxSZWY8VD4ge1xuICAgIHJldHVybiB0aGlzLnNpbXBsZUNvbmZpcm0ob3B0aW9ucywgJ2luZm8nKTtcbiAgfVxuXG4gIHN1Y2Nlc3M8VD4ob3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZTxUPiA9IHt9KTogTnpNb2RhbFJlZjxUPiB7XG4gICAgcmV0dXJuIHRoaXMuc2ltcGxlQ29uZmlybShvcHRpb25zLCAnc3VjY2VzcycpO1xuICB9XG5cbiAgZXJyb3I8VD4ob3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZTxUPiA9IHt9KTogTnpNb2RhbFJlZjxUPiB7XG4gICAgcmV0dXJuIHRoaXMuc2ltcGxlQ29uZmlybShvcHRpb25zLCAnZXJyb3InKTtcbiAgfVxuXG4gIHdhcm5pbmc8VD4ob3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZTxUPiA9IHt9KTogTnpNb2RhbFJlZjxUPiB7XG4gICAgcmV0dXJuIHRoaXMuc2ltcGxlQ29uZmlybShvcHRpb25zLCAnd2FybmluZycpO1xuICB9XG5cbiAgcHJpdmF0ZSBzaW1wbGVDb25maXJtPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4gPSB7fSwgY29uZmlybVR5cGU6IENvbmZpcm1UeXBlKTogTnpNb2RhbFJlZjxUPiB7XG4gICAgY29uc3QgaWNvbk1hcDogSW5kZXhhYmxlT2JqZWN0ID0ge1xuICAgICAgaW5mbzogJ2luZm8tY2lyY2xlJyxcbiAgICAgIHN1Y2Nlc3M6ICdjaGVjay1jaXJjbGUnLFxuICAgICAgZXJyb3I6ICdjbG9zZS1jaXJjbGUnLFxuICAgICAgd2FybmluZzogJ2V4Y2xhbWF0aW9uLWNpcmNsZSdcbiAgICB9O1xuICAgIGlmICghKCduekljb25UeXBlJyBpbiBvcHRpb25zKSkge1xuICAgICAgb3B0aW9ucy5uekljb25UeXBlID0gaWNvbk1hcFtjb25maXJtVHlwZV07XG4gICAgfVxuICAgIGlmICghKCduekNhbmNlbFRleHQnIGluIG9wdGlvbnMpKSB7XG4gICAgICAvLyBSZW1vdmUgdGhlIENhbmNlbCBidXR0b24gaWYgdGhlIHVzZXIgbm90IHNwZWNpZnkgYSBDYW5jZWwgYnV0dG9uXG4gICAgICBvcHRpb25zLm56Q2FuY2VsVGV4dCA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbmZpcm0ob3B0aW9ucywgY29uZmlybVR5cGUpO1xuICB9XG59XG4iXX0=