# BetTracker 📊

Application mobile de suivi et d'analyse de paris sportifs.

## Stack technique

### Frontend
- **React Native** avec Expo
- **TypeScript**
- **Expo Router** pour la navigation
- **Zustand** pour le state management *(à venir)*
- **React Query** pour les appels API *(à venir)*

### Backend
- **Spring Boot 4.0** avec Java 21
- **Spring Security** + **JWT** pour l'authentification
- **Spring Data JPA** + **Hibernate**
- **PostgreSQL** via Docker

## Fonctionnalités

- 📈 Suivi de bankroll en temps réel
- 🎯 Calcul automatique du ROI
- 📊 Statistiques par sport et bookmaker
- 📋 Historique des paris avec filtres
- 🔐 Authentification sécurisée JWT

## Structure du projet
```
BetTracker/
├── bettracker-mobileOld/    # Frontend React Native
└── bettracker-api/          # Backend Spring Boot
```

## Lancer le projet

### Backend
```bash
docker-compose up -d
cd bettracker-api/api
./mvnw spring-boot:run
```

### Frontend
```bash
cd bettracker-mobileOld
npx expo start
```
