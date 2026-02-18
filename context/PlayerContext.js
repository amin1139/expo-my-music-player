import React, { createContext, useContext, useEffect, useState } from "react";
import TrackPlayer, {
  Capability,
  usePlaybackState,
  State
} from "react-native-track-player";

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    setup();
  }, []);

  const setup = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      stopWithApp: false,
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext
      ]
    });
  };

  const playTrack = async (track, allTracks) => {
    await TrackPlayer.reset(); // 🔥 Stops previous audio
    await TrackPlayer.add(allTracks);
    await TrackPlayer.skip(track.id);
    await TrackPlayer.play();
    setCurrentTrack(track);
  };

  const play = () => TrackPlayer.play();
  const pause = () => TrackPlayer.pause();
  const next = () => TrackPlayer.skipToNext();
  const previous = () => TrackPlayer.skipToPrevious();

  const jumpForward = async () => {
    const position = await TrackPlayer.getPosition();
    await TrackPlayer.seekTo(position + 10);
  };

  const jumpBackward = async () => {
    const position = await TrackPlayer.getPosition();
    await TrackPlayer.seekTo(position - 10);
  };

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        playTrack,
        play,
        pause,
        next,
        previous,
        jumpForward,
        jumpBackward
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
