import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import { GlobalStyles } from "../../constants/styles";
import { Colors } from "../../constants";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const sports = [
  { label: 'Football', emoji: '⚽' },
  { label: 'NHL', emoji: '🏒' },
  { label: 'NBA', emoji: '🏀' },
  { label: 'Tennis', emoji: '🎾' },
  { label: 'NFL', emoji: '🏈' },
  { label: 'Rugby', emoji: '🏉' },
  { label: 'Baseball', emoji: '⚾' },
];
LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Jan.','Fév.','Mar.','Avr.','Mai','Jun.','Jul.','Août','Sep.','Oct.','Nov.','Déc.'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
};
LocaleConfig.defaultLocale = 'fr';

export default function AddScreen() {
  const [activeSport, setActiveSport] = useState('Football');
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [activeType, setActiveType] = useState('1X2');
  const [activePourcent, setActivePourcent] = useState('1%');

  return (
    <SafeAreaView style={GlobalStyles.screen} edges={['top']}>
      <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                enableOnAndroid={true}
                extraScrollHeight={150}>
            {/* Header */}
            <View style={styles.header}>
              <TouchableOpacity style={styles.back} onPress={() => router.back()}>
                <Ionicons name="chevron-back" size={20} color={Colors.text} />
              </TouchableOpacity>
              <Text style={styles.title}>Nouveau pari</Text>
            </View>

            {/* Choix sports */}
            <View style={{ marginBottom: 5 }}>
              <Text style={GlobalStyles.label}>SPORT</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.sportsRow}>
                  {sports.map((sport) => (
                    <TouchableOpacity
                      key={sport.label}
                      style={[styles.sportCard, activeSport === sport.label && styles.sportCardActive]}
                      onPress={() => setActiveSport(sport.label)}
                    >
                      <Text style={styles.sportEmoji}>{sport.emoji}</Text>
                      <Text style={[styles.sportLabel, activeSport === sport.label && styles.sportLabelActive]}>
                        {sport.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>

            {/*Evenement */}
            <Text style={GlobalStyles.label}>ÉVÉNEMENT</Text>
            <View>
              <Text style={GlobalStyles.label}>MATCH</Text>
              <TextInput
                style={[GlobalStyles.input, focusedInput === 'match' && GlobalStyles.inputFocused]}
                placeholder="Nom du match"
                placeholderTextColor={Colors.text3}
                keyboardType="default"
                autoCapitalize="none"
                onFocus={() => setFocusedInput('match')}
                onBlur={() => setFocusedInput(null)}
              />
            </View>

            {/*Calendrier */}
            <View style={styles.dateBookRow}>
              <View style={styles.dateBookItem}>
                <Text style={GlobalStyles.label}>DATE</Text>
                <TouchableOpacity style={GlobalStyles.input} onPress={() => setShowPicker(!showPicker)}>
                  <Text style={{ color: Colors.text }}>
                  {date.toLocaleDateString(undefined, {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                  })}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.dateBookItem}>
              <Text style={GlobalStyles.label}>BOOKMAKER</Text>
              <TextInput
                style={[GlobalStyles.input, focusedInput === 'bookmaker' && GlobalStyles.inputFocused]}
                placeholder="Winamax"
                placeholderTextColor={Colors.text3}
                onFocus={() => setFocusedInput('bookmaker')}
                onBlur={() => setFocusedInput(null)}
              />
            </View>
          </View>

          {showPicker && (
            <Calendar
              onDayPress={(day) => {
                setDate(new Date(day.dateString));
                setShowPicker(false);
            }}
            style={{ borderRadius: 16, marginBottom: 24 }}
            theme={{
              backgroundColor: Colors.surface2,
              calendarBackground: Colors.surface2,
              textSectionTitleColor: Colors.text3,
              selectedDayBackgroundColor: Colors.text3,
              selectedDayTextColor: '#fff',
              todayTextColor: Colors.purple2,
              dayTextColor: Colors.text,
              arrowColor: Colors.purple,
              monthTextColor: Colors.text,
              textDayFontWeight: '600',
              textMonthFontWeight: '700',
            }}
          />
        )}
        {/*Type de pari */}
        <Text style={GlobalStyles.label}>TYPE DE PARI</Text>
        <View style={styles.typePariRow}>
          {['1X2', 'Over/Under', 'Handicap', 'Les deux marquent', 'Double chance', 'Autre'].map((type) => (
            <TouchableOpacity
              key={type}
              style={[styles.typePariChip, activeType === type && styles.typePariChipActive]}
              onPress={() => setActiveType(type)}
            >
              <Text style={[styles.typePariText, activeType === type && styles.typePariTextActive]}>
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/*Selection et cote */}
        <View style={styles.dateBookRow}>
            <View style={styles.dateBookItem}>
              <Text style={GlobalStyles.label}>SELECTION</Text>
              <TextInput
                style={[GlobalStyles.input, focusedInput === 'selection' && GlobalStyles.inputFocused]}
                placeholder="Selection"
                placeholderTextColor={Colors.text3}
                onFocus={() => setFocusedInput('selection')}
                onBlur={() => setFocusedInput(null)}
              />
            </View>
            <View style={styles.dateBookItem}>
            <Text style={GlobalStyles.label}>COTE</Text>
            <TextInput
              style={[GlobalStyles.input, focusedInput === 'cote' && GlobalStyles.inputFocused]}
              placeholder="Cote"
              placeholderTextColor={Colors.text3}
              onFocus={() => setFocusedInput('cote')}
              onBlur={() => setFocusedInput(null)}
            />
          </View>
        </View>
        {/* Card Mise */}
        <View style={styles.miseCard}>
          {/* Header mise */}
          <View style={styles.miseHeader}>
            <Text style={styles.miseTitle}>Mise</Text>
            <Text style={styles.bankrollText}>Bankroll : <Text style={styles.bankrollValue}>2 340,50 $</Text></Text>
          </View>

          {/* Input + pourcentages */}
          <View style={styles.miseRow}>
            <View style={styles.miseInput}>
              <Text style={styles.miseSymbol}>$</Text>
              <TextInput
                style={styles.miseInputText}
                keyboardType="numeric"
                placeholder="0"
                placeholderTextColor={Colors.text3}
              />
            </View>
            <View style={styles.pourcentRow}>
              {['1%', '2%', '5%', '10%'].map((p) => (
                <TouchableOpacity
                  key={p}
                  style={[styles.pourcentChip, activePourcent === p && styles.pourcentChipActive]}
                  onPress={() => setActivePourcent(p)}
                >
                  <Text style={[styles.pourcentText, activePourcent === p && styles.pourcentTextActive]}>
                    {p}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Résumé */}
          <View style={styles.miseResume}>
            <View style={styles.miseResumeItem}>
              <Text style={styles.miseResumeValue}>0,00 $</Text>
              <Text style={styles.miseResumeLabel}>Mise</Text>
            </View>
            <View style={styles.miseResumeItem}>
              <Text style={[styles.miseResumeValue, { color: Colors.green }]}>+0,00 $</Text>
              <Text style={styles.miseResumeLabel}>Gain net</Text>
            </View>
            <View style={styles.miseResumeItem}>
              <Text style={[styles.miseResumeValue, { color: Colors.purple2 }]}>0,00 $</Text>
              <Text style={styles.miseResumeLabel}>Retour total</Text>
            </View>
          </View>
        </View>

        {/*Enregistrer */}
        <TouchableOpacity 
            style={[GlobalStyles.btnPrimary, { marginBottom: 12 }]}> 
            <Text style={GlobalStyles.btnPrimaryText}>Enregistrer le pari </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 15
  },
  title: {
    color: Colors.text,
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 12,
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
  },
  sportsRow: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 8,
  },
  sportCard: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: Colors.surface2,
    borderWidth: 1,
    borderColor: Colors.border,
    minWidth: 80,
  },
  sportCardActive: {
    backgroundColor: Colors.surface2,
    borderColor: Colors.purple,
  },
  sportEmoji: {
    fontSize: 28,
    marginBottom: 4,
  },
  sportLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.text3,
  },
  sportLabelActive: {
    color: Colors.purple,
  },
  dateBookRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  dateBookItem: {
    flex: 1,
  },
  typePariRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 24,
  },
  typePariChip: {
    overflow: 'hidden',
    width: '30%',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: Colors.surface2,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  typePariChipActive: {
    borderWidth: 1,
   // backgroundColor: Colors.surface2,
    borderColor: Colors.purple,
  },
  typePariText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.text3,
  },
  typePariTextActive: {
    color: Colors.purple
  },
  miseCard: {
  backgroundColor: Colors.surface2,
  borderWidth: 1,
  borderColor: Colors.border,
  borderRadius: 18,
  padding: 16,
  marginBottom: 24,
},
miseHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 12,
},
miseTitle: {
  fontSize: 15,
  fontWeight: '700',
  color: Colors.text,
},
bankrollText: {
  fontSize: 12,
  color: Colors.text3,
},
bankrollValue: {
  color: Colors.purple2,
  fontWeight: '700',
},
miseRow: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 12,
  marginBottom: 16,
},
miseInput: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: Colors.bg,
  borderWidth: 1,
  borderColor: Colors.purple,
  borderRadius: 12,
  padding: 10,
  minWidth: 50,
},
miseSymbol: {
  fontSize: 16,
  fontWeight: '700',
  color: Colors.text,
  marginRight: 6,
},
miseInputText: {
  fontSize: 18,
  fontWeight: '700',
  color: Colors.text,
  minWidth: 50,
},
pourcentRow: {
  flexDirection: 'row',
  gap: 6,
},
pourcentChip: {
  paddingVertical: 6,
  paddingHorizontal: 10,
  borderRadius: 8,
  backgroundColor: Colors.bg,
  borderWidth: 1,
  borderColor: Colors.border,
},
pourcentChipActive: {
  backgroundColor: Colors.purple,
  borderColor: Colors.purple,
},
pourcentText: {
  fontSize: 15,
  fontWeight: '600',
  color: Colors.text3,
},
pourcentTextActive: {
  color: '#fff',
},
miseResume: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderTopWidth: 1,
  borderTopColor: Colors.border,
  paddingTop: 12,
},
miseResumeItem: {
  alignItems: 'center',
},
miseResumeValue: {
  fontSize: 13,
  fontWeight: '700',
  color: Colors.text,
},
miseResumeLabel: {
  fontSize: 10,
  color: Colors.text3,
  marginTop: 2,
},
});