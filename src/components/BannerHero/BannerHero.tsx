import React from "react";
import {
  Image,
  StyleSheet,
  View,
} from "react-native";

interface BannerHeroProps {
  imageUrl: string;
}

const BannerHero = ({
  imageUrl,
}: BannerHeroProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.banner}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },

  banner: {
    width: "100%",
    height: 180,
    borderRadius: 12,
  },
});

export default React.memo(BannerHero);