/**
 * @fileoverview added by tsickle
 * Generated from: tree/nz-tree-base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { NzTreeNode } from './nz-tree-base-node';
var NzTreeBase = /** @class */ (function () {
    function NzTreeBase(nzTreeService) {
        this.nzTreeService = nzTreeService;
    }
    /**
     * Coerces a value({@link any[]}) to a TreeNodes({@link NzTreeNode[]})
     */
    /**
     * Coerces a value({\@link any[]}) to a TreeNodes({\@link NzTreeNode[]})
     * @param {?} value
     * @return {?}
     */
    NzTreeBase.prototype.coerceTreeNodes = /**
     * Coerces a value({\@link any[]}) to a TreeNodes({\@link NzTreeNode[]})
     * @param {?} value
     * @return {?}
     */
    function (
    // tslint:disable-next-line:no-any
    value) {
        var _this = this;
        /** @type {?} */
        var nodes = [];
        if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
            // has not been new NzTreeNode
            nodes = value.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return new NzTreeNode(item, null, _this.nzTreeService); }));
        }
        else {
            nodes = value.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                item.service = _this.nzTreeService;
                return item;
            }));
        }
        return nodes;
    };
    /**
     * Get all nodes({@link NzTreeNode})
     */
    /**
     * Get all nodes({\@link NzTreeNode})
     * @return {?}
     */
    NzTreeBase.prototype.getTreeNodes = /**
     * Get all nodes({\@link NzTreeNode})
     * @return {?}
     */
    function () {
        return this.nzTreeService.rootNodes;
    };
    /**
     * Get {@link NzTreeNode} with key
     */
    /**
     * Get {\@link NzTreeNode} with key
     * @param {?} key
     * @return {?}
     */
    NzTreeBase.prototype.getTreeNodeByKey = /**
     * Get {\@link NzTreeNode} with key
     * @param {?} key
     * @return {?}
     */
    function (key) {
        // flat tree nodes
        /** @type {?} */
        var nodes = [];
        /** @type {?} */
        var getNode = (/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            nodes.push(node);
            node.getChildren().forEach((/**
             * @param {?} n
             * @return {?}
             */
            function (n) {
                getNode(n);
            }));
        });
        this.getTreeNodes().forEach((/**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            getNode(n);
        }));
        return nodes.find((/**
         * @param {?} n
         * @return {?}
         */
        function (n) { return n.key === key; })) || null;
    };
    /**
     * Get checked nodes(merged)
     */
    /**
     * Get checked nodes(merged)
     * @return {?}
     */
    NzTreeBase.prototype.getCheckedNodeList = /**
     * Get checked nodes(merged)
     * @return {?}
     */
    function () {
        return this.nzTreeService.getCheckedNodeList();
    };
    /**
     * Get selected nodes
     */
    /**
     * Get selected nodes
     * @return {?}
     */
    NzTreeBase.prototype.getSelectedNodeList = /**
     * Get selected nodes
     * @return {?}
     */
    function () {
        return this.nzTreeService.getSelectedNodeList();
    };
    /**
     * Get half checked nodes
     */
    /**
     * Get half checked nodes
     * @return {?}
     */
    NzTreeBase.prototype.getHalfCheckedNodeList = /**
     * Get half checked nodes
     * @return {?}
     */
    function () {
        return this.nzTreeService.getHalfCheckedNodeList();
    };
    /**
     * Get expanded nodes
     */
    /**
     * Get expanded nodes
     * @return {?}
     */
    NzTreeBase.prototype.getExpandedNodeList = /**
     * Get expanded nodes
     * @return {?}
     */
    function () {
        return this.nzTreeService.getExpandedNodeList();
    };
    /**
     * Get matched nodes(if nzSearchValue is not null)
     */
    /**
     * Get matched nodes(if nzSearchValue is not null)
     * @return {?}
     */
    NzTreeBase.prototype.getMatchedNodeList = /**
     * Get matched nodes(if nzSearchValue is not null)
     * @return {?}
     */
    function () {
        return this.nzTreeService.getMatchedNodeList();
    };
    return NzTreeBase;
}());
export { NzTreeBase };
if (false) {
    /** @type {?} */
    NzTreeBase.prototype.nzTreeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidHJlZS9uei10cmVlLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR2pEO0lBQ0Usb0JBQW1CLGFBQWdDO1FBQWhDLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtJQUFHLENBQUM7SUFFdkQ7O09BRUc7Ozs7OztJQUNILG9DQUFlOzs7OztJQUFmO0lBQ0Usa0NBQWtDO0lBQ2xDLEtBQVk7UUFGZCxpQkFlQzs7WUFYSyxLQUFLLEdBQWlCLEVBQUU7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEQsOEJBQThCO1lBQzlCLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLEVBQTlDLENBQThDLEVBQUMsQ0FBQztTQUMzRTthQUFNO1lBQ0wsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQyxJQUFnQjtnQkFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDO2dCQUNsQyxPQUFPLElBQUksQ0FBQztZQUNkLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxpQ0FBWTs7OztJQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNILHFDQUFnQjs7Ozs7SUFBaEIsVUFBaUIsR0FBVzs7O1lBRXBCLEtBQUssR0FBaUIsRUFBRTs7WUFDeEIsT0FBTzs7OztRQUFHLFVBQUMsSUFBZ0I7WUFDL0IsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsQ0FBQztnQkFDMUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLENBQUE7UUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsQ0FBQztZQUMzQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDYixDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFiLENBQWEsRUFBQyxJQUFJLElBQUksQ0FBQztJQUNoRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsdUNBQWtCOzs7O0lBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHdDQUFtQjs7OztJQUFuQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCwyQ0FBc0I7Ozs7SUFBdEI7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsd0NBQW1COzs7O0lBQW5CO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHVDQUFrQjs7OztJQUFsQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFsRkQsSUFrRkM7Ozs7SUFqRmEsbUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IE56VHJlZU5vZGUgfSBmcm9tICcuL256LXRyZWUtYmFzZS1ub2RlJztcbmltcG9ydCB7IE56VHJlZUJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9uei10cmVlLWJhc2Uuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBOelRyZWVCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIG56VHJlZVNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBDb2VyY2VzIGEgdmFsdWUoe0BsaW5rIGFueVtdfSkgdG8gYSBUcmVlTm9kZXMoe0BsaW5rIE56VHJlZU5vZGVbXX0pXG4gICAqL1xuICBjb2VyY2VUcmVlTm9kZXMoXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHZhbHVlOiBhbnlbXVxuICApOiBOelRyZWVOb2RlW10ge1xuICAgIGxldCBub2RlczogTnpUcmVlTm9kZVtdID0gW107XG4gICAgaWYgKCF0aGlzLm56VHJlZVNlcnZpY2UuaXNBcnJheU9mTnpUcmVlTm9kZSh2YWx1ZSkpIHtcbiAgICAgIC8vIGhhcyBub3QgYmVlbiBuZXcgTnpUcmVlTm9kZVxuICAgICAgbm9kZXMgPSB2YWx1ZS5tYXAoaXRlbSA9PiBuZXcgTnpUcmVlTm9kZShpdGVtLCBudWxsLCB0aGlzLm56VHJlZVNlcnZpY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZXMgPSB2YWx1ZS5tYXAoKGl0ZW06IE56VHJlZU5vZGUpID0+IHtcbiAgICAgICAgaXRlbS5zZXJ2aWNlID0gdGhpcy5uelRyZWVTZXJ2aWNlO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBub2Rlcyh7QGxpbmsgTnpUcmVlTm9kZX0pXG4gICAqL1xuICBnZXRUcmVlTm9kZXMoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLnJvb3ROb2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQge0BsaW5rIE56VHJlZU5vZGV9IHdpdGgga2V5XG4gICAqL1xuICBnZXRUcmVlTm9kZUJ5S2V5KGtleTogc3RyaW5nKTogTnpUcmVlTm9kZSB8IG51bGwge1xuICAgIC8vIGZsYXQgdHJlZSBub2Rlc1xuICAgIGNvbnN0IG5vZGVzOiBOelRyZWVOb2RlW10gPSBbXTtcbiAgICBjb25zdCBnZXROb2RlID0gKG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkID0+IHtcbiAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgICBub2RlLmdldENoaWxkcmVuKCkuZm9yRWFjaChuID0+IHtcbiAgICAgICAgZ2V0Tm9kZShuKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5nZXRUcmVlTm9kZXMoKS5mb3JFYWNoKG4gPT4ge1xuICAgICAgZ2V0Tm9kZShuKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbm9kZXMuZmluZChuID0+IG4ua2V5ID09PSBrZXkpIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNoZWNrZWQgbm9kZXMobWVyZ2VkKVxuICAgKi9cbiAgZ2V0Q2hlY2tlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRDaGVja2VkTm9kZUxpc3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2VsZWN0ZWQgbm9kZXNcbiAgICovXG4gIGdldFNlbGVjdGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZUxpc3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaGFsZiBjaGVja2VkIG5vZGVzXG4gICAqL1xuICBnZXRIYWxmQ2hlY2tlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRIYWxmQ2hlY2tlZE5vZGVMaXN0KCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGV4cGFuZGVkIG5vZGVzXG4gICAqL1xuICBnZXRFeHBhbmRlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRFeHBhbmRlZE5vZGVMaXN0KCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG1hdGNoZWQgbm9kZXMoaWYgbnpTZWFyY2hWYWx1ZSBpcyBub3QgbnVsbClcbiAgICovXG4gIGdldE1hdGNoZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0TWF0Y2hlZE5vZGVMaXN0KCk7XG4gIH1cbn1cbiJdfQ==