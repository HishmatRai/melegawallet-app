import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import theme from "../../../theme";
import { Feather } from "@expo/vector-icons";
import { WithLocalSvg } from "react-native-svg";
const Send = (props) => {
  const [search, setSearch] = useState("");
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
        <View style={styles.header}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <WithLocalSvg
              asset={require("./../../../assets/svg/back.svg")}
              width={23}
              height={18}
              fill={"#000"}
            />
          </TouchableOpacity>
          <View style={styles.searchMain}>
            <Feather name="search" size={24} color={theme.white} />
            <TextInput
              placeholder="Search"
              placeholderTextColor={theme.white}
              style={styles.input}
              value={search}
              onChangeText={(search) => setSearch(search)}
            />
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20, marginTop: 50 }}
        >
          {Card.map((v, i) => {
            return (
              <TouchableOpacity
                style={styles.card}
                key={i}
                onPress={() => props.navigation.navigate("Send2", v.heading)}
              >
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
              </TouchableOpacity>
            );
          })}
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
  header: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  searchMain: {
    borderWidth: 1,
    borderColor: theme.white,
    height: 50,
    borderRadius: 11,
    flex: 1,
    marginLeft: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  input: {
    color: theme.white,
    fontSize: 20,
    fontFamily: theme.regular,
    flex: 1,
    marginLeft: 15,
  },
});
export default Send;
