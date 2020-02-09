export class Liability {

  constructor(
    public time: Date,
    public claimLimit: number,
    public claimCost: number,
    public equityLimit: number,
    public equityCost: number,
    public interiorTradeLimit: number,
    public interiorTradeCost: number,
    public projectPolicyLimit: number,
    public projectPolicyCost: number
  ) {
  }
}
