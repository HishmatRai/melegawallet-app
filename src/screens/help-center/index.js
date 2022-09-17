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
// components
import { Input, Button } from "./../../components";
const HelpCenter = (props) => {
  const [topic, setTopic] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
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
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <Text style={styles.heading}>Make move</Text>
          <Text style={styles.heading2}>Easy & Fast</Text>
          <Text style={styles.subHeading}>
            What issue can we help you{"\n"}with today?
          </Text>
          <Input
            placeholder="Topic: Technical Problem"
            value={topic}
            onChangeText={(topic) => setTopic(topic)}
          />
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
          <Input
            placeholder="Your Query"
            value={query}
            onChangeText={(query) => setQuery(query)}
            multiline={true}
            inputType={2}
          />
        </ScrollView>
        <View style={styles.button}>
          <Button type={1} buttonTitle="Submit" />
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
  back: {
    marginVertical: 20,
  },
  heading: {
    color: theme.white,
    fontSize: 31,
    fontFamily: theme.bold,
    marginTop: 5,
  },
  heading2: {
    color: theme.primary,
    fontSize: 31,
    fontFamily: theme.bold,
    marginTop: 5,
  },
  subHeading: {
    color: theme.white,
    fontSize: 15,
    fontFamily: theme.semiBold,
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    marginVertical: 20,
  },
});
export default HelpCenter;
