const bcrypt=require('bcrypt')
const User=require('../models/user')
const token=require('../tokenLogic')
const login=async(req,res)=>{
    try{

        const {email,password}=req.body;
       const user=await User.findOne({email:email})
       if(!user)return res.status(503).json({messag:"user not fond"})
       const match=await bcrypt.compare(password, user.password)
       if(!match) return res.status(503).json({messag:"password incorrect"})
       const access_token=token.createAccessToken(user._id)
       const refresh_token=token.createRefreshToken(user._id)
       res.status(400).json({access_token:access_token,refresh_token:refresh_token}) 
       console.log('logid avec success')
    }catch(error){
     res.status(400).json({error:error.message})
    }
    
}
module.exports={login}