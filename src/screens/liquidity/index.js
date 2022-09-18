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
const Liquidity = (props) => {
  const [price, setPrice] = useState("");
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
                <Text style={styles.cardHeading}>Add Liquidity</Text>
                <Text style={styles.cardSubHeading}>
                  Add liquidity to receive LP tokens
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
                <TouchableOpacity>
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
              </View>
            </View>
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
    marginTop:20
  },
  fees: {
    color: theme.white,
    fontSize: 15,
    fontFamily: theme.semiBold,
  },
});
export default Liquidity;
