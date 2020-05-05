const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(express.static("public"));
app.use('/images', express.static(__dirname + '/images'));

app.locals.animaldata = require('./public/data/animals.json');
app.get('/cats', function(req, res) {
    let qutes = req.query[0];

    res.render('cats', {
        title: `This are ${qutes}`,

        catTitle : 'Meow',
    })
})

app.get('/dogs', function(req, res) {
    let qutes = req.query[0];

    res.render('dogs', {
        dogTitle : 'Woof',
      title: `This are ${qutes}`,

    })
})

app.get('/cats_and_dogs', function(req, res) {
    let qutes = req.query[0];

    res.render('dogs', {
        title: `This are ${qutes}`,
        catdogTitle : 'Living together',
    })
})

app.get('/param/:name', function(req, res) {
    const name = req.params.name;
    res.render('parameters', {
        title: `This are ${name}`,
        paramTitle : `Hello ${name}`,
    })

})


app.get('/paramage/year', function(req, res) {
    let qutes = req.query[0];
    let givenAge = req.query.age;
    let date = new Date();
    let curruntYear = date.getFullYear();
    let yearborn = curruntYear - givenAge
    res.render('ageparam', {
        title: `This are ${qutes}`,
        ageParam : `Passed age is ${givenAge} which indicates`,
        yearBorn : `You were born in  ${yearborn}`,
    })
})



app.get('/dog/lucky', function(req, res) {
    let qutes = req.query[0];
    res.render('pets', {
        title: `This are ${qutes}`,
        petTitle : `Hello Lucky`,
    })

})


app.listen('3000', function() {
    console.log('connected')
});