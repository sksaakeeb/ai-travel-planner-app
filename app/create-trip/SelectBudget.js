import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { selectBudgetOption } from "../../constants/TravellerOption";
import {OptionCard} from "../../components/TravellerOptionCard/OptionCard"

export default function SelectBudget() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: 500 }}>Budget</Text>
        <Text style={{ fontSize: 18, color: "gray" }}>
          Select your spending habit for the tarvelling
        </Text>
      </View>

      <FlatList data={selectBudgetOption}
      renderItem={({item, index}) => (
        <View>
            <OptionCard option={item}/>
        </View>
      )} />
    </SafeAreaView>
  );
}
