import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// import authRoutes from './routes/auth.js';

import postRoutes from './routes/posts.js';
const app = express()
// const PORT = process.env.PORT || 5000

//  app.use(express.json())
 
 //Available routes
// app.use('/api/auth', authRoutes);

app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors())

app.use('/posts', postRoutes); 
app.get("/", (req, res) => {
	res.send("Hello to Partups API");
});

const mongoURI="mongodb://localhost:27017/Partups?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const port = 5000



 mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => app.listen(port, () => console.log(`Partups app listening at http://localhost:${port}`)))
 .catch((error) => console.log(`${error} did not connect`));


// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Partups app listening at http://localhost:${port}`) ))
//   .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);

// const connectToMongo =require('./db');
// const express = require('express')
// const bodyParser =require('body-parser') ;

// connectToMongo();
// var cors = require('Cors')
// import postRoutes from './routes/posts.js';
// const app = express()
// // const PORT = process.env.PORT || 5000
//  const port = 5000

//  app.use(cors())
// app.use(express.json())

// //Available routes
// app.use('/api/auth', require('./routes/auth'))
// app.use('/api/posts', require('./routes/posts'))
// app.use('/posts', postRoutes);

// app.use(bodyParser.json({limit: "30mb", extended:true}));
// app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));


// app.listen(port, () => {
//   console.log(`Partups app listening at http://localhost:${port}`)
// })
// // mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => app.listen(PORT, () => console.log(`Partups app listening at http://localhost:${port}`) ))
// //   .catch((error) => console.log(`${error} did not connect`));

// // mongoose.set('useFindAndModify', false);