import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Entypo";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/AntDesign";

const Bottom = createBottomTabNavigator();
// screens
import HomeScreen from "../BottomNavigatorScreens/Home";
import AboutScreen from "../BottomNavigatorScreens/About";
import BooksScreen from "../BottomNavigatorScreens/Books";
import StudentsScreen from "../BottomNavigatorScreens/Students";
import TeamScreen from "../BottomNavigatorScreens/Team";

export const BottomNavigator = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "black",
        tabBarLabelStyle: { fontFamily: "Poppins-bold", color: "purple" },
      }}
    >
      <Bottom.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: (tabinfo) => {
            return <Icon name="home" size={25} color={"purple"} />;
          },
        }}
      />

      <Bottom.Screen
        name="Team"
        component={TeamScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Icon1 name="group" size={25} color={"purple"} />;
          },
        }}
      />

      <Bottom.Screen
        name="Students"
        component={StudentsScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Icon3 name="addusergroup" size={25} color={"purple"} />;
          },
        }}
      />

      <Bottom.Screen
        name="Books"
        component={BooksScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Icon1 name="library-books" size={25} color={"purple"} />;
          },
        }}
      />

      <Bottom.Screen
        name="About"
        component={AboutScreen}
        options={{
          headerShown: false,
          tabBarIcon: (tabinfo) => {
            return <Icon name="info-with-circle" size={25} color={"purple"} />;
          },
        }}
      />
    </Bottom.Navigator>
  );
};
