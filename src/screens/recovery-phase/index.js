import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import theme from "./../../../theme";
import { WithLocalSvg } from "react-native-svg";
// components
import { Button } from "./../../components";
import { Feather } from "@expo/vector-icons";
const RecoveryPhase = (props) => {
  const CopyText = [
    "open",
    "hen",
    "dog",
    "belt",
    "geez",
    "you",
    "jug",
    "hug",
    "can",
    "nap",
    "door",
    "mum",
    "lost",
    "pup",
    "mail",
    "one",
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.icon}>
          <WithLocalSvg
            asset={require("./../../../assets/svg/check.svg")}
            width={74}
            height={74}
            fill={"#000"}
          />
        </View>
        <Text style={styles.heading}>Wallet Created Successfully</Text>
        <Text style={styles.description}>
          Anyone with your mnemonic phrase can access all your assests. Please,
          keep the information to yourself. Don’t save it on your phone.
        </Text>
        <View style={styles.copyBox}>
          {CopyText.map((v, i) => {
            return (
              <Text style={styles.copyText} key={i}>
                {v}
              </Text>
            );
          })}
          <View style={styles.copyButtonMain}>
            <TouchableOpacity style={styles.copyButton}>
              <Feather name="copy" size={20} color={theme.black} />
              <Text style={styles.copyButtonText}>Copy</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.description}>
          *Melega wallet will not store your mnemonic on its server and
          therefore is unable to recover your wallet once it is lost pease,
          Before activating your high level security.
        </Text>
      </View>
      <Button
        type={1}
        buttonTitle="Login"
        onPress={() => props.navigation.navigate("Option")}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.black,
    padding: 20,
    justifyContent: "space-between",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  heading: {
    color: theme.white,
    textAlign: "center",
    fontSize: 23,
    fontFamily: theme.bold,
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    color: theme.gray,
    textAlign: "center",
    fontSize: 14,
    fontFamily: theme.medium,
  },
  copyBox: {
    borderWidth: 1,
    borderColor: theme.white,
    borderRadius: 6,
    padding: 15,
    marginVertical: 30,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  copyText: {
    color: theme.white,
    width: "25%",
    fontSize: 20,
    fontFamily: theme.semiBold,
  },
  copyButtonMain: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  copyButton: {
    backgroundColor: theme.white,
    height: 39,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 130,
    flexDirection: "row",
  },
  copyButtonText: {
    color: theme.black,
    fontSize: 15,
    fontFamily: theme.semiBold,
    marginLeft: 10,
  },
});
export default RecoveryPhase;
