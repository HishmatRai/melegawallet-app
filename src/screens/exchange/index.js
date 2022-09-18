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
import { WithLocalSvg } from "react-native-svg";
import { Dropdown } from "react-native-element-dropdown";
import { Entypo } from "@expo/vector-icons";
const Exchange = (props) => {
  const [price, setPrice] = useState("");
  let [priceCurrency, setPriceCurrency] = useState("");
  const [price2, setPrice2] = useState("");
  let [priceCurrency2, setPriceCurrency2] = useState("");
  const Currency = [
    { label: "EUR", value: "EUR" },
    { label: "USD", value: "USD" },
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
          <WithLocalSvg
            asset={require("./../../../assets/svg/logo.svg")}
            width={65}
            height={65}
            fill={"#000"}
          />
          <View />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20, marginTop: 40 }}
        >
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardHeading}>Exchange</Text>
                <Text style={styles.cardSubHeading}>
                  Trade token in an instant
                </Text>
              </View>
              <View style={styles.cardHeaderButtonMain}>
                <TouchableOpacity style={styles.settingButton}>
                  <WithLocalSvg
                    asset={require("./../../../assets/svg/setting.svg")}
                    width={21}
                    height={21}
                    fill={"#000"}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate("Transaction", "Exchange")
                  }
                >
                  <WithLocalSvg
                    asset={require("./../../../assets/svg/clock.svg")}
                    width={21}
                    height={21}
                    fill={"#000"}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.inputMain}>
              <TextInput
                placeholder="Input"
                placeholderTextColor={theme.white}
                value={price}
                onChangeText={(price) => setPrice(price)}
                style={styles.input}
                keyboardType="numeric"
              />
              <View style={styles.inputFooter}>
                <Text style={styles.fees}>0.0</Text>
                <Dropdown
                  style={[styles.dropdownMain]}
                  placeholderStyle={styles.dropdownValue}
                  selectedTextStyle={styles.dropdownValue}
                  data={Currency}
                  maxHeight={250}
                  labelField="label"
                  valueField="value"
                  placeholder="Select  Currency"
                  value={priceCurrency}
                  onChange={(item) => {
                    setPriceCurrency(item.value);
                  }}
                  renderRightIcon={() => (
                    <Entypo name="chevron-down" size={11} color={theme.white} />
                  )}
                />
              </View>
            </View>
            <View style={styles.plusIcon}>
              <WithLocalSvg
                asset={require("./../../../assets/svg/plus.svg")}
                width={27}
                height={27}
                fill={"#000"}
              />
            </View>
            <View style={styles.inputMain}>
              <TextInput
                placeholder="Input"
                placeholderTextColor={theme.white}
                value={price2}
                onChangeText={(price2) => setPrice2(price2)}
                style={styles.input}
                keyboardType="numeric"
              />
              <View style={styles.inputFooter}>
                <Text style={styles.fees}>0.0</Text>
                <Dropdown
                  style={[styles.dropdownMain]}
                  placeholderStyle={styles.dropdownValue}
                  selectedTextStyle={styles.dropdownValue}
                  data={Currency}
                  maxHeight={250}
                  labelField="label"
                  valueField="value"
                  placeholder="Select  Currency"
                  value={priceCurrency2}
                  onChange={(item) => {
                    setPriceCurrency2(item.value);
                  }}
                  renderRightIcon={() => (
                    <Entypo name="chevron-down" size={11} color={theme.white} />
                  )}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Connect Wallet</Text>
            </TouchableOpacity>
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
  containerInnner: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  card: {
    backgroundColor: theme.secondary,
    borderWidth: 1,
    borderColor: theme.white,
    borderRadius: 10,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 0.2,
    borderColor: theme.white,
    paddingBottom: 20,
  },
  cardHeading: {
    color: theme.white,
    fontSize: 23,
    fontFamily: theme.semiBold,
  },
  cardSubHeading: {
    color: theme.white,
    fontSize: 11,
    fontFamily: theme.semiBold,
    marginTop: 5,
  },
  cardHeaderButtonMain: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingButton: {
    marginRight: 15,
  },
  inputMain: {
    backgroundColor: theme.black,
    borderWidth: 1,
    borderColor: theme.white,
    margin: 15,
    borderRadius: 10,
    padding: 10,
  },
  input: {
    fontSize: 15,
    color: theme.white,
    fontFamily: theme.semiBold,
    flex: 1,
  },
  inputFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  fees: {
    color: theme.white,
    fontSize: 15,
    fontFamily: theme.semiBold,
  },
  dropdownMain: {
    minWidth: "40%",
  },
  dropdownValue: {
    color: theme.white,
    fontSize: 11,
    fontFamily: theme.semiBold,
  },
  plusIcon: {
    alignSelf: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: theme.white,
    height: 61,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 40,
    marginBottom: 20,
    marginTop: 10,
  },
  buttonText: {
    color: theme.black,
    fontSize: 15,
    fontFamily: theme.blackFont,
  },
});
export default Exchange;
