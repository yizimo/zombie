/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import { DateHelperService, NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
export declare class CalendarInputComponent implements OnInit {
    private dateHelper;
    locale: NzCalendarI18nInterface;
    format: string;
    placeholder: string;
    disabledDate: (d: Date) => boolean;
    value: CandyDate;
    autoFocus: boolean;
    inputRef: ElementRef;
    readonly valueChange: EventEmitter<{
        date: CandyDate;
        isEnter: boolean;
    }>;
    prefixCls: string;
    invalidInputClass: string;
    constructor(dateHelper: DateHelperService);
    ngOnInit(): void;
    onInputKeyup(event: KeyboardEvent, isEnter?: boolean): void;
    toReadableInput(value: CandyDate): string;
    private checkValidInputDate;
}
