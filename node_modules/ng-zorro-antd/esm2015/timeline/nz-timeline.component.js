/**
 * @fileoverview added by tsickle
 * Generated from: nz-timeline.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, Input, QueryList, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { reverseChildNodes } from 'ng-zorro-antd/core';
import { NzTimelineItemComponent } from './nz-timeline-item.component';
export class NzTimelineComponent {
    /**
     * @param {?} cdr
     * @param {?} platform
     */
    constructor(cdr, platform) {
        this.cdr = cdr;
        this.platform = platform;
        this.nzReverse = false;
        this.isPendingBoolean = false;
        this.destroy$ = new Subject();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const modeChanges = changes.nzMode;
        /** @type {?} */
        const reverseChanges = changes.nzReverse;
        /** @type {?} */
        const pendingChanges = changes.nzPending;
        if (modeChanges && (modeChanges.previousValue !== modeChanges.currentValue || modeChanges.isFirstChange())) {
            this.updateChildren();
        }
        if (reverseChanges &&
            reverseChanges.previousValue !== reverseChanges.currentValue &&
            !reverseChanges.isFirstChange()) {
            this.reverseChildTimelineDots();
        }
        if (pendingChanges) {
            this.isPendingBoolean = pendingChanges.currentValue === true;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateChildren();
        if (this.listOfTimeLine) {
            this.listOfTimeLine.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            () => {
                this.updateChildren();
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @private
     * @return {?}
     */
    updateChildren() {
        if (this.listOfTimeLine && this.listOfTimeLine.length) {
            /** @type {?} */
            const length = this.listOfTimeLine.length;
            this.listOfTimeLine.toArray().forEach((/**
             * @param {?} item
             * @param {?} index
             * @return {?}
             */
            (item, index) => {
                item.isLast = !this.nzReverse ? index === length - 1 : index === 0;
                item.position =
                    this.nzMode === 'left' || !this.nzMode
                        ? undefined
                        : this.nzMode === 'right'
                            ? 'right'
                            : this.nzMode === 'alternate' && index % 2 === 0
                                ? 'left'
                                : 'right';
                item.detectChanges();
            }));
            this.cdr.markForCheck();
        }
    }
    /**
     * @private
     * @return {?}
     */
    reverseChildTimelineDots() {
        if (this.platform.isBrowser) {
            reverseChildNodes((/** @type {?} */ (this.timeline.nativeElement)));
            this.updateChildren();
        }
    }
}
NzTimelineComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-timeline',
                exportAs: 'nzTimeline',
                template: "<ul\n  class=\"ant-timeline\"\n  [class.ant-timeline-right]=\"nzMode === 'right'\"\n  [class.ant-timeline-alternate]=\"nzMode === 'alternate'\"\n  [class.ant-timeline-pending]=\"!!nzPending\"\n  [class.ant-timeline-reverse]=\"nzReverse\"\n  #timeline>\n  <!-- User inserted timeline dots. -->\n  <ng-content></ng-content>\n  <!-- Pending dot. -->\n  <li *ngIf=\"nzPending\" class=\"ant-timeline-item ant-timeline-item-pending\">\n    <div class=\"ant-timeline-item-tail\"></div>\n    <div class=\"ant-timeline-item-head ant-timeline-item-head-custom ant-timeline-item-head-blue\">\n      <ng-container *nzStringTemplateOutlet=\"nzPendingDot\">\n        {{ nzPendingDot }}<i *ngIf=\"!nzPendingDot\" nz-icon nzType=\"loading\"></i>\n      </ng-container>\n    </div>\n    <div class=\"ant-timeline-item-content\">\n      <ng-container *nzStringTemplateOutlet=\"nzPending\">\n        {{ isPendingBoolean ? '' : nzPending }}\n      </ng-container>\n    </div>\n  </li>\n</ul>\n"
            }] }
];
/** @nocollapse */
NzTimelineComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Platform }
];
NzTimelineComponent.propDecorators = {
    timeline: [{ type: ViewChild, args: ['timeline', { static: false },] }],
    listOfTimeLine: [{ type: ContentChildren, args: [NzTimelineItemComponent,] }],
    _pendingContent: [{ type: ContentChild, args: ['pending', { static: false },] }],
    nzMode: [{ type: Input }],
    nzPending: [{ type: Input }],
    nzPendingDot: [{ type: Input }],
    nzReverse: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzTimelineComponent.prototype.timeline;
    /** @type {?} */
    NzTimelineComponent.prototype.listOfTimeLine;
    /** @type {?} */
    NzTimelineComponent.prototype._pendingContent;
    /** @type {?} */
    NzTimelineComponent.prototype.nzMode;
    /** @type {?} */
    NzTimelineComponent.prototype.nzPending;
    /** @type {?} */
    NzTimelineComponent.prototype.nzPendingDot;
    /** @type {?} */
    NzTimelineComponent.prototype.nzReverse;
    /** @type {?} */
    NzTimelineComponent.prototype.isPendingBoolean;
    /**
     * @type {?}
     * @private
     */
    NzTimelineComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzTimelineComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTimelineComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90aW1lbGluZS8iLCJzb3VyY2VzIjpbIm56LXRpbWVsaW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFZdkUsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFjOUIsWUFBb0IsR0FBc0IsRUFBVSxRQUFrQjtRQUFsRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFON0QsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUVwQyxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFFMUIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFFa0MsQ0FBQzs7Ozs7SUFFMUUsV0FBVyxDQUFDLE9BQXNCOztjQUMxQixXQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU07O2NBQzVCLGNBQWMsR0FBRyxPQUFPLENBQUMsU0FBUzs7Y0FDbEMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxTQUFTO1FBRXhDLElBQUksV0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDLGFB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QUFFLEtBQUssRUFBRTs2QkFDdkMsZUFBZSxTQUFDLHVCQUF1Qjs4QkFDdkMsWUFBWSxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7cUJBRXpDLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7Ozs7SUFQTix1Q0FBNEU7O0lBQzVFLDZDQUE2Rjs7SUFDN0YsOENBQStFOztJQUUvRSxxQ0FBZ0M7O0lBQ2hDLHdDQUF5RDs7SUFDekQsMkNBQWtEOztJQUNsRCx3Q0FBb0M7O0lBRXBDLCtDQUFrQzs7Ozs7SUFFbEMsdUNBQXVDOzs7OztJQUUzQixrQ0FBOEI7Ozs7O0lBQUUsdUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBRdWVyeUxpc3QsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyByZXZlcnNlQ2hpbGROb2RlcyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7IE56VGltZWxpbmVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uei10aW1lbGluZS1pdGVtLmNvbXBvbmVudCc7XG5cbmV4cG9ydCB0eXBlIE56VGltZWxpbmVNb2RlID0gJ2xlZnQnIHwgJ2FsdGVybmF0ZScgfCAncmlnaHQnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBzZWxlY3RvcjogJ256LXRpbWVsaW5lJyxcbiAgZXhwb3J0QXM6ICduelRpbWVsaW5lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRpbWVsaW5lLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelRpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKCd0aW1lbGluZScsIHsgc3RhdGljOiBmYWxzZSB9KSB0aW1lbGluZTogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpUaW1lbGluZUl0ZW1Db21wb25lbnQpIGxpc3RPZlRpbWVMaW5lOiBRdWVyeUxpc3Q8TnpUaW1lbGluZUl0ZW1Db21wb25lbnQ+O1xuICBAQ29udGVudENoaWxkKCdwZW5kaW5nJywgeyBzdGF0aWM6IGZhbHNlIH0pIF9wZW5kaW5nQ29udGVudDogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KCkgbnpNb2RlOiBOelRpbWVsaW5lTW9kZTtcbiAgQElucHV0KCkgbnpQZW5kaW5nOiBzdHJpbmcgfCBib29sZWFuIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56UGVuZGluZ0RvdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56UmV2ZXJzZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGlzUGVuZGluZ0Jvb2xlYW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCBtb2RlQ2hhbmdlcyA9IGNoYW5nZXMubnpNb2RlO1xuICAgIGNvbnN0IHJldmVyc2VDaGFuZ2VzID0gY2hhbmdlcy5uelJldmVyc2U7XG4gICAgY29uc3QgcGVuZGluZ0NoYW5nZXMgPSBjaGFuZ2VzLm56UGVuZGluZztcblxuICAgIGlmIChtb2RlQ2hhbmdlcyAmJiAobW9kZUNoYW5nZXMucHJldmlvdXNWYWx1ZSAhPT0gbW9kZUNoYW5nZXMuY3VycmVudFZhbHVlIHx8IG1vZGVDaGFuZ2VzLmlzRmlyc3RDaGFuZ2UoKSkpIHtcbiAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW4oKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgcmV2ZXJzZUNoYW5nZXMgJiZcbiAgICAgIHJldmVyc2VDaGFuZ2VzLnByZXZpb3VzVmFsdWUgIT09IHJldmVyc2VDaGFuZ2VzLmN1cnJlbnRWYWx1ZSAmJlxuICAgICAgIXJldmVyc2VDaGFuZ2VzLmlzRmlyc3RDaGFuZ2UoKVxuICAgICkge1xuICAgICAgdGhpcy5yZXZlcnNlQ2hpbGRUaW1lbGluZURvdHMoKTtcbiAgICB9XG4gICAgaWYgKHBlbmRpbmdDaGFuZ2VzKSB7XG4gICAgICB0aGlzLmlzUGVuZGluZ0Jvb2xlYW4gPSBwZW5kaW5nQ2hhbmdlcy5jdXJyZW50VmFsdWUgPT09IHRydWU7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW4oKTtcbiAgICBpZiAodGhpcy5saXN0T2ZUaW1lTGluZSkge1xuICAgICAgdGhpcy5saXN0T2ZUaW1lTGluZS5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNoaWxkcmVuKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxpc3RPZlRpbWVMaW5lICYmIHRoaXMubGlzdE9mVGltZUxpbmUubGVuZ3RoKSB7XG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxpc3RPZlRpbWVMaW5lLmxlbmd0aDtcbiAgICAgIHRoaXMubGlzdE9mVGltZUxpbmUudG9BcnJheSgpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGl0ZW0uaXNMYXN0ID0gIXRoaXMubnpSZXZlcnNlID8gaW5kZXggPT09IGxlbmd0aCAtIDEgOiBpbmRleCA9PT0gMDtcbiAgICAgICAgaXRlbS5wb3NpdGlvbiA9XG4gICAgICAgICAgdGhpcy5uek1vZGUgPT09ICdsZWZ0JyB8fCAhdGhpcy5uek1vZGVcbiAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICA6IHRoaXMubnpNb2RlID09PSAncmlnaHQnXG4gICAgICAgICAgICA/ICdyaWdodCdcbiAgICAgICAgICAgIDogdGhpcy5uek1vZGUgPT09ICdhbHRlcm5hdGUnICYmIGluZGV4ICUgMiA9PT0gMFxuICAgICAgICAgICAgPyAnbGVmdCdcbiAgICAgICAgICAgIDogJ3JpZ2h0JztcbiAgICAgICAgaXRlbS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmV2ZXJzZUNoaWxkVGltZWxpbmVEb3RzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV2ZXJzZUNoaWxkTm9kZXModGhpcy50aW1lbGluZS5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KTtcbiAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW4oKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==