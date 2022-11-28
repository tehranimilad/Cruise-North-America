
// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+
const express = require('express')
const app = express()
const methodOverride = require('method-override');

require('dotenv').config()
const db = require('./models')


const carsCtrl = require('./controllers/cars')
const locationsCtrl = require('./controllers/locations');
const port  = process.env.PORT

// +-+-+-+-+-+-+-+-+-+-+
// |M|I|D|D|L|E|W|A|R|E|
// +-+-+-+-+-+-+-+-+-+-+
// set folder for static files
app.use(express.static('public'))
// sets the view engine to EJS for our app (this allows us to render EJS files without usind `.ejs` after file names)
app.set('view engine', 'ejs')
app.use(methodOverride('_method'));  
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    next();
});


// +-+-+-+-+-+-+
// |R|O|U|T|E|S|
// +-+-+-+-+-+-+
// Index Route (GET/Read): We'll leave this route in the server.js since it affects both models
app.get('/', (req, res) => {
    db.Locations.find({}, (err, locations) => {
        db.Car.find({}, (err, cars) => {
            res.render('index', {
                locations: locations,
                cars: cars,
                tabTitle: 'Cruise America'
            })
        })
    })
})


app.use('/car', carsCtrl)
app.use('/location', locationsCtrl)

// +-+-+-+-+-+-+-+-+
// |L|I|S|T|E|N|E|R|
// +-+-+-+-+-+-+-+-+
// `app.listen()` binds and listens for the connections on the specified host and port
app.listen(port, () => {
    console.log(`App is running at localhost:${port}`)
})



