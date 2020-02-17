/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { CandyDate, FunctionProp } from 'ng-zorro-antd/core';
import { NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
import { CompatibleValue, DisabledDateFn, DisabledTimeConfig, DisabledTimeFn, PanelMode, PresetRanges, SupportTimeOptions } from '../../standard-types';
export declare class DateRangePopupComponent implements OnInit, OnChanges {
    isRange: boolean;
    showWeek: boolean;
    locale: NzCalendarI18nInterface;
    format: string;
    placeholder: string | string[];
    disabledDate: DisabledDateFn;
    disabledTime: DisabledTimeFn;
    showToday: boolean;
    showTime: SupportTimeOptions | boolean;
    extraFooter: TemplateRef<void> | string;
    ranges: PresetRanges;
    dateRender: FunctionProp<TemplateRef<Date> | string>;
    popupStyle: object;
    dropdownClassName: string;
    panelMode: PanelMode | PanelMode[];
    value: CompatibleValue;
    readonly panelModeChange: EventEmitter<"decade" | "year" | "month" | "date" | "time" | PanelMode[]>;
    readonly calendarChange: EventEmitter<CompatibleValue>;
    readonly valueChange: EventEmitter<CompatibleValue>;
    readonly inputChange: EventEmitter<CompatibleValue>;
    readonly resultOk: EventEmitter<void>;
    readonly closePicker: EventEmitter<void>;
    prefixCls: string;
    showTimePicker: boolean;
    timeOptions: SupportTimeOptions | SupportTimeOptions[] | null;
    valueForRangeShow: CandyDate[];
    selectedValue: CandyDate[];
    hoverValue: CandyDate[];
    readonly hasTimePicker: boolean;
    readonly hasFooter: boolean;
    private partTypeMap;
    [property: string]: any;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onShowTimePickerChange(show: boolean): void;
    onClickOk(): void;
    onClickToday(value: CandyDate): void;
    onDayHover(value: CandyDate): void;
    onPanelModeChange(mode: PanelMode, partType?: RangePartType): void;
    onHeaderChange(value: CandyDate, partType?: RangePartType): void;
    onSelectTime(value: CandyDate, partType?: RangePartType): void;
    changeValueFromInput(value: {
        date: CandyDate;
        isEnter: boolean;
    }, partType?: RangePartType): void;
    changeValueFromSelect(value: CandyDate): void;
    enablePrevNext(direction: 'prev' | 'next', partType?: RangePartType): boolean;
    getPanelMode(partType?: RangePartType): PanelMode;
    getValue(partType?: RangePartType): CandyDate;
    getValueBySelector(partType?: RangePartType): CandyDate;
    getPartTypeIndex(partType?: RangePartType): number;
    getPlaceholder(partType?: RangePartType): string;
    hasSelectedValue(): boolean;
    disabledStartTime: (value: Date | Date[]) => DisabledTimeConfig;
    disabledEndTime: (value: Date | Date[]) => DisabledTimeConfig;
    isAllowedSelectedValue(): boolean;
    timePickerDisabled(): boolean;
    okDisabled(): boolean;
    getTimeOptions(partType?: RangePartType): SupportTimeOptions | null;
    onClickPresetRange(val: PresetRanges[keyof PresetRanges]): void;
    onPresetRangeMouseLeave(): void;
    onHoverPresetRange(val: PresetRanges[keyof PresetRanges]): void;
    getObjectKeys(obj: object): string[];
    private closePickerPanel;
    private clearHoverValue;
    private buildTimeOptions;
    private overrideTimeOptions;
    private setValueFromInput;
    private setValue;
    private overrideHms;
    private isValidRange;
    private normalizeRangeValue;
    private setRangeValue;
    private cloneRangeDate;
    private initialArray;
}
export declare type RangePartType = 'left' | 'right';
