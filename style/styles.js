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

export const AddStudstyles = StyleSheet.create({
  text: {
    color: "white",
    fontFamily: "Poppins-bold",
    fontSize: 18,
    alignSelf: "flex-start",
    marginLeft: 30,
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

// book style
export const BookStyles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
  },
  main: {
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: "white",
  },
  img: {
    width: 160,
    height: 270,
    resizeMode: "cover",
  },
});

// scanner style
export const ScannerStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  camera: {
    width: "70%",
    height: "60%",
    marginBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

//add student styles
export const StudentsStyles = StyleSheet.create({});
