import { Image, StyleSheet, TouchableOpacity } from "react-native";

export default function CategoryCard({ image }: any) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={image} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 80,
    resizeMode: "contain",
  },
});
