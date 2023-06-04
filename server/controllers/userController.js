// import userModel
const userModel = require('../models/userModel')

const signup = async function (req,res){
    try{
        let data = req.body;
        let {name,email,password} = data;
        if(!data) return res.status(400).send({status:false, msg:'insert data'})
        if(!name) return res.status(400).send({status:false, msg:'insert name'})
        if(!email) return res.status(400).send({status:false, msg:'insert email'})
        if(!password) return res.status(400).send({status:false, msg:'insert password'})
        let userData = await userModel.create(data);
        res.status(201).send({ status: true, message: "user Successfully created", data: userData })
    }
    catch(error){
        return res.status(500).send({status:false,msg:'server error'})
    }
}
module.exports.signup=signup;


const getUser = async function(req,res){
    try{
        const users = await userModel.find({isDeleted:false})
        if(users.length==0) return res.status(200).send({status:true,msg:'Not a single user exits'})
        return res.status(201).send({ status: true, data: users })
    }
    catch(error){
        return res.status(500).send({status:false,msg:'server error'})
    }
}
module.exports.getUser=getUser;

const updateUser = async function(req,res){
    try{
        let userId = req.params.id; // get user id from paarams
        let data = req.body;
        if(!data) return res.status(400).send({status:false, msg:'insert data'})
        let {name,email,password} = data;
        // construct the update object
        let update ={};
        if(name) update.name=name;
        if(email) update.email=email;
        if(password) update.password=password;
        // find user and update
        let user = await userModel.findByIdAndUpdate(userId,update,{new:true})
        return res.status(200).send({status:true,msg:user})
    }
    catch(error){
        return res.status(500).send({status:false,msg:'server error'})
    }
}
module.exports.updateUser=updateUser;

const deleteUser = async function (req,res){
    try{
        let userId = req.params.id; // get user id from paarams
        let user = await userModel.findByIdAndUpdate(userId,{isDeleted:true},{new:true})
        return res.status(200).send({status:true,msg:user})
    }
    catch(error){
        return res.status(500).send({status:false,msg:'server error'})
    }
}
module.exports.deleteUser=deleteUser;
