import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search Amazon" style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#00A8E1",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
});
