/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ElementRef, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { IndexableObject, NzAlignType, NzDomEventService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
export declare type NzJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between';
export declare type NzGridType = 'flex' | null;
export declare class NzRowDirective implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    elementRef: ElementRef;
    renderer: Renderer2;
    nzUpdateHostClassService: NzUpdateHostClassService;
    mediaMatcher: MediaMatcher;
    ngZone: NgZone;
    platform: Platform;
    private nzDomEventService;
    nzType: NzGridType;
    nzAlign: NzAlignType;
    nzJustify: NzJustify;
    nzGutter: number | IndexableObject;
    private el;
    private prefixCls;
    private breakPoint;
    actualGutter: number;
    actualGutter$: Subject<number>;
    destroy$: Subject<unknown>;
    calculateGutter(): number;
    updateGutter(): void;
    watchMedia(): void;
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    setClassMap(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService, mediaMatcher: MediaMatcher, ngZone: NgZone, platform: Platform, nzDomEventService: NzDomEventService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
