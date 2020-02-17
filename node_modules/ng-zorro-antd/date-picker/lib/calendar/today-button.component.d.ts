/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import { DateHelperService, NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
export declare class TodayButtonComponent implements OnChanges {
    private dateHelper;
    locale: NzCalendarI18nInterface;
    hasTimePicker: boolean;
    disabledDate: (d: Date) => boolean;
    readonly clickToday: EventEmitter<CandyDate>;
    prefixCls: string;
    isDisabled: boolean;
    title: string;
    private now;
    constructor(dateHelper: DateHelperService);
    ngOnChanges(changes: SimpleChanges): void;
    onClickToday(): void;
}
