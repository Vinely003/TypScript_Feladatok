import { HasFormatter } from '../interfaces/hasformatter.js'

export class Paymant implements HasFormatter {

    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number,
    ) { }

    format() {
        return `${this.recipient} payed ${this.amount} Ft for ${this.details}`;
    }
}