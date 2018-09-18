// Constructor

//  Code         | Name                |  Price
// -------------------------------------------------
// VOUCHER      | Cabify Voucher      |   5.00€
// TSHIRT       | Cabify T-Shirt      |  20.00€
// MUG          | Cafify Coffee Mug   |   7.50€
// ```

function Checkout(pricingRules) {
    this.pricingrules = pricingRules;
    this.cart =[];
    this.totalPrice=0;

 }

 Checkout.prototype.scan = function (item) {
    let newproduct = this.pricingrules.filter(function(p){return p.Code==item}[0]);
    if (this.cart.filter(function (i){return i.code==newproduct.Code}[0])){
        this.cart.filter(function (i){return i.code==newproduct.Code}[0]).quantity++;
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
    let vouchers= this.cart.filter(function(i){return i.code=="VOUCHER"});
    let vouchersTotal= Math.floor((vouchers/2))+vouchers%2;
    let vouchersPrice=vouchersTotal*this.pricingrules.filter(function(r){r.code=="VOUCHER"}[0]).Price;
    let tshirts= this.cart.filter(function(i){return i.code=="TSHIRT"});
    if (tshirts>=3){
       let tshirtsPrice=tshirts*19;
    }else{
        let tshirtsPrice=tshirts*this.pricingrules.filter(function(r){r.code=="TSHIRT"}[0]).Price;
    };
    let mugs= this.cart.filter(function(i){return i.code=="MUG"});
    let mugsPrice=mugs*this.pricingrules.filter(function(r){r.code=="MUG"}[0]).Price;
    return vouchersPrice+tshirtsPrice+mugsPrice;
 };




