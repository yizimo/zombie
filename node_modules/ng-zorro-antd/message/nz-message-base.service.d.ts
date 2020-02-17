/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Overlay } from '@angular/cdk/overlay';
import { ApplicationRef, ComponentFactoryResolver, Injector, Type } from '@angular/core';
import { NzSingletonService } from 'ng-zorro-antd/core';
import { NzMessageConfigLegacy } from './nz-message-config';
import { NzMessageContainerComponent } from './nz-message-container.component';
import { NzMessageDataFilled, NzMessageDataOptions } from './nz-message.definitions';
export declare class NzMessageBaseService<ContainerClass extends NzMessageContainerComponent, MessageData, MessageConfig extends NzMessageConfigLegacy> {
    private nzSingletonService;
    private overlay;
    private containerClass;
    private injector;
    private cfr;
    private appRef;
    private name;
    protected _container: ContainerClass;
    constructor(nzSingletonService: NzSingletonService, overlay: Overlay, containerClass: Type<ContainerClass>, injector: Injector, cfr: ComponentFactoryResolver, appRef: ApplicationRef, name?: string);
    remove(messageId?: string): void;
    createMessage(message: MessageData, options?: NzMessageDataOptions): NzMessageDataFilled;
    config(config: MessageConfig): void;
    protected _generateMessageId(): string;
    private withContainer;
}
