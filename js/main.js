// Examples:

//     Items: VOUCHER, TSHIRT, MUG
//     Total: 32.50€

//     Items: VOUCHER, TSHIRT, VOUCHER
//     Total: 25.00€

//     Items: TSHIRT, TSHIRT, TSHIRT, VOUCHER, TSHIRT
//     Total: 81.00€

//     Items: VOUCHER, TSHIRT, VOUCHER, VOUCHER, MUG, TSHIRT, TSHIRT
//     Total: 74.50€
    

var checkout = new Checkout();
checkout.scan("VOUCHER").scan("MUG").scan("TSHIRT").scan("TSHIRT").scan("TSHIRT").scan("VOUCHER").scan("VOUCHER");
console.log(checkout)
let price= checkout.total();
console.log(price)


