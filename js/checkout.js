// Constructor

//  Code         | Name                |  Price       |discount
// -----------------------------------------------------------------
// VOUCHER      | Cabify Voucher      |   5.00€       |type:xby1, amount:2
// TSHIRT       | Cabify T-Shirt      |  20.00€       |type:bulk, amount:3
// MUG          | Cafify Coffee Mug   |   7.50€       |type:no, amount:0

// he añadido un atributo a los objetos articulos de descuento que me indica que tipo de descuento debo aplicar
// para hacer los descuentos más escalables he añadido la variable "amount" que en el caso de xby1 es la x y en el caso de bulk es 
//la minima cantidad a comprar para que se aplique el descuento
const pricingRules=[{"code":"VOUCHER", "name":"Cabify Voucher", "price":5, "discount":{"type":"xby1", "amount":2}},
{"code":"TSHIRT", "name":"Cabify T-shirt", "price":20, "discount":{"type":"bulk", "amount":3},"priceMoreThanX":19},
{"code":"MUG", "name":"Cabify Mug","discount":{"type":"no", "amount":0},"price":7.5}];

class Checkout {
    constructor(){
        this.pricingrules = pricingRules;
        this.cart =[];
    } 

scan(){
        this.pricingrules.forEach(i=>{
            console.log(i); 
            let nItem = parseInt(document.getElementsByClassName(i.code)[0].value,10);
            for (let index = 1; index <= nItem; index++) {
                this.addToCart(i.code); 
               }
        })
      }; 
 addToCart(item) {
    // si no tengo de ese producto lo añado a mi carrito, si no, subo su quantity
    if  (this.getProductfromCart(item)){
        (this.getProductfromCart(item)).quantity++;
    }else{
        this.cart.push({code:item,quantity:1});
    }
    return this;
 };

 total() {
   let total=0;
   this.cart.forEach((i)=>{
     let amount=this.getProductfromPricingRules(i.code).discount.amount;
     let discount= this.getProductfromPricingRules(i.code).discount.type;
    switch (discount) {
        case "xby1":
            total+=this.xByOneDiscount(i.code,amount);
            break;
        case "bulk":
            total+=this.bulkDiscount(i.code,amount);
            break;
        default:
            total+=this.regularPrice(i.code);
            break;
    }
   });
return total;
};


getProductfromCart(item){
    return this.cart.filter(function(i){return i.code==item})[0];
}
getProductfromPricingRules(item){
    return this.pricingrules.filter(function(r){return r.code==item})[0];
}
//  * The marketing department believes in 2-for-1 promotions (buy two of the same product, get one free), 
//  * and would like for there to be a 2-for-1 special on `VOUCHER` items.
//  HE creado un metodo de descuento 2 por uno por si en el futuro queremos aplicarselo a otros productos y que sea 
// otra variante , 3x1 por ejemplo se puede hacer simplemente cambiando el valor de x
xByOneDiscount(i,x){
    let items= this.getProductfromCart(i)
    // divido por x asi se cuantos grupos de descuento tengo y añado los restantes
    let itemsTotal= Math.floor((items.quantity/x)) + items.quantity % x;
    // si tengo algun item entonces devuelvo el precio
    return itemsTotal*this.getProductfromPricingRules(i).price? itemsTotal*this.getProductfromPricingRules(i).price:0;
}
//  * The CFO insists that the best way to increase sales is with discounts on bulk purchases
//  *  (buying x or more of a product, the price of that product is reduced), and demands that if you buy 3 or more 
//  * `TSHIRT` items, the price per unit should be 19.00€.

// creo metodo tambien por la misma razon que arriba
bulkDiscount(i,x){
    let items= this.getProductfromCart(i);
    // compruebo si tengo x o mas de tres en mi  checkout para aplicar el precio de descuento o no
    if (items&&items.quantity>=x){
      return items.quantity*this.getProductfromPricingRules(i).priceMoreThanX;
    }else if(items&&items.quantity<x&&items.quantity>0){
      return items.quantity*this.getProductfromPricingRules(i).price;
    }else{
        return 0;
    }
}
regularPrice(i){
    // funcion para calcular el precio de item cuando no tienen descuento 
    let items=this.getProductfromCart(i);
    if(items!=undefined){
       return items.quantity*this.getProductfromPricingRules(i).price;
    }else{
        return 0;
    } 
}

}
