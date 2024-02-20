const express = require('express')

const router = express.Router();

router.get('/all', (req, res) => {
    res.send('hi /')
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.status(200).send(`product : ${id}`)
})

module.exports = router