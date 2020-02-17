/**
 * @fileoverview added by tsickle
 * Generated from: util/convert.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { coerceBooleanProperty, coerceCssPixelValue, _isNumberValue } from '@angular/cdk/coercion';
import { warn } from '../logger/logger';
/**
 * @param {?} value
 * @return {?}
 */
export function toBoolean(value) {
    return coerceBooleanProperty(value);
}
/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */
export function toNumber(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * @param {?} value
 * @return {?}
 */
export function toCssPixel(value) {
    return coerceCssPixelValue(value);
}
// tslint:disable no-any
// tslint:disable no-invalid-this
/**
 * Get the function-property type's value
 * @template T
 * @param {?} prop
 * @param {...?} args
 * @return {?}
 */
export function valueFunctionProp(prop) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return typeof prop === 'function' ? prop.apply(void 0, tslib_1.__spread(args)) : prop;
}
/**
 * @template T, D
 * @param {?} name
 * @param {?} fallback
 * @return {?}
 */
function propDecoratorFactory(name, fallback) {
    /**
     * @param {?} target
     * @param {?} propName
     * @param {?=} originalDescriptor
     * @return {?}
     */
    function propDecorator(target, propName, originalDescriptor) {
        /** @type {?} */
        var privatePropName = "$$__" + propName;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            warn("The prop \"" + privatePropName + "\" is already exist, it will be overrided by " + name + " decorator.");
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });
        return {
            get: /**
             * @return {?}
             */
            function () {
                return originalDescriptor && originalDescriptor.get
                    ? originalDescriptor.get.bind(this)()
                    : this[privatePropName];
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (originalDescriptor && originalDescriptor.set) {
                    originalDescriptor.set.bind(this)(fallback(value));
                }
                this[privatePropName] = fallback(value);
            }
        };
    }
    return propDecorator;
}
/**
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 *
 * Why not using \@InputBoolean alone without \@Input? AOT needs \@Input to be visible
 *
 * \@howToUse
 * ```
 * \@Input() \@InputBoolean() visible: boolean = false;
 *
 * // Act as below:
 * // \@Input()
 * // get visible() { return this.__visible; }
 * // set visible(value) { this.__visible = value; }
 * // __visible = false;
 * ```
 * @return {?}
 */
export function InputBoolean() {
    return propDecoratorFactory('InputBoolean', toBoolean);
}
/**
 * @return {?}
 */
export function InputCssPixel() {
    return propDecoratorFactory('InputCssPixel', toCssPixel);
}
/**
 * @return {?}
 */
