import { View, Text, Image } from "react-native";
import { TeamStyles, styles } from "../style/styles";

export default function GroupMember({ image, name, dev }) {
  return (
    <View style={{ marginBottom: 15 }}>
      <View style={TeamStyles.imageView}>
        <Image source={image} style={TeamStyles.image}></Image>
      </View>
      <View>
        <Text style={TeamStyles.name}>{name}</Text>
        <Text style={TeamStyles.dev}>{dev}</Text>
      </View>
    </View>
  );
}
