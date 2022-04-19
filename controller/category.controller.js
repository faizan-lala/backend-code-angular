const { request, response } = require("express");
const categoryModel = require('../model/categories.model');

exports.Add = (request, response) => {
    categoryModel.create({
        categoryName: request.body.categoryName,
        categoryImage: "https://firebasestorage.googleapis.com/v0/b/footwearshop-535ae.appspot.com/o/" + request.file.filename+"?alt=media&token=abcdefg"
    }).then(result => {
        return response.status(200).json(result);
    }).catch(err => {
        return response.status(500).json({ err: 'Oops! Something went wrong' });
    })

}

exports.viewCategory = (request, response) => {
    categoryModel.find().then(result => {
        return response.status(200).json(result);
    }).catch(err => {
        return response.status(500).json({ err: 'Oops! Something went wrong' })
    })
}

exports.deleteCategory = (request, response) => {
    categoryModel.deleteOne({ _id: request.body.id }).then(result => {
        if (result.deletedCount)
            return response.status(202).json({ message: 'deleted successful....' });
        else
            return response.status(204).json({ message: 'not deleted...' });
    }).catch(err => {
        return response.status(500).json({ message: 'Oops! Something went wrong...' });
    })
}


exports.deleteCategory = (request, response) => {
    categoryModel.deleteOne({ _id: request.body.id }).then(result => {
        if (result.deletedCount)
            return response.status(202).json({ message: 'deleted successful....' });
        else
            return response.status(204).json({ message: 'not deleted...' });
    }).catch(err => {
        return response.status(500).json({ message: 'Oops! Something went wrong...' });
    })
}

exports.updateCategory = (request, response) => {
    categoryModel.updateOne({ _id: request.body.id },
        {
            $set: {
                categoryName: request.body.categoryName,
                categoryImage: "http://localhost:3000/images/" + request.file.filename
            }
        }).then(result => {
            if (result.modifiedCount)
                return response.status(202).json({ message: 'updated successful....' });
            else
                return response.status(204).json({ message: 'not updated...' });
        }).catch(err => {
            return response.status(500).json({ message: 'Oops! Something went wrong...' });
        })
}

