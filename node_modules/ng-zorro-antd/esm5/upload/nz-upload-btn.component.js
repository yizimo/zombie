/**
 * @fileoverview added by tsickle
 * Generated from: nz-upload-btn.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var NzUploadBtnComponent = /** @class */ (function () {
    // #endregion
    function NzUploadBtnComponent(http, el, updateHostClassService) {
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
            throw new Error("Not found 'HttpClient', You can import 'HttpClientModule' in your root module.");
        }
    }
    // #endregion
    // #endregion
    /**
     * @return {?}
     */
    NzUploadBtnComponent.prototype.onClick = 
    // #endregion
    /**
     * @return {?}
     */
    function () {
        if (this.options.disabled || !this.options.openFileDialogOnClick) {
            return;
        }
        ((/** @type {?} */ (this.file.nativeElement))).click();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzUploadBtnComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.options.disabled) {
            return;
        }
        if (e.key === 'Enter' || e.keyCode === ENTER) {
            this.onClick();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    // skip safari bug
    // tslint:disable-next-line:no-any
    NzUploadBtnComponent.prototype.onFileDrop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        if (this.options.disabled || e.type === 'dragover') {
            e.preventDefault();
            return;
        }
        if (this.options.directory) {
            this.traverseFileTree((/** @type {?} */ (e.dataTransfer)).items);
        }
        else {
            /** @type {?} */
            var files = Array.prototype.slice
                .call((/** @type {?} */ (e.dataTransfer)).files)
                .filter((/**
             * @param {?} file
             * @return {?}
             */
            function (file) { return _this.attrAccept(file, _this.options.accept); }));
            if (files.length) {
                this.uploadFiles(files);
            }
        }
        e.preventDefault();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzUploadBtnComponent.prototype.onChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.options.disabled) {
            return;
        }
        /** @type {?} */
        var hie = (/** @type {?} */ (e.target));
        this.uploadFiles((/** @type {?} */ (hie.files)));
        hie.value = '';
    };
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    NzUploadBtnComponent.prototype.traverseFileTree = /**
     * @private
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var e_1, _a;
        var _this = this;
        // tslint:disable-next-line:no-any
        /** @type {?} */
        var _traverseFileTree = (/**
         * @param {?} item
         * @param {?} path
         * @return {?}
         */
        function (item, path) {
            if (item.isFile) {
                item.file((/**
                 * @param {?} file
                 * @return {?}
                 */
                function (file) {
                    if (_this.attrAccept(file, _this.options.accept)) {
                        _this.uploadFiles([file]);
                    }
                }));
            }
            else if (item.isDirectory) {
                /** @type {?} */
                var dirReader = item.createReader();
                // tslint:disable-next-line:no-any
                dirReader.readEntries((/**
                 * @param {?} entries
                 * @return {?}
                 */
                function (entries) {
                    var e_2, _a;
                    try {
                        for (var entries_1 = tslib_1.__values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
                            var entrieItem = entries_1_1.value;
                            _traverseFileTree(entrieItem, "" + path + item.name + "/");
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }));
            }
        });
        try {
            // tslint:disable-next-line:no-any
            for (var _b = tslib_1.__values((/** @type {?} */ (files))), _c = _b.next(); !_c.done; _c = _b.next()) {
                var file = _c.value;
                _traverseFileTree(file.webkitGetAsEntry(), '');
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @private
     * @param {?} file
     * @param {?=} acceptedFiles
     * @return {?}
     */
    NzUploadBtnComponent.prototype.attrAccept = /**
     * @private
     * @param {?} file
     * @param {?=} acceptedFiles
     * @return {?}
     */
    function (file, acceptedFiles) {
        if (file && acceptedFiles) {
            /** @type {?} */
            var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
            /** @type {?} */
            var fileName_1 = '' + file.name;
            /** @type {?} */
            var mimeType_1 = '' + file.type;
            /** @type {?} */
            var baseMimeType_1 = mimeType_1.replace(/\/.*$/, '');
            return acceptedFilesArray.some((/**
             * @param {?} type
             * @return {?}
             */
            function (type) {
                /** @type {?} */
                var validType = type.trim();
                if (validType.charAt(0) === '.') {
                    return (fileName_1
                        .toLowerCase()
                        .indexOf(validType.toLowerCase(), fileName_1.toLowerCase().length - validType.toLowerCase().length) !== -1);
                }
                else if (/\/\*$/.test(validType)) {
                    // This is something like a image/* mime type
                    return baseMimeType_1 === validType.replace(/\/.*$/, '');
                }
                return mimeType_1 === validType;
            }));
        }
        return true;
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    NzUploadBtnComponent.prototype.attachUid = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        if (!file.uid) {
            file.uid = Math.random()
                .toString(36)
                .substring(2);
        }
        return file;
    };
    /**
     * @param {?} fileList
     * @return {?}
     */
    NzUploadBtnComponent.prototype.uploadFiles = /**
     * @param {?} fileList
     * @return {?}
     */
    function (fileList) {
        var _this = this;
        /** @type {?} */
        var filters$ = of(Array.prototype.slice.call(fileList));
        if (this.options.filters) {
            this.options.filters.forEach((/**
             * @param {?} f
             * @return {?}
             */
            function (f) {
                filters$ = filters$.pipe(switchMap((/**
                 * @param {?} list
                 * @return {?}
                 */
                function (list) {
                    /** @type {?} */
                    var fnRes = f.fn(list);
                    return fnRes instanceof Observable ? fnRes : of(fnRes);
                })));
            }));
        }
        filters$.subscribe((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            list.forEach((/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                _this.attachUid(file);
                _this.upload(file, list);
            }));
        }), (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            warn("Unhandled upload filter error", e);
        }));
    };
    /**
     * @private
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    NzUploadBtnComponent.prototype.upload = /**
     * @private
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    function (file, fileList) {
        var _this = this;
        if (!this.options.beforeUpload) {
            return this.post(file);
        }
        /** @type {?} */
        var before = this.options.beforeUpload(file, fileList);
        if (before instanceof Observable) {
            before.subscribe((/**
             * @param {?} processedFile
             * @return {?}
             */
            function (processedFile) {
                /** @type {?} */
                var processedFileType = Object.prototype.toString.call(processedFile);
                if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
                    _this.attachUid(processedFile);
                    _this.post(processedFile);
                }
                else if (typeof processedFile === 'boolean' && processedFile !== false) {
                    _this.post(file);
                }
            }), (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                warn("Unhandled upload beforeUpload error", e);
            }));
        }
        else if (before !== false) {
            return this.post(file);
        }
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    NzUploadBtnComponent.prototype.post = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        var _this = this;
        if (this.destroy) {
            return;
        }
        /** @type {?} */
        var opt = this.options;
        var uid = file.uid;
        var data = opt.data, headers = opt.headers;
        if (typeof data === 'function') {
            data = ((/** @type {?} */ (data)))(file);
        }
        if (typeof headers === 'function') {
            headers = ((/** @type {?} */ (headers)))(file);
        }
        /** @type {?} */
        var args = {
            action: opt.action,
            name: opt.name,
            headers: headers,
            file: file,
            data: data,
            withCredentials: opt.withCredentials,
            onProgress: opt.onProgress
                ? (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    (/** @type {?} */ (opt.onProgress))(e, file);
                })
                : undefined,
            onSuccess: (/**
             * @param {?} ret
             * @param {?} xhr
             * @return {?}
             */
            function (ret, xhr) {
                _this.clean(uid);
                (/** @type {?} */ (opt.onSuccess))(ret, file, xhr);
            }),
            onError: (/**
             * @param {?} xhr
             * @return {?}
             */
            function (xhr) {
                _this.clean(uid);
                (/** @type {?} */ (opt.onError))(xhr, file);
            })
        };
        /** @type {?} */
        var req$ = (opt.customRequest || this.xhr).call(this, args);
        if (!(req$ instanceof Subscription)) {
            warn("Must return Subscription type in '[nzCustomRequest]' property");
        }
        this.reqs[uid] = req$;
        (/** @type {?} */ (opt.onStart))(file);
    };
    /**
     * @private
     * @param {?} args
     * @return {?}
     */
    NzUploadBtnComponent.prototype.xhr = /**
     * @private
     * @param {?} args
     * @return {?}
     */
    function (args) {
        var _this = this;
        /** @type {?} */
        var formData = new FormData();
        // tslint:disable-next-line:no-any
        formData.append((/** @type {?} */ (args.name)), (/** @type {?} */ (args.file)));
        if (args.data) {
            Object.keys(args.data).map((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                formData.append(key, (/** @type {?} */ (args.data))[key]);
            }));
        }
        if (!args.headers) {
            args.headers = {};
        }
        if (args.headers['X-Requested-With'] !== null) {
            args.headers['X-Requested-With'] = "XMLHttpRequest";
        }
        else {
            delete args.headers['X-Requested-With'];
        }
        /** @type {?} */
        var req = new HttpRequest('POST', (/** @type {?} */ (args.action)), formData, {
            reportProgress: true,
            withCredentials: args.withCredentials,
            headers: new HttpHeaders(args.headers)
        });
        return this.http.request(req).subscribe((
        // tslint:disable-next-line no-any
        // tslint:disable-next-line no-any
        /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
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
        function (err) {
            _this.abort(args.file);
            (/** @type {?} */ (args.onError))(err, args.file);
        }));
    };
    /**
     * @private
     * @param {?} uid
     * @return {?}
     */
    NzUploadBtnComponent.prototype.clean = /**
     * @private
     * @param {?} uid
     * @return {?}
     */
    function (uid) {
        /** @type {?} */
        var req$ = this.reqs[uid];
        if (req$ instanceof Subscription) {
            req$.unsubscribe();
        }
        delete this.reqs[uid];
    };
    /**
     * @param {?=} file
     * @return {?}
     */
    NzUploadBtnComponent.prototype.abort = /**
     * @param {?=} file
     * @return {?}
     */
    function (file) {
        var _this = this;
        if (file) {
            this.clean(file && file.uid);
        }
        else {
            Object.keys(this.reqs).forEach((/**
             * @param {?} uid
             * @return {?}
             */
            function (uid) { return _this.clean(uid); }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzUploadBtnComponent.prototype.setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = tslib_1.__assign((_a = {}, _a[this.prefixCls] = true, _a[this.prefixCls + "-disabled"] = this.options.disabled, _a), this.classes);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    };
    /**
     * @return {?}
     */
    NzUploadBtnComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.inited = true;
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzUploadBtnComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.inited) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    NzUploadBtnComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy = true;
        this.abort();
    };
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
    NzUploadBtnComponent.ctorParameters = function () { return [
        { type: HttpClient, decorators: [{ type: Optional }] },
        { type: ElementRef },
        { type: NzUpdateHostClassService }
    ]; };
    NzUploadBtnComponent.propDecorators = {
        file: [{ type: ViewChild, args: ['file', { static: false },] }],
        classes: [{ type: Input }],
        options: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }],
        onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
        onFileDrop: [{ type: HostListener, args: ['drop', ['$event'],] }, { type: HostListener, args: ['dragover', ['$event'],] }]
    };
    return NzUploadBtnComponent;
}());
export { NzUploadBtnComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLWJ0bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3VwbG9hZC8iLCJzb3VyY2VzIjpbIm56LXVwbG9hZC1idG4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBYSxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwSCxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLFFBQVEsRUFDUixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSXBFO0lBMFNFLGFBQWE7SUFFYiw4QkFDc0IsSUFBZ0IsRUFDNUIsRUFBYyxFQUNkLHNCQUFnRDtRQUZwQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQzVCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCO1FBbFMxRCxTQUFJLEdBQW9DLEVBQUUsQ0FBQztRQUNuQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHLEtBQUssQ0FBQzs7UUFLZixZQUFPLEdBQU8sRUFBRSxDQUFDOztRQTJRbEIsY0FBUyxHQUFHLFlBQVksQ0FBQztRQWtCL0IsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsZ0ZBQWdGLENBQUMsQ0FBQztT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VWQsUUFBUTtnQkE5VFgsVUFBVTtnQkFhRyx3QkFBd0I7Ozt1QkFxQnBDLFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzBCQUduQyxLQUFLOzBCQUNMLEtBQUs7MEJBSUwsWUFBWSxTQUFDLE9BQU87NEJBUXBCLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7NkJBVWxDLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDL0IsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUF5UnRDLDJCQUFDO0NBQUEsQUFyVUQsSUFxVUM7U0F6VFksb0JBQW9COzs7SUFDL0Isb0NBQTJDOzs7OztJQUMzQyxzQ0FBdUI7Ozs7O0lBQ3ZCLHVDQUF3Qjs7SUFFeEIsb0NBQXVEOztJQUd2RCx1Q0FBMEI7O0lBQzFCLHVDQUFtQzs7Ozs7SUEwUW5DLHlDQUFpQzs7Ozs7SUFjL0Isb0NBQW9DOzs7OztJQUNwQyxrQ0FBc0I7Ozs7O0lBQ3RCLHNEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBFTlRFUiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXZlbnQsIEh0dHBFdmVudFR5cGUsIEh0dHBIZWFkZXJzLCBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgd2FybiwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgVXBsb2FkRmlsZSwgVXBsb2FkWEhSQXJncywgWmlwQnV0dG9uT3B0aW9ucyB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW256LXVwbG9hZC1idG5dJyxcbiAgZXhwb3J0QXM6ICduelVwbG9hZEJ0bicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei11cGxvYWQtYnRuLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbYXR0ci50YWJpbmRleF0nOiAnXCIwXCInLFxuICAgICdbYXR0ci5yb2xlXSc6ICdcImJ1dHRvblwiJ1xuICB9LFxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBOelVwbG9hZEJ0bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICByZXFzOiB7IFtrZXk6IHN0cmluZ106IFN1YnNjcmlwdGlvbiB9ID0ge307XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgZGVzdHJveSA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ2ZpbGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgZmlsZTogRWxlbWVudFJlZjtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuICBASW5wdXQoKSBjbGFzc2VzOiB7fSA9IHt9O1xuICBASW5wdXQoKSBvcHRpb25zOiBaaXBCdXR0b25PcHRpb25zO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCB8fCAhdGhpcy5vcHRpb25zLm9wZW5GaWxlRGlhbG9nT25DbGljaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAodGhpcy5maWxlLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkuY2xpY2soKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInIHx8IGUua2V5Q29kZSA9PT0gRU5URVIpIHtcbiAgICAgIHRoaXMub25DbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pXG4gIC8vIHNraXAgc2FmYXJpIGJ1Z1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9uRmlsZURyb3AoZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCB8fCBlLnR5cGUgPT09ICdkcmFnb3ZlcicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXJlY3RvcnkpIHtcbiAgICAgIHRoaXMudHJhdmVyc2VGaWxlVHJlZShlLmRhdGFUcmFuc2ZlciEuaXRlbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaWxlczogRmlsZVtdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG4gICAgICAgIC5jYWxsKGUuZGF0YVRyYW5zZmVyIS5maWxlcylcbiAgICAgICAgLmZpbHRlcigoZmlsZTogRmlsZSkgPT4gdGhpcy5hdHRyQWNjZXB0KGZpbGUsIHRoaXMub3B0aW9ucy5hY2NlcHQpKTtcbiAgICAgIGlmIChmaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy51cGxvYWRGaWxlcyhmaWxlcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgb25DaGFuZ2UoZTogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhpZSA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy51cGxvYWRGaWxlcyhoaWUuZmlsZXMhKTtcbiAgICBoaWUudmFsdWUgPSAnJztcbiAgfVxuXG4gIHByaXZhdGUgdHJhdmVyc2VGaWxlVHJlZShmaWxlczogRGF0YVRyYW5zZmVySXRlbUxpc3QpOiB2b2lkIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgY29uc3QgX3RyYXZlcnNlRmlsZVRyZWUgPSAoaXRlbTogYW55LCBwYXRoOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChpdGVtLmlzRmlsZSkge1xuICAgICAgICBpdGVtLmZpbGUoKGZpbGU6IEZpbGUpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5hdHRyQWNjZXB0KGZpbGUsIHRoaXMub3B0aW9ucy5hY2NlcHQpKSB7XG4gICAgICAgICAgICB0aGlzLnVwbG9hZEZpbGVzKFtmaWxlXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5pc0RpcmVjdG9yeSkge1xuICAgICAgICBjb25zdCBkaXJSZWFkZXIgPSBpdGVtLmNyZWF0ZVJlYWRlcigpO1xuXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgZGlyUmVhZGVyLnJlYWRFbnRyaWVzKChlbnRyaWVzOiBhbnkpID0+IHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGVudHJpZUl0ZW0gb2YgZW50cmllcykge1xuICAgICAgICAgICAgX3RyYXZlcnNlRmlsZVRyZWUoZW50cmllSXRlbSwgYCR7cGF0aH0ke2l0ZW0ubmFtZX0vYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMgYXMgYW55KSB7XG4gICAgICBfdHJhdmVyc2VGaWxlVHJlZShmaWxlLndlYmtpdEdldEFzRW50cnkoKSwgJycpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXR0ckFjY2VwdChmaWxlOiBGaWxlLCBhY2NlcHRlZEZpbGVzPzogc3RyaW5nIHwgc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICBpZiAoZmlsZSAmJiBhY2NlcHRlZEZpbGVzKSB7XG4gICAgICBjb25zdCBhY2NlcHRlZEZpbGVzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjY2VwdGVkRmlsZXMpID8gYWNjZXB0ZWRGaWxlcyA6IGFjY2VwdGVkRmlsZXMuc3BsaXQoJywnKTtcbiAgICAgIGNvbnN0IGZpbGVOYW1lID0gJycgKyBmaWxlLm5hbWU7XG4gICAgICBjb25zdCBtaW1lVHlwZSA9ICcnICsgZmlsZS50eXBlO1xuICAgICAgY29uc3QgYmFzZU1pbWVUeXBlID0gbWltZVR5cGUucmVwbGFjZSgvXFwvLiokLywgJycpO1xuXG4gICAgICByZXR1cm4gYWNjZXB0ZWRGaWxlc0FycmF5LnNvbWUodHlwZSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbGlkVHlwZSA9IHR5cGUudHJpbSgpO1xuICAgICAgICBpZiAodmFsaWRUeXBlLmNoYXJBdCgwKSA9PT0gJy4nKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGZpbGVOYW1lXG4gICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgIC5pbmRleE9mKHZhbGlkVHlwZS50b0xvd2VyQ2FzZSgpLCBmaWxlTmFtZS50b0xvd2VyQ2FzZSgpLmxlbmd0aCAtIHZhbGlkVHlwZS50b0xvd2VyQ2FzZSgpLmxlbmd0aCkgIT09IC0xXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmICgvXFwvXFwqJC8udGVzdCh2YWxpZFR5cGUpKSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBzb21ldGhpbmcgbGlrZSBhIGltYWdlLyogbWltZSB0eXBlXG4gICAgICAgICAgcmV0dXJuIGJhc2VNaW1lVHlwZSA9PT0gdmFsaWRUeXBlLnJlcGxhY2UoL1xcLy4qJC8sICcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWltZVR5cGUgPT09IHZhbGlkVHlwZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoVWlkKGZpbGU6IFVwbG9hZEZpbGUpOiBVcGxvYWRGaWxlIHtcbiAgICBpZiAoIWZpbGUudWlkKSB7XG4gICAgICBmaWxlLnVpZCA9IE1hdGgucmFuZG9tKClcbiAgICAgICAgLnRvU3RyaW5nKDM2KVxuICAgICAgICAuc3Vic3RyaW5nKDIpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHVwbG9hZEZpbGVzKGZpbGVMaXN0OiBGaWxlTGlzdCB8IEZpbGVbXSk6IHZvaWQge1xuICAgIGxldCBmaWx0ZXJzJDogT2JzZXJ2YWJsZTxVcGxvYWRGaWxlW10+ID0gb2YoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZmlsZUxpc3QpKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmZpbHRlcnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5maWx0ZXJzLmZvckVhY2goZiA9PiB7XG4gICAgICAgIGZpbHRlcnMkID0gZmlsdGVycyQucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAobGlzdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBmblJlcyA9IGYuZm4obGlzdCk7XG4gICAgICAgICAgICByZXR1cm4gZm5SZXMgaW5zdGFuY2VvZiBPYnNlcnZhYmxlID8gZm5SZXMgOiBvZihmblJlcyk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmaWx0ZXJzJC5zdWJzY3JpYmUoXG4gICAgICBsaXN0ID0+IHtcbiAgICAgICAgbGlzdC5mb3JFYWNoKChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7XG4gICAgICAgICAgdGhpcy5hdHRhY2hVaWQoZmlsZSk7XG4gICAgICAgICAgdGhpcy51cGxvYWQoZmlsZSwgbGlzdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGUgPT4ge1xuICAgICAgICB3YXJuKGBVbmhhbmRsZWQgdXBsb2FkIGZpbHRlciBlcnJvcmAsIGUpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHVwbG9hZChmaWxlOiBVcGxvYWRGaWxlLCBmaWxlTGlzdDogVXBsb2FkRmlsZVtdKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuYmVmb3JlVXBsb2FkKSB7XG4gICAgICByZXR1cm4gdGhpcy5wb3N0KGZpbGUpO1xuICAgIH1cbiAgICBjb25zdCBiZWZvcmUgPSB0aGlzLm9wdGlvbnMuYmVmb3JlVXBsb2FkKGZpbGUsIGZpbGVMaXN0KTtcbiAgICBpZiAoYmVmb3JlIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xuICAgICAgYmVmb3JlLnN1YnNjcmliZShcbiAgICAgICAgKHByb2Nlc3NlZEZpbGU6IFVwbG9hZEZpbGUpID0+IHtcbiAgICAgICAgICBjb25zdCBwcm9jZXNzZWRGaWxlVHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzZWRGaWxlKTtcbiAgICAgICAgICBpZiAocHJvY2Vzc2VkRmlsZVR5cGUgPT09ICdbb2JqZWN0IEZpbGVdJyB8fCBwcm9jZXNzZWRGaWxlVHlwZSA9PT0gJ1tvYmplY3QgQmxvYl0nKSB7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaFVpZChwcm9jZXNzZWRGaWxlKTtcbiAgICAgICAgICAgIHRoaXMucG9zdChwcm9jZXNzZWRGaWxlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzZWRGaWxlID09PSAnYm9vbGVhbicgJiYgcHJvY2Vzc2VkRmlsZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMucG9zdChmaWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGUgPT4ge1xuICAgICAgICAgIHdhcm4oYFVuaGFuZGxlZCB1cGxvYWQgYmVmb3JlVXBsb2FkIGVycm9yYCwgZSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChiZWZvcmUgIT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5wb3N0KGZpbGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcG9zdChmaWxlOiBVcGxvYWRGaWxlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVzdHJveSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvcHQgPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgeyB1aWQgfSA9IGZpbGU7XG4gICAgbGV0IHsgZGF0YSwgaGVhZGVycyB9ID0gb3B0O1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZGF0YSA9IChkYXRhIGFzIChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7fSkoZmlsZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgaGVhZGVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaGVhZGVycyA9IChoZWFkZXJzIGFzIChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7fSkoZmlsZSk7XG4gICAgfVxuICAgIGNvbnN0IGFyZ3M6IFVwbG9hZFhIUkFyZ3MgPSB7XG4gICAgICBhY3Rpb246IG9wdC5hY3Rpb24sXG4gICAgICBuYW1lOiBvcHQubmFtZSxcbiAgICAgIGhlYWRlcnMsXG4gICAgICBmaWxlLFxuICAgICAgZGF0YSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogb3B0LndpdGhDcmVkZW50aWFscyxcbiAgICAgIG9uUHJvZ3Jlc3M6IG9wdC5vblByb2dyZXNzXG4gICAgICAgID8gZSA9PiB7XG4gICAgICAgICAgICBvcHQub25Qcm9ncmVzcyEoZSwgZmlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIG9uU3VjY2VzczogKHJldCwgeGhyKSA9PiB7XG4gICAgICAgIHRoaXMuY2xlYW4odWlkKTtcbiAgICAgICAgb3B0Lm9uU3VjY2VzcyEocmV0LCBmaWxlLCB4aHIpO1xuICAgICAgfSxcbiAgICAgIG9uRXJyb3I6IHhociA9PiB7XG4gICAgICAgIHRoaXMuY2xlYW4odWlkKTtcbiAgICAgICAgb3B0Lm9uRXJyb3IhKHhociwgZmlsZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCByZXEkID0gKG9wdC5jdXN0b21SZXF1ZXN0IHx8IHRoaXMueGhyKS5jYWxsKHRoaXMsIGFyZ3MpO1xuICAgIGlmICghKHJlcSQgaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pKSB7XG4gICAgICB3YXJuKGBNdXN0IHJldHVybiBTdWJzY3JpcHRpb24gdHlwZSBpbiAnW256Q3VzdG9tUmVxdWVzdF0nIHByb3BlcnR5YCk7XG4gICAgfVxuICAgIHRoaXMucmVxc1t1aWRdID0gcmVxJDtcbiAgICBvcHQub25TdGFydCEoZmlsZSk7XG4gIH1cblxuICBwcml2YXRlIHhocihhcmdzOiBVcGxvYWRYSFJBcmdzKTogU3Vic2NyaXB0aW9uIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBmb3JtRGF0YS5hcHBlbmQoYXJncy5uYW1lISwgYXJncy5maWxlIGFzIGFueSk7XG4gICAgaWYgKGFyZ3MuZGF0YSkge1xuICAgICAgT2JqZWN0LmtleXMoYXJncy5kYXRhKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgYXJncy5kYXRhIVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoIWFyZ3MuaGVhZGVycykge1xuICAgICAgYXJncy5oZWFkZXJzID0ge307XG4gICAgfVxuICAgIGlmIChhcmdzLmhlYWRlcnNbJ1gtUmVxdWVzdGVkLVdpdGgnXSAhPT0gbnVsbCkge1xuICAgICAgYXJncy5oZWFkZXJzWydYLVJlcXVlc3RlZC1XaXRoJ10gPSBgWE1MSHR0cFJlcXVlc3RgO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgYXJncy5oZWFkZXJzWydYLVJlcXVlc3RlZC1XaXRoJ107XG4gICAgfVxuICAgIGNvbnN0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdCgnUE9TVCcsIGFyZ3MuYWN0aW9uISwgZm9ybURhdGEsIHtcbiAgICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiBhcmdzLndpdGhDcmVkZW50aWFscyxcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyhhcmdzLmhlYWRlcnMpXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KHJlcSkuc3Vic2NyaWJlKFxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxuICAgICAgKGV2ZW50OiBIdHRwRXZlbnQ8YW55PikgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gSHR0cEV2ZW50VHlwZS5VcGxvYWRQcm9ncmVzcykge1xuICAgICAgICAgIGlmIChldmVudC50b3RhbCEgPiAwKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgICAgICAoZXZlbnQgYXMgYW55KS5wZXJjZW50ID0gKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsISkgKiAxMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFyZ3Mub25Qcm9ncmVzcyEoZXZlbnQsIGFyZ3MuZmlsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcbiAgICAgICAgICBhcmdzLm9uU3VjY2VzcyEoZXZlbnQuYm9keSwgYXJncy5maWxlLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnIgPT4ge1xuICAgICAgICB0aGlzLmFib3J0KGFyZ3MuZmlsZSk7XG4gICAgICAgIGFyZ3Mub25FcnJvciEoZXJyLCBhcmdzLmZpbGUpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuKHVpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcmVxJCA9IHRoaXMucmVxc1t1aWRdO1xuICAgIGlmIChyZXEkIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XG4gICAgICByZXEkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLnJlcXNbdWlkXTtcbiAgfVxuXG4gIGFib3J0KGZpbGU/OiBVcGxvYWRGaWxlKTogdm9pZCB7XG4gICAgaWYgKGZpbGUpIHtcbiAgICAgIHRoaXMuY2xlYW4oZmlsZSAmJiBmaWxlLnVpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMucmVxcykuZm9yRWFjaCh1aWQgPT4gdGhpcy5jbGVhbih1aWQpKTtcbiAgICB9XG4gIH1cblxuICAvLyAjcmVnaW9uIHN0eWxlc1xuXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC11cGxvYWQnO1xuXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XG4gICAgICBbdGhpcy5wcmVmaXhDbHNdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZGBdOiB0aGlzLm9wdGlvbnMuZGlzYWJsZWQsXG4gICAgICAuLi50aGlzLmNsYXNzZXNcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbGFzc01hcCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VcbiAgKSB7XG4gICAgaWYgKCFodHRwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCAnSHR0cENsaWVudCcsIFlvdSBjYW4gaW1wb3J0ICdIdHRwQ2xpZW50TW9kdWxlJyBpbiB5b3VyIHJvb3QgbW9kdWxlLmApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kgPSB0cnVlO1xuICAgIHRoaXMuYWJvcnQoKTtcbiAgfVxufVxuIl19