import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function PlaylistUi({ playlist, notFound, onBack }: any) {
  if (notFound) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Playlist Not Found</Text>
        <TouchableOpacity onPress={onBack} style={{ marginTop: 20 }}>
          <Text style={{ color: 'blue' }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#1d1daa', paddingTop: 60, alignItems: 'center' }}>
      <Image
        source={playlist.image}
        style={{ width: 250, height: 250, borderRadius: 16, marginBottom: 30 }}
        resizeMode="cover"
      />
      <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>{playlist.title}</Text>
      {/* Add more playlist details here if needed */}
    </View>
  );
}