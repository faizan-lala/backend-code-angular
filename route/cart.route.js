const express=require('express');
const cartController=require('../controller/cart.controller');
const router=express.Router();

router.post('/add-to-cart',cartController.addToCart);
router.get('/view',cartController.viewCart);
module.exports=router;