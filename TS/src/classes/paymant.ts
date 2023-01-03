import { HasFormatter } from '../interfaces/hasformatter.js'

//classes
export class Paymant implements HasFormatter {
    // client: string;
    // details: string;
    // amount: number;

    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number,
    ) { }

    format() {
        return `${this.recipient} is owes ${this.amount} Ft for ${this.details}`;
    }
}