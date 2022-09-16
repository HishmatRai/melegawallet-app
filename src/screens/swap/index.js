import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Share,
} from "react-native";
import theme from "../../../theme";
import { WithLocalSvg } from "react-native-svg";
import SvgQRCode from "react-native-qrcode-svg";
import { Feather, AntDesign } from "@expo/vector-icons";
const Swap = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInnner}>
        <View style={styles.header}>
          <View style={styles.headerSection}>
            <Text style={styles.headerHeading}>ERC20 - BEP20</Text>
            <View style={styles.headerCircle} />
          </View>
          <Text style={styles.headerSubHeading}>TRC20</Text>
        </View>
        <Text style={styles.heading}>Deposit Address</Text>
        <View style={styles.qrMain}>
          <View style={styles.qrHeader}>
            <WithLocalSvg
              asset={require("./../../../assets/svg/logo.svg")}
              width={42}
              height={42}
              fill={"#000"}
            />
            <Text style={styles.qrHeading}>MelegaWallet</Text>
          </View>
          <View style={styles.qr}>
            <SvgQRCode
              value="http://example.com"
              size={193}
              backgroundColor={theme.white}
            />
          </View>
          <Text style={styles.qrLink}>
            bc1q0wcec4w6h95xvkhcg37x3d5j7nz5gveekrml59
          </Text>
        </View>
        <View>
          <Text style={styles.description}>
            Send only BEP20 tokens to this wallet.Sending any other coins may
            result in permanent loss.
          </Text>
          <View style={styles.footerMain}>
            <TouchableOpacity style={styles.footerButton}>
              <Feather name="copy" size={20} color={theme.white} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton} onPress={onShare}>
              <AntDesign name="sharealt" size={20} color={theme.white} />
            </TouchableOpacity>
          </View>
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
    display: "flex",
    flex: 1,
    flexDirection: "column",
    margin: 20,
    justifyContent: "space-between",
  },
  headerHeading: {
    color: theme.white,
    fontSize: 20,
    fontFamily: theme.bold,
  },
  headerSubHeading: {
    color: theme.white,
    fontSize: 20,
    fontFamily: theme.bold,
    opacity: 0.5,
    marginLeft: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  headerCircle: {
    width: 13,
    height: 13,
    borderRadius: 13 / 2,
    backgroundColor: theme.primary,
    borderRadius: 13 / 2,
    marginTop: 5,
  },
  headerSection: {
    alignItems: "center",
  },
  heading: {
    color: theme.white,
    textAlign: "center",
    fontSize: 20,
    fontFamily: theme.bold,
  },
  qrMain: {
    backgroundColor: theme.secondary,
    width: "80%",
    borderRadius: 25,
    padding: 15,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  qrHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  qrHeading: {
    color: theme.white,
    fontSize: 15,
    fontFamily: theme.semiBold,
    marginLeft: 10,
  },
  qr: {
    alignSelf: "center",
    backgroundColor: theme.white,
    padding: 5,
    marginTop: 15,
  },
  qrLink: {
    color: theme.white,
    fontSize: 12,
    fontFamily: theme.bold,
    marginTop: 10,
  },
  description: {
    color: theme.white,
    fontSize: 14,
    fontFamily: theme.bold,
    textAlign: "center",
  },
  footerButton: {
    backgroundColor: theme.primary,
    height: 43,
    width: 43,
    borderRadius: 43 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  footerMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: "25%",
    marginTop: 30,
    marginBottom: 20,
  },
});
export default Swap;
