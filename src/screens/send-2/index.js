import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import theme from "../../../theme";
import { WithLocalSvg } from "react-native-svg";
const Send2 = (props) => {
  let propsData = props.route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInnner}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <WithLocalSvg
              asset={require("./../../../assets/svg/back.svg")}
              width={23}
              height={18}
              fill={"#000"}
            />
          </TouchableOpacity>
          <Text style={styles.headerHeading}>Send {propsData}</Text>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => props.navigation.navigate("Send")}
          >
            <Text style={styles.continueButton}>Continue</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <View>
            <View style={styles.inputMain}>
              <TextInput
                placeholder="Recipient Address"
                placeholderTextColor={theme.white}
                style={styles.input}
              />
              <TouchableOpacity>
                <WithLocalSvg
                  asset={require("./../../../assets/svg/scan.svg")}
                  width={23}
                  height={18}
                  fill={"#000"}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.pasteButton}>
                <Text style={styles.pasteButtonText}>Paste</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputMain}>
              <TextInput
                placeholder={propsData}
                placeholderTextColor={theme.white}
                style={styles.input}
                keyboardType="numeric"
              />
              <TouchableOpacity>
                <Text style={styles.max}>Max</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pasteButton}>
                <Text style={styles.pasteButtonText}>USD</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => props.navigation.navigate("Send")}
          >
            <Text style={styles.footerButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
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
    flex: 1,
    flexDirection: "column",
    margin: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerHeading: {
    color: theme.white,
    fontSize: 18,
    fontFamily: theme.bold,
  },
  continueButton: {
    color: theme.white,
    fontSize: 18,
    fontFamily: theme.medium,
  },
  inputMain: {
    borderWidth: 1,
    borderColor: theme.white,
    height: 54,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 30,
  },
  input: {
    fontSize: 15,
    fontFamily: theme.regular,
    flex: 1,
    marginRight: 10,
    opacity: 0.7,
  },
  pasteButton: {
    marginLeft: 10,
  },
  pasteButtonText: {
    color: theme.primary,
    fontSize: 13,
    fontFamily: theme.regular,
  },
  max: {
    color: theme.primary,
    fontSize: 15,
    fontFamily: theme.regular,
  },
  footerButton: {
    backgroundColor: theme.primary,
    height: 61,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  footerButtonText: {
    color: theme.black,
    fontSize: 20,
    fontFamily: theme.bold,
  },
  body: {
    flex: 1,
    justifyContent: "space-between",
    marginVertical: 10,
  },
});
export default Send2;
