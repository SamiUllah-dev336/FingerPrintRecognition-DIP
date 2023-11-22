import { View, Text, TouchableOpacity, Alert } from "react-native";
import { AddStudstyles, styles } from "../style/styles";
import { TextField } from "../Components/textField";
import React, { useState } from "react";
import ButtonLarge from "../Components/ButtonLarge";

// state management
import { GlobalContext } from "../StateManagement/GlobalProvider";

export default function AddStudent({ navigation }) {
  const [Name, setName] = useState("");
  const [studentId, setStudentID] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");

  // For contect API
  // const [GlobalName, GlobalSetName] = React.useContext(GlobalContext);
  // const [GlobalStudentId, GlobalSetStudentID] = React.useContext(GlobalContext);
  // const [GlobalPhone, GlobalSetPhone] = React.useContext(GlobalContext);
  // const [GlobalEmail, GlobalSetEmail] = React.useContext(GlobalContext);

  // for phone number
  const handleTextChange = (newText) => {
    // Remove any non-numeric characters from the input
    const numericValue = newText.replace(/[^0-9]/g, "");
    setPhone(numericValue.slice(0, 11));
  };
  const handleTextChange1 = (newText) => {
    // Remove any numeric from the input
    const numericValue = newText.replace(/[^A-Z-' ']/g, "");
    setName(numericValue);
  };

  //   const disab = () => {
  //     return !Name || !Email || !Phone || !studentId;
  //   };

  //   if (disab()) {
  //     Alert.alert("Fields are empty");
  //     return;
  //   } else if (Phone.length < 11) {
  //     Alert.alert("Number Length must be 11");
  //     return;
  //   }

  return (
    <View style={styles.container}>
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
        onChangeText={handleTextChange}
        keybtype={"number-pad"}
      />

      <ButtonLarge
        head="Add"
        navigation={navigation}
        ChangeScreen="ScanFinger"
      />
    </View>
  );
}
