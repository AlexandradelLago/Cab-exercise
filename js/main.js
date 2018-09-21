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


function createQuantityInput(){
    return "<div class=\"col\"><label>QTY</label><input class=\"quantity\" type=\"number\" name=\"quantity\" value=\"0\"/></div>";
   
   }
   
   function createDeleteButton(){
     return "<div class=\"col\"><button  class=\"btn btn-delete\"><i class=\"fa fa-minus-circle\" aria-hidden=\"true\"></i></button>"+//crea el html
     "<button onclick=\"add('VOUCHER')\"  class=\"btn btn-success\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></button></div>" ;
    }


  
   
   function createItemNode(itemData){
   var itemDiv = ""
   itemDiv = "<div class=\"item\" name=\"product\">";
   itemDiv += "<div class=\"col\"><span name=\"name\">" + itemData[0] + "</span></div>";
   itemDiv += "<div class=\"col\"><span class=\"price\" name=\"price\">$" + Number(itemData[1]).toFixed(2) +"</span></div>";
   itemDiv += createQuantityInput();//lleva el html al dom
  // itemDiv += "<div class=\"col\"><span class=\"total-price\" name=\"total-price\">$0.00</span></div>"
   itemDiv += createDeleteButton()+ "</div>"
   return itemDiv
   }
   
   function createNewItemRow(itemName, itemUnitPrice){
     var container = document.getElementById("container");
    // container.appendChild(createItemNode( [itemName, itemUnitPrice]))
    container.innerHTML += createItemNode( [itemName, itemUnitPrice]);
     
   }
   
   function createNewItem(){
    //  var newName = document.getElementById("name").value;
    //  var newPrice = document.getElementById("price").value;
    //  if(newName != "" && newPrice > 0) {
       createNewItemRow("DAVINIA", 500);
    //    document.getElementById("name").value = "";
    //    document.getElementById("price").value = 0;
     
    //    var deleteButtons = document.getElementsByClassName('btn-delete');
    //    for(var i = 0; i<deleteButtons.length ; i++){
    //      deleteButtons[i].onclick = deleteItem;
    //      document.getElementById("name").classList.remove("red")
    //      document.getElementById("price").classList.remove("red")
    //    }
    //  } else {
    //    document.getElementById("name").value = "";
    //    document.getElementById("price").value = 0;
    //    document.getElementById("name").classList.add("red")
    //    document.getElementById("price").classList.add("red")
       
    //  }
     
   
   }

   
window.onload = function(){
    // var calculatePriceButton = document.getElementById('calc-prices-button');
    // var createItemButton = document.getElementById('new-item-create');
    var deleteButtons = document.getElementsByClassName('btn-delete');
  
    // calculatePriceButton.onclick = getTotalPrice;
    // createItemButton.onclick = createNewItem;
    createNewItem();
  
    for(var i = 0; i<deleteButtons.length ; i++){
      deleteButtons[i].onclick = deleteItem;
    }
  };









