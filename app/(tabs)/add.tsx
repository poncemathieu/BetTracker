import { View, Text } from 'react-native';
import { Colors } from '../../constants';

export default function AddScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.bg, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: Colors.text }}>Ajouter</Text>
    </View>
  );
}