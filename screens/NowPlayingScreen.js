import React from "react";
import { View, Text } from "react-native";
import { usePlayer } from "../context/PlayerContext";
import PlayerControls from "../components/PlayerControls";
import ProgressBar from "../components/ProgressBar";

export default function NowPlayingScreen() {
  const { currentTrack } = usePlayer();

  if (!currentTrack) return null;

  return (
    <View style={{ flex: 1, backgroundColor: "#000", padding: 20 }}>
      <Text style={{ color: "#fff", fontSize: 22 }}>
        {currentTrack.title}
      </Text>

      <ProgressBar />
      <PlayerControls />
    </View>
  );
}
