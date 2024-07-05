import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { AntDesign } from "@expo/vector-icons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";

export default function HomeScreen() {
  const [userTrips, setUserTrips] = useState([]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 15,
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: 500 }}>My Trip</Text>
        <AntDesign name="pluscircleo" size={30} color="black" />
      </View>

      {userTrips?.length == 0 ? <StartNewTripCard /> : null}
    </SafeAreaView>
  );
}
