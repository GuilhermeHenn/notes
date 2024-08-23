// Configs
const express = require('express');
const hxphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

// Database
const db = require('./db/connection')

// Template engine
app.engine('handlebars', hxphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Route Import
const notesRoutes = require('./routes/notes');

// Routes
app.get('/', async function(req, res){
    const notes = await db.getDb().db().collection('notes').find({}).toArray();
    res.render('home', {notes});
});

app.use('/notes', notesRoutes);

db.initDb((err, db) => {
    if(err) {
        console.log(err)
    } else {
        app.listen(port, () => {
            console.log("Banco conectado com sucesso!")
            console.log(`Projeto rodando na porta ${port}.`)
        });
    }
});