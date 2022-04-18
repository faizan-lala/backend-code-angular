const { response } = require('express');
const express=require('express');
const { request } = require('http');
const jwt=require('jsonwebtoken');

exports.verifyToken=(request,response,next)=>{
    try{
    if(!request.headers.authorization)
        return response.status(401).send('unauthorized requset');

        if(request.headers.authorization===null)
        return response.status(401).send('unauthorized requset');   

        let token =request.headers.authorization.split(" ")[1];
        let payload=jwt.verify(token,'infoBeansFoundation');

        next();

        console.log(token);
        console.log(payload);
    }catch(err){
        return response.status(401).send('unauthorized requset');

    }
}