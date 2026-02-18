import React from "react";
import { View, Button } from "react-native";

export default function PlayerControls({ isPlaying, play, pause }) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center", margin: 20 }}>
      {isPlaying ? (
        <Button title="Pause" onPress={pause} />
      ) : (
        <Button title="Play" onPress={play} />
      )}
    </View>
  );
}
