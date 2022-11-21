const db = require('../models');
const express = require('express');
const router = express.Router()


router.get('/new', (req, res) => {
    res.render('newLocation', {
        tabTitle: "New Location"
    })
})

// Show Route
router.get('/:id', (req, res) => {
    db.Locations.findById(req.params.id, (err, locations) => {
        res.render('showLocation', {
            locations: locations,
            tabTitle: "locations.name"
        })
    })
})

router.post('/', (req, res) => {
    db.Locations.create(req.body, (err, locations) => {
        res.redirect('/')
    })
})

//delete route
router.delete('/:id', (req, res) => {

    db.Locations.findByIdAndRemove(req.params.id, (err, locations) => {
        // res.send(location)
        res.redirect('/')
    })
})

// update route
router.put('/:id', (req, res) => {
    db.Locations.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, locations) => {

        res.redirect('/location/' + locations._id)
    })
})

// Edit route
router.get('/:id/edit', (req, res) => {
    db.Locations.findById(req.params.id, (err, locations) => {
        res.render("editLocation", {
            locations: locations,
            tabTitle: "Edit"
        })
    })
})


module.exports = router