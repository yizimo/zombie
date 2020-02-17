/**
 * @fileoverview added by tsickle
 * Generated from: util/text-measure.ts
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
export function MeasureResult() { }
if (false) {
    /** @type {?} */
    MeasureResult.prototype.finished;
    /** @type {?} */
    MeasureResult.prototype.node;
}
// We only handle element & text node.
/** @type {?} */
var ELEMENT_NODE = 1;
/** @type {?} */
var TEXT_NODE = 3;
/** @type {?} */
var COMMENT_NODE = 8;
/** @type {?} */
var ellipsisContainer;
/** @type {?} */
var wrapperStyle = {
    padding: '0',
    margin: '0',
    display: 'inline',
    lineHeight: 'inherit'
};
/**
 * @param {?} value
 * @return {?}
 */
export function pxToNumber(value) {
    if (!value) {
        return 0;
    }
    /** @type {?} */
    var match = value.match(/^\d*(\.\d*)?/);
    return match ? Number(match[0]) : 0;
}
/**
 * @param {?} style
 * @return {?}
 */
function styleToString(style) {
    // There are some different behavior between Firefox & Chrome.
    // We have to handle this ourself.
    /** @type {?} */
    var styleNames = Array.prototype.slice.apply(style);
    return styleNames.map((/**
     * @param {?} name
     * @return {?}
     */
    function (name) { return name + ": " + style.getPropertyValue(name) + ";"; })).join('');
}
/**
 * @param {?} children
 * @return {?}
 */
function mergeChildren(children) {
    /** @type {?} */
    var childList = [];
    children.forEach((/**
     * @param {?} child
     * @return {?}
     */
    function (child) {
        /** @type {?} */
        var prevChild = childList[childList.length - 1];
        if (prevChild && child.nodeType === TEXT_NODE && prevChild.nodeType === TEXT_NODE) {
            ((/** @type {?} */ (prevChild))).data += ((/** @type {?} */ (child))).data;
        }
        else {
            childList.push(child);
        }
    }));
    return childList;
}
/**
 * @param {?} originEle
 * @param {?} rows
 * @param {?} contentNodes
 * @param {?} fixedContent
 * @param {?} ellipsisStr
 * @return {?}
 */
