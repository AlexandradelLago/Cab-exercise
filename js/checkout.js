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
    constructor(store){
        this.store = store;
        this.cart =[];
    } 
scan(){
    Array.from(document.getElementsByClassName("quantity")).filter(i=>{
        return parseInt(i.value) > 0;
    }).forEach(domElem => { 
        this.cart.push({ code: domElem.id.split('-')[1], quantity: parseInt(domElem.value)}) 
    });
}; 
 total() {
   let total=0;
   this.cart.forEach((i)=>{
     let amount=this.store.get(i.code).discount.amount;
     let discount= this.store.get(i.code).discount.type;
     let items= this.getProductfromCart(i.code)
    switch (discount) {
        case "xby1":
            total+=this.xByOneDiscount(items,amount);
            break;
        case "bulk":
            total+=this.bulkDiscount(items,amount);
            break;
        default:
            total+=this.regularPrice(items);
            break;
    }
   });
return total;
};


getProductfromCart(item){
    return this.cart.filter(function(i){return i.code==item})[0];
}

//  * The marketing department believes in 2-for-1 promotions (buy two of the same product, get one free), 
//  * and would like for there to be a 2-for-1 special on `VOUCHER` items.
//  HE creado un metodo de descuento 2 por uno por si en el futuro queremos aplicarselo a otros productos y que sea 
// otra variante , 3x1 por ejemplo se puede hacer simplemente cambiando el valor de x
xByOneDiscount(items,x){
 
    // divido por x asi se cuantos grupos de descuento tengo y añado los restantes
    let itemsTotal= Math.floor((items.quantity/x)) + items.quantity % x;
    // si tengo algun item entonces devuelvo el precio
    return itemsTotal*this.store.get(items.code).price? itemsTotal*this.store.get(items.code).price:0;
}
//  * The CFO insists that the best way to increase sales is with discounts on bulk purchases
//  *  (buying x or more of a product, the price of that product is reduced), and demands that if you buy 3 or more 
//  * `TSHIRT` items, the price per unit should be 19.00€.

// creo metodo tambien por la misma razon que arriba
bulkDiscount(items,x){
  
    // compruebo si tengo x o mas de tres en mi  checkout para aplicar el precio de descuento o no
    if (items&&items.quantity>=x){
      return items.quantity*this.store.get(items.code).priceMoreThanX;
    }else if(items&&items.quantity<x&&items.quantity>0){
      return items.quantity*this.store.get(items.code).price;
    }else{
        return 0;
    }
}
regularPrice(items){
    // funcion para calcular el precio de item cuando no tienen descuento 
    if(items!=undefined){
       return items.quantity*this.store.get(items.code).price;
    }else{
        return 0;
    } 
}

}
