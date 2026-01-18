const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const userrouter = require('./routes/userrouter.js');


const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello deepa");
})

app.use('/user',userrouter)

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log('mongodb connected')})
.catch((err)=>{'error: ',console.log(err)})

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})