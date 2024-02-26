const express = require('express')
const productRoutes = require('./Routes/productRoutes')
const adminRoutes = require('./Routes/adminRoutes')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
app.use(express.json())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

mongoose.connect(process.env.MONGO_URI)
    .then(app.listen(process.env.PORT, () => {
        console.log('server started on port ' + process.env.PORT)
    }))
    .catch(err => console.error('Error connecting to MongoDB:', err));


app.use('/product', productRoutes)
app.use('/admin', adminRoutes)
