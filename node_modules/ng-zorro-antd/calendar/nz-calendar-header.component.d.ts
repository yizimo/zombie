/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnInit } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService as I18n } from 'ng-zorro-antd/i18n';
export declare class NzCalendarHeaderComponent implements OnInit {
    private i18n;
    private dateHelper;
    mode: 'month' | 'year';
    fullscreen: boolean;
    readonly modeChange: EventEmitter<'month' | 'year'>;
    activeDate: CandyDate;
    readonly yearChange: EventEmitter<number>;
    readonly monthChange: EventEmitter<number>;
    yearOffset: number;
    yearTotal: number;
    years: Array<{
        label: string;
        value: number;
    }>;
    months: Array<{
        label: string;
        value: number;
    }>;
    readonly activeYear: number;
    readonly activeMonth: number;
    readonly size: string;
    readonly yearTypeText: string;
    readonly monthTypeText: string;
    constructor(i18n: I18n, dateHelper: DateHelperService);
    ngOnInit(): void;
    updateYear(year: number): void;
    private setUpYears;
    private setUpMonths;
}
