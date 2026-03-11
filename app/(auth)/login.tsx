import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Colors } from '../../constants';
import { GlobalStyles } from '../../constants/styles';

export default function LoginScreen() {
  return (
    <SafeAreaView style={GlobalStyles.screen}>
      {/* Logo */}
      <View style={styles.logoWrap}>
        <View style={styles.logoBox}>
          <Text style={styles.logoEmoji}>📊</Text>
        </View>
        <Text style={styles.brand}>BetTracker</Text>
        <Text style={styles.tagline}>ANALYSE DE PARIS SPORTIFS</Text>
      </View>

      {/* Switcher Connexion / Inscription */}
      <View style={[GlobalStyles.tabs, { marginBottom: 24 }]}>
        <View style={[GlobalStyles.tab, GlobalStyles.tabActive]}>
          <Text style={GlobalStyles.tabActiveText}>Connexion</Text>
        </View>
        <TouchableOpacity style={GlobalStyles.tab} onPress={() => router.push('/(auth)/register')}>
          <Text style={GlobalStyles.tabText}>Inscription</Text>
        </TouchableOpacity>
      </View>

      {/* Formulaire */}
      <View style={styles.form}>
        <View>
          <Text style={GlobalStyles.label}>EMAIL</Text>
          <TextInput
            style={GlobalStyles.input}
            placeholder="Votre adresse email"
            placeholderTextColor={Colors.text3}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View>
          <Text style={GlobalStyles.label}>MOT DE PASSE</Text>
          <TextInput
            style={GlobalStyles.input}
            placeholder="Votre mot de passe"
            placeholderTextColor={Colors.text3}
            secureTextEntry
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot}>Mot de passe oublié ?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={GlobalStyles.btnPrimary}>
          <Text style={GlobalStyles.btnPrimaryText}>Se connecter</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={GlobalStyles.divider}>
          <View style={GlobalStyles.divLine} />
          <Text style={GlobalStyles.divText}>ou continuer avec</Text>
          <View style={GlobalStyles.divLine} />
        </View>
        <TouchableOpacity onPress={() => router.push('/(onboarding)/welcome')}>
  <Text style={{ color: Colors.purple2, textAlign: 'center', marginTop: 12 }}>
    Voir onboarding (test)
  </Text>
</TouchableOpacity>

        {/* OAuth */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={GlobalStyles.btnSecondary}>
            <Text style={GlobalStyles.btnSecondaryText}>🍎  Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={GlobalStyles.btnSecondary}>
            <Text style={GlobalStyles.btnSecondaryText}>🌐  Google</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
      <TouchableOpacity 
        style={[GlobalStyles.btnPrimary, { marginTop: 12 }]}
        onPress={() => router.replace('/(tabs)/dashboard')}
      >
  <Text style={GlobalStyles.btnPrimaryText}>Aller au Dashboard (test)</Text>
</TouchableOpacity>
</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logoWrap: {
    alignItems: 'center',
    paddingTop: 40,
    marginBottom: 32,
  },
  logoBox: {
    width: 76,
    height: 76,
    borderRadius: 24,
    backgroundColor: Colors.purple,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logoEmoji: { fontSize: 34 },
  brand: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.text,
    letterSpacing: -0.5,
  },
  tagline: {
    fontSize: 10,
    color: Colors.text3,
    letterSpacing: 2.5,
    marginTop: 5,
    fontWeight: '600',
  },
  form: { gap: 14 },
  forgot: {
    fontSize: 12,
    color: Colors.purple3,
    fontWeight: '600',
    textAlign: 'right',
  },
  socialRow: {
    flexDirection: 'row',
    width: '100%',
    gap: 10,
  },
});
