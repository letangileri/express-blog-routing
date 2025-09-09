const express = require('express');
const app = express();
const port = 3000;
const postRouter = require('./routers/posts')

app.listen(port, ()=>{
    console.log(`post http://localhost:${port}`);
})

app.get('/',(req, res)=>{
    console.log("sono qui i post");
})

app.use("/api/posts", postRouter);


