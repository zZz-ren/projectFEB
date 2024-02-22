const express = require('express')
const productRoutes = require('./Routes/productRoutes')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
app.use(express.json())
mongoose.connect(process.env.MONGO_URI)
    .then(app.listen(process.env.PORT, () => {
        console.log('server started on port ' + process.env.PORT)
    }))
    .catch(err => console.error('Error connecting to MongoDB:', err));


app.use('/product', productRoutes)

