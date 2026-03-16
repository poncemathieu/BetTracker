import { StyleSheet } from 'react-native';
import { Colors } from './index';

export const GlobalStyles = StyleSheet.create({

  // Containers
  screen: {
    flex: 1,
    backgroundColor: Colors.bg,
    paddingHorizontal: 24,
  },

  // Typographie
  label: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: Colors.text3,
    marginBottom: 6,
    marginTop: 6,
  },

  // Inputs
  input: {
    backgroundColor: Colors.surface2,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 14,
    padding: 14,
    color: Colors.text,
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
  },
  inputFocused: {
      borderColor: Colors.purple2,
      backgroundColor: `${Colors.purple2}10` // version transparente de la couleur pour un effet de surbrillance
  },

  // Boutons
  btnPrimary: {
     width: '100%',
     backgroundColor: Colors.purple,
     borderRadius: 16,
     paddingVertical: 16,
     alignItems: 'center',

  },
  btnPrimaryText: {
    color: '#fff',
    fontSize: 16,
    alignItems: 'center',
    fontWeight: '700',

  },
  btnSecondary: {
    flex: 1,
    backgroundColor: Colors.surface2,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
  },
  btnSecondaryText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
  },
  btnSection: {
    gap: 16,
    alignItems: 'center',
  },

  // Tab switcher
  tabs: {
    flexDirection: 'row',
    backgroundColor: Colors.surface2,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 16,
    padding: 4,
  },
  tab: {
    flex: 1,
    padding: 11,
    borderRadius: 12,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: Colors.purple,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text3,
  },
  tabActiveText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
  },

  // Divider
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  divLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.border,
  },
  divText: {
    fontSize: 12,
    color: Colors.text3,
    marginTop: -10,
  },

});