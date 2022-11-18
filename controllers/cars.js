const db = require('../models');
const express = require('express');
const router = express.Router()


router.get('/new', (req, res) => {
    res.render('newCar', {
        tabTitle: "New Car"
    })
})

// Show Route
router.get('/:id', (req, res) => {
    db.Car.findById(req.params.id, (err, cars) => {
        res.render('showCar', {
            cars: cars,
            tabTitle: "cars.name"
        })
    })
})

router.post('/', (req, res) => {
    db.Car.create(req.body, (err, cars) => {
        res.redirect('/')
    })
})

//delete route
router.delete('/:id', (req, res) => {

    db.Car.findByIdAndRemove(req.params.id, (err, cars) => {
        // res.send(location)
        res.redirect('/')
    })
    // res.send(req.params.id)
})

// update route
router.put('/:id', (req, res) => {
    db.Car.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, cars) => {
        // res.send(entry)
        res.redirect('/car/' + cars._id)
    })
    // res.send(req.params.id)
})

// Edit route
router.get('/:id/edit', (req, res) => {
    db.Car.findById(req.params.id, (err, cars) => {
        res.render("editCar", {
            cars: cars,
            tabTitle: "Edit"
        })
    })
})


//buy button
// router.put('/:id/buy', (req, res) => {
//     db.Review.findById(req.params.id, (err, reviews) => {
//         db.Review.findByIdAndUpdate(req.params.id, {qty: products.qty - 1}, {new: true}, (err, products) => {
//             res.redirect("/product/" + products._id)
//         })
//     })
// })

module.exports = router