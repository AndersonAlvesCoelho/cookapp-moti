import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { Button } from "../Button";

import { MotiView } from "moti";

export function Footer() {
  return (
    <MotiView
      from={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{
        type: 'timing',
        duration: 3000
      }}
    >
      <Text style={styles.label}>Detail</Text>

      <Text style={styles.text}>
        Get 50% discount on the special and delicious sushi and stay connected
        for further discounts.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>$22</Text>

        <Button />
      </View>
    </MotiView>
  );
}
