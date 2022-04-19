
const Order=require('../model/order.model');
exports.placeOrder=async(request, response) => {
    let uid=request.body.userId;
    let mobile=request.body.mobile;
    let total=request.body.total;
    let shipping=request.body.shipping;
    let payment=request.body.payment
    console.log(request.body.orderList)
  const orderItem = {uid,mobile,total,shipping,payment};
    var orderModel = new Order(orderItem);
    for (i = 0; i < request.body.orderList.length; i++) {
        var pid = request.body.orderList[i].productId;
        var quantity = request.body.orderList[i].quantity;
        var price=request.body.orderList[i].price;
        order.orderList.push({ pid: pid, quantity: quantity,price:price });
    }
    orderModel.save()
        .then(result => {
            console.log(result);
            //const {userId} = request.user.id
            return response.status(500).json(result);
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ err: 'Server error' });
        });
};
