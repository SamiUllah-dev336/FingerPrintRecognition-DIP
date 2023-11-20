import { TouchableOpacity, Text } from "react-native";

export default function ButtonSmall({ head, navigation, ChangeScreen }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "lightblue",
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 10,
        width: "85%",
        height: "8%",
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={() => navigation.navigate(ChangeScreen)}
    >
      <Text
        style={{
          fontFamily: "Poppins-medium",
          color: "black",
          fontSize: 20,
        }}
      >
        {head}
      </Text>
    </TouchableOpacity>
  );
}
