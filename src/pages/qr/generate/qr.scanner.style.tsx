import { StyleSheet, Dimensions } from "react-native";

var { width, height } = Dimensions.get("window");

export const QrScannerStyles = StyleSheet.create({
  container: {
    margin: 20,
  },
  mainCard: {
    backgroundColor: "white",
    padding: 35,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 15,
  },
  logo: {
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 25,
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
  },
  list: {
    marginVertical: 2,
    justifyContent: "center",
    paddingLeft: 5,
  },
  qrcodeWrapper: {
    alignItems: "center",
  },
  qrcode: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
  },
  cardInput: {
    justifyContent: "flex-end",
    alignContent: "flex-end",
    padding: 20,
    borderRadius: 20,
    flexDirection: "column",
    margin: 10,
    backgroundColor: "white",
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginVertical: 3,
    borderRadius: 8,
    color: "black",
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: "black",
    width: width,
    height: height,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 50,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  buttonPrimary: {
    backgroundColor: "#3D8DA6",
  },
  buttonOutline: {
    borderWidth: 3,
    borderColor: "#F49838",
    backgroundColor: "#fff",
  },
  buttonText: {
    color: "#F49838",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
