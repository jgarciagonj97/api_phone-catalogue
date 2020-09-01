const router = require('express').Router();
const Phone = require('../models/phone.model');
const { insertPhone, getAll, getPhoneById } = require('../controllers/phones.controller');

/**
 * INSERT PHONES TO DATABASE
 */
router.post('/new', insertPhone);

/**
 * GET ALL PHONES
 */
router.get('/phones', getAll);

/**
 * GET PHONE BY ID
 */
router.get('/:id', getPhoneById);


module.exports = router;