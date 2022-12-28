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

app.get("/contact", (req, res) => {
    res.render("contact")
})

app.get("/aboutus", (req, res) => {
    res.render("aboutus")
})

app.get("/return", (req, res) => {
    res.render("return")
})

app.get("/delivery", (req, res) => {
    res.render("delivery")
})

app.get("/questions", (req, res) => {
    res.render("questions")
})

app.get("/privacypolicy", (req, res) => {
    res.render("privacypolicy")
})

app.get("/contractoffer", (req, res) => {
    res.render("contractoffer")
})

app.get("/sproduct", (req, res) => {
    res.render("sproduct")
})

app.get("/sproduct_2", (req, res) => {
    res.render("sproduct_2")
})

app.get("/sproduct_3", (req, res) => {
    res.render("sproduct_3")
})

app.get("/newclo", (req, res) => {
    res.render("newclo")
})

app.get("/saleclo", (req, res) => {
    res.render("saleclo")
})

app.get("/sproduct_4", (req, res) => {
    res.render("sproduct_4")
})

app.get("/sproduct_5", (req, res) => {
    res.render("sproduct_5")
})

app.get("/sproduct_6", (req, res) => {
    res.render("sproduct_6")
})

app.get("/sproduct_7", (req, res) => {
    res.render("sproduct_7")
})

app.get("/sproduct_8", (req, res) => {
    res.render("sproduct_8")
})

app.get("/sproduct_9", (req, res) => {
    res.render("sproduct_9")
})

app.get("/sproduct_10", (req, res) => {
    res.render("sproduct_10")
})

app.get("/sproduct_11", (req, res) => {
    res.render("sproduct_11")
})

app.get("/sproduct_12", (req, res) => {
    res.render("sproduct_12")
})

app.get("/allclo", (req, res) => {
    res.render("allclo")
})

app.get("/cart", (req, res) => {
    res.render("cart")
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

