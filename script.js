import { HelloPrinter } from './helloPrinter.js';

const printer = new HelloPrinter();
const button = document.getElementById('helloButton');

button.addEventListener('click', () => printer.sayHello());
