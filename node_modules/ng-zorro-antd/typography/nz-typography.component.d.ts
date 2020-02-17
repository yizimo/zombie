/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EmbeddedViewRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { NzConfigService, NzDomEventService } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzTextCopyComponent } from './nz-text-copy.component';
import { NzTextEditComponent } from './nz-text-edit.component';
export declare class NzTypographyComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    nzConfigService: NzConfigService;
    private host;
    private cdr;
    private viewContainerRef;
    private renderer;
    private platform;
    private i18n;
    private nzDomEventService;
    nzCopyable: boolean;
    nzEditable: boolean;
    nzDisabled: boolean;
    nzExpandable: boolean;
    nzEllipsis: boolean;
    nzContent: string;
    nzEllipsisRows: number;
    nzType: 'secondary' | 'warning' | 'danger' | undefined;
    nzCopyText: string | undefined;
    readonly nzContentChange: EventEmitter<string>;
    readonly nzCopy: EventEmitter<string>;
    readonly nzExpandChange: EventEmitter<void>;
    textEditRef: NzTextEditComponent;
    textCopyRef: NzTextCopyComponent;
    ellipsisContainer: ElementRef<HTMLSpanElement>;
    expandableBtn: ElementRef<HTMLSpanElement>;
    contentTemplate: TemplateRef<{
        content: string;
    }>;
    locale: any;
    editing: boolean;
    ellipsisText: string | undefined;
    cssEllipsis: boolean;
    isEllipsis: boolean;
    expanded: boolean;
    ellipsisStr: string;
    readonly canCssEllipsis: boolean;
    private viewInit;
    private rfaId;
    private destroy$;
    private windowResizeSubscription;
    readonly copyText: string;
    constructor(nzConfigService: NzConfigService, host: ElementRef<HTMLElement>, cdr: ChangeDetectorRef, viewContainerRef: ViewContainerRef, renderer: Renderer2, platform: Platform, i18n: NzI18nService, nzDomEventService: NzDomEventService);
    onTextCopy(text: string): void;
    onStartEditing(): void;
    onEndEditing(text: string): void;
    onExpand(): void;
    canUseCSSEllipsis(): boolean;
    renderOnNextFrame(): void;
    getOriginContentViewRef(): {
        viewRef: EmbeddedViewRef<{
            content: string;
        }>;
        removeView(): void;
    };
    syncEllipsis(): void;
    private renderAndSubscribeWindowResize;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
