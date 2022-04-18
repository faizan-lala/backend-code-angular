const adminController=require('../controller/admin.controller');


const express=require('express');

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

router.post('/signup',upload.single('adminImage'),adminController.SignUp);
router.post('/signin',adminController.SignIn);

module.exports=router;