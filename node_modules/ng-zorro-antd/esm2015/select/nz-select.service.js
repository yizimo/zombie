/**
 * @fileoverview added by tsickle
 * Generated from: nz-select.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BACKSPACE, DOWN_ARROW, ENTER, SPACE, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { Injectable } from '@angular/core';
import { combineLatest, merge, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, share, skip, tap } from 'rxjs/operators';
import { isNil, isNotNil } from 'ng-zorro-antd/core';
import { NzOptionComponent } from './nz-option.component';
import { defaultFilterOption, NzFilterOptionPipe } from './nz-option.pipe';
export class NzSelectService {
    constructor() {
        /**
         * Input params *
         */
        this.autoClearSearchValue = true;
        this.serverSearch = false;
        this.filterOption = defaultFilterOption;
        this.mode = 'default';
        this.maxMultipleCount = Infinity;
        this.disabled = false;
        // tslint:disable-next-line:no-any
        this.compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        (o1, o2) => o1 === o2);
        /**
         * selectedValueChanged should emit ngModelChange or not *
         */
        // tslint:disable-next-line:no-any
        this.listOfSelectedValueWithEmit$ = new BehaviorSubject({
            value: [],
            emit: false
        });
        /**
         * ContentChildren Change *
         */
        this.mapOfTemplateOption$ = new BehaviorSubject({
            listOfNzOptionComponent: [],
            listOfNzOptionGroupComponent: []
        });
        /**
         * searchValue Change *
         */
        this.searchValueRaw$ = new BehaviorSubject('');
        this.listOfFilteredOption = [];
        this.openRaw$ = new Subject();
        this.checkRaw$ = new Subject();
        this.open = false;
        this.clearInput$ = new Subject();
        this.searchValue = '';
        this.isShowNotFound = false;
        /**
         * animation event *
         */
        this.animationEvent$ = new Subject();
        /**
         * open event *
         */
        this.open$ = this.openRaw$.pipe(distinctUntilChanged());
        this.activatedOption$ = new ReplaySubject(1);
        this.listOfSelectedValue$ = this.listOfSelectedValueWithEmit$.pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        data => data.value)));
        this.modelChange$ = this.listOfSelectedValueWithEmit$.pipe(filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.emit)), map((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            /** @type {?} */
            const selectedList = data.value;
            /** @type {?} */
            let modelValue = null;
            if (this.isSingleMode) {
                if (selectedList.length) {
                    modelValue = selectedList[0];
                }
            }
            else {
                modelValue = selectedList;
            }
            return modelValue;
        })));
        this.searchValue$ = this.searchValueRaw$.pipe(distinctUntilChanged(), skip(1), share(), tap((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.searchValue = value;
            if (value) {
                this.updateActivatedOption(this.listOfFilteredOption[0]);
            }
            this.updateListOfFilteredOption();
        })));
        // tslint:disable-next-line:no-any
        this.listOfSelectedValue = [];
        /**
         * flat ViewChildren *
         */
        this.listOfTemplateOption = [];
        /**
         * tag option *
         */
        this.listOfTagOption = [];
        /**
         * tag option concat template option *
         */
        this.listOfTagAndTemplateOption = [];
        /**
         * ViewChildren *
         */
        this.listOfNzOptionComponent = [];
        this.listOfNzOptionGroupComponent = [];
        /**
         * display in top control *
         */
        this.listOfCachedSelectedOption = [];
        /**
         * selected value or ViewChildren change *
         */
        this.valueOrOption$ = combineLatest([this.listOfSelectedValue$, this.mapOfTemplateOption$]).pipe(tap((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            const [listOfSelectedValue, mapOfTemplateOption] = data;
            this.listOfSelectedValue = listOfSelectedValue;
            this.listOfNzOptionComponent = mapOfTemplateOption.listOfNzOptionComponent;
            this.listOfNzOptionGroupComponent = mapOfTemplateOption.listOfNzOptionGroupComponent;
            this.listOfTemplateOption = this.listOfNzOptionComponent.concat(this.listOfNzOptionGroupComponent.reduce((/**
             * @param {?} pre
             * @param {?} cur
             * @return {?}
             */
            (pre, cur) => [...pre, ...cur.listOfNzOptionComponent.toArray()]), (/** @type {?} */ ([]))));
            this.updateListOfTagOption();
            this.updateListOfFilteredOption();
            this.resetActivatedOptionIfNeeded();
            this.updateListOfCachedOption();
        })), share());
        this.check$ = merge(this.checkRaw$, this.valueOrOption$, this.searchValue$, this.activatedOption$, this.open$, this.modelChange$).pipe(share());
    }
    /**
     * @param {?} option
     * @return {?}
     */
    clickOption(option) {
        /** update listOfSelectedOption -> update listOfSelectedValue -> next listOfSelectedValue$ **/
        if (!option.nzDisabled) {
            this.updateActivatedOption(option);
            /** @type {?} */
            let listOfSelectedValue = [...this.listOfSelectedValue];
            if (this.isMultipleOrTags) {
                /** @type {?} */
                const targetValue = listOfSelectedValue.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => this.compareWith(o, option.nzValue)));
                if (isNotNil(targetValue)) {
                    listOfSelectedValue.splice(listOfSelectedValue.indexOf(targetValue), 1);
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
                else if (listOfSelectedValue.length < this.maxMultipleCount) {
                    listOfSelectedValue.push(option.nzValue);
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
            }
            else if (!this.compareWith(listOfSelectedValue[0], option.nzValue)) {
                listOfSelectedValue = [option.nzValue];
                this.updateListOfSelectedValue(listOfSelectedValue, true);
            }
            if (this.isSingleMode) {
                this.setOpenState(false);
            }
            else if (this.autoClearSearchValue) {
                this.clearInput();
            }
        }
    }
    /**
     * @return {?}
     */
    updateListOfCachedOption() {
        if (this.isSingleMode) {
            /** @type {?} */
            const selectedOption = this.listOfTemplateOption.find((/**
             * @param {?} o
             * @return {?}
             */
            o => this.compareWith(o.nzValue, this.listOfSelectedValue[0])));
            if (!isNil(selectedOption)) {
                this.listOfCachedSelectedOption = [selectedOption];
            }
        }
        else {
            /** @type {?} */
            const listOfCachedSelectedOption = [];
            this.listOfSelectedValue.forEach((/**
             * @param {?} v
             * @return {?}
             */
            v => {
                /** @type {?} */
                const listOfMixedOption = [...this.listOfTagAndTemplateOption, ...this.listOfCachedSelectedOption];
                /** @type {?} */
                const option = listOfMixedOption.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => this.compareWith(o.nzValue, v)));
                if (option) {
                    listOfCachedSelectedOption.push(option);
                }
            }));
            this.listOfCachedSelectedOption = listOfCachedSelectedOption;
        }
    }
    /**
     * @return {?}
     */
    updateListOfTagOption() {
        if (this.isTagsMode) {
            /** @type {?} */
            const listOfMissValue = this.listOfSelectedValue.filter((/**
             * @param {?} value
             * @return {?}
             */
            value => !this.listOfTemplateOption.find((/**
             * @param {?} o
             * @return {?}
             */
            o => this.compareWith(o.nzValue, value)))));
            this.listOfTagOption = listOfMissValue.map((/**
             * @param {?} value
             * @return {?}
             */
            value => {
                /** @type {?} */
                const cachedOption = this.listOfCachedSelectedOption.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => this.compareWith(o.nzValue, value)));
                if (cachedOption) {
                    return cachedOption;
                }
                else {
                    /** @type {?} */
                    const nzOptionComponent = new NzOptionComponent();
                    nzOptionComponent.nzValue = value;
                    nzOptionComponent.nzLabel = value;
                    return nzOptionComponent;
                }
            }));
            this.listOfTagAndTemplateOption = [...this.listOfTemplateOption.concat(this.listOfTagOption)];
        }
        else {
            this.listOfTagAndTemplateOption = [...this.listOfTemplateOption];
        }
    }
    /**
     * @return {?}
     */
    updateAddTagOption() {
        /** @type {?} */
        const isMatch = this.listOfTagAndTemplateOption.find((/**
         * @param {?} item
         * @return {?}
         */
        item => item.nzLabel === this.searchValue));
        if (this.isTagsMode && this.searchValue && !isMatch) {
            /** @type {?} */
            const option = new NzOptionComponent();
            option.nzValue = this.searchValue;
            option.nzLabel = this.searchValue;
            this.addedTagOption = option;
            this.updateActivatedOption(option);
        }
        else {
            this.addedTagOption = null;
        }
    }
    /**
     * @return {?}
     */
    updateListOfFilteredOption() {
        this.updateAddTagOption();
        /** @type {?} */
        const listOfFilteredOption = new NzFilterOptionPipe().transform(this.listOfTagAndTemplateOption, this.searchValue, this.filterOption, this.serverSearch);
        this.listOfFilteredOption = this.addedTagOption
            ? [this.addedTagOption, ...listOfFilteredOption]
            : [...listOfFilteredOption];
        this.isShowNotFound = !this.isTagsMode && !this.listOfFilteredOption.length;
    }
    /**
     * @return {?}
     */
    clearInput() {
        this.clearInput$.next();
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    updateListOfSelectedValue(value, emit) {
        this.listOfSelectedValueWithEmit$.next({ value, emit });
    }
    /**
     * @param {?} option
     * @return {?}
     */
    updateActivatedOption(option) {
        this.activatedOption$.next(option);
        this.activatedOption = option;
    }
    /**
     * @param {?} inputValue
     * @param {?} tokenSeparators
     * @return {?}
     */
    tokenSeparate(inputValue, tokenSeparators) {
        /** auto tokenSeparators **/
        if (inputValue &&
            inputValue.length &&
            tokenSeparators.length &&
            this.isMultipleOrTags &&
            this.includesSeparators(inputValue, tokenSeparators)) {
            /** @type {?} */
            const listOfLabel = this.splitBySeparators(inputValue, tokenSeparators);
            this.updateSelectedValueByLabelList(listOfLabel);
            this.clearInput();
        }
    }
    /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    includesSeparators(str, separators) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < separators.length; ++i) {
            if (str.lastIndexOf(separators[i]) > 0) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    splitBySeparators(str, separators) {
        /** @type {?} */
        const reg = new RegExp(`[${separators.join()}]`);
        /** @type {?} */
        const array = ((/** @type {?} */ (str))).split(reg).filter((/**
         * @param {?} token
         * @return {?}
         */
        token => token));
        return Array.from(new Set(array));
    }
    /**
     * @return {?}
     */
    resetActivatedOptionIfNeeded() {
        /** @type {?} */
        const resetActivatedOption = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const activatedOption = this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            item => this.compareWith(item.nzValue, this.listOfSelectedValue[0])));
            this.updateActivatedOption(activatedOption || null);
        });
        if (this.activatedOption) {
            if (!this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            item => this.compareWith(item.nzValue, (/** @type {?} */ (this.activatedOption)).nzValue))) ||
                !this.listOfSelectedValue.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => this.compareWith(item, (/** @type {?} */ (this.activatedOption)).nzValue)))) {
                resetActivatedOption();
            }
        }
        else {
            resetActivatedOption();
        }
    }
    /**
     * @param {?} listOfNzOptionComponent
     * @param {?} listOfNzOptionGroupComponent
     * @return {?}
     */
    updateTemplateOption(listOfNzOptionComponent, listOfNzOptionGroupComponent) {
        this.mapOfTemplateOption$.next({ listOfNzOptionComponent, listOfNzOptionGroupComponent });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateSearchValue(value) {
        this.searchValueRaw$.next(value);
    }
    /**
     * @param {?} listOfLabel
     * @return {?}
     */
    updateSelectedValueByLabelList(listOfLabel) {
        /** @type {?} */
        const listOfSelectedValue = [...this.listOfSelectedValue];
        /** @type {?} */
        const listOfMatchOptionValue = this.listOfTagAndTemplateOption
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => listOfLabel.indexOf(item.nzLabel) !== -1))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        item => item.nzValue))
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !isNotNil(this.listOfSelectedValue.find((/**
         * @param {?} v
         * @return {?}
         */
        v => this.compareWith(v, item))))));
        if (this.isMultipleMode) {
            this.updateListOfSelectedValue([...listOfSelectedValue, ...listOfMatchOptionValue], true);
        }
        else {
            /** @type {?} */
            const listOfUnMatchOptionValue = listOfLabel.filter((/**
             * @param {?} label
             * @return {?}
             */
            label => this.listOfTagAndTemplateOption.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.nzLabel)).indexOf(label) === -1));
            this.updateListOfSelectedValue([...listOfSelectedValue, ...listOfMatchOptionValue, ...listOfUnMatchOptionValue], true);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (this.disabled) {
            return;
        }
        /** @type {?} */
        const keyCode = e.keyCode;
        /** @type {?} */
        const eventTarget = (/** @type {?} */ (e.target));
        /** @type {?} */
        const listOfFilteredOptionWithoutDisabledOrHidden = this.listOfFilteredOption.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !item.nzDisabled && !item.nzHide));
        /** @type {?} */
        const activatedIndex = listOfFilteredOptionWithoutDisabledOrHidden.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        item => item === this.activatedOption));
        switch (keyCode) {
            case UP_ARROW:
                e.preventDefault();
                /** @type {?} */
                const preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionWithoutDisabledOrHidden.length - 1;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabledOrHidden[preIndex]);
                break;
            case DOWN_ARROW:
                e.preventDefault();
                /** @type {?} */
                const nextIndex = activatedIndex < listOfFilteredOptionWithoutDisabledOrHidden.length - 1 ? activatedIndex + 1 : 0;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabledOrHidden[nextIndex]);
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                }
                break;
            case ENTER:
                e.preventDefault();
                if (this.open) {
                    if (this.activatedOption && !this.activatedOption.nzDisabled) {
                        this.clickOption(this.activatedOption);
                    }
                }
                else {
                    this.setOpenState(true);
                }
                break;
            case BACKSPACE:
                if (this.isMultipleOrTags && !eventTarget.value && this.listOfCachedSelectedOption.length) {
                    e.preventDefault();
                    this.removeValueFormSelected(this.listOfCachedSelectedOption[this.listOfCachedSelectedOption.length - 1]);
                }
                break;
            case SPACE:
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                    e.preventDefault();
                }
                break;
            case TAB:
                this.setOpenState(false);
                break;
        }
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    removeValueFormSelected(option) {
        if (this.disabled || option.nzDisabled) {
            return;
        }
        /** @type {?} */
        const listOfSelectedValue = this.listOfSelectedValue.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !this.compareWith(item, option.nzValue)));
        this.updateListOfSelectedValue(listOfSelectedValue, true);
        this.clearInput();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setOpenState(value) {
        this.openRaw$.next(value);
        this.open = value;
    }
    /**
     * @return {?}
     */
    check() {
        this.checkRaw$.next();
    }
    /**
     * @return {?}
     */
    get isSingleMode() {
        return this.mode === 'default';
    }
    /**
     * @return {?}
     */
    get isTagsMode() {
        return this.mode === 'tags';
    }
    /**
     * @return {?}
     */
    get isMultipleMode() {
        return this.mode === 'multiple';
    }
    /**
     * @return {?}
     */
    get isMultipleOrTags() {
        return this.mode === 'tags' || this.mode === 'multiple';
    }
}
NzSelectService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * Input params *
     * @type {?}
     */
    NzSelectService.prototype.autoClearSearchValue;
    /** @type {?} */
    NzSelectService.prototype.serverSearch;
    /** @type {?} */
    NzSelectService.prototype.filterOption;
    /** @type {?} */
    NzSelectService.prototype.mode;
    /** @type {?} */
    NzSelectService.prototype.maxMultipleCount;
    /** @type {?} */
    NzSelectService.prototype.disabled;
    /** @type {?} */
    NzSelectService.prototype.compareWith;
    /**
     * selectedValueChanged should emit ngModelChange or not *
     * @type {?}
     * @private
     */
    NzSelectService.prototype.listOfSelectedValueWithEmit$;
    /**
     * ContentChildren Change *
     * @type {?}
     * @private
     */
    NzSelectService.prototype.mapOfTemplateOption$;
    /**
     * searchValue Change *
     * @type {?}
     * @private
     */
    NzSelectService.prototype.searchValueRaw$;
    /**
     * @type {?}
     * @private
     */
    NzSelectService.prototype.listOfFilteredOption;
    /**
     * @type {?}
     * @private
     */
    NzSelectService.prototype.openRaw$;
    /**
     * @type {?}
     * @private
     */
    NzSelectService.prototype.checkRaw$;
    /**
     * @type {?}
     * @private
     */
    NzSelectService.prototype.open;
    /** @type {?} */
    NzSelectService.prototype.clearInput$;
    /** @type {?} */
    NzSelectService.prototype.searchValue;
    /** @type {?} */
    NzSelectService.prototype.isShowNotFound;
    /**
     * animation event *
     * @type {?}
     */
    NzSelectService.prototype.animationEvent$;
    /**
     * open event *
     * @type {?}
     */
    NzSelectService.prototype.open$;
    /** @type {?} */
    NzSelectService.prototype.activatedOption;
    /** @type {?} */
    NzSelectService.prototype.activatedOption$;
    /** @type {?} */
    NzSelectService.prototype.listOfSelectedValue$;
    /** @type {?} */
    NzSelectService.prototype.modelChange$;
    /** @type {?} */
    NzSelectService.prototype.searchValue$;
    /** @type {?} */
    NzSelectService.prototype.listOfSelectedValue;
    /**
     * flat ViewChildren *
     * @type {?}
     */
    NzSelectService.prototype.listOfTemplateOption;
    /**
     * tag option *
     * @type {?}
     */
    NzSelectService.prototype.listOfTagOption;
    /**
     * tag option concat template option *
     * @type {?}
     */
    NzSelectService.prototype.listOfTagAndTemplateOption;
    /**
     * ViewChildren *
     * @type {?}
     */
    NzSelectService.prototype.listOfNzOptionComponent;
    /** @type {?} */
    NzSelectService.prototype.listOfNzOptionGroupComponent;
    /**
     * click or enter add tag option *
     * @type {?}
     */
    NzSelectService.prototype.addedTagOption;
    /**
     * display in top control *
     * @type {?}
     */
    NzSelectService.prototype.listOfCachedSelectedOption;
    /**
     * selected value or ViewChildren change *
     * @type {?}
     */
    NzSelectService.prototype.valueOrOption$;
    /** @type {?} */
    NzSelectService.prototype.check$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NlbGVjdC8iLCJzb3VyY2VzIjpbIm56LXNlbGVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRixPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBaUIsTUFBTSxrQkFBa0IsQ0FBQztBQUcxRixNQUFNLE9BQU8sZUFBZTtJQUQ1Qjs7OztRQUdFLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixpQkFBWSxHQUFrQixtQkFBbUIsQ0FBQztRQUNsRCxTQUFJLEdBQW9DLFNBQVMsQ0FBQztRQUNsRCxxQkFBZ0IsR0FBRyxRQUFRLENBQUM7UUFDNUIsYUFBUSxHQUFHLEtBQUssQ0FBQzs7UUFFakIsZ0JBQVc7Ozs7O1FBQUcsQ0FBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFDOzs7OztRQUd0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OztJQUM1QixtQ0FBaUI7O0lBRWpCLHNDQUE4Qzs7Ozs7O0lBRzlDLHVEQUdHOzs7Ozs7SUFFSCwrQ0FNRzs7Ozs7O0lBRUgsMENBQTBEOzs7OztJQUMxRCwrQ0FBdUQ7Ozs7O0lBQ3ZELG1DQUEwQzs7Ozs7SUFDMUMsb0NBQWtDOzs7OztJQUNsQywrQkFBcUI7O0lBQ3JCLHNDQUFxQzs7SUFDckMsc0NBQWlCOztJQUNqQix5Q0FBdUI7Ozs7O0lBRXZCLDBDQUFnQzs7Ozs7SUFFaEMsZ0NBQW1EOztJQUNuRCwwQ0FBMEM7O0lBQzFDLDJDQUFrRTs7SUFDbEUsK0NBQXVGOztJQUN2Rix1Q0FjRTs7SUFDRix1Q0FXRTs7SUFFRiw4Q0FBZ0M7Ozs7O0lBRWhDLCtDQUErQzs7Ozs7SUFFL0MsMENBQTBDOzs7OztJQUUxQyxxREFBcUQ7Ozs7O0lBRXJELGtEQUFrRDs7SUFDbEQsdURBQTREOzs7OztJQUU1RCx5Q0FBeUM7Ozs7O0lBRXpDLHFEQUFxRDs7Ozs7SUFFckQseUNBa0JFOztJQUNGLGlDQU9nQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBCQUNLU1BBQ0UsIERPV05fQVJST1csIEVOVEVSLCBTUEFDRSwgVEFCLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBtZXJnZSwgQmVoYXZpb3JTdWJqZWN0LCBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHNoYXJlLCBza2lwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGlzTmlsLCBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7IE56T3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgZGVmYXVsdEZpbHRlck9wdGlvbiwgTnpGaWx0ZXJPcHRpb25QaXBlLCBURmlsdGVyT3B0aW9uIH0gZnJvbSAnLi9uei1vcHRpb24ucGlwZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOelNlbGVjdFNlcnZpY2Uge1xuICAvKiogSW5wdXQgcGFyYW1zICoqL1xuICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZSA9IHRydWU7XG4gIHNlcnZlclNlYXJjaCA9IGZhbHNlO1xuICBmaWx0ZXJPcHRpb246IFRGaWx0ZXJPcHRpb24gPSBkZWZhdWx0RmlsdGVyT3B0aW9uO1xuICBtb2RlOiAnZGVmYXVsdCcgfCAnbXVsdGlwbGUnIHwgJ3RhZ3MnID0gJ2RlZmF1bHQnO1xuICBtYXhNdWx0aXBsZUNvdW50ID0gSW5maW5pdHk7XG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgY29tcGFyZVdpdGggPSAobzE6IGFueSwgbzI6IGFueSkgPT4gbzEgPT09IG8yO1xuICAvKiogc2VsZWN0ZWRWYWx1ZUNoYW5nZWQgc2hvdWxkIGVtaXQgbmdNb2RlbENoYW5nZSBvciBub3QgKiovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJpdmF0ZSBsaXN0T2ZTZWxlY3RlZFZhbHVlV2l0aEVtaXQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDx7IHZhbHVlOiBhbnlbXTsgZW1pdDogYm9vbGVhbiB9Pih7XG4gICAgdmFsdWU6IFtdLFxuICAgIGVtaXQ6IGZhbHNlXG4gIH0pO1xuICAvKiogQ29udGVudENoaWxkcmVuIENoYW5nZSAqKi9cbiAgcHJpdmF0ZSBtYXBPZlRlbXBsYXRlT3B0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8e1xuICAgIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBOek9wdGlvbkNvbXBvbmVudFtdO1xuICAgIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ6IE56T3B0aW9uR3JvdXBDb21wb25lbnRbXTtcbiAgfT4oe1xuICAgIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBbXSxcbiAgICBsaXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50OiBbXVxuICB9KTtcbiAgLyoqIHNlYXJjaFZhbHVlIENoYW5nZSAqKi9cbiAgcHJpdmF0ZSBzZWFyY2hWYWx1ZVJhdyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xuICBwcml2YXRlIGxpc3RPZkZpbHRlcmVkT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XG4gIHByaXZhdGUgb3BlblJhdyQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBwcml2YXRlIGNoZWNrUmF3JCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgb3BlbiA9IGZhbHNlO1xuICBjbGVhcklucHV0JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHNlYXJjaFZhbHVlID0gJyc7XG4gIGlzU2hvd05vdEZvdW5kID0gZmFsc2U7XG4gIC8qKiBhbmltYXRpb24gZXZlbnQgKiovXG4gIGFuaW1hdGlvbkV2ZW50JCA9IG5ldyBTdWJqZWN0KCk7XG4gIC8qKiBvcGVuIGV2ZW50ICoqL1xuICBvcGVuJCA9IHRoaXMub3BlblJhdyQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgYWN0aXZhdGVkT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCB8IG51bGw7XG4gIGFjdGl2YXRlZE9wdGlvbiQgPSBuZXcgUmVwbGF5U3ViamVjdDxOek9wdGlvbkNvbXBvbmVudCB8IG51bGw+KDEpO1xuICBsaXN0T2ZTZWxlY3RlZFZhbHVlJCA9IHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZVdpdGhFbWl0JC5waXBlKG1hcChkYXRhID0+IGRhdGEudmFsdWUpKTtcbiAgbW9kZWxDaGFuZ2UkID0gdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlV2l0aEVtaXQkLnBpcGUoXG4gICAgZmlsdGVyKGl0ZW0gPT4gaXRlbS5lbWl0KSxcbiAgICBtYXAoZGF0YSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZExpc3QgPSBkYXRhLnZhbHVlO1xuICAgICAgbGV0IG1vZGVsVmFsdWU6IGFueVtdIHwgbnVsbCA9IG51bGw7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgICBpZiAodGhpcy5pc1NpbmdsZU1vZGUpIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICBtb2RlbFZhbHVlID0gc2VsZWN0ZWRMaXN0WzBdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb2RlbFZhbHVlID0gc2VsZWN0ZWRMaXN0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1vZGVsVmFsdWU7XG4gICAgfSlcbiAgKTtcbiAgc2VhcmNoVmFsdWUkID0gdGhpcy5zZWFyY2hWYWx1ZVJhdyQucGlwZShcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgIHNraXAoMSksXG4gICAgc2hhcmUoKSxcbiAgICB0YXAodmFsdWUgPT4ge1xuICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZhdGVkT3B0aW9uKHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb25bMF0pO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZGaWx0ZXJlZE9wdGlvbigpO1xuICAgIH0pXG4gICk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgbGlzdE9mU2VsZWN0ZWRWYWx1ZTogYW55W10gPSBbXTtcbiAgLyoqIGZsYXQgVmlld0NoaWxkcmVuICoqL1xuICBsaXN0T2ZUZW1wbGF0ZU9wdGlvbjogTnpPcHRpb25Db21wb25lbnRbXSA9IFtdO1xuICAvKiogdGFnIG9wdGlvbiAqKi9cbiAgbGlzdE9mVGFnT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XG4gIC8qKiB0YWcgb3B0aW9uIGNvbmNhdCB0ZW1wbGF0ZSBvcHRpb24gKiovXG4gIGxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XG4gIC8qKiBWaWV3Q2hpbGRyZW4gKiovXG4gIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XG4gIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ6IE56T3B0aW9uR3JvdXBDb21wb25lbnRbXSA9IFtdO1xuICAvKiogY2xpY2sgb3IgZW50ZXIgYWRkIHRhZyBvcHRpb24gKiovXG4gIGFkZGVkVGFnT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCB8IG51bGw7XG4gIC8qKiBkaXNwbGF5IGluIHRvcCBjb250cm9sICoqL1xuICBsaXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbjogTnpPcHRpb25Db21wb25lbnRbXSA9IFtdO1xuICAvKiogc2VsZWN0ZWQgdmFsdWUgb3IgVmlld0NoaWxkcmVuIGNoYW5nZSAqKi9cbiAgdmFsdWVPck9wdGlvbiQgPSBjb21iaW5lTGF0ZXN0KFt0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUkLCB0aGlzLm1hcE9mVGVtcGxhdGVPcHRpb24kXSkucGlwZShcbiAgICB0YXAoZGF0YSA9PiB7XG4gICAgICBjb25zdCBbbGlzdE9mU2VsZWN0ZWRWYWx1ZSwgbWFwT2ZUZW1wbGF0ZU9wdGlvbl0gPSBkYXRhO1xuICAgICAgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlID0gbGlzdE9mU2VsZWN0ZWRWYWx1ZTtcbiAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Db21wb25lbnQgPSBtYXBPZlRlbXBsYXRlT3B0aW9uLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50O1xuICAgICAgdGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50ID0gbWFwT2ZUZW1wbGF0ZU9wdGlvbi5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50O1xuICAgICAgdGhpcy5saXN0T2ZUZW1wbGF0ZU9wdGlvbiA9IHRoaXMubGlzdE9mTnpPcHRpb25Db21wb25lbnQuY29uY2F0KFxuICAgICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQucmVkdWNlKFxuICAgICAgICAgIChwcmUsIGN1cikgPT4gWy4uLnByZSwgLi4uY3VyLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LnRvQXJyYXkoKV0sXG4gICAgICAgICAgW10gYXMgTnpPcHRpb25Db21wb25lbnRbXVxuICAgICAgICApXG4gICAgICApO1xuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZUYWdPcHRpb24oKTtcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mRmlsdGVyZWRPcHRpb24oKTtcbiAgICAgIHRoaXMucmVzZXRBY3RpdmF0ZWRPcHRpb25JZk5lZWRlZCgpO1xuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZDYWNoZWRPcHRpb24oKTtcbiAgICB9KSxcbiAgICBzaGFyZSgpXG4gICk7XG4gIGNoZWNrJCA9IG1lcmdlKFxuICAgIHRoaXMuY2hlY2tSYXckLFxuICAgIHRoaXMudmFsdWVPck9wdGlvbiQsXG4gICAgdGhpcy5zZWFyY2hWYWx1ZSQsXG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb24kLFxuICAgIHRoaXMub3BlbiQsXG4gICAgdGhpcy5tb2RlbENoYW5nZSRcbiAgKS5waXBlKHNoYXJlKCkpO1xuXG4gIGNsaWNrT3B0aW9uKG9wdGlvbjogTnpPcHRpb25Db21wb25lbnQpOiB2b2lkIHtcbiAgICAvKiogdXBkYXRlIGxpc3RPZlNlbGVjdGVkT3B0aW9uIC0+IHVwZGF0ZSBsaXN0T2ZTZWxlY3RlZFZhbHVlIC0+IG5leHQgbGlzdE9mU2VsZWN0ZWRWYWx1ZSQgKiovXG4gICAgaWYgKCFvcHRpb24ubnpEaXNhYmxlZCkge1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24ob3B0aW9uKTtcbiAgICAgIGxldCBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gWy4uLnRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZV07XG4gICAgICBpZiAodGhpcy5pc011bHRpcGxlT3JUYWdzKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldFZhbHVlID0gbGlzdE9mU2VsZWN0ZWRWYWx1ZS5maW5kKG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLCBvcHRpb24ubnpWYWx1ZSkpO1xuICAgICAgICBpZiAoaXNOb3ROaWwodGFyZ2V0VmFsdWUpKSB7XG4gICAgICAgICAgbGlzdE9mU2VsZWN0ZWRWYWx1ZS5zcGxpY2UobGlzdE9mU2VsZWN0ZWRWYWx1ZS5pbmRleE9mKHRhcmdldFZhbHVlKSwgMSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKGxpc3RPZlNlbGVjdGVkVmFsdWUsIHRydWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGxpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoIDwgdGhpcy5tYXhNdWx0aXBsZUNvdW50KSB7XG4gICAgICAgICAgbGlzdE9mU2VsZWN0ZWRWYWx1ZS5wdXNoKG9wdGlvbi5uelZhbHVlKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuY29tcGFyZVdpdGgobGlzdE9mU2VsZWN0ZWRWYWx1ZVswXSwgb3B0aW9uLm56VmFsdWUpKSB7XG4gICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbb3B0aW9uLm56VmFsdWVdO1xuICAgICAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pc1NpbmdsZU1vZGUpIHtcbiAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmF1dG9DbGVhclNlYXJjaFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUxpc3RPZkNhY2hlZE9wdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1NpbmdsZU1vZGUpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gdGhpcy5saXN0T2ZUZW1wbGF0ZU9wdGlvbi5maW5kKG8gPT5cbiAgICAgICAgdGhpcy5jb21wYXJlV2l0aChvLm56VmFsdWUsIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZVswXSlcbiAgICAgICk7XG4gICAgICBpZiAoIWlzTmlsKHNlbGVjdGVkT3B0aW9uKSkge1xuICAgICAgICB0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uID0gW3NlbGVjdGVkT3B0aW9uXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb246IE56T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZS5mb3JFYWNoKHYgPT4ge1xuICAgICAgICBjb25zdCBsaXN0T2ZNaXhlZE9wdGlvbiA9IFsuLi50aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uLCAuLi50aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uXTtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gbGlzdE9mTWl4ZWRPcHRpb24uZmluZChvID0+IHRoaXMuY29tcGFyZVdpdGgoby5uelZhbHVlLCB2KSk7XG4gICAgICAgIGlmIChvcHRpb24pIHtcbiAgICAgICAgICBsaXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5wdXNoKG9wdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbiA9IGxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUxpc3RPZlRhZ09wdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1RhZ3NNb2RlKSB7XG4gICAgICBjb25zdCBsaXN0T2ZNaXNzVmFsdWUgPSB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuZmlsdGVyKFxuICAgICAgICB2YWx1ZSA9PiAhdGhpcy5saXN0T2ZUZW1wbGF0ZU9wdGlvbi5maW5kKG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLm56VmFsdWUsIHZhbHVlKSlcbiAgICAgICk7XG4gICAgICB0aGlzLmxpc3RPZlRhZ09wdGlvbiA9IGxpc3RPZk1pc3NWYWx1ZS5tYXAodmFsdWUgPT4ge1xuICAgICAgICBjb25zdCBjYWNoZWRPcHRpb24gPSB0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8ubnpWYWx1ZSwgdmFsdWUpKTtcbiAgICAgICAgaWYgKGNhY2hlZE9wdGlvbikge1xuICAgICAgICAgIHJldHVybiBjYWNoZWRPcHRpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbnpPcHRpb25Db21wb25lbnQgPSBuZXcgTnpPcHRpb25Db21wb25lbnQoKTtcbiAgICAgICAgICBuek9wdGlvbkNvbXBvbmVudC5uelZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgbnpPcHRpb25Db21wb25lbnQubnpMYWJlbCA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiBuek9wdGlvbkNvbXBvbmVudDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uID0gWy4uLnRoaXMubGlzdE9mVGVtcGxhdGVPcHRpb24uY29uY2F0KHRoaXMubGlzdE9mVGFnT3B0aW9uKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24gPSBbLi4udGhpcy5saXN0T2ZUZW1wbGF0ZU9wdGlvbl07XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQWRkVGFnT3B0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IGlzTWF0Y2ggPSB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uLmZpbmQoaXRlbSA9PiBpdGVtLm56TGFiZWwgPT09IHRoaXMuc2VhcmNoVmFsdWUpO1xuICAgIGlmICh0aGlzLmlzVGFnc01vZGUgJiYgdGhpcy5zZWFyY2hWYWx1ZSAmJiAhaXNNYXRjaCkge1xuICAgICAgY29uc3Qgb3B0aW9uID0gbmV3IE56T3B0aW9uQ29tcG9uZW50KCk7XG4gICAgICBvcHRpb24ubnpWYWx1ZSA9IHRoaXMuc2VhcmNoVmFsdWU7XG4gICAgICBvcHRpb24ubnpMYWJlbCA9IHRoaXMuc2VhcmNoVmFsdWU7XG4gICAgICB0aGlzLmFkZGVkVGFnT3B0aW9uID0gb3B0aW9uO1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24ob3B0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRlZFRhZ09wdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTGlzdE9mRmlsdGVyZWRPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVBZGRUYWdPcHRpb24oKTtcbiAgICBjb25zdCBsaXN0T2ZGaWx0ZXJlZE9wdGlvbiA9IG5ldyBOekZpbHRlck9wdGlvblBpcGUoKS50cmFuc2Zvcm0oXG4gICAgICB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uLFxuICAgICAgdGhpcy5zZWFyY2hWYWx1ZSxcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uLFxuICAgICAgdGhpcy5zZXJ2ZXJTZWFyY2hcbiAgICApO1xuICAgIHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24gPSB0aGlzLmFkZGVkVGFnT3B0aW9uXG4gICAgICA/IFt0aGlzLmFkZGVkVGFnT3B0aW9uLCAuLi5saXN0T2ZGaWx0ZXJlZE9wdGlvbl1cbiAgICAgIDogWy4uLmxpc3RPZkZpbHRlcmVkT3B0aW9uXTtcbiAgICB0aGlzLmlzU2hvd05vdEZvdW5kID0gIXRoaXMuaXNUYWdzTW9kZSAmJiAhdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5sZW5ndGg7XG4gIH1cblxuICBjbGVhcklucHV0KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJJbnB1dCQubmV4dCgpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB1cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKHZhbHVlOiBhbnlbXSwgZW1pdDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZVdpdGhFbWl0JC5uZXh0KHsgdmFsdWUsIGVtaXQgfSk7XG4gIH1cblxuICB1cGRhdGVBY3RpdmF0ZWRPcHRpb24ob3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbiQubmV4dChvcHRpb24pO1xuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uID0gb3B0aW9uO1xuICB9XG5cbiAgdG9rZW5TZXBhcmF0ZShpbnB1dFZhbHVlOiBzdHJpbmcsIHRva2VuU2VwYXJhdG9yczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICAvKiogYXV0byB0b2tlblNlcGFyYXRvcnMgKiovXG4gICAgaWYgKFxuICAgICAgaW5wdXRWYWx1ZSAmJlxuICAgICAgaW5wdXRWYWx1ZS5sZW5ndGggJiZcbiAgICAgIHRva2VuU2VwYXJhdG9ycy5sZW5ndGggJiZcbiAgICAgIHRoaXMuaXNNdWx0aXBsZU9yVGFncyAmJlxuICAgICAgdGhpcy5pbmNsdWRlc1NlcGFyYXRvcnMoaW5wdXRWYWx1ZSwgdG9rZW5TZXBhcmF0b3JzKVxuICAgICkge1xuICAgICAgY29uc3QgbGlzdE9mTGFiZWwgPSB0aGlzLnNwbGl0QnlTZXBhcmF0b3JzKGlucHV0VmFsdWUsIHRva2VuU2VwYXJhdG9ycyk7XG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkVmFsdWVCeUxhYmVsTGlzdChsaXN0T2ZMYWJlbCk7XG4gICAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICB9XG4gIH1cblxuICBpbmNsdWRlc1NlcGFyYXRvcnMoc3RyOiBzdHJpbmcgfCBzdHJpbmdbXSwgc2VwYXJhdG9yczogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VwYXJhdG9ycy5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKHN0ci5sYXN0SW5kZXhPZihzZXBhcmF0b3JzW2ldKSA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNwbGl0QnlTZXBhcmF0b3JzKHN0cjogc3RyaW5nIHwgc3RyaW5nW10sIHNlcGFyYXRvcnM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYFske3NlcGFyYXRvcnMuam9pbigpfV1gKTtcbiAgICBjb25zdCBhcnJheSA9IChzdHIgYXMgc3RyaW5nKS5zcGxpdChyZWcpLmZpbHRlcih0b2tlbiA9PiB0b2tlbik7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcnJheSkpO1xuICB9XG5cbiAgcmVzZXRBY3RpdmF0ZWRPcHRpb25JZk5lZWRlZCgpOiB2b2lkIHtcbiAgICBjb25zdCByZXNldEFjdGl2YXRlZE9wdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2YXRlZE9wdGlvbiA9IHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24uZmluZChpdGVtID0+XG4gICAgICAgIHRoaXMuY29tcGFyZVdpdGgoaXRlbS5uelZhbHVlLCB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVbMF0pXG4gICAgICApO1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24oYWN0aXZhdGVkT3B0aW9uIHx8IG51bGwpO1xuICAgIH07XG4gICAgaWYgKHRoaXMuYWN0aXZhdGVkT3B0aW9uKSB7XG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0ubnpWYWx1ZSwgdGhpcy5hY3RpdmF0ZWRPcHRpb24hLm56VmFsdWUpKSB8fFxuICAgICAgICAhdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0sIHRoaXMuYWN0aXZhdGVkT3B0aW9uIS5uelZhbHVlKSlcbiAgICAgICkge1xuICAgICAgICByZXNldEFjdGl2YXRlZE9wdGlvbigpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXNldEFjdGl2YXRlZE9wdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVRlbXBsYXRlT3B0aW9uKFxuICAgIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBOek9wdGlvbkNvbXBvbmVudFtdLFxuICAgIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ6IE56T3B0aW9uR3JvdXBDb21wb25lbnRbXVxuICApOiB2b2lkIHtcbiAgICB0aGlzLm1hcE9mVGVtcGxhdGVPcHRpb24kLm5leHQoeyBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudCwgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudCB9KTtcbiAgfVxuXG4gIHVwZGF0ZVNlYXJjaFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaFZhbHVlUmF3JC5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdGVkVmFsdWVCeUxhYmVsTGlzdChsaXN0T2ZMYWJlbDogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBjb25zdCBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gWy4uLnRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZV07XG4gICAgY29uc3QgbGlzdE9mTWF0Y2hPcHRpb25WYWx1ZSA9IHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb25cbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBsaXN0T2ZMYWJlbC5pbmRleE9mKGl0ZW0ubnpMYWJlbCkgIT09IC0xKVxuICAgICAgLm1hcChpdGVtID0+IGl0ZW0ubnpWYWx1ZSlcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiAhaXNOb3ROaWwodGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlLmZpbmQodiA9PiB0aGlzLmNvbXBhcmVXaXRoKHYsIGl0ZW0pKSkpO1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGVNb2RlKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUoWy4uLmxpc3RPZlNlbGVjdGVkVmFsdWUsIC4uLmxpc3RPZk1hdGNoT3B0aW9uVmFsdWVdLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGlzdE9mVW5NYXRjaE9wdGlvblZhbHVlID0gbGlzdE9mTGFiZWwuZmlsdGVyKFxuICAgICAgICBsYWJlbCA9PiB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uLm1hcChpdGVtID0+IGl0ZW0ubnpMYWJlbCkuaW5kZXhPZihsYWJlbCkgPT09IC0xXG4gICAgICApO1xuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKFxuICAgICAgICBbLi4ubGlzdE9mU2VsZWN0ZWRWYWx1ZSwgLi4ubGlzdE9mTWF0Y2hPcHRpb25WYWx1ZSwgLi4ubGlzdE9mVW5NYXRjaE9wdGlvblZhbHVlXSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGU7XG4gICAgY29uc3QgZXZlbnRUYXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGxpc3RPZkZpbHRlcmVkT3B0aW9uV2l0aG91dERpc2FibGVkT3JIaWRkZW4gPSB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmZpbHRlcihcbiAgICAgIGl0ZW0gPT4gIWl0ZW0ubnpEaXNhYmxlZCAmJiAhaXRlbS5uekhpZGVcbiAgICApO1xuICAgIGNvbnN0IGFjdGl2YXRlZEluZGV4ID0gbGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWRPckhpZGRlbi5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSB0aGlzLmFjdGl2YXRlZE9wdGlvbik7XG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIFVQX0FSUk9XOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHByZUluZGV4ID1cbiAgICAgICAgICBhY3RpdmF0ZWRJbmRleCA+IDAgPyBhY3RpdmF0ZWRJbmRleCAtIDEgOiBsaXN0T2ZGaWx0ZXJlZE9wdGlvbldpdGhvdXREaXNhYmxlZE9ySGlkZGVuLmxlbmd0aCAtIDE7XG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZhdGVkT3B0aW9uKGxpc3RPZkZpbHRlcmVkT3B0aW9uV2l0aG91dERpc2FibGVkT3JIaWRkZW5bcHJlSW5kZXhdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERPV05fQVJST1c6XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID1cbiAgICAgICAgICBhY3RpdmF0ZWRJbmRleCA8IGxpc3RPZkZpbHRlcmVkT3B0aW9uV2l0aG91dERpc2FibGVkT3JIaWRkZW4ubGVuZ3RoIC0gMSA/IGFjdGl2YXRlZEluZGV4ICsgMSA6IDA7XG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZhdGVkT3B0aW9uKGxpc3RPZkZpbHRlcmVkT3B0aW9uV2l0aG91dERpc2FibGVkT3JIaWRkZW5bbmV4dEluZGV4XSk7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5vcGVuKSB7XG4gICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVOVEVSOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmF0ZWRPcHRpb24gJiYgIXRoaXMuYWN0aXZhdGVkT3B0aW9uLm56RGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tPcHRpb24odGhpcy5hY3RpdmF0ZWRPcHRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQkFDS1NQQUNFOlxuICAgICAgICBpZiAodGhpcy5pc011bHRpcGxlT3JUYWdzICYmICFldmVudFRhcmdldC52YWx1ZSAmJiB0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnJlbW92ZVZhbHVlRm9ybVNlbGVjdGVkKHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb25bdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNQQUNFOlxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMub3Blbikge1xuICAgICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVEFCOlxuICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcmVtb3ZlVmFsdWVGb3JtU2VsZWN0ZWQob3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IG9wdGlvbi5uekRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuZmlsdGVyKGl0ZW0gPT4gIXRoaXMuY29tcGFyZVdpdGgoaXRlbSwgb3B0aW9uLm56VmFsdWUpKTtcbiAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XG4gICAgdGhpcy5jbGVhcklucHV0KCk7XG4gIH1cblxuICBzZXRPcGVuU3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm9wZW5SYXckLm5leHQodmFsdWUpO1xuICAgIHRoaXMub3BlbiA9IHZhbHVlO1xuICB9XG5cbiAgY2hlY2soKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja1JhdyQubmV4dCgpO1xuICB9XG5cbiAgZ2V0IGlzU2luZ2xlTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnZGVmYXVsdCc7XG4gIH1cblxuICBnZXQgaXNUYWdzTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAndGFncyc7XG4gIH1cblxuICBnZXQgaXNNdWx0aXBsZU1vZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ211bHRpcGxlJztcbiAgfVxuXG4gIGdldCBpc011bHRpcGxlT3JUYWdzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICd0YWdzJyB8fCB0aGlzLm1vZGUgPT09ICdtdWx0aXBsZSc7XG4gIH1cbn1cbiJdfQ==