import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import theme from "../../../theme";
const Button = (props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor:
            props.type === 1
              ? theme.primary
              : props.type === 2
              ? theme.black
              : props.type === 3
              ? theme.primaryLight
              : theme.black,
          borderColor:
            props.type === 1
              ? theme.primary
              : props.type === 2
              ? theme.white
              : props.type === 3
              ? theme.primaryLight
              : theme.primary,
        },
      ]}
      onPress={props.onPress}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color:
              props.type === 1
                ? theme.black
                : props.type === 2
                ? theme.white
                : props.type === 3
                ? theme.black
                : theme.white,
          },
        ]}
      >
        {props.buttonTitle}
      </Text>
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
