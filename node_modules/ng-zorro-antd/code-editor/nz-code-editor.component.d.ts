/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy, TemplateRef } from '@angular/core';
import { JoinedEditorOptions, NzEditorMode } from './nz-code-editor.definitions';
import { NzCodeEditorService } from './nz-code-editor.service';
import { editor } from 'monaco-editor';
export declare class NzCodeEditorComponent implements OnDestroy, AfterViewInit {
    private nzCodeEditorService;
    private ngZone;
    nzEditorMode: NzEditorMode;
    nzOriginalText: string;
    nzLoading: boolean;
    nzFullControl: boolean;
    nzToolkit: TemplateRef<void>;
    nzEditorOption: JoinedEditorOptions;
    readonly nzEditorInitialized: EventEmitter<editor.IEditor | editor.IDiffEditor>;
    editorOptionCached: JoinedEditorOptions;
    private readonly el;
    private destroy$;
    private resize$;
    private editorOption$;
    private editorInstance;
    private value;
    private modelSet;
    constructor(nzCodeEditorService: NzCodeEditorService, ngZone: NgZone, elementRef: ElementRef);
    /**
     * Initialize a monaco editor instance.
     */
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    writeValue(value: string): void;
    registerOnChange(fn: (value: string) => void): any;
    registerOnTouched(fn: any): void;
    onChange(_value: string): void;
    onTouch(): void;
    layout(): void;
    private setup;
    private registerOptionChanges;
    private initMonacoEditorInstance;
    private registerResizeChange;
    private setValue;
    private setValueEmitter;
    private emitValue;
    private updateOptionToMonaco;
}
