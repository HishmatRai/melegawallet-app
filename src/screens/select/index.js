import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import theme from "../../../theme";
import { WithLocalSvg } from "react-native-svg";
// components
import { Button } from "./../../components";
const Select = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <WithLocalSvg
          asset={require("./../../../assets/svg/logo.svg")}
          width={76}
          height={76}
          fill={"#fff"}
        />
        <Text style={styles.heading}>Secure Crypto</Text>
        <Text style={styles.subHeading}>Wallet</Text>
        <Text style={styles.description}>
          We make it easy to secure your digital{"\n"}assests.
        </Text>
      </View>
      <View>
        <Button
          type={1}
          buttonTitle="Create a new wallet"
          onPress={() => props.navigation.navigate("CreateWallet")}
        />
        <View style={styles.button}>
          <Button
            type={2}
            buttonTitle="I already have a wallet"
            onPress={() => props.navigation.navigate("Option")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.black,
    padding: 20,
    paddingVertical: 40,
    justifyContent: "space-between",
  },
  heading: {
    color: theme.primary,
    fontSize: 40,
    fontFamily: theme.bold,
    marginTop: 40,
  },
  subHeading: {
    color: theme.white,
    fontSize: 40,
    fontFamily: theme.medium,
  },
  description: {
    color: theme.white,
    fontSize: 14,
    fontFamily: theme.semiBold,
  },
  button: {
    marginTop: 20,
  },
});
export default Select;
