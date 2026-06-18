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
  id,
  name,
  price,
  imageUrl,
}: ProductCardProps) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />

      <View style={styles.badgeContainer}>
        <Text style={styles.rating}>
          ⭐ 4.8
        </Text>

        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>
            20% OFF
          </Text>
        </View>
      </View>

      <Text style={styles.name}>
        {name}
      </Text>

      <Text style={styles.subtitle}>
        Kids Essentials
      </Text>

      <View style={styles.priceRow}>
        <Text style={styles.price}>
          ₹{price}
        </Text>

        <Text style={styles.oldPrice}>
          ₹{price + 50}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() =>
          handleAction({
            type: "ADD_TO_CART",
            payload: {
              id,
            },
          })
        }
      >
        <Text style={styles.buttonText}>
          Add To Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
  flex: 1,
  backgroundColor: "#FFFFFF",

  margin: 10,
  padding: 14,

  borderRadius: 28,

  shadowColor: "#000",
  shadowOpacity: 0.08,
  shadowRadius: 15,

  elevation: 6,

  borderWidth: 1,
  borderColor: "#F3F4F6",
},
 image: {
  width: "100%",
  height: 180,
  borderRadius: 20,

  resizeMode: "cover",
},


 badgeContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",

  marginBottom: 15,
},
  rating: {
  fontSize: 13,
  color: "#F59E0B",
  fontWeight: "700",
},

 discountBadge: {
  backgroundColor: "#DCFCE7",

  paddingHorizontal: 10,
  paddingVertical: 6,

  borderRadius: 30,
},

 discountText: {
  color: "#16A34A",
  fontWeight: "700",
  fontSize: 12,
},

  name: {
  fontSize: 18,
  fontWeight: "700",

  color: "#111827",

  marginTop: 12,
},
  subtitle: {
  marginTop: 6,
  color: "#9CA3AF",
},

  price: {
  color: "#FF7A00",

  fontSize: 24,
  fontWeight: "700",
},

  priceRow: {
  flexDirection: "row",
  alignItems: "center",
  marginTop: 10,
},

  oldPrice: {
    marginLeft: 10,
    color: "#9CA3AF",
    textDecorationLine: "line-through",
  },

 button: {
  backgroundColor: "#FF7A00",

  paddingVertical: 15,

  borderRadius: 16,

  marginTop: 20,

  alignItems: "center",

  shadowColor: "#FF7A00",
  shadowOpacity: 0.25,
  shadowRadius: 10,

  elevation: 5,
},

  buttonText: {
    color: "white",
    fontWeight: "700",
  },
});
export default React.memo(ProductCard);