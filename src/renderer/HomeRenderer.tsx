import React, { useCallback } from "react";
import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";

import { componentRegistry } from "../registry/componentRegistry";
import { HomeComponent } from "../types/component.types";
import * as Animatable from "react-native-animatable";

interface HomeRendererProps {
  components: HomeComponent[];
}

const HomeRenderer = ({
  components,
}: HomeRendererProps) => {
  
  const renderItem = useCallback(
  ({
    item,
    index,
  }: {
    item: HomeComponent;
    index: number;
  }) => {
    const Component =
      componentRegistry[
        item.type as keyof typeof componentRegistry
      ];

    if (!Component) {
      console.warn(
        `Unsupported component: ${item.type}`
      );

      return null;
    }

    let animation = "fadeInUp";

    switch (item.type) {
      case "BANNER_HERO":
        animation = "fadeInDown";
         animation = "zoomIn";
        break;

      case "PRODUCT_GRID_2X2":
        animation = "fadeInLeft";
        break;

      case "DYNAMIC_COLLECTION":
        animation = "fadeInRight";
        break;
    }

    return (
      <Animatable.View
        animation={animation}
        duration={1000}
        delay={index * 300}
        useNativeDriver
      >
        <Component {...item} />
      </Animatable.View>
    );
  },
  []
);

  return (
    <FlashList
      data={components}
      renderItem={renderItem}
      estimatedItemSize={250}
      keyExtractor={(item) => item.id}
    />
  );
};

export default HomeRenderer;