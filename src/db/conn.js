const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Daniel:admin@cluster0.pnixtwv.mongodb.net/test?retryWrites=true&w=majority").then(() => {
    console.log(`connection successful`)
}).catch((e) => {
    console.log(`no connection`)
})
