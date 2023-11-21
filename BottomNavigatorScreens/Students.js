import { View, Text } from "react-native";
import { styles } from "../style/styles";

export default function StudentsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>I am student screen</Text>
    </View>
  );
}
