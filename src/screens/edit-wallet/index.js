import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import theme from "../../../theme";
import { WithLocalSvg } from "react-native-svg";
const EditWallet = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInner}>
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
        <View style={styles.logo}>
          <WithLocalSvg
            asset={require("./../../../assets/svg/logo.svg")}
            width={94}
            height={94}
            fill={"#000"}
          />
        </View>
        <View style={styles.card}>
          <View style={styles.cardFirstSection}>
            <View style={styles.cardLogo}>
              <WithLocalSvg
                asset={require("./../../../assets/svg/user.svg")}
                width={30}
                height={30}
                fill={"#000"}
              />
            </View>
            <Text style={styles.cardTitle}>Account Verification</Text>
          </View>
          <WithLocalSvg
            asset={require("./../../../assets/svg/verification.svg")}
            width={20}
            height={20}
            fill={"#000"}
          />
        </View>
        <View style={styles.card}>
          <View style={styles.cardFirstSection}>
            <View style={styles.cardLogo}>
              <WithLocalSvg
                asset={require("./../../../assets/svg/password.svg")}
                width={30}
                height={30}
                fill={"#000"}
              />
            </View>
            <View>
              <Text style={styles.cardTitle}>Password</Text>
              <Text style={styles.cardTitle}>*********</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.cardButton}>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.cardFirstSection}>
            <View style={styles.cardLogo}>
              <WithLocalSvg
                asset={require("./../../../assets/svg/lock.svg")}
                width={30}
                height={30}
                fill={"#000"}
              />
            </View>
            <View>
              <Text style={styles.cardTitle}>Use Pin to login</Text>
              <Text style={styles.cardTitle}>*********</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.cardButton}>Turn off</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.cardFirstSection}>
            <View style={styles.cardLogo}>
              <WithLocalSvg
                asset={require("./../../../assets/svg/lock.svg")}
                width={30}
                height={30}
                fill={"#000"}
              />
            </View>
            <View>
              <Text style={styles.cardTitle}>Memonic Keys</Text>
              <Text style={styles.cardTitle}>*********</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.cardButton}>Memonic</Text>
          </TouchableOpacity>
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
  containerInner: {
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  back: {
    marginTop: 20,
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: -20,
    marginBottom: 40,
  },
  card: {
    backgroundColor: theme.secondary,
    height: 68,
    borderRadius: 5,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  cardFirstSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardTitle: {
    color: theme.white,
    fontSize: 15,
    fontFamily: theme.medium,
  },
  cardLogo: {
    width: 50,
  },
  cardButton: {
    color: theme.primary,
    fontSize: 12,
    fontFamily: theme.medium,
  },
});
export default EditWallet;
