export class Zombie {

  constructor(
    public id: number,
    public controlRatio: number,
    public areaName: string,
    public controlType: string,
    public registerTime: Date,
    public tradeName: string,
    public typeName: string
  ) {
  }
}
