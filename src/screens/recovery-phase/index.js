import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import theme from "./../../../theme";
import { WithLocalSvg } from "react-native-svg";
const RecoveryPhase = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WithLocalSvg
        asset={require("./../../../assets/svg/check.svg")}
        width={74}
        height={74}
        fill={"#000"}
      />
      <Text>fdsf</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.black,
  },
});
export default RecoveryPhase;
