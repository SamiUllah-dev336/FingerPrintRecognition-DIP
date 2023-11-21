import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import { ScannerStyles } from "../style/styles";

import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

export default function ExistingStudent({ navigation }) {
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  async function takePicture() {
    if (camera) {
      const photo = await camera.takePictureAsync();
      console.log("Photo taken:", photo);
      // Handle the captured photo as needed (e.g., save to storage, send to server, etc.)
    }
    navigation.navigate("Advanced LMS");
  }

  return (
    <View style={ScannerStyles.container}>
      <Camera
        style={ScannerStyles.camera}
        type={type}
        ref={(ref) => setCamera(ref)}
      >
        <View style={ScannerStyles.buttonContainer}>
          <TouchableOpacity
            style={ScannerStyles.button}
            onPress={toggleCameraType}
          >
            <Text style={ScannerStyles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <TouchableOpacity style={ScannerStyles.photo} onPress={takePicture}>
        <Text style={{ fontFamily: "Poppins-regular" }}>Capture</Text>
      </TouchableOpacity>
    </View>
  );
}
