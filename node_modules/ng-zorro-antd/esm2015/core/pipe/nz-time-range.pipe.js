/**
 * @fileoverview added by tsickle
 * Generated from: pipe/nz-time-range.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Pipe } from '@angular/core';
import { timeUnits } from '../time';
import { padStart } from '../util';
export class NzTimeRangePipe {
    /**
     * @param {?} value
     * @param {?=} format
     * @return {?}
     */
    transform(value, format = 'HH:mm:ss') {
        /** @type {?} */
        let duration = Number(value || 0);
        return timeUnits.reduce((/**
         * @param {?} current
         * @param {?} __1
         * @return {?}
         */
        (current, [name, unit]) => {
            if (current.indexOf(name) !== -1) {
                /** @type {?} */
                const v = Math.floor(duration / unit);
                duration -= v * unit;
                return current.replace(new RegExp(`${name}+`, 'g'), (/**
                 * @param {?} match
                 * @return {?}
                 */
                (match) => {
                    return padStart(v.toString(), match.length, '0');
                }));
            }
            return current;
        }), format);
    }
}
NzTimeRangePipe.decorators = [
    { type: Pipe, args: [{
                name: 'nzTimeRange',
                pure: true
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1yYW5nZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsicGlwZS9uei10aW1lLXJhbmdlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNwQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBTW5DLE1BQU0sT0FBTyxlQUFlOzs7Ozs7SUFDMUIsU0FBUyxDQUFDLEtBQXNCLEVBQUUsU0FBaUIsVUFBVTs7WUFDdkQsUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBRWpDLE9BQU8sU0FBUyxDQUFDLE1BQU07Ozs7O1FBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNoRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7O3NCQUMxQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQyxRQUFRLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDckIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDOzs7O2dCQUFFLENBQUMsS0FBYSxFQUFFLEVBQUU7b0JBQ3BFLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNuRCxDQUFDLEVBQUMsQ0FBQzthQUNKO1lBQ0QsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQyxHQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2IsQ0FBQzs7O1lBbEJGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsSUFBSSxFQUFFLElBQUk7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0aW1lVW5pdHMgfSBmcm9tICcuLi90aW1lJztcbmltcG9ydCB7IHBhZFN0YXJ0IH0gZnJvbSAnLi4vdXRpbCc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ256VGltZVJhbmdlJyxcbiAgcHVyZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBOelRpbWVSYW5nZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIGZvcm1hdDogc3RyaW5nID0gJ0hIOm1tOnNzJyk6IHN0cmluZyB7XG4gICAgbGV0IGR1cmF0aW9uID0gTnVtYmVyKHZhbHVlIHx8IDApO1xuXG4gICAgcmV0dXJuIHRpbWVVbml0cy5yZWR1Y2UoKGN1cnJlbnQsIFtuYW1lLCB1bml0XSkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnQuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgdiA9IE1hdGguZmxvb3IoZHVyYXRpb24gLyB1bml0KTtcbiAgICAgICAgZHVyYXRpb24gLT0gdiAqIHVuaXQ7XG4gICAgICAgIHJldHVybiBjdXJyZW50LnJlcGxhY2UobmV3IFJlZ0V4cChgJHtuYW1lfStgLCAnZycpLCAobWF0Y2g6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHJldHVybiBwYWRTdGFydCh2LnRvU3RyaW5nKCksIG1hdGNoLmxlbmd0aCwgJzAnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VycmVudDtcbiAgICB9LCBmb3JtYXQpO1xuICB9XG59XG4iXX0=