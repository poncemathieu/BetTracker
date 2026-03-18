import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Colors } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from '../../constants/styles';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import BetCard from '../../components/BetCard';

const sports = [
  { label: 'Tous', emoji: '🌐' },
  { label: 'Football', emoji: '⚽' },
  { label: 'NHL', emoji: '🏒' },
  { label: 'NBA', emoji: '🏀' },
  { label: 'Tennis', emoji: '🎾' },
  { label: 'NFL', emoji: '🏈' },
  { label: 'Rugby', emoji: '🏉' },
  { label: 'Baseball', emoji: '⚾' },
];

const today = new Date().toISOString().split('T')[0];
const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];


const bets = [
  { id: 1, sport: '⚽', match: 'PSG vs Arsenal', bookmaker: 'Winamax', date: today, statut: 'Gagné' as const, cote: 1.85, mise: 50, selection: 'PSG gagne', resultat: 42.50 },
  { id: 2, sport: '🏒', match: 'Canadiens vs Bruins', bookmaker: 'Winamax', date: today, statut: 'Perdu' as const, cote: 1.85, mise: 50, selection: 'Bruins gagne', resultat: -50 },
  { id: 3, sport: '⚽', match: 'Barcelone vs Newcastle', bookmaker: 'Winamax', date: yesterday, statut: 'En cours' as const, cote: 1.59, mise: 10, selection: 'Barcelone gagne', resultat: 0 },
  { id: 4, sport: '🎾', match: 'Sinner vs Alcaraz', bookmaker: 'Winamax', date: '2026-03-01', statut: 'Gagné' as const, cote: 1.85, mise: 50, selection: '+22.5 jeux', resultat: 42.50 },
];

function getDateLabel(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day); // ← local timezone

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);

  const diffDays = Math.floor(
    (today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffDays === 0) return "Aujourd'hui";
  if (diffDays === 1) return 'Hier';
  if (diffDays === -1) return 'Demain';

  return date.toLocaleDateString(undefined, { day: '2-digit', month: 'long' });
}

export default function HistoryScreen() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [activeFiltre, setActiveFiltre] = useState('Tous');
  const filtreColors: { [key: string]: string } = {
    'Tous': Colors.purple,
    'Gagné': Colors.green,
    'Perdu': Colors.red,
    'En cours': Colors.yellow,
  };
  const [activeSport, setActiveSport] = useState('Tous');

  return (
    <SafeAreaView style={GlobalStyles.screen} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/*Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Historique</Text>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <TouchableOpacity style={styles.btnIcon}>
              <Ionicons name="download-outline" size={18} color={Colors.text} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnIcon}>
              <Ionicons name="options-outline" size={18} color={Colors.text} />
            </TouchableOpacity>
          </View>
        </View>

        {/*Recherche */}
        <TextInput
          style={[GlobalStyles.input, focusedInput === 'recherche' && GlobalStyles.inputFocused]}
          placeholder="Rechercher un pari..."
          placeholderTextColor={Colors.text3}
          keyboardType='default'
          autoCapitalize='none'
          onFocus={() => setFocusedInput('recherche')}
          onBlur={() => setFocusedInput(null)}
        />

        {/*Filtres */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.filtrePariRow}>
          {['Tous', 'Gagné', 'Perdu', 'En cours'].map((filtres) => (
            <TouchableOpacity
              key={filtres}
              style={[styles.filtrePariChip, activeFiltre === filtres && {borderColor: filtreColors[filtres]}]}
              onPress={() => setActiveFiltre(filtres)}
            >
            <Text style={[styles.filtrePariText, activeFiltre === filtres && {color: filtreColors[filtres]}]}>
              {filtres}
            </Text>
          </TouchableOpacity>
          ))}
        </View>
        </ScrollView>

        {/*Filtres sports */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filtrePariRow}>
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

        {/*Resume */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={{color: Colors.purple, fontWeight: '600'}}>47</Text>
            <Text style={styles.statLabel}>TOTAL PARIS</Text>
          </View>
          <View style={styles.separator}/>
          <View style={styles.statItem}>
            <Text style={{ color: Colors.green, fontWeight: '600'}}>+340,50</Text>
            <Text style={styles.statLabel}>PROFIT NET</Text>
          </View>
          <View style={styles.separator}/>
          <View style={styles.statItem}>
            <Text style={{color: Colors.text, fontWeight: '600'}}>61 %</Text>
            <Text style={styles.statLabel}>TAUX REUSSITE</Text>
          </View>
          <View style={styles.separator}/>
          <View style={styles.statItem}>
            <Text style={{color: Colors.cashout, fontWeight: '600'}}>+8,4 %</Text>
            <Text style={styles.statLabel}>ROI</Text>
          </View>
        </View>

        {/*Liste Pari */}
        {Object.entries(
          bets.reduce((groups, bet) => {
            const label = getDateLabel(bet.date);
            if(!groups[label]) groups[label] = [];
            groups[label].push(bet);
            return groups;
          }, {} as Record<string, typeof bets>)
        ).map(([label, groupBets]) => (
          <View key={label}>
            <Text style={styles.dateLabel}>{label}</Text>
            {groupBets.map(bet => (
              <BetCard
                key={bet.id}
                sport={bet.sport}
                match={bet.match}
                bookmaker={bet.bookmaker}
                date={bet.date}
                statut={bet.statut}
                cote={bet.cote}
                mise={bet.mise}
                selection={bet.selection}
                resultat={bet.resultat}
              />
            ))}
          </View>
        ))}
      </ScrollView> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    color: Colors.text,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  btnIcon: {
    width: 34,
    height: 34,
    backgroundColor: Colors.surface2,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filtrePariChip: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: Colors.surface2,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  filtrePariRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 1,
    paddingVertical: 8,
  },
  filtrePariText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.text3,
  },
  sportCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: Colors.surface2,
    borderWidth: 1,
    borderColor: Colors.border,
    gap: 6,
  },
  sportCardActive: {
    backgroundColor: Colors.surface2,
    borderColor: Colors.purple,
  },
  sportEmoji: {
    fontSize: 14,
  },
  sportLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.text3,
  },
  sportLabelActive: {
    color: Colors.purple,
  },
  statLabel: {
    fontSize: 10,
    color: Colors.text2,
  },
  statItem: {
    alignItems: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.surface2,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 14,
    padding: 12,
    marginTop: 12,
    marginBottom: 8,
  },
  separator: {
    width: 1,
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  dateLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.text3,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginTop: 8,
    marginBottom: 4,
  },
})