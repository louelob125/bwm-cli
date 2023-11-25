const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');

// Get All Rentals
router.get('', async function(req, res) {
    try {
        const foundRentals = await Rental.find({});
        res.json(foundRentals);
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// Get Rental by Id
router.get('/:id', async function(req, res) {
    const rentalId = req.params.id;

    try {
        const foundRental = await Rental.findById(rentalId);
        res.json(foundRental);
    } catch (err) {
        res.status(422).send({ errors: [{ title: "Rental Error", detail: "Could not find Rental" }] });
    }
});



module.exports = router;