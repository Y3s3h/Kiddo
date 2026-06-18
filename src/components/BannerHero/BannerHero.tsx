import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const images = [
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200",
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200",
];

const BannerHero = () => {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        autoPlay
        autoPlayInterval={2000}
        width={width}
        height={240}
        data={images}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image
              source={{ uri: item }}
              style={styles.banner}
            />

            <View style={styles.overlay}>
              <Text style={styles.title}>
                🎒 Back To School
              </Text>

              <Text style={styles.subtitle}>
                Everything Your Kids Need
              </Text>

              <Text style={styles.discount}>
                Up To 60% OFF
              </Text>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                  Shop Now →
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderRadius: 24,
    overflow: "hidden",
  },

  slide: {
    flex: 1,
  },

  banner: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: 34,
    fontWeight: "700",
    marginBottom: 10,
  },

  subtitle: {
    color: "#F3F4F6",
    fontSize: 18,
    marginBottom: 10,
  },

  discount: {
    color: "#FFD700",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#FF7A00",
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 16,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default React.memo(BannerHero);