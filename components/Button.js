import { TouchableOpacity, View, Text, Image } from "react-native";
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";

import { useNavigation } from "@react-navigation/native";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ fontSize, onButtonPress, ...props }) => {
  const navigation = useNavigation();
  // console.log("data -", data);
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        // maxWidth: 120,

        padding: SIZES.small,
        ...props,
      }}
      onPress={onButtonPress}

      // onPress={() => navigation.navigate("Details", data)}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: 14,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
