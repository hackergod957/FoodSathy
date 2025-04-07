import { View, Text, Image } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const splashScreen = require("@/assets/images/splashScreen.png"); 
const logo = require("@/assets/images/icon.png"); 

const SplashScreen = () => {
  const [fontsLoaded] = useFonts({
    "Ketchup Manis Demo": require("@/assets/fonts/Ketchup Manis Demo.ttf"), 
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-1 justify-center items-center bg-black">
      <Image
        source={splashScreen}
        className="absolute w-full h-full z-0"
        resizeMode="cover"
      />
      <Image source={logo} className="w-56 h-56" />
      <Text
        className="text-[18px] mt-[22px] text-white z-10"
        style={{
          fontFamily: "Ketchup Manis Demo",
        }}
      >
        Hot food at your door wait no more!
      </Text>
    </View>
  );
};

export default SplashScreen;
