import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import ProductCard from "../ProductCard/ProductCard";
import { Action } from "../../types/action.types";
import { Dimensions } from "react-native";
import SectionHeader from "../SectionHeader/SectionHeader";

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

  const screenWidth = Dimensions.get("window").width;

const numColumns =
  screenWidth > 1000
    ? 4
    : screenWidth > 700
    ? 3
    : 2;
  return (
    <View style={styles.container}>
     <SectionHeader
 title={title}
 subtitle="Top picks for your kids"
 emoji="🔥"
/>

      <FlatList
        data={products}
       numColumns={numColumns}
key={numColumns}
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