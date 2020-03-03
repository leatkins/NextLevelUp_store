let lineItems = [];
const shippingCost = 5.99;
let subTotal = 0;
let grandTotal= 0;

// Backend variables
const beshippingCost = 599;
let besubTotal = 0;
let begrandTotal = 0;
let finalPayment = 0;
let amount = 100; 
let running = false;

function reset(){
  location.reload(); 
  localStorage.clear(); 
}


function LineItem(product, itemPrice, qty, linePrice){
  this.product = product;
  this.itemPrice = ("$" + itemPrice);
  this.qty = qty;
  this.linePrice = function calcLinePrice(){
    return  this.qty * this.itemPrice;
  }
}

function addDainty(){
  if ((document.getElementById("qty1").value) <= 0){
    console.log("Please enter a valid quantity value");
  }else{
  lineItems.push(new LineItem("DAINTY_LASH", 10.00, document.getElementById("qty1").value, 1000));
  calcPrice1 = (document.getElementById("qty1").value) * 10.00;
  becalcPrice1 = (document.getElementById("qty1").value) * 1000;
  subTotal = calcPrice1 + subTotal;
  besubTotal = becalcPrice1 + besubTotal;
  grandTotal= grandTotal + calcPrice1;
  begrandTotal = begrandTotal + becalcPrice1;
  console.log(lineItems);
  document.getElementById("lineItems").value = JSON.stringify(lineItems); 

  alert("Item Added to Cart | Sub-Total: $"  + grandTotal);
  displayLineItems1();
  return grandTotal;
  return begrandTotal;
  }
}

function addBoss(){
  if ((document.getElementById("qty2").value) <= 0){
    console.log("Please enter a valid quantity value");
  }else{
  lineItems.push(new LineItem("BOSS_LASH", 10.00, document.getElementById("qty2").value, 1000));
  calcPrice2 = (document.getElementById("qty2").value) * 10.00;
  becalcPrice2 = (document.getElementById("qty2").value) * 1000;
  subTotal = calcPrice2 + subTotal;
  besubTotal = becalcPrice2 + besubTotal;
  grandTotal= grandTotal + calcPrice2;
  begrandTotal = begrandTotal + becalcPrice2;
  console.log(lineItems);
  document.getElementById("lineItems").value = JSON.stringify(lineItems); 

  alert("Item Added to Cart | Sub-Total: $"  + grandTotal);
  displayLineItems2();
  return grandTotal;
  return begrandTotal;
  }
}

function addReadyMade(){
  if ((document.getElementById("qty3").value) <= 0){
    console.log("Please enter a valid quantity value");
  }else{
  lineItems.push(new LineItem("READYMADE_LASH", 10.00, document.getElementById("qty3").value, 1000));
  calcPrice3 = (document.getElementById("qty3").value) * 10.00;
  becalcPrice3 = (document.getElementById("qty3").value) * 1000;
  subTotal = calcPrice3 + subTotal;
  besubTotal = becalcPrice3 + besubTotal;
  grandTotal= grandTotal + calcPrice3;
  begrandTotal = begrandTotal + becalcPrice3;
  console.log(lineItems);
  document.getElementById("lineItems").value = JSON.stringify(lineItems); 

  alert("Item Added to Cart | Sub-Total: $"  + grandTotal);
  displayLineItems3();
  return grandTotal;
  return begrandTotal;
  }
}

function addTweezers(){
  if ((document.getElementById("qty4").value) <= 0){
    console.log("Please enter a valid quantity value");
  }else{
  lineItems.push(new LineItem("TWEEZERS", 3.99, document.getElementById("qty4").value, 399));
  calcPrice4 = (document.getElementById("qty4").value) * 3.99;
  becalcPrice4 = (document.getElementById("qty4").value) * 399;
  subTotal = calcPrice4 + subTotal;
  besubTotal = becalcPrice4 + besubTotal;
  grandTotal= grandTotal + calcPrice4;
  begrandTotal = begrandTotal + becalcPrice4;
  console.log(lineItems);
  document.getElementById("lineItems").value = JSON.stringify(lineItems); 

  alert("Item Added to Cart | Sub-Total: $"  + grandTotal);
  displayLineItems4();
  return grandTotal;
  return begrandTotal;
  }
}

