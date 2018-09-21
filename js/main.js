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

//**************************************************************************************** */

function deleteItem(e){
    var item = e.currentTarget.parentNode.parentNode;
    var container = document.getElementById("container");
    container.removeChild(item);
  }
   
   function createNewItem(){
       var itemData=["davinia",500];
       var container = document.getElementById("container");
       container.innerHTML +=  "<div class=\"item\" name=\"product\">"+
        "<div class=\"col\"><span name=\"name\">" + itemData[0] + "</span></div>"+
       "<div class=\"col\"><span class=\"price\" name=\"price\">$" + Number(itemData[1]).toFixed(2) +"</span></div>"+
       "<div class=\"col\"><label>QTY</label><input class=\"quantity\" type=\"number\" name=\"quantity\" value=\"0\"/></div>"+
       "<div class=\"col\"><button  class=\"btn btn-delete\"><i class=\"fa fa-minus-circle\" aria-hidden=\"true\"></i></button>"+//crea el html
       "<button onclick=\"add('VOUCHER')\"  class=\"btn btn-success\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></button></div>"+ 
       "</div>";
   }

   
window.onload = function(){

    // var deleteButtons = document.getElementsByClassName('btn-delete');
  
    createNewItem();
    // for(var i = 0; i<deleteButtons.length ; i++){
    //   deleteButtons[i].onclick = deleteItem;
    // }
  };









