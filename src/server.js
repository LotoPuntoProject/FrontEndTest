const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const autenticatión=
{
    "authorizationToken": "r4y3r8348r89898UZUIIUjJiowi39349403044040404040400tokrmnbvgv",
    "permissions": [
        {
            "optionId": "idPantallas1",
            "actionList": ["create", "list", "delete", "update"]
        },
        {
            "optionId": "idPantalla2",
            "actionList": ["create", "list", "delete", "update"]
        },
        {
            "optionId": "idPantalla3",
            "actionList": ["create", "list", "delete", "update"]
        }
    ]
};






server.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


server.get('/',(req,res) => {
    res.json(autenticatión);
});

server.post('/',(req,res) => {
    res.json(autenticatión);
});

server.listen(3001, function(){
    console.log('ready');
})