/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BehaviorSubject, Observable } from 'rxjs';
import { NzConfigService } from 'ng-zorro-antd/core';
import { JoinedEditorOptions, NzCodeEditorConfig } from './nz-code-editor.definitions';
export declare class NzCodeEditorService {
    private readonly nzConfigService;
    private document;
    private firstEditorInitialized;
    private loaded$;
    private loadingStatus;
    private option;
    private config;
    option$: BehaviorSubject<JoinedEditorOptions>;
    constructor(nzConfigService: NzConfigService, _document: any, // tslint:disable-line no-any
    config?: NzCodeEditorConfig);
    updateDefaultOption(option: JoinedEditorOptions): void;
    private _updateDefaultOption;
    requestToInit(): Observable<JoinedEditorOptions>;
    private loadMonacoScript;
    private onLoad;
    private onInit;
    private getLatestOption;
}
