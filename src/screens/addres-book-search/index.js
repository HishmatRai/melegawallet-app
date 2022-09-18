import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import theme from "./../../../theme";
import { WithLocalSvg } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";
const AddressBookSearch = (props) => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <TouchableOpacity
        style={{ paddingVertical: 10 }}
        onPress={() => props.navigation.navigate("AddressBook",item.title)}
      >
        <Text
          style={styles.itemStyle}
          // onPress={() => getItem(item)}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };
  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert("Id : " + item.id + " Title : " + item.title);
  };
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
            onChangeText={(search) => searchFilterFunction(search)}
          />
        </View>
        {search === "" ? (
          <View style={styles.body}>
            <WithLocalSvg
              asset={require("./../../../assets/svg/no-data.svg")}
              width={169}
              height={169}
              fill={"#000"}
            />
            <Text style={styles.noData}>Nothing to show</Text>
          </View>
        ) : (
          <View style={styles.searchList}>
            <FlatList
              data={filteredDataSource}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={ItemSeparatorView}
              renderItem={ItemView}
            />
          </View>
        )}
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
  itemStyle: {
    // padding: 10,
    color: theme.white,
    fontSize: 15,
    fontFamily: theme.medium,
    textTransform: "capitalize",
  },
  searchList: {
    marginTop: 20,
  },
});
export default AddressBookSearch;
