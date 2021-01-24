import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes)

app.get('/', (req, res) => {
    res.send('Welcome to memories API');
})

const port  = process.env.port || 5000;
const url = 'mongodb+srv://chuvetha:srabc143@memory.obdez.mongodb.net/fsdatabase'


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`Server running on ${port}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)