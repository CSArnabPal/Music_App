# 🎵 MusicApp

A beautiful cross-platform music app built with [Expo](https://expo.dev), React Native, and Blossom UI.  
Browse songs, explore playlists, and enjoy a modern, dynamic music experience!

---

## 🚀 Features

- 🎨 Modern UI with light/dark themes (Blossom UI)
- 🎵 Song list with album art, artist, and details
- 📂 Playlist browsing with cover images
- 🔍 Search, Like, and User navigation (bottom nav bar)
- ❤️ Like/unlike songs with animated heart icon
- ⏮️⏯️⏭️ Music controls (UI only)
- 🖼️ Dynamic backgrounds and shadows for a premium look
- 📱 Responsive and works on Android, iOS, and web

---

## 🛠️ Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the app**

   ```bash
   npx expo start
   ```

3. **Open the app**

   - Scan the QR code with Expo Go (for Android/iOS)
   - Or use an emulator/simulator

---

## 📁 Project Structure

```
app/
  ├── index.tsx           # Home screen (songs, playlists, nav)
  ├── Songs/
  │     ├── [id].tsx      # Song details (dynamic route)
  │     └── songsUi.tsx   # Song UI component
  ├── Playlists/
  │     ├── [playlistId].tsx # Playlist details (dynamic route)
  │     └── playlistUi.tsx   # Playlist UI component
  └── assets/             # Images and media
```

---

## 📝 Customization

- Add your songs and playlists in the respective files.
- Update images in the `assets/images` folder.
- Tweak styles in each component for your brand.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [Blossom UI](https://github.com/blossomui/blossom-ui)
- [React Native](https://reactnative.dev/)

---

## 🧑‍💻 Author

Made with ❤️ by Arnab Pal

---
