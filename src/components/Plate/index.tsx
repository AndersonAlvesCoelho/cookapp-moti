import React from "react";

import { styles } from "./styles";
import plateImg from "../../assets/plate.png";

import { MotiImage } from "moti";

export function Plate() {
  return (
    <MotiImage
      style={styles.plate}
      source={plateImg}
      resizeMode="contain"
      from={{
        rotate: "100deg",
        opacity: 0,
      }}
      animate={{
        rotate: "0deg",
        opacity: 1,
      }}
      transition={{
        type: "timing",
        duration: 2000,
      }}
    />
  );
}
