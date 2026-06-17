import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Props {
  campaign: string;
}

const FullScreenOverlay = ({
  campaign,
}: Props) => {
  return (
    <View
      pointerEvents="none"
      style={styles.overlay}
    >
      <Text style={styles.text}>
        {campaign}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    zIndex: 999,

    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 40,
    opacity: 0.1,
    fontWeight: "900",
  },
});

export default React.memo(
  FullScreenOverlay
);