export function measure(originEle, rows, contentNodes, fixedContent, ellipsisStr) {
    if (!ellipsisContainer) {
        ellipsisContainer = document.createElement('div');
        ellipsisContainer.setAttribute('aria-hidden', 'true');
        document.body.appendChild(ellipsisContainer);
    }
    // Get origin style
    /** @type {?} */
    var originStyle = window.getComputedStyle(originEle);
    /** @type {?} */
    var originCSS = styleToString(originStyle);
    /** @type {?} */
    var lineHeight = pxToNumber(originStyle.lineHeight);
    /** @type {?} */
    var maxHeight = lineHeight * (rows + 1) + pxToNumber(originStyle.paddingTop) + pxToNumber(originStyle.paddingBottom);
    // Set shadow
    ellipsisContainer.setAttribute('style', originCSS);
    ellipsisContainer.style.position = 'fixed';
    ellipsisContainer.style.left = '0';
    ellipsisContainer.style.height = 'auto';
    ellipsisContainer.style.minHeight = 'auto';
    ellipsisContainer.style.maxHeight = 'auto';
    ellipsisContainer.style.top = '-999999px';
    ellipsisContainer.style.zIndex = '-1000';
    // clean up css overflow
    ellipsisContainer.style.textOverflow = 'clip';
    ellipsisContainer.style.whiteSpace = 'normal';
    // tslint:disable-next-line no-any
    ((/** @type {?} */ (ellipsisContainer.style))).webkitLineClamp = 'none';
    /** @type {?} */
    var contentList = mergeChildren(contentNodes);
    /** @type {?} */
    var container = document.createElement('div');
    /** @type {?} */
    var contentContainer = document.createElement('span');
    /** @type {?} */
    var fixedContainer = document.createElement('span');
    // Add styles in container
    Object.assign(container.style, wrapperStyle);
    Object.assign(contentContainer.style, wrapperStyle);
    Object.assign(fixedContainer.style, wrapperStyle);
    contentList.forEach((/**
     * @param {?} n
     * @return {?}
     */
    function (n) {
        contentContainer.appendChild(n);
    }));
    fixedContent.forEach((/**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        fixedContainer.appendChild(node.cloneNode(true));
    }));
    container.appendChild(contentContainer);
    container.appendChild(fixedContainer);
    // Render in the fake container
    ellipsisContainer.appendChild(container);
    // Check if ellipsis in measure div is height enough for content
    /**
     * @return {?}
     */
    function inRange() {
        return ellipsisContainer.offsetHeight < maxHeight;
    }
    if (inRange()) {
        /** @type {?} */
        var text = ellipsisContainer.innerHTML;
        ellipsisContainer.removeChild(container);
        return { contentNodes: contentNodes, text: text, ellipsis: false };
    }
    // We should clone the childNode since they're controlled by React and we can't reuse it without warning
    /** @type {?} */
    var childNodes = Array.prototype.slice
        .apply(ellipsisContainer.childNodes[0].childNodes[0].cloneNode(true).childNodes)
        .filter((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var nodeType = _a.nodeType;
        return nodeType !== COMMENT_NODE;
    }));
    /** @type {?} */
    var fixedNodes = Array.prototype.slice.apply(ellipsisContainer.childNodes[0].childNodes[1].cloneNode(true).childNodes);
    ellipsisContainer.removeChild(container);
    // ========================= Find match ellipsis content =========================
    ellipsisContainer.innerHTML = '';
    // Create origin content holder
    /** @type {?} */
    var ellipsisContentHolder = document.createElement('span');
    ellipsisContainer.appendChild(ellipsisContentHolder);
    /** @type {?} */
    var ellipsisTextNode = document.createTextNode(ellipsisStr);
    ellipsisContentHolder.appendChild(ellipsisTextNode);
    fixedNodes.forEach((/**
     * @param {?} childNode
     * @return {?}
     */
    function (childNode) {
        ellipsisContainer.appendChild(childNode);
    }));
    // Append before fixed nodes
    /**
     * @param {?} node
     * @return {?}
     */
    function appendChildNode(node) {
        ellipsisContentHolder.insertBefore(node, ellipsisTextNode);
    }
    // Get maximum text
    /**
     * @param {?} textNode
     * @param {?} fullText
     * @param {?=} startLoc
     * @param {?=} endLoc
     * @param {?=} lastSuccessLoc
     * @return {?}
     */
    function measureText(textNode, fullText, startLoc, endLoc, lastSuccessLoc) {
        if (startLoc === void 0) { startLoc = 0; }
        if (endLoc === void 0) { endLoc = fullText.length; }
        if (lastSuccessLoc === void 0) { lastSuccessLoc = 0; }
        /** @type {?} */
        var midLoc = Math.floor((startLoc + endLoc) / 2);
        /** @type {?} */
        var currentText = fullText.slice(0, midLoc);
        textNode.textContent = currentText;
        if (startLoc >= endLoc - 1) {
            // Loop when step is small
            for (var step = endLoc; step >= startLoc; step -= 1) {
                /** @type {?} */
                var currentStepText = fullText.slice(0, step);
                textNode.textContent = currentStepText;
                if (inRange()) {
                    return step === fullText.length
                        ? {
                            finished: false,
                            node: document.createTextNode(fullText)
                        }
                        : {
                            finished: true,
                            node: document.createTextNode(currentStepText)
                        };
                }
            }
        }
        if (inRange()) {
            return measureText(textNode, fullText, midLoc, endLoc, midLoc);
        }
        else {
            return measureText(textNode, fullText, startLoc, midLoc, lastSuccessLoc);
        }
    }
    /**
     * @param {?} childNode
     * @param {?} index
     * @return {?}
     */
    function measureNode(childNode, index) {
        /** @type {?} */
        var type = childNode.nodeType;
        if (type === ELEMENT_NODE) {
            // We don't split element, it will keep if whole element can be displayed.
            // appendChildNode(childNode);
            if (inRange()) {
                return {
                    finished: false,
                    node: contentList[index]
                };
            }
            // Clean up if can not pull in
            ellipsisContentHolder.removeChild(childNode);
            return {
                finished: true,
                node: null
            };
        }
        else if (type === TEXT_NODE) {
            /** @type {?} */
            var fullText = childNode.textContent || '';
            /** @type {?} */
            var textNode = document.createTextNode(fullText);
            appendChildNode(textNode);
            return measureText(textNode, fullText);
        }
        // Not handle other type of content
        // PS: This code should not be attached after react 16
        return {
            finished: false,
            node: null
        };
    }
    /** @type {?} */
    var ellipsisNodes = [];
    childNodes.some((/**
     * @param {?} childNode
     * @param {?} index
     * @return {?}
     */
    function (childNode, index) {
        var _a = measureNode(childNode, index), finished = _a.finished, node = _a.node;
        if (node) {
            ellipsisNodes.push(node);
        }
        return finished;
    }));
    /** @type {?} */
    var result = {
        contentNodes: ellipsisNodes,
        text: ellipsisContainer.innerHTML,
        ellipsis: true
    };
    while (ellipsisContainer.firstChild) {
        ellipsisContainer.removeChild(ellipsisContainer.firstChild);
    }
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1tZWFzdXJlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbC90ZXh0LW1lYXN1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBUUEsbUNBR0M7OztJQUZDLGlDQUFrQjs7SUFDbEIsNkJBQWtCOzs7O0lBSWQsWUFBWSxHQUFHLENBQUM7O0lBQ2hCLFNBQVMsR0FBRyxDQUFDOztJQUNiLFlBQVksR0FBRyxDQUFDOztJQUVsQixpQkFBdUM7O0lBRXJDLFlBQVksR0FBRztJQUNuQixPQUFPLEVBQUUsR0FBRztJQUNaLE1BQU0sRUFBRSxHQUFHO0lBQ1gsT0FBTyxFQUFFLFFBQVE7SUFDakIsVUFBVSxFQUFFLFNBQVM7Q0FDdEI7Ozs7O0FBRUQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxLQUFvQjtJQUM3QyxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1YsT0FBTyxDQUFDLENBQUM7S0FDVjs7UUFFSyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7SUFFekMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLENBQUM7Ozs7O0FBRUQsU0FBUyxhQUFhLENBQUMsS0FBMEI7Ozs7UUFHekMsVUFBVSxHQUFhLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDL0QsT0FBTyxVQUFVLENBQUMsR0FBRzs7OztJQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUcsSUFBSSxVQUFLLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBRyxFQUEzQyxDQUEyQyxFQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3RGLENBQUM7Ozs7O0FBRUQsU0FBUyxhQUFhLENBQUMsUUFBZ0I7O1FB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QUNELE9BQU8saUJBQWlCLENBQUMsVUFBVSxFQUFFO1FBQ25DLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUM3RDtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBNZWFzdXJlUmVzdWx0IHtcbiAgZmluaXNoZWQ6IGJvb2xlYW47XG4gIG5vZGU6IE5vZGUgfCBudWxsO1xufVxuXG4vLyBXZSBvbmx5IGhhbmRsZSBlbGVtZW50ICYgdGV4dCBub2RlLlxuY29uc3QgRUxFTUVOVF9OT0RFID0gMTtcbmNvbnN0IFRFWFRfTk9ERSA9IDM7XG5jb25zdCBDT01NRU5UX05PREUgPSA4O1xuXG5sZXQgZWxsaXBzaXNDb250YWluZXI6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xuXG5jb25zdCB3cmFwcGVyU3R5bGUgPSB7XG4gIHBhZGRpbmc6ICcwJyxcbiAgbWFyZ2luOiAnMCcsXG4gIGRpc3BsYXk6ICdpbmxpbmUnLFxuICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCdcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBweFRvTnVtYmVyKHZhbHVlOiBzdHJpbmcgfCBudWxsKTogbnVtYmVyIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY29uc3QgbWF0Y2ggPSB2YWx1ZS5tYXRjaCgvXlxcZCooXFwuXFxkKik/Lyk7XG5cbiAgcmV0dXJuIG1hdGNoID8gTnVtYmVyKG1hdGNoWzBdKSA6IDA7XG59XG5cbmZ1bmN0aW9uIHN0eWxlVG9TdHJpbmcoc3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24pOiBzdHJpbmcge1xuICAvLyBUaGVyZSBhcmUgc29tZSBkaWZmZXJlbnQgYmVoYXZpb3IgYmV0d2VlbiBGaXJlZm94ICYgQ2hyb21lLlxuICAvLyBXZSBoYXZlIHRvIGhhbmRsZSB0aGlzIG91cnNlbGYuXG4gIGNvbnN0IHN0eWxlTmFtZXM6IHN0cmluZ1tdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlTmFtZXMubWFwKG5hbWUgPT4gYCR7bmFtZX06ICR7c3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKX07YCkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlQ2hpbGRyZW4oY2hpbGRyZW46IE5vZGVbXSk6IE5vZGVbXSB7XG4gIGNvbnN0IGNoaWxkTGlzdDogTm9kZVtdID0gW107XG5cbiAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQ6IE5vZGUpID0+IHtcbiAgICBjb25zdCBwcmV2Q2hpbGQgPSBjaGlsZExpc3RbY2hpbGRMaXN0Lmxlbmd0aCAtIDFdO1xuICAgIGlmIChwcmV2Q2hpbGQgJiYgY2hpbGQubm9kZVR5cGUgPT09IFRFWFRfTk9ERSAmJiBwcmV2Q2hpbGQubm9kZVR5cGUgPT09IFRFWFRfTk9ERSkge1xuICAgICAgKHByZXZDaGlsZCBhcyBUZXh0KS5kYXRhICs9IChjaGlsZCBhcyBUZXh0KS5kYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZExpc3QucHVzaChjaGlsZCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2hpbGRMaXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVhc3VyZShcbiAgb3JpZ2luRWxlOiBIVE1MRWxlbWVudCxcbiAgcm93czogbnVtYmVyLFxuICBjb250ZW50Tm9kZXM6IE5vZGVbXSxcbiAgZml4ZWRDb250ZW50OiBIVE1MRWxlbWVudFtdLFxuICBlbGxpcHNpc1N0cjogc3RyaW5nXG4pOiB7IGNvbnRlbnROb2RlczogTm9kZVtdOyB0ZXh0OiBzdHJpbmc7IGVsbGlwc2lzOiBib29sZWFuIH0ge1xuICBpZiAoIWVsbGlwc2lzQ29udGFpbmVyKSB7XG4gICAgZWxsaXBzaXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGxpcHNpc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsbGlwc2lzQ29udGFpbmVyKTtcbiAgfVxuXG4gIC8vIEdldCBvcmlnaW4gc3R5bGVcbiAgY29uc3Qgb3JpZ2luU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShvcmlnaW5FbGUpO1xuICBjb25zdCBvcmlnaW5DU1MgPSBzdHlsZVRvU3RyaW5nKG9yaWdpblN0eWxlKTtcbiAgY29uc3QgbGluZUhlaWdodCA9IHB4VG9OdW1iZXIob3JpZ2luU3R5bGUubGluZUhlaWdodCk7XG4gIGNvbnN0IG1heEhlaWdodCA9XG4gICAgbGluZUhlaWdodCAqIChyb3dzICsgMSkgKyBweFRvTnVtYmVyKG9yaWdpblN0eWxlLnBhZGRpbmdUb3ApICsgcHhUb051bWJlcihvcmlnaW5TdHlsZS5wYWRkaW5nQm90dG9tKTtcbiAgLy8gU2V0IHNoYWRvd1xuICBlbGxpcHNpc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgb3JpZ2luQ1NTKTtcbiAgZWxsaXBzaXNDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICBlbGxpcHNpc0NvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJzAnO1xuICBlbGxpcHNpc0NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gIGVsbGlwc2lzQ29udGFpbmVyLnN0eWxlLm1pbkhlaWdodCA9ICdhdXRvJztcbiAgZWxsaXBzaXNDb250YWluZXIuc3R5bGUubWF4SGVpZ2h0ID0gJ2F1dG8nO1xuICBlbGxpcHNpc0NvbnRhaW5lci5zdHlsZS50b3AgPSAnLTk5OTk5OXB4JztcbiAgZWxsaXBzaXNDb250YWluZXIuc3R5bGUuekluZGV4ID0gJy0xMDAwJztcblxuICAvLyBjbGVhbiB1cCBjc3Mgb3ZlcmZsb3dcbiAgZWxsaXBzaXNDb250YWluZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gJ2NsaXAnO1xuICBlbGxpcHNpc0NvbnRhaW5lci5zdHlsZS53aGl0ZVNwYWNlID0gJ25vcm1hbCc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcbiAgKGVsbGlwc2lzQ29udGFpbmVyLnN0eWxlIGFzIGFueSkud2Via2l0TGluZUNsYW1wID0gJ25vbmUnO1xuXG4gIGNvbnN0IGNvbnRlbnRMaXN0ID0gbWVyZ2VDaGlsZHJlbihjb250ZW50Tm9kZXMpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3QgZml4ZWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgLy8gQWRkIHN0eWxlcyBpbiBjb250YWluZXJcbiAgT2JqZWN0LmFzc2lnbihjb250YWluZXIuc3R5bGUsIHdyYXBwZXJTdHlsZSk7XG4gIE9iamVjdC5hc3NpZ24oY29udGVudENvbnRhaW5lci5zdHlsZSwgd3JhcHBlclN0eWxlKTtcbiAgT2JqZWN0LmFzc2lnbihmaXhlZENvbnRhaW5lci5zdHlsZSwgd3JhcHBlclN0eWxlKTtcblxuICBjb250ZW50TGlzdC5mb3JFYWNoKG4gPT4ge1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobik7XG4gIH0pO1xuICBmaXhlZENvbnRlbnQuZm9yRWFjaChub2RlID0+IHtcbiAgICBmaXhlZENvbnRhaW5lci5hcHBlbmRDaGlsZChub2RlLmNsb25lTm9kZSh0cnVlKSk7XG4gIH0pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaXhlZENvbnRhaW5lcik7XG5cbiAgLy8gUmVuZGVyIGluIHRoZSBmYWtlIGNvbnRhaW5lclxuICBlbGxpcHNpc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIC8vIENoZWNrIGlmIGVsbGlwc2lzIGluIG1lYXN1cmUgZGl2IGlzIGhlaWdodCBlbm91Z2ggZm9yIGNvbnRlbnRcbiAgZnVuY3Rpb24gaW5SYW5nZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZWxsaXBzaXNDb250YWluZXIub2Zmc2V0SGVpZ2h0IDwgbWF4SGVpZ2h0O1xuICB9XG5cbiAgaWYgKGluUmFuZ2UoKSkge1xuICAgIGNvbnN0IHRleHQgPSBlbGxpcHNpc0NvbnRhaW5lci5pbm5lckhUTUw7XG4gICAgZWxsaXBzaXNDb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICByZXR1cm4geyBjb250ZW50Tm9kZXMsIHRleHQsIGVsbGlwc2lzOiBmYWxzZSB9O1xuICB9XG5cbiAgLy8gV2Ugc2hvdWxkIGNsb25lIHRoZSBjaGlsZE5vZGUgc2luY2UgdGhleSdyZSBjb250cm9sbGVkIGJ5IFJlYWN0IGFuZCB3ZSBjYW4ndCByZXVzZSBpdCB3aXRob3V0IHdhcm5pbmdcbiAgY29uc3QgY2hpbGROb2RlczogQ2hpbGROb2RlW10gPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbiAgICAuYXBwbHkoZWxsaXBzaXNDb250YWluZXIuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNsb25lTm9kZSh0cnVlKS5jaGlsZE5vZGVzKVxuICAgIC5maWx0ZXIoKHsgbm9kZVR5cGUgfTogQ2hpbGROb2RlKSA9PiBub2RlVHlwZSAhPT0gQ09NTUVOVF9OT0RFKTtcbiAgY29uc3QgZml4ZWROb2RlczogQ2hpbGROb2RlW10gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoXG4gICAgZWxsaXBzaXNDb250YWluZXIuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdLmNsb25lTm9kZSh0cnVlKS5jaGlsZE5vZGVzXG4gICk7XG4gIGVsbGlwc2lzQ29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PSBGaW5kIG1hdGNoIGVsbGlwc2lzIGNvbnRlbnQgPT09PT09PT09PT09PT09PT09PT09PT09PVxuICBlbGxpcHNpc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAvLyBDcmVhdGUgb3JpZ2luIGNvbnRlbnQgaG9sZGVyXG4gIGNvbnN0IGVsbGlwc2lzQ29udGVudEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZWxsaXBzaXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxsaXBzaXNDb250ZW50SG9sZGVyKTtcbiAgY29uc3QgZWxsaXBzaXNUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVsbGlwc2lzU3RyKTtcbiAgZWxsaXBzaXNDb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKGVsbGlwc2lzVGV4dE5vZGUpO1xuXG4gIGZpeGVkTm9kZXMuZm9yRWFjaChjaGlsZE5vZGUgPT4ge1xuICAgIGVsbGlwc2lzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XG4gIH0pO1xuXG4gIC8vIEFwcGVuZCBiZWZvcmUgZml4ZWQgbm9kZXNcbiAgZnVuY3Rpb24gYXBwZW5kQ2hpbGROb2RlKG5vZGU6IENoaWxkTm9kZSk6IHZvaWQge1xuICAgIGVsbGlwc2lzQ29udGVudEhvbGRlci5pbnNlcnRCZWZvcmUobm9kZSwgZWxsaXBzaXNUZXh0Tm9kZSk7XG4gIH1cblxuICAvLyBHZXQgbWF4aW11bSB0ZXh0XG4gIGZ1bmN0aW9uIG1lYXN1cmVUZXh0KFxuICAgIHRleHROb2RlOiBUZXh0LFxuICAgIGZ1bGxUZXh0OiBzdHJpbmcsXG4gICAgc3RhcnRMb2M6IG51bWJlciA9IDAsXG4gICAgZW5kTG9jOiBudW1iZXIgPSBmdWxsVGV4dC5sZW5ndGgsXG4gICAgbGFzdFN1Y2Nlc3NMb2M6IG51bWJlciA9IDBcbiAgKTogTWVhc3VyZVJlc3VsdCB7XG4gICAgY29uc3QgbWlkTG9jID0gTWF0aC5mbG9vcigoc3RhcnRMb2MgKyBlbmRMb2MpIC8gMik7XG4gICAgY29uc3QgY3VycmVudFRleHQgPSBmdWxsVGV4dC5zbGljZSgwLCBtaWRMb2MpO1xuICAgIHRleHROb2RlLnRleHRDb250ZW50ID0gY3VycmVudFRleHQ7XG5cbiAgICBpZiAoc3RhcnRMb2MgPj0gZW5kTG9jIC0gMSkge1xuICAgICAgLy8gTG9vcCB3aGVuIHN0ZXAgaXMgc21hbGxcbiAgICAgIGZvciAobGV0IHN0ZXAgPSBlbmRMb2M7IHN0ZXAgPj0gc3RhcnRMb2M7IHN0ZXAgLT0gMSkge1xuICAgICAgICBjb25zdCBjdXJyZW50U3RlcFRleHQgPSBmdWxsVGV4dC5zbGljZSgwLCBzdGVwKTtcbiAgICAgICAgdGV4dE5vZGUudGV4dENvbnRlbnQgPSBjdXJyZW50U3RlcFRleHQ7XG5cbiAgICAgICAgaWYgKGluUmFuZ2UoKSkge1xuICAgICAgICAgIHJldHVybiBzdGVwID09PSBmdWxsVGV4dC5sZW5ndGhcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIGZpbmlzaGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBub2RlOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShmdWxsVGV4dClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgZmluaXNoZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbm9kZTogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3VycmVudFN0ZXBUZXh0KVxuICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpblJhbmdlKCkpIHtcbiAgICAgIHJldHVybiBtZWFzdXJlVGV4dCh0ZXh0Tm9kZSwgZnVsbFRleHQsIG1pZExvYywgZW5kTG9jLCBtaWRMb2MpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWVhc3VyZVRleHQodGV4dE5vZGUsIGZ1bGxUZXh0LCBzdGFydExvYywgbWlkTG9jLCBsYXN0U3VjY2Vzc0xvYyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWVhc3VyZU5vZGUoY2hpbGROb2RlOiBDaGlsZE5vZGUsIGluZGV4OiBudW1iZXIpOiBNZWFzdXJlUmVzdWx0IHtcbiAgICBjb25zdCB0eXBlID0gY2hpbGROb2RlLm5vZGVUeXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgLy8gV2UgZG9uJ3Qgc3BsaXQgZWxlbWVudCwgaXQgd2lsbCBrZWVwIGlmIHdob2xlIGVsZW1lbnQgY2FuIGJlIGRpc3BsYXllZC5cbiAgICAgIC8vIGFwcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuICAgICAgaWYgKGluUmFuZ2UoKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGZpbmlzaGVkOiBmYWxzZSxcbiAgICAgICAgICBub2RlOiBjb250ZW50TGlzdFtpbmRleF1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2xlYW4gdXAgaWYgY2FuIG5vdCBwdWxsIGluXG4gICAgICBlbGxpcHNpc0NvbnRlbnRIb2xkZXIucmVtb3ZlQ2hpbGQoY2hpbGROb2RlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZpbmlzaGVkOiB0cnVlLFxuICAgICAgICBub2RlOiBudWxsXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gVEVYVF9OT0RFKSB7XG4gICAgICBjb25zdCBmdWxsVGV4dCA9IGNoaWxkTm9kZS50ZXh0Q29udGVudCB8fCAnJztcbiAgICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZnVsbFRleHQpO1xuICAgICAgYXBwZW5kQ2hpbGROb2RlKHRleHROb2RlKTtcbiAgICAgIHJldHVybiBtZWFzdXJlVGV4dCh0ZXh0Tm9kZSwgZnVsbFRleHQpO1xuICAgIH1cblxuICAgIC8vIE5vdCBoYW5kbGUgb3RoZXIgdHlwZSBvZiBjb250ZW50XG4gICAgLy8gUFM6IFRoaXMgY29kZSBzaG91bGQgbm90IGJlIGF0dGFjaGVkIGFmdGVyIHJlYWN0IDE2XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbmlzaGVkOiBmYWxzZSxcbiAgICAgIG5vZGU6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgZWxsaXBzaXNOb2RlczogTm9kZVtdID0gW107XG4gIGNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHsgZmluaXNoZWQsIG5vZGUgfSA9IG1lYXN1cmVOb2RlKGNoaWxkTm9kZSwgaW5kZXgpO1xuICAgIGlmIChub2RlKSB7XG4gICAgICBlbGxpcHNpc05vZGVzLnB1c2gobm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBmaW5pc2hlZDtcbiAgfSk7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICBjb250ZW50Tm9kZXM6IGVsbGlwc2lzTm9kZXMsXG4gICAgdGV4dDogZWxsaXBzaXNDb250YWluZXIuaW5uZXJIVE1MLFxuICAgIGVsbGlwc2lzOiB0cnVlXG4gIH07XG4gIHdoaWxlIChlbGxpcHNpc0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgZWxsaXBzaXNDb250YWluZXIucmVtb3ZlQ2hpbGQoZWxsaXBzaXNDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdfQ==