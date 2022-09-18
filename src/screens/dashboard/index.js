import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Linking,
} from "react-native";
import theme from "../../../theme";
import { WithLocalSvg } from "react-native-svg";
const Dashboard = (props) => {
  const Services = [
    {
      icon: require("./../../../assets/svg/staking.svg"),
      title: "Staking",
      path: "Liquidity",
    },
    {
      icon: require("./../../../assets/svg/liquidity.svg"),
      title: "Liquidity",
      path: "Liquidity",
    },
    {
      icon: require("./../../../assets/svg/exchange.svg"),
      title: "Exchange",
      path: "Exchange",
    },
    {
      icon: require("./../../../assets/svg/yield-farming.svg"),
      title: "Yield Farming",
      path: "",
    },
  ];
  const PirceCard = [
    {
      title: "AMA / USDT",
      price: "1.3590",
      percentage: -39,
    },
    {
      title: "BNB / USDT",
      price: "194.58",
      percentage: -4.56,
    },
    {
      title: "BTC / USDT",
      price: "39454.58",
      percentage: 0.35,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInner}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.heading}>Total Balance</Text>
          <Text style={styles.price}>0.000</Text>
          <View style={styles.headerButton}>
            <TouchableOpacity
              style={styles.sendButton}
              onPress={() => props.navigation.navigate("Send")}
            >
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.receiveButton}
              onPress={() => props.navigation.navigate("Receive")}
            >
              <Text style={styles.receiveButtonText}>Receive</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.bannerMain}
            onPress={() => {
              Linking.openURL("https://t.me/melegacommunity");
            }}
          >
            <ImageBackground
              source={require("./../../../assets/images/header.png")}
              style={styles.banner}
              imageStyle={{ borderRadius: 13 }}
            >
              <View style={styles.bannerInner}>
                <Text style={styles.bannerText}>
                  “Hey Bro!.{"\n"} Join The{"\n"}Telegram{"\n"}Airdrops!”
                </Text>
                <View style={styles.bannerIcon}>
                  <WithLocalSvg
                    asset={require("./../../../assets/svg/logo.svg")}
                    width={27}
                    height={27}
                    fill={"#000"}
                  />
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <View style={styles.servicesMain}>
            {Services.map((servicesValue, servicesIndex) => {
              return (
                <TouchableOpacity
                  style={styles.servicesCard}
                  key={servicesIndex}
                  onPress={() =>
                    servicesValue.path !== "" &&
                    props.navigation.navigate(servicesValue.path)
                  }
                >
                  <WithLocalSvg
                    asset={servicesValue.icon}
                    width={47}
                    height={40}
                    fill={"#000"}
                  />
                  <View style={styles.cardTitleMain}>
                    <Text style={styles.cardTitle}>{servicesValue.title} </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.priceCardMain}>
            <View style={styles.priceCardRow}>
              <Text style={styles.priceCardHeaderHeading}>Asset</Text>
              <Text style={styles.priceCardHeaderHeading}>Last Price</Text>
              <Text style={styles.priceCardHeaderHeading}>Change /24h</Text>
            </View>
            {PirceCard.map((priceCardValue, priceCardIndex) => {
              return (
                <View style={styles.priceCardRow} key={priceCardIndex}>
                  <Text style={styles.priceCardValue}>
                    {priceCardValue.title}
                  </Text>
                  <Text style={styles.priceCardValue}>
                    {priceCardValue.price}
                  </Text>
                  <View
                    style={[
                      styles.percentageBox,
                      {
                        backgroundColor:
                          priceCardValue.percentage > 0
                            ? theme.green
                            : theme.red,
                      },
                    ]}
                  >
                    <Text style={styles.percentageBoxValue}>
                      {priceCardValue.percentage}%
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
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
  containerInner: {
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  heading: {
    color: theme.white,
    textAlign: "center",
    marginTop: 50,
    fontSize: 10,
    fontFamily: theme.semiBold,
  },
  price: {
    color: theme.white,
    textAlign: "center",
    fontSize: 25,
    fontFamily: theme.bold,
  },
  headerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
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
  servicesMain: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  servicesCard: {
    height: 40,
    width: "48%",
    flexDirection: "row",
    marginTop: 15,
  },
  cardTitleMain: {
    borderWidth: 1,
    borderColor: theme.white,
    flex: 1,
    borderLeftWidth: 0,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    justifyContent: "center",
  },
  cardTitle: {
    color: theme.white,
    fontSize: 13,
    fontFamily: theme.semiBold,
    marginLeft: 10,
  },
  priceCardMain: {
    borderWidth: 1,
    borderColor: theme.white,
    marginTop: 20,
    borderRadius: 17,
    padding: 10,
    marginBottom: 30,
  },
  priceCardRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  priceCardHeaderHeading: {
    color: theme.white,
    fontSize: 15,
    fontFamily: theme.semiBold,
    flex: 1,
    textAlign: "left",
  },
  percentageBox: {
    height: 35,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    alignSelf: "center",
    borderRadius: 6,
  },
  percentageBoxValue: {
    color: theme.white,
    fontSize: 15,
    fontFamily: theme.semiBold,
  },
  priceCardValue: {
    color: theme.white,
    fontSize: 14,
    fontFamily: theme.blackFont,
    flex: 1,
    textAlign: "left",
  },
  bannerMain: {
    marginTop: 40,
  },
  banner: {
    height: 168,
    borderRadius: 13,
  },
  bannerInner: {
    flex: 1,
    alignSelf: "flex-end",
    margin: 15,
  },
  bannerText: {
    fontSize: 19,
    color: theme.black,
    fontFamily: theme.cavolini,
  },
  bannerIcon: {
    alignSelf: "flex-end",
    marginTop:10,
    marginRight:5
  },
});
export default Dashboard;
