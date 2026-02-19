import { Image, StyleSheet, View } from "react-native";

export default function DealCard({ image }: any) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 140,
    height: 140,
    backgroundColor: "white",
    borderRadius: 10,
    marginRight: 10,
    padding: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
