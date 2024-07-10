import { Text, View } from "react-native";
import { auth } from "../configs/FirebaseConfig";
import LandingScreen from "../screens/LandingScreen";
import { Redirect } from "expo-router";
import SelectDate from "../app/create-trip/SelectDate";
export default function Index() {
  const user = auth.currentUser;

  return (
    <View>{user ? <Redirect href={"HomeScreen"} /> : <LandingScreen />}</View>
    
  );
}
