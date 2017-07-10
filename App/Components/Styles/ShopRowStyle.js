// @flow

import { Dimensions, Platform, StyleSheet } from "react-native";
import { Colors, Metrics, ApplicationStyles } from "../../Themes/";

const { width } = Dimensions.get("window");
const height = width / 4 * 3;

export default StyleSheet.create({
  container: {
    width: width,
    height: height,
    marginTop: 1,
    backgroundColor: "#000a",
    overflow: "hidden"
  },
  image: {
    width: width,
    height: height
  },
  dataWrapper: {
    position: "absolute",
    flexDirection: "row",
    alignContent: "space-around",
    alignItems: "center",
    height: 60,
    flex: 1,
    width: width,
    bottom: 0,
    backgroundColor: "#000a"
  },
  descriptionWrapper: {
    flex: 1
  },
  location: {
    color: "white",
    left: 10,
    fontSize: Platform.OS === "ios" ? 20 : 18,
    lineHeight: 30
  },
  author: {
    color: "white",
    left: 10,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "bold"
  },
  likes: {
    color: "#fff",
    fontSize: 20,
    lineHeight: Platform.OS === "ios" ? 40 : 33,
    textAlign: "center",

    fontWeight: "bold",
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#000a",
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: "#fffa",
    borderWidth: 1,
    overflow: "hidden"
  },
  likeButton: {
    color: "#fff",
    fontSize: 20,
    lineHeight: Platform.OS === "ios" ? 40 : 33,
    textAlign: "center",

    marginRight: 10,
    backgroundColor: "#000a",
    width: 70,
    height: 40,
    overflow: "hidden",
    borderRadius: 20,
    borderColor: "#fffa",
    borderWidth: 1
  }
});
