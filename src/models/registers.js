const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    firstname: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    }
});


// const securePassword = async (password) => {
//     const passwordHash = await bcrypt.hash(password,10);
//     const passwordMatch = await bcrypt.compare(req.body.passwordLogin, passwordHash)
// }

userSchema.pre("save", async function (next){

    if(this.isModified("password")){
        // console.log(`текущий пароль ${this.password}`);
        this.password = await bcrypt.hash(this.password, 10);
        // console.log(`текущий пароль ${this.password}`);
    }
    next();
});

// Collection

const Register = new mongoose.model("Register", userSchema);

module.exports = Register;