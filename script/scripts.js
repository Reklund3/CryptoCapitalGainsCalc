"use strict";
var coinPrice;
var transaction = [[]];
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
        // coinPrice = JSON.stringify(data.data.amount);
        //console.log(data.data.amount);
    })
}

$("#trade-submit-button").on('click', function ()
{
    transaction[0] = $('#trans-date').val();
    transaction[1] = $('#quantity-input').val();
    transaction[2] = $('#trans-price-input').val();
    transaction[3] = $('#sell-buy-select').val();
    transaction.forEach(function(){
        console.log(transaction[0]);
        console.log(transaction[1]);
        console.log(transaction[2]);
        console.log(transaction[3]);
    });
});
