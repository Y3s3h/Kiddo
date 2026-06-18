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
    <View style={styles.wrapper}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: "#fff",
          },
        ]}
      >
        <View>
          <Text style={styles.greeting}>
            👋 Hello Parent!
          </Text>

          <Text style={styles.subtitle}>
            Everything for your kids
          </Text>
        </View>

        <View
          style={[
            styles.cartBadge,
            {
              backgroundColor:
                theme.primary,
            },
          ]}
        >
          <Text style={styles.cartText}>
            🛒 {count}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingTop: 12,
    marginBottom: 10,
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    padding: 20,

    borderRadius: 24,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,

    elevation: 5,
  },

  greeting: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    marginTop: 5,
    fontSize: 14,
    color: "#6B7280",
  },

  cartBadge: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 30,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },

  cartText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});

export default React.memo(CartCounter);