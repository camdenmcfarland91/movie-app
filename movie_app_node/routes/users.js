const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const User = mongoose.model("User")


router.get("/", exports.getGenres = (req,res)=>{
    User.find()
    .then((docs)=>{
        return res.status(200).json(docs);
    })
    .catch((error)=> res.status(500).json(error));
})

router.post("/add", (req,res)=>{
    var userSchema = new User();
    userSchema.userName = req.body.userName;
    userSchema.userEmailId = req.body.userEmailId;
    userSchema.userPassword = req.body.userPassword;
    userSchema.save((err, doc)=>{
        if(!err) {
            console.log(doc);
            res.status(201).json({ message: "User added successfuly" })
        } else {
            res.status(500).json({ message: "Error adding User"})
        }
    })
})
module.exports = router;