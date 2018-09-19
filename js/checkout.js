// Constructor

//  Code         | Name                |  Price
// -------------------------------------------------
// VOUCHER      | Cabify Voucher      |   5.00€
// TSHIRT       | Cabify T-Shirt      |  20.00€
// MUG          | Cafify Coffee Mug   |   7.50€


let pricingRules=[{"code":"VOUCHER", "name":"Cabify Voucher", "price":5},
{"code":"TSHIRT", "name":"Cabify T-shirt", "price":20},
{"code":"MUG", "name":"Cabify Mug", "price":7.5}];

function Checkout() {
    this.pricingrules = pricingRules;
    this.cart =[];
    this.totalPrice=0;

 }

 Checkout.prototype.scan = function (item) {
    // añado un nuevo producto a mi checkout - para ello busco que producto es de mi pricing rules
    var newproduct = this.pricingrules.filter(function(p){
        return p.code==item;
    })[0];
    // si no tengo de ese producto lo añado, si no, subo su quantity
    if (this.cart.filter(function (i){return i.code==newproduct.code})[0]){
        this.cart.filter(function (i){return i.code==newproduct.code})[0].quantity++;
    }else{
        this.cart.push({code:item,quantity:1});
    }
    return this;
 };

//  * The marketing department believes in 2-for-1 promotions (buy two of the same product, get one free), 
//  * and would like for there to be a 2-for-1 special on `VOUCHER` items.

//  * The CFO insists that the best way to increase sales is with discounts on bulk purchases
//  *  (buying x or more of a product, the price of that product is reduced), and demands that if you buy 3 or more 
//  * `TSHIRT` items, the price per unit should be 19.00€.

 Checkout.prototype.total = function () {
     // nuero de vouchers que tengo en mi checkout y si es divisible por 2, aplico el dos por uno y los que sobre lo añado
    let vouchers= this.getProduct("VOUCHER")
    let vouchersTotal= Math.floor((vouchers.quantity/2))+vouchers.quantity%2;
    let vouchersPrice=vouchersTotal*this.getPrice("VOUCHER");
    // filtro el numero de camisetas que tengo
    let tshirts= this.getProduct("TSHIRT");
    let tshirtsPrice=0;
    let mugsPrice=0;
    // compruebo si tengo 3 o mas de tres en mi  checkout para aplicar el precio de descuento o no
    if (tshirts&&tshirts.quantity>=3){
       tshirtsPrice=tshirts.quantity*19;
    }else if (tshirts){
       tshirtsPrice=tshirts.quantity*this.getPrice("TSHIRT");
    };

    // filtro los mugs que adquiero y los multiplico por su precio
    let mugs=this.getProduct("MUG");
    if(mugs!=undefined){
       mugsPrice=mugs.quantity*this.pricingrules.filter(function(r){return r.code=="MUG"})[0].price;
    }
    return vouchersPrice+tshirtsPrice+mugsPrice;
 };

 Checkout.prototype.getProduct = function(item){
    return this.cart.filter(function(i){return i.code==item})[0];
}

Checkout.prototype.getPrice= function (item){
    return this.pricingrules.filter(function(r){return r.code==item})[0].price;
}



