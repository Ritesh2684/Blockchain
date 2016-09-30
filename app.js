var express = require('express');
var path = require('path');
var blockchain = require('./blockchain/blockchain');
var app = express();
var bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(bodyParser());
//app.use(express.static(path.join()));

// initialize blockchain
blockchain.init();

app.get('/', function (req, res) {
  res.send('Hello Hackathon!');
});

app.get('/query/ru/:ru', function (req, res) {
 blockchain.query('query',req.params.ru,['a'],function(e,o){
        if (!o) {
          console.log('user not found');
        } else {
            console.log('success= '+ o);
            var result = 'balance= '+o;
	res.status(200);
             //  res.json({id:1, desc:'foo'});
             //  res.render('index', {
	     // 	title:'MY App',
	     // 	items: [
	     //		{id:1, desc:'foo'},
	     //		{id:2, desc:'bar'}
             //		]
		
//        });
	      console.log(res);
        }
  });

});
app.get('/invoke', function (req, res) {
  var result = blockchain.invoke('invoke','UK',['a','b','100'],function(e,o){
        if (!o) {
          console.log('user not found');
        } else {
            console.log('success= ' + o);
            res.send(o);
        }

  });

});

app.listen(3000, function () {
  console.log('Boilerplate app listening on port 3000');
});
