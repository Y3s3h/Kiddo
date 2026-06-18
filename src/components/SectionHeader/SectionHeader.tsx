import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  emoji?: string;
}

const SectionHeader = ({
  title,
  subtitle,
  emoji = "🔥",
}: SectionHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {emoji} {title}
      </Text>

      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    marginTop: 6,
    color: "#6B7280",
    fontSize: 15,
  },
});

export default React.memo(SectionHeader);