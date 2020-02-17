/**
 * @fileoverview added by tsickle
 * Generated from: nz-tooltip.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ComponentFactoryResolver, Directive, ElementRef, Host, Input, Optional, Renderer2, ViewContainerRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponentLegacy } from './base/nz-tooltip-base-legacy.component';
import { NzTooltipBaseDirective } from './base/nz-tooltip-base.directive';
import { NzToolTipComponent } from './nz-tooltip.component';
export class NzTooltipDirective extends NzTooltipBaseDirective {
    /**
     * @param {?} elementRef
     * @param {?} hostView
     * @param {?} resolver
     * @param {?} renderer
     * @param {?=} _tooltip
     * @param {?=} noAnimation
     */
    constructor(elementRef, hostView, resolver, renderer, _tooltip, noAnimation) {
        super(elementRef, hostView, resolver, renderer, _tooltip, noAnimation);
        this.componentFactory = this.resolver.resolveComponentFactory(NzToolTipComponent);
    }
}
NzTooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-tooltip]',
                exportAs: 'nzTooltip',
                host: {
                    '[class.ant-tooltip-open]': 'isTooltipComponentVisible'
                }
            },] }
];
/** @nocollapse */
NzTooltipDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: NzTooltipBaseComponentLegacy, decorators: [{ type: Optional }] },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzTooltipDirective.propDecorators = {
    specificTitle: [{ type: Input, args: ['nzTooltipTitle',] }],
    directiveNameTitle: [{ type: Input, args: ['nz-tooltip',] }],
    specificTrigger: [{ type: Input, args: ['nzTooltipTrigger',] }],
    specificPlacement: [{ type: Input, args: ['nzTooltipPlacement',] }]
};
if (false) {
    /**
     * The title that should have highest priority.
     * @type {?}
     */
    NzTooltipDirective.prototype.specificTitle;
    /**
     * Use the directive's name as the title that have priority in the second place.
     * @type {?}
     */
    NzTooltipDirective.prototype.directiveNameTitle;
    /** @type {?} */
    NzTooltipDirective.prototype.specificTrigger;
    /** @type {?} */
    NzTooltipDirective.prototype.specificPlacement;
    /** @type {?} */
    NzTooltipDirective.prototype.componentFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Rvb2x0aXAvIiwic291cmNlcyI6WyJuei10b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBRUwsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsc0JBQXNCLEVBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN2RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVU1RCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsc0JBQXNCOzs7Ozs7Ozs7SUFnQjVELFlBQ0UsVUFBc0IsRUFDdEIsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsUUFBbUIsRUFDUCxRQUF1QyxFQUMvQixXQUFvQztRQUV4RCxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQVZ6RSxxQkFBZ0IsR0FBeUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBV25ILENBQUM7OztZQWhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixJQUFJLEVBQUU7b0JBQ0osMEJBQTBCLEVBQUUsMkJBQTJCO2lCQUN4RDthQUNGOzs7O1lBckJDLFVBQVU7WUFLVixnQkFBZ0I7WUFQaEIsd0JBQXdCO1lBTXhCLFNBQVM7WUFNRiw0QkFBNEIsdUJBaUNoQyxRQUFRO1lBbkNKLHNCQUFzQix1QkFvQzFCLElBQUksWUFBSSxRQUFROzs7NEJBbEJsQixLQUFLLFNBQUMsZ0JBQWdCO2lDQUt0QixLQUFLLFNBQUMsWUFBWTs4QkFFbEIsS0FBSyxTQUFDLGtCQUFrQjtnQ0FDeEIsS0FBSyxTQUFDLG9CQUFvQjs7Ozs7OztJQVIzQiwyQ0FBaUQ7Ozs7O0lBS2pELGdEQUF5RDs7SUFFekQsNkNBQTZEOztJQUM3RCwrQ0FBdUQ7O0lBRXZELDhDQUFtSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUsIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSB9IGZyb20gJy4vYmFzZS9uei10b29sdGlwLWJhc2UtbGVnYWN5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlIH0gZnJvbSAnLi9iYXNlL256LXRvb2x0aXAtYmFzZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpUb29sVGlwQ29tcG9uZW50IH0gZnJvbSAnLi9uei10b29sdGlwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelRvb2x0aXBUcmlnZ2VyIH0gZnJvbSAnLi9uei10b29sdGlwLmRlZmluaXRpb25zJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LXRvb2x0aXBdJyxcbiAgZXhwb3J0QXM6ICduelRvb2x0aXAnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdG9vbHRpcC1vcGVuXSc6ICdpc1Rvb2x0aXBDb21wb25lbnRWaXNpYmxlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VG9vbHRpcERpcmVjdGl2ZSBleHRlbmRzIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUge1xuICAvKipcbiAgICogVGhlIHRpdGxlIHRoYXQgc2hvdWxkIGhhdmUgaGlnaGVzdCBwcmlvcml0eS5cbiAgICovXG4gIEBJbnB1dCgnbnpUb29sdGlwVGl0bGUnKSBzcGVjaWZpY1RpdGxlOiBOelRTVHlwZTtcblxuICAvKipcbiAgICogVXNlIHRoZSBkaXJlY3RpdmUncyBuYW1lIGFzIHRoZSB0aXRsZSB0aGF0IGhhdmUgcHJpb3JpdHkgaW4gdGhlIHNlY29uZCBwbGFjZS5cbiAgICovXG4gIEBJbnB1dCgnbnotdG9vbHRpcCcpIGRpcmVjdGl2ZU5hbWVUaXRsZTogTnpUU1R5cGUgfCBudWxsO1xuXG4gIEBJbnB1dCgnbnpUb29sdGlwVHJpZ2dlcicpIHNwZWNpZmljVHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlcjtcbiAgQElucHV0KCduelRvb2x0aXBQbGFjZW1lbnQnKSBzcGVjaWZpY1BsYWNlbWVudDogc3RyaW5nO1xuXG4gIGNvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8TnpUb29sVGlwQ29tcG9uZW50PiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoTnpUb29sVGlwQ29tcG9uZW50KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBfdG9vbHRpcD86IE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3ksXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgaG9zdFZpZXcsIHJlc29sdmVyLCByZW5kZXJlciwgX3Rvb2x0aXAsIG5vQW5pbWF0aW9uKTtcbiAgfVxufVxuIl19