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
import { WithLocalSvg } from "react-native-svg";
import ToggleSwitch from "toggle-switch-react-native";
const Security = (props) => {
  const [list, setList] = useState([
    {
      cardTitle: "SMS Authentication",
      toggle: false,
    },
    {
      cardTitle: "MARCO Security Card",
      toggle: null,
    },
    {
      cardTitle: "MARCO/Google Authenticator",
      toggle: false,
    },
    {
      cardTitle: "Emal Authentication",
      toggle: false,
    },
    {
      cardTitle: "Memonic Key",
      toggle: null,
    },
    {
      cardTitle: "Password",
      toggle: null,
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInnner}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => props.navigation.goBack()}
        >
          <WithLocalSvg
            asset={require("./../../../assets/svg/back.svg")}
            width={23}
            height={18}
            fill={"#000"}
          />
        </TouchableOpacity>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          {list.map((v, i) => {
            return (
              <TouchableOpacity style={styles.card} key={i}>
                <Text style={styles.cardTitle}>{v.cardTitle}</Text>
                {v.toggle === null ? (
                  <View />
                ) : (
                  <ToggleSwitch
                    isOn={v.toggle !== null && v.toggle}
                    onColor="#D9D9D9C4"
                    offColor="#D9D9D9C4"
                    labelStyle={{
                      color: "black",
                      fontWeight: "900",
                      backgroundColor: "#4788ED",
                    }}
                    thumbOffStyle={{
                      backgroundColor: theme.white,
                    }}
                    thumbOnStyle={{
                      backgroundColor: theme.white,
                    }}
                    size="medium"
                    onToggle={(isOn) => {
                      list[i].toggle = !list[i].toggle;
                      setList([...list]);
                    }}
                  />
                )}
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
  back: {
    marginVertical: 20,
    marginBottom: 50,
  },
  card: {
    borderWidth: 1,
    borderColor: theme.white,
    backgroundColor: theme.secondary,
    height: 68,
    borderRadius: 4,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 15,
  },
  cardTitle: {
    color: theme.white,
    fontSize: 15,
    fontFamily: theme.medium,
  },
});
export default Security;
