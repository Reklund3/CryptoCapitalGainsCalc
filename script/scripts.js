"use strict";
var coinPrice;
let transaction = [];
window.onload = function()
{
    getPrice();
    setInterval( getPrice, 10000);
}

function getPrice()
{
    var jqxhr = $.getJSON( "https://api.coinbase.com/v2/prices/ETH-USD/spot", {},function(data) {
        $("#coinPrice").text("$ " + data.data.amount);
        coinPrice = data.data.amount;
    })
}
function updateTable () {
  let lineNum = transaction.length;
  let aquisitionDate = transaction[transaction.length-1].transactionDate;
  let saleDate;
  let aquisitionPrice = transaction[transaction.length-1].price;
  let salePrice;
  let qty = transaction[transaction.length-1].quantity;
  let gain;
  let term;
  let line;
  line = '<tr><th>'+lineNum+
         '</th><th>'+aquisitionDate+
         '</th><th>'+saleDate+
         '</th><th>'+aquisitionPrice+
         '</th><th>'+salePrice+
         '</th><th>'+qty+
         '</th><th>'+gain+
         '</th><th>'+term+
         '</th></tr>'
  $("#transaction-table").append(line)
}
const clickAddTransaction = () => {
    transaction.push({
        transactionDate: $('#trans-date').val(),
        quantity: $('#quantity-input').val(),
        price: $('#trans-price-input').val(),
        transactionType: $('#sell-buy-select').val(),
  });
  updateTable();
}

$("#trade-submit-button").on('click', clickAddTransaction);
