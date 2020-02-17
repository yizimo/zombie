/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { CandyDate, FunctionProp } from 'ng-zorro-antd/core';
import { DateHelperService, NzCalendarI18nInterface, NzI18nService } from 'ng-zorro-antd/i18n';
export declare class DateTableComponent implements OnChanges, OnInit {
    private i18n;
    private dateHelper;
    _value: CandyDate;
    headWeekDays: WeekDayLabel[];
    weekRows: WeekRow[];
    prefixCls: string;
    locale: NzCalendarI18nInterface;
    selectedValue: CandyDate[];
    hoverValue: CandyDate[];
    value: CandyDate;
    activeDate: CandyDate;
    showWeek: boolean;
    disabledDate: (d: Date) => boolean;
    dateCellRender: FunctionProp<TemplateRef<Date> | string>;
    dateFullCellRender: FunctionProp<TemplateRef<Date> | string>;
    readonly dayHover: EventEmitter<CandyDate>;
    readonly valueChange: EventEmitter<CandyDate>;
    constructor(i18n: NzI18nService, dateHelper: DateHelperService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private isDateRealChange;
    private isSameDate;
    private render;
    private changeValueFromInside;
    private makeHeadWeekDays;
    private getVeryShortWeekFormat;
    private makeWeekRows;
    trackByDateFn(_index: number, item: DateCell): string;
    trackByWeekFn(_index: number, item: WeekRow): string;
}
export interface WeekDayLabel {
    short: string;
    veryShort: string;
}
export interface DateCell {
    value: Date;
    label: string;
    title: string;
    dateCellRender: TemplateRef<Date> | string;
    dateFullCellRender: TemplateRef<Date> | string;
    content: string;
    isSelected?: boolean;
    isToday?: boolean;
    isDisabled?: boolean;
    isSelectedStartDate?: boolean;
    isSelectedEndDate?: boolean;
    isInRange?: boolean;
    classMap?: object;
    onClick(date: CandyDate): void;
    onMouseEnter(): void;
}
export interface WeekRow {
    isCurrent?: boolean;
    isActive?: boolean;
    weekNum?: number;
    year?: number;
    classMap?: object;
    dateCells: DateCell[];
}
