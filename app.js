const express = require ('express');
const app = express();
const path = require('path');
const PUERTO = 2020;
const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));

app.get('/', (req,res) => {
    let htmlpath = path.join(__dirname,'./views/home.html')
    res.sendFile(htmlpath);
    });

app.get('/register', (req,res) => {
let htmlpath = path.join(__dirname,'./views/register.html')
res.sendFile(htmlpath);
});

app.get('/login', (req,res) => {
let htmlpath = path.join(__dirname,'./views/login.html')
res.sendFile(htmlpath);
});
    
app.listen(2020, () => {
    console.log('Servidor corriendo en puerto 2020')
});

app.listen(process.env.PORT || 2020, function(){
    console.log('Servidor Corriendo en el puerto 2020')
});
