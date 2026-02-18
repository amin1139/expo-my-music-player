import React from "react";
import { View, Button } from "react-native";
import { usePlayer } from "../context/PlayerContext";

export default function PlayerControls() {
  const {
    play,
    pause,
    next,
    previous,
    jumpForward,
    jumpBackward
  } = usePlayer();

  return (
    <View style={{ marginTop: 30 }}>
      <Button title="<< 10s" onPress={jumpBackward} />
      <Button title="Prev" onPress={previous} />
      <Button title="Play" onPress={play} />
      <Button title="Pause" onPress={pause} />
      <Button title="Next" onPress={next} />
      <Button title="10s >>" onPress={jumpForward} />
    </View>
  );
}
