const express=require('express');
const router=express.Router();
const jwt = require('jsonwebtoken');
const token=require('../middleware/token.varification');
const categoryController=require('../controller/category.controller');
const fireBase = require('../middleware/firebase');
const multer=require('multer');
var storage = multer.diskStorage(
    {
        destination: 'public/images',
        filename: function (req, file, cb) {
            cb(null, Date.now() + "-" + file.originalname);
        }
    });

var upload = multer({ storage: storage });

router.post('/add',token.verifyToken,upload.single("categoryImage"),fireBase.fireBaseStorage,categoryController.Add);
router.get('/view-category',categoryController.viewCategory);
router.delete('/delete-category',token.verifyToken,categoryController.deleteCategory);
router.post('/update-category',token.verifyToken,upload.single("categoryImage"),categoryController.updateCategory)

module.exports=router;