const User = require('../models/user.js')
const bcrypt = require('bcryptjs')

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


module.exports = usersignup;