/**
 * @fileoverview added by tsickle
 * Generated from: util/scroll-into-view-if-needed.ts
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
 * @param {?} node
 * @return {?}
 */
export function scrollIntoView(node) {
    /** @type {?} */
    const nodeAsAny = (/** @type {?} */ (node));
    if (nodeAsAny.scrollIntoViewIfNeeded) {
        /* tslint:disable-next-line:no-string-literal */
        nodeAsAny.scrollIntoViewIfNeeded(false);
        return;
    }
    if (node.scrollIntoView) {
        node.scrollIntoView(false);
        return;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ1dGlsL3Njcm9sbC1pbnRvLXZpZXctaWYtbmVlZGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxNQUFNLFVBQVUsY0FBYyxDQUFDLElBQWlCOztVQUN4QyxTQUFTLEdBQUcsbUJBQUEsSUFBSSxFQUFPO0lBQzdCLElBQUksU0FBUyxDQUFDLHNCQUFzQixFQUFFO1FBQ3BDLGdEQUFnRDtRQUNoRCxTQUFTLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsT0FBTztLQUNSO0lBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsT0FBTztLQUNSO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsSW50b1ZpZXcobm9kZTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgY29uc3Qgbm9kZUFzQW55ID0gbm9kZSBhcyBhbnk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gIGlmIChub2RlQXNBbnkuc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCkge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xuICAgIG5vZGVBc0FueS5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKGZhbHNlKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG5vZGUuc2Nyb2xsSW50b1ZpZXcpIHtcbiAgICBub2RlLnNjcm9sbEludG9WaWV3KGZhbHNlKTtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==