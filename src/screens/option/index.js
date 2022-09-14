import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import theme from "../../../theme";
import { WithLocalSvg } from "react-native-svg";
// components
import { Button } from "./../../components";
import { Ionicons } from "@expo/vector-icons";
const Option = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.headerMain}>
          <WithLocalSvg
            asset={require("./../../../assets/svg/logo.svg")}
            width={76}
            height={76}
            fill={"#fff"}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => props.navigation.goBack()}
          >
            <Ionicons name="close" size={20} color={theme.white} />
          </TouchableOpacity>
        </View>
        <Text style={styles.heading}>Secure Crypto</Text>
        <Text style={styles.subHeading}>Wallet</Text>
        <Text style={styles.description}>
          We made it easy to secure your digital assets.
        </Text>
      </View>
      <View>
        <Button
          type={1}
          buttonTitle="Pair"
          onPress={() => props.navigation.navigate("CardPair")}
        />
        <View style={styles.button}>
          <Button type={3} buttonTitle="Import Wallet" />
        </View>
        <View style={styles.button}>
          <Button type={4} buttonTitle="Login" />
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
  headerMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  closeButton: {
    borderWidth: 1,
    borderColor: theme.white,
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    alignItems: "center",
    justifyContent: "center",
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
export default Option;