function addGloss(){
  if ((document.getElementById("qty5").value) <= 0){
    console.log("Please enter a valid quantity value");
  }else{
  lineItems.push(new LineItem("LIP_GLOSS(X2)", 5.00, document.getElementById("qty5").value, 500));
  calcPrice5 = (document.getElementById("qty5").value) * 5.00;
  becalcPrice5 = (document.getElementById("qty5").value) * 500;
  subTotal = calcPrice5 + subTotal;
  besubTotal = becalcPrice5 + besubTotal;
  grandTotal= grandTotal + calcPrice5;
  begrandTotal = begrandTotal + becalcPrice5;
  console.log(lineItems);
  document.getElementById("lineItems").value = JSON.stringify(lineItems); 

  alert("Item Added to Cart | Sub-Total: $"  + grandTotal);
  displayLineItems5();
  return grandTotal;
  return begrandTotal;
  }
}

function addPins(){
  if ((document.getElementById("qty6").value) <= 0){
    console.log("Please enter a valid quantity value");
  }else{
  let pinSelection = document.getElementById("pins").value; 
  lineItems.push(new LineItem(("HAIR_PIN: " + pinSelection), 10.00, document.getElementById("qty6").value, 1000));
  calcPrice6 = (document.getElementById("qty6").value) * 10.00;
  becalcPrice6 = (document.getElementById("qty6").value) * 1000;
  subTotal = calcPrice6 + subTotal;
  besubTotal = becalcPrice6 + besubTotal;
  grandTotal= grandTotal + calcPrice6;
  begrandTotal = begrandTotal + becalcPrice6;
  console.log(lineItems);
  document.getElementById("lineItems").value = JSON.stringify(lineItems); 

  alert("Item Added to Cart | Sub-Total: $"  + grandTotal);
  displayLineItems6();
  return grandTotal;
  return begrandTotal;
  }
}

function add3pB(){
  if ((document.getElementById("qty7").value) <= 0){
    console.log("Please enter a valid quantity value");
  }else{
  lineItems.push(new LineItem("3PK-BLACK", 15.00, document.getElementById("qty7").value, 1500));
  calcPrice7 = (document.getElementById("qty7").value) * 15.00;
  becalcPrice7 = (document.getElementById("qty7").value) * 1500;
  subTotal = calcPrice7 + subTotal;
  besubTotal = becalcPrice7 + besubTotal;
  grandTotal= grandTotal + calcPrice7;
  begrandTotal = begrandTotal + becalcPrice7;
  console.log(lineItems);
  document.getElementById("lineItems").value = JSON.stringify(lineItems); 

  alert("Item Added to Cart | Sub-Total: $"  + grandTotal);
  displayLineItems7();
  return grandTotal;
  return begrandTotal;
  }
}

function add3pG(){
  if ((document.getElementById("qty8").value) <= 0){
    console.log("Please enter a valid quantity value");
  }else{
  lineItems.push(new LineItem("3PK-GOLD", 15.00, document.getElementById("qty8").value, 1500));
  calcPrice8 = (document.getElementById("qty8").value) * 15.00;
  becalcPrice8 = (document.getElementById("qty8").value) * 1500;
  subTotal = calcPrice8 + subTotal;
  besubTotal = becalcPrice8 + besubTotal;
  grandTotal= grandTotal + calcPrice8;
  begrandTotal = begrandTotal + becalcPrice8;
  console.log(lineItems);
  document.getElementById("lineItems").value = JSON.stringify(lineItems); 

  alert("Item Added to Cart | Sub-Total: $"  + grandTotal);
  displayLineItems8();
  return grandTotal;
  return begrandTotal;
  }
}

