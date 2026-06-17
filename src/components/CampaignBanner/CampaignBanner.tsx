import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Props {
  title: string;
  background: string;
}

const CampaignBanner = ({
  title,
  background,
}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: background,
        },
      ]}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
  },

  text: {
    fontSize: 18,
    fontWeight: "700",
  },
});

export default React.memo(
  CampaignBanner
);