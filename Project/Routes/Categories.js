const express = require('express');

const router = express.Router();
const {validate,Category} = require('../model/categoryModel')


// const categories = [
//     {id: 1, name: "courses"},
//     {id: 2, name: "mocktest"},
//     {id: 3, name: "resourses"},
// ]

router.get('/api/categories', async(req,res)=>{
    let categories = await Category.find();
    res.send(categories);
});

router.post('/api/categories',async (req,res) => {

const {error} = validate(req.body);
if(error) return res.status(400).send(error.details[0].message);

    const category = new Category({
        name: req.body.name
    })
    await category.save();
    res.send(category);
})

router.put('/api/categories/:id',async(req,res)=>{

    const {error} = validat(req.body)
    if(error) res.status(400).send(error.details[0].message)
    
    const category = await Category.findByIdAndUpdate(req.params.id, {name: req.body.name}, {new: true})

    if(!category) return res.status(404).send('The Category with the given Id will not found');
    res.send(category);
})

router.delete('/api/categories/:id',async(req,res)=>{
    const category = await Category.findByIdAndDelete(req.params.id);
    if(!category) return res.status(404).send('The Category with the given Id will not found');

    res.send(category);
})

router.get('/api/categories/:id',async(req,res)=>{
    const category = await Category.findById(req.params.id)
    if(!category) return res.status(404).send('The Category with the given Id will not found');

    //if(error) return res.status(400).send(error.details[0].message);
    res.send(category);
})


module.exports = router;