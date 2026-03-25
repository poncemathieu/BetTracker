# BetTracker 📊

Application mobile de suivi et d'analyse de paris sportifs.

## Stack technique

- **React Native** avec Expo
- **TypeScript**
- **Expo Router** pour la navigation
- **Zustand** pour le state management *(à venir)*
- **React Query** pour les appels API *(à venir)*
- **Spring Boot** pour le backend *(à venir)*

## Fonctionnalités

- ✅ Authentification (login / inscription)
- 🚧 Dashboard - suivi de bankroll en temps réel
- ⏳ Historique des paris avec filtres
- ⏳ Statistiques avancées (ROI, taux de réussite)
- ⏳ Graphique d'évolution de la bankroll
- ⏳ Ajout rapide de paris
- ⏳ Support iOS et Android

## Installation
```bash
# Cloner le repo
git clone https://github.com/poncemathieu/BetTracker.git

# Aller dans le dossier
cd bettracker-mobile

# Installer les dépendances
npm install --legacy-peer-deps

# Lancer le projet
npx expo start --clear
```

## Structure du projet
```
bettracker-mobile/
├── app/
│   ├── (auth)/        ← Login, Register
│   ├── (tabs)/        ← Dashboard, Historique, Stats, Profil
│   └── _layout.tsx
├── components/        ← Composants réutilisables
├── constants/         ← Couleurs, styles globaux
├── hooks/             ← Hooks personnalisés
├── services/          ← Appels API
├── store/             ← State global Zustand
├── types/             ← Interfaces TypeScript
└── utils/             ← Fonctions utilitaires
```

## Lancer sur son téléphone

1. Installer **Expo Go** sur iOS ou Android
2. Lancer `npx expo start --clear`
3. Scanner le QR code avec Expo Go
