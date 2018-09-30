// Examples:
//     Items: VOUCHER, TSHIRT, MUG
//     Total: 32.50€
//     Items: VOUCHER, TSHIRT, VOUCHER
//     Total: 25.00€
//     Items: TSHIRT, TSHIRT, TSHIRT, VOUCHER, TSHIRT
//     Total: 81.00€
//     Items: VOUCHER, TSHIRT, VOUCHER, VOUCHER, MUG, TSHIRT, TSHIRT
//     Total: 74.50€

function checkout() {
    var checkout = new Checkout();
    // hago el scan de mis articulos sacandolos de mi html
    checkout.scan();
   // calculo el total del checkout
    let price = checkout.total();
    // añado el precio en el html
    document.getElementById("gran-total").innerHTML= price.toFixed(2)+ "€"//imprime los prices
  }
  
window.onload = function(){
    document.getElementById("tshirtAdd").addEventListener("click",function(){utils.add("TSHIRT")},false);  
    document.getElementById("voucherAdd").addEventListener("click",function(){utils.add("VOUCHER")},false);  
    document.getElementById("mugAdd").addEventListener("click",function(){utils.add("MUG")},false);  
    document.getElementById("tshirtLess").addEventListener("click",function(){utils.minus("TSHIRT")},false); 
    document.getElementById("voucherLess").addEventListener("click",function(){utils.minus("VOUCHER")},false);  
    document.getElementById("mugLess").addEventListener("click",function(){utils.minus("MUG")},false);   
    document.getElementById("calc-prices-button").addEventListener("click",checkout,false);   
  };






