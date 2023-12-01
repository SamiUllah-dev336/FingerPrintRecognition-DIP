import { View, Text, Image } from "react-native";
import { StudentsStyles } from "../style/styles";
import { GlobalContext } from "../StateManagement/GlobalProvider";
import React from "react";
import { CustomText } from "../Components/CustomText";

export default function HomeScreen({ navigation }) {
  // state management
  const { GlobalName, GlobalEmail, GlobalPhone, GlobalStudentId } =
    React.useContext(GlobalContext);

  return (
    <View style={StudentsStyles.container}>
      <View style={StudentsStyles.main}>
        <CustomText heading="Name" content={GlobalName.name} />
        <CustomText heading="Student ID" content={GlobalStudentId.id} />
        <CustomText heading="Phone" content={GlobalPhone.phone} />
        <CustomText heading="Email" content={GlobalEmail.email} />
      </View>
    </View>
  );
}
