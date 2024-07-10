import { View, Text, Pressable, ToastAndroid } from "react-native";
import React, { useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { useRouter } from "expo-router";

export default function SelectDate() {

  const router = useRouter();

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const onDateChange = (date, type) => {
    console.log(date, type);
    if (type == "START_DATE") {
      setStartDate(moment(date));
    }
    else{
      setEndDate(moment(date))
    }
    
  };

  const onDateSelectionContinue = () => {
    if(!startDate && !endDate) {
      ToastAndroid.show("Please select start and end date.", ToastAndroid.SHORT);
      return;
    }
    const totalNoOfDays = endDate.diff(startDate, 'days')
    console.log(totalNoOfDays+1)
    router.push('/create-trip/SelectBudget')
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ margin: 30 }}>
        <Text style={{ fontSize: 30, fontWeight: 500 }}>Select date</Text>
      </View>

      <View>
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={5}
          selectedRangeStyle={{
            backgroundColor: "black",
          }}
          selectedDayTextStyle={{
            color: "white",
          }}
        />
      </View>

      <Pressable onPress={onDateSelectionContinue}>
        <View style={{ marginTop: 15, padding: 20 }}>
          <Text
            style={{
              backgroundColor: "black",
              color: "white",
              padding: 18,
              textAlign: "center",
              borderRadius: 18,
            }}
          >
            Continue
          </Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}
