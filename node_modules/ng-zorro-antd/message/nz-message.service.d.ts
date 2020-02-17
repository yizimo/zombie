/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Overlay } from '@angular/cdk/overlay';
import { ApplicationRef, ComponentFactoryResolver, Injector, TemplateRef } from '@angular/core';
import { NzSingletonService } from 'ng-zorro-antd/core';
import { NzMessageBaseService } from './nz-message-base.service';
import { NzMessageConfigLegacy } from './nz-message-config';
import { NzMessageContainerComponent } from './nz-message-container.component';
import { NzMessageData, NzMessageDataFilled, NzMessageDataOptions } from './nz-message.definitions';
export declare class NzMessageService extends NzMessageBaseService<NzMessageContainerComponent, NzMessageData, NzMessageConfigLegacy> {
    constructor(nzSingletonService: NzSingletonService, overlay: Overlay, injector: Injector, cfr: ComponentFactoryResolver, appRef: ApplicationRef);
    success(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageDataFilled;
    error(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageDataFilled;
    info(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageDataFilled;
    warning(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageDataFilled;
    loading(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageDataFilled;
    create(type: 'success' | 'info' | 'warning' | 'error' | 'loading' | string, content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageDataFilled;
}
