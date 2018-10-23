var express = require('express');
var app = express();

app.set('view engine', 'pug'); //będziemy używać Puga jako kreatora widoków
app.set('views','./views'); //widoki będziemy trzymać w katalogu /views


app.get('/main', function (req, res) {
    res.render('main');
});

app.get('/signin', function (req, res) {
    res.render('signin');
});

app.get('/log', function (req, res) {
    res.render('log', {
		first_name: req.query.first_name,
        last_name: req.query.last_name
	});
});

const server = app.listen(3000, 'localhost', function() {
	const host = server.address().address;
    const port = server.address().port;
    
    console.log('Aplikacja nasłuchuje na http://localhost:3000/main' + host + ':' + port);

});