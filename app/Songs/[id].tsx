import { useLocalSearchParams, useRouter } from "expo-router";
import SongUi from "../Songs/songsUi";

const songs = {
  "1": {
    title: "Thinkin Bout You",
    artist: "Frank Ocean",
    image: require("@/assets/images/Thinkin.jpg"),
    image2: require("@/assets/images/yellow.jpeg"),
    startduration: "00:00",
    duration: "03:39",
  },
  "2": {
    title: "Provider",
    artist: "Frank Ocean",
    image: require("@/assets/images/provider.jpg"),
    image2: require("@/assets/images/pink.jpeg"),
    duration: "03:45",

    startduration: "00:00",
  },
  "3": {
    title: "Pink + White",
    artist: "Frank Ocean",
    image: require("@/assets/images/pinkWhite.jpg"),
    image2: require("@/assets/images/green.jpg"),
    duration: "03:20",
    startduration: "00:00",
  },

  "4": {
    title: "Nikes",
    artist: "Frank Ocean",
    image: require("@/assets/images/nikes.jpg"),
    image2: require("@/assets/images/pink.jpeg"),
    duration: "03:20",
    startduration: "00:00",
  },

  "5": {
    title: "Self Control",
    artist: "Frank Ocean",
    image: require("@/assets/images/selfControl.jpg"),
    image2: require("@/assets/images/yellow.jpeg"),

    startduration: "00:00",
    duration: "03:20",
  },
};

export default function SongDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const songId = id?.toString();
  const song = songs[songId as keyof typeof songs];

  if (!song) {
    return <SongUi notFound onBack={() => router.back()} />;
  }

  return <SongUi song={song} />;
}
