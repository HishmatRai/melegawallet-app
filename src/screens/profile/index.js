import React from "react";
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
import { Entypo } from "@expo/vector-icons";
const Profile = (props) => {
  const Card = [
    {
      icon: require("./../../../assets/svg/address-book.svg"),
      title: "Addresss Book",
      path: "AddressBook",
    },
    {
      icon: require("./../../../assets/svg/wallet.svg"),
      title: "Wallet Card",
      path: "WalletCard",
    },
    {
      icon: require("./../../../assets/svg/discover.svg"),
      title: "Discover",
      path: "Discovered",
    },
    {
      icon: require("./../../../assets/svg/help.svg"),
      title: "Help Center (Support)",
      path: "",
    },
    {
      icon: require("./../../../assets/svg/security.svg"),
      title: "Security",
      path: "",
    },
    {
      icon: require("./../../../assets/svg/log-out.svg"),
      title: "Log Out",
      path: "Login",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInnner}>
        <View style={styles.header}>
          <WithLocalSvg
            asset={require("./../../../assets/svg/logo.svg")}
            width={76}
            height={76}
            fill={"#fff"}
          />
          <Text style={styles.heading}>LaStBoRn</Text>
          <Text style={styles.id}>ID: 76865</Text>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => props.navigation.navigate("EditWallet")}
          >
            <Text style={styles.editButtonText}>Edit Wallet</Text>
            <Entypo name="chevron-right" size={24} color={theme.black} />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {Card.map((v, i) => {
              return (
                <TouchableOpacity
                  style={styles.card}
                  key={i}
                  onPress={() =>
                    v.path !== "" && props.navigation.navigate(v.path)
                  }
                >
                  <View style={styles.cardFirstSection}>
                    <WithLocalSvg asset={v.icon} width={24} height={24} />
                    <Text style={styles.cardTitle}>{v.title}</Text>
                  </View>
                  <Entypo name="chevron-right" size={24} color={theme.white} />
                </TouchableOpacity>
              );
            })}
            <View style={{ marginBottom: 20 }} />
          </ScrollView>
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
    alignSelf: "center",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: theme.white,
    textAlign: "center",
    fontSize: 20,
    fontFamily: theme.semiBold,
    marginTop: 5,
  },
  id: {
    color: theme.white,
    textAlign: "center",
    fontSize: 18,
    fontFamily: theme.semiBold,
  },
  editButton: {
    backgroundColor: theme.primary,
    height: 46,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    width: 200,
    paddingHorizontal: 15,
    marginTop: 40,
  },
  editButtonText: {
    color: theme.black,
    fontSize: 16,
    fontFamily: theme.medium,
  },
  body: {
    flex: 1,
    marginTop: 20,
  },
  card: {
    backgroundColor: theme.secondary,
    height: 68,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 10,
  },
  cardFirstSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardTitle: {
    color: theme.white,
    marginLeft: 10,
    fontSize: 15,
    fontFamily: theme.medium,
  },
});
export default Profile;
