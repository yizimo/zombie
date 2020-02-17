/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
export declare enum NzBreakpoint {
    xxl = "xxl",
    xl = "xl",
    lg = "lg",
    md = "md",
    sm = "sm",
    xs = "xs"
}
export declare type NzBreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export declare type BreakpointMap = {
    [key in NzBreakpoint]: string;
};
export declare const responsiveMap: BreakpointMap;
