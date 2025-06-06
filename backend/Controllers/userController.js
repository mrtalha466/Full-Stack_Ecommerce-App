import validator from "validator"
import bcrypt from "bcrypt"
import userModel from "../Models/userModel.js";
import jwt from "jsonwebtoken"
import "dotenv/config"



const createToken = (id) => {
    return jwt.sign({ id },
        process.env.JWT_SECRET,
        { expiresIn: "48h" }
    )
}

//route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(400).json({ success: false, message: "User dosen't exists" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = createToken(user._id)
            res.json({ success: true, token })
        }
        else {
             res.json({ sucess: false, message: "Invalid email or password" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message });
    }
}

//route for user register
const registerUser = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        // checing user already exist or !
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        // validatating email format &password

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Enter a valid email" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Password must be at least 8 characters long" });
        }

        // hashing user passward

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)
        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message });
    }
}

//route for adminLogin
const adminLogin = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {

            const token = jwt.sign(email + password,process.env.JWT_SECRET);
            res.json({ sucess: true, token })

        } else {
            res.json({ sucess: false, message: "Invalid Credientails" })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message });
    }
}


export { loginUser, registerUser, adminLogin }