const { ObjectId } = require('mongodb');
const mongodb = require('../data/database');
//const ObjectId = require('mongodb').ObjectId;


const getALL = async (req, res) => {
    //#swagger.tags=['users']
    const result = await mongodb.getDatabase().db().collection('users').find();
    result.toArray().then((users) => {
     res.setHeader('Content-type', 'application/json');
     res.status(200).json(users);
    });

};

const getSingle = async (req, res) => {
     //#swagger.tags=['users']
    const userID = new ObjectId(req.params.id);
const result = await mongodb.getDatabase().db().collection('users').find({ _id: userID });
result.toArray().then((users) => {
 res.setHeader('Content-type', 'application/json');
 res.status(200).json(users[0]);
});
};

const createUser = async(req,res) => {
     //#swagger.tags=['users']
    const user = {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        favoritecolor:req.body.favoritecolor,
        birthday:req.body.birthday
    };
    const response = await mongodb.getDatabase().db().collection('users').insertOne(user);
    if(response.acknowledged  > 0){
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'Some error occured while updating the user.');
    }
};

const updateUser = async(req,res) => {
     //#swagger.tags=['users']
    const userID = new ObjectId(req.params.id);
    const user = {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        favoritecolor:req.body.favoritecolor,
        birthday:req.body.birthday
    };
    const response = await mongodb.getDatabase().db().collection('users').replaceOne({ _id: userID}, user);
    if(response.modifiedCount > 0){
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'Some error occured while updating the user.');
    }
};

const deleteUser = async(req,res) => {
     //#swagger.tags=['users']
    const userID = new ObjectId(req.params.id);
    const user = {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        favoritecolor:req.body.favoritecolor,
        birthday:req.body.birthday
    };
    const response = await mongodb.getDatabase().db().collection('users').deleteOne({ _id: userID});
    if(response.deletedCount > 0){
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'Some error occured while updating the user.');
    }
};
module.exports = {
getALL,
getSingle,
createUser,
updateUser,
deleteUser
};