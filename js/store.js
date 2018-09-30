const pricingRules=[{"code":"VOUCHER", "name":"Cabify Voucher", "price":5, "discount":{"type":"xby1", "amount":2}},
{"code":"TSHIRT", "name":"Cabify T-shirt", "price":20, "discount":{"type":"bulk", "amount":3},"priceMoreThanX":19},
{"code":"MUG", "name":"Cabify Mug","discount":{"type":"no", "amount":0},"price":7.5}];
// ESTA BIEN O TENIA QUE HACER ESTA CLASE , LA CLASE CHECKOUT ESTA MUY SATURADA Y ME DICEN QUE ESTA HARCODEADO LAS PROMOCIONES
class Store {
    constructor(name,code,price,discount){
        this.name=name;
        this.code=code;
        this.price=price;
        this.discount=discount;
    }

    getCode(item){
        return this.pricingrules.filter(function(r){return r.code==item})[0];
    }

};