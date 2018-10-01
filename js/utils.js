const utils = {
    add : function(item,i){
            let quantity = parseInt(document.getElementsByName(item)[0].value,10);

            quantity+=i;
            if (quantity<0){
                quantity=0;
            }
            document.getElementsByName(item)[0].value=quantity;
            console.log(quantity);
      },
 
    
    //**************************************************************************************** */
    
    deleteItem:function(e){
        var item = e.currentTarget.parentNode.parentNode;
        var container = document.getElementById("container");
        container.removeChild(item);
      },
       
    createNewItem:function (){
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


}


//export default utils;