const productModel = require('../models/productModel');

function getAllCourse(req, res) {
    const course = productModel.getAllCourse();
    res.json(course);
}

function createCourse(req, res) {
    const newCourse = productModel.createCourse(req.body.name);
    res.status(201).json(newCourse);
}

function updateCourse(req, res) {
    const updatedCourse = productModel.updateCourse(parseInt(req.params.id), req.body.name);
    if (!updatedCourse) return res.status(404).send('Course not found.');
    res.json(updatedCourse);
}

function deleteCourse(req, res) {
    const success = productModel.deleteCourse(parseInt(req.params.id));
    if (!success) return res.status(404).send('Course not found.');
    res.json({ message: 'Course deleted successfully.' });
}

module.exports = {
    getAllCourse,
    createCourse,
    updateCourse,
    deleteCourse
};
