/* Let, Const, Block Scoping */
var getPrice = count => count * 2;
console.log(getPrice(2))
//4

var getPrice2 = (count, tax) => {
    var price = count * 4;
    price *= (1 + tax)
    return price;
}
console.log(getPrice2(2, .07))
//8.56

/* Arrow function */
document.addEventListener('click', () => console.log(this))
//window

document.addEventListener('click', function () {
    console.log(this)
})
//document

var invoice = {
    number: 123,
    process: function () {
        console.log(this)
    }
}
invoice.process()
/* 
Object {
    number: 123
} 
*/

var invoice2 = {
    number: 123,
    process: () => {
        console.log(this)
    }
}
invoice2.process()
//window

var invoice3 = {
    number: 123,
    process: function () {
        return () => console.log(this.number)
    }
};
var newInvoice = {
    number: 456
};

invoice3.process().bind(newInvoice)()
//123

var invoice4 = {
    number: 123,
    process: function () {
        return () => console.log(this.number)
    }
};
var newInvoice2 = {
    number: 456
};

invoice4.process().call(newInvoice2)
//123


/* Default Function Parameters */

var getProduct = function (productId = 1000) {
    console.log(productId)
}
getProduct()
//1000

var getProduct2 = function (productId2 = 2000, type = 'Software') {
    console.log(productId2 + ' , ' + type)
}
getProduct2(undefined, 'Hardware')
//2000 , Hardware

var getTotal = function (price, tax = price * .07) {
    console.log(price + tax)
}
getTotal(5)
//5.35

var baseTax = 1;
var getTotal2 = function (price, tax = price + baseTax) {
    console.log(price + tax)
}
getTotal2(5)
//11

/* var getTotal3 = function (price = adjustment, adjustment = 1) {
    console.log(price + adjustment)
}
getTotal3() */
//Uncaught ReferenceError: Cannot access 'adjustment' before initialization

var getTotal4 = function (price = adjustment, adjustment = 1) {
    console.log(price + adjustment)
}
getTotal4(5)

getTotal5 = new Function("price = 20", "return price");
console.log(getTotal5())

//Rest and Spread

var showCategories = function (productId, ...categories) {
    console.log(categories instanceof Array);
    console.log(categories);
}
showCategories(123, 'search', 'advertising')
//true
//["search","advertising"]

var showCategories2 = function (productId, ...categories) {
    console.log(arguments.length)
}
showCategories2('1', '2', '3', '4')

//Devamı var

//Object Literal Extensions

var price = 6, quantity = 30;

var productView = {
    price, quantity
};
console.log(productView)
//{price: 6, quantity: 30}

var price2 = 6, quantity2 = 30;
var productView = {
    price2, quantity2,
    calculateValue() {
        return this.price2 * this.quantity2
    }
};
console.log(productView.calculateValue())
//180

var price3 = 6, quantity3 = 30;
var productView = {
    price3, quantity3,
    "calculateValue"() {
        return this.price3 * this.quantity3
    }
};
console.log(productView["calculateValue"]())
//180

var field = "dynamicField";
var price4 = 6;
var productView2 = {
    [field]: price4
};

console.log(productView2)
//{dynamicField: 6}

var method = "doIt";
var productView3 = {
    [method + "-001"]() {
        console.log("in a method")
    }
};
productView3["doIt-001"]();
//in a method

var ident = 'productId';
var productView4 = {
    get [ident]() { return 'deneme'; },
    set [ident](value) { }
}
console.log(productView4.productId)
//deneme

/* For .. of Loops */

var categories = ['One', 'Two', 'Three'];
for (const item of categories) {
    console.log(item)
}
//One
//Two
//Three

var categories = [, , ,];
for (const item of categories) {
    console.log(item)
}
//undefined
//undefined
//undefined

var codes = "ABCDF";
var count = 0;
for (var code of codes) {
    count++;
}
console.log(code)
//F

/* Octal and Binary Literals */
/* Çokda önemli değil gibi geliyor sonra tekrar bak */

/* Template Literals */
let message = `A
B
C`
console.log(message)
//A
//B
//C

function showMessage(message) {
    let invoiceNum = '99';
    console.log(message)
}
let invoiceNum = '1350'
showMessage(`Invoice Number: ${invoiceNum}`)
//Invoice Number: 1350

function processInvoice(segments, ...values) {
    console.log(segments);
    console.log(values);
}
let invoiceNum4 = '1450';
let amount = '2000';

processInvoice`Invoice: ${invoiceNum4} for ${amount}`;

//["Invoice: ", " for ", "", raw: Array(3)]
// ["1450", "2000"]

/* Destructuring */

let salary = ['32000', '40000', '50000']
let [low, average, high] = salary;
console.log(low, high)
//32000 50000

let salary2 = ['32000', '50000']
let [low2, average2, high2] = salary2;
console.log(high2)
//undefined

let salary3 = ['32000', '40000'];
let [low3, average3, high3 = '5000'] = salary3;
console.log(high3)
//5000

function reviewSalary([low, average], high = '88000') {
    console.log(average)
}

reviewSalary(['32000', '50000'])
//50000

let objectSalary = {
    low4: '11000',
    average4: '12000',
    high4: '13000'
}
let { low4, average4, high4 } = objectSalary;
console.log(low4)
//11000


let objectSalary2 = {
    low5: '11000',
    average5: '12000',
    high5: '13000'
}
let newLow, newAvarage, newHigh;
({ low5: newLow, average5: newAvarage, high5: newHigh } = objectSalary2)
console.log(newHigh)
//13000

let [maxCode, minCode] = 'AZ';
console.log(`min: ${minCode} - max: ${maxCode}`)
//min: Z - max: A

/* Advanced Destructuring */

for ([a, b] of [[5, 10]]) {
    console.log(`${a} - ${b}`)
}
