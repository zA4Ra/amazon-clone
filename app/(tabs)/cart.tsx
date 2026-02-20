import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../../components/searchbar";

export default function CartTab() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={styles.content}>
        <Text style={styles.title}>Your Cart is Empty</Text>
        <Text style={styles.subtitle}>Browse products and add items to your cart</Text>
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
