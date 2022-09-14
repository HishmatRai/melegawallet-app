import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import theme from "../../../theme";
const Button = (props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: props.type === 1 ? theme.primary : theme.black ,b},
      ]}
    >
      <Text style={styles.buttonText}>{props.buttonTitle}</Text>
    </TouchableOpacity>
  );
};
let styles = StyleSheet.create({
  button: {
    height: 55,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 17,
    fontFamily: theme.bold,
  },
});
export default Button;
