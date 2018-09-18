let pricingRules=[{code:"VOUCHER", name:"Cabify Voucher", price:"5"},
{code:"TSHIRT", name:"Cabify T-shirt", price:"20"},
{code:"MUG", name:"Cabify Mug", price:"7.5"}];

var checkout = new Checkout(pricingRules);
var btnVoucher     = document.getElementById('btnVoucher');
var btnTshirt    = document.getElementById('btnTshirt');
var btnMug     = document.getElementById('btnMug');
var total     = document.getElementById('total');

checkout.scan("VOUCHER").scan("TSHIRT").scan("MUG");
let price= checkout.price();
console.log("price")

// Examples:

//     Items: VOUCHER, TSHIRT, MUG
//     Total: 32.50€

//     Items: VOUCHER, TSHIRT, VOUCHER
//     Total: 25.00€

//     Items: TSHIRT, TSHIRT, TSHIRT, VOUCHER, TSHIRT
//     Total: 81.00€

//     Items: VOUCHER, TSHIRT, VOUCHER, VOUCHER, MUG, TSHIRT, TSHIRT
//     Total: 74.50€
    



// function printMinutes(minutes) {
//     var decens = document.getElementById("minDec");
//     decens.innerHTML = minutes[0];

//     var units = document.getElementById("minUni");
//     units.innerHTML = minutes [1];
// }

// function printSeconds(seconds) {
//     var decens = document.getElementById("secDec");
//     decens.innerHTML = seconds[0];

//     var units = document.getElementById("secUni");
//     units.innerHTML = seconds [1];
// }

// function printMilliseconds(ms) {
//     var decens = document.getElementById("milDec");
//     decens.innerHTML = ms[0];
    
//     var units = document.getElementById("milUni");
//     units.innerHTML = ms[1];
// }

// function printSplit() {
//     var parent = document.getElementById("splits");
//     var numbers = document.getElementsByClassName("number");
//     var itemElement = document.createElement("li");
//     var text = document.createTextNode( numbers[0].innerHTML+
//                                         numbers[1].innerHTML+":"+
//                                         numbers[2].innerHTML+
//                                         numbers[3].innerHTML+":"+
//                                         numbers[4].innerHTML+
//                                         numbers[5].innerHTML);
//     itemElement.appendChild(text);
//     parent.appendChild(itemElement);

// }

// function clearSplits() {
//     var container=document.getElementById("splits");
//     container.innerHTML = "";   
// }

// function setStopBtn() {
//     var button=document.getElementsByClassName("btn start")[0];
//     button.setAttribute("class", "btn stop");
//     button.innerHTML="STOP";

// }

// function setSplitBtn() {
//     var button=document.getElementsByClassName("btn reset")[0];
//     button.setAttribute("class", "btn split");
//     button.innerHTML="SPLIT";
// }

// function setStartBtn() {
//     var button=document.getElementsByClassName("btn stop")[0];
//     button.setAttribute("class", "btn start");
//     button.innerHTML="START";
// }

// function setResetBtn() {
//     var button=document.getElementsByClassName("btn split")[0];
//     button.setAttribute("class", "btn reset");
//     button.innerHTML="RESET";
// }

// // Add items button
// btnVoucher.addEventListener('click', function () {
//     if (btnVoucher.innerHTML === "START") {
//         setStopBtn();
//         setSplitBtn();
//         chronometer.startClick();
//         printTime();
//     } else {
//         setStartBtn();
//         setResetBtn();
//         chronometer.stopClick();
//     }
// });

// // Reset/Split Button
// btnTshirt.addEventListener('click', function () {
//     if (btnRight.innerHTML === "RESET") {
//         clearSplits();
//         chronometer.splitClick();
//     } else {
//         printSplit();
//     }
// });


