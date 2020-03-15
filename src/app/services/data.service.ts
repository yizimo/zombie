import { Injectable } from '@angular/core';
import {Result} from '../kind/result';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export abstract class DataService {


  /**
   * 获取全部数据
   */
  abstract getResult(id: number);
  /**
   * 搜索
   */
  abstract getResultBySearchName(searchName: number);

}
