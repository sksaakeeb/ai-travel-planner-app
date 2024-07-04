import { Stack } from "expo-router";
import {auth} from "../configs/FirebaseConfig"
export default function RootLayout() {

  
  return (
     <Stack screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="index" /> */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
