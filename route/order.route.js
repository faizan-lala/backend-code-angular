const express=require('express');
const router=express.Router();
const multer=require('multer');

// module.exports=router;



const orderController = require("../controller/order.controller");

// router.post("/place",orderController.place);
// router.get("/view/:uid",orderController.view);
// router.get("/view",orderController.viewOrders);

// module.exports = router;


// const routeCache = require('route-cache');
// const router = express.Router();

router.post('/place-order', orderController.placeOrder);

// router.get('/view-order', routeCache.cacheSeconds(20), (request, response) => {
//     Order.find().then(res => {
//         console.log(result);
//         response.status(200).json(result);
//     }).catch(err => {
//         usersLogger.error(`Unable to find user: ${err}`);
//         return response.status(500).json({ err: 'Server error' });
//     })

// });


// router.get('/p-order/:oid', routeCache.cacheSeconds(20), (request, response) => {
//     Order.findOne({ oid: request.params.oid }).then(result => {
//         console.log(result);
//         response.status(200).json(result);
//     }).catch(err => {
//         return response.status(500).json({ err: 'Server error' });
//     });
// });



// router.post('/edit-order/:oid', async(request, response) => {
//     console.log(request.body);
//     const { address, mobile, shipping, payment } = request.body
//     var order = {};

//     if (address) {
//         order.address = address;
//     }
//     if (mobile) {
//         order.mobile = mobile;
//     }
//     if (shipping) {
//         order.shipping = shipping;
//     }
//     if (payment) {
//         order.payment = payment;
//     }
//     order = await Order.findOneAndUpdate({ oid: request.params.oid }, { $set: order }, { new: true });
//     return response.status(200).json(order);

// })



// router.get('/sort', routeCache.cacheSeconds(20), (request, response) => {
//     Order.find({}).sort([
//         ['date', -1]
//     ]).exec(function(err, docs) {
//         console.log(docs);
//         console.log(err);
//         response.status(200).json(docs);
//     });

// })
module.exports = router;