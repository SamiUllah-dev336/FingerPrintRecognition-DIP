import { View, Text, Image } from "react-native";
import { HomeStyles } from "../style/styles";
import ButtonLarge from "../Components/ButtonLarge";

export default function HomeScreen() {
  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.student}></View>
      <ButtonLarge />
      <ButtonLarge />
    </View>
  );
}
