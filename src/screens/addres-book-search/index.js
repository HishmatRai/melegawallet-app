import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import theme from "./../../../theme";
import { WithLocalSvg } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";
const AddressBookSearch = (props) => {
  const [search, setSearch] = useState("");
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
          <Text style={styles.headerTitle}>Address Book</Text>
          <View />
        </View>
        <Text style={styles.heading}>
          Choose from your address book or add new one
        </Text>
        <View style={styles.searchMain}>
          <Ionicons name="search" size={28} color={theme.white} />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor={theme.white}
            value={search}
            onChangeText={(search) => setSearch(search)}
          />
        </View>
        <View style={styles.body}>
          <WithLocalSvg
            asset={require("./../../../assets/svg/no-data.svg")}
            width={169}
            height={169}
            fill={"#000"}
          />
          <Text style={styles.noData}>Nothing to show</Text>
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
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: theme.primary,
    fontSize: 25,
    fontFamily: theme.bold,
  },
  heading: {
    color: theme.white,
    fontSize: 14,
    fontFamily: theme.bold,
    marginVertical: 30,
  },
  input: {
    fontSize: 20,
    fontFamily: theme.regular,
    color: theme.white,
    flex: 1,
    marginLeft: 15,
  },
  searchMain: {
    borderWidth: 1,
    borderColor: theme.white,
    height: 62,
    borderRadius: 11,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noData: {
    color: theme.white,
    textAlign: "center",
    fontSize: 20,
    fontFamily: theme.bold,
    marginTop: 10,
  },
});
export default AddressBookSearch;
