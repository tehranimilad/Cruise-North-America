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
        res.redirect('/')
    })
})

// update route
router.put('/:id', (req, res) => {
    db.Car.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, cars) => {
        res.redirect('/car/' + cars._id)
    })
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


module.exports = router