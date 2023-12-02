import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ButtonMedium({ head }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{head}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "purple",
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    width: "40%",
    height: "35%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Poppins",
    color: "white",
    fontSize: 20,
  },
});
