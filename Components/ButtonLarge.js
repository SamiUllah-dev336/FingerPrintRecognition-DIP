import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ButtonLarge({ head, navigation, ChangeScreen, func }) {
  const button = {
    backgroundColor: head == "Student Detail" ? "purple" : "lightblue",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
    width: "85%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
  };
  const text = {
    fontFamily: "Poppins",
    color: head == "Student Detail" ? "white" : "black",
    fontSize: 20,
  };

  if (head == "Add") {
    return (
      <TouchableOpacity
        style={button}
        onPress={() => {
          func();
          navigation.navigate(ChangeScreen);
        }}
      >
        <Text style={text}>{head}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={button}
        onPress={() => {
          navigation.navigate(ChangeScreen);
        }}
      >
        <Text style={text}>{head}</Text>
      </TouchableOpacity>
    );
  }
}
