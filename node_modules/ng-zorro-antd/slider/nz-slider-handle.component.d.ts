/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { NgStyleInterface } from 'ng-zorro-antd/core';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { SliderShowTooltip } from './nz-slider-definitions';
import { NzSliderComponent } from './nz-slider.component';
export declare class NzSliderHandleComponent implements OnChanges, OnDestroy {
    private sliderComponent;
    private cdr;
    tooltip: NzTooltipDirective;
    nzVertical: string;
    nzOffset: number;
    nzValue: number;
    nzTooltipVisible: SliderShowTooltip;
    nzTooltipPlacement: string;
    nzTipFormatter: (value: number) => string;
    nzActive: boolean;
    tooltipTitle: string;
    style: NgStyleInterface;
    private hovers_;
    constructor(sliderComponent: NzSliderComponent, cdr: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    enterHandle: () => void;
    leaveHandle: () => void;
    private toggleTooltip;
    private updateTooltipTitle;
    private updateTooltipPosition;
    private updateStyle;
}
