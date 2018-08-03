"use strict";
var coinPrice;
window.onload = function()
{
    getPrice();
    setInterval( getPrice, 10000);
    setInterval (function () {
        console.log(coinPrice * 10);
    }, 10000)
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
/*
ask the user to enter a list of students for a list of students -- put the students in a stack
prompt to enter the grades for the students for each student add a list of grades -- dictionary of student grades[];
program should output the avg grade for each student

req: implement a student to grade array dictionary
for practice you could implement the student input as a stack
*/