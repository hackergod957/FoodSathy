import { View, Text } from "react-native";

interface props {
    text: string
}
const OrSeparator = ({text}:props) => {
  return (
    <View className="flex-row my-4 w-96 items-center justify-center">
      <View className="flex-1 h-[2px] bg-gray-300" />
      <Text className="mx-4 text-gray-500  font-bold text-2xl">{text}</Text>
      <View className="flex-1 h-[2px] bg-gray-300" />
    </View>
  );
};

export default OrSeparator;
