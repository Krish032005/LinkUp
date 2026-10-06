const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function Register(req,res){
    const {username, email, password } = req.body;

    if(!username || !email || !password){
        return res.status(400).json({ message : "All fields are required !!"});
    }

    const userExists = await userModel.findOne({email});

    if(userExists){
        return res.status(400).json({
            message : "User Already exists !!"
        });
    }

    const hash = await bcrypt.hash(password,10);

    const user = await userModel.create({
        username,
        email,
        password : hash
    })

    const token = jwt.sign({
        id : user._id
    }, process.env.JWT_SECRET);

    res.cookie("token",token);

    res.status(200).json({
    message : "User created successfully !!",
    user,
   })
    




}

async function Login(req,res){

    const {email, username, password} = req.body;

    if( !username || !email || !password){
        return res.status(400).json({
            message : "Please Enter the Credentials !!"
        })
    }
    const user = await userModel.findOne({email});

    if(!user){
        return res.status(400).json({
            message : "User Doesn't Exists !!"
        })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if(!isPasswordCorrect){
        return res.status(409).json({
            message : "Incorrect !!"
        })
    }

    const token = jwt.sign({
        id : user._id
    }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(200).json({
        message : "Login successful ",
        user
    })


}


module.exports= {Register, Login};