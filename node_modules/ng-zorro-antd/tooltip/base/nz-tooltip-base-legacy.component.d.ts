/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectorRef, EventEmitter, OnChanges } from '@angular/core';
import { NgStyleInterface, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipTrigger } from '../nz-tooltip.definitions';
import { NzTooltipBaseComponent } from './nz-tooltip-base.component';
/**
 * This component overrides some properties of `NzTooltipBaseComponent` and make them
 * input properties.
 *
 * @deprecated 9.0.0 tooltip and other components deprecate the old API. This
 * would be removed in 9.0.0.
 *
 * @example This example is what going to be removed
 *
 * ```html
 * <nz-tooltip>
 *   <a nz-tooltip></a>
 * </nz-tooltip>
 * ```
 */
export declare class NzTooltipBaseComponentLegacy extends NzTooltipBaseComponent implements OnChanges {
    noAnimation?: NzNoAnimationDirective | undefined;
    overlay: CdkConnectedOverlay;
    nzOverlayClassName: string;
    nzOverlayStyle: NgStyleInterface;
    nzMouseEnterDelay: number;
    nzMouseLeaveDelay: number;
    nzPlacement: string;
    nzVisible: boolean;
    nzTrigger: NzTooltipTrigger;
    readonly nzVisibleChange: EventEmitter<boolean>;
    constructor(cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnChanges(): void;
}
