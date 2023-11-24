import axios from "axios";

export const AddStudentApi = async (name, sid, email, phone) => {
  try {
    const res = await axios.post("http://192.168.10.9:4000/Student/Api", {
      name: name,
      sid: sid,
      email: email,
      phone: phone,
    });
    console.log(res.data);
  } catch (error) {
    console.log("what is error", error);
  }
};
