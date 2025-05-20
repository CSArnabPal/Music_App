import {
  BlossomThemeProvider,
  Icon,
  ProgressBar,
} from "@react-native-blossom-ui/components";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import darkTheme from "../../Blossum/darkTheme.json";
import lightTheme from "../../Blossum/lightTheme.json";

const handleBack = () => router.push("../");

export default function SongUi({ song, notFound, onBack }: any) {
  const [isDark, setIsDark] = useState(false);
  const [liked, setLiked] = useState(false);
  const [pause, setpause] = useState(false);

  if (notFound) {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>Song Not Found</Text>
        <TouchableOpacity onPress={onBack} style={styles.goBackButton}>
          <Text style={styles.goBackText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <BlossomThemeProvider
      theme={isDark ? darkTheme : lightTheme}
      isDark={isDark}
    >
      <ImageBackground
        source={
          typeof song.image2 === "string" ? { uri: song.image2 } : song.image2
        }
        style={styles.songImage2}
        resizeMode="cover"
      />
      <View style={[styles.container, {}]}>
        <View
          style={[
            styles.backIconContainer,
            {
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
              flex: 1,
            },
          ]}
        >
          <Icon
            family="AntDesign"
            name="left"
            size={28}
            style={[styles.backIcon, {}]}
            onPress={handleBack}
          />
          <Icon
            family="AntDesign"
            name={liked ? "heart" : "hearto"}
            size={28}
            style={[
              styles.LikeIcon,
              {
                marginLeft: "84%",
                color: liked ? "red" : "#fff",
              },
            ]}
            onPress={() => setLiked((prev) => !prev)}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={
                typeof song.image === "string"
                  ? { uri: song.image }
                  : song.image
              }
              style={styles.songImage}
              resizeMode="cover"
            />
            <Text style={styles.songTitle}>{song.title}</Text>
            <Text style={styles.songArtist}>
              {song.title} Feat. {song.artist}
            </Text>
          </View>
          <View style={[styles.controls, {}]}>
            <View style={styles.iconControls}>
              <Icon name="shuffle" color={"#fff"} />
              <Icon color={"#fff"} name="play-skip-back" />
              <View
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  width: 50,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  name={pause ? "play" : "pause"}
                  size={35}
                  onPress={() => setpause((prev) => !prev)}
                  color={pause ? "black" : "black"}
                />
              </View>
              <Icon color={"#fff"} name="play-skip-forward" />
              <Icon
                color={"#fff"}
                family="MaterialCommunityIcons"
                name="repeat-once"
              />
            </View>
            {/* Progress Bar */}
            <View style={styles.progressBarContainer}>
              <ProgressBar
                value={60}
                trackColor="#fff"
                color="#99999999"
                size="small"
                style={[styles.progressBar, {}]}
              />
              <View style={styles.progressBarTime}>
                <Text style={{ color: "#fff" }}>{song.startduration}</Text>
                <Text style={{ color: "#fff" }}>{song.duration}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </BlossomThemeProvider>
  );
}

const styles = StyleSheet.create({
  notFoundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  notFoundText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  goBackButton: {
    marginTop: 20,
  },
  goBackText: {
    color: "blue",
  },
  container: {
    flex: 1,
    paddingTop: 60,
  },
  backIconContainer: {
    position: "absolute",
    top: 15,
    left: 15,
    zIndex: 10,
    padding: 0,
  },
  backIcon: {
    marginBottom: 0,
    color: "#fff",
  },
  LikeIcon: {
    justifyContent: "space-between",
    color: "#fff",
  },
  songImage: {
    justifyContent: "center",
    alignItems: "center",
    width: 360,
    height: 360,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 100, height: 110 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 100,
    marginBottom: 30,
    marginTop: 40,
  },
  songImage2: {
    position: "absolute",
    width: "100%",
    height: "103%",

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  songTitle: {
    top: -14,
    color: "#fcfcfc",
    fontSize: 36,
  },
  songArtist: {
    color: "#d9d9d9",
    fontSize: 16,
    marginTop: -14,
    marginBottom: 40,
  },
  controls: {
    alignSelf: "center",
    backgroundColor: "#e3e3e350",
    borderRadius: 20,
    width: "95%",
    padding: 20,
    marginBottom: 10,
  },
  iconControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    alignItems: "center",
  },
  progressBarContainer: {
    padding: 10,
    width: "100%",
  },
  progressBar: {
    height: 5,
    marginTop: 10,
  },
  progressBarTime: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
