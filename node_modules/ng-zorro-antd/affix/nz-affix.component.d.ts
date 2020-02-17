/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { NzConfigService, NzScrollService } from 'ng-zorro-antd/core';
interface SimpleRect {
    top: number;
    left: number;
    width?: number;
    height?: number;
    bottom?: number;
}
export declare class NzAffixComponent implements AfterViewInit, OnChanges, OnDestroy {
    nzConfigService: NzConfigService;
    private scrollSrv;
    private ngZone;
    private platform;
    private fixedEl;
    nzTarget: string | Element | Window;
    nzOffsetTop: null | number;
    nzOffsetBottom: null | number;
    readonly nzChange: EventEmitter<boolean>;
    private readonly placeholderNode;
    private affixStyle?;
    private placeholderStyle?;
    private scroll$;
    private timeout?;
    private document;
    private readonly target;
    constructor(el: ElementRef, doc: any, // tslint:disable-line no-any
    nzConfigService: NzConfigService, scrollSrv: NzScrollService, ngZone: NgZone, platform: Platform);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private registerListeners;
    private removeListeners;
    getOffset(element: Element, target: Element | Window | undefined): SimpleRect;
    private getTargetRect;
    private setAffixStyle;
    private setPlaceholderStyle;
    private syncPlaceholderStyle;
    updatePosition(e: Event): void;
}
export {};
