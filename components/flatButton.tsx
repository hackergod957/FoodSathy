import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";

interface Props {
  text: string;
  onPress: () => void;
  style: string;
  textStyle?: string;
  iconEnable?: boolean;
  icon_uri?: ImageSourcePropType; // Use ImageSourcePropType for flexibility
}

const FlatButton = ({
  text,
  onPress,
  style,
  textStyle,
  iconEnable,
  icon_uri,
}: Props) => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className={`${style} rounded-3xl flex-row justify-center items-center gap-4`}
      >
        {/* Render the icon if enabled */}
        {iconEnable && icon_uri && (
          <Image
            source={icon_uri} // Pass the image source directly
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        )}
        <Text
          className={`${textStyle} text-white`}
          style={{ fontFamily: "Poppins-Regular" }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FlatButton;
