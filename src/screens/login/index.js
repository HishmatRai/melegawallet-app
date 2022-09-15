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
const Login = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.containerInnner}>
      <View>
        <Text style={styles.heading}>Login Wallet</Text>
        <Text style={styles.subHeading}>
          Enter Wallet and Password to Login
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
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
          <View style={styles.forgotPasswordMain}>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forget Password?</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <Button
        type={1}
        buttonTitle="Login"
        onPress={() => props.navigation.navigate("TabStack")}
      />
      </View>
    </SafeAreaView>
  );
};
let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.black,
  },
  containerInnner: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    margin: 20,
    marginVertical: 40,
  },
  heading: {
    color: theme.primary,
    fontSize: 25,
    fontFamily: theme.blackFont,
    marginBottom: 20,
  },
  subHeading: {
    color: theme.white,
    fontSize: 16,
    fontFamily: theme.extraBold,
    marginBottom: 30,
  },
  forgotPasswordMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  forgotPassword: {
    color: theme.white,
    fontSize: 15,
    fontFamily: theme.bold,
  },
});
export default Login;
