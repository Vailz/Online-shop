const express = require("express")
const path = require("path")
const app = express()
const bcrypt = require("bcryptjs")

require("./db/conn.js")
const Register = require("./models/registers")

const port = process.env.PORT || 3000

const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views")

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static(static_path))
app.set("view engine", "hbs")
app.set("views", template_path)

app.get("/", (req, res) => {
    res.render("main")
})

app.get("/main", (req, res) => {
    res.render("main")
})

app.get("/login", (req, res) => {
    res.render("login")
})

app.get("/registration", (req, res) => {
    res.render("registration")
})

// Registration and Login
app.post("/main", async (req, res) => {

    try {
        const password = req.body.password;

        const emailReg = req.body.email;
const useremail2 = await Register.findOne({email:emailReg})

if(await Register.findOne({email:emailReg}))
{
    res.send("Такой пользователь уже зарегистрирован")
}
else {
        const registerUser = new Register({
            firstname: req.body.firstname,
            email: req.body.email,
            password: req.body.password
        })
        const registered = await registerUser.save();
    res.status(201).render("main");
}

    } 
    catch (error) {
        try {
        const passwordLogin = req.body.passwordLogin
        const emailLogin = req.body.emailLogin
        const useremail = await Register.findOne({email:emailLogin})

        const isMatch = await bcrypt.compare(passwordLogin, useremail.password);
            if (isMatch) {
            res.status(201).render("main")
        } 
        else {
            res.send("Пароль неверный")
        }}
        catch (error2){
            res.status(400).send("Такой пользователь не зарегистрирован")
        }
}
})

// //Registration
// app.post("/main", async (req, res) => {
//     try{
//         const registerUser = new Register({
//             firstname: req.body.firstname,
//             email: req.body.email,
//             password: req.body.password,
//         })
//         const registered = await registerUser.save();
//         res.status(201).render("main");
//     }catch{
//         res.status(400).send("Error")
//     }
// });

// //Login
// app.post("/main", async (req, res) => {
//     try{
//         const emailLogin = req.body.emailLogin;
//         const passwordLogin = req.body.passwordLogin;
        
//         const registerUser = new Register({
//             firstname: req.body.firstname,
//             email: req.body.email,
//             password: req.body.password,
//         })

//         const useremail = await Register.findOne({email:emailLogin});
        
//             if (useremail.password === passwordLogin) {
//             res.status(201).render("main")
//         } else {
//             res.send("Пароль неверный")
//         }
//     }catch (error){
//             res.status(400).send("Такой пользователь не зарегистрирован")
//         }
//     })

app.listen(port,() => {
    console.log(`server is running at port on ${port}`)
});

