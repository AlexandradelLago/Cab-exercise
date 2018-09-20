// Examples:

//     Items: VOUCHER, TSHIRT, MUG
//     Total: 32.50€

//     Items: VOUCHER, TSHIRT, VOUCHER
//     Total: 25.00€

//     Items: TSHIRT, TSHIRT, TSHIRT, VOUCHER, TSHIRT
//     Total: 81.00€

//     Items: VOUCHER, TSHIRT, VOUCHER, VOUCHER, MUG, TSHIRT, TSHIRT
//     Total: 74.50€

function getTotalPrice(cart) {
    // var prices = document.getElementsByClassName("price");// crea un arrey para todas las clases de price
    // var quantity = document.getElementsByClassName("quantity");// crea un array con los quantities de la clase quantity
    // // var totalPrice = 0;
    // // for(var i = 0; i < prices.length; i++){
    // //   document.getElementsByClassName("total-price")[i].innerHTML="$" + (prices[i].innerHTML.slice(1)*quantity[i].value).toFixed(2);
    // //   totalPrice+=prices[i].innerHTML.slice(1)*quantity[i].value;//Toma los prices
  
    cart.scan("VOUCHER").scan("TSHIRT").scan("MUG");
//checkout.scan("VOUCHER").scan("TSHIRT").scan("VOUCHER");
//checkout.scan("TSHIRT").scan("TSHIRT").scan("TSHIRT").scan("VOUCHER").scan("TSHIRT");
//checkout.scan("VOUCHER").scan("MUG").scan("TSHIRT").scan("TSHIRT").scan("TSHIRT").scan("VOUCHER").scan("VOUCHER");
    let price = cart.total();
    document.getElementById("gran-total").innerHTML="$" + price.toFixed(2)//imprime los prices
    
  }

  function add(item){
        let quantity = parseInt(document.getElementsByClassName(item)[0].value,10);
        quantity+=1;
        document.getElementsByClassName(item)[0].value=quantity;
        console.log(quantity);
  }
  function minus(item){
    let quantity = parseInt(document.getElementsByClassName(item)[0].value,10);
    if (quantity>0){
        quantity-=1;
    }
    document.getElementsByClassName(item)[0].value=quantity;
    console.log(quantity);
}


window.onload = function(){
    var checkout = new Checkout();
     var calculatePriceButton = document.getElementById('calc-prices-button');
     calculatePriceButton.onclick = getTotalPrice(checkout);

  };









