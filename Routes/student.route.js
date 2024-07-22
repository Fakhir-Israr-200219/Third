const express = require("express");
const { addStudent, getAllStudent, getStudentById, deleteStudent, updateStudent } = require("../Controller/student.controller");

const router = express.Router();

router.post("/",addStudent);
router.get("/",getAllStudent);
router.get("/:id",getStudentById);
router.put("/:id",updateStudent);
router.delete("/:id",deleteStudent);

module.exports = router