const express = require('express');
const categories = require('./Routes/Categories')
const student = require('./Routes/Students.js')
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://127.0.0.1/newProject')
.then(() => console.log('Successfully connected'))
.catch((err) => console.log('Does not connected Successfully Error '+err));

app.use(express.json());

app.use(categories);
app.use('/api/student',student);



const port = process.env.PORT || 3000;

app.listen(port,()=>console.log(`listening on port ${port}`));