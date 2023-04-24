import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import colors from "../constants/colors";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  text: {
    color: "#343434",
  },
  separator: {
    backgroundColor: "#e2e2e2",
    width: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});
export default function RowItem({ text, rightIcon, onPress }) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
}
export function RowSeparator() {
  return <View style={styles.separator} />;
}
