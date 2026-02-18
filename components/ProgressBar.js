import React from "react";
import Slider from "@react-native-community/slider";
import TrackPlayer, { useProgress } from "react-native-track-player";

export default function ProgressBar() {
  const { position, duration } = useProgress();

  return (
    <Slider
      minimumValue={0}
      maximumValue={duration}
      value={position}
      onSlidingComplete={(value) => TrackPlayer.seekTo(value)}
    />
  );
}
