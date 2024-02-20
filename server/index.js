const express = require('express')
const productRoutes = require('./Routes/productRoutes')
require('dotenv').config()

const app = express()

app.use('/product', productRoutes)

app.listen(process.env.PORT, () => {
    console.log('server started on port ' + process.env.PORT)
})