const { ObjectId } = require('mongodb');
const mongodb = require('../data/database');
const objectid = ('mongodb').objectid;

const getALL = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('users').find();
    result.toArray().then((users) => {
     res.setHeader('Content-type', 'application/json');
     res.status(200).json(users);
    });

};

const getSingle = async (req, res) => {
    const userID = new ObjectId(req.params.id);
const result = await mongodb.getDatabase().db().collection('users').find({ _id: userID });
result.toArray().then((users) => {
 res.setHeader('Content-type', 'application/json');
 res.status(200).json(users[0]);
});
};

module.exports = {
getALL,
getSingle
};