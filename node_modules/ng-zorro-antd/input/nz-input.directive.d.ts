/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, Renderer2 } from '@angular/core';
import { NzSizeLDSType } from 'ng-zorro-antd/core';
export declare class NzInputDirective {
    nzSize: NzSizeLDSType;
    disabled: boolean;
    constructor(renderer: Renderer2, elementRef: ElementRef);
}
