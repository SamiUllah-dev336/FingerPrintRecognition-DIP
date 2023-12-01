import { View, Text } from "react-native";
import { StudentsStyles } from "../style/styles";

export const CustomText = ({ heading, content }) => {
  if (heading == "Email") {
    return (
      <View
        style={{
          padding: 10,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text style={StudentsStyles.heading}>{heading}</Text>
        <Text style={StudentsStyles.content}>{content}</Text>
      </View>
    );
  } else {
    return (
      <View style={StudentsStyles.OuterView}>
        <Text style={StudentsStyles.heading}>{heading}</Text>
        <Text style={StudentsStyles.content}>{content}</Text>
      </View>
    );
  }
};
