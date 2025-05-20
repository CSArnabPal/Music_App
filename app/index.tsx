import {
  BlossomThemeProvider,
  Button,
  Icon,
  useBlossomTheme,
} from "@react-native-blossom-ui/components";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import darkTheme from "../Blossum/darkTheme.json";
import lightTheme from "../Blossum/lightTheme.json";

const songs = [
  {
    id: "1",
    title: "Thinkin Bout You",
    artist: "Frank Ocean",
    image: require("@/assets/images/Thinkin.jpg"),
  },
  {
    id: "2",
    title: "Provider",
    artist: "Frank Ocean",
    image: require("@/assets/images/provider.jpg"),
  },
  {
    id: "3",
    title: "Pink + White",
    artist: "Frank Ocean",
    image: require("@/assets/images/pinkWhite.jpg"),
  },
  {
    id: "4",
    title: "Nikes",
    artist: "Frank Ocean",
    image: require("@/assets/images/nikes.jpg"),
  },
  {
    id: "5",
    title: "Self Control",
    artist: "Frank Ocean",
    image: require("@/assets/images/selfControl.jpg"),
  },
];

const playlists = [
  {
    id: "1",
    title: "Soul Samples & Autotune",

    image: require("@/assets/images/pink.jpeg"),
  },
  {
    id: "2",
    title: "The King's Vision",

    image: require("@/assets/images/yellow.jpeg"),
  },
];

export default function Home() {
  const router = useRouter();
  const [isDark, setIsDark] = useState(false);
  const insets = useSafeAreaInsets();
  const { colors } = useBlossomTheme();
  const [showPopover, setShowPopover] = useState(false);

  return (
    <BlossomThemeProvider
      theme={isDark ? darkTheme : lightTheme}
      isDark={isDark}
    >
      <StatusBar translucent={true} barStyle="light-content" />

      <View style={[styles.ImgBg, { position: "absolute" }]}>
        <ImageBackground
          source={require("@/assets/images/FrankOcean.png")}
          style={[styles.artistImage, { paddingTop: insets.top }]}
          resizeMode="cover"
        >
          <Text style={styles.artistName}>Frank Ocean</Text>
          <Text style={styles.listenerCount}>
            1,973,256 listeners this month
          </Text>
        </ImageBackground>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "transparent",
        }}
      >
        <View style={styles.container}>
          <View style={styles.Stb}>
            <Text style={styles.sectionTitle}>Popular Songs</Text>
            <Button
              style={styles.button}
              mode="tinted"
              titleStyle={{ color: "#fff" }}
              size="small"
              right={
                <Icon
                  style={styles.arrow_right}
                  family="AntDesign"
                  name="right"
                  size={18}
                />
              }
            >
              All songs
            </Button>
          </View>

          {/* Only this section will scroll, limited to 3 cards */}
          <View style={{ height: 200, marginTop: 15, paddingBottom: 10 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {songs.map((song) => (
                <Pressable
                  key={song.id}
                  onPress={() => router.push(`/Songs/${song.id}`)}
                >
                  <View style={styles.songCard}>
                    <Image
                      source={
                        typeof song.image === "string"
                          ? { uri: song.image }
                          : song.image
                      }
                      style={{ width: 40, height: 40, borderRadius: 8 }}
                    />
                    <Text style={styles.songTitle}>{song.title}</Text>
                    <Text style={styles.songArtist}>{song.artist}</Text>
                    <Pressable style={styles.dot}>
                      <Text style={styles.dots}>...</Text>
                    </Pressable>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          </View>

          {/* Playlist Section */}
          <ScrollView>
            <View style={styles.playlist}>
              <Text style={styles.playlist_text}>In playlists</Text>

              <ScrollView
                style={styles.scrollViewPlaylist}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {playlists.map((playlist) => (
                  <Pressable
                    key={playlist.id}
                    onPress={() =>
                      router.push({
                        pathname: "/Playlists/[playlistId]",
                        params: { playlistId: playlist.id },
                      })
                    }
                  >
                    <View style={styles.playlistCard}>
                      <ImageBackground
                        source={
                          typeof playlist.image === "string"
                            ? { uri: playlist.image }
                            : playlist.image
                        }
                        style={styles.playimg}
                        imageStyle={{ borderRadius: 20 }}
                      >
                        <View style={styles.playlistOverlay}>
                          <Text style={styles.playlistTitle}>
                            {playlist.title}
                          </Text>
                        </View>
                      </ImageBackground>
                    </View>
                  </Pressable>
                ))}
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.bottomNav}>
        <Pressable style={styles.navItem}>
          <Icon
            name="musical-notes-outline"
            size={28}
            style={[styles.navIcon, styles.activeNavIcon]}
          />
        </Pressable>
        <Pressable style={styles.navItem}>
          <Icon name="search-outline" size={28} style={styles.navIcon} />
        </Pressable>
        <Pressable style={styles.navItem}>
          <Icon name="heart-outline" size={28} style={styles.navIcon} />
        </Pressable>
        <Pressable style={styles.navItem}>
          <Icon name="person-outline" size={28} style={styles.navIcon} />
        </Pressable>
      </View>
    </BlossomThemeProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 46,
  },
  ImgBg: {
    width: "100%",
  },
  container: {
    flex: 1,
    padding: 16,
    marginTop: 304,
    backgroundColor: "#141414",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  artistImage: {
    width: "100%",
    height: 370,
    justifyContent: "flex-end",
  },
  artistName: {
    color: "#fff",
    fontSize: 66,
    marginBottom: -10,
    marginLeft: 14,
  },
  listenerCount: {
    color: "#cfcfcf",
    marginBottom: 48,
    marginLeft: 16,
    fontSize: 15,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 22,
  },
  buttonView: {},
  Stb: {
    height: -40,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#3c3c3c",
    borderRadius: 100,

    height: 30,
    textAlign: "auto",
    paddingBottom: -10,
    paddingTop: -10,
  },
  arrow_right: {
    color: "#fff",
    marginTop: 5,
    fontSize: 20,
  },

  songCard: {
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    marginRight: 10,
  },

  songTitle: {
    marginLeft: 55,
    marginTop: -42,
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  songArtist: {
    marginLeft: 55,
    color: "#aaa",
    fontSize: 14,
  },
  dot: {
    position: "absolute",
    right: -10,
    top: 6,
    width: 50,
    height: 50,
    padding: 5,
    borderRadius: 50,
  },
  dots: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  playlist: {
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    height: "100%",
    paddingBottom: 50,
  },
  playlist_text: {
    color: "#fff",
    fontSize: 22,
    marginBottom: 12,
    marginTop: -10,
  },
  scrollViewPlaylist: {},
  playimg: {
    flex: 1,
    width: "100%",
    height: 170,
    justifyContent: "flex-start",
  },
  playlistCard: {
    backgroundColor: "#1c1c1c",
    padding: 0,
    borderRadius: 20,
    marginBottom: 12,
    marginRight: 20,
    width: 170,
    height: 170,
    overflow: "hidden",
  },
  playlistTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  playlistOverlay: {
    padding: 12,
  },
  bottomNav: {
    backgroundColor: "#1c1c1c",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 120,
    position: "absolute",

    left: 0,
    right: 0,
    bottom: 0,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  activeNavIcon: {
    color: "#1db954",
  },
  navItem: {
    alignItems: "center",
    flex: 1,
  },
  navIcon: {
    marginTop: 8,
    color: "#fff",
    marginBottom: 12,
  },
});
