const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(express.static("public"));


app.get('/cats', function(req, res) {
    res.render('cats', {
        catTitle : 'Meow',
    })
})

app.get('/dogs', function(req, res) {
    res.render('dogs', {
        dogTitle : 'Woof',
    })
})

app.get('/cats_and_dogs', function(req, res) {
    res.render('dogs', {
        catdogTitle : 'Living together',
    })
})

app.get('/param/:name', function(req, res) {
    const name = req.params.name;
    res.render('parameters', {
        paramTitle : `Hello ${name}`,
    })

})


app.get('/paramage/year', function(req, res) {
    let givenAge = req.query.age;
    let date = new Date();
    let curruntYear = date.getFullYear();
    let yearborn = curruntYear - givenAge
    res.render('ageparam', {
        ageParam : `Passed age is ${givenAge} which indicates`,
        yearBorn : `You were born in  ${yearborn}`,
    })
})


app.listen('3000', function() {
    console.log('connected')
});