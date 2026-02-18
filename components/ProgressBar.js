import React from "react";
import { View } from "react-native";

export default function ProgressBar({ status }) {
  if (!status?.durationMillis) return null;

  const progress = status.positionMillis / status.durationMillis;

  return (
    <View style={{ height: 4, backgroundColor: "#333", marginTop: 10 }}>
      <View
        style={{
          height: 4,
          width: `${progress * 100}%`,
          backgroundColor: "#1DB954"
        }}
      />
    </View>
  );
}
