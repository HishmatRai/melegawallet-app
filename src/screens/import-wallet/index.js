import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import theme from "../../../theme";
// components
import { Input, Button } from "./../../components";
import { Entypo } from "@expo/vector-icons";
const ImportWallet = (props) => {
  const [key, setKey] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}>Import Wallet</Text>
        <Text style={styles.subHeading}>Import by Memonic phrase</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            placeholder="Enter Your Memonic Key"
            multiline={true}
            value={key}
            onChangeText={(key) => setKey(name)}
            inputType={2}
          />
          <Input
            placeholder="Wallet Name"
            value={name}
            onChangeText={(name) => setName(name)}
            inputType={2}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            show={passwordShow}
            showHandler={() => setPasswordShow(!passwordShow)}
            onChangeText={(password) => setPassword(password)}
            inputType={2}
          />
          <View style={styles.checkBoxMain}>
            <TouchableOpacity
              style={styles.checkBox}
              onPress={() => setCheckBox(!checkBox)}
            >
              {checkBox && (
                <Entypo name="check" size={15} color={theme.white} />
              )}
            </TouchableOpacity>
            <Text style={styles.checkBoxText}>
              By clicking on Create Wallet Button, you are agree to our{" "}
              <Text style={styles.terms}>Terms and Conditions</Text>
            </Text>
          </View>
        </ScrollView>
      </View>
      <Button
        type={1}
        buttonTitle="Import Now"
        onPress={() => props.navigation.navigate("TabStack")}
      />
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
    marginBottom: 10,
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
  subHeading: {
    color: theme.white,
    fontSize: 14,
    fontFamily: theme.bold,
    marginBottom: 10,
  },
});
export default ImportWallet;
