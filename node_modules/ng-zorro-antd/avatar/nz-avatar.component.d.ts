/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { NzConfigService, NzShapeSCType, NzSizeLDSType, NzUpdateHostClassService } from 'ng-zorro-antd/core';
export declare class NzAvatarComponent implements OnChanges {
    nzConfigService: NzConfigService;
    private elementRef;
    private cd;
    private updateHostClassService;
    private renderer;
    private platform;
    nzShape: NzShapeSCType;
    nzSize: NzSizeLDSType | number;
    nzText: string;
    nzSrc: string;
    nzSrcSet: string;
    nzAlt: string;
    nzIcon: string;
    readonly nzError: EventEmitter<Event>;
    oldAPIIcon: boolean;
    hasText: boolean;
    hasSrc: boolean;
    hasIcon: boolean;
    textStyles: {};
    textEl: ElementRef;
    private el;
    private prefixCls;
    private sizeMap;
    constructor(nzConfigService: NzConfigService, elementRef: ElementRef, cd: ChangeDetectorRef, updateHostClassService: NzUpdateHostClassService, renderer: Renderer2, platform: Platform);
    setClass(): this;
    imgError($event: Event): void;
    ngOnChanges(changes: SimpleChanges): void;
    private calcStringSize;
    private notifyCalc;
    private setSizeStyle;
}
