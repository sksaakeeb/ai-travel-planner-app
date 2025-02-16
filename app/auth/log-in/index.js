import { View, Text, TextInput, Pressable, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/FirebaseConfig";

export default function index() {
  const router = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onLogin = () => {
    if (!email && !password) {
      ToastAndroid.show("Please enter all fields.", ToastAndroid.LONG);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.replace("HomeScreen");
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        if (errorCode == "auth/invalid-email") {
          ToastAndroid.show("Invalid user credentials", ToastAndroid.LONG);
        }
      });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ padding: 25 }}>
        <Text style={{ fontSize: 24 }}>Let's sign you in</Text>
        <Text style={{ fontSize: 18, color: "gray", marginTop: 10 }}>
          Welcome back!
        </Text>
      </View>

      <View style={{ paddingHorizontal: 25, marginTop: 45 }}>
        <Text>Email</Text>
        <TextInput
          style={{
            borderColor: "gray",
            borderWidth: 1,
            padding: 10,
            borderRadius: 15,
          }}
          placeholder="Enter your email"
          onChangeText={(value) => setEmail(value)}
        />
      </View>

      <View style={{ paddingHorizontal: 25, marginTop: 15 }}>
        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={{
            borderColor: "gray",
            borderWidth: 1,
            padding: 10,
            borderRadius: 15,
          }}
          placeholder="Enter your password"
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      <Pressable onPress={onLogin}>
        <View style={{ paddingHorizontal: 25, marginTop: 50 }}>
          <Text
            style={{
              textAlign: "center",
              padding: 15,
              color: "white",
              backgroundColor: "black",
              borderRadius: 15,
            }}
          >
            Log In
          </Text>
        </View>
      </Pressable>

      <View style={{ paddingHorizontal: 25, marginTop: 10 }}>
        <Pressable onPress={() => router.push("auth/sign-up")}>
          <Text
            style={{
              textAlign: "center",
              padding: 15,
              color: "white",
              backgroundColor: "black",
              borderRadius: 15,
            }}
          >
            Create new account
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
