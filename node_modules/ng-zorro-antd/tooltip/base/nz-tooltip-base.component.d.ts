/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { ChangeDetectorRef, EventEmitter, TemplateRef } from '@angular/core';
import { NgClassInterface, NgStyleInterface, NzNoAnimationDirective, NzTSType } from 'ng-zorro-antd/core';
import { NzTooltipTrigger } from '../nz-tooltip.definitions';
/**
 * Tooltip component. Also the base component for legacy components.
 */
export declare abstract class NzTooltipBaseComponent {
    cdr: ChangeDetectorRef;
    noAnimation?: NzNoAnimationDirective | undefined;
    nzTitle: NzTSType | null;
    nzContent: NzTSType | null;
    nzVisible: boolean;
    nzPlacement: string;
    nzOverlayClassName: string;
    nzOverlayStyle: NgStyleInterface;
    nzMouseEnterDelay: number;
    nzMouseLeaveDelay: number;
    nzTrigger: NzTooltipTrigger;
    nzTitleTemplate: TemplateRef<void>;
    nzContentTemplate: TemplateRef<void>;
    readonly nzVisibleChange: EventEmitter<boolean>;
    overlay: CdkConnectedOverlay;
    origin: CdkOverlayOrigin;
    _classMap: NgClassInterface;
    _hasBackdrop: boolean;
    _prefix: string;
    _visible: boolean;
    _positions: ConnectionPositionPair[];
    _placement: string;
    _trigger: NzTooltipTrigger;
    readonly content: string | TemplateRef<void> | null;
    readonly title: string | TemplateRef<void> | null;
    constructor(cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective | undefined);
    show(): void;
    hide(): void;
    updateByDirective(): void;
    /**
     * Force the component to update its position.
     */
    updatePosition(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    setClassMap(): void;
    setOverlayOrigin(origin: CdkOverlayOrigin): void;
    private isTitleEmpty;
    private isContentEmpty;
}
