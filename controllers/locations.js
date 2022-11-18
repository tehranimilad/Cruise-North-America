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
    db.Location.findById(req.params.id, (err, locations) => {
        res.render('showlocation', {
            locations: locations,
            tabTitle: "locations.name"
        })
    })
})

router.post('/', (req, res) => {
    db.Location.create(req.body, (err, locations) => {
        res.redirect('/')
    })
})

//delete route
router.delete('/:id', (req, res) => {

    db.Location.findByIdAndRemove(req.params.id, (err, locations) => {
        // res.send(location)
        res.redirect('/')
    })
    // res.send(req.params.id)
})

// update route
router.put('/:id', (req, res) => {
    db.Location.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, locations) => {
        // res.send(entry)
        res.redirect('/location/' + locations._id)
    })
    // res.send(req.params.id)
})

// Edit route
router.get('/:id/edit', (req, res) => {
    db.Location.findById(req.params.id, (err, locations) => {
        res.render("editlocation", {
            locations: locations,
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