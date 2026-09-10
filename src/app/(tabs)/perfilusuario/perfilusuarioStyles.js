import { StyleSheet } from 'react-native';

const perfilusuarioStyles   = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "#F1F1EF",
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 12,
    paddingBottom: 16,
  },

  backButton: {
    position: "absolute",
    left: 20,
    padding: 4,
  },

  backButtonText: {
    fontSize: 22,
    color: "#C41E4F",
    fontWeight: "700",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#4A7FA5",
  },

  scrollContent: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 24,
  },

  avatarWrap: {
    width: 130,
    height: 130,
    borderRadius: 65,
    overflow: "hidden",
    marginBottom: 14,
  },

  avatarImage: {
    width: "100%",
    height: "100%",
  },

  avatarPlaceholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#D9D3D9",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarPlaceholderText: {
    fontSize: 36,
    fontWeight: "700",
    color: "#4A7FA5",
  },

  nomeRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  nome: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2E2E2E",
  },

  editButton: {
    marginLeft: 8,
    padding: 4,
  },

  editButtonText: {
    fontSize: 16,
    color: "#C41E4F",
  },

  usuario: {
    fontSize: 14,
    color: "#8A8A87",
    marginTop: 2,
    marginBottom: 18,
  },

  statsRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginBottom: 18,
  },

  statItem: {
    alignItems: "center",
  },

  statNumero: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2E2E2E",
  },

  statLabel: {
    fontSize: 13,
    color: "#8A8A87",
    marginTop: 2,
  },

  bio: {
    fontSize: 14,
    color: "#C41E4F",
    fontWeight: "600",
    marginBottom: 20,
  },

  tabsRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  tabButton: {
    padding: 8,
  },

  tabButtonAtiva: {
    borderBottomWidth: 2,
    borderBottomColor: "#C41E4F",
  },

  tabIcon: {
    fontSize: 20,
    color: "#C41E4F",
  },

  
});

export default perfilusuarioStyles;