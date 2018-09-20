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
    scan(checkout);
   // calculo el total del checkout
    let price = checkout.total();
    // añado el precio en el html
    document.getElementById("gran-total").innerHTML= price.toFixed(2)+ "€"//imprime los prices
  }

  function scan(cart){
    cart.pricingrules.forEach(i=>{
        console.log(i); 
        let nItem = parseInt(document.getElementsByClassName(i.code)[0].value,10);
        for (let index = 1; index <= nItem; index++) {
            cart.scan(i.code); 
           }
    })
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










