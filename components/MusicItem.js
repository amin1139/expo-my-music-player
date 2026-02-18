import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { usePlayer } from "../context/PlayerContext";

export default function MusicItem({ item, allTracks }) {
  const { playTrack } = usePlayer();

  return (
    <TouchableOpacity
      onPress={() => playTrack(item, allTracks)}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        backgroundColor: "#111",
        marginBottom: 10,
        borderRadius: 12
      }}
    >
      <Text style={{ color: "#fff" }}>{item.title}</Text>
      <Text style={{ color: "#0f0" }}>Play</Text>
    </TouchableOpacity>
  );
}
