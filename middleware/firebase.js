
const path =require('path');
const {Storage}=require('@google-cloud/storage');
const { request } = require('http');
const { response } = require('express');

const storage=new Storage({
    projectId :"footwearshop-535ae",
    keyFilename : "footwearshop-535ae-firebase-adminsdk-lqfrh-16b8b7538b.json"
});

let bucketName="gs://footwearshop-535ae.appspot.com";

exports.fireBaseStorage=async (request,response,next)=>{
    try{
        for(i=0;i<4;i++){
        console.log("In Firebase try block")
        await storage.bucket(bucketName).upload(path.join(__dirname,'../',"public/images/")+request.files[i].filename,{
            gzip:true,
            metadata:{
                metadata:{
                firebaseStorageDownloadTokens:"abcdefg"
            }
        }
        })
        next();
    }
}
    catch(err){
        console.log(err);
    }
}

