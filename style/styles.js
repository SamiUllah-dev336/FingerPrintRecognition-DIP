import { StyleSheet } from "react-native";

// this stylesheet is common for all files
export const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
// team screen stylesheet
export const TeamStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  imageView: {
    marginBottom: 20,
    height: 250,
    width: 250,
    borderWidth: 1,
    backgroundColor: "#f5fffa",
    borderRadius: 125,
  },
  image: {
    resizeMode: "contain",
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  name: {
    color: "white",
    fontFamily: "Poppins-regular",
    fontSize: 20,
    alignSelf: "center",
  },
  dev: {
    color: "white",
    fontFamily: "Poppins-regular",
    fontSize: 15,
    alignSelf: "center",
  },
});
