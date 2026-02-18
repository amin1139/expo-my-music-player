import React from "react";
import { PlayerProvider } from "./context/PlayerContext";
import MusicListScreen from "./screens/MusicListScreen";
import TrackPlayer from "react-native-track-player";
import service from "./service";

TrackPlayer.registerPlaybackService(() => service);

export default function App() {
  return (
    <PlayerProvider>
      <MusicListScreen />
    </PlayerProvider>
  );
}
