/**
 * @fileoverview added by tsickle
 * Generated from: nz-embed-empty.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ComponentPortal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, Input, TemplateRef, Type, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { simpleEmptyImage, NZ_EMPTY_COMPONENT_NAME } from './nz-empty-config';
import { NzEmptyService } from './nz-empty.service';
var NzEmbedEmptyComponent = /** @class */ (function () {
    function NzEmbedEmptyComponent(emptyService, sanitizer, viewContainerRef, cdr, injector) {
        this.emptyService = emptyService;
        this.sanitizer = sanitizer;
        this.viewContainerRef = viewContainerRef;
        this.cdr = cdr;
        this.injector = injector;
        this.contentType = 'string';
        // tslint:disable-line:no-any
        this.defaultSvg = this.sanitizer.bypassSecurityTrustResourceUrl(simpleEmptyImage);
        this.size = '';
        this.subs_ = new Subscription();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NzEmbedEmptyComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzComponentName) {
            this.size = this.getEmptySize(changes.nzComponentName.currentValue);
        }
        if (changes.specificContent && !changes.specificContent.isFirstChange()) {
            this.content = changes.specificContent.currentValue;
            this.renderEmpty();
        }
    };
    /**
     * @return {?}
     */
    NzEmbedEmptyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var userContent_ = this.emptyService.userDefaultContent$.subscribe((/**
         * @param {?} content
         * @return {?}
         */
        function (content) {
            _this.content = _this.specificContent || content;
            _this.renderEmpty();
        }));
        this.subs_.add(userContent_);
    };
    /**
     * @return {?}
     */
    NzEmbedEmptyComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subs_.unsubscribe();
    };
    /**
     * @private
     * @param {?} componentName
     * @return {?}
     */
    NzEmbedEmptyComponent.prototype.getEmptySize = /**
     * @private
     * @param {?} componentName
     * @return {?}
     */
    function (componentName) {
        switch (componentName) {
            case 'table':
            case 'list':
                return 'normal';
            case 'select':
            case 'tree-select':
            case 'cascader':
            case 'transfer':
                return 'small';
            default:
                return '';
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzEmbedEmptyComponent.prototype.renderEmpty = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var content = this.content;
        if (typeof content === 'string') {
            this.contentType = 'string';
        }
        else if (content instanceof TemplateRef) {
            /** @type {?} */
            var context = (/** @type {?} */ ({ $implicit: this.nzComponentName }));
            this.contentType = 'template';
            this.contentPortal = new TemplatePortal(content, this.viewContainerRef, context);
        }
        else if (content instanceof Type) {
            /** @type {?} */
            var context = new WeakMap([[NZ_EMPTY_COMPONENT_NAME, this.nzComponentName]]);
            /** @type {?} */
            var injector = new PortalInjector(this.injector, context);
            this.contentType = 'component';
            this.contentPortal = new ComponentPortal(content, this.viewContainerRef, injector);
        }
        else {
            this.contentType = 'string';
            this.contentPortal = undefined;
        }
        this.cdr.markForCheck();
    };
    NzEmbedEmptyComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-embed-empty',
                    exportAs: 'nzEmbedEmpty',
                    template: "<ng-container *ngIf=\"!content && specificContent !== null\" [ngSwitch]=\"size\">\n  <nz-empty *ngSwitchCase=\"'normal'\" class=\"ant-empty-normal\" [nzNotFoundImage]=\"defaultSvg\"></nz-empty>\n  <nz-empty *ngSwitchCase=\"'small'\" class=\"ant-empty-small\" [nzNotFoundImage]=\"defaultSvg\"></nz-empty>\n  <nz-empty *ngSwitchDefault></nz-empty>\n</ng-container>\n<ng-container *ngIf=\"content\">\n  <ng-template *ngIf=\"contentType !== 'string'\" [cdkPortalOutlet]=\"contentPortal\"></ng-template>\n  <ng-container *ngIf=\"contentType === 'string'\">\n    {{ content }}\n  </ng-container>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    NzEmbedEmptyComponent.ctorParameters = function () { return [
        { type: NzEmptyService },
        { type: DomSanitizer },
        { type: ViewContainerRef },
        { type: ChangeDetectorRef },
        { type: Injector }
    ]; };
    NzEmbedEmptyComponent.propDecorators = {
        nzComponentName: [{ type: Input }],
        specificContent: [{ type: Input }]
    };
    return NzEmbedEmptyComponent;
}());
export { NzEmbedEmptyComponent };
if (false) {
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.nzComponentName;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.specificContent;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.content;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.contentType;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.contentPortal;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.defaultSvg;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.size;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.subs_;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.emptyService;
    /**
     * @type {?}
     * @private
     */
    NzEmbedEmptyComponent.prototype.sanitizer;
    /**
     * @type {?}
     * @private
     */
    NzEmbedEmptyComponent.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    NzEmbedEmptyComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzEmbedEmptyComponent.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZW1iZWQtZW1wdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9lbXB0eS8iLCJzb3VyY2VzIjpbIm56LWVtYmVkLWVtcHR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsZUFBZSxFQUFVLGNBQWMsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsUUFBUSxFQUNSLEtBQUssRUFLTCxXQUFXLEVBQ1gsSUFBSSxFQUNKLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFcEMsT0FBTyxFQUFFLGdCQUFnQixFQUFxQyx1QkFBdUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRDtJQWtCRSwrQkFDUyxZQUE0QixFQUMzQixTQUF1QixFQUN2QixnQkFBa0MsRUFDbEMsR0FBc0IsRUFDdEIsUUFBa0I7UUFKbkIsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFDdkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBWDVCLGdCQUFXLEdBQXdDLFFBQVEsQ0FBQzs7UUFFNUQsZUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM3RSxTQUFJLEdBQWdCLEVBQUUsQ0FBQztRQUN2QixVQUFLLEdBQUcsSUFB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QUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLDRtQkFBOEM7aUJBQy9DOzs7O2dCQVJRLGNBQWM7Z0JBSmQsWUFBWTtnQkFIbkIsZ0JBQWdCO2dCQVZoQixpQkFBaUI7Z0JBRWpCLFFBQVE7OztrQ0F5QlAsS0FBSztrQ0FDTCxLQUFLOztJQTZFUiw0QkFBQztDQUFBLEFBdEZELElBc0ZDO1NBL0VZLHFCQUFxQjs7O0lBQ2hDLGdEQUFpQzs7SUFDakMsZ0RBQStDOztJQUUvQyx3Q0FBK0I7O0lBQy9CLDRDQUE0RDs7SUFDNUQsOENBQTRCOztJQUM1QiwyQ0FBNkU7O0lBQzdFLHFDQUF1Qjs7SUFDdkIsc0NBQTJCOztJQUd6Qiw2Q0FBbUM7Ozs7O0lBQ25DLDBDQUErQjs7Ozs7SUFDL0IsaURBQTBDOzs7OztJQUMxQyxvQ0FBOEI7Ozs7O0lBQzlCLHlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwsIFBvcnRhbCwgUG9ydGFsSW5qZWN0b3IsIFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVHlwZSxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBzaW1wbGVFbXB0eUltYWdlLCBOekVtcHR5Q3VzdG9tQ29udGVudCwgTnpFbXB0eVNpemUsIE5aX0VNUFRZX0NPTVBPTkVOVF9OQU1FIH0gZnJvbSAnLi9uei1lbXB0eS1jb25maWcnO1xuaW1wb3J0IHsgTnpFbXB0eVNlcnZpY2UgfSBmcm9tICcuL256LWVtcHR5LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotZW1iZWQtZW1wdHknLFxuICBleHBvcnRBczogJ256RW1iZWRFbXB0eScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1lbWJlZC1lbXB0eS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpFbWJlZEVtcHR5Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIG56Q29tcG9uZW50TmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBzcGVjaWZpY0NvbnRlbnQ6IE56RW1wdHlDdXN0b21Db250ZW50O1xuXG4gIGNvbnRlbnQ/OiBOekVtcHR5Q3VzdG9tQ29udGVudDtcbiAgY29udGVudFR5cGU6ICdjb21wb25lbnQnIHwgJ3RlbXBsYXRlJyB8ICdzdHJpbmcnID0gJ3N0cmluZyc7XG4gIGNvbnRlbnRQb3J0YWw/OiBQb3J0YWw8YW55PjsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgZGVmYXVsdFN2ZyA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChzaW1wbGVFbXB0eUltYWdlKTtcbiAgc2l6ZTogTnpFbXB0eVNpemUgPSAnJztcbiAgc3Vic18gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVtcHR5U2VydmljZTogTnpFbXB0eVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpDb21wb25lbnROYW1lKSB7XG4gICAgICB0aGlzLnNpemUgPSB0aGlzLmdldEVtcHR5U2l6ZShjaGFuZ2VzLm56Q29tcG9uZW50TmFtZS5jdXJyZW50VmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLnNwZWNpZmljQ29udGVudCAmJiAhY2hhbmdlcy5zcGVjaWZpY0NvbnRlbnQuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLmNvbnRlbnQgPSBjaGFuZ2VzLnNwZWNpZmljQ29udGVudC5jdXJyZW50VmFsdWU7XG4gICAgICB0aGlzLnJlbmRlckVtcHR5KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgdXNlckNvbnRlbnRfID0gdGhpcy5lbXB0eVNlcnZpY2UudXNlckRlZmF1bHRDb250ZW50JC5zdWJzY3JpYmUoY29udGVudCA9PiB7XG4gICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLnNwZWNpZmljQ29udGVudCB8fCBjb250ZW50O1xuICAgICAgdGhpcy5yZW5kZXJFbXB0eSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zdWJzXy5hZGQodXNlckNvbnRlbnRfKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic18udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RW1wdHlTaXplKGNvbXBvbmVudE5hbWU6IHN0cmluZyk6IE56RW1wdHlTaXplIHtcbiAgICBzd2l0Y2ggKGNvbXBvbmVudE5hbWUpIHtcbiAgICAgIGNhc2UgJ3RhYmxlJzpcbiAgICAgIGNhc2UgJ2xpc3QnOlxuICAgICAgICByZXR1cm4gJ25vcm1hbCc7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgY2FzZSAndHJlZS1zZWxlY3QnOlxuICAgICAgY2FzZSAnY2FzY2FkZXInOlxuICAgICAgY2FzZSAndHJhbnNmZXInOlxuICAgICAgICByZXR1cm4gJ3NtYWxsJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckVtcHR5KCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQ7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmNvbnRlbnRUeXBlID0gJ3N0cmluZyc7XG4gICAgfSBlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB7ICRpbXBsaWNpdDogdGhpcy5uekNvbXBvbmVudE5hbWUgfSBhcyBhbnk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgICB0aGlzLmNvbnRlbnRUeXBlID0gJ3RlbXBsYXRlJztcbiAgICAgIHRoaXMuY29udGVudFBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbChjb250ZW50LCB0aGlzLnZpZXdDb250YWluZXJSZWYsIGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIFR5cGUpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgV2Vha01hcChbW05aX0VNUFRZX0NPTVBPTkVOVF9OQU1FLCB0aGlzLm56Q29tcG9uZW50TmFtZV1dKTtcbiAgICAgIGNvbnN0IGluamVjdG9yID0gbmV3IFBvcnRhbEluamVjdG9yKHRoaXMuaW5qZWN0b3IsIGNvbnRleHQpO1xuICAgICAgdGhpcy5jb250ZW50VHlwZSA9ICdjb21wb25lbnQnO1xuICAgICAgdGhpcy5jb250ZW50UG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChjb250ZW50LCB0aGlzLnZpZXdDb250YWluZXJSZWYsIGluamVjdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250ZW50VHlwZSA9ICdzdHJpbmcnO1xuICAgICAgdGhpcy5jb250ZW50UG9ydGFsID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=