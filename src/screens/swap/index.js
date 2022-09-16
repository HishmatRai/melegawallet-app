import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import theme from "../../../theme";
import { WithLocalSvg } from "react-native-svg";
const Swap = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInnner}>
        <View style={styles.header}>
          <View style={styles.headerSection}>
            <Text style={styles.headerHeading}>ERC20 - BEP20</Text>
            <View style={styles.headerCircle} />
          </View>
          <Text style={styles.headerSubHeading}>TRC20</Text>
        </View>
        <Text style={styles.heading}>Deposit Address</Text>
        <View style={styles.qrMain}>
          <View style={styles.qrHeader}>
            <WithLocalSvg
              asset={require("./../../../assets/svg/logo.svg")}
              width={42}
              height={42}
              fill={"#000"}
            />
            <Text style={styles.qrHeading}>MelegaWallet</Text>
          </View>
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
    display: "flex",
    flex: 1,
    flexDirection: "column",
    margin: 20,
  },
  headerHeading: {
    color: theme.white,
    fontSize: 20,
    fontFamily: theme.bold,
  },
  headerSubHeading: {
    color: theme.white,
    fontSize: 20,
    fontFamily: theme.bold,
    opacity: 0.5,
    marginLeft: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  headerCircle: {
    width: 13,
    height: 13,
    borderRadius: 13 / 2,
    backgroundColor: theme.primary,
    borderRadius: 13 / 2,
    marginTop: 5,
  },
  headerSection: {
    alignItems: "center",
  },
  heading: {
    color: theme.white,
    textAlign: "center",
    fontSize: 20,
    fontFamily: theme.bold,
  },
  qrMain: {
    backgroundColor: theme.secondary,
    width: "80%",
    marginLeft: "10%",
    borderRadius: 25,
    padding: 15,
  },
  qrHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  qrHeading: {
    color: theme.white,
    fontSize: 15,
    fontFamily: theme.semiBold,
    marginLeft: 10,
  },
});
export default Swap;
