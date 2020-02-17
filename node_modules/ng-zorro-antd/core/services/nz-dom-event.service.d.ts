/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { NgZone, RendererFactory2 } from '@angular/core';
import { Observable } from 'rxjs';
export declare class NzDomEventService {
    private ngZone;
    private rendererFactory2;
    private readonly resizeSource;
    private readonly domEventListeners;
    private renderer;
    constructor(ngZone: NgZone, rendererFactory2: RendererFactory2);
    registerResizeListener(): Observable<void>;
    unregisterResizeListener(): void;
    private tryToStartListener;
    private tryToStopListener;
}
