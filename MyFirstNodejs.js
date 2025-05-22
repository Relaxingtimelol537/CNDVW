const express = require('express'); 

const app = express(); 

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(3000, function () { 
    console.log('Example app listening on port 3000!'); 
})

app.get('/products/:id', function(req,res){
    const routeParams = req.params;
    const id = routeParams.id;
    res.send('Thong tin sp '+ id);
})

app.post('/cart/:id', function (req,res){
    const GioHangId = req.params.id;
    const body = req.body;
    const ID = body.productId;
    const quantity = body.quantity;
    const price = body.price;
    res.post('Da them product '+ ID + ' vao gio hang '+ GioHangId+ ' voi SL '+ quantity + ' gia $'+ price);

})



app.get('/', function (req, res) { 
    res.send('Hello World!'); 
}) 

