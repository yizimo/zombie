/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core';
import { NzMessageContainerComponent } from 'ng-zorro-antd/message';
import { NzNotificationConfigLegacy } from './nz-notification-config';
import { NzNotificationDataFilled } from './nz-notification.definitions';
export declare class NzNotificationContainerComponent extends NzMessageContainerComponent {
    config: Required<NzNotificationConfigLegacy>;
    bottom: string | null;
    /**
     * @override
     */
    messages: Array<Required<NzNotificationDataFilled>>;
    constructor(cdr: ChangeDetectorRef, nzConfigService: NzConfigService, defaultConfig: NzNotificationConfigLegacy, config: NzNotificationConfigLegacy);
    /**
     * @override
     */
    setConfig(config?: NzNotificationConfigLegacy): void;
    /**
     * Create a new notification.
     * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`,
     * replace its content instead of create a new one.
     * @override
     * @param notification
     */
    createMessage(notification: NzNotificationDataFilled): void;
    /**
     * @override
     */
    protected subscribeConfigChange(): void;
    private replaceNotification;
}
