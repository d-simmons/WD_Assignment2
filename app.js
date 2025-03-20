const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

const postsRoute = require('./routes/posts');
const authRoute = require('./routes/auth');

app.use('/posts', postsRoute);
app.use('/user', authRoute);

mongoose.connect(process.env.DB_CONNECTOR).then(() => {
    console.log('MongoDB Connected')
})

app.listen(3000, () => {
    console.log('Server is running')
})