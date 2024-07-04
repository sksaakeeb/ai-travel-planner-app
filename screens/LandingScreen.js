import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function LandingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View>
        <Image
          style={{ height: 450, width: "100%" }}
          source={require("../assets/images/landing.jpg")}
        />
      </View>
      <View style={{ borderRadius: 99, padding: 15 }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 500,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          AI Travel Planner
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: 10,
            padding: 10,
            color: "gray",
          }}
        >
          Empower your journeys with our AI-powered travel planner app.
          Personalize itineraries tailored to your preferences, uncover hidden
          gems with smart recommendations, and optimize every aspect of your
          trip seamlessly.
        </Text>

        <View>
          <Pressable
            onPress={() => router.push("auth/log-in")}
            style={{ marginTop: 35, alignItems: "center" }}
          >
            <Text
              style={{
                paddingHorizontal: 85,
                paddingVertical: 15,
                borderRadius: 99,
                backgroundColor: "black",
                color: "white",
                fontSize: 18,
              }}
            >
              Get started
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
