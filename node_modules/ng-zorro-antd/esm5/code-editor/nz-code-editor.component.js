/**
 * @fileoverview added by tsickle
 * Generated from: nz-code-editor.component.ts
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
import { forwardRef, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { combineLatest, fromEvent, BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';
import { inNextTick, warn, InputBoolean } from 'ng-zorro-antd/core';
import { NzCodeEditorService } from './nz-code-editor.service';
var NzCodeEditorComponent = /** @class */ (function () {
    function NzCodeEditorComponent(nzCodeEditorService, ngZone, elementRef) {
        this.nzCodeEditorService = nzCodeEditorService;
        this.ngZone = ngZone;
        this.nzEditorMode = 'normal';
        this.nzOriginalText = '';
        this.nzLoading = false;
        this.nzFullControl = false;
        this.nzEditorInitialized = new EventEmitter();
        this.editorOptionCached = {};
        this.destroy$ = new Subject();
        this.resize$ = new Subject();
        this.editorOption$ = new BehaviorSubject({});
        this.value = '';
        this.modelSet = false;
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(NzCodeEditorComponent.prototype, "nzEditorOption", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.editorOption$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize a monaco editor instance.
     */
    /**
     * Initialize a monaco editor instance.
     * @return {?}
     */
    NzCodeEditorComponent.prototype.ngAfterViewInit = /**
     * Initialize a monaco editor instance.
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzCodeEditorService.requestToInit().subscribe((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return _this.setup(option); }));
    };
    /**
     * @return {?}
     */
    NzCodeEditorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.editorInstance) {
            this.editorInstance.dispose();
        }
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCodeEditorComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.setValue();
    };
    // tslint:disable-next-line no-any
    // tslint:disable-next-line no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCodeEditorComponent.prototype.registerOnChange = 
    // tslint:disable-next-line no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    // tslint:disable-next-line no-any
    // tslint:disable-next-line no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCodeEditorComponent.prototype.registerOnTouched = 
    // tslint:disable-next-line no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouch = fn;
    };
    /**
     * @param {?} _value
     * @return {?}
     */
    NzCodeEditorComponent.prototype.onChange = /**
     * @param {?} _value
     * @return {?}
     */
    function (_value) { };
    /**
     * @return {?}
     */
    NzCodeEditorComponent.prototype.onTouch = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    NzCodeEditorComponent.prototype.layout = /**
     * @return {?}
     */
    function () {
        this.resize$.next();
    };
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    NzCodeEditorComponent.prototype.setup = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        inNextTick().subscribe((/**
         * @return {?}
         */
        function () {
            _this.editorOptionCached = option;
            _this.registerOptionChanges();
            _this.initMonacoEditorInstance();
            _this.registerResizeChange();
            _this.setValue();
            if (!_this.nzFullControl) {
                _this.setValueEmitter();
            }
            _this.nzEditorInitialized.emit(_this.editorInstance);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorComponent.prototype.registerOptionChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        combineLatest([this.editorOption$, this.nzCodeEditorService.option$])
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), selfOpt = _b[0], defaultOpt = _b[1];
            _this.editorOptionCached = tslib_1.__assign({}, _this.editorOptionCached, defaultOpt, selfOpt);
            _this.updateOptionToMonaco();
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorComponent.prototype.initMonacoEditorInstance = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.editorInstance =
                _this.nzEditorMode === 'normal'
                    ? monaco.editor.create(_this.el, tslib_1.__assign({}, _this.editorOptionCached))
                    : monaco.editor.createDiffEditor(_this.el, tslib_1.__assign({}, ((/** @type {?} */ (_this.editorOptionCached)))));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorComponent.prototype.registerResizeChange = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            fromEvent(window, 'resize')
                .pipe(debounceTime(300), takeUntil(_this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.layout();
            }));
            _this.resize$
                .pipe(takeUntil(_this.destroy$), filter((/**
             * @return {?}
             */
            function () { return !!_this.editorInstance; })), map((/**
             * @return {?}
             */
            function () { return ({
                width: _this.el.clientWidth,
                height: _this.el.clientHeight
            }); })), distinctUntilChanged((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return a.width === b.width && a.height === b.height; })), debounceTime(50))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.editorInstance.layout();
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorComponent.prototype.setValue = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.editorInstance) {
            return;
        }
        if (this.nzFullControl && this.value) {
            warn("should not set value when you are using full control mode! It would result in ambiguous data flow!");
            return;
        }
        if (this.nzEditorMode === 'normal') {
            if (this.modelSet) {
                ((/** @type {?} */ (this.editorInstance.getModel()))).setValue(this.value);
            }
            else {
                ((/** @type {?} */ (this.editorInstance))).setModel(monaco.editor.createModel(this.value, ((/** @type {?} */ (this.editorOptionCached))).language));
                this.modelSet = true;
            }
        }
        else {
            if (this.modelSet) {
                /** @type {?} */
                var model = (/** @type {?} */ (((/** @type {?} */ (this.editorInstance))).getModel()));
                model.modified.setValue(this.value);
                model.original.setValue(this.nzOriginalText);
            }
            else {
                /** @type {?} */
                var language = ((/** @type {?} */ (this.editorOptionCached))).language;
                ((/** @type {?} */ (this.editorInstance))).setModel({
                    original: monaco.editor.createModel(this.nzOriginalText, language),
                    modified: monaco.editor.createModel(this.value, language)
                });
                this.modelSet = true;
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorComponent.prototype.setValueEmitter = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var model = (/** @type {?} */ ((this.nzEditorMode === 'normal'
            ? ((/** @type {?} */ (this.editorInstance))).getModel()
            : (/** @type {?} */ (((/** @type {?} */ (this.editorInstance))).getModel())).modified)));
        model.onDidChangeContent((/**
         * @return {?}
         */
        function () {
            _this.emitValue(model.getValue());
        }));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NzCodeEditorComponent.prototype.emitValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.onChange(value);
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorComponent.prototype.updateOptionToMonaco = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.editorInstance) {
            this.editorInstance.updateOptions(tslib_1.__assign({}, this.editorOptionCached));
        }
    };
    NzCodeEditorComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-code-editor',
                    exportAs: 'nzCodeEditor',
                    template: "<div class=\"ant-code-editor-loading\" *ngIf=\"nzLoading\">\n  <nz-spin></nz-spin>\n</div>\n\n<div class=\"ant-code-editor-toolkit\" *ngIf=\"nzToolkit\">\n  <ng-template [ngTemplateOutlet]=\"nzToolkit\"></ng-template>\n</div>\n",
                    host: {
                        '[class.ant-code-editor]': 'true'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzCodeEditorComponent; })),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    NzCodeEditorComponent.ctorParameters = function () { return [
        { type: NzCodeEditorService },
        { type: NgZone },
        { type: ElementRef }
    ]; };
    NzCodeEditorComponent.propDecorators = {
        nzEditorMode: [{ type: Input }],
        nzOriginalText: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzFullControl: [{ type: Input }],
        nzToolkit: [{ type: Input }],
        nzEditorOption: [{ type: Input }],
        nzEditorInitialized: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCodeEditorComponent.prototype, "nzLoading", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCodeEditorComponent.prototype, "nzFullControl", void 0);
    return NzCodeEditorComponent;
}());
export { NzCodeEditorComponent };
if (false) {
    /** @type {?} */
    NzCodeEditorComponent.prototype.nzEditorMode;
    /** @type {?} */
    NzCodeEditorComponent.prototype.nzOriginalText;
    /** @type {?} */
    NzCodeEditorComponent.prototype.nzLoading;
    /** @type {?} */
    NzCodeEditorComponent.prototype.nzFullControl;
    /** @type {?} */
    NzCodeEditorComponent.prototype.nzToolkit;
    /** @type {?} */
    NzCodeEditorComponent.prototype.nzEditorInitialized;
    /** @type {?} */
    NzCodeEditorComponent.prototype.editorOptionCached;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.resize$;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.editorOption$;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.editorInstance;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.value;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.modelSet;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.nzCodeEditorService;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29kZS1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb2RlLWVkaXRvci8iLCJzb3VyY2VzIjpbIm56LWNvZGUtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLFVBQVUsRUFFVix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RixPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVcvRDtJQXdDRSwrQkFBb0IsbUJBQXdDLEVBQVUsTUFBYyxFQUFFLFVBQXNCO1FBQXhGLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBdEIzRSxpQkFBWSxHQUFpQixRQUFRLENBQUM7UUFDdEMsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDSixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBTzVCLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUF5QixDQUFDO1FBRW5GLHVCQUFrQixHQUF3QixFQUFFLENBQUM7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S0FBSztzQ0FJTCxNQUFNOztJQVJrQjtRQUFmLFlBQVksRUFBRTs7NERBQW1CO0lBQ2xCO1FBQWYsWUFBWSxFQUFFOztnRUFBdUI7SUFzTGpELDRCQUFDO0NBQUEsQUEzTUQsSUEyTUM7U0ExTFkscUJBQXFCOzs7SUFDaEMsNkNBQStDOztJQUMvQywrQ0FBNkI7O0lBQzdCLDBDQUEyQzs7SUFDM0MsOENBQStDOztJQUMvQywwQ0FBc0M7O0lBTXRDLG9EQUFtRjs7SUFFbkYsbURBQTZDOzs7OztJQUU3QyxtQ0FBaUM7Ozs7O0lBQ2pDLHlDQUF1Qzs7Ozs7SUFDdkMsd0NBQXNDOzs7OztJQUN0Qyw4Q0FBcUU7Ozs7O0lBQ3JFLCtDQUE4Qzs7Ozs7SUFDOUMsc0NBQW1COzs7OztJQUNuQix5Q0FBeUI7Ozs7O0lBRWIsb0RBQWdEOzs7OztJQUFFLHVDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIGZyb21FdmVudCwgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBpbk5leHRUaWNrLCB3YXJuLCBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBEaWZmRWRpdG9yT3B0aW9ucywgRWRpdG9yT3B0aW9ucywgSm9pbmVkRWRpdG9yT3B0aW9ucywgTnpFZGl0b3JNb2RlIH0gZnJvbSAnLi9uei1jb2RlLWVkaXRvci5kZWZpbml0aW9ucyc7XG5pbXBvcnQgeyBOekNvZGVFZGl0b3JTZXJ2aWNlIH0gZnJvbSAnLi9uei1jb2RlLWVkaXRvci5zZXJ2aWNlJztcblxuLy8gSW1wb3J0IHR5cGVzIGZyb20gbW9uYWNvIGVkaXRvci5cbmltcG9ydCB7IGVkaXRvciB9IGZyb20gJ21vbmFjby1lZGl0b3InO1xuaW1wb3J0IElFZGl0b3IgPSBlZGl0b3IuSUVkaXRvcjtcbmltcG9ydCBJRGlmZkVkaXRvciA9IGVkaXRvci5JRGlmZkVkaXRvcjtcbmltcG9ydCBJVGV4dE1vZGVsID0gZWRpdG9yLklUZXh0TW9kZWw7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcbmRlY2xhcmUgY29uc3QgbW9uYWNvOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1jb2RlLWVkaXRvcicsXG4gIGV4cG9ydEFzOiAnbnpDb2RlRWRpdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNvZGUtZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWNvZGUtZWRpdG9yXSc6ICd0cnVlJ1xuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56Q29kZUVkaXRvckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOekNvZGVFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBuekVkaXRvck1vZGU6IE56RWRpdG9yTW9kZSA9ICdub3JtYWwnO1xuICBASW5wdXQoKSBuek9yaWdpbmFsVGV4dCA9ICcnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekZ1bGxDb250cm9sID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56VG9vbGtpdDogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KCkgc2V0IG56RWRpdG9yT3B0aW9uKHZhbHVlOiBKb2luZWRFZGl0b3JPcHRpb25zKSB7XG4gICAgdGhpcy5lZGl0b3JPcHRpb24kLm5leHQodmFsdWUpO1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RWRpdG9ySW5pdGlhbGl6ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElFZGl0b3IgfCBJRGlmZkVkaXRvcj4oKTtcblxuICBlZGl0b3JPcHRpb25DYWNoZWQ6IEpvaW5lZEVkaXRvck9wdGlvbnMgPSB7fTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgcmVzaXplJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgZWRpdG9yT3B0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Sm9pbmVkRWRpdG9yT3B0aW9ucz4oe30pO1xuICBwcml2YXRlIGVkaXRvckluc3RhbmNlOiBJRWRpdG9yIHwgSURpZmZFZGl0b3I7XG4gIHByaXZhdGUgdmFsdWUgPSAnJztcbiAgcHJpdmF0ZSBtb2RlbFNldCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpDb2RlRWRpdG9yU2VydmljZTogTnpDb2RlRWRpdG9yU2VydmljZSwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBhIG1vbmFjbyBlZGl0b3IgaW5zdGFuY2UuXG4gICAqL1xuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uekNvZGVFZGl0b3JTZXJ2aWNlLnJlcXVlc3RUb0luaXQoKS5zdWJzY3JpYmUob3B0aW9uID0+IHRoaXMuc2V0dXAob3B0aW9uKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lZGl0b3JJbnN0YW5jZSkge1xuICAgICAgdGhpcy5lZGl0b3JJbnN0YW5jZS5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0VmFsdWUoKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQpOiBhbnkge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaCA9IGZuO1xuICB9XG5cbiAgb25DaGFuZ2UoX3ZhbHVlOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgb25Ub3VjaCgpOiB2b2lkIHt9XG5cbiAgbGF5b3V0KCk6IHZvaWQge1xuICAgIHRoaXMucmVzaXplJC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwKG9wdGlvbjogSm9pbmVkRWRpdG9yT3B0aW9ucyk6IHZvaWQge1xuICAgIGluTmV4dFRpY2soKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgPSBvcHRpb247XG4gICAgICB0aGlzLnJlZ2lzdGVyT3B0aW9uQ2hhbmdlcygpO1xuICAgICAgdGhpcy5pbml0TW9uYWNvRWRpdG9ySW5zdGFuY2UoKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJSZXNpemVDaGFuZ2UoKTtcbiAgICAgIHRoaXMuc2V0VmFsdWUoKTtcblxuICAgICAgaWYgKCF0aGlzLm56RnVsbENvbnRyb2wpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZUVtaXR0ZXIoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5uekVkaXRvckluaXRpYWxpemVkLmVtaXQodGhpcy5lZGl0b3JJbnN0YW5jZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyT3B0aW9uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBjb21iaW5lTGF0ZXN0KFt0aGlzLmVkaXRvck9wdGlvbiQsIHRoaXMubnpDb2RlRWRpdG9yU2VydmljZS5vcHRpb24kXSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKFtzZWxmT3B0LCBkZWZhdWx0T3B0XSkgPT4ge1xuICAgICAgICB0aGlzLmVkaXRvck9wdGlvbkNhY2hlZCA9IHtcbiAgICAgICAgICAuLi50aGlzLmVkaXRvck9wdGlvbkNhY2hlZCxcbiAgICAgICAgICAuLi5kZWZhdWx0T3B0LFxuICAgICAgICAgIC4uLnNlbGZPcHRcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cGRhdGVPcHRpb25Ub01vbmFjbygpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRNb25hY29FZGl0b3JJbnN0YW5jZSgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLmVkaXRvckluc3RhbmNlID1cbiAgICAgICAgdGhpcy5uekVkaXRvck1vZGUgPT09ICdub3JtYWwnXG4gICAgICAgICAgPyBtb25hY28uZWRpdG9yLmNyZWF0ZSh0aGlzLmVsLCB7IC4uLnRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkIH0pXG4gICAgICAgICAgOiBtb25hY28uZWRpdG9yLmNyZWF0ZURpZmZFZGl0b3IodGhpcy5lbCwge1xuICAgICAgICAgICAgICAuLi4odGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgYXMgRGlmZkVkaXRvck9wdGlvbnMpXG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJSZXNpemVDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAgIC5waXBlKGRlYm91bmNlVGltZSgzMDApLCB0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubGF5b3V0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlc2l6ZSRcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgICAgIGZpbHRlcigoKSA9PiAhIXRoaXMuZWRpdG9ySW5zdGFuY2UpLFxuICAgICAgICAgIG1hcCgoKSA9PiAoe1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMuZWwuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuZWwuY2xpZW50SGVpZ2h0XG4gICAgICAgICAgfSkpLFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChhLCBiKSA9PiBhLndpZHRoID09PSBiLndpZHRoICYmIGEuaGVpZ2h0ID09PSBiLmhlaWdodCksXG4gICAgICAgICAgZGVib3VuY2VUaW1lKDUwKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZWRpdG9ySW5zdGFuY2UubGF5b3V0KCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRWYWx1ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZWRpdG9ySW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uekZ1bGxDb250cm9sICYmIHRoaXMudmFsdWUpIHtcbiAgICAgIHdhcm4oYHNob3VsZCBub3Qgc2V0IHZhbHVlIHdoZW4geW91IGFyZSB1c2luZyBmdWxsIGNvbnRyb2wgbW9kZSEgSXQgd291bGQgcmVzdWx0IGluIGFtYmlndW91cyBkYXRhIGZsb3chYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubnpFZGl0b3JNb2RlID09PSAnbm9ybWFsJykge1xuICAgICAgaWYgKHRoaXMubW9kZWxTZXQpIHtcbiAgICAgICAgKHRoaXMuZWRpdG9ySW5zdGFuY2UuZ2V0TW9kZWwoKSBhcyBJVGV4dE1vZGVsKS5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICh0aGlzLmVkaXRvckluc3RhbmNlIGFzIElFZGl0b3IpLnNldE1vZGVsKFxuICAgICAgICAgIG1vbmFjby5lZGl0b3IuY3JlYXRlTW9kZWwodGhpcy52YWx1ZSwgKHRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkIGFzIEVkaXRvck9wdGlvbnMpLmxhbmd1YWdlKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLm1vZGVsU2V0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMubW9kZWxTZXQpIHtcbiAgICAgICAgY29uc3QgbW9kZWwgPSAodGhpcy5lZGl0b3JJbnN0YW5jZSBhcyBJRGlmZkVkaXRvcikuZ2V0TW9kZWwoKSE7XG4gICAgICAgIG1vZGVsLm1vZGlmaWVkLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICBtb2RlbC5vcmlnaW5hbC5zZXRWYWx1ZSh0aGlzLm56T3JpZ2luYWxUZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGxhbmd1YWdlID0gKHRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkIGFzIEVkaXRvck9wdGlvbnMpLmxhbmd1YWdlO1xuICAgICAgICAodGhpcy5lZGl0b3JJbnN0YW5jZSBhcyBJRGlmZkVkaXRvcikuc2V0TW9kZWwoe1xuICAgICAgICAgIG9yaWdpbmFsOiBtb25hY28uZWRpdG9yLmNyZWF0ZU1vZGVsKHRoaXMubnpPcmlnaW5hbFRleHQsIGxhbmd1YWdlKSxcbiAgICAgICAgICBtb2RpZmllZDogbW9uYWNvLmVkaXRvci5jcmVhdGVNb2RlbCh0aGlzLnZhbHVlLCBsYW5ndWFnZSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubW9kZWxTZXQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0VmFsdWVFbWl0dGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IG1vZGVsID0gKHRoaXMubnpFZGl0b3JNb2RlID09PSAnbm9ybWFsJ1xuICAgICAgPyAodGhpcy5lZGl0b3JJbnN0YW5jZSBhcyBJRWRpdG9yKS5nZXRNb2RlbCgpXG4gICAgICA6ICh0aGlzLmVkaXRvckluc3RhbmNlIGFzIElEaWZmRWRpdG9yKS5nZXRNb2RlbCgpIS5tb2RpZmllZCkgYXMgSVRleHRNb2RlbDtcblxuICAgIG1vZGVsLm9uRGlkQ2hhbmdlQ29udGVudCgoKSA9PiB7XG4gICAgICB0aGlzLmVtaXRWYWx1ZShtb2RlbC5nZXRWYWx1ZSgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZU9wdGlvblRvTW9uYWNvKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmVkaXRvckluc3RhbmNlKSB7XG4gICAgICB0aGlzLmVkaXRvckluc3RhbmNlLnVwZGF0ZU9wdGlvbnMoeyAuLi50aGlzLmVkaXRvck9wdGlvbkNhY2hlZCB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==