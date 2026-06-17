import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useCartStore } from "../../store/cartStore";
import { useTheme } from "../../context/ThemeContext";

const CartCounter = () => {
  const count = useCartStore(
    (state) => state.count
  );

  const theme = useTheme();

  

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            theme.background,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: theme.primary,
          },
        ]}
      >
        Cart: {count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },

  text: {
    fontSize: 18,
    fontWeight: "700",
  },
});

export default React.memo(CartCounter);