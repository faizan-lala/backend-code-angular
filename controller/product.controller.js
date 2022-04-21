const { request, response } = require('express');
const productModel=require('../model/product.model');

exports.Add=(request,response)=>{
    console.log(request.body.size);
    console.log(request.body.color);
    let size=eval(request.body.size);
    let color=eval(request.body.color)
   
    productModel.create({
        name:request.body.name,
        price:request.body.price,
        description:request.body.description,
        quantity:request.body.quantity,
        discount:request.body.discount,
        rating:request.body.rating,
        brand:request.body.brand,
        
        productType:request.body.productType,
        frontImage: "https://firebasestorage.googleapis.com/v0/b/footwearshop-535ae.appspot.com/o/" + request.files[0].filename+"?alt=media&token=abcdefg",
        bottomImage: "https://firebasestorage.googleapis.com/v0/b/footwearshop-535ae.appspot.com/o/" + request.files[1].filename+"?alt=media&token=abcdefg",
        leftImage: "https://firebasestorage.googleapis.com/v0/b/footwearshop-535ae.appspot.com/o/" + request.files[2].filename+"?alt=media&token=abcdefg",
        rightImage: "https://firebasestorage.googleapis.com/v0/b/footwearshop-535ae.appspot.com/o/" + request.files[3].filename+"?alt=media&token=abcdefg",
        catId: request.body.catId,
        size:size,
        color:color

    }
    ).then(result=>{
        console.log(result);
        return response.status(200).json(result);
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({message:'Oops ! Something went e=wronr'})
    })
}

exports.viewProduct=(request,response)=>{
    productModel.find().then(result=>{
        return response.status(200).json(result);
    }).catch(err=>{
        return response.status(500).json({message:'Oops ! Something went wrong'});
    })
}

exports.showProduct=(request,response)=>{
    productModel.find({catId:request.body.catId}).then(result=>{
        return response.status(200).json(result);
    }).catch(err=>{
        return response.status(500).json({message:'Oops ! Something went wrong'});
    })
}

exports.deleteProduct=(request,response)=>{
    productModel.deleteOne({
        _id:request.body.id
    }).then(result=>{
        if(result.deletedCount){
            return response.status(202).json({message:'deleted successfully....'});
        }
        else{
            return response.status(204).json({message:'deleted failed...'});
        }
    }).catch(err=>{
        return response.status(500).json({message:'Opps ! Something went wrong...'});
    })
}

exports.updateProduct=(request,response)=>{
    let size=eval(request.body.size);
    let color=eval(request.body.color)
   
    productModel.updateOne({_id:request.body.productId },
        {
            $set:{
        
        name:request.body.name,
        price:request.body.price,
        description:request.body.description,
        quantity:request.body.quantity,
        discount:request.body.discount,
        rating:request.body.rating,
        brand:request.body.brand,
        categoryType:request.body.categoryType,
        productType:request.body.productType,
        frontImage:"http://localhost:3000/images/"+request.files[0].filename,
        bottomImage:"http://localhost:3000/images/"+request.files[1].filename,
        leftImage:"http://localhost:3000/images/"+request.files[2].filename,
        rightImage:"http://localhost:3000/images/"+request.files[3].filename,
        size:size,
        color:color,
            }
        } 

).then(result=>{
    console.log(result)
    if(result.modifiedCount){
        return response.status(202).json({message:'updated successfully....'});
    }
    else{
        return response.status(204).json({message:'updated failed...'});
    }
}).catch(err=>{
    return response.status(500).json({message:'Opps ! Something went wrong...'});
})

}
