const router = require('express').Router();
const Phone = require('../models/phone.model');

router.post('/new', async (req, res) => {
    await Phone.create(req.body)
        .then(() => {
            console.log('New phone added to database');
            res.json(req.body);
        })
        .catch(err => {
            console.log(err);
        })
});

module.exports = router;