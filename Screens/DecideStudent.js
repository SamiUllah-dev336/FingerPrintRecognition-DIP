import { View } from "react-native";
import { styles } from "../style/styles";
import ButtonLarge from "../Components/ButtonLarge";

import axios from "axios";
import { useEffect } from "react";

export default function DecideStudent({ navigation }) {
  const fetchAPI = async () => {
    try {
      const res = await axios.get("http://192.168.10.8:4000/sami");
      console.log(res.data);
    } catch (error) {
      console.log("what is error", error);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, []);

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
