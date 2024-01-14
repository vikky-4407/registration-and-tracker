const cloudinary=require("cloudinary").v2;
const multer=require("multer");
const {CloudinaryStorage}=require("multer-storage-cloudinary");


//configure cloudinary
cloudinary.config({
    cloud_name:"djsagpwhq",
    api_key:"987283228962134",
    api_secret:"eys8sSylFsr4G3VnCO5KUKC-m78"
})

//configure cloudinary storage
let clStorage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"project",
        public_id:(request,file)=>file.fieldname+"-"+Date.now()
    }
})
//configure multer

let multerObj=multer({storage:clStorage})

//export multerObj

module.exports=multerObj;