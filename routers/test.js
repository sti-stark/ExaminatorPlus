const express = require('express');
const Quest = require('../model/test');
const router = new express.Router()

router.get('/test', async (req, res) => {
    try {
        const test = await Quest.find({})
        res.send(test)
    } catch (e) {
        res.status(500).send()
    }
});


module.exports = router










/*app.get('/test', async (req, res) => {
    await Test.find({}).then((data) => {
        res.render('index', { test: data })
    });
});*/