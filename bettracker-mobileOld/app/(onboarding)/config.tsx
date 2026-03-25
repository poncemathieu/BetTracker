import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import { GlobalStyles } from "../../constants/styles";
import { Colors } from "../../constants";
import { router } from "expo-router";

export default function ConfigScreen() {
    const [activeMontant, setActiveMontant] = useState<string>('');
    const [montantInput, setMontantInput] = useState<string>();
    const [activeDevise, setActiveDevise] = useState('CAD');
    const deviseSymbols: { [key: string]: string } = {
        CAD: '$',
        EUR: '€',
        USD: '$',
        GBP: '£',
    };
    
    return (
        <SafeAreaView style={GlobalStyles.screen} edges={['top']}>
            <View>
                <Text style={styles.divtext}>Étape 3 sur 3</Text>
                <Text style={styles.title}>
                    Configurez votre {'\n'}
                    <Text style={{ color: Colors.purple2 }}>bankroll</Text>
                </Text>
                <Text style={styles.soustitre}>Entrez votre mise de départ. Vous pourrez modifier{'\n'}cela plus tard dans les paramètres.</Text>
            </View>

            {/* Choix devises */}
            <View>
            <Text style={GlobalStyles.label}>DEVISE</Text>
            <View style={styles.deviseRow}>
                {['CAD', 'EUR', 'USD', 'GBP'].map((devise) => (
                <TouchableOpacity
                    key={devise}
                    style={[styles.deviseCard, activeDevise === devise && styles.deviseCardActive]}
                    onPress={() => setActiveDevise(devise)}
                >
                    <Text style={[styles.deviseSymbol, activeDevise === devise && styles.deviseCardActivetext]}>
                    {devise === 'CAD' ? '$' : devise === 'EUR' ? '€' : devise === 'USD' ? '$' : '£'}
                    </Text>
                    <Text style={[styles.deviseLabel, activeDevise === devise && styles.deviseCardActivetext]}>
                        {devise}
                    </Text>
                </TouchableOpacity>
                ))}
            </View>
            </View>

            {/*Montant initiale*/}
            <View>
                <Text style={GlobalStyles.label}>MONTANT INITIAL</Text>
                <View style={styles.inputMontant}>
                    <Text style={styles.deviseSymbolInput}>{deviseSymbols[activeDevise]}</Text>
                    <TextInput
                        style={styles.montantInput}
                        keyboardType="numeric"
                        value={montantInput}
                        onChangeText={(text) => {
                            setMontantInput(text);
                            const montantRapides = ['10', '20', '50', '100'];
                            if (montantRapides.includes(text)) {
                                setActiveMontant(text);
                            } else {
                                setActiveMontant('');
                            }
                        }}
                        placeholderTextColor={Colors.text3}
                    />
                </View>
            </View>

            {/*Montant rapides */}
            <View>
                <Text style={GlobalStyles.label}>MONTANTS RAPIDES</Text>
                <View style={styles.deviseRow}>
                    {['10', '20', '50', '100'].map((montant) => (
                        <TouchableOpacity
                            key={montant}
                            style={[styles.montantChip, activeMontant === montant && styles.montantChipActive]}
                            onPress={() => {setActiveMontant(montant);
                                            setMontantInput(montant);
                            }}
                        >
                        <Text style={[styles.montantChipText, activeMontant === montant && styles.montantChipActiveText]}>
                            {montant} {deviseSymbols[activeDevise]}
                        </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/*Conseil */}
            <View style={styles.conseil}>
                    <Text style={styles.featureEmoji}>💡</Text>
                    <Text style={styles.textConseil}>
                        Conseil: Ne misez jamais plus de 5% de votre{'\n'}bankroll sur un seul paris. BetTracker vous y{'\n'}aidera.
                    </Text>
            </View>

            {/* Buttons */}
            <View style={GlobalStyles.btnSection}>
                <TouchableOpacity
                    style={GlobalStyles.btnPrimary}
                    onPress={() => router.push('/(auth)/register')}
                >
                    <Text style={GlobalStyles.btnPrimaryText}>✓ Commencer à tracker</Text>
                </TouchableOpacity>
                <View>
                    <Text style={styles.footerText}>Vous pouvez modifier cela à tout moment</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
    deviseRow: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 8,
        marginBottom: 25,
    },
    deviseCard: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 12,
        backgroundColor: Colors.surface2,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    deviseCardActive: {
        color: Colors.purple,
        borderColor: Colors.purple,
    },
    deviseCardActivetext: {
        color: Colors.purple,
    },
    deviseSymbol: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors.text,
    },
    deviseLabel: {
        fontSize: 11,
        color: Colors.text3,
        marginTop: 2,
    },
    deviseSymbolInput: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.text,
        marginRight: 8,
    },
    inputMontant: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.surface2,
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 14,
        padding: 14,
        marginTop: 10,
        marginBottom: 25,
    },
    montantInput: {
        flex: 1,
        fontSize: 20,
        fontWeight: '700',
        color: Colors.text,
    },
    montantChip: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 12,
        backgroundColor: Colors.surface2,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    montantChipActive: {
        color: Colors.purple,
        borderColor: Colors.purple,
    },
    montantChipText: {
        fontSize: 11,
        fontWeight: '600',
        color: Colors.text,
    },
    montantChipActiveText: {
        color: Colors.purple,
    },
    conseil: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.surface2,
        borderWidth: 0.5,
        borderColor: Colors.green,
        borderRadius: 16,
        padding: 16,
        marginBottom: 10,
    },
    textConseil: {
        fontSize: 13,
        fontWeight: '300',
        color: Colors.green,
    },
    featureEmoji: {
        fontSize: 15,
        marginRight: 10,
    },
    footerText: {
        fontSize: 11,
        color: Colors.text3,
        fontWeight: '300',
    },
});