const express = require('express');

const app = express(); // Now you excess all features of express

// Ex: get, post, put, delete
app.use(express.json()); // Automatically parses incoming JSON requests

app.use(function(req,res,next){
    console.log('Hi, I am Custum Middlewares');
    next();
})

let courses =[
    {id:1 , name: 'JavaScript'},
    {id:2 , name: 'Java'},
    {id:3 , name: 'Nodejs'}
]


app.get('/', (req,res)=> {
    res.send('Hi, You are at Home Page');
})

app.get('/explore', (req,res)=> {
    res.send('Hi, You are at Expore Page, BOOM BOOM BOOM');
})

app.get('/login', (req,res)=> {
    res.send('----- You come to Login Page ----- ');
})

app.get('/courses',(req,res)=> {
    res.send(courses)
})

app.post('/courses',(req,res) =>{
    const course ={
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course)
})

// update the data
app.put('/courses/:courseName', (req,res) => {
    let course = courses.find((course) => course.name === req.params.courseName);
    if(!course){
        res.status(404).send('This courses is not valid or added in the courses');
    }
    course.name = req.body.name;
    res.send(course);
})

//Delete the data
app.delete('/courses/:id',(req,res)=>{
    let course = courses.find((course) => course.id === parseInt(req.params.id))
    if(!course){
        res.status(404).send('This cours is not added in the courses');
    }

    const index = courses.indexOf(course);

    // use slice
    courses.splice(index,1);
    res.send(course);
})

// Route Parameters
app.get(`/courses/:id`,(req,res) =>{
    let course = courses.find((course)=> course.id === parseInt(req.params.id));

    if(!course) res.status(404).send('This courses is not addend in the url');
    // res.send({id: course.id});
    // res.send(`${course.id}`); // Now the id is print on the screen
    res.send(course);
})

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`Server Running on http:localServer:${port}`)); 