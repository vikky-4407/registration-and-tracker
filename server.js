const exp=require("express")
const app=exp();
let cors=require('cors')
app.use(cors())
app.listen(3500,()=>console.log("web server listening port ......"));

//set path
const path=require("path")

//connect react build
app.use(exp.static(path.join(__dirname,'./build')))

//get mongo client
const mclient=require("mongodb").MongoClient;



//connect to db server using mongo client
mclient.connect('mongodb://127.0.0.1:27017')
.then((dbRef)=>{
    //connect to a database
    const dbObj=dbRef.db("bharat")
    //connect to collections of the databases
    const usercollectionObj=dbObj.collection("usercollection")
    const seatcollectionObj=dbObj.collection("seatcollection") 
    const collegecollectionObj=dbObj.collection("collegecollection")
    //share collections to APIs
    app.set("usercollectionObj",usercollectionObj)
    app.set("seatcollectionObj",seatcollectionObj) 
    app.set("collegecollectionObj",collegecollectionObj) 
     
    console.log("Db connection success")

})
.catch((err)=>console.log("database connect error",err))



//import user api
const userApp=require("./APIs/userApi");
 
const seatApp=require("./APIs/seatApi"); 

const collegeApp=require('./APIs/collegeApi')
 
 

//execute user api when pathn/user-api
app.use('/user-api',userApp) 

app.use('/seat-api',seatApp)

app.use('/college-api',collegeApp)
 

//page refresh
app.use('/*',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'./build/index.html'),err=>{
        if(err){
            next(err)
        }
    })
})

const InvalidPathmiddleware=(request,response,next)=>{
    response.send({message:"invalid path"})

}
app.use("*",InvalidPathmiddleware)

const errorHandlingMiddleware=(error,request,response,next)=>{
    response.send({message:error.message});
}
app.use(errorHandlingMiddleware)