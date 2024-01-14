
const exp=require("express")
const seatApp=exp.Router()

//import express-async-handler
const expressAsyncHandler=require("express-async-handler")

//import multerObj
const multerObj=require("./middlewares/CloudinaryConfig")

//import //bcryptjs module
const bryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");
const verifyToken=require("./middlewares/verifyToken")

seatApp.use(exp.json())

  
seatApp.post('/add-seat' ,expressAsyncHandler(async (request,response)=>{
    //get user collection
    const seatcollectionObj=request.app.get("seatcollectionObj")
    console.log(request.body)
   //get new user
   const newUser=request.body
   //check for duplicate user by username 
   await seatcollectionObj.insertOne(newUser)
   response.status(201).send({message:"user created"});
   //if user already existed
    
   
 })
 );

//update land details

 


seatApp.get("/get-seat",expressAsyncHandler(async (request,response)=>{
    //get landolletionobj
    const seatcollectionObj=request.app.get("seatcollectionObj");


    //get users from db
    let landData=await seatcollectionObj.find().toArray();
    console.log(landData)
    response.status(200).send({message:"data details",payload:landData})
}))


module.exports=seatApp