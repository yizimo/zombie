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
export class NzCodeEditorComponent {
    /**
     * @param {?} nzCodeEditorService
     * @param {?} ngZone
     * @param {?} elementRef
     */
    constructor(nzCodeEditorService, ngZone, elementRef) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set nzEditorOption(value) {
        this.editorOption$.next(value);
    }
    /**
     * Initialize a monaco editor instance.
     * @return {?}
     */
    ngAfterViewInit() {
        this.nzCodeEditorService.requestToInit().subscribe((/**
         * @param {?} option
         * @return {?}
         */
        option => this.setup(option)));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.editorInstance) {
            this.editorInstance.dispose();
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this.setValue();
    }
    // tslint:disable-next-line no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    // tslint:disable-next-line no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    /**
     * @param {?} _value
     * @return {?}
     */
    onChange(_value) { }
    /**
     * @return {?}
     */
    onTouch() { }
    /**
     * @return {?}
     */
    layout() {
        this.resize$.next();
    }
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    setup(option) {
        inNextTick().subscribe((/**
         * @return {?}
         */
        () => {
            this.editorOptionCached = option;
            this.registerOptionChanges();
            this.initMonacoEditorInstance();
            this.registerResizeChange();
            this.setValue();
            if (!this.nzFullControl) {
                this.setValueEmitter();
            }
            this.nzEditorInitialized.emit(this.editorInstance);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    registerOptionChanges() {
        combineLatest([this.editorOption$, this.nzCodeEditorService.option$])
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([selfOpt, defaultOpt]) => {
            this.editorOptionCached = Object.assign({}, this.editorOptionCached, defaultOpt, selfOpt);
            this.updateOptionToMonaco();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    initMonacoEditorInstance() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.editorInstance =
                this.nzEditorMode === 'normal'
                    ? monaco.editor.create(this.el, Object.assign({}, this.editorOptionCached))
                    : monaco.editor.createDiffEditor(this.el, Object.assign({}, ((/** @type {?} */ (this.editorOptionCached)))));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    registerResizeChange() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            fromEvent(window, 'resize')
                .pipe(debounceTime(300), takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.layout();
            }));
            this.resize$
                .pipe(takeUntil(this.destroy$), filter((/**
             * @return {?}
             */
            () => !!this.editorInstance)), map((/**
             * @return {?}
             */
            () => ({
                width: this.el.clientWidth,
                height: this.el.clientHeight
            }))), distinctUntilChanged((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => a.width === b.width && a.height === b.height)), debounceTime(50))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.editorInstance.layout();
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    setValue() {
        if (!this.editorInstance) {
            return;
        }
        if (this.nzFullControl && this.value) {
            warn(`should not set value when you are using full control mode! It would result in ambiguous data flow!`);
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
                const model = (/** @type {?} */ (((/** @type {?} */ (this.editorInstance))).getModel()));
                model.modified.setValue(this.value);
                model.original.setValue(this.nzOriginalText);
            }
            else {
                /** @type {?} */
                const language = ((/** @type {?} */ (this.editorOptionCached))).language;
                ((/** @type {?} */ (this.editorInstance))).setModel({
                    original: monaco.editor.createModel(this.nzOriginalText, language),
                    modified: monaco.editor.createModel(this.value, language)
                });
                this.modelSet = true;
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    setValueEmitter() {
        /** @type {?} */
        const model = (/** @type {?} */ ((this.nzEditorMode === 'normal'
            ? ((/** @type {?} */ (this.editorInstance))).getModel()
            : (/** @type {?} */ (((/** @type {?} */ (this.editorInstance))).getModel())).modified)));
        model.onDidChangeContent((/**
         * @return {?}
         */
        () => {
            this.emitValue(model.getValue());
        }));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    emitValue(value) {
        this.value = value;
        this.onChange(value);
    }
    /**
     * @private
     * @return {?}
     */
    updateOptionToMonaco() {
        if (this.editorInstance) {
            this.editorInstance.updateOptions(Object.assign({}, this.editorOptionCached));
        }
    }
}
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
                        () => NzCodeEditorComponent)),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
NzCodeEditorComponent.ctorParameters = () => [
    { type: NzCodeEditorService },
    { type: NgZone },
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29kZS1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb2RlLWVkaXRvci8iLCJzb3VyY2VzIjpbIm56LWNvZGUtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLFVBQVUsRUFFVix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RixPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQTRCL0QsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBdUJoQyxZQUFvQixtQkFBd0MsRUFBVSxNQUFjLEVBQUUsVUFBc0I7UUFBeEYsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUF0QjNFLGlCQUFZLEdBQWlCLFFBQVEsQ0FBQztRQUN0QyxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNKLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFPNUIsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQXlCLENBQUM7UUFFbkYs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QUFxRTs7Ozs7SUFDckUsK0NBQThDOzs7OztJQUM5QyxzQ0FBbUI7Ozs7O0lBQ25CLHlDQUF5Qjs7Ozs7SUFFYixvREFBZ0Q7Ozs7O0lBQUUsdUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgZnJvbUV2ZW50LCBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGluTmV4dFRpY2ssIHdhcm4sIElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7IERpZmZFZGl0b3JPcHRpb25zLCBFZGl0b3JPcHRpb25zLCBKb2luZWRFZGl0b3JPcHRpb25zLCBOekVkaXRvck1vZGUgfSBmcm9tICcuL256LWNvZGUtZWRpdG9yLmRlZmluaXRpb25zJztcbmltcG9ydCB7IE56Q29kZUVkaXRvclNlcnZpY2UgfSBmcm9tICcuL256LWNvZGUtZWRpdG9yLnNlcnZpY2UnO1xuXG4vLyBJbXBvcnQgdHlwZXMgZnJvbSBtb25hY28gZWRpdG9yLlxuaW1wb3J0IHsgZWRpdG9yIH0gZnJvbSAnbW9uYWNvLWVkaXRvcic7XG5pbXBvcnQgSUVkaXRvciA9IGVkaXRvci5JRWRpdG9yO1xuaW1wb3J0IElEaWZmRWRpdG9yID0gZWRpdG9yLklEaWZmRWRpdG9yO1xuaW1wb3J0IElUZXh0TW9kZWwgPSBlZGl0b3IuSVRleHRNb2RlbDtcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxuZGVjbGFyZSBjb25zdCBtb25hY286IGFueTtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LWNvZGUtZWRpdG9yJyxcbiAgZXhwb3J0QXM6ICduekNvZGVFZGl0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotY29kZS1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtY29kZS1lZGl0b3JdJzogJ3RydWUnXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpDb2RlRWRpdG9yQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56Q29kZUVkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIG56RWRpdG9yTW9kZTogTnpFZGl0b3JNb2RlID0gJ25vcm1hbCc7XG4gIEBJbnB1dCgpIG56T3JpZ2luYWxUZXh0ID0gJyc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RnVsbENvbnRyb2wgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpUb29sa2l0OiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKSBzZXQgbnpFZGl0b3JPcHRpb24odmFsdWU6IEpvaW5lZEVkaXRvck9wdGlvbnMpIHtcbiAgICB0aGlzLmVkaXRvck9wdGlvbiQubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFZGl0b3JJbml0aWFsaXplZCA9IG5ldyBFdmVudEVtaXR0ZXI8SUVkaXRvciB8IElEaWZmRWRpdG9yPigpO1xuXG4gIGVkaXRvck9wdGlvbkNhY2hlZDogSm9pbmVkRWRpdG9yT3B0aW9ucyA9IHt9O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgZWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSByZXNpemUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBlZGl0b3JPcHRpb24kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxKb2luZWRFZGl0b3JPcHRpb25zPih7fSk7XG4gIHByaXZhdGUgZWRpdG9ySW5zdGFuY2U6IElFZGl0b3IgfCBJRGlmZkVkaXRvcjtcbiAgcHJpdmF0ZSB2YWx1ZSA9ICcnO1xuICBwcml2YXRlIG1vZGVsU2V0ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuekNvZGVFZGl0b3JTZXJ2aWNlOiBOekNvZGVFZGl0b3JTZXJ2aWNlLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGEgbW9uYWNvIGVkaXRvciBpbnN0YW5jZS5cbiAgICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm56Q29kZUVkaXRvclNlcnZpY2UucmVxdWVzdFRvSW5pdCgpLnN1YnNjcmliZShvcHRpb24gPT4gdGhpcy5zZXR1cChvcHRpb24pKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmVkaXRvckluc3RhbmNlKSB7XG4gICAgICB0aGlzLmVkaXRvckluc3RhbmNlLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRWYWx1ZSgpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCk6IGFueSB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoID0gZm47XG4gIH1cblxuICBvbkNoYW5nZShfdmFsdWU6IHN0cmluZyk6IHZvaWQge31cblxuICBvblRvdWNoKCk6IHZvaWQge31cblxuICBsYXlvdXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZXNpemUkLm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXAob3B0aW9uOiBKb2luZWRFZGl0b3JPcHRpb25zKTogdm9pZCB7XG4gICAgaW5OZXh0VGljaygpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmVkaXRvck9wdGlvbkNhY2hlZCA9IG9wdGlvbjtcbiAgICAgIHRoaXMucmVnaXN0ZXJPcHRpb25DaGFuZ2VzKCk7XG4gICAgICB0aGlzLmluaXRNb25hY29FZGl0b3JJbnN0YW5jZSgpO1xuICAgICAgdGhpcy5yZWdpc3RlclJlc2l6ZUNoYW5nZSgpO1xuICAgICAgdGhpcy5zZXRWYWx1ZSgpO1xuXG4gICAgICBpZiAoIXRoaXMubnpGdWxsQ29udHJvbCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlRW1pdHRlcigpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm56RWRpdG9ySW5pdGlhbGl6ZWQuZW1pdCh0aGlzLmVkaXRvckluc3RhbmNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJPcHRpb25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMuZWRpdG9yT3B0aW9uJCwgdGhpcy5uekNvZGVFZGl0b3JTZXJ2aWNlLm9wdGlvbiRdKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoW3NlbGZPcHQsIGRlZmF1bHRPcHRdKSA9PiB7XG4gICAgICAgIHRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkID0ge1xuICAgICAgICAgIC4uLnRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkLFxuICAgICAgICAgIC4uLmRlZmF1bHRPcHQsXG4gICAgICAgICAgLi4uc2VsZk9wdFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvblRvTW9uYWNvKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdE1vbmFjb0VkaXRvckluc3RhbmNlKCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuZWRpdG9ySW5zdGFuY2UgPVxuICAgICAgICB0aGlzLm56RWRpdG9yTW9kZSA9PT0gJ25vcm1hbCdcbiAgICAgICAgICA/IG1vbmFjby5lZGl0b3IuY3JlYXRlKHRoaXMuZWwsIHsgLi4udGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgfSlcbiAgICAgICAgICA6IG1vbmFjby5lZGl0b3IuY3JlYXRlRGlmZkVkaXRvcih0aGlzLmVsLCB7XG4gICAgICAgICAgICAgIC4uLih0aGlzLmVkaXRvck9wdGlvbkNhY2hlZCBhcyBEaWZmRWRpdG9yT3B0aW9ucylcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3RlclJlc2l6ZUNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDMwMCksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sYXlvdXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVzaXplJFxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgICAgZmlsdGVyKCgpID0+ICEhdGhpcy5lZGl0b3JJbnN0YW5jZSksXG4gICAgICAgICAgbWFwKCgpID0+ICh7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy5lbC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5lbC5jbGllbnRIZWlnaHRcbiAgICAgICAgICB9KSksXG4gICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKGEsIGIpID0+IGEud2lkdGggPT09IGIud2lkdGggJiYgYS5oZWlnaHQgPT09IGIuaGVpZ2h0KSxcbiAgICAgICAgICBkZWJvdW5jZVRpbWUoNTApXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5lZGl0b3JJbnN0YW5jZS5sYXlvdXQoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFZhbHVlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5lZGl0b3JJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm56RnVsbENvbnRyb2wgJiYgdGhpcy52YWx1ZSkge1xuICAgICAgd2Fybihgc2hvdWxkIG5vdCBzZXQgdmFsdWUgd2hlbiB5b3UgYXJlIHVzaW5nIGZ1bGwgY29udHJvbCBtb2RlISBJdCB3b3VsZCByZXN1bHQgaW4gYW1iaWd1b3VzIGRhdGEgZmxvdyFgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uekVkaXRvck1vZGUgPT09ICdub3JtYWwnKSB7XG4gICAgICBpZiAodGhpcy5tb2RlbFNldCkge1xuICAgICAgICAodGhpcy5lZGl0b3JJbnN0YW5jZS5nZXRNb2RlbCgpIGFzIElUZXh0TW9kZWwpLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKHRoaXMuZWRpdG9ySW5zdGFuY2UgYXMgSUVkaXRvcikuc2V0TW9kZWwoXG4gICAgICAgICAgbW9uYWNvLmVkaXRvci5jcmVhdGVNb2RlbCh0aGlzLnZhbHVlLCAodGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgYXMgRWRpdG9yT3B0aW9ucykubGFuZ3VhZ2UpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubW9kZWxTZXQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5tb2RlbFNldCkge1xuICAgICAgICBjb25zdCBtb2RlbCA9ICh0aGlzLmVkaXRvckluc3RhbmNlIGFzIElEaWZmRWRpdG9yKS5nZXRNb2RlbCgpITtcbiAgICAgICAgbW9kZWwubW9kaWZpZWQuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgIG1vZGVsLm9yaWdpbmFsLnNldFZhbHVlKHRoaXMubnpPcmlnaW5hbFRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2UgPSAodGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgYXMgRWRpdG9yT3B0aW9ucykubGFuZ3VhZ2U7XG4gICAgICAgICh0aGlzLmVkaXRvckluc3RhbmNlIGFzIElEaWZmRWRpdG9yKS5zZXRNb2RlbCh7XG4gICAgICAgICAgb3JpZ2luYWw6IG1vbmFjby5lZGl0b3IuY3JlYXRlTW9kZWwodGhpcy5uek9yaWdpbmFsVGV4dCwgbGFuZ3VhZ2UpLFxuICAgICAgICAgIG1vZGlmaWVkOiBtb25hY28uZWRpdG9yLmNyZWF0ZU1vZGVsKHRoaXMudmFsdWUsIGxhbmd1YWdlKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tb2RlbFNldCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRWYWx1ZUVtaXR0ZXIoKTogdm9pZCB7XG4gICAgY29uc3QgbW9kZWwgPSAodGhpcy5uekVkaXRvck1vZGUgPT09ICdub3JtYWwnXG4gICAgICA/ICh0aGlzLmVkaXRvckluc3RhbmNlIGFzIElFZGl0b3IpLmdldE1vZGVsKClcbiAgICAgIDogKHRoaXMuZWRpdG9ySW5zdGFuY2UgYXMgSURpZmZFZGl0b3IpLmdldE1vZGVsKCkhLm1vZGlmaWVkKSBhcyBJVGV4dE1vZGVsO1xuXG4gICAgbW9kZWwub25EaWRDaGFuZ2VDb250ZW50KCgpID0+IHtcbiAgICAgIHRoaXMuZW1pdFZhbHVlKG1vZGVsLmdldFZhbHVlKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlT3B0aW9uVG9Nb25hY28oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZWRpdG9ySW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuZWRpdG9ySW5zdGFuY2UudXBkYXRlT3B0aW9ucyh7IC4uLnRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkIH0pO1xuICAgIH1cbiAgfVxufVxuIl19