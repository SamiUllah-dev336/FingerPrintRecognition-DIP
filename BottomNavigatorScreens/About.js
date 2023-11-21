import { View, Text } from "react-native";
import { styles } from "../style/styles";
import { AboutStyles } from "../style/styles";

export default function AboutScreen() {
  return (
    <View style={AboutStyles.container}>
      <Text
        style={{
          fontFamily: "Poppins-exbold",
          color: "white",
          marginBottom: 10,
          fontSize: 25,
        }}
      >
        Fingerprint Recognition Project for LMS
      </Text>
      <Text
        style={{ fontFamily: "Poppins", color: "white", textAlign: "justify" }}
      >
        Automated Library Management System (LMS) integrating advanced
        Fingerprint Recognition with Digital Image Processing. The focus lies in
        employing diverse edge detection techniques for fingerprint recognition,
        ensuring compatibility with a standard camera instead of specialized
        devices. This innovative approach extends the system's accessibility,
        allowing for implementation on common devices like mobile phones with
        regular cameras. The utilization of mobile phone images in fingerprint
        recognition poses challenges owing to inherent limitations in image
        quality. Challenges that can be face like poor illumination, noise
        disturbance, varying imaging conditions. To overcome these challenges,
        this project advocates employing multiple image enhancement techniques
        involves optimizing matching algorithms, particularly focusing on edge
        detection, and subsequent edge matching.
      </Text>
    </View>
  );
}
