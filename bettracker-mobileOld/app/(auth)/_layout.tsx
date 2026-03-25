import { View, Text, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { Colors } from "../../constants";

interface TabIconProps {
    emoji: string;
    label: string;
    focused: boolean;
}

function TabIcon({ emoji, label, focused }: TabIconProps) {
    return (
        <View style={styles.tabItem}>
            <Text style={[ styles.emoji, focused && styles.emojiFocused]}>{emoji}</Text>
            <Text style={[ styles.label, focused && styles.labelFocused]}>{label}</Text>
        </View>
    );
}

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: Colors.surface2,
                    borderTopColor: Colors.border,
                    borderTopWidth: 1,
                    height: 72,
                    paddingBottom: 12,
                },
                tabBarShowLabel: false,
            }}
        >
            <Tabs.Screen
                name="dashboard"
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon emoji="🏠" label="Acceuil" focused={focused} />,
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon emoji="📋" label="Historique" focused={focused} />,
                }}
            />
            <Tabs.Screen
                name="add"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.addBtn}>
                            <Text style={{ fontSize: 22 }}>➕</Text>
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="stats"
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon emoji="📊" label="Statistiques" focused={focused} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon emoji="👤" label="Profil" focused={focused} />,
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabItem: { alignItems: 'center', gap: 3 },
    emoji: { fontSize: 22, opacity: 0.5 },
    emojiFocused: { opacity: 1 },
    label: { fontSize: 9, color: Colors.text3, fontWeight: '600' },
    labelFocused: { color: Colors.purple2 },
    addBtn: {
        width: 52,
        height: 52,
        backgroundColor: Colors.purple,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
        shadowColor: Colors.purple,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.45,
        shadowRadius: 12,
        elevation: 8,
    },
});