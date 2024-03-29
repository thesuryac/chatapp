import User from "../Models/user.model.js";
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const loginUser = async(req,res)=>{
    try {

        const {username,password} = req.body;

        const user = await User.findOne({username});
        
        const isPasswordCorrect = await bcrypt.compare(password,user?.password || "");

    if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid username or password"});
        }

        generateTokenAndSetCookie(user._id,res);


        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilePic:user.profilePic,
        });
        
    } catch (error) {
        res.status(500).json({error:"Internal server login error"});
    }
}

export const logout =(req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"logout successfully"});
    } catch (error) {
        res.status(500).json({error:"Internal server error"})
    }
}
export const signup =async (req,res)=>{
    try {
        const{fullName,username,password,confirmPassword,gender} =req.body;
        if(password !== confirmPassword) {
            return res.status(400).json({error:"Password don't match"})
        }
        const user = await User.findOne({username});
        
        if(user){
            return res.status(400).json({error:"User already exists"});
        }

        const boyProfilePics = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const salt = await bcrypt.genSalt(10);


        const hashedPassword = await  bcrypt.hash(password,salt)

        const newUser = new User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePic:gender=== "male"? boyProfilePics:girlProfilePic,
        });

        if(newUser){
            
            generateTokenAndSetCookie(newUser._id,res);
            await newUser.save();
    
            res.status(201).json({_id:newUser._id,
            fullName:newUser.fullName,
            username:newUser.username,
            profilePics:newUser.profilePic})

        }
        else{

            res.status(400).json({error:"invalid user data"})
        }


    } catch (error) {
       
        res.status(500).json({error:"Internal here server error"})
        
    }
    console.log("signup")
   
}