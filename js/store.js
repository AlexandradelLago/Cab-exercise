function Store() {
    this.products = [{Code:"VOUCHER", Name:"Cabify Voucher", Price:5},
    {Code:"TSHIRT", Name:"Cabify T-shirt", Price:20},
    {Code:"MUG", Name:"Cabify Mug", Price:7.5}];
 }

  Store.prototype.update = function (ruta) {
	var that = this;
    $.getJSON(ruta, function(data) {
		that.products = data;
	});
};
    
 Store.prototype.getProduct = function (code) {
    return this.products.filter(function(p){return p.code == code })[0];
    
 };
 
  Store.prototype.getProductPrice = function () {
    return this.products.filter(function (p) { return p.Code == code })[0].Price;
 };
 
 
 

 