"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: 
   Date:   
   
   Filename: tc_cart.js
	
*/

var orderTotal =0.0;

var cartHTML ="<table>"+
"<tr><th>Item</th><th>Description</th><th>Price</th><th>QTY</th><th>Total</th></tr>"

// loop for each item 
for (var i=0; i<item.length;i++){
   cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt='" +item[i] + "'/></td>";
   cartHTML+= "<td>" + itemDescription[i] + "</td>" +
   "<td>$" + itemPrice[i] + "</td>" + "<td>" + itemQty[i] + "</td>";
   //calculate cost
   var itemCost = itemPrice[i] + itemQty[i];
   cartHTML+="<td>$" + itemCost +"</td><tr>";
   orderTotal+= itemCost;
}
cartHTML+="<tr><td colspan='4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>"

document.getElementById("cart").innerHTML=cartHTML;