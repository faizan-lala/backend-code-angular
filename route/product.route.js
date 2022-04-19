const { application } = require('express');
const express=require('express');
const router=express.Router();

const jwt = require('jsonwebtoken');
const token=require('../middleware/token.varification');
const productController=require('../controller/product.controller');
const multer=require('multer');
var storage = multer.diskStorage(
    {
        destination: 'public/images',
        filename: function (req, file, cb) {
            cb(null, Date.now() + "-" + file.originalname);
        }
    });

var upload = multer({ storage: storage });

router.post('/add',token.verifyToken,upload.array('productImages'),productController.Add);
router.get('/view-product',productController.viewProduct);
router.delete('/delete-product',token.verifyToken,productController.deleteProduct);
router.post('/update-product',token.verifyToken,upload.array('productImages'),productController.updateProduct)
module.exports=router;