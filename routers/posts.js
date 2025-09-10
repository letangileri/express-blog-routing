const express = require('express');
const router = express.Router();

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

//CRUD (Index, Show, Create, Update e Delete)

// //index
// router.get('/', (req, res) =>{
//     res.send("list of pizza");
// })

// //show
// router.get('/:id/', (req, res)=>{
//     res.send('single element');
// })

// //create
// router.post('/',(req, res)=>{
//     res.send('create new element')
// })

//update
router.put('/:id/', (req,res)=>{
    res.send('update total result')
})

router.patch('/:id/', (req, res)=>{
    res.send('update partial result')
})

router.delete('/:id/', (req, res)=>{
    res.send('delete an element')
})

// Provare a restituire la lista dei post dalla rotta index, in formato json
router.get('/', (req, res) =>{
    res.json(post);
})

// Provare a restituire un singolo post dalla rotta show, sempre in formato json
router.get('/:id/', (req, res)=>{
    const idByUser = req.params.id;
    const specifyObj = post.find(elem => elem.id == idByUser)

    if(!specifyObj){
        res.json({error: 'post not found'})
    } else {
        res.json(specifyObj);
    }
})

//creare un nuovo elemento
//store
router.post('/',(req, res)=>{
    const ultimoOggetto =  post[post.length - 1];

    const newPost = {        
        id: (ultimoOggetto.id)+1,
        titolo:"Tiramisu",
        contenuto:"tiramisuuu",
        immagine:"images/ciambellone.jpeg",
        tag:["ristorante", "dolce"]
    }
    
    const newPostId = !post ? console.log("non ho trovato nessun post") : post.push(newPost)

    //console.log((ultimoOggetto.id)+1);
    res.json(post)
})



module.exports = router