import { Component, OnInit } from '@angular/core';


class Vince {
  id: number;
  name: string;
  isZombie: number;
  notIsZombie: number;
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

  listVince: Vince[] = [
    {
      id: 1,
      name: '北京',
      isZombie: 1,
      notIsZombie: 1,
      isRestruct: 1,
      isBrankruptcy: 1,
      isNew: 1,
      listVin: [
        {
          id: 2,
          name: '社区服务',
          isZombie: 1,
          notIsZombie: 1,
          isRestruct: 1,
          isBrankruptcy: 1,
          isNew: 1
        }
      ]
    },
    {
      id: 3,
      name: '北京',
      isZombie: 1,
      notIsZombie: 1,
      isRestruct: 1,
      isBrankruptcy: 1,
      isNew: 1,
      listVin: [
        {
          id: 4,
          name: '社区服务',
          isZombie: 1,
          notIsZombie: 1,
          isRestruct: 1,
          isBrankruptcy: 1,
          isNew: 1
        }
      ]
    },
    {
      id: 5,
      name: '北京',
      isZombie: 1,
      notIsZombie: 1,
      isRestruct: 1,
      isBrankruptcy: 1,
      isNew: 1,
      listVin: [
        {
          id: 6,
          name: '社区服务',
          isZombie: 1,
          notIsZombie: 1,
          isRestruct: 1,
          isBrankruptcy: 1,
          isNew: 1
        }
      ]
    },
    {
      id: 7,
      name: '北京',
      isZombie: 1,
      notIsZombie: 1,
      isRestruct: 1,
      isBrankruptcy: 1,
      isNew: 1,
      listVin: [
        {
          id: 8,
          name: '社区服务',
          isZombie: 1,
          notIsZombie: 1,
          isRestruct: 1,
          isBrankruptcy: 1,
          isNew: 1
        }
      ]
    },
    {
      id: 9,
      name: '北京',
      isZombie: 1,
      notIsZombie: 1,
      isRestruct: 1,
      isBrankruptcy: 1,
      isNew: 1,
      listVin: [
        {
          id: 10,
          name: '社区服务',
          isZombie: 1,
          notIsZombie: 1,
          isRestruct: 1,
          isBrankruptcy: 1,
          isNew: 1
        }
      ]
    },
    {
      id: 11,
      name: '北京',
      isZombie: 1,
      notIsZombie: 1,
      isRestruct: 1,
      isBrankruptcy: 1,
      isNew: 1,
      listVin: [
        {
          id: 12,
          name: '社区服务',
          isZombie: 1,
          notIsZombie: 1,
          isRestruct: 1,
          isBrankruptcy: 1,
          isNew: 1
        }
      ]
    },
    {
      id: 13,
      name: '北京',
      isZombie: 1,
      notIsZombie: 1,
      isRestruct: 1,
      isBrankruptcy: 1,
      isNew: 1,
      listVin: [
        {
          id: 22,
          name: '社区服务',
          isZombie: 1,
          notIsZombie: 1,
          isRestruct: 1,
          isBrankruptcy: 1,
          isNew: 1
        }
      ]
    },
    {
      id: 14,
      name: '北京',
      isZombie: 1,
      notIsZombie: 1,
      isRestruct: 1,
      isBrankruptcy: 1,
      isNew: 1,
      listVin: [
        {
          id: 25,
          name: '社区服务',
          isZombie: 1,
          notIsZombie: 1,
          isRestruct: 1,
          isBrankruptcy: 1,
          isNew: 1
        }
      ]
    },
    {
      id: 15,
      name: '北京',
      isZombie: 1,
      notIsZombie: 1,
      isRestruct: 1,
      isBrankruptcy: 1,
      isNew: 1,
      listVin: [
        {
          id: 26,
          name: '社区服务',
          isZombie: 1,
          notIsZombie: 1,
          isRestruct: 1,
          isBrankruptcy: 1,
          isNew: 1
        }
      ]
    },
    {
      id: 16,
      name: '北京',
      isZombie: 1,
      notIsZombie: 1,
      isRestruct: 1,
      isBrankruptcy: 1,
      isNew: 1,
      listVin: [
        {
          id: 27,
          name: '社区服务',
          isZombie: 1,
          notIsZombie: 1,
          isRestruct: 1,
          isBrankruptcy: 1,
          isNew: 1
        }
      ]
    },
    {
      id: 17,
      name: '北京',
      isZombie: 1,
      notIsZombie: 1,
      isRestruct: 1,
      isBrankruptcy: 1,
      isNew: 1,
      listVin: [
        {
          id: 28,
          name: '社区服务',
          isZombie: 1,
          notIsZombie: 1,
          isRestruct: 1,
          isBrankruptcy: 1,
          isNew: 1
        }
      ]
    }
  ];
  mapOfExpandedData: { [key: string]: Vince[] } = {};
  constructor() { }

  ngOnInit() {
    this.listVince.forEach(item => {
      this.mapOfExpandedData[item.id] = this.convertTreeToList(item);
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
