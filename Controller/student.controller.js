const studentModel = require("../Model/student.model");
const asyncHandler = require("express-async-handler");
const {ObjectId} = require("mongodb")

const getAllStudent = asyncHandler(async (req, res) => {
    const studetnts = await studentModel.find();
    res.status(200).json(studetnts);
})

const getStudentById = asyncHandler(async (req, res) => {
    const student = await studentModel.findById(req.params.id);
    if(!student){
        res.status(404);
        throw new Error("student not found");
    }
    res.status(200).json(student);
})

const addStudent = asyncHandler(async (req, res) => {
    const student = await studentModel.create(req.body);
    res.status(201).json(student);
})

const updateStudent = asyncHandler(async (req, res) => {
    const stu = await studentModel.findById(req.params.id);
    if (!stu) {
        res.status(404);
        throw new Error("student not found");
    }
    const updateStudent = await studentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updateStudent);
})

const deleteStudent = asyncHandler(async (req, res) => {
    const stu = await studentModel.findById(req.params.id);
    if (!stu) {
        res.status(404)
        throw new Error("Student not found");
    }
    await studentModel.deleteOne(new ObjectId(req.params.id));
    res.status(200).json(stu);
})

module.exports = {
    getAllStudent,
    deleteStudent,
    updateStudent,
    addStudent,
    getStudentById
}
