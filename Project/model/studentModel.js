const mongoose = require('mongoose');
const Joi = require('joi');

mongoose.connect('mongodb://127.0.0.1/newProject')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const studentSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3, maxlength: 30},
    isEnrolled: {type: Boolean, default: false},
    phone: {type: String, required: true, length:10}
})

const Student = mongoose.model('Student', studentSchema);

// Updated validateData function
function validateData(student) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        isEnrolled: Joi.boolean(),
        phone: Joi.string().length(10).required(),
    });

    return schema.validate(student); // Use schema.validate() instead of Joi.validate()
}


exports.Student = Student;
exports.validate = validateData;