const express=require('express')
const router=express.Router()
const Login =require('../controlers/LoginControler')
const register=require('../controlers/registerControler')
router.post('/register',register.register)
router.post('/login',Login.login)
module.exports=router;