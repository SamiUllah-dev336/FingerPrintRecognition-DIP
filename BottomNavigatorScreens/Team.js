import GroupMember from "../Components/GroupMember";
import { ScrollView, View } from "react-native";
import { TeamStyles } from "../style/styles";

export default function TeamScreen() {
  return (
    <ScrollView contentContainerStyle={TeamStyles.container}>
      <GroupMember
        image={require("../assets/sami.jpeg")}
        name={"SAMIULLAH"}
        dev={"Software Developer"}
      />
      <GroupMember
        image={require("../assets/qayyum.jpg")}
        name={"ABDUL QAYYUM"}
        dev={"Software Developer"}
      />
      <GroupMember
        image={require("../assets/girl.jpg")}
        name={"Tayyba Tahira"}
        dev={"Software Developer"}
      />
    </ScrollView>
  );
}
