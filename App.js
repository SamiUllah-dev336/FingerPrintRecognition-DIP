import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import { useFonts } from "expo-font";
// screen
import DecideStudent from "./Screens/DecideStudent";
import AddStudent from "./Screens/AddStudent";
import ExistingStudent from "./Screens/ExistingStudent";
import { BottomNavigator } from "./Screens/BottomTab";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-exbold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    Poppins: require("./assets/fonts/Poppins-Light.ttf"),
  });
  if (!fontsLoaded) {
    return undefined;
  }
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#301934" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "purple" },
          headerTintColor: "white",
          headerTitleStyle: { fontFamily: "Poppins-exbold" },
        }}
      >
        <Stack.Screen name="Confirm from Student" component={DecideStudent} />
        <Stack.Screen name="AddStudent" component={AddStudent} />
        <Stack.Screen name="ScanFinger" component={ExistingStudent} />
        <Stack.Screen name="Advanced LMS" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
