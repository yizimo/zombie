/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { isNonEmptyString, isTemplateRef } from 'ng-zorro-antd/core';
import { DateCell } from './date-table.component';
export declare class DateTableCellComponent {
    isTemplateRef: typeof isTemplateRef;
    isNonEmptyString: typeof isNonEmptyString;
    prefixCls: 'ant-calendar' | 'ant-fullcalendar';
    cell: DateCell;
}
