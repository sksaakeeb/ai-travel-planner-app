import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OptionCard({ option, selectedOption}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: "#d3d3d3",
          padding: 25,
          borderRadius: 18,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text>{option.title}</Text>
          <Text>{option.desc}</Text>
        </View>
        <Text>{option.icon}</Text>
      </View>
      
    </SafeAreaView>
  );
}
