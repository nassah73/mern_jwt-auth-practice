const User = require('../models/user')
const {hash}=require('bcrypt')
const token=require('../tokenLogic')
const register=async(req,res)=>{
    try{

        const {username,email,password}=req.body;
        const hashpassword= await hash(password,10)
       const NewUser=new User({
        username,
        email,
        password:hashpassword
       })
       const UserSaved= await NewUser.save()

     // res.status(200).json(NewUser)   
    
    const accesToken =token.createAccessToken(UserSaved._id)
    const refreshtoken =token.createRefreshToken(UserSaved._id)
    res.status(200).json({access_token:accesToken,refresh_token:refreshtoken})
    }
    catch(error){
      res.status(503).json({message:error.message})
    }
}
module.exports={register}