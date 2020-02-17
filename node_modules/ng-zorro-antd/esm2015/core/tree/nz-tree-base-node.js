/**
 * @fileoverview added by tsickle
 * Generated from: tree/nz-tree-base-node.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { warnDeprecation } from '../logger/logger';
/**
 * @record
 */
export function NzTreeNodeOptions() { }
if (false) {
    /** @type {?} */
    NzTreeNodeOptions.prototype.title;
    /** @type {?} */
    NzTreeNodeOptions.prototype.key;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.icon;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.isLeaf;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.checked;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.selected;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.selectable;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.disabled;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.disableCheckbox;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.expanded;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.children;
    /* Skipping unhandled member: [key: string]: any;*/
}
export class NzTreeNode {
    /**
     * @param {?} option
     * @param {?=} parent
     * @param {?=} service
     */
    constructor(option, parent = null, service = null) {
        this.level = 0;
        if (option instanceof NzTreeNode) {
            return option;
        }
        this.service = service || null;
        this.origin = option;
        this.key = option.key;
        this.parentNode = parent;
        this._title = option.title || '---';
        this._icon = option.icon || '';
        this._isLeaf = option.isLeaf || false;
        this._children = [];
        // option params
        this._isChecked = option.checked || false;
        this._isSelectable = option.disabled || option.selectable !== false;
        this._isDisabled = option.disabled || false;
        this._isDisableCheckbox = option.disableCheckbox || false;
        this._isExpanded = option.isLeaf ? false : option.expanded || false;
        this._isHalfChecked = false;
        this._isSelected = (!option.disabled && option.selected) || false;
        this._isLoading = false;
        this.isMatched = false;
        /**
         * parent's checked status will affect children while initializing
         */
        if (parent) {
            this.level = parent.level + 1;
        }
        else {
            this.level = 0;
        }
        if (typeof option.children !== 'undefined' && option.children !== null) {
            option.children.forEach((/**
             * @param {?} nodeOptions
             * @return {?}
             */
            nodeOptions => {
                /** @type {?} */
                const s = this.treeService;
                if (s &&
                    !s.isCheckStrictly &&
                    option.checked &&
                    !option.disabled &&
                    !nodeOptions.disabled &&
                    !nodeOptions.disableCheckbox) {
                    nodeOptions.checked = option.checked;
                }
                this._children.push(new NzTreeNode(nodeOptions, this));
            }));
        }
    }
    /**
     * @return {?}
     */
    get treeService() {
        return this.service || (this.parentNode && this.parentNode.treeService);
    }
    /**
     * auto generate
     * get
     * set
     * @return {?}
     */
    get title() {
        return this._title;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set title(value) {
        this._title = value;
        this.update();
    }
    /**
     * @return {?}
     */
    get icon() {
        return this._icon;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set icon(value) {
        this._icon = value;
        this.update();
    }
    /**
     * @return {?}
     */
    get children() {
        return this._children;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set children(value) {
        this._children = value;
        this.update();
    }
    /**
     * @return {?}
     */
    get isLeaf() {
        return this._isLeaf;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isLeaf(value) {
        this._isLeaf = value;
        this.update();
    }
    /**
     * @return {?}
     */
    get isChecked() {
        return this._isChecked;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isChecked(value) {
        this._isChecked = value;
        this._isAllChecked = value;
        this.origin.checked = value;
        this.afterValueChange('isChecked');
    }
    /**
     * @return {?}
     */
    get isAllChecked() {
        return this._isAllChecked;
    }
    /**
     * @deprecated Maybe removed in next major version, use `isChecked` instead.
     * @param {?} value
     * @return {?}
     */
    set isAllChecked(value) {
        warnDeprecation(`'isAllChecked' is going to be removed in 9.0.0. Please use 'isChecked' instead.`);
        this._isAllChecked = value;
    }
    /**
     * @return {?}
     */
    get isHalfChecked() {
        return this._isHalfChecked;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isHalfChecked(value) {
        this._isHalfChecked = value;
        this.afterValueChange('isHalfChecked');
    }
    /**
     * @return {?}
     */
    get isSelectable() {
        return this._isSelectable;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isSelectable(value) {
        this._isSelectable = value;
        this.update();
    }
    /**
     * @return {?}
     */
    get isDisabled() {
        return this._isDisabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isDisabled(value) {
        this._isDisabled = value;
        this.update();
    }
    /**
     * @return {?}
     */
    get isDisableCheckbox() {
        return this._isDisableCheckbox;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isDisableCheckbox(value) {
        this._isDisableCheckbox = value;
        this.update();
    }
    /**
     * @return {?}
     */
    get isExpanded() {
        return this._isExpanded;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isExpanded(value) {
        this._isExpanded = value;
        this.origin.expanded = value;
        this.afterValueChange('isExpanded');
    }
    /**
     * @return {?}
     */
    get isSelected() {
        return this._isSelected;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isSelected(value) {
        this._isSelected = value;
        this.origin.selected = value;
        this.afterValueChange('isSelected');
    }
    /**
     * @return {?}
     */
    get isLoading() {
        return this._isLoading;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isLoading(value) {
        this._isLoading = value;
        this.update();
    }
    /**
     * @param {?=} checked
     * @param {?=} halfChecked
     * @return {?}
     */
    setSyncChecked(checked = false, halfChecked = false) {
        this.setChecked(checked, halfChecked);
        if (this.treeService && !this.treeService.isCheckStrictly) {
            this.treeService.conduct(this);
        }
    }
    /**
     * @deprecated Maybe removed in next major version, use `isChecked` instead.
     * @param {?=} checked
     * @param {?=} halfChecked
     * @return {?}
     */
    setChecked(checked = false, halfChecked = false) {
        warnDeprecation(`'setChecked' is going to be removed in 9.0.0. Please use 'isChecked' instead.`);
        this.origin.checked = checked;
        this.isChecked = checked;
        this.isAllChecked = checked;
        this.isHalfChecked = halfChecked;
    }
    /**
     * @deprecated Maybe removed in next major version, use `isExpanded` instead.
     * @param {?} value
     * @return {?}
     */
    setExpanded(value) {
        warnDeprecation(`'setExpanded' is going to be removed in 9.0.0. Please use 'isExpanded' instead.`);
        this.isExpanded = value;
    }
    /**
     * @deprecated Maybe removed in next major version, use `isSelected` instead.
     * @param {?} value
     * @return {?}
     */
    setSelected(value) {
        warnDeprecation(`'setSelected' is going to be removed in 9.0.0. Please use 'isExpanded' isSelected.`);
        if (this.isDisabled) {
            return;
        }
        this.isSelected = value;
    }
    /**
     * @return {?}
     */
    getParentNode() {
        return this.parentNode;
    }
    /**
     * @return {?}
     */
    getChildren() {
        return this.children;
    }
    /**
     * Support appending child nodes by position. Leaf node cannot be appended.
     * @param {?} children
     * @param {?=} childPos
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    addChildren(children, childPos = -1) {
        if (!this.isLeaf) {
            children.forEach((/**
             * @param {?} node
             * @return {?}
             */
            node => {
                /** @type {?} */
                const refreshLevel = (/**
                 * @param {?} n
                 * @return {?}
                 */
                (n) => {
                    n.getChildren().forEach((/**
                     * @param {?} c
                     * @return {?}
                     */
                    c => {
                        c.level = (/** @type {?} */ (c.getParentNode())).level + 1;
                        // flush origin
                        c.origin.level = c.level;
                        refreshLevel(c);
                    }));
                });
                /** @type {?} */
                let child = node;
                if (child instanceof NzTreeNode) {
                    child.parentNode = this;
                }
                else {
                    child = new NzTreeNode(node, this);
                }
                child.level = this.level + 1;
                child.origin.level = child.level;
                refreshLevel(child);
                try {
                    childPos === -1 ? this.children.push(child) : this.children.splice(childPos, 0, child);
                    // flush origin
                }
                catch (e) { }
            }));
            this.origin.children = this.getChildren().map((/**
             * @param {?} v
             * @return {?}
             */
            v => v.origin));
            // remove loading state
            this.isLoading = false;
        }
    }
    /**
     * @return {?}
     */
    clearChildren() {
        // refresh checked state
        this.afterValueChange('clearChildren');
        this.children = [];
        this.origin.children = [];
    }
    /**
     * @return {?}
     */
    remove() {
        /** @type {?} */
        const parentNode = this.getParentNode();
        if (parentNode) {
            parentNode.children = parentNode.getChildren().filter((/**
             * @param {?} v
             * @return {?}
             */
            v => v.key !== this.key));
            parentNode.origin.children = (/** @type {?} */ (parentNode.origin.children)).filter((/**
             * @param {?} v
             * @return {?}
             */
            v => v.key !== this.key));
            this.afterValueChange('remove');
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    afterValueChange(key) {
        if (this.treeService) {
            switch (key) {
                case 'isChecked':
                    this.treeService.setCheckedNodeList(this);
                    break;
                case 'isHalfChecked':
                    this.treeService.setHalfCheckedNodeList(this);
                    break;
                case 'isExpanded':
                    this.treeService.setExpandedNodeList(this);
                    break;
                case 'isSelected':
                    this.treeService.setNodeActive(this);
                    break;
                case 'clearChildren':
                    this.treeService.afterRemove(this.getChildren());
                    break;
                case 'remove':
                    this.treeService.afterRemove([this]);
                    break;
            }
        }
        this.update();
    }
    /**
     * @return {?}
     */
    update() {
        if (this.component) {
            this.component.setClassMap();
            this.component.markForCheck();
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._title;
    /** @type {?} */
    NzTreeNode.prototype.key;
    /** @type {?} */
    NzTreeNode.prototype.level;
    /** @type {?} */
    NzTreeNode.prototype.origin;
    /** @type {?} */
    NzTreeNode.prototype.parentNode;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._icon;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._children;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isLeaf;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isChecked;
    /**
     * @deprecated Maybe removed in next major version, use isChecked instead
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isAllChecked;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isSelectable;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isDisabled;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isDisableCheckbox;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isExpanded;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isHalfChecked;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isSelected;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isLoading;
    /** @type {?} */
    NzTreeNode.prototype.canHide;
    /** @type {?} */
    NzTreeNode.prototype.isMatched;
    /** @type {?} */
    NzTreeNode.prototype.service;
    /** @type {?} */
    NzTreeNode.prototype.component;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLW5vZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ0cmVlL256LXRyZWUtYmFzZS1ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQUluRCx1Q0FlQzs7O0lBZEMsa0NBQWM7O0lBQ2QsZ0NBQVk7O0lBQ1osaUNBQWM7O0lBQ2QsbUNBQWlCOztJQUNqQixvQ0FBa0I7O0lBQ2xCLHFDQUFtQjs7SUFDbkIsdUNBQXFCOztJQUNyQixxQ0FBbUI7O0lBQ25CLDRDQUEwQjs7SUFDMUIscUNBQW1COztJQUNuQixxQ0FBK0I7OztBQU1qQyxNQUFNLE9BQU8sVUFBVTs7Ozs7O0lBZ0NyQixZQUNFLE1BQXNDLEVBQ3RDLFNBQTRCLElBQUksRUFDaEMsVUFBb0MsSUFBSTtRQWhDMUMsVUFBSyxHQUFXLENBQUMsQ0FBQztRQWtDaEIsSUFBSSxNQUFNLFlBQVksVUFBVSxFQUFFO1lBQ2hDLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BC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QkFBeUI7Ozs7O0lBQ3pCLGdDQUE0Qjs7Ozs7O0lBSTVCLG1DQUErQjs7Ozs7SUFDL0IsbUNBQStCOzs7OztJQUMvQixpQ0FBNkI7Ozs7O0lBQzdCLHdDQUFvQzs7Ozs7SUFDcEMsaUNBQTZCOzs7OztJQUM3QixvQ0FBZ0M7Ozs7O0lBQ2hDLGlDQUE2Qjs7Ozs7SUFDN0IsZ0NBQTRCOztJQUM1Qiw2QkFBaUI7O0lBQ2pCLCtCQUFtQjs7SUFFbkIsNkJBQWtDOztJQUNsQywrQkFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uIH0gZnJvbSAnLi4vbG9nZ2VyL2xvZ2dlcic7XG5pbXBvcnQgeyBOelRyZWVOb2RlQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vbnotdHJlZS1iYXNlLmRlZmluaXRpb25zJztcbmltcG9ydCB7IE56VHJlZUJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9uei10cmVlLWJhc2Uuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnpUcmVlTm9kZU9wdGlvbnMge1xuICB0aXRsZTogc3RyaW5nO1xuICBrZXk6IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgaXNMZWFmPzogYm9vbGVhbjtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgc2VsZWN0YWJsZT86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgZGlzYWJsZUNoZWNrYm94PzogYm9vbGVhbjtcbiAgZXhwYW5kZWQ/OiBib29sZWFuO1xuICBjaGlsZHJlbj86IE56VHJlZU5vZGVPcHRpb25zW107XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBOelRyZWVOb2RlIHtcbiAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZztcbiAga2V5OiBzdHJpbmc7XG4gIGxldmVsOiBudW1iZXIgPSAwO1xuICBvcmlnaW46IE56VHJlZU5vZGVPcHRpb25zO1xuICAvLyBQYXJlbnQgTm9kZVxuICBwYXJlbnROb2RlOiBOelRyZWVOb2RlIHwgbnVsbDtcbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nO1xuICBwcml2YXRlIF9jaGlsZHJlbjogTnpUcmVlTm9kZVtdO1xuICBwcml2YXRlIF9pc0xlYWY6IGJvb2xlYW47XG4gIHByaXZhdGUgX2lzQ2hlY2tlZDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIE1heWJlIHJlbW92ZWQgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLCB1c2UgaXNDaGVja2VkIGluc3RlYWRcbiAgICovXG4gIHByaXZhdGUgX2lzQWxsQ2hlY2tlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaXNTZWxlY3RhYmxlOiBib29sZWFuO1xuICBwcml2YXRlIF9pc0Rpc2FibGVkOiBib29sZWFuO1xuICBwcml2YXRlIF9pc0Rpc2FibGVDaGVja2JveDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaXNFeHBhbmRlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaXNIYWxmQ2hlY2tlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaXNTZWxlY3RlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaXNMb2FkaW5nOiBib29sZWFuO1xuICBjYW5IaWRlOiBib29sZWFuO1xuICBpc01hdGNoZWQ6IGJvb2xlYW47XG5cbiAgc2VydmljZTogTnpUcmVlQmFzZVNlcnZpY2UgfCBudWxsO1xuICBjb21wb25lbnQ6IE56VHJlZU5vZGVCYXNlQ29tcG9uZW50O1xuXG4gIGdldCB0cmVlU2VydmljZSgpOiBOelRyZWVCYXNlU2VydmljZSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UgfHwgKHRoaXMucGFyZW50Tm9kZSAmJiB0aGlzLnBhcmVudE5vZGUudHJlZVNlcnZpY2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgb3B0aW9uOiBOelRyZWVOb2RlT3B0aW9ucyB8IE56VHJlZU5vZGUsXG4gICAgcGFyZW50OiBOelRyZWVOb2RlIHwgbnVsbCA9IG51bGwsXG4gICAgc2VydmljZTogTnpUcmVlQmFzZVNlcnZpY2UgfCBudWxsID0gbnVsbFxuICApIHtcbiAgICBpZiAob3B0aW9uIGluc3RhbmNlb2YgTnpUcmVlTm9kZSkge1xuICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICB9XG4gICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZSB8fCBudWxsO1xuICAgIHRoaXMub3JpZ2luID0gb3B0aW9uO1xuICAgIHRoaXMua2V5ID0gb3B0aW9uLmtleTtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnQ7XG4gICAgdGhpcy5fdGl0bGUgPSBvcHRpb24udGl0bGUgfHwgJy0tLSc7XG4gICAgdGhpcy5faWNvbiA9IG9wdGlvbi5pY29uIHx8ICcnO1xuICAgIHRoaXMuX2lzTGVhZiA9IG9wdGlvbi5pc0xlYWYgfHwgZmFsc2U7XG4gICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcbiAgICAvLyBvcHRpb24gcGFyYW1zXG4gICAgdGhpcy5faXNDaGVja2VkID0gb3B0aW9uLmNoZWNrZWQgfHwgZmFsc2U7XG4gICAgdGhpcy5faXNTZWxlY3RhYmxlID0gb3B0aW9uLmRpc2FibGVkIHx8IG9wdGlvbi5zZWxlY3RhYmxlICE9PSBmYWxzZTtcbiAgICB0aGlzLl9pc0Rpc2FibGVkID0gb3B0aW9uLmRpc2FibGVkIHx8IGZhbHNlO1xuICAgIHRoaXMuX2lzRGlzYWJsZUNoZWNrYm94ID0gb3B0aW9uLmRpc2FibGVDaGVja2JveCB8fCBmYWxzZTtcbiAgICB0aGlzLl9pc0V4cGFuZGVkID0gb3B0aW9uLmlzTGVhZiA/IGZhbHNlIDogb3B0aW9uLmV4cGFuZGVkIHx8IGZhbHNlO1xuICAgIHRoaXMuX2lzSGFsZkNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9pc1NlbGVjdGVkID0gKCFvcHRpb24uZGlzYWJsZWQgJiYgb3B0aW9uLnNlbGVjdGVkKSB8fCBmYWxzZTtcbiAgICB0aGlzLl9pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlzTWF0Y2hlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogcGFyZW50J3MgY2hlY2tlZCBzdGF0dXMgd2lsbCBhZmZlY3QgY2hpbGRyZW4gd2hpbGUgaW5pdGlhbGl6aW5nXG4gICAgICovXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgdGhpcy5sZXZlbCA9IHBhcmVudC5sZXZlbCArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGV2ZWwgPSAwO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbi5jaGlsZHJlbiAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0aW9uLmNoaWxkcmVuICE9PSBudWxsKSB7XG4gICAgICBvcHRpb24uY2hpbGRyZW4uZm9yRWFjaChub2RlT3B0aW9ucyA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSB0aGlzLnRyZWVTZXJ2aWNlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcyAmJlxuICAgICAgICAgICFzLmlzQ2hlY2tTdHJpY3RseSAmJlxuICAgICAgICAgIG9wdGlvbi5jaGVja2VkICYmXG4gICAgICAgICAgIW9wdGlvbi5kaXNhYmxlZCAmJlxuICAgICAgICAgICFub2RlT3B0aW9ucy5kaXNhYmxlZCAmJlxuICAgICAgICAgICFub2RlT3B0aW9ucy5kaXNhYmxlQ2hlY2tib3hcbiAgICAgICAgKSB7XG4gICAgICAgICAgbm9kZU9wdGlvbnMuY2hlY2tlZCA9IG9wdGlvbi5jaGVja2VkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLnB1c2gobmV3IE56VHJlZU5vZGUobm9kZU9wdGlvbnMsIHRoaXMpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBhdXRvIGdlbmVyYXRlXG4gICAqIGdldFxuICAgKiBzZXRcbiAgICovXG4gIGdldCB0aXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgZ2V0IGljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuXG4gIHNldCBpY29uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pY29uID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGdldCBjaGlsZHJlbigpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbjtcbiAgfVxuXG4gIHNldCBjaGlsZHJlbih2YWx1ZTogTnpUcmVlTm9kZVtdKSB7XG4gICAgdGhpcy5fY2hpbGRyZW4gPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgZ2V0IGlzTGVhZigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNMZWFmO1xuICB9XG5cbiAgc2V0IGlzTGVhZih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzTGVhZiA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBnZXQgaXNDaGVja2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0NoZWNrZWQ7XG4gIH1cblxuICBzZXQgaXNDaGVja2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNDaGVja2VkID0gdmFsdWU7XG4gICAgdGhpcy5faXNBbGxDaGVja2VkID0gdmFsdWU7XG4gICAgdGhpcy5vcmlnaW4uY2hlY2tlZCA9IHZhbHVlO1xuICAgIHRoaXMuYWZ0ZXJWYWx1ZUNoYW5nZSgnaXNDaGVja2VkJyk7XG4gIH1cblxuICBnZXQgaXNBbGxDaGVja2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0FsbENoZWNrZWQ7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgTWF5YmUgcmVtb3ZlZCBpbiBuZXh0IG1ham9yIHZlcnNpb24sIHVzZSBgaXNDaGVja2VkYCBpbnN0ZWFkLlxuICAgKi9cbiAgc2V0IGlzQWxsQ2hlY2tlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHdhcm5EZXByZWNhdGlvbihgJ2lzQWxsQ2hlY2tlZCcgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnaXNDaGVja2VkJyBpbnN0ZWFkLmApO1xuICAgIHRoaXMuX2lzQWxsQ2hlY2tlZCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGlzSGFsZkNoZWNrZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzSGFsZkNoZWNrZWQ7XG4gIH1cblxuICBzZXQgaXNIYWxmQ2hlY2tlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzSGFsZkNoZWNrZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmFmdGVyVmFsdWVDaGFuZ2UoJ2lzSGFsZkNoZWNrZWQnKTtcbiAgfVxuXG4gIGdldCBpc1NlbGVjdGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2VsZWN0YWJsZTtcbiAgfVxuXG4gIHNldCBpc1NlbGVjdGFibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc1NlbGVjdGFibGUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgZ2V0IGlzRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRGlzYWJsZWQ7XG4gIH1cblxuICBzZXQgaXNEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzRGlzYWJsZWQgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgZ2V0IGlzRGlzYWJsZUNoZWNrYm94KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0Rpc2FibGVDaGVja2JveDtcbiAgfVxuXG4gIHNldCBpc0Rpc2FibGVDaGVja2JveCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzRGlzYWJsZUNoZWNrYm94ID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGdldCBpc0V4cGFuZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0V4cGFuZGVkO1xuICB9XG5cbiAgc2V0IGlzRXhwYW5kZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0V4cGFuZGVkID0gdmFsdWU7XG4gICAgdGhpcy5vcmlnaW4uZXhwYW5kZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmFmdGVyVmFsdWVDaGFuZ2UoJ2lzRXhwYW5kZWQnKTtcbiAgfVxuXG4gIGdldCBpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1NlbGVjdGVkO1xuICB9XG5cbiAgc2V0IGlzU2VsZWN0ZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc1NlbGVjdGVkID0gdmFsdWU7XG4gICAgdGhpcy5vcmlnaW4uc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmFmdGVyVmFsdWVDaGFuZ2UoJ2lzU2VsZWN0ZWQnKTtcbiAgfVxuXG4gIGdldCBpc0xvYWRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzTG9hZGluZztcbiAgfVxuXG4gIHNldCBpc0xvYWRpbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0xvYWRpbmcgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgcHVibGljIHNldFN5bmNDaGVja2VkKGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZSwgaGFsZkNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2hlY2tlZChjaGVja2VkLCBoYWxmQ2hlY2tlZCk7XG4gICAgaWYgKHRoaXMudHJlZVNlcnZpY2UgJiYgIXRoaXMudHJlZVNlcnZpY2UuaXNDaGVja1N0cmljdGx5KSB7XG4gICAgICB0aGlzLnRyZWVTZXJ2aWNlLmNvbmR1Y3QodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIE1heWJlIHJlbW92ZWQgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLCB1c2UgYGlzQ2hlY2tlZGAgaW5zdGVhZC5cbiAgICovXG4gIHB1YmxpYyBzZXRDaGVja2VkKGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZSwgaGFsZkNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHdhcm5EZXByZWNhdGlvbihgJ3NldENoZWNrZWQnIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ2lzQ2hlY2tlZCcgaW5zdGVhZC5gKTtcbiAgICB0aGlzLm9yaWdpbi5jaGVja2VkID0gY2hlY2tlZDtcbiAgICB0aGlzLmlzQ2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgdGhpcy5pc0FsbENoZWNrZWQgPSBjaGVja2VkO1xuICAgIHRoaXMuaXNIYWxmQ2hlY2tlZCA9IGhhbGZDaGVja2VkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIE1heWJlIHJlbW92ZWQgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLCB1c2UgYGlzRXhwYW5kZWRgIGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgc2V0RXhwYW5kZWQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB3YXJuRGVwcmVjYXRpb24oYCdzZXRFeHBhbmRlZCcgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnaXNFeHBhbmRlZCcgaW5zdGVhZC5gKTtcbiAgICB0aGlzLmlzRXhwYW5kZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBNYXliZSByZW1vdmVkIGluIG5leHQgbWFqb3IgdmVyc2lvbiwgdXNlIGBpc1NlbGVjdGVkYCBpbnN0ZWFkLlxuICAgKi9cbiAgcHVibGljIHNldFNlbGVjdGVkKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgd2FybkRlcHJlY2F0aW9uKGAnc2V0U2VsZWN0ZWQnIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ2lzRXhwYW5kZWQnIGlzU2VsZWN0ZWQuYCk7XG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQYXJlbnROb2RlKCk6IE56VHJlZU5vZGUgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlO1xuICB9XG5cbiAgcHVibGljIGdldENoaWxkcmVuKCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XG4gIH1cblxuICAvKipcbiAgICogU3VwcG9ydCBhcHBlbmRpbmcgY2hpbGQgbm9kZXMgYnkgcG9zaXRpb24uIExlYWYgbm9kZSBjYW5ub3QgYmUgYXBwZW5kZWQuXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHB1YmxpYyBhZGRDaGlsZHJlbihjaGlsZHJlbjogYW55W10sIGNoaWxkUG9zOiBudW1iZXIgPSAtMSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0xlYWYpIHtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZnJlc2hMZXZlbCA9IChuOiBOelRyZWVOb2RlKSA9PiB7XG4gICAgICAgICAgbi5nZXRDaGlsZHJlbigpLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICBjLmxldmVsID0gYy5nZXRQYXJlbnROb2RlKCkhLmxldmVsICsgMTtcbiAgICAgICAgICAgIC8vIGZsdXNoIG9yaWdpblxuICAgICAgICAgICAgYy5vcmlnaW4ubGV2ZWwgPSBjLmxldmVsO1xuICAgICAgICAgICAgcmVmcmVzaExldmVsKGMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgY2hpbGQgPSBub2RlO1xuICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBOelRyZWVOb2RlKSB7XG4gICAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQgPSBuZXcgTnpUcmVlTm9kZShub2RlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBjaGlsZC5sZXZlbCA9IHRoaXMubGV2ZWwgKyAxO1xuICAgICAgICBjaGlsZC5vcmlnaW4ubGV2ZWwgPSBjaGlsZC5sZXZlbDtcbiAgICAgICAgcmVmcmVzaExldmVsKGNoaWxkKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjaGlsZFBvcyA9PT0gLTEgPyB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpIDogdGhpcy5jaGlsZHJlbi5zcGxpY2UoY2hpbGRQb3MsIDAsIGNoaWxkKTtcbiAgICAgICAgICAvLyBmbHVzaCBvcmlnaW5cbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH0pO1xuICAgICAgdGhpcy5vcmlnaW4uY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCkubWFwKHYgPT4gdi5vcmlnaW4pO1xuICAgICAgLy8gcmVtb3ZlIGxvYWRpbmcgc3RhdGVcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsZWFyQ2hpbGRyZW4oKTogdm9pZCB7XG4gICAgLy8gcmVmcmVzaCBjaGVja2VkIHN0YXRlXG4gICAgdGhpcy5hZnRlclZhbHVlQ2hhbmdlKCdjbGVhckNoaWxkcmVuJyk7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMub3JpZ2luLmNoaWxkcmVuID0gW107XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKCk6IHZvaWQge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSB0aGlzLmdldFBhcmVudE5vZGUoKTtcbiAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgcGFyZW50Tm9kZS5jaGlsZHJlbiA9IHBhcmVudE5vZGUuZ2V0Q2hpbGRyZW4oKS5maWx0ZXIodiA9PiB2LmtleSAhPT0gdGhpcy5rZXkpO1xuICAgICAgcGFyZW50Tm9kZS5vcmlnaW4uY2hpbGRyZW4gPSBwYXJlbnROb2RlLm9yaWdpbi5jaGlsZHJlbiEuZmlsdGVyKHYgPT4gdi5rZXkgIT09IHRoaXMua2V5KTtcbiAgICAgIHRoaXMuYWZ0ZXJWYWx1ZUNoYW5nZSgncmVtb3ZlJyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFmdGVyVmFsdWVDaGFuZ2Uoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50cmVlU2VydmljZSkge1xuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAnaXNDaGVja2VkJzpcbiAgICAgICAgICB0aGlzLnRyZWVTZXJ2aWNlLnNldENoZWNrZWROb2RlTGlzdCh0aGlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaXNIYWxmQ2hlY2tlZCc6XG4gICAgICAgICAgdGhpcy50cmVlU2VydmljZS5zZXRIYWxmQ2hlY2tlZE5vZGVMaXN0KHRoaXMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdpc0V4cGFuZGVkJzpcbiAgICAgICAgICB0aGlzLnRyZWVTZXJ2aWNlLnNldEV4cGFuZGVkTm9kZUxpc3QodGhpcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2lzU2VsZWN0ZWQnOlxuICAgICAgICAgIHRoaXMudHJlZVNlcnZpY2Uuc2V0Tm9kZUFjdGl2ZSh0aGlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2xlYXJDaGlsZHJlbic6XG4gICAgICAgICAgdGhpcy50cmVlU2VydmljZS5hZnRlclJlbW92ZSh0aGlzLmdldENoaWxkcmVuKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZW1vdmUnOlxuICAgICAgICAgIHRoaXMudHJlZVNlcnZpY2UuYWZ0ZXJSZW1vdmUoW3RoaXNdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29tcG9uZW50KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudC5zZXRDbGFzc01hcCgpO1xuICAgICAgdGhpcy5jb21wb25lbnQubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG59XG4iXX0=