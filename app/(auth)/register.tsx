import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants";
import { GlobalStyles } from "../../constants/styles";
import React, { useState } from "react";
//@ts-ignore
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function RegisterScreen() {
    const router = useRouter();
    const [accepted, setAccepted] = useState(false);
    const [focusedInput, setFocusedInput] = useState<string | null>(null);
    
    return (
        <SafeAreaView style={GlobalStyles.screen}>
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                enableOnAndroid={true}
                extraScrollHeight={20}>
                        <View style={styles.header}>
                            <TouchableOpacity style={styles.back} onPress={() => router.back()}>
                                <Ionicons name="chevron-back" size={24} color={Colors.text} />
                            </TouchableOpacity>
                                <Text style={styles.title}>Créer un compte</Text>
                                <Text style={GlobalStyles.label}>Commencez à suivre vos paris gratuitement</Text>
                            </View>
                            
                            <View style={[GlobalStyles.tabs, { marginBottom: 24 }]}>
                                <TouchableOpacity style={GlobalStyles.tab} onPress={() => router.push('/(auth)/login')}>
                                    <Text style={GlobalStyles.tabText}>Connexion</Text>
                                </TouchableOpacity>
                                <View style={[GlobalStyles.tab, GlobalStyles.tabActive]}>
                                    <Text style={GlobalStyles.tabActiveText}>Inscription</Text>
                                </View>
                            </View>
                            <View style={styles.form}>
                                <View style={styles.row}>
                                <View style={styles.inputHalf}>
                                    <Text style={GlobalStyles.label}>PRÉNOM</Text>
                                    <TextInput
                                    style={[GlobalStyles.input, focusedInput === 'firstName' && styles.inputFocused]}
                                    placeholder="Votre prénom"
                                    placeholderTextColor={Colors.text3}
                                    onFocus={() => setFocusedInput('firstName')}
                                    onBlur={() => setFocusedInput(null)}
                                    />
                                </View>
                                <View style={styles.inputHalf}>
                                    <Text style={GlobalStyles.label}>NOM</Text>
                                    <TextInput
                                    style={[GlobalStyles.input, focusedInput === 'lastName' && styles.inputFocused]}
                                    placeholder="Votre nom"
                                    placeholderTextColor={Colors.text3}
                                    onFocus={() => setFocusedInput('lastName')}
                                    onBlur={() => setFocusedInput(null)}
                                    />
                                </View>
                                </View>
                        <View style={styles.form}>
                                <View>
                                    <Text style={GlobalStyles.label}>EMAIL</Text>
                                    <TextInput
                                        style={[GlobalStyles.input, focusedInput === 'email' && styles.inputFocused]}
                                        placeholder="Votre adresse email"
                                        placeholderTextColor={Colors.text3}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        onFocus={() => setFocusedInput('email')}
                                        onBlur={() => setFocusedInput(null)}
                                    />
                                </View>
                                <View>
                                    <Text style={GlobalStyles.label}>MOT DE PASSE</Text>
                                    <TextInput
                                        style={[GlobalStyles.input, focusedInput === 'password' && styles.inputFocused]}
                                        placeholder="Votre mot de passe"
                                        placeholderTextColor={Colors.text3}
                                        secureTextEntry
                                        onFocus={() => setFocusedInput('password')}
                                        onBlur={() => setFocusedInput(null)}
                                    />
                                </View>
                                <View>
                                    <Text style={GlobalStyles.label}>CONFIRMER LE MOT DE PASSE</Text>
                                    <TextInput
                                        style={[GlobalStyles.input, focusedInput === 'confirmPassword' && styles.inputFocused]}
                                        placeholder="Confirmez votre mot de passe"
                                        placeholderTextColor={Colors.text3}
                                        secureTextEntry
                                        onFocus={() => setFocusedInput('confirmPassword')}
                                        onBlur={() => setFocusedInput(null)}
                                    />
                                </View>
                            </View>
                            <TouchableOpacity style={styles.cguRow} onPress={() => setAccepted(!accepted)}>
                            <View style={[styles.checkBox, accepted && styles.checkBoxActive]}>
                                {accepted && <Text style={{ fontSize: 10, color: '#fff' }}>✓</Text>}
                            </View>
                            <Text style={styles.cguText}>
                                J'accepte les <Text style={{ color: Colors.purple3 }}>Conditions d'utilisation </Text>
                                et la <Text style={{ color: Colors.purple3 }}>Politique de confidentialité</Text> de BetTracker
                            </Text>
                            </TouchableOpacity>
                            <View>
                            <TouchableOpacity 
                                style={[GlobalStyles.btnPrimary, { marginBottom: 12 }, !accepted && {opacity: 0.5}]} disabled={!accepted}>
                                <Text style={GlobalStyles.btnPrimaryText}>Créer un compte </Text>
                            </TouchableOpacity>
                            </View>
                            <View style={GlobalStyles.divider}>
                                <View style={GlobalStyles.divLine} />
                                <Text style={GlobalStyles.divText}>ou continuer avec</Text>
                                <View style={GlobalStyles.divLine} />
                            </View>
                            <View style={styles.socialRow}>
                                <TouchableOpacity style={GlobalStyles.btnSecondary}>
                                <Text style={GlobalStyles.btnSecondaryText}>🍎  Apple</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={GlobalStyles.btnSecondary}>
                                <Text style={GlobalStyles.btnSecondaryText}>🌐  Google</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.alreadyAccount}>
                                <Text style={{ fontSize: 12, color: Colors.text3, textAlign: 'center' }}>
                                    Déjà un compte ? {' '} 
                                    <Text style={{ color: Colors.purple3 }} onPress={() => router.push('/(auth)/login')}>
                                        Se connecter
                                    </Text>
                                </Text>
                            </View>
                        </View> 
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header:{
        marginBottom: 1,
    },
    title: {
        color: Colors.text,
        fontSize: 24,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        gap: 10,
    },
    back: {
        width: 40,
        height: 40,
        backgroundColor: Colors.surface2,
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
        marginBottom: 20,
    },
    form: {
        gap: 10,
    },
    inputHalf: {
        flex: 1,
    },
    cguRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 5,
    },
    checkBox: {
        width: 20,
        height: 20,
        borderWidth: 1.5,
        borderRadius: 6,
        borderColor: Colors.border,
        backgroundColor: Colors.surface2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2,
    },
    checkBoxActive: {
        backgroundColor: Colors.purple,
        borderColor: Colors.purple,
    },
    cguText: {
        flex: 1,
        fontSize: 10,
        color: Colors.text3,
        lineHeight: 10,
    },
    socialRow: {
        flexDirection: 'row',
        width: '100%',
        gap: 10,
  },
  alreadyAccount: {
    marginTop: 10, 
    fontSize: 12, 
    color: Colors.text3, 
    textAlign: 'center'
  },
  inputFocused: {
        borderColor: Colors.purple2,
        backgroundColor: `${Colors.purple2}10` // version transparente de la couleur pour un effet de surbrillance
  },
});