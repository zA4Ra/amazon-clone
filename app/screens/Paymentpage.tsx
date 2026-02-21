import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

type DeliveryOption = {
  id: string;
  date: string;
  label: string;
  fee: number;
};

export default function Paymentpage() {
  const router = useRouter();
  const params = useLocalSearchParams();

  // Data coming from Cart (Addtocart.tsx)
  const title = String(params?.title ?? "Item");
  const price = Number(params?.price ?? 0);
  const qty = Number(params?.qty ?? 1);

  // Delivery options (similar to the screenshots)
  const deliveryOptions: DeliveryOption[] = [
    { id: "free", date: "Wednesday, Feb 25", label: "FREE Shipping", fee: 0 },
    { id: "std", date: "Monday, Feb 23", label: "$6.54 Delivery", fee: 6.54 },
    { id: "fast", date: "Tomorrow, Feb 22", label: "$10.54 Delivery", fee: 10.54 },
    {
      id: "early",
      date: "Tomorrow 4 a.m. - 8 a.m.",
      label: "$11.99 Fastest delivery",
      fee: 11.99,
    },
  ];

  const [selectedDeliveryId, setSelectedDeliveryId] = useState<string>("std");

  const selectedDelivery = useMemo(() => {
    return deliveryOptions.find((d) => d.id === selectedDeliveryId) ?? deliveryOptions[1];
  }, [selectedDeliveryId]);

  // Totals
  const itemsTotal = useMemo(() => price * qty, [price, qty]);
  const shipping = useMemo(() => selectedDelivery.fee, [selectedDelivery]);
  const tax = useMemo(() => Number(((itemsTotal + shipping) * 0.05).toFixed(2)), [itemsTotal, shipping]); // 5% GST
  const orderTotal = useMemo(() => Number((itemsTotal + shipping + tax).toFixed(2)), [itemsTotal, shipping, tax]);

  const placeOrder = () => {
  router.push({
    pathname: "/screens/OrderPlaced",
    params: {
      name: "XYZ",
      address: "SAIT, Calgary, Alberta, Canada",
      phone: "+12225555456",
      delivery: selectedDelivery.date,
    },
  });
};

  return (
    <View style={styles.page}>
      {/* Orange header like Amazon */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.headerBtnWrap}>
          <Text style={styles.headerArrow}>←</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.back()} style={styles.headerBtnWrap}>
          <Text style={styles.headerCancel}>CANCEL</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Links */}
        <View style={styles.section}>
          <Text style={styles.link}>Change delivery address</Text>
          <Text style={styles.link}>Add delivery instructions</Text>
        </View>

        {/* Delivery options */}
        <View style={styles.section}>
          <Text style={styles.arrivingTitle}>Arriving Feb 23, 2026</Text>
          <Text style={styles.arrivingSub}>If you order in the next 18 hours and 48 minutes</Text>

          {deliveryOptions.map((opt) => {
            const active = opt.id === selectedDeliveryId;
            return (
              <TouchableOpacity
                key={opt.id}
                style={styles.deliveryRow}
                onPress={() => setSelectedDeliveryId(opt.id)}
                activeOpacity={0.85}
              >
                <View style={[styles.radioOuter, active && styles.radioOuterActive]}>
                  {active ? <View style={styles.radioInner} /> : null}
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={styles.deliveryDate}>{opt.date}</Text>
                  <Text style={styles.deliveryLabel}>{opt.label}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Item card */}
        <View style={styles.itemCard}>
          <Image source={require("../../assets/images/img/coffeemaker.jpg")} style={styles.itemImg} />

          <View style={{ flex: 1 }}>
            <Text style={styles.itemTitle} numberOfLines={4}>
              {title}
            </Text>

            <View style={styles.dealBadge}>
              <Text style={styles.dealBadgeText}>Limited-time deal</Text>
            </View>

            <Text style={styles.itemPrice}>${price.toFixed(2)}</Text>
            <Text style={styles.meta}>Ships from Amazon.ca</Text>
            <Text style={styles.meta}>Sold by Shenzhen Quhua Technology Co., Ltd.</Text>

            <View style={styles.qtyPill}>
              <Text style={styles.qtyIcon}>🗑</Text>
              <Text style={styles.qtyNum}>{qty}</Text>
              <Text style={styles.qtyIcon}>＋</Text>
            </View>
          </View>
        </View>

        {/* Place order */}
        <TouchableOpacity style={styles.placeOrderBtn} onPress={placeOrder}>
          <Text style={styles.placeOrderText}>Place your order</Text>
        </TouchableOpacity>

        <Text style={styles.terms}>
          By placing your order, you agree to Amazon&apos;s{" "}
          <Text style={styles.linkInline}>privacy notice</Text> and{" "}
          <Text style={styles.linkInline}>conditions of use</Text>.
        </Text>

        {/* Totals */}
        <View style={styles.section}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLeft}>Items:</Text>
            <Text style={styles.totalRight}>${itemsTotal.toFixed(2)}</Text>
          </View>

          <View style={styles.totalRow}>
            <Text style={styles.totalLeft}>Shipping & Handling:</Text>
            <Text style={styles.totalRight}>${shipping.toFixed(2)}</Text>
          </View>

          <View style={styles.totalRow}>
            <Text style={styles.totalLeft}>Estimated GST/HST:</Text>
            <Text style={styles.totalRight}>${tax.toFixed(2)}</Text>
          </View>

          <View style={styles.totalRowBig}>
            <Text style={styles.totalBigLeft}>Order Total:</Text>
            <Text style={styles.totalBigRight}>${orderTotal.toFixed(2)}</Text>
          </View>
        </View>

        {/* Payment method + address (like screenshot text sections) */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Paying with Visa 0731</Text>
          <Text style={styles.link}>Change payment method</Text>
          <Text style={styles.link}>Use a gift card, voucher, or promo code</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Delivering to XYZ</Text>
          <Text style={styles.addr}>SAIT, Calgary, AB,</Text>
          <Text style={styles.addr}>Calgary, Alberta, Canada</Text>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },

  header: {
    height: Platform.OS === "android" ? 54 : 72,
    paddingTop: Platform.OS === "android" ? 10 : 28,
    backgroundColor: "#ff7a00",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
  },
  headerBtnWrap: { padding: 4 },
  headerArrow: { fontSize: 22, fontWeight: "900", color: "#000" },
  headerCancel: { fontSize: 16, fontWeight: "900", color: "#000" },

  container: { padding: 14, gap: 12 },

  section: { paddingVertical: 6 },

  link: { color: "#007185", fontSize: 16, marginBottom: 8 },
  linkInline: { color: "#007185" },

  arrivingTitle: { fontSize: 22, fontWeight: "900", marginBottom: 6 },
  arrivingSub: { fontSize: 14, color: "#333", marginBottom: 10 },

  deliveryRow: { flexDirection: "row", gap: 12, paddingVertical: 10, alignItems: "flex-start" },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#bbb",
    marginTop: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  radioOuterActive: { borderColor: "#007185" },
  radioInner: { width: 12, height: 12, borderRadius: 6, backgroundColor: "#007185" },
  deliveryDate: { fontSize: 18, fontWeight: "900" },
  deliveryLabel: { fontSize: 16, color: "#333", marginTop: 2 },

  itemCard: {
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    padding: 12,
    flexDirection: "row",
    gap: 12,
  },
  itemImg: { width: 110, height: 130, resizeMode: "contain" },
  itemTitle: { fontSize: 16, fontWeight: "900", color: "#0F1111" },
  dealBadge: {
    backgroundColor: "#CC0C39",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 10,
    alignSelf: "flex-start",
  },
  dealBadgeText: { color: "#fff", fontWeight: "900", fontSize: 12 },
  itemPrice: { fontSize: 22, fontWeight: "900", marginTop: 10 },
  meta: { fontSize: 14, color: "#444", marginTop: 4 },

  qtyPill: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    borderWidth: 1,
    borderColor: "#ffd400",
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 14,
    alignSelf: "flex-start",
  },
  qtyIcon: { fontSize: 18 },
  qtyNum: { fontSize: 18, fontWeight: "900" },

  placeOrderBtn: {
    backgroundColor: "#FFD814",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 6,
  },
  placeOrderText: { fontSize: 18, fontWeight: "900" },

  terms: { fontSize: 14, color: "#111", lineHeight: 20, marginTop: 8 },

  totalRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 8 },
  totalRowBig: { flexDirection: "row", justifyContent: "space-between", marginTop: 14 },
  totalLeft: { fontSize: 18 },
  totalRight: { fontSize: 18, fontWeight: "800" },
  totalBigLeft: { fontSize: 26, fontWeight: "900" },
  totalBigRight: { fontSize: 26, fontWeight: "900" },

  sectionHeader: { fontSize: 22, fontWeight: "900", marginBottom: 10 },
  addr: { fontSize: 16, color: "#111", marginBottom: 4 },
});