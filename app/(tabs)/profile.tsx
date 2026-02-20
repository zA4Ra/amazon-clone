import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../../components/searchbar";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={styles.content}>
        <Text style={styles.title}>Your Account</Text>
        <Text style={styles.subtitle}>Sign in to access your account</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEDED",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0F1111",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#565959",
  },
});
