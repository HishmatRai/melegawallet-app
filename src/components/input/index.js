import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../../../theme";
import { Feather } from "@expo/vector-icons";
const Input = (props) => {
  let [focus, setFocus] = useState(false);
  let [blur, setBlur] = useState(false);
  let Focushandler = () => {
    setFocus(true);
    setBlur(false);
  };
  let BlurHandler = () => {
    setFocus(false);
    setBlur(true);
  };
  return (
    <View
      style={[
        styles.inputMain,
        { borderColor: focus ? theme.primary : theme.white },
      ]}
    >
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholderTextColor={theme.white}
        secureTextEntry={
          props.type === "password" ? (!props.show ? true : false) : false
        }
        style={styles.input}
        onFocus={Focushandler}
        onBlur={BlurHandler}
      />
      {props.type === "password" && (
        <TouchableOpacity
          style={styles.showPassword}
          onPress={props.showHandler}
        >
          {props.show ? (
            <Feather name="eye-off" size={20} color={theme.white} />
          ) : (
            <Feather name="eye" size={20} color={theme.white} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};
let styles = StyleSheet.create({
  inputMain: {
    height: 55,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    color: theme.white,
    fontSize: 18,
    fontFamily: theme.regular,
    flex: 1,
  },
  showPassword: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
  },
});
export default Input;
