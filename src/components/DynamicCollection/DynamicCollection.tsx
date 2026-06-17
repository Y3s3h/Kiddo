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

interface DynamicCollectionProps {
  title: string;
  products: Product[];
}

const DynamicCollection = ({
  title,
  products,
}: DynamicCollectionProps) => {
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
           <ProductCard
  id={item.id}
  name={item.name}
  price={item.price}
  imageUrl={item.imageUrl}
  action={item.action}
/>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },

  cardWrapper: {
    width: 220,
    marginRight: 10,
  },
});

export default React.memo(DynamicCollection);