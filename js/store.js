
// ESTA BIEN O TENIA QUE HACER ESTA CLASE , LA CLASE CHECKOUT ESTA MUY SATURADA Y ME DICEN QUE ESTA HARCODEADO LAS PROMOCIONES
class Store {
    constructor(data){
        this.pricingrules=data;
    }

    get(item){
        return this.pricingrules.filter(function(r){return r.code==item})[0];
    }

}