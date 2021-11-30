/// <reference path = "./studentCalc.ts" />
class saya implements studentCalc.description {
  fee: number;
  constructor(fee: number) {
    this.fee = fee;
  }
  count() {
    return this.fee + 2;
  }
}
let TotalFee = studentCalc.AnualFeeCalc(1500, 4);
let Discount = new studentCalc.invoiceAccount.Invoice();
let newSaya = new saya(3);
console.log("Output: " + Discount.calculateDiscount(80)); //48 (80 * 0.60)
console.log("Output: " + TotalFee); // 6000(1500 * 4)
console.log("Output: " + newSaya.count());
