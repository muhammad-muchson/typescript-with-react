var studentCalc;
(function (studentCalc) {
    function AnualFeeCalc(feeAmount, term) {
        return feeAmount * term;
    }
    studentCalc.AnualFeeCalc = AnualFeeCalc;
    let invoiceAccount;
    (function (invoiceAccount) {
        class Invoice {
            calculateDiscount(price) {
                return price * 0.6;
            }
        }
        invoiceAccount.Invoice = Invoice;
    })(invoiceAccount = studentCalc.invoiceAccount || (studentCalc.invoiceAccount = {}));
})(studentCalc || (studentCalc = {}));
/// <reference path = "./studentCalc.ts" />
class saya {
    constructor(fee) {
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
