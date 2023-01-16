
import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listtemplate.js';
import { Paymant } from './classes/paymant.js';
import { HasFormatter } from './interfaces/hasformatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let value: [string, string, number];
    value = [tofrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(...value);
    } else {
        doc = new Paymant(...value);

    }

    list.render(doc, type.value, 'end');
})