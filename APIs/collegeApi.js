
const exp=require("express")
const collegeApp=exp.Router()

//import express-async-handler
const expressAsyncHandler=require("express-async-handler")

//import multerObj
const multerObj=require("./middlewares/CloudinaryConfig")

//import //bcryptjs module
const bryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");
const verifyToken=require("./middlewares/verifyToken")

collegeApp.use(exp.json())

  
collegeApp.post('/add-college',expressAsyncHandler(async (request,response)=>{
   //get user collection
   const collegecollectionObj=request.app.get("collegecollectionObj")
  //get new user
  const newUser=request.body; 
 
    await  collegecollectionObj.insertOne(newUser)
    response.status(201).send({message:"college created"});
     
 
  
})
);


//update land details
 

collegeApp.get("/get-college",expressAsyncHandler(async (request,response)=>{
    //get landolletionobj
    const collegecollectionObj=request.app.get("collegecollectionObj");


    //get users from db
    let landData=await collegecollectionObj.find().toArray();
    console.log(landData)
    response.status(200).send({message:"data details",payload:landData})
}))


module.exports=collegeApp