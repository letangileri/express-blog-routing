const express = require('express');
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`post http://localhost:${port}`);
})

app.get('/',(req, res)=>{
    console.log("sono qui i post");
})






const post = [
    {
        titolo:"Ciambellone",
        contenuto:"ciambella",
        immagine:"images/ciambellone.jpeg",
        tag:["casa", "dolce"]
    },
    {
        titolo:"Cracker_barbabietola",
        contenuto:"Cracker",
        immagine:"images/cracker_barbabietola.jpeg",
        tag:["casa", "dolce"]
    },
    {
        titolo:"Pane fritto dolce",
        contenuto:"Pane fritto",
        immagine:"images/pane_fritto_dolce.jpeg",
        tag:["casa", "dolce"]
    },
    {
        titolo:"Pasta barbabietola",
        contenuto:"pasta",
        immagine:"images/pasta_barbarbietola.jpeg",
        tag:["casa", "dolce"]
    },
    {
        titolo:"Torta paesana",
        contenuto:"torta",
        immagine:"images/torta_paesana.jpeg",
        tag:["casa", "dolce"]
    },
]

