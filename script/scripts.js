"use strict";

window.onload = function()
{
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.pro.coinbase.com', true);
    
    request.onload = function ()
    {
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400)
        {
            console.log('Connection Success!');
        }
        else
        {
            console.log('ERROR!!');
        }
        request.send();
    console.log(request.status);

    }
}