export function InputNumber() {
    // tslint:disable-line: no-any
    return propDecoratorFactory('InputNumber', toNumber);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInV0aWwvY29udmVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRW5HLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFHeEMsTUFBTSxVQUFVLFNBQVMsQ0FBQyxLQUF1QjtJQUMvQyxPQUFPLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLENBQUM7Ozs7OztBQUlELE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBc0IsRUFBRSxhQUF5QjtJQUF6Qiw4QkFBQSxFQUFBLGlCQUF5QjtJQUN4RSxPQUFPLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7QUFDL0QsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFDLEtBQXNCO0lBQy9DLE9BQU8sbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEMsQ0FBQzs7Ozs7Ozs7OztBQVFELE1BQU0sVUFBVSxpQkFBaUIsQ0FBSSxJQUFxQjtJQUFFLGNBQWM7U0FBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1FBQWQsNkJBQWM7O0lBQ3hFLE9BQU8sT0FBTyxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLGdDQUFJLElBQUksR0FBRSxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQzNELENBQUM7Ozs7Ozs7QUFFRCxTQUFTLG9CQUFvQixDQUFPLElBQVksRUFBRSxRQUFxQjs7Ozs7OztJQUNyRSxTQUFTLGFBQWEsQ0FBQyxNQUFXLEVBQUUsUUFBZ0IsRUFBRSxrQkFBaUQ7O1lBQy9GLGVBQWUsR0FBRyxTQUFPLFFBQVU7UUFFekMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxFQUFFO1lBQ2pFLElBQUksQ0FBQyxnQkFBYSxlQUFlLHFEQUErQyxJQUFJLGdCQUFhLENBQUMsQ0FBQztTQUNwRztRQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRTtZQUM3QyxZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUVILE9BQU87WUFDTCxHQUFHOzs7WUFBSDtnQkFDRSxPQUFPLGtCQUFrQixJQUFJLGtCQUFrQixDQUFDLEdBQUc7b0JBQ2pELENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNyQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzVCLENBQUM7WUFDRCxHQUFHOzs7O1lBQUgsVUFBSSxLQUFRO2dCQUNWLElBQUksa0JBQWtCLElBQUksa0JBQWtCLENBQUMsR0FBRyxFQUFFO29CQUNoRCxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUNwRDtnQkFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCRCxNQUFNLFVBQVUsWUFBWTtJQUMxQixPQUFPLG9CQUFvQixDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUN6RCxDQUFDOzs7O0FBRUQsTUFBTSxVQUFVLGFBQWE7SUFDM0IsT0FBTyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDM0QsQ0FBQzs7OztBQUVELE1BQU0sVUFBVSxXQUFXO0lBQ3pCLDhCQUE4QjtJQUM5QixPQUFPLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN2RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSwgY29lcmNlQ3NzUGl4ZWxWYWx1ZSwgX2lzTnVtYmVyVmFsdWUgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5pbXBvcnQgeyB3YXJuIH0gZnJvbSAnLi4vbG9nZ2VyL2xvZ2dlcic7XG5pbXBvcnQgeyBGdW5jdGlvblByb3AgfSBmcm9tICcuLi90eXBlcy9jb21tb24td3JhcCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0Jvb2xlYW4odmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b051bWJlcih2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyO1xuZXhwb3J0IGZ1bmN0aW9uIHRvTnVtYmVyPEQ+KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIGZhbGxiYWNrOiBEKTogbnVtYmVyIHwgRDtcbmV4cG9ydCBmdW5jdGlvbiB0b051bWJlcih2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBmYWxsYmFja1ZhbHVlOiBudW1iZXIgPSAwKTogbnVtYmVyIHtcbiAgcmV0dXJuIF9pc051bWJlclZhbHVlKHZhbHVlKSA/IE51bWJlcih2YWx1ZSkgOiBmYWxsYmFja1ZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Dc3NQaXhlbCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGNvZXJjZUNzc1BpeGVsVmFsdWUodmFsdWUpO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZSBuby1hbnlcbi8vIHRzbGludDpkaXNhYmxlIG5vLWludmFsaWQtdGhpc1xuXG4vKipcbiAqIEdldCB0aGUgZnVuY3Rpb24tcHJvcGVydHkgdHlwZSdzIHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZUZ1bmN0aW9uUHJvcDxUPihwcm9wOiBGdW5jdGlvblByb3A8VD4sIC4uLmFyZ3M6IGFueVtdKTogVCB7XG4gIHJldHVybiB0eXBlb2YgcHJvcCA9PT0gJ2Z1bmN0aW9uJyA/IHByb3AoLi4uYXJncykgOiBwcm9wO1xufVxuXG5mdW5jdGlvbiBwcm9wRGVjb3JhdG9yRmFjdG9yeTxULCBEPihuYW1lOiBzdHJpbmcsIGZhbGxiYWNrOiAodjogVCkgPT4gRCk6ICh0YXJnZXQ6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4gdm9pZCB7XG4gIGZ1bmN0aW9uIHByb3BEZWNvcmF0b3IodGFyZ2V0OiBhbnksIHByb3BOYW1lOiBzdHJpbmcsIG9yaWdpbmFsRGVzY3JpcHRvcj86IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPGFueT4pOiBhbnkge1xuICAgIGNvbnN0IHByaXZhdGVQcm9wTmFtZSA9IGAkJF9fJHtwcm9wTmFtZX1gO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIHByaXZhdGVQcm9wTmFtZSkpIHtcbiAgICAgIHdhcm4oYFRoZSBwcm9wIFwiJHtwcml2YXRlUHJvcE5hbWV9XCIgaXMgYWxyZWFkeSBleGlzdCwgaXQgd2lsbCBiZSBvdmVycmlkZWQgYnkgJHtuYW1lfSBkZWNvcmF0b3IuYCk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gb3JpZ2luYWxEZXNjcmlwdG9yICYmIG9yaWdpbmFsRGVzY3JpcHRvci5nZXRcbiAgICAgICAgICA/IG9yaWdpbmFsRGVzY3JpcHRvci5nZXQuYmluZCh0aGlzKSgpXG4gICAgICAgICAgOiB0aGlzW3ByaXZhdGVQcm9wTmFtZV07XG4gICAgICB9LFxuICAgICAgc2V0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgICAgIGlmIChvcmlnaW5hbERlc2NyaXB0b3IgJiYgb3JpZ2luYWxEZXNjcmlwdG9yLnNldCkge1xuICAgICAgICAgIG9yaWdpbmFsRGVzY3JpcHRvci5zZXQuYmluZCh0aGlzKShmYWxsYmFjayh2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNbcHJpdmF0ZVByb3BOYW1lXSA9IGZhbGxiYWNrKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHByb3BEZWNvcmF0b3I7XG59XG5cbi8qKlxuICogSW5wdXQgZGVjb3JhdG9yIHRoYXQgaGFuZGxlIGEgcHJvcCB0byBkbyBnZXQvc2V0IGF1dG9tYXRpY2FsbHkgd2l0aCB0b0Jvb2xlYW5cbiAqXG4gKiBXaHkgbm90IHVzaW5nIEBJbnB1dEJvb2xlYW4gYWxvbmUgd2l0aG91dCBASW5wdXQ/IEFPVCBuZWVkcyBASW5wdXQgdG8gYmUgdmlzaWJsZVxuICpcbiAqIEBob3dUb1VzZVxuICogYGBgXG4gKiBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICpcbiAqIC8vIEFjdCBhcyBiZWxvdzpcbiAqIC8vIEBJbnB1dCgpXG4gKiAvLyBnZXQgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuX192aXNpYmxlOyB9XG4gKiAvLyBzZXQgdmlzaWJsZSh2YWx1ZSkgeyB0aGlzLl9fdmlzaWJsZSA9IHZhbHVlOyB9XG4gKiAvLyBfX3Zpc2libGUgPSBmYWxzZTtcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gSW5wdXRCb29sZWFuKCk6IGFueSB7XG4gIHJldHVybiBwcm9wRGVjb3JhdG9yRmFjdG9yeSgnSW5wdXRCb29sZWFuJywgdG9Cb29sZWFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIElucHV0Q3NzUGl4ZWwoKTogYW55IHtcbiAgcmV0dXJuIHByb3BEZWNvcmF0b3JGYWN0b3J5KCdJbnB1dENzc1BpeGVsJywgdG9Dc3NQaXhlbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJbnB1dE51bWJlcigpOiBhbnkge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOiBuby1hbnlcbiAgcmV0dXJuIHByb3BEZWNvcmF0b3JGYWN0b3J5KCdJbnB1dE51bWJlcicsIHRvTnVtYmVyKTtcbn1cbiJdfQ==