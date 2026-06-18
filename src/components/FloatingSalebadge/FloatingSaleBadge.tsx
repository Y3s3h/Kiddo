import React from "react";
import {
  StyleSheet,
  Text,
} from "react-native";

import * as Animatable from "react-native-animatable";

const FloatingSaleBadge = () => {
  return (
    <Animatable.View
      animation="pulse"
      iterationCount="infinite"
      duration={1500}
      style={styles.container}
    >
      <Text style={styles.text}>
        🔥 SALE LIVE
      </Text>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",

    top: 20,
    right: 20,

    backgroundColor: "#EF4444",

    paddingHorizontal: 18,
    paddingVertical: 10,

    borderRadius: 30,

    zIndex: 100,

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,

    elevation: 8,
  },

  text: {
    color: "white",
    fontWeight: "700",
    fontSize: 14,
  },
});

export default React.memo(FloatingSaleBadge);