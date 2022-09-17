import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Linking,
} from "react-native";
import theme from "./../../../theme";
import { WithLocalSvg } from "react-native-svg";
import { ProgressBar } from "react-native-paper";
const FlexibleMining = (props) => {
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
        <View style={styles.headerData}>
          <WithLocalSvg
            asset={require("./../../../assets/svg/logo.svg")}
            width={50}
            height={50}
            fill={"#000"}
          />
          <Text style={styles.heading}>0.0000 MARCO</Text>
          <Text style={styles.heading}>Flexible Mining Pool</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <View style={styles.progressCard}>
            <View style={styles.progresData}>
              <Text style={styles.progress}>MARCO APR 11%</Text>
              <Text style={styles.progress}>Balance</Text>
            </View>
            <Text style={styles.stopped}>Stopped</Text>
            <ProgressBar
              style={styles.progressBar}
              progress={1}
              color="#288FFF"
            />
            <View style={styles.progresData}>
              <Text style={styles.progress}>0.000000011 MARCO</Text>
              <Text style={styles.progress}>00.000</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.bannerMain}
            onPress={() => {
              Linking.openURL("https://t.me/melegacommunity");
            }}
          >
            <ImageBackground
              source={require("./../../../assets/images/baner.png")}
              style={styles.bannerImage}
            >
              <View style={styles.bannerInnder}>
                <Text style={styles.bannerText}>
                  "Hey Bor!{"\n"}Feeling Lucky?{"\n"}Join the{"\n"}Lottery!"
                </Text>
                <View style={styles.bannerLogo}>
                  <WithLocalSvg
                    asset={require("./../../../assets/svg/logo.svg")}
                    width={60}
                    height={60}
                    fill={"#000"}
                  />
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <View style={styles.lockedBox}>
            <Text style={styles.lockedBoxData}>Total locked</Text>
            <Text style={styles.lockedBoxData}>00.00</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>ENABLE CONTRACT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText2}>UNLOCK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CLAIM STOPED</Text>
          </TouchableOpacity>
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
  containerInner: {
    paddingHorizontal: 20,
    flexDirection: "column",
    flex: 1,
  },
  back: {
    marginTop: 20,
  },
  headerData: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  heading: {
    color: theme.white,
    fontSize: 15,
    fontFamily: theme.semiBold,
    textAlign: "center",
    marginVertical: 10,
  },
  progressCard: {
    backgroundColor: theme.secondary,
    borderRadius: 10,
    marginTop: 40,
    padding: 15,
  },
  progresData: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  progress: {
    color: theme.white,
    fontSize: 10,
    fontFamily: theme.medium,
  },
  stopped: {
    color: theme.white,
    fontSize: 11,
    fontFamily: theme.semiBold,
    textAlign: "center",
  },
  progressBar: {
    height: 16,
    borderRadius: 15,
    marginVertical: 10,
  },
  bannerMain: {
    marginTop: 30,
  },
  bannerImage: {
    height: 213,
  },
  bannerInnder: {
    alignSelf: "flex-end",
    flex: 1,
    margin: 15,
    alignItems: "center",
  },
  bannerText: {
    fontFamily: theme.cavolini,
    textAlign: "right",
    fontSize: 18,
  },
  bannerLogo: {
    marginLeft: 50,
    marginTop: 30,
  },
  lockedBox: {
    backgroundColor: theme.green,
    height: 49,
    borderRadius: 5,
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  lockedBoxData: {
    color: theme.white,
    fontSize: 13,
    fontFamily: theme.semiBold,
  },
  button: {
    backgroundColor: theme.secondary,
    height: 49,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: theme.white,
    fontSize: 13,
    fontFamily: theme.semiBold,
  },
  button2: {
    backgroundColor: "#D9D9D9",
    height: 49,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText2: {
    color: theme.secondary,
    fontSize: 13,
    fontFamily: theme.semiBold,
  },
});
export default FlexibleMining;
