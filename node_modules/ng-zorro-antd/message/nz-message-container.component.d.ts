/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, OnInit } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core';
import { NzMessageConfigLegacy } from './nz-message-config';
import { NzMessageDataFilled, NzMessageDataOptions } from './nz-message.definitions';
export declare class NzMessageContainerComponent implements OnInit {
    protected cdr: ChangeDetectorRef;
    protected nzConfigService: NzConfigService;
    messages: NzMessageDataFilled[];
    config: Required<NzMessageConfigLegacy>;
    top: string | null;
    constructor(cdr: ChangeDetectorRef, nzConfigService: NzConfigService, defaultConfig: NzMessageConfigLegacy, config: NzMessageConfigLegacy);
    ngOnInit(): void;
    setConfig(config?: NzMessageConfigLegacy): void;
    /**
     * Create a new message.
     * @param message Parsed message configuration.
     */
    createMessage(message: NzMessageDataFilled): void;
    /**
     * Remove a message by `messageId`.
     * @param messageId Id of the message to be removed.
     * @param userAction Whether this is closed by user interaction.
     */
    removeMessage(messageId: string, userAction?: boolean): void;
    /**
     * Remove all messages.
     */
    removeMessageAll(): void;
    protected subscribeConfigChange(): void;
    protected mergeMessageConfig(config?: NzMessageConfigLegacy): Required<NzMessageConfigLegacy>;
    /**
     * Merge default options and custom message options
     * @param options
     */
    protected _mergeMessageOptions(options?: NzMessageDataOptions): NzMessageDataOptions;
}
