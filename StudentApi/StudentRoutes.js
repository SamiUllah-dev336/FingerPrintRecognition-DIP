const express = require("express");
const StudentController = require("./StudentController");
const StudentRoutes = express.Router();

StudentRoutes.route("/")
  .get(StudentController.getStudents)
  .post(StudentController.addStudent);

StudentRoutes.route("/:id")
  .get(StudentController.getStudent)
  .patch(StudentController.updateStudent)
  .delete(StudentController.deleteStudent);

module.exports = StudentRoutes;
