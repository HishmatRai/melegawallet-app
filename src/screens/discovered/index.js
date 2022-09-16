import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import theme from "./../../../theme";
import { WithLocalSvg } from "react-native-svg";
import { Entypo } from "@expo/vector-icons";
const Discovered = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInner}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <WithLocalSvg
              asset={require("./../../../assets/svg/back.svg")}
              width={23}
              height={18}
              fill={"#000"}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Discovered</Text>
          <View />
        </View>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Flexible Mining</Text>
          <Entypo name="chevron-right" size={24} color={theme.white} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Buy/Sell</Text>
          <Entypo name="chevron-right" size={24} color={theme.white} />
        </TouchableOpacity>
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
  header: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom:50
  },
  title: {
    color: theme.white,
    fontSize: 20,
    fontFamily: theme.semiBold,
  },
  card: {
    backgroundColor: theme.secondary,
    height: 68,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop:10
  },
  cardTitle: {
    color: theme.white,
    fontSize: 15,
    fontFamily: theme.medium,
  },
});
export default Discovered;
