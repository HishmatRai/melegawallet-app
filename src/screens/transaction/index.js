import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import theme from "../../../theme";
import { WithLocalSvg } from "react-native-svg";
import { Feather } from "@expo/vector-icons";
const Transaction = (props) => {
  let propsData = props.route.params;
  const [show, setShow] = useState(true);
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
          <Text style={styles.heading}>{propsData}</Text>
          <View />
        </View>
        <View style={styles.priceMain}>
          <Text style={styles.price}>{show ? "$0.000" : "-------"}</Text>
          <TouchableOpacity onPress={() => setShow(!show)}>
            {show ? (
              <Feather name="eye" size={20} color={theme.white} />
            ) : (
              <Feather name="eye-off" size={20} color={theme.white} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.tabsMain}>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabTitle}>All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.transactionsHeader}>
          <Text style={styles.transactionsHeaderHeading}>Today</Text>
          <Text style={styles.transactionsHeaderCounter}>0 Transactions</Text>
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
    marginHorizontal: 20,
  },
  header: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    color: theme.white,
    fontSize: 22,
    fontFamily: theme.bold,
  },
  priceMain: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 30,
    flexDirection: "row",
  },
  price: {
    color: theme.white,
    fontSize: 25,
    fontFamily: theme.medium,
    marginRight: 10,
  },
  tabsMain: {
    backgroundColor: theme.secondary,
    height: 51,
    borderRadius: 22,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  tab: {
    backgroundColor: theme.black,
    height: 35,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  tabTitle: {
    color: theme.white,
    fontSize: 17,
    fontFamily: theme.blackFont,
  },
  transactionsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop:20
  },
  transactionsHeaderHeading: {
    color: theme.white,
    fontSize: 18,
    fontFamily: theme.bold,
  },
  transactionsHeaderCounter:{
    color:theme.white,
    fontSize:18,
    fontFamily:theme.bold,
    opacity:0.7
  }
});
export default Transaction;
