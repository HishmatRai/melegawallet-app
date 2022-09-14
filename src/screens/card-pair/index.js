import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import theme from "./../../../theme";
import { WithLocalSvg } from "react-native-svg";
// components
import { Button } from "./../../components";
const CardPair = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}>Pair Card Wallet</Text>
        <Text style={styles.description}>
          Pair card wallet to use your hardware wallet
        </Text>
        <Text style={styles.description}>
          Please make sure Your Devices Support NFC
        </Text>
      </View>
      <View style={styles.pairIcon}>
        <WithLocalSvg
          asset={require("./../../../assets/svg/pair.svg")}
          width={"100%"}
          height={"100%"}
          fill={"#000"}
        />
      </View>
      <View>
        <Text style={styles.or}>-OR-</Text>
        <Button type={1} buttonTitle="Login" />
      </View>
    </SafeAreaView>
  );
};
let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.black,
    padding: 20,
    justifyContent: "space-between",
  },
  heading: {
    color: theme.primary,
    fontSize: 31,
    fontFamily: theme.bold,
    marginBottom: 5,
  },
  description: {
    color: theme.white,
    fontSize: 14,
    fontFamily: theme.regular,
    marginTop: 5,
  },
  pairIcon: {
    height: 300,
  },
  or: {
    color: theme.white,
    textAlign: "center",
    marginBottom: 20,
    fontSize: 20,
    fontFamily: theme.bold,
  },
});
export default CardPair;
