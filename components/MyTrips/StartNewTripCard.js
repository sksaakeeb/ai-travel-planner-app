import { View, Text, Pressable } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function StartNewTripCard() {
  const router = useRouter();

  return (
    <View
      style={{
        marginTop: 15,
        padding: 55,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons name="location-outline" size={35} color="black" />
      <Text style={{ fontSize: 24, marginTop: 10 }}>No trips planned yet</Text>
      <Text style={{ color: "gray", textAlign: "center", marginTop: 15 }}>
        Looks like it's a time to plan a new trip. Get started below.
      </Text>
      <Pressable onPress={() => router.push("/create-trip/SearchPlace")}>
        <View>
          <Text
            style={{
              padding: 15,
              backgroundColor: "black",
              color: "white",
              marginTop: 15,
              borderRadius: 25,
            }}
          >
            Start a new trip
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
