const jwt=require("jsonwebtoken")


//write a middleware function to verify token
const verifyToken=(request,response,next)=>{
  //get bearer token
  const bearerToken=request.headers.authorization;//bearer token
  //if token ias not found
  if(bearerToken===undefined){
     response.send({message:"unauthorized access..plz login first"}) 
  }
  //if bearer token is existed
  else{
    //get token from bearer token
    const token=bearerToken.split(" ")[1]//['bearee','token']
    //verify token
    try{
     jwt.verify(token,"abcdef")
     //calling next middleware
     next()
    }
    catch(err){
       next(new Error("session expired . please relogin to continue"))
    }


  }



}

module.exports=verifyToken;