import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";

const logo = require("@/assets/images/icon.png");

interface props {
  title: string;
  icon: boolean;
  uri?: string | undefined;
}
const DefaultProfile = require("@/assets/images/defaultProfile.png");

const Navbar = ({ title, icon, uri }: props) => {
  const [fontsLoaded] = useFonts({
    "Ketchup Manis Demo": require("@/assets/fonts/Ketchup Manis Demo.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-row  items-center px-4 h-16 gap-28  justify-evenly">
      <Image source={logo} className="w-[50px] h-[50px]" resizeMode="contain" />

      <Text
        className=" text-xl font-normal text-slate-500 mt-1 "
        style={{
          fontFamily: "Ketchup Manis Demo",
        }}
      >
        {title}
      </Text>

      <View className="flex-row items-center justify-center gap-3">
        {icon && <Ionicons name="menu-outline" size={20} />}
        <Image
          source={uri ? {uri} : DefaultProfile}
          className="w-7 h-7 "
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Navbar;
