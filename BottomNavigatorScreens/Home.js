import { View, Text, Image, Animated } from "react-native";
import { StudentsStyles } from "../style/styles";
import { GlobalContext } from "../StateManagement/GlobalProvider";
import React, { useRef, useEffect } from "react";
import { CustomText } from "../Components/CustomText";
import ButtonMedium from "../Components/ButtonMedium";
import ButtonLarge from "../Components/ButtonLarge";

export default function HomeScreen({ navigation }) {
  // state management
  const { GlobalName, GlobalEmail, GlobalPhone, GlobalStudentId } =
    React.useContext(GlobalContext);

  const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true,
      }).start();
    }, [fadeAnim]);

    return (
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim, // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  };

  return (
    <View style={StudentsStyles.container}>
      <View style={{ marginBottom: 20 }}>
        <FadeInView>
          <Image
            source={require("../assets/library1.jpg")}
            style={StudentsStyles.img}
          />
        </FadeInView>
      </View>
      <View style={StudentsStyles.main}>
        <CustomText heading="Name" content={GlobalName.name} />
        <CustomText heading="Student ID" content={GlobalStudentId.id} />
        <CustomText heading="Phone" content={GlobalPhone.phone} />
        <CustomText heading="Email" content={GlobalEmail.email} />
      </View>
      <ButtonLarge head={`${GlobalName.name} Detail`} />
      <View style={StudentsStyles.button}>
        <ButtonMedium head="Issue" />
        <ButtonMedium head="Return" />
      </View>
    </View>
  );
}
