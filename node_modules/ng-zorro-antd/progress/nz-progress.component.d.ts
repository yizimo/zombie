/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NgStyleInterface, NzConfigService } from 'ng-zorro-antd/core';
import { NzProgressCirclePath, NzProgressFormatter, NzProgressGapPositionType, NzProgressStatusType, NzProgressStrokeColorType, NzProgressStrokeLinecapType, NzProgressTypeType } from './nz-progress.definitions';
export declare class NzProgressComponent implements OnChanges, OnInit, OnDestroy {
    nzConfigService: NzConfigService;
    nzShowInfo: boolean;
    nzWidth: number;
    nzStrokeColor: NzProgressStrokeColorType;
    nzSize: 'default' | 'small';
    nzFormat?: NzProgressFormatter;
    nzSuccessPercent?: number;
    nzPercent: number;
    nzStrokeWidth: number;
    nzGapDegree: number;
    nzStatus: NzProgressStatusType;
    nzType: NzProgressTypeType;
    nzGapPosition: NzProgressGapPositionType;
    nzStrokeLinecap: NzProgressStrokeLinecapType;
    /** Gradient style when `nzType` is `line`. */
    lineGradient: string | null;
    /** If user uses gradient color. */
    isGradient: boolean;
    /**
     * Each progress whose `nzType` is circle or dashboard should have unique id to
     * define `<linearGradient>`.
     */
    gradientId: number;
    /** Paths to rendered in the template. */
    progressCirclePath: NzProgressCirclePath[];
    circleGradient: Array<{
        offset: string;
        color: string;
    }>;
    trailPathStyle: NgStyleInterface;
    pathString: string;
    icon: string;
    trackByFn: (index: number) => string;
    readonly formatter: NzProgressFormatter;
    readonly status: NzProgressStatusType;
    readonly strokeWidth: number;
    readonly isCircleStyle: boolean;
    private cachedStatus;
    private inferredStatus;
    private destroy$;
    constructor(nzConfigService: NzConfigService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private updateIcon;
    /**
     * Calculate paths when the type is circle or dashboard.
     */
    private getCirclePaths;
    private setStrokeColor;
}
