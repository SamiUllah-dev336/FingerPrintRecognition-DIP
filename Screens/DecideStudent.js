import { View } from "react-native";
import { styles } from "../style/styles";
import ButtonLarge from "../Components/ButtonLarge";

export default function DecideStudent({ navigation }) {
  return (
    <View style={styles.container}>
      <ButtonLarge
        head="Add New Student"
        navigation={navigation}
        ChangeScreen={"AddStudent"}
      />
      <ButtonLarge
        head="Check Authorize Student"
        navigation={navigation}
        ChangeScreen={"ScanFinger"}
      />
    </View>
  );
}
