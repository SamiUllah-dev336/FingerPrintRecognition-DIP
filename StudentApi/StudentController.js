const Student = require("./StudentModel");

exports.getStudents = async (req, res) => {
  try {
    const Students = await Student.find();
    res.status(200).json({
      status: "success",
      Data: Students,
    });
  } catch (err) {
    res.status(401).json({
      status: "error",
      error: err,
    });
  }
};

exports.getStudent = async (req, res) => {
  try {
    const findStudent = await Student.findById(req.params.id);
    res.status(200).json({
      status: "success",
      Data: findStudent,
    });
  } catch (err) {
    res.status(401).json({
      status: "error",
      error: err,
    });
  }
};

exports.addStudent = async (req, res) => {
  try {
    const postStudent = await Student.create(req.body);
    res.status(200).json({
      status: "success",
      Data: postStudent,
    });
  } catch (err) {
    res.status(401).json({
      status: "error",
      error: err,
    });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: "success",
      Data: updatedStudent,
    });
  } catch (err) {
    res.status(401).json({
      status: "error",
      error: err,
    });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const delStudent = await Student.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      Data: null,
    });
  } catch (err) {
    res.status(401).json({
      status: "error",
      error: err,
    });
  }
};
