const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // Add this line

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

userSchema.pre("save", async function(next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.generateToken = async function() {
    try {
        return jwt.sign(
            {
                UserId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin,
            },
            process.env.JWT_SECRETKEY,
            {
                expiresIn: "1d",
            }
        );
    } catch (error) {
        console.error("Error generating token", error);
        throw error;
    }
};

userSchema.methods.passcompare = async function(password){
    try {
        const user = await bcrypt.compare(password,this.password);
        return user;
    } catch (error) {
        console.log(error);
    }
    
};

const User = mongoose.model('User', userSchema);

module.exports = User;
