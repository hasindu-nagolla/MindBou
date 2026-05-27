import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    // connect author to User model
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User", // reference to User model
    },

},
    {
        timestamps: true, // automatically add createdAt and updatedAt fields.
    })

const Article = mongoose.model('Article', articleSchema);
export default Article;