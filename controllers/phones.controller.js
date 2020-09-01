const Phone = require('../models/phone.model');

const insertPhone = async (req, res) => {
    await Phone.create(req.body)
        .then(() => {
            console.log('New phone added to database');
            res.json(req.body);
        })
        .catch(err => {
            console.log(err);
        })
};

const getAll = async (req, res, next) => {
    try {
        const phones = await Phone.find();
        return res.json(phones);
    } catch (err) {
        console.log(err);
    }
};

const getPhoneById = async (req, res, next) => {
    try {
        const phone = await Phone.findById(req.params.id);
        return res.json(phone);
    }
    catch (err) {
        console.log(err);
    }
};

module.exports = {
    getAll, getPhoneById, insertPhone
}