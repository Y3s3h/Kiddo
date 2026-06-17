import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import ProductCard from "../ProductCard/ProductCard";
import { Action } from "../../types/action.types";

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
    action?: Action;
}

interface ProductGridProps {
  title: string;
  products: Product[];
}

const ProductGrid = ({
  title,
  products,
}: ProductGridProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>

      <FlatList
        data={products}
        numColumns={2}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            
          <ProductCard
  id={item.id}
  name={item.name}
  price={item.price}
  imageUrl={item.imageUrl}
  action={item.action}
/>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
});

export default React.memo(ProductGrid);