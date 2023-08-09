const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello Node.js')
})

app.get('/user/:id', function (req, res) {
    // const q = req.params
    // console.log(q);
    const q = req.query
    console.log(q);
    res.json({"user id" : q.id})
})

app.get('/sound/:name',(req, res)=>{
    const {name} = req.params

    if(name == "dog"){
        res.json({"sound" : "wakwak"});
    } else if(name == 'cat'){
        res.json({'sound' : 'meow'});
    }else if(name == 'pig'){
        res.json({'sound' : 'oigk'});
    }else if(name == 'cat'){
        res.json({'sound' : 'undefined'});
    }
    
    console.log(name)
    // res.json(name)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})