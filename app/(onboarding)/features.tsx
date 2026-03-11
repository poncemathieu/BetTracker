import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../constants";
import { GlobalStyles } from "../../constants/styles";
import { router } from "expo-router";

const features = [
  { emoji: '📊', title: 'Dashboard complet', desc: "Bankroll, ROI, taux de réussite et \n évolution en un coup d'œil." },
  { emoji: '⚡', title: 'Enregistrement rapide', desc: 'Ajoutez un pari en quelques secondes \n avec calcul automatique.' },
  { emoji: '🏅', title: 'Statistiques avancées', desc: 'Analysez vos résultats par sport,\n bookmaker et période.' },
];

export default function FeatureScreen() {
    return (
        <SafeAreaView style={GlobalStyles.screen} edges={['top']}>
            <View>
                <Text style={styles.divtext}>Étape 2 sur 3</Text>
                <Text style={styles.title}>
                    Gérez vos paris {'\n'}
                    <Text style={{ color: Colors.purple2 }}>intelligemment</Text>
                </Text>
                <Text style={styles.soustitre}>BetTracker vous aide à analyser vos performances et optimiser votre stratégie.</Text>
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
                <Text style={[styles.featureValue]}></Text>
                </View>
            ))}
            </View>

            {/* Pagination */}
            <View style={styles.pagination}>
            <View style={styles.dot} />
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
            </View>
    
            {/* Buttons */}
            <View style={GlobalStyles.btnSection}>
            <TouchableOpacity
                style={GlobalStyles.btnPrimary}
                onPress={() => router.push('/(onboarding)/config')}
            >
                <Text style={GlobalStyles.btnPrimaryText}>Suivant →</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
                <Text style={styles.linkText}>Passer</Text>
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
    title: {
        fontSize: 32,
        fontWeight: '900',
        color: Colors.text,
        letterSpacing: -1,
        marginBottom: 20,
    },
    divtext: {
        marginTop: 5,
        gap: 5,
        color: Colors.purple3,
    },
    soustitre: {
        color: Colors.text3,
        letterSpacing: 0.5,
        marginTop: 5,
        fontWeight: '600',
        fontSize: 12,
        marginBottom: 25,
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
        marginBottom: 10,
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
        marginTop: 50,
        marginBottom: 20,
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
    linkText: {
        color: Colors.text3,
        fontSize: 13,
  },
    linkHighlight: {
        color: Colors.purple2,
        fontWeight: '700',
  },
});