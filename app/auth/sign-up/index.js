import { View, Text, TextInput, Pressable, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/FirebaseConfig";

export default function index() {
  const router = useRouter();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onCreateAccount = () => {
    if (!name && !email && !password) {
      ToastAndroid.show("Please enter all fields.", ToastAndroid.LONG);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ padding: 25 }}>
        <Text style={{ fontSize: 24 }}>Create New Account</Text>
        <Text style={{ fontSize: 18, color: "gray", marginTop: 10 }}>
          Let's sign you up
        </Text>
      </View>

      <View style={{ paddingHorizontal: 25, marginTop: 45 }}>
        <Text>Name</Text>
        <TextInput
          style={{
            borderColor: "gray",
            borderWidth: 1,
            padding: 10,
            borderRadius: 15,
          }}
          placeholder="Enter your name"
          onChangeText={(value) => setName(value)}
        />
      </View>

      <View style={{ paddingHorizontal: 25, marginTop: 15 }}>
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

      <Pressable onPress={onCreateAccount}>
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
            Sign Up
          </Text>
        </View>
      </Pressable>

      <View style={{ paddingHorizontal: 25, marginTop: 10 }}>
        <Pressable onPress={() => router.push("auth/log-in")}>
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
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
