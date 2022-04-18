const express=require('express');
const userController=require('../controller/user.controller');
const jwt = require('jsonwebtoken');
const token=require('../middleware/token.varification');
const router=express.Router();

const multer=require('multer');
var storage = multer.diskStorage(
    {
        destination: 'public/images',
        filename: function (req, file, cb) {
            cb(null, Date.now() + "-" + file.originalname);
        }
    });

var upload = multer({ storage: storage });

router.post('/signup',upload.single('userImage'),userController.SignUp);
router.post('/signin',userController.SignIn);

module.exports=router;