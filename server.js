const express = require('express');
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`post http://localhost:${port}`);
})

app.get('/',(req, res)=>{
    console.log("sono qui i post");
})


//CRUD (Index, Show, Create, Update e Delete)

// //index
// app.get('/api/posts/', (req, res) =>{
//     res.send("list of pizza");
// })

//show
// app.get('/api/posts/:id/', (req, res)=>{
//     res.send('single element');
// })

//create
app.post('/api/posts/',(req, res)=>{
    res.send('create new element')
})

//update
app.put('/api/posts/:id', (req,res)=>{
    res.send('update total result')
})

app.patch('/api/posts/:id', (req, res)=>{
    res.send('update partial result')
})

app.delete('/api/posts/:id', (req, res)=>{
    res.send('delete an element')
})

const post = [
    {
        id: 1,
        titolo:"Ciambellone",
        contenuto:"ciambella",
        immagine:"images/ciambellone.jpeg",
        tag:["casa", "dolce"]
    },
    {
        id: 2,
        titolo:"Cracker_barbabietola",
        contenuto:"Cracker",
        immagine:"images/cracker_barbabietola.jpeg",
        tag:["casa", "dolce"]
    },
    {
        id: 3,
        titolo:"Pane fritto dolce",
        contenuto:"Pane fritto",
        immagine:"images/pane_fritto_dolce.jpeg",
        tag:["casa", "dolce"]
    },
    {
        id: 4,
        titolo:"Pasta barbabietola",
        contenuto:"pasta",
        immagine:"images/pasta_barbarbietola.jpeg",
        tag:["casa", "dolce"]
    },
    {
        id: 5,
        titolo:"Torta paesana",
        contenuto:"torta",
        immagine:"images/torta_paesana.jpeg",
        tag:["casa", "dolce"]
    }
]

// Provare a restituire la lista dei post dalla rotta index, in formato json
app.get('/api/posts/', (req, res) =>{
    res.json(post);
})

// Provare a restituire un singolo post dalla rotta show, sempre in formato json
app.get('/api/posts/:id/', (req, res)=>{
    const idByUser = req.params.id;
    const specifyObj = post.find(elem => elem.id == idByUser)

    if(!specifyObj){
        res.json({error: 'post not found'})
    } else {
        res.json(specifyObj);
    }
})