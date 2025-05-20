import { useLocalSearchParams, useRouter } from "expo-router";
import PlaylistUi from "./playlistUi";

const playlists = {
  "01": {
    title: "Soul Samples & Autotune",
    image: require("@/assets/images/pink.jpeg"),
  },
  "02": {
    title: "The King's Vision",
    image: require("@/assets/images/yellow.jpeg"),
  },
};

export default function PlaylistDetail() {
  const { playlistId } = useLocalSearchParams();
  const router = useRouter();

  const playlist = playlists[playlistId as keyof typeof playlists];

  if (!playlist) {
    return <PlaylistUi notFound onBack={() => router.back()} />;
  }

  return <PlaylistUi playlist={playlist} />;
}