function add3pN(){
  if ((document.getElementById("qty9").value) <= 0){
    console.log("Please enter a valid quantity value");
  }else{
  lineItems.push(new LineItem("3PK-NEON", 15.00, document.getElementById("qty9").value, 1500));
  calcPrice9 = (document.getElementById("qty9").value) * 15.00;
  becalcPrice9 = (document.getElementById("qty9").value) * 1500;
  subTotal = calcPrice9 + subTotal;
  besubTotal = becalcPrice9 + besubTotal;
  grandTotal= grandTotal + calcPrice9;
  begrandTotal = begrandTotal + becalcPrice9;
  console.log(lineItems);
  document.getElementById("lineItems").value = JSON.stringify(lineItems); 

  alert("Item Added to Cart | Sub-Total: $"  + grandTotal);
  displayLineItems9();
  return grandTotal;
  return begrandTotal;
  }
}

function add3pO(){
  if ((document.getElementById("qty10").value) <= 0){
    console.log("Please enter a valid quantity value");
  }else{
  lineItems.push(new LineItem("3PK-ORANGE", 15.00, document.getElementById("qty10").value, 1500));
  calcPrice10 = (document.getElementById("qty10").value) * 15.00;
  becalcPrice10 = (document.getElementById("qty10").value) * 1500;
  subTotal = calcPrice10 + subTotal;
  besubTotal = becalcPrice10 + besubTotal;
  grandTotal= grandTotal + calcPrice10;
  begrandTotal = begrandTotal + becalcPrice10;
  console.log(lineItems);
  document.getElementById("lineItems").value = JSON.stringify(lineItems); 

  alert("Item Added to Cart | Sub-Total: $"  + grandTotal);
  displayLineItems10();
  return grandTotal;
  return begrandTotal;
  }
}

function add3pP(){
  if ((document.getElementById("qty11").value) <= 0){
    console.log("Please enter a valid quantity value");
  }else{
  lineItems.push(new LineItem("3PK-PINK", 15.00, document.getElementById("qty11").value, 1500));
  calcPrice11 = (document.getElementById("qty11").value) * 15.00;
  becalcPrice11 = (document.getElementById("qty11").value) * 1500;
  subTotal = calcPrice11 + subTotal;
  besubTotal = becalcPrice11 + besubTotal;
  grandTotal= grandTotal + calcPrice11;
  begrandTotal = begrandTotal + becalcPrice11;
  console.log(lineItems);
  document.getElementById("lineItems").value = JSON.stringify(lineItems); 

  alert("Item Added to Cart | Sub-Total: $"  + grandTotal);
  displayLineItems11();
  return grandTotal;
  return begrandTotal;
  }
}

function displayLineItems1(){

    var table=document.getElementById("liTable");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = "Dainty Lashes";
    cell2.innerHTML = "$10.00";
    cell3.innerHTML = document.getElementById("qty1").value;
    cell4.innerHTML = calcPrice1;

    document.getElementById("subTotalO").innerHTML =("$" + subTotal);
    document.getElementById("gTotalO").innerHTML = ("$" + (grandTotal + 5.99));
    document.getElementById("shippingCostO").innerHTML =("$" +  shippingCost);
   
    document.getElementById("squareCode").value = (begrandTotal + 599); 
    document.getElementById("grandTotal").value = ("$" + (grandTotal + 5.99));
    
}

function displayLineItems2(){

    var table=document.getElementById("liTable");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = "Boss Lashes";
    cell2.innerHTML = "$10.00";
    cell3.innerHTML = document.getElementById("qty2").value;
    cell4.innerHTML = calcPrice2;

    document.getElementById("subTotalO").innerHTML =("$" + subTotal);
    document.getElementById("gTotalO").innerHTML = ("$" + (grandTotal + 5.99));
    document.getElementById("shippingCostO").innerHTML =("$" +  shippingCost);
   
    document.getElementById("squareCode").value = (begrandTotal + 599); 
    document.getElementById("grandTotal").value = ("$" + (grandTotal + 5.99));
    
}

