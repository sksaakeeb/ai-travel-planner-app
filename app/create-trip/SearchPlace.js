import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";

export default function SearchPlace() {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent : true,
            headerTitle: 'Search'
        })
    }, [])
    
  return (
    <SafeAreaView style={{marginTop: 55, margin: 25}}>
      <View>
        <GooglePlacesAutocomplete
          placeholder="Search"
          fetchDetails = {true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
            language: "en",
          }}
        />
      </View>
    </SafeAreaView>
  );
}
