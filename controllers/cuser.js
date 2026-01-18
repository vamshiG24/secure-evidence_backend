const User = require('../models/user.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const usersignup = async(req,res)=>{
    try {
        let {name,email,password,role} = req.body;

        if(!name || !email || !password || !role){
            res.send("pls enter your details").status(400)
        } 

        const hashpass = await bcrypt.hash(password,10)
        const user = await User.create({
            name,
            email,
            password:hashpass,
            role
        })

        res.send(user).status(200)

    } catch (error) {
        res.send(error).status(500)
        console.log(error)
    }
}

const userlogin = async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password) res.send('enter details').status(400)

        const userl = await User.findOne({email});

        if(!userl) res.send('user doesnot exist').status(404)

        const hashpass = await bcrypt.compare(password,userl.password)
        if(!hashpass) res.send('pls enter valid details').status(400)

        const token = jwt.sign({id:userl._id,role:userl.role},process.env.SECRET_KEY,{expiresIn:'1d'})
        res.status(200).json({
            message:'login successfull',
            token:token,
            user:{
            id:userl._id,
            name:userl.name,
            role:userl.role
            }
        })
        
    }catch(err){
        res.send(err).status(500)
        console.log(err)
    }
}


const profile = async (req,res)=>{
    const user = await User.findById(req.user.id).select('-password')
    res.send(user).status(200)
}


module.exports = {usersignup,userlogin,profile};