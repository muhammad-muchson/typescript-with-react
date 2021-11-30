namespace studentCalc {
  export function AnualFeeCalc(feeAmount: number, term: number) {
    return feeAmount * term;
  }
  export interface description {
    fee: number;
  }

  export namespace invoiceAccount {
    export class Invoice {
      public calculateDiscount(price: number) {
        return price * 0.6;
      }
    }
  }
}
