/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, DoCheck, ElementRef, NgZone, OnDestroy } from '@angular/core';
import { NzDomEventService } from 'ng-zorro-antd/core';
export interface AutoSizeType {
    minRows?: number;
    maxRows?: number;
}
export declare function isAutoSizeType(value: string | boolean | AutoSizeType): value is AutoSizeType;
export declare class NzAutosizeDirective implements AfterViewInit, OnDestroy, DoCheck {
    private elementRef;
    private ngZone;
    private platform;
    private nzDomEventService;
    private autosize;
    private el;
    private cachedLineHeight;
    private previousValue;
    private previousMinRows;
    private minRows;
    private maxRows;
    private destroy$;
    private inputGap;
    nzAutosize: string | boolean | AutoSizeType;
    resizeToFitContent(force?: boolean): void;
    private cacheTextareaLineHeight;
    setMinHeight(): void;
    setMaxHeight(): void;
    noopInputHandler(): void;
    constructor(elementRef: ElementRef, ngZone: NgZone, platform: Platform, nzDomEventService: NzDomEventService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngDoCheck(): void;
}
