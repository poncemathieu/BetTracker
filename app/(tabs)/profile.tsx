import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from '../../constants/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const params = [
  { title: 'Bankroll de départ', emoji: '💰', label: '2 000,00' },
  { title: 'Devise', emoji: '🌍', label: 'CAD $' },
  { title: 'Notifications', emoji: '🔔', label: 'Activées' },
  { title: 'Mot de passe', emoji: '🔒', label: 'Modifier' }
]

export default function ProfileScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={GlobalStyles.screen} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={GlobalStyles.header}>
          <View>
            <Text style={styles.greet}>Bonjour 👋</Text>
            <Text style={styles.name}>Mathieu</Text>
          </View>
          <TouchableOpacity style={styles.avatar}  onPress={() => router.push('/(auth)/login')}>
            <Text style={{fontSize: 22}}>👤</Text>
          </TouchableOpacity>
        </View>
        {/* Content */}
        {/* Bankroll Card */}
        <LinearGradient
          colors={['#1d1247', '#341b6e']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.bankrollCard}
        >
            <Text style={styles.bKName}>BANKROLL ACTUELLE</Text>
            <Text style={styles.bankrollText}>2340,50 €</Text>
            <Text style={styles.startSold}>Départ : 2000€</Text>

            <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={{color: Colors.green, fontWeight: '600'}}>+340,50 €</Text>
              <Text style={styles.statLabel}>PROFIT TOTAL</Text>
            </View>
            <View style={styles.separator}/>
            <View style={styles.statItem}>
              <Text style={styles.statValueCroissance}>+17,0 %</Text>
              <Text style={styles.statLabel}>CROISSANCE</Text>
            </View>
            </View>
        </LinearGradient>

        {/*liste parametrages */}
        <Text style={styles.subTitle}>Paramètres</Text>
        {params.map((param) => (
          <View key={param.title} style={styles.paramsCard}>
            <View style={styles.paramsLeft}>
              <Text style={{fontSize: 18}}>{param.emoji}</Text>
              <View>
                <Text style={styles.paramsName}>{param.title}</Text>
                <Text style={styles.paramsCount}>{param.label}</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={16} color={Colors.text3}/>
          </View>
        ))}

        {/*deconnexion */}
        <TouchableOpacity style={GlobalStyles.btnOut}>
          <Text style={styles.btnOff}>Déconnexion</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  greet: {
    fontSize: 13,
    color: Colors.text2,
  },
  name: {
    fontSize: 22,
    fontWeight: '900',
    color: Colors.text,
    marginTop: 2,
    letterSpacing: -0.5,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.purple2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bankrollCard: {
    margin: 16,
    borderRadius: 22,
    padding: 20,
    borderWidth: 1,
    borderColor: `${Colors.purple}50`,
  },
  bKName: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.text2,
  },
  bankrollText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: Colors.text,
  },
  startSold: {
    fontSize: 12,
    color: Colors.text3,
  },
  separator: {
    width: 1,
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.1)',
 },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
    marginTop: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 10,
    color: Colors.text2,
  },
  statValueCroissance: {
    color: Colors.purple,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 18,
    color: Colors.text,
    fontWeight: 'bold',
    margin: 15
  },
  paramsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.surface2,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 14,
    padding: 12,
    marginBottom: 8,
  },
  paramsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  paramsName: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.text,
  },
  paramsCount: {
    fontSize: 10,
    color: Colors.text3,
    marginTop: 1,
  },
  btnOff: {
    color: Colors.red,
    fontWeight: '700',
    fontSize: 15,
  },
})