import React from "react";

import {
  StyleSheet,
  SafeAreaView,
  ScrolView,
  ScrollView,
  Linking,
} from "react-native";
import RowItem, { RowSeparator } from "../components/RowItem";
import { Entypo } from "@expo/vector-icons";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const openLink = (url) => {
  return Linking.openURL(url).catch(() => {
   alert("Sorry, something went wrong.");
  });
};

export default function Options() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <RowItem
          text="Themes"
          rightIcon={<Entypo name="chevron-right" size={20} color="black" />}
          onPress={() => alert("todo!")}
        />
        <RowSeparator />
        <RowItem
          text="React Native Basics"
          rightIcon={<Entypo name="export" size={20} color="black" />}
          onPress={() => openLink("https://google.com")}
        />
        <RowSeparator />
        <RowItem
          text="React Native by Example"
          rightIcon={<Entypo name="export" size={20} color="black" />}
          onPress={() => alert("todo!")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
