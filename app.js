import express from 'express'
import path from 'path';
import {default as hbs} from "hbs";
import dotenv from 'dotenv'
dotenv.config()

const __dirname = path.resolve();
const app = express()
const port = process.env.PORT;

// handlebars

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');




// Servir contenido estatico middleware
app.use(express.static('public'));

app.get('/',  (req, res)  =>{
  res.render('home', {
    nombre: ' Carlos Paredes ',
    titulo: ' Curso de node '
  })
})


app.get('/generic',  (req, res)  =>{
  res.render('generic', {
    nombre: ' Carlos Paredes ',
    titulo: ' Curso de node '
  })
})

app.get('/elements',  (req, res)  =>{
  res.render('elements', {
    nombre: ' Carlos Paredes ',
    titulo: ' Curso de node '
  })
})


app.get('*',  (req, res) => {
  res.render('404', {
    nombre: ' Carlos Paredes ',
    titulo: ' Curso de node '
  })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
 })