function displayLineItems3(){

    var table=document.getElementById("liTable");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = "Ready-Made Lashes" ;
    cell2.innerHTML = "$10.00";
    cell3.innerHTML = document.getElementById("qty3").value;
    cell4.innerHTML = calcPrice3;

    document.getElementById("subTotalO").innerHTML =("$" + subTotal);
    document.getElementById("gTotalO").innerHTML = ("$" + (grandTotal + 5.99));
    document.getElementById("shippingCostO").innerHTML =("$" +  shippingCost);
   
    document.getElementById("squareCode").value = (begrandTotal + 599); 
    document.getElementById("grandTotal").value = ("$" + (grandTotal + 5.99));
    
}

function displayLineItems4(){

    var table=document.getElementById("liTable");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = "Next Level Up - Tweezers";
    cell2.innerHTML = "$3.99";
    cell3.innerHTML = document.getElementById("qty4").value;
    cell4.innerHTML = calcPrice4;

    document.getElementById("subTotalO").innerHTML =("$" + subTotal);
    document.getElementById("gTotalO").innerHTML = ("$" + (grandTotal + 5.99));
    document.getElementById("shippingCostO").innerHTML =("$" +  shippingCost);
   
    document.getElementById("squareCode").value = (begrandTotal + 599); 
    document.getElementById("grandTotal").value = ("$" + (grandTotal + 5.99));
    
}

function displayLineItems5(){

    var table=document.getElementById("liTable");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = "Lip Gloss x2";
    cell2.innerHTML = "$5.00";
    cell3.innerHTML = document.getElementById("qty5").value;
    cell4.innerHTML = calcPrice5;

    document.getElementById("subTotalO").innerHTML =("$" + subTotal);
    document.getElementById("gTotalO").innerHTML = ("$" + (grandTotal + 5.99));
    document.getElementById("shippingCostO").innerHTML =("$" +  shippingCost);
   
    document.getElementById("squareCode").value = (begrandTotal + 599); 
    document.getElementById("grandTotal").value = ("$" + (grandTotal + 5.99));
    
}

function displayLineItems6(){

    var table=document.getElementById("liTable");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = "Hair Pin: " + document.getElementById("pins").value;
    cell2.innerHTML = "$10.00";
    cell3.innerHTML = document.getElementById("qty6").value;
    cell4.innerHTML = calcPrice6;

    document.getElementById("subTotalO").innerHTML =("$" + subTotal);
    document.getElementById("gTotalO").innerHTML = ("$" + (grandTotal + 5.99));
    document.getElementById("shippingCostO").innerHTML =("$" +  shippingCost);
   
    document.getElementById("squareCode").value = (begrandTotal + 599); 
    document.getElementById("grandTotal").value = ("$" + (grandTotal + 5.99));
    
}

function displayLineItems7(){

    var table=document.getElementById("liTable");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = "3 Pack Lashes - Black";
    cell2.innerHTML = "$15.00";
    cell3.innerHTML = document.getElementById("qty7").value;
    cell4.innerHTML = calcPrice7;

    document.getElementById("subTotalO").innerHTML =("$" + subTotal);
    document.getElementById("gTotalO").innerHTML = ("$" + (grandTotal + 5.99));
    document.getElementById("shippingCostO").innerHTML =("$" +  shippingCost);
   
    document.getElementById("squareCode").value = (begrandTotal + 599); 
    document.getElementById("grandTotal").value = ("$" + (grandTotal + 5.99));
    
}

function displayLineItems8(){

    var table=document.getElementById("liTable");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = "3 Pack Lashes - Gold";
    cell2.innerHTML = "$15.00";
    cell3.innerHTML = document.getElementById("qty8").value;
    cell4.innerHTML = calcPrice8;

    document.getElementById("subTotalO").innerHTML =("$" + subTotal);
    document.getElementById("gTotalO").innerHTML = ("$" + (grandTotal + 5.99));
    document.getElementById("shippingCostO").innerHTML =("$" +  shippingCost);
   
    document.getElementById("squareCode").value = (begrandTotal + 599); 
    document.getElementById("grandTotal").value = ("$" + (grandTotal + 5.99));
    
}

