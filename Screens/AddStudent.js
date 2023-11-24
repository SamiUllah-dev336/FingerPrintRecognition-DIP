import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import axios from "axios";
import { AddStudstyles, styles } from "../style/styles";
import { TextField } from "../Components/textField";
import React, { useState } from "react";
//import ButtonLarge from "../Components/ButtonLarge";

import { AddStudentApi } from "../AxiosFetchAPIS/AddStudentApi";
import ButtonLarge from "../Components/ButtonLarge";

export default function AddStudent({ navigation }) {
  const [Name, setName] = useState("");
  const [studentId, setStudentID] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");

  const Add = () => {
    AddStudentApi(Name, studentId, Email, Phone);
  };

  // for phone number
  const handleTextChange = (newText) => {
    // Remove any non-numeric characters from the input
    const numericValue = newText.replace(/[^0-9]/g, "");
    const phone = numericValue.slice(0, 11);
    setPhone(phone);
  };
  const handleTextChange1 = (newText) => {
    // Remove any numeric from the input
    const numericValue = newText.replace(/[^A-Z-' ']/g, "");
    setName(numericValue);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={AddStudstyles.text}>Name</Text>
      <TextField
        label={"e.g.SAMI ULLAH"}
        value={Name}
        onChangeText={handleTextChange1}
      />

      <Text style={AddStudstyles.text}>ID</Text>
      <TextField
        label={"e.g.sp21-bcs-088"}
        value={studentId}
        onChangeText={(studentId) => setStudentID(studentId)}
      />

      <Text style={AddStudstyles.text}>Email</Text>
      <TextField
        label={"e.g.sami686@gmail.com"}
        value={Email}
        onChangeText={(Email) => setEmail(Email)}
      />

      <Text style={AddStudstyles.text}>Phone</Text>
      <TextField
        label={"e.g.03089789783"}
        value={Phone}
        onChangeText={(Phone) => setPhone(Phone)}
        keybtype={"number-pad"}
      />

      <ButtonLarge
        head="Add"
        navigation={navigation}
        ChangeScreen={"ScanFinger"}
        func={Add}
      />
    </KeyboardAvoidingView>
  );
}
