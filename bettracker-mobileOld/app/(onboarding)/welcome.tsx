import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Colors } from '../../constants';

const features = [
  { emoji: '📈', title: 'Suivi de bankroll', desc: 'Visualisez votre évolution', value: '+17%', color: Colors.green },
  { emoji: '🎯', title: 'ROI en temps réel', desc: 'Mesurez votre rentabilité', value: '+8,4%', color: Colors.green },
  { emoji: '🏆', title: 'Taux de réussite', desc: 'Analysez vos performances', value: '61%', color: Colors.yellow },
];

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <View style={styles.logoSection}>
        <View style={styles.logoBox}>
          <Text style={{ fontSize: 40 }}>📊</Text>
        </View>
        <Text style={styles.appName}>BetTracker</Text>
        <Text style={styles.tagline}>ANALYSE DE PARIS SPORTIFS</Text>
      </View>

      {/* Feature Cards */}
      <View style={styles.featureList}>
        {features.map((f, i) => (
          <View key={i} style={styles.featureCard}>
            <View style={styles.featureLeft}>
              <Text style={styles.featureEmoji}>{f.emoji}</Text>
              <View>
                <Text style={styles.featureTitle}>{f.title}</Text>
                <Text style={styles.featureDesc}>{f.desc}</Text>
              </View>
            </View>
            <Text style={[styles.featureValue, { color: f.color }]}>{f.value}</Text>
          </View>
        ))}
      </View>

      {/* Pagination */}
      <View style={styles.pagination}>
        <View style={[styles.dot, styles.dotActive]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      {/* Buttons */}
      <View style={styles.btnSection}>
        <TouchableOpacity
          style={styles.btnPrimary}
          onPress={() => router.push('/(onboarding)/features')}
        >
          <Text style={styles.btnPrimaryText}>Commencer →</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
          <Text style={styles.linkText}>Déjà un compte ? <Text style={styles.linkHighlight}>Se connecter</Text></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingBottom: 32,
  },
  logoSection: {
    alignItems: 'center',
    marginTop: 40,
  },
  logoBox: {
    width: 90,
    height: 90,
    borderRadius: 24,
    backgroundColor: Colors.purple,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  appName: {
    fontSize: 32,
    fontWeight: '900',
    color: Colors.text,
    letterSpacing: -1,
  },
  tagline: {
    fontSize: 11,
    color: Colors.text3,
    letterSpacing: 2,
    marginTop: 4,
  },
  featureList: {
    gap: 12,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.surface2,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 16,
    padding: 16,
  },
  featureLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  featureEmoji: {
    fontSize: 24,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.text,
  },
  featureDesc: {
    fontSize: 11,
    color: Colors.text3,
    marginTop: 2,
  },
  featureValue: {
    fontSize: 16,
    fontWeight: '800',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.border,
  },
  dotActive: {
    width: 20,
    backgroundColor: Colors.purple,
    borderRadius: 3,
  },
  btnSection: {
    gap: 16,
    alignItems: 'center',
  },
  btnPrimary: {
    width: '100%',
    backgroundColor: Colors.purple,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  btnPrimaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  linkText: {
    color: Colors.text3,
    fontSize: 13,
  },
  linkHighlight: {
    color: Colors.purple2,
    fontWeight: '700',
  },
});