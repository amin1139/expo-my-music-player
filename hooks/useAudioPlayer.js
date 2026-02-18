import { useState } from "react";
import { Audio } from "expo-av";

export default function useAudioPlayer() {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState({});

  const play = async (uri) => {
    if (uri) {
      const { sound } = await Audio.Sound.createAsync(
        { uri },
        { shouldPlay: true },
        onPlaybackStatusUpdate
      );
      setSound(sound);
      setIsPlaying(true);
    } else if (sound) {
      await sound.playAsync();
      setIsPlaying(true);
    }
  };

  const pause = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const onPlaybackStatusUpdate = (status) => {
    setStatus(status);
  };

  return { play, pause, isPlaying, sound, status };
}
