// Database connect
const db = require('../db/connection');
const {ObjectId} = require('mongodb');

// Starting Express
const Router = require('express').Router;
const router = Router();

// Note creation view
router.get('/', function(req, res) {
    res.render('notes/create');
});

// Note details view
router.get('/:id', async function(req, res) {
    const id = new ObjectId(req.params.id);
    const note = await db.getDb().db().collection('notes').findOne({ _id: id });
    res.render('notes/details', { note })
});

// Note edit view
router.get('/edit/:id', async function (req, res) {

    const id = new ObjectId(req.params.id);
    const note = await db.getDb().db().collection('notes').findOne({ _id: id });
    res.render('notes/edit', { note });

});

// Note creation POST
router.post('/', function(req, res) {

    const data = req.body;
    const title = data.title;
    const description = data.description;

    db.getDb()
        .db()
        .collection('notes')
        .insertOne({ title: title, description: description });
    
    res.redirect(301,'/');

});

// Note update POST
router.post('/update', function(req, res) {

    const data = req.body;
    const id = new ObjectId(data.id);
    const title = data.title;
    const description = data.description;

    db.getDb()
        .db()
        .collection('notes')
        .updateOne({ _id: id }, {$set: {title: title, description: description}});

    res.redirect(301, '/');

});

// Note removal POST
router.post('/delete', function (req, res) {
    const data = req.body;
    const id = new ObjectId(data.id);

    db.getDb()
        .db()
        .collection('notes')
        .deleteOne({_id: id});

    res.redirect(301, '/');

});

module.exports = router;