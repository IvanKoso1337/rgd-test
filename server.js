const express = require('express')
const app = express();
const Govee = require("node-govee-led");
var randomColor = require('randomcolor'); 

app.listen(3000);

app.get('/', function (req, res) {
    console.log('test')

    const GoveeClient = new Govee({
        apiKey: "41220fbb-a7b0-46b1-8818-ef422b7e2db4",
        mac: "80:D0:A4:C1:38:AF:3E:F3",
        model: "H6110"
    })

    GoveeClient.getDevices().then(data => console.log(data))
    res.send('Hello World!');
})


app.get('/test', (res,req) => {
    console.log('test');
    const GoveeClient = new Govee({
        apiKey: "41220fbb-a7b0-46b1-8818-ef422b7e2db4",
        mac: "80:D0:A4:C1:38:AF:3E:F3",
        model: "H6110"
    })

    setInterval(()=>{
        console.log(randomColor());
        GoveeClient.setColor(randomColor());

    },100)
})