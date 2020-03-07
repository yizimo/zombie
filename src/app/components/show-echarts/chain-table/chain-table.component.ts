import { Component, OnInit } from '@angular/core';
import {EcharMapService} from '../../../services/echar-map.service';


class Vince {
  id: number;
  name: string;
  isZombie: number;
  isRestruct: number;
  isBrankruptcy: number;
  isNew: number;
  level?: number;
  expand?: boolean;
  listVin?: Vince[];
  parent?: Vince;
}

@Component({
  selector: 'app-chain-table',
  templateUrl: './chain-table.component.html',
  styleUrls: ['./chain-table.component.css']
})
export class ChainTableComponent implements OnInit {

  listVince: Vince[] = [];
  mapOfExpandedData: { [key: string]: Vince[] } = {};
  constructor(private echarMapService: EcharMapService) { }

  ngOnInit() {
    this.getEchartByChinaTable();
    console.log(this.listVince);
  }

  getEchartByChinaTable() {
    this.echarMapService.getEchartByChinaTable().subscribe(data => {
      console.log(data.data.china_table_chart);
      this.listVince = data.data.china_table_chart;
      this.listVince.forEach(item => {
        this.mapOfExpandedData[item.id] = this.convertTreeToList(item);
      });
    });
  }

  collapse(array: Vince[], data: Vince, $event: boolean): void {
    if ($event === false) {
      if (data.listVin) {
        data.listVin.forEach(d => {
          // tslint:disable-next-line:no-non-null-assertion
          const target = array.find(a => a.id === d.id)!;
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: Vince): Vince[] {
    const stack: Vince[] = [];
    const array: Vince[] = [];
    const hashMap = {};
    stack.push({ ...root, level: 0, expand: false });

    while (stack.length !== 0) {
      // tslint:disable-next-line:no-non-null-assertion
      const node = stack.pop()!;
      this.visitNode(node, hashMap, array);
      if (node.listVin) {
        for (let i = node.listVin.length - 1; i >= 0; i--) {
          // tslint:disable-next-line:no-non-null-assertion
          stack.push({ ...node.listVin[i], level: node.level! + 1, expand: false, parent: node });
        }
      }
    }

    return array;
  }

  visitNode(node: Vince, hashMap: { [key: string]: boolean }, array: Vince[]): void {
    if (!hashMap[node.id]) {
      hashMap[node.id] = true;
      array.push(node);
    }
  }
}
