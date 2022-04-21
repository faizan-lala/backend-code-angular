const express=require('express');
const cartController=require('../controller/cart.controller');
const router=express.Router();

router.post('/add-to-cart',cartController.addToCart);
router.post('/view',cartController.viewCart);
router.delete('/delete-cart',cartController.deleteCart);
module.exports=router;