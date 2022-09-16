import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import theme from "../../../theme";
import { WithLocalSvg } from "react-native-svg";
const windowWidth = Dimensions.get("window").width;
const Dashboard = () => {
  const Slider = [
    {
      heading: "MELEGA WALLET",
      description:
        "Melega Wallet is one of the most transformative technologies.",
      active: [true, false, false],
    },
    {
      heading: "MELEGA WALLET",
      description:
        "Melega Wallet is one of the most transformative technologies.",
      active: [false, true, false],
    },
    {
      heading: "MELEGA WALLET",
      description:
        "Melega Wallet is one of the most transformative technologies.",
      active: [false, false, true],
    },
  ];

  const Services = [
    {
      icon: require("./../../../assets/svg/staking.svg"),
      title: "Staking",
    },
    {
      icon: require("./../../../assets/svg/liquidity.svg"),
      title: "Liquidity",
    },
    {
      icon: require("./../../../assets/svg/exchange.svg"),
      title: "Exchange",
    },
    {
      icon: require("./../../../assets/svg/yield-farming.svg"),
      title: "Yield Farming",
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
            <TouchableOpacity style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.receiveButton}>
              <Text style={styles.receiveButtonText}>Receive</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardMain}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
            >
              {Slider.map((v, i) => {
                return (
                  <View style={styles.card} key={i}>
                    <View style={styles.cardHeader}>
                      <WithLocalSvg
                        asset={require("./../../../assets/svg/logo.svg")}
                        width={13}
                        height={13}
                        fill={"#000"}
                      />
                      <Text style={styles.appName}>MelegaFi</Text>
                    </View>
                    <Text style={styles.cardHeading}>{v.heading}</Text>
                    <Text style={styles.cardSubHeading}>LIVE NOW</Text>
                    <Text style={styles.description}>
                      Melega Wallet is one of the most transformative
                      technologies.
                    </Text>
                    <View style={styles.dotMain}>
                      {v.active.map((actveValue, activeIndex) => {
                        return (
                          <View
                            key={activeIndex}
                            style={actveValue ? styles.activeDot : styles.dot}
                          />
                        );
                      })}
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <View style={styles.servicesMain}>
            {Services.map((servicesValue, servicesIndex) => {
              return (
                <TouchableOpacity
                  style={styles.servicesCard}
                  key={servicesIndex}
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
  cardMain: {
    marginTop: 20,
  },
  card: {
    backgroundColor: theme.white,
    height: 177,
    borderRadius: 13,
    padding: 10,
    width: windowWidth - 40,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  appName: {
    color: theme.black,
    fontSize: 7,
    fontFamily: theme.semiBold,
    marginLeft: 5,
  },
  cardHeading: {
    fontSize: 14,
    color: theme.black,
    fontFamily: theme.semiBold,
    marginTop: 20,
  },
  cardSubHeading: {
    color: theme.secondary,
    fontSize: 23,
    fontFamily: theme.semiBold,
  },
  description: {
    color: theme.black,
    fontSize: 10,
    fontFamily: theme.semiBold,
    width: "80%",
    marginTop: 10,
  },
  dotMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 10,
    marginRight: 20,
  },
  activeDot: {
    width: 7,
    height: 7,
    borderRadius: 7 / 2,
    backgroundColor: theme.secondary,
    marginHorizontal: 2,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 7 / 2,
    backgroundColor: theme.secondary,
    opacity: 0.3,
    marginHorizontal: 2,
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
});
export default Dashboard;
