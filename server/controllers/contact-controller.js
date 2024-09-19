const Contact = require('../models/contact-model');

const fillContact = async (req, res, next) => {
    try {
        const resp = req.body;
        await Contact.create(resp);
        res.status(201).json({ msg: "Message delivered successfully" });
    } catch (error) {
        next({ status: 500, message: "Message delivery failed", error });
    }
};

module.exports = fillContact;
