//importamos los paquetes que requerimos
const express = require('express');
const hbs = require('hbs');
//crear la aplicacion 
const app = express();
//Definimos el motor de plantillas
//no vamos a emplear el motor MVC(Vista vamos a utilizar hbs)
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
//vamos a generar los partials
hbs.registerPartials(__dirname+ '/views/partials');
//configurar rutas
app.get('/', (req,res)=>{
  res.render('index',{
      autor : 'Osmar Portillo',
      year : new Date().getFullYear(),
      titulo : "Inicio"
  });
});
app.get('/vincent', (req, res)=>{
  res.render('vancogh', {
      autor : 'Osmar Portillo',
      year : new Date().getFullYear(),
      title : 'Vincent Van Gogh'
  });
});
app.get('/salvador', (req, res)=>{
  res.render('dali', {
      autor : 'Osmar Portillo',
      year : new Date().getFullYear(),
      title : 'Salvador dali'
  });
});
app.get('/pablo', (req, res)=>{
  res.render('picasso', {
      autor : 'Osmar Portillo',
      year : new Date().getFullYear(),
      title : 'Pablo Picasso'
  });
});
app.get('/warjol', (req, res)=>{
  res.render('andi', {
      autor : 'Osmar Portillo',
      year : new Date().getFullYear(),
      title : 'Andi Warhol'
  });
});
//arrancamos el servidor web
app.listen(3000, ()=>{
  console.log('escuchando el puerto 3000');
});
