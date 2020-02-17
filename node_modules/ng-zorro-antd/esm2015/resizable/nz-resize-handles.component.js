/**
 * @fileoverview added by tsickle
 * Generated from: nz-resize-handles.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
/** @type {?} */
export const DEFAULT_RESIZE_DIRECTION = [
    'bottomRight',
    'topRight',
    'bottomLeft',
    'topLeft',
    'bottom',
    'right',
    'top',
    'left'
];
export class NzResizeHandlesComponent {
    constructor() {
        this.nzDirections = DEFAULT_RESIZE_DIRECTION;
        this.directions = new Set(this.nzDirections);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzDirections) {
            this.directions = new Set(changes.nzDirections.currentValue);
        }
    }
}
NzResizeHandlesComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-resize-handles',
                exportAs: 'nzResizeHandles',
                template: "<nz-resize-handle *ngFor=\"let dir of directions\" [nzDirection]=\"dir\"></nz-resize-handle>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzResizeHandlesComponent.ctorParameters = () => [];
NzResizeHandlesComponent.propDecorators = {
    nzDirections: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzResizeHandlesComponent.prototype.nzDirections;
    /** @type {?} */
    NzResizeHandlesComponent.prototype.directions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXplLWhhbmRsZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9yZXNpemFibGUvIiwic291cmNlcyI6WyJuei1yZXNpemUtaGFuZGxlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDOztBQUlwRyxNQUFNLE9BQU8sd0JBQXdCLEdBQXdCO0lBQzNELGFBQWE7SUFDYixVQUFVO0lBQ1YsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1IsT0FBTztJQUNQLEtBQUs7SUFDTCxNQUFNO0NBQ1A7QUFRRCxNQUFNLE9BQU8sd0JBQXdCO0lBSW5DO1FBSFMsaUJBQVksR0FBd0Isd0JBQXdCLENBQUM7UUFJcEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM5RDtJQUNILENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsMEdBQWlEO2dCQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7Ozs7MkJBRUUsS0FBSzs7OztJQUFOLGdEQUFzRTs7SUFDdEUsOENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpSZXNpemVEaXJlY3Rpb24gfSBmcm9tICcuL256LXJlc2l6ZS1oYW5kbGUuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUkVTSVpFX0RJUkVDVElPTjogTnpSZXNpemVEaXJlY3Rpb25bXSA9IFtcbiAgJ2JvdHRvbVJpZ2h0JyxcbiAgJ3RvcFJpZ2h0JyxcbiAgJ2JvdHRvbUxlZnQnLFxuICAndG9wTGVmdCcsXG4gICdib3R0b20nLFxuICAncmlnaHQnLFxuICAndG9wJyxcbiAgJ2xlZnQnXG5dO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1yZXNpemUtaGFuZGxlcycsXG4gIGV4cG9ydEFzOiAnbnpSZXNpemVIYW5kbGVzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXJlc2l6ZS1oYW5kbGVzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTnpSZXNpemVIYW5kbGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbnpEaXJlY3Rpb25zOiBOelJlc2l6ZURpcmVjdGlvbltdID0gREVGQVVMVF9SRVNJWkVfRElSRUNUSU9OO1xuICBkaXJlY3Rpb25zOiBTZXQ8TnpSZXNpemVEaXJlY3Rpb24+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGlyZWN0aW9ucyA9IG5ldyBTZXQodGhpcy5uekRpcmVjdGlvbnMpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56RGlyZWN0aW9ucykge1xuICAgICAgdGhpcy5kaXJlY3Rpb25zID0gbmV3IFNldChjaGFuZ2VzLm56RGlyZWN0aW9ucy5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIl19