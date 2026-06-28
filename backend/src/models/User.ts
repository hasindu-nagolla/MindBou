// User Model using Mongoose

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        profileImage:{
            type: String,
            default: "",
        },
        bio:{
            type: String,
            default: "",
        }
    },
    {
        timestamps: true, // automatically add createdAt and updatedAt fields.
    },
);

// Create and export the User model
const User = mongoose.model("User", userSchema);
export default User;
