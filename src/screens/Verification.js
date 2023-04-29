import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Spacer from "../components/Spacer";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Card from "../components/Card";

const color = "#1D9765";
const size = hp("3.5");
const Verification = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://18.142.153.136:3000/api/application/member_details?id=223", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTc3ODg3MzQsImV4cCI6MzE3MjAyMjMxMTM0fQ.BKI9EzOzDU3Esv1wlyLHgjESKUB_tvHiM6MN-GwrASk",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => setError(error));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#EFEFEF",
            padding: hp("2"),
          }}
        >
          <View>
            <Text
              style={{
                textTransform: "uppercase",
                fontSize: hp("4"),
                fontWeight: "900",
                color: "#1D9765",
              }}
            >
              Growtech
            </Text>
            <Text style={{ fontSize: hp("2"), fontWeight: "600" }}>
              Application Verifications
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            {/* <Text>icons</Text> */}
            <TouchableOpacity onPress={() => alert("Bell Pressed")}>
              <MaterialIcons
                name="notifications-active"
                size={hp("2")}
                color={"gray"}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("Menu Pressed")}>
              <Entypo name="menu" size={hp("2")} color={"gray"} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Spacer />
          <View
            style={{
              flexDirection: "row",
              width: wp("90%"),
              alignSelf: "center",
              shadowColor: "black",
              shadowOpacity: 0.2,
              shadowOffset: { width: 0, height: 2 },
              elevation: 7,
              borderRadius: 10,
              shadowRadius: 5,
              margin: hp("1"),
              // justifyContent: "center",
              backgroundColor: "#fff",
              alignItems: "center",
              paddingLeft: hp("2"),
              padding: hp("0.5"),
            }}
          >
            <Image
              // source={{ uri: data.data.member_personal_details.profile_pic }}
              source={{
                uri: "data:image/jpeg;base64,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",
              }}
              style={{
                height: hp("10"),
                width: wp("20"),
                shadowColor: "black",
                shadowOpacity: 0.2,
                shadowOffset: { width: 0, height: 2 },
                elevation: 7,
                borderRadius: 50,
                shadowRadius: 5,
                margin: hp("1"),
              }}
            />

            <View>
              <Text style={styles.user}>
                {data.data.member_personal_details.first_name}
                {data.data.member_personal_details.last_name}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <AntDesign
                  name="idcard"
                  size={hp("2")}
                  color={color}
                  style={{ padding: hp("0.5") }}
                />
                <Text style={[styles.user, { color: "#1D9765" }]}>
                  {data.data.member_personal_details.cnic}
                </Text>
              </View>
            </View>
          </View>

          <Spacer />

          <View style={{ padding: hp("3") }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <SimpleLineIcons name="user" size={size} color={color} />
                <Text style={styles.details}>
                  {data.data.member_personal_details.gender}
                </Text>
                <Text style={styles.title}>Gender</Text>
              </View>
              <View style={{ marginLeft: hp("7") }}>
                <MaterialCommunityIcons name="ring" size={size} color={color} />
                <Text style={styles.details}>
                  {data.data.member_personal_details.marital_status}
                </Text>
                <Text style={styles.title}>Maital Status</Text>
              </View>
              <View style={{ marginRight: hp("1.5") }}>
                <MaterialIcons
                  name="family-restroom"
                  size={size}
                  color={color}
                />
                <Text style={styles.details}>
                  {data.data.member_personal_details.parantage}
                </Text>
                <Text style={styles.title}>
                  Parentage({data.data.member_personal_details.parantage_type})
                </Text>
              </View>
            </View>

            <Spacer />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Feather name="phone" size={size} color={color} />
                <Text style={styles.details}>
                  {data.data.member_personal_details.phone}
                </Text>
                <Text style={styles.title}>Mobile</Text>
              </View>
              <View>
                <AntDesign name="calendar" size={size} color={color} />
                <Text style={styles.details}>
                  {data.data.member_personal_details.dob}
                </Text>
                <Text style={styles.title}>Date of Birth</Text>
              </View>
              <View>
                <FontAwesome5 name="user-graduate" size={size} color={color} />
                <Text style={styles.details}>
                  {data.data.member_personal_details.education}
                </Text>
                <Text style={styles.title}>Education</Text>
              </View>
            </View>
          </View>

          <View>
            <Card title="family details">
              <View style={styles.row}>
                <Text style={styles.textStyle}>Family Member Name </Text>
                <Text style={styles.boldText}>
                  {data.data.member_personal_details.mother}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.textStyle}> Religion </Text>
                <Text style={styles.boldText}>
                  {data.data.member_personal_details.mreligion}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.textStyle}>is Disable </Text>
                <Text style={styles.boldText}>
                  {data.data.member_personal_details.is_disable}
                </Text>
              </View>
            </Card>
          </View>

          <Spacer />
          <View>
            <Card title="Request Amount">
              <View style={styles.row}>
                <Text style={styles.textStyle}>Request Amount </Text>
                <Text style={styles.boldText}>250,000/-</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.textStyle}>Category</Text>
                <Text style={styles.boldText}>Category</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.textStyle}>Purpose</Text>
                <Text style={styles.boldText}>Purpose</Text>
              </View>
              <Spacer />
              <TouchableOpacity onPress={() => alert("Pressed")}>
                <Text
                  style={{
                    color: "red",
                    fontSize: hp("2"),
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  Pending
                </Text>
              </TouchableOpacity>
            </Card>
          </View>
          <Spacer />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    padding: hp("1"),
  },
  boldText: {
    fontWeight: "700",
    padding: hp("1"),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: hp("2.5"),
  },
  user: {
    fontSize: hp("2"),
    fontWeight: "600",
    padding: hp("0.5"),
  },
  details: {
    fontWeight: "600",
    fontSize: hp("1.7"),
    // paddingTop:hp('1')
  },
  title: {
    color: "gray",
  },
});

export default Verification;
