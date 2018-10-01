// Examples:
//     Items: VOUCHER, TSHIRT, MUG
//     Total: 32.50€
//     Items: VOUCHER, TSHIRT, VOUCHER
//     Total: 25.00€
//     Items: TSHIRT, TSHIRT, TSHIRT, VOUCHER, TSHIRT
//     Total: 81.00€
//     Items: VOUCHER, TSHIRT, VOUCHER, VOUCHER, MUG, TSHIRT, TSHIRT
//     Total: 74.50€
// variable global, si no meter en window onload y pasarla a la funcion de runcheckout()dentro del eventlistener, diferencia entre 
// declarar o invocar a una funcion
var store = [];

function runCheckout() {
   
    var checkout = new Checkout(store);
    // hago el scan de mis articulos sacandolos de mi html
    checkout.scan();
   // calculo el total del checkout
    let price = checkout.total();
    // añado el precio en el html
    document.getElementById("gran-total").innerHTML= price.toFixed(2)+ "€"//imprime los prices
  }

  function addEvents(){
     // añadir jquery y ver la ??
    $('.buttonAdd').click(function (e) {
         utils.add(e.currentTarget.value,1)
    })
    $('.buttonLess').click(function (e) {
        utils.add(e.currentTarget.value, -1);
    })
  }
  
window.onload = function(){

  var ruta="data.json";
  //get JSON
  $.getJSON(ruta, function(data) {
    store = new Store(data);
    addEvents();

	});
 

    // document.getElementById("tshirtAdd").addEventListener("click",function(){utils.add("TSHIRT")},false);  
    // document.getElementById("voucherAdd").addEventListener("click",function(){utils.add("VOUCHER")},false);  
    // document.getElementById("mugAdd").addEventListener("click",function(){utils.add("MUG")},false);  
    // document.getElementById("tshirtLess").addEventListener("click",function(){utils.minus("TSHIRT")},false); 
    // document.getElementById("voucherLess").addEventListener("click",function(){utils.minus("VOUCHER")},false);  
    // document.getElementById("mugLess").addEventListener("click",function(){utils.minus("MUG")},false);   
    document.getElementById("calc-prices-button").addEventListener("click",runCheckout,false);   
  };






