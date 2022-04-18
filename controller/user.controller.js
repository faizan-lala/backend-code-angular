const { request, response } = require("express");
const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken');
const token = require('../middleware/token.varification');
exports.SignUp = (request, response) => {
    userModel.create({
        name: request.body.name,
        email: request.body.email,
        image: "http:localhost:3000/images/" + request.file.filename,
        mobile: request.body.mobile,
        password: request.body.password,
    
    }).then(result => {
        return response.status(200).json(result);
    }).catch(err => {
        return response.status(500).json({ err: 'Something went wrong' });
    })
}

exports.SignIn = (request, response) => {
    console.log(request.body);

    userModel.findOne({
        email: request.body.email,
        password: request.body.password
    }).then(result => {
        if (result) {
            let payload = { subject: result._id };
            let token = jwt.sign(payload, 'infoBeansFoundation');
            return response.status(200).json({
                status: 'login success',
                current_user: result,
                token: token
            });
        }
        else
            return response.status(404).json({ message: 'invalid user' });
    }).catch(err => {
        return response.status(500).json({ err: 'Something went wrong' })
    })
}
