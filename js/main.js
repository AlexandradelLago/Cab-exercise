// Examples:

//     Items: VOUCHER, TSHIRT, MUG
//     Total: 32.50€
//     Items: VOUCHER, TSHIRT, VOUCHER
//     Total: 25.00€
//     Items: TSHIRT, TSHIRT, TSHIRT, VOUCHER, TSHIRT
//     Total: 81.00€
//     Items: VOUCHER, TSHIRT, VOUCHER, VOUCHER, MUG, TSHIRT, TSHIRT
//     Total: 74.50€

function getTotalPrice() {
    var checkout = new Checkout();
    let nVoucher = parseInt(document.getElementsByClassName("voucher")[0].value,10);
    let nMug = parseInt(document.getElementsByClassName("mug")[0].value,10);
    let nShirt = parseInt(document.getElementsByClassName("tshirt")[0].value,10);
    
   for (let index = 1; index <= nVoucher; index++) {
    checkout.scan("VOUCHER"); 
   }
   for (let index = 1; index <= nMug; index++) {
    checkout.scan("MUG"); 
   }
   for (let index = 1; index <= nShirt; index++) {
    checkout.scan("TSHIRT"); 
   }
  
 //checkout.scan("VOUCHER").scan("TSHIRT").scan("MUG");
//checkout.scan("VOUCHER").scan("TSHIRT").scan("VOUCHER");
//checkout.scan("TSHIRT").scan("TSHIRT").scan("TSHIRT").scan("VOUCHER").scan("TSHIRT");
//checkout.scan("VOUCHER").scan("MUG").scan("TSHIRT").scan("TSHIRT").scan("TSHIRT").scan("VOUCHER").scan("VOUCHER");
    console.log(checkout);   
    let price = checkout.total();
    console.log(price);
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










