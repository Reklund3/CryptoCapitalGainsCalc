"use strict";
var coinPrice;
var transaction = [];
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

$("#trade-submit-button").on('click', () => {
    transaction.push({
        transactionDate: $('#trans-date').val(),
        quantity: $('#quantity-input').val(),
        price: $('#trans-price-input').val(),
        transactionType: $('#sell-buy-select').val(),    
    });
    console.log(transaction);
});