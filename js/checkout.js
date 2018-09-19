// Constructor

//  Code         | Name                |  Price
// -------------------------------------------------
// VOUCHER      | Cabify Voucher      |   5.00€
// TSHIRT       | Cabify T-Shirt      |  20.00€
// MUG          | Cafify Coffee Mug   |   7.50€

// he añadido un atributo a los objetos articulos de descuento que me indica que tipo de descuento debo aplicar
let pricingRules=[{"code":"VOUCHER", "name":"Cabify Voucher", "price":5, "discount":"2x1"},
{"code":"TSHIRT", "name":"Cabify T-shirt", "price":20, "discount":"+3", "priceMoreThan3":19},
{"code":"MUG", "name":"Cabify Mug","discount":"no", "price":7.5}];

function Checkout() {
    this.pricingrules = pricingRules;
    this.cart =[];
 }
 Checkout.prototype.scan = function (item) {
    // si no tengo de ese producto lo añado, si no, subo su quantity
    if  (this.getProductfromCart(item)){
        (this.getProductfromCart(item)).quantity++;
    }else{
        this.cart.push({code:item,quantity:1});
    }
    return this;
 };

Checkout.prototype.total = function () {
   let total=0;
   this.cart.forEach((i)=>{
    switch (this.getProductfromPricingRules(i.code).discount) {
        case "2x1":
            total+=this.twoByOneDiscount(i.code);
            break;
        case "+3":
            total+=this.bulkDiscount(i.code);
            break;
        default:
            total+=this.regularPrice(i.code);
            break;
    }
   });
return total;
};
Checkout.prototype.getProductfromCart = function(item){
    return this.cart.filter(function(i){return i.code==item})[0];
}
Checkout.prototype.getProductfromPricingRules= function (item){
    return this.pricingrules.filter(function(r){return r.code==item})[0];
}
//  * The marketing department believes in 2-for-1 promotions (buy two of the same product, get one free), 
//  * and would like for there to be a 2-for-1 special on `VOUCHER` items.
//  HE creado un metodo de descuento 2 por uno por si en el futuro queremos aplicarselo a otros productos
Checkout.prototype.twoByOneDiscount = function (i){
    let items= this.getProductfromCart(i)
    let itemsTotal= Math.floor((items.quantity/2))+items.quantity%2;
    return itemsTotal*this.getProductfromPricingRules(i).price? itemsTotal*this.getProductfromPricingRules(i).price:0;
}
//  * The CFO insists that the best way to increase sales is with discounts on bulk purchases
//  *  (buying x or more of a product, the price of that product is reduced), and demands that if you buy 3 or more 
//  * `TSHIRT` items, the price per unit should be 19.00€.
// creo metodo tambien por la misma razon que arriba
Checkout.prototype.bulkDiscount = function (i){
    let items= this.getProductfromCart(i);
    // compruebo si tengo 3 o mas de tres en mi  checkout para aplicar el precio de descuento o no
    if (items&&items.quantity>=3){
      return items.quantity*this.getProductfromPricingRules(i).priceMoreThan3;
    }else if(items&&items.quantity<3&&items.quantity>0){
      return items.quantity*this.getProductfromPricingRules(i).price;
    }else{
        return 0;
    }
}
Checkout.prototype.regularPrice = function (i){
    let mugs=this.getProductfromCart(i);
    if(mugs!=undefined){
       return mugs.quantity*this.getProductfromPricingRules(i).price;
    }else{
        return 0;
    }
}
