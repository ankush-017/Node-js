const express = require('express');
const app = express();

// Custom middleware function
const logRequestDetails = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
};

const greet = (req,res,next) => {
    console.log('Hello, Good Night , I am custum Middleware');
    next();
}
// Use the middleware for all routes
app.use(logRequestDetails);
app.use(greet);

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/about', (req, res) => {
    res.send('About page');
})

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});