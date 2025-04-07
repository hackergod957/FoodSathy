import { View, Text, TextInput } from "react-native";
import React from "react";

type InputModeType =
  | "text"
  | "numeric"
  | "decimal"
  | "tel"
  | "email"
  | "url"
  | "search"
  | "none";
interface props {
  placeholder: string;
  keyboard_type: InputModeType;
  maxLength: number;
  onChangeText: (e: any) => void;
  style? : string,
}
const Input_Field = ({
  placeholder,
  keyboard_type,
  maxLength,
  onChangeText,
  style
}: props) => {
  return (
    <TextInput
      className={`${style} outline-none px-4`}
      returnKeyType="done"
      inputMode={keyboard_type}
      onChangeText={onChangeText}
      maxLength={maxLength}
      autoComplete="tel"
    />
  );
};

export default Input_Field;
