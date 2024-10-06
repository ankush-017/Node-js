const mongoose = require('mongoose');
const Joi = require('joi');


mongoose.connect('mongodb://127.0.0.1/newProject')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const categorySchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3, maxlength: 30},
})

const Category = mongoose.model('Category', categorySchema);

// Updated validateData function
function validateData(category) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });

    return schema.validate(category); // Use schema.validate() instead of Joi.validate()
}

exports.Category = Category;
exports.validate = validateData;