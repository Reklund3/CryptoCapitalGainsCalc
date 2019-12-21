"use strict";
var coinPrice;
let transaction = [15, 30,320,20];

var svgWidth = 500, svgHeight = 200, barPadding = 5;
var barWidth = (svgWidth/transaction.length);
var svg = d3.select('svg').attr("width", svgWidth).attr("height", svgHeight)
var barChart = svg.selectAll("rect").data(transaction).enter().append("rect")
.attr("y", function(d)
{
    return svgHeight-d
})
.attr("height", function(d)
{
    return d
})
.attr("width", barWidth - barPadding)
.attr("transform", function(d, i)
{
    var translate = [barWidth*i,0];
    return "translate("+ translate +")";
});
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
d3.select('h1').style('color', 'red')
