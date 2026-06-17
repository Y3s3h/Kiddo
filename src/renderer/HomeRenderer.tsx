import React, { useCallback } from "react";
import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";

import { componentRegistry } from "../registry/componentRegistry";
import { HomeComponent } from "../types/component.types";

interface HomeRendererProps {
  components: HomeComponent[];
}

const HomeRenderer = ({
  components,
}: HomeRendererProps) => {
  const renderItem = useCallback(
    ({ item }: { item: HomeComponent }) => {
      const Component =
        componentRegistry[
          item.type as keyof typeof componentRegistry
        ];

      if (!Component) {
  

  return null;
}

      return <Component {...item} />;
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