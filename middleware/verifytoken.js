const verifytoken = async(req,res,next)=>{
    try{
        const token = req.headers.token;
        jwt.verify(token,process.env.SECRET_KEY,(err,decode)=>{
            if(err) res.status(404).send('token not found')
            
            req.user = decode;
            console.log(req.user)
            next();
        })
    }catch(err){
        console.log(err)
        res.send(err).status(500)   
    }
}

const access = async(req,res,next)=>{
    try{
        if(req.user.role != 'admin'){
            res.send('access denied!').status(403)
        }else{
            next();
        }
    }catch(err){
        console.log(err)
        res.send(err).status(500)
    }
}

module.exports = {verifytoken,access};