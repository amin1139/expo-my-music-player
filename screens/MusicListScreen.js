import React, { useState } from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import MusicItem from "../components/MusicItem";

const dummyTracks = [
  {
    id: "1",
    title: "Song One",
    artist: "Artist",
    url: "file:///storage/emulated/0/Music/song1.mp3",
    artwork: ""
  }
];

export default function MusicListScreen() {
  const [search, setSearch] = useState("");

  const filtered = dummyTracks.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#000", padding: 20 }}>
      <TextInput
        placeholder="Search music..."
        placeholderTextColor="#888"
        value={search}
        onChangeText={setSearch}
        style={{
          backgroundColor: "#111",
          color: "#fff",
          padding: 12,
          borderRadius: 12,
          marginBottom: 20
        }}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MusicItem item={item} allTracks={filtered} />
        )}
      />
    </View>
  );
}
