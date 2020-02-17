/**
 * @fileoverview added by tsickle
 * Generated from: nz-checkbox-wrapper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, Renderer2, ViewEncapsulation } from '@angular/core';
var NzCheckboxWrapperComponent = /** @class */ (function () {
    function NzCheckboxWrapperComponent(renderer, elementRef) {
        this.nzOnChange = new EventEmitter();
        this.checkboxList = [];
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NzCheckboxWrapperComponent.prototype.addCheckbox = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checkboxList.push(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCheckboxWrapperComponent.prototype.removeCheckbox = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
    };
    /**
     * @return {?}
     */
    NzCheckboxWrapperComponent.prototype.outputValue = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var checkedList = this.checkboxList.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.nzChecked; }));
        return checkedList.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.nzValue; }));
    };
    /**
     * @return {?}
     */
    NzCheckboxWrapperComponent.prototype.onChange = /**
     * @return {?}
     */
    function () {
        this.nzOnChange.emit(this.outputValue());
    };
    NzCheckboxWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-checkbox-wrapper',
                    exportAs: 'nzCheckboxWrapper',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    NzCheckboxWrapperComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzCheckboxWrapperComponent.propDecorators = {
        nzOnChange: [{ type: Output }]
    };
    return NzCheckboxWrapperComponent;
}());
export { NzCheckboxWrapperComponent };
if (false) {
    /** @type {?} */
    NzCheckboxWrapperComponent.prototype.nzOnChange;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxWrapperComponent.prototype.checkboxList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NoZWNrYm94LyIsInNvdXJjZXMiOlsibnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUl2QjtJQTZCRSxvQ0FBWSxRQUFtQixFQUFFLFVBQXNCO1FBcEJwQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztRQUNyRCxpQkFBWSxHQUEwQixFQUFFLENBQUM7UUFvQi9DLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7O0lBbkJELGdEQUFXOzs7O0lBQVgsVUFBWSxLQUEwQjtRQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELG1EQUFjOzs7O0lBQWQsVUFBZSxLQUEwQjtRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7O0lBRUQsZ0RBQVc7OztJQUFYOztZQUNRLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxTQUFTLEVBQWQsQ0FBYyxFQUFDO1FBQ3BFLE9BQU8sV0FBVyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosQ0FBWSxFQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELDZDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxxQ0FBbUQ7aUJBQ3BEOzs7O2dCQWJDLFNBQVM7Z0JBSFQsVUFBVTs7OzZCQWtCVCxNQUFNOztJQXVCVCxpQ0FBQztDQUFBLEFBaENELElBZ0NDO1NBeEJZLDBCQUEwQjs7O0lBQ3JDLGdEQUE2RDs7Ozs7SUFDN0Qsa0RBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekNoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9uei1jaGVja2JveC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1jaGVja2JveC13cmFwcGVyJyxcbiAgZXhwb3J0QXM6ICduekNoZWNrYm94V3JhcHBlcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56Q2hlY2tib3hXcmFwcGVyQ29tcG9uZW50IHtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuICBwcml2YXRlIGNoZWNrYm94TGlzdDogTnpDaGVja2JveENvbXBvbmVudFtdID0gW107XG5cbiAgYWRkQ2hlY2tib3godmFsdWU6IE56Q2hlY2tib3hDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrYm94TGlzdC5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIHJlbW92ZUNoZWNrYm94KHZhbHVlOiBOekNoZWNrYm94Q29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2JveExpc3Quc3BsaWNlKHRoaXMuY2hlY2tib3hMaXN0LmluZGV4T2YodmFsdWUpLCAxKTtcbiAgfVxuXG4gIG91dHB1dFZhbHVlKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBjaGVja2VkTGlzdCA9IHRoaXMuY2hlY2tib3hMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0ubnpDaGVja2VkKTtcbiAgICByZXR1cm4gY2hlY2tlZExpc3QubWFwKGl0ZW0gPT4gaXRlbS5uelZhbHVlKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMubnpPbkNoYW5nZS5lbWl0KHRoaXMub3V0cHV0VmFsdWUoKSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihyZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNoZWNrYm94LWdyb3VwJyk7XG4gIH1cbn1cbiJdfQ==