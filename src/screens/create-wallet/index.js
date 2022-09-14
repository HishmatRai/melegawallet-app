import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import theme from "../../../theme";
// components
import { Input, Button } from "./../../components";
import { Entypo } from "@expo/vector-icons";
const CreateWallet = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}>Create Wallet</Text>
        <Input
          placeholder="Wallet Name"
          value={name}
          onChangeText={(name) => setName(name)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          show={passwordShow}
          showHandler={() => setPasswordShow(!passwordShow)}
          onChangeText={(password) => setPassword(password)}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          show={showConfirmPassword}
          showHandler={() => setShowConfirmPassword(!showConfirmPassword)}
          onChangeText={(confirmPassword) =>
            setConfirmPassword(confirmPassword)
          }
        />
        <View style={styles.checkBoxMain}>
          <TouchableOpacity
            style={styles.checkBox}
            onPress={() => setCheckBox(!checkBox)}
          >
            {checkBox && <Entypo name="check" size={15} color={theme.white} />}
          </TouchableOpacity>
          <Text style={styles.checkBoxText}>
            By clicking on Create Wallet Button, you are agree to our{" "}
            <Text style={styles.terms}>Terms and Conditions</Text>
          </Text>
        </View>
      </View>
      <Button type={1} buttonTitle="Create Wallet" />
    </SafeAreaView>
  );
};
let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.black,
    padding: 20,
    paddingTop: 40,
    justifyContent: "space-between",
  },
  heading: {
    color: theme.primary,
    fontSize: 25,
    fontFamily: theme.blackFont,
    marginBottom: 20,
  },
  checkBoxMain: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  checkBox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: theme.white,
    alignItems: "center",
    justifyContent: "center",
  },
  checkBoxText: {
    color: theme.white,
    flex: 1,
    marginLeft: 15,
    fontFamily: theme.bold,
    fontSize: 14,
  },
  terms: {
    color: theme.appleColor,
  },
});
export default CreateWallet;
