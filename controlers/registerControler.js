const User = require('../models/user')
const {hash}=require('bcrypt')
const register=async(req,res)=>{
    try{

        const {username,email,password}=req.body;
        const hashpassword= await hash(password,10)
       const NewUser=new User({
        username,
        email,
        password:hashpassword
       })
         await NewUser.save()
      res.status(200).json(NewUser)   
    }
    catch(error){
      res.status(503).json({message:error.message})
    }
}
module.exports={register}