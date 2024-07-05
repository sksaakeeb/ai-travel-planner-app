import { View, Text, FlatList } from "react-native";
import React from "react";
import {travellerList} from "../../constants/TravellerOption";
import { SafeAreaView } from "react-native-safe-area-context";
import OptionCard from "../../components/TravellerOptionCard/OptionCard"

export default function SelectTraveller() {
  return (
    <SafeAreaView style={{ flex: 1, margin: 25 }}>
      <View>
        <Text style={{fontSize: 30, fontWeight: 500}}>Who is travelling?</Text>
        <Text style={{fontSize: 18, color: "gray", marginTop: 10}}>Choose your partner</Text>
      </View>

     
        <FlatList 
        data={travellerList}
        renderItem={(item, index) => (
            <View>
                <OptionCard option={item}/>
            </View>
        )}/>
      
    </SafeAreaView>
  );
}
