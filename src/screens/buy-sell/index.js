import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import theme from "./../../../theme";
import { WithLocalSvg } from "react-native-svg";
const BuySell = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <WithLocalSvg
            asset={require("./../../../assets/svg/back.svg")}
            width={23}
            height={18}
            fill={"#000"}
          />
        </TouchableOpacity>
        <Text style={styles.title}>BUY/SELL</Text>
        <View />
      </View>
      <Text style={styles.heading}>Trade tokens in an instant</Text>
      <View style={styles.line} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20 }}
      >
        <View style={styles.dataHeader}>
          <View style={styles.dataHeaderSection}>
            <WithLocalSvg
              asset={require("./../../../assets/svg/logo.svg")}
              width={38}
              height={38}
              fill={"#000"}
            />
            <Text style={styles.appName}>MARCO</Text>
          </View>
          <Text style={styles.balance}>Balance: 0.0000</Text>
        </View>
        <View style={styles.priceBox}>
          <TextInput style={styles.priecInput} keyboardType="numeric" />
          <View>
            <Text style={styles.fees}>0.0</Text>
            <View style={styles.maxBox}>
              <Text style={styles.max}>MAX</Text>
            </View>
          </View>
        </View>
        <View style={styles.downArrow}>
          <WithLocalSvg
            asset={require("./../../../assets/svg/down.svg")}
            width={48}
            height={48}
            fill={"#000"}
          />
        </View>
        <View style={styles.dataHeader}>
          <View style={styles.dataHeaderSection}>
            <WithLocalSvg
              asset={require("./../../../assets/svg/bnb-white.svg")}
              width={38}
              height={38}
              fill={"#000"}
            />
            <Text style={styles.appName}>BNB</Text>
          </View>
          <Text style={styles.balance}>Balance: 0.0000</Text>
        </View>
        <View style={styles.priceBox2}>
          <TextInput style={styles.priecInput2} keyboardType="numeric" />
          <View>
            <Text style={styles.fees}>0.0</Text>
          </View>
        </View>
        <View style={styles.dataHeader2}>
          <Text style={styles.percentageHeading}>Slippage Tolerance</Text>
          <Text style={styles.percentage}>0.5%</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>INSUFFICIENT BNB BALANCE</Text>
        </TouchableOpacity>
        <View style={styles.listMain}>
          <View style={styles.list}>
            <Text style={styles.listData}>Minimum received:</Text>
            <Text style={styles.listData}>00.000</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.listData}>Price Impact:</Text>
            <Text style={styles.listData}>00.000</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.listData}>Fee:</Text>
            <Text style={styles.listData}>00.000</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.black,
  },
  header: {
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: theme.white,
    fontSize: 20,
    fontFamily: theme.semiBold,
  },
  heading: {
    color: theme.white,
    textAlign: "center",
    fontSize: 14,
    fontFamily: theme.semiBold,
  },
  line: {
    borderBottomWidth: 0.5,
    borderBottomColor: theme.white,
    opacity: 0.5,
    marginTop: 20,
  },
  dataHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  appName: {
    color: theme.white,
    fontSize: 16,
    fontFamily: theme.semiBold,
    marginLeft: 10,
  },
  dataHeaderSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  balance: {
    color: theme.white,
    fontSize: 16,
    fontFamily: theme.medium,
  },
  priceBox: {
    backgroundColor: theme.secondary,
    height: 92,
    borderRadius: 15,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  priecInput: {
    flex: 1,
    marginRight: 15,
    height: 80,
    color: theme.white,
    fontFamily: theme.bold,
    fontSize: 30,
  },
  fees: {
    color: theme.white,
    fontSize: 16,
    fontFamily: theme.semiBold,
    textAlign: "center",
  },
  maxBox: {
    backgroundColor: theme.primary,
    width: 40,
    height: 21,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  max: {
    color: theme.white,
    fontFamily: theme.semiBold,
    fontSize: 10,
  },
  downArrow: {
    marginVertical: 20,
    alignItems: "center",
  },
  priceBox2: {
    backgroundColor: theme.secondary,
    height: 68,
    borderRadius: 18,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  priecInput2: {
    flex: 1,
    marginRight: 15,
    height: 40,
    color: theme.white,
    fontFamily: theme.bold,
    fontSize: 20,
  },
  percentageHeading: {
    color: theme.primary,
    fontSize: 16,
    fontFamily: theme.medium,
  },
  percentage: {
    color: theme.green,
    fontSize: 16,
    fontFamily: theme.semiBold,
  },
  dataHeader2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
  },
  button: {
    backgroundColor: theme.primaryLight,
    height: 52,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 12,
    fontFamily: theme.bold,
    color: theme.black,
    opacity: 0.5,
  },
  listMain: {
    backgroundColor: theme.secondary,
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    paddingTop: 0,
  },
  list: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  listData: {
    color: theme.white,
    fontSize: 10,
    fontFamily: theme.medium,
  },
});
export default BuySell;
