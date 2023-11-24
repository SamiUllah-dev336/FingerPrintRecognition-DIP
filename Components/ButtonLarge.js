import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ButtonLarge({ head, navigation, ChangeScreen, func }) {
  if (head == "Add") {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          func();
          navigation.navigate(ChangeScreen);
        }}
      >
        <Text style={styles.text}>{head}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate(ChangeScreen);
        }}
      >
        <Text style={styles.text}>{head}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "lightblue",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
    width: "85%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Poppins",
    color: "black",
    fontSize: 20,
  },
});
