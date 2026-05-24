import { Request, Response } from "express"; // Import necessary types from Express
import bcrypt from "bcryptjs"; // Import bcrypt for password hashing
import jwt from "jsonwebtoken"; // Import jsonwebtoken for creating JWT tokens for each user
import User from "../models/User";

// func for registering a new user
export const registerUser = async (
    req: Request,
    res: Response,
): Promise<any> => {
    try {
        // get user details that sent from the frontend
        const { username, email, password } = req.body;

        // check if the user already exists in the database
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res
                .status(400)
                .json({ message: "User already exists with this email" });
        }

        // hash the password before saving to the database
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create a new user using the User model
        const newUser = new User({
            username,
            email,
            password: hashedPassword, // save the hashed password
        });

        // save the new user to the database
        await newUser.save();

        // create a JWT token for the user
        const token = jwt.sign(
            { id: newUser._id },
            process.env.JWT_SECRET as string,
            { expiresIn: "30d" },
        );

        // save the new user to the database
        res.status(201).json({
            message: "User registered successfully",
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            token: token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error while registering user" });
    }
};

// func for logging in an existing user
export const loginUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const { email, password } = req.body;

        // check if the user exists in the database
        const user = await User.findOne({ email });

        // if user doesn't exist, return an error
        if (!user) {
            return res.status(400).json({ message: "Invalid email" });
        }

        // compare the provided password with the hashed password in the database
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        // create a JWT token for the user if all are correct
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
            expiresIn: "30d",
        });

        return res.status(200).json({
            message: "Login successful",
            _id: user._id,
            username: user.username,
            email: user.email,
            token: token,
        });
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ message: "Server error while logging in user" });
    }
};
