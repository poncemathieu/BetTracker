import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Colors } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LineChart } from 'react-native-gifted-charts';
import { useState } from 'react';
import { chartData7J, chartData1M, chartData3M, chartData1A } from '../../mock';
import { LinearGradient } from 'expo-linear-gradient';
import { GlobalStyles } from '../../constants/styles';
import { Color, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


export default function DashboardScreen() {
  const width = Dimensions.get('window').width;

  const dataTime = ["1A", "3M", "1M", "7J"];
  const [activeFilter, setActiveFilter] = useState('1A');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
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
            <View style={styles.separator}/>
            <View style={styles.statItem}>
              <Text style={{color: Colors.text, fontWeight: '600'}}>47</Text>
              <Text style={styles.statLabel}>PARIS</Text>
            </View>
            </View>
        </LinearGradient>
        {/*Statistics Card*/}
        <View style={styles.header}>
          <Text style={styles.title}>Statistiques</Text>
          <Text style={{color: Colors.purple2}}>Ce mois</Text>
        </View>
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Ionicons name="swap-vertical-outline" size={22} color={Colors.text2} />
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
        </View>
        <View style={styles.header}>
          <Text style={styles.title}>Evolution bankroll</Text>
        </View>
        {/* Graphic Bankroll */}
        
        <View style={styles.cardGraphBankroll}>
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
          <View style={styles.chartContainer}>
            <LineChart
                data={chartData1A}
                width={width - 64}
                height={180}
                color={Colors.purple2}
                thickness={2.5}
                startFillColor={Colors.purple2}
                endFillColor="transparent"
                startOpacity={0.3}
                endOpacity={0}
                areaChart
                hideDataPoints
                hideRules
                // Axe X (dates)
                hideAxesAndRules={false}
                xAxisColor={Colors.border}
                xAxisLabelTextStyle={{ color: Colors.text3, fontSize: 9 }}
                // Axe Y (valeurs)
                hideYAxisText={false}
                noOfSections={4}
                yAxisTextStyle={{ color: Colors.text3, fontSize: 9 }}
                yAxisColor="transparent"
                rulesColor={Colors.border}
                rulesType="solid"
                curved
                isAnimated/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
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
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.text,
    marginTop: 2,
    marginLeft: 12,
    letterSpacing: -0.5,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    padding: 16,
  },
  statCard: {
    width: '47.5%',
    backgroundColor: Colors.surface2,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 18,
    padding: 16,
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
  chartContainer: {
    marginTop: 8,
    marginBottom: 16,
    height: 205,
    overflow: 'hidden'
  },
  cardGraphBankroll: {
    backgroundColor: Colors.surface2,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 18,
    paddingVertical: 16,
    margin: 16,
  },

});