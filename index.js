const express = require('express')
const app = express()
const port = '5050'

const data = {
    name : 'Gaurav Singh',
    age : '28',
    Postion : 'Developer'
}

app.get('/login', (req, res)=>{
    res.json({Sucess: data})
})



app.listen(port, ()=>{
    console.log('Server Started @ 5050')
})
