import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as MediaLibrary from "expo-media-library";
import useAudioPlayer from "./hooks/useAudioPlayer";
import PlayerControls from "./components/PlayerControls";
import ProgressBar from "./components/ProgressBar";

export default function App() {
  const [songs, setSongs] = useState([]);
  const { play, pause, isPlaying, sound, status } = useAudioPlayer();

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === "granted") {
        const media = await MediaLibrary.getAssetsAsync({
          mediaType: "audio",
        });
        setSongs(media.assets);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Local Music Player</Text>

      <FlatList
        data={songs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.songItem}
            onPress={() => play(item.uri)}
          >
            <Text style={styles.songText}>{item.filename}</Text>
          </TouchableOpacity>
        )}
      />

      {sound && (
        <>
          <ProgressBar status={status} />
          <PlayerControls
            isPlaying={isPlaying}
            play={() => play()}
            pause={pause}
          />
        </>
      )}

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    paddingTop: 50,
    paddingHorizontal: 16
  },
  title: {
    color: "white",
    fontSize: 22,
    marginBottom: 20
  },
  songItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#333"
  },
  songText: {
    color: "white"
  }
});
