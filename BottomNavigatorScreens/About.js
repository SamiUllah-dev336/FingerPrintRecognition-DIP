import { View, Text } from "react-native";
import { styles } from "../style/styles";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Poppins", color: "white" }}>
        I am about screen
      </Text>
    </View>
  );
}
