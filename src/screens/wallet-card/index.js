import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import theme from "../../../theme";
import { WithLocalSvg } from "react-native-svg";
import { Button } from "./../../components";
const WalletCard = (props) => {
  const [price, setPrice] = useState("");
  const Catageory = [
    {
      bgColor: theme.secondary,
      title: "Cold Wallet",
    },
    {
      bgColor: theme.white,
      title: "Pay Invoices",
    },
    {
      bgColor: theme.primary,
      title: "ATM Bank",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInnner}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <WithLocalSvg
            asset={require("./../../../assets/svg/back.svg")}
            width={23}
            height={18}
            fill={"#000"}
          />
        </TouchableOpacity>
        <View style={styles.body}>
          <View>
            <Text style={styles.heading}>Start Lock Melega</Text>
            <Text style={styles.subHeading}>Create Your Lock</Text>
            <View style={styles.daysBox}>
              <Text style={styles.days}>360{"\n"}Days</Text>
            </View>
            <Text style={styles.subHeading}>Amount - $150 Worth AMA</Text>
            <TextInput
              placeholder="Amount (114.767)"
              style={styles.input}
              placeholderTextColor={theme.white}
              keyboardType="numeric"
              value={price}
              onChangeText={(price) => setPrice(price)}
            />
            <Text style={styles.message}>Available 0.0 Melega</Text>
            {Catageory.map((v, i) => {
              return (
                <View style={styles.catageoryMain} key={i}>
                  <View
                    style={[
                      styles.catageoryCircle,
                      {
                        backgroundColor: v.bgColor,
                      },
                    ]}
                  />
                  <Text style={styles.catageoryTitle}>{v.title}</Text>
                </View>
              );
            })}
          </View>
          <Button
            type={1}
            buttonTitle="Lock Now"
            onPress={() => props.navigation.goBack(
              
            )}
          />
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
  heading: {
    color: theme.primary,
    fontSize: 31,
    fontFamily: theme.bold,
    marginTop: 20,
  },
  subHeading: {
    color: theme.white,
    fontSize: 14,
    fontFamily: theme.bold,
    marginTop: 10,
  },
  daysBox: {
    backgroundColor: theme.secondary,
    height: 100,
    width: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  days: {
    color: theme.white,
    fontSize: 20,
    fontFamily: theme.bold,
  },
  input: {
    height: 59,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.white,
    marginTop: 15,
    paddingHorizontal: 20,
    color: theme.white,
    fontSize: 14,
    fontFamily: theme.bold,
  },
  message: {
    fontSize: 14,
    fontFamily: theme.bold,
    color: theme.white,
    opacity: 0.5,
    marginTop: 15,
  },
  catageoryMain: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  catageoryCircle: {
    height: 23,
    width: 23,
    borderRadius: 23 / 2,
  },
  catageoryTitle: {
    fontSize: 20,
    color: theme.white,
    fontFamily: theme.bold,
    marginLeft: 10,
  },
  body: {
    flex: 1,
    justifyContent: "space-between",
  },
});
export default WalletCard;
