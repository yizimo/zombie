/**
 * @fileoverview added by tsickle
 * Generated from: nz-upload-btn.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ENTER } from '@angular/cdk/keycodes';
import { HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, HostListener, Input, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { of, Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { warn, NzUpdateHostClassService } from 'ng-zorro-antd/core';
export class NzUploadBtnComponent {
    // #endregion
    /**
     * @param {?} http
     * @param {?} el
     * @param {?} updateHostClassService
     */
    constructor(http, el, updateHostClassService) {
        this.http = http;
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        this.reqs = {};
        this.inited = false;
        this.destroy = false;
        // #region fields
        this.classes = {};
        // #region styles
        this.prefixCls = 'ant-upload';
        if (!http) {
            throw new Error(`Not found 'HttpClient', You can import 'HttpClientModule' in your root module.`);
        }
    }
    // #endregion
    /**
     * @return {?}
     */
    onClick() {
        if (this.options.disabled || !this.options.openFileDialogOnClick) {
            return;
        }
        ((/** @type {?} */ (this.file.nativeElement))).click();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (this.options.disabled) {
            return;
        }
        if (e.key === 'Enter' || e.keyCode === ENTER) {
            this.onClick();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    // skip safari bug
    // tslint:disable-next-line:no-any
    onFileDrop(e) {
        if (this.options.disabled || e.type === 'dragover') {
            e.preventDefault();
            return;
        }
        if (this.options.directory) {
            this.traverseFileTree((/** @type {?} */ (e.dataTransfer)).items);
        }
        else {
            /** @type {?} */
            const files = Array.prototype.slice
                .call((/** @type {?} */ (e.dataTransfer)).files)
                .filter((/**
             * @param {?} file
             * @return {?}
             */
            (file) => this.attrAccept(file, this.options.accept)));
            if (files.length) {
                this.uploadFiles(files);
            }
        }
        e.preventDefault();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onChange(e) {
        if (this.options.disabled) {
            return;
        }
        /** @type {?} */
        const hie = (/** @type {?} */ (e.target));
        this.uploadFiles((/** @type {?} */ (hie.files)));
        hie.value = '';
    }
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    traverseFileTree(files) {
        // tslint:disable-next-line:no-any
        /** @type {?} */
        const _traverseFileTree = (/**
         * @param {?} item
         * @param {?} path
         * @return {?}
         */
        (item, path) => {
            if (item.isFile) {
                item.file((/**
                 * @param {?} file
                 * @return {?}
                 */
                (file) => {
                    if (this.attrAccept(file, this.options.accept)) {
                        this.uploadFiles([file]);
                    }
                }));
            }
            else if (item.isDirectory) {
                /** @type {?} */
                const dirReader = item.createReader();
                // tslint:disable-next-line:no-any
                dirReader.readEntries((/**
                 * @param {?} entries
                 * @return {?}
                 */
                (entries) => {
                    for (const entrieItem of entries) {
                        _traverseFileTree(entrieItem, `${path}${item.name}/`);
                    }
                }));
            }
        });
        // tslint:disable-next-line:no-any
        for (const file of (/** @type {?} */ (files))) {
            _traverseFileTree(file.webkitGetAsEntry(), '');
        }
    }
    /**
     * @private
     * @param {?} file
     * @param {?=} acceptedFiles
     * @return {?}
     */
    attrAccept(file, acceptedFiles) {
        if (file && acceptedFiles) {
            /** @type {?} */
            const acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
            /** @type {?} */
            const fileName = '' + file.name;
            /** @type {?} */
            const mimeType = '' + file.type;
            /** @type {?} */
            const baseMimeType = mimeType.replace(/\/.*$/, '');
            return acceptedFilesArray.some((/**
             * @param {?} type
             * @return {?}
             */
            type => {
                /** @type {?} */
                const validType = type.trim();
                if (validType.charAt(0) === '.') {
                    return (fileName
                        .toLowerCase()
                        .indexOf(validType.toLowerCase(), fileName.toLowerCase().length - validType.toLowerCase().length) !== -1);
                }
                else if (/\/\*$/.test(validType)) {
                    // This is something like a image/* mime type
                    return baseMimeType === validType.replace(/\/.*$/, '');
                }
                return mimeType === validType;
            }));
        }
        return true;
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    attachUid(file) {
        if (!file.uid) {
            file.uid = Math.random()
                .toString(36)
                .substring(2);
        }
        return file;
    }
    /**
     * @param {?} fileList
     * @return {?}
     */
    uploadFiles(fileList) {
        /** @type {?} */
        let filters$ = of(Array.prototype.slice.call(fileList));
        if (this.options.filters) {
            this.options.filters.forEach((/**
             * @param {?} f
             * @return {?}
             */
            f => {
                filters$ = filters$.pipe(switchMap((/**
                 * @param {?} list
                 * @return {?}
                 */
                list => {
                    /** @type {?} */
                    const fnRes = f.fn(list);
                    return fnRes instanceof Observable ? fnRes : of(fnRes);
                })));
            }));
        }
        filters$.subscribe((/**
         * @param {?} list
         * @return {?}
         */
        list => {
            list.forEach((/**
             * @param {?} file
             * @return {?}
             */
            (file) => {
                this.attachUid(file);
                this.upload(file, list);
            }));
        }), (/**
         * @param {?} e
         * @return {?}
         */
        e => {
            warn(`Unhandled upload filter error`, e);
        }));
    }
    /**
     * @private
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    upload(file, fileList) {
        if (!this.options.beforeUpload) {
            return this.post(file);
        }
        /** @type {?} */
        const before = this.options.beforeUpload(file, fileList);
        if (before instanceof Observable) {
            before.subscribe((/**
             * @param {?} processedFile
             * @return {?}
             */
            (processedFile) => {
                /** @type {?} */
                const processedFileType = Object.prototype.toString.call(processedFile);
                if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
                    this.attachUid(processedFile);
                    this.post(processedFile);
                }
                else if (typeof processedFile === 'boolean' && processedFile !== false) {
                    this.post(file);
                }
            }), (/**
             * @param {?} e
             * @return {?}
             */
            e => {
                warn(`Unhandled upload beforeUpload error`, e);
            }));
        }
        else if (before !== false) {
            return this.post(file);
        }
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    post(file) {
        if (this.destroy) {
            return;
        }
        /** @type {?} */
        const opt = this.options;
        const { uid } = file;
        let { data, headers } = opt;
        if (typeof data === 'function') {
            data = ((/** @type {?} */ (data)))(file);
        }
        if (typeof headers === 'function') {
            headers = ((/** @type {?} */ (headers)))(file);
        }
        /** @type {?} */
        const args = {
            action: opt.action,
            name: opt.name,
            headers,
            file,
            data,
            withCredentials: opt.withCredentials,
            onProgress: opt.onProgress
                ? (/**
                 * @param {?} e
                 * @return {?}
                 */
                e => {
                    (/** @type {?} */ (opt.onProgress))(e, file);
                })
                : undefined,
            onSuccess: (/**
             * @param {?} ret
             * @param {?} xhr
             * @return {?}
             */
            (ret, xhr) => {
                this.clean(uid);
                (/** @type {?} */ (opt.onSuccess))(ret, file, xhr);
            }),
            onError: (/**
             * @param {?} xhr
             * @return {?}
             */
            xhr => {
                this.clean(uid);
                (/** @type {?} */ (opt.onError))(xhr, file);
            })
        };
        /** @type {?} */
        const req$ = (opt.customRequest || this.xhr).call(this, args);
        if (!(req$ instanceof Subscription)) {
            warn(`Must return Subscription type in '[nzCustomRequest]' property`);
        }
        this.reqs[uid] = req$;
        (/** @type {?} */ (opt.onStart))(file);
    }
    /**
     * @private
     * @param {?} args
     * @return {?}
     */
    xhr(args) {
        /** @type {?} */
        const formData = new FormData();
        // tslint:disable-next-line:no-any
        formData.append((/** @type {?} */ (args.name)), (/** @type {?} */ (args.file)));
        if (args.data) {
            Object.keys(args.data).map((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                formData.append(key, (/** @type {?} */ (args.data))[key]);
            }));
        }
        if (!args.headers) {
            args.headers = {};
        }
        if (args.headers['X-Requested-With'] !== null) {
            args.headers['X-Requested-With'] = `XMLHttpRequest`;
        }
        else {
            delete args.headers['X-Requested-With'];
        }
        /** @type {?} */
        const req = new HttpRequest('POST', (/** @type {?} */ (args.action)), formData, {
            reportProgress: true,
            withCredentials: args.withCredentials,
            headers: new HttpHeaders(args.headers)
        });
        return this.http.request(req).subscribe((
        // tslint:disable-next-line no-any
        /**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (event.type === HttpEventType.UploadProgress) {
                if ((/** @type {?} */ (event.total)) > 0) {
                    // tslint:disable-next-line:no-any
                    ((/** @type {?} */ (event))).percent = (event.loaded / (/** @type {?} */ (event.total))) * 100;
                }
                (/** @type {?} */ (args.onProgress))(event, args.file);
            }
            else if (event instanceof HttpResponse) {
                (/** @type {?} */ (args.onSuccess))(event.body, args.file, event);
            }
        }), (/**
         * @param {?} err
         * @return {?}
         */
        err => {
            this.abort(args.file);
            (/** @type {?} */ (args.onError))(err, args.file);
        }));
    }
    /**
     * @private
     * @param {?} uid
     * @return {?}
     */
    clean(uid) {
        /** @type {?} */
        const req$ = this.reqs[uid];
        if (req$ instanceof Subscription) {
            req$.unsubscribe();
        }
        delete this.reqs[uid];
    }
    /**
     * @param {?=} file
     * @return {?}
     */
    abort(file) {
        if (file) {
            this.clean(file && file.uid);
        }
        else {
            Object.keys(this.reqs).forEach((/**
             * @param {?} uid
             * @return {?}
             */
            uid => this.clean(uid)));
        }
    }
    /**
     * @private
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = Object.assign({ [this.prefixCls]: true, [`${this.prefixCls}-disabled`]: this.options.disabled }, this.classes);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.inited = true;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.inited) {
            this.setClassMap();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy = true;
        this.abort();
    }
}
NzUploadBtnComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-upload-btn]',
                exportAs: 'nzUploadBtn',
                template: "<input type=\"file\" #file (change)=\"onChange($event)\"\n  [attr.accept]=\"options.accept\"\n  [attr.directory]=\"options.directory ? 'directory': null\"\n  [attr.webkitdirectory]=\"options.directory ? 'webkitdirectory': null\"\n  [multiple]=\"options.multiple\" style=\"display: none;\">\n<ng-content></ng-content>",
                host: {
                    '[attr.tabindex]': '"0"',
                    '[attr.role]': '"button"'
                },
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
NzUploadBtnComponent.ctorParameters = () => [
    { type: HttpClient, decorators: [{ type: Optional }] },
    { type: ElementRef },
    { type: NzUpdateHostClassService }
];
NzUploadBtnComponent.propDecorators = {
    file: [{ type: ViewChild, args: ['file', { static: false },] }],
    classes: [{ type: Input }],
    options: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    onFileDrop: [{ type: HostListener, args: ['drop', ['$event'],] }, { type: HostListener, args: ['dragover', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    NzUploadBtnComponent.prototype.reqs;
    /**
     * @type {?}
     * @private
     */
    NzUploadBtnComponent.prototype.inited;
    /**
     * @type {?}
     * @private
     */
    NzUploadBtnComponent.prototype.destroy;
    /** @type {?} */
    NzUploadBtnComponent.prototype.file;
    /** @type {?} */
    NzUploadBtnComponent.prototype.classes;
    /** @type {?} */
    NzUploadBtnComponent.prototype.options;
    /**
     * @type {?}
     * @private
     */
    NzUploadBtnComponent.prototype.prefixCls;
    /**
     * @type {?}
     * @private
     */
    NzUploadBtnComponent.prototype.http;
    /**
     * @type {?}
     * @private
     */
    NzUploadBtnComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzUploadBtnComponent.prototype.updateHostClassService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLWJ0bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3VwbG9hZC8iLCJzb3VyY2VzIjpbIm56LXVwbG9hZC1idG4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFhLGFBQWEsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BILE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsUUFBUSxFQUNSLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFnQnBFLE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7SUFnUy9CLFlBQ3NCLElBQWdCLEVBQzVCLEVBQWMsRUFDZCxzQkFBZ0Q7UUFGcEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUM1QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUEwQjtRQWxTMUQsU0FBSSxHQUFvQyxFQUFFLENBQUM7UUFDbkMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFlBQU8sR0FBRyxLQUFLLENBQUM7O1FBS2YsWUFBTyxHQUFPLEVBQUUsQ0FBQzs7UUEyUWxCLGNBQVMsR0FBRyxZQUFZLENBQUM7UUFrQi9CLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLGdGQUFn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LEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDL0IsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQS9CcEMsb0NBQTJDOzs7OztJQUMzQyxzQ0FBdUI7Ozs7O0lBQ3ZCLHVDQUF3Qjs7SUFFeEIsb0NBQXVEOztJQUd2RCx1Q0FBMEI7O0lBQzFCLHVDQUFtQzs7Ozs7SUEwUW5DLHlDQUFpQzs7Ozs7SUFjL0Isb0NBQW9DOzs7OztJQUNwQyxrQ0FBc0I7Ozs7O0lBQ3RCLHNEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBFTlRFUiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXZlbnQsIEh0dHBFdmVudFR5cGUsIEh0dHBIZWFkZXJzLCBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgd2FybiwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgVXBsb2FkRmlsZSwgVXBsb2FkWEhSQXJncywgWmlwQnV0dG9uT3B0aW9ucyB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW256LXVwbG9hZC1idG5dJyxcbiAgZXhwb3J0QXM6ICduelVwbG9hZEJ0bicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei11cGxvYWQtYnRuLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbYXR0ci50YWJpbmRleF0nOiAnXCIwXCInLFxuICAgICdbYXR0ci5yb2xlXSc6ICdcImJ1dHRvblwiJ1xuICB9LFxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBOelVwbG9hZEJ0bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICByZXFzOiB7IFtrZXk6IHN0cmluZ106IFN1YnNjcmlwdGlvbiB9ID0ge307XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgZGVzdHJveSA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ2ZpbGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgZmlsZTogRWxlbWVudFJlZjtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuICBASW5wdXQoKSBjbGFzc2VzOiB7fSA9IHt9O1xuICBASW5wdXQoKSBvcHRpb25zOiBaaXBCdXR0b25PcHRpb25zO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCB8fCAhdGhpcy5vcHRpb25zLm9wZW5GaWxlRGlhbG9nT25DbGljaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAodGhpcy5maWxlLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkuY2xpY2soKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInIHx8IGUua2V5Q29kZSA9PT0gRU5URVIpIHtcbiAgICAgIHRoaXMub25DbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pXG4gIC8vIHNraXAgc2FmYXJpIGJ1Z1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9uRmlsZURyb3AoZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCB8fCBlLnR5cGUgPT09ICdkcmFnb3ZlcicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXJlY3RvcnkpIHtcbiAgICAgIHRoaXMudHJhdmVyc2VGaWxlVHJlZShlLmRhdGFUcmFuc2ZlciEuaXRlbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaWxlczogRmlsZVtdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG4gICAgICAgIC5jYWxsKGUuZGF0YVRyYW5zZmVyIS5maWxlcylcbiAgICAgICAgLmZpbHRlcigoZmlsZTogRmlsZSkgPT4gdGhpcy5hdHRyQWNjZXB0KGZpbGUsIHRoaXMub3B0aW9ucy5hY2NlcHQpKTtcbiAgICAgIGlmIChmaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy51cGxvYWRGaWxlcyhmaWxlcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgb25DaGFuZ2UoZTogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhpZSA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy51cGxvYWRGaWxlcyhoaWUuZmlsZXMhKTtcbiAgICBoaWUudmFsdWUgPSAnJztcbiAgfVxuXG4gIHByaXZhdGUgdHJhdmVyc2VGaWxlVHJlZShmaWxlczogRGF0YVRyYW5zZmVySXRlbUxpc3QpOiB2b2lkIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgY29uc3QgX3RyYXZlcnNlRmlsZVRyZWUgPSAoaXRlbTogYW55LCBwYXRoOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChpdGVtLmlzRmlsZSkge1xuICAgICAgICBpdGVtLmZpbGUoKGZpbGU6IEZpbGUpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5hdHRyQWNjZXB0KGZpbGUsIHRoaXMub3B0aW9ucy5hY2NlcHQpKSB7XG4gICAgICAgICAgICB0aGlzLnVwbG9hZEZpbGVzKFtmaWxlXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5pc0RpcmVjdG9yeSkge1xuICAgICAgICBjb25zdCBkaXJSZWFkZXIgPSBpdGVtLmNyZWF0ZVJlYWRlcigpO1xuXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgZGlyUmVhZGVyLnJlYWRFbnRyaWVzKChlbnRyaWVzOiBhbnkpID0+IHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGVudHJpZUl0ZW0gb2YgZW50cmllcykge1xuICAgICAgICAgICAgX3RyYXZlcnNlRmlsZVRyZWUoZW50cmllSXRlbSwgYCR7cGF0aH0ke2l0ZW0ubmFtZX0vYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMgYXMgYW55KSB7XG4gICAgICBfdHJhdmVyc2VGaWxlVHJlZShmaWxlLndlYmtpdEdldEFzRW50cnkoKSwgJycpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXR0ckFjY2VwdChmaWxlOiBGaWxlLCBhY2NlcHRlZEZpbGVzPzogc3RyaW5nIHwgc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICBpZiAoZmlsZSAmJiBhY2NlcHRlZEZpbGVzKSB7XG4gICAgICBjb25zdCBhY2NlcHRlZEZpbGVzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjY2VwdGVkRmlsZXMpID8gYWNjZXB0ZWRGaWxlcyA6IGFjY2VwdGVkRmlsZXMuc3BsaXQoJywnKTtcbiAgICAgIGNvbnN0IGZpbGVOYW1lID0gJycgKyBmaWxlLm5hbWU7XG4gICAgICBjb25zdCBtaW1lVHlwZSA9ICcnICsgZmlsZS50eXBlO1xuICAgICAgY29uc3QgYmFzZU1pbWVUeXBlID0gbWltZVR5cGUucmVwbGFjZSgvXFwvLiokLywgJycpO1xuXG4gICAgICByZXR1cm4gYWNjZXB0ZWRGaWxlc0FycmF5LnNvbWUodHlwZSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbGlkVHlwZSA9IHR5cGUudHJpbSgpO1xuICAgICAgICBpZiAodmFsaWRUeXBlLmNoYXJBdCgwKSA9PT0gJy4nKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGZpbGVOYW1lXG4gICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgIC5pbmRleE9mKHZhbGlkVHlwZS50b0xvd2VyQ2FzZSgpLCBmaWxlTmFtZS50b0xvd2VyQ2FzZSgpLmxlbmd0aCAtIHZhbGlkVHlwZS50b0xvd2VyQ2FzZSgpLmxlbmd0aCkgIT09IC0xXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmICgvXFwvXFwqJC8udGVzdCh2YWxpZFR5cGUpKSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBzb21ldGhpbmcgbGlrZSBhIGltYWdlLyogbWltZSB0eXBlXG4gICAgICAgICAgcmV0dXJuIGJhc2VNaW1lVHlwZSA9PT0gdmFsaWRUeXBlLnJlcGxhY2UoL1xcLy4qJC8sICcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWltZVR5cGUgPT09IHZhbGlkVHlwZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoVWlkKGZpbGU6IFVwbG9hZEZpbGUpOiBVcGxvYWRGaWxlIHtcbiAgICBpZiAoIWZpbGUudWlkKSB7XG4gICAgICBmaWxlLnVpZCA9IE1hdGgucmFuZG9tKClcbiAgICAgICAgLnRvU3RyaW5nKDM2KVxuICAgICAgICAuc3Vic3RyaW5nKDIpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHVwbG9hZEZpbGVzKGZpbGVMaXN0OiBGaWxlTGlzdCB8IEZpbGVbXSk6IHZvaWQge1xuICAgIGxldCBmaWx0ZXJzJDogT2JzZXJ2YWJsZTxVcGxvYWRGaWxlW10+ID0gb2YoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZmlsZUxpc3QpKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmZpbHRlcnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5maWx0ZXJzLmZvckVhY2goZiA9PiB7XG4gICAgICAgIGZpbHRlcnMkID0gZmlsdGVycyQucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAobGlzdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBmblJlcyA9IGYuZm4obGlzdCk7XG4gICAgICAgICAgICByZXR1cm4gZm5SZXMgaW5zdGFuY2VvZiBPYnNlcnZhYmxlID8gZm5SZXMgOiBvZihmblJlcyk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmaWx0ZXJzJC5zdWJzY3JpYmUoXG4gICAgICBsaXN0ID0+IHtcbiAgICAgICAgbGlzdC5mb3JFYWNoKChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7XG4gICAgICAgICAgdGhpcy5hdHRhY2hVaWQoZmlsZSk7XG4gICAgICAgICAgdGhpcy51cGxvYWQoZmlsZSwgbGlzdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGUgPT4ge1xuICAgICAgICB3YXJuKGBVbmhhbmRsZWQgdXBsb2FkIGZpbHRlciBlcnJvcmAsIGUpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHVwbG9hZChmaWxlOiBVcGxvYWRGaWxlLCBmaWxlTGlzdDogVXBsb2FkRmlsZVtdKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuYmVmb3JlVXBsb2FkKSB7XG4gICAgICByZXR1cm4gdGhpcy5wb3N0KGZpbGUpO1xuICAgIH1cbiAgICBjb25zdCBiZWZvcmUgPSB0aGlzLm9wdGlvbnMuYmVmb3JlVXBsb2FkKGZpbGUsIGZpbGVMaXN0KTtcbiAgICBpZiAoYmVmb3JlIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xuICAgICAgYmVmb3JlLnN1YnNjcmliZShcbiAgICAgICAgKHByb2Nlc3NlZEZpbGU6IFVwbG9hZEZpbGUpID0+IHtcbiAgICAgICAgICBjb25zdCBwcm9jZXNzZWRGaWxlVHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzZWRGaWxlKTtcbiAgICAgICAgICBpZiAocHJvY2Vzc2VkRmlsZVR5cGUgPT09ICdbb2JqZWN0IEZpbGVdJyB8fCBwcm9jZXNzZWRGaWxlVHlwZSA9PT0gJ1tvYmplY3QgQmxvYl0nKSB7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaFVpZChwcm9jZXNzZWRGaWxlKTtcbiAgICAgICAgICAgIHRoaXMucG9zdChwcm9jZXNzZWRGaWxlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzZWRGaWxlID09PSAnYm9vbGVhbicgJiYgcHJvY2Vzc2VkRmlsZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMucG9zdChmaWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGUgPT4ge1xuICAgICAgICAgIHdhcm4oYFVuaGFuZGxlZCB1cGxvYWQgYmVmb3JlVXBsb2FkIGVycm9yYCwgZSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChiZWZvcmUgIT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5wb3N0KGZpbGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcG9zdChmaWxlOiBVcGxvYWRGaWxlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVzdHJveSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvcHQgPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgeyB1aWQgfSA9IGZpbGU7XG4gICAgbGV0IHsgZGF0YSwgaGVhZGVycyB9ID0gb3B0O1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZGF0YSA9IChkYXRhIGFzIChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7fSkoZmlsZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgaGVhZGVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaGVhZGVycyA9IChoZWFkZXJzIGFzIChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7fSkoZmlsZSk7XG4gICAgfVxuICAgIGNvbnN0IGFyZ3M6IFVwbG9hZFhIUkFyZ3MgPSB7XG4gICAgICBhY3Rpb246IG9wdC5hY3Rpb24sXG4gICAgICBuYW1lOiBvcHQubmFtZSxcbiAgICAgIGhlYWRlcnMsXG4gICAgICBmaWxlLFxuICAgICAgZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogb3B0LndpdGhDcmVkZW50aWFscyxcbiAgICAgIG9uUHJvZ3Jlc3M6IG9wdC5vblByb2dyZXNzXG4gICAgICAgID8gZSA9PiB7XG4gICAgICAgICAgICBvcHQub25Qcm9ncmVzcyEoZSwgZmlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIG9uU3VjY2VzczogKHJldCwgeGhyKSA9PiB7XG4gICAgICAgIHRoaXMuY2xlYW4odWlkKTtcbiAgICAgICAgb3B0Lm9uU3VjY2VzcyEocmV0LCBmaWxlLCB4aHIpO1xuICAgICAgfSxcbiAgICAgIG9uRXJyb3I6IHhociA9PiB7XG4gICAgICAgIHRoaXMuY2xlYW4odWlkKTtcbiAgICAgICAgb3B0Lm9uRXJyb3IhKHhociwgZmlsZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCByZXEkID0gKG9wdC5jdXN0b21SZXF1ZXN0IHx8IHRoaXMueGhyKS5jYWxsKHRoaXMsIGFyZ3MpO1xuICAgIGlmICghKHJlcSQgaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pKSB7XG4gICAgICB3YXJuKGBNdXN0IHJldHVybiBTdWJzY3JpcHRpb24gdHlwZSBpbiAnW256Q3VzdG9tUmVxdWVzdF0nIHByb3BlcnR5YCk7XG4gICAgfVxuICAgIHRoaXMucmVxc1t1aWRdID0gcmVxJDtcbiAgICBvcHQub25TdGFydCEoZmlsZSk7XG4gIH1cblxuICBwcml2YXRlIHhocihhcmdzOiBVcGxvYWRYSFJBcmdzKTogU3Vic2NyaXB0aW9uIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBmb3JtRGF0YS5hcHBlbmQoYXJncy5uYW1lISwgYXJncy5maWxlIGFzIGFueSk7XG4gICAgaWYgKGFyZ3MuZGF0YSkge1xuICAgICAgT2JqZWN0LmtleXMoYXJncy5kYXRhKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgYXJncy5kYXRhIVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoIWFyZ3MuaGVhZGVycykge1xuICAgICAgYXJncy5oZWFkZXJzID0ge307XG4gICAgfVxuICAgIGlmIChhcmdzLmhlYWRlcnNbJ1gtUmVxdWVzdGVkLVdpdGgnXSAhPT0gbnVsbCkge1xuICAgICAgYXJncy5oZWFkZXJzWydYLVJlcXVlc3RlZC1XaXRoJ10gPSBgWE1MSHR0cFJlcXVlc3RgO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgYXJncy5oZWFkZXJzWydYLVJlcXVlc3RlZC1XaXRoJ107XG4gICAgfVxuICAgIGNvbnN0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdCgnUE9TVCcsIGFyZ3MuYWN0aW9uISwgZm9ybURhdGEsIHtcbiAgICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiBhcmdzLndpdGhDcmVkZW50aWFscyxcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyhhcmdzLmhlYWRlcnMpXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KHJlcSkuc3Vic2NyaWJlKFxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxuICAgICAgKGV2ZW50OiBIdHRwRXZlbnQ8YW55PikgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gSHR0cEV2ZW50VHlwZS5VcGxvYWRQcm9ncmVzcykge1xuICAgICAgICAgIGlmIChldmVudC50b3RhbCEgPiAwKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgICAgICAoZXZlbnQgYXMgYW55KS5wZXJjZW50ID0gKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsISkgKiAxMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFyZ3Mub25Qcm9ncmVzcyEoZXZlbnQsIGFyZ3MuZmlsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcbiAgICAgICAgICBhcmdzLm9uU3VjY2VzcyEoZXZlbnQuYm9keSwgYXJncy5maWxlLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnIgPT4ge1xuICAgICAgICB0aGlzLmFib3J0KGFyZ3MuZmlsZSk7XG4gICAgICAgIGFyZ3Mub25FcnJvciEoZXJyLCBhcmdzLmZpbGUpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuKHVpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcmVxJCA9IHRoaXMucmVxc1t1aWRdO1xuICAgIGlmIChyZXEkIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XG4gICAgICByZXEkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLnJlcXNbdWlkXTtcbiAgfVxuXG4gIGFib3J0KGZpbGU/OiBVcGxvYWRGaWxlKTogdm9pZCB7XG4gICAgaWYgKGZpbGUpIHtcbiAgICAgIHRoaXMuY2xlYW4oZmlsZSAmJiBmaWxlLnVpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMucmVxcykuZm9yRWFjaCh1aWQgPT4gdGhpcy5jbGVhbih1aWQpKTtcbiAgICB9XG4gIH1cblxuICAvLyAjcmVnaW9uIHN0eWxlc1xuXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC11cGxvYWQnO1xuXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XG4gICAgICBbdGhpcy5wcmVmaXhDbHNdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZGBdOiB0aGlzLm9wdGlvbnMuZGlzYWJsZWQsXG4gICAgICAuLi50aGlzLmNsYXNzZXNcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbGFzc01hcCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VcbiAgKSB7XG4gICAgaWYgKCFodHRwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCAnSHR0cENsaWVudCcsIFlvdSBjYW4gaW1wb3J0ICdIdHRwQ2xpZW50TW9kdWxlJyBpbiB5b3VyIHJvb3QgbW9kdWxlLmApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kgPSB0cnVlO1xuICAgIHRoaXMuYWJvcnQoKTtcbiAgfVxufVxuIl19