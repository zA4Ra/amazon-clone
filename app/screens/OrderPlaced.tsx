import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function OrderPlaced() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const name = String(params?.name ?? "Mayur");
  const address = String(params?.address ?? "63 Savanna Pr NE, Calgary, AB T3J 0V8");
  const phone = String(params?.phone ?? "+1825XXXXXXX");
  const delivery = String(params?.delivery ?? "Monday, Feb. 23");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.check}>✅</Text>
        <Text style={styles.title}>Order placed, thanks.</Text>
      </View>

      <Text style={styles.sub}>Confirmation will be sent to your email.</Text>

      <View style={styles.card}>
        <View style={{ flex: 1 }}>
          <Text style={styles.bold}>Shipping to {name},</Text>
          <Text style={styles.text}>{address}</Text>
          <Text style={styles.text}>Phone number: {phone}</Text>

          <View style={styles.divider} />

          <Text style={styles.bold}>{delivery}</Text>
          <Text style={styles.text}>Estimated delivery</Text>

          <Text style={styles.link}>Review or edit your recent orders</Text>
        </View>

        <Image
          source={require("../../assets/images/img/coffeemaker.jpg")}
          style={styles.img}
        />
      </View>

      <Text style={styles.recTitle}>Recommended for you based on items you bought</Text>

      <View style={styles.recRow}>
        <View style={styles.recCard}>
          <Text style={styles.recText}>Screen Protector...</Text>
          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addBtnText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.recCard}>
          <Text style={styles.recText}>Smart Watch Band...</Text>
          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addBtnText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.homeBtn} onPress={() => router.push("/(tabs)")}>
        <Text style={styles.homeBtnText}>Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: "#fff", gap: 12 },
  titleRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  check: { fontSize: 24 },
  title: { fontSize: 26, fontWeight: "900", color: "#0f6b3b" },
  sub: { fontSize: 16, color: "#222" },

  card: {
    flexDirection: "row",
    gap: 12,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    padding: 12,
    alignItems: "flex-start",
  },
  img: { width: 90, height: 90, resizeMode: "contain", marginTop: 6 },
  bold: { fontSize: 18, fontWeight: "900" },
  text: { fontSize: 16, color: "#222", marginTop: 2 },
  divider: { height: 1, backgroundColor: "#eee", marginVertical: 10 },
  link: { marginTop: 10, color: "#007185", fontSize: 16 },

  recTitle: { fontSize: 20, fontWeight: "900", marginTop: 10 },
  recRow: { flexDirection: "row", gap: 12 },
  recCard: { flex: 1, borderWidth: 1, borderColor: "#eee", borderRadius: 10, padding: 12, gap: 10 },
  recText: { fontSize: 16, fontWeight: "800" },

  addBtn: { backgroundColor: "#FFD814", paddingVertical: 12, borderRadius: 24, alignItems: "center" },
  addBtnText: { fontSize: 16, fontWeight: "900" },

  homeBtn: { backgroundColor: "#232F3E", paddingVertical: 14, borderRadius: 28, alignItems: "center", marginTop: 10 },
  homeBtnText: { color: "#fff", fontSize: 16, fontWeight: "900" },
});