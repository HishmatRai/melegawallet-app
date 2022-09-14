import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import theme from "../../../theme";
import { WithLocalSvg } from "react-native-svg";
const Select65 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ backgroundColor: "white" }}>Select </Text>
      <WithLocalSvg
        asset={require("./../../../assets/svg/logo.svg")}
        width={100}
        height={100}
        fill={"#fff"}
      />
    </SafeAreaView>
  );
};
let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.black,
  },
});
export default Select65;
