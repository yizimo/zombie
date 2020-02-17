/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkOverlayOrigin, ConnectionPositionPair } from '@angular/cdk/overlay';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzConfigService, NzUpdateHostClassService as UpdateCls } from 'ng-zorro-antd/core';
export declare class NzTimePickerComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnChanges {
    nzConfigService: NzConfigService;
    private element;
    private renderer;
    private updateCls;
    cdr: ChangeDetectorRef;
    private _value;
    private _onChange;
    private _onTouched;
    isInit: boolean;
    origin: CdkOverlayOrigin;
    overlayPositions: ConnectionPositionPair[];
    inputRef: ElementRef<HTMLInputElement>;
    nzSize: string | null;
    nzHourStep: number;
    nzMinuteStep: number;
    nzSecondStep: number;
    nzClearText: string;
    nzPopupClassName: string;
    nzPlaceHolder: string;
    nzAddOn: TemplateRef<void>;
    nzDefaultOpenValue: Date;
    nzDisabledHours: () => number[];
    nzDisabledMinutes: (hour: number) => number[];
    nzDisabledSeconds: (hour: number, minute: number) => number[];
    nzFormat: string;
    nzOpen: boolean;
    nzUse12Hours: boolean;
    readonly nzOpenChange: EventEmitter<boolean>;
    nzHideDisabledOptions: boolean;
    nzAllowEmpty: boolean;
    nzDisabled: boolean;
    nzAutoFocus: boolean;
    value: Date | null;
    open(): void;
    close(): void;
    updateAutoFocus(): void;
    onClickClearBtn(): void;
    private setClassMap;
    focus(): void;
    blur(): void;
    constructor(nzConfigService: NzConfigService, element: ElementRef, renderer: Renderer2, updateCls: UpdateCls, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    writeValue(time: Date | null): void;
    registerOnChange(fn: (time: Date | null) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
}
