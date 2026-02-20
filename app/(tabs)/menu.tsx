import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../../components/searchbar";

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={styles.content}>
        <Text style={styles.title}>Menu</Text>
        <Text style={styles.subtitle}>Settings and preferences</Text>
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
