import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import authRouter from "./routes/auth.js";

const app = express()


app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors())

app.use('/posts', postRoutes); 
app.use("/user", authRouter);

app.get("/", (req, res) => {
	res.send("Hail to Partups API");
});

const mongoURI="mongodb://localhost:27017/Partups?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const port = 5000

 mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => app.listen(port, () => console.log(`Partups app listening at http://localhost:${port}`)))
 .catch((error) => console.log(`${error} did not connect`));
