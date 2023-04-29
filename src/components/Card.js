import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Card = ({ children, title }) => {
  return (
    <View
      style={{
        width: wp("90%"),
        alignSelf: "center",
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        elevation: 7,
        borderRadius: 20,
        shadowRadius: 5,
        margin: hp("1"),
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          backgroundColor: "black",
          borderTopRightRadius: hp("1"),
          borderTopLeftRadius: hp("1"),
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: hp("2"),
            padding: hp("2"),
            fontWeight: "700",
          }}
        >
          {title}
        </Text>
      </View>

      <View style={{ backgroundColor: "white", padding: hp("2") }}>
        {/* <Text style={styles.textStyle}>helo</Text> */}
        {children}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: hp("2"),
    fontWeight: "400",
  },
});
export default Card;
