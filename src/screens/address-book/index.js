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
const AddressBook = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
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
          Create new address and it will be automatically added to your address
          book
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor={theme.white}
          value={name}
          onChangeText={(name) => setName(name)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("AddressBookSearch")}
        >
          <Text style={styles.address}>Address</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Description -  ( 0ptional )"
          placeholderTextColor={theme.white}
          value={description}
          onChangeText={(description) => setDescription(description)}
        />
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
    backgroundColor: theme.secondary,
    height: 68,
    borderRadius: 5,
    marginTop: 10,
    fontSize: 15,
    fontFamily: theme.medium,
    paddingHorizontal: 15,
    color: theme.white,
  },
  button: {
    backgroundColor: theme.secondary,
    height: 68,
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  address: {
    fontSize: 15,
    fontFamily: theme.medium,
    color: theme.white,
  },
});
export default AddressBook;
