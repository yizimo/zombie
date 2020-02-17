/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { NgStyleInterface, NzNoAnimationDirective, NzTSType } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { NzTooltipTrigger } from '../nz-tooltip.definitions';
import { NzTooltipBaseComponentLegacy } from './nz-tooltip-base-legacy.component';
import { NzTooltipBaseComponent } from './nz-tooltip-base.component';
export declare abstract class NzTooltipBaseDirective implements OnChanges, OnInit, OnDestroy, AfterViewInit {
    elementRef: ElementRef;
    protected hostView: ViewContainerRef;
    protected resolver: ComponentFactoryResolver;
    protected renderer: Renderer2;
    /**
     * @deprecated 9.0.0. This will always be `null`.
     */
    protected _tooltip?: NzTooltipBaseComponentLegacy | undefined;
    protected noAnimation?: NzNoAnimationDirective | undefined;
    directiveNameTitle?: NzTSType | null;
    specificTitle?: NzTSType | null;
    directiveNameContent?: NzTSType | null;
    specificContent?: NzTSType | null;
    specificTrigger?: NzTooltipTrigger;
    specificPlacement?: string;
    tooltipRef: ComponentRef<NzTooltipBaseComponent>;
    /**
     * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
     * Please use a more specific API. Like `nzTooltipTitle`.
     */
    nzTitle: NzTSType | null;
    /**
     * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
     * Please use a more specific API. Like `nzPopoverContent`.
     */
    nzContent: NzTSType | null;
    /**
     * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
     * Please use a more specific API. Like `nzTooltipTrigger`.
     */
    nzTrigger: NzTooltipTrigger;
    /**
     * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
     * Please use a more specific API. Like `nzTooltipPlacement`.
     */
    nzPlacement: string;
    nzMouseEnterDelay: number;
    nzMouseLeaveDelay: number;
    nzOverlayClassName: string;
    nzOverlayStyle: NgStyleInterface;
    nzVisible: boolean;
    /**
     * For create tooltip dynamically. This should be override for each different component.
     */
    protected componentFactory: ComponentFactory<NzTooltipBaseComponent>;
    /**
     * This true title that would be used in other parts on this component.
     */
    protected readonly title: NzTSType | null;
    protected readonly content: NzTSType | null;
    protected readonly placement: string;
    protected readonly trigger: NzTooltipTrigger;
    protected needProxyProperties: string[];
    readonly nzVisibleChange: EventEmitter<boolean>;
    tooltip: NzTooltipBaseComponent;
    isTooltipComponentVisible: boolean;
    /**
     * @deprecated 9.0.0. Tooltips would always be dynamic in 9.0.0.
     */
    protected isDynamicTooltip: boolean;
    protected readonly triggerUnlisteners: Array<() => void>;
    protected $destroy: Subject<void>;
    private delayTimer?;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, 
    /**
     * @deprecated 9.0.0. This will always be `null`.
     */
    _tooltip?: NzTooltipBaseComponentLegacy | undefined, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    show(): void;
    hide(): void;
    /**
     * Force the component to update its position.
     */
    updatePosition(): void;
    /**
     * Create a dynamic tooltip component. This method can be override.
     */
    protected createDynamicTooltipComponent(): void;
    protected registerTriggers(): void;
    /**
     * Sync changed properties to the component and trigger change detection in that component.
     */
    protected updateChangedProperties(propertiesOrChanges: string[] | SimpleChanges): void;
    private updateComponentValue;
    private delayEnterLeave;
    private removeTriggerListeners;
    private clearTogglingTimer;
}
