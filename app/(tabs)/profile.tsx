import { View, Text } from 'react-native';
import { Colors } from '../../constants';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.bg, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: Colors.text }}>Profil</Text>
    </View>
  );
}