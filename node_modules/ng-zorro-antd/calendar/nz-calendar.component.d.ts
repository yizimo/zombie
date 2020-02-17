/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CandyDate } from 'ng-zorro-antd/core';
export declare type ModeType = 'month' | 'year';
export declare type DateTemplate = TemplateRef<{
    $implicit: Date;
}>;
export declare class NzCalendarComponent implements ControlValueAccessor {
    private cdr;
    activeDate: CandyDate;
    prefixCls: string;
    private onChangeFn;
    private onTouchFn;
    nzMode: ModeType;
    readonly nzModeChange: EventEmitter<ModeType>;
    readonly nzPanelChange: EventEmitter<{
        date: Date;
        mode: ModeType;
    }>;
    readonly nzSelectChange: EventEmitter<Date>;
    nzValue: Date;
    readonly nzValueChange: EventEmitter<Date>;
    /**
     * Cannot use @Input and @ContentChild on one variable
     * because { static: false } will make @Input property get delayed
     **/
    nzDateCell: DateTemplate;
    nzDateCellChild: DateTemplate;
    readonly dateCell: DateTemplate;
    nzDateFullCell: DateTemplate;
    nzDateFullCellChild: DateTemplate;
    readonly dateFullCell: DateTemplate;
    nzMonthCell: DateTemplate;
    nzMonthCellChild: DateTemplate;
    readonly monthCell: DateTemplate;
    nzMonthFullCell: DateTemplate;
    nzMonthFullCellChild: DateTemplate;
    readonly monthFullCell: DateTemplate;
    nzFullscreen: boolean;
    /**
     * @deprecated use `[nzFullscreen]` instead.
     */
    nzCard: boolean;
    constructor(cdr: ChangeDetectorRef);
    onModeChange(mode: ModeType): void;
    onYearSelect(year: number): void;
    onMonthSelect(month: number): void;
    onDateSelect(date: CandyDate): void;
    writeValue(value: Date | null): void;
    registerOnChange(fn: (date: Date) => void): void;
    registerOnTouched(fn: () => void): void;
    private updateDate;
}
