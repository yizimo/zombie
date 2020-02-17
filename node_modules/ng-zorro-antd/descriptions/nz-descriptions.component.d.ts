/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { AfterContentInit, ChangeDetectorRef, OnChanges, OnDestroy, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { NzBreakpoint, NzConfigService, NzDomEventService } from 'ng-zorro-antd/core';
import { NzDescriptionsItemRenderProps, NzDescriptionsLayout, NzDescriptionsSize } from './nz-descriptions-definitions';
import { NzDescriptionsItemComponent } from './nz-descriptions-item.component';
export declare class NzDescriptionsComponent implements OnChanges, OnDestroy, AfterContentInit {
    nzConfigService: NzConfigService;
    private cdr;
    private mediaMatcher;
    private platform;
    private nzDomEventService;
    items: QueryList<NzDescriptionsItemComponent>;
    nzBordered: boolean;
    nzLayout: NzDescriptionsLayout;
    nzColumn: number | {
        [key in NzBreakpoint]: number;
    };
    nzSize: NzDescriptionsSize;
    nzTitle: string | TemplateRef<void>;
    nzColon: boolean;
    itemMatrix: NzDescriptionsItemRenderProps[][];
    realColumn: number;
    private destroy$;
    private resize$;
    constructor(nzConfigService: NzConfigService, cdr: ChangeDetectorRef, mediaMatcher: MediaMatcher, platform: Platform, nzDomEventService: NzDomEventService);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    /**
     * Prepare the render matrix according to description items' spans.
     */
    private prepareMatrix;
    private matchMedia;
    private getColumn;
}
