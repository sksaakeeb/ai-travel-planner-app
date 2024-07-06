import { View, Text } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import CalendarPicker from "react-native-calendar-picker";

export default function SelectDate() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ margin: 30 }}>
        <Text style={{ fontSize: 30, fontWeight: 500 }}>Select date</Text>
      </View>

      <View>
        
      </View>
    </SafeAreaView>
  );
}
