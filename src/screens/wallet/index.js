import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import theme from "../../../theme";
import { Feather } from "@expo/vector-icons";
import { WithLocalSvg } from "react-native-svg";
const Wallet = (props) => {
  const [priceShow, setPriceShow] = useState(true);
  const Card = [
    {
      icon: require("./../../../assets/svg/btc.svg"),
      heading: "BTC",
      price: "$20.000",
      heading2: 0,
      price2: "$0",
    },
    {
      icon: require("./../../../assets/svg/usdt.svg"),
      heading: "USDT",
      price: "$1",
      heading2: 0,
      price2: "$0",
    },
    {
      icon: require("./../../../assets/svg/logo.svg"),
      heading: "MARCO",
      price: "$1.9600",
      heading2: 0,
      price2: "$0",
    },
    {
      icon: require("./../../../assets/svg/bnb.svg"),
      heading: "BNB",
      price: "$277.241",
      heading2: 0,
      price2: "$0",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInnner}>
        <View></View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <Text style={styles.heading}>Total Balance</Text>
          <View style={styles.priceMain}>
            <Text style={styles.price}>{priceShow ? "0.000" : "----"}</Text>
            <TouchableOpacity
              onPress={() => setPriceShow(!priceShow)}
              style={styles.showButton}
            >
              {priceShow ? (
                <Feather name="eye" size={20} color={theme.white} />
              ) : (
                <Feather name="eye-off" size={20} color={theme.white} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.headerButton}>
            <TouchableOpacity
              style={styles.sendButton}
              onPress={() => props.navigation.navigate("Send")}
            >
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.receiveButton}  onPress={() => props.navigation.navigate("Receive")}>
              <Text style={styles.receiveButtonText}>Receive</Text>
            </TouchableOpacity>
          </View>
          {Card.map((v, i) => {
            return (
              <View style={styles.card} key={i}>
                <View style={styles.cardFirstSection}>
                  <View style={[styles.iconMain]}>
                    <WithLocalSvg
                      asset={v.icon}
                      width={36}
                      height={36}
                      fill={"#000"}
                    />
                  </View>
                  <View style={styles.cardDataMain}>
                    <Text style={styles.cardHeading}>{v.heading}</Text>
                    <Text style={styles.cardPrice}>{v.price}</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.cardHeading}>{v.heading2}</Text>
                  <Text style={styles.cardPrice}>{v.price2}</Text>
                </View>
              </View>
            );
          })}
          <Text style={styles.token}>
            Don’t see your token?{" "}
            <Text
              style={styles.importToken}
              onPress={() => props.navigation.navigate("ImportWallet")}
            >
              Import Token
            </Text>
          </Text>
        </ScrollView>
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
  heading: {
    color: theme.white,
    fontSize: 20,
    fontFamily: theme.bold,
    textAlign: "center",
    marginTop: 30,
  },
  priceMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  price: {
    fontSize: 40,
    fontFamily: theme.bold,
    color: theme.white,
  },
  showButton: {
    marginLeft: 15,
  },
  headerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 30,
  },
  sendButton: {
    backgroundColor: theme.primary,
    height: 45,
    width: "48%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  sendButtonText: {
    color: theme.black,
    fontSize: 18,
    fontFamily: theme.semiBold,
  },
  receiveButton: {
    height: 45,
    width: "48%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: theme.primary,
  },
  receiveButtonText: {
    color: theme.white,
    fontSize: 18,
    fontFamily: theme.semiBold,
  },
  card: {
    backgroundColor: theme.secondary,
    height: 68,
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  cardFirstSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardDataMain: {
    marginLeft: 15,
  },
  cardHeading: {
    color: theme.white,
    fontSize: 15,
    fontFamily: theme.extraBold,
  },
  cardPrice: {
    fontSize: 10,
    fontFamily: theme.medium,
    color: theme.white,
    opacity: 0.6,
  },
  iconMain: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  token: {
    color: theme.white,
    fontSize: 20,
    fontFamily: theme.bold,
    textAlign: "center",
    marginVertical: 30,
  },
  importToken: {
    color: theme.primary,
  },
});
export default Wallet;
