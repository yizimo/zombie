/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
export { NzAddOnModule, NzClassListAddDirective, NzStringTemplateOutletDirective } from './addon/public-api';
export { AnimationDuration, AnimationCurves, collapseMotion, treeCollapseMotion, fadeMotion, helpMotion, moveUpMotion, notificationMotion, slideMotion, slideAlertMotion, zoomMotion, zoomBigMotion, zoomBadgeMotion } from './animation/public-api';
export { NzNoAnimationModule, NzNoAnimationDirective } from './no-animation/public-api';
export { NzConnectedOverlayDirective, NzOverlayModule, getPlacementName, POSITION_MAP, DEFAULT_TOOLTIP_POSITIONS, DEFAULT_DROPDOWN_POSITIONS, DEFAULT_SUBMENU_POSITIONS, DEFAULT_MENTION_TOP_POSITIONS, DEFAULT_MENTION_BOTTOM_POSITIONS } from './overlay/public-api';
export { sortRangeValue, CandyDate, timeUnits } from './time/public-api';
export { cancelRequestAnimationFrame, reqAnimFrame } from './polyfill/public-api';
export { SCROLL_SERVICE_PROVIDER_FACTORY, NzScrollService, SCROLL_SERVICE_PROVIDER } from './scroll/public-api';
export { NzUpdateHostClassService, NzCopyToClipboardService, NzCopyToClipboardServiceModule, NzDomEventService, NzSingletonService, NzDragService } from './services/public-api';
export { dispatchEvent, dispatchFakeEvent, dispatchKeyboardEvent, dispatchMouseEvent, dispatchTouchEvent, createMouseEvent, createTouchEvent, createKeyboardEvent, createFakeEvent, typeInElement, wrappedErrorMessage, FakeViewportRuler, MockNgZone } from './testing/public-api';
export { NzTreeNode, NzTreeBaseService, NzTreeHigherOrderServiceToken, NzTreeBase } from './tree/public-api';
export {} from './types/public-api';
export { toArray, arraysEqual, shallowCopyArray, isNotNil, isNil, shallowEqual, isInteger, isEmpty, filterNotEmptyNode, isNonEmptyString, isTemplateRef, isComponent, toBoolean, toNumber, toCssPixel, valueFunctionProp, InputBoolean, InputCssPixel, InputNumber, silentEvent, getElementOffset, findFirstNotEmptyNode, findLastNotEmptyNode, reverseChildNodes, isTouchEvent, getEventPosition, getRegExp, getMentions, padStart, padEnd, getRepeatedElement, isPromise, getPercent, getPrecision, ensureNumberInRange, scrollIntoView, getCaretCoordinates, createDebugEle, properties, isStyleSupport, getStyleAsText, pxToNumber, measure, measureScrollbar, ensureInBounds, inNextTick } from './util/public-api';
export { NzWaveRenderer, NZ_WAVE_GLOBAL_CONFIG_FACTORY, NZ_WAVE_GLOBAL_DEFAULT_CONFIG, NZ_WAVE_GLOBAL_CONFIG, NzWaveDirective, NzWaveModule } from './wave/public-api';
export { NzMenuBaseService, NzDropdownHigherOrderServiceToken } from './dropdown/public-api';
export { PREFIX, warn, warnDeprecation, log } from './logger/public-api';
export { NzBreakpoint, responsiveMap } from './responsive/public-api';
export { NzTransButtonModule, NzTransButtonDirective } from './trans-button/public-api';
export { NzHighlightPipe, NzHighlightModule } from './highlight/public-api';
export { WithConfig, NzConfigService, NZ_CONFIG } from './config/public-api';
export { NzPipesModule, NzTimeRangePipe, NzToCssUnitPipe } from './pipe/public-api';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInB1YmxpYy1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsd0ZBQWMsb0JBQW9CLENBQUM7QUFDbkMsNE5BQWMsd0JBQXdCLENBQUM7QUFDdkMsNERBQWMsMkJBQTJCLENBQUM7QUFDMUMsZ1BBQWMsc0JBQXNCLENBQUM7QUFDckMscURBQWMsbUJBQW1CLENBQUM7QUFDbEMsMERBQWMsdUJBQXVCLENBQUM7QUFDdEMsMEZBQWMscUJBQXFCLENBQUM7QUFDcEMseUpBQWMsdUJBQXVCLENBQUM7QUFDdEMsNlBBQWMsc0JBQXNCLENBQUM7QUFDckMseUZBQWMsbUJBQW1CLENBQUM7QUFDbEMsZUFBYyxvQkFBb0IsQ0FBQztBQUNuQyxxcUJBQWMsbUJBQW1CLENBQUM7QUFDbEMsbUpBQWMsbUJBQW1CLENBQUM7QUFDbEMscUVBQWMsdUJBQXVCLENBQUM7QUFDdEMsbURBQWMscUJBQXFCLENBQUM7QUFDcEMsNENBQWMseUJBQXlCLENBQUM7QUFDeEMsNERBQWMsMkJBQTJCLENBQUM7QUFDMUMsbURBQWMsd0JBQXdCLENBQUM7QUFDdkMsdURBQWMscUJBQXFCLENBQUM7QUFDcEMsZ0VBQWMsbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuZXhwb3J0ICogZnJvbSAnLi9hZGRvbi9wdWJsaWMtYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vYW5pbWF0aW9uL3B1YmxpYy1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9uby1hbmltYXRpb24vcHVibGljLWFwaSc7XG5leHBvcnQgKiBmcm9tICcuL292ZXJsYXkvcHVibGljLWFwaSc7XG5leHBvcnQgKiBmcm9tICcuL3RpbWUvcHVibGljLWFwaSc7XG5leHBvcnQgKiBmcm9tICcuL3BvbHlmaWxsL3B1YmxpYy1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9zY3JvbGwvcHVibGljLWFwaSc7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2VzL3B1YmxpYy1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi90ZXN0aW5nL3B1YmxpYy1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi90cmVlL3B1YmxpYy1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi90eXBlcy9wdWJsaWMtYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbC9wdWJsaWMtYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vd2F2ZS9wdWJsaWMtYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vZHJvcGRvd24vcHVibGljLWFwaSc7XG5leHBvcnQgKiBmcm9tICcuL2xvZ2dlci9wdWJsaWMtYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vcmVzcG9uc2l2ZS9wdWJsaWMtYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhbnMtYnV0dG9uL3B1YmxpYy1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9oaWdobGlnaHQvcHVibGljLWFwaSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZy9wdWJsaWMtYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vcGlwZS9wdWJsaWMtYXBpJztcbiJdfQ==