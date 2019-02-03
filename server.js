const express = require('express');
const hbs = require('hbs');

let app = express();

//hbs.registerPartials(_dirname + '/views/partials');
app.set('view engine', hbs);
hbs.registerPartials(__dirname + '/views/partials')
//app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear()
})

hbs.registerHelper('screamIt',(text)=>{
    return text.toUpperCase()
})
app.get('/', (req, res) => {
    res.render('home.hbs', {
    pageTitle: 'Homepage',
    welcomeMessage: 'Welcome to play any of both game clicking on one of the links above',
    currentYear: new Date().getFullYear()
});
});
app.get('/game1', (req, res) => {
res.render('game1.hbs',{
    pageTitle: 'Guessing Game'
})
})

app.get('/game2', (req, res) => {
res.render('game2.hbs', {
pageTitle: 'Change Content',
currentYear: new Date().getFullYear()
});
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
res.send({
errorMessage: 'Unable to handle request'
});
});

app.listen(3000, () => {
console.log('Server is up on port 3000');
});