function displayLineItems9(){

    var table=document.getElementById("liTable");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = "3 Pack Lashes Neon";
    cell2.innerHTML = "$15.00";
    cell3.innerHTML = document.getElementById("qty9").value;
    cell4.innerHTML = calcPrice9;

    document.getElementById("subTotalO").innerHTML =("$" + subTotal);
    document.getElementById("gTotalO").innerHTML = ("$" + (grandTotal + 5.99));
    document.getElementById("shippingCostO").innerHTML =("$" +  shippingCost);
   
    document.getElementById("squareCode").value = (begrandTotal + 599); 
    document.getElementById("grandTotal").value = ("$" + (grandTotal + 5.99));
    
}

function displayLineItems10(){

    var table=document.getElementById("liTable");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = "3 Pack Lashes - Orange";
    cell2.innerHTML = "$15.00";
    cell3.innerHTML = document.getElementById("qty10").value;
    cell4.innerHTML = calcPrice10;

    document.getElementById("subTotalO").innerHTML =("$" + subTotal);
    document.getElementById("gTotalO").innerHTML = ("$" + (grandTotal + 5.99));
    document.getElementById("shippingCostO").innerHTML =("$" +  shippingCost);
   
    document.getElementById("squareCode").value = (begrandTotal + 599); 
    document.getElementById("grandTotal").value = ("$" + (grandTotal + 5.99));
    
}

function displayLineItems11(){

    var table=document.getElementById("liTable");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = "3 Pack Lashes - Pink";
    cell2.innerHTML = "$15.00";
    cell3.innerHTML = document.getElementById("qty11").value;
    cell4.innerHTML = calcPrice11;

    document.getElementById("subTotalO").innerHTML =("$" + subTotal);
    document.getElementById("gTotalO").innerHTML = ("$" + (grandTotal + 5.99));
    document.getElementById("shippingCostO").innerHTML =("$" +  shippingCost);
   
    document.getElementById("squareCode").value = (begrandTotal + 599); 
    document.getElementById("grandTotal").value = ("$" + (grandTotal + 5.99));
    
}

function processTotal(){
  if (begrandTotal <= 0){
    console.log("Please add an Item and Quantity to proceed with Checkout");
  }else{
    console.log("This is the Grand Total: $" + (begrandTotal + 599));
    return begrandTotal + 599;
  }
}

function startServer(running){ 
  if (running == false){
    console.log("Waiting for user input - SERVER STATUS = STOPPED");  
  }else{
    let finalPayment = processTotal(); 
    console.log("Square Payment Amount: " + finalPayment);
    console.log(finalPayment); 
    return finalPayment;
  }
}

function getLineItems(){
  document.getElementById("lineItemsO").innerHTML = localStorage.getItem("lineItems");
}

function saveItems(){
var firstNameV = document.getElementById('firstName'); 
var lastNameV = document.getElementById('lastName'); 
var addressV = document.getElementById('address'); 
var cityV = document.getElementById('city'); 
var stateV = document.getElementById('state'); 
var zipCodeV = document.getElementById('zipCode'); 
var phoneV = document.getElementById('phone'); 
var emailAddressV = document.getElementById('emailaddress'); 

  localStorage.setItem("lineItems", JSON.stringify(lineItems)); 
  localStorage.setItem("firstName", firstNameV); 
  localStorage.setItem("lastName", lastNameV); 
  localStorage.setItem("address", addressV); 
  localStorage.setItem("city", cityV); 
  localStorage.setItem("state", stateV); 
  localStorage.setItem("zipCode", zipCodeV); 
  localStorage.setItem("phone", phoneV)
  localStorage.setItem("emailAddress", emailAddressV); 
  console.log("Order Details Stored: ");
  console.log(localStorage.getItem("lineItems"));
  console.log(localStorage.getItem("emailAddress"));
}

function printPage(){ 
  window.print(); 
}
