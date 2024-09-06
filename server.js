const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');


//dotenv config
dotenv.config();

//mongodb connection
connectDB();

//rest objects
const app = express()


//middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use('/api/v1/user', require('./routes/userRoutes'));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

// port
const port = process.env.PORT || 8080

//listen port
app.listen(port, () => {
    console.log(`server running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
        .bgCyan.white
    )
})


