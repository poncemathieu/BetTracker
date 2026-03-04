import { View, Text } from 'react-native';
import { Colors } from '../../constants';

export default function HistoryScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.bg, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: Colors.text }}>Historique</Text>
    </View>
  );
}