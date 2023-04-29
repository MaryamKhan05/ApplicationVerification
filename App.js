import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Verification from "./src/screens/Verification";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Verification />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
