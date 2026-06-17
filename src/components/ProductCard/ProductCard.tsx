import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Action } from "../../types/action.types";
import { handleAction } from "../../actions/actionDispatcher";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  action?: Action;
}
const ProductCard = ({
  name,
  price,
  imageUrl,
    action,
}: ProductCardProps) => {
  return (
  <TouchableOpacity
    style={styles.card}
    onPress={() => {
      if (action) {
        handleAction(action);
      }
    }}
  >
    <Image
      source={{ uri: imageUrl }}
      style={styles.image}
    />

    <Text style={styles.name}>
      {name}
    </Text>

    <Text style={styles.price}>
      ₹{price}
    </Text>
  </TouchableOpacity>
);
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    margin: 4,
  },

  image: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },

  name: {
    marginTop: 8,
    fontWeight: "600",
  },

  price: {
    marginTop: 4,
  },
});

export default React.memo(ProductCard);