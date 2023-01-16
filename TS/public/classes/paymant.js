export class Paymant {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} payed ${this.amount} Ft for ${this.details}`;
    }
}
