import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants";
import { StyleSheet, View, Text } from "react-native";

interface BetCardProps {
    sport: string;
    match: string;
    bookmaker: string;
    date: string;
    statut: 'Gagné' | 'Perdu' | 'En cours' | 'Cash out';
    cote: number;
    mise: number;
    selection: string;
    resultat: number;
}

export default function BetCard({ sport, match, bookmaker, date, statut, cote, mise, selection, resultat }: BetCardProps) {

    const statutConfig = {
        'Gagné':    { color: Colors.green,  icon: 'checkmark-circle', bg: 'rgba(34,197,94,0.1)' },
        'Perdu':    { color: Colors.red,    icon: 'close-circle',     bg: 'rgba(239,68,68,0.1)' },
        'En cours': { color: Colors.yellow, icon: 'time-outline',     bg: 'rgba(245,158,11,0.1)' },
        'Cash out': { color: Colors.cashout,icon: 'cash-outline',     bg: 'rgba(163,230,53,0.1)' },
    };

    const config = statutConfig[statut];
    const isPositive = resultat >= 0;

    return (
        <View style={[styles.card, { borderLeftColor: config.color }]}>
            {/*Top */}
            <View style={styles.top}>
                <View style={styles.matchInfo}>
                    <Text style={styles.sportIcon}>{sport}</Text>
                    <View>
                        <Text style={styles.match}>{match}</Text>
                        <Text style={styles.meta}>
                            {bookmaker} · {new Date(date).toLocaleDateString(undefined, {day: '2-digit', month: 'short'})}
                        </Text>
                    </View>
                </View>
                <View style={[styles.badge, { backgroundColor: config.bg }]}>
                    <Ionicons name={config.icon as any} size={12} color={config.color}/>
                    <Text style={[styles.badgeText, { color: config.color }]}>{statut}</Text>
                </View>
            </View>

            {/*Bottom */}
            <View style={styles.bottom}>
                <View style={styles.details}>
                    <View>
                        <Text style={styles.detailVal}>Cote {cote}</Text>
                    </View>
                    <View>
                        <Text style={styles.detailVal}>Mise {mise.toFixed(2)} $</Text>
                    </View>
                </View>
                <Text style={styles.selection}>{selection}</Text>
                <Text style={[styles.resultat, { 
                    color: statut === 'En cours' ? Colors.yellow
                    : statut === 'Perdu' ? Colors.red
                    : statut === 'Cash out' ? Colors.cashout
                    : Colors.green}]}>
                    {statut === 'En cours'
                        ? `+${(cote * mise - mise).toFixed(2)} $`
                        : statut === 'Perdu'
                            ? `-${mise.toFixed(2)} $`
                            : `+${resultat.toFixed(2)} $`
                    }
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface2,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    borderLeftWidth: 4,
    padding: 13,
    gap: 10,
    marginBottom: 8,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  matchInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  sportIcon: {
    fontSize: 18,
  },
  match: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.text,
  },
  meta: {
    fontSize: 10,
    color: Colors.text3,
    marginTop: 1,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  details: {
    flexDirection: 'row',
    gap: 8,
  },
  detailVal: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.text2,
    backgroundColor: Colors.surface3,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  selection: {
    fontSize: 11,
    color: Colors.text3,
    flex: 1,
    textAlign: 'center',
  },
  resultat: {
    fontSize: 14,
    fontWeight: '800',
  },
});