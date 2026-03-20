import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from '../../constants/styles';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const dataTime =  ["1A", "3M", "1M", "7J", "1J"];
const sportStats = [
  { label: 'Football', emoji: '⚽', paris: 18, taux: 67 },
  { label: 'NBA', emoji: '🏀', paris: 12, taux: 58 },
  { label: 'NHL', emoji: '🏒', paris: 9, taux: 44 },
  { label: 'Tennis', emoji: '🎾', paris: 8, taux: 38 },
];

export default function StatsScreen() {
  
const [activeFilter, setActiveFilter] = useState('1A');
  return (
    <SafeAreaView style={GlobalStyles.screen} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/*Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Statistiques</Text>
          <View style={{ flexDirection: 'row', gap: 8 }}>
          </View>
        </View>

        <View style={styles.filterRow}>
          {dataTime.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[styles.filterChip, activeFilter === filter && styles.filterChipActive]}
              onPress={() => setActiveFilter(filter)}
            >
              <Text style={[styles.filterText, activeFilter === filter && styles.filterTextActive]}>
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/*Statistics Card*/}
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={{fontSize: 22}}>📈</Text>
            <Text style={styles.statValuePositive}>+8,5 %</Text>
            <Text style={styles.statLabel}>ROI</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={{fontSize: 22}}>🎯</Text>
            <Text style={styles.statValue}>61 %</Text>
            <Text style={styles.statLabel}>Taux de réussite</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={{fontSize: 22}}>💰</Text>
            <Text style={styles.statValuePositive}>+128,00 €</Text>
            <Text style={styles.statLabel}>Profit ce mois</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={{fontSize: 22}}>🏆</Text>
            <Text style={styles.statWin}>18</Text>
            <Text style={styles.statLabel}>Paris ce mois</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={{fontSize: 22}}>📊</Text>
            <Text style={styles.statValuePositive}>1,85</Text>
            <Text style={styles.statLabel}>Cote moyenne</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={{fontSize: 22}}>💸</Text>
            <Text style={styles.statValue}>47,50 $</Text>
            <Text style={styles.statLabel}>Mise moyenne</Text>
          </View>
        </View>

        {/*Par sport */}
          <Text style={styles.subTitle}>Par sport</Text>
          {sportStats.map((sport) => (
            <View key={sport.label} style={styles.statCardSport}>
              <View style={styles.sportLeft}>
                <Text style={{ fontSize: 18 }}>{sport.emoji}</Text>
                <View>
                  <Text style={styles.sportName}>{sport.label}</Text>
                  <Text style={styles.sportCount}>{sport.paris} paris</Text>
                </View>
              </View>
              <View style={styles.sportRight}>
                <View style={styles.barBg}>
                  <View style={[styles.barFill, { width: `${sport.taux}%` }]}/>
                </View>
                <Text style={styles.sportPct}>{sport.taux} %</Text>
              </View>
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
  },
  subTitle: {
    fontSize: 18,
    color: Colors.text,
    fontWeight: 'bold',
    margin: 15
  },
  filterRow: {
    flexDirection: 'row-reverse',
    gap: 8,
    marginBottom: 8,
    marginRight: 8,
  },
  filterChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: Colors.surface2,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  filterChipActive: {
    backgroundColor: Colors.purple,
    borderColor: Colors.purple,
  },
  filterText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.text3,
  },
  filterTextActive: {
    color: '#fff',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  statCard: {
    width: '47.5%',
    backgroundColor: Colors.surface2,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 18,
    padding: 16,
  },
  statCardSport: {
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
  statValue: {
    color: Colors.purple,
    fontWeight: 600,
    fontSize: 20
  },
  statValuePositive: {
    fontSize: 20,
    color: Colors.green,
  },
  statValueCroissance: {
    color: Colors.purple,
    fontWeight: 600,
  },
  statWin: {
    color: Colors.yellow,
    fontWeight: 600,
    fontSize: 20
  },
  statLabel: {
    fontSize: 10,
    color: Colors.text2,
  },
  barFill: {
    height: 6,
    backgroundColor: Colors.purple,
    borderRadius: 3,
  },
  sportLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  sportName: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.text,
  },
  sportCount: {
    fontSize: 10,
    color: Colors.text3,
    marginTop: 1,
  },
  sportRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: 220,
    marginLeft: 16,
  },
  barBg: {
    height: 4,
    flex: 1,
    backgroundColor: Colors.surface3,
    borderRadius: 2,
    overflow: 'hidden',
  },
  sportPct: {
    fontSize: 12,
    fontWeight: '700',
    minWidth: 36,
    color: Colors.purple2,
  },
});