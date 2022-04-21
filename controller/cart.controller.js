const { response, request } = require("express");
const cartModel=require('../model/cart.model');
// http://localhost:3000/cart/add-to-cart
exports.addToCart=async (request,response)=>{
 let uid=request.body.uId;
 let pid=request.body.pId;

let cart=await cartModel.findOne({userId:uid});

if(!cart){
    cart=new cartModel();
    cart.userId=uid;

}
cart.productlist.push(pid);
cart.save().then(result=>{
   
    return response.status(200).json(result);
}).catch(err=>{
    return response.status(500).json({message:"not added to cart"});
})

}
// http://localhost:3000/cart/view
exports.viewCart=(request,response)=>{
    let uId=request.body.uId;
    cartModel.findOne({userId:uId}).populate("productlist").then(result=>{
        return response.status(200).json(result);
    }).catch(err=>{
        return response.status(500).json({message:'Oops ! Something went wrong'});
    })
}

// http://localhost:3000/cart/delete-cart
exports.deleteCart=(request,response)=>{
    cartModel.updateOne({userId:request.body.uId},{
        $pullAll:{
            productlist:[{
                _id:request.body.pId
            }]
        }
    }
        
        ).then(result=>{
            return response.status(200).json({message:'Deleted successfuly.....'});
        }).catch(err=>{
            return response.status(500).json({message:'Opps ! Something went wrong'});
        })
}
