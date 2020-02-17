/**
 * @fileoverview added by tsickle
 * Generated from: tree/nz-tree-base.definitions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @record
 */
export function NzFormatEmitEvent() { }
if (false) {
    /** @type {?} */
    NzFormatEmitEvent.prototype.eventName;
    /** @type {?|undefined} */
    NzFormatEmitEvent.prototype.node;
    /** @type {?|undefined} */
    NzFormatEmitEvent.prototype.event;
    /** @type {?|undefined} */
    NzFormatEmitEvent.prototype.dragNode;
    /** @type {?|undefined} */
    NzFormatEmitEvent.prototype.selectedKeys;
    /** @type {?|undefined} */
    NzFormatEmitEvent.prototype.checkedKeys;
    /** @type {?|undefined} */
    NzFormatEmitEvent.prototype.matchedKeys;
    /** @type {?|undefined} */
    NzFormatEmitEvent.prototype.nodes;
    /** @type {?|undefined} */
    NzFormatEmitEvent.prototype.keys;
}
/**
 * @record
 */
export function NzFormatBeforeDropEvent() { }
if (false) {
    /** @type {?} */
    NzFormatBeforeDropEvent.prototype.dragNode;
    /** @type {?} */
    NzFormatBeforeDropEvent.prototype.node;
    /** @type {?} */
    NzFormatBeforeDropEvent.prototype.pos;
}
/**
 * @record
 */
export function NzTreeNodeBaseComponent() { }
if (false) {
    /**
     * @return {?}
     */
    NzTreeNodeBaseComponent.prototype.setClassMap = function () { };
    /**
     * @return {?}
     */
    NzTreeNodeBaseComponent.prototype.markForCheck = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLmRlZmluaXRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidHJlZS9uei10cmVlLWJhc2UuZGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsdUNBVUM7OztJQVRDLHNDQUFrQjs7SUFDbEIsaUNBQXlCOztJQUN6QixrQ0FBc0M7O0lBQ3RDLHFDQUFzQjs7SUFDdEIseUNBQTRCOztJQUM1Qix3Q0FBMkI7O0lBQzNCLHdDQUEyQjs7SUFDM0Isa0NBQXFCOztJQUNyQixpQ0FBZ0I7Ozs7O0FBR2xCLDZDQUlDOzs7SUFIQywyQ0FBcUI7O0lBQ3JCLHVDQUFpQjs7SUFDakIsc0NBQVk7Ozs7O0FBR2QsNkNBR0M7Ozs7O0lBRkMsZ0VBQW9COzs7O0lBQ3BCLGlFQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBOelRyZWVOb2RlIH0gZnJvbSAnLi9uei10cmVlLWJhc2Utbm9kZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnpGb3JtYXRFbWl0RXZlbnQge1xuICBldmVudE5hbWU6IHN0cmluZztcbiAgbm9kZT86IE56VHJlZU5vZGUgfCBudWxsO1xuICBldmVudD86IE1vdXNlRXZlbnQgfCBEcmFnRXZlbnQgfCBudWxsO1xuICBkcmFnTm9kZT86IE56VHJlZU5vZGU7XG4gIHNlbGVjdGVkS2V5cz86IE56VHJlZU5vZGVbXTtcbiAgY2hlY2tlZEtleXM/OiBOelRyZWVOb2RlW107XG4gIG1hdGNoZWRLZXlzPzogTnpUcmVlTm9kZVtdO1xuICBub2Rlcz86IE56VHJlZU5vZGVbXTtcbiAga2V5cz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE56Rm9ybWF0QmVmb3JlRHJvcEV2ZW50IHtcbiAgZHJhZ05vZGU6IE56VHJlZU5vZGU7XG4gIG5vZGU6IE56VHJlZU5vZGU7XG4gIHBvczogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE56VHJlZU5vZGVCYXNlQ29tcG9uZW50IHtcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZDtcbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQ7XG59XG4iXX0=