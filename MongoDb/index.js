const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then(()=> console.log('Connection sucessfully Connected'))
.catch((err)=> console.log('Does not connected Found error' + err));

// Scheme(A Pattern in which you store the databas OR This schema describes the structure of your documents in the MongoDB collection.)

// The validate keyword is used to apply a custom validation function 
// on the tags field, which is an array
const courseScheme = new mongoose.Schema({
    name: {type:String, required:true, minlength:5, maxlength:200},
    tags: { type: Array, validate : {
        validator : function(tags){
            return tags.length > 2
        }
    }},
    creator: {
        type:String,
        required:true,
        enum: ["DSA","WEB_-D","DBMS","OS","ComputerNetwork"]
    },
    isPublished: {type:Boolean, required:false},
    publishedDate: {type:Date, default:Date.now},
    rating: {type:Number, required: function(){return this.isPublished;}},
})

const Course = mongoose.model('Course',courseScheme);

/*Collection Creation: In the example above, MongoDB creates the courses
 collection when the course.save() method is called, if it doesn’t exist.*/

 // {Important => whent not all required data create in createCourse then VALIDATION_ERROR came}
// async function createCourse(){
//     const course = new Course({
//         name: 'Python',

//     })

//     const result = await course.save();
//     console.log(result);
// }

async function createCourse(){
    const course = new Course({
        name: 'Python',
        tags: ['Express','mongoDb'], // Custom validator
        creator: 'DSA',
        isPublished: false,
        rating: 4.9,
    })

   try{

    // Also use BuiltIn function ...
    // cours.Validate();
       //await course.validate(); // only tell validate or not

    // This is good to check add or not in mongo DB
        const result = await course.save();
        console.log(result);
   }
   catch(error){
        // console.log(error.message);
     
     // Error Validators
     /*Structure of error.errors:
     
error.errors is usually an object, where each key is the name of a field that failed validation.
The value corresponding to each key is typically an Error object that contains additional details, 
such as the error message and the type of validation that failed.*/
     for(field in error.errors){
        console.log(error.errors[field]);
     }
   }
}

// createCourse();

// Query For Document

// Comparison Operator
// eq: equal
// gt: greater than
// gte: greater than equal
// lt: less than
// lte: less than equal

// in
// not in

// LOGICAL Operator
// or
// and


// async function getCourse(){
//     const result = await Course.find({rating: {$gte : 3}}).select({name: 1,publishedDate: 1})

//     console.log(result);
// }

// async function getCourse(){
//     const result = await Course.find({rating: {$in : [4.5,4.1,3.5]}}).select({name: 1,publishedDate: 1})
//     .and([{creator: 'Ankush Kumar'},{rating: 4.1}])

//     console.log(result);
// }

// createCourse();

// update Database

// async function updateDatabase(id){

//     let course = await Course.findById(id)
//     if(!course){
//         return;
//     }

//     course.name = 'Python';
//     course.creator = 'Ankit Srivastav';

//     const updateDatabase = await course.save();

//     console.log('updateDatabase');

// }


// updateDatabase("66edb8c2807765a9cdc0521b");


// Delete Course

// async function deleteDatabase(id){
//     let course = await Course.findByIdAndDelete(id);

//     console.log(course);

// }

// deleteDatabase("66edb8c2807765a9cdc0521b")



// {Important  Data_validatation};

createCourse();

