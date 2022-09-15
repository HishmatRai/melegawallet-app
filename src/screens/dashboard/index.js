import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import theme from "../../../theme";
const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInner}>
        <Text>fsfsd</Text>
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
});
export default Dashboard;
