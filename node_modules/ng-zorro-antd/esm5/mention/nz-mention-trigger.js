/**
 * @fileoverview added by tsickle
 * Generated from: nz-mention-trigger.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { forwardRef, Directive, ElementRef, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzMentionService } from './nz-mention.service';
/** @type {?} */
export var NZ_MENTION_TRIGGER_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NzMentionTriggerDirective; })),
    multi: true
};
var NzMentionTriggerDirective = /** @class */ (function () {
    function NzMentionTriggerDirective(el, nzMentionService) {
        this.el = el;
        this.nzMentionService = nzMentionService;
        this.onFocusin = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onInput = new EventEmitter();
        this.onKeydown = new EventEmitter();
        this.onClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NzMentionTriggerDirective.prototype.completeEvents = /**
     * @return {?}
     */
    function () {
        this.onFocusin.complete();
        this.onBlur.complete();
        this.onInput.complete();
        this.onKeydown.complete();
        this.onClick.complete();
    };
    /**
     * @param {?=} caretPos
     * @return {?}
     */
    NzMentionTriggerDirective.prototype.focus = /**
     * @param {?=} caretPos
     * @return {?}
     */
    function (caretPos) {
        this.el.nativeElement.focus();
        this.el.nativeElement.setSelectionRange(caretPos, caretPos);
    };
    /**
     * @param {?} mention
     * @return {?}
     */
    NzMentionTriggerDirective.prototype.insertMention = /**
     * @param {?} mention
     * @return {?}
     */
    function (mention) {
        /** @type {?} */
        var value = this.el.nativeElement.value;
        /** @type {?} */
        var insertValue = mention.mention.trim() + ' ';
        /** @type {?} */
        var newValue = [
            value.slice(0, mention.startPos + 1),
            insertValue,
            value.slice(mention.endPos, value.length)
        ].join('');
        this.el.nativeElement.value = newValue;
        this.focus(mention.startPos + insertValue.length + 1);
        this.onChange(newValue);
        this.value = newValue;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzMentionTriggerDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        if (typeof value === 'string') {
            this.el.nativeElement.value = value;
        }
        else {
            this.el.nativeElement.value = '';
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzMentionTriggerDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzMentionTriggerDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    NzMentionTriggerDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.nzMentionService.registerTrigger(this);
    };
    /**
     * @return {?}
     */
    NzMentionTriggerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.completeEvents();
    };
    NzMentionTriggerDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'input[nzMentionTrigger], textarea[nzMentionTrigger]',
                    exportAs: 'nzMentionTrigger',
                    providers: [NZ_MENTION_TRIGGER_ACCESSOR],
                    host: {
                        autocomplete: 'off',
                        '(focusin)': 'onFocusin.emit()',
                        '(blur)': 'onBlur.emit()',
                        '(input)': 'onInput.emit($event)',
                        '(keydown)': 'onKeydown.emit($event)',
                        '(click)': 'onClick.emit($event)'
                    }
                },] }
    ];
    /** @nocollapse */
    NzMentionTriggerDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzMentionService }
    ]; };
    return NzMentionTriggerDirective;
}());
export { NzMentionTriggerDirective };
if (false) {
    /** @type {?} */
    NzMentionTriggerDirective.prototype.onChange;
    /** @type {?} */
    NzMentionTriggerDirective.prototype.onTouched;
    /** @type {?} */
    NzMentionTriggerDirective.prototype.onFocusin;
    /** @type {?} */
    NzMentionTriggerDirective.prototype.onBlur;
    /** @type {?} */
    NzMentionTriggerDirective.prototype.onInput;
    /** @type {?} */
    NzMentionTriggerDirective.prototype.onKeydown;
    /** @type {?} */
    NzMentionTriggerDirective.prototype.onClick;
    /** @type {?} */
    NzMentionTriggerDirective.prototype.value;
    /** @type {?} */
    NzMentionTriggerDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzMentionTriggerDirective.prototype.nzMentionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudGlvbi10cmlnZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZW50aW9uLyIsInNvdXJjZXMiOlsibnotbWVudGlvbi10cmlnZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCxVQUFVLEVBRVYsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBR2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUV4RCxNQUFNLEtBQU8sMkJBQTJCLEdBQXFCO0lBQzNELE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSx5QkFBeUIsRUFBekIsQ0FBeUIsRUFBQztJQUN4RCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBRUQ7SUF3QkUsbUNBQW1CLEVBQWMsRUFBVSxnQkFBa0M7UUFBMUQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFQcEUsY0FBUyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELFdBQU0sR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoRCxZQUFPLEdBQWdDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUQsY0FBUyxHQUFnQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVELFlBQU8sR0FBNkIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUdnQixDQUFDOzs7O0lBRWpGLGtEQUFjOzs7SUFBZDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hCLElB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QUFnRTs7SUFDaEUsMENBQWM7O0lBRUYsdUNBQXFCOzs7OztJQUFFLHFEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgRXhpc3RpbmdQcm92aWRlcixcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBNZW50aW9uIH0gZnJvbSAnLi9uei1tZW50aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek1lbnRpb25TZXJ2aWNlIH0gZnJvbSAnLi9uei1tZW50aW9uLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgTlpfTUVOVElPTl9UUklHR0VSX0FDQ0VTU09SOiBFeGlzdGluZ1Byb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZSksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdpbnB1dFtuek1lbnRpb25UcmlnZ2VyXSwgdGV4dGFyZWFbbnpNZW50aW9uVHJpZ2dlcl0nLFxuICBleHBvcnRBczogJ256TWVudGlvblRyaWdnZXInLFxuICBwcm92aWRlcnM6IFtOWl9NRU5USU9OX1RSSUdHRVJfQUNDRVNTT1JdLFxuICBob3N0OiB7XG4gICAgYXV0b2NvbXBsZXRlOiAnb2ZmJyxcbiAgICAnKGZvY3VzaW4pJzogJ29uRm9jdXNpbi5lbWl0KCknLFxuICAgICcoYmx1ciknOiAnb25CbHVyLmVtaXQoKScsXG4gICAgJyhpbnB1dCknOiAnb25JbnB1dC5lbWl0KCRldmVudCknLFxuICAgICcoa2V5ZG93biknOiAnb25LZXlkb3duLmVtaXQoJGV2ZW50KScsXG4gICAgJyhjbGljayknOiAnb25DbGljay5lbWl0KCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZDtcblxuICByZWFkb25seSBvbkZvY3VzaW46IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcmVhZG9ubHkgb25CbHVyOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHJlYWRvbmx5IG9uSW5wdXQ6IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcmVhZG9ubHkgb25LZXlkb3duOiBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHJlYWRvbmx5IG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgdmFsdWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgbnpNZW50aW9uU2VydmljZTogTnpNZW50aW9uU2VydmljZSkge31cblxuICBjb21wbGV0ZUV2ZW50cygpOiB2b2lkIHtcbiAgICB0aGlzLm9uRm9jdXNpbi5jb21wbGV0ZSgpO1xuICAgIHRoaXMub25CbHVyLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5vbklucHV0LmNvbXBsZXRlKCk7XG4gICAgdGhpcy5vbktleWRvd24uY29tcGxldGUoKTtcbiAgICB0aGlzLm9uQ2xpY2suY29tcGxldGUoKTtcbiAgfVxuXG4gIGZvY3VzKGNhcmV0UG9zPzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKGNhcmV0UG9zLCBjYXJldFBvcyk7XG4gIH1cblxuICBpbnNlcnRNZW50aW9uKG1lbnRpb246IE1lbnRpb24pOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgIGNvbnN0IGluc2VydFZhbHVlID0gbWVudGlvbi5tZW50aW9uLnRyaW0oKSArICcgJztcbiAgICBjb25zdCBuZXdWYWx1ZSA9IFtcbiAgICAgIHZhbHVlLnNsaWNlKDAsIG1lbnRpb24uc3RhcnRQb3MgKyAxKSxcbiAgICAgIGluc2VydFZhbHVlLFxuICAgICAgdmFsdWUuc2xpY2UobWVudGlvbi5lbmRQb3MsIHZhbHVlLmxlbmd0aClcbiAgICBdLmpvaW4oJycpO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIHRoaXMuZm9jdXMobWVudGlvbi5zdGFydFBvcyArIGluc2VydFZhbHVlLmxlbmd0aCArIDEpO1xuICAgIHRoaXMub25DaGFuZ2UobmV3VmFsdWUpO1xuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMubnpNZW50aW9uU2VydmljZS5yZWdpc3RlclRyaWdnZXIodGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbXBsZXRlRXZlbnRzKCk7XG4gIH1cbn1cbiJdfQ==