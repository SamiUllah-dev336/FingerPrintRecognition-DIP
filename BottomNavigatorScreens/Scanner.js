import { View, Text } from "react-native";
import { styles } from "../style/styles";

export default function ScannerScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Poppins", color: "white" }}>
        I am scanner screen
      </Text>
    </View>
  );
}
